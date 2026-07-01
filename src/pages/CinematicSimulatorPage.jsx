import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import StepMap from '../components/simulator/StepMap';
import SceneStage from '../components/simulator/SceneStage';
import ExamInsightPanel from '../components/simulator/ExamInsightPanel';
import SceneTimeline from '../components/simulator/SceneTimeline';
import { cinematicFlows, findFlowById, findStepById } from '../data/cinematicActsFlow';

const initialScore = {
  correct: 0,
  wrong: 0,
  traps: [],
  answers: [],
};

function createEvent(type, label, detail) {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type,
    label,
    detail,
    time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
  };
}

function buildRecommendedReview(score) {
  const weak = new Set();
  score.answers.forEach((answer) => {
    if (!answer.correct) {
      weak.add(answer.topic || 'Tema jurídico do fluxo');
    }
  });
  if (weak.size === 0) {
    weak.add('Refazer o fluxo em modo prova e revisar as pegadinhas acionadas.');
  }
  return Array.from(weak);
}

export default function CinematicSimulatorPage() {
  const [selectedFlowId, setSelectedFlowId] = useState(cinematicFlows[0].id);
  const activeFlow = useMemo(() => findFlowById(selectedFlowId), [selectedFlowId]);
  const steps = activeFlow.steps;
  const [currentStepId, setCurrentStepId] = useState(cinematicFlows[0].steps[0].id);
  const [visitedIds, setVisitedIds] = useState([steps[0].id]);
  const [events, setEvents] = useState([createEvent('start', 'Simulador pronto', 'Clique em executar cena para iniciar a etapa atual.')]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [lastFeedback, setLastFeedback] = useState(null);
  const [revealTrap, setRevealTrap] = useState(false);
  const [examMode, setExamMode] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answeredStepIds, setAnsweredStepIds] = useState([]);
  const [score, setScore] = useState(initialScore);
  const [autoPlay, setAutoPlay] = useState(false);
  const autoPlayTimersRef = useRef([]);

  const currentStep = useMemo(() => findStepById(currentStepId, activeFlow), [currentStepId, activeFlow]);
  const currentIndex = steps.findIndex((step) => step.id === currentStepId);
  const progress = Math.round(((currentIndex + 1) / steps.length) * 100);
  const answeredCount = score.correct + score.wrong;
  const percent = answeredCount ? Math.round((score.correct / answeredCount) * 100) : 0;
  const recommendedReview = buildRecommendedReview(score);

  useEffect(() => () => {
    autoPlayTimersRef.current.forEach((timer) => window.clearTimeout(timer));
  }, []);

  function clearAutoPlayTimers() {
    autoPlayTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    autoPlayTimersRef.current = [];
  }

  function pushEvent(event) {
    setEvents((items) => [...items, event].slice(-14));
  }

  function goToStep(stepId, event) {
    const step = findStepById(stepId, activeFlow);
    setCurrentStepId(step.id);
    setVisitedIds((ids) => Array.from(new Set([...ids, step.id])));
    if (event) pushEvent(event);
    setSelectedOption(null);
    setLastFeedback(null);
    setRevealTrap(false);
    setIsExecuting(false);
    setIsCompleted(false);
  }

  function handleExecute() {
    clearAutoPlayTimers();

    if (autoPlay) {
      setAutoPlay(false);
      setIsExecuting(false);
      pushEvent(createEvent('pause', 'Execução automática pausada', 'O processo foi interrompido manualmente.'));
      return;
    }

    const startIndex = Math.max(currentIndex, 0);
    const remainingSteps = steps.slice(startIndex);

    setAutoPlay(true);
    setIsCompleted(false);
    setSelectedOption(null);
    setLastFeedback(null);
    setRevealTrap(false);
    pushEvent(createEvent('play', 'Execução automática iniciada', `O fluxo ${activeFlow.subject} será percorrido do passo ${startIndex + 1} ao ${steps.length}.`));

    remainingSteps.forEach((step, relativeIndex) => {
      const delay = relativeIndex * 1650;
      const timer = window.setTimeout(() => {
        setCurrentStepId(step.id);
        setVisitedIds((ids) => Array.from(new Set([...ids, step.id])));
        setSelectedOption(null);
        setLastFeedback(null);
        setRevealTrap(false);
        setIsExecuting(true);
        pushEvent(createEvent('scene', `${relativeIndex === 0 ? 'Executando' : 'Avançou'}: ${step.short}`, step.actionLabel));

        const offTimer = window.setTimeout(() => setIsExecuting(false), 950);
        autoPlayTimersRef.current.push(offTimer);

        if (relativeIndex === remainingSteps.length - 1) {
          const finishTimer = window.setTimeout(() => {
            setAutoPlay(false);
            setIsExecuting(false);
            setIsCompleted(true);
            pushEvent(createEvent('complete', 'Processo inteiro executado', `Todas as ${steps.length} etapas foram percorridas em modo cinematográfico.`));
          }, 1150);
          autoPlayTimersRef.current.push(finishTimer);
        }
      }, delay);
      autoPlayTimersRef.current.push(timer);
    });
  }

  function handleNext() {
    clearAutoPlayTimers();
    setAutoPlay(false);
    const requiresAnswer = examMode && currentStep.examQuestion;
    const isDecision = currentStep.type === 'decision';
    if ((isDecision || requiresAnswer) && !selectedOption) return;

    if (selectedOption?.next) {
      goToStep(
        selectedOption.next,
        createEvent(selectedOption.correct ? 'correct' : 'wrong', selectedOption.correct ? 'Caminho correto aceso' : 'Pegadinha registrada', selectedOption.feedback),
      );
      return;
    }

    if (currentStep.type === 'end' || currentIndex >= steps.length - 1) {
      setIsCompleted(true);
      pushEvent(createEvent('complete', 'Relatório final gerado', `Desempenho atual: ${percent}%`));
      return;
    }

    const nextStep = steps[currentIndex + 1];
    goToStep(nextStep.id, createEvent('step', `Avançou para ${nextStep.short}`, nextStep.title));
  }

  function handleBack() {
    clearAutoPlayTimers();
    setAutoPlay(false);
    const previousStep = steps[Math.max(currentIndex - 1, 0)];
    goToStep(previousStep.id, createEvent('back', `Voltou para ${previousStep.short}`, previousStep.title));
  }

  function handleChangeFlow(flowId) {
    clearAutoPlayTimers();
    setAutoPlay(false);
    const nextFlow = findFlowById(flowId);
    setSelectedFlowId(nextFlow.id);
    setCurrentStepId(nextFlow.steps[0].id);
    setVisitedIds([nextFlow.steps[0].id]);
    setEvents([createEvent('reset', `Fluxo selecionado: ${nextFlow.subject}`, nextFlow.title)]);
    setIsExecuting(false);
    setSelectedOption(null);
    setLastFeedback(null);
    setRevealTrap(false);
    setScore(initialScore);
    setAnsweredStepIds([]);
    setIsCompleted(false);
  }

  function handleReset() {
    clearAutoPlayTimers();
    setAutoPlay(false);
    setCurrentStepId(activeFlow.steps[0].id);
    setVisitedIds([activeFlow.steps[0].id]);
    setEvents([createEvent('reset', 'Simulação reiniciada', 'Pontuação e respostas foram zeradas.')]);
    setIsExecuting(false);
    setSelectedOption(null);
    setLastFeedback(null);
    setRevealTrap(false);
    setScore(initialScore);
    setAnsweredStepIds([]);
    setIsCompleted(false);
  }

  function handleToggleExamMode() {
    clearAutoPlayTimers();
    setAutoPlay(false);
    setExamMode((value) => {
      const next = !value;
      pushEvent(createEvent(next ? 'exam' : 'step', next ? 'Modo prova ativado' : 'Modo explicação ativado', next ? 'Fundamentos ficam ocultos até a resposta.' : 'Explicações completas liberadas.'));
      setSelectedOption(null);
      setLastFeedback(null);
      setRevealTrap(false);
      return next;
    });
  }

  function handleChooseOption(option) {
    const alreadyAnswered = answeredStepIds.includes(currentStep.id);
    setSelectedOption(option);
    setLastFeedback({ correct: option.correct, message: option.feedback, trap: option.trap || currentStep.trap });
    setRevealTrap(!option.correct);
    pushEvent(createEvent(option.correct ? 'correct' : 'wrong', option.correct ? `Acertou: ${option.label}` : `Errou: ${option.label}`, option.feedback));

    if (!alreadyAnswered) {
      setAnsweredStepIds((ids) => [...ids, currentStep.id]);
      setScore((value) => ({
        correct: value.correct + (option.correct ? 1 : 0),
        wrong: value.wrong + (option.correct ? 0 : 1),
        traps: option.correct ? value.traps : Array.from(new Set([...value.traps, option.trap || currentStep.trap])),
        answers: [
          ...value.answers,
          {
            stepId: currentStep.id,
            title: currentStep.title,
            option: option.label,
            correct: option.correct,
            feedback: option.feedback,
            trap: option.trap || currentStep.trap,
            topic: option.topic || currentStep.examTopic || currentStep.short,
          },
        ],
      }));
    }
  }

  return (
    <div className="cinematic-simulator-page">
      <section className="cinematic-hero">
        <div>
          <Badge tone={examMode ? 'purple' : 'cyan'}>{examMode ? 'modo prova cinematográfico' : 'fase 12 multitemas'}</Badge>
          <h1>Simulador Jurídico Cinemático</h1>
          <p>Escolha um tema jurídico e rode cenas, decisões e consequências. No modo prova, a explicação fica oculta até você responder.</p>
          <div className="simulator-meta-row">
            <span>{activeFlow.title}</span>
            <span>Risco: {activeFlow.risk}</span>
            <span>Progresso: {progress}%</span>
            <span>Score: {answeredCount ? `${percent}%` : 'sem respostas'}</span>
          </div>
          <div className="flow-selector-panel">
            <label htmlFor="cinematic-flow-select">Tema cinematográfico</label>
            <select
              id="cinematic-flow-select"
              value={selectedFlowId}
              onChange={(event) => handleChangeFlow(event.target.value)}
            >
              {cinematicFlows.map((flow) => (
                <option key={flow.id} value={flow.id}>{flow.title}</option>
              ))}
            </select>
            <small>{activeFlow.objective}</small>
          </div>
        </div>
        <div className="simulator-actions vertical-actions">
          <Button onClick={handleExecute}>{autoPlay ? 'Pausar execução' : 'Executar processo inteiro'}</Button>
          <Button variant="secondary" onClick={handleNext}>{isCompleted ? 'Relatório aberto' : 'Próxima etapa'}</Button>
          <Button variant={examMode ? 'success' : 'ghost'} onClick={handleToggleExamMode}>{examMode ? 'Modo prova ativo' : 'Ativar modo prova'}</Button>
        </div>
      </section>

      {examMode && (
        <section className="exam-score-strip">
          <div>
            <span>Acertos</span>
            <strong>{score.correct}</strong>
          </div>
          <div>
            <span>Erros</span>
            <strong>{score.wrong}</strong>
          </div>
          <div>
            <span>Aproveitamento</span>
            <strong>{answeredCount ? `${percent}%` : '—'}</strong>
          </div>
          <div>
            <span>Pegadinhas</span>
            <strong>{score.traps.length}</strong>
          </div>
        </section>
      )}

      <section className="cinematic-main-layout">
        <Card className="cinematic-map-card">
          <StepMap
            flow={activeFlow}
            steps={steps}
            currentStepId={currentStepId}
            visitedIds={visitedIds}
            onSelectStep={(stepId) => goToStep(stepId, createEvent('select', `Selecionou: ${findStepById(stepId, activeFlow).short}`, findStepById(stepId, activeFlow).title))}
          />
        </Card>

        <SceneStage
          step={currentStep}
          stepIndex={currentIndex}
          totalSteps={steps.length}
          isExecuting={isExecuting}
          autoPlay={autoPlay}
          selectedOption={selectedOption}
          lastFeedback={lastFeedback}
          examMode={examMode}
          isCompleted={isCompleted}
          score={score}
          percent={percent}
          recommendedReview={recommendedReview}
          onExecute={handleExecute}
          onNext={handleNext}
          onBack={handleBack}
          onReset={handleReset}
          onChooseOption={handleChooseOption}
        />

        <ExamInsightPanel
          step={currentStep}
          revealTrap={revealTrap}
          onToggleTrap={() => setRevealTrap((value) => !value)}
          examMode={examMode}
          selectedOption={selectedOption}
          score={score}
        />
      </section>

      <section className="cinematic-bottom-grid">
        <SceneTimeline events={events} />
        <Card className="score-report-card">
          <div className="section-heading compact">
            <h3>Relatório parcial</h3>
            <Badge tone={score.wrong ? 'orange' : 'green'}>{score.correct} acertos / {score.wrong} erros</Badge>
          </div>
          <p>{examMode ? 'Modo prova ativo: responda antes de revelar fundamento, pegadinha e explicação.' : 'Modo explicação ativo: use as cenas para entender o processo e depois ative o modo prova.'}</p>
          <div className="mini-review-list">
            {recommendedReview.slice(0, 3).map((item) => <span key={item}>{item}</span>)}
          </div>
        </Card>
      </section>
    </div>
  );
}

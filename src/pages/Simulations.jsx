import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { questions } from '../data/questions';
import { officialSimulationBlueprints } from '../data/officialExamBlueprints';
import { discursivePrompts } from '../data/discursivePrompts';

const simulationsKey = 'simulations_progress_v2';
const questionsProgressKey = 'questions_progress_v1';

const initialSimulationProgress = {
  attempts: [],
  discursiveAttempts: [],
  lastResult: null,
};

const initialQuestionProgress = {
  answers: {},
  marked: [],
  history: [],
};

const basicSimulationTypes = [
  {
    id: 'quick',
    title: 'Prova rápida',
    label: 'aquecimento estratégico',
    questionCount: 10,
    minutes: 20,
    description: 'Treino curto para fixar temas críticos antes da sessão principal.',
    tone: 'cyan',
  },
  {
    id: 'medium',
    title: 'Prova média',
    label: 'diagnóstico intermediário',
    questionCount: 25,
    minutes: 60,
    description: 'Mistura matérias do edital e mostra onde você perde pontos com frequência.',
    tone: 'purple',
  },
  {
    id: 'complete',
    title: 'Prova completa',
    label: 'prova objetiva completa',
    questionCount: 60,
    minutes: 180,
    description: 'Prova objetiva ampla usando todo o banco local disponível.',
    tone: 'orange',
  },
  {
    id: 'errors',
    title: 'Simulado só erros',
    label: 'revisão cirúrgica',
    questionCount: 20,
    minutes: 45,
    description: 'Gera uma prova apenas com questões já erradas no treino.',
    tone: 'orange',
  },
];

const simulationTypes = [
  ...officialSimulationBlueprints.map((item) => ({ ...item, kind: 'blueprint' })),
  ...basicSimulationTypes.map((item) => ({ ...item, kind: 'basic' })),
  {
    id: 'discursive',
    title: 'Treino discursivo',
    label: 'procurador na prática',
    minutes: 90,
    description: 'Caso discursivo com espelho de autoavaliação, tese jurídica e pontos obrigatórios.',
    tone: 'green',
    kind: 'discursive',
  },
];

function shuffleItems(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function formatTime(seconds) {
  const safe = Math.max(0, seconds || 0);
  const minutes = Math.floor(safe / 60).toString().padStart(2, '0');
  const rest = (safe % 60).toString().padStart(2, '0');
  return `${minutes}:${rest}`;
}

function buildPool(type, questionProgress) {
  if (type.id === 'errors') {
    const errorIds = new Set(
      Object.entries(questionProgress.answers || {})
        .filter(([, answer]) => answer.hasWrong || answer.lastCorrect === false)
        .map(([id]) => id)
    );
    return questions.filter((question) => errorIds.has(question.id));
  }

  if (type.kind === 'blueprint') {
    const selected = [];
    type.distribution.forEach((rule) => {
      const pool = questions.filter((question) => question.subject === rule.subject);
      selected.push(...shuffleItems(pool).slice(0, rule.count));
    });
    if (selected.length < 12) return shuffleItems(questions).slice(0, Math.min(60, questions.length));
    return selected;
  }

  if (type.id === 'quick') {
    const prioritySubjects = ['Direito Administrativo', 'Legislação Municipal', 'Lei Orgânica', 'Língua Portuguesa'];
    const priority = questions.filter((question) => prioritySubjects.includes(question.subject));
    return priority.length >= type.questionCount ? priority : questions;
  }

  return questions;
}

function buildSimulation(type, questionProgress) {
  const pool = buildPool(type, questionProgress);
  const count = type.questionCount || pool.length;
  return shuffleItems(pool).slice(0, Math.min(count, pool.length));
}

function calculateResult(simulationQuestions, answers, startedAt, finishedAt) {
  const total = simulationQuestions.length;
  const correct = simulationQuestions.filter((question) => answers[question.id] === question.correctAnswer).length;
  const wrong = total - correct;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const timeSpentSeconds = Math.max(1, Math.round((finishedAt - startedAt) / 1000));

  const subjectStats = simulationQuestions.reduce((acc, question) => {
    if (!acc[question.subject]) acc[question.subject] = { total: 0, correct: 0, wrong: 0, topics: {} };
    acc[question.subject].total += 1;
    const isCorrect = answers[question.id] === question.correctAnswer;
    if (isCorrect) acc[question.subject].correct += 1;
    else acc[question.subject].wrong += 1;
    if (!acc[question.subject].topics[question.topic]) acc[question.subject].topics[question.topic] = { total: 0, wrong: 0 };
    acc[question.subject].topics[question.topic].total += 1;
    if (!isCorrect) acc[question.subject].topics[question.topic].wrong += 1;
    return acc;
  }, {});

  const rankedSubjects = Object.entries(subjectStats)
    .map(([subject, stats]) => ({ subject, ...stats, percent: stats.total ? Math.round((stats.correct / stats.total) * 100) : 0 }))
    .sort((a, b) => a.percent - b.percent || b.wrong - a.wrong);

  const weakTopics = rankedSubjects.flatMap((subject) => Object.entries(subject.topics)
    .filter(([, topic]) => topic.wrong > 0)
    .map(([topic, topicStats]) => ({ subject: subject.subject, topic, wrong: topicStats.wrong, total: topicStats.total })))
    .sort((a, b) => b.wrong - a.wrong)
    .slice(0, 6);

  return {
    id: `sim-${Date.now()}`,
    total,
    correct,
    wrong,
    percent,
    timeSpentSeconds,
    averageSeconds: total ? Math.round(timeSpentSeconds / total) : 0,
    subjectStats: rankedSubjects,
    weakTopics,
    wrongQuestions: simulationQuestions.filter((question) => answers[question.id] !== question.correctAnswer).map((question) => question.id),
    finishedAt: new Date(finishedAt).toISOString(),
  };
}

function getDiscursiveScore(checklist) {
  const values = Object.values(checklist || {});
  if (!values.length) return 0;
  return Math.round((values.filter(Boolean).length / values.length) * 100);
}

export default function Simulations() {
  const [simulationProgress, setSimulationProgress] = useLocalStorage(simulationsKey, initialSimulationProgress);
  const [questionProgress] = useLocalStorage(questionsProgressKey, initialQuestionProgress);
  const [selectedTypeId, setSelectedTypeId] = useState('edital-objective');
  const [status, setStatus] = useState('setup');
  const [simulationQuestions, setSimulationQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState([]);
  const [startedAt, setStartedAt] = useState(null);
  const [result, setResult] = useState(simulationProgress.lastResult);
  const [discursivePromptId, setDiscursivePromptId] = useState(discursivePrompts[0]?.id || '');
  const [discursiveText, setDiscursiveText] = useState('');
  const [discursiveChecklist, setDiscursiveChecklist] = useState({});
  const [discursiveResult, setDiscursiveResult] = useState(null);

  const selectedType = simulationTypes.find((type) => type.id === selectedTypeId) || simulationTypes[0];
  const currentQuestion = simulationQuestions[currentIndex];
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const selectedDiscursive = discursivePrompts.find((prompt) => prompt.id === discursivePromptId) || discursivePrompts[0];
  const canStart = selectedType.kind === 'discursive' || buildPool(selectedType, questionProgress).length > 0;

  const simulationSummary = useMemo(() => {
    const attempts = simulationProgress.attempts || [];
    const total = attempts.length;
    const best = attempts.reduce((max, attempt) => Math.max(max, attempt.percent || 0), 0);
    const average = total ? Math.round(attempts.reduce((sum, item) => sum + (item.percent || 0), 0) / total) : 0;
    const discursiveTotal = (simulationProgress.discursiveAttempts || []).length;
    return { total, best, average, discursiveTotal };
  }, [simulationProgress]);

  const progressPercent = simulationQuestions.length ? Math.round(((currentIndex + 1) / simulationQuestions.length) * 100) : 0;

  function startSimulation() {
    if (selectedType.kind === 'discursive') {
      setDiscursiveText('');
      setDiscursiveChecklist({});
      setDiscursiveResult(null);
      setStartedAt(Date.now());
      setStatus('discursive');
      return;
    }
    const selected = buildSimulation(selectedType, questionProgress);
    setSimulationQuestions(selected);
    setAnswers({});
    setMarked([]);
    setCurrentIndex(0);
    setStartedAt(Date.now());
    setResult(null);
    setStatus('running');
  }

  function selectAnswer(optionId) {
    if (!currentQuestion) return;
    setAnswers((current) => ({ ...current, [currentQuestion.id]: optionId }));
  }

  function nextQuestion() {
    setCurrentIndex((index) => Math.min(index + 1, simulationQuestions.length - 1));
  }

  function previousQuestion() {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }

  function goToQuestion(index) {
    setCurrentIndex(index);
  }

  function toggleMarked() {
    if (!currentQuestion) return;
    setMarked((current) => current.includes(currentQuestion.id) ? current.filter((id) => id !== currentQuestion.id) : [...current, currentQuestion.id]);
  }

  function finishSimulation(reason = 'manual') {
    if (!simulationQuestions.length || !startedAt) return;
    const finishedAt = Date.now();
    const computed = {
      ...calculateResult(simulationQuestions, answers, startedAt, finishedAt),
      typeId: selectedType.id,
      typeTitle: selectedType.title,
      reason,
      marked,
      answers,
      blueprint: selectedType.kind === 'blueprint' ? selectedType.distribution : null,
    };
    setResult(computed);
    setStatus('result');
    setSimulationProgress((current) => ({
      ...current,
      lastResult: computed,
      attempts: [computed, ...(current.attempts || [])].slice(0, 30),
    }));
  }

  function finishDiscursive() {
    const score = getDiscursiveScore(discursiveChecklist);
    const computed = {
      id: `disc-${Date.now()}`,
      promptId: selectedDiscursive.id,
      title: selectedDiscursive.title,
      subject: selectedDiscursive.subject,
      score,
      lines: discursiveText.split('\n').filter((line) => line.trim()).length,
      chars: discursiveText.length,
      checklist: discursiveChecklist,
      text: discursiveText,
      finishedAt: new Date().toISOString(),
    };
    setDiscursiveResult(computed);
    setSimulationProgress((current) => ({
      ...current,
      discursiveAttempts: [computed, ...(current.discursiveAttempts || [])].slice(0, 20),
    }));
  }

  function resetSimulation() {
    setStatus('setup');
    setSimulationQuestions([]);
    setAnswers({});
    setMarked([]);
    setCurrentIndex(0);
    setStartedAt(null);
    setResult(null);
    setDiscursiveResult(null);
  }

  function clearHistory() {
    setSimulationProgress(initialSimulationProgress);
    setResult(null);
    resetSimulation();
  }

  return (
    <div className="simulations-page page-grid">
      <section className="simulations-hero">
        <div>
          <Badge tone="cyan">fase 17 • formato edital</Badge>
          <h1>Central de Simulados</h1>
          <p>Simulados objetivos por matriz do edital, bloco de lei local e treino discursivo com espelho de correção.</p>
        </div>
        <div className="simulation-scoreboard">
          <article><span>Objetivos</span><strong>{simulationSummary.total}</strong></article>
          <article><span>Melhor nota</span><strong>{simulationSummary.best}%</strong></article>
          <article><span>Média</span><strong>{simulationSummary.average}%</strong></article>
          <article><span>Discursivas</span><strong>{simulationSummary.discursiveTotal}</strong></article>
        </div>
      </section>

      {status === 'setup' && (
        <>
          <div className="simulation-type-grid">
            {simulationTypes.map((type) => {
              const poolSize = type.kind === 'discursive' ? discursivePrompts.length : buildPool(type, questionProgress).length;
              const active = selectedTypeId === type.id;
              return (
                <button key={type.id} type="button" className={`simulation-type-card ${active ? 'active' : ''}`} onClick={() => setSelectedTypeId(type.id)}>
                  <Badge tone={type.tone}>{type.label}</Badge>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                  <div className="sim-type-meta">
                    {type.kind === 'discursive' ? <span>{poolSize} casos</span> : <span>{Math.min(type.questionCount || poolSize, poolSize)} questões</span>}
                    <span>{type.minutes} min</span>
                    <span>{type.kind === 'blueprint' ? 'matriz edital' : type.kind}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <Card className="simulation-setup-card wide-card">
            <div className="section-heading">
              <div>
                <Badge tone="purple">configuração</Badge>
                <h3>{selectedType.title}</h3>
              </div>
              <strong>{selectedType.minutes} minutos</strong>
            </div>
            <p>{selectedType.description}</p>

            {selectedType.kind === 'blueprint' && (
              <div className="blueprint-distribution">
                {selectedType.distribution.map((rule) => (
                  <article key={rule.subject}><strong>{rule.count}</strong><span>{rule.subject}</span></article>
                ))}
              </div>
            )}

            {selectedType.kind === 'discursive' && (
              <div className="discursive-picker">
                <label>Caso discursivo</label>
                <select value={discursivePromptId} onChange={(event) => setDiscursivePromptId(event.target.value)}>
                  {discursivePrompts.map((prompt) => <option value={prompt.id} key={prompt.id}>{prompt.title}</option>)}
                </select>
                <p>{selectedDiscursive?.situation}</p>
              </div>
            )}

            {!canStart ? (
              <EmptyState title="Ainda não há questões para este simulado" description="No modo só erros, erre algumas questões na tela Questões para liberar uma prova cirúrgica de revisão." />
            ) : (
              <div className="simulation-launch-row">
                <div>
                  <strong>{selectedType.kind === 'discursive' ? 'Um caso discursivo será aberto.' : `${Math.min(selectedType.questionCount || buildPool(selectedType, questionProgress).length, buildPool(selectedType, questionProgress).length)} questões serão sorteadas.`}</strong>
                  <span>{selectedType.kind === 'discursive' ? 'Use o espelho para conferir pontos obrigatórios.' : 'O gabarito fica bloqueado até finalizar a prova.'}</span>
                </div>
                <Button onClick={startSimulation}>{selectedType.kind === 'discursive' ? 'Iniciar discursiva' : 'Iniciar simulado'}</Button>
              </div>
            )}
          </Card>

          {(simulationProgress.attempts || []).length > 0 && (
            <Card>
              <div className="section-heading">
                <div><Badge tone="cyan">histórico</Badge><h3>Últimos simulados</h3></div>
                <Button variant="danger" onClick={clearHistory}>Limpar histórico</Button>
              </div>
              <div className="simulation-history-list">
                {(simulationProgress.attempts || []).slice(0, 5).map((attempt) => (
                  <article key={attempt.id}><strong>{attempt.typeTitle}</strong><span>{attempt.percent}% • {attempt.correct}/{attempt.total} acertos • {formatTime(attempt.timeSpentSeconds)}</span></article>
                ))}
              </div>
            </Card>
          )}
        </>
      )}

      {status === 'running' && currentQuestion && (
        <div className="simulation-runner">
          <aside className="answer-sheet-card">
            <Badge tone="orange">cartão de respostas</Badge>
            <h3>Questão {currentIndex + 1}</h3>
            <ProgressBar label="Progresso da prova" value={progressPercent} />
            <div className="answer-sheet-grid">
              {simulationQuestions.map((question, index) => (
                <button key={question.id} type="button" className={`${index === currentIndex ? 'active' : ''} ${answers[question.id] ? 'answered' : ''} ${marked.includes(question.id) ? 'marked' : ''}`} onClick={() => goToQuestion(index)}>
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="simulation-side-actions">
              <Button variant="secondary" onClick={toggleMarked}>{marked.includes(currentQuestion.id) ? 'Desmarcar revisão' : 'Marcar revisão'}</Button>
              <Button variant="danger" onClick={() => finishSimulation('manual')}>Finalizar prova</Button>
            </div>
          </aside>

          <main>
            <Card className="simulation-question-card">
              <div className="question-card-header">
                <div><Badge tone={currentQuestion.difficulty === 'Difícil' ? 'orange' : currentQuestion.difficulty === 'Média' ? 'purple' : 'cyan'}>{currentQuestion.difficulty}</Badge><h2>Questão {currentIndex + 1} de {simulationQuestions.length}</h2></div>
                <span className="timer-pill">Gabarito bloqueado</span>
              </div>
              <div className="question-meta-line"><span>{currentQuestion.subject}</span><span>{currentQuestion.topic}</span>{marked.includes(currentQuestion.id) && <span className="orange-chip">revisar depois</span>}</div>
              <p className="question-statement">{currentQuestion.statement}</p>
              <div className="answer-options simulation-options">
                {currentQuestion.options.map((option) => (
                  <button key={option.id} type="button" className={`answer-option ${selectedAnswer === option.id ? 'selected' : ''}`} onClick={() => selectAnswer(option.id)}>
                    <strong>{option.id}</strong><span>{option.text}</span>
                  </button>
                ))}
              </div>
              <div className="question-actions">
                <Button variant="secondary" onClick={previousQuestion} disabled={currentIndex === 0}>Anterior</Button>
                {currentIndex + 1 < simulationQuestions.length ? <Button onClick={nextQuestion}>Próxima</Button> : <Button onClick={() => finishSimulation('manual')}>Finalizar simulado</Button>}
              </div>
            </Card>
          </main>
        </div>
      )}

      {status === 'discursive' && selectedDiscursive && (
        <div className="discursive-workbench">
          <Card className="discursive-case-card">
            <Badge tone="green">prova discursiva</Badge>
            <h2>{selectedDiscursive.title}</h2>
            <p><strong>Situação:</strong> {selectedDiscursive.situation}</p>
            <p><strong>Comando:</strong> {selectedDiscursive.command}</p>
            <p className="trap-line"><strong>Pegadinha:</strong> {selectedDiscursive.trap}</p>
            <textarea value={discursiveText} onChange={(event) => setDiscursiveText(event.target.value)} placeholder="Digite sua resposta discursiva aqui..." />
            <div className="question-actions">
              <Button variant="secondary" onClick={resetSimulation}>Voltar</Button>
              <Button onClick={finishDiscursive}>Corrigir pelo espelho</Button>
            </div>
          </Card>
          <Card>
            <Badge tone="purple">espelho</Badge>
            <h3>Pontos obrigatórios</h3>
            <div className="discursive-checklist">
              {selectedDiscursive.keyPoints.map((point) => (
                <label key={point}>
                  <input type="checkbox" checked={!!discursiveChecklist[point]} onChange={(event) => setDiscursiveChecklist((current) => ({ ...current, [point]: event.target.checked }))} />
                  <span>{point}</span>
                </label>
              ))}
            </div>
            {discursiveResult && (
              <div className="discursive-result-box">
                <strong>{discursiveResult.score}% no espelho</strong>
                <span>{discursiveResult.lines} linhas úteis • {discursiveResult.chars} caracteres</span>
                <p>{discursiveResult.score >= 75 ? 'Boa estrutura. Agora refine linguagem jurídica e jurisprudência.' : 'Reforce os pontos obrigatórios antes de repetir o caso.'}</p>
              </div>
            )}
          </Card>
        </div>
      )}

      {status === 'result' && result && (
        <div className="simulation-result-layout">
          <Card className={`simulation-result-card ${result.percent >= 70 ? 'result-good' : result.percent >= 50 ? 'result-medium' : 'result-low'}`}>
            <Badge tone={result.percent >= 70 ? 'green' : result.percent >= 50 ? 'orange' : 'purple'}>resultado final</Badge>
            <h2>{result.percent}% de aproveitamento</h2>
            <div className="result-metrics-grid">
              <article><span>Acertos</span><strong>{result.correct}</strong></article>
              <article><span>Erros</span><strong>{result.wrong}</strong></article>
              <article><span>Questões</span><strong>{result.total}</strong></article>
              <article><span>Tempo médio</span><strong>{result.averageSeconds}s</strong></article>
            </div>
            <div className="hero-actions"><Button onClick={resetSimulation}>Novo simulado</Button><Button variant="secondary" onClick={() => setStatus('setup')}>Voltar à central</Button></div>
          </Card>

          <Card>
            <Badge tone="orange">plano pós-simulado</Badge>
            <h3>Revisão recomendada</h3>
            {result.weakTopics.length ? (
              <div className="post-review-list">
                {result.weakTopics.map((item) => <article key={`${item.subject}-${item.topic}`}><strong>{item.subject}</strong><span>{item.topic} • {item.wrong}/{item.total} erro(s)</span></article>)}
              </div>
            ) : <EmptyState title="Sem temas fracos neste simulado" description="Excelente. Use o próximo simulado para aumentar dificuldade." />}
          </Card>

          <Card className="wide-card">
            <div className="section-heading"><div><Badge tone="cyan">gabarito comentado</Badge><h3>Questões erradas</h3></div></div>
            <div className="review-answer-list">
              {simulationQuestions.filter((question) => answers[question.id] !== question.correctAnswer).slice(0, 8).map((question) => (
                <article key={question.id}>
                  <strong>{question.subject} • {question.topic}</strong>
                  <p>{question.statement}</p>
                  <span>Sua resposta: {answers[question.id] || 'em branco'} • Correta: {question.correctAnswer}</span>
                  <small>{question.explanation}</small>
                </article>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

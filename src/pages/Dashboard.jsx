import { useMemo } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { questions } from '../data/questions';
import { REVIEW_KEY, initialReviewProgress, buildReviewQueue } from '../utils/reviewEngine';
import { FLASHCARD_PROGRESS_KEY, initialFlashcardProgress } from '../data/flashcards';
import { buildMentorPlan, initialMentorProgress, MENTOR_PROGRESS_KEY } from '../utils/mentorEngine';
import { buildSprintFinalPlan, initialSprintProgress, SPRINT_PROGRESS_KEY } from '../utils/sprintEngine';
import { SYLLABUS_PROGRESS_KEY, initialSyllabusProgress } from './Edital';
import { buildRankingPanel, initialRankingProgress, RANKING_PROGRESS_KEY } from '../utils/rankingEngine';
import { ADVANCED_SIM_PROGRESS_KEY, buildAdvancedSimulationPlan, initialAdvancedSimProgress } from '../data/advancedSimulations';

const progressKey = 'questions_progress_v1';
const simulationsKey = 'simulations_progress_v1';
const initialProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };

function calculateQuestionMetrics(progress = initialProgress) {
  const safeProgress = progress && typeof progress === 'object' ? progress : initialProgress;
  const answers = Object.values(safeProgress.answers || {});
  const answered = answers.length;
  const correct = answers.filter((answer) => answer.lastCorrect).length;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  const marked = safeProgress.marked?.length || 0;

  const bySubject = questions.reduce((acc, question) => {
    const answer = safeProgress.answers?.[question.id];
    if (!acc[question.subject]) acc[question.subject] = { answered: 0, correct: 0, wrong: 0 };
    if (answer) {
      acc[question.subject].answered += 1;
      if (answer.lastCorrect) acc[question.subject].correct += 1;
      if (answer.hasWrong || answer.lastCorrect === false) acc[question.subject].wrong += 1;
    }
    return acc;
  }, {});

  const weak = Object.entries(bySubject)
    .filter(([, stats]) => stats.answered > 0)
    .map(([subject, stats]) => ({
      subject,
      accuracy: Math.round((stats.correct / stats.answered) * 100),
      wrong: stats.wrong,
    }))
    .sort((a, b) => a.accuracy - b.accuracy || b.wrong - a.wrong)[0];

  return {
    answered,
    correct,
    accuracy,
    marked,
    weakSubject: weak?.subject || 'Atos',
    weakDetail: weak ? `${weak.accuracy}% de acerto` : 'legalidade x mérito',
  };
}

export default function Dashboard({ onNavigate }) {
  const [questionProgress] = useLocalStorage(progressKey, initialProgress);
  const [simulationProgress] = useLocalStorage(simulationsKey, initialSimulationProgress);
  const [reviewProgress] = useLocalStorage(REVIEW_KEY, initialReviewProgress);
  const [flashcardProgress] = useLocalStorage(FLASHCARD_PROGRESS_KEY, initialFlashcardProgress);
  const [mentorProgress] = useLocalStorage(MENTOR_PROGRESS_KEY, initialMentorProgress);
  const [sprintProgress] = useLocalStorage(SPRINT_PROGRESS_KEY, initialSprintProgress);
  const [syllabusProgress] = useLocalStorage(SYLLABUS_PROGRESS_KEY, initialSyllabusProgress);
  const [rankingProgress] = useLocalStorage(RANKING_PROGRESS_KEY, initialRankingProgress);
  const [advancedSimProgress] = useLocalStorage(ADVANCED_SIM_PROGRESS_KEY, initialAdvancedSimProgress);
  const metrics = useMemo(() => calculateQuestionMetrics(questionProgress), [questionProgress]);
  const reviewQueue = useMemo(() => buildReviewQueue(questionProgress, reviewProgress, simulationProgress), [questionProgress, reviewProgress, simulationProgress]);
  const safeFlashcardProgress = flashcardProgress && typeof flashcardProgress === 'object' ? flashcardProgress : initialFlashcardProgress;
  const flashcardRecords = Object.values(safeFlashcardProgress.cards || {});
  const dueFlashcards = flashcardRecords.filter((record) => !record.nextReviewAt || new Date(record.nextReviewAt) <= new Date()).length;
  const reviewedFlashcards = flashcardRecords.length;
  const safeSimulationProgress = simulationProgress && typeof simulationProgress === 'object' ? simulationProgress : initialSimulationProgress;
  const simulationCount = safeSimulationProgress.attempts?.length || 0;
  const bestSimulation = (safeSimulationProgress.attempts || []).reduce((best, attempt) => Math.max(best, attempt.percent || 0), 0);
  const mentorPlan = useMemo(() => buildMentorPlan({ questionProgress, reviewProgress, simulationProgress, flashcardProgress, mentorProgress }), [questionProgress, reviewProgress, simulationProgress, flashcardProgress, mentorProgress]);
  const sprintPlan = useMemo(() => buildSprintFinalPlan({ questionProgress, reviewProgress, simulationProgress, flashcardProgress, syllabusProgress, sprintProgress }), [questionProgress, reviewProgress, simulationProgress, flashcardProgress, syllabusProgress, sprintProgress]);
  const rankingPanel = useMemo(() => buildRankingPanel({ questionProgress, simulationProgress, discursiveProgress: { history: [] }, rankingProgress }), [questionProgress, simulationProgress, rankingProgress]);
  const advancedSimPlan = useMemo(() => buildAdvancedSimulationPlan(advancedSimProgress), [advancedSimProgress]);

  return (
    <div className="dashboard-page page-grid">
      <section className="hero-panel">
        <div>
          <Badge tone="cyan">próxima ação</Badge>
          <h1>Procurador Itupeva 2026</h1>
          <p>Comece com uma missão curta: simular o nascimento de um ato administrativo e resolver 10 questões de fixação.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate('simulator')}>Abrir Simulador Jurídico</Button>
            <Button variant="secondary" onClick={() => onNavigate('questoes')}>Começar estudo</Button>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit-core">§</span>
          <span className="orbit-dot dot-a" />
          <span className="orbit-dot dot-b" />
          <span className="orbit-dot dot-c" />
        </div>
      </section>

      <Card variant="highlight" className="mentor-dashboard-card">
        <div className="section-heading">
          <div>
            <Badge tone="cyan">mentor inteligente</Badge>
            <h3>{mentorPlan.nextAction?.title || 'Preparação calibrada'}</h3>
          </div>
          <strong>{mentorPlan.readiness}%</strong>
        </div>
        <p>{mentorPlan.nextAction?.description || 'Mantenha questões, revisão e simulado curto para preservar ritmo.'}</p>
        <div className="mentor-mini-grid">
          <span><strong>{mentorPlan.remainingMinutes}m</strong><small>restantes hoje</small></span>
          <span><strong>{mentorPlan.stats.reviews.pending}</strong><small>revisões</small></span>
          <span><strong>{mentorPlan.stats.discursives.count}</strong><small>discursivas</small></span>
        </div>
        <div className="hero-actions">
          <Button onClick={() => onNavigate('mentor')}>Abrir Mentor</Button>
          {mentorPlan.nextAction && <Button variant="secondary" onClick={() => onNavigate(mentorPlan.nextAction.targetPage)}>{mentorPlan.nextAction.cta}</Button>}
        </div>
      </Card>


      <Card variant="highlight" className="sprint-dashboard-card">
        <div className="section-heading">
          <div>
            <Badge tone="orange">sprint final</Badge>
            <h3>{sprintPlan.topThree[0]?.title || 'Reta final calibrada'}</h3>
          </div>
          <strong>{sprintPlan.countdown.days} dias</strong>
        </div>
        <p>Missão do dia gerada pela reta final: edital, revisões, questões, simulados, flashcards e discursivas em uma fila objetiva.</p>
        <div className="mentor-mini-grid">
          <span><strong>{sprintPlan.readiness}%</strong><small>prontidão</small></span>
          <span><strong>{sprintPlan.topThree.length}</strong><small>prioridades</small></span>
          <span><strong>{sprintPlan.alerts.length}</strong><small>alertas</small></span>
        </div>
        <div className="hero-actions">
          <Button onClick={() => onNavigate('sprint')}>Abrir Sprint Final</Button>
          {sprintPlan.topThree[0] && <Button variant="secondary" onClick={() => onNavigate(sprintPlan.topThree[0].targetPage)}>Fazer próxima ação</Button>}
        </div>
      </Card>




      <Card className="wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="purple">recuperação inteligente</Badge>
            <h3>Lab de Erros + Mapas Mentais</h3>
          </div>
          <strong>Fases 24/25</strong>
        </div>
        <p>Use o laboratório para descobrir por que errou e os mapas para revisar visualmente os temas que mais caem na prova.</p>
        <div className="hero-actions">
          <Button onClick={() => onNavigate('erros')}>Abrir Lab de Erros</Button>
          <Button variant="secondary" onClick={() => onNavigate('mapas')}>Abrir Mapas Mentais</Button>
        </div>
      </Card>


      <Card className="wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="green">prova avançada</Badge>
            <h3>Simulados Pro + Ranking Pessoal</h3>
          </div>
          <strong>{rankingPanel.score}%</strong>
        </div>
        <p>Protocolo de prova estilo edital, registro de nota, metas semanais e ranking pessoal para medir se você está competitivo.</p>
        <div className="mentor-mini-grid">
          <span><strong>{advancedSimPlan.best}%</strong><small>melhor simulado pro</small></span>
          <span><strong>{rankingPanel.tier}</strong><small>nível atual</small></span>
          <span><strong>{rankingPanel.nextGoal.label}</strong><small>próximo gargalo</small></span>
        </div>
        <div className="hero-actions">
          <Button onClick={() => onNavigate('simulados-pro')}>Abrir Simulados Pro</Button>
          <Button variant="secondary" onClick={() => onNavigate('ranking')}>Abrir Ranking</Button>
        </div>
      </Card>

      <Card className="wide-card vespera-dashboard-card">
        <div className="section-heading">
          <div>
            <Badge tone="orange">reta final segura</Badge>
            <h3>Revisão de Véspera</h3>
          </div>
          <strong>{sprintPlan.countdown.days} dias</strong>
        </div>
        <p>Checklist final com Lei Local, Administrativo, discursiva, logística de prova e cartões de última hora para evitar erro bobo.</p>
        <div className="hero-actions">
          <Button onClick={() => onNavigate('vespera')}>Abrir Véspera</Button>
          <Button variant="secondary" onClick={() => onNavigate('simulator')}>Revisar Lei Local em cenas</Button>
        </div>
      </Card>

      <Card className="wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="green">versão fechada</Badge>
            <h3>Auditoria Final + Polimento Mobile</h3>
          </div>
          <strong>35/35</strong>
        </div>
        <p>Checklist de liberação, smoke test interno, plano anti-tela branca e release notes da versão premium concluída.</p>
        <div className="hero-actions">
          <Button onClick={() => onNavigate('final')}>Abrir Final</Button>
          <Button variant="secondary" onClick={() => onNavigate('offline')}>Backup/exportação</Button>
        </div>
      </Card>

      <div className="stats-grid">
        <Card><span className="stat-label">Questões feitas</span><strong className="stat-value">{metrics.answered}</strong><small>{metrics.answered ? `${metrics.correct} acertos registrados` : 'inicie sua primeira sessão'}</small></Card>
        <Card><span className="stat-label">Taxa de acerto</span><strong className="stat-value">{metrics.accuracy}%</strong><small>{metrics.answered ? 'com base no banco local' : 'será calculada após treino'}</small></Card>
        <Card><span className="stat-label">Revisões pendentes</span><strong className="stat-value">{reviewQueue.length}</strong><small>{metrics.marked} marcadas + erros e pós-simulado</small></Card>
        <Card><span className="stat-label">Ponto fraco atual</span><strong className="stat-value text-small">{metrics.weakSubject}</strong><small>{metrics.weakDetail}</small></Card>
        <Card><span className="stat-label">Simulados feitos</span><strong className="stat-value">{simulationCount}</strong><small>{simulationCount ? `melhor nota: ${bestSimulation}%` : 'faça uma prova rápida'}</small></Card>
        <Card><span className="stat-label">Flashcards</span><strong className="stat-value">{reviewedFlashcards}</strong><small>{dueFlashcards ? `${dueFlashcards} vencidos para hoje` : 'memorização em dia'}</small></Card>
      </div>

      <Card className="wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="purple">plano tático</Badge>
            <h3>Preparação geral</h3>
          </div>
          <strong>{Math.min(100, Math.max(37, metrics.answered * 2))}%</strong>
        </div>
        <ProgressBar label="Conteúdo estruturado" value={44} />
        <ProgressBar label="Questões e simulados" value={Math.min(100, metrics.answered * 3 + simulationCount * 12)} />
        <ProgressBar label="Revisão estratégica" value={Math.min(100, reviewQueue.length * 8 + metrics.answered)} />
      </Card>

      <Card variant="highlight">
        <Badge tone="orange">atenção</Badge>
        <h3>Missão de hoje</h3>
        <p>Entender a diferença entre anulação, revogação e convalidação usando o simulador cinematográfico e o banco de questões.</p>
        <div className="hero-actions">
          <Button variant="ghost" onClick={() => onNavigate('simulator')}>Ver cena principal</Button>
          <Button variant="secondary" onClick={() => onNavigate('questoes')}>Resolver questões</Button>
          <Button variant="ghost" onClick={() => onNavigate('simulados')}>Fazer simulado</Button>
          <Button variant="secondary" onClick={() => onNavigate('revisao')}>Abrir revisão</Button>
          <Button variant="ghost" onClick={() => onNavigate('flashcards')}>Flashcards</Button>
        </div>
      </Card>
    </div>
  );
}

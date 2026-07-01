import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { QUESTION_PROGRESS_KEY, REVIEW_KEY, SIMULATIONS_KEY, initialReviewProgress } from '../utils/reviewEngine';
import { FLASHCARD_PROGRESS_KEY, initialFlashcardProgress } from '../data/flashcards';
import { buildMentorPlan, initialMentorProgress, MENTOR_PROGRESS_KEY, toggleMentorAction } from '../utils/mentorEngine';

const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };
const initialDiscursiveProgress = { attempts: [], pinnedCases: [], lastDraft: {} };

function actionTone(type) {
  return {
    Revisão: 'orange',
    Questões: 'cyan',
    Simulado: 'purple',
    Flashcards: 'green',
    Discursiva: 'purple',
    Edital: 'cyan',
    Simulador: 'orange',
  }[type] || 'cyan';
}

export default function Mentor({ onNavigate = () => {} }) {
  const [questionProgress] = useLocalStorage(QUESTION_PROGRESS_KEY, initialQuestionProgress);
  const [reviewProgress] = useLocalStorage(REVIEW_KEY, initialReviewProgress);
  const [simulationProgressV1] = useLocalStorage(SIMULATIONS_KEY, initialSimulationProgress);
  const [simulationProgressV2] = useLocalStorage('simulations_progress_v2', initialSimulationProgress);
  const [flashcardProgress] = useLocalStorage(FLASHCARD_PROGRESS_KEY, initialFlashcardProgress);
  const [discursiveProgress] = useLocalStorage('discursive_lab_progress_v2', initialDiscursiveProgress);
  const [mentorProgress, setMentorProgress] = useLocalStorage(MENTOR_PROGRESS_KEY, initialMentorProgress);
  const [compact, setCompact] = useState(false);

  const plan = useMemo(() => buildMentorPlan({
    questionProgress,
    reviewProgress,
    simulationProgress: simulationProgressV2,
    simulationProgressV1,
    flashcardProgress,
    discursiveProgress,
    mentorProgress,
  }), [questionProgress, reviewProgress, simulationProgressV2, simulationProgressV1, flashcardProgress, discursiveProgress, mentorProgress]);

  function toggleAction(action) {
    setMentorProgress((current) => toggleMentorAction(current, action.id, !action.done));
  }

  function startAction(action) {
    if (action?.targetPage) onNavigate(action.targetPage);
  }

  const visibleActions = compact ? plan.actions.filter((action) => !action.done).slice(0, 1) : plan.actions;

  return (
    <div className="mentor-page page-grid">
      <section className="mentor-hero">
        <div>
          <Badge tone="cyan">fase 20 · mentor inteligente</Badge>
          <h1>Mentor de estudo</h1>
          <p>
            O app cruza questões, simulados, revisão, flashcards, discursivas e edital para decidir a próxima ação com menor atrito.
          </p>
          <div className="hero-actions">
            {plan.nextAction && <Button onClick={() => startAction(plan.nextAction)}>{plan.nextAction.cta}</Button>}
            <Button variant="secondary" onClick={() => setCompact((value) => !value)}>{compact ? 'Ver plano completo' : 'Modo uma coisa só'}</Button>
          </div>
        </div>
        <div className="mentor-readiness" style={{ '--mentor-readiness': `${plan.readiness}%` }}>
          <strong>{plan.readiness}%</strong>
          <span>prontidão estimada</span>
        </div>
      </section>

      <div className="stats-grid mentor-kpis">
        <Card><span className="stat-label">Ações de hoje</span><strong className="stat-value">{plan.completedCount}/{plan.actions.length}</strong><small>{plan.completionPercent}% concluído</small></Card>
        <Card><span className="stat-label">Tempo restante</span><strong className="stat-value">{plan.remainingMinutes}m</strong><small>{plan.totalMinutes}m planejados</small></Card>
        <Card><span className="stat-label">Revisões pendentes</span><strong className="stat-value">{plan.stats.reviews.pending}</strong><small>erros, marcadas e pós-simulado</small></Card>
        <Card><span className="stat-label">Discursivas</span><strong className="stat-value">{plan.stats.discursives.count}</strong><small>média: {plan.stats.discursives.average || 0}%</small></Card>
      </div>

      {plan.nextAction && (
        <Card variant="highlight" className="mentor-next-card">
          <div className="section-heading">
            <div>
              <Badge tone={actionTone(plan.nextAction.type)}>próxima ação</Badge>
              <h2>{plan.nextAction.title}</h2>
            </div>
            <strong>{plan.nextAction.minutes} min</strong>
          </div>
          <p>{plan.nextAction.description}</p>
          <div className="mentor-reason-box">
            <span>Por que agora?</span>
            <strong>{plan.nextAction.reason}</strong>
            <small>{plan.nextAction.subject} · {plan.nextAction.topic}</small>
          </div>
          <div className="hero-actions">
            <Button onClick={() => startAction(plan.nextAction)}>{plan.nextAction.cta}</Button>
            <Button variant={plan.nextAction.done ? 'success' : 'secondary'} onClick={() => toggleAction(plan.nextAction)}>
              {plan.nextAction.done ? 'Concluída' : 'Marcar concluída'}
            </Button>
          </div>
        </Card>
      )}

      <div className="mentor-layout">
        <Card className="mentor-actions-card">
          <div className="section-heading">
            <div>
              <Badge tone="purple">roteiro do mentor</Badge>
              <h3>Fila inteligente</h3>
            </div>
            <span className="muted-chip">{plan.today}</span>
          </div>
          <div className="mentor-action-list">
            {visibleActions.map((action, index) => (
              <article className={`mentor-action-row ${action.done ? 'done' : ''}`} key={action.id}>
                <div className="mentor-action-index">{action.done ? '✓' : index + 1}</div>
                <div className="mentor-action-main">
                  <div className="mission-title-line">
                    <Badge tone={actionTone(action.type)}>{action.type}</Badge>
                    <strong>{action.title}</strong>
                  </div>
                  <p>{action.description}</p>
                  <small>{action.reason}</small>
                </div>
                <div className="mentor-action-side">
                  <span>{action.minutes}m</span>
                  <Button size="sm" variant="ghost" onClick={() => startAction(action)}>Abrir</Button>
                  <Button size="sm" variant={action.done ? 'success' : 'secondary'} onClick={() => toggleAction(action)}>{action.done ? 'Feito' : 'Concluir'}</Button>
                </div>
              </article>
            ))}
          </div>
        </Card>

        <Card className="mentor-diagnosis-card">
          <Badge tone="orange">diagnóstico</Badge>
          <h3>Leitura estratégica</h3>
          <ul className="mentor-diagnosis-list">
            {plan.diagnosis.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ProgressBar label="Questões" value={plan.stats.questions.accuracy} />
          <ProgressBar label="Cobertura do banco" value={plan.stats.questions.coverage} />
          <ProgressBar label="Melhor simulado" value={plan.stats.simulations.best} />
          <ProgressBar label="Flashcards revisados" value={Math.min(100, plan.stats.flashcards.reviewed * 2)} />
        </Card>
      </div>
    </div>
  );
}

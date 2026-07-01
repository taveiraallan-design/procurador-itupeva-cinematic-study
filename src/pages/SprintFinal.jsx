import { useMemo } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { QUESTION_PROGRESS_KEY, REVIEW_KEY, SIMULATIONS_KEY, initialReviewProgress } from '../utils/reviewEngine';
import { FLASHCARD_PROGRESS_KEY, initialFlashcardProgress } from '../data/flashcards';
import { SYLLABUS_PROGRESS_KEY, initialSyllabusProgress } from '../pages/Edital';
import {
  SPRINT_PROGRESS_KEY,
  initialSprintProgress,
  buildSprintFinalPlan,
  toggleSprintTask,
  updateSprintWindow,
} from '../utils/sprintEngine';

const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };
const initialDiscursiveProgress = { attempts: [], pinnedCases: [], lastDraft: {} };

const DISC_PROGRESS_KEY = 'discursive_lab_progress_v2';

function toneForAlert(tone) {
  return tone === 'red' ? 'orange' : tone || 'cyan';
}

function blockTone(type) {
  return {
    Revisão: 'orange',
    Questões: 'cyan',
    Simulado: 'purple',
    Discursiva: 'purple',
    Flashcards: 'green',
    Aquecimento: 'green',
    'Teoria direcionada': 'cyan',
  }[type] || 'cyan';
}

export default function SprintFinal({ onNavigate = () => {} }) {
  const [questionProgress] = useLocalStorage(QUESTION_PROGRESS_KEY, initialQuestionProgress);
  const [reviewProgress] = useLocalStorage(REVIEW_KEY, initialReviewProgress);
  const [simulationProgress] = useLocalStorage(SIMULATIONS_KEY, initialSimulationProgress);
  const [flashcardProgress] = useLocalStorage(FLASHCARD_PROGRESS_KEY, initialFlashcardProgress);
  const [discursiveProgress] = useLocalStorage(DISC_PROGRESS_KEY, initialDiscursiveProgress);
  const [syllabusProgress] = useLocalStorage(SYLLABUS_PROGRESS_KEY, initialSyllabusProgress);
  const [sprintProgress, setSprintProgress] = useLocalStorage(SPRINT_PROGRESS_KEY, initialSprintProgress);

  const plan = useMemo(() => buildSprintFinalPlan({
    questionProgress,
    reviewProgress,
    simulationProgress,
    flashcardProgress,
    discursiveProgress,
    syllabusProgress,
    sprintProgress,
  }), [questionProgress, reviewProgress, simulationProgress, flashcardProgress, discursiveProgress, syllabusProgress, sprintProgress]);

  function handleToggle(task) {
    setSprintProgress((current) => toggleSprintTask(current, task.id, !task.done));
  }

  function handleWindowChange(windowSize) {
    setSprintProgress((current) => updateSprintWindow(current, windowSize));
  }

  return (
    <div className="sprint-page page-grid">
      <section className="sprint-hero">
        <div>
          <Badge tone="orange">fase 21 · reta final</Badge>
          <h1>Sprint Final até a Prova</h1>
          <p>Plano de ataque automático baseado no edital, nos seus erros, simulados, revisões, flashcards e discursivas.</p>
          <div className="sprint-window-actions">
            {[7, 15, 30, 45].map((windowSize) => (
              <button key={windowSize} className={plan.selectedWindow === windowSize ? 'active' : ''} onClick={() => handleWindowChange(windowSize)}>
                Sprint {windowSize} dias
              </button>
            ))}
          </div>
        </div>
        <div className="countdown-panel">
          <span>faltam</span>
          <strong>{plan.countdown.days}</strong>
          <em>dias para a prova</em>
          <small>Data oficial: {plan.countdown.officialLabel}</small>
        </div>
      </section>

      <div className="stats-grid sprint-kpis">
        <Card><span className="stat-label">Prontidão</span><strong className="stat-value">{plan.readiness}%</strong><small>{plan.countdown.phase} • urgência {plan.countdown.urgency}</small></Card>
        <Card><span className="stat-label">Missão do dia</span><strong className="stat-value">{plan.completionPercent}%</strong><small>{plan.completedCount}/{plan.tasks.length} blocos concluídos</small></Card>
        <Card><span className="stat-label">Edital coberto</span><strong className="stat-value">{plan.stats.syllabusStats.coverage}%</strong><small>{plan.stats.syllabusStats.completedTopics}/{plan.stats.syllabusStats.totalTopics} tópicos</small></Card>
        <Card><span className="stat-label">Questões</span><strong className="stat-value">{plan.stats.questionStats.answered}</strong><small>{plan.stats.questionStats.accuracy}% de acerto</small></Card>
      </div>

      <div className="sprint-layout">
        <Card variant="highlight" className="today-only-card">
          <div className="section-heading">
            <div>
              <Badge tone="cyan">hoje só faça isso</Badge>
              <h2>3 prioridades máximas</h2>
              <p>Modo objetivo para reduzir distração: conclua estes blocos antes de abrir qualquer coisa nova.</p>
            </div>
            <strong>{plan.topThree.reduce((sum, task) => sum + task.minutes, 0)} min</strong>
          </div>
          <div className="sprint-priority-list">
            {plan.topThree.map((task, index) => (
              <article key={task.id} className={`sprint-task ${task.done ? 'done' : ''}`}>
                <span className="task-rank">{index + 1}</span>
                <div>
                  <Badge tone={blockTone(task.type)}>{task.type}</Badge>
                  <h3>{task.title}</h3>
                  <p>{task.detail}</p>
                  <small>{task.minutes} min • {task.subject}</small>
                </div>
                <div className="task-buttons">
                  <Button variant="secondary" onClick={() => onNavigate(task.targetPage)}>Abrir</Button>
                  <Button variant={task.done ? 'success' : 'ghost'} onClick={() => handleToggle(task)}>{task.done ? 'Concluída' : 'Concluir'}</Button>
                </div>
              </article>
            ))}
          </div>
        </Card>

        <Card className="sprint-alert-card">
          <Badge tone="orange">alertas estratégicos</Badge>
          <h3>O que pode te derrubar</h3>
          <div className="sprint-alert-list">
            {plan.alerts.length ? plan.alerts.map((alert) => (
              <article key={`${alert.title}-${alert.detail}`}>
                <Badge tone={toneForAlert(alert.tone)}>{alert.title}</Badge>
                <p>{alert.detail}</p>
              </article>
            )) : <p>Sem alerta crítico agora. Mantenha o ritmo de questões e revisão.</p>}
          </div>
        </Card>
      </div>

      <Card className="sprint-blocks-card wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="purple">blocos de estudo</Badge>
            <h3>Rotina diária recomendada</h3>
          </div>
          <Button variant="ghost" onClick={() => onNavigate('mentor')}>Abrir Mentor</Button>
        </div>
        <div className="focus-block-grid">
          {plan.focusBlocks.map((block) => (
            <article key={block.id}>
              <strong>{block.label}</strong>
              <span>{block.minutes} min</span>
              <p>{block.description}</p>
            </article>
          ))}
        </div>
      </Card>

      <div className="sprint-layout">
        <Card>
          <Badge tone="cyan">semana</Badge>
          <h3>Plano semanal de reta final</h3>
          <div className="weekly-sprint-list">
            {plan.weeklyPlan.map((day) => (
              <article key={day.day}>
                <div>
                  <strong>{day.day}</strong>
                  <small>{day.questions} questões • {day.discursive ? 'discursiva' : 'sem discursiva'} • {day.simulated ? 'simulado' : 'sem simulado'}</small>
                </div>
                <p>{day.focus.join(' + ')}</p>
              </article>
            ))}
          </div>
        </Card>

        <Card>
          <Badge tone="green">checklist final</Badge>
          <h3>Temas que precisam estar vivos</h3>
          <div className="final-checklist">
            {plan.checklist.map((item) => (
              <article key={item.id}>
                <div>
                  <strong>{item.title}</strong>
                  <span>{Math.min(100, item.status)}%</span>
                </div>
                <ProgressBar label="domínio estimado" value={Math.min(100, item.status)} />
              </article>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

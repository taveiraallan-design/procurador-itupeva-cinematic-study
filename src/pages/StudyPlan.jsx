import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import EmptyState from '../components/ui/EmptyState';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FLASHCARD_PROGRESS_KEY, initialFlashcardProgress } from '../data/flashcards';
import {
  REVIEW_KEY,
  QUESTION_PROGRESS_KEY,
  SIMULATIONS_KEY,
  initialReviewProgress,
} from '../utils/reviewEngine';
import {
  STUDY_PLAN_KEY,
  buildSmartStudyPlan,
  initialStudyPlanProgress,
  toggleMissionCompletion,
} from '../utils/studyPlanEngine';

const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };

const modeCopy = {
  normal: 'Plano completo',
  foco: 'Modo foco',
  semana: 'Semana',
};

function toneForType(type) {
  return {
    simulador: 'purple',
    revisao: 'orange',
    questoes: 'cyan',
    flashcards: 'green',
    simulado: 'purple',
  }[type] || 'cyan';
}

export default function StudyPlan({ onNavigate = () => {} }) {
  const [questionProgress] = useLocalStorage(QUESTION_PROGRESS_KEY, initialQuestionProgress);
  const [reviewProgress] = useLocalStorage(REVIEW_KEY, initialReviewProgress);
  const [simulationProgress] = useLocalStorage(SIMULATIONS_KEY, initialSimulationProgress);
  const [flashcardProgress] = useLocalStorage(FLASHCARD_PROGRESS_KEY, initialFlashcardProgress);
  const [studyPlanProgress, setStudyPlanProgress] = useLocalStorage(STUDY_PLAN_KEY, initialStudyPlanProgress);
  const [mode, setMode] = useState('normal');

  const plan = useMemo(() => buildSmartStudyPlan({
    questionProgress,
    reviewProgress,
    simulationProgress,
    flashcardProgress,
    studyPlanProgress,
  }), [questionProgress, reviewProgress, simulationProgress, flashcardProgress, studyPlanProgress]);

  const visibleMissions = mode === 'foco' && plan.nextMission ? [plan.nextMission] : plan.missions;

  function handleToggle(mission) {
    const isDone = plan.completedIds.has(mission.id);
    setStudyPlanProgress((current) => toggleMissionCompletion(current, mission, !isDone));
  }

  function handleStart(mission) {
    if (mission?.targetPage) onNavigate(mission.targetPage);
  }

  return (
    <div className="study-plan-page page-grid">
      <section className="study-plan-hero">
        <div>
          <Badge tone="cyan">fase 10 · plano inteligente</Badge>
          <h1>Missão de estudo do dia</h1>
          <p>
            O plano agora se recalibra com seus erros, simulados, revisões e flashcards. Ele escolhe a próxima ação para evitar estudo solto.
          </p>
          <div className="study-plan-actions">
            {Object.entries(modeCopy).map(([id, label]) => (
              <button key={id} className={mode === id ? 'active' : ''} onClick={() => setMode(id)}>{label}</button>
            ))}
          </div>
        </div>
        <div className="mission-dial" style={{ '--mission-score': `${plan.completionPercent}%` }}>
          <strong>{plan.completionPercent}%</strong>
          <span>concluído hoje</span>
        </div>
      </section>

      <div className="stats-grid plan-kpis">
        <Card><span className="stat-label">Tempo planejado</span><strong className="stat-value">{plan.totalMinutes}m</strong><small>{plan.completedMinutes}m já concluídos</small></Card>
        <Card><span className="stat-label">Próxima ação</span><strong className="stat-value text-small">{plan.nextMission?.type || 'finalizado'}</strong><small>{plan.nextMission?.subject || 'missão do dia completa'}</small></Card>
        <Card><span className="stat-label">Revisões na fila</span><strong className="stat-value">{plan.diagnostics.reviewCount}</strong><small>erros, marcadas e pós-simulado</small></Card>
        <Card><span className="stat-label">Flashcards vencidos</span><strong className="stat-value">{plan.diagnostics.flashDue}</strong><small>memorização ativa</small></Card>
      </div>

      {mode !== 'semana' ? (
        <div className="study-plan-layout">
          <Card variant="highlight" className="next-mission-card">
            <Badge tone="orange">próxima ação</Badge>
            <h2>{plan.nextMission?.title || 'Missão concluída'}</h2>
            <p>{plan.nextMission?.detail || 'Você zerou a missão do dia. Faça uma revisão leve ou um simulado curto para manter ritmo.'}</p>
            <div className="mission-meta-grid">
              <span><strong>{plan.nextMission?.minutes || 0} min</strong><small>duração estimada</small></span>
              <span><strong>{plan.nextMission?.subject || 'Livre'}</strong><small>matéria foco</small></span>
              <span><strong>{plan.nextMission?.topic || 'manutenção'}</strong><small>tema</small></span>
            </div>
            <div className="hero-actions">
              {plan.nextMission && <Button onClick={() => handleStart(plan.nextMission)}>{plan.nextMission.action}</Button>}
              {plan.nextMission && <Button variant="secondary" onClick={() => handleToggle(plan.nextMission)}>Marcar concluída</Button>}
            </div>
          </Card>

          <Card className="mission-list-card">
            <div className="section-heading">
              <div>
                <Badge tone="purple">roteiro inteligente</Badge>
                <h3>Blocos de hoje</h3>
              </div>
              <strong>{plan.completedIds.size}/{plan.missions.length}</strong>
            </div>
            <div className="mission-list">
              {visibleMissions.map((mission, index) => {
                const done = plan.completedIds.has(mission.id);
                return (
                  <article className={`mission-row ${done ? 'mission-done' : ''}`} key={mission.id}>
                    <div className="mission-order">{done ? '✓' : index + 1}</div>
                    <div className="mission-body">
                      <div className="mission-title-line">
                        <Badge tone={toneForType(mission.type)}>{mission.type}</Badge>
                        <strong>{mission.title}</strong>
                      </div>
                      <p>{mission.detail}</p>
                      <small>{mission.reason}</small>
                    </div>
                    <div className="mission-side">
                      <span>{mission.minutes} min</span>
                      <div className="mission-buttons">
                        <Button size="sm" variant="ghost" onClick={() => handleStart(mission)}>Abrir</Button>
                        <Button size="sm" variant={done ? 'secondary' : 'primary'} onClick={() => handleToggle(mission)}>{done ? 'Desfazer' : 'Concluir'}</Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Card>
        </div>
      ) : (
        <Card className="weekly-plan-card">
          <div className="section-heading">
            <div>
              <Badge tone="cyan">planejamento semanal</Badge>
              <h3>Sequência sugerida</h3>
            </div>
            <span className="muted-chip">ajustada por desempenho</span>
          </div>
          <div className="weekly-grid">
            {plan.weekly.map((day) => (
              <article key={day.day}>
                <span>{day.day}</span>
                <strong>{day.subject}</strong>
                <p>{day.type}</p>
                <small>{day.topic} · {day.minutes} min</small>
              </article>
            ))}
          </div>
        </Card>
      )}

      <Card>
        <div className="section-heading">
          <div>
            <Badge tone="orange">diagnóstico automático</Badge>
            <h3>Por que este plano?</h3>
          </div>
        </div>
        {plan.diagnostics.mainWeak.subject ? (
          <div className="plan-diagnosis-grid">
            <article>
              <span>Pressão principal</span>
              <strong>{plan.diagnostics.mainWeak.subject}</strong>
              <small>{plan.diagnostics.mainWeak.mainTopic} · {plan.diagnostics.mainWeak.accuracy}% de acerto</small>
            </article>
            <article>
              <span>Segundo foco</span>
              <strong>{plan.diagnostics.secondWeak.subject}</strong>
              <small>{plan.diagnostics.secondWeak.mainTopic}</small>
            </article>
            <article>
              <span>Último simulado</span>
              <strong>{plan.diagnostics.simulationAttempts ? `${plan.diagnostics.lastSimulationPercent}%` : 'sem base'}</strong>
              <small>{plan.diagnostics.simulationAttempts ? 'use a correção para revisar' : 'faça prova rápida para calibrar'}</small>
            </article>
          </div>
        ) : (
          <EmptyState title="Sem diagnóstico ainda" description="Responda questões e faça um simulado para o plano ficar mais preciso." />
        )}
        <ProgressBar label="Missão diária" value={plan.completionPercent} />
      </Card>
    </div>
  );
}

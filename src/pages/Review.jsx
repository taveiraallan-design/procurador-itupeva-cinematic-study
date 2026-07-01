import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  QUESTION_PROGRESS_KEY,
  REVIEW_KEY,
  SIMULATIONS_KEY,
  buildReviewQueue,
  buildSubjectPlan,
  calculateReviewStats,
  formatShortDate,
  initialReviewProgress,
  registerReview,
} from '../utils/reviewEngine';

const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };

function qualityLabel(quality) {
  return {
    again: 'Agora',
    hard: 'Amanhã',
    good: '3 dias',
    easy: '7 dias',
  }[quality];
}

export default function Review() {
  const [questionProgress] = useLocalStorage(QUESTION_PROGRESS_KEY, initialQuestionProgress);
  const [simulationProgress] = useLocalStorage(SIMULATIONS_KEY, initialSimulationProgress);
  const [reviewProgress, setReviewProgress] = useLocalStorage(REVIEW_KEY, initialReviewProgress);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [filter, setFilter] = useState('today');

  const queue = useMemo(() => buildReviewQueue(questionProgress, reviewProgress, simulationProgress), [questionProgress, reviewProgress, simulationProgress]);
  const filteredQueue = useMemo(() => {
    if (filter === 'errors') return queue.filter((item) => item.reasons?.includes('erro recente') || item.type === 'simulation-topic');
    if (filter === 'marked') return queue.filter((item) => item.reasons?.includes('marcada para revisão'));
    if (filter === 'simulation') return queue.filter((item) => item.type === 'simulation-topic');
    return queue.filter((item) => !item.nextReviewAt || new Date(item.nextReviewAt) <= new Date());
  }, [filter, queue]);

  const stats = useMemo(() => calculateReviewStats(queue, reviewProgress), [queue, reviewProgress]);
  const subjectPlan = useMemo(() => buildSubjectPlan(queue), [queue]);
  const currentItem = filteredQueue[activeIndex] || filteredQueue[0];
  const progressValue = filteredQueue.length ? Math.round(((activeIndex + 1) / filteredQueue.length) * 100) : 0;

  function selectFilter(value) {
    setFilter(value);
    setActiveIndex(0);
    setRevealed(false);
  }

  function goToNext() {
    setRevealed(false);
    setActiveIndex((index) => filteredQueue.length ? (index + 1) % filteredQueue.length : 0);
  }

  function handleReview(quality) {
    if (!currentItem) return;
    setReviewProgress((current) => registerReview(currentItem, quality, current));
    goToNext();
  }

  return (
    <div className="review-page page-grid">
      <section className="review-hero">
        <div>
          <Badge tone="orange">revisão inteligente</Badge>
          <h1>Central de Revisão</h1>
          <p>Transforme erros, questões marcadas e diagnóstico dos simulados em uma fila objetiva de revisão.</p>
        </div>
        <div className="review-scoreboard">
          <article><span>Fila total</span><strong>{stats.total}</strong></article>
          <article><span>Para hoje</span><strong>{stats.today}</strong></article>
          <article><span>Erros</span><strong>{stats.errors}</strong></article>
          <article><span>Revisadas hoje</span><strong>{stats.reviewedToday}</strong></article>
        </div>
      </section>

      <Card className="wide-card review-command-card">
        <div className="section-heading">
          <div>
            <Badge tone="cyan">próxima ação</Badge>
            <h3>Fila dinâmica</h3>
            <p>Prioridade atual: <strong>{stats.weakSubject}</strong></p>
          </div>
          <div className="review-filter-row" role="tablist" aria-label="Filtros da revisão">
            <button className={filter === 'today' ? 'active' : ''} onClick={() => selectFilter('today')}>Hoje</button>
            <button className={filter === 'errors' ? 'active' : ''} onClick={() => selectFilter('errors')}>Só erros</button>
            <button className={filter === 'marked' ? 'active' : ''} onClick={() => selectFilter('marked')}>Marcadas</button>
            <button className={filter === 'simulation' ? 'active' : ''} onClick={() => selectFilter('simulation')}>Pós-simulado</button>
          </div>
        </div>
        <ProgressBar label={`${filteredQueue.length} itens no filtro atual`} value={progressValue} />
      </Card>

      <div className="review-layout">
        <Card className="review-session-card">
          {!currentItem ? (
            <EmptyState
              title="Nenhuma revisão pendente neste filtro"
              description="Erre ou marque questões para gerar uma fila cirúrgica. Depois de simulados, os temas fracos também aparecem aqui."
            />
          ) : (
            <>
              <div className="review-card-header">
                <div>
                  <Badge tone={currentItem.type === 'simulation-topic' ? 'purple' : 'orange'}>{currentItem.reasons?.[0] || 'revisão'}</Badge>
                  <h2>{currentItem.title}</h2>
                  <p>{currentItem.subject} • {currentItem.difficulty}</p>
                </div>
                <div className="review-position"><strong>{activeIndex + 1}</strong><span>/{filteredQueue.length}</span></div>
              </div>

              <div className="review-question-box">
                <span className="review-kicker">O que revisar agora</span>
                <p>{currentItem.statement}</p>
                <div className="review-reasons">
                  {(currentItem.reasons || []).map((reason) => <span key={reason}>{reason}</span>)}
                  {currentItem.nextReviewAt && <span>vence em {formatShortDate(currentItem.nextReviewAt)}</span>}
                </div>
              </div>

              <div className={`review-answer-box ${revealed ? 'open' : ''}`}>
                <div className="section-heading compact">
                  <h3>{revealed ? 'Gabarito estratégico' : 'Tente lembrar antes de revelar'}</h3>
                  <Button variant="secondary" onClick={() => setRevealed((value) => !value)}>{revealed ? 'Ocultar' : 'Revelar'}</Button>
                </div>
                {revealed ? (
                  <div className="review-reveal-content">
                    <p><strong>Resposta:</strong> {currentItem.correctAnswer}</p>
                    <p><strong>Explicação:</strong> {currentItem.explanation}</p>
                    <p className="trap-line"><strong>Pegadinha:</strong> {currentItem.trap}</p>
                    <small><strong>Fundamento:</strong> {currentItem.legalBasis}</small>
                  </div>
                ) : (
                  <p className="muted-text">Leia o enunciado, fale a resposta em voz alta e só então revele o gabarito. Isso força recuperação ativa.</p>
                )}
              </div>

              <div className="review-quality-grid">
                <button onClick={() => handleReview('again')}><strong>Errei</strong><span>volta hoje</span></button>
                <button onClick={() => handleReview('hard')}><strong>Difícil</strong><span>revisar amanhã</span></button>
                <button onClick={() => handleReview('good')}><strong>Bom</strong><span>revisar em 3 dias</span></button>
                <button onClick={() => handleReview('easy')}><strong>Fácil</strong><span>revisar em 7 dias</span></button>
              </div>

              <div className="review-actions-row">
                <Button variant="ghost" onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}>Voltar</Button>
                <Button variant="secondary" onClick={goToNext}>Pular item</Button>
              </div>
            </>
          )}
        </Card>

        <aside className="review-side-panel">
          <Card>
            <Badge tone="purple">plano automático</Badge>
            <h3>Temas prioritários</h3>
            <div className="review-subject-list">
              {subjectPlan.slice(0, 6).map((group) => (
                <article key={group.subject}>
                  <div><strong>{group.subject}</strong><span>{group.count} item(ns)</span></div>
                  <small>{group.topics.join(' • ')}</small>
                </article>
              ))}
              {!subjectPlan.length && <p className="muted-text">Aparecerá quando houver erros, marcações ou resultado de simulado.</p>}
            </div>
          </Card>

          <Card variant="highlight">
            <Badge tone="cyan">método</Badge>
            <h3>Como usar</h3>
            <ol className="review-method-list">
              <li>Leia o item sem olhar a resposta.</li>
              <li>Explique mentalmente como a banca cobraria.</li>
              <li>Revele o gabarito.</li>
              <li>Classifique: errei, difícil, bom ou fácil.</li>
            </ol>
          </Card>

          <Card>
            <Badge tone="green">histórico</Badge>
            <h3>Últimas revisões</h3>
            <div className="review-history-list">
              {(reviewProgress.sessions || []).slice(0, 6).map((session) => (
                <article key={session.id}>
                  <strong>{session.topic}</strong>
                  <span>{qualityLabel(session.quality)} • próxima {formatShortDate(session.nextReviewAt)}</span>
                </article>
              ))}
              {!(reviewProgress.sessions || []).length && <p className="muted-text">Nenhuma revisão registrada ainda.</p>}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

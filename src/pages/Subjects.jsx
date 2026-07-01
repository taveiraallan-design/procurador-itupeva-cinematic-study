import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import EmptyState from '../components/ui/EmptyState';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { subjectTracks } from '../data/subjects';
import { questions } from '../data/questions';
import { FLASHCARD_PROGRESS_KEY, initialFlashcardProgress } from '../data/flashcards';
import { REVIEW_KEY, initialReviewProgress, buildReviewQueue } from '../utils/reviewEngine';

const QUESTION_PROGRESS_KEY = 'questions_progress_v1';
const SIMULATIONS_KEY = 'simulations_progress_v1';
const SUBJECTS_STATE_KEY = 'subjects_progress_v1';
const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };
const initialSubjectsState = { selectedSubjectId: 'direito-administrativo', completedTopics: {}, pinnedSubjects: [] };

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function calculateSubjectMetrics(subject, questionProgress, reviewQueue, flashcardProgress, simulations) {
  const relatedQuestions = questions.filter((question) => question.subject === subject.name);
  const answers = relatedQuestions.map((question) => questionProgress.answers?.[question.id]).filter(Boolean);
  const correct = answers.filter((answer) => answer.lastCorrect).length;
  const wrong = answers.filter((answer) => answer.hasWrong || answer.lastCorrect === false).length;
  const accuracy = answers.length ? Math.round((correct / answers.length) * 100) : 0;
  const coverage = relatedQuestions.length ? Math.round((answers.length / relatedQuestions.length) * 100) : 0;
  const marked = (questionProgress.marked || []).filter((id) => relatedQuestions.some((question) => question.id === id)).length;
  const pendingReviews = reviewQueue.filter((item) => item.subject === subject.name).length;
  const flashcards = Object.values(flashcardProgress.cards || {}).filter((card) => card.subject === subject.name);
  const dueFlashcards = flashcards.filter((card) => !card.nextReviewAt || new Date(card.nextReviewAt) <= new Date()).length;
  const simWeakHits = (simulations.lastResult?.weakTopics || []).filter((item) => item.subject === subject.name).length;

  const completedScore = Math.min(100, Math.round((coverage * 0.35) + (accuracy * 0.35) + (Math.min(100, correct * 10) * 0.15) + (Math.max(0, 100 - pendingReviews * 12) * 0.15)));
  const riskScore = wrong * 16 + pendingReviews * 12 + simWeakHits * 20 + dueFlashcards * 6;

  return {
    totalQuestions: relatedQuestions.length,
    answered: answers.length,
    correct,
    wrong,
    accuracy,
    coverage,
    marked,
    pendingReviews,
    dueFlashcards,
    simWeakHits,
    mastery: answers.length ? completedScore : Math.min(42, subject.priority === 'Crítica' ? 28 : 34),
    riskScore,
  };
}

function riskTone(priority) {
  if (priority === 'Crítica') return 'orange';
  if (priority === 'Alta') return 'purple';
  return 'cyan';
}

function masteryLabel(value) {
  if (value >= 80) return 'forte';
  if (value >= 55) return 'em consolidação';
  if (value >= 30) return 'precisa de treino';
  return 'inicial';
}

export default function Subjects({ onNavigate }) {
  const [questionProgress] = useLocalStorage(QUESTION_PROGRESS_KEY, initialQuestionProgress);
  const [simulationProgress] = useLocalStorage(SIMULATIONS_KEY, initialSimulationProgress);
  const [reviewProgress] = useLocalStorage(REVIEW_KEY, initialReviewProgress);
  const [flashcardProgress] = useLocalStorage(FLASHCARD_PROGRESS_KEY, initialFlashcardProgress);
  const [subjectsState, setSubjectsState] = useLocalStorage(SUBJECTS_STATE_KEY, initialSubjectsState);
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('Todas');

  const reviewQueue = useMemo(
    () => buildReviewQueue(questionProgress, reviewProgress, simulationProgress),
    [questionProgress, reviewProgress, simulationProgress]
  );

  const subjectsWithMetrics = useMemo(() => subjectTracks.map((subject) => ({
    ...subject,
    metrics: calculateSubjectMetrics(subject, questionProgress, reviewQueue, flashcardProgress, simulationProgress),
  })), [flashcardProgress, questionProgress, reviewQueue, simulationProgress]);

  const filteredSubjects = useMemo(() => subjectsWithMetrics.filter((subject) => {
    const matchesQuery = !query || normalize(`${subject.name} ${subject.cinematicTheme} ${subject.mission} ${subject.topics.map((topic) => topic.name).join(' ')}`).includes(normalize(query));
    const matchesGroup = group === 'Todas' || subject.group === group;
    return matchesQuery && matchesGroup;
  }), [group, query, subjectsWithMetrics]);

  const selectedSubject = subjectsWithMetrics.find((subject) => subject.id === subjectsState.selectedSubjectId) || subjectsWithMetrics[0];
  const selectedCompleted = subjectsState.completedTopics?.[selectedSubject.id] || [];
  const pinned = new Set(subjectsState.pinnedSubjects || []);
  const groups = ['Todas', ...new Set(subjectTracks.map((subject) => subject.group))];
  const prioritySubject = [...subjectsWithMetrics].sort((a, b) => b.metrics.riskScore - a.metrics.riskScore || a.metrics.mastery - b.metrics.mastery)[0];
  const globalMastery = Math.round(subjectsWithMetrics.reduce((sum, item) => sum + item.metrics.mastery, 0) / subjectsWithMetrics.length);
  const totalPending = reviewQueue.length;
  const totalAnswered = Object.keys(questionProgress.answers || {}).length;

  function selectSubject(id) {
    setSubjectsState((current) => ({ ...current, selectedSubjectId: id }));
  }

  function toggleTopic(topicId) {
    setSubjectsState((current) => {
      const currentList = new Set(current.completedTopics?.[selectedSubject.id] || []);
      if (currentList.has(topicId)) currentList.delete(topicId);
      else currentList.add(topicId);
      return {
        ...current,
        completedTopics: {
          ...(current.completedTopics || {}),
          [selectedSubject.id]: [...currentList],
        },
      };
    });
  }

  function togglePinned(id) {
    setSubjectsState((current) => {
      const next = new Set(current.pinnedSubjects || []);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { ...current, pinnedSubjects: [...next] };
    });
  }

  return (
    <div className="subjects-page page-grid">
      <section className="subjects-hero">
        <div>
          <Badge tone="cyan">trilhas por disciplina</Badge>
          <h1>Mapa de Matérias</h1>
          <p>Veja domínio, risco de prova, tópicos críticos e atalhos para estudar cada disciplina sem se perder.</p>
          <div className="subjects-hero-actions">
            <Button onClick={() => onNavigate?.('questoes')}>Treinar questões</Button>
            <Button variant="secondary" onClick={() => onNavigate?.('revisao')}>Abrir revisão</Button>
            <Button variant="ghost" onClick={() => onNavigate?.('simulator')}>Simulador jurídico</Button>
          </div>
        </div>
        <div className="subjects-command-center">
          <article><span>Domínio médio</span><strong>{globalMastery}%</strong></article>
          <article><span>Questões feitas</span><strong>{totalAnswered}</strong></article>
          <article><span>Revisões</span><strong>{totalPending}</strong></article>
          <article><span>Prioridade</span><strong>{prioritySubject?.name || '—'}</strong></article>
        </div>
      </section>

      <Card className="subjects-filter-card wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="purple">controle</Badge>
            <h3>Filtrar trilhas</h3>
          </div>
          <div className="subjects-filter-actions">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar matéria, tópico ou pegadinha..." />
            <select value={group} onChange={(event) => setGroup(event.target.value)}>
              {groups.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>
      </Card>

      <div className="subjects-layout">
        <main className="subjects-board">
          {!filteredSubjects.length ? (
            <EmptyState title="Nenhuma matéria encontrada" description="Ajuste a busca ou o grupo para voltar ao mapa completo." />
          ) : filteredSubjects.map((subject) => {
            const isSelected = selectedSubject.id === subject.id;
            const isPinned = pinned.has(subject.id);
            return (
              <button
                key={subject.id}
                type="button"
                className={`subject-track-card ${isSelected ? 'active' : ''}`}
                onClick={() => selectSubject(subject.id)}
              >
                <div className="subject-track-top">
                  <Badge tone={riskTone(subject.priority)}>{subject.priority}</Badge>
                  <span>{isPinned ? '★ fixada' : subject.group}</span>
                </div>
                <h3>{subject.name}</h3>
                <p>{subject.cinematicTheme}</p>
                <ProgressBar label={`Domínio ${masteryLabel(subject.metrics.mastery)}`} value={subject.metrics.mastery} />
                <div className="subject-track-metrics">
                  <span><b>{subject.metrics.answered}</b> questões</span>
                  <span><b>{subject.metrics.accuracy}%</b> acerto</span>
                  <span><b>{subject.metrics.pendingReviews}</b> revisões</span>
                </div>
              </button>
            );
          })}
        </main>

        <aside className="subject-detail-panel">
          <Card variant="highlight">
            <div className="subject-detail-header">
              <div>
                <Badge tone={riskTone(selectedSubject.priority)}>{selectedSubject.examWeight}</Badge>
                <h2>{selectedSubject.name}</h2>
                <p>{selectedSubject.mission}</p>
              </div>
              <Button variant="ghost" onClick={() => togglePinned(selectedSubject.id)}>{pinned.has(selectedSubject.id) ? 'Desfixar' : 'Fixar'}</Button>
            </div>
            <div className="subject-detail-grid">
              <article><span>Domínio</span><strong>{selectedSubject.metrics.mastery}%</strong></article>
              <article><span>Cobertura</span><strong>{selectedSubject.metrics.coverage}%</strong></article>
              <article><span>Acerto</span><strong>{selectedSubject.metrics.accuracy}%</strong></article>
              <article><span>Erros</span><strong>{selectedSubject.metrics.wrong}</strong></article>
            </div>
            <ProgressBar label="Evolução da disciplina" value={selectedSubject.metrics.mastery} />
          </Card>

          <Card>
            <Badge tone="cyan">próxima ação</Badge>
            <h3>{selectedSubject.nextAction}</h3>
            <p>Use os atalhos abaixo para transformar esta matéria em estudo ativo.</p>
            <div className="subject-action-grid">
              <Button onClick={() => onNavigate?.('questoes')}>Resolver questões</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('flashcards')}>Flashcards</Button>
              <Button variant="ghost" onClick={() => onNavigate?.('revisao')}>Revisar erros</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('simulados')}>Simulado</Button>
              <Button variant="ghost" onClick={() => onNavigate?.('simulator')}>Abrir cena</Button>
            </div>
          </Card>

          <Card>
            <div className="section-heading compact">
              <div>
                <Badge tone="orange">tópicos</Badge>
                <h3>Checklist da disciplina</h3>
              </div>
              <strong>{selectedCompleted.length}/{selectedSubject.topics.length}</strong>
            </div>
            <div className="subject-topic-list">
              {selectedSubject.topics.map((topic) => {
                const done = selectedCompleted.includes(topic.id);
                return (
                  <button key={topic.id} type="button" className={done ? 'done' : ''} onClick={() => toggleTopic(topic.id)}>
                    <span>{done ? '✓' : '○'}</span>
                    <div>
                      <strong>{topic.name}</strong>
                      <small>{topic.goal}</small>
                    </div>
                    <em>{topic.risk}</em>
                  </button>
                );
              })}
            </div>
          </Card>

          <Card>
            <Badge tone="purple">diagnóstico</Badge>
            <div className="subject-diagnosis-list">
              <span>{selectedSubject.metrics.pendingReviews ? `${selectedSubject.metrics.pendingReviews} revisão(ões) pendentes nesta matéria.` : 'Nenhuma revisão pendente específica agora.'}</span>
              <span>{selectedSubject.metrics.marked ? `${selectedSubject.metrics.marked} questão(ões) marcadas para revisão.` : 'Nenhuma questão marcada desta matéria.'}</span>
              <span>{selectedSubject.metrics.dueFlashcards ? `${selectedSubject.metrics.dueFlashcards} flashcard(s) vencidos.` : 'Flashcards em dia ou ainda não iniciados.'}</span>
              <span>{selectedSubject.metrics.simWeakHits ? 'Apareceu como tema fraco no último simulado.' : 'Não apareceu como fraqueza recente de simulado.'}</span>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

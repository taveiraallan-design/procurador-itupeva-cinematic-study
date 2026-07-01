import { useMemo } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import EmptyState from '../components/ui/EmptyState';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { questions } from '../data/questions';
import { REVIEW_KEY, initialReviewProgress, buildReviewQueue, calculateReviewStats } from '../utils/reviewEngine';
import { FLASHCARD_PROGRESS_KEY, initialFlashcardProgress, flashcards } from '../data/flashcards';

const QUESTION_PROGRESS_KEY = 'questions_progress_v1';
const SIMULATIONS_KEY = 'simulations_progress_v1';

const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };

function percent(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

function formatDateTime(value) {
  if (!value) return 'sem registro';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'sem registro';
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(date);
}

function formatSeconds(seconds = 0) {
  const safe = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(safe / 60);
  const rest = String(safe % 60).padStart(2, '0');
  return `${minutes}m${rest}s`;
}

function buildQuestionAnalytics(progress) {
  const answers = Object.values(progress.answers || {});
  const answered = answers.length;
  const correct = answers.filter((item) => item.lastCorrect).length;
  const wrong = answers.filter((item) => item.hasWrong || item.lastCorrect === false).length;
  const accuracy = percent(correct, answered);

  const bySubject = questions.reduce((acc, question) => {
    if (!acc[question.subject]) {
      acc[question.subject] = { subject: question.subject, totalBank: 0, answered: 0, correct: 0, wrong: 0, marked: 0, topics: {} };
    }
    const group = acc[question.subject];
    group.totalBank += 1;
    if (!group.topics[question.topic]) group.topics[question.topic] = { topic: question.topic, answered: 0, correct: 0, wrong: 0 };
    const record = progress.answers?.[question.id];
    if (record) {
      group.answered += 1;
      group.topics[question.topic].answered += 1;
      if (record.lastCorrect) {
        group.correct += 1;
        group.topics[question.topic].correct += 1;
      }
      if (record.hasWrong || record.lastCorrect === false) {
        group.wrong += 1;
        group.topics[question.topic].wrong += 1;
      }
    }
    if ((progress.marked || []).includes(question.id)) group.marked += 1;
    return acc;
  }, {});

  const subjects = Object.values(bySubject).map((group) => ({
    ...group,
    accuracy: percent(group.correct, group.answered),
    coverage: percent(group.answered, group.totalBank),
  }));

  const subjectRanking = [...subjects]
    .filter((item) => item.answered > 0)
    .sort((a, b) => a.accuracy - b.accuracy || b.wrong - a.wrong || b.answered - a.answered);

  const weakTopics = subjects.flatMap((subject) => Object.values(subject.topics)
    .filter((topic) => topic.answered > 0)
    .map((topic) => ({
      subject: subject.subject,
      topic: topic.topic,
      answered: topic.answered,
      wrong: topic.wrong,
      correct: topic.correct,
      accuracy: percent(topic.correct, topic.answered),
    })))
    .sort((a, b) => a.accuracy - b.accuracy || b.wrong - a.wrong)
    .slice(0, 6);

  const historyByDay = (progress.history || []).reduce((acc, item) => {
    const key = item.answeredAt ? item.answeredAt.slice(0, 10) : 'sem-data';
    if (!acc[key]) acc[key] = { date: key, total: 0, correct: 0, wrong: 0 };
    acc[key].total += 1;
    if (item.correct) acc[key].correct += 1;
    else acc[key].wrong += 1;
    return acc;
  }, {});

  const daily = Object.values(historyByDay).sort((a, b) => a.date.localeCompare(b.date)).slice(-7);

  return {
    answered,
    correct,
    wrong,
    accuracy,
    marked: progress.marked?.length || 0,
    subjects,
    subjectRanking,
    weakSubject: subjectRanking[0]?.subject || 'Nenhum ainda',
    weakTopics,
    daily,
  };
}

function buildSimulationAnalytics(progress) {
  const attempts = progress.attempts || [];
  const total = attempts.length;
  const best = attempts.reduce((max, attempt) => Math.max(max, attempt.percent || 0), 0);
  const average = total ? Math.round(attempts.reduce((sum, attempt) => sum + (attempt.percent || 0), 0) / total) : 0;
  const last = progress.lastResult || attempts[0] || null;
  const avgTime = total ? Math.round(attempts.reduce((sum, attempt) => sum + (attempt.timeSpentSeconds || 0), 0) / total) : 0;

  const byType = attempts.reduce((acc, attempt) => {
    const key = attempt.typeTitle || 'Simulado';
    if (!acc[key]) acc[key] = { title: key, total: 0, best: 0, sum: 0 };
    acc[key].total += 1;
    acc[key].sum += attempt.percent || 0;
    acc[key].best = Math.max(acc[key].best, attempt.percent || 0);
    return acc;
  }, {});

  return {
    total,
    best,
    average,
    last,
    avgTime,
    byType: Object.values(byType).map((item) => ({ ...item, average: Math.round(item.sum / item.total) })),
  };
}

function buildFlashcardAnalytics(progress) {
  const records = Object.values(progress.cards || {});
  const now = new Date();
  const due = records.filter((record) => !record.nextReviewAt || new Date(record.nextReviewAt) <= now).length;
  const mastered = records.filter((record) => record.level === 'easy' || (record.easiness || 0) >= 3).length;
  const reviewed = records.length;
  const deckCoverage = percent(reviewed, flashcards.length);
  return { reviewed, due, mastered, deckCoverage, totalBank: flashcards.length };
}

function buildReadiness(questionStats, simulationStats, reviewStats, flashcardStats) {
  const questionScore = Math.min(40, Math.round(questionStats.accuracy * 0.24 + questionStats.answered * 0.4));
  const simulationScore = Math.min(25, Math.round(simulationStats.average * 0.18 + simulationStats.total * 3));
  const reviewScore = Math.min(20, Math.max(0, 20 - reviewStats.today * 2 + reviewStats.reviewedToday * 4));
  const flashcardScore = Math.min(15, Math.round(flashcardStats.deckCoverage * 0.08 + flashcardStats.mastered * 1.5));
  return Math.max(0, Math.min(100, questionScore + simulationScore + reviewScore + flashcardScore));
}

function getDiagnosis(readiness, questionStats, simulationStats, reviewStats) {
  if (!questionStats.answered) return 'Comece com 10 questões para liberar diagnóstico real.';
  if (reviewStats.today > 8) return 'Há revisão acumulada. Priorize erros e marcadas antes de avançar conteúdo.';
  if (simulationStats.total === 0) return 'Faça uma prova rápida para calibrar seu desempenho sob tempo.';
  if (readiness >= 75) return 'Boa tração. Mantenha simulados e revise os temas fracos para consolidar.';
  if (questionStats.accuracy < 55) return 'A base ainda está instável. Use explicação comentada e flashcards dos erros.';
  return 'Você está no caminho. A próxima melhora vem de simulado + revisão pós-prova.';
}

export default function Statistics() {
  const [questionProgress] = useLocalStorage(QUESTION_PROGRESS_KEY, initialQuestionProgress);
  const [simulationProgress] = useLocalStorage(SIMULATIONS_KEY, initialSimulationProgress);
  const [reviewProgress] = useLocalStorage(REVIEW_KEY, initialReviewProgress);
  const [flashcardProgress] = useLocalStorage(FLASHCARD_PROGRESS_KEY, initialFlashcardProgress);

  const questionStats = useMemo(() => buildQuestionAnalytics(questionProgress), [questionProgress]);
  const simulationStats = useMemo(() => buildSimulationAnalytics(simulationProgress), [simulationProgress]);
  const reviewQueue = useMemo(() => buildReviewQueue(questionProgress, reviewProgress, simulationProgress), [questionProgress, reviewProgress, simulationProgress]);
  const reviewStats = useMemo(() => calculateReviewStats(reviewQueue, reviewProgress), [reviewQueue, reviewProgress]);
  const flashcardStats = useMemo(() => buildFlashcardAnalytics(flashcardProgress), [flashcardProgress]);
  const readiness = useMemo(() => buildReadiness(questionStats, simulationStats, reviewStats, flashcardStats), [questionStats, simulationStats, reviewStats, flashcardStats]);
  const diagnosis = getDiagnosis(readiness, questionStats, simulationStats, reviewStats);

  const hasData = questionStats.answered > 0 || simulationStats.total > 0 || reviewStats.reviewedToday > 0 || flashcardStats.reviewed > 0;

  return (
    <div className="statistics-page page-grid">
      <section className="statistics-hero">
        <div>
          <Badge tone="cyan">painel executivo</Badge>
          <h1>Estatísticas Premium</h1>
          <p>Leia sua preparação como um cockpit: questões, simulados, revisão e flashcards conectados em um só diagnóstico.</p>
        </div>
        <div className="readiness-meter" aria-label={`Prontidão ${readiness}%`}>
          <div className="readiness-ring" style={{ '--score': `${readiness * 3.6}deg` }}>
            <strong>{readiness}%</strong>
            <span>prontidão</span>
          </div>
        </div>
      </section>

      <div className="stats-grid executive-kpis">
        <Card><span className="stat-label">Questões</span><strong className="stat-value">{questionStats.answered}</strong><small>{questionStats.accuracy}% de acerto • {questionStats.wrong} erros</small></Card>
        <Card><span className="stat-label">Simulados</span><strong className="stat-value">{simulationStats.total}</strong><small>melhor {simulationStats.best}% • média {simulationStats.average}%</small></Card>
        <Card><span className="stat-label">Revisões hoje</span><strong className="stat-value">{reviewStats.today}</strong><small>{reviewStats.errors} erros na fila • {reviewStats.marked} marcadas</small></Card>
        <Card><span className="stat-label">Flashcards</span><strong className="stat-value">{flashcardStats.reviewed}</strong><small>{flashcardStats.due} vencidos • {flashcardStats.mastered} dominados</small></Card>
      </div>

      <Card className="wide-card statistics-diagnosis-card" variant="highlight">
        <div className="section-heading">
          <div>
            <Badge tone={readiness >= 70 ? 'green' : readiness >= 45 ? 'orange' : 'purple'}>diagnóstico</Badge>
            <h3>Leitura estratégica da preparação</h3>
          </div>
          <strong>{questionStats.weakSubject}</strong>
        </div>
        <p>{diagnosis}</p>
        <div className="diagnosis-grid">
          <article><span>Próximo foco</span><strong>{questionStats.weakTopics[0]?.topic || 'Atos Administrativos'}</strong></article>
          <article><span>Último simulado</span><strong>{simulationStats.last ? `${simulationStats.last.percent}%` : 'não feito'}</strong></article>
          <article><span>Tempo médio</span><strong>{simulationStats.avgTime ? formatSeconds(simulationStats.avgTime) : 'sem histórico'}</strong></article>
          <article><span>Última prova</span><strong>{formatDateTime(simulationStats.last?.finishedAt)}</strong></article>
        </div>
      </Card>

      <div className="statistics-main-grid">
        <Card className="statistics-panel">
          <div className="section-heading">
            <div>
              <Badge tone="cyan">matérias</Badge>
              <h3>Desempenho por matéria</h3>
            </div>
            <span className="muted-chip">cobertura + acerto</span>
          </div>
          <div className="subject-performance-list">
            {questionStats.subjects.map((subject) => (
              <article key={subject.subject}>
                <div className="subject-row-head">
                  <strong>{subject.subject}</strong>
                  <span>{subject.answered}/{subject.totalBank}</span>
                </div>
                <ProgressBar label={`Acerto ${subject.accuracy}%`} value={subject.accuracy} />
                <ProgressBar label={`Cobertura ${subject.coverage}%`} value={subject.coverage} />
              </article>
            ))}
          </div>
        </Card>

        <Card className="statistics-panel">
          <div className="section-heading">
            <div>
              <Badge tone="orange">risco</Badge>
              <h3>Temas fracos</h3>
            </div>
            <span className="muted-chip">prioridade de revisão</span>
          </div>
          {questionStats.weakTopics.length ? (
            <div className="weak-topic-list">
              {questionStats.weakTopics.map((item) => (
                <article key={`${item.subject}-${item.topic}`}>
                  <div>
                    <strong>{item.topic}</strong>
                    <span>{item.subject}</span>
                  </div>
                  <Badge tone={item.accuracy < 50 ? 'orange' : 'purple'}>{item.accuracy}%</Badge>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState title="Sem temas fracos ainda" description="Responda questões ou finalize simulados para gerar diagnóstico por tópico." />
          )}
        </Card>
      </div>

      <div className="statistics-main-grid">
        <Card className="statistics-panel">
          <div className="section-heading">
            <div>
              <Badge tone="purple">evolução</Badge>
              <h3>Últimos dias de questões</h3>
            </div>
            <span className="muted-chip">7 dias</span>
          </div>
          {questionStats.daily.length ? (
            <div className="daily-chart" role="img" aria-label="Questões respondidas nos últimos dias">
              {questionStats.daily.map((day) => {
                const max = Math.max(...questionStats.daily.map((item) => item.total), 1);
                return (
                  <article key={day.date}>
                    <div className="daily-bar-wrap"><span className="daily-bar" style={{ height: `${Math.max(12, (day.total / max) * 100)}%` }} /></div>
                    <strong>{day.total}</strong>
                    <small>{day.date.slice(5).replace('-', '/')}</small>
                  </article>
                );
              })}
            </div>
          ) : (
            <EmptyState title="Sem evolução diária" description="Responda algumas questões para preencher o gráfico dos últimos dias." />
          )}
        </Card>

        <Card className="statistics-panel">
          <div className="section-heading">
            <div>
              <Badge tone="green">simulados</Badge>
              <h3>Histórico de provas</h3>
            </div>
            <span className="muted-chip">últimas tentativas</span>
          </div>
          {simulationStats.byType.length ? (
            <div className="simulation-stat-list">
              {simulationStats.byType.map((type) => (
                <article key={type.title}>
                  <div>
                    <strong>{type.title}</strong>
                    <span>{type.total} tentativa(s)</span>
                  </div>
                  <div>
                    <Badge tone={type.best >= 70 ? 'green' : type.best >= 50 ? 'orange' : 'purple'}>melhor {type.best}%</Badge>
                    <small>média {type.average}%</small>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState title="Nenhum simulado feito" description="Faça uma prova rápida para liberar análise por tipo de simulado." />
          )}
        </Card>
      </div>

      <Card className="wide-card tactical-plan-card">
        <div className="section-heading">
          <div>
            <Badge tone="cyan">plano de ataque</Badge>
            <h3>Recomendação automática</h3>
          </div>
          <strong>{hasData ? 'próxima sessão' : 'primeiro passo'}</strong>
        </div>
        <div className="tactical-plan-grid">
          <article>
            <span>1</span>
            <strong>Revisar</strong>
            <p>{reviewStats.today ? `Faça ${Math.min(10, reviewStats.today)} itens da fila de revisão.` : 'Marque ou erre questões para alimentar a revisão.'}</p>
          </article>
          <article>
            <span>2</span>
            <strong>Treinar</strong>
            <p>Resolver 10 questões de {questionStats.weakSubject === 'Nenhum ainda' ? 'Direito Administrativo' : questionStats.weakSubject}.</p>
          </article>
          <article>
            <span>3</span>
            <strong>Simular</strong>
            <p>{simulationStats.total ? 'Refazer prova rápida após revisar os erros.' : 'Fazer uma prova rápida para gerar diagnóstico.'}</p>
          </article>
          <article>
            <span>4</span>
            <strong>Memorizar</strong>
            <p>{flashcardStats.due ? `Revisar ${flashcardStats.due} flashcards vencidos.` : 'Criar tração revisando cards fáceis e difíceis.'}</p>
          </article>
        </div>
      </Card>
    </div>
  );
}

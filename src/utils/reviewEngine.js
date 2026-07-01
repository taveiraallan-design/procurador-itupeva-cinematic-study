import { questions } from '../data/questions';

export const REVIEW_KEY = 'review_progress_v1';
export const QUESTION_PROGRESS_KEY = 'questions_progress_v1';
export const SIMULATIONS_KEY = 'simulations_progress_v1';

const DAY = 24 * 60 * 60 * 1000;

export const initialReviewProgress = {
  reviewed: {},
  sessions: [],
  preferences: { dailyTarget: 12 },
};

export function formatShortDate(value) {
  if (!value) return 'sem data';
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' }).format(new Date(value));
}

function normalizeDate(value) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return new Date();
  return date;
}

export function addDays(baseDate, days) {
  const date = normalizeDate(baseDate);
  return new Date(date.getTime() + days * DAY).toISOString();
}

function getQuestionMap() {
  return questions.reduce((acc, question) => {
    acc[question.id] = question;
    return acc;
  }, {});
}

function buildQuestionReason(question, questionProgress, reviewProgress) {
  const record = questionProgress.answers?.[question.id];
  const reviewRecord = reviewProgress.reviewed?.[question.id];
  const reasons = [];
  let priority = 0;

  if (record?.hasWrong || record?.lastCorrect === false) {
    reasons.push('erro recente');
    priority += 50;
  }
  if ((questionProgress.marked || []).includes(question.id)) {
    reasons.push('marcada para revisão');
    priority += 38;
  }
  if (reviewRecord?.level === 'again') {
    reasons.push('errou na revisão');
    priority += 42;
  }
  if (reviewRecord?.nextReviewAt && new Date(reviewRecord.nextReviewAt) <= new Date()) {
    reasons.push('revisão vencida');
    priority += 34;
  }
  if (!reviewRecord && record) {
    reasons.push('ainda não revisada');
    priority += 16;
  }

  if (question.difficulty === 'Difícil') priority += 9;
  if (question.difficulty === 'Média') priority += 5;

  return { reasons, priority };
}

export function buildReviewQueue(questionProgress = {}, reviewProgress = initialReviewProgress, simulations = {}) {
  const queue = questions
    .map((question) => {
      const answer = questionProgress.answers?.[question.id];
      const reviewRecord = reviewProgress.reviewed?.[question.id];
      const { reasons, priority } = buildQuestionReason(question, questionProgress, reviewProgress);
      if (!answer && reasons.length === 0) return null;
      if (priority <= 0) return null;
      return {
        id: question.id,
        type: 'question',
        title: question.topic,
        subject: question.subject,
        topic: question.topic,
        difficulty: question.difficulty,
        statement: question.statement,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        trap: question.trap,
        legalBasis: question.legalBasis,
        tags: question.tags || [],
        selected: answer?.selected,
        attempts: answer?.attempts || 0,
        lastCorrect: answer?.lastCorrect,
        lastAnsweredAt: answer?.lastAnsweredAt,
        nextReviewAt: reviewRecord?.nextReviewAt,
        level: reviewRecord?.level || 'new',
        reasons,
        priority,
      };
    })
    .filter(Boolean);

  const simulationTasks = buildSimulationReviewTasks(simulations);
  return [...queue, ...simulationTasks].sort((a, b) => b.priority - a.priority || a.subject.localeCompare(b.subject));
}

function buildSimulationReviewTasks(simulations = {}) {
  const lastResult = simulations.lastResult;
  if (!lastResult?.weakTopics?.length) return [];
  return lastResult.weakTopics.slice(0, 5).map((topic, index) => ({
    id: `sim-${lastResult.finishedAt || 'last'}-${topic.subject}-${topic.topic}`,
    type: 'simulation-topic',
    title: topic.topic,
    subject: topic.subject,
    topic: topic.topic,
    difficulty: 'Prioridade',
    statement: `Revise ${topic.topic} porque houve erro no último simulado.`,
    correctAnswer: 'Revisar teoria + 5 questões',
    explanation: 'O plano pós-simulado indicou este tópico como ponto de perda de pontos. Faça revisão curta e depois reteste em questões.',
    trap: 'Não pule revisão pós-simulado: erro repetido vira padrão de prova.',
    legalBasis: 'Diagnóstico do último simulado.',
    tags: ['simulado', 'tema fraco'],
    reasons: ['pós-simulado'],
    priority: 45 - index * 3,
    lastCorrect: false,
    level: 'simulation',
  }));
}

export function calculateReviewStats(queue, reviewProgress = initialReviewProgress) {
  const today = queue.filter((item) => !item.nextReviewAt || new Date(item.nextReviewAt) <= new Date()).length;
  const errors = queue.filter((item) => item.reasons?.includes('erro recente') || item.type === 'simulation-topic').length;
  const marked = queue.filter((item) => item.reasons?.includes('marcada para revisão')).length;
  const reviewedToday = Object.values(reviewProgress.reviewed || {}).filter((item) => {
    if (!item.lastReviewedAt) return false;
    const last = new Date(item.lastReviewedAt);
    const now = new Date();
    return last.toDateString() === now.toDateString();
  }).length;

  const bySubject = queue.reduce((acc, item) => {
    if (!acc[item.subject]) acc[item.subject] = { total: 0, priority: 0 };
    acc[item.subject].total += 1;
    acc[item.subject].priority += item.priority || 0;
    return acc;
  }, {});

  const weakSubject = Object.entries(bySubject)
    .map(([subject, stats]) => ({ subject, ...stats }))
    .sort((a, b) => b.priority - a.priority)[0];

  return {
    total: queue.length,
    today,
    errors,
    marked,
    reviewedToday,
    weakSubject: weakSubject?.subject || 'Nenhum ainda',
  };
}

export function buildSubjectPlan(queue) {
  const grouped = queue.reduce((acc, item) => {
    if (!acc[item.subject]) acc[item.subject] = { subject: item.subject, items: [], priority: 0 };
    acc[item.subject].items.push(item);
    acc[item.subject].priority += item.priority;
    return acc;
  }, {});

  return Object.values(grouped)
    .map((group) => ({
      ...group,
      topics: [...new Set(group.items.map((item) => item.topic))].slice(0, 5),
      count: group.items.length,
    }))
    .sort((a, b) => b.priority - a.priority);
}

export function registerReview(item, quality, reviewProgress = initialReviewProgress) {
  const now = new Date().toISOString();
  const intervals = { again: 0, hard: 1, good: 3, easy: 7 };
  const nextReviewAt = addDays(now, intervals[quality] ?? 1);
  const current = reviewProgress.reviewed?.[item.id] || { count: 0 };
  return {
    ...reviewProgress,
    reviewed: {
      ...(reviewProgress.reviewed || {}),
      [item.id]: {
        count: (current.count || 0) + 1,
        level: quality,
        lastReviewedAt: now,
        nextReviewAt,
        subject: item.subject,
        topic: item.topic,
      },
    },
    sessions: [
      {
        id: `${item.id}-${now}`,
        itemId: item.id,
        subject: item.subject,
        topic: item.topic,
        quality,
        reviewedAt: now,
        nextReviewAt,
      },
      ...(reviewProgress.sessions || []),
    ].slice(0, 200),
  };
}

export function getQuestionById(id) {
  return getQuestionMap()[id];
}

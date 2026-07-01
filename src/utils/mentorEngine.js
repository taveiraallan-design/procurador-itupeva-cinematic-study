import { questions } from '../data/questions';
import { flashcards, FLASHCARD_PROGRESS_KEY } from '../data/flashcards';
import { buildReviewQueue, initialReviewProgress } from './reviewEngine';
import { buildSprintFinalPlan, initialSprintProgress } from './sprintEngine';

export const MENTOR_PROGRESS_KEY = 'mentor_progress_v1';

export const initialMentorProgress = {
  completedActions: {},
  pinnedActionId: null,
  notes: '',
  lastPlanAt: null,
};

const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };
const initialFlashcardProgress = { cards: {}, log: [] };
const initialDiscursiveProgress = { attempts: [], pinnedCases: [], lastDraft: {} };

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function asObject(value, fallback = {}) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : fallback;
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function percent(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

function getQuestionStats(questionProgress = initialQuestionProgress) {
  const safe = asObject(questionProgress, initialQuestionProgress);
  const answers = Object.values(asObject(safe.answers));
  const answered = answers.length;
  const correct = answers.filter((answer) => answer.lastCorrect).length;
  const wrong = answers.filter((answer) => answer.lastCorrect === false || answer.hasWrong).length;
  const accuracy = percent(correct, answered);
  const marked = asArray(safe.marked).length;

  const bySubject = questions.reduce((acc, question) => {
    if (!acc[question.subject]) {
      acc[question.subject] = { subject: question.subject, answered: 0, correct: 0, wrong: 0, total: 0, topics: {} };
    }
    acc[question.subject].total += 1;
    const record = safe.answers?.[question.id];
    if (record) {
      acc[question.subject].answered += 1;
      if (record.lastCorrect) acc[question.subject].correct += 1;
      if (record.lastCorrect === false || record.hasWrong) acc[question.subject].wrong += 1;
      if (!acc[question.subject].topics[question.topic]) acc[question.subject].topics[question.topic] = { topic: question.topic, wrong: 0, answered: 0 };
      acc[question.subject].topics[question.topic].answered += 1;
      if (record.lastCorrect === false || record.hasWrong) acc[question.subject].topics[question.topic].wrong += 1;
    }
    return acc;
  }, {});

  const subjects = Object.values(bySubject).map((item) => {
    const topicWeak = Object.values(item.topics).sort((a, b) => b.wrong - a.wrong || b.answered - a.answered)[0];
    return {
      ...item,
      accuracy: percent(item.correct, item.answered),
      coverage: percent(item.answered, item.total),
      weakTopic: topicWeak?.topic || 'tópicos iniciais',
    };
  });

  const weakSubject = subjects
    .filter((subject) => subject.answered > 0)
    .sort((a, b) => a.accuracy - b.accuracy || b.wrong - a.wrong)[0];

  const uncoveredSubject = subjects
    .sort((a, b) => a.coverage - b.coverage || b.total - a.total)[0];

  return {
    answered,
    correct,
    wrong,
    accuracy,
    marked,
    coverage: percent(answered, questions.length),
    weakSubject,
    uncoveredSubject,
    subjects,
  };
}

function getSimulationStats(simulationProgress = initialSimulationProgress) {
  const safe = asObject(simulationProgress, initialSimulationProgress);
  const attempts = asArray(safe.attempts);
  const best = attempts.reduce((max, item) => Math.max(max, item.percent || item.score || 0), 0);
  const average = attempts.length
    ? Math.round(attempts.reduce((sum, item) => sum + (item.percent || item.score || 0), 0) / attempts.length)
    : 0;
  const last = safe.lastResult || attempts[attempts.length - 1] || null;
  const weakTopics = asArray(last?.weakTopics).slice(0, 4);
  return { attempts, count: attempts.length, best, average, last, weakTopics };
}

function getFlashcardStats(flashcardProgress = initialFlashcardProgress) {
  const safe = asObject(flashcardProgress, initialFlashcardProgress);
  const records = Object.values(asObject(safe.cards));
  const now = new Date();
  const due = records.filter((record) => !record.nextReviewAt || new Date(record.nextReviewAt) <= now).length;
  const mastered = records.filter((record) => ['easy', 'mastered'].includes(record.level)).length;
  const reviewed = records.length;
  return { due, mastered, reviewed, totalDeckCards: flashcards.length };
}

function getDiscursiveStats(discursiveProgress = initialDiscursiveProgress) {
  const safe = asObject(discursiveProgress, initialDiscursiveProgress);
  const attempts = asArray(safe.attempts);
  const last = attempts[attempts.length - 1] || null;
  const average = attempts.length
    ? Math.round(attempts.reduce((sum, item) => sum + (item.percent || item.score || 0), 0) / attempts.length)
    : 0;
  return { count: attempts.length, last, average };
}

function buildAction({ id, type, title, description, reason, minutes, targetPage, priority, subject, topic, cta }) {
  return { id, type, title, description, reason, minutes, targetPage, priority, subject, topic, cta };
}

export function buildMentorPlan({
  questionProgress = initialQuestionProgress,
  reviewProgress = initialReviewProgress,
  simulationProgress = initialSimulationProgress,
  simulationProgressV1 = initialSimulationProgress,
  flashcardProgress = initialFlashcardProgress,
  discursiveProgress = initialDiscursiveProgress,
  mentorProgress = initialMentorProgress,
  sprintProgress = initialSprintProgress,
  syllabusProgress = {},
} = {}) {
  const questionStats = getQuestionStats(questionProgress);
  const simulationStats = getSimulationStats(
    (simulationProgress?.attempts?.length || simulationProgress?.lastResult) ? simulationProgress : simulationProgressV1,
  );
  const reviewQueue = buildReviewQueue(questionProgress, reviewProgress, simulationStats);
  const flashcardStats = getFlashcardStats(flashcardProgress);
  const discursiveStats = getDiscursiveStats(discursiveProgress);
  const today = todayKey();
  const completedToday = new Set(asArray(mentorProgress?.completedActions?.[today]));

  const actions = [];
  const weak = questionStats.weakSubject;
  const uncovered = questionStats.uncoveredSubject;
  const sprintPlan = buildSprintFinalPlan({ questionProgress, reviewProgress, simulationProgress, flashcardProgress, discursiveProgress, syllabusProgress, sprintProgress });

  if (sprintPlan.countdown.days <= 45 && sprintPlan.topThree[0]) {
    const sprintAction = sprintPlan.topThree[0];
    actions.push(buildAction({
      id: 'sprint-final-next',
      type: 'Sprint Final',
      title: sprintAction.title,
      description: sprintAction.detail,
      reason: `Faltam ${sprintPlan.countdown.days} dias para a prova. Reta final prioriza ${sprintAction.type}.`,
      minutes: sprintAction.minutes,
      targetPage: 'sprint',
      priority: 101,
      subject: sprintAction.subject,
      topic: sprintAction.block,
      cta: 'Abrir Sprint Final',
    }));
  }

  if (sprintPlan.countdown.days <= 15) {
    actions.push(buildAction({
      id: 'vespera-final-safety',
      type: 'Véspera',
      title: 'Executar revisão de véspera anti-erro bobo',
      description: 'Revise Lei Local, Administrativo, discursiva e logística sem abrir matéria nova pesada.',
      reason: `Faltam ${sprintPlan.countdown.days} dias para a prova; prioridade é consolidar e reduzir ansiedade.`,
      minutes: 45,
      targetPage: 'vespera',
      priority: 105,
      subject: 'Reta final',
      topic: 'revisão de véspera',
      cta: 'Abrir Véspera',
    }));
  }

  if (reviewQueue.length > 0) {
    actions.push(buildAction({
      id: 'review-hot-queue',
      type: 'Revisão',
      title: `Revisar ${Math.min(8, reviewQueue.length)} itens críticos`,
      description: 'Ataque erros, marcadas e pontos fracos antes de abrir conteúdo novo.',
      reason: `${reviewQueue.length} itens na fila de revisão inteligente.`,
      minutes: 18,
      targetPage: 'revisao',
      priority: 96,
      subject: reviewQueue[0]?.subject || weak?.subject || 'Direito Administrativo',
      topic: reviewQueue[0]?.topic || weak?.weakTopic || 'erros recentes',
      cta: 'Abrir revisão',
    }));
  }

  if (weak) {
    actions.push(buildAction({
      id: 'question-weak-subject',
      type: 'Questões',
      title: `Resolver 10 questões de ${weak.subject}`,
      description: `Foco em ${weak.weakTopic}; responda, leia a pegadinha e marque para revisão o que errar.`,
      reason: `${weak.accuracy}% de acerto em ${weak.subject}.`,
      minutes: 25,
      targetPage: 'questoes',
      priority: 88 - weak.accuracy,
      subject: weak.subject,
      topic: weak.weakTopic,
      cta: 'Abrir questões',
    }));
  } else {
    actions.push(buildAction({
      id: 'question-first-calibration',
      type: 'Questões',
      title: 'Fazer calibragem com 10 questões',
      description: 'Comece por Direito Administrativo e Lei Orgânica para criar diagnóstico real.',
      reason: 'Ainda não há acertos/erros suficientes para detectar ponto fraco.',
      minutes: 25,
      targetPage: 'questoes',
      priority: 82,
      subject: 'Direito Administrativo',
      topic: 'atos administrativos',
      cta: 'Começar questões',
    }));
  }

  if (simulationStats.count === 0 || questionStats.answered >= 20) {
    actions.push(buildAction({
      id: 'simulation-calibration',
      type: 'Simulado',
      title: simulationStats.count ? 'Fazer prova rápida de manutenção' : 'Fazer primeiro simulado rápido',
      description: 'Use o simulado para validar tempo, ansiedade e distribuição de matérias.',
      reason: simulationStats.count ? `Média atual de simulados: ${simulationStats.average}%.` : 'Nenhum simulado feito ainda.',
      minutes: 35,
      targetPage: 'simulados',
      priority: simulationStats.count ? 58 : 78,
      subject: 'Edital completo',
      topic: 'diagnóstico de prova',
      cta: 'Abrir simulados',
    }));
  }

  if (flashcardStats.due > 0 || flashcardStats.reviewed === 0) {
    actions.push(buildAction({
      id: 'flashcards-due',
      type: 'Flashcards',
      title: flashcardStats.due ? `Revisar ${Math.min(12, flashcardStats.due)} flashcards vencidos` : 'Fazer primeira rodada de flashcards',
      description: 'Fixe conceitos curtos antes de partir para questões longas.',
      reason: flashcardStats.due ? `${flashcardStats.due} cards vencidos.` : 'Nenhum flashcard revisado ainda.',
      minutes: 12,
      targetPage: 'flashcards',
      priority: flashcardStats.due ? 74 : 54,
      subject: 'Memorização',
      topic: 'conceitos e pegadinhas',
      cta: 'Abrir flashcards',
    }));
  }

  if (discursiveStats.count === 0 || discursiveStats.average < 60) {
    actions.push(buildAction({
      id: 'discursive-training',
      type: 'Discursiva',
      title: discursiveStats.count ? 'Reescrever uma discursiva fraca' : 'Treinar uma discursiva curta',
      description: 'Faça pelo menos 12 linhas com estrutura, fundamento, aplicação e conclusão.',
      reason: discursiveStats.count ? `Média discursiva estimada: ${discursiveStats.average}%.` : 'Nenhuma discursiva corrigida ainda.',
      minutes: 35,
      targetPage: 'discursivas',
      priority: discursiveStats.count ? 62 : 68,
      subject: 'Discursivas',
      topic: 'parecer jurídico',
      cta: 'Abrir discursivas',
    }));
  }

  if (uncovered && uncovered.coverage < 25) {
    actions.push(buildAction({
      id: 'edital-coverage',
      type: 'Edital',
      title: `Cobrir tópico pendente de ${uncovered.subject}`,
      description: 'Marque no edital o que já estudou e resolva questões vinculadas ao tópico.',
      reason: `${uncovered.coverage}% de cobertura no banco para esta matéria.`,
      minutes: 20,
      targetPage: 'edital',
      priority: 55,
      subject: uncovered.subject,
      topic: uncovered.weakTopic,
      cta: 'Abrir edital',
    }));
  }

  actions.push(buildAction({
    id: 'simulator-visual-anchor',
    type: 'Simulador',
    title: 'Rodar uma cena jurídica cinematográfica',
    description: 'Use a cena para visualizar o processo antes de resolver questões sobre o tema.',
    reason: 'A visualização ajuda a fixar sequência, decisão e consequência.',
    minutes: 15,
    targetPage: 'simulator',
    priority: 50,
    subject: weak?.subject || 'Direito Administrativo',
    topic: weak?.weakTopic || 'atos administrativos',
    cta: 'Abrir simulador',
  }));

  const sortedActions = actions
    .map((action) => ({ ...action, done: completedToday.has(action.id) }))
    .sort((a, b) => Number(a.done) - Number(b.done) || b.priority - a.priority);

  const topActions = sortedActions.slice(0, 5);
  const completedCount = topActions.filter((action) => action.done).length;
  const totalMinutes = topActions.reduce((sum, action) => sum + action.minutes, 0);
  const remainingMinutes = topActions.filter((action) => !action.done).reduce((sum, action) => sum + action.minutes, 0);
  const readiness = Math.min(100, Math.round(
    questionStats.coverage * 0.25
    + questionStats.accuracy * 0.30
    + Math.min(100, simulationStats.best) * 0.20
    + Math.min(100, flashcardStats.reviewed * 2) * 0.10
    + Math.min(100, discursiveStats.average || discursiveStats.count * 20) * 0.15,
  ));

  const nextAction = topActions.find((action) => !action.done) || topActions[0];

  const diagnosis = [];
  if (weak) diagnosis.push(`Seu gargalo atual é ${weak.subject}, especialmente ${weak.weakTopic}.`);
  if (reviewQueue.length) diagnosis.push(`Há ${reviewQueue.length} itens de revisão antes de avançar conteúdo novo.`);
  if (simulationStats.count === 0) diagnosis.push('Ainda falta um simulado para calibrar ritmo de prova.');
  if (discursiveStats.count === 0) diagnosis.push('A preparação discursiva ainda está sem histórico corrigido.');
  if (!diagnosis.length) diagnosis.push('Base equilibrada: mantenha rotina de questões, revisão e simulado curto.');

  return {
    generatedAt: new Date().toISOString(),
    today,
    actions: topActions,
    nextAction,
    completedCount,
    completionPercent: percent(completedCount, topActions.length || 1),
    totalMinutes,
    remainingMinutes,
    readiness,
    diagnosis,
    stats: {
      questions: questionStats,
      simulations: simulationStats,
      reviews: { pending: reviewQueue.length },
      flashcards: flashcardStats,
      discursives: discursiveStats,
    },
  };
}

export function toggleMentorAction(current = initialMentorProgress, actionId, done = true) {
  const safe = asObject(current, initialMentorProgress);
  const today = todayKey();
  const currentDay = new Set(asArray(safe.completedActions?.[today]));
  if (done) currentDay.add(actionId);
  else currentDay.delete(actionId);
  return {
    ...initialMentorProgress,
    ...safe,
    completedActions: {
      ...asObject(safe.completedActions),
      [today]: Array.from(currentDay),
    },
    lastPlanAt: new Date().toISOString(),
  };
}

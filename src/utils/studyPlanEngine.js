import { questions } from '../data/questions';
import { flashcards, FLASHCARD_PROGRESS_KEY, initialFlashcardProgress } from '../data/flashcards';
import { REVIEW_KEY, QUESTION_PROGRESS_KEY, SIMULATIONS_KEY, buildReviewQueue, buildSubjectPlan, initialReviewProgress } from './reviewEngine';

export const STUDY_PLAN_KEY = 'study_plan_progress_v1';
export const initialStudyPlanProgress = {
  completed: {},
  skipped: {},
  customFocus: '',
  dailyTargetMinutes: 90,
  history: [],
};

export const PLAN_SOURCE_KEYS = {
  questions: QUESTION_PROGRESS_KEY,
  simulations: SIMULATIONS_KEY,
  reviews: REVIEW_KEY,
  flashcards: FLASHCARD_PROGRESS_KEY,
};

const defaultSimulationProgress = { attempts: [], lastResult: null };
const defaultQuestionProgress = { answers: {}, marked: [], history: [] };

const subjectFallback = [
  'Direito Administrativo',
  'Legislação Municipal',
  'Lei Orgânica',
  'Língua Portuguesa',
  'Direito Constitucional',
];

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function getAnswers(questionProgress = defaultQuestionProgress) {
  return Object.entries(questionProgress.answers || {}).map(([id, value]) => ({ id, ...value }));
}

export function getQuestionSubjectPressure(questionProgress = defaultQuestionProgress) {
  const pressure = questions.reduce((acc, question) => {
    if (!acc[question.subject]) {
      acc[question.subject] = {
        subject: question.subject,
        total: 0,
        answered: 0,
        correct: 0,
        wrong: 0,
        marked: 0,
        pressure: 0,
        topics: {},
      };
    }
    const entry = acc[question.subject];
    const answer = questionProgress.answers?.[question.id];
    entry.total += 1;
    if (answer) {
      entry.answered += 1;
      if (answer.lastCorrect) entry.correct += 1;
      if (answer.hasWrong || answer.lastCorrect === false) {
        entry.wrong += 1;
        entry.pressure += 8;
        entry.topics[question.topic] = (entry.topics[question.topic] || 0) + 4;
      }
    } else {
      entry.pressure += 1.5;
    }
    if ((questionProgress.marked || []).includes(question.id)) {
      entry.marked += 1;
      entry.pressure += 5;
      entry.topics[question.topic] = (entry.topics[question.topic] || 0) + 3;
    }
    if (question.difficulty === 'Difícil') entry.pressure += 1;
    return acc;
  }, {});

  return Object.values(pressure)
    .map((item) => ({
      ...item,
      accuracy: item.answered ? Math.round((item.correct / item.answered) * 100) : 0,
      coverage: Math.round((item.answered / item.total) * 100),
      mainTopic: Object.entries(item.topics).sort((a, b) => b[1] - a[1])[0]?.[0] || 'fundamentos essenciais',
    }))
    .sort((a, b) => b.pressure - a.pressure);
}

function getFlashcardStats(flashcardProgress = initialFlashcardProgress) {
  const records = flashcardProgress.cards || {};
  const due = flashcards.filter((card) => {
    const record = records[card.id];
    return !record?.nextReviewAt || new Date(record.nextReviewAt) <= new Date();
  });
  const weakDecks = due.reduce((acc, card) => {
    acc[card.subject] = (acc[card.subject] || 0) + 1;
    return acc;
  }, {});
  return {
    dueCount: due.length,
    weakSubject: Object.entries(weakDecks).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Direito Administrativo',
  };
}

function getSimulationPressure(simulationProgress = defaultSimulationProgress) {
  const last = simulationProgress.lastResult;
  const weak = last?.weakTopics?.[0];
  return {
    attempts: simulationProgress.attempts?.length || 0,
    lastPercent: last?.percent || 0,
    weakSubject: weak?.subject || last?.bySubject?.sort?.((a, b) => a.percent - b.percent)?.[0]?.subject || null,
    weakTopic: weak?.topic || 'temas críticos do último simulado',
  };
}

function buildMission(id, type, title, detail, minutes, priority, subject, topic, action, targetPage, reason, tone = 'cyan') {
  return { id, type, title, detail, minutes, priority, subject, topic, action, targetPage, reason, tone };
}

export function buildSmartStudyPlan({
  questionProgress = defaultQuestionProgress,
  reviewProgress = initialReviewProgress,
  simulationProgress = defaultSimulationProgress,
  flashcardProgress = initialFlashcardProgress,
  studyPlanProgress = initialStudyPlanProgress,
} = {}) {
  const dateKey = todayKey();
  const reviewQueue = buildReviewQueue(questionProgress, reviewProgress, simulationProgress);
  const subjectPlan = buildSubjectPlan(reviewQueue);
  const subjectPressure = getQuestionSubjectPressure(questionProgress);
  const flashStats = getFlashcardStats(flashcardProgress);
  const simPressure = getSimulationPressure(simulationProgress);
  const answered = getAnswers(questionProgress).length;
  const completedMap = studyPlanProgress.completed?.[dateKey] || {};
  const completedIds = new Set(Object.keys(completedMap).filter((id) => completedMap[id]?.done));
  const mainWeak = subjectPressure[0] || { subject: 'Direito Administrativo', mainTopic: 'Atos Administrativos', accuracy: 0, coverage: 0, wrong: 0 };
  const secondWeak = subjectPressure[1] || { subject: 'Lei Orgânica', mainTopic: 'Competências municipais', accuracy: 0, coverage: 0 };
  const reviewSubject = subjectPlan[0]?.subject || mainWeak.subject;
  const reviewTopic = subjectPlan[0]?.topics?.[0] || mainWeak.mainTopic;
  const missions = [];

  missions.push(buildMission(
    'mission-simulator-atos',
    'simulador',
    'Cena jurídica de aquecimento',
    'Rodar o Simulador Cinemático de Atos Administrativos e responder uma decisão em modo prova.',
    15,
    95,
    'Direito Administrativo',
    'Anulação, revogação e convalidação',
    'Abrir Simulador Jurídico',
    'simulator',
    'A cena ajuda a fixar a diferença entre legalidade e mérito antes das questões.',
    'purple'
  ));

  missions.push(buildMission(
    'mission-review-priority',
    'revisao',
    `Revisar ${reviewSubject}`,
    `Atacar ${Math.min(12, reviewQueue.length || 8)} itens da fila, priorizando ${reviewTopic}.`,
    20,
    reviewQueue.length ? 92 : 62,
    reviewSubject,
    reviewTopic,
    'Abrir Revisão',
    'revisao',
    reviewQueue.length ? 'Há erros, marcadas ou temas vencidos na fila.' : 'Revisão preventiva para manter retenção.',
    'orange'
  ));

  missions.push(buildMission(
    'mission-questions-weak',
    `questoes`,
    `Questões: ${mainWeak.subject}`,
    `Resolver 10 questões focadas em ${mainWeak.mainTopic}. Meta: superar ${Math.max(65, mainWeak.accuracy + 10)}% de acerto.`,
    25,
    88 + Math.min(10, mainWeak.wrong || 0),
    mainWeak.subject,
    mainWeak.mainTopic,
    'Ir para Questões',
    'questoes',
    answered ? `Ponto de pressão atual: ${mainWeak.accuracy}% de acerto e ${mainWeak.coverage}% de cobertura.` : 'Primeira coleta de dados para calibrar o plano.',
    'cyan'
  ));

  missions.push(buildMission(
    'mission-flashcards-due',
    'flashcards',
    'Flashcards vencidos',
    `Revisar ${Math.max(8, Math.min(16, flashStats.dueCount || 10))} flashcards, começando por ${flashStats.weakSubject}.`,
    15,
    flashStats.dueCount ? 78 : 52,
    flashStats.weakSubject,
    'memorização ativa',
    'Abrir Flashcards',
    'flashcards',
    flashStats.dueCount ? `${flashStats.dueCount} cartões estão vencidos ou sem revisão.` : 'Revisão curta para manter memorização.',
    'green'
  ));

  missions.push(buildMission(
    'mission-mini-simulado',
    'simulado',
    'Simulado diagnóstico curto',
    simPressure.attempts
      ? `Fazer prova rápida para retestar ${simPressure.weakSubject || secondWeak.subject}. Última referência: ${simPressure.lastPercent}%.`
      : 'Fazer prova rápida para criar a primeira linha de base de desempenho.',
    20,
    simPressure.attempts ? 72 : 68,
    simPressure.weakSubject || secondWeak.subject,
    simPressure.weakTopic || secondWeak.mainTopic,
    'Fazer Simulado',
    'simulados',
    'Simulados mostram perda de ponto sob tempo e geram revisão pós-prova.',
    'purple'
  ));

  const completedMinutes = missions.filter((mission) => completedIds.has(mission.id)).reduce((sum, mission) => sum + mission.minutes, 0);
  const totalMinutes = missions.reduce((sum, mission) => sum + mission.minutes, 0);
  const completionPercent = Math.round((completedIds.size / missions.length) * 100);
  const nextMission = missions.find((mission) => !completedIds.has(mission.id)) || null;
  const weekly = buildWeeklyPlan(subjectPressure, reviewQueue, flashStats, simPressure);

  return {
    dateKey,
    missions: missions.sort((a, b) => b.priority - a.priority),
    completedIds,
    totalMinutes,
    completedMinutes,
    completionPercent,
    nextMission,
    diagnostics: {
      mainWeak,
      secondWeak,
      reviewCount: reviewQueue.length,
      flashDue: flashStats.dueCount,
      simulationAttempts: simPressure.attempts,
      lastSimulationPercent: simPressure.lastPercent,
    },
    weekly,
  };
}

function buildWeeklyPlan(subjectPressure, reviewQueue, flashStats, simPressure) {
  const focusSubjects = [...new Set([
    subjectPressure[0]?.subject,
    subjectPressure[1]?.subject,
    simPressure.weakSubject,
    flashStats.weakSubject,
    ...subjectFallback,
  ].filter(Boolean))].slice(0, 5);

  const days = ['Hoje', 'Amanhã', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'];
  return days.map((day, index) => {
    const subject = focusSubjects[index % focusSubjects.length];
    const pressure = subjectPressure.find((item) => item.subject === subject);
    const topic = pressure?.mainTopic || (index % 2 ? 'questões objetivas' : 'revisão guiada');
    const type = index === 0 ? 'Missão do dia' : index % 3 === 0 ? 'Simulado + correção' : index % 2 === 0 ? 'Questões + flashcards' : 'Teoria curta + revisão';
    const minutes = index === 0 ? 95 : index % 3 === 0 ? 80 : 60;
    return {
      day,
      subject,
      topic,
      type,
      minutes,
      reason: index === 0
        ? `${reviewQueue.length} itens na fila e foco em ${subject}.`
        : `Manter alternância para não acumular fraquezas em ${subject}.`,
    };
  });
}

export function toggleMissionCompletion(studyPlanProgress, mission, done) {
  const dateKey = todayKey();
  const currentDay = studyPlanProgress.completed?.[dateKey] || {};
  const now = new Date().toISOString();
  return {
    ...studyPlanProgress,
    completed: {
      ...(studyPlanProgress.completed || {}),
      [dateKey]: {
        ...currentDay,
        [mission.id]: done
          ? { done: true, completedAt: now, subject: mission.subject, type: mission.type, minutes: mission.minutes }
          : { done: false, updatedAt: now, subject: mission.subject, type: mission.type, minutes: mission.minutes },
      },
    },
    history: done
      ? [
        { id: `${mission.id}-${now}`, missionId: mission.id, title: mission.title, subject: mission.subject, type: mission.type, minutes: mission.minutes, completedAt: now },
        ...(studyPlanProgress.history || []),
      ].slice(0, 120)
      : (studyPlanProgress.history || []),
  };
}

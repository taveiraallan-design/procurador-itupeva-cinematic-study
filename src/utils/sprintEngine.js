import { questions } from '../data/questions';
import { officialSyllabus } from '../data/officialSyllabus';
import { examSchedule } from '../data/examSchedule';
import { buildReviewQueue, initialReviewProgress } from './reviewEngine';
import { flashcards, initialFlashcardProgress } from '../data/flashcards';

export const SPRINT_PROGRESS_KEY = 'sprint_final_progress_v1';

export const initialSprintProgress = {
  selectedWindow: 30,
  completedTasks: {},
  customExamDate: '',
  log: [],
};

const DEFAULT_EXAM_ISO = '2026-08-16T09:00:00';
const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };
const initialDiscursiveProgress = { attempts: [], pinnedCases: [], lastDraft: {} };

function asObject(value, fallback = {}) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : fallback;
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function clamp(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function percent(part, total) {
  return total ? Math.round((part / total) * 100) : 0;
}

function parseExamDate(progress = initialSprintProgress) {
  const candidate = progress?.customExamDate ? `${progress.customExamDate}T09:00:00` : DEFAULT_EXAM_ISO;
  const parsed = new Date(candidate);
  return Number.isNaN(parsed.getTime()) ? new Date(DEFAULT_EXAM_ISO) : parsed;
}

export function getExamCountdown(progress = initialSprintProgress) {
  const now = new Date();
  const examDate = parseExamDate(progress);
  const diff = examDate.getTime() - now.getTime();
  const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  const scheduleEvent = examSchedule.find((event) => event.event?.toLowerCase().includes('prova objetiva'));
  return {
    days,
    examDate,
    label: examDate.toLocaleDateString('pt-BR'),
    officialLabel: scheduleEvent?.date || '16/08/2026',
    phase: days <= 7 ? 'Sprint 7 dias' : days <= 15 ? 'Sprint 15 dias' : days <= 30 ? 'Sprint 30 dias' : 'Sprint 45 dias',
    urgency: days <= 7 ? 'máxima' : days <= 15 ? 'alta' : days <= 30 ? 'controlada' : 'construção',
  };
}

function getQuestionStats(questionProgress = initialQuestionProgress) {
  const safe = asObject(questionProgress, initialQuestionProgress);
  const answers = Object.values(asObject(safe.answers));
  const answered = answers.length;
  const correct = answers.filter((answer) => answer.lastCorrect).length;
  const wrong = answers.filter((answer) => answer.lastCorrect === false || answer.hasWrong).length;
  const accuracy = percent(correct, answered);

  const bySubject = questions.reduce((acc, question) => {
    if (!acc[question.subject]) acc[question.subject] = { subject: question.subject, total: 0, answered: 0, correct: 0, wrong: 0, topics: {} };
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
    const weakTopic = Object.values(item.topics).sort((a, b) => b.wrong - a.wrong || b.answered - a.answered)[0]?.topic || 'tópicos do edital';
    return {
      ...item,
      accuracy: percent(item.correct, item.answered),
      coverage: percent(item.answered, item.total),
      weakTopic,
    };
  });

  const weakSubject = subjects.filter((item) => item.answered > 0).sort((a, b) => a.accuracy - b.accuracy || b.wrong - a.wrong)[0] || null;
  const neglected = subjects.sort((a, b) => a.coverage - b.coverage || b.total - a.total).slice(0, 3);

  return { answered, correct, wrong, accuracy, coverage: percent(answered, questions.length), subjects, weakSubject, neglected };
}

function getSimulationStats(simulationProgress = initialSimulationProgress) {
  const safe = asObject(simulationProgress, initialSimulationProgress);
  const attempts = asArray(safe.attempts);
  const last = safe.lastResult || attempts[attempts.length - 1] || null;
  const best = attempts.reduce((bestScore, attempt) => Math.max(bestScore, attempt.percent || attempt.score || 0), 0);
  const weakTopics = asArray(last?.weakTopics).slice(0, 5);
  return { count: attempts.length, last, best, weakTopics };
}

function getFlashcardStats(flashcardProgress = initialFlashcardProgress) {
  const safe = asObject(flashcardProgress, initialFlashcardProgress);
  const records = Object.values(asObject(safe.cards));
  const now = new Date();
  const due = records.filter((record) => !record.nextReviewAt || new Date(record.nextReviewAt) <= now).length;
  return { due, reviewed: records.length, total: flashcards.length };
}

function getSyllabusStats(syllabusProgress = {}) {
  const safe = asObject(syllabusProgress, {});
  const completed = asObject(safe.completed);
  const totalTopics = officialSyllabus.reduce((sum, subject) => sum + asArray(subject.topics).length, 0);
  const completedTopics = Object.values(completed).reduce((sum, list) => sum + asArray(list).length, 0);
  const bySubject = officialSyllabus.map((subject) => {
    const done = asArray(completed[subject.id]).length;
    return {
      id: subject.id,
      subject: subject.subject,
      group: subject.group,
      priority: subject.priority,
      risk: subject.risk,
      topics: subject.topics,
      completed: done,
      total: subject.topics.length,
      percent: percent(done, subject.topics.length),
    };
  });
  return {
    totalTopics,
    completedTopics,
    coverage: percent(completedTopics, totalTopics),
    pending: bySubject.filter((item) => item.percent < 100).sort((a, b) => a.percent - b.percent || b.total - a.total),
    bySubject,
  };
}

function buildTask({ id, type, title, detail, minutes, targetPage, subject, priority = 50, block = 'questões' }) {
  return { id, type, title, detail, minutes, targetPage, subject, priority, block };
}

function buildDailyMission({ countdown, questionStats, reviewQueue, flashcardStats, simulationStats, discursiveProgress, syllabusStats }) {
  const tasks = [];
  const weakSubject = questionStats.weakSubject;
  const firstPending = syllabusStats.pending[0];
  const discursiveCount = asArray(discursiveProgress?.attempts).length;

  tasks.push(buildTask({
    id: 'warmup-flashcards',
    type: 'Aquecimento',
    title: flashcardStats.due ? `Revisar ${Math.min(12, flashcardStats.due)} flashcards vencidos` : 'Aquecimento com 8 flashcards essenciais',
    detail: 'Comece com memória curta para ativar conceitos antes de questões.',
    minutes: 10,
    targetPage: 'flashcards',
    subject: 'Memorização',
    priority: flashcardStats.due ? 86 : 54,
    block: 'aquecimento',
  }));

  if (reviewQueue.length) {
    tasks.push(buildTask({
      id: 'review-errors',
      type: 'Revisão',
      title: `Revisar ${Math.min(10, reviewQueue.length)} erros/marcadas`,
      detail: 'Priorize aquilo que já te derrubou. A reta final não perdoa erro repetido.',
      minutes: 20,
      targetPage: 'revisao',
      subject: reviewQueue[0]?.subject || 'Revisão',
      priority: 96,
      block: 'revisão',
    }));
  }

  tasks.push(buildTask({
    id: 'questions-weak',
    type: 'Questões',
    title: weakSubject ? `Resolver 15 questões de ${weakSubject.subject}` : 'Resolver 15 questões de Direito Administrativo',
    detail: weakSubject ? `Foco no ponto fraco: ${weakSubject.weakTopic}. Leia a pegadinha antes de avançar.` : 'Crie diagnóstico com temas centrais do edital.',
    minutes: 35,
    targetPage: 'questoes',
    subject: weakSubject?.subject || 'Direito Administrativo',
    priority: weakSubject ? 88 : 70,
    block: 'questões',
  }));

  if (firstPending) {
    tasks.push(buildTask({
      id: 'syllabus-pending',
      type: 'Teoria direcionada',
      title: `Fechar tópico pendente de ${firstPending.subject}`,
      detail: `Cobertura atual: ${firstPending.percent}%. Estude um tópico e marque no edital.`,
      minutes: 25,
      targetPage: 'edital',
      subject: firstPending.subject,
      priority: 74,
      block: 'teoria',
    }));
  }

  if (countdown.days <= 30 && (simulationStats.count === 0 || simulationStats.best < 70)) {
    tasks.push(buildTask({
      id: 'simulation-sprint',
      type: 'Simulado',
      title: simulationStats.count ? 'Fazer simulado rápido de calibragem' : 'Fazer primeiro simulado da reta final',
      detail: 'Controle tempo, revise erros e registre tema fraco imediatamente.',
      minutes: countdown.days <= 15 ? 70 : 40,
      targetPage: 'simulados',
      subject: 'Edital completo',
      priority: countdown.days <= 15 ? 90 : 72,
      block: 'simulado',
    }));
  }

  if (countdown.days <= 45 && discursiveCount < 3) {
    tasks.push(buildTask({
      id: 'discursive-sprint',
      type: 'Discursiva',
      title: 'Treinar uma discursiva com espelho',
      detail: 'Faça resposta estruturada: relatório, fundamento, aplicação e conclusão prática.',
      minutes: 45,
      targetPage: 'discursivas',
      subject: 'Discursiva',
      priority: discursiveCount ? 68 : 80,
      block: 'discursiva',
    }));
  }

  return tasks.sort((a, b) => b.priority - a.priority);
}

function buildWeeklyPlan(countdown, dailyTasks) {
  const baseQuestions = countdown.days <= 7 ? 40 : countdown.days <= 15 ? 30 : countdown.days <= 30 ? 25 : 20;
  const simuladoDay = countdown.days <= 15 ? 'Terça e sábado' : 'Sábado';
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  return days.map((day, index) => ({
    day,
    questions: index === 6 ? Math.max(10, baseQuestions - 10) : baseQuestions,
    focus: [
      index % 2 === 0 ? 'Lei local + Administrativo' : 'Processo Civil + Tributário',
      index === 5 ? 'Simulado + revisão de erros' : index === 6 ? 'Revisão leve + flashcards' : 'Questões comentadas',
    ],
    discursive: index === 2 || index === 5,
    simulated: simuladoDay.toLowerCase().includes(day.toLowerCase()),
    review: index !== 5,
    sourceTask: dailyTasks[index % Math.max(dailyTasks.length, 1)]?.title || 'Manutenção de ritmo',
  }));
}

function buildAlerts({ questionStats, simulationStats, reviewQueue, flashcardStats, syllabusStats, discursiveProgress }) {
  const alerts = [];
  if (questionStats.weakSubject && questionStats.weakSubject.accuracy < 60) alerts.push({ tone: 'red', title: 'Baixa taxa de acerto', detail: `${questionStats.weakSubject.subject}: ${questionStats.weakSubject.accuracy}% de acerto.` });
  if (reviewQueue.length > 12) alerts.push({ tone: 'orange', title: 'Revisão acumulada', detail: `${reviewQueue.length} itens aguardando revisão.` });
  if (flashcardStats.due > 20) alerts.push({ tone: 'orange', title: 'Flashcards vencidos', detail: `${flashcardStats.due} cards precisam de manutenção.` });
  if (simulationStats.count === 0) alerts.push({ tone: 'purple', title: 'Sem simulado calibrado', detail: 'Faça ao menos uma prova rápida para medir tempo e resistência.' });
  if (asArray(discursiveProgress?.attempts).length === 0) alerts.push({ tone: 'purple', title: 'Pouca prática discursiva', detail: 'Treine uma resposta com espelho ainda hoje.' });
  if (syllabusStats.coverage < 40) alerts.push({ tone: 'cyan', title: 'Edital com baixa cobertura', detail: `${syllabusStats.coverage}% dos tópicos marcados como concluídos.` });
  questionStats.neglected.filter((item) => item.coverage < 20).slice(0, 2).forEach((item) => alerts.push({ tone: 'cyan', title: 'Matéria negligenciada', detail: `${item.subject}: ${item.coverage}% de cobertura em questões.` }));
  return alerts.slice(0, 6);
}

export function buildSprintFinalPlan({
  questionProgress = initialQuestionProgress,
  reviewProgress = initialReviewProgress,
  simulationProgress = initialSimulationProgress,
  flashcardProgress = initialFlashcardProgress,
  discursiveProgress = initialDiscursiveProgress,
  syllabusProgress = {},
  sprintProgress = initialSprintProgress,
} = {}) {
  const safeSprint = { ...initialSprintProgress, ...asObject(sprintProgress, initialSprintProgress) };
  const countdown = getExamCountdown(safeSprint);
  const selectedWindow = Number(safeSprint.selectedWindow) || (countdown.days <= 7 ? 7 : countdown.days <= 15 ? 15 : countdown.days <= 30 ? 30 : 45);
  const questionStats = getQuestionStats(questionProgress);
  const reviewQueue = buildReviewQueue(questionProgress, reviewProgress || initialReviewProgress, simulationProgress || initialSimulationProgress);
  const simulationStats = getSimulationStats(simulationProgress);
  const flashcardStats = getFlashcardStats(flashcardProgress);
  const syllabusStats = getSyllabusStats(syllabusProgress);
  const dailyTasks = buildDailyMission({ countdown, questionStats, reviewQueue, flashcardStats, simulationStats, discursiveProgress, syllabusStats });
  const today = todayKey();
  const doneToday = new Set(asArray(safeSprint.completedTasks?.[today]));
  const tasks = dailyTasks.map((task) => ({ ...task, done: doneToday.has(task.id) }));
  const topThree = tasks.filter((task) => !task.done).slice(0, 3);
  const completedCount = tasks.filter((task) => task.done).length;
  const weeklyPlan = buildWeeklyPlan(countdown, tasks);
  const alerts = buildAlerts({ questionStats, simulationStats, reviewQueue, flashcardStats, syllabusStats, discursiveProgress });
  const checklist = [
    { id: 'lei-organica', title: 'Lei Orgânica', status: syllabusStats.bySubject.find((item) => item.subject.includes('Legislação Municipal'))?.percent || 0 },
    { id: 'legislacao-municipal', title: 'Legislação municipal', status: syllabusStats.coverage },
    { id: 'atos', title: 'Atos administrativos', status: questionStats.subjects.find((item) => item.subject === 'Direito Administrativo')?.coverage || 0 },
    { id: 'licitacoes', title: 'Licitações', status: questionStats.subjects.find((item) => item.subject === 'Direito Administrativo')?.accuracy || 0 },
    { id: 'responsabilidade', title: 'Responsabilidade civil', status: questionStats.subjects.find((item) => item.subject === 'Direito Administrativo')?.coverage || 0 },
    { id: 'processo-civil', title: 'Processo Civil', status: questionStats.subjects.find((item) => item.subject.includes('Processual Civil'))?.coverage || 0 },
    { id: 'tributario', title: 'Tributário', status: questionStats.subjects.find((item) => item.subject.includes('Tributário'))?.coverage || 0 },
    { id: 'discursiva', title: 'Discursiva', status: Math.min(100, asArray(discursiveProgress?.attempts).length * 25) },
  ];

  const readiness = clamp(Math.round(
    questionStats.coverage * 0.22
    + questionStats.accuracy * 0.24
    + simulationStats.best * 0.18
    + syllabusStats.coverage * 0.16
    + Math.min(100, flashcardStats.reviewed * 2) * 0.08
    + Math.min(100, asArray(discursiveProgress?.attempts).length * 25) * 0.12,
  ));

  return {
    countdown,
    selectedWindow,
    tasks,
    topThree,
    completedCount,
    completionPercent: percent(completedCount, tasks.length || 1),
    weeklyPlan,
    alerts,
    checklist,
    readiness,
    stats: { questionStats, simulationStats, reviewQueue, flashcardStats, syllabusStats },
    focusBlocks: [
      { id: 'aquecimento', label: 'Aquecimento', minutes: 10, description: 'Flashcards ou revisão curta para ativar memória.' },
      { id: 'teoria', label: 'Teoria direcionada', minutes: 25, description: 'Somente tópico pendente ou matéria negligenciada.' },
      { id: 'questoes', label: 'Questões', minutes: 35, description: 'Treino objetivo com correção imediata.' },
      { id: 'revisao', label: 'Revisão', minutes: 20, description: 'Erros, marcadas e pós-simulado.' },
      { id: 'discursiva', label: 'Discursiva', minutes: 45, description: 'Resposta com espelho e correção semiautomática.' },
      { id: 'simulado', label: 'Simulado', minutes: 40, description: 'Prova rápida, edital ou lei local.' },
      { id: 'flashcards', label: 'Flashcards', minutes: 12, description: 'Memorização de artigos, conceitos e pegadinhas.' },
    ],
  };
}

export function toggleSprintTask(current = initialSprintProgress, taskId, done = true) {
  const safe = { ...initialSprintProgress, ...asObject(current, initialSprintProgress) };
  const today = todayKey();
  const daySet = new Set(asArray(safe.completedTasks?.[today]));
  if (done) daySet.add(taskId);
  else daySet.delete(taskId);
  return {
    ...safe,
    completedTasks: {
      ...asObject(safe.completedTasks),
      [today]: Array.from(daySet),
    },
    log: [
      ...asArray(safe.log),
      { id: `${Date.now()}-${taskId}`, taskId, done, at: new Date().toISOString() },
    ].slice(-200),
  };
}

export function updateSprintWindow(current = initialSprintProgress, selectedWindow) {
  return { ...initialSprintProgress, ...asObject(current, initialSprintProgress), selectedWindow };
}

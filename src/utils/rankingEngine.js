import { questions } from '../data/questions';

export const RANKING_PROGRESS_KEY = 'ranking_goals_progress_v1';

export const initialRankingProgress = {
  weeklyGoal: 120,
  simulationGoal: 2,
  discursiveGoal: 2,
  completedTasks: {},
  customNotes: '',
};

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

export function buildRankingPanel({ questionProgress, simulationProgress, discursiveProgress, rankingProgress }) {
  const answers = Object.values(questionProgress?.answers || {});
  const attempts = safeArray(simulationProgress?.attempts);
  const discursiveHistory = safeArray(discursiveProgress?.history);
  const weeklyGoal = Number(rankingProgress?.weeklyGoal || initialRankingProgress.weeklyGoal);
  const simulationGoal = Number(rankingProgress?.simulationGoal || initialRankingProgress.simulationGoal);
  const discursiveGoal = Number(rankingProgress?.discursiveGoal || initialRankingProgress.discursiveGoal);

  const answered = answers.length;
  const correct = answers.filter((answer) => answer.lastCorrect).length;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  const coverage = Math.round((answered / Math.max(1, questions.length)) * 100);
  const simulations = attempts.length;
  const bestSimulation = attempts.reduce((best, attempt) => Math.max(best, attempt.percent || attempt.score || 0), 0);
  const discursiveCount = discursiveHistory.length;

  const weeklyPercent = Math.min(100, Math.round((answered / Math.max(1, weeklyGoal)) * 100));
  const simPercent = Math.min(100, Math.round((simulations / Math.max(1, simulationGoal)) * 100));
  const discPercent = Math.min(100, Math.round((discursiveCount / Math.max(1, discursiveGoal)) * 100));

  const score = Math.round(
    (accuracy * 0.28) +
    (coverage * 0.22) +
    (Math.min(100, bestSimulation) * 0.25) +
    (weeklyPercent * 0.15) +
    (discPercent * 0.10)
  );

  let tier = 'Base em construção';
  if (score >= 82) tier = 'Competitivo';
  else if (score >= 68) tier = 'Quase competitivo';
  else if (score >= 52) tier = 'Intermediário';

  const deficits = [
    { id: 'questoes', label: 'Questões da semana', percent: weeklyPercent, targetPage: 'questoes' },
    { id: 'simulados', label: 'Simulados da semana', percent: simPercent, targetPage: 'simulados-pro' },
    { id: 'discursivas', label: 'Discursivas da semana', percent: discPercent, targetPage: 'discursivas' },
    { id: 'cobertura', label: 'Cobertura do banco', percent: Math.min(100, coverage), targetPage: 'edital' },
  ].sort((a, b) => a.percent - b.percent);

  return {
    score,
    tier,
    answered,
    accuracy,
    coverage,
    simulations,
    bestSimulation,
    discursiveCount,
    weeklyPercent,
    simPercent,
    discPercent,
    deficits,
    nextGoal: deficits[0],
  };
}

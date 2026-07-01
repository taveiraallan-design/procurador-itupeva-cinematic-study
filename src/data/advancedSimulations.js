export const ADVANCED_SIM_PROGRESS_KEY = 'advanced_simulations_progress_v1';

export const initialAdvancedSimProgress = {
  attempts: [],
  completedBlocks: {},
  activeBlueprintId: 'edital-completo',
};

export const advancedBlueprints = [
  {
    id: 'edital-completo',
    title: 'Prova Estilo Edital Completo',
    duration: 180,
    questions: 40,
    discursive: true,
    focus: 'Objetiva + discursiva em ritmo real',
    recommendedWhen: 'Use 1 vez por semana ou na reta final de 15 dias.',
    distribution: [
      ['Administrativo', 8],
      ['Constitucional', 5],
      ['Processo Civil', 6],
      ['Civil', 4],
      ['Tributário/Financeiro', 6],
      ['Lei Local', 6],
      ['Licitações/Urbanístico/Ambiental', 5],
    ],
    checklist: [
      'Resolver primeiro as questões de alta certeza.',
      'Marcar dúvidas para segunda passada.',
      'Separar 35 a 45 minutos para discursiva.',
      'Não terminar discursiva sem providência prática para o Município.',
    ],
  },
  {
    id: 'lei-local-blindada',
    title: 'Bloco Lei Local Blindada',
    duration: 55,
    questions: 20,
    discursive: false,
    focus: 'Lei Orgânica, competências, tributos e poder de polícia municipal',
    recommendedWhen: 'Use quando o Mentor apontar baixa cobertura de legislação municipal.',
    distribution: [
      ['Lei Orgânica', 7],
      ['Competências Municipais', 4],
      ['Tributos Municipais', 5],
      ['Servidores e Administração Local', 4],
    ],
    checklist: [
      'Ler o enunciado procurando competência: Município, Câmara ou Prefeito.',
      'Desconfiar de alternativas que misturam taxa e imposto.',
      'Identificar se a questão cobra autonomia municipal ou simetria constitucional.',
    ],
  },
  {
    id: 'discursiva-procurador',
    title: 'Simulado Discursivo de Procurador',
    duration: 70,
    questions: 1,
    discursive: true,
    focus: 'Parecer curto com problema concreto municipal',
    recommendedWhen: 'Use 2 vezes por semana até a prova.',
    distribution: [
      ['Identificação do problema', 1],
      ['Fundamentação', 1],
      ['Aplicação ao caso', 1],
      ['Conclusão e providência', 1],
    ],
    checklist: [
      'Abrir com delimitação objetiva do caso.',
      'Fundamentar sem escrever aula genérica.',
      'Aplicar ao caso concreto em parágrafo próprio.',
      'Concluir com orientação jurídica executável.',
    ],
  },
  {
    id: 'pressao-tempo',
    title: 'Treino de Pressão e Tempo',
    duration: 35,
    questions: 15,
    discursive: false,
    focus: 'Velocidade, eliminação de alternativas e controle de ansiedade',
    recommendedWhen: 'Use quando estiver errando por pressa ou atenção.',
    distribution: [
      ['Administrativo', 4],
      ['Processo Civil', 3],
      ['Tributário', 3],
      ['Constitucional', 3],
      ['Lei Local', 2],
    ],
    checklist: [
      'Usar no máximo 2 minutos por questão.',
      'Eliminar duas alternativas antes de marcar.',
      'Não trocar resposta sem motivo jurídico concreto.',
    ],
  },
];

export function buildAdvancedSimulationPlan(progress = initialAdvancedSimProgress) {
  const attempts = Array.isArray(progress?.attempts) ? progress.attempts : [];
  const best = attempts.reduce((max, attempt) => Math.max(max, Number(attempt.score || 0)), 0);
  const average = attempts.length
    ? Math.round(attempts.reduce((sum, attempt) => sum + Number(attempt.score || 0), 0) / attempts.length)
    : 0;
  const last = attempts[0] || null;
  const completedBlocks = progress?.completedBlocks || {};
  const blockPercent = Math.round((Object.values(completedBlocks).filter(Boolean).length / 12) * 100);

  return {
    attempts,
    best,
    average,
    last,
    blockPercent: Math.min(100, blockPercent),
    nextBlueprint: advancedBlueprints.find((item) => item.id === progress?.activeBlueprintId) || advancedBlueprints[0],
  };
}

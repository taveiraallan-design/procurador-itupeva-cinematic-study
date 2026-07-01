export const officialSimulationBlueprints = [
  {
    id: 'edital-objective',
    title: 'Simulado Edital 03/2026',
    label: 'formato edital',
    minutes: 180,
    description: 'Distribuição estratégica baseada no conteúdo programático oficial do Procurador de Itupeva.',
    tone: 'cyan',
    distribution: [
      { subject: 'Língua Portuguesa', count: 8 },
      { subject: 'Direito Constitucional', count: 7 },
      { subject: 'Direito Administrativo', count: 8 },
      { subject: 'Direito Processual Civil e Direito Civil', count: 8 },
      { subject: 'Direito Tributário, Financeiro e Orçamentário', count: 7 },
      { subject: 'Legislação Municipal', count: 8 },
      { subject: 'Direito Urbanístico', count: 4 },
      { subject: 'Direito Ambiental', count: 4 },
      { subject: 'Direito Penal e Processual Penal', count: 3 },
      { subject: 'Direito do Trabalho e Processo do Trabalho', count: 3 },
    ],
  },
  {
    id: 'lei-local',
    title: 'Bloco Lei Local',
    label: 'lei orgânica e município',
    minutes: 45,
    description: 'Prova cirúrgica com Lei Orgânica, competências municipais, servidor, tributação local e atuação da Procuradoria.',
    tone: 'orange',
    distribution: [
      { subject: 'Legislação Municipal', count: 12 },
      { subject: 'Lei Orgânica', count: 5 },
      { subject: 'Direito Tributário, Financeiro e Orçamentário', count: 3 },
    ],
  }
];

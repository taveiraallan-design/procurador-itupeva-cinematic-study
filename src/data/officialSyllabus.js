
export const officialExamMeta = {
  contest: 'Concurso Público nº 003/2026',
  city: 'Itupeva/SP',
  role: 'Procurador Municipal',
  board: 'IDCAP',
  source: 'Edital de Abertura nº 003/2026 e Anexo III – Conteúdo Programático',
  officialPage: 'https://itupeva.sp.gov.br/servicos/diversos/concursos-e-processos-seletivos/concursos-publicos/concurso-publico-032026-procurador',
  warning: 'Base estruturada a partir do conteúdo programático oficial. Conferir eventuais retificações antes da prova.'
};

export const officialSyllabus = [
  {
    id: 'lingua-portuguesa', subject: 'Língua Portuguesa', group: 'Base comum', priority: 'Alta', weight: 8, risk: 'Alto',
    mission: 'Garantir pontos seguros em interpretação, coesão, gramática e reescrita.',
    topics: [
      'Compreensão e interpretação de texto', 'Tipologia e gêneros textuais', 'Coesão, coerência e intertextualidade',
      'Mecanismos de coesão textual e conectores', 'Classes de palavras', 'Ortografia pelo Novo Acordo Ortográfico',
      'Acentuação gráfica', 'Pontuação', 'Relações de coordenação', 'Reescrita de frases e parágrafos',
      'Semântica: sinônimos, antônimos, homônimos, parônimos, denotação e conotação',
      'Sintaxe: subordinação, concordância, regência e colocação pronominal', 'Figuras de linguagem'
    ]
  },
  {
    id: 'direito-constitucional', subject: 'Direito Constitucional', group: 'Núcleo jurídico', priority: 'Crítica', weight: 10, risk: 'Muito alto',
    mission: 'Dominar Constituição, controle, direitos fundamentais, federação e funções essenciais à Justiça.',
    topics: [
      'Constituição: conceito, classificação, estrutura, elementos e supremacia constitucional', 'Poder constituinte originário, derivado e decorrente',
      'Reforma e revisão constitucional', 'Aplicabilidade e eficácia das normas constitucionais', 'Interpretação constitucional e princípios constitucionais',
      'Controle de constitucionalidade: conceito, espécies, sistemas e efeitos', 'Controle difuso e concentrado', 'ADI, ADC, ADPF e ADO',
      'Súmula vinculante e repercussão geral', 'Princípios fundamentais da República Federativa do Brasil', 'Direitos e garantias fundamentais',
      'Direitos sociais, nacionalidade, direitos políticos e partidos políticos', 'Remédios constitucionais', 'Organização do Estado e repartição de competências',
      'União, Estados, Distrito Federal e Municípios', 'Intervenção federal e estadual', 'Organização dos Poderes',
      'Processo legislativo constitucional', 'Funções essenciais à Justiça', 'Defesa do Estado e das instituições democráticas',
      'Federalismo brasileiro e autonomia municipal', 'Ordem econômica e financeira', 'Ordem social'
    ]
  },
  {
    id: 'direito-administrativo', subject: 'Direito Administrativo', group: 'Núcleo jurídico', priority: 'Crítica', weight: 12, risk: 'Muito alto',
    mission: 'Separar legalidade, mérito, organização administrativa, licitações, agentes e controle.',
    topics: [
      'Conceito, objeto, fontes e princípios do Direito Administrativo', 'Regime jurídico-administrativo', 'Princípios da Administração Pública',
      'Organização administrativa: direta e indireta', 'Centralização, descentralização, desconcentração e delegação',
      'Autarquias, fundações, empresas públicas e sociedades de economia mista', 'Consórcios públicos',
      'Poderes administrativos: vinculado, discricionário, hierárquico, disciplinar, regulamentar e polícia', 'Uso e abuso de poder',
      'Atos administrativos: conceito, requisitos, atributos, classificação, espécies e extinção', 'Motivação, anulação, revogação e convalidação',
      'Agentes públicos: classificação e regime jurídico', 'Concurso público, provimento e vacância', 'Direitos, deveres e responsabilidades dos agentes',
      'Processo administrativo disciplinar', 'Serviços públicos: conceito, princípios, classificação e formas de prestação',
      'Concessão, permissão, autorização e PPP', 'Licitações e contratos: princípios, modalidades, dispensa, inexigibilidade e procedimentos auxiliares',
      'Lei Federal nº 14.133/2021', 'Bens públicos', 'Intervenção do Estado na propriedade', 'Responsabilidade civil do Estado',
      'Controle administrativo, legislativo e judicial', 'Controle interno, externo e Tribunais de Contas', 'Improbidade administrativa',
      'Lei Federal nº 9.784/1999', 'Terceiro setor', 'Lei de Acesso à Informação', 'LGPD aplicada à Administração Pública',
      'Direito Administrativo Municipal'
    ]
  },
  {
    id: 'processual-civil-civil', subject: 'Direito Processual Civil e Direito Civil', group: 'Núcleo jurídico', priority: 'Crítica', weight: 11, risk: 'Muito alto',
    mission: 'Conectar CPC, Fazenda Pública em juízo, recursos, execução, LINDB, obrigações e responsabilidade civil.',
    topics: [
      'Normas fundamentais do Processo Civil', 'Jurisdição, ação e competência', 'Partes, procuradores, capacidade processual e deveres',
      'Litisconsórcio e intervenção de terceiros', 'Atos processuais, prazos e nulidades', 'Tutela provisória', 'Processo de conhecimento',
      'Cumprimento de sentença', 'Execução em geral e execução contra a Fazenda Pública', 'Recursos', 'Precedentes obrigatórios, repetitivos e IRDR',
      'Fazenda Pública em juízo', 'Código de Processo Civil', 'LINDB', 'Pessoas naturais e jurídicas', 'Bens', 'Fatos, atos e negócios jurídicos',
      'Prescrição e decadência', 'Obrigações', 'Contratos', 'Responsabilidade civil', 'Posse, propriedade e direitos reais', 'Direito de empresa', 'Sucessões'
    ]
  },
  {
    id: 'penal-processual-penal', subject: 'Direito Penal e Processual Penal', group: 'Núcleo jurídico', priority: 'Alta', weight: 7, risk: 'Alto',
    mission: 'Focar crimes contra a Administração, princípios penais, ação penal, provas, recursos e nulidades.',
    topics: [
      'Princípios do Processo Penal', 'Inquérito policial', 'Ação penal', 'Jurisdição e competência', 'Provas no processo penal',
      'Prisão, cautelares e liberdade provisória', 'Procedimentos penais', 'Sentença penal', 'Recursos penais', 'Habeas corpus e revisão criminal',
      'Nulidades processuais penais', 'Acordo de não persecução penal', 'Organização criminosa e meios especiais de investigação',
      'Princípios de Direito Penal', 'Aplicação da lei penal', 'Teoria da norma penal', 'Fato típico, ilicitude e culpabilidade',
      'Crime doloso e culposo', 'Consumação e tentativa', 'Concurso de pessoas e crimes', 'Penas e extinção da punibilidade',
      'Crimes contra a Administração Pública', 'Abuso de autoridade', 'Crimes contra finanças públicas e ordem tributária'
    ]
  },
  {
    id: 'tributario-financeiro', subject: 'Direito Tributário, Financeiro e Orçamentário', group: 'Núcleo jurídico', priority: 'Crítica', weight: 11, risk: 'Muito alto',
    mission: 'Fixar tributos municipais, crédito tributário, execução fiscal, orçamento público, LRF e receitas/despesas.',
    topics: [
      'Sistema Tributário Nacional', 'Princípios tributários e limitações ao poder de tributar', 'Competência tributária', 'Tributo: conceito, espécies e classificação',
      'Legislação tributária', 'Obrigação tributária', 'Crédito tributário: lançamento, suspensão, extinção e exclusão',
      'Garantias e privilégios do crédito tributário', 'Administração tributária, dívida ativa e certidões', 'Processo administrativo tributário',
      'Execução fiscal', 'Prescrição e decadência tributárias', 'Tributos municipais: IPTU, ITBI, ISSQN, taxas e contribuição de melhoria',
      'Repartição constitucional de receitas', 'Simples Nacional', 'CTN', 'Resolução CNJ nº 547/2024', 'Tema 1184 do STF',
      'Receita e despesa pública', 'Crédito e dívida pública', 'PPA, LDO e LOA', 'Créditos adicionais', 'Fiscalização orçamentária', 'LRF', 'Lei nº 4.320/1964'
    ]
  },
  {
    id: 'trabalho-processual-trabalho', subject: 'Direito do Trabalho e Processo do Trabalho', group: 'Núcleo jurídico', priority: 'Alta', weight: 7, risk: 'Alto',
    mission: 'Revisar relação de emprego, verbas trabalhistas, administração pública e ritos processuais trabalhistas.',
    topics: [
      'Princípios e fontes do Direito do Trabalho', 'Relação de trabalho e relação de emprego', 'Empregado e empregador', 'Contrato individual de trabalho',
      'Jornada, DSR, horas extras e trabalho noturno', 'Remuneração, salário e adicionais', 'Férias, 13º e FGTS', 'Extinção do contrato e verbas rescisórias',
      'Estabilidades provisórias', 'Segurança e medicina do trabalho', 'Direito coletivo, sindicato, negociação coletiva e greve',
      'Administração Pública e relações de trabalho', 'Empregados públicos e terceirização', 'CLT e reforma trabalhista',
      'Princípios do processo do trabalho', 'Justiça do Trabalho', 'Partes, procuradores, atos e prazos', 'Reclamação trabalhista, defesa e audiência',
      'Provas, sentença e coisa julgada', 'Recursos trabalhistas', 'Liquidação e execução', 'PJe'
    ]
  },
  {
    id: 'urbanistico', subject: 'Direito Urbanístico', group: 'Município de Itupeva', priority: 'Alta', weight: 6, risk: 'Alto',
    mission: 'Dominar política urbana, Plano Diretor, Estatuto da Cidade e competências municipais.',
    topics: [
      'Conceito, princípios e competências do Direito Urbanístico', 'Política urbana na Constituição Federal', 'Estatuto da Cidade', 'Plano Diretor',
      'Parcelamento, uso e ocupação do solo urbano', 'Zoneamento urbano', 'Regularização fundiária urbana', 'Instrumentos da política urbana',
      'Licenciamento urbanístico', 'Mobilidade urbana', 'Patrimônio histórico, cultural e paisagístico', 'Infrações e sanções urbanísticas', 'Competências municipais em matéria urbanística'
    ]
  },
  {
    id: 'ambiental', subject: 'Direito Ambiental', group: 'Município de Itupeva', priority: 'Alta', weight: 6, risk: 'Alto',
    mission: 'Revisar licenciamento, responsabilidade ambiental, poder de polícia e competências municipais.',
    topics: [
      'Conceito, princípios e competências do Direito Ambiental', 'Política Nacional do Meio Ambiente', 'Licenciamento ambiental', 'EIA/RIMA',
      'Responsabilidade por danos ambientais', 'Poder de polícia ambiental', 'APP, reserva legal e unidades de conservação', 'Proteção da fauna e da flora',
      'Recursos hídricos e saneamento básico', 'Política Nacional de Resíduos Sólidos', 'Crimes ambientais', 'Processo administrativo ambiental', 'Competências municipais em matéria ambiental'
    ]
  },
  {
    id: 'legislacao-municipal', subject: 'Legislação Municipal', group: 'Município de Itupeva', priority: 'Crítica', weight: 10, risk: 'Muito alto',
    mission: 'Estudar a base local: Lei Orgânica, Estatuto dos Servidores, carreiras e estrutura administrativa.',
    topics: [
      'Lei Orgânica do Município e alterações', 'Estatuto dos Servidores Públicos Municipais', 'Plano de cargos e carreiras dos servidores municipais', 'Reorganização da estrutura administrativa do Poder Executivo'
    ]
  }
];

export function getSyllabusCoverage(questionBank = []) {
  return officialSyllabus.map((subject) => {
    const related = questionBank.filter((q) => q.subject === subject.subject || (subject.id === 'legislacao-municipal' && ['Legislação Municipal', 'Lei Orgânica'].includes(q.subject)));
    const coveredTopics = new Set(related.map((q) => q.topic));
    return {
      ...subject,
      questionCount: related.length,
      coveredTopics: [...coveredTopics],
      coverage: Math.min(100, Math.round((coveredTopics.size / Math.max(subject.topics.length, 1)) * 100)),
      suggestedQuestions: Math.max(10, Math.ceil(subject.weight * 4)),
    };
  });
}

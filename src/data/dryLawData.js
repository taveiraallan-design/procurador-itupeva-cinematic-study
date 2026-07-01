export const dryLawBlocks = [
  {
    id: 'constitucional-municipal',
    title: 'Constituição e Município',
    subject: 'Direito Constitucional',
    priority: 'altíssima',
    articles: [
      { ref: 'CF · art. 18', theme: 'Autonomia federativa municipal', charge: 'Município como ente federativo autônomo.', trap: 'Tratar Município como mero braço do Estado.' },
      { ref: 'CF · art. 29', theme: 'Organização municipal', charge: 'Lei Orgânica, Câmara, Prefeito e regras estruturais.', trap: 'Confundir Lei Orgânica com lei ordinária comum.' },
      { ref: 'CF · art. 30', theme: 'Competências municipais', charge: 'Interesse local e suplementação da legislação federal/estadual.', trap: 'Invadir competência privativa da União.' },
      { ref: 'CF · art. 31', theme: 'Fiscalização municipal', charge: 'Controle externo pela Câmara com auxílio do Tribunal de Contas.', trap: 'Achar que o Tribunal de Contas substitui sempre a Câmara.' },
    ],
  },
  {
    id: 'administrativo-atos',
    title: 'Atos administrativos',
    subject: 'Direito Administrativo',
    priority: 'altíssima',
    articles: [
      { ref: 'Doutrina clássica', theme: 'Competência, finalidade, forma, motivo e objeto', charge: 'Elementos/requisitos do ato administrativo.', trap: 'Confundir mérito com legalidade.' },
      { ref: 'Súmula 473 STF', theme: 'Anulação e revogação', charge: 'Administração pode anular atos ilegais e revogar atos válidos inconvenientes.', trap: 'Revogar ato ilegal ou anular por simples conveniência.' },
      { ref: 'Lei 9.784/1999 · referência geral', theme: 'Motivação e processo administrativo', charge: 'Motivação, segurança jurídica e revisão de atos.', trap: 'Aplicar automaticamente lei federal a município sem verificar norma local, mas usar como referência principiológica.' },
    ],
  },
  {
    id: 'licitacoes-artigos',
    title: 'Licitações e contratos',
    subject: 'Direito Administrativo',
    priority: 'alta',
    articles: [
      { ref: 'Lei 14.133/2021 · art. 5º', theme: 'Princípios', charge: 'Planejamento, segregação de funções, transparência, julgamento objetivo.', trap: 'Decisão subjetiva sem critério editalício.' },
      { ref: 'Lei 14.133/2021 · fase preparatória', theme: 'Planejamento da contratação', charge: 'ETP, matriz de riscos e termo de referência.', trap: 'Parecer jurídico sem processo minimamente instruído.' },
      { ref: 'Lei 14.133/2021 · contratos', theme: 'Fiscalização e alteração contratual', charge: 'Gestor/fiscal, aditivos, sanções e equilíbrio.', trap: 'Aditivo que descaracteriza objeto.' },
    ],
  },
  {
    id: 'tributario-municipal',
    title: 'Tributos municipais',
    subject: 'Direito Tributário',
    priority: 'altíssima',
    articles: [
      { ref: 'CF · art. 145', theme: 'Espécies tributárias', charge: 'Impostos, taxas e contribuição de melhoria.', trap: 'Taxa sem serviço específico/divisível ou sem poder de polícia.' },
      { ref: 'CF · art. 156', theme: 'Impostos municipais', charge: 'IPTU, ITBI e ISS.', trap: 'Confundir fato gerador do ITBI com promessa de compra e venda.' },
      { ref: 'CTN · lançamento', theme: 'Constituição do crédito tributário', charge: 'Fato gerador, lançamento, notificação e cobrança.', trap: 'Cobrar sem crédito regularmente constituído.' },
      { ref: 'Lei de Execução Fiscal', theme: 'Dívida ativa e CDA', charge: 'Inscrição, certeza, liquidez e execução.', trap: 'CDA sem requisitos formais ou crédito prescrito.' },
    ],
  },
  {
    id: 'processo-civil-procurador',
    title: 'Processo Civil para Fazenda Pública',
    subject: 'Direito Processual Civil',
    priority: 'alta',
    articles: [
      { ref: 'CPC · Fazenda Pública', theme: 'Prazos, remessa e prerrogativas', charge: 'Atuação processual do Município em juízo.', trap: 'Aplicar prazo comum ignorando prerrogativas legais.' },
      { ref: 'CPC · tutela provisória', theme: 'Urgência contra o Poder Público', charge: 'Risco, probabilidade, reversibilidade e limites.', trap: 'Conceder medida irreversível sem cautela.' },
      { ref: 'CPC · cumprimento de sentença', theme: 'Precatório/RPV', charge: 'Regime de pagamento da Fazenda Pública.', trap: 'Executar Fazenda como particular.' },
    ],
  },
  {
    id: 'discursiva-artigos',
    title: 'Artigos que viram discursiva',
    subject: 'Discursiva',
    priority: 'altíssima',
    articles: [
      { ref: 'CF · arts. 29 e 30', theme: 'Autonomia municipal', charge: 'Parecer sobre competência municipal e vício de iniciativa.', trap: 'Não separar interesse local de competência privativa.' },
      { ref: 'CF · art. 37', theme: 'Princípios administrativos', charge: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.', trap: 'Responder só em abstrato sem aplicar ao caso.' },
      { ref: 'Súmula 473 STF', theme: 'Autotutela', charge: 'Anulação, revogação, convalidação e segurança jurídica.', trap: 'Confundir ilegalidade com mérito administrativo.' },
    ],
  },
];

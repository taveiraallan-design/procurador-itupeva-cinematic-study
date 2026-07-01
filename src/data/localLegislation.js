export const localLawMatrix = [
  {
    id: 'lei-organica',
    title: 'Lei Orgânica do Município',
    risk: 'Muito alto',
    mission: 'Dominar competências municipais, organização dos Poderes, processo legislativo local e controle da Administração.',
    focus: ['competências municipais', 'Câmara Municipal', 'Prefeito', 'processo legislativo', 'controle externo', 'administração municipal'],
    traps: [
      'Confundir autonomia municipal com soberania.',
      'Atribuir ao Município competência privativa da União ou do Estado.',
      'Trocar iniciativa legislativa privativa por iniciativa comum.',
    ],
    studyAction: 'Ler dispositivos centrais e resolver questões de literalidade + aplicação prática.'
  },
  {
    id: 'estatuto-servidores',
    title: 'Estatuto dos Servidores / regime funcional local',
    risk: 'Alto',
    mission: 'Fixar provimento, deveres, responsabilidades, processo disciplinar e penalidades.',
    focus: ['provimento', 'vacância', 'deveres', 'proibições', 'responsabilidade', 'processo disciplinar'],
    traps: [
      'Confundir sindicância investigativa com PAD punitivo.',
      'Aplicar penalidade sem contraditório e ampla defesa.',
      'Achar que responsabilidade administrativa exclui civil ou penal automaticamente.',
    ],
    studyAction: 'Transformar artigos em flashcards e simular casos de servidor.'
  },
  {
    id: 'codigo-tributario-local',
    title: 'Tributação Municipal',
    risk: 'Alto',
    mission: 'Conectar IPTU, ITBI, ISSQN, taxas, contribuição de melhoria e dívida ativa à atuação do Procurador.',
    focus: ['IPTU', 'ITBI', 'ISSQN', 'taxas', 'dívida ativa', 'execução fiscal'],
    traps: [
      'Misturar tributo municipal com tributo estadual/federal.',
      'Confundir fato gerador com base de cálculo.',
      'Ignorar lançamento e inscrição em dívida ativa.',
    ],
    studyAction: 'Treinar competência tributária e cobrança judicial municipal.'
  },
  {
    id: 'urbanismo-ambiente-local',
    title: 'Urbanismo, posturas e meio ambiente local',
    risk: 'Médio',
    mission: 'Entender poder de polícia municipal em uso do solo, licenciamento, fiscalização e proteção ambiental.',
    focus: ['uso do solo', 'licenciamento', 'fiscalização', 'sanções administrativas', 'meio ambiente urbano'],
    traps: [
      'Confundir polícia administrativa com polícia judiciária.',
      'Achar que interesse local elimina normas gerais federais.',
      'Desconsiderar proporcionalidade nas sanções.',
    ],
    studyAction: 'Associar cada tema a poder de polícia, competência municipal e controle judicial.'
  }
];

export const localLawQuestions = [
  {
    id: 'ql001', subject: 'Legislação Municipal', topic: 'Lei Orgânica', difficulty: 'Média',
    statement: 'A autonomia do Município, segundo o modelo constitucional brasileiro, permite que ele:',
    options: [
      { id: 'A', text: 'atue como ente soberano, acima da Constituição Federal.' },
      { id: 'B', text: 'auto-organize-se por Lei Orgânica, administre interesses locais e legisle nos limites constitucionais.' },
      { id: 'C', text: 'ignore normas gerais da União quando houver interesse financeiro local.' },
      { id: 'D', text: 'subordine-se hierarquicamente ao governo estadual em todos os atos.' },
      { id: 'E', text: 'crie competências penais próprias por lei municipal ordinária.' },
    ], correctAnswer: 'B',
    explanation: 'O Município possui autonomia política, administrativa e legislativa, mas não soberania. A Lei Orgânica expressa sua auto-organização nos limites da Constituição.',
    trap: 'Autonomia municipal não é soberania municipal.',
    legalBasis: 'Constituição Federal, arts. 18, 29 e 30; Lei Orgânica Municipal.',
    editalSource: 'Anexo III – Legislação Municipal', tags: ['lei orgânica', 'autonomia municipal']
  },
  {
    id: 'ql002', subject: 'Legislação Municipal', topic: 'Competências Municipais', difficulty: 'Fácil',
    statement: 'Em matéria de interesse local, a atuação legislativa municipal deve:',
    options: [
      { id: 'A', text: 'respeitar a Constituição e as normas gerais aplicáveis.' },
      { id: 'B', text: 'prevalecer sempre sobre lei federal.' },
      { id: 'C', text: 'ser aprovada exclusivamente por decreto do Prefeito.' },
      { id: 'D', text: 'dispensar controle de constitucionalidade.' },
      { id: 'E', text: 'ser exercida apenas pela Administração indireta.' },
    ], correctAnswer: 'A',
    explanation: 'A competência municipal para assuntos de interesse local é exercida dentro da ordem constitucional e em harmonia com normas gerais.',
    trap: 'Interesse local não autoriza contrariar a Constituição ou normas gerais.',
    legalBasis: 'Constituição Federal, art. 30; Lei Orgânica Municipal.',
    editalSource: 'Anexo III – Legislação Municipal', tags: ['competência municipal', 'interesse local']
  },
  {
    id: 'ql003', subject: 'Legislação Municipal', topic: 'Câmara Municipal', difficulty: 'Média',
    statement: 'O controle externo da Administração Municipal é exercido, em regra, pelo Poder Legislativo municipal com auxílio:',
    options: [
      { id: 'A', text: 'da autoridade policial local.' },
      { id: 'B', text: 'do Tribunal de Contas competente.' },
      { id: 'C', text: 'de empresa privada escolhida livremente pelo Prefeito.' },
      { id: 'D', text: 'exclusivo da Procuradoria Municipal, sem Legislativo.' },
      { id: 'E', text: 'do cartório de registro civil.' },
    ], correctAnswer: 'B',
    explanation: 'O Legislativo municipal exerce controle externo com auxílio do Tribunal de Contas competente, sem prejuízo de controles internos.',
    trap: 'Tribunal de Contas auxilia o Legislativo, mas não substitui politicamente a Câmara.',
    legalBasis: 'Constituição Federal, arts. 70 e 71; Lei Orgânica Municipal.',
    editalSource: 'Anexo III – Legislação Municipal', tags: ['controle externo', 'tribunal de contas']
  },
  {
    id: 'ql004', subject: 'Legislação Municipal', topic: 'Prefeito', difficulty: 'Média',
    statement: 'A chefia da Administração Municipal direta é exercida pelo Prefeito, a quem compete, em linhas gerais:',
    options: [
      { id: 'A', text: 'julgar definitivamente todas as contas públicas sem controle externo.' },
      { id: 'B', text: 'executar políticas públicas, administrar serviços municipais e praticar atos de gestão nos limites legais.' },
      { id: 'C', text: 'editar emendas à Constituição Federal.' },
      { id: 'D', text: 'exercer função jurisdicional em causas contra o Município.' },
      { id: 'E', text: 'revogar leis aprovadas pela Câmara sem processo legislativo.' },
    ], correctAnswer: 'B',
    explanation: 'O Prefeito chefia a Administração Municipal e executa políticas públicas, respeitando lei, Constituição e controles.',
    trap: 'Chefia administrativa não significa poder ilimitado nem função jurisdicional.',
    legalBasis: 'Lei Orgânica Municipal; regime constitucional municipal.',
    editalSource: 'Anexo III – Legislação Municipal', tags: ['prefeito', 'administração municipal']
  },
  {
    id: 'ql005', subject: 'Legislação Municipal', topic: 'Processo Legislativo Municipal', difficulty: 'Difícil',
    statement: 'Quando a Lei Orgânica reserva iniciativa de determinado projeto ao Prefeito, projeto apresentado por vereador sobre essa matéria pode gerar:',
    options: [
      { id: 'A', text: 'vício de iniciativa, com risco de inconstitucionalidade formal.' },
      { id: 'B', text: 'convalidação automática pela simples publicação.' },
      { id: 'C', text: 'competência penal municipal.' },
      { id: 'D', text: 'revogação de norma constitucional.' },
      { id: 'E', text: 'dispensa de sanção ou veto.' },
    ], correctAnswer: 'A',
    explanation: 'A iniciativa privativa, quando prevista validamente, deve ser observada. Seu desrespeito pode gerar vício formal.',
    trap: 'A banca pode tratar iniciativa privativa como detalhe irrelevante. Não é.',
    legalBasis: 'Lei Orgânica Municipal; separação de poderes; processo legislativo.',
    editalSource: 'Anexo III – Legislação Municipal', tags: ['iniciativa', 'processo legislativo']
  },
  {
    id: 'ql006', subject: 'Legislação Municipal', topic: 'Servidores Municipais', difficulty: 'Média',
    statement: 'Em processo disciplinar contra servidor municipal, a Administração deve observar:',
    options: [
      { id: 'A', text: 'contraditório e ampla defesa antes da imposição de penalidade.' },
      { id: 'B', text: 'punição automática sempre que houver denúncia.' },
      { id: 'C', text: 'dispensa de motivação para penalidade grave.' },
      { id: 'D', text: 'julgamento por comissão informal sem ato de instauração.' },
      { id: 'E', text: 'sigilo absoluto incompatível com qualquer defesa.' },
    ], correctAnswer: 'A',
    explanation: 'A imposição de penalidade exige devido processo, contraditório, ampla defesa e motivação.',
    trap: 'Notícia de irregularidade não é punição automática.',
    legalBasis: 'Constituição Federal, art. 5º, LV; regime jurídico local dos servidores.',
    editalSource: 'Anexo III – Legislação Municipal', tags: ['servidores', 'PAD', 'ampla defesa']
  },
  {
    id: 'ql007', subject: 'Legislação Municipal', topic: 'Tributação Municipal', difficulty: 'Fácil',
    statement: 'São impostos tipicamente municipais:',
    options: [
      { id: 'A', text: 'IPTU, ITBI e ISSQN.' },
      { id: 'B', text: 'ICMS, IPVA e ITCMD.' },
      { id: 'C', text: 'IPI, IOF e IR.' },
      { id: 'D', text: 'FGTS, PIS e COFINS.' },
      { id: 'E', text: 'ITR, II e IE em todos os casos.' },
    ], correctAnswer: 'A',
    explanation: 'IPTU, ITBI e ISSQN são impostos de competência municipal.',
    trap: 'Misturar tributos estaduais e federais com municipais é pegadinha clássica.',
    legalBasis: 'Constituição Federal; Sistema Tributário Nacional.',
    editalSource: 'Anexo III – Legislação Municipal / Tributário', tags: ['tributos municipais', 'IPTU', 'ISS']
  },
  {
    id: 'ql008', subject: 'Legislação Municipal', topic: 'Dívida Ativa', difficulty: 'Média',
    statement: 'A inscrição em dívida ativa municipal é relevante porque:',
    options: [
      { id: 'A', text: 'formaliza o crédito para fins de cobrança, inclusive judicial, quando cabível.' },
      { id: 'B', text: 'extingue automaticamente o crédito tributário.' },
      { id: 'C', text: 'dispensa certeza e liquidez do crédito.' },
      { id: 'D', text: 'impede qualquer defesa do contribuinte.' },
      { id: 'E', text: 'transforma tributo municipal em imposto federal.' },
    ], correctAnswer: 'A',
    explanation: 'A dívida ativa documenta o crédito e viabiliza a cobrança administrativa ou judicial, observados requisitos legais.',
    trap: 'Inscrição não elimina defesa nem sana qualquer ilegalidade do lançamento.',
    legalBasis: 'CTN; Lei de Execuções Fiscais; legislação municipal tributária.',
    editalSource: 'Anexo III – Tributário / Legislação Municipal', tags: ['dívida ativa', 'execução fiscal']
  },
  {
    id: 'ql009', subject: 'Legislação Municipal', topic: 'Poder de Polícia Municipal', difficulty: 'Média',
    statement: 'A fiscalização municipal de posturas, uso do solo e licenciamento decorre, em regra:',
    options: [
      { id: 'A', text: 'do poder de polícia administrativa municipal.' },
      { id: 'B', text: 'de poder constituinte originário local.' },
      { id: 'C', text: 'de função jurisdicional do Prefeito.' },
      { id: 'D', text: 'de delegação obrigatória da Polícia Civil.' },
      { id: 'E', text: 'de contrato privado sem lei.' },
    ], correctAnswer: 'A',
    explanation: 'O Município exerce poder de polícia administrativa sobre assuntos de interesse local, respeitando a lei e a proporcionalidade.',
    trap: 'Poder de polícia administrativa não é polícia judiciária.',
    legalBasis: 'Competência municipal; Direito Administrativo; legislação urbanística local.',
    editalSource: 'Anexo III – Direito Urbanístico / Legislação Municipal', tags: ['poder de polícia', 'posturas', 'urbanismo']
  },
  {
    id: 'ql010', subject: 'Legislação Municipal', topic: 'Responsabilidade do Município', difficulty: 'Difícil',
    statement: 'Em demanda indenizatória contra o Município, a atuação da Procuradoria deve observar que:',
    options: [
      { id: 'A', text: 'responsabilidade objetiva elimina a necessidade de dano e nexo causal.' },
      { id: 'B', text: 'sempre haverá indenização quando houver simples insatisfação do administrado.' },
      { id: 'C', text: 'a análise de dano, nexo causal e excludentes é essencial para a defesa do ente público.' },
      { id: 'D', text: 'o Município não possui responsabilidade civil em nenhuma hipótese.' },
      { id: 'E', text: 'direito de regresso independe de dolo ou culpa do agente.' },
    ], correctAnswer: 'C',
    explanation: 'Mesmo na responsabilidade objetiva, é necessário avaliar dano e nexo causal, além de possíveis excludentes.',
    trap: 'Objetiva não significa automática.',
    legalBasis: 'Constituição Federal, art. 37, §6º; atuação contenciosa municipal.',
    editalSource: 'Anexo III – Responsabilidade Civil / Atribuições', tags: ['responsabilidade civil', 'procuradoria municipal']
  }
];

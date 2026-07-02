export const topicQuestionMeta = {
  phase: 'Fase 45',
  title: 'Questões Comentadas por Tópico da Apostila',
  description: 'Treino objetivo integrado à Apostila: gabarito, comentários da correta, comentários das erradas, pegadinha e envio para revisão.'
};

export const topicQuestionBank = [
  {
    subject: 'Língua Portuguesa',
    topic: 'Pontuação e vírgula',
    level: 'básico',
    statement: 'Assinale a alternativa em que a vírgula foi empregada corretamente.',
    options: [
      'O servidor, apresentou defesa no prazo legal.',
      'No processo administrativo, o servidor apresentou defesa.',
      'A autoridade competente, decidiu o recurso.',
      'O Município, ajuizou a ação de cobrança.'
    ],
    answer: 1,
    explanation: 'A alternativa correta separa o adjunto adverbial deslocado “No processo administrativo”. Nas demais, a vírgula separa sujeito e verbo, o que é erro clássico.',
    wrongComments: [
      'Errada. “O servidor” é sujeito de “apresentou”; não se separa sujeito do verbo por vírgula.',
      'Correta. O termo inicial está deslocado e organiza a circunstância da frase.',
      'Errada. “A autoridade competente” é sujeito de “decidiu”.',
      'Errada. “O Município” é sujeito de “ajuizou”.'
    ],
    trap: 'A banca costuma explorar a falsa ideia de que vírgula é apenas pausa de fala.',
    dryLaw: 'Norma culta da língua portuguesa; gramática normativa aplicada à pontuação.',
    reviewPrompt: 'Revise vírgula proibida entre sujeito e verbo e vírgula com adjunto adverbial deslocado.'
  },
  {
    subject: 'Língua Portuguesa',
    topic: 'Tipologia textual',
    level: 'básico',
    statement: 'Um texto que apresenta uma tese e busca convencer o leitor por meio de fundamentos é predominantemente:',
    options: ['narrativo', 'descritivo', 'argumentativo', 'injuntivo'],
    answer: 2,
    explanation: 'O texto argumentativo defende uma tese. Ele não apenas informa; ele sustenta uma posição com razões.',
    wrongComments: [
      'Errada. Narração apresenta fatos em sequência temporal.',
      'Errada. Descrição apresenta características.',
      'Correta. Argumentação envolve tese, fundamento e conclusão.',
      'Errada. Injunção orienta comportamento, com comandos ou instruções.'
    ],
    trap: 'Um texto pode ter trechos descritivos ou expositivos, mas a prova costuma cobrar a tipologia predominante.',
    dryLaw: 'Conteúdo de interpretação e produção textual do edital.',
    reviewPrompt: 'Revise narração, descrição, exposição, argumentação e injunção.'
  },
  {
    subject: 'Direito Administrativo',
    topic: 'Ato administrativo',
    level: 'intermediário',
    statement: 'Em regra, ato administrativo ilegal deve ser:',
    options: ['revogado por conveniência', 'anulado por vício de legalidade', 'mantido por presunção absoluta de legitimidade', 'convertido automaticamente em contrato'],
    answer: 1,
    explanation: 'Ato ilegal é objeto de anulação, pois o controle recai sobre a legalidade. Revogação é juízo de mérito sobre ato válido.',
    wrongComments: [
      'Errada. Revogação pressupõe ato válido e envolve conveniência e oportunidade.',
      'Correta. A ilegalidade conduz à anulação.',
      'Errada. A presunção de legitimidade é relativa, não absoluta.',
      'Errada. Ato administrativo não se converte automaticamente em contrato.'
    ],
    trap: 'A banca troca anulação por revogação. Ato ilegal não se revoga; ato ilegal se anula.',
    dryLaw: 'Princípio da legalidade; autotutela administrativa; Súmula 473/STF como referência clássica.',
    reviewPrompt: 'Revise anulação, revogação e convalidação.'
  },
  {
    subject: 'Direito Administrativo',
    topic: 'Licitações e contratos',
    level: 'intermediário',
    statement: 'Na contratação pública, a motivação do ato administrativo serve principalmente para:',
    options: ['dispensar controle externo', 'justificar a escolha e permitir controle de legalidade', 'substituir o edital', 'afastar a competitividade'],
    answer: 1,
    explanation: 'A motivação explicita os fundamentos de fato e de direito, permitindo controle pela Administração, órgãos de controle e interessados.',
    wrongComments: [
      'Errada. Motivação não dispensa controle; ela viabiliza controle.',
      'Correta. Motivação dá transparência e permite verificar legalidade.',
      'Errada. O edital continua sendo instrumento convocatório.',
      'Errada. A competitividade é princípio essencial da licitação.'
    ],
    trap: 'Confundir motivação com formalidade inútil. Em licitação, motivação é proteção do interesse público.',
    dryLaw: 'Lei nº 14.133/2021; princípios da licitação e motivação dos atos.',
    reviewPrompt: 'Revise motivação, princípios licitatórios e controle.'
  },
  {
    subject: 'Direito Constitucional',
    topic: 'Competência municipal',
    level: 'intermediário',
    statement: 'A competência municipal para legislar sobre interesse local significa que o Município pode:',
    options: ['contrariar normas gerais federais', 'disciplinar matérias predominantemente locais respeitando a Constituição', 'legislar sobre qualquer matéria nacional', 'afastar direitos fundamentais por lei local'],
    answer: 1,
    explanation: 'O Município possui autonomia e competência para assuntos de interesse local, mas deve respeitar Constituição, normas gerais e repartição de competências.',
    wrongComments: [
      'Errada. Município não pode contrariar normas gerais válidas.',
      'Correta. Interesse local é espaço típico da atuação municipal.',
      'Errada. Há limites constitucionais de competência.',
      'Errada. Lei municipal não afasta direitos fundamentais.'
    ],
    trap: 'A banca troca autonomia por soberania. Município é autônomo, não soberano.',
    dryLaw: 'Constituição Federal, arts. 18, 29 e 30.',
    reviewPrompt: 'Revise autonomia municipal, interesse local e competência suplementar.'
  },
  {
    subject: 'Direito Constitucional',
    topic: 'Administração Pública na Constituição',
    level: 'básico',
    statement: 'O princípio da impessoalidade impede, entre outros pontos:',
    options: ['a atuação administrativa em benefício pessoal de agente ou terceiro', 'a publicação oficial de atos', 'a prestação de serviços públicos', 'o controle judicial de atos administrativos'],
    answer: 0,
    explanation: 'A impessoalidade exige atuação voltada ao interesse público, vedando favorecimento, perseguição e promoção pessoal.',
    wrongComments: [
      'Correta. A Administração não pode agir para beneficiar ou perseguir pessoas específicas sem base pública.',
      'Errada. Publicidade é princípio constitucional.',
      'Errada. Serviços públicos são função administrativa.',
      'Errada. Controle judicial é garantia de legalidade.'
    ],
    trap: 'Confundir impessoalidade com ausência de identificação de atos. O foco é finalidade pública e vedação de personalismo.',
    dryLaw: 'Constituição Federal, art. 37, caput.',
    reviewPrompt: 'Revise legalidade, impessoalidade, moralidade, publicidade e eficiência.'
  },
  {
    subject: 'Direito Processual Civil e Direito Civil',
    topic: 'Fazenda Pública em juízo',
    level: 'avançado',
    statement: 'A remessa necessária, quando cabível, tem como finalidade:',
    options: ['substituir recurso voluntário da parte vencedora', 'submeter determinadas sentenças contra a Fazenda Pública ao reexame pelo tribunal', 'impedir a execução de qualquer sentença', 'extinguir automaticamente o processo'],
    answer: 1,
    explanation: 'A remessa necessária é técnica de reexame obrigatório de certas decisões desfavoráveis à Fazenda Pública, nas hipóteses legais.',
    wrongComments: [
      'Errada. Não é recurso da parte vencedora.',
      'Correta. É reexame obrigatório quando a lei exige.',
      'Errada. Não impede qualquer execução em absoluto; depende do regime processual.',
      'Errada. Não extingue automaticamente o processo.'
    ],
    trap: 'A banca pode chamar remessa necessária de recurso. A natureza é discutida, mas não se trata de recurso voluntário da parte.',
    dryLaw: 'CPC, art. 496.',
    reviewPrompt: 'Revise Fazenda Pública em juízo, prazos, remessa necessária e cumprimento de sentença.'
  },
  {
    subject: 'Direito Tributário, Financeiro e Orçamentário',
    topic: 'Crédito tributário municipal',
    level: 'intermediário',
    statement: 'O crédito tributário é constituído, em regra, por meio de:',
    options: ['lançamento', 'petição inicial', 'empenho da despesa', 'parecer jurídico'],
    answer: 0,
    explanation: 'O lançamento verifica o fato gerador, calcula o montante devido, identifica o sujeito passivo e constitui o crédito tributário.',
    wrongComments: [
      'Correta. Lançamento constitui o crédito tributário.',
      'Errada. Petição inicial pertence ao processo judicial.',
      'Errada. Empenho é instituto de despesa pública.',
      'Errada. Parecer pode orientar, mas não constitui crédito tributário.'
    ],
    trap: 'Confundir obrigação tributária com crédito tributário. A obrigação nasce com o fato gerador; o crédito é formalizado pelo lançamento.',
    dryLaw: 'CTN, arts. 113 e 142.',
    reviewPrompt: 'Revise obrigação tributária, fato gerador, lançamento, crédito e dívida ativa.'
  },
  {
    subject: 'Legislação Municipal',
    topic: 'Lei Orgânica Municipal',
    level: 'intermediário',
    statement: 'A Lei Orgânica Municipal funciona como:',
    options: ['lei federal de organização da União', 'norma básica de organização do Município, respeitada a Constituição', 'contrato administrativo da Prefeitura', 'regulamento interno de servidor apenas'],
    answer: 1,
    explanation: 'A Lei Orgânica estrutura o Município, seus poderes, competências e regras básicas, sempre subordinada à Constituição.',
    wrongComments: [
      'Errada. Não é lei federal.',
      'Correta. É a norma organizadora local.',
      'Errada. Não é contrato administrativo.',
      'Errada. É mais ampla que regime de servidor.'
    ],
    trap: 'Confundir Lei Orgânica com lei ordinária comum. Ela tem papel estruturante no âmbito municipal.',
    dryLaw: 'Lei Orgânica do Município de Itupeva; Constituição Federal, arts. 29 e 30.',
    reviewPrompt: 'Revise autonomia municipal, Prefeito, Câmara, competências e processo legislativo local.'
  },
  {
    subject: 'Direito Processual Penal e Direito Penal',
    topic: 'Crimes contra a Administração Pública',
    level: 'intermediário',
    statement: 'No peculato, o núcleo do delito envolve, em linhas gerais:',
    options: ['apropriação ou desvio de bem público ou particular sob posse do funcionário em razão do cargo', 'opinião crítica sobre ato administrativo', 'mero atraso sem relevância funcional', 'inadimplemento civil sem dolo'],
    answer: 0,
    explanation: 'O peculato protege a Administração Pública contra apropriação, desvio ou outras formas típicas de lesão praticadas por funcionário público em razão do cargo.',
    wrongComments: [
      'Correta. Essa é a ideia central do peculato-apropriação/desvio.',
      'Errada. Crítica não configura peculato.',
      'Errada. Atraso, por si só, não é peculato.',
      'Errada. Inadimplemento civil não se confunde com crime funcional.'
    ],
    trap: 'A banca pode trocar peculato, concussão, corrupção passiva e prevaricação.',
    dryLaw: 'Código Penal, crimes contra a Administração Pública.',
    reviewPrompt: 'Revise peculato, concussão, corrupção passiva e prevaricação.'
  },
  {
    subject: 'Direito do Trabalho e Direito Processual do Trabalho',
    topic: 'Terceirização e Administração Pública',
    level: 'avançado',
    statement: 'A responsabilidade da Administração Pública por verbas trabalhistas de terceirizados exige atenção especial porque:',
    options: ['sempre é automática', 'nunca pode existir', 'depende da análise da fiscalização e da conduta do ente público no caso concreto', 'substitui o contrato administrativo por contrato de trabalho direto'],
    answer: 2,
    explanation: 'O tema envolve fiscalização contratual, prova de culpa e entendimentos dos tribunais. Não se deve afirmar responsabilidade automática sem análise do caso.',
    wrongComments: [
      'Errada. A responsabilização automática é rejeitada em precedentes relevantes.',
      'Errada. Também não se pode dizer que nunca exista.',
      'Correta. A análise depende da conduta administrativa e da fiscalização.',
      'Errada. A responsabilidade subsidiária não transforma automaticamente o vínculo.'
    ],
    trap: 'Extremos como “sempre” e “nunca” costumam estar errados em terceirização pública.',
    dryLaw: 'Constituição, CLT, Lei de Licitações e jurisprudência STF/TST sobre terceirização.',
    reviewPrompt: 'Revise fiscalização contratual, terceirização, culpa da Administração e defesa do Município.'
  },
  {
    subject: 'Direito Urbanístico',
    topic: 'Plano Diretor e função social',
    level: 'intermediário',
    statement: 'O Plano Diretor é instrumento central porque:',
    options: ['define qualquer crime municipal', 'orienta a política urbana e a função social da propriedade urbana', 'substitui a Constituição Federal', 'dispensa licenciamento e fiscalização'],
    answer: 1,
    explanation: 'O Plano Diretor organiza a política urbana local, orientando uso do solo, desenvolvimento urbano e função social da propriedade.',
    wrongComments: [
      'Errada. Plano Diretor não define crimes.',
      'Correta. É instrumento básico da política urbana.',
      'Errada. Deve respeitar a Constituição.',
      'Errada. Não dispensa controle urbanístico.'
    ],
    trap: 'Confundir Plano Diretor com mero documento político sem força normativa. Ele orienta e condiciona a política urbana municipal.',
    dryLaw: 'Constituição Federal, arts. 182 e 183; Estatuto da Cidade.',
    reviewPrompt: 'Revise política urbana, função social, Plano Diretor e zoneamento.'
  },
  {
    subject: 'Direito Ambiental',
    topic: 'Licenciamento ambiental',
    level: 'intermediário',
    statement: 'O licenciamento ambiental é relevante porque:',
    options: ['autoriza atividade potencialmente impactante mediante controle e condicionantes', 'elimina toda responsabilidade ambiental futura', 'impede qualquer fiscalização posterior', 'serve apenas para atividade sem risco'],
    answer: 0,
    explanation: 'O licenciamento é instrumento de controle prévio e contínuo, com análise de impactos, condicionantes e fiscalização.',
    wrongComments: [
      'Correta. O licenciamento organiza prevenção, controle e condicionantes.',
      'Errada. Licença não elimina responsabilidade por dano.',
      'Errada. A fiscalização continua possível.',
      'Errada. É especialmente relevante para atividades potencialmente poluidoras ou impactantes.'
    ],
    trap: 'A banca pode afirmar que licença ambiental é “salvo-conduto” contra responsabilidade. Não é.',
    dryLaw: 'Constituição Federal, art. 225; Política Nacional do Meio Ambiente; normas de licenciamento.',
    reviewPrompt: 'Revise prevenção, precaução, licenciamento, condicionantes e responsabilidade ambiental.'
  }
];

export function getTopicQuestionStats(progress = {}) {
  const answered = progress.answered || {};
  const totalAnswered = Object.keys(answered).length;
  const hits = Object.values(answered).filter((item) => item.correct).length;
  return {
    total: topicQuestionBank.length,
    answered: totalAnswered,
    hits,
    accuracy: totalAnswered ? Math.round((hits / totalAnswered) * 100) : 0
  };
}

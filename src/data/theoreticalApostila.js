
export const theoreticalApostilaMeta = {
  phase: 'Fase 43',
  title: 'Aula teórica completa',
  subtitle: 'Texto corrido de apostila, antes dos quadros de revisão, para ensinar o conteúdo de verdade.'
};

function norm(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function has(text, terms) {
  const t = norm(text);
  return terms.some((term) => t.includes(norm(term)));
}

function safeList(list, fallback = []) {
  return Array.isArray(list) && list.length ? list : fallback;
}

function firstSentence(text) {
  return String(text || '').split(/(?<=[.!?])\s+/)[0] || String(text || '');
}

function buildFromTopic(subject, topic, subjectContext) {
  const title = topic?.title || 'Tópico da apostila';
  const subjectName = subject?.subject || 'matéria';
  const plain = safeList(topic?.plainExplanation, []);
  const legal = safeList(topic?.legalBase, []);
  const traps = safeList(topic?.traps, []);
  const diffs = safeList(topic?.differences, []);
  const objective = safeList(topic?.objectiveCharge, []);

  return {
    mode: 'theory',
    title: `Aula teórica — ${title}`,
    lead: `Esta aula transforma o tópico em uma explicação contínua, para você entender antes de revisar.` ,
    paragraphs: [
      `${title} é um ponto de estudo relevante em ${subjectName} porque aparece como instrumento de raciocínio, não apenas como conceito isolado. Para prova de Procurador Municipal, o mais importante é compreender a lógica do instituto: qual problema ele resolve, qual regra jurídica organiza a solução e qual consequência prática nasce quando a regra é aplicada ao caso concreto.`,
      `${topic?.whatIs || firstSentence(topic?.summary)} ${topic?.purpose || ''}`,
      plain.length
        ? plain.join(' ')
        : `Na prática, o candidato deve partir do fato apresentado no enunciado, identificar o instituto jurídico envolvido, localizar a base normativa e verificar se há requisito, exceção ou consequência específica. Esse método evita decorar frases soltas e ajuda a responder questões objetivas e discursivas com mais segurança.`,
      subjectContext,
      `${topic?.examTechnical || 'Em prova, o tema costuma ser cobrado por meio de situações concretas, alternativas com conceitos próximos e troca de consequência jurídica.'} O examinador pode apresentar uma situação municipal e exigir que você diga se a providência é válida, inválida, obrigatória, facultativa, proporcional ou juridicamente arriscada.`,
      `${topic?.cityExample || 'Na Procuradoria Municipal, esse conteúdo costuma aparecer em pareceres, defesas judiciais, processos administrativos, análise de atos de gestão, legislação local e orientação preventiva aos órgãos públicos.'}`,
      legal.length
        ? `A leitura da lei seca deve acompanhar a aula. Neste tópico, priorize: ${legal.join('; ')}. A função da lei seca é confirmar os requisitos, limites e expressões que a banca pode reproduzir no enunciado.`
        : `A lei seca deve ser conferida depois da aula para fixar os termos técnicos usados pela banca.`,
      traps.length || diffs.length
        ? `Depois de entender a teoria, revise os pontos de confusão. Aqui, as principais armadilhas são: ${[...traps.slice(0,3), ...diffs.slice(0,2)].join(' ')}.`
        : `A pegadinha normalmente está em exagerar a regra, ignorar uma exceção ou aplicar a consequência de outro instituto parecido.`,
      objective.length
        ? `Em questão objetiva, a cobrança tende a aparecer assim: ${objective.join(' ')}. O caminho mais seguro é verificar o comando, isolar o instituto e eliminar alternativas que trocam conceito, requisito ou efeito.`
        : `Em questão objetiva, não responda por impressão. Leia o comando, identifique o instituto e confira se a alternativa respeita a regra e suas exceções.`,
      `${topic?.discursiveCharge || 'Em discursiva ou parecer, use o tema como fundamento: apresente o problema, indique a base jurídica, aplique ao caso e conclua com uma providência prática.'}`
    ],
    attention: [
      traps[0] || 'Não confunda conceito com consequência prática.',
      diffs[0] || 'Compare o tema com institutos parecidos antes de marcar a alternativa.',
      'Em prova de Procurador, sempre pense no efeito para o Município: validar, corrigir, anular, defender, cobrar, fiscalizar ou orientar.'
    ],
    exam: objective.length ? objective : ['A banca costuma cobrar o conceito em situação concreta.', 'Também pode trocar requisitos, exceções e consequências jurídicas.', 'Na discursiva, o tema vira fundamento de parecer ou defesa do Município.'],
    question: {
      statement: `Em uma questão sobre ${title}, qual é a postura mais segura do candidato?`,
      answer: 'Identificar o instituto, conferir a base legal, verificar requisitos/exceções e só então escolher a consequência jurídica adequada.',
      comment: 'Esse método impede resposta por memória solta e reduz erro em alternativas parecidas.'
    }
  };
}

const specificLessons = [
  {
    match: (s,t,txt) => s.id === 'lingua-portuguesa' && has(txt, ['pontuação', 'virgula', 'vírgula']),
    build: () => ({
      title: 'Aula teórica — Pontuação e uso da vírgula',
      lead: 'A pontuação deve ser estudada pela função sintática, não pela “pausa da fala”.',
      paragraphs: [
        'A vírgula é um sinal de pontuação usado para organizar a estrutura da frase. Ela não representa simplesmente uma pausa da fala; sua função principal é sintática. Isso significa que a vírgula ajuda a separar elementos da oração, destacar termos deslocados, isolar explicações e evitar ambiguidades. Em prova, a banca não pergunta se você “respiraria” naquele ponto; ela pergunta se a vírgula está correta pela função que exerce na frase.',
        'O primeiro cuidado é reconhecer a estrutura básica da oração. Normalmente, sujeito e verbo ficam ligados diretamente. Por isso, não se usa vírgula entre sujeito e verbo. A frase “O servidor apresentou defesa” está correta sem vírgula. Já “O servidor, apresentou defesa” está errada, porque separa o sujeito “O servidor” do verbo “apresentou”. A mesma lógica vale para verbo e complemento: em regra, não se separa o verbo do objeto por vírgula.',
        'A vírgula é usada com frequência quando um termo aparece deslocado. Em “No processo administrativo, o servidor apresentou defesa”, a expressão inicial indica circunstância e foi colocada antes da estrutura principal. A vírgula ajuda a organizar a leitura. Em termos curtos, essa vírgula pode ser facultativa; em termos longos, costuma ser recomendada. O ponto essencial é perceber que a vírgula separa um elemento acessório deslocado, não o núcleo sujeito-verbo.',
        'Outro uso importante ocorre com vocativo e aposto. Vocativo é chamamento: “Senhor Procurador, encaminho os autos”. Aposto é explicação ou identificação: “João, servidor municipal, apresentou recurso”. Nesses casos, a vírgula isola um termo que não é essencial para a estrutura principal da oração. A banca gosta de retirar vírgulas de apostos explicativos ou colocar vírgula em lugar proibido.',
        'A vírgula também diferencia orações explicativas e restritivas. Em “Os servidores, que estavam em férias, foram convocados”, a oração entre vírgulas sugere que todos os servidores estavam em férias. Em “Os servidores que estavam em férias foram convocados”, sem vírgulas, a ideia é restritiva: apenas aqueles que estavam em férias foram convocados. Aqui a pontuação altera o sentido, e esse é um dos pontos mais cobrados.',
        'Na discursiva de Procurador, pontuação correta melhora clareza e segurança. Um parecer com vírgulas mal colocadas pode ficar ambíguo, parecer informal ou dificultar a compreensão da conclusão. A regra prática é: primeiro identifique sujeito, verbo, complemento e termos acessórios; depois decida a vírgula. Não faça o contrário.'
      ],
      attention: ['Nunca separe sujeito e verbo por vírgula.', 'Não separe verbo e complemento direto por vírgula.', 'Orações explicativas e restritivas podem mudar o sentido do enunciado.'],
      exam: ['A banca pode perguntar se a vírgula é obrigatória, facultativa ou proibida.', 'Pode perguntar se a retirada da vírgula altera o sentido.', 'Pode inserir vírgula indevida entre sujeito e verbo.'],
      question: {
        statement: 'Assinale a frase com pontuação correta: A) O servidor, apresentou defesa. B) No processo administrativo, o servidor apresentou defesa. C) A comissão, analisou os autos.',
        answer: 'B',
        comment: 'A vírgula separa adjunto adverbial deslocado. Nas alternativas A e C, há vírgula indevida entre sujeito e verbo.'
      }
    })
  },
  {
    match: (s,t,txt) => s.id === 'lingua-portuguesa' && has(txt, ['compreensão', 'interpretação', 'inferência']),
    build: () => ({
      title: 'Aula teórica — Compreensão e interpretação de textos',
      lead: 'Interpretar bem é obedecer ao texto e ao comando da questão.',
      paragraphs: [
        'Compreensão e interpretação de textos são habilidades diferentes, embora caminhem juntas. Compreender é localizar aquilo que o texto diz de modo explícito: informações, fatos, afirmações e relações apresentadas pelo autor. Interpretar é ir além da superfície, mas sem inventar: é extrair conclusões autorizadas pelo texto, percebendo tese, finalidade, pressupostos, subentendidos, conectivos e efeitos de sentido.',
        'A prova costuma punir o candidato que responde por opinião própria. Se o enunciado diz “de acordo com o texto”, a resposta deve estar sustentada pelo texto, ainda que você discorde da ideia. Se a questão pede inferência, a alternativa correta não precisa estar escrita com as mesmas palavras, mas deve decorrer logicamente do que foi dito. Inferir não é imaginar; é concluir com base em pistas textuais.',
        'O método mais seguro começa pelo comando. Antes de ler as alternativas, descubra o que a banca quer: ideia central, sentido de palavra, inferência, reescrita, coesão, tese ou finalidade. Depois volte ao trecho indicado e marque conectivos importantes. Palavras como “contudo”, “portanto”, “embora” e “por isso” mostram a direção do raciocínio. Em seguida, elimine alternativas que extrapolam, restringem ou contradizem o texto.',
        'A alternativa extrapolada acrescenta informação que o texto não autorizou. A restritiva diminui indevidamente o alcance da ideia. A contrária inverte a tese do autor. Em provas, muitas alternativas erradas são sedutoras porque parecem verdadeiras no mundo real, mas não estão sustentadas pelo texto. O candidato deve escolher a alternativa mais fiel ao texto, não a mais bonita.',
        'Na discursiva, essa habilidade aparece quando você interpreta o caso concreto. Antes de falar sobre todos os princípios jurídicos que conhece, você precisa entender o problema real trazido pelo enunciado. Uma resposta bem interpretada delimita o caso, identifica a controvérsia e aplica a norma adequada, sem fugir do tema.'
      ],
      attention: ['Não responda com opinião pessoal.', 'Inferência precisa nascer do texto.', 'Cuidado com alternativas absolutas: sempre, nunca, todos, apenas.'],
      exam: ['Ideia central, tese do autor, sentido contextual de palavra e inferência são cobranças frequentes.', 'A banca costuma usar alternativas extrapoladas e restritivas.', 'Também pode pedir manutenção de sentido em reescrita.'],
      question: {
        statement: 'Se o texto afirma que a motivação permite controle do ato administrativo, qual inferência é válida?',
        answer: 'A motivação facilita o controle de legalidade e reduz arbitrariedades.',
        comment: 'A inferência decorre diretamente da relação indicada no texto, sem acrescentar consequência absoluta não mencionada.'
      }
    })
  },
  {
    match: (s,t,txt) => s.id === 'direito-administrativo' && has(txt, ['ato administrativo', 'anulação', 'revogação', 'convalidação']),
    build: () => ({
      title: 'Aula teórica — Ato administrativo',
      lead: 'Ato administrativo é o ponto central para entender como a Administração decide e como o Procurador controla a legalidade.',
      paragraphs: [
        'Ato administrativo é a manifestação unilateral da Administração Pública, ou de quem exerça função administrativa, destinada a produzir efeitos jurídicos concretos. Na prática municipal, ele aparece em nomeações, exonerações, licenças, multas, alvarás, autorizações, homologações de licitação, aplicação de penalidades e decisões em processos administrativos. Não é uma simples comunicação informal: é uma decisão jurídica que precisa respeitar requisitos de validade.',
        'O estudo do ato administrativo começa pelos elementos: competência, finalidade, forma, motivo e objeto. Competência é a atribuição legal da autoridade. Finalidade é o interesse público que o ato deve perseguir. Forma é o modo previsto para sua prática. Motivo é o fato e o fundamento que justificam a decisão. Objeto é o efeito jurídico produzido. Se um desses elementos apresenta vício, o ato pode ser inválido ou exigir correção.',
        'A competência é decisiva na Prefeitura. Um secretário, diretor ou chefe de setor só pode praticar atos que estejam dentro de suas atribuições. Se uma autoridade sem competência aplica uma penalidade ou autoriza uma despesa, o Procurador deve verificar se o vício é sanável. Em alguns casos, a competência pode ser convalidada; em outros, especialmente se for competência exclusiva, o vício compromete o ato.',
        'A finalidade deve ser pública. Mesmo que a autoridade seja competente, o ato será inválido se for praticado para perseguir servidor, favorecer empresa, atender interesse político ou desviar a finalidade prevista em lei. Esse é o chamado desvio de poder ou desvio de finalidade. A forma e a motivação também importam: a Administração precisa deixar claro por que decidiu, especialmente quando restringe direitos, aplica sanções ou decide processo administrativo.',
        'Os atributos do ato administrativo explicam sua força prática. A presunção de legitimidade faz com que o ato produza efeitos até prova em contrário. A imperatividade permite impor obrigações em certas hipóteses. A autoexecutoriedade permite execução direta quando a lei autoriza ou há urgência. A tipicidade exige que a Administração pratique atos previstos no ordenamento, e não crie medidas arbitrárias.',
        'A banca cobra muito a diferença entre anulação, revogação e convalidação. Anulação retira ato ilegal. Revogação retira ato válido por conveniência e oportunidade. Convalidação corrige vício sanável, desde que não haja prejuízo ao interesse público nem a terceiros. A principal pegadinha é afirmar que ato ilegal pode ser revogado. Isso está errado: ato ilegal se anula; ato válido pode ser revogado por mérito.'
      ],
      attention: ['Ato ilegal não se revoga; ato ilegal se anula.', 'Revogação é mérito; anulação é legalidade.', 'Convalidação só cabe para vício sanável.'],
      exam: ['A banca costuma trocar motivo por motivação.', 'Também confunde competência sanável com competência exclusiva.', 'Pode apresentar caso de multa, alvará ou licença municipal e pedir a providência correta.'],
      question: {
        statement: 'Um ato válido torna-se inconveniente para o interesse público. A providência adequada é:',
        answer: 'Revogação, desde que respeitados direitos adquiridos e motivação.',
        comment: 'Revogação incide sobre ato válido por juízo de mérito. Se o ato fosse ilegal, a providência seria anulação.'
      }
    })
  },
  {
    match: (s,t,txt) => s.id === 'direito-constitucional' && has(txt, ['competência municipal', 'interesse local', 'município', 'organização do estado']),
    build: () => ({
      title: 'Aula teórica — Competência municipal',
      lead: 'A competência municipal explica até onde o Município pode legislar e administrar sem invadir atribuições de outros entes.',
      paragraphs: [
        'Competência municipal é a parcela de atribuições que a Constituição entrega ao Município para cuidar dos assuntos locais, organizar seus serviços, legislar de forma suplementar e executar políticas públicas de interesse da comunidade. O Município tem autonomia, mas não soberania. Isso significa que pode se auto-organizar, legislar, administrar e arrecadar dentro dos limites constitucionais.',
        'A expressão-chave é interesse local. Uma matéria tem interesse local quando afeta predominantemente a realidade municipal: uso do solo, horário de funcionamento de estabelecimentos, posturas municipais, organização administrativa local, serviços públicos locais e fiscalização urbana. A dificuldade da prova está em separar interesse local de matéria nacional ou estadual. Quando o tema exige uniformidade nacional, o Município não pode contrariar norma geral.',
        'Além de legislar sobre interesse local, o Município pode suplementar legislação federal e estadual no que couber. Suplementar não é contrariar. A lei municipal pode adaptar a norma geral à realidade local, detalhar procedimentos e disciplinar aspectos concretos, mas não pode esvaziar direitos, invadir competência privativa da União ou desrespeitar normas gerais.',
        'Para o Procurador Municipal, esse tema aparece quando uma lei local é questionada em ação judicial ou quando a Câmara aprova norma de constitucionalidade duvidosa. O parecer deve responder: existe interesse local? Há competência legislativa municipal? A lei respeita normas gerais? Houve vício de iniciativa? A medida é proporcional? Esse roteiro evita defender lei local inválida ou rejeitar lei válida por excesso de cautela.',
        'Em prova, a banca costuma montar alternativas afirmando que Município pode legislar livremente por ser ente federativo. Isso é exagero. A autonomia municipal é constitucionalmente protegida, mas opera dentro da repartição de competências. A resposta correta normalmente equilibra autonomia local com respeito às normas gerais e à Constituição.'
      ],
      attention: ['Autonomia municipal não é soberania.', 'Suplementar não significa contrariar norma geral.', 'Interesse local deve ser predominante, não meramente reflexo.'],
      exam: ['Cobrança por casos de leis municipais válidas ou inválidas.', 'Perguntas sobre interesse local e competência suplementar.', 'Vício de iniciativa em leis sobre organização administrativa e servidores.'],
      question: {
        statement: 'Município edita lei sobre posturas locais e fiscalização urbana, respeitando normas gerais. A tendência é:',
        answer: 'Constitucionalidade, se houver interesse local e respeito aos limites constitucionais.',
        comment: 'Posturas e fiscalização urbana normalmente se ligam ao interesse local.'
      }
    })
  },
  {
    match: (s,t,txt) => s.id === 'tributario-financeiro-orcamentario' && has(txt, ['crédito tributário', 'lançamento', 'obrigação tributária', 'dívida ativa']),
    build: () => ({
      title: 'Aula teórica — Crédito tributário municipal',
      lead: 'O crédito tributário é a ponte entre o fato gerador e a cobrança pelo Município.',
      paragraphs: [
        'O estudo do crédito tributário começa com a diferença entre obrigação tributária e crédito tributário. A obrigação nasce quando ocorre o fato gerador previsto em lei. Por exemplo: a propriedade de imóvel urbano pode gerar IPTU; a prestação de serviço pode gerar ISS; a transmissão onerosa de imóvel pode gerar ITBI. O crédito tributário, porém, surge quando essa obrigação é formalizada pelo lançamento.',
        'Lançamento é o procedimento administrativo que verifica a ocorrência do fato gerador, identifica o sujeito passivo, calcula o montante devido e constitui o crédito. Depois de lançado, o crédito pode ser cobrado administrativamente. Se não houver pagamento, o Município pode inscrever o valor em dívida ativa, formando a Certidão de Dívida Ativa, que servirá de título executivo para a execução fiscal.',
        'A prova costuma confundir as etapas. O fato gerador não é a mesma coisa que lançamento. A obrigação não é a mesma coisa que crédito constituído. Dívida ativa não é o nascimento do tributo; é uma fase posterior, quando o crédito já existe e não foi pago. Para Procurador Municipal, essa sequência é essencial, porque erro na constituição do crédito pode derrubar a cobrança judicial.',
        'Também é preciso estudar as causas de suspensão, extinção e exclusão do crédito tributário. Suspensão impede temporariamente a exigibilidade, como no parcelamento ou em certas impugnações. Extinção elimina o crédito, como pagamento, prescrição ou decadência. Exclusão impede a constituição ou cobrança em hipóteses como isenção ou anistia, conforme o caso. A banca troca muito esses efeitos.',
        'Na prática municipal, o Procurador deve verificar se o lançamento foi válido, se o contribuinte foi notificado, se a CDA contém os requisitos, se houve prescrição e se a execução fiscal é o meio adequado. Uma cobrança mal instruída pode gerar extinção do processo, condenação em honorários e perda de arrecadação.'
      ],
      attention: ['Obrigação nasce com o fato gerador; crédito se constitui pelo lançamento.', 'Dívida ativa vem depois do crédito não pago.', 'Suspensão, extinção e exclusão têm efeitos diferentes.'],
      exam: ['Sequência fato gerador → obrigação → lançamento → crédito → dívida ativa → execução fiscal.', 'Diferença entre decadência e prescrição.', 'Hipóteses de suspensão, extinção e exclusão.'],
      question: {
        statement: 'Após fato gerador de IPTU, a Administração formaliza o valor devido e identifica o contribuinte. Esse ato é:',
        answer: 'Lançamento tributário.',
        comment: 'O lançamento constitui o crédito tributário a partir da obrigação nascida com o fato gerador.'
      }
    })
  }
];

const contexts = {
  'direito-administrativo': 'Em Direito Administrativo, estudar teoria significa aprender a controlar a atuação pública. O raciocínio deve sempre passar por competência, finalidade pública, forma adequada, motivo real, objeto lícito, motivação e proporcionalidade. Para Procurador Municipal, cada tema deve ser convertido em pergunta prática: o ato pode ser praticado? há vício? é possível corrigir? o Município deve defender, anular, convalidar ou refazer o procedimento?',
  'direito-constitucional': 'Em Direito Constitucional, o conteúdo serve como fundamento de validade de todo o restante. A Constituição organiza competências, limita poderes, protege direitos e define como Município, Prefeito, Câmara, Administração Pública e políticas públicas devem funcionar. Para Procurador, a pergunta central é se a lei ou ato municipal respeita a Constituição.',
  'processo-civil-direito-civil': 'Em Processo Civil e Direito Civil, a teoria precisa ser vista com foco na defesa do Município e na solução de conflitos concretos. O Procurador usa esses temas para contestar ações, produzir provas, recorrer, cumprir decisões, analisar contratos, responsabilidade civil, propriedade, prescrição e efeitos patrimoniais.',
  'tributario-financeiro-orcamentario': 'Em Tributário, Financeiro e Orçamentário, o ponto prático é proteger a arrecadação e a legalidade fiscal do Município. O raciocínio deve ligar fato gerador, competência, lançamento, cobrança, orçamento, despesa, responsabilidade fiscal e controle.',
  'legislacao-municipal': 'Em Legislação Municipal, a teoria deve ser estudada com a lei local aberta. O objetivo é entender como Itupeva se organiza, como Prefeito e Câmara atuam, qual regime dos servidores e quais competências administrativas existem. Esse conteúdo costuma diferenciar candidatos porque muitos estudam apenas normas gerais.',
  'penal-processo-penal': 'Em Penal e Processo Penal, o estudo para Procurador Municipal deve separar crime, ilícito administrativo, improbidade e responsabilidade civil. Nem toda irregularidade é crime, mas crimes contra a Administração, finanças públicas e ordem tributária podem aparecer em situações municipais.',
  'trabalho-processo-trabalho': 'Em Trabalho e Processo do Trabalho, a teoria deve ser conectada à responsabilidade do Município em contratos, terceirização, fiscalização, verbas trabalhistas e defesa em reclamações. O ponto central é entender vínculo, regime jurídico, fiscalização e prova.',
  'direito-urbanistico': 'Em Direito Urbanístico, a teoria organiza a forma como o Município planeja e controla a cidade. Plano diretor, zoneamento, uso do solo, licenciamento, fiscalização e função social da propriedade precisam ser estudados como instrumentos de gestão urbana, não apenas como palavras soltas.',
  'direito-ambiental': 'Em Direito Ambiental, o conteúdo explica como o Município previne, fiscaliza e responde a danos ao meio ambiente. A teoria deve conectar princípios, competência, licenciamento, responsabilidade, fiscalização, sanção e reparação do dano.',
  'lingua-portuguesa': 'Em Língua Portuguesa, o conteúdo deve ser estudado como ferramenta de leitura e escrita para a prova. Gramática não é decoreba isolada: ela serve para interpretar enunciados, eliminar alternativas, escrever discursivas claras e evitar erros que prejudicam a nota.'
};

export function getTheoreticalLesson(subject, topic) {
  const txt = [subject?.subject, topic?.title, topic?.summary, topic?.whatIs, topic?.purpose, ...(topic?.plainExplanation || [])].join(' ');
  const found = specificLessons.find((item) => item.match(subject || {}, topic || {}, txt));
  if (found) return found.build(subject, topic);
  return buildFromTopic(subject, topic, contexts[subject?.id] || 'Para estudar este tema, leia a teoria procurando entender a função do instituto, a regra principal, as exceções e a consequência prática.');
}

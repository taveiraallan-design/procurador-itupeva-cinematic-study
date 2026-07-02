
export const methodPremiumMeta = {
  phase: 'Fase 44',
  title: 'Método Premium de Aprendizagem Jurídica por Tópico',
  subtitle: 'Aula desenvolvida: conceito, finalidade, funcionamento, regras, exemplos, prova, discursiva, checklist e visualização.'
};

function normalize(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function has(text, terms) {
  const t = normalize(text);
  return terms.some((term) => t.includes(normalize(term)));
}

function list(value, fallback = []) {
  return Array.isArray(value) && value.length ? value : fallback;
}

function topicBlob(topic) {
  return `${topic?.title || ''} ${topic?.summary || ''} ${topic?.whatIs || ''} ${topic?.purpose || ''}`;
}

function subjectTone(subject) {
  const id = subject?.id || '';
  if (id.includes('portugues')) return 'gramatical e discursivo';
  if (id.includes('administrativo')) return 'administrativo municipal';
  if (id.includes('constitucional')) return 'constitucional municipal';
  if (id.includes('tributario')) return 'tributário e fiscal municipal';
  if (id.includes('ambiental')) return 'ambiental municipal';
  if (id.includes('urbanistico')) return 'urbanístico municipal';
  if (id.includes('trabalho')) return 'trabalhista aplicado à Administração Pública';
  if (id.includes('penal')) return 'penal aplicado à Administração Pública';
  if (id.includes('civil')) return 'processual e patrimonial do Município';
  if (id.includes('municipal')) return 'institucional do Município';
  return 'jurídico aplicado ao Município';
}



const administrativeSpecific = {
  'regime-principios': {
    concept: 'Regime jurídico-administrativo é o conjunto de prerrogativas e limitações que diferencia a atuação da Administração Pública da atuação dos particulares. Ele permite que o Município pratique atos voltados ao interesse público, mas exige que cada decisão tenha competência legal, finalidade pública, motivação, proporcionalidade e respeito aos direitos fundamentais.',
    purpose: 'O tema serve para formar o raciocínio-base do Procurador Municipal. Antes de discutir licitação, servidor, poder de polícia, contrato ou responsabilidade, é preciso saber que a Administração não age por vontade livre: ela administra competências e interesses indisponíveis.',
    practical: 'Na prática municipal, o Procurador deve perguntar: qual norma autoriza a conduta? qual princípio limita a decisão? existe motivação suficiente? a medida é impessoal, proporcional e transparente? Essa sequência evita pareceres meramente formais e transforma princípios em filtro real de legalidade.',
    rules: [
      'Legalidade administrativa significa que o agente público precisa de autorização normativa para agir; não basta inexistir proibição.',
      'Impessoalidade impede favorecimento, perseguição e promoção pessoal com estrutura pública.',
      'Moralidade administrativa exige lealdade institucional, boa-fé, honestidade funcional e finalidade legítima, mesmo quando o ato parece formalmente regular.',
      'Publicidade garante controle social e transparência, mas não autoriza exposição indevida de dados pessoais nem propaganda pessoal de agente público.',
      'Eficiência exige resultado adequado, planejamento e boa gestão, sem permitir violação de procedimento obrigatório.',
      'Supremacia e indisponibilidade do interesse público devem ser lidas com legalidade, proporcionalidade, segurança jurídica e proteção de direitos.'
    ],
    rightWrong: {
      right: 'Correto: a Procuradoria condiciona a contratação pretendida por secretaria à demonstração da necessidade pública, pesquisa de preços, motivação, hipótese legal e ausência de direcionamento.',
      wrong: 'Errado: afirmar que o prefeito pode escolher livremente a empresa porque o serviço é urgente, sem instrução mínima e sem fundamento legal.'
    },
    solving: ['Identifique se o caso envolve prerrogativa ou limitação da Administração.', 'Procure o fundamento legal da competência.', 'Aplique os princípios do art. 37 ao fato concreto.', 'Verifique motivação, finalidade, proporcionalidade e publicidade.', 'Conclua pela validade, correção, anulação, convalidação ou necessidade de instrução adicional.'],
    question: { statement: 'Uma secretaria municipal pretende praticar ato sem previsão normativa expressa, alegando que a medida é eficiente e atende ao interesse público. À luz do regime jurídico-administrativo, a orientação correta é:', options: ['admitir a medida, pois eficiência supera legalidade', 'admitir a medida se houver concordância política do gestor', 'exigir fundamento jurídico suficiente, pois Administração depende de competência normativa', 'dispensar motivação quando o interesse público for evidente'], answer: 'C', comment: 'A Administração Pública está vinculada à juridicidade. Eficiência e interesse público não autorizam atuação sem competência e fundamento jurídico.' }
  },
  'organizacao-administrativa': {
    concept: 'Organização administrativa é a forma como o Estado distribui competências entre órgãos e entidades para desempenhar a função administrativa. No Município, envolve Administração direta, autarquias, fundações, empresas estatais, órgãos internos, secretarias, delegação, descentralização e desconcentração.',
    purpose: 'Serve para identificar quem pode agir, quem responde pelo ato, qual regime jurídico incide e como se controla a atividade administrativa. Para Procurador, erro de organização costuma gerar vício de competência, responsabilização inadequada ou defesa judicial frágil.',
    practical: 'Diante de um problema municipal, a primeira pergunta é institucional: o ato veio de órgão da Administração direta, de entidade da indireta ou de particular delegado? Depois, analisa-se se houve centralização, descentralização por outorga, delegação por contrato ou simples desconcentração interna.',
    rules: [
      'Centralização ocorre quando a própria pessoa política executa a atividade por seus órgãos.',
      'Desconcentração é distribuição interna de competências dentro da mesma pessoa jurídica, como secretarias e departamentos.',
      'Descentralização transfere execução ou titularidade para outra pessoa jurídica ou para particular delegado, conforme o caso.',
      'Órgão público não possui personalidade jurídica própria; integra a pessoa jurídica a que pertence.',
      'Autarquia é pessoa jurídica de direito público criada para atividade típica, com prerrogativas e sujeições próprias.',
      'Empresas públicas e sociedades de economia mista possuem personalidade de direito privado, mas continuam submetidas a controles e princípios administrativos.'
    ],
    rightWrong: { right: 'Correto: reconhecer que uma secretaria municipal é órgão da Administração direta e que eventual vício de competência deve ser analisado dentro da estrutura do próprio Município.', wrong: 'Errado: tratar secretaria municipal como pessoa jurídica autônoma capaz de responder em nome próprio em qualquer demanda.' },
    solving: ['Identifique se há órgão, entidade ou particular delegado.', 'Verifique se a hipótese é centralização, desconcentração ou descentralização.', 'Confira a norma que atribui competência.', 'Defina o regime jurídico aplicável.', 'Indique quem responde e qual providência administrativa ou judicial é adequada.'],
    question: { statement: 'A criação de uma secretaria municipal para distribuir competências dentro da mesma pessoa jurídica caracteriza:', options: ['descentralização por outorga', 'desconcentração administrativa', 'delegação de serviço público', 'criação de entidade da Administração indireta'], answer: 'B', comment: 'Secretarias são órgãos internos. A distribuição interna de atribuições na mesma pessoa jurídica é desconcentração.' }
  },
  'poderes-administrativos': {
    concept: 'Poderes administrativos são instrumentos jurídicos conferidos à Administração para cumprir finalidades públicas. Eles não são privilégios pessoais do gestor, mas competências-deveres vinculadas à legalidade, finalidade, motivação e proporcionalidade.',
    purpose: 'O tema serve para compreender como o Município ordena condutas, disciplina servidores, organiza serviços, edita normas complementares e fiscaliza atividades privadas. É especialmente importante em autos de infração, embargos, licenças, servidores e sanções.',
    practical: 'O Procurador deve identificar qual poder está sendo exercido e se seus limites foram respeitados. Poder de polícia exige base legal, competência, devido processo quando houver sanção e proporcionalidade. Poder disciplinar exige vínculo especial e procedimento. Poder regulamentar não pode inovar além da lei.',
    rules: [
      'Poder vinculado impõe atuação quando preenchidos os requisitos legais, sem liberdade de escolha quanto ao resultado.',
      'Poder discricionário permite escolha dentro da lei, mas não autoriza arbitrariedade.',
      'Poder hierárquico organiza subordinação interna, delegação, avocação, revisão e fiscalização de órgãos e agentes.',
      'Poder disciplinar permite apurar e punir infrações funcionais ou vínculos especiais, sempre com processo adequado.',
      'Poder regulamentar detalha a lei para permitir sua execução, sem criar obrigações incompatíveis com a norma superior.',
      'Poder de polícia limita direitos e atividades privadas em benefício do interesse público, especialmente segurança, ordem urbana, saúde, meio ambiente e posturas municipais.'
    ],
    rightWrong: { right: 'Correto: embargo de obra irregular com auto fundamentado, competência fiscalizatória e possibilidade de defesa.', wrong: 'Errado: interditar atividade econômica sem base legal, sem motivação e sem proporcionalidade, apenas por pressão política.' },
    solving: ['Classifique o poder administrativo envolvido.', 'Verifique competência e base legal.', 'Separe discricionariedade de arbitrariedade.', 'Confira se houve motivação, proporcionalidade e procedimento.', 'Indique se o ato deve ser mantido, corrigido ou anulado.'],
    question: { statement: 'O poder de polícia administrativa municipal permite:', options: ['limitar atividades privadas nos termos da lei para proteger interesse público', 'criar tributo por decreto', 'punir servidor sem processo', 'afastar controle judicial sobre atos municipais'], answer: 'A', comment: 'Poder de polícia condiciona e limita atividades privadas, mas depende de lei, competência, motivação, proporcionalidade e controle.' }
  },
  'atos-administrativos': {
    concept: 'Ato administrativo é manifestação unilateral da Administração, ou de quem exerça função administrativa, produzida sob regime de direito público e destinada a gerar efeitos jurídicos imediatos. No Município, aparece em licenças, autorizações, multas, nomeações, exonerações, decisões de processo administrativo, editais e sanções.',
    purpose: 'Serve para avaliar validade, efeitos e controle da atuação administrativa. O Procurador Municipal precisa saber quando defender o ato, quando recomendar correção, quando reconhecer nulidade e quando preservar efeitos por segurança jurídica.',
    practical: 'A análise deve passar por cinco elementos: competência, finalidade, forma, motivo e objeto. Depois, verifica-se atributo, vício, possibilidade de convalidação, anulação, revogação ou controle judicial. O erro de prova é pular direto para o resultado sem examinar o elemento viciado.',
    rules: [
      'Competência é o poder legal atribuído ao agente ou órgão; vício de competência pode ser sanável se não for exclusiva e não houver prejuízo.',
      'Finalidade é sempre pública e prevista em lei; desvio de finalidade contamina o ato.',
      'Forma é o modo de exteriorização exigido; forma essencial protege controle, defesa e segurança jurídica.',
      'Motivo é o pressuposto fático e jurídico do ato; motivação é a exposição formal desses motivos.',
      'Objeto é o conteúdo do ato, isto é, o efeito jurídico produzido.',
      'Anulação retira ato ilegal; revogação retira ato válido por conveniência e oportunidade; convalidação corrige vício sanável.'
    ],
    rightWrong: { right: 'Correto: anular auto de infração lavrado por autoridade absolutamente incompetente ou sem descrição mínima do fato.', wrong: 'Errado: dizer que ato ilegal deve ser revogado por conveniência administrativa.' },
    solving: ['Identifique o ato e seus efeitos.', 'Analise competência, finalidade, forma, motivo e objeto.', 'Classifique o vício, se existir.', 'Decida entre anulação, revogação, convalidação ou manutenção.', 'Considere segurança jurídica e efeitos já produzidos.'],
    question: { statement: 'A Administração pretende retirar ato válido por mudança de conveniência administrativa. O instituto adequado é:', options: ['anulação', 'revogação', 'convalidação', 'cassação por ilegalidade originária'], answer: 'B', comment: 'Revogação incide sobre ato válido e decorre de juízo de mérito administrativo. Ato ilegal deve ser anulado.' }
  },
  'agentes-publicos': {
    concept: 'Agentes públicos são todas as pessoas que exercem função pública, ainda que temporariamente ou sem remuneração. O tema abrange servidores estatutários, empregados públicos, agentes políticos, temporários, comissionados e particulares em colaboração.',
    purpose: 'Serve para definir forma de ingresso, regime jurídico, direitos, deveres, responsabilidade, estabilidade, acumulação, sanções e defesa do Município em demandas funcionais.',
    practical: 'Em caso envolvendo agente, o Procurador deve identificar o vínculo antes de responder. Servidor efetivo, comissionado, temporário e empregado público não seguem exatamente as mesmas regras. No Município, a Constituição dá a moldura e o estatuto local fornece o rito e detalhes.',
    rules: [
      'Concurso público é a regra para cargo ou emprego público, ressalvadas hipóteses constitucionais.',
      'Cargo em comissão destina-se a direção, chefia e assessoramento, não a funções meramente técnicas permanentes.',
      'Contratação temporária exige previsão legal, necessidade temporária e excepcional interesse público.',
      'Estabilidade protege servidor efetivo aprovado em estágio probatório, mas não impede demissão mediante processo regular.',
      'Acumulação remunerada só é admitida nas hipóteses constitucionais e com compatibilidade de horários.',
      'Responsabilidade funcional pode ser administrativa, civil e penal, com pressupostos próprios em cada esfera.'
    ],
    rightWrong: { right: 'Correto: orientar PAD com contraditório antes de eventual demissão de servidor estável.', wrong: 'Errado: exonerar servidor estável como se fosse comissionado, sem processo e sem motivação adequada.' },
    solving: ['Identifique o tipo de agente e o vínculo.', 'Verifique forma de ingresso e norma local aplicável.', 'Analise direitos, deveres e eventuais restrições constitucionais.', 'Confira necessidade de processo administrativo.', 'Defina consequência funcional e estratégia de defesa municipal.'],
    question: { statement: 'Cargo em comissão, segundo a Constituição, deve destinar-se principalmente a funções de:', options: ['atividade burocrática permanente', 'direção, chefia e assessoramento', 'substituição de concurso público', 'qualquer função técnica ordinária'], answer: 'B', comment: 'Cargo em comissão é exceção à regra do concurso e deve ser reservado a direção, chefia e assessoramento.' }
  },
  'pad': {
    concept: 'Processo Administrativo Disciplinar é o procedimento pelo qual a Administração apura infração funcional e, se houver prova suficiente, aplica sanção ao agente submetido ao regime disciplinar. Ele concretiza poder disciplinar, devido processo, contraditório e ampla defesa.',
    purpose: 'Serve para proteger simultaneamente o interesse público e o servidor. O Município precisa apurar irregularidades, mas não pode punir por presunção, pressão política ou processo defeituoso.',
    practical: 'O Procurador deve conferir instauração, competência, descrição dos fatos, comissão, provas, defesa, relatório, julgamento, prescrição e proporcionalidade da pena. Em Município, a lei local é indispensável para definir rito, prazos e penalidades.',
    rules: [
      'Portaria de instauração deve delimitar os fatos de modo suficiente para permitir defesa.',
      'Sindicância investigativa não substitui PAD para penalidade grave quando a lei exige processo formal.',
      'Contraditório e ampla defesa são garantias mínimas antes da sanção.',
      'Afastamento preventivo é cautelar, não pena, e exige fundamento.',
      'Julgamento deve enfrentar provas, defesa e dosimetria da penalidade.',
      'Nulidade exige atenção ao prejuízo, mas cerceamento de defesa e incompetência podem comprometer todo o processo.'
    ],
    rightWrong: { right: 'Correto: instaurar PAD com fato descrito, comissão regular, defesa e decisão motivada antes de aplicar demissão.', wrong: 'Errado: punir servidor por fato diferente daquele investigado, sem abrir oportunidade real de defesa.' },
    solving: ['Verifique a lei local do servidor.', 'Identifique fato, autoria e materialidade.', 'Confira competência e comissão.', 'Cheque defesa, provas e contraditório.', 'Analise prescrição, dosimetria e motivação da decisão.'],
    question: { statement: 'Em PAD municipal, o afastamento preventivo do servidor, quando legalmente previsto, tem natureza de:', options: ['pena principal', 'medida cautelar administrativa', 'demissão indireta', 'confissão de culpa'], answer: 'B', comment: 'Afastamento preventivo não é sanção; é medida cautelar para proteger a apuração, quando prevista e motivada.' }
  },
  'licitacoes-contratos': {
    concept: 'Licitação é procedimento administrativo destinado a selecionar proposta apta a gerar o resultado de contratação mais vantajoso para a Administração, com isonomia, competição, planejamento e controle. Contrato administrativo é o ajuste celebrado para atender necessidade pública sob regime jurídico próprio.',
    purpose: 'Serve para proteger o erário, evitar direcionamento, planejar contratações e permitir que o Município compre, contrate obras, serviços, tecnologia, manutenção e concessões de forma defensável.',
    practical: 'O Procurador não deve analisar licitação só no fim. Deve verificar planejamento, estudo técnico, termo de referência, pesquisa de preços, gestão de riscos, modalidade, critérios, habilitação, matriz de responsabilidades, cláusulas contratuais e hipóteses de contratação direta.',
    rules: [
      'Planejamento é eixo central da Lei nº 14.133/2021: contratação sem necessidade definida tende a gerar nulidade ou desperdício.',
      'Competição e isonomia impedem exigências restritivas sem justificativa técnica.',
      'Contratação direta não é contratação informal; dispensa e inexigibilidade exigem processo instruído e motivado.',
      'Parecer jurídico deve controlar legalidade, apontar riscos e recomendar correções, não apenas carimbar a vontade do gestor.',
      'Contrato administrativo exige gestão e fiscalização, com matriz de riscos, sanções e equilíbrio econômico-financeiro quando cabível.',
      'Nulidade contratual deve considerar consequências práticas, boa-fé, interesse público e apuração de responsabilidade.'
    ],
    rightWrong: { right: 'Correto: exigir justificativa técnica para marca/modelo, pesquisa de preços robusta e motivação da escolha.', wrong: 'Errado: usar inexigibilidade apenas porque o gestor prefere determinado fornecedor, sem singularidade ou inviabilidade de competição.' },
    solving: ['Identifique o objeto e a necessidade pública.', 'Verifique planejamento e instrução processual.', 'Escolha modalidade ou hipótese de contratação direta.', 'Confira competição, habilitação e julgamento.', 'Analise contrato, fiscalização, sanções e riscos.'],
    question: { statement: 'Na Lei nº 14.133/2021, contratação direta por dispensa ou inexigibilidade:', options: ['dispensa processo administrativo', 'dispensa motivação', 'exige instrução, justificativa e controle de legalidade', 'autoriza escolha livre sem preço estimado'], answer: 'C', comment: 'Contratação direta não significa ausência de processo. Exige instrução, motivação, estimativa, justificativas e controle.' }
  },
  'servicos-publicos': {
    concept: 'Serviço público é atividade destinada à satisfação de necessidades coletivas assumida pelo Estado, prestada diretamente ou por delegação, sob regime jurídico de direito público em maior ou menor intensidade.',
    purpose: 'Serve para compreender continuidade, adequação, modicidade, universalidade, concessões, permissões, fiscalização e direitos dos usuários. No Município, envolve transporte, limpeza urbana, iluminação, saneamento, saúde, educação, cemitérios, feiras e outros serviços locais.',
    practical: 'O Procurador analisa se o Município é titular do serviço, se a execução é direta ou delegada, se há contrato de concessão/permissão, qual padrão de continuidade é exigível e como agir diante de inadimplemento, falha do concessionário ou reclamação do usuário.',
    rules: [
      'Titularidade do serviço não se confunde com execução; o Município pode prestar diretamente ou delegar quando cabível.',
      'Continuidade impede interrupção arbitrária, mas admite exceções legais e técnicas.',
      'Adequação exige regularidade, segurança, eficiência, atualidade, generalidade, cortesia e modicidade conforme o regime aplicável.',
      'Concessão e permissão exigem licitação e contrato, com fiscalização permanente do poder concedente.',
      'Usuário possui direitos à informação, qualidade, atendimento adequado e meios de reclamação.',
      'Falha de serviço pode gerar responsabilidade civil do Município ou do delegatário, conforme a situação.'
    ],
    rightWrong: { right: 'Correto: fiscalizar concessionária de transporte e aplicar sanção contratual motivada diante de descumprimento comprovado.', wrong: 'Errado: afirmar que delegação elimina responsabilidade de fiscalização do Município.' },
    solving: ['Defina se a atividade é serviço público municipal.', 'Identifique titularidade e forma de prestação.', 'Confira contrato, lei ou regulamento aplicável.', 'Analise dever de continuidade e qualidade.', 'Defina sanção, intervenção, correção ou defesa judicial.'],
    question: { statement: 'Na delegação de serviço público, o Município:', options: ['perde a titularidade do serviço', 'mantém dever de fiscalização', 'não pode aplicar sanções ao delegatário', 'fica impedido de regular a prestação'], answer: 'B', comment: 'A delegação transfere a execução, não a titularidade nem o dever de fiscalização do poder concedente.' }
  },
  'responsabilidade-controle-improbidade': {
    concept: 'Responsabilidade civil do Estado, controle da Administração e improbidade administrativa formam o núcleo de responsabilização da atividade pública. O tema envolve danos causados por agentes, controle interno, externo e judicial, e repressão a condutas ímprobas.',
    purpose: 'Serve para defender o Município em ações indenizatórias, orientar prevenção de danos, estruturar controles e distinguir ilegalidade administrativa de improbidade. Para Procurador, é área de risco financeiro e institucional elevado.',
    practical: 'A análise começa pelo fato danoso: houve conduta estatal, dano e nexo causal? Existe causa excludente ou culpa exclusiva da vítima? Em controle, pergunta-se quem controla e qual limite. Em improbidade, após a Lei nº 14.230/2021, é indispensável atenção ao dolo e à tipicidade da conduta.',
    rules: [
      'A responsabilidade civil objetiva do Estado exige dano, conduta estatal e nexo causal, sem necessidade de provar culpa do agente.',
      'Excludentes como culpa exclusiva da vítima, caso fortuito externo ou ausência de nexo podem afastar responsabilidade.',
      'O direito de regresso contra agente público exige demonstração de dolo ou culpa.',
      'Controle interno, externo, legislativo, judicial e social possuem objetos e limites próprios.',
      'Controle judicial não substitui mérito administrativo legítimo, mas alcança legalidade, motivação, finalidade e proporcionalidade.',
      'Improbidade administrativa exige tipicidade e, em regra, dolo, não se confundindo com mera ilegalidade ou erro administrativo.'
    ],
    rightWrong: { right: 'Correto: em ação indenizatória por queda em via pública, apurar dano, nexo, manutenção da via, prova do fato e eventual culpa da vítima.', wrong: 'Errado: afirmar que todo ato ilegal é automaticamente ato de improbidade.' },
    solving: ['Separe responsabilidade, controle e improbidade.', 'Em responsabilidade, verifique dano, conduta e nexo.', 'Em controle, identifique órgão controlador e limite.', 'Em improbidade, confira tipo legal, dolo e elemento subjetivo.', 'Conclua com defesa, correção administrativa ou responsabilização adequada.'],
    question: { statement: 'Após a reforma da Lei de Improbidade Administrativa, é correto afirmar que:', options: ['qualquer ilegalidade configura improbidade', 'a responsabilização por improbidade deve observar tipicidade e elemento subjetivo exigido', 'culpa simples sempre basta para todos os atos ímprobos', 'controle judicial pode substituir livremente o mérito administrativo'], answer: 'B', comment: 'A improbidade não se confunde com ilegalidade genérica. A lei exige enquadramento típico e elemento subjetivo conforme o caso.' }
  },
  'processo-lai-lgpd-municipal': {
    concept: 'Processo administrativo, Lei de Acesso à Informação, LGPD e Direito Administrativo Municipal formam o bloco de governança jurídica cotidiana da Prefeitura. Envolvem rito, participação, transparência, proteção de dados, motivação e legislação local.',
    purpose: 'Serve para garantir que decisões municipais sejam documentadas, transparentes, controláveis e compatíveis com proteção de dados pessoais. O Procurador atua para evitar nulidades, omissões, publicidade indevida e decisões sem instrução.',
    practical: 'Antes de uma decisão municipal, o processo deve revelar pedido, competência, instrução, manifestação técnica, motivação e decisão. Na transparência, a regra é publicidade, mas com proteção de informações sigilosas e dados pessoais. A LGPD exige finalidade, necessidade, base legal, segurança e prestação de contas.',
    rules: [
      'Processo administrativo organiza a formação da vontade estatal e permite contraditório, motivação e controle.',
      'Motivação deve indicar fatos, fundamentos e relação lógica entre prova e conclusão.',
      'LAI estabelece publicidade como regra e sigilo como exceção justificada.',
      'Transparência ativa é divulgação espontânea; transparência passiva é resposta a pedidos de acesso.',
      'LGPD não elimina transparência pública, mas exige compatibilização entre acesso à informação e proteção de dados pessoais.',
      'Legislação municipal define competências, ritos, estruturas e regimes locais que precisam ser aplicados no parecer.'
    ],
    rightWrong: { right: 'Correto: fornecer informação pública solicitada, ocultando dados pessoais desnecessários quando cabível.', wrong: 'Errado: negar todo pedido de acesso sob alegação genérica de LGPD, sem análise de publicidade, finalidade e eventual anonimização.' },
    solving: ['Identifique o processo e a competência decisória.', 'Confira instrução, contraditório e motivação.', 'Separe informação pública, sigilosa e dado pessoal.', 'Aplique LAI e LGPD de forma harmonizada.', 'Consulte legislação municipal antes de concluir.'],
    question: { statement: 'Sobre LAI e LGPD na Administração Municipal, é correto afirmar:', options: ['LGPD revogou a transparência pública', 'todo dado existente em processo público deve ser divulgado integralmente', 'publicidade é regra, mas deve ser compatibilizada com proteção de dados e sigilos legais', 'pedido de acesso pode ser negado sem motivação'], answer: 'C', comment: 'LAI e LGPD devem ser harmonizadas. A Administração deve garantir transparência e proteger dados pessoais quando necessário.' }
  }
};

function getAdministrativeSpecific(subject, topic) {
  if (subject?.id !== 'direito-administrativo') return null;
  return administrativeSpecific[topic?.id] || null;
}

const portugueseSpecific = [
  {
    test: (txt) => has(txt, ['tipologia textual', 'generos textuais', 'gêneros textuais', 'narracao', 'narração']),
    data: {
      concept: 'Tipologia textual é o estudo das formas básicas de organização de um texto. Ela mostra se o texto, ou determinado trecho, está narrando fatos, descrevendo características, explicando uma ideia, defendendo uma tese ou orientando uma conduta. Gênero textual, por outro lado, é o formato social em que o texto aparece, como notícia, artigo de opinião, parecer, memorando, ofício, relatório ou edital.',
      purpose: 'Esse conteúdo serve para reconhecer a intenção predominante do texto. Em prova, a banca costuma perguntar qual é a finalidade do trecho, qual tipo textual predomina ou qual estratégia o autor utilizou para informar, convencer, narrar ou orientar.',
      practical: 'Na prática, o aluno deve observar o que o texto faz. Se apresenta acontecimentos em sequência temporal, há narração. Se mostra características de pessoa, objeto, lugar ou situação, há descrição. Se explica um tema de modo informativo, há exposição. Se defende uma tese com fundamentos, há argumentação. Se orienta comportamento por meio de comandos ou instruções, há injunção.',
      rules: [
        'Narração envolve acontecimentos, tempo, personagens e mudança de situação.',
        'Descrição concentra-se em características, estados e qualidades.',
        'Exposição explica um tema sem necessariamente defender uma opinião.',
        'Argumentação apresenta tese, fundamentos e tentativa de convencimento.',
        'Injunção orienta condutas por meio de comandos, instruções, recomendações ou ordens.'
      ],
      rightWrong: {
        right: '“A Administração deve motivar seus atos, pois a motivação permite controle e transparência.” É trecho argumentativo, porque defende uma tese com fundamento.',
        wrong: 'Dizer que todo texto jurídico é apenas expositivo é erro. Um parecer jurídico pode expor fatos, mas sua função central muitas vezes é argumentar por uma solução.'
      },
      solving: ['Identifique o comando da questão.', 'Pergunte qual é a função predominante do trecho.', 'Procure marcas de tempo, características, explicação, tese ou comando.', 'Não confunda gênero com tipo textual.', 'Se houver mais de um tipo, escolha o predominante.'],
      question: { statement: 'Um texto que apresenta uma tese e utiliza fundamentos para convencer o leitor é predominantemente:', options: ['narrativo', 'descritivo', 'argumentativo', 'injuntivo'], answer: 'C', comment: 'O texto argumentativo defende uma ideia por meio de razões. Tese + fundamentos + conclusão indicam argumentação.' }
    }
  },
  {
    test: (txt) => has(txt, ['pontuacao', 'pontuação', 'virgula', 'vírgula']),
    data: {
      concept: 'Pontuação é o conjunto de sinais usados para organizar a estrutura escrita. A vírgula é um desses sinais e sua função principal não é marcar uma pausa da fala, mas organizar relações sintáticas e semânticas dentro da frase.',
      purpose: 'A vírgula serve para separar termos, destacar deslocamentos, isolar explicações, separar itens de enumeração e evitar ambiguidade. Em prova, ela é cobrada pela função gramatical, não pela respiração do leitor.',
      practical: 'Para decidir se a vírgula é correta, primeiro identifique sujeito, verbo, complemento, adjuntos e orações. Não se deve separar sujeito do verbo nem verbo de complemento. Por outro lado, usa-se vírgula para isolar vocativo, aposto explicativo, adjunto adverbial deslocado mais longo, orações explicativas e conectivos deslocados.',
      rules: ['Não se separa sujeito do verbo por vírgula.', 'Não se separa verbo do complemento direto ou indireto.', 'Usa-se vírgula em enumerações.', 'Usa-se vírgula para isolar vocativo e aposto.', 'A vírgula pode diferenciar oração explicativa de oração restritiva.'],
      rightWrong: { right: '“No processo administrativo, o servidor apresentou defesa.” A vírgula separa adjunto adverbial deslocado.', wrong: '“O servidor, apresentou defesa.” Está errado porque separa sujeito e verbo.' },
      solving: ['Leia o trecho e encontre o verbo.', 'Localize o sujeito ligado ao verbo.', 'Verifique se a vírgula separa termos essenciais.', 'Procure termo deslocado, aposto, vocativo ou oração explicativa.', 'Teste se a retirada da vírgula muda o sentido.'],
      question: { statement: 'Assinale a frase em que a vírgula está corretamente empregada.', options: ['O Município, ajuizou a ação.', 'No prazo legal, o servidor apresentou defesa.', 'A autoridade competente, decidiu o processo.', 'O parecer, concluiu pela nulidade.'], answer: 'B', comment: '“No prazo legal” é adjunto adverbial deslocado. Nas demais alternativas, há vírgula entre sujeito e verbo.' }
    }
  },
  {
    test: (txt) => has(txt, ['interpretacao', 'interpretação', 'compreensao', 'compreensão']),
    data: {
      concept: 'Compreensão é localizar o que o texto afirma de modo explícito. Interpretação é extrair conclusões autorizadas pelo texto, percebendo tese, finalidade, inferências, pressupostos, subentendidos e efeitos de sentido.',
      purpose: 'Esse conteúdo serve para impedir que o candidato responda por opinião própria. Em prova, a alternativa correta precisa estar sustentada no texto ou decorrer logicamente dele.',
      practical: 'O primeiro passo é ler o comando. Questões que pedem “de acordo com o texto” exigem fidelidade ao que foi escrito. Questões de inferência permitem conclusão, mas não invenção. Alternativa extrapolada vai além do texto; alternativa restritiva reduz indevidamente a ideia; alternativa contrária inverte o sentido.',
      rules: ['Ideia central resume o núcleo do texto.', 'Tese é a posição defendida pelo autor.', 'Inferência é conclusão autorizada por pistas textuais.', 'Pressuposto depende de marca linguística.', 'Subentendido é sugestão contextual, mas não pode contrariar o texto.'],
      rightWrong: { right: 'Se o texto afirma que a motivação permite controle, é correto inferir que ato sem motivação dificulta controle.', wrong: 'Se o texto critica demora administrativa, não se pode concluir automaticamente que todo prazo administrativo é ilegal.' },
      solving: ['Leia o comando antes das alternativas.', 'Identifique se a questão pede literalidade, inferência ou sentido de palavra.', 'Volte ao trecho exato do texto.', 'Elimine alternativas extremas, ampliadas ou contrárias.', 'Escolha a alternativa mais fiel ao texto.'],
      question: { statement: 'Quando a alternativa acrescenta informação que o texto não autoriza, ocorre:', options: ['inferência válida', 'extrapolação', 'coesão referencial', 'sinonímia'], answer: 'B', comment: 'Extrapolação ocorre quando a alternativa vai além do texto.' }
    }
  },
  {
    test: (txt) => has(txt, ['coesao', 'coesão', 'coerencia', 'coerência', 'conectivos']),
    data: {
      concept: 'Coesão é a ligação linguística entre partes do texto. Coerência é a lógica global das ideias. Um texto coeso usa pronomes, conectivos, repetições controladas, substituições e elipses para amarrar frases; um texto coerente mantém sentido compatível entre começo, desenvolvimento e conclusão.',
      purpose: 'Serve para o leitor acompanhar o raciocínio sem se perder. Em prova, a banca cobra referência de pronomes, valor semântico de conectivos e manutenção do sentido na reescrita.',
      practical: 'Quando aparece “esse”, “aquele”, “ele”, “tal medida” ou “isso”, procure o termo retomado. Quando aparece “portanto”, “contudo”, “porque”, “embora” ou “se”, identifique a relação lógica: conclusão, oposição, causa, concessão ou condição.',
      rules: ['Conectivos de causa explicam motivo.', 'Conectivos de consequência indicam efeito.', 'Conectivos de oposição introduzem contraste.', 'Conectivos de conclusão fecham raciocínio.', 'Pronomes retomadores precisam ter referente claro.'],
      rightWrong: { right: '“O ato é ilegal; portanto, deve ser anulado.” O conectivo indica conclusão.', wrong: 'Trocar “portanto” por “contudo” muda o sentido, porque oposição não é conclusão.' },
      solving: ['Localize o termo retomado.', 'Identifique o valor do conectivo.', 'Teste substituições sem alterar sentido.', 'Observe se há contradição entre partes do texto.', 'Elimine alternativa que troca causa por consequência.'],
      question: { statement: 'No trecho “O ato é inválido, portanto deve ser anulado”, o conectivo expressa:', options: ['oposição', 'conclusão', 'condição', 'concessão'], answer: 'B', comment: '“Portanto” introduz consequência lógica ou conclusão.' }
    }
  }
];

function getPortugueseSpecific(topic) {
  const txt = topicBlob(topic);
  return portugueseSpecific.find((item) => item.test(txt))?.data || null;
}

function buildGenericSpecific(subject, topic) {
  const subjectName = subject?.subject || 'matéria';
  const tone = subjectTone(subject);
  const plain = list(topic?.plainExplanation);
  const rules = plain.length ? plain : [topic?.whatIs, topic?.purpose].filter(Boolean);
  return {
    concept: topic?.whatIs || `${topic?.title} é conteúdo essencial de ${subjectName}.`,
    purpose: topic?.purpose || `O tema serve para resolver situações de prova e casos concretos na atuação do Procurador Municipal.`,
    practical: `${topic?.title} funciona como uma ferramenta de raciocínio ${tone}. O estudo deve partir do fato apresentado, identificar o instituto, conferir os requisitos jurídicos, observar exceções e chegar à consequência correta para o Município.`,
    rules: rules.slice(0, 6),
    rightWrong: {
      right: topic?.cityExample || `Aplicação correta: identificar a regra, aplicar ao caso municipal e concluir com providência juridicamente segura.`,
      wrong: list(topic?.traps)[0] || `Aplicação incorreta: resolver por impressão, sem verificar requisito, exceção ou base legal.`
    },
    solving: ['Leia o comando e identifique o tema.', 'Separe fato, norma, requisito e consequência.', 'Confira se há exceção ou instituto parecido.', 'Elimine alternativas que trocam conceito, finalidade ou efeito.', 'Aplique a solução mais segura para o Município.'],
    question: {
      statement: `Em questão sobre ${topic?.title}, qual é o caminho técnico mais seguro?`,
      options: ['Responder pela palavra mais conhecida do enunciado.', 'Identificar instituto, requisitos, exceções e consequência jurídica.', 'Ignorar o caso concreto e decorar a definição.', 'Escolher a alternativa mais longa.'],
      answer: 'B',
      comment: 'O método correto é raciocinar por instituto, requisito, exceção e consequência, especialmente em prova de Procurador Municipal.'
    }
  };
}

export function getPremiumMethodLesson(subject, topic) {
  if (!topic) return null;
  const adminSpecific = getAdministrativeSpecific(subject, topic);
  const specific = subject?.id === 'lingua-portuguesa' ? getPortugueseSpecific(topic) : null;
  const base = adminSpecific || specific || buildGenericSpecific(subject, topic);
  const subjectName = subject?.subject || 'Matéria';
  const title = topic.title;
  const legalBase = list(topic.legalBase, ['Conferir a lei seca indicada no edital e nas normas oficiais aplicáveis.']);
  const dryLaw = list(topic.dryLaw, legalBase);
  const traps = list(topic.traps, ['Confundir conceito com consequência prática.', 'Aplicar regra sem verificar exceções.', 'Ignorar o contexto municipal.']);
  const differences = list(topic.differences, ['Compare este tema com institutos próximos antes de marcar a alternativa.']);
  const objective = list(topic.objectiveCharge, ['A banca costuma cobrar conceito, requisito, exceção e consequência em situação concreta.']);
  const checklist = list(topic.checklist, ['Entendi o conceito.', 'Sei aplicar ao caso concreto.', 'Sei identificar pegadinhas.', 'Consigo usar em questão objetiva e discursiva.']);

  return {
    subject: subjectName,
    title,
    phase: methodPremiumMeta.phase,
    lead: `Aula completa pelo Método Premium de Aprendizagem Jurídica por Tópico. Primeiro você aprende o conteúdo; depois revisa, treina e visualiza o raciocínio.`,
    sections: {
      concept: base.concept,
      purpose: base.purpose,
      practical: base.practical,
      mainRules: list(base.rules, [topic.whatIs, topic.purpose].filter(Boolean)),
      developedRules: list(base.rules, [topic.whatIs, topic.purpose].filter(Boolean)).map((rule, index) => ({
        title: `Regra ${index + 1}`,
        text: rule,
        explanation: `Na prova, esta regra deve ser lida junto ao caso concreto. Pergunte qual requisito aparece, qual consequência jurídica nasce e se há exceção que muda a resposta.`
      })),
      examples: base.rightWrong,
      differences,
      municipal: topic.cityExample || `Em contexto de Procuradoria Municipal, o tema pode aparecer na análise de parecer, processo administrativo, defesa judicial, ato de gestão, servidor, tributo, licitação, urbanismo, meio ambiente ou legislação local.`,
      objective,
      traps,
      solving: list(base.solving),
      question: base.question,
      discursive: topic.discursiveCharge || `Em discursiva ou parecer, apresente o problema, indique a base jurídica, aplique ao caso e conclua com providência objetiva para o Município.`,
      summary: topic.summary || `O ponto essencial é dominar conceito, finalidade, regras, exceções e consequência prática do tema.`,
      checklist,
      legalBase,
      dryLaw
    }
  };
}

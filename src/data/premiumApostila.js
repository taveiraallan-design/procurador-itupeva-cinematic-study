export const premiumApostilaMeta = {
  phase: 'Fase 39B',
  title: 'Apostila Explicada Premium por Tópico',
  subtitle: 'Direito Administrativo + Direito Constitucional — Concurso Público nº 003/2026 • Procurador Municipal de Itupeva/SP',
  sourceNote: 'Conteúdo estruturado a partir do Anexo III do edital e de legislação oficial. Material explicativo, autoral e para estudo; sempre conferir a lei seca atualizada antes da prova.',
  nextPhases: [
    '39C — Processo Civil e Direito Civil Premium',
    '39D — Tributário, Financeiro e Orçamentário Premium',
    '39E — Legislação Municipal Premium'
  ]
};

const commonAdminFlashcards = [
  { front: 'Ato ilegal se revoga?', back: 'Não. Ato ilegal deve ser anulado. Revogação pressupõe ato válido e envolve juízo de conveniência e oportunidade.' },
  { front: 'Qual a diferença entre anulação e revogação?', back: 'Anulação corrige vício de legalidade; revogação retira ato válido por mérito administrativo.' },
  { front: 'O que é convalidação?', back: 'Correção de vício sanável, em regra ligado à competência não exclusiva ou forma não essencial, desde que sem prejuízo ao interesse público ou a terceiros.' }
];

export const premiumApostilaSubjects = [
  {
    id: 'direito-administrativo',
    subject: 'Direito Administrativo',
    status: '39A concluída',
    priority: 'Crítica',
    overview: 'Apostila premium inicial cobrindo os grandes eixos de Direito Administrativo do edital: regime jurídico, organização, poderes, atos, agentes, PAD, serviços, licitações, contratos, bens, intervenção, responsabilidade, controle, improbidade, processo administrativo, LAI, LGPD e Direito Administrativo Municipal.',
    lawBase: ['CF/88, art. 37 e repartição de competências', 'Lei nº 14.133/2021', 'Lei nº 9.784/1999 como referência geral de processo administrativo', 'Lei nº 8.429/1992 com alterações da Lei nº 14.230/2021', 'Lei nº 12.527/2011', 'Lei nº 13.709/2018'],
    topics: [
      {
        id: 'regime-principios',
        level: 'básico',
        title: 'Conceito, objeto, fontes, regime jurídico-administrativo e princípios',
        whatIs: 'Direito Administrativo é o ramo do Direito Público que disciplina a função administrativa do Estado, a organização da Administração Pública, seus agentes, atos, contratos, serviços, bens, controles e responsabilidades. O regime jurídico-administrativo é o conjunto de prerrogativas e sujeições que permite à Administração buscar o interesse público sem deixar de respeitar a legalidade e os direitos fundamentais.',
        purpose: 'Serve para controlar juridicamente a atuação do poder público. Para Procurador Municipal, é a base para dizer se uma decisão do prefeito, de uma secretaria, de uma comissão de licitação ou de um órgão municipal é válida, motivada, proporcional e defensável em juízo ou em parecer.',
        plainExplanation: [
          'A Administração não atua como um particular comum. Ela possui poderes especiais, como fiscalizar, licitar, aplicar sanções, desapropriar em hipóteses legais e organizar serviços públicos. Mas esses poderes existem porque a Administração também sofre limites mais rígidos: precisa agir conforme a lei, motivar atos, respeitar finalidade pública, publicidade, impessoalidade, moralidade, eficiência, devido processo e controle.',
          'A ideia central é o equilíbrio entre supremacia do interesse público e indisponibilidade do interesse público. A Administração pode ter prerrogativas para realizar finalidades coletivas, mas não pode tratar o interesse público como patrimônio pessoal do gestor. O administrador não é dono da máquina pública: é gestor de competências legalmente atribuídas.',
          'Os princípios não são decoração. Eles resolvem casos em que a lei não descreve todos os detalhes. Em prova, os princípios aparecem em situações concretas: contratação direcionada fere impessoalidade; ato sem motivo suficiente viola motivação; demora injustificada fere eficiência; uso de cargo para perseguir desafeto fere finalidade e moralidade.'
        ],
        examTechnical: 'Para prova, memorize que o art. 37 da Constituição explicita legalidade, impessoalidade, moralidade, publicidade e eficiência. Além deles, a doutrina e a jurisprudência trabalham com motivação, razoabilidade, proporcionalidade, segurança jurídica, autotutela, continuidade do serviço público, supremacia e indisponibilidade do interesse público. A banca costuma trocar legalidade por autonomia ampla, como se o gestor pudesse agir por vontade própria. Em Direito Público, competência administrativa nasce da lei.',
        cityExample: 'Uma secretaria municipal deseja contratar diretamente uma empresa indicada por um vereador para executar serviço de manutenção. O Procurador deve verificar se existe hipótese legal de contratação direta, justificar preço, motivar escolha, exigir instrução do processo e impedir favorecimento pessoal. O parecer deve proteger o Município e o gestor, não apenas “autorizar” a vontade administrativa.',
        legalBase: ['CF/88, art. 37, caput', 'CF/88, art. 5º, LIV e LV', 'Lei nº 9.784/1999, especialmente princípios do processo administrativo como referência geral', 'LINDB, arts. 20 a 30, sobre decisão administrativa e segurança jurídica'],
        dryLaw: ['CF/88, art. 37', 'Lei nº 9.784/1999, art. 2º', 'LINDB, arts. 20, 21, 22 e 30'],
        jurisprudence: ['A Administração pode rever seus próprios atos quando ilegais, conforme lógica de autotutela consolidada na jurisprudência dos tribunais superiores.', 'Controle judicial alcança legalidade, motivação, finalidade e proporcionalidade, mas não substitui o mérito administrativo legítimo por preferência do juiz.'],
        objectiveCharge: ['A banca pode perguntar quais princípios estão expressos no art. 37.', 'Pode apresentar caso de nepotismo, contratação direcionada ou publicidade pessoal e pedir o princípio violado.', 'Pode confundir supremacia do interesse público com poder ilimitado do administrador.'],
        discursiveCharge: 'Em discursiva, o tema pode vir como parecer sobre ato municipal sem motivação, contratação suspeita, sanção administrativa desproporcional ou decisão que ignora consequências práticas. A resposta deve apontar competência, fundamento legal, princípios envolvidos, vício e providência.',
        traps: ['Legalidade administrativa não é igual à legalidade privada: particular pode fazer o que a lei não proíbe; Administração só pode agir quando autorizada pelo ordenamento.', 'Publicidade não autoriza promoção pessoal.', 'Eficiência não permite descumprir legalidade.', 'Supremacia do interesse público não justifica arbitrariedade.'],
        differences: ['Legalidade x juridicidade: hoje se exige conformidade não apenas com lei formal, mas com Constituição, princípios e sistema jurídico.', 'Moralidade x legalidade: ato pode ser formalmente legal e ainda assim imoral em caso de desvio, favorecimento ou fraude.', 'Publicidade x transparência: publicidade é divulgação oficial; transparência envolve acesso compreensível e controle social.'],
        commonMistakes: ['Responder princípios de forma decorada sem aplicar ao caso.', 'Achar que interesse público é sempre o interesse do governo da vez.', 'Esquecer que motivação e finalidade são pontos decisivos para validade do ato.'],
        miniCase: 'O Município publica campanha institucional com foto grande do prefeito e slogan pessoal. Há aparente violação à impessoalidade e ao art. 37, §1º, pois publicidade oficial deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal.',
        activeQuestions: ['Qual princípio foi violado no caso concreto?', 'A decisão administrativa está motivada?', 'A competência decorre de lei?', 'Há finalidade pública real ou desvio?', 'A medida é proporcional ao problema?'],
        flashcards: [
          { front: 'Quais são os princípios expressos do art. 37?', back: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' },
          { front: 'O que é indisponibilidade do interesse público?', back: 'O administrador não pode renunciar livremente ao interesse público, porque administra bens e competências que não pertencem a ele.' },
          { front: 'Eficiência permite ignorar procedimento?', back: 'Não. Eficiência orienta boa gestão, mas não autoriza violar legalidade, impessoalidade ou controle.' }
        ],
        summary: 'Direito Administrativo nasce para permitir a ação estatal e, ao mesmo tempo, limitar essa ação. Em prova, princípios devem ser aplicados a casos concretos. Para Procurador Municipal, o raciocínio central é: competência legal, finalidade pública, motivação, proporcionalidade e controle.',
        checklist: ['Sei explicar regime jurídico-administrativo.', 'Decorei e aplico os princípios do art. 37.', 'Sei diferenciar interesse público de interesse do governante.', 'Consigo identificar vício de finalidade, motivação ou impessoalidade.', 'Consigo transformar princípio em argumento de parecer.'],
        nextTopic: 'Organização administrativa: direta, indireta, centralização, descentralização e desconcentração'
      },
      {
        id: 'organizacao-administrativa',
        level: 'intermediário',
        title: 'Organização administrativa: Administração direta, indireta, centralização, descentralização e desconcentração',
        whatIs: 'Organização administrativa é o estudo de como o Estado estrutura seus órgãos e entidades para exercer a função administrativa. Envolve Administração direta, Administração indireta, centralização, descentralização, desconcentração, delegação e entidades como autarquias, fundações públicas, empresas públicas e sociedades de economia mista.',
        purpose: 'Serve para identificar quem tem competência para praticar o ato, quem responde por determinada atividade, qual regime jurídico se aplica e como o Município pode organizar serviços, órgãos e entidades.',
        plainExplanation: [
          'Administração direta é composta pelos entes federativos e seus órgãos internos: União, Estados, Distrito Federal e Municípios. No Município, secretarias, departamentos e procuradoria são órgãos da própria pessoa jurídica Município. Órgão não tem personalidade jurídica própria; é centro de competência.',
          'Administração indireta surge quando o ente cria pessoas jurídicas para desempenhar atividades específicas, como autarquias, fundações públicas, empresas públicas e sociedades de economia mista. Aqui há personalidade jurídica própria, patrimônio próprio e capacidade de figurar em relações jurídicas, dentro dos limites da lei criadora ou autorizadora.',
          'Centralização ocorre quando a própria pessoa política executa a atividade. Descentralização ocorre quando outra pessoa jurídica executa. Desconcentração é apenas distribuição interna de competências dentro da mesma pessoa jurídica. A banca ama confundir descentralização com desconcentração.'
        ],
        examTechnical: 'Descentralização pode ser por outorga legal a entidade da Administração indireta ou por delegação negocial a particulares, como concessões e permissões. Desconcentração cria órgãos, não pessoas. Autarquias costumam ter regime de direito público, prerrogativas de Fazenda Pública e criação por lei específica. Empresas públicas e sociedades de economia mista exploradoras de atividade econômica se submetem predominantemente ao regime privado, sem perder limites constitucionais.',
        cityExample: 'Se Itupeva cria uma autarquia municipal de saneamento por lei específica, há descentralização por serviços. Se apenas cria uma Diretoria de Fiscalização dentro de uma Secretaria, há desconcentração. Se concede transporte público a particular, há delegação de serviço público, não criação de entidade municipal.',
        legalBase: ['CF/88, art. 37, XIX e XX', 'CF/88, art. 173', 'CF/88, art. 175', 'Decreto-Lei nº 200/1967 como referência conceitual clássica', 'Lei nº 11.107/2005 sobre consórcios públicos'],
        dryLaw: ['CF/88, art. 37, XIX', 'CF/88, art. 173', 'CF/88, art. 175', 'Lei nº 11.107/2005'],
        jurisprudence: ['Entidades da Administração indireta têm regime definido conforme natureza jurídica e finalidade, sendo comum a incidência de prerrogativas públicas às autarquias.', 'Empresas estatais não são automaticamente equiparadas à Fazenda Pública em todos os aspectos; é preciso verificar finalidade e regime aplicável.'],
        objectiveCharge: ['Diferença entre órgão e entidade.', 'Diferença entre descentralização e desconcentração.', 'Natureza jurídica de autarquia, fundação, empresa pública e sociedade de economia mista.', 'Criação e autorização por lei.'],
        discursiveCharge: 'Pode cair em parecer sobre criação de entidade municipal, consórcio público, delegação de serviço, competência de secretaria ou validade de ato praticado por autoridade sem atribuição.',
        traps: ['Desconcentração não cria pessoa jurídica.', 'Autarquia é criada por lei específica; empresa pública e sociedade de economia mista têm criação autorizada por lei.', 'Delegação a particular não transforma particular em órgão público.', 'Órgão não tem personalidade jurídica, mas pode ter capacidade processual excepcional em certas hipóteses reconhecidas.'],
        differences: ['Centralização x descentralização: mesma pessoa x pessoa diversa.', 'Descentralização x desconcentração: nova pessoa jurídica x distribuição interna.', 'Outorga x delegação: transferência legal de titularidade/execução a entidade x transferência da execução a particular por contrato/ato.'],
        commonMistakes: ['Chamar secretaria de entidade.', 'Dizer que toda empresa estatal tem regime público integral.', 'Confundir consórcio público com convênio comum.', 'Esquecer que competência precisa estar prevista em norma.'],
        miniCase: 'Um diretor de departamento assina ato que somente o secretário poderia praticar por decreto municipal. A análise deve verificar se houve delegação válida. Sem competência, pode haver vício do ato, sanável ou insanável conforme o caso.',
        activeQuestions: ['O sujeito é órgão ou entidade?', 'Há personalidade jurídica própria?', 'A competência foi distribuída internamente ou transferida a outra pessoa?', 'A entidade foi criada ou autorizada por lei?', 'Qual regime jurídico se aplica?'],
        flashcards: [
          { front: 'Desconcentração cria pessoa jurídica?', back: 'Não. Desconcentração cria órgãos dentro da mesma pessoa jurídica.' },
          { front: 'Autarquia é criada ou autorizada por lei?', back: 'Criada por lei específica.' },
          { front: 'Concessão de serviço público é centralização?', back: 'Não. É delegação da execução do serviço a particular, nos termos da lei e do contrato.' }
        ],
        summary: 'Organização administrativa define quem age e sob qual regime. Para prova, domine órgão x entidade, Administração direta x indireta, descentralização x desconcentração e regimes das entidades.',
        checklist: ['Sei diferenciar órgão e entidade.', 'Sei explicar direta e indireta.', 'Sei diferenciar centralização, descentralização e desconcentração.', 'Conheço autarquias, fundações, empresas públicas e sociedades de economia mista.', 'Consigo aplicar isso a um caso municipal.'],
        nextTopic: 'Poderes administrativos e abuso de poder'
      },
      {
        id: 'poderes-administrativos',
        level: 'intermediário',
        title: 'Poderes administrativos: vinculado, discricionário, hierárquico, disciplinar, regulamentar, polícia e abuso de poder',
        whatIs: 'Poderes administrativos são instrumentos jurídicos conferidos à Administração para cumprir finalidades públicas. Eles não são privilégios pessoais do agente; são poderes-deveres ligados à competência legal.',
        purpose: 'Servem para permitir que o Município organize sua estrutura, regulamente a execução da lei, fiscalize atividades, discipline servidores e contratados, aplique sanções e escolha soluções legítimas dentro de margem legal.',
        plainExplanation: [
          'Poder vinculado ocorre quando a lei praticamente não deixa liberdade de escolha: preenchidos os requisitos, a Administração deve agir de determinada forma. Poder discricionário existe quando a lei autoriza escolha legítima quanto à conveniência, oportunidade, intensidade ou meio, dentro de limites jurídicos.',
          'Poder hierárquico organiza a Administração internamente: distribuir funções, dar ordens, fiscalizar, revisar atos e delegar ou avocar competências quando permitido. Poder disciplinar permite apurar infrações e aplicar sanções a servidores e pessoas sujeitas a vínculo especial com a Administração.',
          'Poder regulamentar detalha a lei para permitir sua execução, sem inovar indevidamente na ordem jurídica. Poder de polícia limita direitos e atividades particulares em benefício da coletividade, como fiscalização de obras, posturas, vigilância sanitária, trânsito local, meio ambiente e uso do solo.'
        ],
        examTechnical: 'Abuso de poder é gênero que abrange excesso de poder e desvio de poder. Excesso ocorre quando o agente extrapola competência. Desvio ocorre quando usa competência para finalidade diversa da prevista. Discricionariedade não é liberdade absoluta; admite controle de legalidade, motivo, finalidade, razoabilidade e proporcionalidade.',
        cityExample: 'Fiscal municipal interdita estabelecimento sem base legal, sem risco imediato e sem procedimento mínimo. Pode haver abuso por excesso ou desproporcionalidade. Já a interdição motivada por risco sanitário grave pode ser legítima manifestação do poder de polícia.',
        legalBase: ['CF/88, art. 37', 'CTN, art. 78, como conceito legal de poder de polícia tributário', 'Lei nº 9.784/1999, princípios e motivação como referência', 'Legislação municipal de posturas, fiscalização, servidores e competências'],
        dryLaw: ['CF/88, art. 37', 'CTN, art. 78', 'Lei nº 9.784/1999, arts. 2º e 50'],
        jurisprudence: ['O controle judicial de atos discricionários não substitui o mérito legítimo, mas pode invalidar ato por ilegalidade, desvio de finalidade, ausência de motivação ou desproporcionalidade.', 'Sanções administrativas exigem devido processo, contraditório e proporcionalidade, ressalvadas medidas urgentes justificadas por risco concreto.'],
        objectiveCharge: ['Conceitos de excesso e desvio de poder.', 'Diferença entre poder disciplinar e poder de polícia.', 'Controle judicial do ato discricionário.', 'Limites do regulamento administrativo.'],
        discursiveCharge: 'Pode aparecer como parecer sobre multa, interdição, demolição, processo disciplinar, ato regulamentar municipal ou revisão judicial de ato discricionário.',
        traps: ['Discricionariedade não significa arbitrariedade.', 'Poder de polícia não exige sempre ordem judicial.', 'Poder disciplinar não se aplica a qualquer particular, mas a quem tem vínculo especial.', 'Regulamento não pode contrariar ou extrapolar a lei.'],
        differences: ['Poder disciplinar x poder de polícia: vínculo especial x sujeição geral.', 'Excesso x desvio: extrapola competência x finalidade errada.', 'Vinculado x discricionário: sem margem relevante x margem legítima limitada.'],
        commonMistakes: ['Achar que todo ato de fiscalização é discricionário imune a controle.', 'Confundir multa administrativa com pena criminal.', 'Esquecer motivação em sanções.', 'Tratar decreto regulamentar como se pudesse criar obrigação sem lei.'],
        miniCase: 'Prefeitura edita decreto criando nova taxa sem lei. O regulamento extrapola sua função, pois tributo exige lei. A providência correta é apontar ilegalidade e orientar envio de projeto de lei, se houver competência e fundamento.',
        activeQuestions: ['Qual poder administrativo foi usado?', 'Existe competência legal?', 'A finalidade é pública e correta?', 'Há proporcionalidade?', 'Foi garantido processo adequado?'],
        flashcards: [
          { front: 'Abuso de poder se divide em quê?', back: 'Excesso de poder e desvio de poder.' },
          { front: 'Poder disciplinar é igual a poder de polícia?', back: 'Não. Disciplinar atua sobre vínculo especial; polícia limita direitos de particulares em geral.' },
          { front: 'Ato discricionário pode ser controlado pelo Judiciário?', back: 'Sim, quanto à legalidade, competência, finalidade, motivo, forma, razoabilidade e proporcionalidade, sem substituir mérito legítimo.' }
        ],
        summary: 'Poder administrativo é poder-dever. A prova cobra conceitos e limites. Em parecer, sempre examine competência, finalidade, motivo, proporcionalidade e procedimento.',
        checklist: ['Sei diferenciar poder vinculado e discricionário.', 'Sei diferenciar hierárquico, disciplinar, regulamentar e polícia.', 'Sei explicar excesso e desvio de poder.', 'Sei aplicar proporcionalidade em sanção.', 'Sei controlar ato discricionário sem invadir mérito.'],
        nextTopic: 'Atos administrativos: requisitos, atributos, vícios, anulação, revogação e convalidação'
      },
      {
        id: 'atos-administrativos',
        level: 'avançado',
        title: 'Atos administrativos: conceito, requisitos, atributos, classificação, espécies, vícios, anulação, revogação e convalidação',
        whatIs: 'Ato administrativo é manifestação unilateral da Administração Pública, ou de quem exerça função administrativa, produzida sob regime de direito público para gerar efeitos jurídicos imediatos voltados ao interesse público.',
        purpose: 'Serve para concretizar decisões administrativas: licença, autorização, multa, nomeação, exoneração, homologação, adjudicação, interdição, permissão, autorização de uso, decreto, portaria, despacho e parecer decisório.',
        plainExplanation: [
          'O ato administrativo é a ferramenta cotidiana da Administração. Quando o Município nomeia servidor, aplica multa, concede licença, homologa licitação ou interdita uma obra, ele pratica atos administrativos. Para o ato ser válido, precisa respeitar elementos ou requisitos: competência, finalidade, forma, motivo e objeto.',
          'Competência é quem pode agir. Finalidade é o objetivo público previsto. Forma é o modo de exteriorização exigido. Motivo é o pressuposto de fato e de direito que justifica o ato. Objeto é o efeito jurídico produzido. Se qualquer elemento vier com vício relevante, o ato pode ser inválido.',
          'Os atributos são características que ajudam o ato a produzir efeitos: presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade. Nem todo ato tem todos os atributos. Autoexecutoriedade, por exemplo, depende de previsão legal ou urgência concreta.'
        ],
        examTechnical: 'Ato ilegal deve ser anulado; ato válido pode ser revogado por conveniência e oportunidade, salvo atos vinculados, consumados, que geraram direito adquirido ou que não admitem revogação. Convalidação corrige vício sanável, normalmente competência não exclusiva ou forma não essencial, desde que não haja lesão ao interesse público nem prejuízo a terceiros.',
        cityExample: 'Servidor sem competência assina autorização de obra. O Procurador deve verificar se a competência era exclusiva, se houve delegação, se o vício é sanável e se a obra atende à lei urbanística. Se o vício for sanável, pode orientar convalidação; se houver ilegalidade material, deve orientar anulação.',
        legalBase: ['CF/88, art. 37', 'Lei nº 9.784/1999, especialmente regras sobre competência, motivação, anulação, revogação e convalidação como referência geral', 'LINDB, arts. 20 a 30', 'Legislação municipal de competências e procedimentos'],
        dryLaw: ['Lei nº 9.784/1999, arts. 11 a 17', 'Lei nº 9.784/1999, art. 50', 'Lei nº 9.784/1999, arts. 53 a 55', 'LINDB, arts. 20 a 24'],
        jurisprudence: ['A autotutela administrativa permite anular atos ilegais e revogar atos válidos por razões de mérito, respeitados direitos e garantias.', 'Quando o ato afeta direito ou situação individual, a anulação administrativa deve observar contraditório e segurança jurídica.'],
        objectiveCharge: ['Elementos do ato: competência, finalidade, forma, motivo e objeto.', 'Atributos do ato.', 'Diferença entre anulação, revogação e convalidação.', 'Teoria dos motivos determinantes.', 'Mérito administrativo e controle judicial.'],
        discursiveCharge: 'Altíssima chance de uso em parecer: ato ilegal, vício de competência, motivação insuficiente, revogação de licença, convalidação de procedimento, anulação de multa ou revisão de contratação.',
        traps: ['Ato ilegal não se revoga; ato ilegal se anula.', 'Revogação não tem efeito retroativo típico de invalidação; anulação tende a efeitos retroativos, ressalvada segurança jurídica.', 'Motivo falso compromete o ato quando declarado como fundamento.', 'Todo ato administrativo tem presunção de legitimidade, mas essa presunção é relativa.', 'Ato vinculado, em regra, não é revogado por conveniência.'],
        differences: ['Ato administrativo x fato administrativo: manifestação jurídica x acontecimento material.', 'Ato vinculado x discricionário: sem margem x com margem limitada.', 'Anulação x revogação x convalidação: legalidade x mérito x saneamento.', 'Motivo x motivação: pressuposto do ato x exposição formal das razões.'],
        commonMistakes: ['Confundir motivo com motivação.', 'Achar que autoexecutoriedade existe em todo ato.', 'Tratar parecer opinativo como ato decisório sem verificar efeito.', 'Dizer que vício de finalidade pode ser convalidado.'],
        miniCase: 'Município aplicou multa ambiental com auto de infração que descreve fato inexistente. Pela teoria dos motivos determinantes, se o motivo declarado é falso, o ato sancionador fica comprometido e deve ser anulado, com possibilidade de novo procedimento se ainda cabível.',
        activeQuestions: ['Quem praticou o ato tinha competência?', 'A finalidade era a prevista em lei?', 'A forma era essencial?', 'O motivo existe e está provado?', 'O objeto é lícito, possível e determinado?', 'O vício é sanável?'],
        flashcards: commonAdminFlashcards,
        summary: 'Ato administrativo é tema central. Decore elementos e atributos, mas principalmente entenda consequências: vício gera anulação; mérito de ato válido permite revogação; vício sanável pode admitir convalidação.',
        checklist: ['Sei os cinco elementos do ato.', 'Sei os principais atributos.', 'Sei diferenciar anulação, revogação e convalidação.', 'Sei aplicar teoria dos motivos determinantes.', 'Consigo escrever parecer sobre ato municipal inválido.'],
        nextTopic: 'Agentes públicos, concurso, provimento, vacância e responsabilidades'
      },
      {
        id: 'agentes-publicos',
        level: 'intermediário',
        title: 'Agentes públicos: classificação, concurso, provimento, vacância, direitos, deveres e responsabilidades',
        whatIs: 'Agente público é toda pessoa física que exerce função estatal, ainda que temporariamente ou sem remuneração. Inclui agentes políticos, servidores estatutários, empregados públicos, temporários, particulares em colaboração e outros enquadramentos.',
        purpose: 'Serve para definir regime jurídico, forma de ingresso, direitos, deveres, responsabilização, processo disciplinar, remuneração e limites de atuação de quem trabalha para o Município.',
        plainExplanation: [
          'O ponto de partida é o art. 37 da Constituição: regra do concurso público para cargos e empregos, salvo exceções constitucionais, como cargo em comissão para direção, chefia e assessoramento e contratação temporária quando houver necessidade temporária de excepcional interesse público.',
          'Provimento é o preenchimento do cargo; vacância é a desocupação. Nomeação, posse, exercício, promoção, readaptação, reversão, reintegração, recondução e aproveitamento aparecem conforme o regime jurídico aplicável. No Município, a lei local é decisiva.',
          'Responsabilidade do agente pode ser administrativa, civil e penal. Um mesmo fato pode gerar mais de uma esfera, mas cada uma possui pressupostos próprios. Em parecer, é essencial evitar punição sem processo e sem tipificação adequada.'
        ],
        examTechnical: 'A banca costuma cobrar concurso público, cargos em comissão, nepotismo, temporários, acumulação de cargos, teto remuneratório, estabilidade, estágio probatório, aposentadoria e responsabilidade. Para Procurador Municipal, a lei local do servidor é tão importante quanto a regra constitucional geral.',
        cityExample: 'Servidor efetivo é acusado de abandonar serviço. A Procuradoria deve orientar instauração de procedimento conforme estatuto municipal, garantindo contraditório, comissão competente, descrição dos fatos, prazo de defesa, relatório e decisão motivada.',
        legalBase: ['CF/88, art. 37', 'CF/88, art. 39 a 41', 'Lei local do Estatuto dos Servidores Municipais', 'Lei Orgânica Municipal', 'Súmula Vinculante nº 13 sobre nepotismo'],
        dryLaw: ['CF/88, art. 37, II, V, IX, XVI e §6º', 'CF/88, arts. 39, 40 e 41', 'Estatuto dos Servidores de Itupeva conforme edital'],
        jurisprudence: ['Nepotismo viola princípios constitucionais da Administração Pública, conforme entendimento vinculante do STF.', 'Contratação temporária exige previsão legal, necessidade temporária e excepcional interesse público, não podendo substituir burla permanente ao concurso.'],
        objectiveCharge: ['Concurso público e exceções.', 'Cargo em comissão x função de confiança.', 'Acumulação remunerada.', 'Estabilidade e estágio probatório.', 'Responsabilidade administrativa, civil e penal.'],
        discursiveCharge: 'Pode vir como parecer sobre contratação temporária, exoneração, PAD, acumulação ilícita, nepotismo, servidor estável ou responsabilidade funcional.',
        traps: ['Cargo em comissão não serve para atividade burocrática comum.', 'Temporário não pode virar regra para necessidade permanente.', 'Estabilidade não impede PAD nem demissão se houver devido processo.', 'Acumulação só é possível nas hipóteses constitucionais e com compatibilidade de horários.'],
        differences: ['Cargo efetivo x cargo em comissão.', 'Empregado público x servidor estatutário.', 'Responsabilidade administrativa x civil x penal.', 'Estágio probatório x estabilidade.'],
        commonMistakes: ['Responder só pela Constituição e ignorar estatuto local.', 'Achar que servidor estável é intocável.', 'Confundir exoneração com demissão.', 'Esquecer contraditório antes de sanção.'],
        miniCase: 'Prefeitura pretende contratar temporariamente por anos sucessivos para função permanente. O parecer deve alertar risco de burla ao concurso e orientar concurso público ou estrutura legal adequada.',
        activeQuestions: ['Qual é o vínculo do agente?', 'A entrada exigia concurso?', 'Existe hipótese constitucional de exceção?', 'A sanção exige PAD?', 'Qual lei local rege direitos e deveres?'],
        flashcards: [
          { front: 'Cargo em comissão pode ser usado para função técnica permanente?', back: 'Não deve. Cargo em comissão é para direção, chefia e assessoramento.' },
          { front: 'Servidor estável pode ser demitido?', back: 'Sim, nas hipóteses legais e com devido processo.' },
          { front: 'Temporário substitui concurso?', back: 'Não. Exige necessidade temporária de excepcional interesse público.' }
        ],
        summary: 'Agentes públicos exigem domínio de Constituição e lei local. Para prova e parecer, sempre identifique vínculo, forma de ingresso, competência, procedimento e responsabilidade.',
        checklist: ['Sei classificar agentes públicos.', 'Sei regra e exceções do concurso.', 'Sei diferença entre cargo efetivo, comissão e temporário.', 'Sei noções de provimento e vacância.', 'Sei estruturar análise de PAD e responsabilidade.'],
        nextTopic: 'Processo Administrativo Disciplinar'
      },
      {
        id: 'pad',
        level: 'discursiva',
        title: 'Processo Administrativo Disciplinar e sindicância',
        whatIs: 'Processo Administrativo Disciplinar é o instrumento formal pelo qual a Administração apura infração funcional e, se comprovada, aplica sanção ao servidor ou agente submetido a regime disciplinar.',
        purpose: 'Serve para proteger o interesse público e o servidor ao mesmo tempo: evita impunidade, mas também impede punição arbitrária sem contraditório, ampla defesa e decisão motivada.',
        plainExplanation: [
          'PAD não é mero formulário. É processo de apuração com fases, competência, descrição dos fatos, produção de provas, defesa e julgamento. A sindicância pode ser investigativa ou, conforme lei local, punitiva para penalidades leves, mas é preciso conferir o estatuto aplicável.',
          'A lógica é simples: fato, enquadramento, autoria, materialidade, defesa, proporcionalidade e decisão. O erro comum da Administração é punir com base em notícia vaga, sem delimitar conduta e sem permitir defesa efetiva.',
          'Para Procurador Municipal, a atuação preventiva é decisiva. Um PAD mal instaurado gera anulação judicial, reintegração, pagamento retroativo e desgaste institucional. O parecer deve orientar rito correto e prova suficiente.'
        ],
        examTechnical: 'O edital cobra processo disciplinar dentro de agentes públicos e Direito Administrativo Municipal. Estude princípios do devido processo, contraditório, ampla defesa, motivação, comissão competente, impedimento/suspeição, prescrição disciplinar e dosimetria da sanção. A lei local prevalece no rito específico.',
        cityExample: 'Servidor é acusado de fraudar ponto. Antes de punir, o Município deve instaurar procedimento, individualizar condutas, juntar registros, ouvir testemunhas, permitir defesa e decidir com motivação. Se a prova for insuficiente, não cabe sanção baseada em presunção.',
        legalBase: ['CF/88, art. 5º, LIV e LV', 'CF/88, art. 37', 'Estatuto dos Servidores Públicos Municipais de Itupeva', 'Lei nº 9.784/1999 como referência principiológica geral'],
        dryLaw: ['CF/88, art. 5º, LIV e LV', 'CF/88, art. 37', 'Estatuto local: deveres, proibições, penalidades e processo disciplinar'],
        jurisprudence: ['O contraditório e a ampla defesa são garantias aplicáveis a processos administrativos sancionadores.', 'Defesa técnica por advogado não é obrigatória em todo PAD segundo entendimento sumulado do STF, mas a defesa efetiva deve ser assegurada.'],
        objectiveCharge: ['Fases do PAD.', 'Contraditório e ampla defesa.', 'Sindicância x PAD.', 'Nulidades disciplinares.', 'Competência e prescrição.'],
        discursiveCharge: 'Muito provável em parecer: servidor acusado, nulidade de processo, possibilidade de afastamento preventivo, dosimetria de penalidade ou revisão de punição.',
        traps: ['Punir sem processo é nulidade grave.', 'Sindicância investigativa não substitui PAD para penalidade grave.', 'Afastamento preventivo não é sanção.', 'Ausência de advogado não significa nulidade automática, mas cerceamento de defesa concreto pode anular.'],
        differences: ['Sindicância investigativa x PAD.', 'Afastamento preventivo x penalidade.', 'Responsabilidade administrativa x improbidade x crime.', 'Nulidade formal irrelevante x prejuízo à defesa.'],
        commonMistakes: ['Não consultar o estatuto local.', 'Punir fato não descrito na portaria.', 'Usar prova frágil.', 'Esquecer dosimetria e proporcionalidade.'],
        miniCase: 'Comissão processante pune servidor por fato diferente do descrito na instauração. Há risco de violação ao contraditório, pois a defesa foi preparada contra outra imputação.',
        activeQuestions: ['Qual fato está sendo apurado?', 'Qual norma disciplinar foi violada?', 'Quem compõe a comissão?', 'Houve defesa efetiva?', 'A penalidade é proporcional?'],
        flashcards: [
          { front: 'Afastamento preventivo é pena?', back: 'Não. É medida cautelar administrativa, quando prevista e justificada.' },
          { front: 'PAD exige contraditório?', back: 'Sim, especialmente antes de sanção.' },
          { front: 'Qual lei consultar primeiro no PAD municipal?', back: 'O Estatuto dos Servidores Públicos Municipais e normas locais aplicáveis.' }
        ],
        summary: 'PAD é tema de legalidade defensiva. O Município deve apurar, mas com rito, competência, prova, defesa e motivação. Para prova, o segredo é enxergar nulidades e garantias.',
        checklist: ['Sei finalidade do PAD.', 'Sei diferenciar sindicância e PAD.', 'Sei garantias mínimas do processo disciplinar.', 'Sei identificar nulidades.', 'Consigo redigir parecer sobre punição funcional.'],
        nextTopic: 'Licitações e contratos administrativos'
      },
      {
        id: 'licitacoes-contratos',
        level: 'avançado',
        title: 'Licitações e contratos administrativos: Lei nº 14.133/2021, modalidades, contratação direta, procedimentos e contratos',
        whatIs: 'Licitação é o procedimento administrativo destinado a selecionar a proposta apta a gerar o resultado de contratação mais vantajoso para a Administração, assegurando isonomia, competição, planejamento e controle. Contrato administrativo é o ajuste celebrado pela Administração para atender necessidade pública, com regime jurídico próprio.',
        purpose: 'Serve para evitar favoritismo, proteger dinheiro público, garantir planejamento e permitir que o Município contrate obras, serviços, compras, locações, tecnologia, manutenção e concessões de forma juridicamente segura.',
        plainExplanation: [
          'A Lei nº 14.133/2021 mudou o centro da licitação: planejamento, gestão de riscos, governança, matriz de responsabilidades, estudo técnico preliminar, termo de referência, pesquisa de preços e fiscalização contratual ficaram ainda mais relevantes.',
          'Licitar não é apenas publicar edital. É instruir processo: identificar necessidade, justificar solução, estimar preço, definir critério, escolher modalidade, verificar orçamento, analisar riscos, publicar, julgar, habilitar, adjudicar, homologar e fiscalizar contrato.',
          'Contratação direta não significa contratação livre. Dispensa e inexigibilidade exigem processo formal, justificativa, preço compatível, razão da escolha e demonstração do enquadramento legal. Para Procurador, esse é um ponto crítico de responsabilização.'
        ],
        examTechnical: 'Domine princípios, modalidades, critérios de julgamento, fases, contratação direta, inexigibilidade, dispensa, agentes de contratação, matriz de riscos, garantias, duração contratual, alteração, reajuste, reequilíbrio, sanções, nulidades e controle. A banca costuma cobrar diferenças entre dispensa e inexigibilidade e novidades da Lei nº 14.133/2021.',
        cityExample: 'Município quer contratar software de gestão pública sem licitação alegando urgência. O parecer deve verificar se existe hipótese de dispensa, se a urgência é real e não fabricada, se o preço foi justificado, se a solução atende ao interesse público e se há planejamento para contratação regular.',
        legalBase: ['CF/88, art. 37, XXI', 'Lei nº 14.133/2021', 'Lei Complementar nº 123/2006 em tratamento favorecido a ME/EPP quando aplicável', 'Normas municipais de contratação e regulamentos locais'],
        dryLaw: ['Lei nº 14.133/2021, arts. 5º, 6º, 11, 18, 28, 74, 75, 89 a 95, 104 a 139, 155 a 163', 'CF/88, art. 37, XXI'],
        jurisprudence: ['Tribunais de Contas valorizam planejamento, justificativa de preços, motivação da contratação direta e fiscalização contratual efetiva.', 'A ausência de competição só justifica inexigibilidade quando a competição for inviável, não por mera preferência administrativa.'],
        objectiveCharge: ['Modalidades da Lei 14.133.', 'Dispensa x inexigibilidade.', 'Fases do processo licitatório.', 'Critérios de julgamento.', 'Gestão e fiscalização contratual.', 'Sanções administrativas.'],
        discursiveCharge: 'Pode cair como parecer sobre contratação direta, edital restritivo, reequilíbrio econômico-financeiro, prorrogação contratual, sanção a contratada ou nulidade de licitação.',
        traps: ['Inexigibilidade não é escolha livre: exige inviabilidade de competição.', 'Dispensa pode ser licitação possível, mas legalmente dispensada.', 'Emergência fabricada não justifica contratação direta segura.', 'Pesquisa de preços fraca compromete contratação.', 'Parecer jurídico não substitui decisão do gestor, mas alerta riscos.'],
        differences: ['Dispensa x inexigibilidade.', 'Adjudicação x homologação.', 'Reajuste x revisão/reequilíbrio.', 'Sanção contratual x rescisão/extinção.', 'Habilitação x julgamento.'],
        commonMistakes: ['Estudar só modalidades antigas.', 'Ignorar fase preparatória.', 'Achar que todo parecer aprova contratação.', 'Não verificar preço e justificativa em contratação direta.'],
        miniCase: 'Secretaria quer contratar artista local por inexigibilidade. O parecer deve verificar consagração pela crítica ou opinião pública, empresário exclusivo se houver, justificativa de preço e adequação do evento ao interesse público.',
        activeQuestions: ['A necessidade está bem definida?', 'Há planejamento suficiente?', 'A competição é possível?', 'Qual modalidade e critério se aplicam?', 'O preço foi justificado?', 'Quem fiscalizará o contrato?'],
        flashcards: [
          { front: 'Inexigibilidade depende de quê?', back: 'Inviabilidade de competição e enquadramento legal.' },
          { front: 'Dispensa significa ausência de processo?', back: 'Não. Exige processo formal e justificativas.' },
          { front: 'Qual lei geral atual de licitações?', back: 'Lei nº 14.133/2021.' }
        ],
        summary: 'Licitações exigem raciocínio de planejamento e controle. Para Procurador, a pergunta é: o processo demonstra necessidade, legalidade, competitividade, preço justo e fiscalização?',
        checklist: ['Sei princípios e objetivos da Lei 14.133.', 'Sei modalidades e critérios.', 'Sei diferenciar dispensa e inexigibilidade.', 'Sei analisar contratação direta.', 'Sei pontos básicos de contratos e sanções.'],
        nextTopic: 'Serviços públicos, concessão, permissão, autorização e PPP'
      },
      {
        id: 'servicos-publicos',
        level: 'intermediário',
        title: 'Serviços públicos: conceito, princípios, classificação, concessão, permissão, autorização e PPP',
        whatIs: 'Serviço público é atividade assumida pelo Estado para atender necessidades coletivas sob regime jurídico de direito público total ou parcialmente, prestada diretamente ou por delegação.',
        purpose: 'Serve para organizar transporte, saneamento, iluminação, saúde, educação, coleta de resíduos, manutenção urbana e outras atividades municipais essenciais ou de interesse coletivo.',
        plainExplanation: [
          'O Município pode prestar serviço diretamente, por órgãos próprios, por entidade da Administração indireta ou por delegação a particulares. A delegação não elimina a responsabilidade regulatória e fiscalizatória do poder concedente.',
          'Os princípios clássicos são continuidade, regularidade, eficiência, segurança, atualidade, generalidade, modicidade tarifária e cortesia. Em prova, continuidade é muito cobrada: serviço público essencial não pode ser interrompido de modo arbitrário, mas pode haver regras legais para inadimplemento, emergência e manutenção.',
          'Concessão e permissão são formas de delegação. Autorização costuma ser ato administrativo mais precário, conforme o caso. PPP envolve contratos de longo prazo com contraprestação pública em modalidades patrocinada ou administrativa, conforme legislação específica.'
        ],
        examTechnical: 'Estude CF/88 art. 175, Lei nº 8.987/1995, noções de PPP, direitos dos usuários, encampação, caducidade, reversão, equilíbrio econômico-financeiro e poder de fiscalização. Para Município, conecte com serviço local e interesse local.',
        cityExample: 'Contrato de concessão de transporte municipal apresenta falhas reiteradas. O Município deve fiscalizar, aplicar sanções proporcionais, exigir correção e, se cabível, instaurar processo para medidas mais graves, respeitando contrato e devido processo.',
        legalBase: ['CF/88, art. 175', 'Lei nº 8.987/1995', 'Lei nº 11.079/2004', 'Lei nº 13.460/2017 sobre usuários de serviços públicos', 'Legislação municipal e contratos locais'],
        dryLaw: ['CF/88, art. 175', 'Lei nº 8.987/1995', 'Lei nº 11.079/2004', 'Lei nº 13.460/2017'],
        jurisprudence: ['A delegação de serviço público não afasta o dever estatal de regulação e fiscalização.', 'Equilíbrio econômico-financeiro deve ser analisado conforme contrato, matriz de riscos, fatos supervenientes e prova do impacto.'],
        objectiveCharge: ['Princípios do serviço público.', 'Concessão x permissão x autorização.', 'Encampação, caducidade e reversão.', 'Direitos dos usuários.', 'Equilíbrio econômico-financeiro.'],
        discursiveCharge: 'Pode cair em parecer sobre interrupção de serviço, revisão tarifária, falhas de concessionária, caducidade, prorrogação ou reequilíbrio.',
        traps: ['Delegação não transfere titularidade do serviço.', 'Concessão não é privatização absoluta do dever público.', 'Permissão não é sempre sem licitação.', 'Reequilíbrio não é reajuste automático por mera alegação de prejuízo.'],
        differences: ['Titularidade x execução.', 'Concessão x permissão.', 'Encampação x caducidade.', 'Reajuste x reequilíbrio.', 'Serviço público x atividade econômica em sentido estrito.'],
        commonMistakes: ['Ignorar contrato e matriz de riscos.', 'Confundir usuário com consumidor sem adaptar ao regime público.', 'Achar que todo serviço pode parar por inadimplemento.', 'Esquecer processo antes de caducidade.'],
        miniCase: 'Concessionária pede aumento tarifário por alta de custos. O parecer deve verificar contrato, fórmula de reajuste, matriz de riscos, prova do desequilíbrio e impacto na modicidade tarifária.',
        activeQuestions: ['O serviço é de titularidade municipal?', 'É prestação direta ou delegada?', 'Qual instrumento de delegação?', 'Há falha de continuidade ou qualidade?', 'O contrato prevê risco e revisão?'],
        flashcards: [
          { front: 'Delegação transfere titularidade?', back: 'Não. Transfere a execução nos limites legais e contratuais.' },
          { front: 'Caducidade decorre de quê?', back: 'Inadimplemento da concessionária, após processo administrativo.' },
          { front: 'Encampação decorre de quê?', back: 'Retomada por interesse público, nos termos da lei, com indenização quando cabível.' }
        ],
        summary: 'Serviço público exige foco em titularidade, forma de prestação, continuidade, usuário, fiscalização e contrato. Para Município, é tema prático e recorrente.',
        checklist: ['Sei conceito e princípios.', 'Sei prestação direta e delegada.', 'Sei concessão, permissão e autorização.', 'Sei noções de PPP.', 'Consigo analisar falha de concessionária.'],
        nextTopic: 'Bens públicos e intervenção do Estado na propriedade'
      },
      {
        id: 'responsabilidade-controle-improbidade',
        level: 'avançado',
        title: 'Responsabilidade civil do Estado, controle da Administração e improbidade administrativa',
        whatIs: 'Responsabilidade civil do Estado é o dever de reparar danos causados por agentes públicos nessa qualidade. Controle da Administração é o conjunto de mecanismos internos, externos e judiciais de fiscalização da legalidade, legitimidade, economicidade e resultados. Improbidade administrativa envolve atos dolosos que violam padrões graves de probidade previstos em lei.',
        purpose: 'Serve para proteger administrados contra danos estatais, assegurar correção da máquina pública, responsabilizar condutas graves e orientar defesa do Município em ações indenizatórias, ações civis públicas, tomadas de contas e processos de controle.',
        plainExplanation: [
          'A regra constitucional da responsabilidade objetiva aplica-se a pessoas jurídicas de direito público e prestadoras de serviço público: vítima prova dano, conduta estatal e nexo causal. O Estado pode buscar regresso contra agente se houver dolo ou culpa.',
          'Nem todo dano gera responsabilidade. É preciso nexo causal e ausência de excludentes como culpa exclusiva da vítima, caso fortuito/força maior ou fato de terceiro, conforme análise concreta. Omissão estatal exige cuidado: a prova cobra a diferença entre omissão específica e genérica e o dever legal de agir.',
          'Controle pode ser administrativo, legislativo, judicial, interno, externo e social. Tribunais de Contas controlam contas, atos, contratos, licitações e despesas. Improbidade, após a Lei nº 14.230/2021, exige dolo para responsabilização por atos de improbidade.'
        ],
        examTechnical: 'Domine CF/88 art. 37, §6º, teorias do risco administrativo, responsabilidade por omissão, ação regressiva, controle interno/externo, TCU/TCE, autotutela, limites do Judiciário e Lei de Improbidade com alterações. A banca costuma confundir ilegalidade com improbidade: nem toda ilegalidade é improbidade.',
        cityExample: 'Munícipe sofre dano por queda em buraco não sinalizado em via municipal após várias reclamações ignoradas. O parecer deve avaliar omissão específica, prova do dano, nexo causal, eventual culpa concorrente e estratégia de acordo ou defesa.',
        legalBase: ['CF/88, art. 37, §6º', 'Lei nº 8.429/1992', 'Lei nº 14.230/2021', 'Lei Orgânica e normas de controle local', 'LINDB, arts. 20 a 30'],
        dryLaw: ['CF/88, art. 37, §6º', 'Lei nº 8.429/1992, arts. 1º, 9º, 10 e 11', 'LINDB, arts. 20 a 30'],
        jurisprudence: ['A responsabilidade civil do Estado em regra segue o risco administrativo, admitindo excludentes de nexo causal.', 'Após alterações legislativas, improbidade administrativa exige dolo, não bastando mera ilegalidade ou culpa para configuração típica de improbidade.'],
        objectiveCharge: ['Responsabilidade objetiva e ação regressiva.', 'Omissão estatal.', 'Excludentes de responsabilidade.', 'Controle interno, externo e judicial.', 'Improbidade e dolo.', 'Autotutela.'],
        discursiveCharge: 'Pode vir como parecer sobre indenização, queda em via pública, erro médico em serviço municipal, dano por obra pública, tomada de contas, ato ímprobo ou controle judicial de política pública.',
        traps: ['Responsabilidade objetiva não significa responsabilidade automática.', 'Ação regressiva contra agente exige dolo ou culpa.', 'Toda improbidade exige dolo conforme regime atual.', 'Controle judicial não deve substituir escolhas administrativas legítimas, mas pode corrigir ilegalidade.', 'Tribunal de Contas não é órgão do Judiciário.'],
        differences: ['Responsabilidade objetiva x subjetiva.', 'Omissão específica x omissão genérica.', 'Ilegalidade x improbidade.', 'Controle administrativo x legislativo x judicial.', 'Anulação x responsabilização.'],
        commonMistakes: ['Dizer que Estado responde sempre por qualquer dano.', 'Esquecer excludentes de nexo.', 'Chamar todo erro administrativo de improbidade.', 'Confundir controle externo com controle judicial.'],
        miniCase: 'Prefeito autorizou contratação irregular sem prova de dolo, dano ou enriquecimento. Pode haver nulidade e responsabilização administrativa/financeira, mas improbidade exige análise típica e demonstração do elemento subjetivo exigido.',
        activeQuestions: ['Houve dano?', 'Quem causou?', 'Há nexo causal?', 'Existe excludente?', 'É caso de ilegalidade, responsabilidade civil ou improbidade?', 'Há dolo?'],
        flashcards: [
          { front: 'Qual a regra da responsabilidade estatal por ato comissivo?', back: 'Responsabilidade objetiva pelo risco administrativo, com necessidade de dano e nexo causal.' },
          { front: 'Ação regressiva exige o quê?', back: 'Dolo ou culpa do agente público.' },
          { front: 'Toda ilegalidade é improbidade?', back: 'Não. Improbidade exige tipicidade e elemento subjetivo, especialmente dolo no regime atual.' }
        ],
        summary: 'Responsabilidade, controle e improbidade são temas de prova e prática. O raciocínio correto separa dano, nexo, excludentes, ilegalidade, dolo e esfera de controle.',
        checklist: ['Sei art. 37, §6º.', 'Sei risco administrativo e excludentes.', 'Sei noções de omissão estatal.', 'Sei tipos de controle.', 'Sei diferença entre ilegalidade e improbidade.'],
        nextTopic: 'Processo administrativo, LAI, LGPD e Direito Administrativo Municipal'
      },
      {
        id: 'processo-lai-lgpd-municipal',
        level: 'lei seca',
        title: 'Processo administrativo, Lei de Acesso à Informação, LGPD e Direito Administrativo Municipal',
        whatIs: 'Processo administrativo é a sequência ordenada de atos destinada a formar decisão administrativa. LAI disciplina acesso a informações públicas. LGPD protege dados pessoais. Direito Administrativo Municipal aplica esses institutos à realidade da prefeitura, secretarias, servidores, processos, documentos, contratos e serviços locais.',
        purpose: 'Serve para garantir decisão motivada, participação, transparência, proteção de dados, segurança jurídica e funcionamento regular da Administração Municipal.',
        plainExplanation: [
          'Processo administrativo é o caminho jurídico da decisão pública. Um ato final seguro depende de processo bem instruído: requerimento, competência, documentos, análise técnica, parecer, contraditório quando necessário, motivação, decisão e recurso.',
          'A LAI parte da lógica de que transparência é regra e sigilo é exceção. O Município deve fornecer informações públicas, com cautela para dados pessoais, informações sigilosas e hipóteses legais de restrição.',
          'A LGPD não impede transparência; ela exige tratamento adequado de dados pessoais. O desafio do Procurador é equilibrar publicidade administrativa, acesso à informação, proteção da intimidade, finalidade, necessidade e segurança.'
        ],
        examTechnical: 'Estude princípios do processo administrativo, motivação, competência, impedimento, suspeição, recursos, anulação, revogação, convalidação, acesso à informação, transparência ativa e passiva, dados pessoais, bases legais e deveres da Administração. No Município, verifique normas locais de protocolo, ouvidoria, transparência e proteção de dados.',
        cityExample: 'Cidadão pede cópia integral de processo de servidor contendo dados pessoais sensíveis. O Município deve analisar o direito de acesso, anonimizar ou restringir dados quando necessário e fundamentar eventual negativa parcial, sem negar genericamente todo o processo.',
        legalBase: ['Lei nº 9.784/1999 como referência geral federal', 'Lei nº 12.527/2011', 'Lei nº 13.709/2018', 'CF/88, art. 5º, XXXIII', 'CF/88, art. 37', 'Lei Orgânica e normas municipais'],
        dryLaw: ['CF/88, art. 5º, XXXIII', 'Lei nº 12.527/2011', 'Lei nº 13.709/2018', 'Lei nº 9.784/1999, arts. 2º e 50'],
        jurisprudence: ['Transparência pública é regra constitucional, mas deve conviver com proteção de dados pessoais e sigilos legalmente protegidos.', 'Motivação é requisito essencial para controle de decisões administrativas que restrinjam direitos ou interesses.'],
        objectiveCharge: ['Princípios do processo administrativo.', 'Motivação obrigatória.', 'Transparência ativa e passiva.', 'Sigilo como exceção.', 'Dados pessoais e bases legais.', 'Conciliação entre LAI e LGPD.'],
        discursiveCharge: 'Pode cair como parecer sobre pedido de acesso à informação, negativa de protocolo, recurso administrativo, nulidade por falta de motivação ou divulgação de dados de servidores.',
        traps: ['LGPD não é desculpa genérica para negar LAI.', 'Transparência não autoriza expor dado pessoal desnecessário.', 'Processo administrativo não precisa imitar processo judicial, mas deve respeitar garantias quando houver afetação de direitos.', 'Motivação posterior não cura todo vício.'],
        differences: ['Transparência ativa x passiva.', 'Dado pessoal x dado pessoal sensível.', 'Publicidade x exposição indevida.', 'Processo administrativo x procedimento interno informal.', 'Anulação x convalidação no processo.'],
        commonMistakes: ['Negar informação sem fundamento.', 'Divulgar dados pessoais além do necessário.', 'Decidir processo sem motivação.', 'Ignorar prazo e recurso administrativo.'],
        miniCase: 'Jornal solicita lista de pagamentos feitos a fornecedores. A regra é transparência, com fornecimento dos dados públicos essenciais, protegendo apenas dados pessoais não necessários ou legalmente restritos.',
        activeQuestions: ['A informação é pública?', 'Há dado pessoal envolvido?', 'Existe hipótese legal de sigilo?', 'A decisão foi motivada?', 'Cabe recurso administrativo?', 'A finalidade do tratamento de dados é legítima?'],
        flashcards: [
          { front: 'Na LAI, sigilo é regra?', back: 'Não. Publicidade é regra; sigilo é exceção fundamentada.' },
          { front: 'LGPD impede transparência pública?', back: 'Não. Exige tratamento adequado, proporcional e com base legal.' },
          { front: 'Quando a motivação é essencial?', back: 'Especialmente em atos que negam, limitam, sancionam, anulam, revogam ou afetam direitos/interesses.' }
        ],
        summary: 'Processo administrativo, LAI e LGPD dão segurança às decisões municipais. O eixo é decidir com competência, motivação, transparência, proteção de dados e respeito às garantias.',
        checklist: ['Sei princípios do processo administrativo.', 'Sei quando motivar.', 'Sei regra da LAI.', 'Sei noções de LGPD na Administração.', 'Consigo resolver conflito entre acesso e proteção de dados.'],
        nextTopic: 'Próxima fase: Direito Constitucional Premium'
      }
    ]
  },
  {
  "id": "direito-constitucional",
  "subject": "Direito Constitucional",
  "status": "39B concluída",
  "priority": "Crítica",
  "overview": "Apostila premium de Direito Constitucional voltada ao cargo de Procurador Municipal: Constituição, poder constituinte, princípios fundamentais, direitos fundamentais, organização do Estado, competências municipais, Poderes, controle de constitucionalidade, Administração Pública constitucional e políticas públicas. A ênfase é raciocinar como Procuradoria: competência, validade, constitucionalidade, direitos fundamentais e defesa do Município.",
  "lawBase": [
    "Constituição Federal de 1988, texto compilado",
    "ADCT quando houver regra de transição relevante",
    "Jurisprudência constitucional do STF em repercussão geral, súmulas vinculantes e controle concentrado",
    "Lei Orgânica Municipal como desdobramento constitucional local"
  ],
  "topics": [
    {
      "id": "teoria-constituicao-poder-constituinte",
      "level": "básico",
      "title": "Teoria da Constituição, classificações, supremacia constitucional e poder constituinte",
      "whatIs": "É o estudo da Constituição como norma jurídica superior, sua estrutura, força normativa, formas de classificação e o modo pelo qual ela é criada ou alterada. Poder constituinte originário cria uma nova ordem constitucional; poder constituinte derivado reforma a Constituição dentro dos limites estabelecidos por ela.",
      "purpose": "Serve para identificar se uma lei municipal, ato administrativo, política pública ou decisão local respeita a Constituição. Para Procurador Municipal, esse tema orienta pareceres sobre constitucionalidade de projetos de lei, limites da Câmara, competência do prefeito e defesa de leis municipais em ações judiciais.",
      "plainExplanation": [
        "A Constituição ocupa o topo do sistema jurídico. Todas as leis, decretos, atos administrativos, contratos e políticas públicas precisam ser compatíveis com ela. Quando uma norma municipal contraria a Constituição, o problema não é apenas técnico: o Município pode sofrer ação direta de inconstitucionalidade no Tribunal de Justiça, controle difuso em processo judicial ou questionamento pelo Ministério Público.",
        "O poder constituinte originário é inicial, autônomo e juridicamente ilimitado em relação à ordem anterior. Já o poder constituinte derivado é limitado: deve respeitar procedimento, cláusulas pétreas e limites materiais. Em prova, a banca costuma perguntar se emenda constitucional pode abolir direitos fundamentais, separação dos Poderes, voto direto, secreto, universal e periódico ou forma federativa. A resposta é não, pois esses núcleos são protegidos.",
        "Supremacia constitucional significa que a Constituição não é conselho político; ela tem força normativa. O Procurador Municipal usa esse raciocínio para fundamentar a constitucionalidade de atos locais, adequar projetos legislativos, proteger competências do Município e evitar normas que invadam competência da União ou do Estado."
      ],
      "examTechnical": "Para prova, domine: Constituição formal e material; rígida, escrita, promulgada e analítica; supremacia constitucional; força normativa; eficácia das normas constitucionais; poder constituinte originário e derivado; limites ao poder de reforma; cláusulas pétreas. A banca gosta de trocar características: dizer que o poder derivado é ilimitado, que cláusula pétrea não impede reforma ou que norma constitucional programática não produz nenhum efeito.",
      "cityExample": "A Câmara aprova projeto que restringe direito fundamental sem base constitucional. O Procurador deve apontar a supremacia constitucional, verificar competência legislativa municipal e avaliar se a restrição é proporcional, necessária e formalmente válida.",
      "legalBase": [
        "CF/88, art. 1º",
        "CF/88, art. 5º",
        "CF/88, art. 60",
        "ADCT quando houver regras transitórias aplicáveis"
      ],
      "dryLaw": [
        "CF/88, arts. 1º a 4º",
        "CF/88, art. 5º",
        "CF/88, art. 60, especialmente §4º"
      ],
      "jurisprudence": [
        "O STF trata a Constituição como norma jurídica dotada de força vinculante e utiliza controle de constitucionalidade para retirar ou afastar normas incompatíveis.",
        "Cláusulas pétreas protegem núcleos constitucionais contra emendas tendentes à abolição, não impedindo qualquer alteração lateral que preserve o núcleo essencial."
      ],
      "objectiveCharge": [
        "Conceito de poder constituinte originário e derivado.",
        "Características da Constituição de 1988.",
        "Limites materiais ao poder de reforma.",
        "Eficácia das normas constitucionais.",
        "Supremacia constitucional aplicada a lei municipal."
      ],
      "discursiveCharge": "Pode aparecer como parecer sobre projeto de lei municipal incompatível com a Constituição, emenda à Lei Orgânica que viole separação de Poderes ou norma local que atinja direitos fundamentais sem fundamento constitucional.",
      "traps": [
        "Poder constituinte derivado não é ilimitado.",
        "Cláusula pétrea protege núcleo essencial, mas não congela toda disciplina constitucional.",
        "Norma programática não é inútil: orienta políticas públicas, controle e interpretação.",
        "Lei Orgânica não pode contrariar Constituição Federal nem Constituição Estadual."
      ],
      "differences": [
        "Constituição formal x material.",
        "Poder originário x derivado.",
        "Limite formal x material x circunstancial.",
        "Inconstitucionalidade formal x material."
      ],
      "commonMistakes": [
        "Decorar classificações sem aplicar em casos.",
        "Achar que Município pode resolver tudo por Lei Orgânica.",
        "Confundir reforma constitucional com poder constituinte originário."
      ],
      "miniCase": "Projeto de emenda à Lei Orgânica pretende permitir ao prefeito remanejar livremente todo o orçamento sem autorização legislativa. O parecer deve avaliar separação de Poderes, legalidade orçamentária, controle legislativo e simetria constitucional.",
      "activeQuestions": [
        "Qual norma superior controla a validade da lei municipal?",
        "O vício é formal ou material?",
        "Há competência municipal?",
        "Existe afronta a cláusula pétrea ou princípio estruturante?",
        "A Lei Orgânica pode inovar contra a Constituição?"
      ],
      "flashcards": [
        {
          "front": "Poder constituinte derivado é ilimitado?",
          "back": "Não. É juridicamente limitado pela própria Constituição."
        },
        {
          "front": "O que é supremacia constitucional?",
          "back": "É a posição superior da Constituição, que condiciona a validade das demais normas."
        },
        {
          "front": "Norma programática não tem efeito?",
          "back": "Tem efeitos interpretativos, vinculantes e de orientação para políticas públicas."
        }
      ],
      "summary": "Teoria da Constituição é a base para reconhecer validade normativa. Para Procurador Municipal, o ponto central é saber se o Município atuou dentro da competência e em harmonia com a Constituição.",
      "checklist": [
        "Sei diferenciar poder originário e derivado.",
        "Sei limites do art. 60.",
        "Sei aplicar supremacia constitucional a lei municipal.",
        "Sei separar vício formal e material.",
        "Consigo transformar o tema em parecer."
      ],
      "nextTopic": "Princípios fundamentais e Estado Democrático de Direito"
    },
    {
      "id": "principios-fundamentais-estado-democratico",
      "level": "básico",
      "title": "Princípios fundamentais, República, Federação, separação dos Poderes e objetivos constitucionais",
      "whatIs": "São os fundamentos estruturantes do Estado brasileiro: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político, forma republicana, federação, Estado Democrático de Direito e separação dos Poderes.",
      "purpose": "Servem como critérios de interpretação e controle de atos do Poder Público. Para o Município, orientam políticas públicas, legislação local, atuação administrativa, orçamento, transparência e proteção da população.",
      "plainExplanation": [
        "Os princípios fundamentais não ficam restritos ao início da Constituição. Eles irradiam efeitos sobre toda atuação municipal. Dignidade da pessoa humana, por exemplo, aparece em saúde, assistência social, moradia, acessibilidade, educação, saneamento e atendimento ao cidadão.",
        "A Federação significa distribuição constitucional de competências entre União, Estados, Distrito Federal e Municípios. O Município não é mero órgão do Estado; é ente federativo com autonomia política, administrativa, financeira e legislativa nos assuntos de interesse local.",
        "Separação dos Poderes não é isolamento absoluto. Legislativo fiscaliza, Executivo administra, Judiciário controla legalidade e constitucionalidade. O problema ocorre quando um Poder invade o núcleo de função típica do outro, como lei de iniciativa parlamentar criando atribuições administrativas específicas ou despesa sem observar regras constitucionais."
      ],
      "examTechnical": "Para prova, memorize fundamentos do art. 1º, objetivos do art. 3º, relações internacionais do art. 4º, forma federativa e separação dos Poderes. A banca costuma cobrar literalidade, mas também aplicação: lei municipal que cria obrigação administrativa pode violar separação de Poderes; política pública discriminatória viola igualdade e dignidade.",
      "cityExample": "Projeto de lei local impõe ao Executivo a criação de programa com estrutura, servidores e despesas específicas. O Procurador deve verificar iniciativa, separação dos Poderes, impacto orçamentário e compatibilidade com objetivos constitucionais.",
      "legalBase": [
        "CF/88, arts. 1º a 4º",
        "CF/88, art. 18",
        "CF/88, arts. 29 e 30",
        "CF/88, art. 2º"
      ],
      "dryLaw": [
        "CF/88, arts. 1º, 2º, 3º e 4º",
        "CF/88, art. 18",
        "CF/88, arts. 29 e 30"
      ],
      "jurisprudence": [
        "O STF frequentemente utiliza separação dos Poderes, autonomia federativa e dignidade da pessoa humana como parâmetros de controle de leis e atos públicos.",
        "A autonomia municipal é protegida constitucionalmente, mas deve ser exercida dentro das competências constitucionais."
      ],
      "objectiveCharge": [
        "Fundamentos da República.",
        "Objetivos fundamentais.",
        "Separação dos Poderes em caso concreto.",
        "Federação e autonomia municipal.",
        "Dignidade da pessoa humana em políticas públicas."
      ],
      "discursiveCharge": "Pode cair como parecer sobre projeto de lei municipal de iniciativa parlamentar, política pública local, atuação da Câmara, autonomia do Município ou conflito entre direito fundamental e orçamento.",
      "traps": [
        "Município tem autonomia, não soberania.",
        "Separação dos Poderes não impede controle judicial de ilegalidade.",
        "Objetivos fundamentais vinculam políticas públicas, mas não autorizam ignorar orçamento e competência.",
        "Dignidade não é argumento vazio: precisa ser conectada ao caso."
      ],
      "differences": [
        "Soberania x autonomia.",
        "Fundamentos x objetivos.",
        "Função típica x função atípica dos Poderes.",
        "Interesse local x competência privativa da União."
      ],
      "commonMistakes": [
        "Confundir Município com órgão estadual.",
        "Usar dignidade sem explicar impacto jurídico.",
        "Ignorar iniciativa reservada e separação de Poderes."
      ],
      "miniCase": "Vereador propõe lei obrigando o prefeito a criar uma secretaria específica. Há risco de vício de iniciativa e violação à separação dos Poderes, ainda que a intenção política seja relevante.",
      "activeQuestions": [
        "Qual fundamento constitucional está no caso?",
        "O Município tem competência?",
        "Há invasão de iniciativa?",
        "A medida realiza objetivo constitucional?",
        "Há impacto orçamentário?"
      ],
      "flashcards": [
        {
          "front": "Município tem soberania?",
          "back": "Não. Município tem autonomia federativa."
        },
        {
          "front": "Quais são fundamentos do art. 1º?",
          "back": "Soberania, cidadania, dignidade, valores sociais do trabalho e livre iniciativa, pluralismo político."
        },
        {
          "front": "Separação dos Poderes impede controle judicial?",
          "back": "Não. Impede substituição indevida da função típica, mas permite controle de legalidade e constitucionalidade."
        }
      ],
      "summary": "Princípios fundamentais são ferramentas de análise constitucional. Em Procuradoria, servem para avaliar competência, iniciativa, política pública, autonomia municipal e validade de atos normativos.",
      "checklist": [
        "Sei fundamentos e objetivos.",
        "Sei explicar autonomia municipal.",
        "Sei detectar vício de separação de Poderes.",
        "Consigo aplicar dignidade e igualdade sem genericidade.",
        "Consigo fazer parecer sobre iniciativa legislativa."
      ],
      "nextTopic": "Direitos e garantias fundamentais"
    },
    {
      "id": "direitos-garantias-fundamentais",
      "level": "intermediário",
      "title": "Direitos e garantias fundamentais: igualdade, liberdade, devido processo, remédios constitucionais e direitos sociais",
      "whatIs": "São posições jurídicas protegidas pela Constituição para limitar o poder estatal e assegurar condições mínimas de liberdade, igualdade, participação, proteção judicial e dignidade. Incluem direitos individuais, coletivos, sociais, políticos e garantias processuais.",
      "purpose": "Servem para orientar a atuação do Município e evitar atos que violem igualdade, contraditório, ampla defesa, liberdade, propriedade, acesso à informação, saúde, educação, assistência social e outros direitos constitucionais.",
      "plainExplanation": [
        "Direito fundamental não é apenas matéria penal ou judicial. Ele aparece todos os dias na prefeitura: processo disciplinar, concurso público, filas de saúde, matrícula escolar, assistência social, fiscalização, interdição de estabelecimento e acesso a documentos públicos.",
        "Garantias como devido processo legal, contraditório e ampla defesa são essenciais quando o Município aplica sanção, cancela benefício, anula ato favorável, rescinde contrato ou pune servidor. A Administração pode agir com autoridade, mas deve dar oportunidade de defesa quando a decisão afetar direitos ou interesses.",
        "Direitos sociais exigem prestações do Estado, mas a concretização deve considerar competência, orçamento, políticas públicas e mínimo existencial. O Procurador precisa equilibrar proteção de direitos e defesa responsável do erário, especialmente em ações de saúde, educação, creche e assistência."
      ],
      "examTechnical": "Para prova, domine art. 5º, remédios constitucionais, direitos sociais do art. 6º, nacionalidade e direitos políticos em noções gerais, eficácia vertical e horizontal, reserva do possível, mínimo existencial e judicialização de políticas públicas. A banca gosta de misturar direito, garantia e remédio constitucional.",
      "cityExample": "Munícipe impetra mandado de segurança contra negativa de medicamento. A Procuradoria deve avaliar direito à saúde, responsabilidade solidária dos entes, protocolos, prova médica, competência administrativa e eventual necessidade de direcionamento do cumprimento.",
      "legalBase": [
        "CF/88, art. 5º",
        "CF/88, art. 6º",
        "CF/88, arts. 196 a 200",
        "CF/88, arts. 205 a 214",
        "Lei nº 12.016/2009 para mandado de segurança"
      ],
      "dryLaw": [
        "CF/88, art. 5º, incisos XXXIII, XXXIV, LIV, LV, LXIX, LXX, LXXI, LXXII, LXXIII",
        "CF/88, art. 6º",
        "CF/88, arts. 196 e 205"
      ],
      "jurisprudence": [
        "O STF reconhece responsabilidade solidária dos entes federados em matéria de saúde, com necessidade de organizar o cumprimento conforme repartição administrativa.",
        "Devido processo, contraditório e ampla defesa são parâmetros constantes para controle de sanções administrativas e processos que afetem direitos."
      ],
      "objectiveCharge": [
        "Remédios constitucionais e hipóteses de cabimento.",
        "Contraditório e ampla defesa em processo administrativo.",
        "Direitos sociais e políticas públicas.",
        "Acesso à informação.",
        "Igualdade e vedação de discriminação."
      ],
      "discursiveCharge": "Pode cair como parecer em ação de saúde, vaga em creche, processo disciplinar sem defesa, pedido de informação, mandado de segurança contra ato municipal ou anulação de benefício administrativo.",
      "traps": [
        "Habeas data não é para qualquer pedido de informação pública; liga-se a dados pessoais do impetrante.",
        "Mandado de segurança exige direito líquido e certo.",
        "Ação popular protege patrimônio público, moralidade administrativa, meio ambiente e patrimônio histórico-cultural.",
        "Reserva do possível não pode ser alegada de modo genérico.",
        "Contraditório não é mera formalidade: deve permitir influência na decisão."
      ],
      "differences": [
        "Direito x garantia.",
        "Mandado de segurança x habeas data.",
        "Mínimo existencial x reserva do possível.",
        "Igualdade formal x igualdade material.",
        "Direito social x política pública discricionária."
      ],
      "commonMistakes": [
        "Alegar falta de orçamento sem prova.",
        "Ignorar competência dos entes em saúde.",
        "Confundir remédios constitucionais.",
        "Anular ato favorável sem contraditório quando houver situação consolidada."
      ],
      "miniCase": "Servidor recebe sanção sem acesso aos documentos do processo. O vício atinge contraditório e ampla defesa, podendo levar à nulidade do processo administrativo sancionador.",
      "activeQuestions": [
        "Qual direito fundamental foi afetado?",
        "Havia processo adequado?",
        "Existe prova documental suficiente?",
        "O remédio constitucional escolhido é correto?",
        "A defesa do Município precisa cumprir ou contestar?"
      ],
      "flashcards": [
        {
          "front": "Mandado de segurança protege o quê?",
          "back": "Direito líquido e certo não amparado por habeas corpus ou habeas data."
        },
        {
          "front": "Habeas data serve para quê?",
          "back": "Conhecer ou retificar dados pessoais em registros de entidades governamentais ou de caráter público."
        },
        {
          "front": "Reserva do possível basta por alegação genérica?",
          "back": "Não. Precisa de demonstração concreta e diálogo com mínimo existencial."
        }
      ],
      "summary": "Direitos fundamentais são limites e mandamentos para a Administração. Para Procurador, a boa resposta separa direito invocado, prova, competência, política pública, orçamento e providência juridicamente adequada.",
      "checklist": [
        "Sei remédios constitucionais.",
        "Sei devido processo administrativo.",
        "Sei noções de direitos sociais.",
        "Sei aplicar mínimo existencial e reserva do possível.",
        "Consigo responder caso de saúde/creche/servidor."
      ],
      "nextTopic": "Organização do Estado e competências municipais"
    },
    {
      "id": "organizacao-estado-competencias-municipais",
      "level": "avançado",
      "title": "Organização do Estado: Federação, autonomia municipal, competências e intervenção",
      "whatIs": "É o conjunto de regras que distribui competências entre União, Estados, Distrito Federal e Municípios, define autonomia dos entes e disciplina hipóteses excepcionais de intervenção.",
      "purpose": "Serve para saber se o Município pode legislar ou agir sobre determinado tema. Em Procuradoria Municipal, competência é o primeiro filtro de validade de leis, decretos, contratos, políticas públicas e atos de fiscalização.",
      "plainExplanation": [
        "A Constituição reconhece o Município como ente federativo. Isso significa autonomia para auto-organização por Lei Orgânica, autogoverno, autoadministração e autolegislação nos limites constitucionais. O Município cuida especialmente de interesse local e suplementa legislação federal e estadual quando couber.",
        "Interesse local não significa assunto pequeno; significa predominância do interesse municipal. Transporte coletivo local, uso do solo urbano, posturas municipais, horário de funcionamento, limpeza urbana e serviços locais costumam aparecer nesse campo. Mas o Município não pode invadir competência privativa da União, como direito civil, penal, processual, trânsito em normas gerais e licitações em normas gerais.",
        "A competência suplementar permite adaptar normas gerais à realidade local. O erro comum é achar que suplementar significa contrariar norma federal. Suplementar é completar, detalhar e executar dentro do espaço constitucional."
      ],
      "examTechnical": "Para prova, leia arts. 18, 21 a 24, 29 e 30. Foque em competência municipal: legislar sobre interesse local, suplementar legislação federal e estadual, instituir e arrecadar tributos, organizar serviços públicos locais, promover ordenamento territorial, proteção do patrimônio histórico-cultural local e cooperação em saúde/educação. A banca cobra muito conflito de competência.",
      "cityExample": "Lei municipal disciplina horário de funcionamento de comércio local por razões de ordenamento urbano. O Procurador deve avaliar interesse local, eventual impacto em livre iniciativa, competência da União para direito comercial/trabalhista e proporcionalidade da medida.",
      "legalBase": [
        "CF/88, art. 18",
        "CF/88, arts. 21 a 24",
        "CF/88, art. 29",
        "CF/88, art. 30",
        "CF/88, art. 182"
      ],
      "dryLaw": [
        "CF/88, arts. 18, 22, 23, 24, 29 e 30",
        "CF/88, art. 182"
      ],
      "jurisprudence": [
        "O STF reconhece autonomia municipal para assuntos de interesse local, mas invalida leis municipais que invadam competência privativa da União ou contrariem normas gerais.",
        "Em conflitos federativos, a análise costuma verificar predominância do interesse e presença de norma geral nacional."
      ],
      "objectiveCharge": [
        "Competências privativas, comuns e concorrentes.",
        "Interesse local.",
        "Competência suplementar.",
        "Autonomia municipal.",
        "Intervenção e limites federativos."
      ],
      "discursiveCharge": "Pode cair como parecer sobre projeto de lei municipal, ação direta de inconstitucionalidade estadual, defesa de autuação municipal, regulamentação urbana, serviço público local ou conflito com lei estadual/federal.",
      "traps": [
        "Interesse local não autoriza invadir direito civil, penal ou processual.",
        "Competência comum para executar política pública não significa competência legislativa plena.",
        "Suplementar não é contrariar.",
        "Município integra a Federação, mas não tem soberania.",
        "Lei Orgânica deve respeitar Constituição Federal e Estadual."
      ],
      "differences": [
        "Competência privativa x comum x concorrente.",
        "Interesse local x interesse regional/nacional.",
        "Norma geral x norma suplementar.",
        "Autonomia x soberania.",
        "Auto-organização x livre criação de regras contrárias à Constituição."
      ],
      "commonMistakes": [
        "Responder competência apenas por “é assunto municipal” sem fundamentar.",
        "Confundir interesse local com qualquer impacto local.",
        "Ignorar normas gerais federais.",
        "Esquecer o art. 30."
      ],
      "miniCase": "Município cria regra própria de licitação contrariando norma geral da Lei nº 14.133/2021. Há forte risco de inconstitucionalidade por invasão de competência da União para normas gerais.",
      "activeQuestions": [
        "Qual ente tem competência?",
        "O tema é interesse local?",
        "Existe norma geral federal?",
        "A lei municipal suplementa ou contraria?",
        "A matéria é administrativa, civil, penal, processual ou urbanística?"
      ],
      "flashcards": [
        {
          "front": "Qual artigo concentra competências municipais?",
          "back": "Art. 30 da Constituição Federal."
        },
        {
          "front": "Município pode suplementar lei federal?",
          "back": "Sim, no que couber e sem contrariar norma geral."
        },
        {
          "front": "Interesse local é o mesmo que assunto sem impacto externo?",
          "back": "Não. É predominância do interesse municipal no caso concreto."
        }
      ],
      "summary": "Competência é filtro eliminatório. Antes de discutir mérito, o Procurador deve perguntar: o Município pode legislar ou agir sobre isso? A resposta passa por arts. 18, 29 e 30 da Constituição.",
      "checklist": [
        "Sei art. 30.",
        "Sei separar competência privativa, comum e concorrente.",
        "Sei identificar interesse local.",
        "Sei competência suplementar.",
        "Consigo defender ou apontar inconstitucionalidade de lei municipal."
      ],
      "nextTopic": "Organização dos Poderes e funções essenciais à Justiça"
    },
    {
      "id": "organizacao-poderes-funcoes-essenciais",
      "level": "intermediário",
      "title": "Organização dos Poderes, processo legislativo municipal e funções essenciais à Justiça",
      "whatIs": "É o estudo da estrutura do Legislativo, Executivo e Judiciário, suas funções típicas e atípicas, processo legislativo, fiscalização, controle e órgãos essenciais à Justiça, como Ministério Público, Advocacia Pública, Defensoria e advocacia.",
      "purpose": "Serve para orientar validade de leis municipais, iniciativa legislativa, sanção e veto, fiscalização da Câmara, atuação do prefeito e papel institucional da Procuradoria Municipal.",
      "plainExplanation": [
        "No Município, os conflitos mais comuns envolvem Câmara e Prefeito. A Câmara legisla e fiscaliza; o Executivo administra e executa políticas públicas. Uma lei pode ser inconstitucional se invade iniciativa do prefeito, cria atribuições para órgãos municipais, interfere na gestão administrativa ou gera despesa sem observância constitucional.",
        "Processo legislativo deve observar iniciativa, quórum, deliberação, sanção, veto, promulgação e publicação. A forma importa porque vício formal pode derrubar a lei inteira, ainda que o conteúdo pareça bom.",
        "A Procuradoria Municipal não é apenas setor de processos. Ela atua como função jurídica do Município, emitindo pareceres, defendendo leis, orientando gestores, prevenindo nulidades e protegendo o interesse público juridicamente qualificado."
      ],
      "examTechnical": "Para prova, domine separação dos Poderes, funções típicas/atípicas, processo legislativo, iniciativa reservada, controle legislativo, fiscalização financeira e papel das funções essenciais à Justiça. Em âmbito municipal, aplique por simetria com cautela e sempre considerando Constituição Federal, Constituição Estadual e Lei Orgânica.",
      "cityExample": "Projeto de iniciativa parlamentar obriga o Executivo a instalar câmeras em todas as escolas no prazo de 30 dias, cria obrigações a secretarias e gera despesa. O parecer deve avaliar iniciativa, separação de Poderes, orçamento, razoabilidade e eventual vício formal.",
      "legalBase": [
        "CF/88, art. 2º",
        "CF/88, arts. 44 a 69 por simetria quando aplicável",
        "CF/88, arts. 70 a 75",
        "CF/88, arts. 127 a 135",
        "CF/88, arts. 29 e 31"
      ],
      "dryLaw": [
        "CF/88, art. 2º",
        "CF/88, arts. 29, 31, 61, 70 a 75, 127 a 135"
      ],
      "jurisprudence": [
        "O STF e os Tribunais de Justiça costumam invalidar leis de iniciativa parlamentar que invadem a organização administrativa do Executivo ou violam iniciativa reservada.",
        "A advocacia pública exerce função essencial à Justiça e à juridicidade administrativa, especialmente na defesa do ente público e consultoria jurídica."
      ],
      "objectiveCharge": [
        "Separação dos Poderes.",
        "Iniciativa legislativa.",
        "Sanção e veto.",
        "Controle externo.",
        "Funções essenciais à Justiça.",
        "Papel da Procuradoria."
      ],
      "discursiveCharge": "Pode cair como parecer sobre projeto de lei, veto, promulgação, fiscalização da Câmara, convocação de secretário, criação de cargos, organização administrativa ou defesa de lei municipal em ADI estadual.",
      "traps": [
        "Boa intenção legislativa não cura vício de iniciativa.",
        "Câmara fiscaliza, mas não administra.",
        "Prefeito não pode ignorar lei válida por discordância política.",
        "Sanção não convalida vício de iniciativa em hipóteses relevantes de reserva constitucional.",
        "Controle externo não é subordinação do Executivo ao Legislativo."
      ],
      "differences": [
        "Função típica x atípica.",
        "Iniciativa comum x iniciativa reservada.",
        "Veto político x veto jurídico.",
        "Fiscalização legislativa x gestão administrativa.",
        "Procuradoria consultiva x contenciosa."
      ],
      "commonMistakes": [
        "Analisar só mérito e esquecer iniciativa.",
        "Achar que sanção sempre convalida vício.",
        "Confundir fiscalização com ingerência direta.",
        "Ignorar Lei Orgânica e Constituição Estadual."
      ],
      "miniCase": "A Câmara aprova lei criando atribuições detalhadas para a Secretaria de Saúde. Mesmo que a política seja desejável, pode haver vício de iniciativa e violação à separação dos Poderes.",
      "activeQuestions": [
        "Quem iniciou o projeto?",
        "Existe iniciativa reservada?",
        "A lei cria despesa ou estrutura administrativa?",
        "O veto deve ser jurídico ou político?",
        "Qual papel da Procuradoria no parecer?"
      ],
      "flashcards": [
        {
          "front": "Câmara Municipal administra?",
          "back": "Não. Sua função típica é legislar e fiscalizar."
        },
        {
          "front": "Sanção convalida vício de iniciativa?",
          "back": "Em regra, não se deve presumir convalidação de vício constitucional de iniciativa reservada."
        },
        {
          "front": "Procuradoria só atua em processo judicial?",
          "back": "Não. Atua consultiva e contenciosamente, prevenindo ilegalidades e defendendo o Município."
        }
      ],
      "summary": "Organização dos Poderes no Município é tema de alta incidência prática. O foco deve ser iniciativa, separação dos Poderes, fiscalização e validade do processo legislativo.",
      "checklist": [
        "Sei detectar vício de iniciativa.",
        "Sei funções da Câmara e do prefeito.",
        "Sei noções de processo legislativo.",
        "Sei papel da Procuradoria.",
        "Consigo emitir parecer sobre projeto de lei."
      ],
      "nextTopic": "Controle de constitucionalidade"
    },
    {
      "id": "controle-constitucionalidade",
      "level": "avançado",
      "title": "Controle de constitucionalidade: difuso, concentrado, leis municipais e atuação da Procuradoria",
      "whatIs": "É o mecanismo jurídico que verifica se leis e atos normativos são compatíveis com a Constituição. Pode ocorrer de forma difusa, em qualquer processo concreto, ou concentrada, em ações específicas perante tribunais competentes.",
      "purpose": "Serve para proteger a supremacia constitucional. Para Procurador Municipal, é ferramenta central para defender leis municipais válidas, reconhecer riscos de inconstitucionalidade e orientar revogação, alteração ou veto de normas problemáticas.",
      "plainExplanation": [
        "Controle difuso ocorre em um caso concreto: o juiz afasta a aplicação de norma incompatível com a Constituição para resolver aquela demanda. Controle concentrado discute a validade da norma em tese, com efeitos mais amplos, em ações como ADI, ADC, ADPF e, no âmbito estadual, ADI contra lei municipal perante Tribunal de Justiça quando o parâmetro for Constituição Estadual.",
        "Lei municipal pode ser questionada no Tribunal de Justiça por violar Constituição Estadual, inclusive normas de reprodução obrigatória da Constituição Federal. Também pode sofrer controle difuso em ações individuais ou coletivas. O Procurador deve saber montar defesa mostrando competência, iniciativa correta, proporcionalidade e compatibilidade com direitos fundamentais.",
        "Antes de judicializar, o melhor controle é preventivo: parecer jurídico no projeto de lei, análise de competência, iniciativa, impacto, constitucionalidade material e técnica legislativa. Procuradoria forte evita leis vulneráveis."
      ],
      "examTechnical": "Para prova, domine controle preventivo e repressivo, político e judicial, difuso e concentrado, cláusula de reserva de plenário, súmula vinculante, modulação de efeitos, interpretação conforme e declaração parcial de nulidade sem redução de texto. Para Município, atenção à ADI estadual contra lei municipal.",
      "cityExample": "Lei municipal sobre trânsito cria infrações e penalidades próprias além do CTB. O Procurador deve avaliar invasão de competência da União, risco de ADI e possibilidade de veto ou revogação orientada.",
      "legalBase": [
        "CF/88, arts. 97, 102, 103 e 125, §2º",
        "CF/88, art. 30",
        "Lei nº 9.868/1999",
        "Lei nº 9.882/1999",
        "Súmula Vinculante nº 10"
      ],
      "dryLaw": [
        "CF/88, art. 97",
        "CF/88, arts. 102 e 103",
        "CF/88, art. 125, §2º",
        "Lei nº 9.868/1999",
        "Lei nº 9.882/1999"
      ],
      "jurisprudence": [
        "A cláusula de reserva de plenário exige órgão especial ou plenário para declaração de inconstitucionalidade por tribunal.",
        "Tribunais de Justiça podem controlar lei municipal frente à Constituição Estadual, inclusive normas de reprodução obrigatória."
      ],
      "objectiveCharge": [
        "Diferença entre controle difuso e concentrado.",
        "Reserva de plenário.",
        "ADI estadual contra lei municipal.",
        "Controle preventivo por veto jurídico.",
        "Efeitos da decisão e modulação."
      ],
      "discursiveCharge": "Pode cair como parecer de defesa em ADI estadual, nota técnica para veto, manifestação em ação civil pública, decisão sobre cumprimento de súmula vinculante ou revisão de lei municipal inconstitucional.",
      "traps": [
        "Juiz singular pode afastar norma no caso concreto, mas tribunal deve observar reserva de plenário.",
        "ADI municipal no TJ não usa Constituição Federal como parâmetro direto, salvo reprodução na Constituição Estadual.",
        "Controle preventivo não é só político: parecer jurídico e veto jurídico são fundamentais.",
        "Interpretação conforme preserva texto quando houver leitura constitucional possível."
      ],
      "differences": [
        "Difuso x concentrado.",
        "Inconstitucionalidade formal x material.",
        "Controle preventivo x repressivo.",
        "Interpretação conforme x nulidade parcial sem redução de texto.",
        "Efeito erga omnes x inter partes."
      ],
      "commonMistakes": [
        "Confundir ADI federal com ADI estadual.",
        "Esquecer art. 125, §2º.",
        "Achar que toda decisão difusa vale para todos automaticamente.",
        "Não identificar parâmetro de controle."
      ],
      "miniCase": "Associação propõe ADI no TJ contra lei municipal de iniciativa parlamentar que cria obrigações para secretarias. A Procuradoria deve defender se possível, ou reconhecer fragilidade por vício de iniciativa e sugerir correção legislativa.",
      "activeQuestions": [
        "Qual norma é objeto?",
        "Qual Constituição é parâmetro?",
        "O vício é formal ou material?",
        "O controle é difuso ou concentrado?",
        "Há possibilidade de interpretação conforme?"
      ],
      "flashcards": [
        {
          "front": "O que é reserva de plenário?",
          "back": "Regra do art. 97: tribunal só declara inconstitucionalidade por maioria absoluta do plenário ou órgão especial."
        },
        {
          "front": "Lei municipal pode ser objeto de ADI no TJ?",
          "back": "Sim, frente à Constituição Estadual, inclusive normas de reprodução obrigatória."
        },
        {
          "front": "Controle preventivo existe?",
          "back": "Sim, ocorre antes da norma nascer, por análise legislativa, parecer e veto jurídico."
        }
      ],
      "summary": "Controle de constitucionalidade é essencial para Procurador. O objetivo é prevenir leis inválidas, defender normas válidas e saber reconhecer riscos constitucionais com técnica.",
      "checklist": [
        "Sei controle difuso e concentrado.",
        "Sei reserva de plenário.",
        "Sei ADI estadual contra lei municipal.",
        "Sei efeitos das decisões.",
        "Consigo elaborar parecer de constitucionalidade."
      ],
      "nextTopic": "Administração Pública na Constituição"
    },
    {
      "id": "administracao-publica-constitucional",
      "level": "lei seca",
      "title": "Administração Pública na Constituição: art. 37, servidores, concurso, cargos, remuneração e responsabilidade",
      "whatIs": "É o conjunto de regras constitucionais que disciplinam a Administração Pública direta e indireta, princípios, concursos, cargos, funções, remuneração, acumulação, responsabilidade e controle.",
      "purpose": "Serve como base constitucional para praticamente todo parecer municipal sobre servidores, concurso público, nomeações, cargos em comissão, contratação temporária, remuneração, nepotismo, publicidade e responsabilidade estatal.",
      "plainExplanation": [
        "O art. 37 da Constituição é um dos dispositivos mais importantes para Procurador Municipal. Ele estabelece princípios, concurso público, validade do concurso, cargos em comissão, funções de confiança, contratação temporária, teto remuneratório, vedação de acumulações indevidas, publicidade e responsabilidade civil do Estado.",
        "Concurso público é regra para ingresso em cargo ou emprego público. Cargos em comissão são exceção e devem se destinar a direção, chefia e assessoramento, não a funções permanentes técnicas ou burocráticas. Função de confiança só pode ser exercida por servidor efetivo.",
        "Nepotismo decorre diretamente dos princípios constitucionais da Administração Pública. A vedação não depende de lei local específica, pois impessoalidade e moralidade já bastam como fundamento. Em Município, esse tema aparece em nomeação de parentes para cargos comissionados e contratações indiretas."
      ],
      "examTechnical": "Para prova, leia art. 37 inteiro com atenção. Foque em concurso, validade, cargos em comissão, função de confiança, contratação temporária, acumulação, teto, publicidade oficial, improbidade, responsabilidade civil e acesso a cargos por brasileiros e estrangeiros na forma da lei. A banca costuma cobrar exceções e literalidade.",
      "cityExample": "Prefeito pretende nomear parente para cargo comissionado de assessoramento. O Procurador deve verificar nepotismo, natureza do cargo, qualificação, subordinação, moralidade e impessoalidade, considerando a vedação constitucional e entendimento sumulado.",
      "legalBase": [
        "CF/88, art. 37",
        "CF/88, arts. 39 a 41",
        "CF/88, art. 169",
        "Súmula Vinculante nº 13 do STF",
        "Lei local de cargos e estatuto municipal"
      ],
      "dryLaw": [
        "CF/88, art. 37, caput e incisos I a XXI",
        "CF/88, art. 37, §1º, §4º e §6º",
        "CF/88, arts. 39, 40 e 41"
      ],
      "jurisprudence": [
        "A Súmula Vinculante nº 13 veda nepotismo na Administração Pública direta e indireta de todos os Poderes e entes federativos.",
        "O STF entende que a vedação ao nepotismo decorre diretamente dos princípios do art. 37, não dependendo de lei formal específica."
      ],
      "objectiveCharge": [
        "Princípios expressos do art. 37.",
        "Concurso público e exceções.",
        "Cargos em comissão e funções de confiança.",
        "Nepotismo.",
        "Publicidade oficial sem promoção pessoal.",
        "Responsabilidade civil do Estado."
      ],
      "discursiveCharge": "Pode cair como parecer sobre concurso, contratação temporária, nomeação de comissionado, nepotismo, acumulação de cargos, pagamento de vantagem, publicidade institucional ou ação indenizatória.",
      "traps": [
        "Cargo em comissão não serve para burlar concurso.",
        "Função de confiança é apenas para servidor efetivo.",
        "Publicidade oficial não pode promover autoridade.",
        "Nepotismo não exige lei municipal para ser proibido.",
        "Responsabilidade objetiva exige dano e nexo; não é automática."
      ],
      "differences": [
        "Cargo efetivo x cargo em comissão.",
        "Cargo em comissão x função de confiança.",
        "Contratação temporária x terceirização x concurso.",
        "Publicidade institucional x promoção pessoal.",
        "Responsabilidade objetiva x ação regressiva."
      ],
      "commonMistakes": [
        "Ler art. 37 só pelo caput.",
        "Achar que qualquer cargo comissionado é válido.",
        "Ignorar SV 13.",
        "Confundir função de confiança com cargo em comissão.",
        "Esquecer prazo de validade do concurso."
      ],
      "miniCase": "Lei municipal cria dezenas de cargos em comissão com atribuições genéricas de atendimento e rotina administrativa. O parecer deve apontar risco de burla ao concurso e necessidade de funções de direção, chefia ou assessoramento reais.",
      "activeQuestions": [
        "O ingresso exige concurso?",
        "O cargo comissionado tem atribuições de chefia/direção/assessoramento?",
        "Existe nepotismo?",
        "Há promoção pessoal na publicidade?",
        "Houve dano e nexo na responsabilidade estatal?"
      ],
      "flashcards": [
        {
          "front": "Quais princípios estão no caput do art. 37?",
          "back": "Legalidade, impessoalidade, moralidade, publicidade e eficiência."
        },
        {
          "front": "Função de confiança pode ser exercida por qualquer pessoa?",
          "back": "Não. É exclusiva de servidor ocupante de cargo efetivo."
        },
        {
          "front": "Nepotismo precisa de lei municipal para ser vedado?",
          "back": "Não. Decorre dos princípios constitucionais do art. 37."
        }
      ],
      "summary": "Art. 37 é núcleo duro para Procurador Municipal. Estude literalidade, exceções e casos práticos de concurso, cargos, nepotismo, publicidade e responsabilidade.",
      "checklist": [
        "Sei art. 37.",
        "Sei concurso e exceções.",
        "Sei cargo em comissão e função de confiança.",
        "Sei nepotismo.",
        "Consigo responder caso de servidor municipal."
      ],
      "nextTopic": "Ordem econômica, social e políticas públicas municipais"
    },
    {
      "id": "ordem-economica-social-politicas-publicas",
      "level": "discursiva",
      "title": "Ordem econômica, ordem social, saúde, educação, meio ambiente, urbanismo e políticas públicas",
      "whatIs": "São normas constitucionais que orientam a atividade econômica, serviços públicos, direitos sociais, saúde, educação, assistência, meio ambiente, cultura, família, criança, adolescente, idoso e política urbana.",
      "purpose": "Servem para orientar a atuação municipal em políticas públicas e para defender ou ajustar ações judiciais sobre saúde, creche, educação, moradia, saneamento, meio ambiente e ordenamento urbano.",
      "plainExplanation": [
        "A Constituição não trata apenas da estrutura do Estado; ela define finalidades sociais. Saúde é direito de todos e dever do Estado. Educação é direito de todos e dever do Estado e da família. Meio ambiente equilibrado é direito de todos e dever do Poder Público e da coletividade. Política urbana busca ordenar o pleno desenvolvimento das funções sociais da cidade.",
        "O Município executa muitas políticas públicas na ponta. Por isso, ações judiciais de saúde, creche, transporte, assistência, acessibilidade, saneamento e meio ambiente chegam diretamente à Procuradoria. A resposta jurídica deve reconhecer direitos, mas também organizar competência, orçamento, fila, critérios técnicos, protocolos e cumprimento adequado.",
        "Em prova discursiva, não basta dizer “direito fundamental”. É preciso construir solução: competência do Município, norma constitucional, política pública existente, limites orçamentários demonstrados, prioridade do mínimo existencial, possibilidade de acordo, obrigação de fazer, prazo razoável e prevenção de efeito multiplicador desorganizado."
      ],
      "examTechnical": "Para prova, leia arts. 170, 174, 182, 196 a 200, 205 a 214, 225 e principais normas de proteção social. Foque em função social da propriedade, política urbana, saúde, educação, meio ambiente, controle judicial de políticas públicas, mínimo existencial, reserva do possível e separação dos Poderes.",
      "cityExample": "Ação civil pública exige do Município criação imediata de vagas em creche. O Procurador deve avaliar direito à educação infantil, fila, orçamento, plano de expansão, possibilidade de cronograma judicial, reserva do possível comprovada e prioridade constitucional da criança.",
      "legalBase": [
        "CF/88, arts. 170 e 174",
        "CF/88, arts. 182 e 183",
        "CF/88, arts. 196 a 200",
        "CF/88, arts. 205 a 214",
        "CF/88, art. 225",
        "Estatuto da Cidade e legislação setorial quando aplicável"
      ],
      "dryLaw": [
        "CF/88, arts. 170, 182, 196, 205, 208 e 225"
      ],
      "jurisprudence": [
        "O STF admite controle judicial de políticas públicas quando há omissão inconstitucional ou violação ao mínimo existencial, sem transformar o Judiciário em gestor universal de escolhas administrativas.",
        "Na saúde, há entendimento de responsabilidade solidária dos entes federativos, com organização do cumprimento conforme regras administrativas do SUS."
      ],
      "objectiveCharge": [
        "Direito à saúde.",
        "Educação infantil e creche.",
        "Função social da propriedade.",
        "Política urbana.",
        "Meio ambiente.",
        "Reserva do possível e mínimo existencial.",
        "Controle judicial de políticas públicas."
      ],
      "discursiveCharge": "Pode cair como parecer em ação de saúde, vaga em creche, obrigação ambiental, regularização urbana, política habitacional, plano diretor, interdição de atividade econômica ou cumprimento de sentença coletiva.",
      "traps": [
        "Reserva do possível não é frase mágica.",
        "Judiciário pode controlar omissão, mas não deve gerir todos os detalhes sem critério.",
        "Função social limita propriedade, mas exige base legal e devido processo.",
        "Meio ambiente permite responsabilidade em múltiplas esferas.",
        "Saúde solidária não elimina organização administrativa do cumprimento."
      ],
      "differences": [
        "Mínimo existencial x reserva do possível.",
        "Direito individual x política pública coletiva.",
        "Função social x desapropriação.",
        "Controle judicial x escolha administrativa legítima.",
        "Competência comum x execução administrativa."
      ],
      "commonMistakes": [
        "Negar direito social de forma genérica.",
        "Não apresentar dados orçamentários.",
        "Ignorar fila administrativa.",
        "Confundir direito à saúde com fornecimento automático de qualquer pedido sem prova técnica.",
        "Esquecer política urbana no Direito Constitucional."
      ],
      "miniCase": "Munícipe pede medicamento experimental fora da lista pública. A Procuradoria deve avaliar laudo, registro sanitário, alternativas terapêuticas, protocolos, responsabilidade dos entes e possibilidade de cumprimento organizado.",
      "activeQuestions": [
        "Qual direito social está em jogo?",
        "Há mínimo existencial?",
        "Existe política pública ou fila?",
        "O Município tem competência de execução?",
        "A defesa comprovou limites concretos?",
        "Há solução administrativa possível?"
      ],
      "flashcards": [
        {
          "front": "Reserva do possível pode ser genérica?",
          "back": "Não. Deve ser demonstrada concretamente e ponderada com mínimo existencial."
        },
        {
          "front": "Saúde é dever de qual ente?",
          "back": "É dever do Estado em sentido amplo; a jurisprudência reconhece responsabilidade solidária, com organização do cumprimento."
        },
        {
          "front": "Política urbana está onde na Constituição?",
          "back": "Principalmente nos arts. 182 e 183."
        }
      ],
      "summary": "Ordem social e econômica transformam a Constituição em guia de políticas públicas. Para Procurador, o desafio é proteger direitos sem perder competência, orçamento, protocolos e gestão responsável.",
      "checklist": [
        "Sei saúde, educação e meio ambiente na Constituição.",
        "Sei mínimo existencial e reserva do possível.",
        "Sei política urbana constitucional.",
        "Consigo montar parecer de ação de saúde/creche.",
        "Sei equilibrar direito e gestão pública."
      ],
      "nextTopic": "Próxima fase: Processo Civil e Direito Civil Premium"
    }
  ]
}
];

export function getApostilaStats(progress = {}) {
  const total = premiumApostilaSubjects.reduce((sum, subject) => sum + subject.topics.length, 0);
  const done = Object.values(progress.studied || {}).flat().length;
  return { total, done, percent: Math.round((done / Math.max(total, 1)) * 100) };
}

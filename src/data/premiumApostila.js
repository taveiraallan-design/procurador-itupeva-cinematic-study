export const premiumApostilaMeta = {
  phase: 'Fase 39J',
  title: 'Apostila Explicada Premium por Tópico',
  subtitle: 'Apostila premium completa: Administrativo + Constitucional + Processo/Civil + Tributário/Financeiro/Orçamentário + Legislação Municipal + Penal/Processo Penal + Trabalho/Processo do Trabalho + Direito Urbanístico + Direito Ambiental + Língua Portuguesa — Concurso Público nº 003/2026 • Procurador Municipal de Itupeva/SP',
  sourceNote: 'Conteúdo estruturado a partir do Anexo III do edital e de legislação oficial. Material explicativo, autoral e para estudo; sempre conferir a lei seca atualizada antes da prova.',
  nextPhases: [
    'Fase 39 concluída — todas as matérias do edital estão na Apostila Premium'
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
,
  {
    id: 'processo-civil-direito-civil',
    subject: 'Direito Processual Civil e Direito Civil',
    status: '39C concluída',
    priority: 'Crítica',
    overview: 'Apostila premium para a atuação do Procurador Municipal em juízo e em parecer: normas fundamentais do CPC, jurisdição, competência, partes, atos processuais, tutelas, provas, sentença, recursos, precedentes, Fazenda Pública em juízo, execução, cumprimento de sentença, além de LINDB, pessoas, bens, fatos jurídicos, negócios jurídicos, prescrição, decadência, obrigações, contratos, responsabilidade civil, posse, propriedade e direitos reais.',
    lawBase: ['Código de Processo Civil — Lei nº 13.105/2015', 'Código Civil — Lei nº 10.406/2002', 'LINDB — Decreto-Lei nº 4.657/1942', 'Constituição Federal, especialmente contraditório, ampla defesa, devido processo e Administração Pública', 'Lei nº 6.830/1980 como referência de execução fiscal quando estudada em conjunto com Tributário'],
    topics: [
      {
        id: 'cpc-normas-fundamentais',
        level: 'básico',
        title: 'Normas fundamentais do Processo Civil, devido processo, contraditório, cooperação e boa-fé processual',
        whatIs: 'São as regras e princípios que orientam todo o processo civil brasileiro. Elas dizem como o processo deve funcionar para ser justo, efetivo, contraditório, cooperativo e compatível com a Constituição.',
        purpose: 'Servem para impedir processo-surpresa, decisões arbitrárias e formalismo inútil. Para o Procurador Municipal, orientam manifestações, defesas, recursos, cumprimento de decisões e atuação institucional ética.',
        plainExplanation: [
          'O processo não é apenas uma sequência de prazos. Ele é um método constitucional de solução de conflitos. Por isso, o CPC começa afirmando que o processo deve ser ordenado, disciplinado e interpretado conforme a Constituição. Isso significa que contraditório, ampla defesa, duração razoável, fundamentação das decisões e isonomia não são detalhes: são a base do jogo processual.',
          'Contraditório não é só ser avisado. É poder influenciar a decisão. Uma decisão que usa fundamento não debatido pode violar a lógica do contraditório substancial. Boa-fé processual exige que as partes não criem incidentes artificiais, não omitam informação relevante e não abusem de faculdades processuais.',
          'A cooperação processual não transforma adversários em parceiros românticos. Ela impõe que juiz e partes atuem para uma decisão de mérito justa e efetiva, sem armadilhas procedimentais desnecessárias.'
        ],
        examTechnical: 'Para prova, domine CPC arts. 1º a 12. A banca costuma cobrar contraditório substancial, vedação à decisão surpresa, ordem cronológica, primazia da decisão de mérito, boa-fé, cooperação e fundamentação. Em Procuradoria, use isso para sustentar nulidades, pedir saneamento, justificar complementação de documentos e combater decisões sem fundamentação adequada.',
        cityExample: 'O Município é condenado com base em tese jurídica não debatida, sem intimação prévia. A Procuradoria pode alegar violação ao contraditório substancial e pedir anulação ou integração da decisão, demonstrando prejuízo à defesa.',
        legalBase: ['CPC, arts. 1º a 12', 'CF/88, art. 5º, LIV e LV', 'CF/88, art. 93, IX'],
        dryLaw: ['CPC, arts. 1º, 4º, 6º, 7º, 9º, 10 e 11', 'CF/88, art. 5º, LIV e LV', 'CF/88, art. 93, IX'],
        jurisprudence: ['Decisões devem ser fundamentadas de forma adequada, enfrentando argumentos capazes de infirmar a conclusão adotada.', 'A vedação à decisão surpresa é uma das expressões do contraditório substancial no CPC de 2015.'],
        objectiveCharge: ['Normas fundamentais do CPC.', 'Contraditório x ampla defesa.', 'Decisão surpresa.', 'Boa-fé processual.', 'Cooperação.', 'Primazia do julgamento de mérito.'],
        discursiveCharge: 'Pode cair em parecer ou peça sobre nulidade processual, decisão sem fundamentação, indeferimento abrupto de prova ou sentença fundada em tese não discutida.',
        traps: ['Contraditório não é mera ciência formal.', 'Boa-fé processual vale também para a Fazenda Pública.', 'Celeridade não autoriza atropelar defesa.', 'Fundamentação não é copiar norma sem aplicar ao caso.'],
        differences: ['Contraditório formal x contraditório substancial.', 'Duração razoável x pressa processual.', 'Boa-fé subjetiva x boa-fé objetiva processual.', 'Cooperação x renúncia à defesa.'],
        commonMistakes: ['Invocar nulidade sem demonstrar prejuízo.', 'Confundir cooperação com perda da combatividade processual.', 'Esquecer CPC art. 10 em decisões-surpresa.', 'Não pedir saneamento antes de alegar nulidade.'],
        miniCase: 'Juiz extingue ação contra o Município por prescrição usando termo inicial nunca debatido. A Procuradoria pode apontar violação ao art. 10 do CPC e pedir manifestação prévia sobre o fundamento.',
        activeQuestions: ['A parte teve chance real de influenciar a decisão?', 'Houve fundamento surpresa?', 'A decisão enfrentou argumentos relevantes?', 'A nulidade causou prejuízo?', 'O pedido favorece julgamento de mérito?'],
        flashcards: [
          { front: 'Contraditório substancial significa o quê?', back: 'Direito de ciência e de influência real sobre a decisão.' },
          { front: 'O juiz pode decidir com fundamento não debatido?', back: 'Em regra, não; deve observar a vedação à decisão surpresa do CPC art. 10.' },
          { front: 'Cooperação processual retira o dever de defesa da Fazenda?', back: 'Não. Impõe lealdade e busca de decisão de mérito, sem eliminar a defesa técnica.' }
        ],
        summary: 'Normas fundamentais são a Constituição dentro do processo civil. Para Procurador, elas servem para defender o Município com técnica e para evitar nulidades, decisões surpresa e decisões sem fundamentação.',
        checklist: ['Sei explicar contraditório substancial.', 'Sei aplicar CPC art. 10.', 'Sei identificar decisão sem fundamentação.', 'Sei diferenciar cooperação e renúncia à defesa.', 'Consigo usar normas fundamentais em peça.'],
        nextTopic: 'Jurisdição, ação, competência e sujeitos do processo'
      },
      {
        id: 'jurisdicao-acao-competencia',
        level: 'intermediário',
        title: 'Jurisdição, ação, competência, partes, procuradores e Fazenda Pública em juízo',
        whatIs: 'É o estudo de quem pode provocar o Judiciário, qual órgão julga, quem participa do processo e como a Fazenda Pública se apresenta em juízo.',
        purpose: 'Serve para evitar ações no foro errado, defesa por parte ilegítima, nulidade de citação/intimação, perda de prazo e atuação processual inadequada do Município.',
        plainExplanation: [
          'Jurisdição é a função estatal de dizer o direito no caso concreto. A ação é o direito de provocar essa função. Competência é a distribuição da jurisdição entre órgãos judiciais. No cotidiano da Procuradoria, competência é decisiva: ação contra Município, matéria tributária, servidor, saúde, infância, execução fiscal e mandado de segurança podem ter regras diferentes de processamento.',
          'Partes são os sujeitos principais da relação processual. O Município atua por representação judicial própria, em regra por sua Procuradoria. O CPC trata a Fazenda Pública com algumas regras especiais: prazos diferenciados em certas hipóteses, intimação pessoal, remessa necessária em casos específicos, honorários com regras próprias e cumprimento de sentença por precatório ou RPV, conforme o caso.',
          'Atenção: Fazenda Pública não é sinônimo de qualquer empresa pública ou sociedade de economia mista. O regime processual especial deve ser analisado conforme a natureza jurídica da entidade.'
        ],
        examTechnical: 'Domine competência absoluta e relativa, modificação de competência, conexão, continência, litisconsórcio, intervenção de terceiros, capacidade processual, representação do Município, intimação da Fazenda Pública, prazos e prerrogativas processuais. A banca adora confundir competência com legitimidade.',
        cityExample: 'Uma ação de obrigação de fazer em saúde é proposta contra o Município e o Estado. A Procuradoria deve avaliar legitimidade, competência, eventual chamamento ou organização de cumprimento, provas médicas, protocolos do SUS e impacto orçamentário.',
        legalBase: ['CPC, partes sobre competência, sujeitos do processo e Fazenda Pública', 'CF/88, art. 5º, XXXV, LIV e LV', 'Lei Orgânica e normas locais de representação judicial do Município'],
        dryLaw: ['CPC, arts. 42 a 69', 'CPC, arts. 70 a 112', 'CPC, arts. 183, 184, 496, 534 e 535'],
        jurisprudence: ['A Fazenda Pública possui regime processual próprio em razão do interesse público, mas essas prerrogativas devem ser lidas restritivamente quando a lei assim delimita.', 'Em saúde pública, a responsabilidade dos entes pode ser solidária, com organização administrativa do cumprimento conforme orientação jurisprudencial.'],
        objectiveCharge: ['Competência absoluta e relativa.', 'Legitimidade e representação processual.', 'Prazos e intimação da Fazenda Pública.', 'Remessa necessária.', 'Litisconsórcio e intervenção de terceiros.'],
        discursiveCharge: 'Pode cair como parecer sobre competência, ilegitimidade passiva, necessidade de incluir outro ente, remessa necessária ou cumprimento de decisão contra o Município.',
        traps: ['Competência absoluta pode ser reconhecida de ofício; relativa, em regra, depende de alegação.', 'Legitimidade não é competência.', 'Prazo em dobro da Fazenda Pública não se aplica a toda e qualquer situação sem verificar lei.', 'Empresa estatal exploradora de atividade econômica não recebe automaticamente regime de Fazenda Pública.'],
        differences: ['Competência absoluta x relativa.', 'Legitimidade x representação.', 'Capacidade de ser parte x capacidade processual.', 'Litisconsórcio necessário x facultativo.', 'Fazenda Pública x empresa estatal.'],
        commonMistakes: ['Alegar incompetência fora do momento adequado.', 'Confundir foro com juízo.', 'Não conferir intimação pessoal.', 'Tratar todo ente indireto como Fazenda Pública.'],
        miniCase: 'Contribuinte ajuíza ação tributária contra a Secretaria de Finanças em vez do Município. A defesa deve apontar que secretaria é órgão sem personalidade jurídica, indicando a pessoa jurídica correta.',
        activeQuestions: ['Quem é a pessoa jurídica correta?', 'O juízo é competente?', 'A competência é absoluta ou relativa?', 'A Fazenda foi intimada corretamente?', 'Há necessidade de litisconsórcio?'],
        flashcards: [
          { front: 'Secretaria municipal tem personalidade jurídica?', back: 'Em regra, não. É órgão do Município.' },
          { front: 'Competência absoluta pode ser reconhecida de ofício?', back: 'Sim.' },
          { front: 'Fazenda Pública é qualquer ente estatal?', back: 'Não. É preciso verificar natureza jurídica e regime aplicável.' }
        ],
        summary: 'Antes de discutir mérito, o Procurador deve saber quem litiga, onde litiga e como o Município é chamado ao processo. Erros de competência, legitimidade e representação podem decidir a causa antes do conteúdo.',
        checklist: ['Sei competência absoluta e relativa.', 'Sei representar corretamente o Município.', 'Sei regras básicas de Fazenda Pública em juízo.', 'Sei diferenciar órgão e pessoa jurídica.', 'Consigo montar preliminar processual.'],
        nextTopic: 'Atos processuais, prazos, comunicação e nulidades'
      },
      {
        id: 'atos-prazos-nulidades',
        level: 'intermediário',
        title: 'Atos processuais, prazos, comunicação, nulidades e saneamento do processo',
        whatIs: 'São as regras sobre como os atos do processo são praticados, comunicados, contados, corrigidos e eventualmente anulados.',
        purpose: 'Servem para garantir segurança, previsibilidade e defesa efetiva. Para o Município, dominar prazos e nulidades evita revelia, preclusão, perda de recurso e pagamento indevido.',
        plainExplanation: [
          'Processo é forma, mas forma com finalidade. Citação chama o réu ao processo; intimação comunica atos e abre prazos; publicação e intimação pessoal da Fazenda têm relevância prática enorme. Um prazo perdido pode tornar definitiva uma decisão ruim.',
          'Nulidade não é prêmio por formalismo. Em regra, exige prejuízo. O CPC prestigia aproveitamento dos atos e correção de defeitos. Por isso, o Procurador deve distinguir vício grave que compromete defesa de irregularidade sem impacto real.',
          'Saneamento é momento estratégico. O juiz organiza questões de fato e de direito, pontos controvertidos, provas e ônus probatório. Em causas complexas contra o Município, participar bem do saneamento pode evitar condenação por prova mal delimitada.'
        ],
        examTechnical: 'Estude contagem de prazo em dias úteis no CPC, comunicação de atos, citação, intimação, preclusão, nulidades, princípio do prejuízo, instrumentalidade das formas e saneamento. Para Fazenda Pública, observe intimação pessoal e prazos conforme CPC.',
        cityExample: 'O Município é intimado por publicação genérica quando a lei exige intimação pessoal. Se houver prejuízo ao prazo de contestar ou recorrer, a Procuradoria pode arguir nulidade demonstrando o impacto concreto.',
        legalBase: ['CPC, atos processuais, prazos, comunicação e nulidades', 'CF/88, art. 5º, LIV e LV'],
        dryLaw: ['CPC, arts. 188 a 293', 'CPC, arts. 183 e 184', 'CPC, arts. 276 a 283', 'CPC, art. 357'],
        jurisprudence: ['A jurisprudência prestigia a instrumentalidade das formas e costuma exigir demonstração de prejuízo para reconhecimento de nulidade processual.', 'Intimação inadequada da Fazenda pode gerar nulidade se comprometer exercício de defesa.'],
        objectiveCharge: ['Contagem de prazos.', 'Citação e intimação.', 'Preclusão.', 'Nulidades.', 'Saneamento.', 'Instrumentalidade das formas.'],
        discursiveCharge: 'Pode cair como peça arguindo nulidade de citação/intimação, pedido de reabertura de prazo, saneamento de processo ou impugnação à prova.',
        traps: ['Nem todo erro formal anula o processo.', 'Nulidade deve ser arguida no momento adequado.', 'Preclusão pode atingir a Fazenda Pública.', 'Prazo em dias úteis é regra do CPC, mas cuidado com leis especiais.'],
        differences: ['Citação x intimação.', 'Nulidade absoluta x relativa.', 'Preclusão temporal x lógica x consumativa.', 'Irregularidade x nulidade com prejuízo.'],
        commonMistakes: ['Não demonstrar prejuízo.', 'Perder momento de alegar nulidade.', 'Confundir prazo material com prazo processual.', 'Não participar do saneamento.'],
        miniCase: 'Em ação indenizatória, o juiz fixa pontos controvertidos sem incluir nexo causal. A Procuradoria deve pedir ajuste no saneamento para evitar condenação sem prova do vínculo entre conduta municipal e dano.',
        activeQuestions: ['O ato atingiu sua finalidade?', 'Houve prejuízo à defesa?', 'A nulidade foi alegada tempestivamente?', 'O prazo é processual ou material?', 'O saneamento delimitou corretamente as provas?'],
        flashcards: [
          { front: 'Nulidade exige prejuízo?', back: 'Em regra, sim: sem prejuízo, não há nulidade útil.' },
          { front: 'Citação serve para quê?', back: 'Chamar o réu a integrar a relação processual.' },
          { front: 'Saneamento do processo é importante por quê?', back: 'Define questões controvertidas, provas e organização do julgamento.' }
        ],
        summary: 'Prazos e nulidades são defesa institucional. O bom Procurador controla comunicação, prova prejuízo quando necessário e usa saneamento para organizar a causa.',
        checklist: ['Sei contar prazo processual.', 'Sei diferença entre citação e intimação.', 'Sei arguir nulidade com prejuízo.', 'Sei identificar preclusão.', 'Sei usar saneamento estrategicamente.'],
        nextTopic: 'Tutela provisória, petição inicial, contestação e provas'
      },
      {
        id: 'tutelas-inicial-contestacao-provas',
        level: 'avançado',
        title: 'Tutela provisória, petição inicial, contestação, provas e estratégia defensiva municipal',
        whatIs: 'É o conjunto de instrumentos para pedir proteção urgente, iniciar processo, apresentar defesa e provar fatos relevantes.',
        purpose: 'Serve para lidar com liminares contra o Município, ações de saúde, obras públicas, servidor, tributos, urbanismo, indenização e obrigações de fazer.',
        plainExplanation: [
          'Tutela provisória busca antecipar ou assegurar efeitos antes da sentença. Pode ser de urgência, quando há probabilidade do direito e perigo de dano ou risco ao resultado útil do processo, ou de evidência, quando a força jurídica do direito dispensa urgência em hipóteses legais.',
          'A petição inicial delimita o objeto do processo. A contestação é a resposta defensiva principal. Para o Procurador, contestar bem não é negar tudo: é organizar preliminares, impugnar fatos, provas, direito, valores, pedidos e consequências práticas.',
          'Prova é o coração do processo. Em ações contra o Município, documentos administrativos, protocolos, relatórios técnicos, prontuários, laudos, fotos, autos de infração, pareceres e informações de secretaria são decisivos. Sem prova, a defesa vira discurso.'
        ],
        examTechnical: 'Domine requisitos da inicial, indeferimento, improcedência liminar, contestação, ônus da impugnação específica, provas, ônus da prova, prova documental, pericial, testemunhal, audiência e tutela provisória. Banca gosta de diferenciar tutela de urgência e evidência.',
        cityExample: 'Munícipe pede liminar para cirurgia sem apresentar laudo suficiente. A Procuradoria deve impugnar probabilidade do direito ou urgência, juntar informação técnica da saúde, demonstrar protocolo, fila, alternativa terapêutica e pedir prazo razoável ou organização administrativa do cumprimento.',
        legalBase: ['CPC, tutelas provisórias', 'CPC, petição inicial e contestação', 'CPC, teoria geral da prova', 'CF/88, devido processo e contraditório'],
        dryLaw: ['CPC, arts. 294 a 311', 'CPC, arts. 319 a 342', 'CPC, arts. 369 a 484'],
        jurisprudence: ['Em demandas de saúde, decisões devem considerar prova técnica, registro, protocolos e responsabilidade dos entes, evitando automatismo sem instrução mínima.', 'Tutela provisória contra o poder público pode sofrer limites legais específicos conforme a matéria.'],
        objectiveCharge: ['Tutela de urgência x evidência.', 'Probabilidade do direito e perigo de dano.', 'Requisitos da inicial.', 'Contestação e preliminares.', 'Ônus da prova.', 'Prova pericial.'],
        discursiveCharge: 'Pode cair como minuta de contestação, manifestação contra liminar, parecer sobre risco de tutela ou roteiro de prova em ação indenizatória/saúde/servidor.',
        traps: ['Tutela de evidência não exige urgência nas hipóteses legais.', 'Contestação deve concentrar defesas, sob pena de preclusão.', 'Impugnação genérica pode ser insuficiente.', 'Sem prova administrativa, defesa municipal fica fraca.'],
        differences: ['Tutela cautelar x antecipada.', 'Tutela de urgência x evidência.', 'Preliminar x mérito.', 'Ônus da prova x dever de colaboração probatória.'],
        commonMistakes: ['Pedir suspensão de liminar sem atacar requisitos.', 'Não juntar documentos da secretaria.', 'Não impugnar valor da causa ou dano moral.', 'Esquecer preliminares.'],
        miniCase: 'Ação pede indenização por queda em calçada. A defesa deve buscar fotos, registros de manutenção, competência sobre o local, nexo causal, culpa exclusiva, ausência de omissão específica e eventual prova pericial.',
        activeQuestions: ['Há urgência real?', 'Qual prova demonstra o fato?', 'Quais preliminares existem?', 'O pedido é juridicamente possível?', 'Qual secretaria precisa informar?'],
        flashcards: [
          { front: 'Quais requisitos da tutela de urgência?', back: 'Probabilidade do direito e perigo de dano ou risco ao resultado útil do processo.' },
          { front: 'Tutela de evidência exige urgência?', back: 'Não, nas hipóteses legais do CPC.' },
          { front: 'Contestação municipal deve ser genérica?', back: 'Não. Deve impugnar fatos, direito, valores e provas de forma estratégica.' }
        ],
        summary: 'Tutela e prova definem o ritmo da causa. Para Procurador, a melhor defesa combina preliminares, mérito, prova técnica, informação administrativa e consequências práticas.',
        checklist: ['Sei requisitos da tutela provisória.', 'Sei estruturar contestação.', 'Sei pedir e impugnar provas.', 'Sei montar defesa de liminar.', 'Consigo transformar informações administrativas em argumento jurídico.'],
        nextTopic: 'Sentença, coisa julgada, recursos e precedentes'
      },
      {
        id: 'sentenca-recursos-precedentes',
        level: 'avançado',
        title: 'Sentença, coisa julgada, recursos, precedentes e remessa necessária',
        whatIs: 'É a parte do processo que trata da decisão judicial, seus efeitos, estabilidade e meios de impugnação.',
        purpose: 'Serve para saber quando recorrer, como atacar fundamentos, quando há remessa necessária, como usar precedentes e quando a discussão ficou definitivamente encerrada.',
        plainExplanation: [
          'Sentença resolve o processo ou encerra fase cognitiva. Coisa julgada dá estabilidade à decisão. Recursos permitem reexame por erro de fato, direito, procedimento ou omissão. Para a Fazenda Pública, saber recorrer bem é proteger orçamento e legalidade sem recorrer automaticamente de tudo.',
          'Precedentes são decisões qualificadas que orientam casos futuros. O CPC fortaleceu a lógica de coerência, integridade e estabilidade. Procuradoria deve usar precedentes para defender teses repetitivas, especialmente em saúde, servidores, tributos, responsabilidade civil e políticas públicas.',
          'Remessa necessária é reexame obrigatório em certas decisões contra a Fazenda Pública, mas possui exceções e limites. A banca gosta de cobrar quando cabe e quando não cabe.'
        ],
        examTechnical: 'Domine sentença, elementos, coisa julgada, embargos de declaração, apelação, agravo de instrumento, recursos aos tribunais superiores, precedentes obrigatórios, distinguishing, overruling e remessa necessária. Em prova, muito cuidado com prazos, cabimento e hipóteses legais.',
        cityExample: 'Sentença condena o Município a indenização alta sem enfrentar laudo técnico. A Procuradoria pode opor embargos de declaração por omissão e, depois, apelar atacando nexo causal, dano, culpa, valor e ausência de fundamentação adequada.',
        legalBase: ['CPC, sentença e coisa julgada', 'CPC, recursos', 'CPC, precedentes', 'CPC, remessa necessária'],
        dryLaw: ['CPC, arts. 485 a 508', 'CPC, arts. 994 a 1.044', 'CPC, art. 496', 'CPC, arts. 926 e 927'],
        jurisprudence: ['Tribunais exigem impugnação específica dos fundamentos da decisão recorrida.', 'Precedentes qualificados devem ser observados, permitindo distinção fundamentada quando o caso concreto for diferente.'],
        objectiveCharge: ['Sentença terminativa x definitiva.', 'Embargos de declaração.', 'Apelação e agravo.', 'Remessa necessária.', 'Coisa julgada.', 'Precedentes obrigatórios.'],
        discursiveCharge: 'Pode cair como parecer sobre recorrer ou não recorrer, cabimento de remessa necessária, embargos por omissão ou uso de precedente em tese municipal repetitiva.',
        traps: ['Embargos não servem para rediscutir tudo sem vício.', 'Recurso que não ataca fundamento pode ser inadmitido.', 'Nem toda sentença contra Fazenda Pública vai à remessa necessária.', 'Precedente não é ementa solta; precisa comparar fatos e razão de decidir.'],
        differences: ['Coisa julgada formal x material.', 'Apelação x agravo de instrumento.', 'Embargos de declaração x recurso de reforma.', 'Distinguishing x overruling.'],
        commonMistakes: ['Recorrer sem atacar fundamento central.', 'Perder prazo recursal.', 'Ignorar precedente desfavorável sem distinguir.', 'Confundir remessa necessária com recurso voluntário.'],
        miniCase: 'Acórdão aplica precedente de saúde, mas o caso envolve medicamento sem registro e ausência de laudo. A Procuradoria pode fazer distinguishing, mostrando que a razão do precedente não cobre o caso específico.',
        activeQuestions: ['Qual decisão foi proferida?', 'Qual recurso é cabível?', 'Há omissão/contradição/obscuridade?', 'A decisão enfrentou precedentes?', 'Cabe remessa necessária?'],
        flashcards: [
          { front: 'Embargos de declaração servem para quê?', back: 'Esclarecer obscuridade, eliminar contradição, suprir omissão ou corrigir erro material.' },
          { front: 'Precedente obrigatório é igual a ementa?', back: 'Não. Importa a ratio decidendi aplicável ao caso.' },
          { front: 'Remessa necessária é sempre cabível contra Fazenda?', back: 'Não. Há limites e exceções no CPC.' }
        ],
        summary: 'Recurso bom é recurso estratégico. A Procuradoria deve atacar fundamentos, preservar teses, usar precedentes e evitar automatismo improdutivo.',
        checklist: ['Sei sentença e coisa julgada.', 'Sei cabimento básico dos recursos.', 'Sei embargos de declaração.', 'Sei remessa necessária.', 'Sei usar precedente com distinguishing.'],
        nextTopic: 'Cumprimento de sentença, execução e Fazenda Pública'
      },
      {
        id: 'cumprimento-execucao-fazenda',
        level: 'discursiva',
        title: 'Cumprimento de sentença, execução, precatório, RPV e defesa do Município',
        whatIs: 'É a fase em que se busca realizar concretamente o que foi decidido ou cobrar obrigação reconhecida em título judicial ou extrajudicial.',
        purpose: 'Serve para pagar corretamente o que é devido, evitar excesso de execução, proteger orçamento público e cumprir decisões de fazer, pagar ou entregar coisa dentro do regime jurídico aplicável à Fazenda Pública.',
        plainExplanation: [
          'Contra a Fazenda Pública, execução por quantia possui regime especial. Em vez de penhora comum de bens públicos, a satisfação normalmente ocorre por precatório ou requisição de pequeno valor, conforme regras constitucionais e locais. Por isso, o cálculo é central: juros, correção, honorários, termo inicial e limites da condenação precisam ser conferidos.',
          'Cumprimento de obrigação de fazer contra Município aparece muito em saúde, servidores, obras, urbanismo e políticas públicas. A defesa não deve ser simplesmente resistir; deve organizar forma viável de cumprimento, prazo, responsabilidade da secretaria e eventual impossibilidade técnica comprovada.',
          'Na execução, um erro pequeno vira despesa pública indevida. O Procurador deve impugnar excesso, ilegitimidade, inexigibilidade, erro de cálculo, coisa julgada e índices incorretos quando presentes.'
        ],
        examTechnical: 'Estude cumprimento de sentença contra Fazenda Pública, impugnação, precatório, RPV, execução de obrigação de fazer, execução de título extrajudicial, honorários e limites da coisa julgada. Conecte com Direito Financeiro e orçamento.',
        cityExample: 'Sentença manda pagar diferenças a servidores. A Procuradoria deve conferir base de cálculo, período, prescrição quinquenal, reflexos, índice de correção, juros, honorários e forma de pagamento por RPV/precatório.',
        legalBase: ['CPC, cumprimento de sentença contra Fazenda Pública', 'CF/88, art. 100', 'Norma municipal sobre RPV, quando existente'],
        dryLaw: ['CPC, arts. 513 a 538', 'CPC, arts. 534 e 535', 'CF/88, art. 100'],
        jurisprudence: ['Regime de precatórios decorre da Constituição e protege ordem orçamentária, sem afastar o dever de pagamento.', 'Excesso de execução deve ser demonstrado com memória de cálculo e fundamentos objetivos.'],
        objectiveCharge: ['Cumprimento de sentença contra Fazenda.', 'Impugnação.', 'Precatório e RPV.', 'Excesso de execução.', 'Obrigação de fazer.', 'Honorários.'],
        discursiveCharge: 'Pode cair como parecer sobre cumprimento de sentença, impugnação a cálculo, ordem de pagamento, obrigação de fazer em saúde ou risco orçamentário.',
        traps: ['Bens públicos não seguem execução comum por penhora como regra.', 'Impugnação sem cálculo pode ser fraca.', 'RPV depende de limite normativo.', 'Cumprir decisão não impede discutir modo, prazo e limites da coisa julgada.'],
        differences: ['Cumprimento de sentença x execução autônoma.', 'Precatório x RPV.', 'Obrigação de pagar x fazer.', 'Excesso de execução x inexigibilidade do título.'],
        commonMistakes: ['Não conferir cálculo.', 'Ignorar prescrição ou coisa julgada.', 'Confundir precatório e RPV.', 'Não envolver a secretaria responsável no cumprimento de obrigação de fazer.'],
        miniCase: 'Exequente inclui parcelas posteriores não abrangidas pela sentença. A Procuradoria deve impugnar excesso por violação à coisa julgada e apresentar cálculo correto.',
        activeQuestions: ['Qual obrigação foi fixada?', 'O cálculo respeita a sentença?', 'Cabe RPV ou precatório?', 'Há excesso?', 'Qual secretaria executa obrigação de fazer?'],
        flashcards: [
          { front: 'Pagamento de quantia pela Fazenda segue qual regime?', back: 'Em regra, precatório ou RPV, conforme Constituição e limite aplicável.' },
          { front: 'Impugnação de excesso exige o quê?', back: 'Demonstração objetiva e, em geral, cálculo do valor que entende correto.' },
          { front: 'Bens públicos são livremente penhoráveis?', back: 'Não. Há regime jurídico próprio de proteção e pagamento.' }
        ],
        summary: 'Execução contra Município é onde tese vira dinheiro ou obrigação concreta. Dominar cálculo, coisa julgada, precatório/RPV e cumprimento prático é essencial para Procurador.',
        checklist: ['Sei cumprimento contra Fazenda.', 'Sei precatório e RPV.', 'Sei impugnar excesso.', 'Sei conectar execução com orçamento.', 'Sei organizar cumprimento de obrigação de fazer.'],
        nextTopic: 'LINDB, pessoas, bens, fatos e negócios jurídicos'
      },
      {
        id: 'lindb-pessoas-fatos-negocios',
        level: 'básico',
        title: 'LINDB, pessoas, bens, fatos jurídicos, negócios jurídicos, prescrição e decadência',
        whatIs: 'É a base da Parte Geral do Direito Civil e da interpretação jurídica: início da vigência da lei, aplicação no tempo, pessoas naturais e jurídicas, bens, fatos, atos, negócios jurídicos, invalidade, prescrição e decadência.',
        purpose: 'Serve para entender validade de atos privados e públicos, contratos, prazos de cobrança, responsabilidade, capacidade, personalidade, patrimônio e segurança jurídica.',
        plainExplanation: [
          'A LINDB ensina como a lei entra em vigor, como se aplica no tempo e como o intérprete deve decidir. Para Procurador, os arts. 20 a 30 são muito importantes, porque exigem considerar consequências práticas, segurança jurídica e motivação em decisões administrativas, judiciais e controladoras.',
          'Pessoa é quem pode ter direitos e deveres. Bens são objetos de relações jurídicas. Fatos jurídicos são acontecimentos com efeito no Direito. Negócio jurídico é manifestação de vontade destinada a produzir efeitos jurídicos, como contrato, renúncia, reconhecimento ou acordo.',
          'Prescrição atinge a pretensão; decadência atinge o próprio direito potestativo. Essa diferença parece abstrata, mas decide cobranças, anulação de atos, responsabilidade civil e defesa do Município.'
        ],
        examTechnical: 'Estude vigência e aplicação da lei, irretroatividade, ato jurídico perfeito, direito adquirido, coisa julgada, capacidade, personalidade, pessoas jurídicas, domicílio, bens públicos e privados, fatos jurídicos, defeitos do negócio jurídico, invalidade, prescrição e decadência.',
        cityExample: 'Município analisa acordo administrativo firmado anos antes. A Procuradoria deve verificar competência, validade do negócio, vício de vontade, prazo prescricional, interesse público e segurança jurídica conforme LINDB.',
        legalBase: ['LINDB', 'Código Civil, Parte Geral', 'CF/88, segurança jurídica e devido processo'],
        dryLaw: ['LINDB, arts. 1º a 6º e 20 a 30', 'CC, arts. 1º a 232', 'CC, arts. 189 a 211'],
        jurisprudence: ['A segurança jurídica e a proteção da confiança são valores relevantes na revisão de atos e contratos, especialmente quando há decurso de tempo e boa-fé.', 'Prescrição e decadência devem ser analisadas conforme natureza da pretensão ou do direito invocado.'],
        objectiveCharge: ['Vigência da lei.', 'Direito adquirido, ato jurídico perfeito e coisa julgada.', 'Capacidade e personalidade.', 'Defeitos do negócio jurídico.', 'Nulidade e anulabilidade.', 'Prescrição e decadência.'],
        discursiveCharge: 'Pode cair em parecer sobre anulação de contrato, revisão de ato antigo, prescrição de indenização, validade de acordo ou efeitos de mudança legislativa.',
        traps: ['Prescrição não extingue o direito material em si, mas a pretensão.', 'Decadência atinge direito potestativo.', 'Nulidade e anulabilidade não são a mesma coisa.', 'LINDB exige considerar consequências práticas, não decidir por abstração vazia.'],
        differences: ['Prescrição x decadência.', 'Nulidade x anulabilidade.', 'Pessoa natural x pessoa jurídica.', 'Bens públicos x privados.', 'Fato jurídico x negócio jurídico.'],
        commonMistakes: ['Confundir prazo prescricional e decadencial.', 'Esquecer LINDB em parecer administrativo.', 'Achar que todo vício gera nulidade absoluta.', 'Não verificar capacidade e representação.'],
        miniCase: 'Contrato administrativo menciona garantia prestada por pessoa jurídica sem poderes de representação. A Procuradoria deve analisar validade do negócio, representação, possível ratificação e proteção do interesse público.',
        activeQuestions: ['Qual lei estava vigente?', 'Há direito adquirido?', 'O ato é nulo ou anulável?', 'O prazo é prescricional ou decadencial?', 'Quem tinha capacidade/representação?'],
        flashcards: [
          { front: 'Prescrição atinge o quê?', back: 'A pretensão.' },
          { front: 'Decadência atinge o quê?', back: 'O direito potestativo.' },
          { front: 'LINDB arts. 20 a 30 importam por quê?', back: 'Exigem decisões motivadas, consequencialistas e com segurança jurídica.' }
        ],
        summary: 'Parte Geral do Civil é gramática do Direito. Sem ela, o candidato erra validade, prazo, pessoa, bem e negócio jurídico. Para Procurador, LINDB é ferramenta central de parecer.',
        checklist: ['Sei LINDB básica e arts. 20 a 30.', 'Sei pessoas e bens.', 'Sei fato e negócio jurídico.', 'Sei nulidade e anulabilidade.', 'Sei prescrição e decadência.'],
        nextTopic: 'Obrigações, contratos e responsabilidade civil'
      },
      {
        id: 'obrigacoes-contratos-responsabilidade',
        level: 'avançado',
        title: 'Obrigações, contratos e responsabilidade civil aplicados ao Município',
        whatIs: 'Obrigações são vínculos jurídicos entre credor e devedor. Contratos são negócios jurídicos que criam, modificam ou extinguem obrigações. Responsabilidade civil é o dever de reparar dano quando presentes os pressupostos legais.',
        purpose: 'Serve para analisar cobranças, inadimplemento, contratos privados relacionados ao Município, indenizações, danos causados por obras, acidentes, omissões, serviços públicos e relações com particulares.',
        plainExplanation: [
          'Obrigação envolve prestação: dar, fazer ou não fazer. Contrato organiza interesses e riscos. Mesmo quando o Município atua em regime público, muitos conceitos civis aparecem: inadimplemento, mora, perdas e danos, cláusula penal, boa-fé objetiva, função social, equilíbrio, responsabilidade e reparação.',
          'Responsabilidade civil exige analisar conduta, dano, nexo causal e regime jurídico. Contra o Estado, há regra constitucional de responsabilidade objetiva por atos de agentes públicos nessa qualidade, mas a discussão concreta costuma girar em torno de nexo, dano, culpa exclusiva da vítima, fortuito, omissão e extensão do prejuízo.',
          'Para Procurador Municipal, responsabilidade civil aparece em buraco em via pública, queda em escola, acidente em unidade de saúde, enchente, obra, guarda de aluno, erro administrativo, dano moral e regressiva contra agente.'
        ],
        examTechnical: 'Estude modalidades de obrigações, pagamento, inadimplemento, mora, perdas e danos, contratos em geral, boa-fé objetiva, função social, revisão, extinção, responsabilidade civil subjetiva e objetiva, dano material/moral, nexo causal, excludentes e direito de regresso.',
        cityExample: 'Morador pede indenização por dano em veículo causado por buraco. A Procuradoria deve apurar existência do buraco, ciência prévia do Município, tempo de resposta, sinalização, nexo causal, culpa concorrente, prova do dano e valor do orçamento.',
        legalBase: ['Código Civil, obrigações, contratos e responsabilidade civil', 'CF/88, art. 37, §6º', 'LINDB, consequências práticas e proporcionalidade'],
        dryLaw: ['CC, arts. 233 a 420', 'CC, arts. 421 a 480', 'CC, arts. 186, 187, 927 e seguintes', 'CF/88, art. 37, §6º'],
        jurisprudence: ['A responsabilidade civil do Estado exige dano e nexo causal, sendo possível discutir excludentes e culpa concorrente.', 'O dano moral não é automático em qualquer falha administrativa; depende de situação concreta que ultrapasse mero aborrecimento, conforme entendimento jurisprudencial dominante.'],
        objectiveCharge: ['Boa-fé objetiva.', 'Função social do contrato.', 'Mora e inadimplemento.', 'Responsabilidade civil objetiva e subjetiva.', 'Nexo causal.', 'Excludentes de responsabilidade.'],
        discursiveCharge: 'Pode cair como parecer sobre indenização contra Município, acordo judicial, ação regressiva, queda em via pública, omissão em serviço ou dano causado por agente.',
        traps: ['Responsabilidade objetiva não significa indenização automática.', 'Sem dano e nexo, não há reparação.', 'Omissão estatal pode exigir análise específica de dever legal de agir.', 'Dano moral precisa ser demonstrado ou presumido conforme hipóteses reconhecidas, não inventado.'],
        differences: ['Responsabilidade contratual x extracontratual.', 'Objetiva x subjetiva.', 'Dano material x moral.', 'Culpa exclusiva x concorrente.', 'Obrigação de meio x resultado.'],
        commonMistakes: ['Não discutir nexo causal.', 'Aceitar orçamento sem prova.', 'Não avaliar culpa da vítima.', 'Confundir responsabilidade do agente com responsabilidade do Município.'],
        miniCase: 'Aluno se machuca em escola municipal. A defesa deve investigar vigilância, dinâmica do acidente, idade, local, protocolos, atendimento, nexo, extensão do dano e eventual falha específica do serviço.',
        activeQuestions: ['Qual foi a conduta estatal?', 'Existe dano comprovado?', 'Há nexo causal?', 'Há excludente?', 'O valor pedido é proporcional?'],
        flashcards: [
          { front: 'Responsabilidade objetiva dispensa o quê?', back: 'Dispensa prova de culpa, mas não dispensa dano e nexo causal.' },
          { front: 'Boa-fé objetiva é o quê?', back: 'Padrão de conduta leal, cooperativa e coerente nas relações jurídicas.' },
          { front: 'Cabe regresso contra agente público?', back: 'Sim, quando houver dolo ou culpa, conforme CF/88 art. 37, §6º.' }
        ],
        summary: 'Civil aplicado ao Município exige prova e nexo. A defesa forte não nega o dano por hábito: reconstrói fatos, demonstra regime jurídico e calcula corretamente consequências.',
        checklist: ['Sei obrigações básicas.', 'Sei contratos e boa-fé.', 'Sei responsabilidade civil.', 'Sei responsabilidade do Estado.', 'Consigo montar defesa indenizatória.'],
        nextTopic: 'Posse, propriedade, direitos reais e bens públicos'
      },
      {
        id: 'posse-propriedade-direitos-reais',
        level: 'intermediário',
        title: 'Posse, propriedade, direitos reais, função social, usucapião e interface com bens públicos',
        whatIs: 'Direitos reais são poderes jurídicos exercidos diretamente sobre coisas. Posse é exercício de poderes de fato sobre bem. Propriedade é direito de usar, gozar, dispor e reaver, limitado pela função social e pelo ordenamento.',
        purpose: 'Serve para lidar com imóveis municipais, ocupações, regularização fundiária, ações possessórias, desapropriação indireta, uso de áreas públicas, servidões, loteamentos e conflitos urbanos.',
        plainExplanation: [
          'Posse e propriedade são diferentes. Alguém pode possuir sem ser proprietário. Propriedade não é absoluta: deve cumprir função social, observar regras urbanísticas, ambientais e administrativas. No Município, isso aparece em áreas públicas ocupadas, obras, calçadas, loteamentos e política urbana.',
          'Bens públicos têm regime especial. Em regra, são impenhoráveis, imprescritíveis quanto à usucapião, inalienáveis enquanto afetados e submetidos a finalidade pública. Isso é fundamental para Procurador, porque muitas ações tentam consolidar ocupação particular sobre área pública.',
          'Ações possessórias exigem prova de posse, turbação/esbulho/ameaça e data. Já propriedade costuma envolver matrícula, registro e cadeia dominial. Em parecer, o primeiro passo é descobrir a natureza do bem e a prova documental.'
        ],
        examTechnical: 'Estude posse, classificação, efeitos, ações possessórias, propriedade, aquisição e perda, direitos reais, servidões, usucapião, função social, bens públicos e limites à disposição patrimonial. Conecte com Urbanístico e Ambiental.',
        cityExample: 'Famílias ocupam área institucional do Município. A Procuradoria deve verificar matrícula, afetação, risco social, possibilidade de regularização, reintegração de posse, política habitacional, mediação e prova da titularidade pública.',
        legalBase: ['Código Civil, posse, propriedade e direitos reais', 'CF/88, função social da propriedade e política urbana', 'Regime jurídico dos bens públicos', 'Estatuto da Cidade quando integrado ao Urbanístico'],
        dryLaw: ['CC, arts. 1.196 a 1.510', 'CF/88, arts. 5º, XXII e XXIII', 'CF/88, arts. 182 e 183', 'CC, arts. 98 a 103 sobre bens públicos'],
        jurisprudence: ['Bens públicos não são adquiridos por usucapião.', 'A proteção possessória de bem público exige análise da titularidade, afetação e interesse público, sem ignorar direitos fundamentais em ocupações coletivas.'],
        objectiveCharge: ['Posse x propriedade.', 'Ações possessórias.', 'Usucapião.', 'Função social.', 'Bens públicos.', 'Direitos reais.'],
        discursiveCharge: 'Pode cair como parecer sobre ocupação de área pública, reintegração de posse, regularização fundiária, uso de bem municipal ou conflito entre moradia e patrimônio público.',
        traps: ['Bens públicos não sofrem usucapião.', 'Registro importa para propriedade imobiliária.', 'Posse não é sinônimo de propriedade.', 'Função social limita, mas não elimina propriedade sem procedimento legal.'],
        differences: ['Posse x detenção x propriedade.', 'Bem público de uso comum x uso especial x dominical.', 'Esbulho x turbação x ameaça.', 'Usucapião ordinária x extraordinária x especial.'],
        commonMistakes: ['Não pedir matrícula do imóvel.', 'Confundir área pública com particular por aparência.', 'Ignorar afetação do bem.', 'Tratar ocupação coletiva apenas como caso patrimonial sem política pública.'],
        miniCase: 'Particular constrói muro em praça pública e alega uso há 20 anos. A Procuradoria deve apontar natureza pública do bem, impossibilidade de usucapião e medidas administrativas/judiciais cabíveis.',
        activeQuestions: ['O bem é público ou privado?', 'Há matrícula?', 'Qual tipo de posse existe?', 'Há esbulho/turbação/ameaça?', 'Existe alternativa urbanística ou social?'],
        flashcards: [
          { front: 'Bem público pode ser usucapido?', back: 'Não.' },
          { front: 'Posse é igual a propriedade?', back: 'Não. Posse é poder de fato; propriedade é direito real.' },
          { front: 'Função social elimina propriedade?', back: 'Não. Limita e orienta seu exercício conforme Constituição e leis.' }
        ],
        summary: 'Direitos reais são essenciais para Procurador Municipal por causa de imóveis, áreas públicas, ocupações e política urbana. O segredo é qualificar bem o bem, a posse, a propriedade e a finalidade pública.',
        checklist: ['Sei posse e propriedade.', 'Sei bens públicos.', 'Sei impossibilidade de usucapião de bem público.', 'Sei ações possessórias.', 'Consigo fazer parecer sobre ocupação municipal.'],
        nextTopic: 'Família, sucessões e empresa no edital de Direito Civil'
      },
      {
        id: 'familia-sucessoes-empresa',
        level: 'lei seca',
        title: 'Noções de família, sucessões, empresa e temas civis complementares relevantes ao edital',
        whatIs: 'São blocos complementares do Direito Civil que aparecem em editais amplos: relações familiares, sucessão causa mortis, atividade empresarial, nome empresarial, estabelecimento, títulos básicos e efeitos patrimoniais.',
        purpose: 'Servem para resolver questões objetivas e situações patrimoniais que podem alcançar o Município, como ITBI/ITCMD em interface tributária, inventários com interesse municipal, empresas contratadas, responsabilidade empresarial e cadastro de fornecedores.',
        plainExplanation: [
          'Família e sucessões nem sempre são o centro de Procuradoria Municipal, mas aparecem em prova para medir domínio do Código Civil. O candidato deve saber casamento, união estável, parentesco, alimentos, regime de bens, sucessão legítima, testamento, inventário e partilha em linhas gerais.',
          'Empresa importa porque o Município contrata com empresários, fiscaliza atividades, cobra tributos e analisa responsabilidade patrimonial. Saber empresário, sociedade, estabelecimento, nome empresarial e desconsideração da personalidade jurídica ajuda em licitações, execução fiscal e contratos.',
          'A estratégia aqui é lei seca qualificada: não tentar virar especialista em família, mas dominar conceitos estruturantes e pegadinhas recorrentes.'
        ],
        examTechnical: 'Priorize conceitos gerais, classificação, efeitos patrimoniais e pontos de lei seca. Em empresa, conecte com capacidade, pessoa jurídica, responsabilidade, desconsideração e contratos com o poder público. Em sucessões, cuidado com vocação hereditária, legítima, testamento e inventário.',
        cityExample: 'Empresa contratada pelo Município altera quadro societário e transfere estabelecimento. A Procuradoria deve verificar efeitos contratuais, responsabilidade, habilitação, eventual sucessão empresarial e manutenção das condições de contratação.',
        legalBase: ['Código Civil, Direito de Família, Sucessões e Empresa', 'CPC, inventário e partilha quando processual', 'Regras de contratação pública quando houver interface com licitações'],
        dryLaw: ['CC, Livro de Família', 'CC, Livro de Sucessões', 'CC, arts. 966 e seguintes sobre empresa', 'CPC, inventário e partilha'],
        jurisprudence: ['Desconsideração da personalidade jurídica exige pressupostos legais e procedimento adequado, com contraditório.', 'União estável e regimes patrimoniais geram efeitos patrimoniais relevantes conforme legislação e jurisprudência.'],
        objectiveCharge: ['Empresário.', 'Pessoa jurídica.', 'Desconsideração.', 'Estabelecimento empresarial.', 'Vocação hereditária.', 'Inventário.', 'Regime de bens.'],
        discursiveCharge: 'Menos provável como discursiva principal, mas pode aparecer em parecer sobre empresa contratada, sucessão empresarial, patrimônio, inventário com dívida municipal ou desconsideração em execução fiscal.',
        traps: ['Empresário não é qualquer pessoa que ganha dinheiro.', 'Desconsideração não é automática por inadimplemento.', 'Família e sucessões têm muitos prazos e ordens legais.', 'Pessoa jurídica não se confunde com seus sócios, salvo hipóteses legais.'],
        differences: ['Empresário x sociedade empresária.', 'Pessoa jurídica x sócios.', 'Sucessão legítima x testamentária.', 'Casamento x união estável.', 'Desconsideração direta x inversa.'],
        commonMistakes: ['Ignorar lei seca em família/sucessões.', 'Confundir inadimplemento com abuso da personalidade.', 'Não separar patrimônio social e dos sócios.', 'Estudar empresa sem conectar com contratos públicos.'],
        miniCase: 'Empresa devedora de tributo municipal encerra atividades e transfere bens a outra pessoa jurídica do mesmo grupo. A Procuradoria deve avaliar sucessão, fraude, desconsideração e prova patrimonial.',
        activeQuestions: ['Qual é o sujeito civil envolvido?', 'Há pessoa jurídica distinta?', 'Existe abuso ou confusão patrimonial?', 'Há sucessão patrimonial?', 'Qual dispositivo do Código Civil resolve?'],
        flashcards: [
          { front: 'Inadimplemento autoriza desconsideração automática?', back: 'Não. É preciso preencher requisitos legais, como abuso da personalidade, desvio de finalidade ou confusão patrimonial conforme o caso.' },
          { front: 'Empresário é definido por qual ideia?', back: 'Exercício profissional de atividade econômica organizada para produção ou circulação de bens ou serviços.' },
          { front: 'Sucessão pode impactar o Município?', back: 'Sim, em dívidas, tributos, inventário, patrimônio e contratos.' }
        ],
        summary: 'Família, sucessões e empresa devem ser estudados com foco de edital: conceitos, lei seca, efeitos patrimoniais e interface com atuação municipal.',
        checklist: ['Sei conceitos gerais de família.', 'Sei noções de sucessões.', 'Sei empresário e sociedade.', 'Sei desconsideração.', 'Sei conectar temas civis com Município.'],
        nextTopic: 'Próxima fase: Tributário, Financeiro e Orçamentário Premium'
      }
    ]
  },
  {
  "id": "tributario-financeiro-orcamentario",
  "subject": "Direito Tributário, Financeiro e Orçamentário",
  "status": "39D concluída",
  "priority": "Crítica",
  "overview": "Apostila premium dedicada ao bloco tributário, financeiro e orçamentário do edital. O foco é preparar o candidato para atuar como Procurador Municipal: competência tributária, impostos municipais, taxas, contribuição de melhoria, obrigação e crédito tributário, lançamento, dívida ativa, execução fiscal, orçamento público, Lei nº 4.320/1964, LRF, receita, despesa, renúncia fiscal, controle e responsabilidade fiscal.",
  "lawBase": [
    "CF/88, arts. 145 a 162, sistema tributário nacional e competências municipais",
    "Código Tributário Nacional — Lei nº 5.172/1966",
    "Lei nº 4.320/1964, normas gerais de direito financeiro e orçamento",
    "Lei Complementar nº 101/2000 — Lei de Responsabilidade Fiscal",
    "Lei de Execução Fiscal — Lei nº 6.830/1980",
    "Legislação tributária municipal de Itupeva e normas locais sobre RPV, dívida ativa e orçamento, quando aplicáveis"
  ],
  "topics": [
    {
      "id": "sistema-tributario-competencia-municipal",
      "level": "básico",
      "title": "Sistema Tributário Nacional, competência tributária e limitações ao poder de tributar",
      "whatIs": "É o conjunto de regras constitucionais e legais que organiza quem pode criar tributos, quais espécies tributárias existem, quais limites o poder público deve respeitar e como a arrecadação financia atividades públicas. Para o Município, o núcleo é saber instituir e cobrar tributos sem invadir competência da União ou do Estado.",
      "purpose": "Serve para impedir cobrança arbitrária e dar segurança à arrecadação. Para Procurador Municipal, é o ponto de partida para avaliar leis tributárias locais, autos de infração, execuções fiscais, imunidades, isenções e risco de inconstitucionalidade.",
      "plainExplanation": [
        "O Município não cria tributo porque quer. Ele só pode instituir tributos dentro da competência que a Constituição autorizou. Essa competência é uma parcela de poder político-jurídico: permite legislar, fiscalizar, lançar e cobrar, mas dentro dos limites constitucionais.",
        "A Constituição prevê espécies tributárias como impostos, taxas e contribuição de melhoria, e atribui aos Municípios impostos próprios, como IPTU, ITBI e ISS. Além disso, o Município pode instituir taxas pelo exercício regular do poder de polícia ou por serviço público específico e divisível, e contribuição de melhoria em razão de obra pública que valorize imóveis.",
        "As limitações ao poder de tributar funcionam como freios: legalidade, anterioridade, irretroatividade, isonomia, capacidade contributiva, vedação ao confisco e imunidades. Em prova, a banca costuma criar uma lei municipal aparentemente útil, mas que viola uma dessas travas. O raciocínio correto é sempre: competência, espécie tributária, fato gerador, base de cálculo, contribuinte, limites e procedimento."
      ],
      "examTechnical": "Para prova, domine CF/88 arts. 145 a 162, CTN como norma geral e diferenças entre competência tributária, capacidade tributária ativa e sujeição ativa. Competência tributária é indelegável em sentido legislativo, mas funções de arrecadar/fiscalizar podem ser atribuídas nos limites legais. Imunidade é limitação constitucional; isenção é benefício legal infraconstitucional.",
      "cityExample": "A Câmara aprova lei criando uma taxa municipal sobre qualquer estabelecimento comercial, mas sem vincular a exercício de polícia ou serviço específico e divisível. A Procuradoria deve alertar que taxa exige hipótese constitucional específica, não pode ter base de cálculo própria de imposto e precisa guardar relação com atividade estatal divisível ou poder de polícia.",
      "legalBase": [
        "CF/88, arts. 145 a 162",
        "CTN, normas gerais de direito tributário",
        "Lei Orgânica e Código Tributário Municipal, quando existentes"
      ],
      "dryLaw": [
        "CF/88, arts. 145, 146, 150, 156, 158 e 159",
        "CTN, arts. 3º, 4º, 6º, 7º, 9º a 15"
      ],
      "jurisprudence": [
        "O STF diferencia imunidade constitucional de isenção legal; imunidade retira competência tributária, isenção dispensa pagamento por lei dentro da competência existente.",
        "A jurisprudência exige que taxa tenha relação com atividade estatal específica: poder de polícia ou serviço público específico e divisível."
      ],
      "objectiveCharge": [
        "Conceito de tributo no CTN.",
        "Competência para IPTU, ITBI e ISS.",
        "Diferença entre imposto, taxa e contribuição de melhoria.",
        "Limitações constitucionais ao poder de tributar.",
        "Imunidade x isenção."
      ],
      "discursiveCharge": "Pode cair como parecer sobre constitucionalidade de lei municipal que cria taxa, concede isenção sem estimativa de impacto, aumenta IPTU, altera ISS ou pretende cobrar ITBI em hipótese controvertida. A resposta deve começar pela competência e terminar com risco jurídico e providência legislativa/administrativa.",
      "traps": [
        "Taxa não pode ser criada como imposto disfarçado.",
        "Competência tributária legislativa não se delega.",
        "Imunidade não é favor fiscal; é limite constitucional.",
        "Isenção depende de lei específica e deve respeitar impacto orçamentário quando renúncia de receita.",
        "Capacidade contributiva não autoriza confisco."
      ],
      "differences": [
        "Competência tributária x capacidade tributária ativa.",
        "Imunidade x isenção x não incidência.",
        "Imposto x taxa x preço público.",
        "Legalidade tributária x simples ato administrativo de cobrança."
      ],
      "commonMistakes": [
        "Decorar impostos municipais sem entender limites.",
        "Confundir serviço público geral com serviço específico e divisível.",
        "Tratar imunidade como benefício revogável por lei municipal.",
        "Esquecer anterioridade e legalidade em aumento de tributo."
      ],
      "miniCase": "Lei municipal cria taxa anual de segurança pública municipal para todos os imóveis. O candidato deve desconfiar: segurança pública geral não é serviço específico e divisível prestado ao contribuinte, e taxa não pode financiar atividade geral como se fosse imposto.",
      "activeQuestions": [
        "Qual é a espécie tributária?",
        "O Município tem competência?",
        "Há lei formal?",
        "Há fato gerador definido?",
        "Existe limitação constitucional afetada?"
      ],
      "flashcards": [
        {
          "front": "Quais impostos são municipais na Constituição?",
          "back": "IPTU, ITBI e ISS, nos termos do art. 156 da CF."
        },
        {
          "front": "Taxa pode ter base de cálculo de imposto?",
          "back": "Não deve utilizar base própria de imposto; precisa guardar relação com poder de polícia ou serviço específico e divisível."
        },
        {
          "front": "Imunidade é o mesmo que isenção?",
          "back": "Não. Imunidade é limitação constitucional à competência; isenção é dispensa legal dentro da competência tributária."
        }
      ],
      "summary": "Tributário municipal começa na Constituição. O Procurador precisa saber se o Município pode tributar, por qual espécie, com qual base legal e respeitando quais limites.",
      "checklist": [
        "Sei identificar competência municipal.",
        "Sei diferenciar imposto, taxa e contribuição de melhoria.",
        "Sei imunidade x isenção.",
        "Sei aplicar legalidade, anterioridade e vedação ao confisco.",
        "Consigo avaliar constitucionalidade de taxa municipal."
      ],
      "nextTopic": "Impostos municipais: IPTU, ITBI e ISS"
    },
    {
      "id": "impostos-municipais-iptu-itbi-iss",
      "level": "intermediário",
      "title": "Impostos municipais: IPTU, ITBI e ISS",
      "whatIs": "São os impostos de competência própria do Município: IPTU sobre propriedade predial e territorial urbana, ITBI sobre transmissão onerosa inter vivos de bens imóveis e direitos reais sobre imóveis, e ISS sobre serviços definidos em lei complementar.",
      "purpose": "Servem para financiar políticas municipais e compõem o núcleo da arrecadação local. Para Procurador, são temas centrais em lançamento, contencioso tributário, dívida ativa, execução fiscal e defesa de leis municipais.",
      "plainExplanation": [
        "IPTU incide sobre propriedade, domínio útil ou posse de imóvel urbano. A discussão prática costuma envolver zona urbana, cadastro imobiliário, planta genérica de valores, progressividade, alíquotas, imunidades, isenções e responsabilidade pelo pagamento.",
        "ITBI incide sobre transmissão onerosa inter vivos de imóvel ou direitos reais. A prova cobra muito o momento da transmissão, base de cálculo, imunidade em integralização de capital e limites da cobrança antecipada. O Município precisa cuidar para não exigir ITBI antes do fato juridicamente relevante quando a jurisprudência não permite.",
        "ISS incide sobre prestação de serviços previstos em lei complementar. O desafio é identificar se há serviço na lista, local de incidência, contribuinte, responsável tributário, retenção, sociedades profissionais, construção civil e conflitos com ICMS. Em parecer municipal, ISS exige leitura da LC 116/2003 e da legislação local."
      ],
      "examTechnical": "Para prova, foque CF art. 156, CTN, LC 116/2003 para ISS e legislação municipal. Entenda progressividade do IPTU, função extrafiscal, ITBI e registro/transmissão, ISS e lista de serviços. A banca costuma misturar imposto municipal com taxa ou inverter competência com Estado/União.",
      "cityExample": "Uma empresa pede imunidade de ITBI na integralização de imóvel ao capital social. A Procuradoria deve analisar se a atividade preponderante é compra e venda, locação ou arrendamento mercantil de imóveis, verificar documentação contábil e aplicar a regra constitucional e legal com cautela.",
      "legalBase": [
        "CF/88, art. 156",
        "CTN, regras sobre impostos municipais",
        "LC nº 116/2003 para ISS",
        "Legislação tributária municipal"
      ],
      "dryLaw": [
        "CF/88, art. 156, I, II e III",
        "CTN, arts. 32 a 42, 156 conforme extinção, e regras gerais aplicáveis",
        "LC 116/2003, lista de serviços e regras de local do ISS"
      ],
      "jurisprudence": [
        "O STF possui entendimentos relevantes sobre base de cálculo e momento do ITBI, além de temas sobre IPTU progressivo e imunidades tributárias.",
        "O STJ possui jurisprudência importante sobre ISS, lista de serviços, base de cálculo e local de incidência em situações específicas."
      ],
      "objectiveCharge": [
        "Fato gerador do IPTU.",
        "Progressividade fiscal e extrafiscal.",
        "ITBI e transmissão onerosa.",
        "ISS e lista de serviços.",
        "Conflitos entre ISS e ICMS."
      ],
      "discursiveCharge": "Pode cair como parecer sobre cobrança de ITBI, revisão de IPTU, lançamento de ISS, imunidade de entidade, isenção municipal ou defesa em execução fiscal. A resposta deve mostrar competência, fato gerador, base de cálculo, sujeito passivo e risco jurisprudencial.",
      "traps": [
        "IPTU não é taxa de limpeza urbana.",
        "ITBI não incide em transmissão gratuita, que é tema de ITCMD estadual.",
        "ISS não incide sobre qualquer atividade econômica, apenas serviços previstos em lei complementar/lista.",
        "Planta genérica de valores pode exigir lei conforme o tipo de alteração.",
        "Imunidade recíproca não alcança automaticamente todo terceiro privado."
      ],
      "differences": [
        "IPTU x ITR.",
        "ITBI x ITCMD.",
        "ISS x ICMS.",
        "Isenção x imunidade.",
        "Contribuinte x responsável tributário."
      ],
      "commonMistakes": [
        "Não verificar se o imóvel é urbano.",
        "Cobrar ITBI sem analisar transmissão efetiva.",
        "Aplicar ISS fora da lista legal.",
        "Ignorar jurisprudência sobre base de cálculo.",
        "Não conferir lei municipal específica."
      ],
      "miniCase": "Município autua empresa de streaming por ISS. A Procuradoria precisa verificar previsão na lista da LC 116/2003, legislação municipal, local de recolhimento, base de cálculo e entendimento jurisprudencial, evitando autuação genérica.",
      "activeQuestions": [
        "Qual é o imposto municipal envolvido?",
        "Qual é o fato gerador?",
        "Qual é a base de cálculo?",
        "Quem é contribuinte/responsável?",
        "Existe imunidade, isenção ou precedente relevante?"
      ],
      "flashcards": [
        {
          "front": "ITBI é imposto de qual ente?",
          "back": "Município, nos termos do art. 156, II, da Constituição."
        },
        {
          "front": "ISS depende de quê?",
          "back": "Prestação de serviço previsto em lei complementar/lista e legislação municipal instituidora."
        },
        {
          "front": "IPTU pode ser progressivo?",
          "back": "Sim, conforme hipóteses constitucionais, inclusive progressividade fiscal e extrafiscal urbana."
        }
      ],
      "summary": "IPTU, ITBI e ISS são o coração tributário municipal. Estude sempre pela sequência: competência, fato gerador, base de cálculo, contribuinte, benefício/limitação e cobrança.",
      "checklist": [
        "Sei IPTU, ITBI e ISS.",
        "Sei fato gerador de cada um.",
        "Sei principais pegadinhas de ITBI.",
        "Sei ISS e lista de serviços.",
        "Consigo montar parecer tributário municipal."
      ],
      "nextTopic": "Taxas, contribuição de melhoria e preço público"
    },
    {
      "id": "taxas-contribuicao-melhoria-preco-publico",
      "level": "intermediário",
      "title": "Taxas, contribuição de melhoria e preço público",
      "whatIs": "Taxas são tributos vinculados ao exercício do poder de polícia ou a serviço público específico e divisível. Contribuição de melhoria decorre de obra pública que valoriza imóveis. Preço público ou tarifa é remuneração não tributária, geralmente contratual ou decorrente de serviço facultativo em regime específico.",
      "purpose": "Serve para estruturar cobranças municipais sem violar a Constituição. O Procurador precisa evitar que o Município chame de taxa uma cobrança que, na essência, é imposto ou preço público.",
      "plainExplanation": [
        "A taxa tem uma característica fundamental: ela depende de uma atuação estatal específica dirigida ao contribuinte. Pode ser poder de polícia, como fiscalização de licença e funcionamento, ou serviço público específico e divisível, como coleta individualizável em certas hipóteses. Serviços gerais, universais e indivisíveis não podem ser custeados por taxa.",
        "Contribuição de melhoria é mais rara na prática, mas cai em prova. Ela exige obra pública e valorização imobiliária decorrente da obra. Não basta a obra existir; é preciso demonstrar benefício patrimonial ao imóvel e respeitar limites, como custo da obra e acréscimo individual de valor.",
        "Preço público não é tributo. Normalmente decorre de relação mais próxima da escolha do usuário ou de serviço econômico. A diferença é importante porque tributo exige lei, lançamento, regime de direito público e cobrança tributária; preço público segue lógica diversa."
      ],
      "examTechnical": "Para prova, saiba que taxa exige especificidade e divisibilidade ou poder de polícia. Contribuição de melhoria exige obra pública + valorização imobiliária. Preço público não é tributo. A banca costuma apresentar serviços de limpeza, iluminação ou segurança como taxa para ver se o candidato percebe a indivisibilidade.",
      "cityExample": "O Município pretende cobrar contribuição de melhoria após pavimentar rua. A Procuradoria deve exigir processo com custo da obra, delimitação da zona beneficiada, avaliação de valorização dos imóveis, notificação e critérios de rateio, sob pena de cobrança frágil.",
      "legalBase": [
        "CF/88, art. 145, II e III",
        "CTN, arts. 77 a 82",
        "Legislação municipal instituidora de taxas e contribuição de melhoria"
      ],
      "dryLaw": [
        "CF/88, art. 145, II e III",
        "CTN, arts. 77, 78, 79, 81 e 82"
      ],
      "jurisprudence": [
        "A jurisprudência dos tribunais superiores diferencia taxa de preço público e rejeita taxas fundadas em serviços gerais e indivisíveis.",
        "Poder de polícia pode fundamentar taxa quando houver atividade estatal efetiva e estrutura administrativa apta à fiscalização."
      ],
      "objectiveCharge": [
        "Taxa x imposto.",
        "Taxa de polícia x taxa de serviço.",
        "Serviço específico e divisível.",
        "Contribuição de melhoria e valorização.",
        "Preço público x taxa."
      ],
      "discursiveCharge": "Pode cair como parecer sobre criação de taxa de fiscalização, cobrança por coleta, contribuição de melhoria após obra urbana ou defesa de cobrança municipal impugnada por contribuinte.",
      "traps": [
        "Taxa não serve para custear serviço geral.",
        "Iluminação pública não é taxa; hoje há contribuição específica prevista constitucionalmente.",
        "Contribuição de melhoria não é simples reembolso de obra.",
        "Preço público não vira tributo só por ser cobrado pelo Município."
      ],
      "differences": [
        "Taxa x preço público.",
        "Taxa de serviço x taxa de polícia.",
        "Contribuição de melhoria x imposto sobre valorização.",
        "Serviço específico x serviço geral."
      ],
      "commonMistakes": [
        "Criar taxa sem fato gerador vinculado.",
        "Ignorar divisibilidade do serviço.",
        "Cobrar contribuição de melhoria sem provar valorização.",
        "Confundir tarifa com tributo."
      ],
      "miniCase": "Lei cria taxa para custear limpeza de praças e vias públicas. A cobrança é vulnerável porque o serviço é geral e indivisível, não diretamente mensurável para cada contribuinte.",
      "activeQuestions": [
        "Há serviço específico e divisível?",
        "Há poder de polícia?",
        "A cobrança é compulsória?",
        "Existe obra pública e valorização?",
        "É tributo ou preço público?"
      ],
      "flashcards": [
        {
          "front": "Taxa pode financiar serviço geral?",
          "back": "Não. Taxa exige serviço específico e divisível ou poder de polícia."
        },
        {
          "front": "Contribuição de melhoria exige o quê?",
          "back": "Obra pública e valorização imobiliária decorrente da obra."
        },
        {
          "front": "Preço público é tributo?",
          "back": "Não. Tem natureza não tributária."
        }
      ],
      "summary": "Taxas e contribuição de melhoria são tributos vinculados. A prova tenta transformar qualquer custo municipal em taxa; o candidato deve perguntar qual atuação estatal específica justifica a cobrança.",
      "checklist": [
        "Sei taxa de polícia e serviço.",
        "Sei especificidade e divisibilidade.",
        "Sei contribuição de melhoria.",
        "Sei preço público.",
        "Consigo impugnar taxa inconstitucional."
      ],
      "nextTopic": "Obrigação tributária, fato gerador e sujeitos"
    },
    {
      "id": "obrigacao-fato-gerador-sujeitos",
      "level": "básico",
      "title": "Obrigação tributária, fato gerador, sujeito ativo, sujeito passivo e responsabilidade tributária",
      "whatIs": "Obrigação tributária é a relação jurídica que nasce com a ocorrência do fato gerador e liga o sujeito ativo ao sujeito passivo. Pode ser principal, envolvendo pagamento de tributo ou penalidade, ou acessória, envolvendo deveres instrumentais como declarações, cadastros e emissão de documentos.",
      "purpose": "Serve para identificar quando o tributo nasce, quem deve pagar, quem pode cobrar, quais deveres acessórios existem e quando terceiros podem responder por dívida tributária.",
      "plainExplanation": [
        "O fato gerador é o acontecimento previsto em lei que faz nascer a obrigação tributária. No IPTU, por exemplo, a situação ligada ao imóvel urbano; no ISS, a prestação de serviço; no ITBI, a transmissão onerosa inter vivos de imóvel ou direito real.",
        "Sujeito ativo é quem tem o direito de exigir o tributo. Sujeito passivo é quem deve cumprir a obrigação, como contribuinte ou responsável. Contribuinte tem relação direta com o fato gerador; responsável é indicado por lei mesmo sem praticar diretamente o fato gerador.",
        "Obrigação acessória não é 'menos importante'. Descumpri-la pode gerar multa. Para Município, cadastros, declarações de ISS, emissão de notas e informações imobiliárias são instrumentos essenciais de fiscalização."
      ],
      "examTechnical": "Estude CTN arts. 113 a 138. A banca cobra obrigação principal x acessória, fato gerador, sujeito passivo, contribuinte x responsável, solidariedade, capacidade tributária passiva, domicílio tributário e responsabilidade de sucessores, terceiros e infrações.",
      "cityExample": "Empresa prestadora de serviço deixa de recolher ISS, mas a lei municipal atribui responsabilidade ao tomador em certas hipóteses de retenção. A Procuradoria deve verificar se a responsabilidade está prevista em lei, se o serviço ocorreu, se houve retenção devida e quem deve constar no lançamento.",
      "legalBase": [
        "CTN, obrigação tributária e responsabilidade",
        "CF/88, competência tributária municipal",
        "Legislação municipal de ISS, IPTU, ITBI e deveres acessórios"
      ],
      "dryLaw": [
        "CTN, arts. 113 a 138",
        "CTN, arts. 121, 124, 128, 129 a 135",
        "CTN, arts. 114 a 118"
      ],
      "jurisprudence": [
        "A responsabilização de terceiros exige base legal e enquadramento nos requisitos do CTN, não bastando inadimplência da pessoa jurídica.",
        "A jurisprudência exige cuidado na responsabilização de sócios e administradores, especialmente em execução fiscal."
      ],
      "objectiveCharge": [
        "Obrigação principal x acessória.",
        "Fato gerador.",
        "Contribuinte x responsável.",
        "Solidariedade tributária.",
        "Responsabilidade de sócio/administrador."
      ],
      "discursiveCharge": "Pode cair como parecer sobre inclusão de responsável em dívida ativa, multa por obrigação acessória, lançamento contra sucessor imobiliário, retenção de ISS ou redirecionamento de execução fiscal.",
      "traps": [
        "Obrigação acessória pode virar obrigação principal quanto à penalidade pecuniária.",
        "Responsabilidade tributária depende de lei.",
        "Sócio não responde automaticamente por dívida da empresa.",
        "Contribuinte e responsável não são sinônimos.",
        "Fato gerador é definido em lei, não por vontade do fiscal."
      ],
      "differences": [
        "Obrigação principal x acessória.",
        "Contribuinte x responsável.",
        "Sujeito ativo x competência tributária.",
        "Solidariedade x subsidiariedade.",
        "Responsabilidade pessoal x por sucessão."
      ],
      "commonMistakes": [
        "Confundir multa acessória com tributo original.",
        "Incluir sócio sem fundamento legal.",
        "Não identificar fato gerador.",
        "Achar que obrigação acessória não importa."
      ],
      "miniCase": "Imóvel é vendido com débitos de IPTU. A Procuradoria deve analisar responsabilidade do adquirente, natureza propter rem do imposto, certidões apresentadas e regras do CTN sobre sucessão.",
      "activeQuestions": [
        "Qual fato gerador ocorreu?",
        "Quem tem relação direta com o fato?",
        "Há responsável previsto em lei?",
        "A obrigação é principal ou acessória?",
        "Existe solidariedade?"
      ],
      "flashcards": [
        {
          "front": "Obrigação acessória descumprida pode gerar quê?",
          "back": "Penalidade pecuniária, que se converte em obrigação principal quanto à multa."
        },
        {
          "front": "Contribuinte é quem?",
          "back": "Quem tem relação pessoal e direta com o fato gerador."
        },
        {
          "front": "Responsável tributário depende de quê?",
          "back": "Previsão legal."
        }
      ],
      "summary": "Obrigação tributária é a engrenagem da cobrança. Identificar fato gerador, sujeito passivo e responsabilidade evita autuações nulas e execuções fiscais frágeis.",
      "checklist": [
        "Sei fato gerador.",
        "Sei obrigação principal e acessória.",
        "Sei contribuinte e responsável.",
        "Sei responsabilidade tributária.",
        "Consigo analisar inclusão de terceiro."
      ],
      "nextTopic": "Crédito tributário, lançamento e constituição"
    },
    {
      "id": "credito-lancamento-suspensao-extincao-exclusao",
      "level": "avançado",
      "title": "Crédito tributário: lançamento, suspensão, extinção, exclusão, decadência e prescrição",
      "whatIs": "Crédito tributário é a obrigação tributária formalizada e exigível após o lançamento. O lançamento identifica fato gerador, sujeito passivo, base de cálculo, alíquota e valor devido. Suspensão, extinção e exclusão são categorias do CTN que alteram a exigibilidade, eliminam o crédito ou impedem sua constituição/cobrança em certas condições.",
      "purpose": "Serve para saber quando o Município pode cobrar, quando deve esperar, quando perdeu prazo, quando o crédito foi pago ou extinto e quando uma execução fiscal é juridicamente segura.",
      "plainExplanation": [
        "A obrigação nasce com o fato gerador, mas o crédito tributário é constituído pelo lançamento. Sem lançamento válido, a cobrança fica vulnerável. O lançamento pode ser de ofício, por declaração ou por homologação, conforme a participação do contribuinte e o tipo de tributo.",
        "Suspensão da exigibilidade não apaga o crédito; apenas impede sua cobrança enquanto durar a causa. Moratória, depósito integral, reclamações e recursos administrativos, liminar, tutela e parcelamento são hipóteses importantes. Extinção, por outro lado, elimina o crédito, como pagamento, compensação, prescrição, decadência e remissão.",
        "Decadência e prescrição são temas de prova e de prática diária. Decadência atinge o direito de constituir o crédito; prescrição atinge a pretensão de cobrá-lo judicialmente. Para Procurador, errar prazo significa perder receita ou ajuizar execução inviável."
      ],
      "examTechnical": "Domine CTN arts. 142 a 182. Saiba lançamento de ofício, declaração e homologação; hipóteses de suspensão do art. 151; extinção do art. 156; exclusão por isenção/anistia; decadência e prescrição. A banca cobra muito parcelamento, depósito integral e diferença entre decadência e prescrição.",
      "cityExample": "O Município pretende ajuizar execução fiscal de ISS antigo. A Procuradoria deve conferir data do fato gerador, constituição definitiva, notificação, recursos administrativos, parcelamentos, prescrição, protesto/interrupção conforme o caso e inscrição regular em dívida ativa.",
      "legalBase": [
        "CTN, crédito tributário, lançamento, suspensão, extinção e exclusão",
        "Lei de Execução Fiscal",
        "Legislação municipal sobre processo administrativo tributário e parcelamento"
      ],
      "dryLaw": [
        "CTN, arts. 142 a 150",
        "CTN, art. 151",
        "CTN, art. 156",
        "CTN, arts. 173 e 174",
        "CTN, arts. 175 a 182"
      ],
      "jurisprudence": [
        "A jurisprudência distingue decadência e prescrição conforme a modalidade de lançamento e a constituição definitiva do crédito.",
        "Depósito integral suspende a exigibilidade; depósito parcial não produz o mesmo efeito integral."
      ],
      "objectiveCharge": [
        "Modalidades de lançamento.",
        "Suspensão do crédito.",
        "Extinção do crédito.",
        "Exclusão por isenção e anistia.",
        "Decadência x prescrição."
      ],
      "discursiveCharge": "Pode cair como parecer sobre lançamento intempestivo, execução fiscal prescrita, parcelamento, recurso administrativo, certidão positiva com efeito de negativa ou remissão/anistia por lei municipal.",
      "traps": [
        "Suspensão não extingue o crédito.",
        "Isenção exclui crédito, mas não dispensa obrigações acessórias salvo previsão.",
        "Decadência vem antes da constituição; prescrição vem depois da constituição definitiva.",
        "Parcelamento suspende exigibilidade, mas inadimplemento pode reativar cobrança.",
        "Depósito precisa ser integral para suspensão plena."
      ],
      "differences": [
        "Decadência x prescrição.",
        "Suspensão x extinção x exclusão.",
        "Lançamento de ofício x declaração x homologação.",
        "Moratória x parcelamento.",
        "Isenção x anistia."
      ],
      "commonMistakes": [
        "Ajuizar execução sem verificar prescrição.",
        "Confundir recurso administrativo com extinção.",
        "Não provar notificação do lançamento.",
        "Tratar isenção como imunidade.",
        "Ignorar constituição definitiva."
      ],
      "miniCase": "Contribuinte recorre administrativamente contra lançamento de ISS. Enquanto o recurso administrativo estiver pendente nos termos da lei, a exigibilidade fica suspensa, e a inscrição/cobrança deve respeitar o devido processo tributário.",
      "activeQuestions": [
        "O crédito foi lançado?",
        "Houve notificação válida?",
        "A exigibilidade está suspensa?",
        "O crédito foi extinto?",
        "Há decadência ou prescrição?"
      ],
      "flashcards": [
        {
          "front": "Quem constitui o crédito tributário?",
          "back": "O lançamento, atividade administrativa vinculada nos termos do CTN."
        },
        {
          "front": "Parcelamento suspende a exigibilidade?",
          "back": "Sim, conforme CTN art. 151."
        },
        {
          "front": "Decadência e prescrição são iguais?",
          "back": "Não. Decadência é perda do direito de constituir; prescrição é perda da pretensão de cobrar."
        }
      ],
      "summary": "Crédito tributário é onde o Direito Tributário vira cobrança concreta. Para prova e prática, o candidato deve dominar lançamento, suspensão, extinção, exclusão e prazos.",
      "checklist": [
        "Sei modalidades de lançamento.",
        "Sei suspensão do art. 151.",
        "Sei extinção do art. 156.",
        "Sei exclusão por isenção/anistia.",
        "Sei decadência e prescrição."
      ],
      "nextTopic": "Administração tributária, dívida ativa e execução fiscal"
    },
    {
      "id": "administracao-divida-ativa-execucao-fiscal",
      "level": "discursiva",
      "title": "Administração tributária, fiscalização, dívida ativa, certidões e execução fiscal",
      "whatIs": "Administração tributária é a estrutura jurídica e operacional de fiscalização, lançamento, arrecadação, inscrição em dívida ativa e cobrança. Dívida ativa é o crédito regularmente inscrito após apuração de certeza e liquidez. Execução fiscal é a ação judicial de cobrança regulada pela Lei nº 6.830/1980.",
      "purpose": "Serve para transformar crédito tributário em receita efetiva de forma legal. Para Procurador, é um dos temas mais práticos: CDA, prescrição, protesto, execução, garantias, exceção de pré-executividade, embargos e redirecionamento.",
      "plainExplanation": [
        "A inscrição em dívida ativa não é ato automático sem controle. Antes de inscrever, a Administração deve verificar existência do crédito, sujeito passivo correto, valor, origem, fundamento legal, notificação e ausência de suspensão. A Certidão de Dívida Ativa precisa conter requisitos legais para gozar de presunção de certeza e liquidez.",
        "Execução fiscal é procedimento especial para cobrar dívida ativa. O Município ajuíza com CDA, busca citação, penhora, bloqueio, garantia e satisfação do crédito. O executado pode se defender por embargos, após garantia, ou por exceção de pré-executividade em matérias de ordem pública sem dilação probatória.",
        "Na prática moderna, Procuradoria eficiente não ajuíza qualquer dívida automaticamente. Avalia valor, recuperabilidade, prescrição, protesto, cobrança administrativa, conciliação, parcelamento e custo-benefício, respeitando legislação local e diretrizes de racionalidade."
      ],
      "examTechnical": "Estude CTN sobre administração tributária e certidões, Lei de Execução Fiscal, CPC subsidiário, CDA, presunção relativa, requisitos, penhora, embargos, exceção de pré-executividade, redirecionamento e prescrição intercorrente. É tema com alta chance de parecer e objetiva.",
      "cityExample": "Antes de executar IPTU de baixo valor, a Procuradoria analisa se há lei ou ato normativo sobre ajuizamento mínimo, protesto, cobrança administrativa e prescrição. Pode recomendar não ajuizar se antieconômico, desde que haja base normativa e transparência.",
      "legalBase": [
        "CTN, administração tributária e certidões",
        "Lei nº 6.830/1980 — Lei de Execução Fiscal",
        "CPC aplicado subsidiariamente",
        "Legislação municipal sobre dívida ativa, cobrança e transação/parcelamento"
      ],
      "dryLaw": [
        "CTN, arts. 194 a 208",
        "LEF, arts. 2º, 3º, 6º, 8º, 16 e 40",
        "CPC, dispositivos subsidiários sobre execução"
      ],
      "jurisprudence": [
        "A CDA possui presunção relativa de certeza e liquidez, que pode ser afastada por prova do executado.",
        "Prescrição intercorrente em execução fiscal é tema consolidado na jurisprudência, especialmente quando há inércia e paralisação conforme requisitos legais."
      ],
      "objectiveCharge": [
        "Requisitos da CDA.",
        "Presunção de certeza e liquidez.",
        "Embargos x exceção de pré-executividade.",
        "Prescrição intercorrente.",
        "Redirecionamento contra sócio."
      ],
      "discursiveCharge": "Pode cair como parecer sobre ajuizamento de execução, nulidade de CDA, prescrição intercorrente, redirecionamento, protesto de CDA, parcelamento, garantia ou estratégia de cobrança municipal.",
      "traps": [
        "CDA com erro essencial pode ser nula.",
        "Presunção da CDA é relativa, não absoluta.",
        "Exceção de pré-executividade não serve para prova complexa.",
        "Sócio não responde automaticamente por dívida da empresa.",
        "Prescrição intercorrente pode encerrar execução paralisada."
      ],
      "differences": [
        "Dívida ativa tributária x não tributária.",
        "Embargos x exceção de pré-executividade.",
        "Prescrição ordinária x intercorrente.",
        "Protesto x execução fiscal.",
        "Cobrança administrativa x judicial."
      ],
      "commonMistakes": [
        "Inscrever dívida sem revisar dados mínimos.",
        "Ajuizar crédito prescrito.",
        "Redirecionar sem fundamento.",
        "Não controlar prescrição intercorrente.",
        "Ignorar custo de cobrança."
      ],
      "miniCase": "CDA indica contribuinte errado por homônimo. A defesa apresenta exceção de pré-executividade. Como o erro é verificável documentalmente e atinge legitimidade, a Procuradoria deve avaliar correção/substituição possível ou extinção, evitando insistência temerária.",
      "activeQuestions": [
        "A CDA tem requisitos legais?",
        "O crédito é exigível?",
        "A execução é economicamente racional?",
        "Há prescrição?",
        "A defesa exige prova complexa?"
      ],
      "flashcards": [
        {
          "front": "CDA tem presunção absoluta?",
          "back": "Não. A presunção de certeza e liquidez é relativa."
        },
        {
          "front": "Embargos à execução fiscal exigem garantia?",
          "back": "Em regra, sim, conforme Lei de Execução Fiscal."
        },
        {
          "front": "Exceção de pré-executividade serve para quê?",
          "back": "Matérias cognoscíveis de ofício e demonstráveis sem prova complexa."
        }
      ],
      "summary": "Dívida ativa e execução fiscal são a parte operacional da receita municipal. A boa Procuradoria cobra bem, cobra certo e evita execuções inviáveis ou nulas.",
      "checklist": [
        "Sei requisitos da CDA.",
        "Sei execução fiscal básica.",
        "Sei embargos e exceção.",
        "Sei prescrição intercorrente.",
        "Consigo pensar estratégia de cobrança."
      ],
      "nextTopic": "Direito Financeiro e orçamento público"
    },
    {
      "id": "direito-financeiro-orcamento-publico",
      "level": "intermediário",
      "title": "Direito Financeiro, orçamento público, PPA, LDO e LOA",
      "whatIs": "Direito Financeiro disciplina a atividade financeira do Estado: receita, despesa, orçamento, crédito público, controle e responsabilidade na gestão fiscal. O orçamento público organiza juridicamente a previsão de receitas e a autorização de despesas.",
      "purpose": "Serve para impedir gasto sem autorização, planejar políticas públicas, garantir controle democrático e proteger o Município contra desequilíbrio fiscal. Para Procurador, orçamento é limite e fundamento de muitas decisões administrativas e judiciais.",
      "plainExplanation": [
        "O orçamento não é só planilha. Ele é lei formal com função de planejamento e autorização. O Município trabalha com PPA, LDO e LOA: o PPA define programas de médio prazo; a LDO orienta a elaboração da LOA e metas fiscais; a LOA estima receitas e fixa despesas para o exercício.",
        "Receita pública é entrada de recursos; despesa pública é aplicação autorizada desses recursos. Nenhuma despesa pode ser realizada sem previsão e autorização adequadas. Isso aparece em contratação, concurso, aumento de despesa com pessoal, decisão judicial, subvenções e políticas públicas.",
        "A Lei nº 4.320/1964 organiza conceitos clássicos de orçamento, receita e despesa. A LRF adiciona responsabilidade fiscal: planejamento, transparência, equilíbrio, limites, metas, controle e responsabilização."
      ],
      "examTechnical": "Estude CF arts. 165 a 169, Lei 4.320/1964 e LRF. Domine PPA, LDO, LOA, créditos adicionais, receita, despesa, empenho, liquidação, pagamento, restos a pagar, renúncia de receita, despesa obrigatória e limites de pessoal.",
      "cityExample": "Secretaria quer criar programa permanente com pagamento mensal a beneficiários, mas sem dotação suficiente. A Procuradoria deve verificar LOA, compatibilidade com PPA/LDO, estimativa de impacto, fonte de custeio e regras da LRF antes de opinar.",
      "legalBase": [
        "CF/88, arts. 165 a 169",
        "Lei nº 4.320/1964",
        "Lei Complementar nº 101/2000 — LRF",
        "Lei orçamentária municipal vigente"
      ],
      "dryLaw": [
        "CF/88, arts. 165, 166, 167 e 169",
        "Lei nº 4.320/1964, normas sobre receita, despesa e orçamento",
        "LRF, arts. 1º, 14, 15, 16, 17, 19, 20, 42, 48"
      ],
      "jurisprudence": [
        "O controle judicial de políticas públicas deve dialogar com orçamento, separação de poderes e mínimo existencial, sem ignorar deveres constitucionais.",
        "Tribunais de Contas cobram planejamento, dotação, impacto orçamentário e respeito à LRF em criação de despesas."
      ],
      "objectiveCharge": [
        "PPA, LDO e LOA.",
        "Princípios orçamentários.",
        "Créditos adicionais.",
        "Empenho, liquidação e pagamento.",
        "Restos a pagar e limites fiscais."
      ],
      "discursiveCharge": "Pode cair como parecer sobre despesa sem dotação, contratação, aumento de pessoal, criação de benefício, cumprimento de decisão judicial, abertura de crédito adicional ou renúncia de receita.",
      "traps": [
        "Orçamento autoriza despesa, não obriga gastar tudo.",
        "Despesa sem dotação é risco jurídico grave.",
        "PPA, LDO e LOA têm funções diferentes.",
        "Crédito adicional não é cheque em branco.",
        "Restos a pagar sem caixa podem violar responsabilidade fiscal."
      ],
      "differences": [
        "PPA x LDO x LOA.",
        "Empenho x liquidação x pagamento.",
        "Receita prevista x receita arrecadada.",
        "Crédito suplementar x especial x extraordinário.",
        "Despesa obrigatória x discricionária."
      ],
      "commonMistakes": [
        "Responder orçamento como se fosse só contabilidade.",
        "Ignorar LRF em parecer.",
        "Confundir empenho com pagamento.",
        "Não verificar fonte de custeio.",
        "Esquecer créditos adicionais."
      ],
      "miniCase": "Prefeito quer abrir despesa para evento cultural não previsto. A Procuradoria deve verificar dotação, possibilidade de crédito adicional, interesse público, procedimento de contratação e compatibilidade orçamentária.",
      "activeQuestions": [
        "A despesa tem dotação?",
        "Está compatível com PPA e LDO?",
        "Há impacto orçamentário?",
        "Qual é a fase da despesa?",
        "Existe limite da LRF afetado?"
      ],
      "flashcards": [
        {
          "front": "Quais são as três leis orçamentárias centrais?",
          "back": "PPA, LDO e LOA."
        },
        {
          "front": "Empenho é pagamento?",
          "back": "Não. Empenho reserva dotação/obriga orçamento; pagamento é fase posterior."
        },
        {
          "front": "Lei 4.320/1964 trata de quê?",
          "back": "Normas gerais de direito financeiro para orçamentos e balanços dos entes federativos."
        }
      ],
      "summary": "Direito Financeiro mostra se o Município pode gastar, como gastar e com qual controle. Para Procurador, orçamento é argumento jurídico essencial, não detalhe contábil.",
      "checklist": [
        "Sei PPA/LDO/LOA.",
        "Sei fases da despesa.",
        "Sei créditos adicionais.",
        "Sei aplicar Lei 4.320.",
        "Sei consultar LRF."
      ],
      "nextTopic": "Lei de Responsabilidade Fiscal, renúncia de receita e despesa pública"
    },
    {
      "id": "lrf-renuncia-despesa-pessoal-controle",
      "level": "avançado",
      "title": "Lei de Responsabilidade Fiscal: planejamento, renúncia de receita, despesa obrigatória, pessoal, endividamento e transparência",
      "whatIs": "A LRF é a lei complementar que estabelece normas de finanças públicas voltadas à responsabilidade na gestão fiscal, com foco em planejamento, equilíbrio, transparência, controle, limites e responsabilização.",
      "purpose": "Serve para impedir decisões populistas ou improvisadas que desequilibrem as contas públicas. Para Procurador Municipal, é indispensável em pareceres sobre isenção, benefício fiscal, aumento de despesa, contratação, pessoal, dívida e fim de mandato.",
      "plainExplanation": [
        "A LRF transforma responsabilidade fiscal em dever jurídico. Ela exige que o gestor planeje, estime impacto, indique fonte de custeio, respeite metas fiscais, publique relatórios e mantenha controle sobre despesa com pessoal, dívida e restos a pagar.",
        "Renúncia de receita é tema crítico. Isenção, anistia, remissão, subsídio, crédito presumido e benefícios similares podem exigir estimativa de impacto e medidas de compensação ou demonstração de que foram considerados na lei orçamentária. O Município não pode conceder benefício tributário como favor político sem cumprir a LRF.",
        "Despesa obrigatória de caráter continuado exige cuidado especial: criação ou expansão de gasto permanente pede estimativa de impacto e demonstração de origem dos recursos. Em fim de mandato, há regras rígidas para evitar deixar contas sem caixa para o sucessor."
      ],
      "examTechnical": "Estude LRF arts. 1º, 14, 15, 16, 17, 19, 20, 21, 22, 42, 48 e relatórios fiscais. A banca cobra renúncia de receita, despesa com pessoal, aumento de despesa, transparência e restrições de final de mandato.",
      "cityExample": "Vereadores propõem isenção de IPTU para uma categoria sem estimativa de impacto. A Procuradoria deve apontar exigências da LRF, necessidade de lei específica, compatibilidade orçamentária, eventual compensação e risco de invalidade fiscal.",
      "legalBase": [
        "Lei Complementar nº 101/2000 — LRF",
        "CF/88, arts. 163 a 169",
        "Lei nº 4.320/1964",
        "Lei orçamentária e LDO municipais"
      ],
      "dryLaw": [
        "LRF, arts. 1º, 14, 15, 16, 17, 19, 20, 21, 22, 42 e 48",
        "CF/88, arts. 165 a 169"
      ],
      "jurisprudence": [
        "Tribunais de Contas costumam exigir demonstração de impacto, fonte de custeio, compatibilidade orçamentária e respeito aos limites legais.",
        "A jurisprudência reconhece relevância da responsabilidade fiscal, mas também exige análise concreta quando direitos fundamentais e políticas públicas estão em jogo."
      ],
      "objectiveCharge": [
        "Renúncia de receita.",
        "Despesa obrigatória continuada.",
        "Limites de pessoal.",
        "Fim de mandato.",
        "Transparência fiscal."
      ],
      "discursiveCharge": "Pode cair como parecer sobre isenção, anistia, aumento de salário, contratação de pessoal, criação de programa permanente, restos a pagar, dívida, relatório fiscal ou veto jurídico a projeto de lei.",
      "traps": [
        "Renúncia fiscal sem impacto é armadilha clássica.",
        "Despesa continuada exige origem de recursos.",
        "Fim de mandato tem restrições específicas.",
        "Transparência não é opcional.",
        "Limite de pessoal não é só tema contábil; gera vedações jurídicas."
      ],
      "differences": [
        "Renúncia de receita x despesa pública.",
        "Despesa temporária x continuada.",
        "Limite prudencial x limite máximo.",
        "Compatibilidade orçamentária x disponibilidade financeira.",
        "Controle interno x externo."
      ],
      "commonMistakes": [
        "Aprovar benefício fiscal sem LRF.",
        "Ignorar impacto em despesa de pessoal.",
        "Confundir autorização orçamentária com dinheiro em caixa.",
        "Não observar regras de final de mandato.",
        "Não envolver área técnica contábil no parecer."
      ],
      "miniCase": "Projeto cria gratificação permanente para servidores sem impacto e sem fonte. Parecer deve apontar LRF, despesa continuada, limite de pessoal, iniciativa legislativa e risco de nulidade/responsabilização.",
      "activeQuestions": [
        "Há impacto orçamentário-financeiro?",
        "Há fonte de custeio?",
        "É renúncia de receita?",
        "É despesa continuada?",
        "Afeta limite de pessoal ou fim de mandato?"
      ],
      "flashcards": [
        {
          "front": "Qual artigo da LRF é central para renúncia de receita?",
          "back": "Art. 14."
        },
        {
          "front": "Despesa obrigatória continuada exige o quê?",
          "back": "Estimativa de impacto e demonstração da origem dos recursos, conforme LRF."
        },
        {
          "front": "LRF serve só para contabilidade?",
          "back": "Não. Cria deveres jurídicos de planejamento, transparência, equilíbrio e controle."
        }
      ],
      "summary": "LRF é uma das leis mais importantes para Procurador Municipal porque transforma orçamento em responsabilidade jurídica. Todo benefício, despesa e projeto financeiro deve passar por esse filtro.",
      "checklist": [
        "Sei LRF art. 14.",
        "Sei despesa continuada.",
        "Sei limites de pessoal.",
        "Sei regras de fim de mandato.",
        "Consigo redigir alerta fiscal em parecer."
      ],
      "nextTopic": "Receita pública, despesa pública, créditos adicionais e controle"
    },
    {
      "id": "receita-despesa-creditos-controle",
      "level": "lei seca",
      "title": "Receita pública, despesa pública, créditos adicionais, restos a pagar e controle financeiro-orçamentário",
      "whatIs": "Receita pública é o ingresso de recursos nos cofres públicos; despesa pública é a aplicação autorizada desses recursos para atender finalidades públicas. Créditos adicionais ajustam o orçamento quando a dotação inicial é insuficiente ou inexistente. Restos a pagar são despesas empenhadas e não pagas até o fim do exercício.",
      "purpose": "Serve para controlar execução orçamentária e evitar gasto irregular. Para Procurador, é essencial em contratos, convênios, decisões judiciais, despesas de pessoal, subvenções, compras e encerramento do exercício.",
      "plainExplanation": [
        "A execução da despesa tem fases: em regra, empenho, liquidação e pagamento. Empenho reserva dotação e cria obrigação orçamentária; liquidação verifica direito do credor; pagamento quita a obrigação. Pular etapas ou contratar sem dotação gera risco de irregularidade.",
        "Créditos adicionais são ferramentas para ajustar o orçamento: suplementares reforçam dotação existente; especiais criam dotação para despesa sem previsão específica; extraordinários atendem situações urgentes e imprevisíveis. Cada um tem requisitos próprios e deve respeitar autorização legal e fonte de recursos.",
        "Controle financeiro-orçamentário envolve controle interno, controle externo pela Câmara com auxílio do Tribunal de Contas, transparência e prestação de contas. O Procurador precisa traduzir riscos contábeis em consequências jurídicas."
      ],
      "examTechnical": "Priorize Lei 4.320/1964: classificação de receita, despesa, créditos adicionais, estágios da despesa e balanços. Conecte com LRF e Constituição. A banca cobra conceitos objetivos e diferenças entre institutos.",
      "cityExample": "Contrato emergencial foi executado sem empenho prévio. A Procuradoria deve avaliar irregularidade, possibilidade de reconhecimento de obrigação para evitar enriquecimento sem causa, responsabilidade do gestor e necessidade de regularização com controle interno.",
      "legalBase": [
        "Lei nº 4.320/1964",
        "CF/88, arts. 165 a 169 e 70 a 75",
        "LRF",
        "Normas municipais de execução orçamentária"
      ],
      "dryLaw": [
        "Lei nº 4.320/1964, dispositivos sobre receita, despesa e créditos adicionais",
        "CF/88, arts. 70, 71, 74, 165 a 169",
        "LRF, transparência e controle"
      ],
      "jurisprudence": [
        "Tribunais de Contas valorizam a observância de fases da despesa, dotação, empenho prévio, liquidação regular e prestação de contas.",
        "A Administração deve evitar enriquecimento sem causa, mas a regularização de despesa irregular não elimina responsabilidade do agente."
      ],
      "objectiveCharge": [
        "Empenho, liquidação e pagamento.",
        "Créditos adicionais.",
        "Restos a pagar.",
        "Controle interno e externo.",
        "Prestação de contas."
      ],
      "discursiveCharge": "Pode cair como parecer sobre pagamento sem empenho, abertura de crédito adicional, restos a pagar, regularização de despesa, convênio, prestação de contas ou responsabilidade de gestor.",
      "traps": [
        "Empenho não é pagamento.",
        "Crédito suplementar reforça dotação; especial cria dotação nova.",
        "Restos a pagar exigem cuidado com disponibilidade financeira.",
        "Controle interno não é formalidade.",
        "Pagamento por serviço prestado irregularmente exige análise: não premiar fraude, mas evitar enriquecimento sem causa."
      ],
      "differences": [
        "Empenho x liquidação x pagamento.",
        "Crédito suplementar x especial x extraordinário.",
        "Receita orçamentária x extraorçamentária.",
        "Controle interno x externo.",
        "Despesa empenhada x liquidada x paga."
      ],
      "commonMistakes": [
        "Autorizar despesa sem dotação.",
        "Confundir crédito adicional com nova receita automática.",
        "Não verificar fonte de recursos.",
        "Pagar sem liquidação.",
        "Ignorar prestação de contas."
      ],
      "miniCase": "Secretaria pede pagamento de fornecedor por serviço já prestado, mas sem contrato regular. A Procuradoria deve avaliar prova da prestação, preço de mercado, responsabilidade do agente, possibilidade excepcional de indenização e medidas corretivas.",
      "activeQuestions": [
        "Havia dotação?",
        "Foi empenhado?",
        "A despesa foi liquidada?",
        "Qual crédito adicional seria necessário?",
        "Houve controle interno?"
      ],
      "flashcards": [
        {
          "front": "Quais são fases clássicas da despesa?",
          "back": "Empenho, liquidação e pagamento."
        },
        {
          "front": "Crédito especial serve para quê?",
          "back": "Criar dotação para despesa sem previsão específica no orçamento."
        },
        {
          "front": "Restos a pagar são o quê?",
          "back": "Despesas empenhadas e não pagas até o encerramento do exercício."
        }
      ],
      "summary": "Receita, despesa e controle são a parte operacional do orçamento. Para o candidato, é tema de lei seca; para o Procurador, é filtro de legalidade financeira.",
      "checklist": [
        "Sei fases da despesa.",
        "Sei créditos adicionais.",
        "Sei restos a pagar.",
        "Sei controle interno/externo.",
        "Consigo analisar pagamento irregular."
      ],
      "nextTopic": "Próxima fase: Legislação Municipal Premium"
    }
  ]
}
,
  {
    id: 'legislacao-municipal',
    subject: 'Legislação Municipal',
    status: '39E concluída',
    priority: 'Crítica absoluta',
    overview: 'Apostila premium de Legislação Municipal de Itupeva, com foco em Lei Orgânica, Estatuto dos Servidores, plano de cargos e carreiras e reorganização administrativa do Poder Executivo. É a matéria com maior potencial de diferenciação, porque muitos candidatos estudam apenas leis gerais e negligenciam a lei local.',
    lawBase: ['Lei Orgânica do Município de Itupeva', 'Lei Complementar nº 387/2015 — Estatuto dos Servidores Públicos Municipais', 'Lei Complementar nº 389/2015 — Plano de cargos, carreiras, criação, transformação e extinção de cargos e funções', 'Lei Complementar nº 551/2024 — Reorganização da estrutura administrativa do Poder Executivo', 'Constituição Federal, especialmente arts. 29 a 31 e 37 a 41'],
    topics: [
      {
        id: 'lei-organica-autonomia-municipal',
        level: 'básico',
        title: 'Lei Orgânica, autonomia municipal e competências do Município',
        whatIs: 'A Lei Orgânica é a norma institucional básica do Município. Ela funciona como uma Constituição municipal: organiza os Poderes locais, distribui competências, disciplina regras essenciais de administração, processo legislativo, fiscalização, finanças, políticas públicas e relação entre Executivo e Legislativo.',
        purpose: 'Serve para dar forma jurídica à autonomia municipal. Para o Procurador, é a primeira referência quando a dúvida envolve competência do Município, atribuição do Prefeito, atuação da Câmara, iniciativa de leis, organização administrativa, fiscalização legislativa ou limite de atuação local.',
        plainExplanation: [
          'Município não é mera repartição do Estado. A Constituição reconhece sua autonomia política, administrativa, financeira e legislativa. Essa autonomia aparece na eleição de Prefeito e Vereadores, na capacidade de editar leis de interesse local, arrecadar tributos municipais, organizar serviços públicos e gerir sua própria administração.',
          'A Lei Orgânica detalha essa autonomia. Ela não pode contrariar a Constituição Federal nem a Constituição Estadual, mas tem força normativa interna elevada. Por isso, quando a Prefeitura quer reorganizar secretarias, criar cargos, conceder benefícios, regulamentar serviços ou propor projetos, o Procurador precisa conferir se há compatibilidade com a Lei Orgânica.',
          'Em prova, a banca gosta de cobrar a lógica do interesse local. O Município legisla sobre assuntos predominantemente locais, suplementa a legislação federal e estadual quando couber, organiza serviços públicos municipais e exerce poder de polícia administrativa em temas como posturas, uso do solo, obras, trânsito local, meio ambiente urbano e funcionamento de estabelecimentos.'
        ],
        examTechnical: 'Para concurso de Procurador Municipal, o ponto central é relacionar Lei Orgânica com autonomia municipal. A Constituição, especialmente os arts. 29, 30 e 31, fixa o núcleo da organização municipal. A Lei Orgânica concretiza esse núcleo no plano local. A banca pode tentar afirmar que o Município depende de autorização do Estado para tudo; isso é falso. Mas também pode afirmar que o Município tem soberania; isso também é falso. Município tem autonomia, não soberania.',
        cityExample: 'A Câmara aprova projeto que interfere diretamente na estrutura administrativa da Prefeitura, criando obrigações para uma secretaria sem iniciativa do Prefeito. A Procuradoria deve examinar se houve vício de iniciativa, violação à separação de poderes local e incompatibilidade com a Lei Orgânica.',
        legalBase: ['CF/88, arts. 18, 29, 30 e 31', 'Lei Orgânica do Município de Itupeva', 'Regras constitucionais sobre organização municipal e fiscalização'],
        dryLaw: ['CF/88, art. 18', 'CF/88, art. 29', 'CF/88, art. 30', 'CF/88, art. 31', 'Lei Orgânica de Itupeva: dispositivos sobre organização do Município, competências, Poderes e fiscalização'],
        jurisprudence: ['O STF possui entendimento consolidado de que leis municipais de iniciativa parlamentar não podem invadir a reserva de iniciativa do chefe do Executivo quando tratam de organização administrativa, atribuições de órgãos ou regime jurídico de servidores.', 'A autonomia municipal deve ser exercida dentro dos limites da Constituição Federal, especialmente quanto à separação de poderes, competência legislativa e responsabilidade fiscal.'],
        objectiveCharge: ['Diferença entre autonomia e soberania.', 'Competência municipal para legislar sobre interesse local.', 'Competência suplementar municipal.', 'Fiscalização do Município pela Câmara com auxílio do Tribunal de Contas.', 'Limites da Lei Orgânica diante da Constituição.'],
        discursiveCharge: 'Pode cair como parecer sobre projeto de lei municipal, vício de iniciativa, competência da Câmara, atribuição do Prefeito, organização de secretaria, criação de despesa ou conflito entre Lei Orgânica e Constituição.',
        traps: ['Município tem autonomia, não soberania.', 'Lei Orgânica não pode contrariar Constituição Federal.', 'Interesse local não significa interesse exclusivo; significa predominância local.', 'Câmara fiscaliza, mas não administra a Prefeitura.', 'Iniciativa parlamentar não pode invadir organização administrativa do Executivo.'],
        differences: ['Autonomia x soberania: autonomia é autogoverno limitado pela Constituição; soberania é poder supremo do Estado brasileiro.', 'Competência legislativa local x suplementar: local trata do interesse predominante do Município; suplementar completa normas federais/estaduais no que couber.', 'Fiscalização x administração: fiscalizar é controlar; administrar é executar políticas e gerir órgãos.'],
        commonMistakes: ['Decorar artigos sem entender o interesse local.', 'Achar que todo tema urbano é automaticamente municipal sem verificar normas gerais.', 'Ignorar vício de iniciativa em projeto de vereador.', 'Confundir atribuição da Câmara com poder de comandar secretarias.'],
        miniCase: 'Vereador apresenta projeto obrigando a Secretaria de Saúde a criar setor específico, definir cargos e estabelecer escala de servidores. Ainda que a finalidade seja boa, há forte risco de vício de iniciativa por interferência na organização administrativa do Executivo.',
        activeQuestions: ['Qual é o interesse local envolvido?', 'Há vício de iniciativa?', 'A Lei Orgânica autoriza a medida?', 'A Câmara está fiscalizando ou administrando?', 'Existe impacto financeiro e previsão orçamentária?'],
        flashcards: [
          { front: 'Município tem soberania?', back: 'Não. Município tem autonomia política, administrativa, legislativa e financeira nos limites da Constituição.' },
          { front: 'Qual o núcleo da competência municipal?', back: 'Legislar sobre interesse local, suplementar normas federais/estaduais quando couber e organizar/prestar serviços públicos locais.' },
          { front: 'Lei Orgânica é superior à Constituição?', back: 'Não. A Lei Orgânica deve respeitar a Constituição Federal e a Constituição Estadual.' }
        ],
        summary: 'Lei Orgânica é a base institucional do Município. Para prova, domine autonomia, interesse local, competências, separação de poderes e fiscalização. Para parecer, verifique competência, iniciativa, orçamento e compatibilidade constitucional.',
        checklist: ['Sei explicar Lei Orgânica.', 'Sei diferenciar autonomia e soberania.', 'Sei aplicar interesse local.', 'Sei identificar vício de iniciativa.', 'Consigo elaborar parecer sobre projeto municipal.'],
        nextTopic: 'Poder Executivo municipal: Prefeito, secretarias e direção administrativa'
      },
      {
        id: 'executivo-municipal-prefeito-secretarias',
        level: 'intermediário',
        title: 'Poder Executivo municipal: Prefeito, secretarias, direção superior e atos de gestão',
        whatIs: 'É o conjunto de regras que definem a atuação do Prefeito como chefe do Executivo municipal, a estrutura de secretarias, órgãos e unidades administrativas, e a forma como a Prefeitura executa políticas públicas, serviços e atos de gestão.',
        purpose: 'Serve para identificar quem decide, quem executa, quem pode assinar atos, quem representa politicamente a Administração e quais matérias dependem de lei, decreto, portaria ou ato administrativo interno.',
        plainExplanation: [
          'O Prefeito é o chefe do Poder Executivo local. Ele exerce direção superior da Administração, sanciona e veta leis, expede decretos e regulamentos, administra bens e serviços municipais, encaminha projetos de lei de sua iniciativa, propõe orçamento e pratica atos de gestão dentro dos limites constitucionais e legais.',
          'Secretarias e órgãos municipais não possuem vontade própria desvinculada do Município. Eles são instrumentos de execução administrativa. A reorganização de estrutura, criação de órgãos, definição de atribuições e cargos costuma envolver iniciativa do Executivo, lei formal quando houver matéria reservada e observância da Lei Orgânica e da legislação específica.',
          'Na prática da Procuradoria, esse tema aparece todos os dias: minuta de decreto, parecer sobre competência de secretário, delegação de assinatura, criação de comissão, abertura de processo administrativo, regulamentação de lei municipal, resposta a requerimento da Câmara e defesa judicial de ato do Executivo.'
        ],
        examTechnical: 'A prova tende a cobrar iniciativa privativa do Chefe do Executivo, poder regulamentar, limites da delegação administrativa e separação de poderes. Decreto regulamentar não cria obrigações novas sem base legal; ele detalha a execução da lei. Portaria, resolução e ordem de serviço são atos internos ou específicos, conforme competência.',
        cityExample: 'A Prefeitura pretende reorganizar uma secretaria, alterar denominação de departamentos e redefinir cargos em comissão. A Procuradoria deve verificar a Lei Complementar nº 551/2024, a Lei Orgânica, a necessidade de lei formal, impacto orçamentário e compatibilidade com o art. 37 da Constituição.',
        legalBase: ['Lei Orgânica de Itupeva', 'LC nº 551/2024', 'CF/88, art. 37', 'CF/88, regras sobre separação de poderes aplicadas por simetria'],
        dryLaw: ['Lei Orgânica: competências do Prefeito', 'LC nº 551/2024: estrutura administrativa', 'CF/88, art. 37', 'CF/88, arts. 29 e 30'],
        jurisprudence: ['O STF costuma invalidar leis de iniciativa parlamentar que criem atribuições para órgãos do Executivo ou interfiram na organização administrativa, por violação à separação de poderes e reserva de iniciativa.', 'Cargos em comissão devem se destinar a direção, chefia e assessoramento, não a funções técnicas ou burocráticas permanentes.'],
        objectiveCharge: ['Competências típicas do Prefeito.', 'Diferença entre lei e decreto regulamentar.', 'Reserva de iniciativa do Executivo.', 'Cargos em comissão e funções de confiança.', 'Separação de poderes municipal.'],
        discursiveCharge: 'Pode cair como parecer sobre projeto parlamentar que cria obrigação para secretaria, decreto regulamentar sem lei, reorganização administrativa, nomeação em cargo comissionado ou delegação de competência.',
        traps: ['Decreto não substitui lei quando a matéria exige lei formal.', 'Secretário não tem competência universal; precisa de delegação ou atribuição normativa.', 'Cargo em comissão não serve para burlar concurso.', 'Boa intenção legislativa não corrige vício de iniciativa.'],
        differences: ['Lei x decreto: lei inova primariamente; decreto regulamenta a execução da lei.', 'Órgão x entidade: órgão não tem personalidade jurídica; entidade tem.', 'Cargo efetivo x comissão: efetivo depende de concurso; comissão é livre nomeação para direção, chefia ou assessoramento.'],
        commonMistakes: ['Autorizar decreto para criar obrigação sem lei.', 'Esquecer impacto orçamentário.', 'Ignorar a LC de estrutura administrativa.', 'Não verificar competência de quem assina o ato.', 'Confundir delegação com transferência definitiva de competência.'],
        miniCase: 'Secretário municipal assina convênio sem autorização legal ou delegação expressa. A Procuradoria deve analisar competência, eventual ratificação, risco de nulidade e providências para regularização.',
        activeQuestions: ['Quem tem competência?', 'A matéria exige lei?', 'Existe base na LC nº 551/2024?', 'O ato cria despesa?', 'Há vício de iniciativa?'],
        flashcards: [
          { front: 'Decreto pode criar obrigação primária sem lei?', back: 'Em regra, não. Decreto regulamentar detalha a execução da lei.' },
          { front: 'Cargo em comissão serve para atividade burocrática permanente?', back: 'Não. Deve se destinar a direção, chefia e assessoramento.' },
          { front: 'Secretaria tem personalidade jurídica?', back: 'Não. Secretaria é órgão integrante da Administração direta.' }
        ],
        summary: 'O Executivo municipal executa políticas, organiza serviços e pratica atos de gestão. Em prova, foque em competência, iniciativa, decreto, cargos e separação de poderes. Em parecer, sempre confira Lei Orgânica, LC nº 551/2024 e art. 37 da Constituição.',
        checklist: ['Sei competências do Prefeito.', 'Sei diferenciar lei, decreto e portaria.', 'Sei identificar vício de iniciativa.', 'Sei usar a LC nº 551/2024.', 'Consigo analisar competência de secretário.'],
        nextTopic: 'Câmara Municipal, processo legislativo e fiscalização'
      },
      {
        id: 'camara-processo-legislativo-fiscalizacao',
        level: 'intermediário',
        title: 'Câmara Municipal, processo legislativo, fiscalização e relação com o Executivo',
        whatIs: 'É o conjunto de regras sobre o Poder Legislativo municipal, sua função de legislar, fiscalizar o Executivo, julgar contas em certas hipóteses, aprovar leis locais e exercer controle político-administrativo dentro dos limites constitucionais.',
        purpose: 'Serve para controlar a validade das leis municipais e dos atos legislativos. Para Procurador, é essencial para examinar autógrafos, vetos, sanções, vícios de iniciativa, requerimentos de informação, comissões, fiscalização e controle de contas.',
        plainExplanation: [
          'A Câmara Municipal tem duas grandes funções: legislar e fiscalizar. Ela aprova leis de interesse local, vota orçamento, analisa projetos, fiscaliza atos do Executivo e exerce controle político. Mas fiscalizar não significa assumir a gestão da Prefeitura.',
          'O processo legislativo municipal envolve iniciativa, discussão, votação, sanção ou veto, promulgação e publicação. Se a iniciativa for de autoridade errada em matéria reservada ao Executivo, a lei pode nascer inconstitucional. A sanção do Prefeito nem sempre corrige vício de iniciativa, especialmente quando há reserva constitucional.',
          'A fiscalização legislativa deve respeitar limites. Requerimentos de informação são legítimos, mas não podem inviabilizar a Administração, exigir providências administrativas diretas ou violar sigilo legal. O Procurador deve equilibrar transparência, separação de poderes e proteção jurídica do Município.'
        ],
        examTechnical: 'A banca cobra muito vício formal subjetivo de iniciativa e separação de poderes. Também pode cobrar fiscalização contábil, financeira, orçamentária, operacional e patrimonial, exercida pela Câmara com auxílio do Tribunal de Contas. No Município, o parecer prévio do Tribunal de Contas sobre contas do Prefeito tem peso relevante, mas a Câmara exerce julgamento político conforme Constituição e Lei Orgânica.',
        cityExample: 'A Câmara aprova lei de iniciativa parlamentar obrigando o Executivo a fornecer determinado benefício, criando fluxo administrativo, prazo, despesa e atribuições para secretaria. A Procuradoria deve avaliar vício de iniciativa, impacto financeiro e eventual veto jurídico.',
        legalBase: ['CF/88, arts. 29, 30 e 31', 'Lei Orgânica de Itupeva', 'Regimento Interno da Câmara quando necessário', 'Jurisprudência do STF sobre iniciativa e separação de poderes'],
        dryLaw: ['CF/88, art. 29', 'CF/88, art. 30', 'CF/88, art. 31', 'Lei Orgânica: processo legislativo, sanção, veto e fiscalização'],
        jurisprudence: ['STF: leis municipais de iniciativa parlamentar que invadem organização administrativa do Executivo podem violar separação de poderes.', 'A fiscalização legislativa é legítima, mas deve observar devido processo, competência, finalidade pública e limites constitucionais.'],
        objectiveCharge: ['Funções da Câmara.', 'Processo legislativo municipal.', 'Sanção e veto.', 'Fiscalização com auxílio do Tribunal de Contas.', 'Vício de iniciativa.'],
        discursiveCharge: 'Pode cair como parecer sobre veto jurídico, constitucionalidade de projeto de vereador, resposta a requerimento de informações, CPI municipal ou fiscalização de contrato.',
        traps: ['Sanção não cura todo vício de iniciativa.', 'Câmara fiscaliza, mas não manda diretamente em servidor do Executivo.', 'Requerimento de informação não pode violar dados protegidos sem base legal.', 'Controle político não elimina controle jurídico.'],
        differences: ['Sanção x promulgação: sanção é concordância do Executivo; promulgação atesta existência da lei.', 'Veto jurídico x político: jurídico por inconstitucionalidade/ilegalidade; político por contrariedade ao interesse público.', 'Fiscalização x cogestão: controlar não é administrar.'],
        commonMistakes: ['Tratar todo projeto de vereador como válido por representar interesse público.', 'Não analisar iniciativa.', 'Não verificar impacto orçamentário.', 'Responder requerimento da Câmara sem cuidado com LGPD ou sigilo.', 'Confundir parecer do Tribunal de Contas com julgamento automático.'],
        miniCase: 'Projeto parlamentar cria programa social, define órgão executor, impõe contratação de equipe e fixa prazo de implantação. A finalidade é socialmente relevante, mas há risco de vício de iniciativa e criação de despesa sem planejamento.',
        activeQuestions: ['Quem iniciou o projeto?', 'A matéria é reservada ao Executivo?', 'Cria atribuições para órgão?', 'Cria despesa?', 'Cabe veto jurídico?'],
        flashcards: [
          { front: 'A Câmara pode fiscalizar o Executivo?', back: 'Sim, dentro dos limites constitucionais e da Lei Orgânica, sem assumir a administração.' },
          { front: 'Vício de iniciativa é sempre curado pela sanção?', back: 'Não. Em matérias de iniciativa reservada, a sanção não necessariamente convalida o vício.' },
          { front: 'Quem auxilia a Câmara no controle externo municipal?', back: 'O Tribunal de Contas competente.' }
        ],
        summary: 'Câmara legisla e fiscaliza, mas não administra. O tema exige atenção a processo legislativo, iniciativa, veto, fiscalização e separação de poderes. Para Procurador, é matéria diária em análise de projetos e autógrafos.',
        checklist: ['Sei funções da Câmara.', 'Sei processo legislativo básico.', 'Sei diferenciar veto jurídico e político.', 'Sei identificar vício de iniciativa.', 'Consigo redigir fundamentos de veto/parecer.'],
        nextTopic: 'Estatuto dos servidores municipais: provimento, direitos, deveres e responsabilidades'
      },
      {
        id: 'estatuto-servidores-municipais',
        level: 'avançado',
        title: 'Estatuto dos Servidores Municipais: regime jurídico, provimento, direitos, deveres e responsabilidade funcional',
        whatIs: 'O Estatuto dos Servidores Municipais é a lei que disciplina a vida funcional dos servidores estatutários de Itupeva: ingresso, provimento, posse, exercício, estágio probatório, direitos, deveres, vantagens, licenças, regime disciplinar, responsabilidade e processo administrativo.',
        purpose: 'Serve para orientar a gestão de pessoal, evitar nulidades, proteger o servidor contra arbitrariedades e proteger o Município contra pagamentos indevidos, nomeações irregulares, sanções mal aplicadas e passivos judiciais.',
        plainExplanation: [
          'Servidor estatutário não tem contrato de trabalho comum; ele ocupa cargo público regido por lei. Por isso, seus direitos e deveres não decorrem de negociação privada, mas de regime jurídico legal. No Município de Itupeva, o Estatuto local é a referência principal.',
          'A vida funcional começa com concurso, nomeação, posse e exercício. Depois vêm estágio probatório, avaliação, estabilidade, progressões, licenças, afastamentos e deveres funcionais. Cada ato precisa respeitar competência, forma, motivação e publicação quando necessária.',
          'O regime disciplinar é uma área sensível. Antes de punir, o Município deve apurar fatos, garantir contraditório e ampla defesa, individualizar conduta, observar prescrição e aplicar sanção proporcional. Uma punição mal instruída pode ser anulada judicialmente e gerar reintegração, indenização ou passivo.'
        ],
        examTechnical: 'Para prova, domine diferença entre cargo, emprego e função; provimento originário e derivado; posse e exercício; estabilidade e estágio probatório; acumulação constitucional; deveres e proibições; sindicância e PAD; responsabilidade civil, penal e administrativa. A lei local deve ser lida literalmente, porque banca pode cobrar prazos, requisitos e nomenclaturas próprias.',
        cityExample: 'Servidor é acusado de abandono de cargo. A Procuradoria deve orientar abertura de procedimento adequado, comprovação das ausências, citação/notificação, defesa, relatório, decisão motivada e respeito ao Estatuto, evitando demissão nula.',
        legalBase: ['LC nº 387/2015 — Estatuto dos Servidores Públicos Municipais de Itupeva', 'CF/88, arts. 37 a 41', 'Lei Orgânica de Itupeva', 'Princípios do devido processo administrativo'],
        dryLaw: ['LC nº 387/2015: provimento, posse, exercício, direitos, deveres, proibições, responsabilidade e processo disciplinar', 'CF/88, art. 37', 'CF/88, art. 41'],
        jurisprudence: ['STF: contratação e ingresso em cargo efetivo exigem concurso público, ressalvadas hipóteses constitucionais.', 'STJ: sanção disciplinar exige processo regular, motivação, proporcionalidade e observância da prescrição aplicável.'],
        objectiveCharge: ['Cargo, emprego e função.', 'Concurso público.', 'Estágio probatório e estabilidade.', 'Acumulação de cargos.', 'PAD, sindicância e sanções.', 'Direitos e licenças estatutárias.'],
        discursiveCharge: 'Pode cair como parecer sobre exoneração, acumulação ilegal, licença, vantagem funcional, PAD, sindicância, estabilidade, demissão, abandono, reintegração ou pagamento indevido.',
        traps: ['CLT não rege automaticamente servidor estatutário.', 'Estabilidade não é imunidade contra PAD.', 'Cargo em comissão não substitui concurso para função permanente.', 'Acumulação só é possível nas hipóteses constitucionais e com compatibilidade de horários.', 'Processo disciplinar sem defesa é anulável.'],
        differences: ['Cargo efetivo x cargo em comissão.', 'Posse x exercício.', 'Estágio probatório x estabilidade.', 'Sindicância x PAD.', 'Responsabilidade administrativa x civil x penal.'],
        commonMistakes: ['Aplicar regra trabalhista a servidor estatutário.', 'Punir sem processo.', 'Não verificar prescrição disciplinar.', 'Conceder vantagem sem lei.', 'Não conferir compatibilidade de horários em acumulação.'],
        miniCase: 'Servidor efetivo pede licença remunerada sem previsão clara no Estatuto. O Procurador deve verificar a LC nº 387/2015 e concluir que vantagem funcional depende de previsão legal expressa, sob pena de violar legalidade e gerar responsabilização.',
        activeQuestions: ['Qual é o regime jurídico do servidor?', 'Existe cargo criado por lei?', 'A vantagem está prevista no Estatuto?', 'Foi garantida defesa?', 'Há prazo prescricional?'],
        flashcards: [
          { front: 'Servidor estatutário tem contrato comum?', back: 'Não. Ele é regido por regime jurídico legal, definido no Estatuto.' },
          { front: 'Estabilidade impede demissão?', back: 'Não. Servidor estável pode perder cargo nas hipóteses constitucionais e mediante processo regular.' },
          { front: 'Vantagem funcional pode ser concedida sem lei?', back: 'Não. Remuneração e vantagens exigem previsão legal.' }
        ],
        summary: 'Estatuto local é leitura obrigatória. Ele rege a vida funcional do servidor e é fonte direta de questões e pareceres. Em prova, atenção a conceitos; em parecer, atenção a processo, competência e legalidade estrita.',
        checklist: ['Sei cargo, emprego e função.', 'Sei posse e exercício.', 'Sei estágio probatório e estabilidade.', 'Sei PAD e sindicância.', 'Consigo analisar vantagem/licença à luz do Estatuto.'],
        nextTopic: 'Plano de cargos, carreiras e remuneração'
      },
      {
        id: 'plano-cargos-carreiras-remuneracao',
        level: 'avançado',
        title: 'Plano de cargos, carreiras, remuneração e evolução funcional',
        whatIs: 'Plano de cargos e carreiras é a legislação que organiza os cargos efetivos, funções, classes, referências, padrões remuneratórios, evolução funcional, enquadramento e regras de desenvolvimento na carreira dos servidores municipais.',
        purpose: 'Serve para dar racionalidade à estrutura de pessoal, evitar improviso remuneratório, permitir progressões conforme critérios legais e proteger o Município contra equiparações indevidas, reenquadramentos sem base legal e aumento irregular de despesa com pessoal.',
        plainExplanation: [
          'A Administração só pode criar cargos, carreiras, vencimentos e vantagens por lei. O plano de cargos define o desenho da força de trabalho: quais cargos existem, quais atribuições possuem, qual carga horária, qual tabela de vencimentos, como ocorre progressão e quais requisitos permitem evolução.',
          'Para o servidor, o plano é garantia de previsibilidade. Para a Prefeitura, é instrumento de gestão. Para o Procurador, é campo de controle de legalidade: verificar se há cargo criado por lei, se o enquadramento é correto, se a progressão cumpre requisitos e se o impacto financeiro respeita orçamento e LRF.',
          'Na prova, esse tema costuma parecer administrativo, financeiro e constitucional ao mesmo tempo. Envolve art. 37 da Constituição, legalidade remuneratória, concurso público, vedação de equiparações automáticas, limites da LRF e regras específicas da lei local.'
        ],
        examTechnical: 'O candidato deve estudar a LC nº 389/2015 em conjunto com Constituição e LRF. Cargos efetivos dependem de lei e concurso. Reajustes, vantagens, progressões e reenquadramentos precisam de base legal, dotação, estimativa de impacto e respeito aos limites de despesa com pessoal. Lei local pode ter detalhes que a banca cobra literalmente.',
        cityExample: 'Grupo de servidores pede reenquadramento em padrão superior alegando isonomia com outro cargo. A Procuradoria deve verificar atribuições, requisitos legais, plano de carreira, vedação de equiparação, impacto financeiro e eventual necessidade de lei específica.',
        legalBase: ['LC nº 389/2015 — Plano de cargos e carreiras de Itupeva', 'CF/88, art. 37', 'CF/88, art. 169', 'Lei de Responsabilidade Fiscal'],
        dryLaw: ['LC nº 389/2015: cargos, carreiras, tabelas, progressão e enquadramento', 'CF/88, art. 37, II, X e XIII', 'CF/88, art. 169', 'LRF: despesa com pessoal'],
        jurisprudence: ['STF: não cabe equiparação remuneratória automática entre servidores por decisão judicial com fundamento apenas em isonomia, diante da exigência de lei específica.', 'A criação de cargos e aumento de remuneração exigem lei e observância orçamentária.'],
        objectiveCharge: ['Criação de cargos por lei.', 'Concurso público.', 'Vedação de equiparação.', 'Progressão e promoção.', 'Despesa com pessoal.', 'Limites da LRF.'],
        discursiveCharge: 'Pode cair como parecer sobre criação de cargo, reenquadramento, progressão, reajuste, vantagem, cargo em comissão, impacto financeiro ou adequação à LRF.',
        traps: ['Isonomia não autoriza aumento sem lei.', 'Reenquadramento não pode burlar concurso.', 'Progressão exige cumprimento de requisitos legais.', 'Cargo em comissão não substitui carreira efetiva.', 'Impacto orçamentário é indispensável em aumento de despesa.'],
        differences: ['Progressão x promoção: podem variar conforme lei local; leia a nomenclatura da LC nº 389/2015.', 'Vencimento x remuneração: vencimento é básico; remuneração inclui vantagens.', 'Reajuste geral x revisão específica de carreira.', 'Cargo x função gratificada.'],
        commonMistakes: ['Usar analogia para criar vantagem.', 'Ignorar tabelas e anexos.', 'Não verificar cargo de origem e atribuições.', 'Não calcular impacto financeiro.', 'Tratar decisão administrativa como se pudesse alterar lei de carreira.'],
        miniCase: 'Servidor em estágio probatório requer progressão automática prevista apenas para servidores que cumpriram interstício e avaliação. A Procuradoria deve conferir a lei local e, se requisitos não foram preenchidos, opinar pelo indeferimento motivado.',
        activeQuestions: ['Existe cargo criado por lei?', 'Qual tabela se aplica?', 'A progressão cumpriu requisitos?', 'Há dotação e impacto?', 'A medida viola equiparação vedada?'],
        flashcards: [
          { front: 'Pode haver aumento remuneratório sem lei?', back: 'Não. Remuneração e vantagens de servidores dependem de lei específica e observância orçamentária.' },
          { front: 'Plano de carreira pode burlar concurso?', back: 'Não. Evolução funcional não pode transformar servidor em cargo diverso sem concurso quando houver mudança substancial.' },
          { front: 'Isonomia basta para equiparar vencimentos?', back: 'Não. A Constituição veda equiparações automáticas, exigindo lei.' }
        ],
        summary: 'Plano de cargos é lei de estrutura de pessoal. Para Procurador, é tema de legalidade remuneratória, concurso, orçamento e LRF. Leia a LC nº 389/2015 com atenção aos anexos.',
        checklist: ['Sei função do plano de carreira.', 'Sei diferença entre vencimento e remuneração.', 'Sei progressão/promoção conforme lei local.', 'Sei vedação de equiparação.', 'Consigo analisar impacto financeiro.'],
        nextTopic: 'Reorganização administrativa do Executivo e estrutura de órgãos'
      },
      {
        id: 'reorganizacao-administrativa-lc551',
        level: 'avançado',
        title: 'Reorganização da estrutura administrativa do Executivo municipal — LC nº 551/2024',
        whatIs: 'É a lei local que organiza a Administração Pública do Poder Executivo de Itupeva, seus órgãos, secretarias, estrutura de direção, assessoramento e cargos de provimento em comissão.',
        purpose: 'Serve para identificar quais órgãos existem, como se distribuem atribuições, quais cargos de direção/chefia/assessoramento compõem a estrutura e qual é a arquitetura administrativa da Prefeitura.',
        plainExplanation: [
          'Toda Prefeitura precisa de estrutura para funcionar: gabinete, procuradoria, secretarias, departamentos, coordenadorias e unidades. A reorganização administrativa define esse desenho. Ela é importante porque competência administrativa não nasce de costume; nasce da lei e dos atos de organização válidos.',
          'A LC nº 551/2024 deve ser usada para conferir se determinado órgão existe, se determinada secretaria tem atribuição para conduzir tema, se cargo comissionado tem função compatível e se a estrutura respeita o art. 37 da Constituição.',
          'Em prova de Procurador, esse tema pode ser cobrado como legislação municipal literal, mas também como raciocínio jurídico: cargos em comissão só podem servir a direção, chefia e assessoramento; criação de estrutura exige lei; atribuição administrativa precisa respeitar competência; reorganização deve observar orçamento e limites de pessoal.'
        ],
        examTechnical: 'O foco é cruzar lei local com Constituição. A LC nº 551/2024 reorganiza órgãos e cargos, mas deve ser interpretada à luz da legalidade, impessoalidade, eficiência, concurso público, cargos em comissão e responsabilidade fiscal. A banca pode cobrar nomes de estruturas, finalidade da lei e limites constitucionais.',
        cityExample: 'Um contrato é instruído por secretaria sem atribuição relacionada ao objeto. O Procurador deve verificar a LC nº 551/2024 para confirmar competência material e orientar correção de fluxo ou ratificação por autoridade competente, se juridicamente possível.',
        legalBase: ['LC nº 551/2024', 'Lei Orgânica de Itupeva', 'CF/88, art. 37', 'CF/88, art. 169', 'LRF'],
        dryLaw: ['LC nº 551/2024: estrutura administrativa e cargos comissionados', 'CF/88, art. 37, II e V', 'CF/88, art. 169'],
        jurisprudence: ['STF: cargos em comissão devem ter atribuições de direção, chefia ou assessoramento, sendo inconstitucional sua criação para atividades meramente técnicas, burocráticas ou permanentes.', 'A criação de cargos e reorganização administrativa deve respeitar iniciativa do Executivo e estimativa de impacto quando gerar despesa.'],
        objectiveCharge: ['Estrutura administrativa do Executivo.', 'Cargos em comissão.', 'Órgãos e atribuições.', 'Iniciativa legislativa.', 'Compatibilidade com art. 37 da Constituição.'],
        discursiveCharge: 'Pode cair como parecer sobre criação de cargo, alteração de secretaria, competência de órgão, validade de assinatura, excesso de comissionados ou reorganização administrativa.',
        traps: ['Cargo comissionado não é atalho para contratação sem concurso.', 'Órgão sem personalidade jurídica não responde em nome próprio, salvo hipóteses processuais específicas.', 'Atribuição de secretaria precisa estar na lei ou ato normativo válido.', 'Reorganização que aumenta despesa exige análise orçamentária.'],
        differences: ['Secretaria x departamento x cargo: secretaria é órgão; departamento é unidade; cargo é posição ocupada por agente.', 'Cargo em comissão x função de confiança.', 'Competência legal x conveniência administrativa.', 'Estrutura formal x atuação de fato.'],
        commonMistakes: ['Não consultar a LC nº 551/2024 antes de opinar.', 'Validar assinatura de autoridade incompetente.', 'Ignorar cargo em comissão com atribuição incompatível.', 'Não avaliar impacto financeiro.', 'Confundir organograma com lei: organograma ajuda, mas a base é normativa.'],
        miniCase: 'Departamento sem atribuição legal assume fiscalização de contrato de outra área. O parecer deve recomendar designação formal de fiscal competente e ajuste do fluxo conforme estrutura administrativa.',
        activeQuestions: ['Qual órgão é competente?', 'A atribuição está na LC nº 551/2024?', 'O cargo é compatível com direção/chefia/assessoramento?', 'Há aumento de despesa?', 'Quem deve assinar?'],
        flashcards: [
          { front: 'LC nº 551/2024 trata de quê?', back: 'Reorganização da estrutura administrativa do Poder Executivo de Itupeva, órgãos da Prefeitura e cargos de provimento em comissão.' },
          { front: 'Cargo em comissão pode ser técnico permanente?', back: 'Não. Deve ser destinado a direção, chefia ou assessoramento.' },
          { front: 'Organograma substitui lei?', back: 'Não. Organograma orienta visualmente; a base jurídica é a lei e atos normativos válidos.' }
        ],
        summary: 'A LC nº 551/2024 é o mapa da Prefeitura. Para estudo, leia seus órgãos e atribuições. Para parecer, use-a para confirmar competência, estrutura, cargos e validade dos atos administrativos.',
        checklist: ['Sei finalidade da LC nº 551/2024.', 'Sei usar estrutura administrativa em parecer.', 'Sei limites de cargo comissionado.', 'Sei verificar competência de órgão.', 'Consigo cruzar lei local com art. 37.'],
        nextTopic: 'Legislação municipal em prova objetiva e parecer jurídico'
      },
      {
        id: 'legislacao-municipal-prova-parecer',
        level: 'discursiva',
        title: 'Como estudar Legislação Municipal para objetiva, discursiva e parecer jurídico',
        whatIs: 'É o método de transformar leis locais em conhecimento de prova e atuação prática. Não basta ler a lei: é preciso entender quem decide, qual competência, qual procedimento, qual consequência jurídica e quais artigos viram pegadinha.',
        purpose: 'Serve para estudar com eficiência a matéria mais local do concurso. Legislação Municipal costuma diferenciar candidatos porque muitos deixam para o fim. Para Procurador, ela também é essencial para pareceres reais.',
        plainExplanation: [
          'A forma correta de estudar lei local é em camadas. Primeiro, entenda a função da lei: Lei Orgânica organiza o Município; Estatuto rege servidores; Plano de Cargos organiza carreiras; LC nº 551/2024 organiza estrutura administrativa. Depois, leia dispositivos com pergunta na cabeça: quem pode? como faz? qual prazo? qual consequência? qual autoridade?',
          'Em prova objetiva, a banca pode cobrar letra da lei, conceitos, competências e prazos. Em discursiva, pode exigir raciocínio: um projeto é constitucional? uma sanção disciplinar é válida? um cargo comissionado é legítimo? uma vantagem pode ser paga? uma secretaria tem competência?',
          'A melhor estratégia é montar quadros: Prefeito x Câmara; cargo efetivo x comissão; posse x exercício; progressão x promoção; sindicância x PAD; lei x decreto; órgão x entidade; competência x atribuição. Esses pares viram alternativas de prova.'
        ],
        examTechnical: 'Legislação local deve ser estudada junto com Constituição. Quando a lei municipal trouxer regra de servidor, compare com arts. 37 a 41. Quando falar de estrutura, compare com art. 37 e separação de poderes. Quando falar de orçamento ou cargos, compare com LRF e art. 169. Quando falar de Câmara/Prefeito, compare com arts. 29 a 31.',
        cityExample: 'O Município quer editar lei sobre gratificação para determinada categoria. O estudo correto exige verificar iniciativa, plano de cargos, estatuto, impacto orçamentário, LRF, art. 37, art. 169 e compatibilidade com a Lei Orgânica.',
        legalBase: ['Lei Orgânica de Itupeva', 'LC nº 387/2015', 'LC nº 389/2015', 'LC nº 551/2024', 'CF/88, arts. 29 a 31 e 37 a 41', 'LRF'],
        dryLaw: ['Ler Lei Orgânica por competências e processo legislativo', 'Ler LC nº 387/2015 por vida funcional e PAD', 'Ler LC nº 389/2015 por cargos, carreira e remuneração', 'Ler LC nº 551/2024 por estrutura e cargos comissionados'],
        jurisprudence: ['Jurisprudência constitucional sobre separação de poderes, cargos em comissão, concurso público, iniciativa legislativa e responsabilidade fiscal deve ser usada como lente de interpretação das leis locais.'],
        objectiveCharge: ['Competências locais.', 'Estrutura administrativa.', 'Direitos/deveres de servidores.', 'Cargos e carreiras.', 'Iniciativa de leis.', 'Fiscalização municipal.'],
        discursiveCharge: 'A discursiva pode apresentar caso prático envolvendo projeto de lei, servidor, cargo, carreira, competência de órgão, ato do Prefeito ou resposta à Câmara. A resposta deve começar pela competência e terminar com providência prática.',
        traps: ['Estudar lei local só por leitura passiva.', 'Ignorar Constituição ao interpretar lei municipal.', 'Decorar órgão sem entender atribuição.', 'Confundir regra local com regra federal.', 'Esquecer que banca adora prazos, requisitos e autoridades competentes.'],
        differences: ['Leitura seca x estudo ativo: leitura seca identifica texto; estudo ativo transforma texto em perguntas.', 'Objetiva x discursiva: objetiva cobra detalhe; discursiva cobra aplicação e providência.', 'Lei local x lei geral: lei local concreta organização municipal, mas não pode violar normas superiores.'],
        commonMistakes: ['Deixar legislação municipal para a véspera.', 'Não fazer quadro de competências.', 'Não revisar artigos de servidores.', 'Não cruzar plano de cargos com LRF.', 'Não treinar parecer com lei local.'],
        miniCase: 'Autógrafo de lei parlamentar cria gratificação para servidores. Roteiro: verificar iniciativa, Constituição, Lei Orgânica, Estatuto, plano de cargos, estimativa de impacto, LRF, dotação e eventual veto jurídico.',
        activeQuestions: ['Quem tem iniciativa?', 'Qual autoridade decide?', 'Qual órgão executa?', 'Qual artigo local resolve?', 'Qual limite constitucional se aplica?'],
        flashcards: [
          { front: 'Como estudar lei local?', back: 'Por competências, autoridades, procedimentos, requisitos, prazos, consequências e comparação com a Constituição.' },
          { front: 'Legislação Municipal cai só na objetiva?', back: 'Não. Pode ser decisiva em discursiva e parecer jurídico.' },
          { front: 'Qual matéria local tem maior chance de pegadinha?', back: 'Lei Orgânica, Estatuto dos Servidores, plano de cargos e estrutura administrativa.' }
        ],
        summary: 'Legislação Municipal deve ser estudada como ferramenta de parecer. O candidato competitivo transforma artigo em pergunta, quadro comparativo, flashcard e caso prático. Essa matéria pode separar quem sabe Direito Municipal de quem estudou só leis gerais.',
        checklist: ['Sei montar quadro Prefeito x Câmara.', 'Sei usar Estatuto em caso de servidor.', 'Sei usar plano de cargos em remuneração.', 'Sei usar LC nº 551/2024 em competência de órgão.', 'Consigo escrever parecer com lei local.'],
        nextTopic: 'Próxima fase: Penal e Processo Penal Premium'
      }
    ]
  }

  ,
  {
    id: 'direito-penal-processo-penal',
    subject: 'Direito Processual Penal e Direito Penal',
    status: '39F concluída',
    priority: 'Alta',
    overview: 'Apostila premium de Penal e Processo Penal voltada ao concurso de Procurador Municipal: princípios penais, teoria do crime, penas, crimes contra a Administração Pública, crimes contra finanças públicas e ordem tributária, inquérito, ação penal, provas, prisões, nulidades, recursos, habeas corpus e acordo de não persecução penal, sempre com foco em atuação municipal, improbidade, responsabilização de agentes e proteção do erário.',
    lawBase: ['Código Penal', 'Código de Processo Penal', 'Constituição Federal, art. 5º', 'Lei nº 13.869/2019 — abuso de autoridade', 'Lei nº 12.850/2013 — organização criminosa', 'Lei nº 8.137/1990 — crimes contra a ordem tributária', 'Lei nº 10.028/2000 — crimes contra finanças públicas'],
    topics: [
      {
        id: 'principios-penais-garantias',
        level: 'básico',
        title: 'Princípios penais e garantias constitucionais aplicáveis à persecução penal',
        whatIs: 'São limites constitucionais e legais ao poder de punir do Estado. Incluem legalidade, anterioridade, reserva legal, taxatividade, irretroatividade da lei penal mais gravosa, retroatividade da lei penal benéfica, culpabilidade, individualização da pena, devido processo legal, contraditório, ampla defesa, presunção de inocência e vedação de prova ilícita.',
        purpose: 'Servem para impedir punição arbitrária e para orientar a análise de validade de investigação, denúncia, prova, sentença e sanção penal. Para Procurador Municipal, ajudam a separar ilícito administrativo, improbidade, crime funcional e mera irregularidade de gestão.',
        plainExplanation: [
          'Direito Penal é a intervenção mais grave do Estado sobre a liberdade e o patrimônio da pessoa. Por isso, não basta que uma conduta pareça errada: ela precisa estar descrita em lei penal anterior, de forma clara e estrita. Esse é o núcleo da legalidade penal.',
          'A Constituição também protege o modo de apuração. O Estado não pode condenar com base em prova ilícita, nem inverter a presunção de inocência como se o acusado tivesse de provar que é inocente. Em processo penal, acusação deve provar fato típico, ilícito, culpável e autoria.',
          'Em concursos para Procurador, o tema aparece quando uma irregularidade municipal é narrada como se fosse crime. O candidato precisa perguntar: há tipo penal? há dolo ou culpa quando admitida? há nexo? há prova? há diferença entre ilícito administrativo, improbidade e crime?'
        ],
        examTechnical: 'Decore legalidade e anterioridade no art. 5º, XXXIX, da Constituição e no art. 1º do Código Penal. Presunção de inocência está no art. 5º, LVII. Provas ilícitas estão no art. 5º, LVI. Contraditório e ampla defesa estão no art. 5º, LV. A banca pode misturar princípios penais materiais com garantias processuais.',
        cityExample: 'Relatório interno aponta pagamento indevido em contrato municipal. Antes de falar em peculato ou corrupção, o Procurador deve verificar se houve apropriação/desvio, vantagem indevida, dolo, participação de agente público, prejuízo ao erário e prova minimamente consistente. Nem toda falha administrativa é crime.',
        legalBase: ['CF/88, art. 5º, XXXIX, LIV, LV, LVI e LVII', 'Código Penal, arts. 1º e 2º', 'CPP, regras sobre provas e nulidades'],
        dryLaw: ['CF/88, art. 5º, XXXIX, XL, LIV, LV, LVI e LVII', 'CP, arts. 1º, 2º e 3º', 'CPP, arts. 155 a 157'],
        jurisprudence: ['A jurisprudência dos tribunais superiores exige fundamentação concreta para medidas cautelares penais, especialmente quando restringem liberdade ou direitos.', 'Prova ilícita, em regra, não pode fundamentar condenação, salvo discussões específicas sobre fonte independente, descoberta inevitável e ausência de contaminação.'],
        objectiveCharge: ['Legalidade penal e anterioridade.', 'Retroatividade da lei penal mais benéfica.', 'Presunção de inocência.', 'Prova ilícita.', 'Contraditório e ampla defesa.', 'Diferença entre ilícito administrativo e crime.'],
        discursiveCharge: 'Pode aparecer em parecer sobre encaminhamento de notícia-crime, apuração de fraude em contrato, responsabilização de servidor ou análise de validade de prova obtida em sindicância/PAD.',
        traps: ['Não existe crime sem lei anterior que o defina.', 'Analogia não pode criar crime ou agravar pena.', 'Irregularidade administrativa não vira crime automaticamente.', 'Prova ilícita não é “aproveitada” só porque parece verdadeira.', 'Presunção de inocência não impede investigação, mas impede condenação sem prova suficiente.'],
        differences: ['Ilícito administrativo x crime: o primeiro viola dever funcional; o segundo exige tipo penal.', 'Improbidade x crime: improbidade é responsabilização civil sancionatória; crime segue legalidade penal estrita.', 'Legalidade penal x juridicidade administrativa: no Penal, a taxatividade é muito mais rígida.'],
        commonMistakes: ['Chamar toda má gestão de crime.', 'Esquecer dolo nos crimes funcionais.', 'Confundir prova de PAD com prova penal suficiente.', 'Usar analogia contra o réu.', 'Ignorar retroatividade da lei penal benéfica.'],
        miniCase: 'Fiscal municipal recebe denúncia anônima de fraude e apreende documentos em empresa sem autorização judicial ou base legal adequada. A questão central será a licitude da prova e se havia poder administrativo para aquela medida.',
        activeQuestions: ['Existe tipo penal específico?', 'A lei penal é anterior ao fato?', 'Há dolo ou culpa admitida?', 'A prova foi obtida licitamente?', 'Há diferença entre irregularidade administrativa e crime?'],
        flashcards: [
          { front: 'O que diz a legalidade penal?', back: 'Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.' },
          { front: 'Lei penal benéfica retroage?', back: 'Sim, retroage para beneficiar o réu.' },
          { front: 'Toda irregularidade administrativa é crime?', back: 'Não. Crime exige tipicidade, ilicitude, culpabilidade e prova de autoria/materialidade.' }
        ],
        summary: 'Princípios penais protegem contra punição sem lei e sem prova. Para Procurador, o mais importante é saber filtrar fatos municipais: irregularidade, ilícito funcional, improbidade e crime são planos diferentes.',
        checklist: ['Sei explicar legalidade penal.', 'Sei prova ilícita e presunção de inocência.', 'Sei diferenciar ilícito administrativo, improbidade e crime.', 'Consigo analisar notícia-crime municipal.', 'Consigo aplicar garantias constitucionais ao processo penal.'],
        nextTopic: 'Teoria do crime'
      },
      {
        id: 'teoria-do-crime',
        level: 'intermediário',
        title: 'Teoria do crime: fato típico, ilicitude, culpabilidade, dolo, culpa, tentativa, concurso de pessoas e causas excludentes',
        whatIs: 'Teoria do crime é o conjunto de categorias usadas para verificar se uma conduta pode ser considerada crime. A estrutura mais cobrada analisa fato típico, ilicitude e culpabilidade, além de dolo, culpa, consumação, tentativa, erro, concurso de pessoas e excludentes.',
        purpose: 'Serve para evitar conclusões precipitadas. Uma conduta só é crime quando se encaixa no tipo penal, é ilícita, culpável e pode ser atribuída ao agente com dolo ou culpa, conforme o tipo. Para o Município, isso é essencial em fraudes, danos ao erário, condutas de servidores e crimes contra a Administração.',
        plainExplanation: [
          'O primeiro passo é o fato típico: conduta humana, resultado quando exigido, nexo causal e tipicidade. Se a conduta não se encaixa no tipo penal, a análise penal termina. O segundo passo é a ilicitude: mesmo típico, o fato pode ser justificado por legítima defesa, estado de necessidade, estrito cumprimento do dever legal ou exercício regular de direito.',
          'Depois vem a culpabilidade, que envolve imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa. Em linguagem simples: o Direito Penal pergunta se era possível exigir daquele agente comportamento conforme o Direito.',
          'Dolo é vontade consciente de realizar o tipo ou assumir o risco. Culpa envolve imprudência, negligência ou imperícia, mas só existe crime culposo quando a lei prevê. Em crimes contra a Administração, muitas pegadinhas giram em torno de dolo específico ou finalidade de obter vantagem.'
        ],
        examTechnical: 'Estude CP, arts. 13 a 25, especialmente nexo causal, crime consumado e tentado, desistência voluntária, arrependimento eficaz, arrependimento posterior, crime impossível, dolo e culpa, erro de tipo, erro de proibição, coação irresistível, obediência hierárquica e excludentes de ilicitude. Concurso de pessoas exige pluralidade de agentes, relevância causal, liame subjetivo e identidade de infração.',
        cityExample: 'Servidor autoriza pagamento por erro material em planilha, sem benefício pessoal e com correção imediata. Antes de cogitar crime, deve-se analisar se houve dolo, culpa típica prevista, nexo, prejuízo e eventual esfera administrativa/civil.',
        legalBase: ['Código Penal, arts. 13 a 31', 'CF/88, garantias penais do art. 5º'],
        dryLaw: ['CP, arts. 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 29 e 30'],
        jurisprudence: ['Tribunais superiores costumam exigir descrição mínima de conduta individualizada em denúncias envolvendo vários agentes, especialmente quando há imputação coletiva em contexto administrativo ou contratual.'],
        objectiveCharge: ['Dolo x culpa.', 'Tentativa.', 'Desistência voluntária x arrependimento eficaz.', 'Erro de tipo x erro de proibição.', 'Excludentes de ilicitude.', 'Concurso de pessoas.'],
        discursiveCharge: 'Pode cair em caso de fraude municipal com vários participantes. A resposta deve separar conduta de cada agente, tipo penal, dolo, nexo causal e eventual participação.',
        traps: ['Crime culposo só existe quando previsto em lei.', 'Tentativa exige início de execução.', 'Desistência voluntária afasta tentativa do crime pretendido.', 'Erro de tipo exclui dolo; erro de proibição afeta culpabilidade.', 'Participação exige liame subjetivo.'],
        differences: ['Fato típico x ilicitude x culpabilidade.', 'Dolo direto x dolo eventual.', 'Culpa consciente x dolo eventual.', 'Erro de tipo x erro de proibição.', 'Autoria x participação.'],
        commonMistakes: ['Pular direto para pena sem analisar tipicidade.', 'Confundir negligência administrativa com crime culposo.', 'Não individualizar condutas.', 'Achar que todo resultado ruim indica dolo.', 'Confundir desistência voluntária com arrependimento posterior.'],
        miniCase: 'Dois servidores assinam atestado falso de recebimento de material, mas apenas um sabia que o material não foi entregue. A imputação penal deve considerar conhecimento, dolo e conduta individual de cada um.',
        activeQuestions: ['Qual é o tipo penal?', 'Houve dolo?', 'Existe previsão culposa?', 'Há excludente?', 'A conduta de cada agente foi individualizada?'],
        flashcards: [
          { front: 'Crime culposo sempre existe?', back: 'Não. Só quando a lei prevê expressamente.' },
          { front: 'Erro de tipo exclui o quê?', back: 'Exclui o dolo; pode permitir punição culposa se prevista.' },
          { front: 'Concurso de pessoas exige quê?', back: 'Pluralidade de agentes, relevância causal, liame subjetivo e identidade de infração.' }
        ],
        summary: 'Teoria do crime é o filtro lógico da responsabilização penal. Em prova, use a sequência: fato típico, ilicitude, culpabilidade, dolo/culpa, autoria e causas modificadoras.',
        checklist: ['Sei estrutura analítica do crime.', 'Sei dolo e culpa.', 'Sei tentativa e desistência.', 'Sei erro de tipo/proibição.', 'Sei concurso de pessoas.'],
        nextTopic: 'Crimes contra a Administração Pública'
      },
      {
        id: 'crimes-administracao-publica',
        level: 'avançado',
        title: 'Crimes contra a Administração Pública: peculato, concussão, corrupção, prevaricação, advocacia administrativa e falsidades funcionais',
        whatIs: 'São crimes que protegem a probidade, moralidade, regularidade e confiança na Administração Pública. Podem ser praticados por funcionário público, por particular contra a Administração ou em contextos envolvendo contratos, documentos, fiscalização e arrecadação.',
        purpose: 'Servem para punir condutas que corrompem a função pública, desviam bens, vendem decisões, omitem dever funcional ou fraudam a confiança administrativa. Para Procurador Municipal, são essenciais em casos de servidores, licitações, fiscalização, tributos e contratos.',
        plainExplanation: [
          'Peculato envolve apropriação, desvio ou subtração de bem público ou particular sob posse da Administração em razão do cargo. Corrupção passiva envolve solicitar, receber ou aceitar promessa de vantagem indevida em razão da função. Concussão é exigir vantagem indevida. Prevaricação é retardar, deixar de praticar ou praticar ato contra disposição expressa de lei para satisfazer interesse ou sentimento pessoal.',
          'A diferença entre esses crimes é cobrada o tempo todo. Se o servidor exige vantagem, a palavra-chave é concussão. Se solicita ou recebe, tende a corrupção passiva. Se desvia bem público de que tem posse em razão do cargo, peculato. Se favorece interesse privado perante Administração usando facilidade do cargo, pode haver advocacia administrativa.',
          'Na Prefeitura, esses crimes aparecem em fiscalização que cobra propina, servidor que desvia material, agente que favorece empresa, fiscal que deixa de autuar por interesse pessoal, manipulação de documento, fraude em atesto de nota fiscal e interferência indevida em processo administrativo.'
        ],
        examTechnical: 'Estude CP, arts. 312 a 337-P, com foco nos crimes funcionais mais clássicos e nos crimes em licitações/contratos. Memorize verbos nucleares: apropriar/desviar/subtrair, exigir, solicitar/receber/aceitar promessa, retardar/deixar/praticar, patrocinar interesse privado, inserir declaração falsa, modificar sistema. O conceito de funcionário público para fins penais é amplo no art. 327 do CP.',
        cityExample: 'Fiscal municipal exige pagamento informal para não aplicar multa. A conduta se aproxima de concussão se houve exigência de vantagem indevida em razão da função. Se apenas aceitou proposta do particular, a análise pode mudar para corrupção passiva, conforme o caso.',
        legalBase: ['Código Penal, arts. 312 a 337-P', 'CP, art. 327 — conceito de funcionário público para fins penais', 'Lei nº 14.133/2021 e crimes licitatórios incorporados ao CP'],
        dryLaw: ['CP, arts. 312, 313-A, 316, 317, 319, 321, 327, 337-E a 337-P'],
        jurisprudence: ['O conceito penal de funcionário público é mais amplo que o conceito administrativo estrito, alcançando quem exerce cargo, emprego ou função pública, ainda que transitoriamente ou sem remuneração.', 'A jurisprudência diferencia concussão e corrupção passiva a partir do verbo nuclear e do contexto: exigir é mais grave e caracteriza concussão; solicitar/receber/aceitar promessa indica corrupção passiva.'],
        objectiveCharge: ['Peculato apropriação x desvio x furto.', 'Concussão x corrupção passiva.', 'Prevaricação.', 'Advocacia administrativa.', 'Funcionário público por equiparação.', 'Crimes em licitações e contratos.'],
        discursiveCharge: 'Pode cair como parecer sobre notícia de irregularidade envolvendo fiscal, servidor, contrato, atesto de nota fiscal ou vantagem indevida. A resposta deve tipificar em tese sem condenar, apontar necessidade de apuração e preservar devido processo.',
        traps: ['Concussão exige vantagem; corrupção passiva envolve solicitar/receber/aceitar promessa.', 'Prevaricação exige interesse ou sentimento pessoal.', 'Peculato exige posse ou facilidade em razão do cargo em várias modalidades.', 'Funcionário público penal é conceito amplo.', 'Nem todo descumprimento de dever é crime funcional.'],
        differences: ['Concussão x corrupção passiva.', 'Peculato x furto comum.', 'Prevaricação x corrupção passiva.', 'Advocacia administrativa x mera orientação administrativa.', 'Ilícito penal x improbidade.'],
        commonMistakes: ['Confundir exigir com solicitar.', 'Ignorar elemento subjetivo específico.', 'Tratar pessoa terceirizada sempre como particular sem analisar função pública equiparada.', 'Não separar apuração administrativa de persecução penal.', 'Tipificar sem descrição mínima de conduta.'],
        miniCase: 'Servidor responsável pelo almoxarifado retira bens públicos para uso próprio. A posse decorre do cargo e a conduta se aproxima de peculato-apropriação ou peculato-desvio, conforme a dinâmica.',
        activeQuestions: ['Qual verbo foi praticado?', 'O agente é funcionário público penal?', 'A vantagem foi exigida ou solicitada?', 'O bem estava sob posse em razão do cargo?', 'Há dolo e prova mínima?'],
        flashcards: [
          { front: 'Exigir vantagem indevida é qual crime?', back: 'Concussão, em tese.' },
          { front: 'Solicitar ou receber vantagem indevida em razão da função é qual crime?', back: 'Corrupção passiva.' },
          { front: 'O conceito penal de funcionário público é amplo?', back: 'Sim. Inclui quem exerce cargo, emprego ou função pública, ainda que transitoriamente ou sem remuneração.' }
        ],
        summary: 'Crimes contra a Administração exigem leitura de verbos e elementos subjetivos. Em prova, compare peculato, concussão, corrupção e prevaricação. Em parecer, fale em tipificação em tese e necessidade de apuração regular.',
        checklist: ['Sei diferenciar peculato, concussão e corrupção.', 'Sei conceito penal de funcionário público.', 'Sei prevaricação.', 'Sei crimes de licitação no CP.', 'Consigo analisar notícia-crime municipal.'],
        nextTopic: 'Crimes contra finanças públicas, ordem tributária, abuso de autoridade e organização criminosa'
      },
      {
        id: 'crimes-financas-tributarios-abuso-organizacao',
        level: 'avançado',
        title: 'Crimes contra finanças públicas, ordem tributária, abuso de autoridade e organização criminosa',
        whatIs: 'São grupos de infrações penais que podem aparecer em contexto municipal: gestão fiscal irregular, fraude tributária, excesso de autoridade e atuação estruturada de grupo para praticar crimes contra a Administração ou arrecadação.',
        purpose: 'Servem para responsabilizar condutas graves que atingem orçamento, arrecadação, legalidade fiscal, direitos fundamentais e integridade administrativa. Para Procurador Municipal, são importantes em dívida ativa, fiscalização, licitações, orçamento e controle interno.',
        plainExplanation: [
          'Crimes contra finanças públicas envolvem condutas como ordenar despesa não autorizada, assumir obrigação no fim de mandato em desconformidade legal, aumentar despesa com pessoal em desacordo com regras fiscais e violar limites de gestão responsável. Eles dialogam com LRF e orçamento público.',
          'Crimes contra a ordem tributária protegem a arrecadação e punem fraudes como suprimir ou reduzir tributo mediante omissão, falsidade, fraude documental ou declaração falsa. O Procurador precisa saber que cobrança tributária, execução fiscal e persecução penal têm finalidades distintas, mas podem dialogar.',
          'Abuso de autoridade pune condutas praticadas com finalidade específica de prejudicar, beneficiar a si/terceiro ou por mero capricho/satisfação pessoal. Organização criminosa exige estrutura ordenada, divisão de tarefas e finalidade de obter vantagem mediante crimes graves, conforme a lei.'
        ],
        examTechnical: 'Leia tipos penais ligados a finanças públicas no Código Penal, Lei nº 8.137/1990 para ordem tributária, Lei nº 13.869/2019 para abuso de autoridade e Lei nº 12.850/2013 para organização criminosa. Na prova, atenção aos elementos subjetivos especiais: abuso de autoridade exige finalidade específica; organização criminosa exige estrutura e divisão de tarefas.',
        cityExample: 'Fiscais municipais combinam com empresários para reduzir artificialmente ISS mediante emissão de documentos falsos. Pode haver crime contra a ordem tributária, corrupção, falsidade e, se houver estrutura estável e divisão de tarefas, discussão sobre organização criminosa.',
        legalBase: ['Código Penal — crimes contra finanças públicas', 'Lei nº 8.137/1990', 'Lei nº 13.869/2019', 'Lei nº 12.850/2013', 'LRF como referência de gestão fiscal'],
        dryLaw: ['CP, arts. 359-A a 359-H', 'Lei nº 8.137/1990, arts. 1º a 3º', 'Lei nº 13.869/2019, arts. 1º e tipos mais cobrados', 'Lei nº 12.850/2013, art. 1º'],
        jurisprudence: ['Em crimes materiais contra a ordem tributária, a constituição definitiva do crédito costuma ser tema central em jurisprudência dos tribunais superiores.', 'A Lei de Abuso de Autoridade exige finalidade específica, não bastando mera divergência interpretativa ou erro administrativo sem dolo especial.'],
        objectiveCharge: ['Constituição definitiva do crédito tributário.', 'Elementos dos crimes contra ordem tributária.', 'Crimes contra finanças públicas.', 'Finalidade específica no abuso de autoridade.', 'Conceito de organização criminosa.'],
        discursiveCharge: 'Pode cair em parecer sobre comunicação ao Ministério Público, fraude em ISS, excesso de fiscal municipal, gestão fiscal irregular ou notícia de grupo organizado em contratos públicos.',
        traps: ['Inadimplemento tributário não é automaticamente crime contra ordem tributária.', 'Abuso de autoridade exige finalidade específica.', 'Organização criminosa não é mero concurso de pessoas.', 'Crime fiscal não substitui execução fiscal.', 'Gestão fiscal irregular exige tipo penal específico.'],
        differences: ['Sonegação x inadimplemento.', 'Organização criminosa x concurso de pessoas.', 'Abuso de autoridade x ilegalidade administrativa comum.', 'Crime fiscal x infração tributária.', 'Responsabilização penal x cobrança do crédito.'],
        commonMistakes: ['Chamar dívida tributária simples de crime.', 'Ignorar necessidade de lançamento definitivo em crimes materiais tributários.', 'Confundir grupo eventual com organização criminosa.', 'Esquecer dolo específico no abuso de autoridade.', 'Misturar sanção fiscal, improbidade e crime sem distinguir requisitos.'],
        miniCase: 'Contribuinte declara ISS menor com notas ideologicamente falsas e participação de servidor. A análise deve separar crédito tributário, autos de infração, eventual representação fiscal para fins penais e crime funcional do servidor.',
        activeQuestions: ['Há fraude ou mero inadimplemento?', 'O crédito está definitivamente constituído?', 'Há finalidade específica no abuso?', 'Existe estrutura organizada?', 'Qual esfera de responsabilização se aplica?'],
        flashcards: [
          { front: 'Inadimplir tributo é sempre crime?', back: 'Não. Crime contra ordem tributária exige elementos típicos, como fraude, omissão ou falsidade, conforme o tipo.' },
          { front: 'Organização criminosa é igual a concurso de pessoas?', back: 'Não. Exige estrutura ordenada, divisão de tarefas e finalidade específica prevista em lei.' },
          { front: 'Abuso de autoridade exige quê?', back: 'Finalidade específica de prejudicar, beneficiar ou agir por capricho/satisfação pessoal, conforme a lei.' }
        ],
        summary: 'Esses crimes são importantes para Município porque envolvem arrecadação, orçamento, fiscalização e contratos. A chave é não confundir irregularidade, infração administrativa, crédito tributário e crime.',
        checklist: ['Sei crimes contra finanças públicas.', 'Sei noções da Lei 8.137/1990.', 'Sei finalidade específica do abuso de autoridade.', 'Sei conceito de organização criminosa.', 'Consigo separar cobrança tributária e persecução penal.'],
        nextTopic: 'Processo Penal: investigação, ação, provas e cautelares'
      },
      {
        id: 'processo-penal-investigacao-acao-provas-cautelares',
        level: 'intermediário',
        title: 'Processo Penal: inquérito, ação penal, competência, provas, prisões e medidas cautelares',
        whatIs: 'Processo Penal é o conjunto de normas que disciplina investigação, acusação, defesa, prova, julgamento, recursos e execução das decisões penais. O inquérito apura; a ação penal leva a imputação ao Judiciário; o processo decide com contraditório.',
        purpose: 'Serve para garantir que a persecução penal seja legítima, com prova lícita, competência correta, defesa efetiva e decisão fundamentada. Para Procurador Municipal, importa em notícias-crime, cooperação com órgãos de investigação, validade de provas administrativas e proteção do Município como vítima.',
        plainExplanation: [
          'O inquérito policial é procedimento administrativo investigativo, em regra inquisitivo, destinado a reunir elementos de informação. Ele não é processo judicial e não se confunde com condenação. A ação penal pública é promovida pelo Ministério Público; em alguns casos, a vítima pode atuar como assistente de acusação.',
          'Prova no processo penal tem regras próprias. O juiz forma convicção pela prova produzida em contraditório judicial, não podendo fundamentar condenação exclusivamente em elementos informativos do inquérito, salvo exceções legais para provas cautelares, não repetíveis e antecipadas.',
          'Prisão e cautelares exigem base legal e fundamentação concreta. Prisão preventiva não é antecipação de pena; deve proteger processo, ordem pública/econômica, instrução ou aplicação da lei penal, conforme requisitos legais.'
        ],
        examTechnical: 'Estude inquérito, ação penal pública/privada, jurisdição e competência, sujeitos processuais, provas, cadeia de custódia, busca e apreensão, prisões em flagrante/preventiva/temporária, medidas cautelares diversas, sentença, nulidades e recursos. Atenção ao ANPP no art. 28-A do CPP.',
        cityExample: 'A Prefeitura detecta fraude documental em licitação. O Município pode preservar documentos, instaurar apuração interna, comunicar autoridades competentes e acompanhar como vítima/interessado, mas não substitui o Ministério Público na ação penal pública.',
        legalBase: ['CPP', 'CF/88, art. 5º', 'Lei nº 7.960/1989 — prisão temporária', 'CPP, art. 28-A — ANPP'],
        dryLaw: ['CPP, arts. 4º a 23', 'CPP, arts. 24 a 62', 'CPP, arts. 69 a 91', 'CPP, arts. 155 a 250', 'CPP, arts. 282 a 316', 'CPP, art. 28-A'],
        jurisprudence: ['Condenação não pode se apoiar exclusivamente em elementos informativos do inquérito, ressalvadas provas cautelares, não repetíveis e antecipadas previstas no CPP.', 'Medidas cautelares pessoais exigem fundamentação concreta e proporcionalidade.'],
        objectiveCharge: ['Características do inquérito.', 'Ação penal pública e privada.', 'Competência.', 'Provas e prova ilícita.', 'Prisão preventiva.', 'Medidas cautelares diversas.', 'ANPP.'],
        discursiveCharge: 'Pode aparecer como orientação sobre como o Município deve agir diante de fraude: preservar prova, instaurar apuração administrativa, comunicar MP/Polícia, evitar produção ilícita de prova e resguardar ressarcimento.',
        traps: ['Inquérito não é indispensável à ação penal.', 'MP é titular da ação penal pública.', 'Condenação não pode ser exclusivamente baseada em inquérito.', 'Preventiva não é pena antecipada.', 'ANPP não é direito automático sem requisitos.'],
        differences: ['Elemento informativo x prova judicial.', 'Ação penal pública x privada.', 'Prisão em flagrante x preventiva x temporária.', 'Medida cautelar x pena.', 'Busca administrativa x busca judicial.'],
        commonMistakes: ['Tratar inquérito como processo.', 'Ignorar cadeia de custódia.', 'Produzir prova administrativa de modo ilícito.', 'Confundir vítima Município com titular da ação penal pública.', 'Achar que prisão preventiva serve para dar resposta social.'],
        miniCase: 'Comissão municipal copia dados pessoais de investigado sem base legal e sem autorização em ambiente protegido. A prova pode ser questionada por ilicitude, além de gerar problema de LGPD e abuso.',
        activeQuestions: ['A prova é lícita?', 'Quem é titular da ação?', 'Qual autoridade é competente?', 'Há contraditório?', 'Cautelar está fundamentada?'],
        flashcards: [
          { front: 'Inquérito é indispensável?', back: 'Não. A ação penal pode ser proposta com outras peças de informação suficientes.' },
          { front: 'Quem promove ação penal pública?', back: 'O Ministério Público.' },
          { front: 'Preventiva é pena antecipada?', back: 'Não. É medida cautelar excepcional, com requisitos legais e fundamentação concreta.' }
        ],
        summary: 'Processo Penal organiza a persecução penal com garantias. Para Município, o foco é comunicar corretamente crimes, preservar provas lícitas e saber o papel institucional de cada órgão.',
        checklist: ['Sei características do inquérito.', 'Sei ação penal pública.', 'Sei regras básicas de prova.', 'Sei cautelares e prisões.', 'Sei orientar atuação municipal sem violar garantias.'],
        nextTopic: 'Nulidades, sentença, recursos, habeas corpus e revisão criminal'
      },
      {
        id: 'nulidades-recursos-habeas-revisao',
        level: 'discursiva',
        title: 'Nulidades, sentença, recursos, habeas corpus, revisão criminal e leitura estratégica para Procurador',
        whatIs: 'São instrumentos e regras que controlam validade dos atos processuais penais e permitem impugnação de decisões. Nulidades tratam de vícios; recursos buscam reforma; habeas corpus protege liberdade; revisão criminal desconstitui condenação em hipóteses legais.',
        purpose: 'Servem para impedir condenações ou constrições ilegais e para garantir correção processual. Para Procurador Municipal, o tema importa quando servidores ou terceiros envolvidos em fatos municipais alegam ilegalidade, quando o Município é vítima ou quando se discute validade de provas e decisões.',
        plainExplanation: [
          'Nulidade no processo penal não é palavra mágica. É preciso identificar o ato viciado, a regra violada, o prejuízo e o momento de arguição, salvo nulidades absolutas em que a lógica é mais grave. A ideia “pas de nullité sans grief” significa que, em regra, não há nulidade sem prejuízo.',
          'Recursos penais têm hipóteses, prazos e finalidades. Apelação, recurso em sentido estrito, embargos, agravos, recursos extraordinários e especiais possuem cabimento próprio. Habeas corpus não é recurso comum, mas ação constitucional para proteger liberdade de locomoção contra ilegalidade ou abuso de poder.',
          'Revisão criminal é ação autônoma para desfazer condenação transitada em julgado em hipóteses legais, como prova nova, contrariedade ao texto expresso da lei penal ou evidência de erro judiciário. Para prova, a banca costuma cobrar cabimento e diferenças entre instrumentos.'
        ],
        examTechnical: 'Estude CPP sobre nulidades, sentença, recursos, habeas corpus e revisão criminal. Atenção a princípios: instrumentalidade das formas, prejuízo, convalidação, preclusão, competência, fundamentação das decisões e duplo grau. Em prova objetiva, o foco é cabimento; em discursiva, é identificar o vício e a providência adequada.',
        cityExample: 'Servidor é investigado por peculato e a defesa alega nulidade porque não teve acesso a elementos já documentados que fundamentaram medida cautelar. A análise exige separar sigilo legítimo de investigação futura e direito de acesso da defesa ao que já foi documentado e usado contra o investigado.',
        legalBase: ['CPP — nulidades, sentença, recursos, habeas corpus e revisão criminal', 'CF/88, art. 5º, LXVIII', 'CF/88, art. 93, IX'],
        dryLaw: ['CPP, arts. 563 a 573', 'CPP, recursos em espécie', 'CPP, habeas corpus', 'CPP, revisão criminal', 'CF/88, art. 5º, LXVIII', 'CF/88, art. 93, IX'],
        jurisprudence: ['A demonstração de prejuízo é exigência recorrente para reconhecimento de nulidades processuais.', 'Habeas corpus é instrumento voltado à liberdade de locomoção, não substituto universal de todos os recursos.'],
        objectiveCharge: ['Nulidade absoluta e relativa.', 'Prejuízo.', 'Cabimento de recursos.', 'Habeas corpus.', 'Revisão criminal.', 'Fundamentação das decisões.'],
        discursiveCharge: 'Pode cair em caso prático sobre prova ilícita, cerceamento de defesa, decisão sem fundamentação, prisão ilegal ou cabimento de habeas corpus.',
        traps: ['Nem todo vício gera nulidade automática.', 'HC não serve para discutir qualquer tema patrimonial sem reflexo na liberdade.', 'Revisão criminal não é segunda apelação comum.', 'Nulidade relativa pode precluir.', 'Decisão penal precisa de fundamentação concreta.'],
        differences: ['Recurso x ação autônoma.', 'HC x recurso ordinário.', 'Apelação x recurso em sentido estrito.', 'Nulidade absoluta x relativa.', 'Preclusão x matéria de ordem pública.'],
        commonMistakes: ['Pedir nulidade sem apontar prejuízo.', 'Confundir revisão criminal com apelação.', 'Usar HC para tudo.', 'Não verificar cabimento do recurso.', 'Esquecer fundamentação das decisões.'],
        miniCase: 'Sentença condenatória copia a denúncia e não enfrenta tese defensiva relevante. Há possível nulidade por ausência de fundamentação adequada, com base no dever constitucional de motivação.',
        activeQuestions: ['Qual ato é viciado?', 'Houve prejuízo?', 'Qual instrumento cabível?', 'Há reflexo na liberdade?', 'A decisão foi fundamentada?'],
        flashcards: [
          { front: 'Há nulidade sem prejuízo?', back: 'Em regra, não; aplica-se a lógica do prejuízo.' },
          { front: 'Habeas corpus protege o quê?', back: 'Liberdade de locomoção contra ilegalidade ou abuso de poder.' },
          { front: 'Revisão criminal é recurso?', back: 'Não. É ação autônoma de impugnação contra condenação transitada em julgado.' }
        ],
        summary: 'Nulidades e recursos exigem técnica: vício, prejuízo, cabimento e providência. Para Procurador, esse bloco ajuda a reconhecer ilegalidades processuais sem perder de vista o interesse público e a defesa do Município vítima.',
        checklist: ['Sei nulidade e prejuízo.', 'Sei cabimento básico de HC.', 'Sei revisão criminal.', 'Sei diferença entre recurso e ação autônoma.', 'Consigo analisar prova ilícita e decisão sem fundamentação.'],
        nextTopic: 'Próxima fase: Trabalho e Processo do Trabalho Premium'
      }
    ]
  }
  ,
  {
    id: 'direito-trabalho-processo-trabalho',
    subject: 'Direito do Trabalho e Direito Processual do Trabalho',
    status: '39G concluída',
    priority: 'Alta',
    overview: 'Apostila premium voltada ao edital de Procurador Municipal, com foco em relação de trabalho e emprego, contrato de trabalho, jornada, remuneração, extinção contratual, estabilidade, terceirização, Administração Pública, responsabilidade trabalhista, direito coletivo e Processo do Trabalho aplicado à defesa do Município.',
    lawBase: ['CF/88, arts. 7º, 8º, 37, 39, 114 e 173', 'CLT — Decreto-Lei nº 5.452/1943', 'Lei nº 6.019/1974, quando estudada terceirização/trabalho temporário', 'CPC aplicado subsidiária e supletivamente ao Processo do Trabalho quando compatível', 'Jurisprudência do STF e TST sobre terceirização, concurso público e responsabilidade subsidiária'],
    topics: [
      {
        id: 'relacao-trabalho-emprego',
        level: 'básico',
        title: 'Relação de trabalho, relação de emprego, empregado, empregador e requisitos do vínculo',
        whatIs: 'Relação de trabalho é gênero amplo que abrange várias formas de prestação humana de serviços. Relação de emprego é espécie mais protegida, caracterizada pela presença simultânea dos requisitos clássicos: pessoa física, pessoalidade, não eventualidade, onerosidade e subordinação.',
        purpose: 'Serve para definir qual regime jurídico se aplica. Se houver vínculo de emprego, incidem direitos da CLT e da Constituição. Para Procurador Municipal, o tema aparece quando se discute terceirização, contratação irregular, cooperativas, autônomos, estagiários, temporários e responsabilidade do Município como tomador.',
        plainExplanation: [
          'Nem toda pessoa que trabalha para alguém é empregada. Um advogado contratado para parecer específico, um médico plantonista eventual, uma empresa terceirizada e um servidor estatutário podem prestar trabalho sem vínculo celetista direto. O ponto central é verificar como o serviço é prestado na realidade.',
          'A CLT considera empregado a pessoa física que presta serviços de natureza não eventual a empregador, sob dependência e mediante salário. Por isso, a prova costuma cobrar os requisitos juntos: se faltar subordinação, por exemplo, pode não haver vínculo de emprego; se o serviço é eventual e sem integração à rotina, também muda a análise.',
          'Na Administração Pública, existe camada extra: vínculo com ente público depende de concurso para cargo ou emprego público, salvo exceções constitucionais. Contratação irregular não gera automaticamente vínculo efetivo com o Município, mas pode gerar efeitos indenizatórios e dever de pagar verbas pelo trabalho prestado, conforme a situação.'
        ],
        examTechnical: 'Para prova, memorize os cinco requisitos do vínculo empregatício e aplique a primazia da realidade. A banca pode apresentar contrato “autônomo” que na prática tem jornada fixa, ordens diárias, pessoalidade e salário. Também pode perguntar por que contratação sem concurso não gera vínculo permanente com Administração Pública.',
        cityExample: 'O Município contrata pessoa física como “prestador autônomo” por anos, com jornada diária, subordinação a chefe, ordens e pagamento mensal. O Procurador deve avaliar risco trabalhista, nulidade da contratação, eventual dever de pagamento de verbas e necessidade de corrigir a forma de contratação por concurso, processo seletivo ou licitação, conforme o caso.',
        legalBase: ['CF/88, art. 7º', 'CF/88, art. 37, II e IX', 'CLT, arts. 2º e 3º', 'CLT, art. 9º'],
        dryLaw: ['CF/88, arts. 7º e 37', 'CLT, arts. 2º, 3º, 9º e 442'],
        jurisprudence: ['A jurisprudência trabalhista aplica a primazia da realidade para reconhecer a natureza real da relação, independentemente do nome dado ao contrato.', 'No setor público, a exigência constitucional de concurso impede formação de vínculo efetivo irregular com a Administração, sem afastar análise de efeitos patrimoniais pelo trabalho prestado.'],
        objectiveCharge: ['Requisitos do vínculo de emprego.', 'Diferença entre trabalho e emprego.', 'Primazia da realidade.', 'Empregado x autônomo x eventual x estagiário.', 'Contratação irregular pela Administração Pública.'],
        discursiveCharge: 'Pode cair como parecer sobre prestador contratado irregularmente pelo Município, risco de vínculo, terceirização fraudulenta ou medidas preventivas para reduzir passivo trabalhista.',
        traps: ['Contrato escrito de autônomo não impede vínculo se a realidade demonstrar subordinação.', 'Servidor estatutário não é empregado celetista.', 'Contratação sem concurso não transforma contratado em servidor efetivo.', 'Pejotização fraudulenta pode ser desconsiderada.', 'Estágio exige requisitos legais; sem eles, vira risco trabalhista.'],
        differences: ['Relação de trabalho x relação de emprego.', 'Empregado x autônomo.', 'Empregado x servidor estatutário.', 'Terceirizado x empregado direto.', 'Trabalho eventual x trabalho não eventual.'],
        commonMistakes: ['Decorar requisitos sem aplicá-los ao caso.', 'Achar que qualquer prestação contínua ao Município gera cargo público.', 'Ignorar a exigência de concurso.', 'Confundir subordinação técnica com mera fiscalização contratual.'],
        miniCase: 'Empresa terceirizada aloca trabalhador em unidade municipal. Se o Município apenas fiscaliza resultado do contrato, isso não é subordinação direta. Mas se chefe municipal dá ordens pessoais, controla férias e pune o trabalhador, cresce o risco de fraude/intermediação irregular.',
        activeQuestions: ['Quem dá ordens diretas?', 'A prestação é pessoal?', 'Há pagamento habitual?', 'Há inserção na rotina administrativa?', 'Existe concurso, licitação ou contratação temporária regular?'],
        flashcards: [
          { front: 'Quais são os requisitos do vínculo de emprego?', back: 'Pessoa física, pessoalidade, não eventualidade, onerosidade e subordinação.' },
          { front: 'O nome do contrato decide se há vínculo?', back: 'Não. Vale a primazia da realidade.' },
          { front: 'Contratação sem concurso gera cargo efetivo?', back: 'Não. A Administração Pública depende de concurso, ressalvadas hipóteses constitucionais.' }
        ],
        summary: 'Relação de emprego exige requisitos concretos. Para Procurador, o raciocínio é separar contrato regular, terceirização lícita, contratação temporária e fraude, sempre considerando concurso público e primazia da realidade.',
        checklist: ['Sei os requisitos do vínculo.', 'Sei diferenciar empregado, autônomo, eventual e servidor.', 'Sei aplicar primazia da realidade.', 'Sei os riscos da contratação irregular municipal.', 'Consigo escrever parecer preventivo sobre vínculo.'],
        nextTopic: 'Contrato de trabalho, alteração, suspensão e interrupção'
      },
      {
        id: 'contrato-trabalho-alteracao-suspensao',
        level: 'intermediário',
        title: 'Contrato de trabalho: formação, alteração, suspensão, interrupção e poderes do empregador',
        whatIs: 'Contrato de trabalho é o ajuste, expresso ou tácito, pelo qual uma pessoa física presta serviços com requisitos de emprego a um empregador. Pode sofrer alterações, suspensão ou interrupção, desde que respeitados limites legais e proteção ao trabalhador.',
        purpose: 'Serve para organizar direitos e deveres durante a relação laboral. Para o Município, importa em empresas públicas, sociedades de economia mista, contratos celetistas autorizados e fiscalização de terceirizados.',
        plainExplanation: [
          'O contrato de trabalho pode nascer por escrito, verbalmente ou pela própria prática. O mais importante é a realidade da prestação. A CLT limita alterações prejudiciais: em regra, mudança contratual exige mútuo consentimento e não pode causar prejuízo direto ou indireto ao empregado.',
          'Suspensão e interrupção são diferentes. Na interrupção, o empregado não trabalha, mas o tempo conta e há pagamento de salário em várias hipóteses. Na suspensão, em regra, não há trabalho nem salário, e o tempo pode não contar, salvo exceções legais.',
          'O empregador possui poder diretivo, regulamentar, fiscalizatório e disciplinar. Porém, esses poderes não são absolutos. Devem respeitar dignidade, intimidade, proporcionalidade, não discriminação e devido processo nas punições.'
        ],
        examTechnical: 'A banca cobra alteração contratual lesiva, jus variandi, transferência, suspensão/interrupção e poder disciplinar. Para Procurador, conecte com compliance público: regulamentos claros, controle de jornada, fiscalização proporcional e prevenção de assédio moral.',
        cityExample: 'Empresa pública municipal muda unilateralmente empregados de setor, aumentando carga e reduzindo gratificação sem base legal/contratual. O parecer deve verificar se houve alteração prejudicial, direito adquirido, norma coletiva, regulamento interno e risco de reclamatória.',
        legalBase: ['CLT, arts. 442, 444, 468 e 469', 'CF/88, art. 7º', 'CF/88, art. 37, caput, quando empregador integra Administração Pública'],
        dryLaw: ['CLT, arts. 442 a 456', 'CLT, arts. 468 e 469', 'CF/88, art. 7º'],
        jurisprudence: ['A alteração contratual prejudicial tende a ser invalidada quando viola proteção trabalhista e boa-fé.', 'Poder disciplinar deve observar proporcionalidade e imediatidade, evitando punição arbitrária.'],
        objectiveCharge: ['Alteração contratual lesiva.', 'Transferência.', 'Suspensão x interrupção.', 'Poder diretivo e disciplinar.', 'Contrato expresso e tácito.'],
        discursiveCharge: 'Pode cair em parecer sobre mudança unilateral de jornada, transferência, punição, assédio, regulamento interno ou pagamento de gratificação.',
        traps: ['Mútuo consentimento não valida alteração prejudicial.', 'Transferência provisória pode exigir adicional em hipóteses legais.', 'Advertência, suspensão e justa causa exigem proporcionalidade.', 'Poder diretivo não permite humilhação ou abuso.'],
        differences: ['Suspensão x interrupção.', 'Alteração lícita x alteração lesiva.', 'Poder diretivo x assédio moral.', 'Transferência provisória x definitiva.', 'Regulamento interno x contrato individual.'],
        commonMistakes: ['Confundir suspensão com interrupção.', 'Achar que consentimento do empregado sempre valida perda de direito.', 'Ignorar norma coletiva.', 'Não documentar motivos de punição.'],
        miniCase: 'Empregado celetista de entidade municipal é suspenso por 10 dias sem descrição clara da falta. O risco é nulidade da punição por ausência de motivação, proporcionalidade e prova.',
        activeQuestions: ['A alteração prejudica o trabalhador?', 'Houve consentimento real?', 'Há previsão legal ou coletiva?', 'É suspensão ou interrupção?', 'A punição é proporcional?'],
        flashcards: [
          { front: 'Alteração contratual prejudicial é válida?', back: 'Em regra, não, mesmo com consentimento se resultar prejuízo direto ou indireto.' },
          { front: 'Suspensão tem salário?', back: 'Em regra, não; interrupção costuma preservar salário em hipóteses legais.' },
          { front: 'Poder disciplinar é ilimitado?', back: 'Não. Exige proporcionalidade, imediatidade, prova e respeito à dignidade.' }
        ],
        summary: 'Contrato de trabalho é protegido contra alteração prejudicial. Em prova, diferencie suspensão/interrupção e aplique limites ao poder diretivo. Para Município, o foco é reduzir passivo e agir com motivação e documentação.',
        checklist: ['Sei contrato expresso, verbal e tácito.', 'Sei alteração contratual lesiva.', 'Sei suspensão e interrupção.', 'Sei limites do poder disciplinar.', 'Consigo orientar órgão municipal empregador.'],
        nextTopic: 'Jornada, descanso, salário e verbas trabalhistas'
      },
      {
        id: 'jornada-remuneracao-verbas',
        level: 'intermediário',
        title: 'Jornada, descanso, salário, remuneração e verbas trabalhistas',
        whatIs: 'É o conjunto de regras sobre duração do trabalho, horas extras, intervalos, repouso semanal, férias, salário, remuneração, adicionais, gratificações e demais parcelas de natureza trabalhista.',
        purpose: 'Serve para proteger saúde, previsibilidade econômica e equilíbrio contratual. Para Procurador, é essencial para analisar passivo trabalhista, contratos terceirizados, folhas de pagamento de entidades municipais e risco de condenações.',
        plainExplanation: [
          'Jornada é tempo em que o empregado está à disposição do empregador. A Constituição prevê limites gerais e a CLT detalha controle, compensação, banco de horas, intervalos e adicionais. Erro de controle de jornada é uma das maiores fontes de condenação trabalhista.',
          'Salário é contraprestação pelo trabalho. Remuneração é conceito mais amplo, incluindo salário e certas parcelas recebidas em razão do contrato. A natureza jurídica da verba importa porque define reflexos em férias, 13º, FGTS e contribuições.',
          'Na terceirização municipal, o Município não paga diretamente salário do terceirizado, mas deve fiscalizar o contrato. Falha de fiscalização pode gerar discussão de responsabilidade subsidiária, especialmente quando há inadimplemento da prestadora.'
        ],
        examTechnical: 'Estude jornada normal, horas extras, adicional noturno, intervalos, descanso semanal remunerado, férias, 13º, FGTS, salário utilidade, adicionais e reflexos. Em prova municipal, relacione com fiscalização de contratos e controle de ponto.',
        cityExample: 'Vigilantes terceirizados de prédio municipal alegam ausência de pagamento de horas extras. O Município deve comprovar fiscalização: controle de frequência, notas fiscais, comprovantes trabalhistas, advertências à contratada e glosas quando necessárias.',
        legalBase: ['CF/88, art. 7º', 'CLT, regras de duração do trabalho, salário e férias', 'Lei nº 8.036/1990 sobre FGTS, quando aplicável'],
        dryLaw: ['CF/88, art. 7º, incisos sobre jornada, descanso, férias e salário', 'CLT, arts. 58 a 75', 'CLT, arts. 76 a 145, conforme o tópico estudado'],
        jurisprudence: ['A prova de jornada pode envolver cartões de ponto, testemunhas e presunções conforme o caso.', 'Em terceirização, a fiscalização efetiva do contrato é elemento central para afastar responsabilidade do ente público.'],
        objectiveCharge: ['Horas extras.', 'Intervalos.', 'Adicional noturno.', 'Férias.', '13º salário.', 'Salário x remuneração.', 'Reflexos trabalhistas.'],
        discursiveCharge: 'Pode cair como parecer preventivo de fiscalização de contrato terceirizado ou análise de reclamatória trabalhista envolvendo jornada e verbas inadimplidas por empresa contratada.',
        traps: ['Remuneração não é exatamente igual a salário.', 'Verba indenizatória e salarial têm efeitos diferentes.', 'Controle de ponto frágil aumenta risco.', 'Fiscalização formal sem prova real pode ser insuficiente.', 'Banco de horas exige requisitos legais/negociais.'],
        differences: ['Salário x remuneração.', 'Verba salarial x indenizatória.', 'Hora extra x compensação.', 'Intervalo intrajornada x interjornada.', 'Fiscalização contratual x subordinação direta.'],
        commonMistakes: ['Não olhar reflexos.', 'Ignorar cartões de ponto.', 'Achar que terceirização elimina qualquer risco público.', 'Confundir adicional com gratificação.', 'Esquecer descanso semanal remunerado.'],
        miniCase: 'Empresa terceirizada deixa de pagar 13º e férias. Se o Município não prova fiscalização efetiva, pode enfrentar pedido de responsabilidade subsidiária. O parecer deve orientar retenção de pagamento, notificação e eventual rescisão contratual.',
        activeQuestions: ['Qual verba foi inadimplida?', 'Há controle de jornada confiável?', 'A verba tem natureza salarial?', 'O Município fiscalizou?', 'Há prova documental suficiente?'],
        flashcards: [
          { front: 'Qual o limite constitucional geral de jornada?', back: 'Em regra, 8 horas diárias e 44 semanais, salvo regimes especiais e compensações válidas.' },
          { front: 'Salário e remuneração são sinônimos?', back: 'Não. Remuneração é conceito mais amplo.' },
          { front: 'Fiscalizar contrato terceirizado gera vínculo direto?', back: 'Fiscalizar o contrato não é subordinar pessoalmente; é dever do tomador público.' }
        ],
        summary: 'Jornada e verbas são núcleo de passivo trabalhista. Para Procurador Municipal, a chave é prova, controle, fiscalização e classificação correta das parcelas.',
        checklist: ['Sei regras gerais de jornada.', 'Sei salário e remuneração.', 'Sei principais verbas.', 'Sei fiscalizar terceirização.', 'Consigo estruturar defesa em caso de horas extras.'],
        nextTopic: 'Extinção do contrato, estabilidade e garantias'
      },
      {
        id: 'extincao-estabilidade-garantias',
        level: 'intermediário',
        title: 'Extinção do contrato de trabalho, justa causa, estabilidade e garantias provisórias',
        whatIs: 'É o estudo das formas de encerramento do contrato de trabalho e das situações em que a dispensa é limitada por garantia provisória, estabilidade ou proteção legal.',
        purpose: 'Serve para calcular verbas rescisórias, evitar dispensas ilegais e orientar entidades municipais celetistas ou contratos terceirizados em situações sensíveis.',
        plainExplanation: [
          'O contrato pode terminar por pedido de demissão, dispensa sem justa causa, justa causa, acordo, término de prazo, rescisão indireta ou outras hipóteses. Cada modalidade gera efeitos financeiros distintos. A justa causa é a punição máxima e exige prova robusta, gravidade, proporcionalidade e imediatidade.',
          'Estabilidade e garantias provisórias limitam a dispensa em situações como gestação, acidente de trabalho e representação sindical/CIPA, conforme a legislação aplicável. A banca cobra muito a ideia de que estabilidade não é privilégio pessoal: é proteção ligada a valor jurídico específico.',
          'Na Administração Pública, empregados de empresas públicas e sociedades de economia mista não se confundem com servidores estatutários. Há regras próprias, mas dispensas podem exigir motivação conforme entendimento aplicável, especialmente em empresas públicas e sociedades de economia mista prestadoras de serviço público ou conforme jurisprudência sobre motivação.'
        ],
        examTechnical: 'Foque em modalidades de rescisão, verbas, justa causa, rescisão indireta, aviso prévio, FGTS, estabilidade gestante, acidentária, dirigente sindical e CIPA. Em contexto público, estude concurso, motivação, empregados públicos e diferenças com regime estatutário.',
        cityExample: 'Empregada pública municipal gestante é dispensada sem análise da garantia. O parecer deve avaliar reintegração ou indenização substitutiva, risco processual e adequação da conduta administrativa.',
        legalBase: ['CF/88, art. 7º', 'CLT, arts. 482 e 483', 'ADCT, art. 10, II, b, quando estudada gestante', 'Lei nº 8.036/1990 sobre FGTS'],
        dryLaw: ['CLT, arts. 477, 482 e 483', 'CF/88, art. 7º', 'ADCT, art. 10, II, b'],
        jurisprudence: ['A justa causa exige prova clara da falta grave e proporcionalidade.', 'Garantia gestante é tema consolidado na jurisprudência trabalhista, inclusive com foco na proteção objetiva da maternidade.'],
        objectiveCharge: ['Justa causa.', 'Rescisão indireta.', 'Aviso prévio.', 'Verbas rescisórias.', 'Estabilidade gestante e acidentária.', 'Empregado público.'],
        discursiveCharge: 'Pode cair em parecer sobre dispensa de empregado público, gestante, empregado acidentado, justa causa mal documentada ou rescisão indireta por atraso reiterado de salário em empresa municipal.',
        traps: ['Justa causa não se presume.', 'Falta antiga tolerada pode perder imediatidade.', 'Gestante pode ter proteção ainda que empregador desconheça gravidez, conforme entendimento consolidado.', 'Estabilidade não significa impossibilidade absoluta de qualquer ruptura em todos os casos.', 'Servidor estatutário e empregado público têm regimes diferentes.'],
        differences: ['Justa causa x dispensa sem justa causa.', 'Rescisão indireta x pedido de demissão.', 'Estabilidade x garantia provisória.', 'Servidor estatutário x empregado público.', 'Reintegração x indenização substitutiva.'],
        commonMistakes: ['Aplicar regra celetista a servidor estatutário sem conferir regime.', 'Punir com justa causa sem prova.', 'Não calcular reflexos rescisórios.', 'Dispensar empregado protegido.', 'Ignorar motivação em contexto público.'],
        miniCase: 'Empregado de fundação municipal é dispensado uma semana após retornar de afastamento por acidente de trabalho. É necessário checar estabilidade acidentária, nexo e documentação previdenciária antes de sustentar a dispensa.',
        activeQuestions: ['Qual modalidade de rescisão?', 'Quais verbas são devidas?', 'Há garantia provisória?', 'A justa causa está provada?', 'O empregador integra Administração Pública?'],
        flashcards: [
          { front: 'Justa causa exige prova?', back: 'Sim, prova robusta, gravidade, proporcionalidade e imediatidade.' },
          { front: 'Rescisão indireta é o quê?', back: 'É a ruptura por falta grave do empregador.' },
          { front: 'Empregado público é servidor estatutário?', back: 'Não. Empregado público é celetista, embora submetido a regras constitucionais de Administração Pública.' }
        ],
        summary: 'Extinção contratual exige identificar modalidade, verbas e proteções. Em contexto municipal, a análise mistura CLT com princípios constitucionais da Administração Pública.',
        checklist: ['Sei modalidades de extinção.', 'Sei justa causa e rescisão indireta.', 'Sei estabilidade gestante/acidentária.', 'Sei diferenças com servidor estatutário.', 'Consigo emitir parecer sobre dispensa.'],
        nextTopic: 'Terceirização, Administração Pública e responsabilidade trabalhista'
      },
      {
        id: 'terceirizacao-administracao-publica',
        level: 'avançado',
        title: 'Terceirização, Administração Pública, fiscalização contratual e responsabilidade trabalhista do Município',
        whatIs: 'Terceirização é contratação de empresa especializada para prestar serviços. Na Administração Pública, deve ser feita por licitação/contratação regular, com fiscalização. Responsabilidade trabalhista discute se o ente público pode responder por débitos da empresa contratada.',
        purpose: 'Serve para proteger o Município contra passivos trabalhistas e garantir prestação contínua de serviços como limpeza, vigilância, portaria, manutenção, transporte e tecnologia, sem fraude à exigência de concurso público.',
        plainExplanation: [
          'Terceirizar não é contratar pessoas diretamente por empresa interposta para burlar concurso. O contrato deve ser com empresa prestadora, que organiza empregados, paga salários e assume obrigações trabalhistas. O Município fiscaliza o contrato, mas não deve exercer subordinação direta sobre cada trabalhador.',
          'O grande risco prático é a empresa não pagar salários, FGTS, férias ou verbas rescisórias. Se o Município não fiscaliza, pode surgir discussão de responsabilidade subsidiária. A defesa municipal depende de documentos: designação de fiscal, relatórios, comprovantes, retenções, notificações, glosas e medidas contra inadimplemento.',
          'Para prova de Procurador, esse tema é ouro. Junta Direito do Trabalho, Licitações, Contratos Administrativos, Constitucional e responsabilidade do Estado. A resposta boa separa: terceirização lícita, ausência de vínculo direto com Administração, dever de fiscalização e prova concreta de fiscalização.'
        ],
        examTechnical: 'Domine terceirização lícita, ausência de vínculo direto com Administração por contratação irregular, responsabilidade subsidiária, culpa in vigilando, fiscalização contratual, ônus probatório conforme entendimento aplicado, contratos continuados e medidas administrativas de prevenção.',
        cityExample: 'Empresa de limpeza contratada pelo Município atrasa salários. O Procurador orienta notificação, exigência de comprovantes, retenção cautelar conforme contrato/lei, pagamento direto se juridicamente previsto, rescisão, aplicação de sanção e documentação para futura defesa trabalhista.',
        legalBase: ['CF/88, art. 37, II e XXI', 'Lei nº 14.133/2021 sobre contratação e fiscalização', 'Lei nº 6.019/1974 com alterações sobre terceirização/trabalho temporário', 'CLT e legislação trabalhista aplicável'],
        dryLaw: ['CF/88, art. 37', 'Lei nº 14.133/2021 — gestão e fiscalização contratual', 'CLT, arts. 2º, 3º e 9º', 'Lei nº 6.019/1974'],
        jurisprudence: ['A discussão de responsabilidade subsidiária do ente público exige análise da fiscalização contratual e da culpa administrativa, conforme orientação consolidada na jurisprudência constitucional e trabalhista.', 'A contratação irregular de trabalhador por empresa interposta não gera vínculo direto com órgão da Administração Pública, por força da exigência constitucional de concurso.'],
        objectiveCharge: ['Terceirização lícita.', 'Vínculo com Administração Pública.', 'Culpa in vigilando.', 'Responsabilidade subsidiária.', 'Fiscalização de contrato.', 'Súmula 331/TST e entendimento do STF.'],
        discursiveCharge: 'Muito provável em parecer: empresa terceirizada inadimplente, ação trabalhista contra Município, documentos de fiscalização, medidas de retenção e tese defensiva.',
        traps: ['Fiscalizar contrato não é subordinar empregado terceirizado.', 'Ausência de vínculo direto não elimina discussão de responsabilidade subsidiária.', 'Responsabilidade do ente público não deve ser automática; exige análise de conduta/fiscalização.', 'Terceirização não pode fraudar concurso.', 'Contrato administrativo sem fiscal documentalmente atuante fragiliza a defesa.'],
        differences: ['Tomador x empregador.', 'Fiscalização contratual x subordinação direta.', 'Responsabilidade automática x responsabilidade por falha de fiscalização.', 'Terceirização lícita x intermediação fraudulenta.', 'Sanção contratual x responsabilidade trabalhista.'],
        commonMistakes: ['Achar que basta juntar contrato para afastar responsabilidade.', 'Não produzir relatórios de fiscalização.', 'Dar ordens diretas ao terceirizado.', 'Ignorar inadimplemento conhecido.', 'Confundir terceirização com contratação temporária.'],
        miniCase: 'A empresa de portaria deixa de recolher FGTS por seis meses. Se o fiscal do contrato nunca exigiu comprovantes, a defesa do Município fica fraca. Se houve notificações, glosas e processo sancionador, a tese defensiva melhora.',
        activeQuestions: ['Quem é empregador formal?', 'O Município fiscalizou?', 'Há relatórios e comprovantes?', 'Houve ordens diretas ao trabalhador?', 'Qual medida administrativa foi tomada diante do inadimplemento?'],
        flashcards: [
          { front: 'Terceirizado vira empregado do Município?', back: 'Não há vínculo direto com a Administração sem concurso, mas pode haver debate sobre responsabilidade subsidiária.' },
          { front: 'O que é culpa in vigilando?', back: 'Falha no dever de fiscalizar o contrato.' },
          { front: 'Qual prova ajuda a defesa municipal?', back: 'Relatórios de fiscalização, notificações, comprovantes trabalhistas, retenções/glosas e sanções documentadas.' }
        ],
        summary: 'Terceirização exige contrato regular e fiscalização real. Para Procurador, a tese central é mostrar que o Município não é empregador direto e que fiscalizou efetivamente a contratada.',
        checklist: ['Sei terceirização lícita.', 'Sei ausência de vínculo direto com Administração.', 'Sei responsabilidade subsidiária.', 'Sei documentos de fiscalização.', 'Consigo montar tese defensiva municipal.'],
        nextTopic: 'Direito coletivo e Processo do Trabalho'
      },
      {
        id: 'direito-coletivo-processo-trabalho',
        level: 'discursiva',
        title: 'Direito coletivo, sindicatos, negociação coletiva e Processo do Trabalho aplicado ao Município',
        whatIs: 'Direito coletivo regula sindicatos, negociação coletiva, greve e instrumentos coletivos. Processo do Trabalho organiza a solução judicial de conflitos trabalhistas, incluindo reclamação, audiência, provas, sentença, recursos e execução.',
        purpose: 'Serve para compreender conflitos coletivos e defender o Município ou entidades municipais em ações trabalhistas. Também ajuda a lidar com greves, acordos coletivos, terceirização e execuções trabalhistas com impacto orçamentário.',
        plainExplanation: [
          'O Direito Coletivo olha para categorias, sindicatos e negociação. Convenções e acordos coletivos podem ajustar condições de trabalho dentro dos limites constitucionais e legais. No serviço público, a greve e a negociação têm particularidades, especialmente para servidores estatutários e serviços essenciais.',
          'O Processo do Trabalho é mais simples e concentrado que o processo comum, mas tem técnica própria. A audiência é muito relevante: nela pode haver conciliação, defesa, depoimentos e instrução. A prova documental e testemunhal costuma decidir jornada, vínculo, assédio e verbas.',
          'Para Procurador Municipal, o processo trabalhista exige estratégia: verificar competência, legitimidade, prescrição, documentos de fiscalização, impugnar pedidos líquidos, avaliar acordo, calcular impacto orçamentário e preservar teses recursais.'
        ],
        examTechnical: 'Estude Justiça do Trabalho, competência do art. 114 da CF, reclamação trabalhista, audiência, revelia, contestação, provas, sentença, recursos trabalhistas, execução, prescrição, negociação coletiva, sindicato, greve e aplicação subsidiária do CPC. Em prova, a banca cobra prazos, competência e peculiaridades do rito.',
        cityExample: 'Município é incluído em reclamação de terceirizado como tomador. A defesa deve arguir ausência de vínculo direto, comprovar fiscalização, impugnar verbas sem prova, verificar prescrição e avaliar possibilidade de acordo se o risco estiver documentado.',
        legalBase: ['CF/88, arts. 8º, 9º e 114', 'CLT — processo judiciário do trabalho', 'CPC aplicado subsidiariamente quando compatível', 'Lei nº 7.783/1989 sobre greve, quando pertinente'],
        dryLaw: ['CF/88, arts. 8º, 9º e 114', 'CLT, arts. 643 e seguintes', 'CLT, recursos e execução trabalhista', 'CPC subsidiário conforme compatibilidade'],
        jurisprudence: ['A competência da Justiça do Trabalho é definida pelo art. 114 da Constituição e por interpretação jurisprudencial sobre a natureza da relação discutida.', 'A negociação coletiva possui força constitucional, mas não pode eliminar direitos absolutamente indisponíveis sem observância dos limites jurídicos.'],
        objectiveCharge: ['Competência da Justiça do Trabalho.', 'Audiência trabalhista.', 'Contestação e revelia.', 'Provas.', 'Recursos.', 'Execução.', 'Sindicatos e negociação coletiva.'],
        discursiveCharge: 'Pode cair como defesa do Município em reclamação trabalhista de terceirizado, parecer sobre greve, análise de acordo coletivo ou estratégia para reduzir passivo em execução.',
        traps: ['Nem toda relação com o Poder Público vai para Justiça do Trabalho; estatutários costumam ter outro regime jurisdicional.', 'Revelia contra ente público exige análise das peculiaridades aplicáveis.', 'Acordo coletivo não pode simplesmente afastar qualquer direito sem limites.', 'Greve no serviço público exige ponderação com continuidade de serviços essenciais.', 'Execução trabalhista pode gerar impacto financeiro relevante.'],
        differences: ['Acordo coletivo x convenção coletiva.', 'Dissídio individual x coletivo.', 'Servidor estatutário x empregado público.', 'Prescrição bienal x quinquenal.', 'Recurso ordinário x recurso de revista.'],
        commonMistakes: ['Confundir competência trabalhista com regime estatutário.', 'Não preparar documentos antes da audiência.', 'Ignorar prescrição.', 'Não impugnar cálculos.', 'Fazer acordo sem estimativa de risco e impacto orçamentário.'],
        miniCase: 'Sindicato convoca paralisação de empregados de empresa pública municipal de saneamento. O Município deve avaliar serviço essencial, negociação, contingência mínima e eventual medida judicial, sem transformar o conflito coletivo em perseguição sindical.',
        activeQuestions: ['Qual é o regime jurídico do trabalhador?', 'A Justiça do Trabalho é competente?', 'Há prescrição?', 'Quais provas documentais existem?', 'Qual tese defensiva reduz risco?'],
        flashcards: [
          { front: 'Qual artigo trata da competência da Justiça do Trabalho?', back: 'Art. 114 da Constituição Federal.' },
          { front: 'Acordo coletivo e convenção coletiva são iguais?', back: 'Não. Acordo envolve sindicato profissional e empresa; convenção envolve sindicatos profissional e econômico.' },
          { front: 'Processo trabalhista aceita CPC?', back: 'Sim, de forma subsidiária/supletiva quando houver compatibilidade e lacuna.' }
        ],
        summary: 'Direito coletivo e Processo do Trabalho completam a visão trabalhista. Para Procurador, o foco é competência, prova, prescrição, fiscalização, negociação e impacto financeiro.',
        checklist: ['Sei competência da Justiça do Trabalho.', 'Sei noções de audiência e defesa.', 'Sei recursos básicos.', 'Sei negociação coletiva.', 'Consigo montar defesa municipal trabalhista.'],
        nextTopic: 'Próxima fase: Direito Urbanístico Premium'
      }
    ]
  }
  ,{
    id: 'direito-urbanistico',
    subject: 'Direito Urbanístico',
    status: '39H concluída',
    priority: 'Alta',
    overview: 'Apostila premium de Direito Urbanístico para Procurador Municipal: política urbana constitucional, Estatuto da Cidade, função social da propriedade, plano diretor, parcelamento, uso e ocupação do solo, instrumentos urbanísticos, regularização fundiária urbana, poder de polícia urbanístico e responsabilidade do Município no ordenamento territorial.',
    lawBase: ['CF/88, arts. 30, I, II e VIII; 182 e 183', 'Lei nº 10.257/2001 — Estatuto da Cidade', 'Lei nº 6.766/1979 — Parcelamento do Solo Urbano', 'Lei nº 13.465/2017 — Regularização Fundiária Urbana', 'Legislação municipal de plano diretor, zoneamento, obras, posturas e uso do solo'],
    topics: [
      {
        id: 'politica-urbana-constitucional',
        level: 'básico',
        title: 'Política urbana constitucional, competência municipal e função social da cidade',
        whatIs: 'Direito Urbanístico é o ramo que organiza juridicamente o espaço urbano. Ele disciplina como a cidade deve crescer, como o solo pode ser usado, quais instrumentos o Poder Público pode utilizar para ordenar o território e como a propriedade urbana deve cumprir função social.',
        purpose: 'Serve para transformar o crescimento da cidade em política pública juridicamente controlada. Para Procurador Municipal, é essencial para defender plano diretor, zoneamento, licenciamento de obras, fiscalização de loteamentos, regularização fundiária e sanções urbanísticas.',
        plainExplanation: [
          'A Constituição deu ao Município papel central na política urbana. O art. 30 trata do interesse local e da ordenação territorial, enquanto os arts. 182 e 183 criam a base da política urbana e da usucapião especial urbana. Isso significa que a cidade não é apenas um amontoado de imóveis privados: ela tem função social, precisa de planejamento, infraestrutura, mobilidade, saneamento, moradia e equilíbrio ambiental.',
          'A propriedade urbana não é um direito absoluto. O proprietário pode usar, construir e explorar seu imóvel, mas deve respeitar o plano diretor, o zoneamento, recuos, coeficientes, posturas, normas ambientais, acessibilidade, segurança e interesse coletivo. Em prova, a banca costuma cobrar essa passagem do individual para o coletivo: propriedade urbana deve atender à função social definida pelo ordenamento municipal.',
          'Para a Procuradoria, o tema aparece quando alguém quer construir em área irregular, questiona multa urbanística, pede alvará incompatível com o zoneamento ou ajuíza ação contra obrigação de regularizar obra. O parecer bom mostra competência municipal, fundamento constitucional, legislação local e proporcionalidade da medida.'
        ],
        examTechnical: 'Para prova, fixe: CF/88, art. 30, VIII, atribui ao Município promover adequado ordenamento territorial, mediante planejamento e controle do uso, parcelamento e ocupação do solo urbano. O art. 182 determina que a política de desenvolvimento urbano, executada pelo Município, tem por objetivo ordenar o pleno desenvolvimento das funções sociais da cidade e garantir o bem-estar de seus habitantes. O plano diretor é o instrumento básico da política de desenvolvimento e expansão urbana.',
        cityExample: 'Um empreendimento pretende instalar atividade industrial incômoda em bairro predominantemente residencial. O Procurador deve analisar competência municipal, zoneamento, impactos urbanísticos, vizinhança, licenciamento e eventual indeferimento motivado do alvará, evitando tanto omissão fiscalizatória quanto restrição arbitrária.',
        legalBase: ['CF/88, arts. 30, I, II e VIII', 'CF/88, arts. 182 e 183', 'Lei nº 10.257/2001, especialmente diretrizes gerais da política urbana', 'Lei Orgânica Municipal e legislação local de ordenamento territorial'],
        dryLaw: ['CF/88, art. 30, VIII', 'CF/88, art. 182', 'CF/88, art. 183', 'Estatuto da Cidade, arts. 1º e 2º'],
        jurisprudence: ['O STF reconhece ampla competência municipal para legislar sobre interesse local e ordenamento territorial urbano, desde que respeitadas normas gerais federais e competências dos demais entes.', 'A atuação urbanística municipal deve observar função social da propriedade, proporcionalidade, motivação e devido processo administrativo quando houver restrição ou sanção.'],
        objectiveCharge: ['Competência municipal para uso, parcelamento e ocupação do solo.', 'Finalidade da política urbana.', 'Função social da propriedade urbana.', 'Plano diretor como instrumento básico.', 'Diferença entre interesse local e normas gerais federais.'],
        discursiveCharge: 'Pode cair como parecer sobre alvará de construção, interdição de obra, loteamento irregular, aplicação de multa, alteração de zoneamento ou defesa de lei municipal urbanística.',
        traps: ['Município não pode ignorar normas gerais federais, mas tem competência forte sobre interesse local e ordenamento territorial.', 'Função social não elimina propriedade privada; condiciona seu exercício.', 'Plano diretor não é peça decorativa: orienta a política urbana.', 'Restrição urbanística exige fundamento legal e motivação.', 'Direito de construir não é absoluto.'],
        differences: ['Política urbana x política habitacional: a primeira organiza a cidade; a segunda foca moradia.', 'Função social da cidade x função social da propriedade: uma olha o conjunto urbano; outra olha o imóvel.', 'Competência suplementar x competência exclusiva: Município suplementa normas gerais e regula interesse local.', 'Poder de polícia urbanístico x desapropriação: fiscalização limita uso; desapropriação retira propriedade mediante requisitos.'],
        commonMistakes: ['Responder urbanístico como se fosse apenas direito de propriedade civil.', 'Esquecer o art. 30, VIII da CF.', 'Tratar plano diretor como facultativo em qualquer caso.', 'Não relacionar cidade, meio ambiente e interesse local.', 'Confundir licença urbanística com favor do prefeito.'],
        miniCase: 'Morador pede alvará para construir prédio acima do gabarito permitido. O Município indefere com base na lei de zoneamento. A decisão tende a ser legítima se houver base legal, motivação, impessoalidade e possibilidade de contraditório em eventual recurso administrativo.',
        activeQuestions: ['Qual é a competência municipal no caso?', 'Há lei local disciplinando uso do solo?', 'O imóvel cumpre função social?', 'A restrição urbanística é proporcional?', 'Há motivação suficiente no ato administrativo?'],
        flashcards: [
          { front: 'Qual artigo da CF trata do ordenamento territorial municipal?', back: 'Art. 30, VIII.' },
          { front: 'Qual artigo da CF trata da política urbana?', back: 'Art. 182.' },
          { front: 'Direito de construir é absoluto?', back: 'Não. Deve respeitar função social, plano diretor, zoneamento e normas urbanísticas.' }
        ],
        summary: 'Direito Urbanístico é a técnica jurídica de organizar a cidade. Para Procurador Municipal, o núcleo é competência local, função social, plano diretor, zoneamento, poder de polícia e motivação dos atos.',
        checklist: ['Sei explicar competência municipal urbanística.', 'Sei art. 182 da CF.', 'Sei função social da cidade e da propriedade.', 'Consigo aplicar zoneamento a caso concreto.', 'Consigo redigir parecer sobre alvará ou obra irregular.'],
        nextTopic: 'Estatuto da Cidade e instrumentos da política urbana'
      },
      {
        id: 'estatuto-da-cidade-instrumentos',
        level: 'intermediário',
        title: 'Estatuto da Cidade: diretrizes gerais e instrumentos da política urbana',
        whatIs: 'O Estatuto da Cidade é a Lei nº 10.257/2001. Ele regulamenta os arts. 182 e 183 da Constituição, estabelece diretrizes gerais da política urbana e fornece instrumentos jurídicos para o Município ordenar o uso da propriedade urbana e promover cidades sustentáveis.',
        purpose: 'Serve para dar ferramentas concretas ao Município: plano diretor, parcelamento/edificação/uso compulsórios, IPTU progressivo no tempo, desapropriação-sanção, direito de preempção, outorga onerosa, operações urbanas, estudo de impacto de vizinhança, usucapião especial urbana e gestão democrática da cidade.',
        plainExplanation: [
          'O Estatuto da Cidade transforma a função social em instrumentos práticos. Sem instrumentos, a Constituição ficaria abstrata. Com eles, o Município pode induzir uso adequado do solo, combater especulação, exigir aproveitamento de imóveis ociosos, ordenar adensamento, proteger áreas sensíveis e avaliar impactos de empreendimentos.',
          'O ponto central é que cada instrumento exige lei, procedimento e motivação. Não basta o gestor dizer que quer usar IPTU progressivo ou exigir EIV. É preciso verificar plano diretor, lei municipal específica, área definida, finalidade pública, contraditório e requisitos legais.',
          'A banca gosta de cobrar nomes parecidos. Direito de preempção não é desapropriação; outorga onerosa não é multa; EIV não substitui EIA ambiental; IPTU progressivo no tempo tem função urbanística sancionatória, diferente da progressividade fiscal do IPTU.'
        ],
        examTechnical: 'Domine diretrizes do art. 2º da Lei nº 10.257/2001 e os instrumentos do art. 4º. Entenda a sequência de parcelamento/edificação/utilização compulsórios, IPTU progressivo no tempo e desapropriação com pagamento em títulos. Estude EIV, direito de preempção, outorga onerosa, transferência do direito de construir e operações urbanas consorciadas.',
        cityExample: 'Terreno grande em área servida por infraestrutura permanece vazio por anos. O Município pode, se houver previsão no plano diretor e lei específica, exigir adequado aproveitamento. A resposta jurídica precisa observar notificação, prazos, devido processo e sequência legal antes de medidas mais gravosas.',
        legalBase: ['Lei nº 10.257/2001 — Estatuto da Cidade', 'CF/88, arts. 182 e 183', 'Plano diretor e legislação urbanística municipal'],
        dryLaw: ['Estatuto da Cidade, arts. 2º, 4º, 5º a 8º, 25 a 35, 36 a 38, 39 a 42', 'CF/88, art. 182, §§ 2º a 4º'],
        jurisprudence: ['A aplicação de instrumentos urbanísticos deve respeitar legalidade, plano diretor, motivação e proporcionalidade.', 'Tribunais costumam exigir demonstração de base legal municipal para restrições urbanísticas específicas e instrumentos que afetem intensamente o direito de propriedade.'],
        objectiveCharge: ['Finalidade do Estatuto da Cidade.', 'Diretrizes gerais da política urbana.', 'Instrumentos do art. 4º.', 'IPTU progressivo no tempo.', 'Direito de preempção.', 'EIV.', 'Outorga onerosa.'],
        discursiveCharge: 'Pode cair como parecer sobre imóvel ocioso, exigência de EIV, operação urbana, contrapartida urbanística, direito de preempção ou validade de lei municipal urbanística.',
        traps: ['EIV não substitui EIA quando houver impacto ambiental que exija estudo ambiental.', 'Direito de preempção é preferência do Município em aquisição, não tomada compulsória imediata.', 'IPTU progressivo urbanístico não é mera majoração arrecadatória.', 'Desapropriação-sanção depende de etapas anteriores.', 'Instrumento urbanístico sem lei local adequada é risco de nulidade.'],
        differences: ['IPTU progressivo fiscal x IPTU progressivo no tempo urbanístico.', 'EIV x EIA/RIMA.', 'Preempção x desapropriação.', 'Outorga onerosa x taxa.', 'Operação urbana consorciada x simples obra pública.'],
        commonMistakes: ['Decorar instrumentos sem entender a sequência.', 'Ignorar necessidade de plano diretor e lei municipal.', 'Achar que todo empreendimento exige EIV.', 'Confundir função arrecadatória com função urbanística.', 'Esquecer gestão democrática da cidade.'],
        miniCase: 'Construtora quer grande shopping em região já congestionada. A lei municipal pode exigir EIV para avaliar impactos em trânsito, infraestrutura, vizinhança, iluminação, ventilação, patrimônio e equipamentos urbanos. Isso não dispensa licenciamento ambiental se também houver impacto ambiental relevante.',
        activeQuestions: ['Qual instrumento é adequado?', 'Existe previsão no plano diretor?', 'Há lei municipal específica?', 'Foi garantido procedimento?', 'O instrumento é proporcional ao problema urbano?'],
        flashcards: [
          { front: 'Qual lei é o Estatuto da Cidade?', back: 'Lei nº 10.257/2001.' },
          { front: 'EIV substitui EIA?', back: 'Não. São estudos distintos; EIV não dispensa estudo ambiental quando exigido.' },
          { front: 'IPTU progressivo no tempo tem qual finalidade?', back: 'Induzir cumprimento da função social da propriedade urbana.' }
        ],
        summary: 'O Estatuto da Cidade dá instrumentos para o Município ordenar a cidade. A chave de prova é saber finalidade, requisitos, sequência e diferença entre instrumentos.',
        checklist: ['Sei diretrizes do Estatuto da Cidade.', 'Sei instrumentos principais.', 'Sei sequência PEUC → IPTU progressivo → desapropriação-sanção.', 'Sei diferenciar EIV e EIA.', 'Consigo aplicar instrumento urbanístico em parecer.'],
        nextTopic: 'Plano diretor, zoneamento e controle do uso do solo'
      },
      {
        id: 'plano-diretor-zoneamento',
        level: 'avançado',
        title: 'Plano Diretor, zoneamento, uso e ocupação do solo, alvarás e licenciamento urbanístico',
        whatIs: 'Plano Diretor é o instrumento básico da política de desenvolvimento e expansão urbana. Zoneamento e normas de uso e ocupação do solo definem o que pode ser feito em cada área da cidade: usos permitidos, coeficientes, gabaritos, recuos, taxa de ocupação, permeabilidade, estacionamento, atividades incômodas e restrições urbanísticas.',
        purpose: 'Serve para organizar crescimento urbano, evitar conflitos de vizinhança, distribuir atividades, proteger áreas sensíveis, orientar investimentos públicos e dar segurança jurídica aos particulares.',
        plainExplanation: [
          'O plano diretor não é apenas mapa. Ele é lei municipal estruturante, define diretrizes de desenvolvimento e condiciona instrumentos urbanísticos. Já o zoneamento traduz essas diretrizes em regras aplicáveis ao lote e à atividade. Para o cidadão, aparece como alvará, licença, certidão de uso do solo e fiscalização de obra.',
          'Em Procuradoria Municipal, os conflitos são muito práticos: alvará negado, obra embargada, mudança de zoneamento questionada, atividade barulhenta em área residencial, construção irregular, lote com recuo insuficiente, igreja ou comércio em área incompatível. O parecer deve juntar Constituição, Estatuto da Cidade e lei local.',
          'A banca costuma cobrar o caráter obrigatório do plano diretor em hipóteses constitucionais/legais, a participação popular e a vinculação da propriedade à função social. Também cobra que licença urbanística é ato vinculado quando os requisitos legais estão preenchidos; se não estão, a Administração deve indeferir motivadamente.'
        ],
        examTechnical: 'Estude plano diretor, processo participativo, revisão periódica, zoneamento, alvará, licença de construção, habite-se, embargo, demolição administrativa quando legalmente cabível, regularização, direito adquirido urbanístico e limites da discricionariedade administrativa. Em prova, destaque motivação e legalidade estrita na análise de licença.',
        cityExample: 'Empresário pede alvará para bar com música ao vivo em zona residencial. A análise jurídica verifica uso permitido, impacto de vizinhança, ruído, horário, posturas, acessibilidade, segurança e eventual necessidade de adequação. Se a lei proíbe, o indeferimento deve ser motivado e impessoal.',
        legalBase: ['CF/88, art. 182', 'Lei nº 10.257/2001, plano diretor e gestão democrática', 'Lei municipal de plano diretor, zoneamento, obras e posturas', 'Lei nº 13.874/2019 quando houver discussão de liberdade econômica compatível com interesse local e risco da atividade'],
        dryLaw: ['CF/88, art. 182, §1º e §2º', 'Estatuto da Cidade, arts. 39 a 42', 'Legislação municipal de uso e ocupação do solo', 'Código de Obras e Código de Posturas local'],
        jurisprudence: ['A alteração de zoneamento e planejamento urbano é matéria de competência municipal, mas deve respeitar processo legislativo, razoabilidade e, quando aplicável, participação e estudos técnicos.', 'Licença urbanística concedida contra a lei pode ser anulada, sem prejuízo de análise de boa-fé, segurança jurídica e eventual responsabilidade estatal conforme o caso.'],
        objectiveCharge: ['Plano diretor como instrumento básico.', 'Obrigatoriedade do plano diretor.', 'Função social definida pelo plano diretor.', 'Alvará e licença urbanística.', 'Zoneamento e poder de polícia.', 'Participação popular.'],
        discursiveCharge: 'Pode cair parecer sobre indeferimento de alvará, obra irregular, mudança de zoneamento, regularização de imóvel, direito adquirido de construir ou ação contra embargo municipal.',
        traps: ['Protocolo de pedido não gera direito de construir contra lei posterior em qualquer hipótese; é preciso analisar ato jurídico perfeito, licença e regime local.', 'Alvará não é favor político.', 'Lei de zoneamento não pode ser aplicada de modo pessoal para beneficiar empreendimento específico sem fundamento geral.', 'Mudança legislativa urbanística exige cuidado com motivação, impessoalidade e interesse público.', 'Liberdade econômica não elimina controle urbanístico de atividades de risco ou impacto.'],
        differences: ['Plano diretor x zoneamento.', 'Alvará de funcionamento x licença de construção.', 'Embargo x demolição.', 'Uso permitido x uso tolerado x uso proibido.', 'Direito adquirido x mera expectativa.'],
        commonMistakes: ['Responder sem consultar lei municipal.', 'Confundir habite-se com licença para atividade econômica.', 'Ignorar posturas municipais.', 'Achar que todo indeferimento gera indenização.', 'Esquecer participação popular no planejamento urbano.'],
        miniCase: 'Após lei nova reduzir gabarito, construtora alega direito de construir 20 andares porque possuía estudo preliminar. Se não havia licença válida consolidada, pode haver apenas expectativa. O parecer deve analisar protocolo, aprovação, prazo, boa-fé e regra de transição.',
        activeQuestions: ['Existe plano diretor vigente?', 'Qual zona incide no imóvel?', 'O uso é permitido?', 'Há licença válida?', 'Existe direito adquirido ou mera expectativa?', 'A decisão foi motivada?'],
        flashcards: [
          { front: 'Plano diretor é instrumento de quê?', back: 'Instrumento básico da política de desenvolvimento e expansão urbana.' },
          { front: 'Alvará é ato discricionário?', back: 'Em regra, licença urbanística é vinculada aos requisitos legais, embora a análise técnica possa exigir verificação concreta.' },
          { front: 'Zoneamento pode limitar propriedade?', back: 'Sim, como expressão da função social e do ordenamento territorial, observada legalidade.' }
        ],
        summary: 'Plano diretor e zoneamento transformam política urbana em regra concreta. Para prova, foque em competência municipal, função social, licença vinculada, motivação e consulta à lei local.',
        checklist: ['Sei o que é plano diretor.', 'Sei função do zoneamento.', 'Sei analisar alvará e licença.', 'Sei diferença entre direito adquirido e expectativa.', 'Consigo fundamentar embargo ou indeferimento.'],
        nextTopic: 'Parcelamento do solo urbano e loteamentos irregulares'
      },
      {
        id: 'parcelamento-solo-loteamentos',
        level: 'avançado',
        title: 'Parcelamento do solo urbano, loteamentos, desmembramentos e loteamentos irregulares ou clandestinos',
        whatIs: 'Parcelamento do solo urbano é a divisão de uma gleba em lotes destinados à edificação, com abertura ou não de novas vias, conforme regras urbanísticas. Loteamento envolve abertura, prolongamento ou modificação de vias e espaços públicos; desmembramento aproveita sistema viário existente.',
        purpose: 'Serve para garantir que a expansão da cidade ocorra com infraestrutura, vias, áreas públicas, equipamentos urbanos, drenagem, saneamento, segurança jurídica registral e respeito ao planejamento municipal.',
        plainExplanation: [
          'O parcelamento do solo é um dos temas mais importantes para Procurador Municipal porque loteamento irregular cria problemas por décadas: ruas sem infraestrutura, moradores sem matrícula, áreas públicas ocupadas, cobrança por serviços inexistentes, risco ambiental e judicialização.',
          'A Lei nº 6.766/1979 estabelece normas gerais. O Município aprova projetos, verifica compatibilidade urbanística, exige infraestrutura, áreas públicas e registro. Loteamento clandestino é aquele feito sem aprovação; irregular é aquele aprovado ou iniciado, mas executado em desacordo com requisitos ou sem regularização completa.',
          'A atuação municipal deve combinar fiscalização, embargo, multa, ação civil pública se necessário, regularização quando possível e proteção de adquirentes de boa-fé. O Procurador não pode olhar só para o empreendedor: há interesse social dos moradores e interesse urbanístico coletivo.'
        ],
        examTechnical: 'Domine Lei nº 6.766/1979, conceitos de loteamento e desmembramento, requisitos mínimos, aprovação municipal, registro imobiliário, áreas públicas, infraestrutura, crimes relacionados e responsabilidade do loteador. Conecte com REURB quando houver núcleo urbano informal consolidado.',
        cityExample: 'Empreendedor vende lotes em área rural como chácaras urbanas sem aprovação municipal. O Município pode embargar, multar, comunicar Ministério Público e Registro de Imóveis, orientar consumidores e avaliar medidas judiciais para impedir agravamento do dano.',
        legalBase: ['Lei nº 6.766/1979', 'CF/88, art. 30, VIII', 'Lei nº 10.257/2001', 'Lei nº 13.465/2017 quando houver regularização fundiária', 'Legislação municipal de parcelamento do solo'],
        dryLaw: ['Lei nº 6.766/1979 — conceitos, aprovação, registro e responsabilidade', 'CF/88, art. 30, VIII', 'Estatuto da Cidade, instrumentos urbanísticos', 'Lei nº 13.465/2017, REURB'],
        jurisprudence: ['Tribunais reconhecem dever municipal de fiscalização urbanística, mas a responsabilidade por loteamento irregular deve considerar conduta do Município, do loteador e circunstâncias do caso.', 'A regularização fundiária não é anistia automática para qualquer irregularidade; exige procedimento, interesse público e análise urbanística/ambiental.'],
        objectiveCharge: ['Loteamento x desmembramento.', 'Aprovação municipal.', 'Registro do loteamento.', 'Loteamento irregular x clandestino.', 'Responsabilidade do loteador.', 'Infraestrutura e áreas públicas.'],
        discursiveCharge: 'Pode cair como parecer sobre venda irregular de lotes, pedido de regularização, embargo de parcelamento, ação civil pública ou responsabilidade do Município por omissão fiscalizatória.',
        traps: ['Contrato particular não regulariza lote.', 'Registro imobiliário não substitui aprovação urbanística quando exigida.', 'REURB não é liberação automática sem análise.', 'Município deve fiscalizar, mas não assume automaticamente toda obrigação do loteador.', 'Área pública de loteamento não pode ser tratada como bem privado do empreendedor.'],
        differences: ['Loteamento x desmembramento.', 'Irregular x clandestino.', 'Aprovação urbanística x registro imobiliário.', 'Regularização fundiária x aprovação ordinária de novo parcelamento.', 'Responsabilidade administrativa x civil x penal.'],
        commonMistakes: ['Esquecer Lei nº 6.766/1979.', 'Não diferenciar clandestino de irregular.', 'Ignorar Registro de Imóveis.', 'Regularizar sem infraestrutura mínima.', 'Não proteger adquirentes de boa-fé.'],
        miniCase: 'Famílias compram lotes de loteador que nunca aprovou o empreendimento. O Município deve impedir novas vendas, buscar responsabilização do loteador e avaliar REURB se houver núcleo consolidado e interesse social, sem legitimar automaticamente fraude futura.',
        activeQuestions: ['Houve aprovação municipal?', 'Houve registro?', 'Existe infraestrutura?', 'Quem vendeu os lotes?', 'O núcleo é consolidado?', 'Cabe fiscalização, sanção ou regularização?'],
        flashcards: [
          { front: 'Loteamento e desmembramento são iguais?', back: 'Não. Loteamento envolve abertura/modificação de vias; desmembramento aproveita sistema viário existente.' },
          { front: 'Lei geral de parcelamento do solo urbano?', back: 'Lei nº 6.766/1979.' },
          { front: 'REURB regulariza automaticamente?', back: 'Não. Depende de procedimento e requisitos urbanísticos, ambientais e sociais.' }
        ],
        summary: 'Parcelamento do solo protege a expansão ordenada da cidade. Em prova, separe conceitos, aprovação, registro, responsabilidade e regularização.',
        checklist: ['Sei loteamento x desmembramento.', 'Sei irregular x clandestino.', 'Sei papel do Município.', 'Sei relação com Registro de Imóveis.', 'Consigo parecer sobre loteamento irregular.'],
        nextTopic: 'Regularização fundiária urbana — REURB'
      },
      {
        id: 'reurb-regularizacao-fundiaria',
        level: 'discursiva',
        title: 'Regularização fundiária urbana — REURB, núcleos urbanos informais, REURB-S e REURB-E',
        whatIs: 'Regularização fundiária urbana é o conjunto de medidas jurídicas, urbanísticas, ambientais e sociais destinado a incorporar núcleos urbanos informais ao ordenamento territorial e titular seus ocupantes quando cabível. A Lei nº 13.465/2017 disciplina a REURB.',
        purpose: 'Serve para enfrentar ocupações consolidadas, loteamentos antigos irregulares, moradias sem matrícula, falta de infraestrutura e insegurança jurídica, equilibrando direito à moradia, função social, meio ambiente e planejamento urbano.',
        plainExplanation: [
          'A REURB é uma resposta para realidades urbanas já consolidadas. Ela não deve ser vista como prêmio à irregularidade, mas como instrumento de reorganização da cidade quando desfazer a ocupação seria socialmente inviável ou desproporcional. Ainda assim, precisa de procedimento técnico e jurídico.',
          'Há REURB-S, de interesse social, voltada à população de baixa renda, e REURB-E, de interesse específico, normalmente sem o mesmo perfil social. Essa distinção influencia custos, responsabilidades, políticas públicas e análise do interesse envolvido.',
          'Para Procurador Municipal, o cuidado é evitar duas distorções: negar toda regularização por formalismo e, no extremo oposto, regularizar qualquer ocupação sem estudo, sem controle ambiental, sem infraestrutura mínima e sem responsabilizar quem lucrou com a irregularidade.'
        ],
        examTechnical: 'Estude legitimados, procedimento, classificação, projeto de regularização, CRF, titulação, infraestrutura essencial, áreas de risco, áreas ambientais, registro e responsabilidade por implantação de medidas. A prova pode explorar equilíbrio entre moradia, urbanismo e meio ambiente.',
        cityExample: 'Bairro consolidado há 20 anos possui casas, ruas informais e ausência de matrícula individual. O Município avalia REURB-S, identifica ocupantes, faz projeto urbanístico, analisa riscos, define obras essenciais e expede certidão de regularização fundiária quando cumpridos requisitos.',
        legalBase: ['Lei nº 13.465/2017', 'Decreto nº 9.310/2018 como referência regulamentar federal', 'CF/88, arts. 6º, 30, VIII, 182 e 225', 'Estatuto da Cidade', 'Legislação municipal de REURB, habitação e urbanismo'],
        dryLaw: ['Lei nº 13.465/2017 — REURB', 'CF/88, arts. 6º, 182 e 225', 'Estatuto da Cidade', 'Lei nº 6.766/1979 quando pertinente'],
        jurisprudence: ['A regularização fundiária deve ser compatibilizada com proteção ambiental, segurança dos ocupantes e interesse urbanístico.', 'Áreas de risco ou ambientalmente sensíveis exigem análise técnica específica; a titulação não pode ignorar risco à vida ou dano ambiental relevante.'],
        objectiveCharge: ['Conceito de REURB.', 'REURB-S x REURB-E.', 'Núcleo urbano informal.', 'CRF.', 'Legitimados.', 'Infraestrutura essencial.', 'Regularização em áreas de risco.'],
        discursiveCharge: 'Muito provável em parecer: regularizar bairro informal, área de preservação, loteamento antigo, conflito entre moradia e meio ambiente ou definição de responsabilidades por obras.',
        traps: ['REURB não é cheque em branco.', 'REURB-S não é igual a REURB-E.', 'Regularização não pode ignorar risco geológico ou inundação.', 'Titulação sem projeto urbanístico pode perpetuar problema.', 'Não se deve confundir REURB com aprovação normal de novo loteamento.'],
        differences: ['REURB-S x REURB-E.', 'Regularização fundiária x parcelamento novo.', 'Titulação x infraestrutura.', 'Núcleo consolidado x ocupação recente.', 'Interesse social x interesse específico.'],
        commonMistakes: ['Tratar REURB como simples entrega de escritura.', 'Ignorar diagnóstico ambiental.', 'Não classificar a modalidade.', 'Não definir responsabilidades por obras.', 'Esquecer participação e cadastro social.'],
        miniCase: 'Ocupação de baixa renda fica próxima a córrego. A resposta adequada não é regularizar automaticamente nem remover todos sem estudo. É preciso laudo técnico, análise de risco, solução habitacional/urbanística e compatibilização ambiental.',
        activeQuestions: ['O núcleo é urbano informal consolidado?', 'É REURB-S ou REURB-E?', 'Há área de risco?', 'Existe impacto ambiental?', 'Quais obras essenciais são necessárias?', 'Quem arca com custos?'],
        flashcards: [
          { front: 'Lei da REURB?', back: 'Lei nº 13.465/2017.' },
          { front: 'REURB-S é para quê?', back: 'Regularização fundiária de interesse social, voltada à população de baixa renda.' },
          { front: 'REURB é só titulação?', back: 'Não. Envolve medidas jurídicas, urbanísticas, ambientais e sociais.' }
        ],
        summary: 'REURB é instrumento de inclusão urbana com técnica. Para Procurador, a resposta deve equilibrar moradia, urbanismo, ambiente, risco e responsabilidade.',
        checklist: ['Sei conceito de REURB.', 'Sei REURB-S e REURB-E.', 'Sei riscos e limites ambientais.', 'Sei função da CRF.', 'Consigo elaborar parecer de regularização.'],
        nextTopic: 'Poder de polícia urbanístico e sanções'
      },
      {
        id: 'poder-policia-urbanistico',
        level: 'discursiva',
        title: 'Poder de polícia urbanístico: fiscalização, embargo, interdição, multa, demolição e defesa do Município',
        whatIs: 'Poder de polícia urbanístico é a atividade administrativa de condicionar, limitar, fiscalizar e sancionar o uso da propriedade e das atividades urbanas para proteger segurança, ordem urbanística, função social, vizinhança, mobilidade, meio ambiente urbano e interesse coletivo.',
        purpose: 'Serve para impedir obras irregulares, atividades incompatíveis com zoneamento, ocupações perigosas, descumprimento de alvarás, loteamentos clandestinos e danos à cidade. Para Procurador, é tema central de defesa judicial e parecer preventivo.',
        plainExplanation: [
          'O poder de polícia urbanístico aparece de forma concreta: fiscal vai à obra, lavra auto, embarga, multa, interdita ou instaura processo. Cada ato deve ter competência, base legal, descrição do fato, prova mínima, proporcionalidade e possibilidade de defesa quando a medida não for de urgência absoluta.',
          'Embargo e interdição são medidas para cessar situação irregular ou perigosa. Multa é sanção. Demolição é medida extrema e exige previsão legal, procedimento e cautela, especialmente quando envolve moradia. A Administração não pode ser omissa diante de risco, mas também não pode agir sem devido processo.',
          'Em prova, a pegadinha é confundir autoexecutoriedade com arbitrariedade. Alguns atos de polícia podem ser autoexecutórios quando previstos em lei ou diante de urgência, mas isso não elimina motivação, controle, proporcionalidade e responsabilidade por excesso.'
        ],
        examTechnical: 'Estude atributos do poder de polícia, licenças urbanísticas, fiscalização, processo administrativo sancionador, devido processo, autoexecutoriedade, proporcionalidade, prescrição de sanções, nulidades do auto de infração e controle judicial. Conecte com Direito Administrativo e Ambiental.',
        cityExample: 'Obra avança sobre passeio público e não possui alvará. O fiscal embarga a obra e lavra auto. O Procurador deve verificar base legal, identificação do infrator, prova fotográfica, prazo de defesa, risco à coletividade e medida adequada para recomposição do passeio.',
        legalBase: ['CF/88, arts. 30, VIII e 182', 'Código Tributário Nacional, art. 78 como conceito geral de poder de polícia', 'Legislação municipal de obras, posturas, zoneamento e fiscalização', 'Lei nº 10.257/2001'],
        dryLaw: ['CTN, art. 78', 'CF/88, arts. 30, VIII e 182', 'Código de Obras/Posturas Municipal', 'Lei municipal de processo administrativo, se houver'],
        jurisprudence: ['Controle judicial pode anular sanção urbanística ilegal, desmotivada ou desproporcional, mas não deve substituir a discricionariedade técnica legítima do Município.', 'A autoexecutoriedade administrativa não afasta necessidade de respeito a direitos fundamentais e devido processo, especialmente em medidas gravosas.'],
        objectiveCharge: ['Conceito de poder de polícia.', 'Autoexecutoriedade.', 'Embargo x interdição x multa.', 'Devido processo.', 'Competência do fiscal.', 'Controle judicial.'],
        discursiveCharge: 'Pode cair parecer sobre demolição de obra irregular, defesa em ação anulatória de multa, interdição de estabelecimento ou mandado de segurança contra embargo municipal.',
        traps: ['Autoexecutoriedade não é carta branca.', 'Multa exige processo e motivação.', 'Demolição é medida extrema.', 'Obra antiga não é automaticamente regular.', 'Alvará vencido ou obtido por fraude pode ser revisto.'],
        differences: ['Embargo x interdição.', 'Multa x medida cautelar.', 'Licença x autorização.', 'Poder de polícia preventivo x repressivo.', 'Vício formal x vício material do auto.'],
        commonMistakes: ['Não juntar fotos e relatório técnico.', 'Lavrar auto sem descrever fato.', 'Aplicar sanção sem base legal.', 'Confundir urgência com dispensa total de processo.', 'Ignorar proporcionalidade.'],
        miniCase: 'Estabelecimento funciona como casa de eventos em área residencial, sem alvará e com ruído excessivo. O Município pode fiscalizar, autuar e até interditar se houver base legal e risco/irregularidade, garantindo defesa e motivando a medida.',
        activeQuestions: ['Qual norma foi violada?', 'Quem tem competência para fiscalizar?', 'Existe urgência?', 'A medida é proporcional?', 'Foi garantida defesa?', 'A prova do fato é suficiente?'],
        flashcards: [
          { front: 'Poder de polícia urbanístico limita qual interesse?', back: 'Limita uso da propriedade e atividades urbanas em favor da ordem urbanística e interesse coletivo.' },
          { front: 'Embargo e multa são iguais?', back: 'Não. Embargo paralisa atividade/obra; multa é sanção pecuniária.' },
          { front: 'Autoexecutoriedade elimina controle judicial?', back: 'Não. O ato continua sujeito a controle de legalidade e proporcionalidade.' }
        ],
        summary: 'Poder de polícia urbanístico é defesa concreta da cidade. A prova cobra competência, legalidade, motivação, proporcionalidade e diferença entre medidas.',
        checklist: ['Sei poder de polícia urbanístico.', 'Sei embargo, interdição, multa e demolição.', 'Sei autoexecutoriedade.', 'Sei devido processo sancionador.', 'Consigo defender auto de infração municipal.'],
        nextTopic: 'Mobilidade urbana, patrimônio urbano e interface ambiental'
      },
      {
        id: 'mobilidade-patrimonio-interface-ambiental',
        level: 'intermediário',
        title: 'Mobilidade urbana, patrimônio urbano, acessibilidade, vizinhança e interface com Direito Ambiental',
        whatIs: 'É o conjunto de temas urbanísticos que conectam uso do solo com circulação, acessibilidade, qualidade de vida, paisagem urbana, patrimônio histórico-cultural, impactos de vizinhança e proteção ambiental no espaço urbano.',
        purpose: 'Serve para analisar impacto de empreendimentos, organizar trânsito e transporte, proteger calçadas e acessibilidade, compatibilizar desenvolvimento com patrimônio e evitar que a cidade cresça gerando danos sociais e ambientais.',
        plainExplanation: [
          'A cidade funciona como sistema. Uma obra grande não afeta apenas o lote: pode gerar trânsito, sombra, ruído, demanda por água, esgoto, escolas, saúde, segurança e transporte. Por isso o Direito Urbanístico conversa com mobilidade, meio ambiente, patrimônio, acessibilidade e vizinhança.',
          'O Estudo de Impacto de Vizinhança é instrumento típico dessa interface. Ele avalia efeitos urbanos de empreendimentos e permite exigir medidas mitigadoras ou compensatórias. Já o licenciamento ambiental analisa impacto ambiental. Os dois podem coexistir e não devem ser confundidos.',
          'Para Procurador, isso aparece em ações contra obras públicas, empreendimentos privados, proteção de bens culturais, ocupação de calçadas, acessibilidade e questionamentos sobre exigências municipais. A defesa deve mostrar base legal, estudo técnico e interesse público.'
        ],
        examTechnical: 'Estude Política Nacional de Mobilidade Urbana, Estatuto da Cidade, EIV, acessibilidade, bens públicos de uso comum, calçadas, paisagem urbana, patrimônio histórico-cultural, medidas mitigadoras, compensatórias e relação com licenciamento ambiental. Foque na competência municipal e na necessidade de estudos técnicos.',
        cityExample: 'Novo condomínio aumenta tráfego em avenida já saturada. O Município pode exigir EIV, adequações viárias, acesso seguro, calçadas acessíveis e medidas mitigadoras, desde que previstas na legislação e tecnicamente justificadas.',
        legalBase: ['Lei nº 12.587/2012 — Política Nacional de Mobilidade Urbana', 'Lei nº 10.257/2001 — Estatuto da Cidade', 'CF/88, arts. 30, 182, 216 e 225', 'Lei Brasileira de Inclusão — Lei nº 13.146/2015, quando aplicável', 'Legislação municipal de mobilidade, posturas, patrimônio e acessibilidade'],
        dryLaw: ['Estatuto da Cidade, arts. 36 a 38 — EIV', 'Lei nº 12.587/2012', 'CF/88, arts. 216 e 225', 'Lei nº 13.146/2015, acessibilidade'],
        jurisprudence: ['Exigências urbanísticas baseadas em impacto de vizinhança e mobilidade tendem a ser legítimas quando previstas em lei e apoiadas por estudos técnicos.', 'Proteção de patrimônio cultural e meio ambiente urbano pode justificar limitações ao uso da propriedade, desde que respeitada legalidade e proporcionalidade.'],
        objectiveCharge: ['EIV.', 'Mobilidade urbana.', 'Acessibilidade.', 'Patrimônio cultural.', 'Medidas mitigadoras.', 'Diferença entre impacto urbanístico e ambiental.'],
        discursiveCharge: 'Pode cair parecer sobre empreendimento de grande impacto, exigência de contrapartida, ocupação de calçada, proteção de imóvel histórico ou conflito entre desenvolvimento econômico e qualidade urbana.',
        traps: ['EIV não é taxa disfarçada.', 'Contrapartida precisa de base legal e relação com impacto.', 'Acessibilidade não é detalhe opcional.', 'Patrimônio cultural não depende apenas de beleza estética.', 'Mobilidade urbana não se resume a carros.'],
        differences: ['EIV x EIA.', 'Mitigação x compensação.', 'Mobilidade x trânsito.', 'Patrimônio cultural x propriedade comum.', 'Calçada como espaço público x área privada de livre uso.'],
        commonMistakes: ['Ignorar base técnica.', 'Exigir contrapartida sem nexo com impacto.', 'Confundir licença ambiental com licença urbanística.', 'Esquecer acessibilidade.', 'Não analisar competência municipal.'],
        miniCase: 'Restaurante ocupa toda a calçada com mesas, impedindo passagem de cadeirantes. Ainda que gere atividade econômica, o Município pode exigir liberação da faixa de circulação e aplicar sanção com base em posturas, acessibilidade e uso comum do povo.',
        activeQuestions: ['Qual impacto urbano existe?', 'Há EIV exigível?', 'A medida tem base legal?', 'Existe nexo entre impacto e contrapartida?', 'Há acessibilidade e proteção de patrimônio?'],
        flashcards: [
          { front: 'EIV substitui licenciamento ambiental?', back: 'Não. Avalia impacto de vizinhança; pode coexistir com EIA/licenciamento ambiental.' },
          { front: 'Mobilidade urbana é só trânsito de veículos?', back: 'Não. Envolve circulação de pessoas, transporte, acessibilidade, segurança e sustentabilidade.' },
          { front: 'Contrapartida urbanística exige quê?', back: 'Base legal, nexo com impacto, proporcionalidade e motivação técnica.' }
        ],
        summary: 'A cidade deve ser analisada como sistema. Mobilidade, patrimônio, acessibilidade e ambiente urbano transformam o parecer urbanístico em análise técnica e constitucional.',
        checklist: ['Sei EIV e sua função.', 'Sei diferença entre impacto urbanístico e ambiental.', 'Sei mobilidade urbana básica.', 'Sei acessibilidade urbana.', 'Consigo avaliar contrapartida urbanística.'],
        nextTopic: 'Próxima fase: Direito Ambiental Premium'
      }
    ]
  }
,
  {
    id: 'direito-ambiental',
    subject: 'Direito Ambiental',
    status: '39I concluída',
    priority: 'Muito alta',
    overview: 'Apostila premium de Direito Ambiental para Procurador Municipal, com foco em princípios ambientais, competências federativas, Política Nacional do Meio Ambiente, licenciamento ambiental, responsabilidade civil, administrativa e penal, Código Florestal, unidades de conservação, saneamento, resíduos, recursos hídricos, poder de polícia ambiental e interface com urbanismo.',
    lawBase: ['CF/88, art. 225', 'CF/88, arts. 23, VI e VII; 24, VI e VIII; 30, I, II e VIII', 'Lei nº 6.938/1981 — Política Nacional do Meio Ambiente', 'Lei nº 9.605/1998 — Crimes Ambientais e infrações administrativas', 'Lei nº 12.651/2012 — proteção da vegetação nativa', 'Lei nº 9.985/2000 — SNUC', 'Lei nº 11.445/2007 — saneamento básico', 'Lei nº 12.305/2010 — resíduos sólidos', 'Lei nº 15.190/2025 — licenciamento ambiental, quando aplicável e conforme vigência/atualização'],
    topics: [
      {
        id: 'principios-direito-ambiental',
        level: 'básico',
        title: 'Direito Ambiental: conceito, finalidade, bem ambiental e princípios estruturantes',
        whatIs: 'Direito Ambiental é o ramo do Direito Público que organiza a proteção jurídica do meio ambiente ecologicamente equilibrado. Ele trata do uso sustentável dos recursos naturais, da prevenção de danos, da responsabilização de poluidores e da atuação estatal para proteger ambiente natural, artificial, cultural e do trabalho.',
        purpose: 'Serve para impedir que crescimento econômico, obras públicas, atividades privadas ou omissões administrativas destruam recursos ambientais essenciais à vida, à saúde e à qualidade urbana. Para Procurador Municipal, serve para orientar licenciamento, fiscalização, defesa judicial, TACs, políticas públicas e proteção do Município contra responsabilidade por omissão.',
        plainExplanation: [
          'O meio ambiente não é apenas floresta. Para prova, pense em quatro dimensões: meio ambiente natural, meio ambiente artificial ou urbano, meio ambiente cultural e meio ambiente do trabalho. Um Município lida diariamente com todas elas: poda de árvore, obra em APP, loteamento irregular, resíduos sólidos, ruído, drenagem, esgoto, patrimônio histórico, enchentes e fiscalização de atividades potencialmente poluidoras.',
          'O núcleo constitucional está no art. 225 da Constituição: todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida. Esse artigo impõe dever ao Poder Público e à coletividade. Por isso, o Município não pode tratar meio ambiente como tema opcional: ele deve prevenir, fiscalizar, planejar e agir.',
          'Os princípios ambientais são ferramentas de decisão. Prevenção atua quando o risco é conhecido; precaução atua quando há incerteza científica relevante; poluidor-pagador evita transferir custo ambiental à sociedade; usuário-pagador lida com uso de recursos; desenvolvimento sustentável busca compatibilizar proteção ambiental e atividade econômica; participação e informação fortalecem controle social.'
        ],
        examTechnical: 'Para prova, domine art. 225 da CF, competências ambientais, princípios da prevenção, precaução, poluidor-pagador, desenvolvimento sustentável, função socioambiental da propriedade, vedação ao retrocesso ambiental, participação, informação e responsabilidade intergeracional. A banca costuma trocar prevenção por precaução e tratar licenciamento como mera burocracia, quando ele é instrumento preventivo de gestão ambiental.',
        cityExample: 'Uma empresa quer instalar atividade com emissão de ruídos e geração de resíduos em área próxima a residências. A Procuradoria deve verificar zoneamento, licenciamento, estudo técnico, condicionantes, controle de ruído, manejo de resíduos, participação dos órgãos competentes e medidas para evitar dano ambiental e conflito de vizinhança.',
        legalBase: ['CF/88, art. 225', 'CF/88, arts. 23, VI e VII; 24, VI e VIII; 30, I, II e VIII', 'Lei nº 6.938/1981', 'Lei nº 9.605/1998'],
        dryLaw: ['CF/88, art. 225, caput e §1º', 'CF/88, art. 23, VI e VII', 'Lei nº 6.938/1981, arts. 2º, 3º, 4º, 9º e 14, §1º'],
        jurisprudence: ['A proteção ambiental é compreendida pelos tribunais superiores como dever constitucional de atuação preventiva e reparatória, e a responsabilidade civil ambiental segue lógica objetiva e voltada à recomposição integral do dano.', 'O princípio da vedação ao retrocesso ambiental costuma ser usado para questionar redução injustificada de proteção ambiental já consolidada. Confira jurisprudência atual antes da prova.'],
        objectiveCharge: ['Conceito de meio ambiente e suas espécies.', 'Art. 225 da Constituição.', 'Princípios da prevenção e precaução.', 'Poluidor-pagador.', 'Função socioambiental da propriedade.', 'Competência comum ambiental.'],
        discursiveCharge: 'Pode cair parecer sobre empreendimento poluidor, omissão municipal em área de risco, corte de árvores, loteamento em APP, ruído urbano, resíduos sólidos ou conflito entre desenvolvimento econômico e proteção ambiental.',
        traps: ['Prevenção não é sinônimo perfeito de precaução.', 'Poluidor-pagador não autoriza poluir mediante pagamento.', 'Desenvolvimento sustentável não elimina proteção ambiental.', 'Meio ambiente artificial também é meio ambiente.', 'Município tem competência ambiental, não é mero espectador.'],
        differences: ['Prevenção x precaução.', 'Dano ambiental individual x coletivo.', 'Meio ambiente natural x artificial x cultural x do trabalho.', 'Reparação x compensação.', 'Licença urbanística x licença ambiental.'],
        commonMistakes: ['Decorar princípios sem aplicar ao caso concreto.', 'Ignorar competência municipal.', 'Achar que licença ambiental regulariza qualquer dano.', 'Não diferenciar responsabilidade civil, administrativa e penal.', 'Esquecer que dano ambiental costuma exigir recomposição.'],
        miniCase: 'O Município autoriza evento em praça pública sem plano de resíduos, controle de ruído e recuperação do local. Mesmo sendo evento temporário, há dever de prevenir dano ambiental urbano, exigir medidas de limpeza, horários, fiscalização e responsabilização do organizador.',
        activeQuestions: ['Qual dimensão ambiental está envolvida?', 'O risco é conhecido ou incerto?', 'Há dever municipal de agir?', 'Qual princípio resolve o caso?', 'A medida proposta previne, mitiga ou repara o dano?'],
        flashcards: [
          { front: 'Qual é o núcleo do art. 225 da CF?', back: 'Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida.' },
          { front: 'Prevenção e precaução são iguais?', back: 'Não. Prevenção lida com risco conhecido; precaução com incerteza científica relevante diante de risco grave ou plausível.' },
          { front: 'Poluidor-pagador permite comprar o direito de poluir?', back: 'Não. Ele internaliza custos e orienta responsabilização, mas não autoriza degradação ilícita.' }
        ],
        summary: 'Direito Ambiental protege condições de vida e qualidade urbana. Para Procurador Municipal, o raciocínio central é prevenir dano, identificar competência, exigir estudos, fiscalizar e buscar reparação integral quando houver degradação.',
        checklist: ['Sei art. 225 da CF.', 'Sei principais princípios ambientais.', 'Sei espécies de meio ambiente.', 'Sei competência municipal ambiental.', 'Consigo aplicar princípios em parecer.'],
        nextTopic: 'Competências ambientais e papel do Município'
      },
      {
        id: 'competencias-ambientais-municipio',
        level: 'intermediário',
        title: 'Competências ambientais: União, Estados, Municípios e atuação ambiental municipal',
        whatIs: 'Competência ambiental é a repartição constitucional e legal de atribuições para legislar, fiscalizar, licenciar, proteger e executar políticas ambientais. No Brasil, a proteção ambiental envolve competência comum material e competência legislativa concorrente, além da atuação municipal em interesse local e ordenamento territorial.',
        purpose: 'Serve para saber quando o Município pode fiscalizar, licenciar, regulamentar, autuar, embargar, criar normas locais e defender o meio ambiente urbano. Para Procurador, evita tanto omissão indevida quanto invasão de competência de outro ente.',
        plainExplanation: [
          'A Constituição distribui deveres ambientais. União, Estados, Distrito Federal e Municípios têm competência comum para proteger o meio ambiente e combater poluição. Isso significa que o Município pode e deve agir materialmente quando houver interesse local ou dano ambiental em seu território.',
          'Na legislação, a União edita normas gerais, os Estados suplementam e os Municípios legislam sobre interesse local e suplementam a legislação federal e estadual no que couber. Em ambiente urbano, posturas, uso do solo, ruído, resíduos, arborização, drenagem, ocupação irregular e fiscalização são temas muito conectados à competência municipal.',
          'A Lei Complementar nº 140/2011 é peça-chave porque organiza cooperação entre entes federativos em ações administrativas ambientais. Ela ajuda a definir licenciamento e fiscalização, mas não elimina dever municipal de proteger ambiente local.'
        ],
        examTechnical: 'Domine CF arts. 23, 24 e 30, além da LC nº 140/2011. Para prova, cuidado: competência comum não é hierarquia; cooperação federativa não significa que apenas a União protege ambiente; o Município pode legislar sobre interesse local e suplementar normas gerais. Em questões municipais, a interface com urbanismo e posturas é muito cobrada.',
        cityExample: 'Moradores denunciam despejo irregular de resíduos em terreno urbano. Ainda que exista órgão estadual ambiental, o Município pode fiscalizar posturas, limpeza urbana, uso do solo, saúde pública e acionar o órgão ambiental competente, sem ficar inerte.',
        legalBase: ['CF/88, arts. 23, VI e VII; 24, VI e VIII; 30, I, II e VIII', 'LC nº 140/2011', 'Lei nº 6.938/1981', 'Legislação municipal ambiental, urbanística e de posturas'],
        dryLaw: ['CF/88, arts. 23, 24 e 30', 'LC nº 140/2011', 'Lei nº 6.938/1981, SISNAMA'],
        jurisprudence: ['O STF reconhece a relevância da competência municipal para assuntos de interesse local e ordenamento urbano, inclusive quando há reflexos ambientais. Conferir sempre o tema específico e a legislação local.', 'A jurisprudência tende a exigir atuação cooperativa, evitando omissão estatal diante de dano ambiental.'],
        objectiveCharge: ['Competência comum ambiental.', 'Competência legislativa concorrente.', 'Interesse local.', 'LC 140/2011.', 'Município e poder de polícia ambiental.', 'SISNAMA.'],
        discursiveCharge: 'Pode cair parecer sobre se o Município pode autuar, licenciar atividade de impacto local, criar norma de ruído, exigir arborização, disciplinar resíduos ou fiscalizar loteamento irregular com dano ambiental.',
        traps: ['Competência comum não significa que todos fazem tudo sem regra.', 'Município não é incompetente só porque existe órgão estadual.', 'Interesse local não pode contrariar norma geral federal.', 'Fiscalização municipal não elimina comunicação a outros órgãos quando necessário.'],
        differences: ['Competência material x legislativa.', 'Norma geral x suplementação municipal.', 'Interesse local x interesse regional/nacional.', 'Licenciamento x fiscalização.', 'Poder de polícia ambiental x urbanístico.'],
        commonMistakes: ['Achar que só o Estado licencia e fiscaliza.', 'Desconsiderar LC 140/2011.', 'Confundir competência para legislar com competência para executar.', 'Não identificar predominância do interesse.', 'Ignorar normas municipais.'],
        miniCase: 'Uma oficina mecânica em zona residencial gera óleo descartado irregularmente e ruído. O Município pode agir por posturas, uso do solo, saúde pública, limpeza urbana e ambiente local, sem prejuízo de comunicação ao órgão ambiental estadual.',
        activeQuestions: ['Qual ente tem competência material?', 'Existe interesse local?', 'Há norma geral federal?', 'A norma municipal suplementa ou contraria?', 'O caso exige cooperação com Estado/União?'],
        flashcards: [
          { front: 'Município tem competência ambiental?', back: 'Sim, especialmente por competência comum, interesse local, suplementação e ordenamento territorial.' },
          { front: 'Qual lei organiza cooperação administrativa ambiental?', back: 'Lei Complementar nº 140/2011.' },
          { front: 'Competência comum cria hierarquia?', back: 'Não. Exige cooperação e atuação coordenada.' }
        ],
        summary: 'O Município tem papel ambiental relevante. Em prova de Procurador, a resposta deve combinar art. 225, competências constitucionais, LC 140, interesse local e proteção urbana.',
        checklist: ['Sei CF arts. 23, 24 e 30.', 'Sei LC 140/2011.', 'Sei explicar interesse local.', 'Sei quando Município pode fiscalizar.', 'Consigo defender atuação ambiental municipal.'],
        nextTopic: 'Política Nacional do Meio Ambiente e SISNAMA'
      },
      {
        id: 'pnma-sisnama-instrumentos',
        level: 'intermediário',
        title: 'Política Nacional do Meio Ambiente, SISNAMA e instrumentos de gestão ambiental',
        whatIs: 'A Política Nacional do Meio Ambiente é o marco legal que estrutura objetivos, princípios, conceitos e instrumentos da proteção ambiental no Brasil. O SISNAMA é o sistema que articula órgãos e entidades ambientais da União, Estados, Distrito Federal e Municípios.',
        purpose: 'Serve para transformar proteção ambiental em gestão pública: padrões de qualidade, zoneamento ambiental, avaliação de impactos, licenciamento, incentivos, fiscalização, cadastro, penalidades e responsabilização.',
        plainExplanation: [
          'A Lei nº 6.938/1981 é uma das leis mais importantes de Direito Ambiental. Ela define meio ambiente, degradação, poluição, poluidor e recursos ambientais. Esses conceitos aparecem diretamente em prova e ajudam a enquadrar casos práticos.',
          'O SISNAMA mostra que meio ambiente não é assunto de um órgão isolado. A gestão ambiental é sistêmica e cooperativa. Municípios podem integrar esse sistema e executar política ambiental local, especialmente quando possuem estrutura administrativa adequada.',
          'Os instrumentos da PNMA são ferramentas concretas: licenciamento, avaliação de impacto, zoneamento, padrões, penalidades, cadastro técnico e espaços especialmente protegidos. Para Procurador, esses instrumentos aparecem em pareceres, ações civis públicas, autos de infração e defesa de políticas municipais.'
        ],
        examTechnical: 'Memorize conceitos do art. 3º da Lei nº 6.938/1981 e instrumentos do art. 9º. A responsabilidade civil ambiental objetiva está no art. 14, §1º. A banca costuma cobrar diferença entre poluição e degradação, conceito de poluidor direto/indireto e instrumentos como licenciamento e avaliação de impacto.',
        cityExample: 'O Município quer criar programa de controle de ruído urbano. Pode usar instrumentos ambientais e urbanísticos: padrões, fiscalização, licenças, zoneamento, educação ambiental, sanções e cooperação com órgãos ambientais.',
        legalBase: ['Lei nº 6.938/1981', 'CF/88, art. 225', 'LC nº 140/2011', 'Resoluções CONAMA pertinentes, conforme atualidade e aplicabilidade'],
        dryLaw: ['Lei nº 6.938/1981, arts. 2º, 3º, 4º, 6º, 9º e 14, §1º'],
        jurisprudence: ['A responsabilidade civil ambiental objetiva e a busca de reparação integral são pontos consolidados na jurisprudência superior.', 'A identificação de poluidor direto e indireto é relevante para responsabilização de proprietários, empreendedores e entes omissos, conforme o caso.'],
        objectiveCharge: ['Conceitos da PNMA.', 'Instrumentos do art. 9º.', 'SISNAMA.', 'Responsabilidade objetiva.', 'Poluidor direto e indireto.', 'Licenciamento como instrumento.'],
        discursiveCharge: 'Pode cair parecer sobre atividade poluidora sem licença, omissão fiscalizatória, responsabilidade de proprietário, necessidade de EIA/RIMA ou atuação do Município no SISNAMA.',
        traps: ['Poluidor pode ser direto ou indireto.', 'Responsabilidade civil ambiental independe de culpa.', 'Licença não exonera totalmente responsabilidade por dano.', 'Instrumentos da PNMA não se limitam a licenciamento.', 'SISNAMA não é apenas órgão federal.'],
        differences: ['Poluição x degradação.', 'Poluidor direto x indireto.', 'Licenciamento x fiscalização.', 'Responsabilidade civil x administrativa x penal.', 'Reparação x indenização.'],
        commonMistakes: ['Não estudar art. 3º da PNMA.', 'Esquecer art. 14, §1º.', 'Tratar licença como salvo-conduto.', 'Ignorar instrumentos do art. 9º.', 'Confundir órgão consultivo com executor.'],
        miniCase: 'Empresa com licença ambiental causa vazamento em córrego. A licença não impede responsabilização; será necessário cessar dano, reparar integralmente e apurar sanções administrativas e penais conforme o caso.',
        activeQuestions: ['Há poluição ou degradação?', 'Quem é poluidor direto/indireto?', 'Qual instrumento ambiental deveria ter sido usado?', 'Há licença?', 'Licença foi cumprida?', 'Qual medida repara o dano?'],
        flashcards: [
          { front: 'Onde está a responsabilidade civil ambiental objetiva?', back: 'Lei nº 6.938/1981, art. 14, §1º.' },
          { front: 'Licença ambiental exclui responsabilidade?', back: 'Não necessariamente. Se houver dano ou descumprimento, pode haver responsabilização.' },
          { front: 'SISNAMA envolve Municípios?', back: 'Sim, órgãos municipais podem integrar a estrutura sistêmica ambiental.' }
        ],
        summary: 'A PNMA fornece vocabulário e ferramentas do Direito Ambiental. Para prova, art. 3º, art. 9º e art. 14, §1º são leitura obrigatória.',
        checklist: ['Sei conceitos da Lei 6.938.', 'Sei instrumentos da PNMA.', 'Sei SISNAMA.', 'Sei responsabilidade objetiva.', 'Consigo usar PNMA em parecer.'],
        nextTopic: 'Licenciamento ambiental e estudos de impacto'
      },
      {
        id: 'licenciamento-eia-rima',
        level: 'avançado',
        title: 'Licenciamento ambiental, estudos ambientais, EIA/RIMA e condicionantes',
        whatIs: 'Licenciamento ambiental é o procedimento pelo qual o órgão competente avalia localização, instalação, ampliação e operação de atividades ou empreendimentos capazes de causar degradação ambiental, podendo impor condicionantes, negar licença ou exigir estudos técnicos.',
        purpose: 'Serve para prevenir dano ambiental antes que ele aconteça. Para Procurador Municipal, é essencial em obras públicas, empreendimentos privados, loteamentos, atividades industriais, resíduos, supressão de vegetação, drenagem e conflitos entre crescimento urbano e proteção ambiental.',
        plainExplanation: [
          'Licenciamento não é carimbo. Ele é processo técnico-jurídico de avaliação de risco ambiental. O empreendedor deve demonstrar viabilidade, impactos, medidas mitigadoras e cumprimento de condicionantes. O poder público deve motivar decisões e fiscalizar depois da licença.',
          'EIA/RIMA é estudo mais robusto para atividades potencialmente causadoras de significativa degradação ambiental. EIA é técnico; RIMA é relatório em linguagem acessível. A Constituição exige estudo prévio de impacto ambiental para obra ou atividade potencialmente causadora de significativa degradação, com publicidade.',
          'O tema está em transição normativa por causa da Lei nº 15.190/2025, que dispõe sobre licenciamento ambiental. Como se trata de legislação recente, o candidato deve conferir a vigência, regulamentação e eventuais atualizações antes da prova. Em prova, a cobrança pode combinar regra constitucional, PNMA, LC 140 e lei nova.'
        ],
        examTechnical: 'Domine CF art. 225, §1º, IV; licenças, condicionantes, competência para licenciar, estudo ambiental, publicidade, participação, fiscalização e consequência do descumprimento. Diferencie licença ambiental de licença urbanística. A banca pode cobrar que EIA/RIMA não é exigido para qualquer atividade, mas para significativa degradação.',
        cityExample: 'Loteamento pretende ocupar área próxima a curso d’água. Além de aprovação urbanística, é preciso verificar APP, drenagem, supressão de vegetação, licenciamento ambiental, impacto de vizinhança e condicionantes para evitar enchentes e dano ao córrego.',
        legalBase: ['CF/88, art. 225, §1º, IV', 'Lei nº 6.938/1981', 'LC nº 140/2011', 'Lei nº 15.190/2025, com conferência de vigência e regulamentação', 'Legislação estadual e municipal aplicável'],
        dryLaw: ['CF/88, art. 225, §1º, IV', 'Lei nº 6.938/1981, art. 9º', 'LC nº 140/2011', 'Lei nº 15.190/2025'],
        jurisprudence: ['A exigência de estudo ambiental e publicidade decorre da lógica constitucional de prevenção e controle social.', 'Condicionantes ambientais devem guardar relação com impactos identificados e podem ser controladas quanto à legalidade e proporcionalidade.'],
        objectiveCharge: ['Licenciamento ambiental.', 'EIA/RIMA.', 'Condicionantes.', 'Competência licenciatória.', 'Publicidade.', 'Diferença entre licença ambiental e urbanística.'],
        discursiveCharge: 'Pode cair parecer sobre obra municipal sem estudo ambiental, loteamento próximo a APP, questionamento de condicionante, ação civil pública por ausência de licenciamento ou conflito de competência entre entes.',
        traps: ['EIA/RIMA não é exigido para toda atividade.', 'Licença ambiental não é licença urbanística.', 'Condicionante não pode ser arbitrária.', 'Publicidade é elemento relevante do controle ambiental.', 'Lei nova deve ser conferida na lei seca atualizada.'],
        differences: ['Licença prévia x instalação x operação, conforme regime aplicável.', 'EIA x RIMA.', 'Licenciamento x fiscalização.', 'Licença ambiental x alvará de construção.', 'Mitigação x compensação.'],
        commonMistakes: ['Usar regra antiga sem conferir lei nova.', 'Achar que alvará municipal substitui licenciamento ambiental.', 'Não analisar competência.', 'Ignorar condicionantes.', 'Esquecer publicidade do EIA/RIMA.'],
        miniCase: 'Prefeitura pretende canalizar córrego urbano para obra viária. O parecer deve exigir avaliação ambiental, análise de drenagem, risco de enchentes, alternativas técnicas, eventual licenciamento, participação dos órgãos competentes e motivação.',
        activeQuestions: ['A atividade causa significativa degradação?', 'Qual órgão licencia?', 'Há necessidade de EIA/RIMA?', 'As condicionantes têm nexo com impacto?', 'Há licença urbanística também?', 'A decisão foi publicizada?'],
        flashcards: [
          { front: 'EIA/RIMA é sempre obrigatório?', back: 'Não. É exigido para obra/atividade potencialmente causadora de significativa degradação ambiental.' },
          { front: 'Alvará substitui licença ambiental?', back: 'Não. São controles diferentes e podem coexistir.' },
          { front: 'Condicionante ambiental exige quê?', back: 'Nexo com impacto, motivação, proporcionalidade e base técnica/legal.' }
        ],
        summary: 'Licenciamento é prevenção qualificada. Em prova, conecte Constituição, PNMA, LC 140, lei atualizada, estudo técnico, publicidade e condicionantes.',
        checklist: ['Sei conceito de licenciamento.', 'Sei EIA/RIMA.', 'Sei diferença entre licença ambiental e urbanística.', 'Sei condicionantes.', 'Vou conferir Lei 15.190/2025 na lei seca.'],
        nextTopic: 'Responsabilidade ambiental civil, administrativa e penal'
      },
      {
        id: 'responsabilidade-ambiental',
        level: 'avançado',
        title: 'Responsabilidade ambiental: civil objetiva, administrativa sancionadora e penal',
        whatIs: 'Responsabilidade ambiental é o conjunto de consequências jurídicas aplicáveis a quem causa, contribui ou se omite diante de dano ambiental. Pode ser civil, administrativa e penal, com regimes próprios e independentes entre si.',
        purpose: 'Serve para fazer cessar o dano, reparar integralmente, punir infrações, prevenir novas ocorrências e proteger interesses difusos. Para Procurador Municipal, é tema de ação civil pública, autos de infração, defesa do Município e responsabilização de particulares.',
        plainExplanation: [
          'A responsabilidade civil ambiental é objetiva: não depende de culpa. Em geral, exige dano e nexo causal. O foco é recompor o meio ambiente, e a indenização em dinheiro é subsidiária ou complementar quando a reparação integral não for possível.',
          'A responsabilidade administrativa decorre de infração ambiental apurada em processo administrativo, com sanções como multa, embargo, apreensão e suspensão de atividade, conforme lei. Aqui, devido processo, motivação e prova são essenciais para sustentar o auto de infração.',
          'A responsabilidade penal decorre da Lei nº 9.605/1998 e pode atingir pessoas físicas e jurídicas conforme requisitos legais e constitucionais. Para prova, cuidado com independência das instâncias e com a diferença entre reparar o dano e responder por infração ou crime.'
        ],
        examTechnical: 'Estude responsabilidade objetiva do art. 14, §1º, da Lei nº 6.938/1981, sanções da Lei nº 9.605/1998, reparação integral, imprescritibilidade da pretensão de reparação civil ambiental em determinados entendimentos, obrigações propter rem ambientais e independência das instâncias. Confira jurisprudência atual do STF/STJ antes da prova.',
        cityExample: 'Empresa deposita entulho em área pública e atinge córrego. O Município pode autuar administrativamente se competente, exigir remoção e recuperação, comunicar órgãos ambientais, propor ação civil ou firmar TAC, além de apurar crime ambiental se houver indício.',
        legalBase: ['CF/88, art. 225, §3º', 'Lei nº 6.938/1981, art. 14, §1º', 'Lei nº 9.605/1998', 'Decreto nº 6.514/2008, conforme aplicabilidade federal', 'Lei nº 7.347/1985 — Ação Civil Pública'],
        dryLaw: ['CF/88, art. 225, §3º', 'Lei nº 6.938/1981, art. 14, §1º', 'Lei nº 9.605/1998', 'Lei nº 7.347/1985'],
        jurisprudence: ['Responsabilidade civil ambiental objetiva e obrigação de reparar integralmente são pontos centrais na jurisprudência ambiental.', 'O STJ possui orientação de que obrigações ambientais podem ter natureza propter rem, ligadas ao imóvel, conforme o caso. Conferir súmulas e teses atualizadas antes da prova.'],
        objectiveCharge: ['Responsabilidade civil objetiva.', 'Responsabilidade administrativa.', 'Responsabilidade penal.', 'Independência das instâncias.', 'Reparação integral.', 'Propter rem ambiental.'],
        discursiveCharge: 'Pode cair parecer sobre ação civil pública, TAC, defesa de auto de infração, responsabilização de proprietário atual por dano antigo, omissão municipal em fiscalização ou dano em área pública.',
        traps: ['Responsabilidade civil ambiental não depende de culpa.', 'Pagar multa não substitui reparar dano.', 'Licença não blinda dano.', 'Instâncias são independentes, mas fatos podem dialogar.', 'Responsabilidade objetiva civil não transforma todo agente público em responsável automático.'],
        differences: ['Civil x administrativa x penal.', 'Multa x reparação.', 'Dano material x dano moral coletivo ambiental.', 'Obrigação de fazer x indenização.', 'Poluidor direto x indireto.'],
        commonMistakes: ['Confundir multa com indenização.', 'Não pedir recuperação da área.', 'Ignorar nexo causal.', 'Não garantir processo administrativo.', 'Deixar prescrição/decadência sem análise.'],
        miniCase: 'Proprietário atual compra imóvel rural com área degradada. Em tese, pode haver obrigação ambiental de recuperar por natureza propter rem, mas o caso exige análise da matrícula, da área, do dano e da legislação aplicável.',
        activeQuestions: ['Qual dano ocorreu?', 'Quem causou ou se beneficiou?', 'Há nexo causal?', 'Qual instância está sendo acionada?', 'O pedido busca reparar integralmente?', 'Há processo administrativo válido?'],
        flashcards: [
          { front: 'Responsabilidade civil ambiental exige culpa?', back: 'Não. É objetiva, em regra fundada no risco e na reparação integral.' },
          { front: 'Multa ambiental substitui recuperação?', back: 'Não. São consequências diferentes.' },
          { front: 'As instâncias ambiental civil, administrativa e penal são idênticas?', back: 'Não. São independentes, embora possam dialogar.' }
        ],
        summary: 'Responsabilidade ambiental é tripla e forte. Para Procurador, a resposta deve cessar o dano, reparar integralmente, preservar prova, respeitar processo e escolher instrumento adequado.',
        checklist: ['Sei responsabilidade civil objetiva.', 'Sei diferença entre sanção e reparação.', 'Sei Lei 9.605 básica.', 'Sei independência das instâncias.', 'Consigo propor providências em parecer.'],
        nextTopic: 'Código Florestal, APP, Reserva Legal e áreas protegidas'
      },
      {
        id: 'codigo-florestal-app-areas-protegidas',
        level: 'avançado',
        title: 'Código Florestal, APP, Reserva Legal, áreas protegidas e unidades de conservação',
        whatIs: 'É o conjunto de normas sobre proteção da vegetação nativa, áreas de preservação permanente, reserva legal, uso restrito, supressão de vegetação, regularização ambiental e espaços especialmente protegidos, incluindo unidades de conservação.',
        purpose: 'Serve para proteger água, solo, biodiversidade, encostas, margens de rios, nascentes, matas e serviços ecossistêmicos. No Município, aparece em loteamentos, obras públicas, ocupações irregulares, supressão de árvores, enchentes, regularização fundiária e ações ambientais.',
        plainExplanation: [
          'APP é área protegida por sua função ecológica: proteger recursos hídricos, estabilidade geológica, biodiversidade, fluxo gênico, solo e bem-estar das populações. Não é simples “área vazia”: tem função ambiental específica. Intervenção em APP exige hipóteses legais e cautela técnica.',
          'Reserva Legal é instituto típico de imóvel rural, voltado à conservação de vegetação nativa e uso sustentável. Em prova municipal, a banca pode cruzar Código Florestal com expansão urbana, regularização fundiária, loteamento e proteção de cursos d’água.',
          'Unidades de conservação são espaços territoriais especialmente protegidos pelo SNUC. Podem ser de proteção integral ou uso sustentável. O Município pode criar e gerir unidades municipais, desde que observe requisitos técnicos e legais.'
        ],
        examTechnical: 'Estude Lei nº 12.651/2012, conceitos de APP e Reserva Legal, intervenção excepcional, áreas consolidadas, proteção de nascentes, margens de cursos d’água e encostas. Estude Lei nº 9.985/2000 para SNUC, grupos e categorias. A banca pode cobrar diferença entre APP e UC e entre proteção integral e uso sustentável.',
        cityExample: 'Morador constrói muro e edícula em margem de córrego urbano. O Município deve avaliar se há APP, risco, legislação local, possibilidade de regularização, necessidade de demolição, recuperação da área e articulação com defesa civil/órgão ambiental.',
        legalBase: ['Lei nº 12.651/2012', 'Lei nº 9.985/2000', 'CF/88, art. 225, §1º, III', 'Lei nº 6.938/1981', 'Legislação municipal e estadual aplicável'],
        dryLaw: ['Lei nº 12.651/2012, arts. 3º, 4º, 7º e dispositivos sobre APP e Reserva Legal', 'Lei nº 9.985/2000', 'CF/88, art. 225, §1º, III'],
        jurisprudence: ['A proteção de APP tem forte tutela judicial, especialmente quando relacionada a cursos d’água, nascentes, encostas e risco ambiental.', 'A regularização de ocupações em áreas ambientalmente sensíveis exige análise legal e técnica, não mera decisão política.'],
        objectiveCharge: ['APP.', 'Reserva Legal.', 'Unidades de conservação.', 'Proteção integral x uso sustentável.', 'Intervenção em APP.', 'Supressão de vegetação.'],
        discursiveCharge: 'Pode cair parecer sobre ocupação em margem de córrego, loteamento em área protegida, corte de árvores, criação de parque municipal, ação civil pública para recuperação ambiental ou regularização fundiária com restrição ambiental.',
        traps: ['APP não depende sempre de averbação para existir.', 'Reserva Legal não é igual a APP.', 'UC não é qualquer área verde informal.', 'Regularização fundiária não apaga proteção ambiental.', 'Intervenção em APP exige hipótese legal e motivação técnica.'],
        differences: ['APP x Reserva Legal.', 'UC x área verde urbana.', 'Proteção integral x uso sustentável.', 'Supressão autorizada x dano ambiental.', 'Regularização urbanística x regularização ambiental.'],
        commonMistakes: ['Achar que área urbana não tem APP.', 'Confundir área verde de loteamento com unidade de conservação.', 'Desconsiderar risco de enchente.', 'Não consultar órgão técnico.', 'Prometer regularização sem base legal.'],
        miniCase: 'O Município pretende abrir via pública em área com vegetação e nascente. O parecer deve exigir levantamento técnico, análise de alternativas locacionais, eventual licenciamento, proteção da nascente e compensações/medidas cabíveis.',
        activeQuestions: ['Existe APP?', 'Existe Reserva Legal?', 'A área é urbana ou rural?', 'Há unidade de conservação?', 'A intervenção se enquadra em hipótese legal?', 'Qual medida de recuperação é necessária?'],
        flashcards: [
          { front: 'APP e Reserva Legal são iguais?', back: 'Não. APP protege áreas sensíveis por função ecológica; Reserva Legal é percentual de vegetação nativa em imóvel rural.' },
          { front: 'Área urbana pode ter APP?', back: 'Sim. A proteção de APP pode existir também em contexto urbano.' },
          { front: 'O que é SNUC?', back: 'Sistema Nacional de Unidades de Conservação, regulado pela Lei nº 9.985/2000.' }
        ],
        summary: 'Código Florestal e SNUC protegem espaços ambientais sensíveis. Para Procurador, o ponto é compatibilizar urbanismo, regularização, risco, drenagem e proteção legal.',
        checklist: ['Sei APP.', 'Sei Reserva Legal.', 'Sei SNUC básico.', 'Sei intervenção em APP.', 'Consigo analisar ocupação em margem de córrego.'],
        nextTopic: 'Saneamento, resíduos sólidos e recursos hídricos'
      },
      {
        id: 'saneamento-residuos-recursos-hidricos',
        level: 'intermediário',
        title: 'Saneamento básico, resíduos sólidos, recursos hídricos e saúde ambiental',
        whatIs: 'É o conjunto de normas sobre abastecimento de água, esgotamento sanitário, drenagem, manejo de resíduos sólidos, limpeza urbana, recursos hídricos e controle de impactos ambientais ligados à saúde pública e à infraestrutura urbana.',
        purpose: 'Serve para organizar serviços essenciais e prevenir poluição, enchentes, doenças, descarte irregular, contaminação de solo e água. Para Procurador Municipal, aparece em contratos de concessão, políticas públicas, ações civis públicas, fiscalização e gestão de resíduos.',
        plainExplanation: [
          'Saneamento básico envolve quatro eixos: água, esgoto, resíduos sólidos e drenagem/manejo de águas pluviais. Em Município, esses temas são cotidianos e judicializáveis. Falhas podem gerar dano ambiental, dano à saúde, responsabilidade do poder público e necessidade de planejamento.',
          'Resíduos sólidos exigem gestão integrada, responsabilidade compartilhada, logística reversa e disposição final ambientalmente adequada. Lixão, descarte irregular de entulho e ausência de política pública podem gerar ações civis públicas e responsabilização.',
          'Recursos hídricos envolvem uso racional, proteção de corpos d’água, outorga quando aplicável, bacias hidrográficas e prevenção de poluição. Em área urbana, drenagem deficiente e ocupação de várzeas aumentam enchentes e danos ambientais.'
        ],
        examTechnical: 'Estude Lei nº 11.445/2007, Lei nº 12.305/2010, Lei nº 9.433/1997, competências municipais, contratos, planos, regulação, responsabilidade compartilhada, logística reversa e articulação com licenciamento/urbanismo. A banca pode cobrar saneamento como direito ligado à saúde, ambiente e dignidade.',
        cityExample: 'Bairro sofre com descarte irregular de entulho em área pública e alagamentos. O Município deve fiscalizar, remover, identificar responsáveis, organizar ecopontos, planejar drenagem, aplicar sanções e atuar preventivamente com educação ambiental e infraestrutura.',
        legalBase: ['Lei nº 11.445/2007', 'Lei nº 12.305/2010', 'Lei nº 9.433/1997', 'CF/88, arts. 23, IX; 30; 196; 225', 'Legislação municipal de limpeza urbana, resíduos e saneamento'],
        dryLaw: ['Lei nº 11.445/2007', 'Lei nº 12.305/2010', 'Lei nº 9.433/1997', 'CF/88, arts. 196 e 225'],
        jurisprudence: ['O Judiciário pode determinar medidas estruturais em saneamento e resíduos quando houver omissão grave, mas a implementação deve considerar planejamento, orçamento e técnica.', 'A gestão inadequada de resíduos pode gerar responsabilidade ambiental e obrigação de fazer.'],
        objectiveCharge: ['Quatro eixos do saneamento.', 'Política Nacional de Resíduos Sólidos.', 'Responsabilidade compartilhada.', 'Logística reversa.', 'Recursos hídricos.', 'Planos municipais.'],
        discursiveCharge: 'Pode cair parecer sobre lixão, contrato de coleta, enchentes, descarte irregular, cobrança por serviço de resíduos, ação civil pública por esgoto sem tratamento ou plano municipal de saneamento.',
        traps: ['Saneamento não é só esgoto.', 'Resíduo sólido não é apenas lixo doméstico.', 'Logística reversa não depende só do Município.', 'Drenagem também é saneamento.', 'Omissão estrutural exige plano, não resposta improvisada.'],
        differences: ['Resíduo x rejeito.', 'Coleta x destinação final.', 'Drenagem x esgotamento sanitário.', 'Serviço público x poder de polícia.', 'Responsabilidade do gerador x responsabilidade do Município.'],
        commonMistakes: ['Esquecer drenagem.', 'Não diferenciar resíduo e rejeito.', 'Tratar lixão como problema meramente administrativo.', 'Ignorar planos e regulação.', 'Não conectar saúde e meio ambiente.'],
        miniCase: 'Comerciantes descartam óleo e resíduos em bueiros. O Município pode fiscalizar, multar conforme lei local, exigir destinação adequada, promover orientação e articular limpeza/drenagem para evitar enchentes e contaminação.',
        activeQuestions: ['Qual eixo do saneamento está envolvido?', 'Existe plano municipal?', 'Quem é o gerador do resíduo?', 'Há responsabilidade compartilhada?', 'A medida é estrutural ou emergencial?', 'Qual dano ambiental/à saúde existe?'],
        flashcards: [
          { front: 'Quais são os quatro eixos do saneamento?', back: 'Água, esgotamento sanitário, limpeza/resíduos sólidos e drenagem/manejo de águas pluviais.' },
          { front: 'Resíduo e rejeito são iguais?', back: 'Não. Rejeito é o que resta após possibilidades de tratamento e recuperação.' },
          { front: 'Drenagem urbana é saneamento?', back: 'Sim, integra saneamento básico.' }
        ],
        summary: 'Saneamento e resíduos são Direito Ambiental aplicado ao cotidiano municipal. A resposta boa combina plano, fiscalização, contrato, saúde, ambiente e orçamento.',
        checklist: ['Sei quatro eixos do saneamento.', 'Sei PNRS básica.', 'Sei responsabilidade compartilhada.', 'Sei recursos hídricos básicos.', 'Consigo analisar problema de entulho/enchente/esgoto.'],
        nextTopic: 'Poder de polícia ambiental municipal'
      },
      {
        id: 'poder-policia-ambiental-municipal',
        level: 'discursiva',
        title: 'Poder de polícia ambiental municipal: fiscalização, autos de infração, embargo, interdição, multa e TAC',
        whatIs: 'Poder de polícia ambiental municipal é a atividade administrativa de prevenir, fiscalizar, limitar e sancionar condutas que causem ou possam causar dano ambiental de interesse local ou urbano, nos limites da competência municipal e da cooperação federativa.',
        purpose: 'Serve para transformar a proteção ambiental em atuação concreta: fiscalizar atividades, lavrar autos, impor medidas cautelares, aplicar sanções, exigir recuperação, celebrar TACs, comunicar órgãos competentes e defender atos municipais em juízo.',
        plainExplanation: [
          'A fiscalização ambiental não pode ser apenas simbólica. Um auto de infração precisa descrever fato, indicar norma violada, identificar responsável, conter prova mínima, respeitar competência e abrir defesa. Se o Município autua mal, perde no Judiciário. Se não autua quando deve, pode responder por omissão.',
          'Embargo e interdição podem ser necessários para cessar dano ou risco. Multa pune infração. Recuperação da área repara dano. TAC pode organizar obrigação de fazer, prazos, medidas técnicas e multa por descumprimento. Cada instrumento tem finalidade diferente.',
          'Para Procurador, o tema é altamente prático: defender auto de infração, responder mandado de segurança, elaborar parecer para embargo, orientar fiscalização, estruturar TAC ou ajuizar ação civil pública.'
        ],
        examTechnical: 'Estude CTN art. 78 como conceito geral de poder de polícia, CF art. 225, Lei 9.605, Lei 6.938, LC 140, processo administrativo sancionador, devido processo, proporcionalidade, autoexecutoriedade, medidas cautelares e defesa judicial do ato administrativo ambiental.',
        cityExample: 'Fiscal encontra depósito clandestino de entulho em área pública com risco de assoreamento. O Município pode interditar a área, autuar responsáveis, exigir remoção e recuperação, acionar guarda/fiscalização, comunicar órgão ambiental e buscar ressarcimento dos custos.',
        legalBase: ['CF/88, art. 225', 'CTN, art. 78', 'Lei nº 9.605/1998', 'Lei nº 6.938/1981', 'LC nº 140/2011', 'Legislação municipal ambiental e de posturas'],
        dryLaw: ['CTN, art. 78', 'Lei nº 9.605/1998', 'Lei nº 6.938/1981, art. 14, §1º', 'LC nº 140/2011'],
        jurisprudence: ['Atos de polícia ambiental são controláveis quanto à competência, motivação, prova, devido processo e proporcionalidade.', 'Medidas urgentes podem justificar atuação imediata, mas não eliminam documentação, motivação e controle posterior.'],
        objectiveCharge: ['Poder de polícia.', 'Autoexecutoriedade.', 'Auto de infração.', 'Sanções ambientais.', 'TAC.', 'Processo administrativo ambiental.'],
        discursiveCharge: 'Pode cair parecer sobre validade de auto ambiental, embargo de atividade, defesa em mandado de segurança, TAC para recuperação de área degradada ou ação civil pública por dano ambiental local.',
        traps: ['Autoexecutoriedade não é arbitrariedade.', 'Multa não repara o dano por si só.', 'TAC não pode legalizar dano impossível de regularizar.', 'Fiscalização precisa de prova.', 'O Município precisa respeitar sua competência.'],
        differences: ['Embargo x interdição.', 'Multa x recuperação ambiental.', 'TAC x licença.', 'Medida cautelar x sanção final.', 'Fiscalização ambiental x urbanística.'],
        commonMistakes: ['Auto genérico.', 'Falta de foto ou relatório.', 'Norma violada incorreta.', 'Ausência de defesa.', 'Não exigir recuperação da área.'],
        miniCase: 'Uma marmoraria lança pó e resíduos em via pública e sistema de drenagem. O Município pode fiscalizar ruído, resíduos, posturas, licença de funcionamento e dano ambiental local, aplicando medidas proporcionais e exigindo adequação.',
        activeQuestions: ['Qual infração ocorreu?', 'Há competência municipal?', 'Qual prova existe?', 'Qual medida cessa o dano?', 'Foi garantida defesa?', 'Há necessidade de TAC ou ação judicial?'],
        flashcards: [
          { front: 'Multa ambiental repara dano?', back: 'Não. Multa sanciona; reparação exige recuperar/indenizar.' },
          { front: 'Auto de infração precisa de quê?', back: 'Competência, descrição do fato, norma violada, prova, motivação e defesa.' },
          { front: 'TAC serve para quê?', back: 'Formalizar obrigações de fazer/não fazer, prazos e medidas para adequação ou recuperação.' }
        ],
        summary: 'Poder de polícia ambiental municipal exige técnica e prova. O Procurador deve proteger o ambiente e também blindar o ato contra nulidades.',
        checklist: ['Sei poder de polícia ambiental.', 'Sei requisitos do auto.', 'Sei embargo/interdição/multa.', 'Sei TAC.', 'Consigo defender fiscalização municipal.'],
        nextTopic: 'Ações ambientais, ACP, improbidade ambiental e defesa do Município'
      },
      {
        id: 'acoes-ambientais-defesa-municipio',
        level: 'discursiva',
        title: 'Ações ambientais, ação civil pública, TAC, improbidade ambiental e defesa do Município',
        whatIs: 'É o estudo dos instrumentos processuais e administrativos usados para proteger o meio ambiente, reparar danos, firmar compromissos, responsabilizar poluidores e defender o Município em litígios ambientais.',
        purpose: 'Serve para o Procurador atuar em ações civis públicas, mandados de segurança contra fiscalização, execuções de TAC, defesas por omissão, acordos ambientais, demandas de saneamento, resíduos, áreas de risco e obras públicas.',
        plainExplanation: [
          'Ação civil pública é instrumento central para tutela coletiva ambiental. Pode buscar obrigação de fazer, não fazer, indenização, recuperação de área degradada, bloqueio de atividade, implantação de política pública e medidas estruturais. O Município pode ser autor, réu ou interessado.',
          'TAC é ferramenta de solução consensual. Bem usado, evita processo longo e cria cronograma de recuperação. Mal usado, pode virar autorização informal para continuar irregularidade. Por isso precisa de obrigações claras, prazos, multas e fiscalização.',
          'Quando o Município é réu por omissão ambiental, a defesa não deve negar o problema sem base. Deve demonstrar providências, planejamento, competência, limitações reais, cronograma, orçamento e medidas já adotadas. A LINDB ajuda a exigir análise de consequências práticas em decisões administrativas e judiciais.'
        ],
        examTechnical: 'Estude Lei nº 7.347/1985, tutela coletiva, legitimidade, obrigações ambientais, TAC, provas técnicas, perícia, responsabilidade objetiva, controle de políticas públicas, improbidade após Lei nº 14.230/2021 quando houver dolo e violação qualificada, além de defesa do Município em demandas estruturais.',
        cityExample: 'Ministério Público ajuíza ACP exigindo fechamento de área de descarte irregular e implantação de ecoponto. A Procuradoria deve avaliar prova, competência, custos, plano de ação, medidas já adotadas e possibilidade de acordo com cronograma factível.',
        legalBase: ['Lei nº 7.347/1985', 'Lei nº 6.938/1981', 'Lei nº 9.605/1998', 'Lei nº 8.429/1992 com alterações', 'LINDB, arts. 20 a 30', 'CPC para tutela coletiva subsidiária'],
        dryLaw: ['Lei nº 7.347/1985', 'Lei nº 6.938/1981, art. 14, §1º', 'LINDB, arts. 20 a 30', 'Lei nº 8.429/1992, conforme tema'],
        jurisprudence: ['A tutela coletiva ambiental tem forte orientação para prevenção e reparação integral.', 'Em políticas públicas ambientais, decisões judiciais tendem a considerar mínimo existencial ambiental, separação de poderes e capacidade administrativa, conforme o caso.'],
        objectiveCharge: ['Ação civil pública.', 'TAC.', 'Legitimidade.', 'Obrigação de fazer/não fazer.', 'Responsabilidade objetiva.', 'Controle judicial de política pública.'],
        discursiveCharge: 'Pode cair elaboração de parecer sobre celebrar TAC, defesa em ACP por lixão, ação contra poluidor, cumprimento de sentença ambiental ou pedido judicial de obra de saneamento.',
        traps: ['TAC não é perdão automático.', 'Acordo sem fiscalização vira risco.', 'Município pode ser autor ou réu.', 'Omissão genérica não deve ser defendida com negativa vazia.', 'Improbidade ambiental exige análise do elemento subjetivo conforme lei atual.'],
        differences: ['ACP x ação individual.', 'TAC x contrato administrativo.', 'Obrigação de fazer x indenização.', 'Dano ambiental x dano urbanístico.', 'Defesa de mérito x proposta de solução estrutural.'],
        commonMistakes: ['Não juntar plano de ação.', 'Prometer prazo impossível.', 'Ignorar perícia.', 'Não avaliar competência de outros entes.', 'Tratar política pública ambiental como discricionariedade absoluta.'],
        miniCase: 'ACP pede que o Município elimine todos os pontos de descarte irregular em 30 dias. A defesa deve reconhecer dever de atuação, mas discutir prazo, plano progressivo, orçamento, fiscalização, educação ambiental e corresponsabilidade de geradores.',
        activeQuestions: ['O Município é autor ou réu?', 'Qual dano foi provado?', 'Existe plano de ação?', 'Cabe TAC?', 'O prazo é factível?', 'Há outros responsáveis?'],
        flashcards: [
          { front: 'ACP ambiental busca apenas dinheiro?', back: 'Não. Prioriza prevenção, obrigação de fazer/não fazer e reparação integral.' },
          { front: 'TAC ambiental precisa de quê?', back: 'Obrigações claras, prazo, fiscalização e multa por descumprimento.' },
          { front: 'Município pode propor ACP ambiental?', back: 'Sim, conforme legitimidade da Lei da Ação Civil Pública.' }
        ],
        summary: 'Litígio ambiental exige solução, prova e plano. Para Procurador, a melhor peça combina legalidade, técnica, cronograma e proteção efetiva do ambiente.',
        checklist: ['Sei ACP ambiental.', 'Sei TAC.', 'Sei defesa do Município por omissão.', 'Sei prova e perícia ambiental.', 'Consigo estruturar proposta de acordo.'],
        nextTopic: 'Próxima fase: Língua Portuguesa Premium'
      }
    ]
  }

  ,{
    id: 'lingua-portuguesa',
    subject: 'Língua Portuguesa',
    status: '39J concluída',
    priority: 'Alta',
    overview: 'Apostila premium de Língua Portuguesa voltada para prova de Procurador: interpretação de textos, tipologia, gêneros, coesão, coerência, classes gramaticais, sintaxe, pontuação, concordância, regência, crase, semântica, ortografia e redação técnica jurídica.',
    lawBase: ['Acordo Ortográfico da Língua Portuguesa', 'Vocabulário Ortográfico da Língua Portuguesa — ABL', 'Gramática normativa aplicada a concursos', 'Prática de leitura de textos jurídicos, administrativos e argumentativos'],
    topics: [
      {
        id: 'interpretacao-compreensao-textual',
        level: 'básico',
        title: 'Compreensão e interpretação de textos',
        whatIs: 'Compreensão é localizar e reconhecer informações que estão expressas no texto. Interpretação é inferir sentido, intenção, pressupostos, conclusões e relações implícitas a partir das pistas linguísticas fornecidas.',
        purpose: 'Serve para responder questões de prova com segurança e para atuar como Procurador, lendo contratos, pareceres, decisões, ofícios, notificações e peças processuais sem distorcer o sentido do texto.',
        plainExplanation: [
          'Em concursos, Língua Portuguesa não cobra apenas “saber gramática”. A banca frequentemente testa se o candidato lê com precisão. Uma alternativa pode errar por trocar uma palavra absoluta por uma relativa, transformar hipótese em certeza ou atribuir ao autor uma opinião que o texto apenas relata.',
          'Compreender é recuperar dados: quem fez, quando, onde, qual causa, qual consequência. Interpretar é ir além: perceber ironia, finalidade, tese, argumento, pressuposto e conclusão. O erro comum é responder com opinião pessoal ou conhecimento externo, quando a questão pede o que o texto permite afirmar.',
          'Para Procurador, esse cuidado é essencial. Uma cláusula contratual, um artigo de lei ou um despacho administrativo pode mudar completamente de sentido por causa de uma conjunção, uma vírgula, um pronome ou uma expressão restritiva.'
        ],
        examTechnical: 'Na prova, separe comando, texto e alternativas. Primeiro descubra se a questão pede informação explícita, inferência, tese, finalidade, sentido de palavra, coesão ou reescrita. Desconfie de alternativas com exageros: sempre, nunca, exclusivamente, totalmente, apenas. Em interpretação, a resposta correta costuma ser a mais fiel ao texto, não a mais bonita.',
        cityExample: 'Um parecer municipal analisa se uma empresa “poderá ser penalizada se não comprovar a execução”. Se alguém interpreta como “deverá ser penalizada imediatamente”, há erro: “poderá” indica possibilidade condicionada, não imposição automática.',
        legalBase: ['Leitura técnica de textos normativos, administrativos e argumentativos', 'Acordo Ortográfico e norma-padrão como base de escrita oficial', 'Manual de redação oficial como referência prática de clareza e impessoalidade'],
        dryLaw: ['Não há artigo único de lei seca; estudar por textos de lei, Constituição, códigos e enunciados de prova', 'Consultar VOLP/ABL para grafia oficial de palavras quando houver dúvida'],
        jurisprudence: ['Não se aplica jurisprudência como conteúdo central, mas a leitura de ementas e teses de tribunais ajuda a treinar identificação de tese, fundamento e conclusão.'],
        objectiveCharge: ['Identificação da ideia principal.', 'Inferência permitida pelo texto.', 'Sentido de palavra no contexto.', 'Finalidade comunicativa.', 'Relação entre argumentos.', 'Reescrita sem alteração de sentido.'],
        discursiveCharge: 'Na discursiva, interpretação aparece na capacidade de compreender o problema jurídico proposto. Quem lê mal o enunciado responde tema diferente, ignora limites do caso ou deixa de enfrentar a pergunta central.',
        traps: ['Confundir opinião do autor com opinião de personagem citado.', 'Usar conhecimento externo para contrariar o texto.', 'Trocar causa por consequência.', 'Transformar possibilidade em certeza.', 'Ignorar palavras como “salvo”, “exceto”, “ainda que”, “desde que” e “somente”.'],
        differences: ['Compreensão x interpretação: uma localiza informação expressa; a outra infere sentido.', 'Tese x argumento: tese é o ponto defendido; argumento é a razão usada para sustentá-la.', 'Tema x título: tema é assunto; título pode ser síntese, provocação ou recorte.'],
        commonMistakes: ['Ler alternativas antes de entender o comando.', 'Marcar resposta por afinidade pessoal.', 'Ignorar conectivos.', 'Não voltar ao texto para confirmar.', 'Achar que toda inferência é subjetiva.'],
        miniCase: 'Um enunciado afirma que a Administração “deve motivar seus atos, especialmente quando restringem direitos”. A alternativa diz que “todo ato administrativo sem motivação é automaticamente nulo em qualquer hipótese”. A alternativa extrapola: há forte exigência de motivação, mas a nulidade depende do regime do ato e do prejuízo/controle no caso concreto.',
        activeQuestions: ['O comando pede informação expressa ou inferência?', 'Qual é a tese do texto?', 'Qual palavra muda o alcance da afirmação?', 'A alternativa exagerou o sentido?', 'A resposta depende do texto ou de opinião externa?'],
        flashcards: [
          { front: 'Compreensão é o quê?', back: 'Localizar informações expressas no texto.' },
          { front: 'Interpretação é o quê?', back: 'Inferir sentido com base em pistas textuais.' },
          { front: 'Principal armadilha em interpretação?', back: 'Extrapolar o texto ou marcar opinião pessoal como se fosse resposta.' }
        ],
        summary: 'Interpretação é fidelidade ao texto. Leia comando, localize pistas, observe conectivos e evite exageros. Para Procurador, ler bem é decidir bem.',
        checklist: ['Sei diferenciar compreensão e interpretação.', 'Consigo identificar tese e argumento.', 'Reconheço alternativas extrapoladas.', 'Volto ao texto para confirmar resposta.', 'Leio enunciado jurídico com atenção às condições.'],
        nextTopic: 'Tipologia textual e gêneros textuais'
      },
      {
        id: 'tipologia-generos-textuais',
        level: 'intermediário',
        title: 'Tipologia textual e gêneros textuais',
        whatIs: 'Tipologia textual é a forma predominante de organização do texto: narração, descrição, dissertação/argumentação, exposição, injunção. Gênero textual é a forma social concreta de comunicação, como artigo, notícia, parecer, ofício, edital, despacho, decisão, e-mail institucional e petição.',
        purpose: 'Serve para reconhecer a finalidade do texto e entender como sua estrutura influencia a interpretação. Em concurso, isso ajuda a perceber se o texto informa, argumenta, orienta, relata ou determina uma conduta.',
        plainExplanation: [
          'Tipo textual é a “engrenagem interna” do texto. Um texto narrativo organiza fatos no tempo; um descritivo caracteriza objetos ou situações; um argumentativo defende tese; um expositivo explica; um injuntivo orienta ou ordena. Um mesmo gênero pode misturar tipos.',
          'Gênero textual é o texto em uso social. Um parecer jurídico, por exemplo, geralmente expõe fatos, analisa fundamentos e conclui com orientação. Um edital tem função normativa e informativa. Uma notícia relata fatos com finalidade jornalística. Uma petição argumenta para convencer o juiz.',
          'A prova gosta de perguntar finalidade, predominância e linguagem. Em textos jurídicos e administrativos, há forte presença de impessoalidade, clareza, objetividade e encadeamento lógico.'
        ],
        examTechnical: 'Não decore apenas nomes. Pergunte: o texto quer convencer, informar, ordenar, narrar, descrever ou explicar? A banca pode chamar texto argumentativo de dissertativo-argumentativo. Em reescrita, é comum cobrar manutenção de sentido e adequação ao gênero.',
        cityExample: 'Um parecer da Procuradoria não é crônica nem opinião livre. Ele deve relatar consulta, delimitar questão, fundamentar juridicamente, ponderar riscos e concluir. Se o texto não conclui, falha no gênero parecer.',
        legalBase: ['Redação oficial e prática administrativa', 'Norma-padrão da Língua Portuguesa', 'Técnica de parecer e textos institucionais'],
        dryLaw: ['Ler modelos de edital, parecer, ofício, despacho e decisão administrativa para reconhecer finalidade e estrutura'],
        jurisprudence: ['Não há jurisprudência central; a utilidade está na leitura de ementas e votos para reconhecer exposição, fundamentação e conclusão.'],
        objectiveCharge: ['Tipo textual predominante.', 'Gênero textual.', 'Finalidade comunicativa.', 'Características de linguagem.', 'Trecho narrativo dentro de texto argumentativo.', 'Função de exemplos e dados.'],
        discursiveCharge: 'Na discursiva de Procurador, o gênero esperado pode ser parecer, resposta jurídica ou peça argumentativa. A nota cai quando o candidato escreve como resumo solto, sem estrutura de consulta, fundamento e conclusão.',
        traps: ['Achar que texto com fatos é sempre narrativo.', 'Confundir exposição com argumentação.', 'Chamar qualquer texto formal de jurídico.', 'Ignorar a finalidade do gênero.', 'Escrever discursiva sem conclusão prática.'],
        differences: ['Tipo textual x gênero textual.', 'Exposição x argumentação.', 'Relato de fato x defesa de tese.', 'Parecer x despacho.', 'Ofício x petição.'],
        commonMistakes: ['Decorar tipologia sem olhar finalidade.', 'Não perceber mistura de tipos.', 'Escrever resposta discursiva sem adequação ao gênero pedido.', 'Confundir linguagem objetiva com texto pobre.'],
        miniCase: 'A questão apresenta um texto que explica o funcionamento do plano diretor e depois defende sua importância. A primeira parte é expositiva; a segunda é argumentativa. A predominância depende do objetivo global do texto.',
        activeQuestions: ['Qual é a finalidade do texto?', 'Há tese defendida?', 'O texto ordena ou orienta?', 'O gênero exige conclusão?', 'A linguagem é adequada ao contexto institucional?'],
        flashcards: [
          { front: 'Texto argumentativo faz o quê?', back: 'Defende uma tese com argumentos.' },
          { front: 'Gênero textual é o quê?', back: 'Forma social concreta de texto, como parecer, edital, notícia ou ofício.' },
          { front: 'Parecer jurídico precisa de quê?', back: 'Questão, fatos relevantes, fundamentos e conclusão orientadora.' }
        ],
        summary: 'Tipologia mostra como o texto se organiza; gênero mostra para que ele serve socialmente. Na prova, a finalidade manda.',
        checklist: ['Sei os principais tipos textuais.', 'Sei diferenciar tipo e gênero.', 'Reconheço finalidade comunicativa.', 'Consigo estruturar parecer.', 'Evito confundir relato com argumento.'],
        nextTopic: 'Coesão, coerência e conectivos'
      },
      {
        id: 'coesao-coerencia-conectivos',
        level: 'intermediário',
        title: 'Coesão, coerência, referenciação e conectivos',
        whatIs: 'Coesão é a ligação linguística entre partes do texto por pronomes, conjunções, advérbios, elipses, repetição controlada e substituição vocabular. Coerência é a unidade lógica de sentido: o texto precisa fazer sentido como conjunto.',
        purpose: 'Serve para construir e interpretar textos claros. Na prova, conectivos e pronomes são usados para testar relações de causa, consequência, oposição, condição, conclusão, concessão e explicação.',
        plainExplanation: [
          'Coesão é a costura visível. Palavras como portanto, porém, embora, porque, caso, conforme e além disso sinalizam como uma ideia se liga à outra. Se o candidato ignora o conectivo, pode inverter completamente o sentido.',
          'Coerência é a lógica global. Um texto pode ter frases gramaticalmente corretas e ainda ser incoerente se contradiz, muda de tema sem transição ou apresenta conclusão que não decorre dos argumentos.',
          'Referenciação é identificar a quem ou a quê um pronome ou expressão se refere. Em textos jurídicos, isso evita confundir sujeito, responsável, ato, órgão, empresa ou agente público.'
        ],
        examTechnical: 'Estude valor semântico dos conectivos: adversidade, concessão, condição, causa, consequência, finalidade, comparação, conclusão e explicação. A banca cobra substituição de conectivos sem alterar sentido. “Embora” não é igual a “porque”; “portanto” não é igual a “porém”; “se” pode indicar condição.',
        cityExample: 'Em um contrato: “A empresa será notificada se descumprir o prazo”. O “se” cria condição. Não se pode notificar por esse fundamento sem demonstrar descumprimento.',
        legalBase: ['Norma-padrão da língua escrita', 'Técnica de redação oficial e jurídica', 'Leitura de textos legais e administrativos'],
        dryLaw: ['Treinar conectivos em artigos de lei: salvo, exceto, desde que, quando, enquanto, sem prejuízo, ainda que'],
        jurisprudence: ['A leitura de teses jurídicas exige atenção a conectivos, especialmente quando o tribunal fixa exceções, condições ou ressalvas.'],
        objectiveCharge: ['Valor semântico de conectivo.', 'Substituição sem prejuízo de sentido.', 'Referente de pronome.', 'Coerência de reescrita.', 'Relação entre períodos.'],
        discursiveCharge: 'Em discursiva, coesão ruim derruba clareza. Use conectivos para organizar: inicialmente, além disso, por outro lado, contudo, portanto, assim, no caso concreto, conclui-se.',
        traps: ['Trocar concessão por causa.', 'Achar que “contudo” conclui.', 'Não identificar referente do pronome.', 'Usar “onde” para tudo.', 'Escrever parágrafos sem conexão.'],
        differences: ['Coesão x coerência.', 'Causa x consequência.', 'Oposição x concessão.', 'Condição x finalidade.', 'Retomada pronominal x repetição.'],
        commonMistakes: ['Decorar conectivos sem sentido.', 'Usar “portanto” sem conclusão.', 'Criar ambiguidade com pronomes.', 'Começar todo parágrafo com “dessa forma” sem lógica.'],
        miniCase: 'A frase “Embora o ato tenha vício, ele poderá ser convalidado se o defeito for sanável” contém concessão e condição. A conclusão correta depende dos dois elementos: existe vício, mas há possível convalidação condicionada à sanabilidade.',
        activeQuestions: ['Qual relação o conectivo cria?', 'O pronome retoma qual termo?', 'A conclusão decorre dos argumentos?', 'Há contradição interna?', 'A reescrita preserva o sentido?'],
        flashcards: [
          { front: '“Embora” indica quê?', back: 'Concessão.' },
          { front: '“Portanto” indica quê?', back: 'Conclusão.' },
          { front: 'Coerência é o quê?', back: 'Unidade lógica de sentido do texto.' }
        ],
        summary: 'Coesão é costura; coerência é lógica. Conectivo errado muda resposta. Em texto jurídico, clareza depende de relações bem marcadas.',
        checklist: ['Sei valores dos conectivos.', 'Identifico referentes pronominais.', 'Consigo reescrever sem mudar sentido.', 'Uso conectivos na discursiva.', 'Evito ambiguidade.'],
        nextTopic: 'Classes de palavras e morfologia aplicada'
      },
      {
        id: 'classes-palavras-morfologia',
        level: 'básico',
        title: 'Classes de palavras e morfologia aplicada à prova',
        whatIs: 'Classes de palavras são categorias gramaticais que organizam as palavras conforme função e comportamento: substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição, conjunção e interjeição.',
        purpose: 'Serve para entender concordância, regência, crase, pontuação, sentido e reescrita. A banca raramente cobra classificação isolada; cobra o efeito da classe no funcionamento da frase.',
        plainExplanation: [
          'Substantivo nomeia; adjetivo caracteriza; pronome retoma ou substitui; verbo indica ação, estado, fenômeno ou processo; advérbio modifica verbo, adjetivo ou outro advérbio; preposição liga termos; conjunção liga orações ou termos.',
          'A mesma palavra pode mudar de classe conforme contexto. “Certo” pode ser adjetivo em “ato certo” e advérbio em “ele agiu certo”. “Que” pode ser pronome relativo, conjunção integrante ou partícula expletiva, conforme a função.',
          'Para prova, o foco é funcional: o pronome retoma qual termo? O advérbio altera o sentido? A conjunção indica oposição? O verbo exige complemento? O adjetivo restringe ou explica?'
        ],
        examTechnical: 'Estude especialmente pronomes relativos, conjunções, preposições, advérbios, verbos e formas nominais. Eles aparecem em reescrita, coesão, regência, crase, concordância e pontuação. A classificação deve servir ao sentido.',
        cityExample: 'Na frase “O servidor que descumpriu o dever será notificado”, o “que” retoma servidor e introduz oração restritiva. Não é qualquer servidor; é aquele que descumpriu o dever.',
        legalBase: ['Gramática normativa da Língua Portuguesa', 'Acordo Ortográfico e VOLP para grafia oficial', 'Uso da norma-padrão em documentos públicos'],
        dryLaw: ['Consultar VOLP para grafia', 'Treinar pronomes, verbos e conectivos em textos legais'],
        jurisprudence: ['Não aplicável como jurisprudência; a importância é prática para compreensão de textos normativos.'],
        objectiveCharge: ['Classificação contextual.', 'Função de pronome relativo.', 'Valor de conjunção.', 'Sentido de advérbio.', 'Emprego de formas verbais.', 'Reescrita mantendo classe/função.'],
        discursiveCharge: 'Na discursiva, domínio morfológico evita ambiguidade e melhora precisão: escolher verbo adequado, retomar termos corretamente e usar conectivos técnicos.',
        traps: ['Classificar palavra fora do contexto.', 'Achar que todo “que” tem mesma função.', 'Confundir preposição com conjunção.', 'Não perceber pronome com referente ambíguo.', 'Usar advérbio que muda o alcance da tese.'],
        differences: ['Pronome relativo x conjunção integrante.', 'Adjetivo restritivo x explicativo.', 'Advérbio x adjetivo.', 'Preposição x conjunção.', 'Verbo transitivo x intransitivo.'],
        commonMistakes: ['Decorar tabela sem aplicar.', 'Ignorar contexto.', 'Errar referente do pronome.', 'Não perceber mudança de sentido por advérbio.'],
        miniCase: '“A multa somente será aplicada após defesa.” O advérbio “somente” restringe a possibilidade: a aplicação depende de defesa prévia. Se retirado, o alcance muda.',
        activeQuestions: ['Qual classe a palavra exerce neste contexto?', 'O pronome retoma quem?', 'O verbo pede complemento?', 'O advérbio restringe o quê?', 'A conjunção liga ideias com qual sentido?'],
        flashcards: [
          { front: 'Classe da palavra depende de quê?', back: 'Do contexto e da função na frase.' },
          { front: 'Pronome relativo faz o quê?', back: 'Retoma termo anterior e introduz oração subordinada adjetiva.' },
          { front: 'Advérbio modifica o quê?', back: 'Verbo, adjetivo ou outro advérbio.' }
        ],
        summary: 'Morfologia boa é morfologia aplicada. Em concurso, classe gramatical importa quando altera sentido, coesão ou correção da frase.',
        checklist: ['Sei classes principais.', 'Analiso função no contexto.', 'Reconheço pronomes relativos.', 'Reconheço conectivos.', 'Uso verbos e pronomes com precisão.'],
        nextTopic: 'Sintaxe, termos da oração e período composto'
      },
      {
        id: 'sintaxe-periodo-composto',
        level: 'avançado',
        title: 'Sintaxe: termos da oração, período simples e período composto',
        whatIs: 'Sintaxe estuda a relação entre palavras, termos e orações. Inclui sujeito, predicado, objetos, complementos, adjuntos, aposto, vocativo, orações coordenadas e subordinadas.',
        purpose: 'Serve para resolver concordância, pontuação, crase, regência e interpretação. Quem entende sintaxe sabe por que a vírgula pode mudar sentido e por que o verbo concorda com determinado núcleo.',
        plainExplanation: [
          'O período simples tem uma oração; o composto tem mais de uma. Em textos jurídicos, períodos longos são comuns, mas exigem identificação de oração principal, subordinadas, sujeitos e complementos.',
          'O sujeito é o termo sobre o qual se declara algo. O predicado traz a declaração. Objetos completam verbos; complementos nominais completam nomes; adjuntos acrescentam circunstâncias ou qualificações. Aposto explica ou especifica; vocativo chama interlocutor.',
          'Orações subordinadas podem exercer função substantiva, adjetiva ou adverbial. Esse ponto cai muito em vírgula, valor semântico e reescrita.'
        ],
        examTechnical: 'Domine sujeito simples, composto, oculto, indeterminado e oração sem sujeito; transitividade verbal; complemento nominal x adjunto adnominal; oração adjetiva restritiva x explicativa; oração adverbial causal, concessiva, condicional, final, temporal, consecutiva e conformativa.',
        cityExample: '“Os contratos que foram prorrogados sem justificativa serão analisados.” A oração “que foram prorrogados sem justificativa” restringe quais contratos serão analisados. Se vier entre vírgulas, pode virar explicativa e mudar o alcance.',
        legalBase: ['Gramática normativa', 'Redação oficial', 'Norma-padrão aplicada a textos jurídicos'],
        dryLaw: ['Treinar sintaxe lendo artigos com incisos, parágrafos, ressalvas e condições'],
        jurisprudence: ['Não há jurisprudência própria; a aplicação é decisiva para leitura de teses e dispositivos legais.'],
        objectiveCharge: ['Função sintática.', 'Orações subordinadas.', 'Restritiva x explicativa.', 'Transitividade verbal.', 'Sujeito e concordância.', 'Reescrita sintaticamente correta.'],
        discursiveCharge: 'Na discursiva, sintaxe clara evita frases confusas. Prefira períodos médios, sujeito claro, verbo forte e conclusão expressa.',
        traps: ['Confundir objeto indireto com complemento nominal.', 'Separar sujeito e verbo por vírgula.', 'Não diferenciar oração adjetiva restritiva e explicativa.', 'Achar que todo termo com preposição é objeto indireto.'],
        differences: ['Complemento nominal x adjunto adnominal.', 'Oração restritiva x explicativa.', 'Coordenação x subordinação.', 'Objeto direto x objeto indireto.', 'Sujeito indeterminado x oração sem sujeito.'],
        commonMistakes: ['Analisar termo isolado.', 'Ignorar núcleo do sujeito.', 'Pontuar por pausa oral.', 'Não perceber mudança de sentido em oração explicativa.'],
        miniCase: '“Os servidores, que participaram do curso, receberão certificado” indica que todos os servidores participaram. “Os servidores que participaram do curso receberão certificado” indica apenas os que participaram.',
        activeQuestions: ['Qual é o sujeito?', 'Qual é o verbo principal?', 'Há oração restritiva?', 'A vírgula muda o alcance?', 'O termo preposicionado completa verbo ou nome?'],
        flashcards: [
          { front: 'Oração adjetiva restritiva usa vírgula?', back: 'Em regra, não; ela restringe o termo anterior.' },
          { front: 'Oração explicativa usa vírgula?', back: 'Sim, em regra vem isolada por vírgulas.' },
          { front: 'Pode separar sujeito e verbo por vírgula?', back: 'Não, salvo intercalações devidamente marcadas.' }
        ],
        summary: 'Sintaxe é a arquitetura da frase. Ela explica pontuação, concordância, regência e sentido. Para prova, restritiva x explicativa é tema obrigatório.',
        checklist: ['Identifico sujeito e verbo.', 'Sei transitividade básica.', 'Diferencio restritiva e explicativa.', 'Reconheço orações subordinadas.', 'Evito vírgula entre sujeito e verbo.'],
        nextTopic: 'Pontuação, vírgula e efeitos de sentido'
      },
      {
        id: 'pontuacao-virgula',
        level: 'avançado',
        title: 'Pontuação: vírgula, ponto e vírgula, dois-pontos, travessões e efeitos de sentido',
        whatIs: 'Pontuação é o conjunto de sinais que organiza a escrita, marca relações sintáticas e semânticas, indica pausas estruturais e evita ambiguidade.',
        purpose: 'Serve para tornar o texto claro, correto e juridicamente seguro. Na prova, pontuação é cobrada principalmente por seu efeito no sentido e por regras de sintaxe.',
        plainExplanation: [
          'Vírgula não é “pausa para respirar”. Ela marca deslocamentos, intercalações, enumerações, aposto, vocativo, orações explicativas e certas relações entre orações. A regra mais lembrada é: não separar sujeito e verbo nem verbo e complemento direto por vírgula indevida.',
          'Dois-pontos introduzem explicação, enumeração, citação ou esclarecimento. Ponto e vírgula separa itens longos ou orações coordenadas com certa autonomia. Travessões isolam explicações, comentários ou intercalações com destaque.',
          'Em textos jurídicos, uma vírgula pode ampliar ou restringir alcance. Por isso, a banca adora perguntar se a retirada de vírgulas altera sentido.'
        ],
        examTechnical: 'Estude vírgula em adjunto adverbial deslocado, oração adjetiva explicativa, aposto, vocativo, elipse verbal, enumeração, orações coordenadas e orações subordinadas adverbiais deslocadas. Em reescrita, verifique se a vírgula altera restrição, explicação ou ambiguidade.',
        cityExample: '“Os contribuintes que aderirem ao parcelamento terão desconto” restringe o benefício aos aderentes. “Os contribuintes, que aderirem ao parcelamento, terão desconto” sugere que todos aderirão ou torna a frase inadequada ao objetivo normativo.',
        legalBase: ['Gramática normativa', 'Norma-padrão em redação oficial', 'Técnica legislativa e administrativa'],
        dryLaw: ['Treinar vírgula em leis, incisos, parágrafos, ressalvas e enumerações'],
        jurisprudence: ['Não há jurisprudência central, mas a pontuação influencia leitura de contratos, leis e decisões.'],
        objectiveCharge: ['Emprego da vírgula.', 'Mudança de sentido com pontuação.', 'Dois-pontos e enumeração.', 'Travessão e intercalação.', 'Ponto e vírgula em enumeração complexa.'],
        discursiveCharge: 'Na discursiva, pontuação correta aumenta clareza. Uma resposta com vírgulas mal colocadas parece insegura e pode dificultar a compreensão do fundamento jurídico.',
        traps: ['Pontuar por pausa oral.', 'Separar sujeito e verbo.', 'Usar vírgula que transforma restrição em explicação.', 'Não isolar aposto ou vocativo.', 'Colocar dois-pontos sem termo anunciador.'],
        differences: ['Vírgula sintática x pausa oral.', 'Restrição x explicação.', 'Aposto x adjunto.', 'Dois-pontos x ponto e vírgula.', 'Travessão x parênteses.'],
        commonMistakes: ['Excesso de vírgulas.', 'Falta de vírgula em intercalação.', 'Vírgula entre verbo e complemento.', 'Não perceber mudança de sentido.'],
        miniCase: '“O Município notificou a empresa, responsável pela obra, para corrigir falhas.” A vírgula sugere explicação. Sem vírgulas, “responsável pela obra” restringiria qual empresa foi notificada.',
        activeQuestions: ['A vírgula separou sujeito e verbo?', 'Há termo deslocado?', 'A oração é explicativa ou restritiva?', 'Existe enumeração?', 'A pontuação mudou sentido?'],
        flashcards: [
          { front: 'Vírgula separa sujeito e verbo?', back: 'Não.' },
          { front: 'Oração explicativa vem como?', back: 'Isolada por vírgulas.' },
          { front: 'Dois-pontos introduzem o quê?', back: 'Explicação, enumeração, citação ou esclarecimento.' }
        ],
        summary: 'Pontuação é sintaxe visível. Na prova, pergunte se o sinal organiza, explica, restringe ou muda sentido.',
        checklist: ['Não separo sujeito e verbo.', 'Sei usar vírgula em explicativa.', 'Reconheço enumeração.', 'Entendo efeito de sentido.', 'Pontuo discursiva com clareza.'],
        nextTopic: 'Concordância, regência e crase'
      },
      {
        id: 'concordancia-regencia-crase',
        level: 'lei seca',
        title: 'Concordância verbal e nominal, regência e crase',
        whatIs: 'Concordância é a adequação de verbo, nomes e determinantes a número, pessoa e gênero. Regência é a relação de dependência entre termos, especialmente verbos/nomes e seus complementos. Crase é a fusão da preposição “a” com artigo “a” ou pronomes iniciados por “a”.',
        purpose: 'Serve para escrever corretamente e resolver grande parte das questões gramaticais. Para Procurador, evita erros formais em pareceres, peças, ofícios e manifestações processuais.',
        plainExplanation: [
          'Concordância verbal exige identificar o núcleo do sujeito. O verbo concorda com o sujeito, não com o termo mais próximo. Expressões partitivas, porcentagens, sujeito posposto e voz passiva sintética são pontos frequentes.',
          'Regência depende do termo regente. Verbos como assistir, visar, implicar, obedecer, preferir, informar, pagar e responder mudam sentido ou exigem preposição. Nome também tem regência: favorável a, compatível com, relativo a, necessário a.',
          'Crase exige, em regra, preposição “a” + artigo “a”. Use teste simples: trocar palavra feminina por masculina. Se virar “ao”, há forte sinal de crase. Mas existem casos especiais: à moda de, às vezes, à medida que, àquele, à qual.'
        ],
        examTechnical: 'Estude concordância com sujeito composto, partitivo, percentual, pronome relativo, voz passiva sintética e verbo haver/existir. Em regência, foque verbos comuns de concurso. Em crase, domine casos obrigatórios, proibidos e facultativos. A banca cobra reescrita e correção segundo norma-padrão.',
        cityExample: '“Fazem dois anos que a obra está paralisada” está incorreto na norma-padrão; com sentido de tempo decorrido, o verbo fazer é impessoal: “Faz dois anos”. Já “Existem pendências” concorda normalmente, porque existir tem sujeito.',
        legalBase: ['Gramática normativa', 'Norma-padrão da língua escrita', 'Redação oficial e jurídica'],
        dryLaw: ['Consultar VOLP para grafia e treinar concordância/regência em textos normativos'],
        jurisprudence: ['Não aplicável como jurisprudência; aplicação prática em peças e pareceres.'],
        objectiveCharge: ['Correção de concordância.', 'Regência verbal/nominal.', 'Crase obrigatória/proibida.', 'Reescrita correta.', 'Verbos impessoais.', 'Voz passiva sintética.'],
        discursiveCharge: 'Na discursiva, erro recorrente de concordância, regência ou crase reduz qualidade formal e pode prejudicar nota de linguagem.',
        traps: ['Confundir haver impessoal com existir.', 'Usar crase antes de verbo.', 'Usar crase antes de palavra masculina comum.', 'Esquecer preposição exigida pelo verbo.', 'Fazer verbo concordar com termo intercalado.'],
        differences: ['Haver impessoal x existir.', 'Assistir no sentido de ver x assistir no sentido de ajudar.', 'Crase obrigatória x facultativa.', 'Regência verbal x nominal.', 'Concordância verbal x nominal.'],
        commonMistakes: ['“Houveram problemas”.', '“Visar o cargo” quando sentido é almejar, em norma tradicional exige “visar ao”.', '“À partir de”.', '“Obedecer o prazo”.', '“Segue anexo os documentos”.'],
        miniCase: 'Em ofício: “Encaminha-se, anexos, as certidões” está inadequado. Melhor: “Encaminham-se, anexas, as certidões” se a estrutura for passiva sintética com sujeito “as certidões”.',
        activeQuestions: ['Qual é o núcleo do sujeito?', 'O verbo é impessoal?', 'O verbo exige preposição?', 'Há artigo feminino?', 'A troca por masculino gera “ao”?'],
        flashcards: [
          { front: '“Houveram problemas” está correto?', back: 'Não. No sentido de existir, haver é impessoal: “Houve problemas”.' },
          { front: 'Crase antes de verbo?', back: 'Não ocorre.' },
          { front: 'Existir é impessoal?', back: 'Não. Concorda com o sujeito: “Existem dúvidas”.' }
        ],
        summary: 'Concordância, regência e crase são o núcleo da gramática normativa em concursos. A solução começa por identificar sujeito, termo regente e presença de artigo.',
        checklist: ['Identifico sujeito.', 'Sei haver x existir.', 'Conheço regências frequentes.', 'Aplico teste da crase.', 'Evito erros formais na discursiva.'],
        nextTopic: 'Ortografia, acentuação e semântica'
      },
      {
        id: 'ortografia-acentuacao-semantica',
        level: 'lei seca',
        title: 'Ortografia, acentuação, semântica, figuras de linguagem e vícios de linguagem',
        whatIs: 'Ortografia trata da grafia correta das palavras; acentuação define o emprego de acentos gráficos; semântica estuda significado; figuras de linguagem produzem efeitos expressivos; vícios de linguagem são desvios que prejudicam clareza, correção ou elegância.',
        purpose: 'Serve para responder questões objetivas de correção gramatical e para escrever peças e pareceres com precisão, clareza e credibilidade profissional.',
        plainExplanation: [
          'Ortografia cobra palavras parecidas, hífen, uso de porquê, mal/mau, há/a, onde/aonde, seção/sessão/cessão, senão/se não, acerca de/a cerca de/há cerca de. A fonte segura para grafia é o VOLP/ABL.',
          'Acentuação exige reconhecer oxítonas, paroxítonas, proparoxítonas, hiatos, ditongos e alterações do Acordo Ortográfico. Em prova, não basta decorar: compare palavras com mesma regra.',
          'Semântica aparece em sinônimos, antônimos, polissemia, ambiguidade, denotação, conotação, pressupostos e inferências. Figuras de linguagem são menos frequentes em prova jurídica, mas podem aparecer em interpretação.'
        ],
        examTechnical: 'Estude por agrupamento de casos: porquês, hífen, acentuação, parônimos, homônimos, denotação/conotação, ambiguidade, pleonasmo vicioso, cacofonia, barbarismo, solecismo e eco. Em reescrita, observe se a substituição preserva sentido e correção.',
        cityExample: 'Em documento oficial, escrever “a cerca de cinco anos” no lugar de “há cerca de cinco anos” gera erro de sentido: “há” indica tempo decorrido; “a cerca de” indica aproximação espacial ou numérica conforme construção.',
        legalBase: ['Acordo Ortográfico da Língua Portuguesa', 'Vocabulário Ortográfico da Língua Portuguesa — ABL', 'Norma-padrão da língua escrita'],
        dryLaw: ['Consultar VOLP/ABL para grafia oficial', 'Revisar listas de parônimos e homônimos comuns em concursos'],
        jurisprudence: ['Não aplicável; tema de norma-padrão e interpretação textual.'],
        objectiveCharge: ['Grafia correta.', 'Acentuação.', 'Uso dos porquês.', 'Hífen.', 'Parônimos e homônimos.', 'Ambiguidade e sentido contextual.'],
        discursiveCharge: 'Na discursiva, ortografia e semântica impactam nota de linguagem. Erros repetidos geram impressão de descuido, mesmo quando o conteúdo jurídico é bom.',
        traps: ['“Por que” pergunta direta/indireta; “porque” explicação; “por quê” fim de frase; “porquê” substantivo.', '“Mal” opõe-se a bem; “mau” opõe-se a bom.', '“Onde” indica lugar físico; “aonde” indica movimento com verbo que exige “a”.', '“Há” tempo passado; “a” tempo futuro/distância.'],
        differences: ['Mal x mau.', 'Há x a.', 'Onde x aonde.', 'Seção x sessão x cessão.', 'Acerca de x a cerca de x há cerca de.', 'Denotação x conotação.'],
        commonMistakes: ['Usar “onde” para lei, tema ou situação abstrata.', 'Trocar sessão por seção.', 'Errar porquês.', 'Escrever “à partir de”.', 'Ignorar ambiguidade.'],
        miniCase: '“A decisão onde o Município foi condenado” é inadequado. Melhor: “A decisão em que o Município foi condenado”, pois decisão não é lugar físico.',
        activeQuestions: ['A palavra está grafada conforme VOLP?', 'O porquê está correto?', 'Há ambiguidade?', 'O sentido é literal ou figurado?', 'A substituição preserva significado?'],
        flashcards: [
          { front: '“Mal” se opõe a quê?', back: 'Bem.' },
          { front: '“Mau” se opõe a quê?', back: 'Bom.' },
          { front: '“Onde” deve ser usado para quê?', back: 'Lugar físico ou espacial.' }
        ],
        summary: 'Ortografia e semântica parecem detalhes, mas derrubam pontos. Para prova, foque casos recorrentes e sempre confirme grafia oficial quando houver dúvida.',
        checklist: ['Sei porquês.', 'Sei mal/mau.', 'Sei há/a.', 'Evito “onde” indevido.', 'Reconheço ambiguidade e polissemia.'],
        nextTopic: 'Redação oficial, linguagem jurídica e resposta discursiva'
      },
      {
        id: 'redacao-oficial-juridica',
        level: 'discursiva',
        title: 'Redação oficial, linguagem jurídica e resposta discursiva de Procurador',
        whatIs: 'Redação oficial é a comunicação escrita da Administração Pública, baseada em clareza, objetividade, formalidade, impessoalidade, padronização e correção. Linguagem jurídica é o uso técnico da língua para argumentar, fundamentar e concluir juridicamente.',
        purpose: 'Serve para produzir pareceres, ofícios, despachos, informações, contestações e respostas discursivas de forma clara, técnica e institucional.',
        plainExplanation: [
          'Uma boa resposta discursiva de Procurador não é texto bonito: é texto útil. Deve entender o problema, organizar fundamentos, aplicar ao caso e concluir com providência prática. Linguagem rebuscada demais atrapalha; linguagem simples demais pode parecer sem técnica. O equilíbrio é clareza técnica.',
          'Redação oficial exige impessoalidade. Evite opinião pessoal solta: prefira “entende-se”, “verifica-se”, “no caso concreto”, “à luz do art.”, “recomenda-se”. O texto deve representar a instituição, não o ego do redator.',
          'A estrutura mais segura para discursiva é: delimitação da questão, regra jurídica, aplicação ao caso, conclusão. Em parecer, acrescente relatório breve e análise de riscos.'
        ],
        examTechnical: 'Treine parágrafos de 4 a 6 linhas, frases com sujeito claro, conectivos jurídicos e conclusão expressa. Evite períodos enormes, jargão inútil, citações vagas e resposta sem providência. Em prova, cumprir o comando vale mais que despejar conteúdo.',
        cityExample: 'Se a questão pede parecer sobre anulação de contrato, a resposta deve dizer se há vício, qual norma foi violada, se cabe convalidação, se há contraditório, qual providência o Município deve tomar e quais efeitos preservar ou modular.',
        legalBase: ['Manual de redação oficial como referência de clareza, impessoalidade e concisão', 'Norma-padrão da língua escrita', 'Técnica de parecer jurídico', 'LINDB, arts. 20 a 30, para decisões públicas com consequências práticas'],
        dryLaw: ['Ler modelos de parecer, ofício, despacho, contestação e informações em mandado de segurança', 'LINDB, arts. 20 a 30'],
        jurisprudence: ['Em temas jurídicos, cite jurisprudência apenas quando for relevante e segura. Melhor explicar bem o fundamento do que inventar tese ou número de precedente.'],
        objectiveCharge: ['Características da redação oficial.', 'Impessoalidade.', 'Clareza.', 'Concisão.', 'Adequação vocabular.', 'Reescrita formal.'],
        discursiveCharge: 'É o coração da prova discursiva: a banca avalia clareza, estrutura, precisão, domínio jurídico, aplicação ao caso e conclusão. A resposta precisa parecer manifestação de Procurador, não resumo de aula.',
        traps: ['Não responder ao comando.', 'Escrever sem conclusão.', 'Usar “eu acho”.', 'Citar artigo errado com segurança falsa.', 'Fazer texto longo sem aplicar ao caso.', 'Confundir linguagem técnica com juridiquês.'],
        differences: ['Clareza x simplismo.', 'Técnica x juridiquês.', 'Parecer x dissertação genérica.', 'Conclusão objetiva x opinião vaga.', 'Relatório x fundamentação.'],
        commonMistakes: ['Começar sem delimitar o problema.', 'Empilhar conceitos.', 'Não usar conectivos.', 'Ignorar fatos do enunciado.', 'Não indicar providência prática.'],
        miniCase: 'Enunciado: “Secretaria quer revogar ato ilegal por conveniência”. Resposta boa: ato ilegal não se revoga; deve ser anulado, observando contraditório quando houver efeitos favoráveis, motivação e eventual preservação de efeitos conforme segurança jurídica.',
        activeQuestions: ['Respondi exatamente o comando?', 'Há fundamento jurídico?', 'Apliquei ao caso?', 'Concluí com providência?', 'Meu texto está claro e impessoal?'],
        flashcards: [
          { front: 'Estrutura segura da discursiva?', back: 'Problema, regra jurídica, aplicação ao caso e conclusão.' },
          { front: 'Redação oficial deve ser pessoal?', back: 'Não. Deve ser impessoal, clara, formal e objetiva.' },
          { front: 'Maior erro em discursiva?', back: 'Não responder ao caso concreto.' }
        ],
        summary: 'Português para Procurador termina em escrita técnica. A melhor resposta é clara, precisa, impessoal, fundamentada e conclusiva.',
        checklist: ['Escrevo com clareza.', 'Uso norma-padrão.', 'Estruturo parecer.', 'Aplico ao caso.', 'Concluo com providência prática.'],
        nextTopic: 'Fase 39 concluída — revisar questões comentadas por tópico na próxima fase'
      }
    ]
  }


];

export function getApostilaStats(progress = {}) {
  const total = premiumApostilaSubjects.reduce((sum, subject) => sum + subject.topics.length, 0);
  const done = Object.values(progress.studied || {}).flat().length;
  return { total, done, percent: Math.round((done / Math.max(total, 1)) * 100) };
}

export const deepDidacticMeta = {
  phase: 'Fase 42A',
  title: 'Apostila Didática Profunda — Língua Portuguesa',
  subtitle: 'Camada de ensino passo a passo: conceito, uso, exemplos certos e errados, questão comentada, exercícios e aplicação discursiva.'
};

export const portugueseDeepLessons = {
  'compreensao-interpretacao': {
    label: 'aula didática profunda',
    concept: 'Compreender é localizar o que está escrito. Interpretar é construir uma conclusão autorizada pelo texto. Em prova, a resposta correta precisa nascer do texto, não da opinião do candidato nem de conhecimento externo.',
    whyExists: 'Esse conteúdo existe para testar leitura disciplinada. O examinador quer saber se você obedece ao comando, identifica tese, percebe relações lógicas e não cai em alternativas bonitas, mas fora do texto.',
    howItWorks: [
      'Leia primeiro o comando da questão e descubra o que ele pede: ideia central, inferência, sentido de palavra, reescrita ou finalidade.',
      'Volte ao trecho indicado e marque palavras de direção, como “portanto”, “contudo”, “embora”, “apenas”, “sempre” e “não”.',
      'Separe o assunto da tese. Assunto é o tema geral; tese é a posição defendida pelo texto.',
      'Elimine alternativas que extrapolam, restringem, contradizem ou trocam causa por consequência.',
      'Escolha a alternativa mais fiel ao texto, ainda que outra pareça mais completa ou mais “bonita”.'
    ],
    mainRules: [
      'Informação expressa deve estar literalmente ou claramente no texto.',
      'Inferência precisa ser consequência lógica de pistas textuais.',
      'Extrapolação acrescenta dado não autorizado.',
      'Restrição diminui indevidamente o alcance do texto.',
      'Contradição inverte a ideia do autor.'
    ],
    simpleExample: {
      prompt: 'Texto: “A motivação dos atos administrativos permite controle e reduz arbitrariedades.”',
      right: 'Correto: a motivação facilita o controle do ato administrativo.',
      wrong: 'Errado: todo ato sem motivação é inexistente. O texto não afirmou essa consequência absoluta.',
      explanation: 'A alternativa correta repete a relação central do texto. A errada extrapola a consequência jurídica.'
    },
    municipalExample: 'Em um parecer, se o caso fala de servidor punido sem defesa, o foco é contraditório e ampla defesa. Se você escrever uma resposta genérica sobre todos os princípios administrativos, perde aderência ao problema.',
    examSignals: ['segundo o texto', 'infere-se', 'depreende-se', 'o autor defende', 'mantém o sentido', 'sem alteração semântica', 'ideia central'],
    solvingSteps: ['Identifique o comando.', 'Localize o trecho.', 'Defina tese e relação lógica.', 'Elimine distorções.', 'Confirme se a alternativa depende do texto.'],
    traps: ['Alternativa com palavra igual ao texto, mas sentido diferente.', 'Alternativa juridicamente correta, mas não sustentada pelo texto.', 'Palavras absolutas como sempre, nunca, todos, apenas.', 'Confundir exemplo com tese.'],
    commonErrors: ['Responder por memória ou opinião.', 'Ignorar o comando.', 'Não reler o trecho.', 'Marcar a mais completa em vez da mais fiel.'],
    discursiveUse: 'Na discursiva, comece delimitando o problema exatamente como o enunciado trouxe. Isso evita responder outro tema e melhora a nota em estrutura e aplicação ao caso.',
    miniQuestion: {
      statement: 'Se o texto afirma que “a publicidade oficial não pode promover pessoalmente o gestor”, a alternativa correta é:',
      options: ['A publicidade oficial sempre é proibida.', 'A publicidade oficial pode existir, mas não pode servir à promoção pessoal.', 'A promoção pessoal é permitida se houver interesse público.', 'A publicidade dispensa finalidade informativa.'],
      answer: 'B',
      comment: 'O texto não proibiu toda publicidade; proibiu o uso promocional pessoal.'
    },
    exercises: ['Diferencie assunto e tese em um parágrafo curto.', 'Marque três palavras de comando em questões antigas.', 'Crie uma alternativa extrapolada para um texto simples e explique o erro.'],
    finalMemory: 'Leia comando → volte ao texto → ache tese → elimine distorções → marque a alternativa fiel.'
  },

  'tipologia-generos': {
    label: 'aula didática profunda',
    concept: 'Tipologia textual é o modo de organização do texto. Gênero textual é a forma social concreta que o texto assume. Um parecer jurídico é gênero; dentro dele pode haver exposição, argumentação e conclusão.',
    whyExists: 'A banca cobra esse tema para verificar se você entende a finalidade do texto: narrar fatos, descrever características, explicar ideias, defender tese ou orientar conduta.',
    howItWorks: [
      'Narração apresenta fatos em sequência temporal, com acontecimentos.',
      'Descrição apresenta características de pessoa, objeto, lugar ou situação.',
      'Exposição explica um tema de modo informativo.',
      'Argumentação defende uma tese com fundamentos.',
      'Injunção orienta comportamento, usando comandos ou instruções.'
    ],
    mainRules: ['Tipo textual é estrutura predominante.', 'Gênero textual depende da situação comunicativa.', 'Um mesmo gênero pode misturar tipos.', 'Em prova, a finalidade do texto é mais importante que o nome decorado.'],
    simpleExample: {
      prompt: '“O servidor apresentou defesa em 10 de março. Depois, a comissão ouviu testemunhas.”',
      right: 'Predomina narração, porque há sequência de fatos.',
      wrong: 'Dizer que é argumentação só porque fala de processo é erro.',
      explanation: 'O critério é a forma de organização textual, não o assunto jurídico.'
    },
    municipalExample: 'Um parecer da Procuradoria costuma expor fatos, explicar normas e argumentar pela providência adequada. Saber isso ajuda a escrever respostas discursivas com relatório, fundamentação e conclusão.',
    examSignals: ['predomina no texto', 'finalidade comunicativa', 'gênero textual', 'tipo textual', 'texto injuntivo', 'texto argumentativo'],
    solvingSteps: ['Pergunte qual é a finalidade.', 'Veja se há sequência de fatos, características, tese ou instrução.', 'Identifique o gênero concreto.', 'Cuidado com textos mistos.'],
    traps: ['Confundir tema com tipo textual.', 'Achar que todo texto jurídico é argumentativo.', 'Ignorar comandos verbais que indicam injunção.', 'Confundir artigo de opinião com notícia.'],
    commonErrors: ['Decorar nomes sem olhar função.', 'Não perceber predominância.', 'Marcar gênero quando a questão pede tipo.'],
    discursiveUse: 'Na discursiva, use estrutura predominantemente dissertativo-argumentativa: delimite o problema, fundamente, aplique ao caso e conclua.',
    miniQuestion: {
      statement: 'Um texto que orienta o candidato a preencher formulário, juntar documentos e protocolar pedido é predominantemente:',
      options: ['narrativo', 'injuntivo', 'descritivo', 'poético'],
      answer: 'B',
      comment: 'Há orientação de conduta, característica do tipo injuntivo.'
    },
    exercises: ['Classifique um edital, uma notícia e um parecer.', 'Explique a diferença entre gênero e tipo.', 'Identifique a parte argumentativa de um parecer.'],
    finalMemory: 'Tipo é modo de organizar; gênero é forma social concreta.'
  },

  'coesao-coerencia': {
    label: 'aula didática profunda',
    concept: 'Coesão é a ligação formal entre partes do texto. Coerência é a lógica global do sentido. Um texto pode ter conectivos e ainda ser incoerente se as ideias se contradizem.',
    whyExists: 'Esse tema existe porque a prova testa se você entende relações entre frases: causa, consequência, oposição, conclusão, condição, finalidade, adição e retomada de referentes.',
    howItWorks: [
      'Coesão referencial retoma termos por pronomes, sinônimos, elipse ou expressões equivalentes.',
      'Coesão sequencial liga ideias por conectivos e ordenadores argumentativos.',
      'Coerência exige que as ideias não se contradigam e sigam uma progressão lógica.',
      'Conectivo errado muda o sentido: “portanto” conclui; “contudo” opõe; “porque” explica causa.'
    ],
    mainRules: ['Pronome precisa ter referente claro.', 'Conectivo deve combinar com a relação lógica.', 'Coerência depende de contexto e progressão.', 'Ambiguidade de referência prejudica clareza.'],
    simpleExample: {
      prompt: '“O ato é ilegal, portanto deve ser anulado.”',
      right: '“Portanto” indica conclusão coerente.',
      wrong: '“O ato é ilegal, contudo deve ser anulado.” O conectivo de oposição não combina com a lógica.',
      explanation: 'A consequência jurídica decorre da ilegalidade; logo, conectivo conclusivo é adequado.'
    },
    municipalExample: 'Em parecer, escrever “o contrato tem vício grave; contudo, recomenda-se anulação” enfraquece a lógica. Melhor: “por isso, recomenda-se anulação”.',
    examSignals: ['conectivo', 'referente', 'coesão', 'coerência', 'retoma', 'substitui', 'mantém o sentido'],
    solvingSteps: ['Identifique as ideias ligadas.', 'Pergunte se há causa, oposição ou conclusão.', 'Ache o referente dos pronomes.', 'Teste substituição sem mudar sentido.'],
    traps: ['Trocar “porém” por “portanto”.', 'Pronome com dois possíveis referentes.', 'Conectivo bonito, mas logicamente errado.', 'Coerência quebrada por contradição interna.'],
    commonErrors: ['Decorar lista de conectivos sem entender relação lógica.', 'Não voltar ao termo retomado.', 'Ignorar pontuação junto com conectivo.'],
    discursiveUse: 'Use conectivos para guiar o corretor: inicialmente, além disso, contudo, portanto, desse modo, em conclusão.',
    miniQuestion: {
      statement: 'Em “A defesa foi apresentada tempestivamente; portanto, deve ser analisada”, o conectivo indica:',
      options: ['oposição', 'conclusão', 'adição', 'condição'],
      answer: 'B',
      comment: '“Portanto” apresenta conclusão decorrente da frase anterior.'
    },
    exercises: ['Troque três conectivos e explique a mudança de sentido.', 'Ache o referente de cinco pronomes em um texto.', 'Reescreva frase incoerente corrigindo a lógica.'],
    finalMemory: 'Coesão liga; coerência faz sentido.'
  },

  'classes-palavras': {
    label: 'aula didática profunda',
    concept: 'Classes de palavras são categorias gramaticais que indicam função e comportamento das palavras no contexto: substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição, conjunção e interjeição.',
    whyExists: 'A banca usa morfologia para cobrar sentido, concordância, regência, valor do “que”, valor do “se”, conectivos e mudança de classe conforme o contexto.',
    howItWorks: [
      'Substantivo nomeia seres, fatos, ideias e institutos.',
      'Adjetivo caracteriza ou qualifica o substantivo.',
      'Verbo indica ação, estado, fenômeno ou processo.',
      'Advérbio modifica verbo, adjetivo ou outro advérbio.',
      'Pronome retoma, substitui ou acompanha nomes.',
      'Conjunção liga orações ou termos e cria relação lógica.',
      'Preposição liga termos e pode alterar regência.'
    ],
    mainRules: ['A classe depende do contexto.', '“Que” pode ser pronome, conjunção ou partícula.', '“Se” pode ser índice de indeterminação, pronome apassivador, conjunção condicional etc.', 'Advérbios podem alterar fortemente o sentido da alternativa.'],
    simpleExample: {
      prompt: '“O justo deve orientar a decisão.”',
      right: '“Justo” funciona como substantivo, pois vem determinado por artigo.',
      wrong: 'Dizer que sempre é adjetivo é erro.',
      explanation: 'A classe gramatical muda conforme o uso na frase.'
    },
    municipalExample: 'Em norma municipal, uma palavra como “poderá” indica faculdade; “deverá” indica obrigação. A classe verbal e o modo de expressão alteram o dever jurídico.',
    examSignals: ['classe gramatical', 'valor morfológico', 'função da palavra', 'termo destacado', 'que', 'se', 'onde', 'porque'],
    solvingSteps: ['Leia a palavra no contexto.', 'Veja o termo que ela acompanha ou retoma.', 'Pergunte se nomeia, caracteriza, liga, modifica ou indica ação.', 'Teste substituição.'],
    traps: ['Classificar palavra isolada.', 'Achar que “onde” serve para qualquer retomada.', 'Confundir conjunção com pronome relativo.', 'Ignorar valor semântico do verbo modal.'],
    commonErrors: ['Decorar classe fixa.', 'Não analisar função na frase.', 'Confundir advérbio com adjetivo.', 'Usar “onde” sem ideia de lugar.'],
    discursiveUse: 'Escolha palavras precisas: “poderá” quando houver discricionariedade; “deverá” quando houver imposição legal; “recomenda-se” em parecer cauteloso.',
    miniQuestion: {
      statement: 'Na frase “A Administração deve motivar seus atos”, a palavra “deve” indica:',
      options: ['faculdade', 'obrigação', 'dúvida', 'lugar'],
      answer: 'B',
      comment: 'O verbo modal “deve” expressa imposição/dever.'
    },
    exercises: ['Classifique “que” em três frases diferentes.', 'Explique diferença entre poderá e deverá.', 'Corrija uso inadequado de onde.'],
    finalMemory: 'Classe não é etiqueta fixa: depende da função no contexto.'
  },

  'sintaxe': {
    label: 'aula didática profunda',
    concept: 'Sintaxe estuda a função dos termos na oração e a relação entre orações. É a base para pontuação, concordância, regência e clareza textual.',
    whyExists: 'A banca cobra sintaxe porque muitos erros de vírgula, concordância e interpretação só aparecem quando você identifica sujeito, verbo, complemento, adjuntos e orações.',
    howItWorks: [
      'Sujeito é o termo sobre o qual se declara algo.',
      'Predicado é a declaração feita sobre o sujeito.',
      'Objeto direto completa verbo sem preposição obrigatória.',
      'Objeto indireto completa verbo com preposição exigida.',
      'Complemento nominal completa nome abstrato, adjetivo ou advérbio.',
      'Adjunto adnominal caracteriza ou determina substantivo.',
      'Adjunto adverbial indica circunstância.',
      'Oração coordenada tem independência sintática; subordinada depende de outra oração.'
    ],
    mainRules: ['Não se separa sujeito do verbo por vírgula.', 'Não se separa verbo do complemento direto por vírgula.', 'Adjunto adverbial deslocado pode vir isolado por vírgula.', 'Oração explicativa costuma ser isolada por vírgulas.'],
    simpleExample: {
      prompt: '“O Procurador analisou o processo.”',
      right: 'Sujeito: O Procurador. Verbo: analisou. Objeto direto: o processo.',
      wrong: '“O Procurador, analisou o processo.” Errado: separou sujeito e verbo.',
      explanation: 'A sintaxe mostra por que a vírgula é proibida nesse ponto.'
    },
    municipalExample: 'Em parecer, identificar corretamente sujeito e complemento evita ambiguidade: “O Município notificou a empresa” é diferente de “A empresa notificou o Município”.',
    examSignals: ['sujeito', 'predicado', 'objeto', 'complemento', 'adjunto', 'oração subordinada', 'função sintática'],
    solvingSteps: ['Ache o verbo.', 'Pergunte quem pratica/sofre a ação.', 'Veja se o verbo exige complemento.', 'Identifique circunstâncias.', 'Analise orações ligadas.'],
    traps: ['Sujeito posposto confundido com objeto.', 'Complemento nominal confundido com adjunto adnominal.', 'Oração explicativa x restritiva.', 'Vírgula separando termos essenciais.'],
    commonErrors: ['Procurar sujeito antes de achar verbo.', 'Ignorar preposição exigida.', 'Confundir termo acessório com essencial.'],
    discursiveUse: 'Frases sintaticamente claras facilitam correção. Prefira períodos médios, sujeito claro e verbo próximo do sujeito.',
    miniQuestion: {
      statement: 'Em “Compete ao Município fiscalizar obras”, “ao Município” exerce ideia de:',
      options: ['sujeito simples comum', 'termo ligado à competência/destinatário da atribuição', 'objeto direto', 'vocativo'],
      answer: 'B',
      comment: 'A estrutura indica a quem compete a atribuição; não é objeto direto.'
    },
    exercises: ['Ache o sujeito de cinco frases.', 'Identifique objeto direto e indireto.', 'Explique por que não há vírgula entre sujeito e verbo.'],
    finalMemory: 'Ache o verbo; depois organize os termos ao redor dele.'
  },

  'pontuacao': {
    label: 'aula didática profunda',
    concept: 'Pontuação é o conjunto de sinais usados para organizar o texto, separar termos, marcar relações sintáticas, indicar pausas lógicas e produzir efeitos de sentido. A vírgula é o sinal mais cobrado porque muda clareza, ritmo e sentido.',
    whyExists: 'Pontuação existe para evitar ambiguidade e mostrar como as partes da frase se relacionam. Na prova, a banca testa vírgula obrigatória, proibida, facultativa e mudança de sentido.',
    howItWorks: [
      'Use vírgula em enumerações: “O parecer analisou competência, motivo, forma e finalidade”.',
      'Use vírgula para isolar vocativo: “Senhor Secretário, encaminho o parecer”.',
      'Use vírgula para isolar aposto explicativo: “Itupeva, município paulista, realizou concurso”.',
      'Use vírgula com adjunto adverbial deslocado quando for longo ou quando a clareza recomendar: “No processo administrativo, o servidor apresentou defesa”.',
      'Use vírgula em orações explicativas: “O ato, que não foi motivado, pode ser anulado”.',
      'Não use vírgula entre sujeito e verbo: “O servidor apresentou defesa”.',
      'Não use vírgula entre verbo e complemento: “A Administração anulou o ato”.'
    ],
    mainRules: ['Vírgula não é pausa de respiração; é marca sintática.', 'Sujeito e verbo não devem ser separados por vírgula.', 'Verbo e complemento não devem ser separados por vírgula.', 'Oração explicativa tem vírgula; oração restritiva, em regra, não.', 'Dois-pontos anunciam explicação, enumeração ou citação.', 'Ponto e vírgula separa partes coordenadas extensas ou itens complexos.'],
    simpleExample: {
      prompt: '“No processo administrativo, o servidor apresentou defesa.”',
      right: 'Correto: adjunto adverbial deslocado no início foi isolado.',
      wrong: '“O servidor, apresentou defesa.” Errado: separou sujeito e verbo.',
      explanation: 'A vírgula organiza deslocamentos e explicações, mas não pode quebrar termos essenciais.'
    },
    municipalExample: 'Em um despacho, “A empresa, que descumpriu o contrato, será notificada” indica que a empresa descumpriu. Já “A empresa que descumpriu o contrato será notificada” restringe: só a empresa inadimplente será notificada.',
    examSignals: ['vírgula obrigatória', 'vírgula facultativa', 'vírgula proibida', 'efeito de sentido', 'oração explicativa', 'oração restritiva', 'pontuação mantém o sentido'],
    solvingSteps: ['Ache sujeito, verbo e complemento.', 'Veja se há termo deslocado.', 'Identifique aposto, vocativo ou enumeração.', 'Verifique se a oração é explicativa ou restritiva.', 'Teste se a vírgula muda o sentido.'],
    traps: ['Vírgula entre sujeito e verbo.', 'Vírgula entre verbo e objeto.', 'Confundir explicativa com restritiva.', 'Achar que toda pausa oral vira vírgula.', 'Ignorar mudança de sentido causada pela pontuação.'],
    commonErrors: ['Pontuar por ouvido.', 'Separar termos essenciais.', 'Não isolar vocativo.', 'Não perceber aposto explicativo.'],
    discursiveUse: 'Use pontuação para clareza: períodos menores, enumerações bem separadas e conclusão limpa. Evite frases longas demais na resposta discursiva.',
    miniQuestion: {
      statement: 'Assinale a frase com pontuação correta:',
      options: ['O Município, deve motivar seus atos.', 'No processo administrativo, o servidor apresentou defesa.', 'A Administração anulou, o ato ilegal.', 'O Procurador, emitiu parecer.'],
      answer: 'B',
      comment: 'A vírgula isola adjunto adverbial deslocado. As outras separam sujeito/verbo ou verbo/complemento.'
    },
    exercises: ['Crie três frases com adjunto adverbial deslocado.', 'Corrija três vírgulas entre sujeito e verbo.', 'Explique a diferença entre oração explicativa e restritiva.'],
    finalMemory: 'Vírgula não é respiração: é lógica sintática.'
  },

  'concordancia-regencia-crase': {
    label: 'aula didática profunda',
    concept: 'Concordância ajusta palavras em número, pessoa e gênero. Regência estuda a relação de dependência entre termos e suas preposições. Crase é a fusão da preposição “a” com artigo “a” ou pronome iniciado por “a”.',
    whyExists: 'A banca cobra esse tema porque ele combina norma culta, sintaxe e sentido. Também afeta a qualidade da discursiva.',
    howItWorks: [
      'Concordância verbal liga verbo ao sujeito: “Os servidores apresentaram defesa”.',
      'Concordância nominal liga adjetivos, artigos e pronomes ao substantivo: “decisões motivadas”.',
      'Regência verbal pergunta: o verbo exige preposição? “Assistir ao julgamento” no sentido de presenciar.',
      'Regência nominal pergunta: o nome exige preposição? “compatível com”, “favorável a”.',
      'Crase ocorre quando há preposição “a” + artigo “a”: “à Administração”, “à lei”, “às normas”.'
    ],
    mainRules: ['Verbo concorda com o núcleo do sujeito.', 'Verbo haver no sentido de existir fica impessoal.', 'Verbo fazer indicando tempo decorrido fica impessoal.', 'Crase não ocorre antes de verbo.', 'Crase não ocorre antes de palavra masculina, salvo expressão com palavra feminina subentendida.', 'Crase pode ser testada trocando por masculino: à lei → ao regulamento.'],
    simpleExample: {
      prompt: '“Cabe à Administração motivar seus atos.”',
      right: 'Há crase: cabe a + a Administração.',
      wrong: '“Cabe a Administração motivar seus atos” perde a marca da regência.',
      explanation: 'O verbo/expressão exige preposição e o substantivo admite artigo feminino.'
    },
    municipalExample: 'Em parecer, “recomenda-se à Secretaria que instaure processo” usa crase porque quem recomenda recomenda algo a alguém; Secretaria admite artigo feminino.',
    examSignals: ['concordância', 'regência', 'crase', 'verbo haver', 'verbo fazer', 'termo regente', 'preposição exigida'],
    solvingSteps: ['Ache o núcleo do sujeito.', 'Confira o verbo.', 'Veja se o termo exige preposição.', 'Teste a crase com masculino.', 'Procure casos proibidos.'],
    traps: ['“Houveram problemas” no sentido de existir.', 'Crase antes de verbo.', 'Crase antes de masculino.', 'Concordar com palavra próxima em vez do núcleo.', 'Regência mudando sentido do verbo.'],
    commonErrors: ['Decorar crase sem analisar regência.', 'Ignorar sujeito posposto.', 'Confundir “assistir o” e “assistir ao”.'],
    discursiveUse: 'Erros de concordância e crase passam impressão de baixa técnica. Revise especialmente frases com Administração, Secretaria, Câmara, lei, norma e decisão.',
    miniQuestion: {
      statement: 'Assinale a forma correta:',
      options: ['Houveram irregularidades.', 'Fazem três anos que o contrato acabou.', 'Cabe à Administração motivar o ato.', 'O parecer é favorável a anulação.'],
      answer: 'C',
      comment: 'Há crase em “à Administração”. Haver/fazer impessoais ficam no singular; “favorável à anulação” teria crase.'
    },
    exercises: ['Faça o teste do masculino em cinco casos de crase.', 'Corrija frases com haver e fazer.', 'Liste cinco nomes que exigem preposição.'],
    finalMemory: 'Concordância olha o núcleo; regência olha a preposição; crase junta preposição + artigo.'
  },

  'ortografia-acentuacao-semantica': {
    label: 'aula didática profunda',
    concept: 'Ortografia trata da escrita correta; acentuação, dos sinais gráficos; semântica, do sentido; figuras de linguagem, dos efeitos expressivos; vícios de linguagem, dos usos inadequados que prejudicam clareza.',
    whyExists: 'Esse conteúdo aparece em prova objetiva e também pesa na discursiva, porque erro de grafia, sentido ou ambiguidade reduz clareza e credibilidade.',
    howItWorks: [
      'Acentuação segue posição da sílaba tônica e regras de oxítonas, paroxítonas, proparoxítonas e hiatos.',
      'Hífen segue o Acordo Ortográfico e deve ser conferido em casos duvidosos.',
      'Parônimos são parecidos na forma, mas diferentes no sentido: mandato x mandado.',
      'Homônimos têm mesma forma ou som, mas sentidos diferentes.',
      'Denotação é sentido literal; conotação é sentido figurado.',
      'Ambiguidade ocorre quando uma frase admite mais de uma leitura.'
    ],
    mainRules: ['Proparoxítonas são acentuadas.', 'Paroxítonas têm várias regras específicas.', 'Oxítonas terminadas em a, e, o, em, ens são acentuadas.', 'Use VOLP/ABL para grafia oficial quando houver dúvida.', 'Evite ambiguidade na redação jurídica.'],
    simpleExample: {
      prompt: '“O mandado foi cumprido.” x “O mandato terminou.”',
      right: 'Mandado é ordem judicial/administrativa; mandato é período ou autorização representativa.',
      wrong: 'Trocar as duas palavras muda o sentido.',
      explanation: 'Parônimos são pegadinha comum em provas e textos jurídicos.'
    },
    municipalExample: 'Em parecer, confundir “descrição” com “discrição” ou “mandado” com “mandato” pode alterar completamente o sentido técnico.',
    examSignals: ['grafia correta', 'acentuação', 'sentido da palavra', 'parônimos', 'homônimos', 'figura de linguagem', 'ambiguidade'],
    solvingSteps: ['Leia a palavra no contexto.', 'Verifique sentido técnico.', 'Aplique regra de acentuação.', 'Elimine opções com vício de linguagem.', 'Prefira forma clara e objetiva.'],
    traps: ['Mandado x mandato.', 'Descrição x discrição.', 'Ratificar x retificar.', 'Emergir x imergir.', 'Ambiguidade por pronome mal colocado.'],
    commonErrors: ['Acentuar por memória visual.', 'Usar palavra parecida sem conferir sentido.', 'Criar frase ambígua com “seu/sua”.'],
    discursiveUse: 'Na discursiva, prefira vocabulário simples e técnico. Evite figura de linguagem excessiva; parecer jurídico exige clareza, não ornamentação.',
    miniQuestion: {
      statement: 'Na frase “O parecer deve ___ o erro material”, a palavra adequada é:',
      options: ['ratificar', 'retificar', 'retalhar', 'retardar'],
      answer: 'B',
      comment: 'Retificar é corrigir. Ratificar é confirmar.'
    },
    exercises: ['Explique cinco pares de parônimos.', 'Reescreva frase ambígua.', 'Liste três figuras de linguagem e seus efeitos.'],
    finalMemory: 'Palavra parecida não é palavra equivalente; sentido técnico decide.'
  },

  'redacao-oficial-juridica': {
    label: 'aula didática profunda',
    concept: 'Redação oficial e linguagem jurídica são formas de comunicação técnica, clara, impessoal, objetiva e adequada à Administração Pública. Na discursiva, isso se transforma em resposta organizada com problema, fundamento, aplicação e conclusão.',
    whyExists: 'Procurador precisa escrever parecer, informação, manifestação, contestação e resposta técnica. A banca quer ver raciocínio jurídico claro, não texto bonito sem estrutura.',
    howItWorks: [
      'Clareza: o leitor entende sem esforço.',
      'Concisão: o texto diz o necessário sem rodeios.',
      'Impessoalidade: evita opinião pessoal e promoção.',
      'Formalidade: usa padrão culto sem exagero rebuscado.',
      'Estrutura discursiva: relatório breve, fundamentação, aplicação ao caso e conclusão/providência.',
      'Parecer jurídico: identifica consulta, delimita questão, analisa norma, aplica ao fato e recomenda providência.'
    ],
    mainRules: ['Não fuja do caso concreto.', 'Não escreva parágrafos enormes.', 'Evite “eu acho”.', 'Use conectivos jurídicos.', 'Conclua com providência prática.', 'Fundamente com lei, princípio ou entendimento.'],
    simpleExample: {
      prompt: 'Enunciado: ato sem motivação adequada.',
      right: '“Há vício de motivação, pois o ato não explicita fatos e fundamentos. Recomenda-se nova decisão motivada ou anulação, conforme o caso.”',
      wrong: '“A Administração é importante e deve agir certo.”',
      explanation: 'A resposta correta delimita problema, fundamento e providência; a errada é genérica.'
    },
    municipalExample: 'Em consulta sobre contrato, o parecer deve dizer se há base legal, se o processo está instruído, qual risco existe e qual providência a Secretaria deve adotar.',
    examSignals: ['redação oficial', 'parecer', 'linguagem jurídica', 'clareza', 'concisão', 'impessoalidade', 'resposta discursiva'],
    solvingSteps: ['Leia o problema.', 'Delimite a dúvida jurídica.', 'Cite fundamento central.', 'Aplique ao caso.', 'Conclua com providência.'],
    traps: ['Resumo bonito sem responder.', 'Citar muitos princípios sem aplicar.', 'Conclusão vaga.', 'Texto pessoal ou emotivo.', 'Repetir enunciado sem análise.'],
    commonErrors: ['Não concluir.', 'Não dizer a providência.', 'Escrever tudo em um parágrafo.', 'Usar linguagem rebuscada para esconder falta de fundamento.'],
    discursiveUse: 'Use fórmula segura: “Trata-se de...”; “O ponto jurídico central é...”; “À luz de...”; “No caso concreto...”; “Conclui-se que...”; “Recomenda-se...”.',
    miniQuestion: {
      statement: 'Em resposta discursiva de Procurador, qual estrutura é mais segura?',
      options: ['Opinião pessoal, citação longa e encerramento sem providência.', 'Problema, fundamento, aplicação ao caso e conclusão prática.', 'Apenas transcrição de lei.', 'Introdução extensa e ausência de conclusão.'],
      answer: 'B',
      comment: 'A banca valoriza raciocínio aplicado e providência jurídica clara.'
    },
    exercises: ['Transforme um caso em problema jurídico.', 'Escreva uma conclusão com providência.', 'Reescreva frase pessoal em linguagem impessoal.'],
    finalMemory: 'Boa discursiva de Procurador é clara, fundamentada, aplicada ao caso e conclusiva.'
  }
};

export function getDeepDidacticLesson(subjectId, topicId) {
  if (subjectId === 'lingua-portuguesa') return portugueseDeepLessons[topicId] || null;
  return null;
}

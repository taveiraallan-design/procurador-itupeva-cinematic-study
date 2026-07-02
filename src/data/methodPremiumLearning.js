
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
  const specific = subject?.id === 'lingua-portuguesa' ? getPortugueseSpecific(topic) : null;
  const base = specific || buildGenericSpecific(subject, topic);
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

import { completeStudyContent } from './completeStudyContent';

const baseMaterial = {
  'lingua-portuguesa': {
    overview: 'Português deve ser usado como ferramenta de ponto seguro: interpretar exatamente o que o enunciado pede, eliminar extrapolações e escrever respostas jurídicas sem ruído gramatical.',
    mandatoryReadings: [
      'Regras de acentuação, hífen e ortografia pelo Novo Acordo Ortográfico.',
      'Pontuação: vírgula, ponto e vírgula, dois-pontos, travessão e pontuação em orações subordinadas.',
      'Concordância verbal e nominal, regência verbal e nominal, crase e colocação pronominal.',
      'Coesão, coerência, reescrita de frases, conectores e relações lógico-semânticas.'
    ],
    miniHandbook: [
      { title: 'Interpretação sem extrapolar', body: 'Leia primeiro o comando. Procure saber se a pergunta quer ideia central, inferência, sentido de expressão, finalidade do texto ou reescrita. A alternativa errada costuma exagerar, reduzir, inverter ou acrescentar uma informação que não está autorizada pelo texto.' },
      { title: 'Conectores mandam no sentido', body: 'Conectores indicam causa, consequência, oposição, conclusão, concessão, explicação ou adição. Quando a banca troca “embora” por “porque”, “portanto” por “contudo” ou “ainda que” por “visto que”, o sentido muda.' },
      { title: 'Gramática aplicada', body: 'Não estude classes de palavras isoladamente. Observe função no período: o “que” pode ser pronome relativo, conjunção integrante ou termo expletivo; o “se” pode ser partícula apassivadora, índice de indeterminação ou pronome reflexivo.' }
    ],
    legalMap: [
      { ref: 'Norma culta', use: 'Base para reescrita, correção gramatical e discursiva.', trap: 'Escolher alternativa que “soa bonita”, mas muda o sentido.' },
      { ref: 'Pontuação', use: 'Separar adjuntos, orações explicativas e enumerações.', trap: 'Vírgula entre sujeito e verbo sem intercalação.' },
      { ref: 'Regência e crase', use: 'Verbos como assistir, visar, implicar, preferir e obedecer.', trap: 'Aplicar crase antes de verbo, palavra masculina ou pronome sem exigência.' }
    ],
    reviewQuestions: ['Qual é a tese central do texto?', 'A alternativa extrapola ou apenas parafraseia?', 'O conector preserva a relação lógica?', 'A reescrita mantém concordância, regência e sentido?'],
    practicalDrills: ['Resolver 15 questões de interpretação antes de gramática.', 'Reescrever 5 períodos mantendo sentido.', 'Fazer uma lista dos 20 conectores mais cobrados.', 'Corrigir uma resposta discursiva própria só pela gramática.']
  },
  'direito-constitucional': {
    overview: 'A matéria serve para validar atos e leis municipais: competência, direitos fundamentais, controle de constitucionalidade, organização do Estado e funções essenciais.',
    mandatoryReadings: ['CF/88, arts. 1º a 5º.', 'CF/88, arts. 18, 23, 24, 29 e 30.', 'CF/88, art. 37.', 'CF/88, arts. 59 a 69.', 'Leis 9.868/1999 e 9.882/1999.'],
    miniHandbook: [
      { title: 'Autonomia municipal', body: 'Município possui auto-organização, autogoverno, autoadministração e competência legislativa, mas não tem soberania. Em prova de Procurador, o ponto central é saber se o assunto é de interesse local ou se há competência suplementar.' },
      { title: 'Controle de constitucionalidade', body: 'Separe controle difuso/concreto e controle concentrado/abstrato. Em parecer, identifique parâmetro, objeto, órgão competente, legitimidade e efeitos. A prova confunde ADI, ADC, ADPF e reserva de plenário.' },
      { title: 'Direitos fundamentais', body: 'Direitos fundamentais não são absolutos. Em atos municipais, a Administração deve compatibilizar legalidade, proporcionalidade, contraditório, ampla defesa, acesso à informação e proteção de dados quando aplicável.' }
    ],
    legalMap: [
      { ref: 'CF/88, art. 30', use: 'Competência municipal e interesse local.', trap: 'Tratar interesse local como autorização para invadir competência federal ou estadual.' },
      { ref: 'CF/88, art. 37', use: 'Princípios da Administração Pública.', trap: 'Confundir legalidade administrativa com liberdade privada.' },
      { ref: 'CF/88, arts. 102 e 103', use: 'Controle concentrado e legitimados.', trap: 'Achar que qualquer pessoa pode propor ADI.' }
    ],
    reviewQuestions: ['O tema é de interesse local?', 'Há competência suplementar?', 'O ato respeitou direitos fundamentais?', 'Cabe controle de legalidade ou constitucionalidade?'],
    practicalDrills: ['Fazer quadro de competências da CF.', 'Explicar autonomia municipal em 60 segundos.', 'Montar tabela ADI/ADC/ADPF/ADO.', 'Treinar parecer sobre lei municipal potencialmente inconstitucional.']
  },
  'direito-administrativo': {
    overview: 'É o coração da prova de Procurador: atos administrativos, poderes, agentes públicos, licitações, contratos, controle, responsabilidade e regime jurídico.',
    mandatoryReadings: ['CF/88, art. 37.', 'Lei 14.133/2021.', 'Lei 8.429/1992.', 'Lei 9.784/1999 como referência geral de processo administrativo.', 'Lei 12.527/2011.', 'Lei 13.709/2018.'],
    miniHandbook: [
      { title: 'Ato administrativo', body: 'Todo ato deve ser analisado por competência, finalidade, forma, motivo e objeto. Vício de legalidade leva à anulação; conveniência e oportunidade de ato válido levam à revogação; vício sanável pode admitir convalidação.' },
      { title: 'Poderes administrativos', body: 'Poder hierárquico organiza a estrutura interna; poder disciplinar sanciona vínculos especiais; poder regulamentar detalha a lei; poder de polícia limita propriedade e liberdade em favor do interesse público.' },
      { title: 'Licitações e contratos', body: 'Na Lei 14.133/2021, foque em planejamento, fases, modalidades, critérios de julgamento, contratação direta, gestão contratual, alterações, sanções e controle. A banca cobra exceções e confunde dispensa com inexigibilidade.' }
    ],
    legalMap: [
      { ref: 'Lei 14.133/2021', use: 'Licitação, contratação direta e contratos administrativos.', trap: 'Usar lógica antiga sem verificar a nova lei.' },
      { ref: 'Lei 8.429/1992', use: 'Improbidade administrativa.', trap: 'Ignorar exigências subjetivas e categorias atualizadas.' },
      { ref: 'Lei 12.527/2011 e LGPD', use: 'Transparência e dados pessoais.', trap: 'Tratar sigilo ou publicidade como absolutos.' }
    ],
    reviewQuestions: ['O caso é legalidade ou mérito?', 'O vício é sanável?', 'Há poder de polícia?', 'A contratação direta é dispensa ou inexigibilidade?', 'Qual providência o Procurador recomenda?'],
    practicalDrills: ['Resolver questões só de atos administrativos.', 'Fazer quadro de poderes administrativos.', 'Ler contratação direta na Lei 14.133.', 'Escrever parecer curto sobre anulação x revogação.']
  },
  'processo-civil-civil': {
    overview: 'A prova cobra CPC e Civil com foco em Fazenda Pública, pareceres, prazos, defesa judicial do Município, responsabilidade civil, contratos, prescrição e execução.',
    mandatoryReadings: ['CPC: normas fundamentais, competência, sujeitos, atos, tutela provisória e recursos.', 'CPC: Fazenda Pública em juízo, remessa necessária, cumprimento de sentença e execução.', 'Código Civil: LINDB, pessoas, bens, fatos jurídicos, obrigações, contratos, responsabilidade e direitos reais.'],
    miniHandbook: [
      { title: 'Fazenda Pública em juízo', body: 'Estude prazos, intimação, remessa necessária, honorários, cumprimento de sentença, precatórios/RPV e execução fiscal em diálogo com o CPC. O Município aparece como parte e precisa de estratégia processual.' },
      { title: 'Tutela provisória', body: 'Separe urgência e evidência. Em defesa municipal, analise probabilidade do direito, perigo de dano, reversibilidade e interesse público. Na discursiva, sempre conecte o pedido à consequência prática.' },
      { title: 'Civil aplicado ao Município', body: 'Responsabilidade civil, contratos, prescrição, decadência, propriedade, posse e obrigações aparecem em desapropriação, indenização, inadimplemento, cobrança e conflitos patrimoniais.' }
    ],
    legalMap: [
      { ref: 'CPC', use: 'Defesa judicial, recursos e execução contra/da Fazenda.', trap: 'Esquecer prerrogativas e limites da Fazenda Pública.' },
      { ref: 'LINDB', use: 'Decisão administrativa e consequência prática.', trap: 'Decidir abstratamente sem considerar consequências.' },
      { ref: 'Código Civil', use: 'Responsabilidade, contratos e prescrição.', trap: 'Confundir prescrição e decadência.' }
    ],
    reviewQuestions: ['Há prazo ou prerrogativa da Fazenda Pública?', 'Cabe remessa necessária?', 'O caso envolve prescrição?', 'A responsabilidade é contratual ou extracontratual?', 'Qual peça/manifestação seria adequada?'],
    practicalDrills: ['Fazer mapa do processo comum.', 'Resolver 10 questões de recursos.', 'Treinar peça de manifestação municipal.', 'Montar quadro prescrição x decadência.']
  },
  'penal-processo-penal': {
    overview: 'Para Procurador, a matéria tende a aparecer conectada a Administração Pública, crimes funcionais, finanças públicas, ordem tributária e noções processuais penais.',
    mandatoryReadings: ['Código Penal: parte geral e crimes contra a Administração Pública.', 'Código de Processo Penal: inquérito, ação penal, competência, provas, prisões, nulidades e recursos.', 'Lei de Abuso de Autoridade.', 'Lei de Organização Criminosa.', 'Crimes contra ordem tributária e finanças públicas.'],
    miniHandbook: [
      { title: 'Crimes contra a Administração Pública', body: 'Domine peculato, concussão, corrupção passiva, prevaricação, advocacia administrativa, resistência, desobediência, desacato e corrupção ativa. A banca troca sujeito ativo, vantagem indevida e momento consumativo.' },
      { title: 'Parte geral com foco em prova', body: 'Estude fato típico, ilicitude, culpabilidade, concurso de pessoas, tentativa, consumação, erro, prescrição e pena. Não tente decorar tudo: foque nos institutos que explicam crime funcional.' },
      { title: 'Processo penal essencial', body: 'Conheça inquérito, ação penal, competência, prova, nulidades, prisão, medidas cautelares e recursos. A prova cobra conceitos e diferenças, não estratégia criminal aprofundada.' }
    ],
    legalMap: [
      { ref: 'Código Penal', use: 'Parte geral e crimes funcionais.', trap: 'Confundir concussão com corrupção passiva.' },
      { ref: 'CPP', use: 'Investigação, ação penal, provas e recursos.', trap: 'Tratar inquérito como processo com contraditório pleno.' },
      { ref: 'Leis penais especiais', use: 'Administração, ordem tributária e finanças públicas.', trap: 'Ignorar elemento subjetivo e sujeito ativo.' }
    ],
    reviewQuestions: ['Quem é o sujeito ativo?', 'Há vantagem indevida?', 'O crime é próprio ou comum?', 'O ato ocorreu antes ou depois da vantagem?', 'O vício processual gera nulidade?'],
    practicalDrills: ['Fazer quadro concussão x corrupção passiva.', 'Resolver crimes contra Administração.', 'Revisar nulidades e provas.', 'Treinar conceitos de inquérito e ação penal.']
  },
  'tributario-financeiro-orcamentario': {
    overview: 'Matéria estratégica para Município: tributos municipais, crédito tributário, dívida ativa, execução fiscal, orçamento, responsabilidade fiscal e receitas públicas.',
    mandatoryReadings: ['CF/88: sistema tributário nacional.', 'CTN: obrigação, crédito, lançamento, suspensão, extinção, exclusão e garantias.', 'Lei de Execução Fiscal.', 'Lei de Responsabilidade Fiscal.', 'Normas gerais de direito financeiro e orçamento público.'],
    miniHandbook: [
      { title: 'Crédito tributário', body: 'Estude a vida do crédito: fato gerador, obrigação, lançamento, constituição, suspensão, extinção, exclusão, garantias, privilégios, inscrição em dívida ativa e execução fiscal.' },
      { title: 'Tributos municipais', body: 'IPTU, ISS, ITBI, taxas e contribuição de melhoria são núcleo municipal. Foque competência, base de cálculo, sujeito passivo, fato gerador, imunidades e limitações ao poder de tributar.' },
      { title: 'Financeiro e orçamento', body: 'Entenda PPA, LDO, LOA, receita, despesa, créditos adicionais, responsabilidade fiscal, renúncia de receita, despesa com pessoal e controle. Procurador precisa enxergar risco fiscal.' }
    ],
    legalMap: [
      { ref: 'CTN', use: 'Obrigação, crédito e administração tributária.', trap: 'Confundir suspensão, extinção e exclusão do crédito.' },
      { ref: 'LEF', use: 'Execução fiscal e dívida ativa.', trap: 'Ignorar requisitos da CDA e prescrição.' },
      { ref: 'LRF', use: 'Responsabilidade fiscal e limites.', trap: 'Desconsiderar impacto orçamentário.' }
    ],
    reviewQuestions: ['Qual tributo municipal está em jogo?', 'O crédito foi constituído?', 'Há causa de suspensão ou extinção?', 'A CDA está regular?', 'Existe risco fiscal/orçamentário?'],
    practicalDrills: ['Desenhar ciclo do crédito tributário.', 'Fazer tabela IPTU/ISS/ITBI.', 'Resolver execução fiscal.', 'Escrever parecer sobre cobrança municipal.']
  },
  'trabalho-processo-trabalho': {
    overview: 'Importante para demandas contra o Município: vínculo, terceirização, verbas, jornada, responsabilidade subsidiária, processo do trabalho e atuação da Administração.',
    mandatoryReadings: ['CLT: contrato, jornada, salário, extinção e processo do trabalho.', 'Constituição: direitos sociais e Administração Pública.', 'Temas de terceirização e responsabilidade da Administração Pública.', 'Noções de segurança e saúde do trabalho.'],
    miniHandbook: [
      { title: 'Relação de emprego', body: 'Domine pessoalidade, não eventualidade, subordinação e onerosidade. Em Administração Pública, cuidado com contratação sem concurso, terceirização e limites para reconhecimento de vínculo.' },
      { title: 'Verbas e jornada', body: 'Revise salário, remuneração, adicionais, férias, 13º, horas extras, intervalos, banco de horas e verbas rescisórias. A prova cobra cálculo conceitual e hipóteses de cabimento.' },
      { title: 'Processo do trabalho', body: 'Foque competência, reclamação, defesa, audiência, provas, sentença, recursos e execução. Para Procurador, entenda prazos, defesa do ente público e responsabilidade em terceirização.' }
    ],
    legalMap: [
      { ref: 'CLT', use: 'Relação de emprego e processo do trabalho.', trap: 'Aplicar regra privada sem considerar Administração Pública.' },
      { ref: 'CF/88, art. 37', use: 'Concurso, cargos, empregos e funções.', trap: 'Reconhecer vínculo público sem concurso como se fosse regra comum.' },
      { ref: 'Jurisprudência trabalhista', use: 'Terceirização e responsabilidade subsidiária.', trap: 'Presumir responsabilidade automática sem análise de fiscalização.' }
    ],
    reviewQuestions: ['Há vínculo direto com o Município?', 'Houve concurso?', 'Existe terceirização?', 'Qual verba está sendo cobrada?', 'Há prova de fiscalização contratual?'],
    practicalDrills: ['Fazer quadro empregado x servidor.', 'Resolver questões de terceirização.', 'Revisar prazos e recursos trabalhistas.', 'Treinar defesa municipal em reclamação trabalhista.']
  },
  'direito-urbanistico': {
    overview: 'Urbanístico é matéria municipal por excelência: plano diretor, uso do solo, zoneamento, regularização, função social e poder de polícia urbana.',
    mandatoryReadings: ['CF/88: política urbana.', 'Estatuto da Cidade.', 'Plano Diretor e legislação urbanística local quando disponível.', 'Normas de parcelamento, uso e ocupação do solo.', 'Instrumentos de regularização urbana.'],
    miniHandbook: [
      { title: 'Função social da cidade e da propriedade', body: 'A propriedade urbana deve atender às exigências fundamentais de ordenação da cidade. Plano Diretor, zoneamento e instrumentos urbanísticos concretizam essa função social.' },
      { title: 'Poder de polícia urbanístico', body: 'Município licencia, fiscaliza, embarga, multa, interdita e pode determinar demolição quando houver irregularidade. A prova cobra competência municipal e devido processo administrativo.' },
      { title: 'Regularização e sanções', body: 'Regularização fundiária não é anistia irrestrita. Analise interesse público, segurança, meio ambiente, requisitos legais, participação e impactos urbanísticos.' }
    ],
    legalMap: [
      { ref: 'Estatuto da Cidade', use: 'Instrumentos de política urbana.', trap: 'Confundir instrumento urbanístico com sanção.' },
      { ref: 'Plano Diretor', use: 'Diretrizes locais de ordenação urbana.', trap: 'Ignorar que legislação local concretiza a política urbana.' },
      { ref: 'Poder de polícia municipal', use: 'Licenciamento, fiscalização e sanção.', trap: 'Aplicar sanção sem procedimento e motivação.' }
    ],
    reviewQuestions: ['O Município tem competência?', 'Há norma urbanística local?', 'O imóvel cumpre função social?', 'A medida exige processo administrativo?', 'Há impacto ambiental ou vizinhança?'],
    practicalDrills: ['Fazer mapa do licenciamento urbano.', 'Revisar instrumentos do Estatuto da Cidade.', 'Treinar parecer sobre obra irregular.', 'Comparar embargo, multa e demolição.']
  },
  'direito-ambiental': {
    overview: 'Ambiental aparece em licenciamento, fiscalização, responsabilidade, competências municipais, áreas protegidas, saneamento e crimes ambientais.',
    mandatoryReadings: ['CF/88, art. 225.', 'Política Nacional do Meio Ambiente.', 'Lei de Crimes Ambientais.', 'Código Florestal e áreas protegidas em noções gerais.', 'Normas de licenciamento, saneamento e responsabilidade ambiental.'],
    miniHandbook: [
      { title: 'Princípios ambientais', body: 'Prevenção, precaução, poluidor-pagador, usuário-pagador, desenvolvimento sustentável, informação e participação orientam a atuação administrativa e judicial.' },
      { title: 'Responsabilidade ambiental', body: 'A responsabilidade ambiental pode ter dimensões civil, administrativa e penal. Na civil, foque reparação integral e nexo com dano; na administrativa, auto de infração, defesa e sanção; na penal, tipicidade.' },
      { title: 'Licenciamento e fiscalização municipal', body: 'O Município atua conforme competência e interesse local, especialmente em impacto local, fiscalização, posturas, saneamento e ordenamento territorial.' }
    ],
    legalMap: [
      { ref: 'CF/88, art. 225', use: 'Direito ao meio ambiente equilibrado.', trap: 'Tratar proteção ambiental como opção política sem dever jurídico.' },
      { ref: 'PNMA', use: 'Licenciamento, responsabilidade e instrumentos ambientais.', trap: 'Confundir licença ambiental com autorização urbanística.' },
      { ref: 'Lei de Crimes Ambientais', use: 'Sanções penais e administrativas.', trap: 'Misturar responsabilidade civil, administrativa e penal.' }
    ],
    reviewQuestions: ['Há dano ambiental?', 'Qual esfera de responsabilidade?', 'O Município tem competência?', 'Cabe licenciamento ou fiscalização?', 'Há medida preventiva?'],
    practicalDrills: ['Fazer quadro civil/administrativa/penal.', 'Revisar princípios ambientais.', 'Treinar parecer sobre embargo ambiental.', 'Estudar licenciamento e EIA/RIMA.']
  },
  'legislacao-municipal': {
    overview: 'Lei local é diferencial de Procurador Municipal. O foco é estrutura do Município, competências, agentes, servidores, cargos, administração e normas próprias de Itupeva.',
    mandatoryReadings: ['Lei Orgânica do Município.', 'Estatuto dos Servidores Públicos Municipais.', 'Plano de Cargos e Carreiras dos Servidores Municipais.', 'Reorganização da Estrutura Administrativa.', 'Leis Complementares indicadas no edital.'],
    miniHandbook: [
      { title: 'Lei Orgânica', body: 'Estude como se fosse a Constituição municipal: competências, Câmara, Prefeito, processo legislativo, administração, fiscalização, orçamento e participação popular.' },
      { title: 'Servidores municipais', body: 'Foque provimento, vacância, direitos, deveres, responsabilidades, processo disciplinar, penalidades, licenças, remuneração e regras de carreira.' },
      { title: 'Estrutura administrativa', body: 'Entenda órgãos, secretarias, competências internas, atribuições, hierarquia e fluxo decisório. Para Procurador, isso ajuda a identificar competência e validade dos atos.' }
    ],
    legalMap: [
      { ref: 'Lei Orgânica Municipal', use: 'Competência local, processo legislativo e organização municipal.', trap: 'Confundir regra federal/estadual com regra orgânica local.' },
      { ref: 'Estatuto dos Servidores', use: 'Direitos, deveres, PAD e regime funcional.', trap: 'Aplicar CLT quando o caso é estatutário.' },
      { ref: 'Estrutura administrativa', use: 'Competência de órgãos e autoridades.', trap: 'Ignorar quem tinha competência para praticar o ato.' }
    ],
    reviewQuestions: ['Qual órgão municipal é competente?', 'A regra está na Lei Orgânica ou no Estatuto?', 'Há vício de competência?', 'O servidor tem direito estatutário?', 'O ato respeitou procedimento local?'],
    practicalDrills: ['Ler Lei Orgânica por títulos.', 'Fazer mapa Câmara x Prefeito.', 'Revisar deveres e penalidades dos servidores.', 'Treinar parecer sobre ato de autoridade municipal.']
  }
};

function slug(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function buildBlockMaterials(subject) {
  return subject.blocks.map((block, index) => ({
    id: `${subject.id}-${index + 1}-${slug(block.title)}`,
    title: block.title,
    objective: `Estudar ${block.title.toLowerCase()} com foco em prova objetiva, discursiva e atuação de Procurador Municipal.`,
    readingPath: [
      `1. Leia os tópicos do bloco: ${block.topics.slice(0, 4).join('; ')}${block.topics.length > 4 ? '...' : '.'}`,
      `2. Consulte a base legal da matéria: ${subject.lawBase.join(' | ')}.`,
      '3. Faça marcação de palavras-chave, exceções e competências.',
      '4. Resolva questões do tema e transforme erro em flashcard.',
      '5. Feche com uma resposta de 8 a 12 linhas explicando o tema como parecer.'
    ],
    explanation: [
      `Este bloco deve ser estudado de forma ativa. Não basta ler o título: você precisa explicar o conceito, identificar requisitos, memorizar exceções e aplicar em caso concreto.`,
      `Na prova objetiva, a cobrança tende a vir por troca de conceitos, inversão de competência, exceção tratada como regra ou alternativa com palavra absoluta.`,
      `Na discursiva, o bloco deve virar raciocínio: fato relevante, regra jurídica, aplicação ao caso, consequência prática e conclusão.`
    ],
    checklist: [
      'Li a base legal indicada.',
      'Sei explicar o tema sem olhar.',
      'Identifiquei pelo menos 3 pegadinhas.',
      'Resolvi questões do tema.',
      'Consigo usar o tema em uma resposta discursiva.'
    ],
    microQuestions: [
      `Qual é a regra principal de ${block.title}?`,
      'Quais são os requisitos, elementos ou fases?',
      'Qual exceção a banca pode transformar em regra?',
      'Como esse tema aparece em um parecer municipal?',
      'Qual erro eu não posso cometer nesse assunto?'
    ],
    bankTraps: block.howBankCharges || [],
    topicList: block.topics || [],
    discursiveUse: block.discursiveUse || 'Use o tema como fundamento de legalidade, competência e providência prática.'
  }));
}

export const studyMaterials = completeStudyContent.map((subject) => {
  const custom = baseMaterial[subject.id] || {};
  return {
    ...subject,
    overview: custom.overview || subject.mission,
    mandatoryReadings: custom.mandatoryReadings || subject.lawBase,
    miniHandbook: custom.miniHandbook || [],
    legalMap: custom.legalMap || [],
    reviewQuestions: custom.reviewQuestions || [],
    practicalDrills: custom.practicalDrills || [],
    blockMaterials: buildBlockMaterials(subject)
  };
});

export function getMaterialStats(progress = {}) {
  const total = studyMaterials.reduce((sum, subject) => sum + subject.blockMaterials.length, 0);
  const done = Object.values(progress.completedBlocks || {}).flat().length;
  return { total, done, percent: Math.round((done / Math.max(total, 1)) * 100) };
}

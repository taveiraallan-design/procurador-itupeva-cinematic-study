import { completeStudyContent } from './completeStudyContent';

const enrichment = {
  'lingua-portuguesa': {
    focus: 'Ler o enunciado com precisão, interpretar textos jurídicos e escrever respostas claras, coesas e gramaticalmente seguras.',
    mustRead: ['Regras de acentuação e pontuação', 'Concordância e regência', 'Colocação pronominal', 'Coesão, coerência e reescrita de frases'],
    foundation: [
      'Português não deve ser estudado apenas como gramática solta. Para prova de Procurador, a prioridade é interpretação de texto, reescrita correta e domínio da norma culta aplicada a textos administrativos e jurídicos.',
      'A banca costuma explorar pequenas alterações de sentido: troca de conector, mudança de pontuação, substituição de pronome e reordenação de períodos. O treino deve ser sempre com comparação entre alternativas.',
      'Na discursiva, Português aparece como nota invisível: clareza, coesão, concordância, regência e pontuação melhoram a compreensão da tese jurídica e evitam perda de ponto por forma.'
    ],
    essayBridge: 'Use parágrafos curtos, conectores precisos e conclusão objetiva. Evite frases longas demais e termos sem função jurídica.',
    activeRecall: ['Qual é a tese central do texto?', 'Que palavra ou expressão o pronome retoma?', 'A troca do conector mudou causa, consequência, oposição ou concessão?', 'A reescrita preserva o sentido original?']
  },
  'direito-constitucional': {
    focus: 'Dominar Constituição, direitos fundamentais, controle de constitucionalidade, repartição de competências e autonomia municipal.',
    mustRead: ['CF/88: arts. 1º a 5º', 'CF/88: arts. 18, 23, 24, 29 e 30', 'CF/88: arts. 37, 59 a 69', 'Leis 9.868/1999 e 9.882/1999'],
    foundation: [
      'Direito Constitucional é a base de validade da atuação municipal. Para Procurador, a pergunta central quase sempre é: o Município tinha competência, respeitou direitos fundamentais e observou a Constituição?',
      'A autonomia municipal não é soberania. O Município integra a Federação e possui autogoverno, auto-organização, autoadministração e competência legislativa de interesse local, além de competência suplementar quando cabível.',
      'Controle de constitucionalidade deve ser estudado com quadro comparativo: modalidade, legitimados, objeto, parâmetro, efeitos e órgão julgador. A prova gosta de trocar controle difuso por concentrado e confundir ADI, ADC e ADPF.'
    ],
    essayBridge: 'Em parecer sobre lei municipal, comece por competência constitucional, interesse local, eventual suplementação e compatibilidade material com direitos fundamentais.',
    activeRecall: ['O tema é competência municipal, estadual ou federal?', 'Há direito fundamental afetado?', 'O caso exige controle de legalidade ou constitucionalidade?', 'A norma municipal suplementa ou invade competência?']
  },
  'direito-administrativo': {
    focus: 'Atos, poderes, agentes, licitações, contratos, responsabilidade civil, controle e regime jurídico-administrativo.',
    mustRead: ['CF/88: art. 37', 'Lei 14.133/2021', 'Lei 8.429/1992', 'Lei 9.784/1999 como referência geral', 'Lei 12.527/2011', 'Lei 13.709/2018'],
    foundation: [
      'Direito Administrativo é o núcleo do cargo. O Procurador precisa separar legalidade de mérito: ato ilegal é anulado; ato válido, mas inconveniente ou inoportuno, pode ser revogado.',
      'Em atos administrativos, memorize cinco elementos: competência, finalidade, forma, motivo e objeto. Depois aprenda o efeito do vício: convalidação quando sanável; anulação quando insanável; revogação quando o ato é válido e o problema é mérito.',
      'Licitações e contratos devem ser estudados pela Lei 14.133/2021 com foco em princípios, fases, modalidades, contratação direta, gestão contratual, alterações, sanções e controle. A banca explora exceções e inversões de fase.'
    ],
    essayBridge: 'Na discursiva, estruture: relatório dos fatos, regra jurídica, aplicação ao caso, providência administrativa/judicial e conclusão.',
    activeRecall: ['O problema é legalidade ou mérito?', 'O vício é sanável?', 'Há competência do agente?', 'Há interesse público primário?', 'A contratação direta foi justificada?']
  },
  'processual-civil-civil': {
    focus: 'Processo Civil aplicado à Fazenda Pública, defesa do Município, recursos, execução, precedentes e bases de Direito Civil.',
    mustRead: ['CPC: normas fundamentais', 'CPC: competência e sujeitos', 'CPC: tutela provisória', 'CPC: Fazenda Pública em juízo', 'CPC: recursos e cumprimento de sentença', 'LINDB'],
    foundation: [
      'Processo Civil deve ser estudado com mentalidade de defesa do Município. O foco é prazo, competência, tutela provisória, contestação, provas, sentença, recursos, cumprimento de sentença e execução fiscal/contra Fazenda quando cabível.',
      'Para Fazenda Pública, atenção a prazos, remessa necessária, honorários, cumprimento de sentença, precatórios/RPV, tutela provisória contra o Poder Público e precedentes vinculantes.',
      'Direito Civil entra como base de responsabilidade, obrigações, contratos, propriedade, prescrição e LINDB. Em parecer municipal, a LINDB é importante para segurança jurídica, motivação e consequências práticas da decisão.'
    ],
    essayBridge: 'Em peça ou tese defensiva, organize preliminares, mérito, prova, pedidos e eventual tutela/efeito suspensivo.',
    activeRecall: ['Há preliminar processual?', 'Qual é o prazo da Fazenda?', 'Cabe remessa necessária?', 'Há precedente vinculante?', 'A pretensão prescreveu?']
  },
  'penal-processual-penal': {
    focus: 'Noções penais e processuais penais relevantes para Administração Pública, crimes funcionais e defesa institucional.',
    mustRead: ['Código Penal: parte geral', 'CP: crimes contra a Administração Pública', 'CPP: inquérito, ação penal, provas e recursos', 'Lei de Abuso de Autoridade', 'Crimes contra a ordem tributária'],
    foundation: [
      'Penal e Processo Penal não costumam ser o eixo de Procurador Municipal, mas podem aparecer em crimes contra a Administração, abuso de autoridade, crimes tributários, improbidade em diálogo com penal e procedimentos investigativos.',
      'Na parte geral, domine fato típico, ilicitude, culpabilidade, concurso de pessoas, penas e extinção da punibilidade. A banca cobra conceitos e distinções.',
      'Em processo penal, estude inquérito, ação penal, competência, provas, prisões, medidas cautelares, sentença, recursos e habeas corpus. Para Administração, atenção a reflexos de ilícitos funcionais.'
    ],
    essayBridge: 'Em parecer, evite concluir criminalmente sem elementos. Indique apuração, encaminhamento ao órgão competente e preservação de provas.',
    activeRecall: ['O fato é ilícito administrativo, civil, penal ou todos?', 'Há dolo exigido?', 'Há crime funcional?', 'Qual órgão deve apurar?', 'Existe reflexo na esfera administrativa?']
  },
  'tributario-financeiro-orcamentario': {
    focus: 'Tributos municipais, crédito tributário, dívida ativa, execução fiscal, orçamento, responsabilidade fiscal e finanças públicas.',
    mustRead: ['CF/88: Sistema Tributário Nacional', 'CTN', 'Lei 6.830/1980', 'Lei de Responsabilidade Fiscal', 'Lei 4.320/1964', 'Normas municipais tributárias quando indicadas'],
    foundation: [
      'Para Procurador Municipal, Tributário é matéria estratégica. O Município vive de ISS, IPTU, ITBI, taxas, contribuição de melhoria, dívida ativa e execução fiscal.',
      'Estude obrigação tributária, fato gerador, sujeito ativo/passivo, lançamento, crédito tributário, suspensão, extinção, exclusão, garantias, privilégios e administração tributária.',
      'Financeiro e Orçamentário exigem visão de legalidade da despesa pública: PPA, LDO, LOA, créditos adicionais, receita, despesa, controle, responsabilidade fiscal, renúncia de receita e limites.'
    ],
    essayBridge: 'Em parecer tributário, identifique competência, hipótese de incidência, legalidade estrita, lançamento, cobrança e risco de nulidade.',
    activeRecall: ['Qual tributo municipal está em jogo?', 'Há lei anterior instituindo?', 'O lançamento foi válido?', 'O crédito está suspenso/extinto?', 'Há impacto orçamentário ou renúncia?']
  },
  'trabalho-processo-trabalho': {
    focus: 'Relações de trabalho, vínculos com Administração Pública, terceirização, responsabilidade, verbas e processo trabalhista.',
    mustRead: ['CLT: contrato, jornada, salário e rescisão', 'CF/88: art. 37 e art. 7º', 'Súmulas e teses sobre Administração Pública e terceirização', 'Regras de processo do trabalho'],
    foundation: [
      'Trabalho e Processo do Trabalho para Procurador Municipal exige foco em vínculos com a Administração, concurso público, terceirização, responsabilidade subsidiária, verbas trabalhistas e defesa em reclamações trabalhistas.',
      'A banca costuma explorar diferença entre empregado público, servidor estatutário, contratado temporário, terceirizado e cargo em comissão.',
      'No processo do trabalho, revise competência, reclamação trabalhista, audiência, provas, recursos, execução, prazos e peculiaridades da Fazenda Pública quando aplicáveis.'
    ],
    essayBridge: 'Em defesa trabalhista, separe preliminares, ausência de vínculo, regime jurídico, prova documental, verbas efetivamente devidas e responsabilidade do ente.',
    activeRecall: ['Há concurso público?', 'Qual é o regime jurídico?', 'É servidor, empregado ou terceirizado?', 'Existe fiscalização do contrato?', 'Quais verbas são discutidas?']
  },
  'direito-urbanistico': {
    focus: 'Política urbana, Estatuto da Cidade, plano diretor, parcelamento, uso do solo, regularização fundiária e poder de polícia urbanístico.',
    mustRead: ['CF/88: arts. 182 e 183', 'Estatuto da Cidade', 'Normas municipais de plano diretor, uso e ocupação do solo e posturas', 'Legislação de regularização fundiária quando indicada'],
    foundation: [
      'Urbanístico é matéria típica de Procurador Municipal. O Município disciplina uso do solo, zoneamento, posturas, licenciamento, fiscalização, regularização e sanções.',
      'Estude o Estatuto da Cidade por instrumentos: plano diretor, parcelamento/edificação/utilização compulsórios, IPTU progressivo, desapropriação, outorga onerosa, direito de preempção, operações urbanas e estudo de impacto de vizinhança.',
      'A prova gosta de confundir poder de polícia urbanístico com desapropriação, licença com autorização, interesse local com invasão de competência federal/estadual.'
    ],
    essayBridge: 'Em parecer urbanístico, comece pela competência municipal, Plano Diretor/lei local, devido processo, proporcionalidade e providência fiscalizatória.',
    activeRecall: ['O Município tem competência?', 'O ato é licença, autorização ou sanção?', 'Há processo administrativo?', 'O plano diretor exige algo?', 'A medida é proporcional?']
  },
  'direito-ambiental': {
    focus: 'Princípios ambientais, competências, licenciamento, responsabilidade, poder de polícia e crimes ambientais.',
    mustRead: ['CF/88: art. 225', 'Lei 6.938/1981', 'Lei 9.605/1998', 'Código Florestal', 'Normas de saneamento e licenciamento', 'Normas municipais ambientais quando indicadas'],
    foundation: [
      'Ambiental deve ser estudado com lógica de prevenção, precaução, poluidor-pagador, responsabilidade objetiva e competência comum dos entes federativos.',
      'Para Município, o foco é poder de polícia ambiental local, licenciamento de impacto local, fiscalização, sanções administrativas, proteção urbana e integração com urbanístico.',
      'Responsabilidade ambiental tem três esferas independentes: civil, administrativa e penal. A civil tende à objetividade e reparação integral do dano.'
    ],
    essayBridge: 'Em parecer ambiental, indique competência, risco/dano, necessidade de licenciamento/estudo, medidas preventivas, sanção e reparação.',
    activeRecall: ['É prevenção ou reparação?', 'Há impacto local?', 'Qual órgão licencia?', 'A responsabilidade é civil, administrativa ou penal?', 'Há dano ambiental comprovado?']
  },
  'legislacao-municipal': {
    focus: 'Lei Orgânica, Estatuto dos Servidores, cargos/carreiras, estrutura administrativa e normas municipais expressamente indicadas.',
    mustRead: ['Lei Orgânica do Município de Itupeva', 'Estatuto dos Servidores Públicos Municipais', 'Plano de Cargos e Carreiras', 'Lei Complementar nº 389/2015', 'Lei Complementar nº 551/2024'],
    foundation: [
      'Legislação Municipal é diferencial competitivo. Muitos candidatos estudam Direito geral e deixam lei local por último; em concurso municipal isso pode decidir classificação.',
      'Lei Orgânica deve ser estudada como “Constituição Municipal”: competências, Câmara, Prefeito, processo legislativo, administração, servidores, finanças, ordem econômica, urbana e social.',
      'Estatuto e carreira exigem atenção a provimento, posse, exercício, estágio probatório, direitos, deveres, responsabilidades, processo disciplinar, vantagens, licenças e vacância.'
    ],
    essayBridge: 'Em parecer municipal, sempre verifique primeiro a lei local: competência do órgão, procedimento, autoridade competente e forma do ato.',
    activeRecall: ['Qual lei local rege o caso?', 'A autoridade municipal era competente?', 'O procedimento foi respeitado?', 'Há prazo ou requisito específico?', 'A estrutura administrativa permite esse ato?']
  }
};

function buildLessonModules(subject) {
  const extra = enrichment[subject.id] || {};
  return subject.blocks.map((block, index) => ({
    id: `${subject.id}-aula-${index + 1}`,
    title: block.title,
    estimatedMinutes: 22 + Math.min(18, block.topics.length * 2),
    objective: `Ao final desta aula, você deve conseguir explicar ${block.title.toLowerCase()} em linguagem jurídica clara e resolver questões que misturem conceito, lei seca e caso concreto.`,
    explanation: [
      `Este bloco pertence à disciplina ${subject.subject} e deve ser estudado como parte do núcleo ${subject.group.toLowerCase()} do edital. O foco não é decorar lista: é saber reconhecer o tema dentro de um enunciado e escolher a consequência jurídica correta.`,
      `Comece pelos conceitos centrais: ${block.topics.slice(0, 4).join(', ')}. Depois avance para as exceções e para as pegadinhas, porque a banca costuma transformar detalhe técnico em alternativa aparentemente correta.`,
      `Na prática de Procurador, esse conteúdo serve para emitir parecer, defender o Município, analisar legalidade de ato administrativo, orientar gestor público ou construir tese em peça judicial.`,
    ],
    topics: block.topics,
    howToStudy: block.howToStudy || [],
    bankCharges: block.howBankCharges || [],
    discursiveUse: block.discursiveUse,
    checklist: [
      'Li a explicação da aula sem pular tópicos.',
      'Consegui falar o tema em voz alta em até 2 minutos.',
      'Revisei a base legal ou referência normativa do bloco.',
      'Fiz ligação com questão objetiva e discursiva.',
      'Identifiquei pelo menos uma pegadinha provável.'
    ],
    questionsToAsk: [
      `Qual é a definição operacional de ${block.title}?`,
      'Qual detalhe a banca poderia inverter em uma alternativa?',
      'Qual seria a providência jurídica correta em um caso concreto?',
      'Como esse tema apareceria em parecer de Procurador Municipal?'
    ],
    activeRecall: extra.activeRecall || []
  }));
}

export const writtenLessons = completeStudyContent.map((subject) => {
  const extra = enrichment[subject.id] || {};
  return {
    ...subject,
    focus: extra.focus || subject.mission,
    mustRead: extra.mustRead || subject.lawBase,
    foundation: extra.foundation || [subject.mission],
    essayBridge: extra.essayBridge || 'Use o conteúdo para organizar resposta discursiva com relatório, fundamento, aplicação e conclusão.',
    activeRecall: extra.activeRecall || [],
    lessonModules: buildLessonModules(subject)
  };
});

export function getLessonStats(progress = {}) {
  const total = writtenLessons.reduce((sum, subject) => sum + subject.lessonModules.length, 0);
  const done = Object.values(progress.completedLessons || {}).flat().length;
  return { total, done, percent: Math.round((done / Math.max(total, 1)) * 100) };
}

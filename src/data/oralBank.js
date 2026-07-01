export const oralThemes = [
  {
    id: 'lei-organica',
    title: 'Lei Orgânica Municipal',
    subject: 'Lei Local',
    difficulty: 'alta',
    questions: [
      {
        id: 'lom-1',
        prompt: 'Explique, em 60 segundos, a autonomia municipal e como ela aparece em questão de Procurador.',
        expected: ['autonomia política, administrativa, financeira e legislativa', 'interesse local', 'suplementação da legislação federal e estadual', 'limites constitucionais'],
        trap: 'falar em soberania municipal, quando o correto é autonomia.',
        ideal: 'O Município possui autonomia, e não soberania. Essa autonomia se manifesta na auto-organização pela Lei Orgânica, na eleição de Prefeito e Vereadores, na administração de seus serviços e na instituição/arrecadação de tributos próprios. A cobrança costuma explorar o interesse local e a competência suplementar, sempre dentro dos limites da Constituição Federal e da Constituição Estadual.',
      },
      {
        id: 'lom-2',
        prompt: 'Como você diferenciaria competência privativa da Câmara e competência do Prefeito em um parecer?',
        expected: ['função legislativa/fiscalizatória', 'chefia do Executivo', 'iniciativa reservada', 'sanção/veto', 'controle político'],
        trap: 'atribuir ao Legislativo função administrativa típica do Executivo.',
        ideal: 'A Câmara exerce função legislativa, fiscalizatória e de controle político, enquanto o Prefeito exerce a chefia do Executivo, direção superior da Administração e execução das políticas públicas. Em parecer, é essencial verificar se há iniciativa reservada ao Chefe do Executivo, especialmente quando o projeto interfere em organização administrativa, servidores ou orçamento.',
      },
    ],
  },
  {
    id: 'administrativo',
    title: 'Atos Administrativos',
    subject: 'Administrativo',
    difficulty: 'altíssima',
    questions: [
      {
        id: 'adm-1',
        prompt: 'Explique a diferença entre anulação, revogação e convalidação de ato administrativo.',
        expected: ['anulação por ilegalidade', 'revogação por mérito', 'convalidação de vício sanável', 'competência/forma', 'efeitos'],
        trap: 'dizer que ato ilegal deve ser revogado.',
        ideal: 'A anulação ocorre diante de ilegalidade, podendo ser feita pela Administração ou pelo Judiciário. A revogação pressupõe ato válido, mas inconveniente ou inoportuno, em juízo de mérito da Administração. A convalidação é possível quando o vício é sanável, normalmente em competência ou forma, desde que não haja prejuízo ao interesse público nem a terceiros.',
      },
      {
        id: 'adm-2',
        prompt: 'Em uma discursiva, como você estruturaria a análise dos elementos do ato administrativo?',
        expected: ['competência', 'finalidade', 'forma', 'motivo', 'objeto', 'vício sanável/insanável'],
        trap: 'confundir motivo com motivação ou ignorar finalidade pública.',
        ideal: 'Eu começaria delimitando o ato e o problema jurídico. Depois analisaria competência, finalidade, forma, motivo e objeto. Em seguida, verificaria se eventual vício é sanável ou insanável, diferenciando anulação, convalidação e revogação. A conclusão deve indicar a providência prática juridicamente adequada.',
      },
    ],
  },
  {
    id: 'tributario',
    title: 'Tributos Municipais',
    subject: 'Tributário',
    difficulty: 'alta',
    questions: [
      {
        id: 'trib-1',
        prompt: 'Quais tributos municipais você destacaria em uma resposta discursiva de Procurador?',
        expected: ['IPTU', 'ISS', 'ITBI', 'taxas', 'contribuição de melhoria', 'competência tributária municipal'],
        trap: 'misturar imposto estadual ou federal como tributo municipal.',
        ideal: 'Os principais tributos municipais são IPTU, ISS e ITBI, além de taxas decorrentes do poder de polícia ou da prestação de serviço público específico e divisível, e contribuição de melhoria. A resposta deve destacar a competência tributária municipal e o respeito às limitações constitucionais ao poder de tributar.',
      },
      {
        id: 'trib-2',
        prompt: 'Explique como o poder de polícia pode justificar a cobrança de taxa municipal.',
        expected: ['taxa', 'poder de polícia', 'atividade estatal específica', 'efetiva ou potencial', 'não confundir com imposto'],
        trap: 'tratar taxa como preço público ou cobrar taxa sem atividade estatal específica.',
        ideal: 'A taxa pode decorrer do exercício regular do poder de polícia quando há atividade estatal específica de fiscalização, controle ou licenciamento. Não se confunde com imposto, pois exige atuação estatal vinculada. A banca costuma cobrar a necessidade de especificidade e divisibilidade quando se tratar de serviço público.',
      },
    ],
  },
  {
    id: 'processo-civil',
    title: 'Processo Civil para Fazenda Pública',
    subject: 'Processo Civil',
    difficulty: 'média',
    questions: [
      {
        id: 'pc-1',
        prompt: 'Como você explicaria as prerrogativas processuais da Fazenda Pública sem exagerar na resposta?',
        expected: ['prazos diferenciados', 'remessa necessária', 'execução contra Fazenda', 'precatórios/RPV', 'interesse público'],
        trap: 'tratar prerrogativa como privilégio absoluto sem base legal.',
        ideal: 'As prerrogativas processuais da Fazenda Pública decorrem da defesa do interesse público e do regime jurídico administrativo. Devem ser citadas com precisão, como prazos diferenciados quando cabíveis, remessa necessária nas hipóteses legais e regime próprio de cumprimento de sentença, inclusive precatórios e RPV.',
      },
    ],
  },
  {
    id: 'discursiva',
    title: 'Discursiva de Procurador',
    subject: 'Técnica Discursiva',
    difficulty: 'altíssima',
    questions: [
      {
        id: 'disc-1',
        prompt: 'Defenda em voz alta a estrutura ideal de uma resposta discursiva de Procurador.',
        expected: ['relatório breve', 'problema jurídico', 'fundamentação', 'aplicação ao caso', 'conclusão prática'],
        trap: 'fazer resumo genérico sem providência final.',
        ideal: 'A resposta deve iniciar com relatório objetivo, delimitar o problema jurídico, apresentar fundamentação normativa e principiológica, aplicar os fundamentos aos fatos do caso e fechar com conclusão prática. Para Procurador, não basta conceituar: é preciso indicar a providência juridicamente segura ao Município.',
      },
    ],
  },
];

export const ORAL_PROGRESS_KEY = 'oral_juridico_progress_v1';
export const initialOralProgress = { attempts: [], mastered: {}, activeThemeId: 'administrativo' };

export function scoreOralAnswer(answer, question) {
  const normalized = String(answer || '').toLowerCase();
  const words = normalized.trim() ? normalized.trim().split(/\s+/).length : 0;
  const hitTerms = question.expected.filter((term) => normalized.includes(term.toLowerCase().split('/')[0]));
  const hasConclusion = /(portanto|assim|conclui|conclusão|logo|providência|deve|cabível)/i.test(answer || '');
  const hasStructure = /(primeiro|inicialmente|em seguida|por fim|no caso|diante disso|trata-se)/i.test(answer || '') || words >= 70;
  const clarity = Math.min(30, Math.round((words / 90) * 20) + (hasStructure ? 10 : 0));
  const foundation = Math.min(40, hitTerms.length * 8 + (normalized.includes('constitui') || normalized.includes('lei') || normalized.includes('administração') ? 6 : 0));
  const closure = hasConclusion ? 20 : 6;
  const objectivity = words >= 45 && words <= 180 ? 10 : words > 0 ? 5 : 0;
  const total = Math.max(0, Math.min(100, clarity + foundation + closure + objectivity));
  return {
    total,
    words,
    hitTerms,
    criteria: [
      { label: 'Clareza e ordem da fala', value: clarity, max: 30, hint: hasStructure ? 'Resposta organizada.' : 'Use abertura, fundamento e conclusão.' },
      { label: 'Fundamentação jurídica', value: foundation, max: 40, hint: hitTerms.length ? `Reconheceu: ${hitTerms.slice(0, 4).join(', ')}.` : 'Faltaram termos centrais do tema.' },
      { label: 'Conclusão/providência', value: closure, max: 20, hint: hasConclusion ? 'Fechamento identificado.' : 'Finalize dizendo a providência jurídica.' },
      { label: 'Objetividade', value: objectivity, max: 10, hint: words > 180 ? 'Reduza para caber no tempo de prova oral.' : 'Tamanho adequado para treino rápido.' },
    ],
    level: total >= 80 ? 'domínio forte' : total >= 60 ? 'bom, mas ajustável' : total >= 35 ? 'parcial' : 'crítico',
  };
}

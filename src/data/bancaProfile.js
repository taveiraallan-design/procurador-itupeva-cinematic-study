export const bancaModules = [
  {
    id: 'alternativas',
    title: 'Eliminação de alternativas',
    focus: 'Objetiva',
    tactics: [
      'Procure absolutos indevidos: sempre, nunca, exclusivamente.',
      'Desconfie de alternativa que troca anulação por revogação.',
      'Separe competência constitucional, lei local e ato infralegal.',
      'Antes de marcar, pergunte: qual é a exceção que a banca quer esconder?',
    ],
    drills: [
      {
        statement: 'A Administração deve revogar o ato ilegal quando verificar vício insanável.',
        answer: 'Errada',
        reason: 'Ato ilegal é anulado. Revogação trata de mérito em ato válido.',
        trap: 'troca clássica entre anulação e revogação.',
      },
      {
        statement: 'O Município possui autonomia para tratar de interesse local, respeitados os limites constitucionais.',
        answer: 'Certa',
        reason: 'Autonomia municipal envolve auto-organização, autogoverno, autoadministração e autolegislação dentro da Constituição.',
        trap: 'não confundir autonomia com soberania.',
      },
    ],
  },
  {
    id: 'discursiva',
    title: 'Padrão de discursiva',
    focus: 'Discursiva',
    tactics: [
      'Comece com relatório mínimo: não narre demais.',
      'Delimite o problema jurídico antes de conceituar.',
      'Use fundamento + aplicação ao caso + providência.',
      'Feche com conclusão operacional para o Município.',
    ],
    drills: [
      {
        statement: 'Em parecer, basta citar o conceito jurídico correto, sem apontar providência final.',
        answer: 'Errada',
        reason: 'Procurador precisa orientar a decisão administrativa com providência segura.',
        trap: 'resposta acadêmica sem conclusão prática.',
      },
      {
        statement: 'A resposta forte diferencia vício sanável, vício insanável, convalidação, anulação e revogação.',
        answer: 'Certa',
        reason: 'Essa distinção evita uma das pegadinhas mais comuns em atos administrativos.',
        trap: 'misturar legalidade com mérito administrativo.',
      },
    ],
  },
  {
    id: 'lei-local',
    title: 'Lei local e Município',
    focus: 'Lei Local',
    tactics: [
      'Leia a pergunta procurando quem é o ator: Câmara, Prefeito, servidor, contribuinte ou Administração.',
      'Quando envolver lei local, confira iniciativa, competência e impacto orçamentário.',
      'Em tributos, separe imposto, taxa e contribuição de melhoria.',
      'Em poder de polícia, procure atividade fiscalizatória específica.',
    ],
    drills: [
      {
        statement: 'Todo serviço público municipal pode ser remunerado por taxa, ainda que seja geral e indivisível.',
        answer: 'Errada',
        reason: 'Taxa de serviço exige especificidade e divisibilidade; serviços gerais não autorizam taxa nessa lógica.',
        trap: 'confundir taxa com imposto.',
      },
      {
        statement: 'Projeto parlamentar que invade organização administrativa pode ter vício de iniciativa.',
        answer: 'Certa',
        reason: 'Quando a matéria é reservada ao Chefe do Executivo, há vício formal subjetivo.',
        trap: 'ignorar iniciativa reservada.',
      },
    ],
  },
  {
    id: 'tempo-prova',
    title: 'Gestão de tempo e anti-pegadinha',
    focus: 'Estratégia',
    tactics: [
      'Resolva primeiro o que você sabe e marque dúvidas para segunda passada.',
      'Não brigue com uma questão por mais de 3 minutos na primeira volta.',
      'Na segunda leitura, sublinhe verbo de comando: pode, deve, é vedado, compete.',
      'Em discursiva, reserve tempo para conclusão e revisão final.',
    ],
    drills: [
      {
        statement: 'Em prova objetiva, vale insistir em questão difícil na primeira leitura para não voltar depois.',
        answer: 'Errada',
        reason: 'Isso consome tempo e aumenta erro por ansiedade. A estratégia é fluxo em camadas.',
        trap: 'perder pontos fáceis por travar no difícil.',
      },
    ],
  },
];

export const BANCA_PROGRESS_KEY = 'banca_examinadora_progress_v1';
export const initialBancaProgress = { completed: {}, notes: '', activeModuleId: 'alternativas' };

export function buildBancaReadiness(progress = initialBancaProgress) {
  const total = bancaModules.reduce((sum, module) => sum + module.drills.length + module.tactics.length, 0);
  const done = Object.values(progress.completed || {}).filter(Boolean).length;
  return Math.round((done / Math.max(1, total)) * 100);
}

import { completeStudyContent } from './completeStudyContent';

function riskForIndex(index, total, subjectRisk) {
  if (subjectRisk === 'Muito alto') return index < Math.ceil(total * 0.55) ? 'Muito alto' : 'Alto';
  if (subjectRisk === 'Alto') return index < Math.ceil(total * 0.45) ? 'Alto' : 'Médio';
  return index < Math.ceil(total * 0.35) ? 'Médio' : 'Baixo';
}

function goalFromBlock(block, topic, subject) {
  const bank = block.howBankCharges?.[0] || 'entender como a banca transforma este ponto em questão objetiva.';
  return `${topic}. Meta: ${block.howToStudy?.[0] || subject.mission} Pegadinha: ${bank}`;
}

export const subjectTracks = completeStudyContent.map((subject) => ({
  id: subject.id,
  name: subject.subject,
  group: subject.group,
  examWeight: subject.risk,
  priority: subject.priority,
  cinematicTheme: subject.blocks.map((block) => block.title).slice(0, 3).join(' • '),
  mission: subject.mission,
  nextAction: `Estudar ${subject.blocks[0]?.title || subject.subject}, fazer 10 questões e criar 5 flashcards dos pontos errados.`,
  simulator: subject.subject,
  topics: subject.blocks.flatMap((block, blockIndex) => block.topics.map((topic, index) => ({
    id: `${subject.id}-${blockIndex}-${index}`,
    name: topic,
    block: block.title,
    risk: riskForIndex(index, block.topics.length, subject.risk),
    goal: goalFromBlock(block, topic, subject),
  }))),
}));

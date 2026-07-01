
import { officialSyllabus } from './officialSyllabus';

export const chargingMatrix = officialSyllabus.map((subject) => {
  const highRiskTopics = subject.topics.slice(0, Math.min(6, subject.topics.length));
  const practicalSignal = ['Direito Administrativo', 'Legislação Municipal', 'Direito Tributário, Financeiro e Orçamentário', 'Direito Processual Civil e Direito Civil'].includes(subject.subject);
  return {
    subject: subject.subject,
    priority: subject.priority,
    risk: subject.risk,
    weight: subject.weight,
    targetQuestions: Math.max(12, subject.weight * 5),
    targetRevisions: subject.priority === 'Crítica' ? 4 : subject.priority === 'Alta' ? 3 : 2,
    highRiskTopics,
    strategy: practicalSignal
      ? 'Estudar teoria + lei seca + questão comentada + revisão por erro. Prioridade para aplicação prática municipal.'
      : 'Treinar reconhecimento de padrão, literalidade e eliminação de alternativas.',
  };
});

export function getPriorityPlan() {
  return [...chargingMatrix].sort((a, b) => b.weight - a.weight).slice(0, 5);
}

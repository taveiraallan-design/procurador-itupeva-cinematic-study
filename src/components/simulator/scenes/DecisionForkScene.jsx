import { Document, BadgeSeal } from './SceneParts';

export default function DecisionForkScene({ isExecuting, selectedOption }) {
  const wrong = selectedOption && !selectedOption.correct;
  return (
    <div className={`illustrated-scene decision-fork-scene ${isExecuting ? 'is-executing' : ''} ${wrong ? 'wrong-choice' : ''}`}>
      <Document label="ATO" status={wrong ? 'danger' : 'normal'} />
      <div className="fork-road">
        <span className="path-valid">sem vício</span>
        <span className="path-repair">vício sanável</span>
        <span className="path-annul">vício insanável</span>
        <span className="path-wrong">revogar ilegal</span>
      </div>
      <BadgeSeal tone={wrong ? 'red' : 'orange'}>{wrong ? 'PEGADINHA' : 'ESCOLHA O CAMINHO'}</BadgeSeal>
    </div>
  );
}

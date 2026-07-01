import { Document, BadgeSeal } from './SceneParts';

export default function ConclusionScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene conclusion-scene ${isExecuting ? 'is-executing' : ''}`}>
      <div className="mastery-board">
        <Document label="MAPA" status="created" />
        <div className="mastery-rules"><span>Anulação = ilegalidade</span><span>Revogação = mérito</span><span>Convalidação = sanável</span></div>
        <BadgeSeal tone="green">DOMÍNIO DE PROVA</BadgeSeal>
      </div>
    </div>
  );
}

import { Person, Document, Stamp, BadgeSeal, SceneCaption } from './SceneParts';

export default function AnnulmentScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene annulment-scene scene-premium ${isExecuting ? 'is-executing' : ''}`}>
      <Person role="controller" label="Controle" />
      <Document label="ATO ILEGAL" status="danger" />
      <Stamp label="ANULADO" tone="red" />
      <div className="timeline-rewind"><i /><span>efeitos revistos</span></div>
      <BadgeSeal tone="red">ILEGALIDADE</BadgeSeal>
      <SceneCaption>O carimbo correto para ato ilegal é ANULAÇÃO, não revogação.</SceneCaption>
    </div>
  );
}

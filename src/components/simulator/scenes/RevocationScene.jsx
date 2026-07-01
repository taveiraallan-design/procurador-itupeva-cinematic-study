import { Person, Document, Stamp, BadgeSeal, SceneCaption } from './SceneParts';

export default function RevocationScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene revocation-scene scene-premium ${isExecuting ? 'is-executing' : ''}`}>
      <Person role="manager" label="Gestor" />
      <Document label="ATO VÁLIDO" status="created" />
      <div className="merit-panel cinematic-merit"><strong>MÉRITO</strong><span>conveniência</span><span>oportunidade</span></div>
      <div className="future-clock"><i />futuro</div>
      <Stamp label="REVOGADO" tone="orange" />
      <BadgeSeal tone="orange">EFEITOS FUTUROS</BadgeSeal>
      <SceneCaption>Revogação encerra efeitos futuros de ato válido por conveniência e oportunidade.</SceneCaption>
    </div>
  );
}

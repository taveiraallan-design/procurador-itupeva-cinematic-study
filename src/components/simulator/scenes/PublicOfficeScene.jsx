import { PublicBuilding, Person, Document, Stamp, Desk, BadgeSeal, SceneCaption } from './SceneParts';

export default function PublicOfficeScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene public-office-scene scene-premium ${isExecuting ? 'is-executing' : ''}`}>
      <PublicBuilding label="Órgão Público" />
      <div className="window-light w1" /><div className="window-light w2" />
      <div className="office-room cinematic-office">
        <Desk />
        <Person role="authority" label="Autoridade" />
        <Person role="server" label="Servidor" />
        <Document status="created" label="ATO" />
        <div className="scene-pen writing-pen" />
        <Stamp label="ATO CRIADO" tone="cyan" />
        <BadgeSeal tone="cyan">ATO CRIADO</BadgeSeal>
        <div className="document-flight-path" />
      </div>
      <SceneCaption>O documento nasce: assinatura, carimbo e entrada no fluxo jurídico.</SceneCaption>
      <div className="scene-energy-path" />
    </div>
  );
}

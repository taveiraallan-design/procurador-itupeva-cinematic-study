import { Person, Document, LegalScanner, BadgeSeal, SceneCaption } from './SceneParts';

export default function CompetenceScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene competence-scene scene-premium ${isExecuting ? 'is-executing' : ''}`}>
      <div className="scanner-booth competence-booth">
        <Person role="authority" label="Autoridade" />
        <div className="id-card cinematic-id"><strong>ID</strong><span>atribuição legal</span></div>
        <LegalScanner label="SCANNER DE COMPETÊNCIA" tone="green" />
        <Document label="ATO" />
        <div className="approval-screen"><strong>COMPETENTE</strong><span>permissão confirmada</span></div>
        <BadgeSeal tone="green">COMPETÊNCIA CONFIRMADA</BadgeSeal>
      </div>
      <SceneCaption>O crachá é escaneado para confirmar se a autoridade podia praticar o ato.</SceneCaption>
    </div>
  );
}

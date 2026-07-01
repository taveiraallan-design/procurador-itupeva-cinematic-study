import { Document, Stamp, BadgeSeal } from './SceneParts';

export default function FormScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene form-scene ${isExecuting ? 'is-executing' : ''}`}>
      <div className="form-board">
        <Document label="FORMULÁRIO" />
        <div className="form-fields"><i /><i /><i /><i /></div>
        <div className="signature-line">assinatura</div>
        <Stamp label="PUBLICADO" tone="cyan" />
        <BadgeSeal tone="green">FORMA OK</BadgeSeal>
      </div>
    </div>
  );
}

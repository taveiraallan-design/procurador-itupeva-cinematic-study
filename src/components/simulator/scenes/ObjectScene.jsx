import { Document, BadgeSeal } from './SceneParts';

export default function ObjectScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene object-scene ${isExecuting ? 'is-executing' : ''}`}>
      <Document label="ATO" />
      <div className="legal-scale"><i /><strong>EFEITO JURÍDICO</strong></div>
      <div className="object-panel"><span>lícito</span><span>possível</span><span>determinado</span></div>
      <BadgeSeal tone="green">OBJETO VÁLIDO</BadgeSeal>
    </div>
  );
}

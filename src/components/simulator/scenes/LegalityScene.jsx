import { Document, LegalScanner, BadgeSeal } from './SceneParts';

export default function LegalityScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene legality-scene ${isExecuting ? 'is-executing' : ''}`}>
      <Document label="ATO" />
      <LegalScanner label="PORTAL DE LEGALIDADE" tone="cyan" />
      <div className="traffic-light"><i className="red"/><i className="orange"/><i className="green"/></div>
      <BadgeSeal tone="cyan">LEGALIDADE EM ANÁLISE</BadgeSeal>
    </div>
  );
}

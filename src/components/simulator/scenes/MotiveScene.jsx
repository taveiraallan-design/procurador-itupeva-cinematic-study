import { Document, LegalScanner, BadgeSeal } from './SceneParts';

export default function MotiveScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene motive-scene ${isExecuting ? 'is-executing' : ''}`}>
      <div className="evidence-wall">
        <Document label="FATOS" />
        <LegalScanner label="LUPA" tone="cyan" />
        <div className="evidence-pins"><span>prova</span><span>relatório</span><span>causa</span></div>
        <BadgeSeal tone="green">MOTIVO EXISTE</BadgeSeal>
      </div>
    </div>
  );
}

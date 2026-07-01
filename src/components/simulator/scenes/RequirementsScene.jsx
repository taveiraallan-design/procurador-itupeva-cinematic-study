import { Document, LegalScanner, BadgeSeal, SceneCaption } from './SceneParts';

const checks = ['Competência', 'Finalidade', 'Forma', 'Motivo', 'Objeto'];

export default function RequirementsScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene requirements-scene scene-premium ${isExecuting ? 'is-executing' : ''}`}>
      <div className="analysis-table requirements-lab">
        <div className="lab-title">Mesa de análise</div>
        <Document status="normal" label="ATO" />
        <LegalScanner label="LUPA JURÍDICA" />
        <div className="clipboard-panel">
          <strong>Checklist</strong>
          {checks.map((check, index) => <span key={check} className={`checkline check-${index}`}>{check}</span>)}
        </div>
        <div className="requirements-orbit">
          {checks.map((check, index) => <span key={check} className={`requirement-check check-${index}`}>{check}</span>)}
        </div>
        <BadgeSeal tone="green">REQUISITOS ANALISADOS</BadgeSeal>
      </div>
      <SceneCaption>A lupa percorre o ato e acende os cinco requisitos de validade.</SceneCaption>
    </div>
  );
}

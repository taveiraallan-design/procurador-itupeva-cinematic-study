import { Person, Document, Stamp, BadgeSeal, SceneCaption } from './SceneParts';

export default function ErrorTrapScene({ isExecuting, step }) {
  const locked = step.sceneType === 'locked-track';
  return (
    <div className={`illustrated-scene error-trap-scene scene-premium ${isExecuting ? 'is-executing' : ''}`}>
      <Person role="examiner" label="Banca" />
      <Document label={locked ? 'ATO VINCULADO' : 'ATO ILEGAL'} status="danger" />
      <div className="trap-siren"><i />PEGADINHA</div>
      <Stamp label={locked ? 'REVOGAR?' : 'REVOGAR'} tone="red" />
      <div className="blocked-symbol">✕</div>
      {locked && <div className="locked-track"><span>trilho vinculado</span></div>}
      <BadgeSeal tone="red">ERRO CLÁSSICO</BadgeSeal>
      <SceneCaption>{locked ? 'Ato vinculado não permite revogação por mérito.' : 'Ato ilegal não é revogado: deve ser anulado.'}</SceneCaption>
    </div>
  );
}

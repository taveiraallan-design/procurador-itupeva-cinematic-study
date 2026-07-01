import { Document, BadgeSeal, SceneCaption } from './SceneParts';

export default function PurposeScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene purpose-scene scene-premium ${isExecuting ? 'is-executing' : ''}`}>
      <Document label="ATO" />
      <div className="purpose-arrow good"><span /></div>
      <div className="purpose-target"><i /><strong>INTERESSE PÚBLICO</strong></div>
      <div className="purpose-detour"><span>desvio de finalidade</span></div>
      <div className="bad-route-line" />
      <BadgeSeal tone="green">ROTA CORRETA</BadgeSeal>
      <SceneCaption>A finalidade deve mirar o interesse público; a rota desviada vira risco de prova.</SceneCaption>
    </div>
  );
}

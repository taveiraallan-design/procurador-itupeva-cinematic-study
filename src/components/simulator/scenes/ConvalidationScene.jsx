import { Document, BadgeSeal } from './SceneParts';

export default function ConvalidationScene({ isExecuting }) {
  return (
    <div className={`illustrated-scene convalidation-scene ${isExecuting ? 'is-executing' : ''}`}>
      <div className="repair-bench">
        <Document label="ATO" status="cracked" />
        <div className="repair-tool">⚒</div>
        <BadgeSeal tone="green">VÍCIO SANÁVEL CORRIGIDO</BadgeSeal>
      </div>
    </div>
  );
}

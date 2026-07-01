import Badge from '../ui/Badge';

export default function StepMap({ flow, steps, currentStepId, visitedIds, onSelectStep }) {
  return (
    <div className="cin-step-map">
      <div className="section-heading compact">
        <h3>Mapa do processo</h3>
        <Badge tone="purple">{flow?.subject || 'Fluxo jurídico'}</Badge>
      </div>
      <div className="cin-step-list">
        {steps.map((step, index) => {
          const isActive = step.id === currentStepId;
          const isDone = visitedIds.includes(step.id) && !isActive;
          const isError = step.isError;
          return (
            <button
              key={step.id}
              className={`cin-step-node ${isActive ? 'active' : ''} ${isDone ? 'done' : ''} ${isError ? 'error' : ''} ${step.type === 'decision' ? 'decision' : ''}`}
              onClick={() => onSelectStep(step.id)}
              type="button"
            >
              <span className="cin-step-number">{isDone ? '✓' : index + 1}</span>
              <span>
                <strong>{step.short}</strong>
                <small>{step.type === 'decision' ? 'decisão' : step.statusLabel}</small>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

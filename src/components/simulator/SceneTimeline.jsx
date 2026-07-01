function iconFor(type) {
  const icons = {
    start: '▶',
    scene: '🎬',
    step: '➜',
    correct: '✓',
    wrong: '!',
    back: '↩',
    reset: '⟳',
    exam: '◆',
    complete: '★',
    select: '●',
  };
  return icons[type] || '•';
}

export default function SceneTimeline({ events }) {
  return (
    <section className="scene-timeline-panel">
      <div className="section-heading compact">
        <h3>Timeline de execução</h3>
        <span>{events.length ? `${events.length} eventos registrados` : 'aguardando execução'}</span>
      </div>
      <div className="scene-timeline-track">
        {events.length === 0 ? (
          <span className="timeline-chip active">Pronto para iniciar</span>
        ) : events.map((event, index) => (
          <span key={event.id || `${event.label}-${index}`} className={`timeline-chip ${event.type || ''} ${index === events.length - 1 ? 'active' : ''}`} title={event.detail || ''}>
            <b>{iconFor(event.type)}</b>
            <span>{event.label || event}</span>
            {event.time && <small>{event.time}</small>}
          </span>
        ))}
      </div>
    </section>
  );
}

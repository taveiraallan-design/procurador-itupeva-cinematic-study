import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { timelineTracks } from '../data/lawTimelineData';

const TIMELINE_PROGRESS_KEY = 'law_timeline_progress_v1';
const initialProgress = { completed: {}, notes: {}, activeTrackId: 'pad' };

function buildReviewScript(track, completedCount) {
  const phases = track.events.map((event, index) => `${index + 1}. ${event.phase}: ${event.action}`).join('\n');
  return `LINHA DO TEMPO — ${track.title}\n\nFoco de prova: ${track.focus}\nRisco central: ${track.risk}\n\nSequência correta:\n${phases}\n\nComo revisar em voz alta:\nExplique primeiro quem atua, depois qual ato é praticado, em seguida qual pegadinha a banca costuma usar. Feche dizendo qual é a consequência jurídica se a fase for feita de forma irregular.\n\nDomínio atual: ${completedCount}/${track.events.length} fases marcadas.`;
}

export default function LawTimeline({ onNavigate = () => {} }) {
  const [progress, setProgress] = useLocalStorage(TIMELINE_PROGRESS_KEY, initialProgress);
  const [selectedId, setSelectedId] = useState(progress.activeTrackId || timelineTracks[0].id);
  const [copied, setCopied] = useState(false);

  const selectedTrack = useMemo(() => timelineTracks.find((track) => track.id === selectedId) || timelineTracks[0], [selectedId]);
  const completed = progress.completed?.[selectedTrack.id] || [];
  const completedCount = completed.length;
  const percent = Math.round((completedCount / selectedTrack.events.length) * 100);
  const script = buildReviewScript(selectedTrack, completedCount);

  function selectTrack(trackId) {
    setSelectedId(trackId);
    setProgress((current) => ({ ...current, activeTrackId: trackId }));
  }

  function toggleEvent(eventId) {
    setProgress((current) => {
      const currentList = current.completed?.[selectedTrack.id] || [];
      const nextList = currentList.includes(eventId)
        ? currentList.filter((id) => id !== eventId)
        : [...currentList, eventId];
      return {
        ...current,
        completed: { ...(current.completed || {}), [selectedTrack.id]: nextList },
      };
    });
  }

  function copyScript() {
    navigator.clipboard?.writeText(script);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="page-grid timeline-page">
      <section className="mentor-hero">
        <div>
          <Badge tone="cyan">fase 26 · linha do tempo jurídica</Badge>
          <h1>Linha do Tempo Jurídica Premium</h1>
          <p>Transforme temas longos em sequência visual: quem age, quando age, qual consequência e qual pegadinha cai na prova.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate('questoes')}>Treinar questões</Button>
            <Button variant="secondary" onClick={copyScript}>{copied ? 'Roteiro copiado' : 'Copiar roteiro'}</Button>
          </div>
        </div>
        <div className="mentor-readiness" style={{ '--mentor-readiness': `${percent}%` }}>
          <strong>{percent}%</strong>
          <span>domínio da linha</span>
        </div>
      </section>

      <div className="subject-tabs">
        {timelineTracks.map((track) => (
          <button key={track.id} type="button" className={track.id === selectedTrack.id ? 'active' : ''} onClick={() => selectTrack(track.id)}>
            {track.title}
          </button>
        ))}
      </div>

      <div className="stats-grid">
        <Card><span className="stat-label">Tema</span><strong className="stat-value small-stat">{selectedTrack.focus}</strong><small>sequência de cobrança</small></Card>
        <Card><span className="stat-label">Fases dominadas</span><strong className="stat-value">{completedCount}/{selectedTrack.events.length}</strong><small>marcadas na linha</small></Card>
        <Card><span className="stat-label">Risco central</span><strong className="stat-value small-stat">{selectedTrack.risk}</strong><small>ponto de atenção</small></Card>
      </div>

      <Card variant="highlight">
        <div className="section-heading">
          <div>
            <Badge tone="purple">mapa temporal</Badge>
            <h2>{selectedTrack.title}</h2>
          </div>
          <strong>{percent}%</strong>
        </div>
        <ProgressBar value={percent} />
        <div className="legal-timeline">
          {selectedTrack.events.map((event, index) => {
            const done = completed.includes(event.id);
            return (
              <article className={`timeline-event-card ${done ? 'done' : ''}`} key={event.id}>
                <button type="button" className="timeline-index" onClick={() => toggleEvent(event.id)}>{done ? '✓' : index + 1}</button>
                <div>
                  <div className="timeline-event-head">
                    <h3>{event.phase}</h3>
                    <span>{event.time}</span>
                  </div>
                  <p><strong>{event.actor}:</strong> {event.action}</p>
                  <div className="timeline-grid">
                    <div><span>Como cai</span><strong>{event.exam}</strong></div>
                    <div><span>Pegadinha</span><strong>{event.trap}</strong></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Card>

      <Card>
        <div className="section-heading">
          <div>
            <Badge tone="green">revisão ativa</Badge>
            <h3>Roteiro para explicar em voz alta</h3>
          </div>
          <Button variant="secondary" onClick={copyScript}>{copied ? 'Copiado' : 'Copiar'}</Button>
        </div>
        <pre className="script-box">{script}</pre>
      </Card>
    </div>
  );
}

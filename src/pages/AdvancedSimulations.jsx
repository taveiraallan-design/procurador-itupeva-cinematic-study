import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ADVANCED_SIM_PROGRESS_KEY, advancedBlueprints, buildAdvancedSimulationPlan, initialAdvancedSimProgress } from '../data/advancedSimulations';

function attemptLabel(attempt) {
  if (!attempt) return 'nenhum simulado avançado feito';
  return `${attempt.title} · ${attempt.score}% · ${new Date(attempt.createdAt).toLocaleDateString('pt-BR')}`;
}

export default function AdvancedSimulations({ onNavigate = () => {} }) {
  const [progress, setProgress] = useLocalStorage(ADVANCED_SIM_PROGRESS_KEY, initialAdvancedSimProgress);
  const [blueprintId, setBlueprintId] = useState(progress.activeBlueprintId || advancedBlueprints[0].id);
  const [score, setScore] = useState('');
  const [showProtocol, setShowProtocol] = useState(false);

  const blueprint = useMemo(() => advancedBlueprints.find((item) => item.id === blueprintId) || advancedBlueprints[0], [blueprintId]);
  const plan = useMemo(() => buildAdvancedSimulationPlan(progress), [progress]);

  function selectBlueprint(id) {
    setBlueprintId(id);
    setProgress((current) => ({ ...current, activeBlueprintId: id }));
  }

  function toggleBlock(id) {
    setProgress((current) => ({
      ...current,
      completedBlocks: { ...(current.completedBlocks || {}), [id]: !current.completedBlocks?.[id] },
    }));
  }

  function registerAttempt() {
    const numeric = Math.max(0, Math.min(100, Number(score || 0)));
    const attempt = {
      id: `${blueprint.id}-${Date.now()}`,
      blueprintId: blueprint.id,
      title: blueprint.title,
      score: numeric,
      duration: blueprint.duration,
      questions: blueprint.questions,
      createdAt: new Date().toISOString(),
    };
    setProgress((current) => ({
      ...current,
      attempts: [attempt, ...(current.attempts || [])].slice(0, 20),
    }));
    setScore('');
  }

  const protocolText = `PROTOCOLO DE SIMULADO AVANÇADO — ${blueprint.title}\n\nTempo: ${blueprint.duration} minutos\nQuestões: ${blueprint.questions}${blueprint.discursive ? ' + discursiva' : ''}\n\nDistribuição:\n${blueprint.distribution.map(([label, amount]) => `- ${label}: ${amount}`).join('\n')}\n\nChecklist:\n${blueprint.checklist.map((item, index) => `${index + 1}. ${item}`).join('\n')}`;

  function copyProtocol() {
    navigator.clipboard?.writeText(protocolText);
    setShowProtocol(true);
    window.setTimeout(() => setShowProtocol(false), 1400);
  }

  return (
    <div className="page-grid advanced-sim-page">
      <section className="mentor-hero">
        <div>
          <Badge tone="cyan">fase 30 · simulados avançados</Badge>
          <h1>Provas e Simulados Estilo Edital Avançado</h1>
          <p>Monte o treino em ritmo real: distribuição por matéria, discursiva, controle de tempo, protocolo de segunda passada e registro de nota.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate('simulados')}>Abrir simulados clássicos</Button>
            <Button variant="secondary" onClick={() => onNavigate('discursivas')}>Treinar discursiva</Button>
            <Button variant="ghost" onClick={copyProtocol}>{showProtocol ? 'Copiado' : 'Copiar protocolo'}</Button>
          </div>
        </div>
        <div className="mentor-readiness" style={{ '--mentor-readiness': `${Math.max(10, plan.average)}%` }}>
          <strong>{plan.best}%</strong>
          <span>melhor nota registrada</span>
        </div>
      </section>

      <div className="subject-tabs">
        {advancedBlueprints.map((item) => (
          <button key={item.id} type="button" className={item.id === blueprint.id ? 'active' : ''} onClick={() => selectBlueprint(item.id)}>
            {item.title}
          </button>
        ))}
      </div>

      <div className="stats-grid">
        <Card><span className="stat-label">Tempo</span><strong className="stat-value">{blueprint.duration}m</strong><small>{blueprint.focus}</small></Card>
        <Card><span className="stat-label">Questões</span><strong className="stat-value">{blueprint.questions}</strong><small>{blueprint.discursive ? 'com discursiva' : 'objetiva'}</small></Card>
        <Card><span className="stat-label">Média registrada</span><strong className="stat-value">{plan.average}%</strong><small>{plan.attempts.length} tentativas</small></Card>
        <Card><span className="stat-label">Último treino</span><strong className="stat-value small-stat">{attemptLabel(plan.last)}</strong><small>histórico local</small></Card>
      </div>

      <div className="two-cols">
        <Card variant="highlight">
          <div className="section-heading">
            <div>
              <Badge tone="purple">blueprint</Badge>
              <h2>{blueprint.title}</h2>
            </div>
            <span className="muted-chip">{blueprint.duration} minutos</span>
          </div>
          <p>{blueprint.recommendedWhen}</p>
          <div className="timeline-grid">
            {blueprint.distribution.map(([label, amount]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{amount}</strong>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="section-heading">
            <div>
              <Badge tone="orange">registro</Badge>
              <h3>Registrar tentativa</h3>
            </div>
          </div>
          <p>Depois de fazer a prova no papel ou cronômetro, registre a nota para o Ranking Pessoal calibrar metas.</p>
          <label className="field-label">Nota estimada ou percentual</label>
          <input className="text-input" value={score} onChange={(event) => setScore(event.target.value)} placeholder="Ex.: 72" inputMode="numeric" />
          <div className="hero-actions">
            <Button onClick={registerAttempt}>Salvar tentativa</Button>
            <Button variant="secondary" onClick={() => onNavigate('ranking')}>Ver Ranking Pessoal</Button>
          </div>
        </Card>
      </div>

      <Card>
        <div className="section-heading">
          <div>
            <Badge tone="green">protocolo de execução</Badge>
            <h3>Checklist do simulado avançado</h3>
          </div>
          <strong>{plan.blockPercent}%</strong>
        </div>
        <ProgressBar label="Blocos do protocolo dominados" value={plan.blockPercent} />
        <div className="banca-tactics">
          {blueprint.checklist.map((item, index) => {
            const id = `${blueprint.id}-check-${index}`;
            const done = progress.completedBlocks?.[id];
            return (
              <article className={`task-row banca-tactic ${done ? 'done' : ''}`} key={id}>
                <div>
                  <strong>{item}</strong>
                  <span>Use este item durante o treino para aproximar do dia da prova.</span>
                </div>
                <Button size="sm" variant={done ? 'success' : 'secondary'} onClick={() => toggleBlock(id)}>{done ? 'Dominado' : 'Marcar'}</Button>
              </article>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

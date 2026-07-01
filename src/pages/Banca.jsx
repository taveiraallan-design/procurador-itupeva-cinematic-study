import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { BANCA_PROGRESS_KEY, bancaModules, buildBancaReadiness, initialBancaProgress } from '../data/bancaProfile';

function itemId(module, type, index) {
  return `${module.id}-${type}-${index}`;
}

export default function Banca({ onNavigate = () => {} }) {
  const [progress, setProgress] = useLocalStorage(BANCA_PROGRESS_KEY, initialBancaProgress);
  const [moduleId, setModuleId] = useState(progress.activeModuleId || bancaModules[0].id);
  const [revealed, setRevealed] = useState({});
  const [copied, setCopied] = useState(false);

  const module = useMemo(() => bancaModules.find((item) => item.id === moduleId) || bancaModules[0], [moduleId]);
  const readiness = buildBancaReadiness(progress);
  const moduleTotal = module.tactics.length + module.drills.length;
  const moduleDone = [
    ...module.tactics.map((_, index) => itemId(module, 'tactic', index)),
    ...module.drills.map((_, index) => itemId(module, 'drill', index)),
  ].filter((id) => progress.completed?.[id]).length;
  const modulePercent = Math.round((moduleDone / Math.max(1, moduleTotal)) * 100);

  function selectModule(nextId) {
    setModuleId(nextId);
    setProgress((current) => ({ ...current, activeModuleId: nextId }));
  }

  function toggle(id) {
    setProgress((current) => ({
      ...current,
      completed: { ...(current.completed || {}), [id]: !current.completed?.[id] },
    }));
  }

  function copyChecklist() {
    const text = `CHECKLIST BANCA — ${module.title}\n\n${module.tactics.map((item, index) => `${index + 1}. ${item}`).join('\n')}\n\nTreino anti-pegadinha:\n${module.drills.map((drill, index) => `${index + 1}. ${drill.statement}\nGabarito: ${drill.answer}. ${drill.reason}\nPegadinha: ${drill.trap}`).join('\n\n')}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  const mostDangerous = bancaModules.map((item) => {
    const total = item.tactics.length + item.drills.length;
    const done = [
      ...item.tactics.map((_, index) => itemId(item, 'tactic', index)),
      ...item.drills.map((_, index) => itemId(item, 'drill', index)),
    ].filter((id) => progress.completed?.[id]).length;
    return { item, percent: Math.round((done / Math.max(1, total)) * 100) };
  }).sort((a, b) => a.percent - b.percent)[0];

  return (
    <div className="page-grid banca-page">
      <section className="mentor-hero banca-hero">
        <div>
          <Badge tone="orange">fase 29 · banca examinadora</Badge>
          <h1>Modo Banca Examinadora</h1>
          <p>Treine como a banca tentaria te derrubar: alternativas sedutoras, troca de conceitos, lei local, discursiva sem conclusão e gestão de tempo.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate('questoes')}>Treinar alternativas</Button>
            <Button variant="secondary" onClick={() => onNavigate('discursivas')}>Treinar discursiva</Button>
            <Button variant="ghost" onClick={copyChecklist}>{copied ? 'Copiado' : 'Copiar checklist'}</Button>
          </div>
        </div>
        <div className="mentor-readiness" style={{ '--mentor-readiness': `${readiness}%` }}>
          <strong>{readiness}%</strong>
          <span>blindagem contra pegadinhas</span>
        </div>
      </section>

      <div className="subject-tabs">
        {bancaModules.map((item) => (
          <button key={item.id} type="button" className={item.id === module.id ? 'active' : ''} onClick={() => selectModule(item.id)}>
            {item.title}
          </button>
        ))}
      </div>

      <div className="stats-grid">
        <Card><span className="stat-label">Módulo atual</span><strong className="stat-value small-stat">{module.focus}</strong><small>{module.title}</small></Card>
        <Card><span className="stat-label">Progresso do módulo</span><strong className="stat-value">{modulePercent}%</strong><small>{moduleDone}/{moduleTotal} itens</small></Card>
        <Card><span className="stat-label">Mais perigoso agora</span><strong className="stat-value small-stat">{mostDangerous.item.focus}</strong><small>{mostDangerous.percent}% concluído</small></Card>
        <Card><span className="stat-label">Blindagem geral</span><strong className="stat-value">{readiness}%</strong><small>checklist anti-erro</small></Card>
      </div>

      <div className="two-cols banca-layout">
        <Card variant="highlight">
          <div className="section-heading">
            <div>
              <Badge tone="cyan">perfil de cobrança</Badge>
              <h2>{module.title}</h2>
            </div>
            <span className="muted-chip">{module.focus}</span>
          </div>
          <ProgressBar label="Domínio anti-pegadinha" value={modulePercent} />
          <div className="banca-tactics">
            {module.tactics.map((tactic, index) => {
              const id = itemId(module, 'tactic', index);
              const done = progress.completed?.[id];
              return (
                <article className={`task-row banca-tactic ${done ? 'done' : ''}`} key={id}>
                  <div>
                    <strong>{tactic}</strong>
                    <span>Use antes de marcar alternativa ou fechar a discursiva.</span>
                  </div>
                  <Button size="sm" variant={done ? 'success' : 'secondary'} onClick={() => toggle(id)}>{done ? 'Blindado' : 'Marcar'}</Button>
                </article>
              );
            })}
          </div>
        </Card>

        <Card>
          <div className="section-heading">
            <div>
              <Badge tone="purple">drill de banca</Badge>
              <h3>Como a banca tentaria te derrubar</h3>
            </div>
          </div>
          <div className="dry-law-list">
            {module.drills.map((drill, index) => {
              const id = itemId(module, 'drill', index);
              const done = progress.completed?.[id];
              return (
                <article className={`dry-law-card banca-drill ${done ? 'done' : ''}`} key={id}>
                  <div className="dry-law-topline">
                    <Badge tone={done ? 'green' : 'orange'}>item {index + 1}</Badge>
                    <div className="dry-law-actions">
                      <button type="button" onClick={() => setRevealed((current) => ({ ...current, [id]: !current[id] }))}>{revealed[id] ? 'Ocultar' : 'Revelar'}</button>
                      <button type="button" onClick={() => toggle(id)}>{done ? 'Feito ✓' : 'Marcar feito'}</button>
                    </div>
                  </div>
                  <h3>{drill.statement}</h3>
                  {revealed[id] && (
                    <div className="timeline-grid">
                      <div><span>Gabarito</span><strong>{drill.answer}</strong></div>
                      <div><span>Por quê</span><strong>{drill.reason}</strong></div>
                      <div><span>Pegadinha</span><strong>{drill.trap}</strong></div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </Card>
      </div>

      <Card>
        <div className="section-heading">
          <div>
            <Badge tone="orange">checklist final</Badge>
            <h3>Regra de ouro antes de marcar</h3>
          </div>
        </div>
        <ul className="strategy-list">
          <li>Identifique o verbo de comando: pode, deve, compete, é vedado, será, poderá.</li>
          <li>Procure a troca maldosa: competência, prazo, natureza jurídica, ato válido/ilegal, taxa/imposto.</li>
          <li>Na discursiva, nunca termine sem providência prática para o Município.</li>
        </ul>
      </Card>
    </div>
  );
}

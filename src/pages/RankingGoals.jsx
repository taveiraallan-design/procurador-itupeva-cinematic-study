import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { buildRankingPanel, initialRankingProgress, RANKING_PROGRESS_KEY } from '../utils/rankingEngine';

const questionKey = 'questions_progress_v1';
const simulationKey = 'simulations_progress_v1';
const discursiveKey = 'discursive_lab_progress_v2';
const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };
const initialDiscursiveProgress = { history: [], accepted: {}, manual: {} };

const weeklyPlan = [
  { id: 'seg', day: 'Segunda', target: 'Lei Local + 25 questões', page: 'lei-seca' },
  { id: 'ter', day: 'Terça', target: 'Administrativo + Lab de Erros', page: 'erros' },
  { id: 'qua', day: 'Quarta', target: 'Simulado de pressão', page: 'simulados-pro' },
  { id: 'qui', day: 'Quinta', target: 'Processo Civil + discursiva', page: 'discursivas' },
  { id: 'sex', day: 'Sexta', target: 'Tributário municipal + artigos', page: 'lei-seca' },
  { id: 'sab', day: 'Sábado', target: 'Prova estilo edital completo', page: 'simulados-pro' },
  { id: 'dom', day: 'Domingo', target: 'Revisão leve + mapas mentais', page: 'mapas' },
];

export default function RankingGoals({ onNavigate = () => {} }) {
  const [questionProgress] = useLocalStorage(questionKey, initialQuestionProgress);
  const [simulationProgress] = useLocalStorage(simulationKey, initialSimulationProgress);
  const [discursiveProgress] = useLocalStorage(discursiveKey, initialDiscursiveProgress);
  const [rankingProgress, setRankingProgress] = useLocalStorage(RANKING_PROGRESS_KEY, initialRankingProgress);
  const [editing, setEditing] = useState(false);

  const panel = useMemo(() => buildRankingPanel({ questionProgress, simulationProgress, discursiveProgress, rankingProgress }), [questionProgress, simulationProgress, discursiveProgress, rankingProgress]);

  function setGoal(field, value) {
    const numeric = Math.max(1, Number(value || 1));
    setRankingProgress((current) => ({ ...current, [field]: numeric }));
  }

  function toggleTask(id) {
    setRankingProgress((current) => ({
      ...current,
      completedTasks: { ...(current.completedTasks || {}), [id]: !current.completedTasks?.[id] },
    }));
  }

  const doneDays = weeklyPlan.filter((item) => rankingProgress.completedTasks?.[item.id]).length;
  const weekPercent = Math.round((doneDays / weeklyPlan.length) * 100);

  return (
    <div className="page-grid ranking-page">
      <section className="mentor-hero ranking-hero">
        <div>
          <Badge tone="green">fase 31 · ranking pessoal</Badge>
          <h1>Ranking Pessoal e Metas Semanais</h1>
          <p>Compare você com você mesmo: prontidão, metas da semana, simulados, discursivas e o próximo gargalo que mais aumenta sua nota.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate(panel.nextGoal.targetPage)}>{`Atacar: ${panel.nextGoal.label}`}</Button>
            <Button variant="secondary" onClick={() => setEditing((value) => !value)}>{editing ? 'Fechar metas' : 'Editar metas'}</Button>
            <Button variant="ghost" onClick={() => onNavigate('mentor')}>Abrir Mentor</Button>
          </div>
        </div>
        <div className="mentor-readiness" style={{ '--mentor-readiness': `${panel.score}%` }}>
          <strong>{panel.score}%</strong>
          <span>{panel.tier}</span>
        </div>
      </section>

      {editing && (
        <Card variant="highlight">
          <div className="section-heading">
            <div>
              <Badge tone="cyan">calibragem</Badge>
              <h3>Metas da semana</h3>
            </div>
          </div>
          <div className="timeline-grid">
            <label><span>Questões/semana</span><input className="text-input" value={rankingProgress.weeklyGoal} onChange={(event) => setGoal('weeklyGoal', event.target.value)} /></label>
            <label><span>Simulados/semana</span><input className="text-input" value={rankingProgress.simulationGoal} onChange={(event) => setGoal('simulationGoal', event.target.value)} /></label>
            <label><span>Discursivas/semana</span><input className="text-input" value={rankingProgress.discursiveGoal} onChange={(event) => setGoal('discursiveGoal', event.target.value)} /></label>
          </div>
        </Card>
      )}

      <div className="stats-grid">
        <Card><span className="stat-label">Nível atual</span><strong className="stat-value small-stat">{panel.tier}</strong><small>score composto de treino</small></Card>
        <Card><span className="stat-label">Questões</span><strong className="stat-value">{panel.answered}</strong><small>{panel.accuracy}% de acerto</small></Card>
        <Card><span className="stat-label">Cobertura</span><strong className="stat-value">{panel.coverage}%</strong><small>banco local de questões</small></Card>
        <Card><span className="stat-label">Melhor simulado</span><strong className="stat-value">{panel.bestSimulation}%</strong><small>{panel.simulations} simulados registrados</small></Card>
        <Card><span className="stat-label">Discursivas</span><strong className="stat-value">{panel.discursiveCount}</strong><small>treinos salvos</small></Card>
        <Card><span className="stat-label">Semana</span><strong className="stat-value">{weekPercent}%</strong><small>{doneDays}/{weeklyPlan.length} blocos</small></Card>
      </div>

      <div className="two-cols">
        <Card>
          <div className="section-heading">
            <div>
              <Badge tone="orange">gargalos</Badge>
              <h3>O que mais sobe sua nota agora</h3>
            </div>
          </div>
          {panel.deficits.map((item) => (
            <article className="task-row" key={item.id}>
              <div>
                <strong>{item.label}</strong>
                <ProgressBar label={`${item.percent}% da meta`} value={item.percent} />
              </div>
              <Button size="sm" variant="secondary" onClick={() => onNavigate(item.targetPage)}>Abrir</Button>
            </article>
          ))}
        </Card>

        <Card variant="highlight">
          <div className="section-heading">
            <div>
              <Badge tone="purple">ranking pessoal</Badge>
              <h3>Escada de evolução</h3>
            </div>
          </div>
          <ul className="strategy-list">
            <li><strong>0–51:</strong> construir base e reduzir erros bobos.</li>
            <li><strong>52–67:</strong> acelerar questões e revisar lei seca.</li>
            <li><strong>68–81:</strong> simulado completo + discursiva recorrente.</li>
            <li><strong>82+:</strong> manutenção, véspera e blindagem de banca.</li>
          </ul>
        </Card>
      </div>

      <Card>
        <div className="section-heading">
          <div>
            <Badge tone="green">semana tática</Badge>
            <h3>Plano semanal enxuto</h3>
          </div>
          <strong>{weekPercent}%</strong>
        </div>
        <div className="dry-law-list">
          {weeklyPlan.map((item) => {
            const done = rankingProgress.completedTasks?.[item.id];
            return (
              <article className={`dry-law-card ${done ? 'done' : ''}`} key={item.id}>
                <div className="dry-law-topline">
                  <Badge tone={done ? 'green' : 'cyan'}>{item.day}</Badge>
                  <div className="dry-law-actions">
                    <button type="button" onClick={() => onNavigate(item.page)}>Abrir</button>
                    <button type="button" onClick={() => toggleTask(item.id)}>{done ? 'Concluído ✓' : 'Concluir'}</button>
                  </div>
                </div>
                <h3>{item.target}</h3>
                <p>Bloco pensado para manter constância sem sobrecarregar.</p>
              </article>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

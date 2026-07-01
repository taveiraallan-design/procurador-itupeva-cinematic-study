import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { vesperaBlocks, vesperaChecklists, lastMinuteCards } from '../data/vesperaPlan';
import { getExamCountdown } from '../utils/sprintEngine';

const VESPERA_KEY = 'vespera_progress_v1';
const initialProgress = { completedBlocks: [], checked: {}, panicMode: false };

function toggleInList(list = [], id) {
  return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
}

export default function Vespera({ onNavigate }) {
  const [progress, setProgress] = useLocalStorage(VESPERA_KEY, initialProgress);
  const [selectedBlockId, setSelectedBlockId] = useState(vesperaBlocks[0].id);
  const countdown = getExamCountdown();
  const selectedBlock = vesperaBlocks.find((block) => block.id === selectedBlockId) || vesperaBlocks[0];
  const completedCount = progress.completedBlocks?.length || 0;
  const completionPercent = Math.round((completedCount / vesperaBlocks.length) * 100);

  const checklistStats = useMemo(() => {
    const total = vesperaChecklists.reduce((sum, group) => sum + group.items.length, 0);
    const done = vesperaChecklists.reduce((sum, group) => sum + (progress.checked?.[group.id] || []).length, 0);
    return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
  }, [progress.checked]);

  function toggleBlock(id) {
    setProgress((current) => ({ ...current, completedBlocks: toggleInList(current.completedBlocks || [], id) }));
  }

  function toggleChecklist(groupId, item) {
    setProgress((current) => {
      const checked = current.checked || {};
      return { ...current, checked: { ...checked, [groupId]: toggleInList(checked[groupId] || [], item) } };
    });
  }

  function activatePanicMode() {
    setProgress((current) => ({ ...current, panicMode: !current.panicMode }));
  }

  return (
    <div className="vespera-page page-grid">
      <section className="vespera-hero">
        <div>
          <Badge tone="orange">fase 23 • revisão de véspera</Badge>
          <h1>Revisão de Véspera</h1>
          <p>Um roteiro anti-caos para os últimos dias: só o que mais cai, só o que evita erro bobo e só o que mantém controle na prova.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate?.(selectedBlock.targetPage)}>Abrir ação atual</Button>
            <Button variant="secondary" onClick={activatePanicMode}>{progress.panicMode ? 'Modo normal' : 'Modo pânico controlado'}</Button>
            <Button variant="ghost" onClick={() => onNavigate?.('sprint')}>Voltar ao Sprint</Button>
          </div>
        </div>
        <div className="vespera-countdown">
          <span>faltam</span>
          <strong>{countdown.days}</strong>
          <em>dias para a prova</em>
          <ProgressBar label="Roteiro de véspera concluído" value={completionPercent} />
        </div>
      </section>

      {progress.panicMode && (
        <Card className="wide-card panic-card" variant="highlight">
          <Badge tone="red">modo pânico controlado</Badge>
          <h3>Hoje você não vai tentar aprender tudo.</h3>
          <p>Faça apenas: 10 questões de Lei Local, 10 flashcards de Administrativo, leia 1 espelho discursivo e durma. O objetivo é reduzir erro bobo, não inventar matéria nova.</p>
          <div className="panic-mini-plan"><span>30 min Lei Local</span><span>20 min Administrativo</span><span>15 min Discursiva</span><span>desligar e dormir</span></div>
        </Card>
      )}

      <section className="vespera-layout">
        <Card className="vespera-block-list">
          <div className="section-heading compact">
            <h3>Roteiro final</h3>
            <Badge tone="cyan">{completedCount}/{vesperaBlocks.length}</Badge>
          </div>
          <div className="vespera-block-buttons">
            {vesperaBlocks.map((block) => {
              const completed = progress.completedBlocks?.includes(block.id);
              return (
                <button key={block.id} className={`${selectedBlockId === block.id ? 'active' : ''} ${completed ? 'done' : ''}`} onClick={() => setSelectedBlockId(block.id)}>
                  <span>{block.window}</span>
                  <strong>{block.title}</strong>
                  <small>{completed ? 'concluído' : block.risk}</small>
                </button>
              );
            })}
          </div>
        </Card>

        <Card className="vespera-detail-card" variant="highlight">
          <div className="section-heading">
            <div>
              <Badge tone={selectedBlock.risk === 'Muito alto' ? 'orange' : 'purple'}>{selectedBlock.window} • {selectedBlock.risk}</Badge>
              <h2>{selectedBlock.title}</h2>
              <p>{selectedBlock.mission}</p>
            </div>
            <Button onClick={() => toggleBlock(selectedBlock.id)} variant={progress.completedBlocks?.includes(selectedBlock.id) ? 'success' : 'primary'}>
              {progress.completedBlocks?.includes(selectedBlock.id) ? 'Concluído' : 'Marcar concluído'}
            </Button>
          </div>
          <div className="vespera-detail-grid">
            <div>
              <h4>Checklist de revisão</h4>
              <div className="vespera-chip-list">
                {selectedBlock.checklist.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <div>
              <h4>Pegadinhas para não cair</h4>
              <div className="trap-list compact-traps">
                {selectedBlock.traps.map((trap) => <p key={trap}>• {trap}</p>)}
              </div>
            </div>
          </div>
          <div className="vespera-action-strip">
            <strong>Ação prática:</strong>
            <span>{selectedBlock.action}</span>
            <Button variant="secondary" onClick={() => onNavigate?.(selectedBlock.targetPage)}>Abrir agora</Button>
          </div>
        </Card>
      </section>

      <section className="vespera-bottom-grid">
        <Card>
          <div className="section-heading compact">
            <h3>Logística e controle</h3>
            <Badge tone="green">{checklistStats.percent}%</Badge>
          </div>
          <ProgressBar label={`${checklistStats.done}/${checklistStats.total} itens prontos`} value={checklistStats.percent} />
          <div className="vespera-checklists">
            {vesperaChecklists.map((group) => (
              <article key={group.id}>
                <h4>{group.title}</h4>
                {group.items.map((item) => {
                  const checked = progress.checked?.[group.id]?.includes(item);
                  return (
                    <label key={item} className={checked ? 'checked' : ''}>
                      <input type="checkbox" checked={Boolean(checked)} onChange={() => toggleChecklist(group.id, item)} />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </article>
            ))}
          </div>
        </Card>

        <Card className="last-minute-card">
          <div className="section-heading compact">
            <h3>Cartões de última hora</h3>
            <Badge tone="purple">memória curta</Badge>
          </div>
          <div className="last-minute-grid">
            {lastMinuteCards.map((card) => (
              <article key={card.id}>
                <strong>{card.front}</strong>
                <p>{card.back}</p>
              </article>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

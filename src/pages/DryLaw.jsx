import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { dryLawBlocks } from '../data/dryLawData';

const DRY_LAW_PROGRESS_KEY = 'dry_law_progress_v1';
const initialProgress = { read: {}, drills: {}, activeBlockId: 'constitucional-municipal' };

function getPriorityTone(priority) {
  return priority === 'altíssima' ? 'orange' : priority === 'alta' ? 'purple' : 'cyan';
}

function buildArticlePrompt(block, article) {
  return `TREINO DE LEI SECA — ${block.title}\n\nDispositivo/referência: ${article.ref}\nTema: ${article.theme}\nComo a banca cobra: ${article.charge}\nPegadinha provável: ${article.trap}\n\nTarefa:\n1. Leia o dispositivo no material oficial.\n2. Explique em uma frase o núcleo jurídico.\n3. Crie uma alternativa errada com a pegadinha.\n4. Resolva 3 questões sobre o tema ou revise um erro ligado a ele.`;
}

export default function DryLaw({ onNavigate = () => {} }) {
  const [progress, setProgress] = useLocalStorage(DRY_LAW_PROGRESS_KEY, initialProgress);
  const [selectedId, setSelectedId] = useState(progress.activeBlockId || dryLawBlocks[0].id);
  const [copied, setCopied] = useState('');

  const selectedBlock = useMemo(() => dryLawBlocks.find((block) => block.id === selectedId) || dryLawBlocks[0], [selectedId]);
  const readList = progress.read?.[selectedBlock.id] || [];
  const drillList = progress.drills?.[selectedBlock.id] || [];
  const readPercent = Math.round((readList.length / selectedBlock.articles.length) * 100);
  const drillPercent = Math.round((drillList.length / selectedBlock.articles.length) * 100);
  const totalArticles = dryLawBlocks.reduce((sum, block) => sum + block.articles.length, 0);
  const totalRead = Object.values(progress.read || {}).reduce((sum, list) => sum + (Array.isArray(list) ? list.length : 0), 0);
  const totalPercent = Math.round((totalRead / totalArticles) * 100);

  function selectBlock(blockId) {
    setSelectedId(blockId);
    setProgress((current) => ({ ...current, activeBlockId: blockId }));
  }

  function toggleItem(group, articleRef) {
    setProgress((current) => {
      const currentList = current[group]?.[selectedBlock.id] || [];
      const nextList = currentList.includes(articleRef)
        ? currentList.filter((ref) => ref !== articleRef)
        : [...currentList, articleRef];
      return {
        ...current,
        [group]: { ...(current[group] || {}), [selectedBlock.id]: nextList },
      };
    });
  }

  function copyPrompt(article) {
    navigator.clipboard?.writeText(buildArticlePrompt(selectedBlock, article));
    setCopied(article.ref);
    window.setTimeout(() => setCopied(''), 1400);
  }

  const weakBlock = dryLawBlocks
    .map((block) => ({ block, percent: Math.round(((progress.read?.[block.id] || []).length / block.articles.length) * 100) }))
    .sort((a, b) => a.percent - b.percent)[0];

  return (
    <div className="page-grid dry-law-page">
      <section className="mentor-hero">
        <div>
          <Badge tone="orange">fase 27 · lei seca inteligente</Badge>
          <h1>Lei Seca Inteligente</h1>
          <p>Artigos e referências que viram questão, discursiva e pegadinha. Marque leitura, faça drill e copie roteiros de cobrança.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate('questoes')}>Resolver questões</Button>
            <Button variant="secondary" onClick={() => onNavigate('discursivas')}>Treinar discursiva</Button>
          </div>
        </div>
        <div className="mentor-readiness" style={{ '--mentor-readiness': `${totalPercent}%` }}>
          <strong>{totalPercent}%</strong>
          <span>lei seca lida</span>
        </div>
      </section>

      <div className="subject-tabs">
        {dryLawBlocks.map((block) => (
          <button key={block.id} type="button" className={block.id === selectedBlock.id ? 'active' : ''} onClick={() => selectBlock(block.id)}>
            {block.title}
          </button>
        ))}
      </div>

      <div className="stats-grid">
        <Card><span className="stat-label">Leitura do bloco</span><strong className="stat-value">{readPercent}%</strong><small>{readList.length}/{selectedBlock.articles.length} referências</small></Card>
        <Card><span className="stat-label">Drills feitos</span><strong className="stat-value">{drillPercent}%</strong><small>{drillList.length}/{selectedBlock.articles.length} treinos</small></Card>
        <Card><span className="stat-label">Bloco mais atrasado</span><strong className="stat-value small-stat">{weakBlock.block.title}</strong><small>{weakBlock.percent}% lido</small></Card>
      </div>

      <Card variant="highlight">
        <div className="section-heading">
          <div>
            <Badge tone={getPriorityTone(selectedBlock.priority)}>prioridade {selectedBlock.priority}</Badge>
            <h2>{selectedBlock.title}</h2>
          </div>
          <span className="muted-chip">{selectedBlock.subject}</span>
        </div>
        <ProgressBar value={readPercent} />
        <div className="dry-law-list">
          {selectedBlock.articles.map((article) => {
            const read = readList.includes(article.ref);
            const drilled = drillList.includes(article.ref);
            return (
              <article className={`dry-law-card ${read ? 'done' : ''}`} key={`${selectedBlock.id}-${article.ref}`}>
                <div className="dry-law-topline">
                  <Badge tone={read ? 'green' : 'cyan'}>{article.ref}</Badge>
                  <div className="dry-law-actions">
                    <button type="button" onClick={() => toggleItem('read', article.ref)}>{read ? 'Lido ✓' : 'Marcar lido'}</button>
                    <button type="button" onClick={() => toggleItem('drills', article.ref)}>{drilled ? 'Drill feito ✓' : 'Fazer drill'}</button>
                    <button type="button" onClick={() => copyPrompt(article)}>{copied === article.ref ? 'Copiado' : 'Copiar treino'}</button>
                  </div>
                </div>
                <h3>{article.theme}</h3>
                <div className="timeline-grid">
                  <div><span>Como cobra</span><strong>{article.charge}</strong></div>
                  <div><span>Pegadinha</span><strong>{article.trap}</strong></div>
                </div>
              </article>
            );
          })}
        </div>
      </Card>

      <Card>
        <div className="section-heading">
          <div>
            <Badge tone="purple">cobrança por artigo</Badge>
            <h3>Roteiro de ataque</h3>
          </div>
        </div>
        <ul className="strategy-list">
          <li>Leia o dispositivo ou referência no material oficial antes de responder questões.</li>
          <li>Transforme cada artigo em uma pergunta: quem pode, quando pode, qual limite e qual consequência.</li>
          <li>Depois do drill, volte ao Lab de Erros para registrar a pegadinha que te derrubou.</li>
        </ul>
      </Card>
    </div>
  );
}

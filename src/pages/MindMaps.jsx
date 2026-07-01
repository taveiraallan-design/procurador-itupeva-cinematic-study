import { useMemo, useState } from 'react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const MINDMAP_PROGRESS_KEY = 'mindmap_progress_v1';
const initialProgress = { checkedNodes: {}, activeMapId: 'atos' };

const maps = [
  {
    id: 'atos', title: 'Atos Administrativos', focus: 'Anulação, revogação, convalidação e elementos do ato.',
    center: 'Ato administrativo',
    nodes: [
      { id: 'elementos', title: 'Elementos', detail: 'Competência, finalidade, forma, motivo e objeto.' },
      { id: 'legalidade', title: 'Legalidade', detail: 'Vício de legalidade leva à anulação.' },
      { id: 'merito', title: 'Mérito', detail: 'Conveniência e oportunidade sustentam revogação.' },
      { id: 'convalidacao', title: 'Convalidação', detail: 'Vício sanável, sem prejuízo a terceiros e ao interesse público.' },
      { id: 'autotutela', title: 'Autotutela', detail: 'Administração pode rever seus próprios atos.' },
      { id: 'pegadinha', title: 'Pegadinha clássica', detail: 'Ato ilegal não é revogado; é anulado.' },
    ],
  },
  {
    id: 'lei-local', title: 'Lei Orgânica Municipal', focus: 'Autonomia, competências, Câmara, Prefeito e processo legislativo.',
    center: 'Município',
    nodes: [
      { id: 'autonomia', title: 'Autonomia municipal', detail: 'Auto-organização, autogoverno, autoadministração e autolegislação.' },
      { id: 'competencia', title: 'Competências', detail: 'Interesse local, suplementação e serviços públicos municipais.' },
      { id: 'camara', title: 'Câmara Municipal', detail: 'Legisla, fiscaliza e julga contas nos limites legais.' },
      { id: 'prefeito', title: 'Prefeito', detail: 'Chefia do Executivo, sanção, veto e administração municipal.' },
      { id: 'processo', title: 'Processo legislativo', detail: 'Iniciativa, votação, sanção, veto, promulgação e publicação.' },
      { id: 'controle', title: 'Controle', detail: 'Controle interno, externo e fiscalização político-administrativa.' },
    ],
  },
  {
    id: 'tributos', title: 'Tributos Municipais', focus: 'Competência tributária, IPTU, ISS, ITBI, taxas e dívida ativa.',
    center: 'Receita municipal',
    nodes: [
      { id: 'competencia', title: 'Competência', detail: 'Município institui tributos de sua competência por lei.' },
      { id: 'iptu', title: 'IPTU', detail: 'Propriedade predial e territorial urbana.' },
      { id: 'iss', title: 'ISS', detail: 'Serviços definidos em lei complementar.' },
      { id: 'itbi', title: 'ITBI', detail: 'Transmissão onerosa de bens imóveis inter vivos.' },
      { id: 'taxas', title: 'Taxas', detail: 'Poder de polícia ou serviço público específico e divisível.' },
      { id: 'divida', title: 'Dívida ativa', detail: 'Inscrição, cobrança e execução fiscal.' },
    ],
  },
  {
    id: 'processo-civil', title: 'Processo Civil para Procurador', focus: 'Fazenda Pública em juízo, prazos, recursos e execução fiscal.',
    center: 'Fazenda em juízo',
    nodes: [
      { id: 'prazos', title: 'Prazos diferenciados', detail: 'Atenção a contagem, intimação e prerrogativas processuais.' },
      { id: 'contestacao', title: 'Contestação', detail: 'Preliminares, mérito, provas e pedidos.' },
      { id: 'recursos', title: 'Recursos', detail: 'Cabimento, tempestividade, preparo e efeito.' },
      { id: 'tutelas', title: 'Tutelas provisórias', detail: 'Risco, probabilidade e limites contra o Poder Público.' },
      { id: 'execucao', title: 'Execução fiscal', detail: 'CDA, prescrição, garantias e embargos.' },
      { id: 'precedentes', title: 'Precedentes', detail: 'Súmulas, repetitivos e vinculação.' },
    ],
  },
  {
    id: 'discursiva', title: 'Discursiva de Procurador', focus: 'Estrutura de resposta, fundamento, aplicação e conclusão prática.',
    center: 'Parecer / tese',
    nodes: [
      { id: 'relatorio', title: 'Relatório', detail: 'Delimite fatos e problema jurídico sem enrolar.' },
      { id: 'questao', title: 'Questão jurídica', detail: 'Mostre exatamente o ponto controvertido.' },
      { id: 'fundamento', title: 'Fundamentação', detail: 'Normas, princípios e jurisprudência quando cabível.' },
      { id: 'caso', title: 'Aplicação ao caso', detail: 'Conecte regra aos fatos do enunciado.' },
      { id: 'riscos', title: 'Riscos', detail: 'Aponte pegadinhas, exceções e consequências.' },
      { id: 'conclusao', title: 'Conclusão', detail: 'Providência objetiva e juridicamente segura.' },
    ],
  },
];

function asObject(value, fallback = {}) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : fallback;
}

export default function MindMaps({ onNavigate }) {
  const [progress, setProgress] = useLocalStorage(MINDMAP_PROGRESS_KEY, initialProgress);
  const [activeId, setActiveId] = useState(progress.activeMapId || 'atos');
  const activeMap = maps.find((map) => map.id === activeId) || maps[0];
  const checked = asObject(progress.checkedNodes);
  const checkedForMap = checked[activeMap.id] || {};
  const mastered = activeMap.nodes.filter((node) => checkedForMap[node.id]).length;
  const percent = Math.round((mastered / activeMap.nodes.length) * 100);

  function changeMap(id) {
    setActiveId(id);
    setProgress((current) => ({ ...asObject(current, initialProgress), activeMapId: id }));
  }

  function toggleNode(nodeId) {
    setProgress((current) => {
      const safe = asObject(current, initialProgress);
      const mapState = asObject(safe.checkedNodes?.[activeMap.id]);
      return {
        ...safe,
        checkedNodes: {
          ...asObject(safe.checkedNodes),
          [activeMap.id]: { ...mapState, [nodeId]: !mapState[nodeId] },
        },
      };
    });
  }

  const quickScript = useMemo(() => activeMap.nodes.map((node, index) => `${index + 1}. ${node.title}: ${node.detail}`).join('\n'), [activeMap]);

  return (
    <div className="page-grid mindmap-page">
      <section className="hero-panel">
        <div>
          <Badge tone="purple">fase 25</Badge>
          <h1>Mapas Mentais Premium</h1>
          <p>Estude temas de alto impacto como mapa visual: núcleo, ramificações, pegadinhas e revisão ativa.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate('flashcards')}>Reforçar com flashcards</Button>
            <Button variant="secondary" onClick={() => onNavigate('discursivas')}>Treinar discursiva</Button>
          </div>
        </div>
        <div className="mentor-mini-grid">
          <span><strong>{maps.length}</strong><small>mapas</small></span>
          <span><strong>{mastered}</strong><small>nós dominados</small></span>
          <span><strong>{percent}%</strong><small>mapa atual</small></span>
        </div>
      </section>

      <Card>
        <Badge tone="cyan">seleção de mapa</Badge>
        <div className="map-selector">
          {maps.map((map) => (
            <button key={map.id} type="button" className={`timeline-chip ${activeMap.id === map.id ? 'active' : ''}`} onClick={() => changeMap(map.id)}>
              {map.title}
            </button>
          ))}
        </div>
      </Card>

      <div className="two-cols">
        <Card variant="highlight" className="mindmap-canvas-card">
          <div className="section-heading">
            <div>
              <Badge tone="green">mapa ativo</Badge>
              <h3>{activeMap.title}</h3>
            </div>
            <strong>{percent}%</strong>
          </div>
          <p>{activeMap.focus}</p>
          <div className="mindmap-canvas">
            <div className="mindmap-center">{activeMap.center}</div>
            {activeMap.nodes.map((node, index) => (
              <button
                key={node.id}
                type="button"
                className={`mindmap-node node-${index + 1} ${checkedForMap[node.id] ? 'checked' : ''}`}
                onClick={() => toggleNode(node.id)}
              >
                <strong>{node.title}</strong>
                <small>{checkedForMap[node.id] ? 'dominado' : 'clicar para dominar'}</small>
              </button>
            ))}
          </div>
          <ProgressBar label="Domínio do mapa" value={percent} />
        </Card>

        <Card>
          <Badge tone="orange">ramificações</Badge>
          <h3>Revisão ativa</h3>
          <div className="final-checklist">
            {activeMap.nodes.map((node) => (
              <article key={node.id}>
                <div>
                  <strong>{node.title}</strong>
                  <button type="button" className="mini-toggle" onClick={() => toggleNode(node.id)}>{checkedForMap[node.id] ? 'Dominado' : 'Marcar'}</button>
                </div>
                <p>{node.detail}</p>
              </article>
            ))}
          </div>
        </Card>
      </div>

      <Card className="wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="cyan">roteiro de revisão</Badge>
            <h3>Script para ler em voz alta</h3>
          </div>
          <Button variant="secondary" onClick={() => navigator.clipboard?.writeText(quickScript)}>Copiar roteiro</Button>
        </div>
        <pre className="study-script">{quickScript}</pre>
      </Card>
    </div>
  );
}

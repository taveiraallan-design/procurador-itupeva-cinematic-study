import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';

const OFFLINE_KEY = 'offline_export_progress_v1';
const initialProgress = { installedCheck: false, exports: [], checklist: {} };

const checklist = [
  { id: 'backup', label: 'Exportar backup completo antes da reta final', impact: 'segurança' },
  { id: 'relatorio', label: 'Gerar relatório de estudo em Markdown', impact: 'visão executiva' },
  { id: 'mobile', label: 'Testar abertura no celular pelo navegador', impact: 'mobilidade' },
  { id: 'install', label: 'Adicionar app à tela inicial/dock quando o navegador permitir', impact: 'offline/PWA' },
  { id: 'vespera', label: 'Salvar roteiro de véspera e revisão rápida', impact: 'últimos dias' },
];

function getAppLocalStorage() {
  const data = {};
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith('procurador_itupeva_cinematic_') || key.startsWith('procurador_itupeva_cinematic_v2_'))
      .forEach((key) => { data[key] = localStorage.getItem(key); });
  } catch (error) {
    console.warn(error);
  }
  return data;
}

function downloadFile(filename, content, type = 'application/json') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function parseStored(value, fallback = {}) {
  try { return JSON.parse(value) || fallback; } catch { return fallback; }
}

function buildMarkdownReport(storageData) {
  const questionProgress = parseStored(storageData.procurador_itupeva_cinematic_v2_questions_progress_v1 || storageData.procurador_itupeva_cinematic_questions_progress_v1, { history: [], answers: {} });
  const simulationProgress = parseStored(storageData.procurador_itupeva_cinematic_v2_simulations_progress_v1 || storageData.procurador_itupeva_cinematic_simulations_progress_v1, { attempts: [] });
  const discursiveProgress = parseStored(storageData.procurador_itupeva_cinematic_v2_discursive_lab_progress_v2 || storageData.procurador_itupeva_cinematic_discursive_lab_progress_v2, { history: [] });
  const answered = Object.keys(questionProgress.answers || {}).length;
  const history = questionProgress.history || [];
  const correct = history.filter((item) => item.correct).length;
  const accuracy = history.length ? Math.round((correct / history.length) * 100) : 0;
  const bestSimulation = Math.max(0, ...(simulationProgress.attempts || []).map((item) => item.score || item.percent || 0));
  const discursiveCount = (discursiveProgress.history || []).length;
  return `# Relatório de Estudo — Procurador Itupeva\n\nGerado em: ${new Date().toLocaleString('pt-BR')}\n\n## Indicadores\n\n- Questões respondidas: ${answered}\n- Histórico de respostas: ${history.length}\n- Taxa estimada de acerto: ${accuracy}%\n- Melhor simulado registrado: ${bestSimulation}%\n- Discursivas treinadas: ${discursiveCount}\n\n## Próxima estratégia\n\n1. Revisar Lei Local e artigos mais cobrados.\n2. Fazer bloco de questões com foco em erros recentes.\n3. Treinar uma discursiva com estrutura: problema, fundamento, aplicação e conclusão.\n4. Rodar um simulado de pressão e registrar nota no Simulados Pro.\n5. Usar a aba Revisão Ultra Rápida para fixação em voz alta.\n\n## Observação\n\nEste relatório é local e não envia seus dados para servidor externo.\n`;
}

export default function OfflineExport({ onNavigate = () => {} }) {
  const [progress, setProgress] = useLocalStorage(OFFLINE_KEY, initialProgress);
  const [status, setStatus] = useState('Pronto para exportar seus dados locais.');

  const storageData = useMemo(() => getAppLocalStorage(), [progress.exports?.length]);
  const storageKeys = Object.keys(storageData);
  const checklistDone = checklist.filter((item) => progress.checklist?.[item.id]).length;
  const checklistPercent = Math.round((checklistDone / checklist.length) * 100);

  function recordExport(type) {
    setProgress((current) => ({
      ...current,
      exports: [{ type, date: new Date().toISOString() }, ...(current.exports || [])].slice(0, 12),
    }));
  }

  function exportBackup() {
    const payload = {
      app: 'procurador-itupeva-cinematic-study',
      phase: '33',
      exportedAt: new Date().toISOString(),
      storage: getAppLocalStorage(),
    };
    downloadFile(`backup-procurador-itupeva-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(payload, null, 2));
    recordExport('backup-json');
    setStatus('Backup JSON gerado. Guarde esse arquivo em local seguro.');
  }

  function exportReport() {
    const markdown = buildMarkdownReport(getAppLocalStorage());
    downloadFile(`relatorio-estudo-itupeva-${new Date().toISOString().slice(0, 10)}.md`, markdown, 'text/markdown');
    recordExport('relatorio-md');
    setStatus('Relatório Markdown gerado com indicadores e estratégia.');
  }

  function exportSprintPack() {
    const pack = [
      '# Pacote de Reta Final — Procurador Itupeva',
      '',
      '## Bloco diário essencial',
      '- 20 a 40 questões por dia com correção ativa.',
      '- 1 bloco de Lei Local ou Lei Seca.',
      '- 1 revisão rápida em voz alta.',
      '- 1 discursiva a cada 2 ou 3 dias.',
      '',
      '## Antes da prova',
      '- Documento, local de prova, caneta, horário e deslocamento.',
      '- Dormir melhor vale mais que estudar madrugada inteira.',
      '- Revisar pegadinhas, não abrir tema novo pesado.',
    ].join('\n');
    downloadFile(`pacote-reta-final-itupeva-${new Date().toISOString().slice(0, 10)}.md`, pack, 'text/markdown');
    recordExport('pacote-reta-final');
    setStatus('Pacote de reta final exportado.');
  }

  function toggleCheck(id) {
    setProgress((current) => ({ ...current, checklist: { ...(current.checklist || {}), [id]: !current.checklist?.[id] } }));
  }

  function markInstallCheck() {
    setProgress((current) => ({ ...current, installedCheck: !current.installedCheck }));
    setStatus('Checklist PWA atualizado. Em Safari/Chrome, use Compartilhar/Instalar ou Adicionar à Tela Inicial quando disponível.');
  }

  return (
    <div className="page-grid offline-page">
      <section className="mentor-hero offline-hero">
        <div>
          <Badge tone="green">fase 33 · offline e exportação</Badge>
          <h1>Modo Offline/PWA e Exportação Completa</h1>
          <p>Central para proteger seus dados, gerar relatórios, salvar pacotes de revisão e preparar o app para uso offline quando o navegador permitir.</p>
          <div className="hero-actions">
            <Button onClick={exportBackup}>Exportar backup completo</Button>
            <Button variant="secondary" onClick={exportReport}>Gerar relatório</Button>
            <Button variant="ghost" onClick={exportSprintPack}>Pacote reta final</Button>
          </div>
        </div>
        <div className="mentor-readiness" style={{ '--mentor-readiness': `${checklistPercent}%` }}>
          <strong>{checklistPercent}%</strong>
          <span>pronto offline</span>
        </div>
      </section>

      <Card variant="highlight"><strong>{status}</strong></Card>

      <div className="stats-grid">
        <Card><span className="stat-label">Dados locais</span><strong className="stat-value">{storageKeys.length}</strong><small>chaves do app encontradas</small></Card>
        <Card><span className="stat-label">Exports</span><strong className="stat-value">{progress.exports?.length || 0}</strong><small>últimos arquivos gerados</small></Card>
        <Card><span className="stat-label">Checklist</span><strong className="stat-value">{checklistDone}/{checklist.length}</strong><small>preparo de segurança</small></Card>
        <Card><span className="stat-label">PWA</span><strong className="stat-value small-stat">{progress.installedCheck ? 'checado' : 'pendente'}</strong><small>instalação depende do navegador</small></Card>
      </div>

      <div className="two-cols">
        <Card>
          <div className="section-heading">
            <div>
              <Badge tone="cyan">checklist</Badge>
              <h3>Segurança e uso offline</h3>
            </div>
            <strong>{checklistPercent}%</strong>
          </div>
          <ProgressBar label="Preparo offline" value={checklistPercent} />
          <div className="dry-law-list compact-list">
            {checklist.map((item) => {
              const done = progress.checklist?.[item.id];
              return (
                <article className={`dry-law-card ${done ? 'done' : ''}`} key={item.id}>
                  <div className="dry-law-topline">
                    <Badge tone={done ? 'green' : 'orange'}>{item.impact}</Badge>
                    <div className="dry-law-actions"><button type="button" onClick={() => toggleCheck(item.id)}>{done ? 'Feito ✓' : 'Marcar'}</button></div>
                  </div>
                  <h3>{item.label}</h3>
                </article>
              );
            })}
          </div>
        </Card>

        <Card variant="highlight">
          <div className="section-heading">
            <div>
              <Badge tone="purple">PWA</Badge>
              <h3>Instalação no navegador</h3>
            </div>
          </div>
          <ul className="strategy-list">
            <li><strong>Chrome/Edge:</strong> procure o ícone de instalar na barra de endereço.</li>
            <li><strong>Safari no iPhone:</strong> Compartilhar → Adicionar à Tela de Início.</li>
            <li><strong>Mac:</strong> Safari/Chrome podem permitir adicionar ao Dock dependendo da versão.</li>
            <li><strong>Offline:</strong> depois de abrir uma vez, o service worker tenta manter a tela principal em cache.</li>
          </ul>
          <div className="hero-actions">
            <Button variant="secondary" onClick={markInstallCheck}>{progress.installedCheck ? 'Desmarcar checagem' : 'Marcar como checado'}</Button>
            <Button variant="ghost" onClick={() => onNavigate('rapida')}>Abrir Revisão Rápida</Button>
          </div>
        </Card>
      </div>

      <Card>
        <div className="section-heading">
          <div>
            <Badge tone="green">histórico</Badge>
            <h3>Últimas exportações</h3>
          </div>
        </div>
        {(progress.exports || []).length === 0 ? (
          <p className="muted">Nenhum arquivo exportado ainda.</p>
        ) : (
          <div className="timeline-grid">
            {progress.exports.map((item, index) => (
              <div className="mini-panel" key={`${item.type}-${item.date}-${index}`}>
                <span>{item.type}</span>
                <strong>{new Date(item.date).toLocaleString('pt-BR')}</strong>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

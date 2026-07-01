import { useMemo, useRef, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import {
  APP_VERSION,
  downloadBackupFile,
  getStorageDiagnostics,
  readBackupFile,
  resetStorageArea,
  restoreBackupPayload,
  storageAreas,
} from '../utils/backup';
import { clearAppStorage } from '../utils/storage';

export default function Settings() {
  const fileInputRef = useRef(null);
  const [diagnostics, setDiagnostics] = useState(() => getStorageDiagnostics());
  const [status, setStatus] = useState({ tone: 'cyan', message: 'Sistema pronto para proteger seu progresso.' });
  const [pendingBackup, setPendingBackup] = useState(null);
  const [replaceOnImport, setReplaceOnImport] = useState(true);

  const filledAreas = useMemo(() => diagnostics.byArea.filter((area) => area.exists).length, [diagnostics]);
  const healthPercent = Math.round((filledAreas / storageAreas.length) * 100);

  function refreshDiagnostics(message = 'Diagnóstico atualizado.') {
    setDiagnostics(getStorageDiagnostics());
    setStatus({ tone: 'cyan', message });
  }

  function handleExport() {
    const payload = downloadBackupFile();
    setDiagnostics(getStorageDiagnostics());
    setStatus({ tone: 'green', message: `Backup exportado com ${Object.keys(payload.data || {}).length} áreas de dados.` });
  }

  async function handleImportFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const payload = await readBackupFile(file);
      setPendingBackup(payload);
      setStatus({ tone: 'orange', message: `Backup carregado: ${new Date(payload.exportedAt).toLocaleString('pt-BR')}. Confirme para restaurar.` });
    } catch (error) {
      setPendingBackup(null);
      setStatus({ tone: 'red', message: error.message || 'Não foi possível ler este backup.' });
    } finally {
      event.target.value = '';
    }
  }

  function handleRestore() {
    if (!pendingBackup) return;
    try {
      const imported = restoreBackupPayload(pendingBackup, { replace: replaceOnImport });
      setPendingBackup(null);
      setDiagnostics(getStorageDiagnostics());
      setStatus({ tone: 'green', message: `Backup restaurado com sucesso. ${imported} áreas importadas. Recarregue o app para atualizar todas as telas.` });
    } catch (error) {
      setStatus({ tone: 'red', message: error.message || 'Falha ao restaurar backup.' });
    }
  }

  function handleResetAll() {
    if (!confirm('Apagar todo o progresso local do app? Esta ação não pode ser desfeita sem backup.')) return;
    clearAppStorage();
    setDiagnostics(getStorageDiagnostics());
    setStatus({ tone: 'red', message: 'Dados locais apagados. Recarregue o app para começar limpo.' });
  }

  function handleResetArea(area) {
    if (!confirm(`Limpar apenas ${area.label}?`)) return;
    const updated = resetStorageArea(area.id);
    setDiagnostics(updated);
    setStatus({ tone: 'orange', message: `${area.label} foi limpo sem apagar o restante do app.` });
  }

  return (
    <div className="settings-page page-grid">
      <section className="settings-hero">
        <div>
          <Badge tone="purple">fase 13</Badge>
          <h1>Configurações, Backup e Reset Seguro</h1>
          <p>Proteja sua evolução, exporte seu progresso, restaure backups e limpe somente o que precisar sem destruir o app inteiro.</p>
        </div>
        <div className="settings-health-card">
          <span>Saúde dos dados</span>
          <strong>{healthPercent}%</strong>
          <small>{diagnostics.totalKeys} áreas salvas · {diagnostics.totalSizeKb} KB locais</small>
        </div>
      </section>

      <Card variant="highlight" className="settings-status-card">
        <div>
          <Badge tone={status.tone === 'red' ? 'orange' : status.tone}>{status.tone === 'green' ? 'seguro' : status.tone === 'red' ? 'atenção' : 'controle'}</Badge>
          <h2>{status.message}</h2>
          <p>Antes de limpar dados, exporte um backup. O app salva tudo apenas no navegador deste Mac.</p>
        </div>
        <div className="settings-actions-row">
          <Button onClick={handleExport}>Exportar backup</Button>
          <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>Importar backup</Button>
          <Button variant="ghost" onClick={() => refreshDiagnostics()}>Rodar diagnóstico</Button>
          <Button variant="danger" onClick={handleResetAll}>Reset total</Button>
          <input ref={fileInputRef} type="file" accept="application/json,.json" onChange={handleImportFile} hidden />
        </div>
      </Card>

      {pendingBackup && (
        <Card className="backup-preview-card">
          <Badge tone="orange">backup carregado</Badge>
          <h2>Confirmar restauração</h2>
          <p>Arquivo de {new Date(pendingBackup.exportedAt).toLocaleString('pt-BR')} com {Object.keys(pendingBackup.data || {}).length} áreas de dados.</p>
          <label className="settings-toggle-line">
            <input type="checkbox" checked={replaceOnImport} onChange={(event) => setReplaceOnImport(event.target.checked)} />
            <span>Substituir dados atuais antes de importar</span>
          </label>
          <div className="hero-actions">
            <Button variant="success" onClick={handleRestore}>Restaurar agora</Button>
            <Button variant="ghost" onClick={() => setPendingBackup(null)}>Cancelar</Button>
          </div>
        </Card>
      )}

      <div className="page-grid two-cols">
        <Card>
          <Badge tone="cyan">diagnóstico local</Badge>
          <h2>Mapa dos dados salvos</h2>
          <p>Veja quais módulos já têm progresso salvo neste navegador.</p>
          <ProgressBar label="Cobertura de dados" value={healthPercent} />
          <div className="storage-area-list">
            {diagnostics.byArea.map((area) => (
              <div className={`storage-area-row ${area.exists ? 'area-exists' : ''}`} key={area.id}>
                <div>
                  <strong>{area.label}</strong>
                  <span>{area.description}</span>
                  <small>{area.exists ? `${area.count} registros · ${area.sizeKb} KB` : 'sem dados salvos ainda'}</small>
                </div>
                <div className="storage-area-actions">
                  <Badge tone={area.exists ? 'green' : 'orange'}>{area.exists ? 'salvo' : 'vazio'}</Badge>
                  {area.exists && <Button variant="ghost" onClick={() => handleResetArea(area)}>Limpar</Button>}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Badge tone="purple">proteção</Badge>
          <h2>Central de segurança</h2>
          <div className="safety-checklist">
            <div><strong>Backup antes de reset</strong><span>Exporte um JSON com questões, simulados, revisão, flashcards, plano e matérias.</span></div>
            <div><strong>Importação validada</strong><span>O app recusa arquivo que não pertence ao Procurador Itupeva Cinematic Study.</span></div>
            <div><strong>Reset por módulo</strong><span>Limpe só Simulados, só Flashcards ou só Questões quando quiser recomeçar um treino.</span></div>
            <div><strong>Sem backend</strong><span>Todos os dados ficam neste navegador. Trocar de Mac exige exportar e importar backup.</span></div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="section-heading">
          <div>
            <Badge tone="green">versão</Badge>
            <h2>{APP_VERSION}</h2>
          </div>
          <Button variant="secondary" onClick={() => window.location.reload()}>Recarregar app</Button>
        </div>
        <p>Use esta tela sempre que baixar uma nova fase. Se algo parecer estranho, rode diagnóstico, exporte backup e recarregue o app.</p>
        {diagnostics.unknownKeys.length > 0 && (
          <div className="unknown-keys-box">
            <strong>Chaves extras encontradas:</strong>
            <span>{diagnostics.unknownKeys.join(', ')}</span>
          </div>
        )}
      </Card>
    </div>
  );
}

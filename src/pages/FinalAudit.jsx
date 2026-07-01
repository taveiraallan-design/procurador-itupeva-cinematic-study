import { useMemo, useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FINAL_AUDIT_KEY, buildReleaseNotes, finalChecklist, initialFinalAuditProgress, runFinalAudit } from '../utils/finalAuditEngine';

function downloadText(filename, text, type = 'text/markdown') {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function FinalAudit({ onNavigate, navItems = [] }) {
  const [progress, setProgress] = useLocalStorage(FINAL_AUDIT_KEY, initialFinalAuditProgress);
  const [audit, setAudit] = useState(() => runFinalAudit(navItems));

  const completed = useMemo(() => Object.values(progress.checklist || {}).filter(Boolean).length, [progress]);
  const checklistPercent = Math.round((completed / finalChecklist.length) * 100);

  function toggleChecklist(id) {
    setProgress((current) => ({
      ...current,
      checklist: { ...(current.checklist || {}), [id]: !current.checklist?.[id] },
    }));
  }

  function rerunAudit() {
    const nextAudit = runFinalAudit(navItems);
    setAudit(nextAudit);
    setProgress((current) => ({ ...current, lastAuditAt: nextAudit.generatedAt }));
  }

  function acceptRelease() {
    const nextAudit = runFinalAudit(navItems);
    setAudit(nextAudit);
    setProgress((current) => ({
      ...current,
      releaseAccepted: true,
      lastAuditAt: nextAudit.generatedAt,
    }));
  }

  return (
    <div className="page-grid final-page">
      <section className="hero-panel final-hero">
        <div>
          <Badge tone="green">fase 35 concluída</Badge>
          <h1>Versão fechada para estudo real.</h1>
          <p>
            Auditoria final, polimento visual, responsividade mobile e checklist de liberação. A partir daqui o app deixa de ser obra e vira ferramenta diária de preparação.
          </p>
          <div className="hero-actions">
            <Button onClick={rerunAudit}>Rodar auditoria agora</Button>
            <Button variant="secondary" onClick={() => downloadText('procurador-itupeva-release-notes.md', buildReleaseNotes())}>Baixar release notes</Button>
            <Button variant="ghost" onClick={() => onNavigate('mentor')}>Ir para Mentor</Button>
          </div>
        </div>
        <div className="release-seal" aria-label={`Score de auditoria ${audit.score}%`}>
          <span>{audit.score}%</span>
          <small>{audit.status}</small>
        </div>
      </section>

      <div className="stats-grid">
        <Card><span className="stat-label">Fases concluídas</span><strong className="stat-value">35</strong><small>versão premium fechada</small></Card>
        <Card><span className="stat-label">Auditoria</span><strong className="stat-value">{audit.passed}/{audit.total}</strong><small>checagens internas aprovadas</small></Card>
        <Card><span className="stat-label">Checklist final</span><strong className="stat-value">{completed}/{finalChecklist.length}</strong><small>{checklistPercent}% validado por você</small></Card>
        <Card><span className="stat-label">Status</span><strong className="stat-value text-small">{progress.releaseAccepted ? 'Aceita' : 'Pendente'}</strong><small>liberação manual da versão</small></Card>
      </div>

      <Card variant="highlight">
        <div className="section-heading">
          <div>
            <Badge tone="cyan">auditoria técnica</Badge>
            <h3>Smoke test interno</h3>
          </div>
          <strong>{audit.score}%</strong>
        </div>
        <ProgressBar label="Integridade geral" value={audit.score} />
        <div className="audit-grid">
          {audit.checks.map((check) => (
            <div key={check.id} className={`audit-check ${check.ok ? 'ok' : 'warn'}`}>
              <strong>{check.ok ? '✓' : '!'}</strong>
              <div>
                <b>{check.label}</b>
                <span>{check.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="section-heading">
          <div>
            <Badge tone="purple">checklist de liberação</Badge>
            <h3>Antes de usar como rotina oficial</h3>
          </div>
          <strong>{checklistPercent}%</strong>
        </div>
        <div className="task-list">
          {finalChecklist.map((item) => (
            <button key={item.id} type="button" className={`task-row checklist-row ${progress.checklist?.[item.id] ? 'done' : ''}`} onClick={() => toggleChecklist(item.id)}>
              <div>
                <strong>{progress.checklist?.[item.id] ? '✓ ' : ''}{item.title}</strong>
                <span>{item.detail}</span>
              </div>
              <small>{progress.checklist?.[item.id] ? 'validado' : 'marcar'}</small>
            </button>
          ))}
        </div>
        <div className="hero-actions">
          <Button variant="success" onClick={acceptRelease}>Aceitar versão fechada</Button>
          <Button variant="secondary" onClick={() => onNavigate('offline')}>Fazer backup/exportar</Button>
          <Button variant="ghost" onClick={() => onNavigate('configuracoes')}>Abrir configurações</Button>
        </div>
      </Card>

      <div className="two-cols">
        <Card>
          <Badge tone="green">rotina final</Badge>
          <h3>Como usar daqui para frente</h3>
          <div className="insight-list">
            <span>1. Abra o Mentor e faça só a próxima ação.</span>
            <span>2. Responda questões e mande os erros para revisão.</span>
            <span>3. Faça uma discursiva curta e aceite/ajuste a correção sugerida.</span>
            <span>4. Use Sprint Final para saber a carga do dia.</span>
            <span>5. Na semana da prova, use Véspera e Revisão Rápida.</span>
          </div>
        </Card>

        <Card>
          <Badge tone="orange">anti-tela branca</Badge>
          <h3>Plano de emergência</h3>
          <p>Se alguma aba falhar, volte ao Dashboard. Se o app travar por dado antigo, use Configurações ou o modo seguro para limpeza local.</p>
          <div className="hero-actions">
            <Button variant="secondary" onClick={() => onNavigate('dashboard')}>Voltar ao Dashboard</Button>
            <Button variant="ghost" onClick={() => onNavigate('configuracoes')}>Reset seguro</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

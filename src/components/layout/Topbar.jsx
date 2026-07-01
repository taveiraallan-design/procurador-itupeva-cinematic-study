import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function Topbar({ title, subtitle, focusMode, onToggleFocus }) {
  return (
    <header className="topbar">
      <div>
        <Badge tone="cyan">Procurador Itupeva 2026</Badge>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <Button variant={focusMode ? 'success' : 'ghost'} onClick={onToggleFocus}>
        {focusMode ? 'Modo foco ativo' : 'Ativar modo foco'}
      </Button>
    </header>
  );
}

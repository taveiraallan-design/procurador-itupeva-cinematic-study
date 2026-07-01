const icons = {
  dashboard: '⌂',
  mentor: '✦',
  sprint: '⏱',
  vespera: '☽',
  erros: '!',
  mapas: '◎',
  timeline: '⌁',
  'lei-seca': '¶',
  plano: '▦',
  materias: '◫',
  edital: '§',
  questoes: '✎',
  simulados: '◉',
  revisao: '↻',
  flashcards: '▣',
  simulator: '◈',
  estatisticas: '◍',
  oral: '◌',
  banca: '◇',
  'simulados-pro': '◉',
  ranking: '▲',
  rapida: '♫',
  offline: '⇩',
  final: '✓',
  configuracoes: '⚙',
};

export default function Sidebar({ items, activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">IP</div>
        <div>
          <h1>Itupeva</h1>
          <p>Cinematic Study</p>
        </div>
      </div>

      <nav className="nav-list" aria-label="Navegação principal">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-icon">{icons[item.id] || '•'}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot" />
        <div>
          <strong>Versão 35</strong>
          <small>premium fechada</small>
        </div>
      </div>
    </aside>
  );
}

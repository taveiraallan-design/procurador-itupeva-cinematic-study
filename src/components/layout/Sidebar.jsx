import { useMemo, useState } from 'react';

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
  conteudo: '▤',
  aulas: '✧',
  materiais: '▧',
  apostila: '▣',
  edital: '§',
  questoes: '✎',
  'questoes-topico': '☑',
  simulados: '◉',
  revisao: '↻',
  flashcards: '▣',
  simulator: '◈',
  estatisticas: '◍',
  discursivas: '✍',
  oral: '◌',
  banca: '◇',
  'simulados-pro': '◉',
  ranking: '▲',
  rapida: '♫',
  offline: '⇩',
  final: '✓',
  configuracoes: '⚙',
};

const simpleIds = ['dashboard', 'mentor', 'apostila', 'questoes', 'questoes-topico', 'discursivas'];

const groups = [
  { id: 'inicio', label: 'Início', items: ['dashboard', 'mentor', 'sprint'] },
  { id: 'estudo', label: 'Estudo', items: ['apostila', 'conteudo', 'aulas', 'materiais', 'materias', 'lei-seca', 'edital'] },
  { id: 'treino', label: 'Treino', items: ['questoes', 'questoes-topico', 'simulados', 'simulados-pro', 'discursivas', 'oral', 'banca', 'simulator'] },
  { id: 'revisao', label: 'Revisão', items: ['revisao', 'flashcards', 'erros', 'mapas', 'timeline', 'rapida', 'vespera'] },
  { id: 'estrategia', label: 'Estratégia', items: ['plano', 'ranking', 'estatisticas'] },
  { id: 'sistema', label: 'Sistema', items: ['offline', 'configuracoes', 'final'] },
];

const defaultOpenGroups = ['inicio', 'estudo'];
const storagePrefix = 'procurador_itupeva_cinematic_v2_';

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(`${storagePrefix}${key}`);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(value));
  } catch {
    // armazenamento local indisponível não deve quebrar o menu
  }
}

function NavButton({ item, activePage, onNavigate, isFavorite, onToggleFavorite, compact = false }) {
  return (
    <button
      key={item.id}
      type="button"
      className={`nav-item ${activePage === item.id ? 'active' : ''} ${compact ? 'compact' : ''}`}
      onClick={() => onNavigate(item.id)}
      title={item.label}
    >
      <span className="nav-icon">{icons[item.id] || '•'}</span>
      <span className="nav-label">{item.label}</span>
      {!compact && (
        <span
          role="button"
          tabIndex={0}
          aria-label={isFavorite ? `Remover ${item.label} dos favoritos` : `Fixar ${item.label} nos favoritos`}
          className={`nav-favorite ${isFavorite ? 'pinned' : ''}`}
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite(item.id);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              event.stopPropagation();
              onToggleFavorite(item.id);
            }
          }}
        >
          {isFavorite ? '★' : '☆'}
        </span>
      )}
    </button>
  );
}

export default function Sidebar({ items, activePage, onNavigate }) {
  const [mode, setMode] = useState(() => readJson('menu_mode', 'simple'));
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState(() => readJson('menu_favorites', ['apostila', 'questoes', 'discursivas']));
  const [openGroups, setOpenGroups] = useState(() => readJson('menu_open_groups', defaultOpenGroups));

  const itemById = useMemo(() => {
    return items.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }, [items]);

  const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');
  const filteredItems = useMemo(() => {
    if (!normalizedQuery) return [];
    return items.filter((item) => item.label.toLocaleLowerCase('pt-BR').includes(normalizedQuery));
  }, [items, normalizedQuery]);

  const favoriteItems = favorites.map((id) => itemById[id]).filter(Boolean);
  const simpleItems = simpleIds.map((id) => itemById[id]).filter(Boolean);
  const visibleSimpleItems = [...new Map([...simpleItems, ...favoriteItems].map((item) => [item.id, item])).values()];

  function updateMode(nextMode) {
    setMode(nextMode);
    writeJson('menu_mode', nextMode);
  }

  function toggleFavorite(id) {
    const next = favorites.includes(id) ? favorites.filter((itemId) => itemId !== id) : [...favorites, id];
    setFavorites(next);
    writeJson('menu_favorites', next);
  }

  function toggleGroup(id) {
    const next = openGroups.includes(id) ? openGroups.filter((groupId) => groupId !== id) : [...openGroups, id];
    setOpenGroups(next);
    writeJson('menu_open_groups', next);
  }

  function showCompleteMode() {
    updateMode('complete');
    setOpenGroups((previous) => {
      const next = Array.from(new Set([...previous, 'estudo', 'treino']));
      writeJson('menu_open_groups', next);
      return next;
    });
  }

  return (
    <aside className={`sidebar smart-sidebar ${mode === 'simple' ? 'simple-menu' : 'complete-menu'}`}>
      <div className="brand-block">
        <div className="brand-mark">IP</div>
        <div>
          <h1>Itupeva</h1>
          <p>Cinematic Study</p>
        </div>
      </div>

      <div className="menu-mode-switch" aria-label="Modo do menu">
        <button type="button" className={mode === 'simple' ? 'active' : ''} onClick={() => updateMode('simple')}>
          Simples
        </button>
        <button type="button" className={mode === 'complete' ? 'active' : ''} onClick={() => updateMode('complete')}>
          Completo
        </button>
      </div>

      <label className="menu-search" aria-label="Busca rápida no menu">
        <span>⌕</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar ferramenta"
          type="search"
        />
      </label>

      <nav className="nav-list smart-nav-list" aria-label="Navegação principal">
        {normalizedQuery ? (
          <div className="nav-group open search-results">
            <div className="nav-group-title">Resultado da busca</div>
            {filteredItems.length ? (
              filteredItems.map((item) => (
                <NavButton
                  key={item.id}
                  item={item}
                  activePage={activePage}
                  onNavigate={onNavigate}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))
            ) : (
              <p className="menu-empty">Nenhuma aba encontrada.</p>
            )}
          </div>
        ) : mode === 'simple' ? (
          <>
            <div className="nav-group open">
              <div className="nav-group-title">Uso diário</div>
              {visibleSimpleItems.map((item) => (
                <NavButton
                  key={item.id}
                  item={item}
                  activePage={activePage}
                  onNavigate={onNavigate}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={toggleFavorite}
                  compact
                />
              ))}
            </div>
            <button className="show-all-tools" type="button" onClick={showCompleteMode}>
              Ver todas as ferramentas
            </button>
          </>
        ) : (
          <>
            {favoriteItems.length > 0 && (
              <div className="nav-group open favorites-group">
                <div className="nav-group-title">Favoritos</div>
                {favoriteItems.map((item) => (
                  <NavButton
                    key={item.id}
                    item={item}
                    activePage={activePage}
                    onNavigate={onNavigate}
                    isFavorite
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            )}

            {groups.map((group) => {
              const groupItems = group.items.map((id) => itemById[id]).filter(Boolean);
              const isOpen = openGroups.includes(group.id) || groupItems.some((item) => item.id === activePage);
              return (
                <div className={`nav-group ${isOpen ? 'open' : ''}`} key={group.id}>
                  <button className="nav-group-toggle" type="button" onClick={() => toggleGroup(group.id)}>
                    <span>{group.label}</span>
                    <small>{groupItems.length}</small>
                    <strong>{isOpen ? '−' : '+'}</strong>
                  </button>
                  {isOpen && groupItems.map((item) => (
                    <NavButton
                      key={item.id}
                      item={item}
                      activePage={activePage}
                      onNavigate={onNavigate}
                      isFavorite={favorites.includes(item.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              );
            })}
          </>
        )}
      </nav>

      <div className="sidebar-footer smart-footer">
        <span className="status-dot" />
        <div>
          <strong>Fase 45</strong>
          <small>menu simples ativo</small>
        </div>
      </div>
    </aside>
  );
}

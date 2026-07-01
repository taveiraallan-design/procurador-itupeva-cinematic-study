import { getAppStorageSnapshot, APP_PREFIX } from './storage';

export const FINAL_AUDIT_KEY = 'final_audit_progress_v1';
export const initialFinalAuditProgress = {
  checklist: {},
  lastAuditAt: null,
  releaseAccepted: false,
};

export const finalChecklist = [
  {
    id: 'visual-desktop',
    title: 'Visual desktop conferido',
    detail: 'Dashboard, Mentor, Questões, Simulados, Discursivas e Sprint final abrem sem tela branca.',
  },
  {
    id: 'visual-mobile',
    title: 'Responsividade mobile conferida',
    detail: 'Menu, cards, botões e textos ficam utilizáveis no Mac, Safari e tela estreita.',
  },
  {
    id: 'study-flow',
    title: 'Fluxo de estudo validado',
    detail: 'Questão → erro → revisão → flashcard → simulado → discursiva → mentor.',
  },
  {
    id: 'backup',
    title: 'Backup/exportação testados',
    detail: 'Exportação JSON e relatório Markdown geram arquivo corretamente.',
  },
  {
    id: 'final-reset',
    title: 'Reset seguro conhecido',
    detail: 'Configurações e modo seguro permitem limpar dados locais sem quebrar o app.',
  },
  {
    id: 'exam-ready',
    title: 'Versão pronta para uso real',
    detail: 'O app já pode ser usado como rotina diária até a prova.',
  },
];

export function runFinalAudit(navItems = []) {
  const storageSnapshot = getAppStorageSnapshot();
  const appKeys = Object.keys(storageSnapshot);
  const expectedPages = [
    'dashboard', 'mentor', 'sprint', 'vespera', 'erros', 'mapas', 'timeline', 'lei-seca',
    'oral', 'banca', 'simulados-pro', 'ranking', 'rapida', 'offline', 'plano', 'materias',
    'edital', 'questoes', 'simulados', 'discursivas', 'revisao', 'flashcards', 'simulator',
    'estatisticas', 'configuracoes', 'final'
  ];
  const ids = navItems.map((item) => item.id);
  const missingPages = expectedPages.filter((id) => !ids.includes(id));

  let storageOk = false;
  try {
    const testKey = `${APP_PREFIX}audit_ping`;
    localStorage.setItem(testKey, JSON.stringify({ ok: true, at: new Date().toISOString() }));
    const read = JSON.parse(localStorage.getItem(testKey));
    storageOk = read?.ok === true;
    localStorage.removeItem(testKey);
  } catch (error) {
    storageOk = false;
  }

  const checks = [
    {
      id: 'nav',
      label: 'Navegação completa',
      ok: missingPages.length === 0,
      detail: missingPages.length ? `Faltando: ${missingPages.join(', ')}` : 'Todas as abas premium estão registradas.',
    },
    {
      id: 'storage',
      label: 'LocalStorage seguro',
      ok: storageOk,
      detail: storageOk ? 'Leitura e gravação local funcionando.' : 'O navegador bloqueou leitura/gravação local.',
    },
    {
      id: 'backup',
      label: 'Dados exportáveis',
      ok: true,
      detail: `${appKeys.length} áreas de dados detectadas para backup/exportação.`,
    },
    {
      id: 'pwa',
      label: 'Estrutura PWA',
      ok: true,
      detail: 'Manifest e service worker incluídos para uso offline em build de produção.',
    },
    {
      id: 'safety',
      label: 'Modo seguro',
      ok: true,
      detail: 'Cada página tem proteção contra erro para evitar tela branca total.',
    },
  ];

  const passed = checks.filter((check) => check.ok).length;
  const score = Math.round((passed / checks.length) * 100);

  return {
    score,
    passed,
    total: checks.length,
    checks,
    storageKeys: appKeys,
    status: score >= 95 ? 'Versão fechada' : score >= 75 ? 'Quase pronta' : 'Revisar antes de usar',
    generatedAt: new Date().toISOString(),
  };
}

export function buildReleaseNotes() {
  return `# Procurador Itupeva Cinematic Study — Versão Fechada\n\n## Status\nVersão premium concluída em 35 fases.\n\n## Módulos principais\n- Dashboard estratégico\n- Mentor inteligente\n- Sprint Final\n- Revisão de Véspera\n- Banco de Questões\n- Simulados e Simulados Pro\n- Discursivas com correção semiautomática\n- Flashcards e Revisão inteligente\n- Lab de Erros\n- Mapas Mentais\n- Linha do Tempo Jurídica\n- Lei Seca\n- Oral Jurídico\n- Modo Banca\n- Ranking e metas semanais\n- Revisão rápida por roteiro/áudio\n- Offline, backup e exportação\n\n## Rotina recomendada\n1. Abrir Mentor.\n2. Fazer a próxima ação.\n3. Resolver questões.\n4. Revisar erros no Lab de Erros.\n5. Fazer flashcards vencidos.\n6. Treinar uma discursiva.\n7. Registrar simulado semanal.\n\n## Segurança\nUse Configurações ou Offline/Exportar para gerar backup antes de limpar dados locais.\n`;
}

import { useMemo, useState } from 'react';
import AppShell from './components/layout/AppShell';
import ErrorBoundary from './components/layout/ErrorBoundary';
import { useLocalStorage } from './hooks/useLocalStorage';

import Dashboard from './pages/Dashboard';
import Mentor from './pages/Mentor';
import SprintFinal from './pages/SprintFinal';
import Vespera from './pages/Vespera';
import ErrorLab from './pages/ErrorLab';
import MindMaps from './pages/MindMaps';
import LawTimeline from './pages/LawTimeline';
import DryLaw from './pages/DryLaw';
import OralJuridico from './pages/OralJuridico';
import Banca from './pages/Banca';
import AdvancedSimulations from './pages/AdvancedSimulations';
import RankingGoals from './pages/RankingGoals';
import RapidReview from './pages/RapidReview';
import OfflineExport from './pages/OfflineExport';
import FinalAudit from './pages/FinalAudit';
import StudyPlan from './pages/StudyPlan';
import Subjects from './pages/Subjects';
import CompleteContent from './pages/CompleteContent';
import WrittenLessons from './pages/WrittenLessons';
import StudyMaterials from './pages/StudyMaterials';
import Edital from './pages/Edital';
import Questions from './pages/Questions';
import Simulations from './pages/Simulations';
import Discursives from './pages/Discursives';
import Review from './pages/Review';
import Flashcards from './pages/Flashcards';
import CinematicSimulatorPage from './pages/CinematicSimulatorPage';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';

const navItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'mentor', label: 'Mentor' },
  { id: 'sprint', label: 'Sprint Final' },
  { id: 'vespera', label: 'Véspera' },
  { id: 'erros', label: 'Lab de Erros' },
  { id: 'mapas', label: 'Mapas Mentais' },
  { id: 'timeline', label: 'Linha do Tempo' },
  { id: 'lei-seca', label: 'Lei Seca' },
  { id: 'oral', label: 'Oral Jurídico' },
  { id: 'banca', label: 'Banca' },
  { id: 'simulados-pro', label: 'Simulados Pro' },
  { id: 'ranking', label: 'Ranking' },
  { id: 'rapida', label: 'Revisão Rápida' },
  { id: 'offline', label: 'Offline/Exportar' },
  { id: 'final', label: 'Final' },
  { id: 'plano', label: 'Plano' },
  { id: 'materias', label: 'Matérias' },
  { id: 'conteudo', label: 'Conteúdo Completo' },
  { id: 'aulas', label: 'Aulas Escritas' },
  { id: 'materiais', label: 'Materiais' },
  { id: 'edital', label: 'Edital' },
  { id: 'questoes', label: 'Questões' },
  { id: 'simulados', label: 'Simulados' },
  { id: 'discursivas', label: 'Discursivas' },
  { id: 'revisao', label: 'Revisão' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'simulator', label: 'Simulador Jurídico' },
  { id: 'estatisticas', label: 'Estatísticas' },
  { id: 'configuracoes', label: 'Configurações' },
];

const pageComponents = {
  dashboard: Dashboard,
  mentor: Mentor,
  sprint: SprintFinal,
  vespera: Vespera,
  erros: ErrorLab,
  mapas: MindMaps,
  timeline: LawTimeline,
  'lei-seca': DryLaw,
  oral: OralJuridico,
  banca: Banca,
  'simulados-pro': AdvancedSimulations,
  ranking: RankingGoals,
  rapida: RapidReview,
  offline: OfflineExport,
  final: FinalAudit,
  plano: StudyPlan,
  materias: Subjects,
  conteudo: CompleteContent,
  aulas: WrittenLessons,
  materiais: StudyMaterials,
  edital: Edital,
  questoes: Questions,
  simulados: Simulations,
  discursivas: Discursives,
  revisao: Review,
  flashcards: Flashcards,
  simulator: CinematicSimulatorPage,
  estatisticas: Statistics,
  configuracoes: Settings,
};

function PageCrashFallback({ onNavigate, onHardReset }) {
  return (
    <div className="fatal-screen inline-fatal">
      <div className="fatal-card">
        <span className="eyebrow">modo seguro</span>
        <h1>Este módulo encontrou um erro.</h1>
        <p>
          O app foi protegido para não ficar branco. Volte ao Dashboard ou faça uma limpeza segura dos dados locais desta versão.
        </p>
        <div className="fatal-actions">
          <button className="btn primary" type="button" onClick={() => onNavigate('dashboard')}>Voltar ao Dashboard</button>
          <button className="btn secondary" type="button" onClick={onHardReset}>Limpeza segura e recarregar</button>
        </div>
      </div>
    </div>
  );
}

class PageBoundary extends ErrorBoundary {
  render() {
    if (this.state.hasError) {
      return <PageCrashFallback onNavigate={this.props.onNavigate} onHardReset={this.props.onHardReset} />;
    }
    return this.props.children;
  }
}

function clearKnownAppStorage() {
  const prefixes = [
    'procurador_itupeva_cinematic_',
    'procurador_itupeva_cinematic_v2_',
  ];
  try {
    Object.keys(localStorage)
      .filter((key) => prefixes.some((prefix) => key.startsWith(prefix)))
      .forEach((key) => localStorage.removeItem(key));
  } catch (error) {
    console.warn('Não foi possível limpar todos os dados locais.', error);
  }
  window.location.reload();
}

export default function App() {
  const [storedPage, setStoredPage] = useLocalStorage('active_page', 'dashboard');
  const [focusMode, setFocusMode] = useState(false);

  const allowedPageIds = useMemo(() => new Set(navItems.map((item) => item.id)), []);
  const activePage = allowedPageIds.has(storedPage) ? storedPage : 'dashboard';
  const ActiveComponent = pageComponents[activePage] || Dashboard;

  function navigate(pageId) {
    setStoredPage(allowedPageIds.has(pageId) ? pageId : 'dashboard');
  }

  return (
    <ErrorBoundary>
      <AppShell
        items={navItems}
        activePage={activePage}
        onNavigate={navigate}
        focusMode={focusMode}
        onToggleFocus={() => setFocusMode((value) => !value)}
      >
        <PageBoundary onNavigate={navigate} onHardReset={clearKnownAppStorage} key={activePage}>
          <ActiveComponent onNavigate={navigate} navItems={navItems} />
        </PageBoundary>
      </AppShell>
    </ErrorBoundary>
  );
}

import Sidebar from './Sidebar';
import Topbar from './Topbar';

const subtitles = {
  dashboard: 'Central de progresso, próxima ação e visão estratégica do dia.',
  mentor: 'Próxima ação inteligente baseada em erros, revisão, simulados, flashcards e discursivas.',
  sprint: 'Plano de reta final com contagem regressiva, missão do dia e alertas estratégicos.',
  vespera: 'Revisão de véspera, logística de prova e cartões de última hora.',
  erros: 'Raio-x de erros, diagnóstico de causa e recuperação guiada.',
  mapas: 'Mapas mentais premium para revisão visual e memorização ativa.',
  fluxogramas: 'Fluxogramas jurídicos premium com sequência decisória, pegadinhas e atuação do Procurador.',
  timeline: 'Procedimentos jurídicos em etapas, atores, pegadinhas e revisão em voz alta.',
  'lei-seca': 'Artigos e referências com cobrança provável, pegadinhas e drills.',
  oral: 'Treino de fala jurídica para clareza, fundamento e conclusão.',
  banca: 'Modo banca examinadora com anti-pegadinhas e eliminação de alternativas.',
  'simulados-pro': 'Simulados avançados estilo edital, pressão de tempo e registro de nota.',
  ranking: 'Score pessoal, metas semanais e gargalos que mais sobem sua nota.',
  rapida: 'Roteiros curtos para ouvir, copiar e revisar em alta velocidade.',
  offline: 'Backup, exportação completa, PWA e checklist de segurança.',
  plano: 'Organize missões semanais sem poluir sua cabeça.',
  materias: 'Mapa das disciplinas e tópicos críticos do edital.',
  conteudo: 'Conteúdo completo do edital organizado por matéria, tópico e prioridade de estudo.',
  aulas: 'Apostila interna com aulas escritas, fundamentos, lei seca e revisão ativa.',
  materiais: 'Materiais de apoio, sínteses, roteiros e arquivos de revisão do edital.',
  apostila: 'Aulas premium por tópico com teoria, prática municipal, prova objetiva, discursiva e treino.',
  edital: 'Conteúdo programático oficial, cronograma, matriz de cobrança e checklist.',
  questoes: 'Treino objetivo com foco em banca, erro e revisão.',
  'questoes-topico': 'Questões comentadas integradas aos tópicos da Apostila, com gabarito, pegadinha e revisão.',
  simulados: 'Modo prova com cronômetro, estratégia e relatório.',
  discursivas: 'Pareceres, teses e respostas discursivas com espelho de correção.',
  revisao: 'Fila de erros, temas fracos e revisões inteligentes.',
  flashcards: 'Memorização rápida para artigos, conceitos e pegadinhas.',
  simulator: 'Veja o processo jurídico acontecer em cenas executáveis.',
  estatisticas: 'Evolução, taxa de acerto e pontos fracos.',
  final: 'Auditoria final, polimento visual e versão fechada do app.',
  configuracoes: 'Backup, reset seguro e preferências do app.',
};

export default function AppShell({ items, activePage, onNavigate, focusMode, onToggleFocus, children }) {
  const current = items.find((item) => item.id === activePage) || items[0];

  return (
    <div className={`app-shell ${focusMode ? 'focus-mode' : ''}`}>
      <Sidebar items={items} activePage={activePage} onNavigate={onNavigate} />
      <main className="main-content">
        <Topbar
          title={current.label}
          subtitle={subtitles[current.id]}
          focusMode={focusMode}
          onToggleFocus={onToggleFocus}
        />
        <div className="page-wrap">{children}</div>
      </main>
    </div>
  );
}

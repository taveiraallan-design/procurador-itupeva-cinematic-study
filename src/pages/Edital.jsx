import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { officialExamMeta, officialSyllabus, getSyllabusCoverage } from '../data/officialSyllabus';
import { examSchedule } from '../data/examSchedule';
import { chargingMatrix, getPriorityPlan } from '../data/chargingMatrix';
import { questions } from '../data/questions';
import { localLawMatrix } from '../data/localLegislation';

export const SYLLABUS_PROGRESS_KEY = 'official_syllabus_progress_v1';
export const initialSyllabusProgress = { completed: {}, pinned: [], lastOpenedSubjectId: 'direito-administrativo' };

function percent(part, total) {
  return total ? Math.round((part / total) * 100) : 0;
}

function toneByRisk(risk) {
  if (risk === 'Muito alto') return 'orange';
  if (risk === 'Alto') return 'purple';
  return 'cyan';
}

export default function Edital({ onNavigate }) {
  const [progress, setProgress] = useLocalStorage(SYLLABUS_PROGRESS_KEY, initialSyllabusProgress);
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('Todos');
  const [selectedId, setSelectedId] = useState(progress.lastOpenedSubjectId || officialSyllabus[0].id);

  const coverage = useMemo(() => getSyllabusCoverage(questions), []);
  const groups = ['Todos', ...new Set(officialSyllabus.map((item) => item.group))];
  const selected = coverage.find((item) => item.id === selectedId) || coverage[0];
  const selectedCompleted = progress.completed?.[selected.id] || [];
  const totalTopics = officialSyllabus.reduce((sum, subject) => sum + subject.topics.length, 0);
  const completedTopics = Object.values(progress.completed || {}).reduce((sum, items) => sum + items.length, 0);
  const editalPercent = percent(completedTopics, totalTopics);
  const questionCoverage = percent(coverage.reduce((sum, item) => sum + item.questionCount, 0), Math.max(questions.length, 1));
  const priorityPlan = getPriorityPlan();

  const filteredSyllabus = coverage.filter((item) => {
    const haystack = `${item.subject} ${item.group} ${item.mission} ${item.topics.join(' ')}`.toLowerCase();
    const matchesQuery = haystack.includes(query.toLowerCase());
    const matchesGroup = group === 'Todos' || item.group === group;
    return matchesQuery && matchesGroup;
  });

  function selectSubject(id) {
    setSelectedId(id);
    setProgress((current) => ({ ...current, lastOpenedSubjectId: id }));
  }

  function toggleTopic(topic) {
    setProgress((current) => {
      const currentList = new Set(current.completed?.[selected.id] || []);
      if (currentList.has(topic)) currentList.delete(topic);
      else currentList.add(topic);
      return {
        ...current,
        completed: {
          ...(current.completed || {}),
          [selected.id]: [...currentList],
        },
      };
    });
  }

  function togglePinned(id) {
    setProgress((current) => {
      const next = new Set(current.pinned || []);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { ...current, pinned: [...next] };
    });
  }

  return (
    <div className="edital-page page-grid">
      <section className="edital-hero">
        <div>
          <Badge tone="cyan">edital oficial estruturado</Badge>
          <h1>Matriz do Edital</h1>
          <p>{officialExamMeta.contest} • {officialExamMeta.role} • {officialExamMeta.city}. Conteúdo programático convertido em checklist, prioridade, questões-alvo e plano de ataque.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate?.('questoes')}>Resolver questões do edital</Button>
            <Button variant="secondary" onClick={() => onNavigate?.('plano')}>Abrir plano inteligente</Button>
            <Button variant="ghost" onClick={() => onNavigate?.('simulados')}>Fazer simulado</Button>
          </div>
        </div>
        <div className="edital-command">
          <article><span>Edital coberto</span><strong>{editalPercent}%</strong></article>
          <article><span>Questões no banco</span><strong>{questions.length}</strong></article>
          <article><span>Tópicos oficiais</span><strong>{totalTopics}</strong></article>
          <article><span>Banca</span><strong>{officialExamMeta.board}</strong></article>
        </div>
      </section>

      <div className="edital-dashboard-grid">
        <Card variant="highlight">
          <Badge tone="orange">prova</Badge>
          <h3>Cronograma crítico</h3>
          <div className="schedule-list">
            {examSchedule.slice(0, 6).map((item) => (
              <div className="schedule-item" key={item.event}>
                <strong>{item.date}</strong>
                <span>{item.event}</span>
                <em>{item.status}</em>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Badge tone="purple">prioridade</Badge>
          <h3>Top 5 da cobrança</h3>
          <div className="priority-list">
            {priorityPlan.map((item, index) => (
              <button type="button" key={item.subject} onClick={() => selectSubject(coverage.find((s) => s.subject === item.subject)?.id || selected.id)}>
                <span>{index + 1}</span>
                <div><strong>{item.subject}</strong><small>{item.strategy}</small></div>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <Badge tone="cyan">diagnóstico</Badge>
          <h3>Cobertura por questões</h3>
          <p>O banco local já possui questões ligadas aos tópicos oficiais. A meta agora é aumentar a densidade nos assuntos críticos.</p>
          <ProgressBar label="Questões cadastradas" value={Math.min(100, questions.length)} />
          <ProgressBar label="Tópicos concluídos" value={editalPercent} />
          <ProgressBar label="Cobertura estratégica" value={Math.min(100, questionCoverage)} />
        </Card>
      </div>


      <Card className="local-law-card wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="orange">fase 16 • lei local profunda</Badge>
            <h3>Legislação municipal: mapa de cobrança</h3>
            <p>Blocos que conectam Lei Orgânica, servidores, tributação municipal, urbanismo e atuação prática da Procuradoria.</p>
          </div>
          <Button variant="secondary" onClick={() => onNavigate?.('questoes')}>Treinar lei local</Button>
        </div>
        <div className="local-law-grid">
          {localLawMatrix.map((item) => (
            <article key={item.id} className="local-law-item">
              <div>
                <Badge tone={item.risk === 'Muito alto' ? 'orange' : item.risk === 'Alto' ? 'purple' : 'cyan'}>{item.risk}</Badge>
                <h4>{item.title}</h4>
                <p>{item.mission}</p>
              </div>
              <div className="local-focus-list">
                {item.focus.map((focus) => <span key={focus}>{focus}</span>)}
              </div>
              <div className="local-trap-box">
                <strong>Pegadinhas</strong>
                {item.traps.slice(0, 2).map((trap) => <small key={trap}>• {trap}</small>)}
              </div>
              <em>{item.studyAction}</em>
            </article>
          ))}
        </div>
      </Card>

      <Card className="edital-filter-card wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="purple">conteúdo programático</Badge>
            <h3>Checklist oficial por matéria</h3>
          </div>
          <div className="edital-filter-actions">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar tópico do edital..." />
            <select value={group} onChange={(event) => setGroup(event.target.value)}>
              {groups.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>

        <div className="edital-layout">
          <div className="edital-subject-list">
            {filteredSyllabus.map((item) => {
              const done = progress.completed?.[item.id]?.length || 0;
              const completion = percent(done, item.topics.length);
              const isPinned = progress.pinned?.includes(item.id);
              return (
                <button
                  type="button"
                  key={item.id}
                  className={`edital-subject-card ${item.id === selected.id ? 'active' : ''}`}
                  onClick={() => selectSubject(item.id)}
                >
                  <div>
                    <Badge tone={toneByRisk(item.risk)}>{item.priority}</Badge>
                    {isPinned && <Badge tone="green">fixada</Badge>}
                  </div>
                  <strong>{item.subject}</strong>
                  <small>{item.questionCount} questões • {item.coverage}% dos tópicos com banco</small>
                  <ProgressBar label="Estudo" value={completion} />
                </button>
              );
            })}
          </div>

          <div className="edital-detail-panel">
            <div className="section-heading">
              <div>
                <Badge tone={toneByRisk(selected.risk)}>{selected.risk}</Badge>
                <h2>{selected.subject}</h2>
                <p>{selected.mission}</p>
              </div>
              <Button variant="ghost" onClick={() => togglePinned(selected.id)}>{progress.pinned?.includes(selected.id) ? 'Desfixar' : 'Fixar'}</Button>
            </div>

            <div className="edital-metrics-row">
              <article><span>Questões</span><strong>{selected.questionCount}</strong></article>
              <article><span>Meta</span><strong>{selected.suggestedQuestions}</strong></article>
              <article><span>Tópicos</span><strong>{selected.topics.length}</strong></article>
              <article><span>Concluídos</span><strong>{selectedCompleted.length}</strong></article>
            </div>

            <div className="topic-checklist">
              {selected.topics.map((topic) => {
                const checked = selectedCompleted.includes(topic);
                return (
                  <button type="button" key={topic} className={`topic-check ${checked ? 'checked' : ''}`} onClick={() => toggleTopic(topic)}>
                    <span>{checked ? '✓' : '+'}</span>
                    <strong>{topic}</strong>
                  </button>
                );
              })}
            </div>

            <div className="hero-actions">
              <Button onClick={() => onNavigate?.('questoes')}>Resolver questões</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('revisao')}>Revisar erros</Button>
              <Button variant="ghost" onClick={() => onNavigate?.('flashcards')}>Flashcards</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

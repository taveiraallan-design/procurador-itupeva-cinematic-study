import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { writtenLessons } from '../data/writtenLessons';

const WRITTEN_LESSONS_KEY = 'written_lessons_progress_v1';
const initialProgress = { selectedSubjectId: 'direito-administrativo', completedLessons: {}, notes: {}, copiedAt: null };

function normalize(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function tone(priority) {
  if (priority === 'Crítica') return 'orange';
  if (priority === 'Alta') return 'purple';
  return 'cyan';
}

function lessonToText(subject, lesson) {
  return [
    `AULA — ${subject.subject}: ${lesson.title}`,
    '',
    `Objetivo: ${lesson.objective}`,
    '',
    'Explicação:',
    ...lesson.explanation.map((item) => `- ${item}`),
    '',
    'Tópicos do edital:',
    ...lesson.topics.map((item) => `- ${item}`),
    '',
    'Como estudar:',
    ...lesson.howToStudy.map((item) => `- ${item}`),
    '',
    'Como a banca cobra:',
    ...lesson.bankCharges.map((item) => `- ${item}`),
    '',
    `Uso em discursiva/parecer: ${lesson.discursiveUse}`,
    '',
    'Perguntas de revisão ativa:',
    ...lesson.questionsToAsk.map((item) => `- ${item}`),
  ].join('\n');
}

export default function WrittenLessons({ onNavigate }) {
  const [progress, setProgress] = useLocalStorage(WRITTEN_LESSONS_KEY, initialProgress);
  const [query, setQuery] = useState('');
  const [openLessonId, setOpenLessonId] = useState(null);

  const filteredSubjects = useMemo(() => {
    const term = normalize(query);
    if (!term) return writtenLessons;
    return writtenLessons.filter((subject) =>
      normalize(subject.subject).includes(term)
      || normalize(subject.focus).includes(term)
      || subject.lessonModules.some((lesson) => normalize(`${lesson.title} ${lesson.topics.join(' ')}`).includes(term))
    );
  }, [query]);

  const activeSubject = writtenLessons.find((subject) => subject.id === progress.selectedSubjectId) || filteredSubjects[0] || writtenLessons[0];
  const completedSet = new Set(progress.completedLessons?.[activeSubject.id] || []);
  const totalLessons = writtenLessons.reduce((sum, subject) => sum + subject.lessonModules.length, 0);
  const doneLessons = Object.values(progress.completedLessons || {}).flat().length;
  const subjectCoverage = Math.round((completedSet.size / Math.max(activeSubject.lessonModules.length, 1)) * 100);
  const totalCoverage = Math.round((doneLessons / Math.max(totalLessons, 1)) * 100);
  const openLesson = activeSubject.lessonModules.find((lesson) => lesson.id === openLessonId) || activeSubject.lessonModules[0];

  function selectSubject(subjectId) {
    setProgress((current) => ({ ...current, selectedSubjectId: subjectId }));
    setOpenLessonId(null);
  }

  function toggleLesson(lessonId) {
    setProgress((current) => {
      const currentList = current.completedLessons?.[activeSubject.id] || [];
      const exists = currentList.includes(lessonId);
      return {
        ...current,
        completedLessons: {
          ...(current.completedLessons || {}),
          [activeSubject.id]: exists ? currentList.filter((id) => id !== lessonId) : [...currentList, lessonId]
        }
      };
    });
  }

  function updateNote(value) {
    setProgress((current) => ({
      ...current,
      notes: { ...(current.notes || {}), [openLesson.id]: value }
    }));
  }

  async function copyLesson() {
    await navigator.clipboard?.writeText(lessonToText(activeSubject, openLesson));
    setProgress((current) => ({ ...current, copiedAt: new Date().toISOString() }));
  }

  return (
    <div className="page-grid written-lessons-page">
      <section className="hero-panel written-lessons-hero">
        <div>
          <Badge tone="orange">Fase 37 • aulas escritas completas</Badge>
          <h1>Apostila interna por matéria</h1>
          <p>
            Aqui o edital vira aula escrita: explicação, base legal, tópicos, pegadinhas, uso em parecer e perguntas de revisão ativa.
          </p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate?.('conteudo')}>Ver Conteúdo Completo</Button>
            <Button variant="secondary" onClick={() => onNavigate?.('materiais')}>Abrir Materiais</Button>
            <Button variant="ghost" onClick={() => onNavigate?.('questoes')}>Treinar Questões</Button>
          </div>
        </div>
        <div className="mentor-score-card">
          <span>apostila lida</span>
          <strong>{totalCoverage}%</strong>
          <small>{doneLessons}/{totalLessons} aulas concluídas</small>
        </div>
      </section>

      <Card>
        <div className="subjects-toolbar">
          <div>
            <Badge tone="cyan">busca</Badge>
            <h2>Pesquisar aula, artigo ou tema</h2>
          </div>
          <div className="subjects-filter-actions">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: convalidação, remessa necessária, ISS, Lei Orgânica..." />
          </div>
        </div>
      </Card>

      <div className="written-lessons-layout">
        <aside className="written-subjects-menu">
          {filteredSubjects.map((subject) => {
            const done = progress.completedLessons?.[subject.id]?.length || 0;
            const percent = Math.round((done / Math.max(subject.lessonModules.length, 1)) * 100);
            return (
              <button key={subject.id} type="button" className={`written-subject-card ${subject.id === activeSubject.id ? 'active' : ''}`} onClick={() => selectSubject(subject.id)}>
                <span><Badge tone={tone(subject.priority)}>{subject.priority}</Badge></span>
                <strong>{subject.subject}</strong>
                <small>{done}/{subject.lessonModules.length} aulas • {percent}%</small>
              </button>
            );
          })}
        </aside>

        <main className="written-lessons-main">
          <Card variant="highlight">
            <div className="subject-detail-header">
              <div>
                <Badge tone={tone(activeSubject.priority)}>{activeSubject.risk}</Badge>
                <h2>{activeSubject.subject}</h2>
                <p>{activeSubject.focus}</p>
              </div>
              <Button variant="ghost" onClick={() => onNavigate?.('discursivas')}>Aplicar em Discursiva</Button>
            </div>
            <ProgressBar label={`Progresso da matéria: ${completedSet.size}/${activeSubject.lessonModules.length} aulas`} value={subjectCoverage} />
          </Card>

          <div className="written-foundation-grid">
            <Card>
              <Badge tone="green">base de estudo</Badge>
              <h3>Como pensar essa matéria</h3>
              {activeSubject.foundation.map((item) => <p key={item}>{item}</p>)}
            </Card>
            <Card>
              <Badge tone="purple">lei seca</Badge>
              <h3>O que ler no texto legal</h3>
              <ul className="compact-list">
                {activeSubject.mustRead.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
            <Card>
              <Badge tone="orange">parecer</Badge>
              <h3>Ponte para discursiva</h3>
              <p>{activeSubject.essayBridge}</p>
              <ul className="compact-list">
                {activeSubject.activeRecall.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
          </div>

          <div className="lesson-workbench">
            <Card className="lesson-list-card">
              <Badge tone="cyan">aulas da matéria</Badge>
              <div className="lesson-list">
                {activeSubject.lessonModules.map((lesson, index) => {
                  const done = completedSet.has(lesson.id);
                  const active = lesson.id === openLesson.id;
                  return (
                    <button key={lesson.id} type="button" className={`lesson-row ${active ? 'active' : ''} ${done ? 'done' : ''}`} onClick={() => setOpenLessonId(lesson.id)}>
                      <span>{done ? '✓' : index + 1}</span>
                      <strong>{lesson.title}</strong>
                      <small>{lesson.estimatedMinutes} min • {lesson.topics.length} tópicos</small>
                    </button>
                  );
                })}
              </div>
            </Card>

            <Card className="lesson-reader-card" variant="highlight">
              <div className="lesson-reader-header">
                <div>
                  <Badge tone="green">aula escrita</Badge>
                  <h2>{openLesson.title}</h2>
                  <p>{openLesson.objective}</p>
                </div>
                <div className="lesson-reader-actions">
                  <Button onClick={() => toggleLesson(openLesson.id)}>{completedSet.has(openLesson.id) ? 'Desmarcar lida' : 'Marcar como lida'}</Button>
                  <Button variant="ghost" onClick={copyLesson}>Copiar aula</Button>
                </div>
              </div>

              <section className="lesson-section">
                <h3>Explicação direta</h3>
                {openLesson.explanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>

              <section className="lesson-section">
                <h3>Tópicos do edital nesta aula</h3>
                <div className="pill-grid">
                  {openLesson.topics.map((topic) => <span key={topic}>{topic}</span>)}
                </div>
              </section>

              <div className="lesson-columns">
                <section className="lesson-section">
                  <h3>Como estudar</h3>
                  {openLesson.howToStudy.map((item) => <p key={item}>• {item}</p>)}
                </section>
                <section className="lesson-section">
                  <h3>Como a banca cobra</h3>
                  {openLesson.bankCharges.map((item) => <p key={item}>• {item}</p>)}
                </section>
              </div>

              <section className="lesson-section warning-section">
                <h3>Uso em discursiva e parecer</h3>
                <p>{openLesson.discursiveUse}</p>
              </section>

              <section className="lesson-section">
                <h3>Revisão ativa</h3>
                <ul className="compact-list">
                  {openLesson.questionsToAsk.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section className="lesson-section">
                <h3>Caderno da aula</h3>
                <textarea
                  value={progress.notes?.[openLesson.id] || ''}
                  onChange={(event) => updateNote(event.target.value)}
                  placeholder="Escreva aqui seu resumo, artigo, jurisprudência, exemplo ou dúvida dessa aula..."
                />
              </section>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

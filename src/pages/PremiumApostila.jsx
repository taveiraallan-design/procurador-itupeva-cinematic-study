import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { premiumApostilaMeta, premiumApostilaSubjects, getApostilaStats } from '../data/premiumApostila';

const APOSTILA_KEY = 'premium_apostila_progress_v1';
const initialProgress = { selectedSubjectId: 'direito-administrativo', studied: {}, notes: {}, reviewQueue: [], generatedAt: null };

function normalize(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function topicText(topic) {
  return [
    `APOSTILA PREMIUM — ${topic.title}`,
    '',
    `O que é: ${topic.whatIs}`,
    '',
    `Para que serve: ${topic.purpose}`,
    '',
    'Explicação completa:',
    ...topic.plainExplanation.map((item) => `- ${item}`),
    '',
    `Explicação técnica para prova: ${topic.examTechnical}`,
    '',
    `Exemplo aplicado à Procuradoria Municipal: ${topic.cityExample}`,
    '',
    'Base legal principal:',
    ...topic.legalBase.map((item) => `- ${item}`),
    '',
    'Artigos importantes para ler na lei seca:',
    ...topic.dryLaw.map((item) => `- ${item}`),
    '',
    'Jurisprudência/referências relevantes:',
    ...topic.jurisprudence.map((item) => `- ${item}`),
    '',
    'Como pode cair na objetiva:',
    ...topic.objectiveCharge.map((item) => `- ${item}`),
    '',
    `Como pode cair em discursiva/parecer: ${topic.discursiveCharge}`,
    '',
    'Pegadinhas:',
    ...topic.traps.map((item) => `- ${item}`),
    '',
    'Diferenças importantes:',
    ...topic.differences.map((item) => `- ${item}`),
    '',
    'Erros comuns:',
    ...topic.commonMistakes.map((item) => `- ${item}`),
    '',
    `Mini caso prático: ${topic.miniCase}`,
    '',
    'Perguntas de revisão ativa:',
    ...topic.activeQuestions.map((item) => `- ${item}`),
    '',
    'Flashcards sugeridos:',
    ...topic.flashcards.map((item) => `- ${item.front} — ${item.back}`),
    '',
    `Mini resumo: ${topic.summary}`,
    '',
    'Checklist:',
    ...topic.checklist.map((item) => `- ${item}`),
    '',
    `Próximo tópico: ${topic.nextTopic}`
  ].join('\n');
}

function Section({ title, children, tone = 'cyan' }) {
  return (
    <section className="apostila-section">
      <Badge tone={tone}>{title}</Badge>
      <div>{children}</div>
    </section>
  );
}

export default function PremiumApostila({ onNavigate }) {
  const [progress, setProgress] = useLocalStorage(APOSTILA_KEY, initialProgress);
  const [query, setQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('todos');
  const [activeTopicId, setActiveTopicId] = useState(null);
  const stats = getApostilaStats(progress);

  const filteredSubjects = useMemo(() => {
    const q = normalize(query);
    return premiumApostilaSubjects.map((subject) => ({
      ...subject,
      topics: subject.topics.filter((topic) => {
        const matchLevel = levelFilter === 'todos' || topic.level === levelFilter;
        if (!matchLevel) return false;
        if (!q) return true;
        return normalize([
          subject.subject,
          topic.title,
          topic.level,
          topic.whatIs,
          topic.purpose,
          topic.plainExplanation.join(' '),
          topic.legalBase.join(' '),
          topic.dryLaw.join(' '),
          topic.traps.join(' '),
          topic.summary
        ].join(' ')).includes(q);
      })
    })).filter((subject) => subject.topics.length > 0);
  }, [query, levelFilter]);

  const activeSubject = premiumApostilaSubjects.find((item) => item.id === progress.selectedSubjectId) || premiumApostilaSubjects[0];
  const visibleActiveSubject = filteredSubjects.find((item) => item.id === activeSubject.id) || filteredSubjects[0] || activeSubject;
  const studiedSet = new Set(progress.studied?.[visibleActiveSubject.id] || []);
  const activeTopic = visibleActiveSubject.topics.find((topic) => topic.id === activeTopicId) || visibleActiveSubject.topics[0] || activeSubject.topics[0];
  const subjectTotal = activeSubject.topics.length;
  const subjectDone = progress.studied?.[activeSubject.id]?.length || 0;
  const subjectPercent = Math.round((subjectDone / Math.max(subjectTotal, 1)) * 100);

  function selectSubject(subjectId) {
    setProgress((current) => ({ ...current, selectedSubjectId: subjectId }));
    setActiveTopicId(null);
  }

  function toggleStudied(topicId) {
    setProgress((current) => {
      const list = current.studied?.[visibleActiveSubject.id] || [];
      const exists = list.includes(topicId);
      return {
        ...current,
        studied: {
          ...(current.studied || {}),
          [visibleActiveSubject.id]: exists ? list.filter((id) => id !== topicId) : [...list, topicId]
        }
      };
    });
  }

  function updateNote(value) {
    setProgress((current) => ({
      ...current,
      notes: { ...(current.notes || {}), [activeTopic.id]: value }
    }));
  }

  async function copySummary() {
    await navigator.clipboard?.writeText(topicText(activeTopic));
    setProgress((current) => ({ ...current, generatedAt: new Date().toISOString() }));
  }

  function generateActiveReview() {
    const review = [
      `REVISÃO ATIVA — ${activeTopic.title}`,
      ...activeTopic.activeQuestions.map((item, index) => `${index + 1}. ${item}`),
      '',
      'Flashcards sugeridos:',
      ...activeTopic.flashcards.map((item) => `- Frente: ${item.front}\n  Verso: ${item.back}`)
    ].join('\n');
    navigator.clipboard?.writeText(review);
    setProgress((current) => ({ ...current, generatedAt: new Date().toISOString() }));
  }

  function sendToReview() {
    setProgress((current) => {
      const exists = current.reviewQueue?.includes(activeTopic.id);
      return {
        ...current,
        reviewQueue: exists ? current.reviewQueue : [...(current.reviewQueue || []), activeTopic.id]
      };
    });
  }

  const levels = ['todos', 'básico', 'intermediário', 'avançado', 'discursiva', 'lei seca'];

  return (
    <div className="page-grid apostila-page">
      <section className="hero-panel apostila-hero">
        <div>
          <Badge tone="orange">{premiumApostilaMeta.phase} • apostila premium</Badge>
          <h1>{premiumApostilaMeta.title}</h1>
          <p>{premiumApostilaMeta.subtitle}</p>
          <p className="source-note">{premiumApostilaMeta.sourceNote}</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate?.('lei-seca')}>Abrir Lei Seca</Button>
            <Button variant="ghost" onClick={() => onNavigate?.('discursivas')}>Treinar Discursiva</Button>
            <Button variant="secondary" onClick={() => onNavigate?.('mentor')}>Abrir Mentor</Button>
          </div>
        </div>
        <div className="mentor-score-card">
          <span>apostila estudada</span>
          <strong>{stats.percent}%</strong>
          <small>{stats.done}/{stats.total} tópicos premium</small>
        </div>
      </section>

      <Card>
        <div className="subjects-toolbar apostila-toolbar">
          <div>
            <Badge tone="cyan">busca inteligente</Badge>
            <h2>Pesquisar tópico, lei, pegadinha ou palavra-chave</h2>
          </div>
          <div className="subjects-filter-actions apostila-filter-actions">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: ato ilegal, convalidação, poder de polícia, licitação direta..." />
            <select value={levelFilter} onChange={(event) => setLevelFilter(event.target.value)}>
              {levels.map((level) => <option key={level} value={level}>{level}</option>)}
            </select>
          </div>
        </div>
      </Card>

      <div className="apostila-layout">
        <aside className="apostila-subject-menu">
          {premiumApostilaSubjects.map((subject) => {
            const done = progress.studied?.[subject.id]?.length || 0;
            const percent = Math.round((done / Math.max(subject.topics.length, 1)) * 100);
            return (
              <button key={subject.id} type="button" className={`apostila-subject-card ${subject.id === activeSubject.id ? 'active' : ''}`} onClick={() => selectSubject(subject.id)}>
                <span><Badge tone="orange">{subject.status}</Badge></span>
                <strong>{subject.subject}</strong>
                <small>{done}/{subject.topics.length} tópicos • {percent}%</small>
              </button>
            );
          })}
          <Card className="apostila-next-card">
            <Badge tone="purple">próximas fases</Badge>
            <ul className="compact-list">
              {premiumApostilaMeta.nextPhases.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Card>
        </aside>

        <main className="apostila-main">
          <Card variant="highlight">
            <div className="subject-detail-header">
              <div>
                <Badge tone="orange">{activeSubject.priority}</Badge>
                <h2>{activeSubject.subject}</h2>
                <p>{activeSubject.overview}</p>
              </div>
              <Button variant="ghost" onClick={copySummary}>Copiar aula completa</Button>
            </div>
            <ProgressBar label={`Progresso em ${activeSubject.subject}: ${subjectDone}/${subjectTotal} tópicos`} value={subjectPercent} />
          </Card>

          <div className="apostila-workbench">
            <Card className="apostila-topic-list-card">
              <Badge tone="cyan">tópicos explicados</Badge>
              <div className="lesson-list">
                {visibleActiveSubject.topics.map((topic, index) => {
                  const done = studiedSet.has(topic.id);
                  const active = activeTopic.id === topic.id;
                  return (
                    <button key={topic.id} type="button" className={`lesson-row ${active ? 'active' : ''} ${done ? 'done' : ''}`} onClick={() => setActiveTopicId(topic.id)}>
                      <span>{done ? '✓' : index + 1}</span>
                      <strong>{topic.title}</strong>
                      <small>{topic.level} • apostila completa</small>
                    </button>
                  );
                })}
              </div>
            </Card>

            <Card className="apostila-reader-card" variant="highlight">
              <div className="lesson-reader-header">
                <div>
                  <Badge tone="green">{activeTopic.level}</Badge>
                  <h2>{activeTopic.title}</h2>
                  <p>{activeTopic.summary}</p>
                </div>
                <div className="lesson-reader-actions">
                  <Button onClick={() => toggleStudied(activeTopic.id)}>{studiedSet.has(activeTopic.id) ? 'Desmarcar estudado' : 'Marcar como estudado'}</Button>
                  <Button variant="ghost" onClick={copySummary}>Copiar resumo</Button>
                </div>
              </div>

              <div className="apostila-mini-index">
                <span>O que é</span><span>Para que serve</span><span>Base legal</span><span>Pegadinhas</span><span>Discursiva</span><span>Revisão ativa</span>
              </div>

              <Section title="1. O que é" tone="cyan"><p>{activeTopic.whatIs}</p></Section>
              <Section title="2. Para que serve" tone="green"><p>{activeTopic.purpose}</p></Section>
              <Section title="3. Explicação completa" tone="orange">
                {activeTopic.plainExplanation.map((item) => <p key={item}>{item}</p>)}
              </Section>
              <Section title="4. Explicação técnica para prova" tone="purple"><p>{activeTopic.examTechnical}</p></Section>
              <Section title="5. Exemplo aplicado à Procuradoria Municipal" tone="green"><p>{activeTopic.cityExample}</p></Section>

              <div className="lesson-columns">
                <Section title="6. Base legal principal" tone="cyan"><ul className="compact-list">{activeTopic.legalBase.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="7. Artigos para lei seca" tone="orange"><ul className="compact-list">{activeTopic.dryLaw.map((item) => <li key={item}>{item}</li>)}</ul></Section>
              </div>

              <Section title="8. Jurisprudência e entendimento relevante" tone="purple"><ul className="compact-list">{activeTopic.jurisprudence.map((item) => <li key={item}>{item}</li>)}</ul></Section>

              <div className="lesson-columns">
                <Section title="9. Como a banca cobra na objetiva" tone="cyan"><ul className="compact-list">{activeTopic.objectiveCharge.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="10. Como vira discursiva/parecer" tone="green"><p>{activeTopic.discursiveCharge}</p></Section>
              </div>

              <div className="lesson-columns">
                <Section title="11. Pegadinhas prováveis" tone="orange"><ul className="compact-list">{activeTopic.traps.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="12. Diferenças importantes" tone="purple"><ul className="compact-list">{activeTopic.differences.map((item) => <li key={item}>{item}</li>)}</ul></Section>
              </div>

              <div className="lesson-columns">
                <Section title="13. Erros comuns do candidato" tone="orange"><ul className="compact-list">{activeTopic.commonMistakes.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="14. Mini caso prático" tone="green"><p>{activeTopic.miniCase}</p></Section>
              </div>

              <div className="lesson-columns">
                <Section title="15. Perguntas de revisão ativa" tone="cyan"><ul className="compact-list">{activeTopic.activeQuestions.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="16. Flashcards sugeridos" tone="purple"><ul className="compact-list">{activeTopic.flashcards.map((item) => <li key={item.front}><strong>{item.front}</strong> — {item.back}</li>)}</ul></Section>
              </div>

              <Section title="17. Mini resumo final" tone="green"><p>{activeTopic.summary}</p></Section>
              <Section title="18. Checklist de domínio" tone="cyan"><ul className="compact-list">{activeTopic.checklist.map((item) => <li key={item}>{item}</li>)}</ul></Section>
              <Section title="19. Próximo tópico recomendado" tone="orange"><p>{activeTopic.nextTopic}</p></Section>

              <section className="lesson-section warning-section">
                <h3>Anotação pessoal deste tópico</h3>
                <textarea value={progress.notes?.[activeTopic.id] || ''} onChange={(event) => updateNote(event.target.value)} placeholder="Escreva aqui sua dúvida, macete, artigo importante ou exemplo que você quer lembrar..." />
                <div className="apostila-action-row">
                  <Button onClick={generateActiveReview}>Gerar revisão ativa</Button>
                  <Button variant="secondary" onClick={sendToReview}>Enviar para revisão</Button>
                  <Button variant="ghost" onClick={() => onNavigate?.('flashcards')}>Abrir Flashcards</Button>
                  <Button variant="ghost" onClick={() => onNavigate?.('lei-seca')}>Abrir Lei Seca</Button>
                </div>
              </section>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

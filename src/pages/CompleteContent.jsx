import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { completeStudyContent, getAllStudyTopics } from '../data/completeStudyContent';

const CONTENT_PROGRESS_KEY = 'complete_content_progress_v1';
const initialProgress = { doneTopics: {}, activeSubject: 'direito-administrativo' };

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function tone(priority) {
  if (priority === 'Crítica') return 'orange';
  if (priority === 'Alta') return 'purple';
  return 'cyan';
}

export default function CompleteContent({ onNavigate }) {
  const [progress, setProgress] = useLocalStorage(CONTENT_PROGRESS_KEY, initialProgress);
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState({});
  const activeSubject = completeStudyContent.find((item) => item.id === progress.activeSubject) || completeStudyContent[0];
  const doneSet = new Set(progress.doneTopics?.[activeSubject.id] || []);
  const allTopics = getAllStudyTopics();

  const filteredSubjects = useMemo(() => {
    const q = normalize(query);
    if (!q) return completeStudyContent;
    return completeStudyContent.filter((subject) => normalize([
      subject.subject,
      subject.group,
      subject.mission,
      subject.lawBase.join(' '),
      ...subject.blocks.flatMap((block) => [block.title, ...block.topics, ...(block.howBankCharges || []), ...(block.howToStudy || [])]),
    ].join(' ')).includes(q));
  }, [query]);

  const totalDone = Object.values(progress.doneTopics || {}).reduce((sum, list) => sum + (list?.length || 0), 0);
  const activeTotal = activeSubject.blocks.reduce((sum, block) => sum + block.topics.length, 0);
  const activeDone = doneSet.size;
  const globalCoverage = Math.round((totalDone / Math.max(allTopics.length, 1)) * 100);
  const activeCoverage = Math.round((activeDone / Math.max(activeTotal, 1)) * 100);

  function selectSubject(id) {
    setProgress((current) => ({ ...current, activeSubject: id }));
  }

  function topicKey(blockIndex, topicIndex) {
    return `${blockIndex}-${topicIndex}`;
  }

  function toggleTopic(blockIndex, topicIndex) {
    const key = topicKey(blockIndex, topicIndex);
    setProgress((current) => {
      const currentList = new Set(current.doneTopics?.[activeSubject.id] || []);
      if (currentList.has(key)) currentList.delete(key);
      else currentList.add(key);
      return {
        ...current,
        doneTopics: {
          ...(current.doneTopics || {}),
          [activeSubject.id]: [...currentList],
        },
      };
    });
  }

  function copySubjectPlan() {
    const text = [
      `PLANO DE ESTUDO — ${activeSubject.subject}`,
      `Missão: ${activeSubject.mission}`,
      `Base: ${activeSubject.lawBase.join(' | ')}`,
      '',
      ...activeSubject.blocks.flatMap((block, index) => [
        `${index + 1}. ${block.title}`,
        `Tópicos: ${block.topics.join('; ')}`,
        `Como estudar: ${(block.howToStudy || []).join(' / ')}`,
        `Como a banca cobra: ${(block.howBankCharges || []).join(' / ')}`,
        `Uso em discursiva: ${block.discursiveUse}`,
        '',
      ]),
    ].join('\n');
    navigator.clipboard?.writeText(text);
  }

  function expandAll() {
    const next = {};
    activeSubject.blocks.forEach((_, index) => { next[index] = true; });
    setExpanded(next);
  }

  return (
    <div className="complete-content-page page-grid">
      <section className="subjects-hero complete-content-hero">
        <div>
          <Badge tone="orange">conteúdo oficial completo</Badge>
          <h1>Conteúdo de Estudo do Edital</h1>
          <p>
            Matriz completa do Anexo III convertida em tópicos estudáveis, com o que estudar, como a banca cobra,
            pegadinhas e uso em discursiva. Esta é a base para estudar de fato, matéria por matéria.
          </p>
          <div className="subjects-hero-actions">
            <Button onClick={copySubjectPlan}>Copiar plano da matéria</Button>
            <Button variant="secondary" onClick={() => onNavigate?.('materiais')}>Abrir materiais</Button>
            <Button variant="ghost" onClick={() => onNavigate?.('questoes')}>Treinar questões</Button>
            <Button variant="ghost" onClick={() => onNavigate?.('discursivas')}>Treinar discursiva</Button>
          </div>
        </div>
        <div className="subjects-command-center">
          <article><span>Matérias oficiais</span><strong>{completeStudyContent.length}</strong></article>
          <article><span>Tópicos mapeados</span><strong>{allTopics.length}</strong></article>
          <article><span>Progresso geral</span><strong>{globalCoverage}%</strong></article>
          <article><span>Fonte</span><strong>Anexo III</strong></article>
        </div>
      </section>

      <Card className="wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="cyan">buscar no edital</Badge>
            <h3>Pesquisar matéria, artigo, lei, tema ou pegadinha</h3>
          </div>
          <div className="subjects-filter-actions">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: convalidação, IPTU, remessa necessária, Lei Orgânica..." />
          </div>
        </div>
      </Card>

      <div className="complete-content-layout">
        <aside className="complete-content-menu">
          {filteredSubjects.map((subject) => {
            const total = subject.blocks.reduce((sum, block) => sum + block.topics.length, 0);
            const done = progress.doneTopics?.[subject.id]?.length || 0;
            const coverage = Math.round((done / Math.max(total, 1)) * 100);
            return (
              <button
                type="button"
                key={subject.id}
                className={`content-subject-button ${activeSubject.id === subject.id ? 'active' : ''}`}
                onClick={() => selectSubject(subject.id)}
              >
                <span><Badge tone={tone(subject.priority)}>{subject.priority}</Badge></span>
                <strong>{subject.subject}</strong>
                <small>{subject.blocks.length} blocos • {total} tópicos • {coverage}%</small>
              </button>
            );
          })}
        </aside>

        <main className="complete-content-detail">
          <Card variant="highlight">
            <div className="subject-detail-header">
              <div>
                <Badge tone={tone(activeSubject.priority)}>{activeSubject.risk}</Badge>
                <h2>{activeSubject.subject}</h2>
                <p>{activeSubject.mission}</p>
              </div>
              <Button variant="ghost" onClick={expandAll}>Expandir tudo</Button>
            </div>
            <div className="law-base-list">
              {activeSubject.lawBase.map((item) => <span key={item}>{item}</span>)}
            </div>
            <ProgressBar label={`Cobertura da matéria: ${activeDone}/${activeTotal} tópicos`} value={activeCoverage} />
          </Card>

          {activeSubject.blocks.map((block, blockIndex) => {
            const isOpen = expanded[blockIndex] ?? blockIndex === 0;
            const blockDone = block.topics.filter((_, topicIndex) => doneSet.has(topicKey(blockIndex, topicIndex))).length;
            return (
              <Card key={block.title} className="content-block-card">
                <button
                  className="content-block-header"
                  type="button"
                  onClick={() => setExpanded((current) => ({ ...current, [blockIndex]: !isOpen }))}
                >
                  <span>
                    <Badge tone="purple">bloco {blockIndex + 1}</Badge>
                    <h3>{block.title}</h3>
                    <small>{blockDone}/{block.topics.length} tópicos concluídos</small>
                  </span>
                  <strong>{isOpen ? '−' : '+'}</strong>
                </button>

                {isOpen && (
                  <div className="content-block-body">
                    <div className="content-topic-checklist">
                      {block.topics.map((topic, topicIndex) => {
                        const done = doneSet.has(topicKey(blockIndex, topicIndex));
                        return (
                          <button key={topic} type="button" className={done ? 'done' : ''} onClick={() => toggleTopic(blockIndex, topicIndex)}>
                            <span>{done ? '✓' : '○'}</span>
                            <strong>{topic}</strong>
                          </button>
                        );
                      })}
                    </div>

                    <div className="study-method-grid">
                      <article>
                        <h4>Como estudar</h4>
                        {(block.howToStudy || []).map((item) => <p key={item}>• {item}</p>)}
                      </article>
                      <article>
                        <h4>Como a banca cobra</h4>
                        {(block.howBankCharges || []).map((item) => <p key={item}>• {item}</p>)}
                      </article>
                      <article>
                        <h4>Discursiva/parecer</h4>
                        <p>{block.discursiveUse}</p>
                      </article>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </main>
      </div>
    </div>
  );
}

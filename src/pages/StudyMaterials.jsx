import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { studyMaterials, getMaterialStats } from '../data/studyMaterials';

const MATERIALS_KEY = 'study_materials_progress_v1';
const initialProgress = { selectedSubjectId: 'direito-administrativo', completedBlocks: {}, notes: {}, copiedAt: null };

function normalize(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function tone(priority) {
  if (priority === 'Crítica') return 'orange';
  if (priority === 'Alta') return 'purple';
  return 'cyan';
}

function materialToText(subject, selectedBlock) {
  return [
    `MATERIAL DE ESTUDO — ${subject.subject}`,
    '',
    `Visão geral: ${subject.overview}`,
    '',
    'Leitura obrigatória:',
    ...subject.mandatoryReadings.map((item) => `- ${item}`),
    '',
    'Mini apostila:',
    ...subject.miniHandbook.flatMap((item) => [`## ${item.title}`, item.body, '']),
    '',
    `Bloco selecionado: ${selectedBlock.title}`,
    `Objetivo: ${selectedBlock.objective}`,
    '',
    'Roteiro de leitura:',
    ...selectedBlock.readingPath.map((item) => `- ${item}`),
    '',
    'Explicação:',
    ...selectedBlock.explanation.map((item) => `- ${item}`),
    '',
    'Tópicos:',
    ...selectedBlock.topicList.map((item) => `- ${item}`),
    '',
    'Checklist:',
    ...selectedBlock.checklist.map((item) => `- ${item}`),
    '',
    'Perguntas de revisão:',
    ...selectedBlock.microQuestions.map((item) => `- ${item}`),
  ].join('\n');
}

export default function StudyMaterials({ onNavigate }) {
  const [progress, setProgress] = useLocalStorage(MATERIALS_KEY, initialProgress);
  const [query, setQuery] = useState('');
  const [activeBlockId, setActiveBlockId] = useState(null);
  const stats = getMaterialStats(progress);

  const filteredSubjects = useMemo(() => {
    const q = normalize(query);
    if (!q) return studyMaterials;
    return studyMaterials.filter((subject) => normalize([
      subject.subject,
      subject.overview,
      subject.mandatoryReadings.join(' '),
      subject.miniHandbook.map((item) => `${item.title} ${item.body}`).join(' '),
      subject.blockMaterials.map((block) => `${block.title} ${block.topicList.join(' ')}`).join(' ')
    ].join(' ')).includes(q));
  }, [query]);

  const activeSubject = studyMaterials.find((item) => item.id === progress.selectedSubjectId) || filteredSubjects[0] || studyMaterials[0];
  const completedSet = new Set(progress.completedBlocks?.[activeSubject.id] || []);
  const activeBlock = activeSubject.blockMaterials.find((block) => block.id === activeBlockId) || activeSubject.blockMaterials[0];
  const subjectPercent = Math.round((completedSet.size / Math.max(activeSubject.blockMaterials.length, 1)) * 100);

  function selectSubject(subjectId) {
    setProgress((current) => ({ ...current, selectedSubjectId: subjectId }));
    setActiveBlockId(null);
  }

  function toggleBlock(blockId) {
    setProgress((current) => {
      const currentList = current.completedBlocks?.[activeSubject.id] || [];
      const exists = currentList.includes(blockId);
      return {
        ...current,
        completedBlocks: {
          ...(current.completedBlocks || {}),
          [activeSubject.id]: exists ? currentList.filter((id) => id !== blockId) : [...currentList, blockId]
        }
      };
    });
  }

  function updateNote(value) {
    setProgress((current) => ({
      ...current,
      notes: { ...(current.notes || {}), [activeBlock.id]: value }
    }));
  }

  async function copyMaterial() {
    await navigator.clipboard?.writeText(materialToText(activeSubject, activeBlock));
    setProgress((current) => ({ ...current, copiedAt: new Date().toISOString() }));
  }

  return (
    <div className="page-grid study-materials-page">
      <section className="hero-panel study-materials-hero">
        <div>
          <Badge tone="orange">Fase 38 • materiais de estudo</Badge>
          <h1>Materiais para estudar cada conteúdo</h1>
          <p>
            Agora cada matéria tem leitura obrigatória, mini apostila, mapa legal, roteiro de estudo, checklist, perguntas de revisão e drills práticos.
          </p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate?.('aulas')}>Abrir Aulas Escritas</Button>
            <Button variant="ghost" onClick={() => onNavigate?.('lei-seca')}>Abrir Lei Seca</Button>
            <Button variant="secondary" onClick={() => onNavigate?.('questoes')}>Treinar Questões</Button>
          </div>
        </div>
        <div className="mentor-score-card">
          <span>material estudado</span>
          <strong>{stats.percent}%</strong>
          <small>{stats.done}/{stats.total} blocos concluídos</small>
        </div>
      </section>

      <Card>
        <div className="subjects-toolbar">
          <div>
            <Badge tone="cyan">busca</Badge>
            <h2>Pesquisar material, lei, tema ou palavra-chave</h2>
          </div>
          <div className="subjects-filter-actions">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: competência municipal, ISS, PAD, remessa necessária..." />
          </div>
        </div>
      </Card>

      <div className="study-materials-layout">
        <aside className="materials-subject-menu">
          {filteredSubjects.map((subject) => {
            const done = progress.completedBlocks?.[subject.id]?.length || 0;
            const percent = Math.round((done / Math.max(subject.blockMaterials.length, 1)) * 100);
            return (
              <button key={subject.id} type="button" className={`materials-subject-card ${subject.id === activeSubject.id ? 'active' : ''}`} onClick={() => selectSubject(subject.id)}>
                <span><Badge tone={tone(subject.priority)}>{subject.priority}</Badge></span>
                <strong>{subject.subject}</strong>
                <small>{done}/{subject.blockMaterials.length} materiais • {percent}%</small>
              </button>
            );
          })}
        </aside>

        <main className="study-materials-main">
          <Card variant="highlight">
            <div className="subject-detail-header">
              <div>
                <Badge tone={tone(activeSubject.priority)}>{activeSubject.risk}</Badge>
                <h2>{activeSubject.subject}</h2>
                <p>{activeSubject.overview}</p>
              </div>
              <Button variant="ghost" onClick={copyMaterial}>Copiar material</Button>
            </div>
            <ProgressBar label={`Progresso da matéria: ${completedSet.size}/${activeSubject.blockMaterials.length} materiais`} value={subjectPercent} />
          </Card>

          <div className="materials-overview-grid">
            <Card>
              <Badge tone="green">leitura obrigatória</Badge>
              <h3>O que abrir para estudar</h3>
              <ul className="compact-list">
                {activeSubject.mandatoryReadings.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Card>
            <Card>
              <Badge tone="purple">mapa legal</Badge>
              <h3>Artigos, leis e pegadinhas</h3>
              <div className="legal-map-list">
                {activeSubject.legalMap.map((item) => (
                  <article key={item.ref}>
                    <strong>{item.ref}</strong>
                    <p>{item.use}</p>
                    <small>Pegadinha: {item.trap}</small>
                  </article>
                ))}
              </div>
            </Card>
          </div>

          <Card className="mini-handbook-card">
            <Badge tone="orange">mini apostila da matéria</Badge>
            <h3>Explicação para ler antes dos exercícios</h3>
            <div className="mini-handbook-grid">
              {activeSubject.miniHandbook.map((item) => (
                <article key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </Card>

          <div className="material-workbench">
            <Card className="material-block-list-card">
              <Badge tone="cyan">blocos da matéria</Badge>
              <div className="lesson-list">
                {activeSubject.blockMaterials.map((block, index) => {
                  const done = completedSet.has(block.id);
                  const active = activeBlock.id === block.id;
                  return (
                    <button key={block.id} type="button" className={`lesson-row ${active ? 'active' : ''} ${done ? 'done' : ''}`} onClick={() => setActiveBlockId(block.id)}>
                      <span>{done ? '✓' : index + 1}</span>
                      <strong>{block.title}</strong>
                      <small>{block.topicList.length} tópicos • material guiado</small>
                    </button>
                  );
                })}
              </div>
            </Card>

            <Card className="material-reader-card" variant="highlight">
              <div className="lesson-reader-header">
                <div>
                  <Badge tone="green">material do conteúdo</Badge>
                  <h2>{activeBlock.title}</h2>
                  <p>{activeBlock.objective}</p>
                </div>
                <div className="lesson-reader-actions">
                  <Button onClick={() => toggleBlock(activeBlock.id)}>{completedSet.has(activeBlock.id) ? 'Desmarcar estudado' : 'Marcar estudado'}</Button>
                  <Button variant="ghost" onClick={copyMaterial}>Copiar bloco</Button>
                </div>
              </div>

              <section className="lesson-section">
                <h3>Roteiro de leitura</h3>
                <ul className="compact-list">
                  {activeBlock.readingPath.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section className="lesson-section">
                <h3>Explicação do bloco</h3>
                {activeBlock.explanation.map((item) => <p key={item}>{item}</p>)}
              </section>

              <section className="lesson-section">
                <h3>Tópicos que você precisa dominar</h3>
                <div className="pill-grid">
                  {activeBlock.topicList.map((item) => <span key={item}>{item}</span>)}
                </div>
              </section>

              <div className="lesson-columns">
                <section className="lesson-section">
                  <h3>Checklist de domínio</h3>
                  <ul className="compact-list">
                    {activeBlock.checklist.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
                <section className="lesson-section">
                  <h3>Pegadinhas da banca</h3>
                  {(activeBlock.bankTraps.length ? activeBlock.bankTraps : ['A banca troca regra por exceção.', 'A banca usa palavras absolutas.', 'A banca mistura competência, procedimento e consequência.']).map((item) => <p key={item}>• {item}</p>)}
                </section>
              </div>

              <section className="lesson-section warning-section">
                <h3>Como usar em discursiva/parecer</h3>
                <p>{activeBlock.discursiveUse}</p>
              </section>

              <section className="lesson-section">
                <h3>Perguntas de revisão ativa</h3>
                <ul className="compact-list">
                  {activeBlock.microQuestions.map((item) => <li key={item}>{item}</li>)}
                  {activeSubject.reviewQuestions.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section className="lesson-section">
                <h3>Drill prático para hoje</h3>
                <ul className="compact-list">
                  {activeSubject.practicalDrills.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section className="lesson-section">
                <h3>Caderno do material</h3>
                <textarea
                  value={progress.notes?.[activeBlock.id] || ''}
                  onChange={(event) => updateNote(event.target.value)}
                  placeholder="Cole aqui artigo, jurisprudência, observação da aula, erro de questão ou resumo pessoal desse conteúdo..."
                />
              </section>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

import { useMemo, useState } from 'react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { questions } from '../data/questions';

const progressKey = 'questions_progress_v1';
export const ERROR_LAB_KEY = 'error_lab_progress_v1';

const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialErrorLabProgress = { diagnoses: {}, completedDrills: {}, notes: '' };

const causes = [
  { id: 'conceito', label: 'Conceito mal fixado', color: 'orange' },
  { id: 'pegadinha', label: 'Pegadinha da banca', color: 'purple' },
  { id: 'lei-seca', label: 'Lei seca / artigo', color: 'cyan' },
  { id: 'atencao', label: 'Erro de atenção', color: 'green' },
  { id: 'tempo', label: 'Pressa / gestão de tempo', color: 'orange' },
];

function asObject(value, fallback = {}) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : fallback;
}

function getWrongQuestions(questionProgress) {
  const safe = asObject(questionProgress, initialQuestionProgress);
  return questions
    .map((question) => ({ question, record: safe.answers?.[question.id] }))
    .filter(({ record }) => record?.lastCorrect === false || record?.hasWrong)
    .map(({ question, record }) => ({ ...question, record }));
}

function groupBy(items, keyGetter) {
  return items.reduce((acc, item) => {
    const key = keyGetter(item) || 'Sem classificação';
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
}

function inferCause(question) {
  const text = `${question.statement} ${question.explanation} ${question.trap} ${(question.tags || []).join(' ')}`.toLowerCase();
  if (text.includes('confunda') || text.includes('pegadinha') || text.includes('trocar')) return 'pegadinha';
  if (text.includes('art.') || text.includes('lei') || text.includes('constituição') || text.includes('súmula')) return 'lei-seca';
  if (question.difficulty === 'Difícil') return 'conceito';
  return 'atencao';
}

function causeLabel(id) {
  return causes.find((cause) => cause.id === id)?.label || 'Sem diagnóstico';
}

function buildPrescription(question, causeId) {
  const base = {
    'conceito': 'Reestude o conceito central, escreva uma frase própria e resolva 3 questões do mesmo tópico.',
    'pegadinha': 'Transforme a armadilha em regra: escreva “não confundir X com Y” e refaça a questão sem olhar o gabarito.',
    'lei-seca': 'Leia o dispositivo-base, grife verbo, competência e exceção. Depois crie um flashcard curto.',
    'atencao': 'Releia o enunciado procurando palavras como exceto, sempre, nunca, apenas, salvo e em regra.',
    'tempo': 'Refaça com cronômetro de 2 minutos e anote onde perdeu tempo.',
  };
  return `${base[causeId] || base.conceito} Tema: ${question.topic}.`;
}

export default function ErrorLab({ onNavigate }) {
  const [questionProgress] = useLocalStorage(progressKey, initialQuestionProgress);
  const [labProgress, setLabProgress] = useLocalStorage(ERROR_LAB_KEY, initialErrorLabProgress);
  const wrongQuestions = useMemo(() => getWrongQuestions(questionProgress), [questionProgress]);
  const [selectedId, setSelectedId] = useState(wrongQuestions[0]?.id || null);

  const selected = wrongQuestions.find((question) => question.id === selectedId) || wrongQuestions[0];
  const diagnoses = asObject(labProgress.diagnoses);
  const completedDrills = asObject(labProgress.completedDrills);

  const bySubject = groupBy(wrongQuestions, (question) => question.subject);
  const byTopic = groupBy(wrongQuestions, (question) => question.topic);
  const topSubject = Object.entries(bySubject).sort((a, b) => b[1].length - a[1].length)[0];
  const topTopic = Object.entries(byTopic).sort((a, b) => b[1].length - a[1].length)[0];
  const diagnosedCount = wrongQuestions.filter((question) => diagnoses[question.id]).length;
  const completedCount = wrongQuestions.filter((question) => completedDrills[question.id]).length;
  const diagnosisRate = wrongQuestions.length ? Math.round((diagnosedCount / wrongQuestions.length) * 100) : 0;
  const recoveryRate = wrongQuestions.length ? Math.round((completedCount / wrongQuestions.length) * 100) : 0;

  function setDiagnosis(questionId, causeId) {
    setLabProgress((current) => ({
      ...asObject(current, initialErrorLabProgress),
      diagnoses: { ...asObject(current?.diagnoses), [questionId]: { causeId, at: new Date().toISOString() } },
    }));
  }

  function concludeDrill(questionId) {
    setLabProgress((current) => ({
      ...asObject(current, initialErrorLabProgress),
      completedDrills: { ...asObject(current?.completedDrills), [questionId]: { done: true, at: new Date().toISOString() } },
    }));
  }

  function saveNotes(value) {
    setLabProgress((current) => ({ ...asObject(current, initialErrorLabProgress), notes: value }));
  }

  if (!wrongQuestions.length) {
    return (
      <div className="page-grid">
        <section className="hero-panel">
          <div>
            <Badge tone="green">laboratório de erros</Badge>
            <h1>Nenhum erro registrado ainda.</h1>
            <p>Responda algumas questões para o app montar um raio-x de erros, pegadinhas e temas que precisam de recuperação.</p>
            <div className="hero-actions">
              <Button onClick={() => onNavigate('questoes')}>Resolver questões</Button>
              <Button variant="secondary" onClick={() => onNavigate('simulados')}>Fazer simulado</Button>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true"><span className="orbit-core">!</span></div>
        </section>
      </div>
    );
  }

  const selectedCause = diagnoses[selected?.id]?.causeId || inferCause(selected || {});

  return (
    <div className="page-grid error-lab-page">
      <section className="hero-panel">
        <div>
          <Badge tone="orange">fase 24</Badge>
          <h1>Laboratório de Erros</h1>
          <p>Transforme cada erro em diagnóstico, prescrição e recuperação objetiva. O foco não é errar menos por sorte; é eliminar padrão de erro.</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate('questoes')}>Refazer questões</Button>
            <Button variant="secondary" onClick={() => onNavigate('revisao')}>Abrir revisão</Button>
          </div>
        </div>
        <div className="mentor-mini-grid">
          <span><strong>{wrongQuestions.length}</strong><small>erros mapeados</small></span>
          <span><strong>{diagnosisRate}%</strong><small>diagnosticados</small></span>
          <span><strong>{recoveryRate}%</strong><small>recuperados</small></span>
        </div>
      </section>

      <div className="stats-grid">
        <Card><span className="stat-label">Matéria mais crítica</span><strong className="stat-value text-small">{topSubject?.[0] || 'Sem dados'}</strong><small>{topSubject?.[1]?.length || 0} erro(s)</small></Card>
        <Card><span className="stat-label">Tema mais recorrente</span><strong className="stat-value text-small">{topTopic?.[0] || 'Sem dados'}</strong><small>{topTopic?.[1]?.length || 0} ocorrência(s)</small></Card>
        <Card><span className="stat-label">Diagnóstico</span><strong className="stat-value">{diagnosisRate}%</strong><small>erros com causa marcada</small></Card>
        <Card><span className="stat-label">Recuperação</span><strong className="stat-value">{recoveryRate}%</strong><small>drills concluídos</small></Card>
      </div>

      <div className="two-cols">
        <Card>
          <Badge tone="cyan">fila de erros</Badge>
          <h3>Questões para recuperar</h3>
          <div className="error-question-list">
            {wrongQuestions.map((question) => {
              const causeId = diagnoses[question.id]?.causeId || inferCause(question);
              return (
                <button key={question.id} type="button" className={`error-row ${selected?.id === question.id ? 'active' : ''}`} onClick={() => setSelectedId(question.id)}>
                  <strong>{question.topic}</strong>
                  <span>{question.subject}</span>
                  <small>{causeLabel(causeId)} · {completedDrills[question.id] ? 'recuperado' : 'pendente'}</small>
                </button>
              );
            })}
          </div>
        </Card>

        <Card variant="highlight">
          <Badge tone="purple">diagnóstico guiado</Badge>
          <h3>{selected?.topic}</h3>
          <p>{selected?.statement}</p>
          <div className="error-answer-box">
            <span>Sua última resposta: <strong>{selected?.record?.lastAnswer || 'não registrada'}</strong></span>
            <span>Gabarito: <strong>{selected?.correctAnswer}</strong></span>
          </div>
          <p><strong>Explicação:</strong> {selected?.explanation}</p>
          <p><strong>Pegadinha:</strong> {selected?.trap}</p>
          <div className="cause-grid">
            {causes.map((cause) => (
              <button key={cause.id} type="button" className={`cause-pill ${selectedCause === cause.id ? 'active' : ''}`} onClick={() => setDiagnosis(selected.id, cause.id)}>
                {cause.label}
              </button>
            ))}
          </div>
          <Card>
            <Badge tone="green">prescrição</Badge>
            <p>{buildPrescription(selected, selectedCause)}</p>
            <div className="hero-actions">
              <Button onClick={() => concludeDrill(selected.id)}>Marcar drill como concluído</Button>
              <Button variant="secondary" onClick={() => onNavigate('flashcards')}>Criar memória</Button>
            </div>
          </Card>
        </Card>
      </div>

      <Card className="wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="orange">caderno do erro</Badge>
            <h3>Regra pessoal para não cair de novo</h3>
          </div>
          <strong>{labProgress.notes?.length || 0} caracteres</strong>
        </div>
        <textarea
          className="study-textarea"
          value={labProgress.notes || ''}
          onChange={(event) => saveNotes(event.target.value)}
          placeholder="Ex.: ato ilegal anula; ato válido revoga. Não confundir mérito com legalidade."
        />
      </Card>

      <Card>
        <Badge tone="cyan">progresso</Badge>
        <ProgressBar label="Erros diagnosticados" value={diagnosisRate} />
        <ProgressBar label="Drills de recuperação" value={recoveryRate} />
      </Card>
    </div>
  );
}

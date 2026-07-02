import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { topicQuestionBank, topicQuestionMeta, getTopicQuestionStats } from '../data/topicCommentedQuestions';

const PROGRESS_KEY = 'topic_commented_questions_v1';
const initialProgress = { answered: {}, reviewQueue: [], flashcards: [], lastSubject: 'Todas' };

function unique(values) {
  return ['Todas', ...Array.from(new Set(values.filter(Boolean)))];
}

function normalize(value) {
  return String(value || '').toLocaleLowerCase('pt-BR');
}

function questionKey(question) {
  return `${question.subject}__${question.topic}__${question.statement}`;
}

function copyText(text) {
  navigator.clipboard?.writeText(text);
}

export default function TopicQuestions({ onNavigate }) {
  const [progress, setProgress] = useLocalStorage(PROGRESS_KEY, initialProgress);
  const [subject, setSubject] = useState(progress.lastSubject || 'Todas');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const subjects = useMemo(() => unique(topicQuestionBank.map((item) => item.subject)), []);
  const filtered = useMemo(() => {
    const q = normalize(query);
    return topicQuestionBank.filter((item) => {
      const subjectOk = subject === 'Todas' || item.subject === subject;
      const queryOk = !q || normalize(`${item.subject} ${item.topic} ${item.statement}`).includes(q);
      return subjectOk && queryOk;
    });
  }, [subject, query]);

  const activeQuestion = filtered[selected] || filtered[0] || topicQuestionBank[0];
  const activeKey = questionKey(activeQuestion);
  const savedAnswer = progress.answered?.[activeKey];
  const stats = getTopicQuestionStats(progress);

  function changeSubject(nextSubject) {
    setSubject(nextSubject);
    setSelected(0);
    setChosen(null);
    setRevealed(false);
    setProgress((previous) => ({ ...previous, lastSubject: nextSubject }));
  }

  function answer(index) {
    setChosen(index);
    setRevealed(true);
    const correct = index === activeQuestion.answer;
    setProgress((previous) => ({
      ...previous,
      answered: {
        ...(previous.answered || {}),
        [activeKey]: {
          subject: activeQuestion.subject,
          topic: activeQuestion.topic,
          chosen: index,
          correct,
          answeredAt: new Date().toISOString(),
        }
      }
    }));
  }

  function nextQuestion() {
    const next = filtered.length ? (selected + 1) % filtered.length : 0;
    setSelected(next);
    setChosen(null);
    setRevealed(false);
  }

  function sendToReview() {
    const item = {
      id: `${activeKey}_${Date.now()}`,
      subject: activeQuestion.subject,
      topic: activeQuestion.topic,
      prompt: activeQuestion.reviewPrompt,
      source: 'Questões Comentadas por Tópico',
      createdAt: new Date().toISOString(),
    };
    setProgress((previous) => ({ ...previous, reviewQueue: [item, ...(previous.reviewQueue || [])].slice(0, 60) }));
  }

  function createFlashcard() {
    const card = {
      id: `${activeKey}_flash_${Date.now()}`,
      front: `Qual é a pegadinha em ${activeQuestion.topic}?`,
      back: activeQuestion.trap,
      subject: activeQuestion.subject,
      createdAt: new Date().toISOString(),
    };
    setProgress((previous) => ({ ...previous, flashcards: [card, ...(previous.flashcards || [])].slice(0, 80) }));
  }

  const exportText = [
    `Questão comentada — ${activeQuestion.subject}`,
    `Tópico: ${activeQuestion.topic}`,
    '',
    activeQuestion.statement,
    ...activeQuestion.options.map((option, index) => `${String.fromCharCode(65 + index)}) ${option}`),
    '',
    `Gabarito: ${String.fromCharCode(65 + activeQuestion.answer)}`,
    `Comentário: ${activeQuestion.explanation}`,
    `Pegadinha: ${activeQuestion.trap}`,
    `Lei seca/base: ${activeQuestion.dryLaw}`
  ].join('\n');

  return (
    <div className="page topic-questions-page">
      <div className="page-hero compact-hero">
        <div>
          <Badge tone="purple">{topicQuestionMeta.phase}</Badge>
          <h1>Questões comentadas por tópico</h1>
          <p>{topicQuestionMeta.description}</p>
        </div>
        <div className="hero-actions">
          <Button variant="secondary" onClick={() => onNavigate?.('apostila')}>Abrir Apostila</Button>
          <Button variant="secondary" onClick={() => onNavigate?.('revisao')}>Abrir Revisão</Button>
        </div>
      </div>

      <div className="stats-grid compact-stats">
        <Card><span className="metric-label">Banco</span><strong>{stats.total}</strong><small>questões comentadas</small></Card>
        <Card><span className="metric-label">Respondidas</span><strong>{stats.answered}</strong><small>treinos feitos</small></Card>
        <Card><span className="metric-label">Acertos</span><strong>{stats.accuracy}%</strong><ProgressBar value={stats.accuracy} /></Card>
        <Card><span className="metric-label">Revisão</span><strong>{progress.reviewQueue?.length || 0}</strong><small>pontos enviados</small></Card>
      </div>

      <Card className="topic-question-filters">
        <div className="filter-row">
          <label>
            Matéria
            <select value={subject} onChange={(event) => changeSubject(event.target.value)}>
              {subjects.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Buscar tópico
            <input value={query} onChange={(event) => { setQuery(event.target.value); setSelected(0); }} placeholder="vírgula, ato administrativo, crédito..." />
          </label>
        </div>
      </Card>

      <div className="topic-question-layout">
        <Card className="topic-question-list">
          <Badge tone="cyan">Tópicos disponíveis</Badge>
          <div className="topic-question-scroll">
            {filtered.map((item, index) => {
              const key = questionKey(item);
              const answer = progress.answered?.[key];
              return (
                <button
                  key={key}
                  type="button"
                  className={`topic-question-item ${index === selected ? 'active' : ''}`}
                  onClick={() => { setSelected(index); setChosen(null); setRevealed(false); }}
                >
                  <span>{item.subject}</span>
                  <strong>{item.topic}</strong>
                  <small>{answer ? (answer.correct ? '✓ acertou' : '↻ revisar') : 'não respondida'}</small>
                </button>
              );
            })}
          </div>
        </Card>

        <Card className="commented-question-card">
          <div className="question-headline">
            <div>
              <Badge tone="orange">{activeQuestion.subject}</Badge>
              <h2>{activeQuestion.topic}</h2>
              <p>{activeQuestion.statement}</p>
            </div>
            <span className="level-pill">{activeQuestion.level}</span>
          </div>

          <div className="commented-options">
            {activeQuestion.options.map((option, index) => {
              const isCorrect = index === activeQuestion.answer;
              const isChosen = chosen === index || savedAnswer?.chosen === index;
              const showState = revealed || savedAnswer;
              return (
                <button
                  key={option}
                  type="button"
                  className={`commented-option ${showState && isCorrect ? 'correct' : ''} ${showState && isChosen && !isCorrect ? 'wrong' : ''}`}
                  onClick={() => answer(index)}
                >
                  <strong>{String.fromCharCode(65 + index)}</strong>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {(revealed || savedAnswer) && (
            <div className="commented-answer-panel">
              <Badge tone="green">Gabarito: {String.fromCharCode(65 + activeQuestion.answer)}</Badge>
              <p><strong>Comentário da correta:</strong> {activeQuestion.explanation}</p>
              <div className="wrong-comments-grid">
                {activeQuestion.wrongComments.map((comment, index) => (
                  <article key={comment}>
                    <strong>{String.fromCharCode(65 + index)})</strong>
                    <p>{comment}</p>
                  </article>
                ))}
              </div>
              <p><strong>Pegadinha:</strong> {activeQuestion.trap}</p>
              <p><strong>Lei seca/base:</strong> {activeQuestion.dryLaw}</p>
            </div>
          )}

          <div className="question-actions-row">
            <Button onClick={nextQuestion}>Próxima questão</Button>
            <Button variant="secondary" onClick={sendToReview}>Errei esse ponto / revisar</Button>
            <Button variant="secondary" onClick={createFlashcard}>Criar flashcard</Button>
            <Button variant="secondary" onClick={() => copyText(exportText)}>Copiar comentário</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

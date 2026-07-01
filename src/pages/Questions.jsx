import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { questionDifficulties, questions } from '../data/questions';

const progressKey = 'questions_progress_v1';
const initialProgress = {
  answers: {},
  marked: [],
  history: [],
};

function getAnswerStats(progress) {
  const answers = Object.values(progress.answers || {});
  const answered = answers.length;
  const correct = answers.filter((answer) => answer.lastCorrect).length;
  const wrong = answers.filter((answer) => answer.hasWrong || answer.lastCorrect === false).length;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  return { answered, correct, wrong, accuracy };
}

function getSubjectStats(progress) {
  return questions.reduce((acc, question) => {
    const answer = progress.answers?.[question.id];
    if (!acc[question.subject]) acc[question.subject] = { answered: 0, correct: 0, wrong: 0 };
    if (answer) {
      acc[question.subject].answered += 1;
      if (answer.lastCorrect) acc[question.subject].correct += 1;
      if (answer.hasWrong || answer.lastCorrect === false) acc[question.subject].wrong += 1;
    }
    return acc;
  }, {});
}

function getWeakSubject(progress) {
  const subjectStats = getSubjectStats(progress);
  const ranked = Object.entries(subjectStats)
    .filter(([, stats]) => stats.answered > 0)
    .map(([subject, stats]) => ({
      subject,
      accuracy: Math.round((stats.correct / stats.answered) * 100),
      wrong: stats.wrong,
      answered: stats.answered,
    }))
    .sort((a, b) => a.accuracy - b.accuracy || b.wrong - a.wrong);

  return ranked[0]?.subject || 'Nenhum ainda';
}

export default function Questions() {
  const [progress, setProgress] = useLocalStorage(progressKey, initialProgress);
  const [subject, setSubject] = useState('Todas');
  const [topic, setTopic] = useState('Todos');
  const [difficulty, setDifficulty] = useState('Todas');
  const [mode, setMode] = useState('treino');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [session, setSession] = useState({ answered: 0, correct: 0, wrong: 0 });

  const subjects = useMemo(() => ['Todas', ...new Set(questions.map((item) => item.subject))], []);

  const topics = useMemo(() => {
    const source = subject === 'Todas' ? questions : questions.filter((item) => item.subject === subject);
    return ['Todos', ...new Set(source.map((item) => item.topic))];
  }, [subject]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((question) => {
      const answer = progress.answers?.[question.id];
      const byMode = mode === 'erros' ? Boolean(answer?.hasWrong || answer?.lastCorrect === false) : true;
      const bySubject = subject === 'Todas' || question.subject === subject;
      const byTopic = topic === 'Todos' || question.topic === topic;
      const byDifficulty = difficulty === 'Todas' || question.difficulty === difficulty;
      return byMode && bySubject && byTopic && byDifficulty;
    });
  }, [difficulty, mode, progress.answers, subject, topic]);

  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];
  const stats = getAnswerStats(progress);
  const weakSubject = getWeakSubject(progress);
  const markedCount = progress.marked?.length || 0;
  const answerRecord = currentQuestion ? progress.answers?.[currentQuestion.id] : null;
  const isMarked = currentQuestion ? progress.marked?.includes(currentQuestion.id) : false;
  const correctOption = currentQuestion?.correctAnswer;
  const isCorrect = answered && selectedOption === correctOption;

  function resetQuestionState(nextIndex = 0) {
    setCurrentIndex(nextIndex);
    setSelectedOption(null);
    setAnswered(false);
  }

  function handleSubjectChange(value) {
    setSubject(value);
    setTopic('Todos');
    resetQuestionState(0);
  }

  function handleFilterChange(setter, value) {
    setter(value);
    resetQuestionState(0);
  }

  function handleAnswer() {
    if (!currentQuestion || !selectedOption || answered) return;

    const correct = selectedOption === currentQuestion.correctAnswer;
    const previous = progress.answers?.[currentQuestion.id] || { attempts: 0, hasWrong: false };
    const timestamp = new Date().toISOString();

    setProgress((current) => {
      const currentPrevious = current.answers?.[currentQuestion.id] || { attempts: 0, hasWrong: false };
      return {
        ...current,
        answers: {
          ...(current.answers || {}),
          [currentQuestion.id]: {
            selected: selectedOption,
            correctAnswer: currentQuestion.correctAnswer,
            lastCorrect: correct,
            hasWrong: currentPrevious.hasWrong || !correct,
            attempts: (currentPrevious.attempts || 0) + 1,
            subject: currentQuestion.subject,
            topic: currentQuestion.topic,
            lastAnsweredAt: timestamp,
          },
        },
        history: [
          ...(current.history || []),
          {
            id: `${currentQuestion.id}-${timestamp}`,
            questionId: currentQuestion.id,
            subject: currentQuestion.subject,
            topic: currentQuestion.topic,
            selected: selectedOption,
            correct,
            answeredAt: timestamp,
          },
        ].slice(-250),
      };
    });

    setSession((current) => ({
      answered: current.answered + 1,
      correct: current.correct + (correct ? 1 : 0),
      wrong: current.wrong + (correct ? 0 : 1),
    }));
    setAnswered(true);
  }

  function handleNext() {
    if (!filteredQuestions.length) return;
    const nextIndex = currentIndex + 1 >= filteredQuestions.length ? 0 : currentIndex + 1;
    resetQuestionState(nextIndex);
  }

  function handleToggleMarked() {
    if (!currentQuestion) return;
    setProgress((current) => {
      const marked = new Set(current.marked || []);
      if (marked.has(currentQuestion.id)) marked.delete(currentQuestion.id);
      else marked.add(currentQuestion.id);
      return { ...current, marked: [...marked] };
    });
  }

  function clearTrainingProgress() {
    setProgress(initialProgress);
    setSession({ answered: 0, correct: 0, wrong: 0 });
    resetQuestionState(0);
  }

  return (
    <div className="questions-page page-grid">
      <section className="questions-hero">
        <div>
          <Badge tone="cyan">banco inteligente</Badge>
          <h1>Questões de Treino</h1>
          <p>Treine por matéria, revise erros e receba feedback comentado com pegadinha de banca.</p>
        </div>
        <div className="question-scoreboard">
          <article><span>Respondidas</span><strong>{stats.answered}</strong></article>
          <article><span>Acertos</span><strong>{stats.correct}</strong></article>
          <article><span>Taxa</span><strong>{stats.accuracy}%</strong></article>
          <article><span>Marcadas</span><strong>{markedCount}</strong></article>
        </div>
      </section>

      <Card className="questions-control-panel wide-card">
        <div className="section-heading">
          <div>
            <Badge tone="purple">filtros</Badge>
            <h3>Monte sua sessão</h3>
          </div>
          <div className="mode-toggle" role="tablist" aria-label="Modo de questões">
            <button className={mode === 'treino' ? 'active' : ''} onClick={() => { setMode('treino'); resetQuestionState(0); }}>Treino</button>
            <button className={mode === 'erros' ? 'active' : ''} onClick={() => { setMode('erros'); resetQuestionState(0); }}>Só erros</button>
          </div>
        </div>
        <div className="question-filters">
          <label>
            Matéria
            <select value={subject} onChange={(event) => handleSubjectChange(event.target.value)}>
              {subjects.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Tópico
            <select value={topic} onChange={(event) => handleFilterChange(setTopic, event.target.value)}>
              {topics.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Dificuldade
            <select value={difficulty} onChange={(event) => handleFilterChange(setDifficulty, event.target.value)}>
              {['Todas', ...questionDifficulties].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
      </Card>

      <div className="questions-layout">
        <main className="question-main">
          {!currentQuestion ? (
            <EmptyState
              title={mode === 'erros' ? 'Nenhum erro encontrado' : 'Nenhuma questão encontrada'}
              description={mode === 'erros'
                ? 'Quando você errar uma questão, ela aparecerá aqui para revisão estratégica.'
                : 'Ajuste os filtros para encontrar questões do banco local.'}
            />
          ) : (
            <Card className={`question-card ${answered ? (isCorrect ? 'question-correct' : 'question-wrong') : ''}`}>
              <div className="question-card-header">
                <div>
                  <Badge tone={currentQuestion.difficulty === 'Difícil' ? 'orange' : currentQuestion.difficulty === 'Média' ? 'purple' : 'cyan'}>{currentQuestion.difficulty}</Badge>
                  <h2>Questão {currentIndex + 1} de {filteredQuestions.length}</h2>
                </div>
                <Button variant="ghost" onClick={handleToggleMarked}>{isMarked ? 'Desmarcar' : 'Marcar revisão'}</Button>
              </div>

              <div className="question-meta-line">
                <span>{currentQuestion.subject}</span>
                <span>{currentQuestion.topic}</span>
                {answerRecord?.hasWrong && <span className="danger-chip">já errou</span>}
                {answerRecord?.lastCorrect && <span className="success-chip">última correta</span>}
              </div>

              <p className="question-statement">{currentQuestion.statement}</p>

              <div className="answer-options">
                {currentQuestion.options.map((option) => {
                  const selected = selectedOption === option.id;
                  const showCorrect = answered && option.id === currentQuestion.correctAnswer;
                  const showWrong = answered && selected && option.id !== currentQuestion.correctAnswer;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={`answer-option ${selected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showWrong ? 'wrong' : ''}`}
                      onClick={() => !answered && setSelectedOption(option.id)}
                      disabled={answered}
                    >
                      <strong>{option.id}</strong>
                      <span>{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {!answered ? (
                <div className="question-actions">
                  <Button onClick={handleAnswer} disabled={!selectedOption}>Responder</Button>
                  <Button variant="secondary" onClick={handleNext}>Pular</Button>
                </div>
              ) : (
                <div className={`answer-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                  <Badge tone={isCorrect ? 'green' : 'orange'}>{isCorrect ? 'acerto' : 'erro estratégico'}</Badge>
                  <h3>{isCorrect ? 'Boa. Você escolheu o caminho certo.' : `Gabarito: ${currentQuestion.correctAnswer}`}</h3>
                  <p>{currentQuestion.explanation}</p>
                  <div className="trap-box">
                    <strong>Pegadinha da banca</strong>
                    <span>{currentQuestion.trap}</span>
                  </div>
                  <div className="basis-box">
                    <strong>Fundamento</strong>
                    <span>{currentQuestion.legalBasis}</span>
                  </div>
                  <div className="question-actions">
                    <Button onClick={handleNext}>Próxima questão</Button>
                    <Button variant="ghost" onClick={handleToggleMarked}>{isMarked ? 'Remover revisão' : 'Marcar para revisão'}</Button>
                  </div>
                </div>
              )}
            </Card>
          )}
        </main>

        <aside className="question-side-panel">
          <Card>
            <Badge tone="cyan">sessão atual</Badge>
            <div className="mini-stat-stack">
              <span><b>{session.answered}</b> respondidas agora</span>
              <span><b>{session.correct}</b> acertos</span>
              <span><b>{session.wrong}</b> erros</span>
            </div>
            <ProgressBar label="Acerto da sessão" value={session.answered ? Math.round((session.correct / session.answered) * 100) : 0} />
          </Card>
          <Card variant="highlight">
            <Badge tone="orange">diagnóstico</Badge>
            <h3>Ponto fraco atual</h3>
            <p>{weakSubject}</p>
            <small>O app calcula o tema com menor taxa de acerto entre as questões respondidas.</small>
          </Card>
          <Card>
            <Badge tone="purple">histórico</Badge>
            <div className="history-list">
              {(progress.history || []).slice(-6).reverse().map((item) => (
                <span key={item.id} className={item.correct ? 'history-correct' : 'history-wrong'}>
                  {item.correct ? '✓' : '×'} {item.subject}
                </span>
              ))}
              {!(progress.history || []).length && <small>Nenhuma resposta registrada ainda.</small>}
            </div>
          </Card>
          <Button variant="danger" onClick={clearTrainingProgress}>Limpar histórico de questões</Button>
        </aside>
      </div>
    </div>
  );
}

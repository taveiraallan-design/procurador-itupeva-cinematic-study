import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialOralProgress, ORAL_PROGRESS_KEY, oralThemes, scoreOralAnswer } from '../data/oralBank';

function toneByScore(score) {
  if (score >= 80) return 'green';
  if (score >= 60) return 'cyan';
  if (score >= 35) return 'orange';
  return 'purple';
}

export default function OralJuridico({ onNavigate = () => {} }) {
  const [progress, setProgress] = useLocalStorage(ORAL_PROGRESS_KEY, initialOralProgress);
  const [themeId, setThemeId] = useState(progress.activeThemeId || oralThemes[1].id);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [mode, setMode] = useState('60s');
  const [result, setResult] = useState(null);
  const [showIdeal, setShowIdeal] = useState(false);

  const theme = useMemo(() => oralThemes.find((item) => item.id === themeId) || oralThemes[0], [themeId]);
  const question = theme.questions[questionIndex] || theme.questions[0];
  const themeAttempts = (progress.attempts || []).filter((attempt) => attempt.themeId === theme.id);
  const average = themeAttempts.length
    ? Math.round(themeAttempts.reduce((sum, item) => sum + item.score, 0) / themeAttempts.length)
    : 0;
  const masteredCount = Object.values(progress.mastered || {}).filter(Boolean).length;
  const totalQuestions = oralThemes.reduce((sum, item) => sum + item.questions.length, 0);
  const mastery = Math.round((masteredCount / Math.max(1, totalQuestions)) * 100);

  function selectTheme(nextId) {
    setThemeId(nextId);
    setQuestionIndex(0);
    setAnswer('');
    setResult(null);
    setShowIdeal(false);
    setProgress((current) => ({ ...current, activeThemeId: nextId }));
  }

  function evaluate() {
    const nextResult = scoreOralAnswer(answer, question);
    setResult(nextResult);
    setProgress((current) => ({
      ...current,
      attempts: [
        {
          id: `${question.id}-${Date.now()}`,
          themeId: theme.id,
          questionId: question.id,
          prompt: question.prompt,
          score: nextResult.total,
          words: nextResult.words,
          date: new Date().toISOString(),
          mode,
        },
        ...(current.attempts || []).slice(0, 29),
      ],
    }));
  }

  function toggleMastery() {
    setProgress((current) => ({
      ...current,
      mastered: { ...(current.mastered || {}), [question.id]: !current.mastered?.[question.id] },
    }));
  }

  function nextQuestion() {
    const nextIndex = (questionIndex + 1) % theme.questions.length;
    setQuestionIndex(nextIndex);
    setAnswer('');
    setResult(null);
    setShowIdeal(false);
  }

  return (
    <div className="page-grid oral-page">
      <section className="mentor-hero oral-hero">
        <div>
          <Badge tone="purple">fase 28 · oral jurídico</Badge>
          <h1>Oral Jurídico</h1>
          <p>Treine resposta em voz alta para dominar raciocínio jurídico, discursiva e memorização ativa. Responda como Procurador: fundamento, aplicação e providência.</p>
          <div className="hero-actions">
            <Button onClick={evaluate}>Avaliar fala escrita</Button>
            <Button variant="secondary" onClick={() => setMode(mode === '60s' ? 'parecer' : '60s')}>{mode === '60s' ? 'Modo parecer' : 'Modo 60 segundos'}</Button>
            <Button variant="ghost" onClick={() => onNavigate('discursivas')}>Ir para Discursivas</Button>
          </div>
        </div>
        <div className="mentor-readiness" style={{ '--mentor-readiness': `${mastery}%` }}>
          <strong>{mastery}%</strong>
          <span>domínio oral</span>
        </div>
      </section>

      <div className="subject-tabs">
        {oralThemes.map((item) => (
          <button key={item.id} type="button" className={item.id === theme.id ? 'active' : ''} onClick={() => selectTheme(item.id)}>
            {item.title}
          </button>
        ))}
      </div>

      <div className="stats-grid">
        <Card><span className="stat-label">Tema atual</span><strong className="stat-value small-stat">{theme.subject}</strong><small>dificuldade {theme.difficulty}</small></Card>
        <Card><span className="stat-label">Média no tema</span><strong className="stat-value">{average}%</strong><small>{themeAttempts.length} tentativas</small></Card>
        <Card><span className="stat-label">Modo</span><strong className="stat-value small-stat">{mode === '60s' ? '60s' : 'parecer'}</strong><small>{mode === '60s' ? 'objetivo e direto' : 'fundamento mais completo'}</small></Card>
        <Card><span className="stat-label">Perguntas dominadas</span><strong className="stat-value">{masteredCount}/{totalQuestions}</strong><small>memorização ativa</small></Card>
      </div>

      <div className="two-cols oral-layout">
        <Card variant="highlight">
          <div className="section-heading">
            <div>
              <Badge tone="cyan">pergunta da banca</Badge>
              <h2>{theme.title}</h2>
            </div>
            <span className="muted-chip">{questionIndex + 1}/{theme.questions.length}</span>
          </div>
          <div className="oral-question-box">
            <strong>{question.prompt}</strong>
            <p><b>Tempo sugerido:</b> {mode === '60s' ? '60 segundos' : '3 a 5 minutos'} · <b>Cuidado:</b> {question.trap}</p>
          </div>
          <textarea
            className="discursive-textarea oral-textarea"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="Digite aqui o que você falaria em voz alta. Dica: abra com o problema, fundamente, aplique e conclua com a providência."
          />
          <div className="hero-actions">
            <Button onClick={evaluate}>Avaliar fala escrita</Button>
            <Button variant={progress.mastered?.[question.id] ? 'success' : 'secondary'} onClick={toggleMastery}>{progress.mastered?.[question.id] ? 'Dominada ✓' : 'Marcar dominada'}</Button>
            <Button variant="ghost" onClick={nextQuestion}>Próxima pergunta</Button>
          </div>
        </Card>

        <Card>
          <div className="section-heading">
            <div>
              <Badge tone={result ? toneByScore(result.total) : 'orange'}>{result ? 'avaliação' : 'roteiro'}</Badge>
              <h3>{result ? `${result.total}% · ${result.level}` : 'Como responder'}</h3>
            </div>
          </div>

          {!result && (
            <div className="strategy-list">
              <li>1. Delimite o problema jurídico em uma frase.</li>
              <li>2. Cite 3 a 5 fundamentos centrais.</li>
              <li>3. Aplique ao caso concreto, sem virar aula genérica.</li>
              <li>4. Feche com providência: anular, convalidar, opinar, defender, cobrar ou indeferir.</li>
            </div>
          )}

          {result && (
            <div className="oral-result-list">
              {result.criteria.map((item) => (
                <div className="oral-criterion" key={item.label}>
                  <div className="progress-label"><span>{item.label}</span><strong>{item.value}/{item.max}</strong></div>
                  <ProgressBar value={Math.round((item.value / item.max) * 100)} />
                  <small>{item.hint}</small>
                </div>
              ))}
              <div className="pill-list">
                {result.hitTerms.length ? result.hitTerms.map((term) => <span key={term}>{term}</span>) : <span>faltaram termos técnicos</span>}
              </div>
            </div>
          )}

          <div className="hero-actions">
            <Button variant="secondary" onClick={() => setShowIdeal((value) => !value)}>{showIdeal ? 'Ocultar resposta ideal' : 'Revelar resposta ideal'}</Button>
          </div>
          {showIdeal && <div className="answer-model-box"><strong>Resposta ideal sintética</strong><p>{question.ideal}</p></div>}
        </Card>
      </div>
    </div>
  );
}

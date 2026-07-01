import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { flashcards, FLASHCARD_PROGRESS_KEY, initialFlashcardProgress } from '../data/flashcards';
import { questions } from '../data/questions';
import { QUESTION_PROGRESS_KEY, REVIEW_KEY, SIMULATIONS_KEY, buildReviewQueue, initialReviewProgress } from '../utils/reviewEngine';

const initialQuestionProgress = { answers: {}, marked: [], history: [] };
const initialSimulationProgress = { attempts: [], lastResult: null };
const DAY = 24 * 60 * 60 * 1000;

function addDays(days) {
  return new Date(Date.now() + days * DAY).toISOString();
}

function isDue(record) {
  if (!record?.nextReviewAt) return true;
  return new Date(record.nextReviewAt) <= new Date();
}

function buildErrorCards(questionProgress) {
  return questions
    .filter((question) => {
      const answer = questionProgress.answers?.[question.id];
      return answer?.hasWrong || answer?.lastCorrect === false;
    })
    .slice(0, 20)
    .map((question) => ({
      id: `err-${question.id}`,
      deck: 'Erros convertidos',
      subject: question.subject,
      topic: question.topic,
      difficulty: 'Erro recente',
      front: `Como resolver a pegadinha: ${question.statement}`,
      back: `Gabarito: ${question.correctAnswer}. ${question.explanation}`,
      memoryHook: question.legalBasis || 'Revise o fundamento e refaça uma questão parecida.',
      trap: question.trap,
      legalBasis: question.legalBasis,
      tags: [...(question.tags || []), 'erro'],
      source: 'question-error',
    }));
}

function qualityMeta(quality) {
  return {
    again: { label: 'Errei', interval: 0, tone: 'red' },
    hard: { label: 'Difícil', interval: 1, tone: 'orange' },
    good: { label: 'Bom', interval: 3, tone: 'cyan' },
    easy: { label: 'Fácil', interval: 7, tone: 'green' },
  }[quality];
}

function buildStats(cards, progress) {
  const records = progress.cards || {};
  const due = cards.filter((card) => isDue(records[card.id])).length;
  const mastered = cards.filter((card) => (records[card.id]?.streak || 0) >= 3).length;
  const reviewedToday = Object.values(records).filter((record) => {
    if (!record.lastReviewedAt) return false;
    return new Date(record.lastReviewedAt).toDateString() === new Date().toDateString();
  }).length;
  const weakDeck = cards.reduce((acc, card) => {
    const record = records[card.id];
    if (!acc[card.deck]) acc[card.deck] = { deck: card.deck, pressure: 0, total: 0 };
    acc[card.deck].total += 1;
    if (!record || isDue(record)) acc[card.deck].pressure += 2;
    if (record?.lastQuality === 'again' || record?.lastQuality === 'hard') acc[card.deck].pressure += 3;
    return acc;
  }, {});
  const topWeakDeck = Object.values(weakDeck).sort((a, b) => b.pressure - a.pressure)[0];
  return { total: cards.length, due, mastered, reviewedToday, weakDeck: topWeakDeck?.deck || 'Atos Administrativos' };
}

export default function Flashcards() {
  const [questionProgress] = useLocalStorage(QUESTION_PROGRESS_KEY, initialQuestionProgress);
  const [reviewProgress] = useLocalStorage(REVIEW_KEY, initialReviewProgress);
  const [simulationProgress] = useLocalStorage(SIMULATIONS_KEY, initialSimulationProgress);
  const [flashcardProgress, setFlashcardProgress] = useLocalStorage(FLASHCARD_PROGRESS_KEY, initialFlashcardProgress);
  const [selectedDeck, setSelectedDeck] = useState('Todos');
  const [mode, setMode] = useState('due');
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const errorCards = useMemo(() => buildErrorCards(questionProgress), [questionProgress]);
  const reviewQueue = useMemo(() => buildReviewQueue(questionProgress, reviewProgress, simulationProgress), [questionProgress, reviewProgress, simulationProgress]);
  const smartCards = useMemo(() => {
    const simulationCards = reviewQueue
      .filter((item) => item.type === 'simulation-topic')
      .slice(0, 8)
      .map((item) => ({
        id: `rev-${item.id}`,
        deck: 'Pós-simulado',
        subject: item.subject,
        topic: item.topic,
        difficulty: 'Pós-simulado',
        front: `Qual cuidado de prova em ${item.topic}?`,
        back: item.explanation,
        memoryHook: 'Explique em voz alta e depois faça 3 questões do tema.',
        trap: item.trap,
        legalBasis: item.legalBasis,
        tags: ['pós-simulado', item.subject],
      }));
    return [...flashcards, ...errorCards, ...simulationCards];
  }, [errorCards, reviewQueue]);

  const decks = useMemo(() => ['Todos', 'Vencidos', ...new Set(smartCards.map((card) => card.deck))], [smartCards]);
  const stats = useMemo(() => buildStats(smartCards, flashcardProgress), [smartCards, flashcardProgress]);

  const filteredCards = useMemo(() => {
    const records = flashcardProgress.cards || {};
    return smartCards.filter((card) => {
      if (selectedDeck === 'Vencidos' && !isDue(records[card.id])) return false;
      if (selectedDeck !== 'Todos' && selectedDeck !== 'Vencidos' && card.deck !== selectedDeck) return false;
      if (mode === 'due' && !isDue(records[card.id])) return false;
      if (mode === 'errors' && card.deck !== 'Erros convertidos') return false;
      if (mode === 'mastered' && (records[card.id]?.streak || 0) < 3) return false;
      return true;
    });
  }, [smartCards, flashcardProgress.cards, selectedDeck, mode]);

  const currentCard = filteredCards[activeIndex] || filteredCards[0];
  const currentRecord = currentCard ? flashcardProgress.cards?.[currentCard.id] : null;
  const progressValue = filteredCards.length ? Math.round(((activeIndex + 1) / filteredCards.length) * 100) : 0;

  function resetSession(deck = selectedDeck, nextMode = mode) {
    setSelectedDeck(deck);
    setMode(nextMode);
    setActiveIndex(0);
    setFlipped(false);
  }

  function goNext() {
    setFlipped(false);
    setActiveIndex((index) => filteredCards.length ? (index + 1) % filteredCards.length : 0);
  }

  function registerCard(quality) {
    if (!currentCard) return;
    const meta = qualityMeta(quality);
    const now = new Date().toISOString();
    setFlashcardProgress((current) => {
      const previous = current.cards?.[currentCard.id] || { count: 0, streak: 0 };
      const streak = quality === 'good' || quality === 'easy' ? (previous.streak || 0) + 1 : 0;
      return {
        ...current,
        cards: {
          ...(current.cards || {}),
          [currentCard.id]: {
            count: (previous.count || 0) + 1,
            streak,
            lastQuality: quality,
            lastReviewedAt: now,
            nextReviewAt: addDays(meta.interval),
            subject: currentCard.subject,
            topic: currentCard.topic,
            deck: currentCard.deck,
          },
        },
        sessions: [
          {
            id: `${currentCard.id}-${now}`,
            cardId: currentCard.id,
            deck: currentCard.deck,
            subject: currentCard.subject,
            topic: currentCard.topic,
            quality,
            nextReviewAt: addDays(meta.interval),
            reviewedAt: now,
          },
          ...(current.sessions || []),
        ].slice(0, 200),
      };
    });
    goNext();
  }

  return (
    <div className="flashcards-page page-grid">
      <section className="flash-hero">
        <div>
          <Badge tone="cyan">memorização inteligente</Badge>
          <h1>Flashcards Jurídicos</h1>
          <p>Recuperação ativa com revisão espaçada, pegadinhas de banca e decks gerados a partir dos seus erros.</p>
        </div>
        <div className="flash-scoreboard">
          <article><span>Total</span><strong>{stats.total}</strong></article>
          <article><span>Vencidos</span><strong>{stats.due}</strong></article>
          <article><span>Dominados</span><strong>{stats.mastered}</strong></article>
          <article><span>Hoje</span><strong>{stats.reviewedToday}</strong></article>
        </div>
      </section>

      <Card className="wide-card flash-command-card">
        <div className="section-heading">
          <div>
            <Badge tone="purple">sessão ativa</Badge>
            <h3>Deck prioritário: {stats.weakDeck}</h3>
            <p>Vire o card, responda em voz alta e classifique sua lembrança.</p>
          </div>
          <div className="flash-mode-row" role="tablist" aria-label="Modo dos flashcards">
            <button className={mode === 'due' ? 'active' : ''} onClick={() => resetSession(selectedDeck, 'due')}>Vencidos</button>
            <button className={mode === 'all' ? 'active' : ''} onClick={() => resetSession(selectedDeck, 'all')}>Todos</button>
            <button className={mode === 'errors' ? 'active' : ''} onClick={() => resetSession('Todos', 'errors')}>Erros</button>
            <button className={mode === 'mastered' ? 'active' : ''} onClick={() => resetSession(selectedDeck, 'mastered')}>Dominados</button>
          </div>
        </div>
        <div className="deck-chip-row">
          {decks.map((deck) => (
            <button key={deck} className={selectedDeck === deck ? 'active' : ''} onClick={() => resetSession(deck, mode)}>{deck}</button>
          ))}
        </div>
        <ProgressBar label={`${filteredCards.length} cards no filtro atual`} value={progressValue} />
      </Card>

      <div className="flash-layout">
        <Card className="flash-study-card">
          {!currentCard ? (
            <EmptyState
              title="Nenhum flashcard neste filtro"
              description="Troque o deck ou responda/erre questões para gerar cards inteligentes de revisão."
            />
          ) : (
            <>
              <div className="flash-card-topline">
                <div>
                  <Badge tone={currentCard.deck === 'Erros convertidos' ? 'orange' : 'cyan'}>{currentCard.deck}</Badge>
                  <h2>{currentCard.topic}</h2>
                  <p>{currentCard.subject} • {currentCard.difficulty}</p>
                </div>
                <div className="review-position"><strong>{activeIndex + 1}</strong><span>/{filteredCards.length}</span></div>
              </div>

              <button className={`memory-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped((value) => !value)}>
                <span className="memory-side-label">{flipped ? 'verso' : 'frente'}</span>
                <strong>{flipped ? currentCard.back : currentCard.front}</strong>
                <small>{flipped ? 'Clique para voltar à pergunta.' : 'Pense na resposta antes de virar.'}</small>
              </button>

              {flipped ? (
                <div className="flash-answer-intel">
                  <article>
                    <span>Gancho mental</span>
                    <p>{currentCard.memoryHook}</p>
                  </article>
                  <article className="trap-box-soft">
                    <span>Pegadinha da banca</span>
                    <p>{currentCard.trap}</p>
                  </article>
                  <article>
                    <span>Fundamento</span>
                    <p>{currentCard.legalBasis}</p>
                  </article>
                </div>
              ) : (
                <div className="flash-prep-note">
                  <span>Regra do card</span>
                  <p>Não vire imediatamente. Fale a resposta, cite a pegadinha e só depois confira.</p>
                </div>
              )}

              <div className="flash-quality-grid">
                <button onClick={() => registerCard('again')}><strong>Errei</strong><span>volta hoje</span></button>
                <button onClick={() => registerCard('hard')}><strong>Difícil</strong><span>amanhã</span></button>
                <button onClick={() => registerCard('good')}><strong>Bom</strong><span>3 dias</span></button>
                <button onClick={() => registerCard('easy')}><strong>Fácil</strong><span>7 dias</span></button>
              </div>

              <div className="review-actions-row">
                <Button variant="secondary" onClick={() => setFlipped((value) => !value)}>{flipped ? 'Ocultar resposta' : 'Virar card'}</Button>
                <Button variant="ghost" onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}>Voltar</Button>
                <Button variant="ghost" onClick={goNext}>Pular</Button>
              </div>

              {currentRecord && (
                <p className="muted-text flash-record-note">Este card já foi visto {currentRecord.count || 0} vez(es). Sequência atual: {currentRecord.streak || 0}.</p>
              )}
            </>
          )}
        </Card>

        <aside className="flash-side-panel">
          <Card>
            <Badge tone="green">decks</Badge>
            <h3>Mapa de memorização</h3>
            <div className="flash-deck-list">
              {Object.entries(smartCards.reduce((acc, card) => {
                if (!acc[card.deck]) acc[card.deck] = { total: 0, due: 0 };
                acc[card.deck].total += 1;
                if (isDue(flashcardProgress.cards?.[card.id])) acc[card.deck].due += 1;
                return acc;
              }, {})).map(([deck, info]) => (
                <button key={deck} onClick={() => resetSession(deck, 'all')}>
                  <strong>{deck}</strong>
                  <span>{info.due} vencidos • {info.total} cards</span>
                </button>
              ))}
            </div>
          </Card>

          <Card variant="highlight">
            <Badge tone="orange">estratégia</Badge>
            <h3>Como estudar</h3>
            <ol className="review-method-list">
              <li>Leia a frente e responda sem olhar.</li>
              <li>Explique a pegadinha em voz alta.</li>
              <li>Vire o card e corrija sua resposta.</li>
              <li>Use Errei/Difícil/Bom/Fácil para espaçar a revisão.</li>
            </ol>
          </Card>

          <Card>
            <Badge tone="cyan">histórico</Badge>
            <h3>Últimos cards</h3>
            <div className="review-history-list">
              {(flashcardProgress.sessions || []).slice(0, 7).map((session) => (
                <article key={session.id}>
                  <strong>{session.topic}</strong>
                  <span>{qualityMeta(session.quality).label} • {session.deck}</span>
                </article>
              ))}
              {!(flashcardProgress.sessions || []).length && <p className="muted-text">Nenhum flashcard revisado ainda.</p>}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

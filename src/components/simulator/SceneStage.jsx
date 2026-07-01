import Badge from '../ui/Badge';
import Button from '../ui/Button';
import CinematicSceneRenderer from './scenes/CinematicSceneRenderer';

function getExamChallenge(step) {
  if (step.examQuestion) return step.examQuestion;
  if (step.type === 'decision') {
    return {
      situation: step.narration,
      question: step.question,
      options: step.options,
    };
  }
  return null;
}

export default function SceneStage({
  step,
  stepIndex,
  totalSteps,
  isExecuting,
  autoPlay,
  selectedOption,
  lastFeedback,
  examMode,
  isCompleted,
  score,
  percent,
  recommendedReview,
  onExecute,
  onNext,
  onBack,
  onReset,
  onChooseOption,
}) {
  const isDecision = step.type === 'decision';
  const challenge = examMode ? getExamChallenge(step) : isDecision ? { question: step.question, options: step.options } : null;
  const requiresAnswer = Boolean(challenge);
  const hideDetails = examMode && requiresAnswer && !selectedOption;

  if (isCompleted) {
    return (
      <section className="scene-execution-panel exam-final-report">
        <div className="final-report-hero">
          <Badge tone={score.wrong ? 'orange' : 'green'}>relatório final</Badge>
          <h2>Resultado do Modo Prova</h2>
          <p>Seu desempenho no fluxo de Atos Administrativos foi convertido em revisão dirigida.</p>
        </div>
        <div className="final-score-grid">
          <div><span>Acertos</span><strong>{score.correct}</strong></div>
          <div><span>Erros</span><strong>{score.wrong}</strong></div>
          <div><span>Aproveitamento</span><strong>{score.correct + score.wrong ? `${percent}%` : '—'}</strong></div>
          <div><span>Pegadinhas</span><strong>{score.traps.length}</strong></div>
        </div>
        <div className="final-report-section">
          <h3>Temas fracos detectados</h3>
          <div className="mini-review-list strong">
            {recommendedReview.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="final-report-section">
          <h3>Erros cometidos</h3>
          {score.answers.filter((answer) => !answer.correct).length === 0 ? (
            <p>Nenhum erro registrado. Faça mais uma rodada para consolidar as pegadinhas.</p>
          ) : (
            <div className="mistake-list">
              {score.answers.filter((answer) => !answer.correct).map((answer) => (
                <article key={`${answer.stepId}-${answer.option}`}>
                  <strong>{answer.title}</strong>
                  <span>Resposta escolhida: {answer.option}</span>
                  <p>{answer.feedback}</p>
                </article>
              ))}
            </div>
          )}
        </div>
        <div className="final-report-section">
          <h3>Revisão recomendada</h3>
          <p>Refaça o fluxo focando em: anulação x revogação, convalidação de vício sanável, mérito administrativo e atos vinculados.</p>
        </div>
        <div className="scene-control-row">
          <Button onClick={onReset}>Refazer fluxo</Button>
          <Button variant="secondary" onClick={onBack}>Revisar pegadinhas</Button>
        </div>
      </section>
    );
  }

  return (
    <section className={`scene-execution-panel ${step.isError ? 'danger-scene' : ''} ${examMode ? 'exam-mode-panel' : ''}`}>
      <div className="scene-execution-header">
        <div>
          <div className="scene-kicker">
            <Badge tone={examMode ? 'purple' : step.isError ? 'orange' : step.type === 'decision' ? 'purple' : 'cyan'}>{examMode ? 'modo prova' : step.type === 'decision' ? 'decisão em cena' : 'cena em execução'}</Badge>
            <span>{stepIndex + 1} de {totalSteps}</span>
          </div>
          <h2>{step.title}</h2>
          <p>{examMode && challenge ? challenge.situation || 'Observe a cena e responda como em prova objetiva.' : step.narration}</p>
        </div>
        <div className="scene-status-card">
          <span>Status</span>
          <strong>{selectedOption ? (selectedOption.correct ? 'decisão correta' : 'erro registrado') : step.statusLabel}</strong>
        </div>
      </div>

      <div className={`scene-visual-frame ${lastFeedback?.correct ? 'answer-correct' : ''} ${lastFeedback && !lastFeedback.correct ? 'answer-wrong' : ''}`}>
        <CinematicSceneRenderer step={step} isExecuting={isExecuting} selectedOption={selectedOption} />
      </div>

      {challenge && (
        <div className="exam-question-card">
          <Badge tone="purple">questão objetiva</Badge>
          <h3>{challenge.question}</h3>
          <div className="cinematic-options exam-options">
            {challenge.options.map((option, index) => {
              const isSelected = selectedOption?.id === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  className={`cinematic-option ${isSelected ? 'selected' : ''} ${isSelected && option.correct ? 'correct' : ''} ${isSelected && !option.correct ? 'wrong' : ''}`}
                  onClick={() => onChooseOption(option)}
                >
                  <small>{String.fromCharCode(65 + index)}</small>
                  <strong>{option.label}</strong>
                  {isSelected && <span>{option.correct ? 'Caminho correto' : 'Pegadinha da banca'}</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="scene-action-panel">
        <div>
          <span className="action-label">Ação da etapa</span>
          <strong>{step.actionLabel}</strong>
          <p>{hideDetails ? 'Responda para revelar a consequência jurídica, o fundamento e a pegadinha.' : step.consequence}</p>
        </div>
        <div className="scene-control-row">
          <Button onClick={onExecute}>{autoPlay ? 'Pausar processo' : isExecuting ? 'Executando...' : 'Executar processo'}</Button>
          <Button variant="secondary" onClick={onNext} disabled={requiresAnswer && !selectedOption}>Continuar</Button>
          <Button variant="ghost" onClick={onBack}>Voltar</Button>
          <Button variant="ghost" onClick={onReset}>Reiniciar</Button>
        </div>
      </div>

      {lastFeedback && (
        <div className={`scene-feedback ${lastFeedback.correct ? 'correct' : 'wrong'}`}>
          <strong>{lastFeedback.correct ? 'Decisão correta' : 'Decisão incorreta'}</strong>
          <p>{lastFeedback.message}</p>
          {!lastFeedback.correct && <em>Pegadinha: {lastFeedback.trap}</em>}
        </div>
      )}
    </section>
  );
}

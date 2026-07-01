import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ExamInsightPanel({ step, revealTrap, onToggleTrap, examMode, selectedOption, score }) {
  const hasChallenge = step.type === 'decision' || step.examQuestion;
  const hideDetails = examMode && hasChallenge && !selectedOption;

  return (
    <aside className="exam-insight-panel">
      <div className="section-heading compact">
        <div>
          <Badge tone={examMode ? 'purple' : 'orange'}>{examMode ? 'Painel bloqueado' : 'Inteligência de prova'}</Badge>
          <h3>{step.short}</h3>
        </div>
      </div>

      {examMode && (
        <div className="exam-mini-score">
          <div><span>Acertos</span><strong>{score.correct}</strong></div>
          <div><span>Erros</span><strong>{score.wrong}</strong></div>
          <div><span>Pegadinhas</span><strong>{score.traps.length}</strong></div>
        </div>
      )}

      <div className="insight-block important">
        <span>{hideDetails ? 'Situação-problema' : 'Como pensar'}</span>
        <p>{hideDetails ? 'Observe a cena e escolha a alternativa. A explicação será liberada depois da resposta.' : step.examTip}</p>
      </div>

      {hideDetails ? (
        <div className="insight-block locked">
          <span>Modo prova</span>
          <p>Fundamento jurídico, pegadinha e dica de memorização estão ocultos até sua decisão.</p>
        </div>
      ) : (
        <>
          <div className="insight-block">
            <span>Fundamento</span>
            <p>{step.legalBasis}</p>
          </div>
          <div className="insight-block trap">
            <span>Pegadinha</span>
            <p>{revealTrap ? step.trap : 'Clique para revelar a armadilha típica da banca.'}</p>
            <Button variant="ghost" size="sm" onClick={onToggleTrap}>{revealTrap ? 'Ocultar pegadinha' : 'Mostrar pegadinha'}</Button>
          </div>
        </>
      )}

      <div className="memory-strip">
        <strong>Regra de ouro</strong>
        <span>{step.memoryTip || 'Primeiro legalidade. Depois mérito.'}</span>
      </div>
    </aside>
  );
}

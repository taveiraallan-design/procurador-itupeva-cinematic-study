import { useMemo, useState } from 'react';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { cinematicFlows } from '../data/cinematicActsFlow';

function buildFlowExport(flow) {
  return [
    `FLUXOGRAMA JURÍDICO PREMIUM — ${flow.title}`,
    `Matéria: ${flow.subject}`,
    `Risco de prova: ${flow.risk || 'relevante'}`,
    '',
    `Objetivo: ${flow.objective}`,
    '',
    'Etapas:',
    ...flow.steps.map((step, index) => `${index + 1}. ${step.title}\n   Base: ${step.legalBasis}\n   Pegadinha: ${step.trap}\n   Dica de prova: ${step.examTip}`),
  ].join('\n');
}

export default function LegalFlowEngine({ onNavigate }) {
  const [activeFlowId, setActiveFlowId] = useState(cinematicFlows[0]?.id);
  const activeFlow = useMemo(
    () => cinematicFlows.find((flow) => flow.id === activeFlowId) || cinematicFlows[0],
    [activeFlowId]
  );

  async function copyFlow() {
    await navigator.clipboard?.writeText(buildFlowExport(activeFlow));
  }

  return (
    <div className="legal-flow-engine-page">
      <section className="legal-flow-engine-hero">
        <Badge tone="purple">Pacote 24 preservado • LegalFlowEngine</Badge>
        <h1>Fluxogramas Jurídicos Premium</h1>
        <p>
          Aba própria para estudar processos jurídicos por mapa executivo, sequência decisória, risco de prova,
          pegadinhas e providência prática do Procurador Municipal. O módulo foi mantido dentro da navegação,
          sem substituir Dashboard, Apostila, Questões, Simulados ou demais funcionalidades.
        </p>
        <div className="hero-actions">
          <Button onClick={copyFlow}>Copiar fluxo atual</Button>
          <Button variant="ghost" onClick={() => onNavigate?.('simulator')}>Abrir Simulador Cinemático</Button>
          <Button variant="secondary" onClick={() => onNavigate?.('apostila')}>Voltar para Apostila</Button>
        </div>
      </section>

      <section className="legal-flow-engine-grid">
        <aside className="legal-flow-list">
          <Badge tone="cyan">fluxos disponíveis</Badge>
          {cinematicFlows.map((flow) => (
            <button
              key={flow.id}
              type="button"
              className={`legal-flow-button ${flow.id === activeFlow.id ? 'active' : ''}`}
              onClick={() => setActiveFlowId(flow.id)}
            >
              <small>{flow.subject}</small>
              <strong>{flow.title}</strong>
              <span>{flow.steps.length} etapas • risco {flow.risk || 'estratégico'}</span>
            </button>
          ))}
        </aside>

        <main className="legal-flow-stage">
          <Badge tone="orange">mapa de processo jurídico</Badge>
          <h2>{activeFlow.title}</h2>
          <p>{activeFlow.objective}</p>

          <div className="legal-flow-roadmap">
            {activeFlow.steps.map((step, index) => (
              <article className="legal-flow-step" key={step.id}>
                <span>{index + 1}</span>
                <div>
                  <small>{step.statusLabel || step.type}</small>
                  <strong>{step.title}</strong>
                  <p>{step.narration}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="legal-flow-insights">
            <article>
              <Badge tone="cyan">base jurídica</Badge>
              <p>{activeFlow.steps[0]?.legalBasis || 'Identifique o fundamento jurídico de cada etapa antes da conclusão.'}</p>
            </article>
            <article>
              <Badge tone="orange">pegadinha central</Badge>
              <p>{activeFlow.steps.find((step) => step.trap)?.trap || 'A banca costuma trocar requisito, consequência e providência.'}</p>
            </article>
            <article>
              <Badge tone="green">prova e prática</Badge>
              <p>{activeFlow.steps.find((step) => step.examTip)?.examTip || 'Transforme o fluxo em resposta objetiva, discursiva e parecer.'}</p>
            </article>
          </div>
        </main>
      </section>
    </div>
  );
}

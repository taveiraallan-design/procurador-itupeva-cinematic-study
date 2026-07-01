import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import EmptyState from '../components/ui/EmptyState';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { discursiveCaseBank, discursiveRubric, pieceTemplates } from '../data/discursiveCases';

const progressKey = 'discursive_lab_progress_v2';

const initialProgress = {
  attempts: [],
  pinnedCases: [],
  lastDraft: {},
};

const criterionLabels = {
  structure: 'Estrutura',
  issue: 'Problema jurídico',
  law: 'Fundamentação',
  application: 'Aplicação ao caso',
  traps: 'Pegadinhas e distinções',
  conclusion: 'Conclusão prática',
};

const criterionKeywords = {
  structure: ['relatório', 'inicialmente', 'fundamentação', 'conclusão', 'parecer', 'opina', 'síntese', 'trata-se'],
  issue: ['questão jurídica', 'problema jurídico', 'dúvida', 'providência', 'ato', 'vício', 'ilegalidade', 'competência'],
  law: ['legalidade', 'autotutela', 'súmula 473', 'constituição', 'lei', 'princípio', 'competência', 'finalidade', 'forma', 'motivo', 'objeto', 'lei 14.133', 'ctn', 'cda', 'art. 37'],
  application: ['no caso', 'diante', 'considerando', 'a secretaria', 'município', 'administração', 'processo', 'interesse público', 'concreto', 'fatos'],
  traps: ['não é revogado', 'não revogado', 'anulado, e não revogado', 'revogação', 'anulação', 'convalidação', 'vício sanável', 'vício insanável', 'conveniência e oportunidade', 'mérito administrativo', 'dispensa', 'inexigibilidade', 'nexo causal'],
  conclusion: ['conclui', 'conclusão', 'recomenda', 'opina', 'deve', 'providência', 'anular', 'convalidar', 'diligência', 'não aprovar', 'manter', 'revogar'],
};

function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function countWords(text) {
  return (text || '').trim().split(/\s+/).filter(Boolean).length;
}

function estimateLines(text) {
  const words = countWords(text);
  return Math.max(0, Math.ceil(words / 11));
}

function countParagraphs(text) {
  return (text || '').split(/\n\s*\n|\n/).map((part) => part.trim()).filter(Boolean).length;
}

function countMatches(normalizedText, keywords) {
  return keywords.reduce((total, keyword) => total + (normalizedText.includes(normalizeText(keyword)) ? 1 : 0), 0);
}

function uniqueTermsFromCase(caseData) {
  const fromArray = [
    ...(caseData.legalHooks || []),
    ...(caseData.mandatoryPoints || []),
    ...(caseData.traps || []),
    caseData.subject,
    caseData.type,
    caseData.title,
  ];
  return fromArray
    .join(' ')
    .split(/[^A-Za-zÀ-ÿ0-9§º.]+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 5)
    .slice(0, 40);
}

function detectRepetitiveText(text) {
  const words = (text || '').toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!words.length) return false;
  const unique = new Set(words);
  if (words.length > 30 && unique.size / words.length < 0.25) return true;
  if (/([a-zà-ÿ]{4,})\1{3,}/i.test(text.replace(/\s+/g, ''))) return true;
  return false;
}

function evaluateCriterion({ id, weight, text, normalizedText, stats, caseData }) {
  const caseTerms = uniqueTermsFromCase(caseData);
  const caseHits = countMatches(normalizedText, caseTerms);
  const baseHits = countMatches(normalizedText, criterionKeywords[id] || []);
  let ratio = 0;
  let justification = '';
  let improvement = '';

  if (id === 'structure') {
    const hasOpening = countMatches(normalizedText, ['trata-se', 'inicialmente', 'relatório', 'síntese']) > 0;
    const hasClosing = countMatches(normalizedText, ['conclusão', 'conclui', 'opina', 'recomenda']) > 0;
    ratio = stats.paragraphs >= 4 && hasOpening && hasClosing ? 1 : stats.paragraphs >= 2 || hasOpening || hasClosing ? 0.55 : 0.15;
    justification = ratio >= 1 ? 'A resposta tem abertura, desenvolvimento e fechamento identificáveis.' : ratio >= 0.5 ? 'Há alguma organização, mas a estrutura ainda pode ficar mais explícita.' : 'A estrutura formal ainda não está clara.';
    improvement = 'Use blocos: relatório breve, fundamentação, aplicação ao caso e conclusão objetiva.';
  }

  if (id === 'issue') {
    ratio = baseHits >= 3 || caseHits >= 6 ? 1 : baseHits >= 1 || caseHits >= 3 ? 0.55 : 0.1;
    justification = ratio >= 1 ? 'O problema jurídico foi delimitado com termos relevantes do caso.' : ratio >= 0.5 ? 'O problema apareceu, mas poderia ser delimitado com mais precisão.' : 'A resposta ainda não deixa claro qual é a controvérsia jurídica central.';
    improvement = 'Declare expressamente qual é a dúvida: anular, convalidar, revogar, diligenciar ou defender o Município.';
  }

  if (id === 'law') {
    ratio = baseHits >= 5 || caseHits >= 9 ? 1 : baseHits >= 3 || caseHits >= 5 ? 0.65 : baseHits >= 1 ? 0.35 : 0;
    justification = ratio >= 1 ? 'A fundamentação jurídica tem boa densidade técnica.' : ratio >= 0.5 ? 'Há fundamentos jurídicos, mas faltam bases normativas ou princípios mais claros.' : 'A fundamentação normativa está fraca ou genérica.';
    improvement = 'Inclua princípios, base legal, súmulas ou distinções doutrinárias aplicáveis ao caso.';
  }

  if (id === 'application') {
    ratio = baseHits >= 3 && caseHits >= 5 ? 1 : baseHits >= 2 || caseHits >= 4 ? 0.6 : baseHits >= 1 ? 0.3 : 0;
    justification = ratio >= 1 ? 'A resposta conecta bem os fundamentos aos fatos descritos.' : ratio >= 0.5 ? 'Há alguma aplicação ao caso, mas ainda com pontos genéricos.' : 'A resposta está muito abstrata e pouco aplicada ao caso concreto.';
    improvement = 'Use expressões como “no caso concreto”, “diante dos fatos” e indique a providência adequada.';
  }

  if (id === 'traps') {
    ratio = baseHits >= 4 ? 1 : baseHits >= 2 ? 0.7 : baseHits >= 1 ? 0.4 : 0;
    justification = ratio >= 1 ? 'A resposta enfrentou distinções clássicas e pegadinhas relevantes.' : ratio >= 0.5 ? 'A resposta menciona alguma distinção importante, mas pode aprofundar.' : 'Ainda faltam as distinções que costumam derrubar candidato.';
    improvement = 'Diferencie expressamente conceitos próximos, como anulação x revogação, dispensa x inexigibilidade ou dano x nexo.';
  }

  if (id === 'conclusion') {
    ratio = baseHits >= 3 && stats.words >= 80 ? 1 : baseHits >= 2 ? 0.65 : baseHits >= 1 ? 0.35 : 0;
    justification = ratio >= 1 ? 'Há conclusão objetiva e providência prática identificável.' : ratio >= 0.5 ? 'A conclusão existe, mas poderia ser mais direta.' : 'Faltou fechamento com providência prática.';
    improvement = 'Finalize dizendo o que a Procuradoria recomenda: anular, convalidar, diligenciar, defender ou manter o ato.';
  }

  const earned = Math.round(weight * ratio);
  const status = ratio >= 0.85 ? 'atendido' : ratio >= 0.45 ? 'parcial' : 'ausente';
  return { id, label: criterionLabels[id] || id, max: weight, earned, status, justification, improvement };
}

function analyzeDiscursiveAnswer(text, caseData) {
  const normalizedText = normalizeText(text);
  const words = countWords(text);
  const lines = estimateLines(text);
  const paragraphs = countParagraphs(text);
  const technicalTerms = countMatches(normalizedText, [
    ...Object.values(criterionKeywords).flat(),
    ...uniqueTermsFromCase(caseData),
  ]);
  const connectors = countMatches(normalizedText, ['inicialmente', 'ademais', 'por outro lado', 'portanto', 'assim', 'desse modo', 'diante', 'contudo', 'logo']);
  const repetitive = detectRepetitiveText(text);

  const stats = { words, lines, paragraphs, technicalTerms, connectors, repetitive };
  const criteria = discursiveRubric.map((item) => evaluateCriterion({ id: item.id, weight: item.weight, text, normalizedText, stats, caseData }));
  let totalScore = criteria.reduce((sum, item) => sum + item.earned, 0);

  if (words < 60) totalScore = Math.min(totalScore, 35);
  if (repetitive) totalScore = Math.min(totalScore, 25);

  const alerts = [];
  if (words < 150) alerts.push('Resposta curta: desenvolva mais a fundamentação e a aplicação ao caso.');
  if (lines < 8) alerts.push('A resposta tem menos de 8 linhas estimadas; use mais desenvolvimento para treino discursivo.');
  if (technicalTerms < 6) alerts.push('Pouca densidade técnica: inclua fundamentos, princípios e termos jurídicos do tema.');
  if (criteria.find((item) => item.id === 'conclusion')?.status === 'ausente') alerts.push('Conclusão pouco clara: indique a providência prática recomendada.');
  if (criteria.find((item) => item.id === 'application')?.status === 'ausente') alerts.push('A resposta parece genérica: aplique expressamente os fundamentos aos fatos do enunciado.');
  if (repetitive) alerts.push('Sua resposta parece texto de teste ou repetitivo; reescreva com frases completas e separadas.');

  const strengths = criteria.filter((item) => item.status === 'atendido').map((item) => `${item.label}: ${item.justification}`);
  const weaknesses = criteria.filter((item) => item.status !== 'atendido').map((item) => `${item.label}: ${item.improvement}`);
  const missingForHighScore = criteria.filter((item) => item.status === 'ausente').map((item) => item.label);
  const level = totalScore >= 85 ? 'excelente' : totalScore >= 70 ? 'bom' : totalScore >= 50 ? 'atenção' : 'crítico';
  const suggestedChecklist = Object.fromEntries(criteria.map((item) => [item.id, item.status !== 'ausente']));

  return {
    totalScore,
    level,
    criteria,
    stats,
    alerts,
    strengths,
    weaknesses,
    missingForHighScore,
    suggestedChecklist,
  };
}

function scoreChecklist(checklist) {
  return discursiveRubric.reduce((total, item) => total + (checklist[item.id] ? item.weight : 0), 0);
}

function buildFeedback(score, analysis) {
  const level = score >= 85 ? 'excelente' : score >= 70 ? 'bom' : score >= 50 ? 'atenção' : 'crítico';
  const recommendations = [
    ...(analysis.alerts || []),
    ...(analysis.weaknesses || []).slice(0, 3),
    analysis.strengths?.length ? `Ponto forte: ${analysis.strengths[0]}` : 'Inclua mais termos técnicos e amarre fatos ao direito.',
  ];
  return { level, recommendations };
}

export default function Discursives() {
  const [progress, setProgress] = useLocalStorage(progressKey, initialProgress);
  const [selectedCaseId, setSelectedCaseId] = useState(discursiveCaseBank[0].id);
  const [mode, setMode] = useState('practice');
  const [draft, setDraft] = useState(progress.lastDraft?.[selectedCaseId] || '');
  const [checklist, setChecklist] = useState({});
  const [result, setResult] = useState(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState(pieceTemplates[0].id);
  const [showModel, setShowModel] = useState(false);
  const [manualMode, setManualMode] = useState(false);

  const selectedCase = discursiveCaseBank.find((item) => item.id === selectedCaseId) || discursiveCaseBank[0];
  const selectedTemplate = pieceTemplates.find((item) => item.id === selectedTemplateId) || pieceTemplates[0];
  const liveAnalysis = useMemo(() => analyzeDiscursiveAnswer(draft, selectedCase), [draft, selectedCase]);

  const summary = useMemo(() => {
    const attempts = progress.attempts || [];
    const total = attempts.length;
    const best = attempts.reduce((max, item) => Math.max(max, item.score || 0), 0);
    const average = total ? Math.round(attempts.reduce((sum, item) => sum + (item.score || 0), 0) / total) : 0;
    const last = attempts[0];
    return { total, best, average, last };
  }, [progress]);

  const manualScore = scoreChecklist(checklist);
  const score = manualMode ? manualScore : liveAnalysis.totalScore;
  const words = countWords(draft);
  const lines = estimateLines(draft);

  function chooseCase(caseId) {
    setSelectedCaseId(caseId);
    setDraft(progress.lastDraft?.[caseId] || '');
    setChecklist({});
    setResult(null);
    setShowModel(false);
    setManualMode(false);
  }

  function updateDraft(value) {
    setDraft(value);
    setResult(null);
    setProgress((current) => ({
      ...current,
      lastDraft: { ...(current.lastDraft || {}), [selectedCaseId]: value },
    }));
  }

  function toggleRubric(id) {
    setManualMode(true);
    setChecklist((current) => ({ ...current, [id]: !current[id] }));
  }

  function acceptSuggestedCorrection() {
    const nextChecklist = liveAnalysis.suggestedChecklist || {};
    setChecklist(nextChecklist);
    setManualMode(true);
    setResult((current) => current ? { ...current, checklist: nextChecklist } : current);
  }

  function useAutomaticCorrection() {
    setManualMode(false);
    setChecklist({});
  }

  function finishAttempt() {
    const analysis = analyzeDiscursiveAnswer(draft, selectedCase);
    const manualHasSelections = Object.values(checklist).some(Boolean);
    const manualComputedScore = scoreChecklist(checklist);
    const computedScore = manualMode && manualHasSelections ? manualComputedScore : analysis.totalScore;
    const effectiveChecklist = manualMode && manualHasSelections ? checklist : analysis.suggestedChecklist;
    const feedback = buildFeedback(computedScore, analysis);
    const attempt = {
      id: `discursive-${Date.now()}`,
      caseId: selectedCase.id,
      title: selectedCase.title,
      subject: selectedCase.subject,
      type: selectedCase.type,
      score: computedScore,
      words: analysis.stats.words,
      lines: analysis.stats.lines,
      checklist: effectiveChecklist,
      draft,
      analysis,
      feedback,
      correctionMode: manualMode && manualHasSelections ? 'manual' : 'semiautomatic',
      finishedAt: new Date().toISOString(),
    };
    setChecklist(effectiveChecklist);
    setResult(attempt);
    setProgress((current) => ({
      ...current,
      attempts: [attempt, ...(current.attempts || [])].slice(0, 40),
      lastDraft: { ...(current.lastDraft || {}), [selectedCaseId]: draft },
    }));
  }

  function togglePinnedCase() {
    setProgress((current) => {
      const pinned = current.pinnedCases || [];
      const next = pinned.includes(selectedCase.id) ? pinned.filter((id) => id !== selectedCase.id) : [...pinned, selectedCase.id];
      return { ...current, pinnedCases: next };
    });
  }

  function resetDraft() {
    setDraft('');
    setChecklist({});
    setResult(null);
    setManualMode(false);
    setProgress((current) => ({
      ...current,
      lastDraft: { ...(current.lastDraft || {}), [selectedCaseId]: '' },
    }));
  }

  return (
    <div className="discursive-page page-grid">
      <section className="discursive-hero hero-panel">
        <div>
          <Badge tone="purple">fase 19.1</Badge>
          <h1>Discursivas de Procurador</h1>
          <p>Treine pareceres, teses defensivas e respostas discursivas com correção semiautomática, espelho e revisão por critérios.</p>
          <div className="hero-actions">
            <Button onClick={() => setMode('practice')}>Treinar caso</Button>
            <Button variant="secondary" onClick={() => setMode('templates')}>Ver modelos de peças</Button>
          </div>
        </div>
        <div className="discursive-score-orb">
          <span>média</span>
          <strong>{summary.average}%</strong>
          <small>{summary.total} treinos finalizados</small>
        </div>
      </section>

      <div className="stats-grid">
        <Card><span className="stat-label">Treinos</span><strong className="stat-value">{summary.total}</strong><small>discursivas salvas</small></Card>
        <Card><span className="stat-label">Melhor nota</span><strong className="stat-value">{summary.best}%</strong><small>por espelho</small></Card>
        <Card><span className="stat-label">Palavras</span><strong className="stat-value">{words}</strong><small>rascunho atual</small></Card>
        <Card><span className="stat-label">Linhas estimadas</span><strong className="stat-value">{lines}</strong><small>meta mínima: 20</small></Card>
      </div>

      {mode === 'templates' ? (
        <div className="discursive-layout templates-layout">
          <Card>
            <div className="section-heading"><div><Badge tone="cyan">modelos</Badge><h3>Peças e esqueletos</h3></div></div>
            <div className="case-list">
              {pieceTemplates.map((template) => (
                <button key={template.id} type="button" className={`case-selector ${selectedTemplateId === template.id ? 'active' : ''}`} onClick={() => setSelectedTemplateId(template.id)}>
                  <strong>{template.title}</strong>
                  <span>{template.purpose}</span>
                </button>
              ))}
            </div>
          </Card>
          <Card className="wide-card">
            <Badge tone="purple">estrutura recomendada</Badge>
            <h2>{selectedTemplate.title}</h2>
            <p>{selectedTemplate.purpose}</p>
            <div className="template-steps">
              {selectedTemplate.sections.map((section, index) => (
                <article key={section}><span>{index + 1}</span><strong>{section}</strong></article>
              ))}
            </div>
            <div className="trap-box"><strong>Atenção:</strong>{selectedTemplate.attention.map((item) => <span key={item}>{item}</span>)}</div>
          </Card>
        </div>
      ) : (
        <div className="discursive-layout">
          <Card>
            <div className="section-heading"><div><Badge tone="cyan">casos</Badge><h3>Banco discursivo</h3></div></div>
            <div className="case-list">
              {discursiveCaseBank.map((caseItem) => (
                <button key={caseItem.id} type="button" className={`case-selector ${selectedCase.id === caseItem.id ? 'active' : ''}`} onClick={() => chooseCase(caseItem.id)}>
                  <strong>{caseItem.title}</strong>
                  <span>{caseItem.type} • {caseItem.subject}</span>
                </button>
              ))}
            </div>
          </Card>

          <Card className="discursive-workbench wide-card">
            <div className="section-heading">
              <div>
                <Badge tone="orange">{selectedCase.type}</Badge>
                <h2>{selectedCase.title}</h2>
              </div>
              <Button variant="secondary" onClick={togglePinnedCase}>{(progress.pinnedCases || []).includes(selectedCase.id) ? 'Desfixar' : 'Fixar caso'}</Button>
            </div>

            <div className="case-prompt-grid">
              <article><strong>Situação-problema</strong><p>{selectedCase.situation}</p></article>
              <article><strong>Comando</strong><p>{selectedCase.command}</p></article>
            </div>

            <div className="discursive-editor-grid">
              <div className="answer-editor-panel">
                <div className="editor-toolbar">
                  <span>{words} palavras • {lines} linhas estimadas • {liveAnalysis.stats.paragraphs} parágrafos</span>
                  <span>{selectedCase.estimatedMinutes} min sugeridos</span>
                </div>
                <textarea
                  value={draft}
                  onChange={(event) => updateDraft(event.target.value)}
                  placeholder="Escreva sua resposta discursiva aqui. Estruture em relatório, fundamentação e conclusão objetiva..."
                />
                {liveAnalysis.alerts.length > 0 && (
                  <div className="discursive-alerts">
                    {liveAnalysis.alerts.slice(0, 3).map((alert) => <span key={alert}>{alert}</span>)}
                  </div>
                )}
                <div className="editor-actions">
                  <Button onClick={finishAttempt}>Corrigir automaticamente</Button>
                  <Button variant="secondary" onClick={() => setShowModel((value) => !value)}>{showModel ? 'Ocultar modelo' : 'Ver resposta modelo'}</Button>
                  <Button variant="danger" onClick={resetDraft}>Limpar rascunho</Button>
                </div>
              </div>

              <aside className="rubric-panel">
                <Badge tone="green">correção semiautomática</Badge>
                <h3>Checklist avaliativo</h3>
                <ProgressBar label={manualMode ? 'Pontuação manual' : 'Pontuação sugerida'} value={score} />
                <div className="rubric-mode-actions">
                  <Button variant="secondary" onClick={acceptSuggestedCorrection}>Aceitar correção sugerida</Button>
                  <Button variant="ghost" onClick={() => setManualMode(true)}>Ajustar manualmente</Button>
                  {manualMode && <Button variant="ghost" onClick={useAutomaticCorrection}>Voltar ao automático</Button>}
                </div>
                <div className="rubric-list">
                  {discursiveRubric.map((item) => {
                    const criterion = liveAnalysis.criteria.find((entry) => entry.id === item.id);
                    return (
                      <label key={item.id} className={`rubric-item rubric-${criterion?.status || 'ausente'} ${checklist[item.id] ? 'checked' : ''}`}>
                        <input type="checkbox" checked={manualMode ? !!checklist[item.id] : criterion?.status !== 'ausente'} onChange={() => toggleRubric(item.id)} />
                        <span>{item.label}<small>{criterion?.status || 'ausente'} • sugerido: {criterion?.earned || 0}/{item.weight} pts</small></span>
                        <strong>{item.weight} pts</strong>
                      </label>
                    );
                  })}
                </div>
              </aside>
            </div>

            <div className="discursive-analysis-grid">
              <Card>
                <Badge tone="cyan">leitura automática</Badge>
                <h3>Diagnóstico do texto</h3>
                <div className="metric-pills">
                  <span>{liveAnalysis.stats.technicalTerms} termos técnicos</span>
                  <span>{liveAnalysis.stats.connectors} conectivos</span>
                  <span>{liveAnalysis.stats.paragraphs} parágrafos</span>
                </div>
              </Card>
              <Card>
                <Badge tone="green">pontos fortes</Badge>
                <ul className="clean-list">{(liveAnalysis.strengths.length ? liveAnalysis.strengths : ['Ainda não há critério plenamente atendido.']).slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
              </Card>
              <Card>
                <Badge tone="orange">o que falta</Badge>
                <ul className="clean-list">{(liveAnalysis.weaknesses.length ? liveAnalysis.weaknesses : ['A resposta já cobre os critérios principais.']).slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
              </Card>
            </div>

            <div className="discursive-support-grid">
              <Card>
                <Badge tone="cyan">estrutura esperada</Badge>
                <ul className="clean-list">{selectedCase.expectedStructure.map((item) => <li key={item}>{item}</li>)}</ul>
              </Card>
              <Card>
                <Badge tone="green">pontos obrigatórios</Badge>
                <ul className="clean-list">{selectedCase.mandatoryPoints.map((item) => <li key={item}>{item}</li>)}</ul>
              </Card>
              <Card>
                <Badge tone="orange">pegadinhas</Badge>
                <ul className="clean-list">{selectedCase.traps.map((item) => <li key={item}>{item}</li>)}</ul>
              </Card>
            </div>

            {showModel && (
              <Card className="model-answer-card">
                <Badge tone="purple">resposta modelo sintética</Badge>
                <p>{selectedCase.modelAnswer}</p>
              </Card>
            )}

            {result && (
              <Card className={`discursive-result result-${result.feedback.level}`}>
                <div className="section-heading"><div><Badge tone="green">resultado</Badge><h3>{result.score}% • nível {result.feedback.level}</h3><p>{result.correctionMode === 'semiautomatic' ? 'Correção sugerida automaticamente pelo app.' : 'Correção ajustada manualmente pelo espelho.'}</p></div></div>
                <div className="result-grid">
                  <article><span>Palavras</span><strong>{result.words}</strong></article>
                  <article><span>Linhas</span><strong>{result.lines}</strong></article>
                  <article><span>Pontos sugeridos</span><strong>{result.analysis.criteria.reduce((sum, item) => sum + item.earned, 0)}/100</strong></article>
                </div>
                <div className="criterion-results">
                  {result.analysis.criteria.map((item) => (
                    <article key={item.id} className={`criterion-card ${item.status}`}>
                      <div><strong>{item.label}</strong><span>{item.status}</span></div>
                      <b>{item.earned}/{item.max} pts</b>
                      <p>{item.justification}</p>
                      {item.status !== 'atendido' && <small>{item.improvement}</small>}
                    </article>
                  ))}
                </div>
                <ul className="clean-list">{result.feedback.recommendations.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="editor-actions">
                  <Button variant="secondary" onClick={acceptSuggestedCorrection}>Aceitar correção sugerida</Button>
                  <Button variant="ghost" onClick={() => setManualMode(true)}>Ajustar manualmente</Button>
                </div>
              </Card>
            )}
          </Card>
        </div>
      )}

      {(progress.attempts || []).length > 0 ? (
        <Card>
          <div className="section-heading"><div><Badge tone="cyan">histórico</Badge><h3>Últimos treinos discursivos</h3></div></div>
          <div className="simulation-history-list">
            {(progress.attempts || []).slice(0, 6).map((attempt) => (
              <article key={attempt.id}><strong>{attempt.title}</strong><span>{attempt.score}% • {attempt.words} palavras • {new Date(attempt.finishedAt).toLocaleDateString('pt-BR')}</span></article>
            ))}
          </div>
        </Card>
      ) : (
        <EmptyState title="Nenhuma discursiva corrigida ainda" description="Escolha um caso, escreva sua resposta e corrija automaticamente para criar histórico." />
      )}
    </div>
  );
}

import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { premiumApostilaMeta, premiumApostilaSubjects, getApostilaStats } from '../data/premiumApostila';
import { deepDidacticMeta, getDeepDidacticLesson } from '../data/deepDidacticLessons';
import { theoreticalApostilaMeta, getTheoreticalLesson } from '../data/theoreticalApostila';

const APOSTILA_KEY = 'premium_apostila_progress_v1';
const initialProgress = { selectedSubjectId: 'direito-administrativo', studied: {}, notes: {}, reviewQueue: [], visualDominated: {}, visualNotes: [], generatedAt: null };

function normalize(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function topicText(topic) {
  return [
    `APOSTILA PREMIUM — ${topic.title}`,
    '',
    `O que é: ${topic.whatIs}`,
    '',
    `Para que serve: ${topic.purpose}`,
    '',
    'Explicação completa:',
    ...topic.plainExplanation.map((item) => `- ${item}`),
    '',
    `Explicação técnica para prova: ${topic.examTechnical}`,
    '',
    `Exemplo aplicado à Procuradoria Municipal: ${topic.cityExample}`,
    '',
    'Base legal principal:',
    ...topic.legalBase.map((item) => `- ${item}`),
    '',
    'Artigos importantes para ler na lei seca:',
    ...topic.dryLaw.map((item) => `- ${item}`),
    '',
    'Jurisprudência/referências relevantes:',
    ...topic.jurisprudence.map((item) => `- ${item}`),
    '',
    'Como pode cair na objetiva:',
    ...topic.objectiveCharge.map((item) => `- ${item}`),
    '',
    `Como pode cair em discursiva/parecer: ${topic.discursiveCharge}`,
    '',
    'Pegadinhas:',
    ...topic.traps.map((item) => `- ${item}`),
    '',
    'Diferenças importantes:',
    ...topic.differences.map((item) => `- ${item}`),
    '',
    'Erros comuns:',
    ...topic.commonMistakes.map((item) => `- ${item}`),
    '',
    `Mini caso prático: ${topic.miniCase}`,
    '',
    'Perguntas de revisão ativa:',
    ...topic.activeQuestions.map((item) => `- ${item}`),
    '',
    'Flashcards sugeridos:',
    ...topic.flashcards.map((item) => `- ${item.front} — ${item.back}`),
    '',
    `Mini resumo: ${topic.summary}`,
    '',
    'Checklist:',
    ...topic.checklist.map((item) => `- ${item}`),
    '',
    `Próximo tópico: ${topic.nextTopic}`
  ].join('\n');
}

function Section({ title, children, tone = 'cyan' }) {
  return (
    <section className="apostila-section">
      <Badge tone={tone}>{title}</Badge>
      <div>{children}</div>
    </section>
  );
}




function TheoreticalLessonBlock({ lesson }) {
  if (!lesson) return null;
  return (
    <section className="theory-lesson-block">
      <div className="theory-lesson-header">
        <Badge tone="orange">{theoreticalApostilaMeta.phase} • aula teórica</Badge>
        <h3>{lesson.title}</h3>
        <p>{lesson.lead}</p>
      </div>

      <article className="theory-reading-card">
        <Badge tone="green">Aula teórica principal</Badge>
        <div className="theory-prose">
          {lesson.paragraphs.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 28)}`}>{paragraph}</p>)}
        </div>
      </article>

      <div className="theory-support-grid">
        <article className="theory-support-card">
          <Badge tone="orange">Quadro de atenção</Badge>
          <ul className="compact-list">{lesson.attention.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="theory-support-card">
          <Badge tone="cyan">Como cai na prova</Badge>
          <ul className="compact-list">{lesson.exam.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </div>

      <article className="theory-question-card">
        <Badge tone="purple">Mini questão comentada</Badge>
        <p><strong>Questão:</strong> {lesson.question.statement}</p>
        <p><strong>Gabarito/linha de resposta:</strong> {lesson.question.answer}</p>
        <p><strong>Comentário:</strong> {lesson.question.comment}</p>
      </article>
    </section>
  );
}

function DeepDidacticBlock({ lesson }) {
  if (!lesson) return null;
  return (
    <section className="deep-didactic-block">
      <div className="deep-didactic-header">
        <Badge tone="orange">{deepDidacticMeta.phase} • {lesson.label}</Badge>
        <h3>{deepDidacticMeta.title}</h3>
        <p>{deepDidacticMeta.subtitle}</p>
      </div>

      <div className="deep-didactic-grid">
        <article><Badge tone="cyan">Conceito inicial</Badge><p>{lesson.concept}</p></article>
        <article><Badge tone="green">Por que existe</Badge><p>{lesson.whyExists}</p></article>
      </div>

      <Section title="Aula passo a passo: como funciona" tone="orange">
        <ol className="deep-ordered-list">{lesson.howItWorks.map((item) => <li key={item}>{item}</li>)}</ol>
      </Section>

      <Section title="Regras principais explicadas" tone="purple">
        <ul className="compact-list">{lesson.mainRules.map((item) => <li key={item}>{item}</li>)}</ul>
      </Section>

      <div className="deep-example-panel">
        <Badge tone="green">Exemplo certo e errado</Badge>
        <p><strong>Situação:</strong> {lesson.simpleExample.prompt}</p>
        <p className="deep-right"><strong>Uso correto:</strong> {lesson.simpleExample.right}</p>
        <p className="deep-wrong"><strong>Uso incorreto:</strong> {lesson.simpleExample.wrong}</p>
        <p><strong>Comentário:</strong> {lesson.simpleExample.explanation}</p>
      </div>

      <Section title="Aplicação à Procuradoria Municipal" tone="green"><p>{lesson.municipalExample}</p></Section>

      <div className="lesson-columns deep-safe-columns">
        <Section title="Como identificar na prova" tone="cyan"><ul className="compact-list">{lesson.examSignals.map((item) => <li key={item}>{item}</li>)}</ul></Section>
        <Section title="Como resolver questão sobre o tema" tone="orange"><ol className="deep-ordered-list">{lesson.solvingSteps.map((item) => <li key={item}>{item}</li>)}</ol></Section>
      </div>

      <div className="lesson-columns deep-safe-columns">
        <Section title="Como a banca tenta confundir" tone="orange"><ul className="compact-list">{lesson.traps.map((item) => <li key={item}>{item}</li>)}</ul></Section>
        <Section title="Erros comuns do candidato" tone="purple"><ul className="compact-list">{lesson.commonErrors.map((item) => <li key={item}>{item}</li>)}</ul></Section>
      </div>

      <Section title="Como usar na discursiva" tone="green"><p>{lesson.discursiveUse}</p></Section>

      <div className="deep-question-card">
        <Badge tone="cyan">Mini questão comentada</Badge>
        <p><strong>Enunciado:</strong> {lesson.miniQuestion.statement}</p>
        <ol className="deep-options">{lesson.miniQuestion.options.map((option, index) => <li key={option}>{String.fromCharCode(65 + index)}) {option}</li>)}</ol>
        <p><strong>Gabarito:</strong> {lesson.miniQuestion.answer}</p>
        <p><strong>Comentário:</strong> {lesson.miniQuestion.comment}</p>
      </div>

      <div className="lesson-columns deep-safe-columns">
        <Section title="Exercícios rápidos" tone="cyan"><ul className="compact-list">{lesson.exercises.map((item) => <li key={item}>{item}</li>)}</ul></Section>
        <Section title="Mini resumo para memorizar" tone="green"><p>{lesson.finalMemory}</p></Section>
      </div>
    </section>
  );
}

function includesAny(text, terms) {
  const normalized = normalize(text);
  return terms.some((term) => normalized.includes(normalize(term)));
}

function buildVisualModel(subject, topic) {
  const subjectId = subject?.id || '';
  const allText = [subject?.subject, topic?.title, topic?.summary, topic?.whatIs, ...(topic?.plainExplanation || [])].join(' ');

  const adminGeneral = {
    type: 'flow',
    title: 'Raciocínio administrativo municipal',
    subtitle: 'Da situação concreta à providência segura do Procurador.',
    flow: ['Fato administrativo', 'Competência legal', 'Finalidade pública', 'Motivação', 'Proporcionalidade', 'Controle', 'Providência do Procurador'],
    decision: [
      { q: 'A autoridade tem competência?', yes: 'Avançar para validade do ato', no: 'Risco de nulidade ou necessidade de ratificação/convalidação' },
      { q: 'A finalidade é pública?', yes: 'Verificar motivação e interesse público', no: 'Vício de finalidade/desvio de poder' },
      { q: 'O ato está motivado e proporcional?', yes: 'Parecer pode validar a atuação', no: 'Recomendar correção, nova instrução, anulação ou convalidação' }
    ],
    compare: [
      { label: 'Legalidade', text: 'A Administração só age com fundamento jurídico suficiente.' },
      { label: 'Motivação', text: 'O ato deve explicar fatos, fundamentos e finalidade pública.' },
      { label: 'Controle', text: 'O Procurador identifica risco, vício e providência adequada.' }
    ],
    caseSteps: ['Demanda chega à Prefeitura', 'Gestor propõe ato', 'Procurador confere competência', 'Avalia motivação e proporcionalidade', 'Emite parecer preventivo'],
    warning: 'Pegadinha: interesse público não autoriza agir fora da lei; competência administrativa nasce da norma.'
  };

  if (subjectId === 'direito-administrativo') {
    if (includesAny(allText, ['ato administrativo', 'anulação', 'revogação', 'convalidação', 'vício'])) {
      return {
        type: 'decision',
        title: 'Ato administrativo: legalidade antes de mérito',
        subtitle: 'Use este mapa para não confundir anulação, revogação e convalidação.',
        flow: ['Fato administrativo', 'Ato praticado', 'Requisitos', 'Legalidade', 'Providência'],
        decision: [
          { q: 'O ato tem vício de legalidade?', yes: 'Anulação ou convalidação', no: 'Pode avaliar mérito' },
          { q: 'O vício é sanável?', yes: 'Convalidar se não houver prejuízo', no: 'Anular o ato' },
          { q: 'O ato é válido, mas inconveniente?', yes: 'Revogação por mérito', no: 'Manter ou motivar nova análise' }
        ],
        compare: [
          { label: 'Anulação', text: 'Controle de legalidade. Ato ilegal deve ser retirado.' },
          { label: 'Revogação', text: 'Controle de mérito. Só incide sobre ato válido.' },
          { label: 'Convalidação', text: 'Correção de vício sanável, sem prejuízo.' }
        ],
        caseSteps: ['Prefeitura pratica ato', 'Procurador identifica requisito', 'Verifica vício', 'Escolhe providência', 'Redige parecer seguro'],
        warning: 'Pegadinha: ato ilegal não se revoga; ato ilegal se anula.'
      };
    }
    return adminGeneral;
  }

  if (subjectId === 'direito-constitucional') {
    return {
      type: 'flow',
      title: 'Competência constitucional municipal',
      subtitle: 'Parta da Constituição e chegue ao interesse local sem confundir autonomia com soberania.',
      flow: ['Constituição', 'Município', 'Interesse local', 'Norma geral', 'Suplementação', 'Ato/lei municipal'],
      decision: [
        { q: 'Existe interesse local predominante?', yes: 'Município pode atuar', no: 'Verificar competência de outro ente' },
        { q: 'Há norma federal/estadual geral?', yes: 'Município suplementa sem contrariar', no: 'Município pode disciplinar dentro dos limites constitucionais' },
        { q: 'A lei local respeita direitos fundamentais?', yes: 'Defesa mais segura', no: 'Risco de inconstitucionalidade' }
      ],
      compare: [
        { label: 'Autonomia', text: 'Capacidade política, administrativa, legislativa e financeira.' },
        { label: 'Soberania', text: 'Pertence à República Federativa, não ao Município.' },
        { label: 'Interesse local', text: 'Critério central para justificar a atuação municipal.' }
      ],
      caseSteps: ['Problema local surge', 'Município identifica competência', 'Lei/ato é produzido', 'Procuradoria valida constitucionalidade'],
      warning: 'Pegadinha: Município tem autonomia, mas não pode contrariar Constituição nem normas gerais.'
    };
  }

  if (subjectId === 'processo-civil-direito-civil') {
    return {
      type: 'flow',
      title: 'Fazenda Pública em juízo',
      subtitle: 'Roteiro processual para defender o Município com atenção a prazos, recursos e pagamento.',
      flow: ['Citação', 'Contestação', 'Provas', 'Sentença', 'Recursos', 'Cumprimento', 'RPV/Precatório'],
      decision: [
        { q: 'A sentença é contra o Município?', yes: 'Verificar recurso e remessa necessária', no: 'Avaliar cumprimento e honorários' },
        { q: 'A obrigação é de pagar?', yes: 'RPV ou precatório', no: 'Cumprimento específico/obrigação de fazer' },
        { q: 'Há tese de defesa pública?', yes: 'Registrar fundamento e prova', no: 'Avaliar acordo/risco processual' }
      ],
      compare: [
        { label: 'Contestação', text: 'Concentra preliminares e defesa de mérito.' },
        { label: 'Remessa', text: 'Protege interesse público em hipóteses legais.' },
        { label: 'Precatório/RPV', text: 'Forma constitucional de pagamento.' }
      ],
      caseSteps: ['Município é citado', 'Procuradoria organiza defesa', 'Produz prova', 'Recorre quando cabível', 'Executa decisão corretamente'],
      warning: 'Pegadinha: Fazenda Pública não é parte comum; há regras próprias de prazo, pagamento e controle.'
    };
  }

  if (subjectId === 'tributario-financeiro-orcamentario') {
    return {
      type: 'flow',
      title: 'Crédito tributário municipal',
      subtitle: 'Da ocorrência do fato gerador até a cobrança judicial.',
      flow: ['Fato gerador', 'Obrigação tributária', 'Lançamento', 'Crédito tributário', 'Dívida ativa', 'Execução fiscal'],
      decision: [
        { q: 'O lançamento foi validamente constituído?', yes: 'Crédito pode ser cobrado', no: 'Risco de nulidade' },
        { q: 'Houve pagamento/suspensão/extinção?', yes: 'Cobrança deve ser revista', no: 'Inscrição e execução' },
        { q: 'A CDA está regular?', yes: 'Ajuizar/seguir execução', no: 'Corrigir antes de executar' }
      ],
      compare: [
        { label: 'Obrigação', text: 'Nasce com o fato gerador.' },
        { label: 'Crédito', text: 'É formalizado pelo lançamento.' },
        { label: 'Dívida ativa', text: 'Permite cobrança executiva.' }
      ],
      caseSteps: ['Munícipe realiza fato tributável', 'Fisco lança', 'Inadimplência persiste', 'Procuradoria cobra'],
      warning: 'Pegadinha: obrigação tributária não é a mesma coisa que crédito constituído.'
    };
  }

  if (subjectId === 'legislacao-municipal') {
    return {
      type: 'flow',
      title: 'Lei Orgânica e funcionamento municipal',
      subtitle: 'Organize a relação entre Município, Prefeito, Câmara, servidores e estrutura administrativa.',
      flow: ['Lei Orgânica', 'Competência municipal', 'Prefeito', 'Câmara', 'Servidores/estrutura', 'Controle'],
      decision: [
        { q: 'O ato é do Executivo ou Legislativo?', yes: 'Identifique competência do órgão', no: 'Releia a Lei Orgânica' },
        { q: 'A matéria exige lei?', yes: 'Processo legislativo e iniciativa correta', no: 'Ato administrativo pode bastar' },
        { q: 'Há regra local específica?', yes: 'Aplicar lei municipal', no: 'Usar Constituição e normas gerais' }
      ],
      compare: [
        { label: 'Prefeito', text: 'Chefia o Executivo e pratica atos de gestão.' },
        { label: 'Câmara', text: 'Legisla e fiscaliza nos limites da Lei Orgânica.' },
        { label: 'Procuradoria', text: 'Previne ilegalidade e defende a autonomia municipal.' }
      ],
      caseSteps: ['Demanda municipal surge', 'Lei Orgânica é conferida', 'Competência é definida', 'Procurador orienta providência'],
      warning: 'Pegadinha: lei local não pode contrariar Constituição nem normas gerais.'
    };
  }

  if (subjectId === 'penal-processo-penal') {
    return {
      type: 'decision',
      title: 'Raciocínio penal aplicado à Administração',
      subtitle: 'Separe improbidade, ilícito administrativo e crime contra a Administração.',
      flow: ['Fato investigado', 'Tipicidade', 'Dolo/culpa', 'Prova', 'Processo', 'Providência'],
      decision: [
        { q: 'A conduta é típica?', yes: 'Avançar para autoria e elemento subjetivo', no: 'Pode haver só ilícito administrativo/civil' },
        { q: 'Há prova mínima?', yes: 'Medida processual cabível', no: 'Diligenciar/investigar' },
        { q: 'Envolve agente público?', yes: 'Ver crimes funcionais', no: 'Ver tipo penal comum ou tributário' }
      ],
      compare: [
        { label: 'Crime', text: 'Exige tipicidade e prova penal.' },
        { label: 'PAD', text: 'Apura infração funcional.' },
        { label: 'Improbidade', text: 'Apura ilícito civil-administrativo com requisitos próprios.' }
      ],
      caseSteps: ['Notícia de irregularidade', 'Procuradoria qualifica o fato', 'Avalia prova', 'Orienta encaminhamento adequado'],
      warning: 'Pegadinha: irregularidade administrativa nem sempre é crime.'
    };
  }

  if (subjectId === 'trabalho-processo-trabalho') {
    return {
      type: 'flow',
      title: 'Risco trabalhista municipal',
      subtitle: 'Da contratação/fiscalização ao processo trabalhista.',
      flow: ['Contrato/terceirização', 'Fiscalização', 'Verbas/obrigações', 'Reclamação', 'Defesa', 'Execução'],
      decision: [
        { q: 'Há vínculo direto com o Município?', yes: 'Ver regime jurídico e competência', no: 'Analisar terceirização/fiscalização' },
        { q: 'O Município fiscalizou o contrato?', yes: 'Defesa mais forte', no: 'Risco de responsabilização' },
        { q: 'A verba é comprovada?', yes: 'Avaliar acordo/defesa', no: 'Impugnar prova' }
      ],
      compare: [
        { label: 'Servidor estatutário', text: 'Regime administrativo/local.' },
        { label: 'Empregado público', text: 'CLT e regras constitucionais.' },
        { label: 'Terceirizado', text: 'Fiscalização contratual é decisiva.' }
      ],
      caseSteps: ['Contrato terceirizado é executado', 'Fiscalização registra ocorrências', 'Ação trabalhista surge', 'Procuradoria monta defesa'],
      warning: 'Pegadinha: terceirização lícita não elimina o dever de fiscalizar.'
    };
  }

  if (subjectId === 'direito-urbanistico') {
    return {
      type: 'mind',
      title: 'Política urbana municipal',
      subtitle: 'Visualize o caminho entre função social, planejamento e fiscalização.',
      flow: ['Política urbana', 'Plano Diretor', 'Zoneamento', 'Uso do solo', 'Fiscalização', 'Sanção'],
      decision: [
        { q: 'O imóvel cumpre função social?', yes: 'Regularidade urbanística', no: 'Instrumentos e sanções' },
        { q: 'A ocupação respeita zoneamento?', yes: 'Licenciamento possível', no: 'Embargo/adequação' },
        { q: 'Há risco coletivo?', yes: 'Medida urgente/fiscalização', no: 'Instrução ordinária' }
      ],
      compare: [
        { label: 'Plano Diretor', text: 'Organiza política urbana.' },
        { label: 'Zoneamento', text: 'Define usos permitidos.' },
        { label: 'Poder de polícia', text: 'Fiscaliza e sanciona irregularidades.' }
      ],
      caseSteps: ['Obra irregular é identificada', 'Município confere zoneamento', 'Fiscalização autua', 'Procuradoria sustenta legalidade'],
      warning: 'Pegadinha: propriedade urbana não é direito absoluto.'
    };
  }

  if (subjectId === 'direito-ambiental') {
    return {
      type: 'cause',
      title: 'Raciocínio ambiental municipal',
      subtitle: 'Do impacto ao controle administrativo e judicial.',
      flow: ['Atividade impactante', 'Licença/estudo', 'Condicionantes', 'Fiscalização', 'Sanção/TAC/Ação'],
      decision: [
        { q: 'A atividade tem impacto ambiental?', yes: 'Exigir controle/licenciamento', no: 'Fiscalização ordinária' },
        { q: 'Descumpriu condicionante?', yes: 'Sanção, embargo ou TAC', no: 'Monitoramento' },
        { q: 'Há dano ambiental?', yes: 'Reparação e responsabilização', no: 'Medida preventiva' }
      ],
      compare: [
        { label: 'Prevenção', text: 'Risco conhecido exige ação antecipada.' },
        { label: 'Precaução', text: 'Incerteza relevante recomenda cautela.' },
        { label: 'Responsabilidade', text: 'Pode ser civil, administrativa e penal.' }
      ],
      caseSteps: ['Empreendimento chega ao Município', 'Órgão exige documentos', 'Fiscalização verifica impacto', 'Procuradoria orienta providência'],
      warning: 'Pegadinha: dano ambiental pode gerar responsabilidades independentes.'
    };
  }

  if (subjectId === 'lingua-portuguesa') {
    return {
      type: 'decision',
      title: 'Interpretação objetiva de texto',
      subtitle: 'Leia o comando antes de escolher a alternativa.',
      flow: ['Comando', 'Tese do texto', 'Palavra-chave', 'Inferência', 'Alternativas', 'Resposta'],
      decision: [
        { q: 'A alternativa extrapola o texto?', yes: 'Eliminar', no: 'Comparar com a tese' },
        { q: 'Há palavra extrema?', yes: 'Desconfiar e conferir contexto', no: 'Avaliar aderência' },
        { q: 'A resposta contradiz o comando?', yes: 'Eliminar', no: 'Conferir precisão' }
      ],
      compare: [
        { label: 'Literal', text: 'Está expressamente no texto.' },
        { label: 'Inferência', text: 'Decorre logicamente do texto.' },
        { label: 'Extrapolação', text: 'Vai além do que foi dito.' }
      ],
      caseSteps: ['Leia o comando', 'Marque tese e conectivos', 'Elimine exageros', 'Escolha a mais aderente'],
      warning: 'Pegadinha: alternativa bonita, mas fora do texto, está errada.'
    };
  }

  return {
    type: 'flow',
    title: `${topic.title}: raciocínio de prova`,
    subtitle: 'Transforme o conteúdo em uma sequência decisória para objetiva, discursiva e parecer.',
    flow: ['Fato', 'Norma', 'Requisito', 'Consequência', 'Providência do Procurador'],
    decision: [
      { q: 'Qual é o problema jurídico?', yes: 'Delimite o instituto', no: 'Releia o enunciado' },
      { q: 'Existe base legal expressa?', yes: 'Fundamente na lei seca', no: 'Use princípios e interpretação sistemática' },
      { q: 'Há consequência prática para o Município?', yes: 'Proponha providência', no: 'Conclua com segurança' }
    ],
    compare: [
      { label: 'Objetiva', text: 'Identificar conceito, requisito e exceção.' },
      { label: 'Discursiva', text: 'Aplicar fundamento ao caso concreto.' },
      { label: 'Parecer', text: 'Indicar providência juridicamente segura.' }
    ],
    caseSteps: ['Problema chega à Prefeitura', 'Procurador identifica norma', 'Aplica requisitos', 'Aponta risco', 'Recomenda providência'],
    warning: 'Pegadinha: não responda só com conceito; aplique ao caso.'
  };
}

function LegalFlowVisual({ model }) {
  return (
    <div className="apv-flow" aria-label="Fluxo jurídico visual">
      {model.flow.map((step, index) => (
        <div className="apv-flow-item" key={step}>
          <span>{index + 1}</span>
          <strong>{step}</strong>
          {index < model.flow.length - 1 && <em>→</em>}
        </div>
      ))}
    </div>
  );
}

function DecisionTreeVisual({ model }) {
  return (
    <div className="apv-decision-tree">
      {model.decision.map((item, index) => (
        <div className="apv-decision-node" key={item.q}>
          <small>Pergunta {index + 1}</small>
          <strong>{item.q}</strong>
          <div>
            <span className="yes">Sim: {item.yes}</span>
            <span className="no">Não: {item.no}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MindMapVisual({ model }) {
  return (
    <div className="apv-mindmap">
      <div className="apv-mind-center">{model.title}</div>
      <div className="apv-mind-branches">
        {model.flow.slice(0, 6).map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}

function CompareCardsVisual({ model }) {
  return (
    <div className="apv-compare-cards">
      {model.compare.map((item) => (
        <article key={item.label}>
          <strong>{item.label}</strong>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function MunicipalCaseVisual({ model }) {
  return (
    <div className="apv-municipal-case">
      <div className="apv-building">Prefeitura</div>
      <div className="apv-case-steps">
        {model.caseSteps.map((item, index) => <span key={item}>{index + 1}. {item}</span>)}
      </div>
      <div className="apv-procurador">Parecer do Procurador</div>
    </div>
  );
}

function CauseEffectVisual({ model }) {
  return (
    <div className="apv-cause-effect">
      <div><small>Causa</small><strong>{model.flow[0]}</strong></div>
      <span>gera</span>
      <div><small>Efeito jurídico</small><strong>{model.flow[Math.min(2, model.flow.length - 1)]}</strong></div>
      <span>exige</span>
      <div><small>Providência</small><strong>{model.flow[model.flow.length - 1]}</strong></div>
    </div>
  );
}

function visualText(model) {
  return [
    `VISUALIZAR O RACIOCÍNIO — ${model.title}`,
    model.subtitle,
    '',
    'Fluxo:',
    model.flow.map((item, index) => `${index + 1}. ${item}`).join('\n'),
    '',
    'Árvore de decisão:',
    ...model.decision.map((item) => `- ${item.q}\n  Sim: ${item.yes}\n  Não: ${item.no}`),
    '',
    'Comparações:',
    ...model.compare.map((item) => `- ${item.label}: ${item.text}`),
    '',
    `Pegadinha visual: ${model.warning}`
  ].join('\n');
}

function ApostilaVisualBlock({ subject, topic, progress, setProgress, onNavigate }) {
  const [open, setOpen] = useState(false);
  const model = useMemo(() => buildVisualModel(subject, topic), [subject, topic]);
  const visualKey = `${subject.id}:${topic.id}`;
  const dominated = Boolean(progress.visualDominated?.[visualKey]);

  async function copyVisual() {
    await navigator.clipboard?.writeText(visualText(model));
    setProgress((current) => ({ ...current, generatedAt: new Date().toISOString() }));
  }

  async function transformIntoReview() {
    await navigator.clipboard?.writeText(`REVISÃO VISUAL — ${model.title}\n\n${visualText(model)}`);
    setProgress((current) => {
      const queue = current.reviewQueue || [];
      return {
        ...current,
        reviewQueue: queue.includes(topic.id) ? queue : [...queue, topic.id],
        visualNotes: [...(current.visualNotes || []), { topicId: topic.id, title: model.title, createdAt: new Date().toISOString() }]
      };
    });
  }

  async function sendToFlashcards() {
    const cards = model.compare.map((item) => `Frente: ${item.label}\nVerso: ${item.text}`).join('\n\n');
    await navigator.clipboard?.writeText(`FLASHCARDS VISUAIS — ${model.title}\n\n${cards}\n\nPegadinha: ${model.warning}`);
    onNavigate?.('flashcards');
  }

  function toggleDominated() {
    setProgress((current) => ({
      ...current,
      visualDominated: { ...(current.visualDominated || {}), [visualKey]: !dominated }
    }));
  }

  return (
    <section className="apostila-visual-block">
      <div className="apv-header">
        <div>
          <Badge tone="purple">Visualizar o raciocínio</Badge>
          <h3>{model.title}</h3>
          <p>{model.subtitle}</p>
        </div>
        <div className="apv-actions">
          <Button onClick={() => setOpen((value) => !value)}>{open ? 'Ocultar visualização' : 'Ver visualização'}</Button>
          <Button variant="ghost" onClick={toggleDominated}>{dominated ? 'Visual dominado ✓' : 'Marcar visual como dominado'}</Button>
        </div>
      </div>

      {open && (
        <div className="apv-stage">
          <LegalFlowVisual model={model} />
          <div className="apv-grid">
            <DecisionTreeVisual model={model} />
            <MindMapVisual model={model} />
          </div>
          <CompareCardsVisual model={model} />
          <div className="apv-grid">
            <MunicipalCaseVisual model={model} />
            <CauseEffectVisual model={model} />
          </div>
          <div className="apv-warning"><strong>Pegadinha:</strong> {model.warning}</div>
          <div className="apostila-action-row">
            <Button onClick={copyVisual}>Copiar mapa visual</Button>
            <Button variant="secondary" onClick={transformIntoReview}>Transformar em revisão</Button>
            <Button variant="ghost" onClick={sendToFlashcards}>Enviar para flashcards</Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function PremiumApostila({ onNavigate }) {
  const [progress, setProgress] = useLocalStorage(APOSTILA_KEY, initialProgress);
  const [query, setQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('todos');
  const [activeTopicId, setActiveTopicId] = useState(null);
  const stats = getApostilaStats(progress);

  const filteredSubjects = useMemo(() => {
    const q = normalize(query);
    return premiumApostilaSubjects.map((subject) => ({
      ...subject,
      topics: subject.topics.filter((topic) => {
        const matchLevel = levelFilter === 'todos' || topic.level === levelFilter;
        if (!matchLevel) return false;
        if (!q) return true;
        return normalize([
          subject.subject,
          topic.title,
          topic.level,
          topic.whatIs,
          topic.purpose,
          topic.plainExplanation.join(' '),
          topic.legalBase.join(' '),
          topic.dryLaw.join(' '),
          topic.traps.join(' '),
          topic.summary
        ].join(' ')).includes(q);
      })
    })).filter((subject) => subject.topics.length > 0);
  }, [query, levelFilter]);

  const activeSubject = premiumApostilaSubjects.find((item) => item.id === progress.selectedSubjectId) || premiumApostilaSubjects[0];
  const visibleActiveSubject = filteredSubjects.find((item) => item.id === activeSubject.id) || filteredSubjects[0] || activeSubject;
  const studiedSet = new Set(progress.studied?.[visibleActiveSubject.id] || []);
  const activeTopic = visibleActiveSubject.topics.find((topic) => topic.id === activeTopicId) || visibleActiveSubject.topics[0] || activeSubject.topics[0];
  const activeDeepLesson = getDeepDidacticLesson(activeSubject.id, activeTopic.id);
  const activeTheoryLesson = getTheoreticalLesson(activeSubject, activeTopic);
  const subjectTotal = activeSubject.topics.length;
  const subjectDone = progress.studied?.[activeSubject.id]?.length || 0;
  const subjectPercent = Math.round((subjectDone / Math.max(subjectTotal, 1)) * 100);

  function selectSubject(subjectId) {
    setProgress((current) => ({ ...current, selectedSubjectId: subjectId }));
    setActiveTopicId(null);
  }

  function toggleStudied(topicId) {
    setProgress((current) => {
      const list = current.studied?.[visibleActiveSubject.id] || [];
      const exists = list.includes(topicId);
      return {
        ...current,
        studied: {
          ...(current.studied || {}),
          [visibleActiveSubject.id]: exists ? list.filter((id) => id !== topicId) : [...list, topicId]
        }
      };
    });
  }

  function updateNote(value) {
    setProgress((current) => ({
      ...current,
      notes: { ...(current.notes || {}), [activeTopic.id]: value }
    }));
  }

  async function copySummary() {
    await navigator.clipboard?.writeText(topicText(activeTopic));
    setProgress((current) => ({ ...current, generatedAt: new Date().toISOString() }));
  }

  function generateActiveReview() {
    const review = [
      `REVISÃO ATIVA — ${activeTopic.title}`,
      ...activeTopic.activeQuestions.map((item, index) => `${index + 1}. ${item}`),
      '',
      'Flashcards sugeridos:',
      ...activeTopic.flashcards.map((item) => `- Frente: ${item.front}\n  Verso: ${item.back}`)
    ].join('\n');
    navigator.clipboard?.writeText(review);
    setProgress((current) => ({ ...current, generatedAt: new Date().toISOString() }));
  }

  function sendToReview() {
    setProgress((current) => {
      const exists = current.reviewQueue?.includes(activeTopic.id);
      return {
        ...current,
        reviewQueue: exists ? current.reviewQueue : [...(current.reviewQueue || []), activeTopic.id]
      };
    });
  }

  const levels = ['todos', 'básico', 'intermediário', 'avançado', 'discursiva', 'lei seca'];

  return (
    <div className="page-grid apostila-page">
      <section className="hero-panel apostila-hero">
        <div>
          <Badge tone="orange">{premiumApostilaMeta.phase} • apostila premium</Badge>
          <h1>{premiumApostilaMeta.title}</h1>
          <p>{premiumApostilaMeta.subtitle}</p>
          <p className="source-note">{premiumApostilaMeta.sourceNote}</p>
          <div className="hero-actions">
            <Button onClick={() => onNavigate?.('lei-seca')}>Abrir Lei Seca</Button>
            <Button variant="ghost" onClick={() => onNavigate?.('discursivas')}>Treinar Discursiva</Button>
            <Button variant="secondary" onClick={() => onNavigate?.('mentor')}>Abrir Mentor</Button>
          </div>
        </div>
        <div className="mentor-score-card">
          <span>apostila estudada</span>
          <strong>{stats.percent}%</strong>
          <small>{stats.done}/{stats.total} tópicos premium</small>
        </div>
      </section>

      <Card>
        <div className="subjects-toolbar apostila-toolbar">
          <div>
            <Badge tone="cyan">busca inteligente</Badge>
            <h2>Pesquisar tópico, lei, pegadinha ou palavra-chave</h2>
          </div>
          <div className="subjects-filter-actions apostila-filter-actions">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: ato ilegal, convalidação, poder de polícia, licitação direta..." />
            <select value={levelFilter} onChange={(event) => setLevelFilter(event.target.value)}>
              {levels.map((level) => <option key={level} value={level}>{level}</option>)}
            </select>
          </div>
        </div>
      </Card>

      <div className="apostila-layout">
        <aside className="apostila-subject-menu">
          {premiumApostilaSubjects.map((subject) => {
            const done = progress.studied?.[subject.id]?.length || 0;
            const percent = Math.round((done / Math.max(subject.topics.length, 1)) * 100);
            return (
              <button key={subject.id} type="button" className={`apostila-subject-card ${subject.id === activeSubject.id ? 'active' : ''}`} onClick={() => selectSubject(subject.id)}>
                <span><Badge tone="orange">{subject.status}</Badge></span>
                <strong>{subject.subject}</strong>
                <small>{done}/{subject.topics.length} tópicos • {percent}%</small>
              </button>
            );
          })}
          <Card className="apostila-next-card">
            <Badge tone="purple">próximas fases</Badge>
            <ul className="compact-list">
              {premiumApostilaMeta.nextPhases.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Card>
        </aside>

        <main className="apostila-main">
          <Card variant="highlight">
            <div className="subject-detail-header">
              <div>
                <Badge tone="orange">{activeSubject.priority}</Badge>
                <h2>{activeSubject.subject}</h2>
                <p>{activeSubject.overview}</p>
              </div>
              <Button variant="ghost" onClick={copySummary}>Copiar aula completa</Button>
            </div>
            <ProgressBar label={`Progresso em ${activeSubject.subject}: ${subjectDone}/${subjectTotal} tópicos`} value={subjectPercent} />
          </Card>

          <div className="apostila-workbench">
            <Card className="apostila-topic-list-card">
              <Badge tone="cyan">tópicos explicados</Badge>
              <div className="lesson-list">
                {visibleActiveSubject.topics.map((topic, index) => {
                  const done = studiedSet.has(topic.id);
                  const active = activeTopic.id === topic.id;
                  return (
                    <button key={topic.id} type="button" className={`lesson-row ${active ? 'active' : ''} ${done ? 'done' : ''}`} onClick={() => setActiveTopicId(topic.id)}>
                      <span>{done ? '✓' : index + 1}</span>
                      <strong>{topic.title}</strong>
                      <small>{topic.level} • apostila completa</small>
                    </button>
                  );
                })}
              </div>
            </Card>

            <Card className="apostila-reader-card" variant="highlight">
              <div className="lesson-reader-header">
                <div>
                  <Badge tone="green">{activeTopic.level}</Badge>
                  <h2>{activeTopic.title}</h2>
                  <p>{activeTopic.summary}</p>
                </div>
                <div className="lesson-reader-actions">
                  <Button onClick={() => toggleStudied(activeTopic.id)}>{studiedSet.has(activeTopic.id) ? 'Desmarcar estudado' : 'Marcar como estudado'}</Button>
                  <Button variant="ghost" onClick={copySummary}>Copiar resumo</Button>
                </div>
              </div>

              <div className="apostila-mini-index">
                <span>Aula teórica</span><span>Quadro de atenção</span><span>Como cai</span><span>Base legal</span><span>Revisão</span><span>Visual</span>
              </div>

              <TheoreticalLessonBlock lesson={activeTheoryLesson} />

              <Section title="Complemento de revisão — conceito" tone="cyan"><p>{activeTopic.whatIs}</p></Section>
              <Section title="Complemento de revisão — função prática" tone="green"><p>{activeTopic.purpose}</p></Section>
              <Section title="Complemento de revisão — pontos principais" tone="orange">
                {activeTopic.plainExplanation.map((item) => <p key={item}>{item}</p>)}
              </Section>
              <DeepDidacticBlock lesson={activeDeepLesson} />
              <Section title="4. Explicação técnica para prova" tone="purple"><p>{activeTopic.examTechnical}</p></Section>
              <Section title="5. Exemplo aplicado à Procuradoria Municipal" tone="green"><p>{activeTopic.cityExample}</p></Section>

              <div className="lesson-columns">
                <Section title="6. Base legal principal" tone="cyan"><ul className="compact-list">{activeTopic.legalBase.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="7. Artigos para lei seca" tone="orange"><ul className="compact-list">{activeTopic.dryLaw.map((item) => <li key={item}>{item}</li>)}</ul></Section>
              </div>

              <Section title="8. Jurisprudência e entendimento relevante" tone="purple"><ul className="compact-list">{activeTopic.jurisprudence.map((item) => <li key={item}>{item}</li>)}</ul></Section>

              <div className="lesson-columns">
                <Section title="9. Como a banca cobra na objetiva" tone="cyan"><ul className="compact-list">{activeTopic.objectiveCharge.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="10. Como vira discursiva/parecer" tone="green"><p>{activeTopic.discursiveCharge}</p></Section>
              </div>

              <div className="lesson-columns">
                <Section title="11. Pegadinhas prováveis" tone="orange"><ul className="compact-list">{activeTopic.traps.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="12. Diferenças importantes" tone="purple"><ul className="compact-list">{activeTopic.differences.map((item) => <li key={item}>{item}</li>)}</ul></Section>
              </div>

              <div className="lesson-columns">
                <Section title="13. Erros comuns do candidato" tone="orange"><ul className="compact-list">{activeTopic.commonMistakes.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="14. Mini caso prático" tone="green"><p>{activeTopic.miniCase}</p></Section>
              </div>

              <div className="lesson-columns">
                <Section title="15. Perguntas de revisão ativa" tone="cyan"><ul className="compact-list">{activeTopic.activeQuestions.map((item) => <li key={item}>{item}</li>)}</ul></Section>
                <Section title="16. Flashcards sugeridos" tone="purple"><ul className="compact-list">{activeTopic.flashcards.map((item) => <li key={item.front}><strong>{item.front}</strong> — {item.back}</li>)}</ul></Section>
              </div>

              <Section title="17. Mini resumo final" tone="green"><p>{activeTopic.summary}</p></Section>
              <Section title="18. Checklist de domínio" tone="cyan"><ul className="compact-list">{activeTopic.checklist.map((item) => <li key={item}>{item}</li>)}</ul></Section>
              <Section title="19. Próximo tópico recomendado" tone="orange"><p>{activeTopic.nextTopic}</p></Section>

              <ApostilaVisualBlock subject={activeSubject} topic={activeTopic} progress={progress} setProgress={setProgress} onNavigate={onNavigate} />

              <section className="lesson-section warning-section">
                <h3>Anotação pessoal deste tópico</h3>
                <textarea value={progress.notes?.[activeTopic.id] || ''} onChange={(event) => updateNote(event.target.value)} placeholder="Escreva aqui sua dúvida, macete, artigo importante ou exemplo que você quer lembrar..." />
                <div className="apostila-action-row">
                  <Button onClick={generateActiveReview}>Gerar revisão ativa</Button>
                  <Button variant="secondary" onClick={sendToReview}>Enviar para revisão</Button>
                  <Button variant="ghost" onClick={() => onNavigate?.('flashcards')}>Abrir Flashcards</Button>
                  <Button variant="ghost" onClick={() => onNavigate?.('lei-seca')}>Abrir Lei Seca</Button>
                </div>
              </section>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

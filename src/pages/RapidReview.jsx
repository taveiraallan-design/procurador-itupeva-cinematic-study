import { useMemo, useState } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useLocalStorage } from '../hooks/useLocalStorage';

const RAPID_REVIEW_KEY = 'rapid_review_progress_v1';
const initialProgress = { listened: {}, copied: {}, completed: {}, notes: {} };

const scripts = [
  {
    id: 'atos',
    title: 'Atos Administrativos em 3 minutos',
    subject: 'Administrativo',
    time: '3 min',
    level: 'alta incidência',
    bullets: [
      'Ato administrativo válido exige competência, finalidade, forma, motivo e objeto.',
      'Vício de legalidade leva à anulação; mérito administrativo permite revogação por conveniência e oportunidade.',
      'Convalidação só cabe quando o vício é sanável, sem prejuízo ao interesse público e a terceiros.',
      'A pegadinha clássica é dizer que ato ilegal pode ser revogado. Não pode: ato ilegal é anulado.',
    ],
    mantra: 'Ilegalidade anula. Mérito revoga. Vício sanável pode convalidar.',
    drill: 'Explique em voz alta a diferença entre anulação, revogação e convalidação em até 60 segundos.',
  },
  {
    id: 'lei-organica',
    title: 'Lei Orgânica Municipal sem travar',
    subject: 'Lei Local',
    time: '4 min',
    level: 'decisiva',
    bullets: [
      'A Lei Orgânica funciona como norma estrutural do Município, respeitando Constituição Federal e Constituição Estadual.',
      'Atenção à repartição de competências entre Câmara Municipal, Prefeito e Administração direta/indireta.',
      'Em prova de Procurador, o foco costuma ser competência, processo legislativo, controle, servidores e organização municipal.',
      'Na discursiva, sempre conecte autonomia municipal com legalidade, interesse local e limites constitucionais.',
    ],
    mantra: 'Município tem autonomia, mas não soberania. Competência local sempre respeita a Constituição.',
    drill: 'Fale como você diferenciaria competência da Câmara e do Prefeito em uma consulta jurídica.',
  },
  {
    id: 'tributos',
    title: 'Tributos Municipais para prova e parecer',
    subject: 'Tributário',
    time: '4 min',
    level: 'lei seca + caso',
    bullets: [
      'Município trabalha com IPTU, ISS, ITBI, taxas e contribuição de melhoria, observando legalidade e anterioridade quando aplicável.',
      'Dívida ativa exige constituição regular do crédito, inscrição e cobrança adequada pela Fazenda Pública.',
      'Taxa depende de serviço público específico e divisível ou exercício regular do poder de polícia.',
      'A pegadinha é confundir imposto com taxa ou usar base de cálculo incompatível com a natureza do tributo.',
    ],
    mantra: 'Imposto não exige contraprestação direta. Taxa exige serviço específico/divisível ou poder de polícia.',
    drill: 'Monte em voz alta a resposta para uma cobrança municipal questionada por ausência de serviço específico.',
  },
  {
    id: 'processo-civil',
    title: 'Processo Civil da Fazenda Pública',
    subject: 'Processo Civil',
    time: '3 min',
    level: 'procurador raiz',
    bullets: [
      'Procurador precisa dominar prazos, representação judicial, remessa necessária, execução contra Fazenda e tutela provisória.',
      'A resposta boa diferencia interesse público de mera resistência processual automática.',
      'Na prática, o parecer deve indicar risco, providência processual e impacto financeiro/administrativo.',
      'Evite resposta genérica: cite fundamento, aplique ao caso e conclua com uma providência concreta.',
    ],
    mantra: 'Processo da Fazenda exige prazo, risco, impacto e providência.',
    drill: 'Explique a estratégia para contestar uma ação contra o Município sem parecer evasivo.',
  },
  {
    id: 'discursiva',
    title: 'Estrutura da Discursiva de Procurador',
    subject: 'Discursiva',
    time: '5 min',
    level: 'nota alta',
    bullets: [
      'Abra delimitando o problema jurídico em uma frase objetiva.',
      'Depois apresente fundamento normativo, princípios e distinções relevantes.',
      'Aplique ao caso concreto: mostre o que o Município deve fazer e por quê.',
      'Feche com conclusão prática: anular, convalidar, defender, cobrar, regulamentar, impugnar ou orientar.',
    ],
    mantra: 'Problema, fundamento, aplicação e providência. Sem isso, a discursiva fica genérica.',
    drill: 'Pegue qualquer tema e responda em quatro blocos: problema, fundamento, caso concreto e conclusão.',
  },
  {
    id: 'anti-pegadinha',
    title: 'Roteiro Anti-Pegadinha da Banca',
    subject: 'Banca',
    time: '2 min',
    level: 'blindagem',
    bullets: [
      'Leia o comando antes das alternativas e marque se pede correta, incorreta, exceto ou de acordo com a lei.',
      'Desconfie de termos absolutos: sempre, nunca, exclusivamente, automaticamente e obrigatoriamente.',
      'Separe legalidade de mérito, competência de atribuição, tributo de sanção e regra de exceção.',
      'Na dúvida entre duas alternativas, escolha a que conversa melhor com a norma e não com opinião pessoal.',
    ],
    mantra: 'Comando primeiro, absoluto com cuidado, exceção não vira regra.',
    drill: 'Explique em voz alta como você eliminaria duas alternativas absurdas antes de chutar entre as restantes.',
  },
];

function buildSpeechText(script) {
  return `${script.title}. ${script.bullets.join(' ')} Mantra: ${script.mantra}. Treino: ${script.drill}`;
}

function copyText(text) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  return Promise.resolve();
}

export default function RapidReview({ onNavigate = () => {} }) {
  const [progress, setProgress] = useLocalStorage(RAPID_REVIEW_KEY, initialProgress);
  const [activeId, setActiveId] = useState(scripts[0].id);
  const [speed, setSpeed] = useState(1);
  const [notice, setNotice] = useState('');

  const active = scripts.find((item) => item.id === activeId) || scripts[0];
  const doneCount = scripts.filter((item) => progress.completed?.[item.id]).length;
  const progressPercent = Math.round((doneCount / scripts.length) * 100);

  const playlist = useMemo(() => scripts.map((item, index) => ({ ...item, order: index + 1, done: Boolean(progress.completed?.[item.id]) })), [progress]);

  function mark(type, id = active.id) {
    setProgress((current) => ({ ...current, [type]: { ...(current[type] || {}), [id]: !current[type]?.[id] } }));
  }

  function speak() {
    const text = buildSpeechText(active);
    if (!('speechSynthesis' in window)) {
      setNotice('Seu navegador não liberou narração automática. Use Copiar roteiro e leia em voz alta.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = Number(speed);
    window.speechSynthesis.speak(utterance);
    setProgress((current) => ({ ...current, listened: { ...(current.listened || {}), [active.id]: true } }));
    setNotice('Narração iniciada. Se o Safari bloquear áudio, clique novamente após interagir com a página.');
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setNotice('Narração pausada.');
  }

  function copyScript() {
    copyText(buildSpeechText(active)).then(() => {
      setProgress((current) => ({ ...current, copied: { ...(current.copied || {}), [active.id]: true } }));
      setNotice('Roteiro copiado. Cole no Notas, WhatsApp ou leia em voz alta.');
    });
  }

  return (
    <div className="page-grid rapid-review-page">
      <section className="mentor-hero rapid-hero">
        <div>
          <Badge tone="cyan">fase 32 · revisão por roteiro</Badge>
          <h1>Revisão Ultra Rápida por Áudio/Roteiro</h1>
          <p>Transforme os temas mais perigosos em blocos de fala curta para revisar no ônibus, intervalo, caminhada ou antes de dormir.</p>
          <div className="hero-actions">
            <Button onClick={speak}>Ouvir roteiro</Button>
            <Button variant="secondary" onClick={copyScript}>Copiar roteiro</Button>
            <Button variant="ghost" onClick={stopSpeech}>Parar áudio</Button>
          </div>
        </div>
        <div className="mentor-readiness" style={{ '--mentor-readiness': `${progressPercent}%` }}>
          <strong>{progressPercent}%</strong>
          <span>playlist feita</span>
        </div>
      </section>

      {notice && <Card variant="highlight"><strong>{notice}</strong></Card>}

      <div className="two-cols wide-left">
        <Card>
          <div className="section-heading">
            <div>
              <Badge tone="purple">playlist</Badge>
              <h3>Roteiros de última fixação</h3>
            </div>
            <strong>{doneCount}/{scripts.length}</strong>
          </div>
          <div className="dry-law-list compact-list">
            {playlist.map((item) => (
              <article className={`dry-law-card ${active.id === item.id ? 'selected' : ''} ${item.done ? 'done' : ''}`} key={item.id}>
                <div className="dry-law-topline">
                  <Badge tone={item.done ? 'green' : 'cyan'}>{`#${item.order} · ${item.time}`}</Badge>
                  <div className="dry-law-actions">
                    <button type="button" onClick={() => setActiveId(item.id)}>Abrir</button>
                    <button type="button" onClick={() => mark('completed', item.id)}>{item.done ? 'Feito ✓' : 'Concluir'}</button>
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.subject} · {item.level}</p>
              </article>
            ))}
          </div>
        </Card>

        <div className="stacked-cards">
          <Card variant="highlight">
            <div className="section-heading">
              <div>
                <Badge tone="orange">controle</Badge>
                <h3>Velocidade e foco</h3>
              </div>
            </div>
            <label className="input-row">
              <span>Velocidade do áudio</span>
              <select className="text-input" value={speed} onChange={(event) => setSpeed(event.target.value)}>
                <option value="0.85">0.85x — revisão calma</option>
                <option value="1">1x — normal</option>
                <option value="1.15">1.15x — acelerado</option>
                <option value="1.3">1.3x — reta final</option>
              </select>
            </label>
            <ProgressBar label="Playlist concluída" value={progressPercent} />
          </Card>

          <Card>
            <Badge tone="green">modo TDAH</Badge>
            <h3>Hoje só decore isso</h3>
            <p className="mantra-box">{active.mantra}</p>
            <Button variant="secondary" onClick={() => onNavigate('sprint')}>Voltar ao Sprint</Button>
          </Card>
        </div>
      </div>

      <Card className="script-card">
        <div className="section-heading">
          <div>
            <Badge tone="cyan">roteiro ativo</Badge>
            <h3>{active.title}</h3>
          </div>
          <Badge tone="orange">{active.subject}</Badge>
        </div>
        <ol className="script-bullets">
          {active.bullets.map((line) => <li key={line}>{line}</li>)}
        </ol>
        <div className="three-cols">
          <div className="mini-panel"><span>Mantra</span><strong>{active.mantra}</strong></div>
          <div className="mini-panel"><span>Drill oral</span><strong>{active.drill}</strong></div>
          <div className="mini-panel"><span>Ação</span><strong>Ouça, repita em voz alta e marque como concluído.</strong></div>
        </div>
      </Card>
    </div>
  );
}

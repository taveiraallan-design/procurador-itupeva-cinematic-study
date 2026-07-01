import { editalQuestions } from './editalQuestions';
import { localLawQuestions } from './localLegislation';

const baseQuestions = [
  {
    id: 'q001', subject: 'Direito Administrativo', topic: 'Atos Administrativos', difficulty: 'Média',
    statement: 'A Administração constatou que um ato administrativo nasceu com ilegalidade insanável. Nessa situação, a providência juridicamente adequada é:',
    options: [
      { id: 'A', text: 'anular o ato, podendo a própria Administração fazê-lo no exercício da autotutela.' },
      { id: 'B', text: 'revogar o ato por conveniência e oportunidade.' },
      { id: 'C', text: 'convalidar o ato sempre que houver interesse público.' },
      { id: 'D', text: 'manter o ato, pois atos administrativos presumem-se válidos de forma absoluta.' },
      { id: 'E', text: 'encaminhar obrigatoriamente ao Legislativo para sustação.' },
    ], correctAnswer: 'A',
    explanation: 'Ato ilegal deve ser anulado. A Administração pode anular seus próprios atos quando eivados de ilegalidade, no exercício da autotutela.',
    trap: 'A banca costuma trocar anulação por revogação. Revogação é mérito; anulação é legalidade.',
    legalBasis: 'Autotutela administrativa; legalidade; Súmulas 346 e 473 do STF como referência clássica.',
    tags: ['anulação', 'autotutela', 'legalidade']
  },
  {
    id: 'q002', subject: 'Direito Administrativo', topic: 'Poderes Administrativos', difficulty: 'Fácil',
    statement: 'O poder conferido à Administração para limitar direitos individuais em benefício do interesse coletivo, dentro dos limites legais, é o poder:',
    options: [
      { id: 'A', text: 'disciplinar.' },
      { id: 'B', text: 'de polícia.' },
      { id: 'C', text: 'hierárquico.' },
      { id: 'D', text: 'regulamentar judicial.' },
      { id: 'E', text: 'constituinte derivado.' },
    ], correctAnswer: 'B',
    explanation: 'Poder de polícia é a atividade estatal que condiciona ou limita o exercício de direitos em razão do interesse público.',
    trap: 'Não confunda polícia administrativa com polícia judiciária.',
    legalBasis: 'Regime jurídico administrativo e poder de polícia.',
    tags: ['poder de polícia', 'limitação administrativa']
  },
  {
    id: 'q003', subject: 'Direito Administrativo', topic: 'Licitações', difficulty: 'Média',
    statement: 'Na contratação pública, a inexigibilidade de licitação ocorre quando:',
    options: [
      { id: 'A', text: 'a Administração prefere contratar diretamente por celeridade.' },
      { id: 'B', text: 'o valor é sempre baixo, independentemente da lei.' },
      { id: 'C', text: 'há inviabilidade de competição.' },
      { id: 'D', text: 'o gestor declara urgência verbal.' },
      { id: 'E', text: 'o contrato é de interesse político.' },
    ], correctAnswer: 'C',
    explanation: 'A inexigibilidade decorre da inviabilidade de competição. Dispensa e inexigibilidade não são sinônimos.',
    trap: 'A pegadinha é confundir contratação direta livre com contratação direta prevista em lei.',
    legalBasis: 'Lei de Licitações e Contratos Administrativos.',
    tags: ['licitação', 'inexigibilidade', 'contratação direta']
  },
  {
    id: 'q004', subject: 'Direito Administrativo', topic: 'Responsabilidade Civil do Estado', difficulty: 'Média',
    statement: 'Para haver responsabilidade civil objetiva do Estado, em regra, é necessário demonstrar:',
    options: [
      { id: 'A', text: 'dolo do agente público, sempre.' },
      { id: 'B', text: 'culpa grave do agente e dano presumido.' },
      { id: 'C', text: 'apenas a existência de ato administrativo.' },
      { id: 'D', text: 'conduta estatal, dano e nexo causal.' },
      { id: 'E', text: 'prévio processo administrativo disciplinar.' },
    ], correctAnswer: 'D',
    explanation: 'Responsabilidade objetiva não significa responsabilidade automática: ainda exige dano e nexo causal.',
    trap: 'A banca afirma que basta existir dano. Sem nexo causal, não há dever de indenizar.',
    legalBasis: 'Art. 37, §6º, da Constituição Federal.',
    tags: ['responsabilidade civil', 'dano', 'nexo causal']
  },
  {
    id: 'q005', subject: 'Direito Administrativo', topic: 'Servidores Públicos', difficulty: 'Fácil',
    statement: 'A estabilidade do servidor público efetivo, em linhas gerais, exige aprovação em concurso, efetivo exercício por período constitucional e avaliação especial de desempenho. Esse instituto protege:',
    options: [
      { id: 'A', text: 'qualquer agente político temporário.' },
      { id: 'B', text: 'ocupantes exclusivos de cargo em comissão.' },
      { id: 'C', text: 'prestadores de serviço terceirizados.' },
      { id: 'D', text: 'contratados emergenciais sem concurso.' },
      { id: 'E', text: 'servidores ocupantes de cargo efetivo, observados os requisitos constitucionais.' },
    ], correctAnswer: 'E',
    explanation: 'A estabilidade está ligada ao cargo efetivo, não a cargo em comissão, terceirização ou contratação temporária.',
    trap: 'Não confunda estabilidade com vitaliciedade nem com simples permanência no serviço público.',
    legalBasis: 'Art. 41 da Constituição Federal.',
    tags: ['servidores', 'estabilidade', 'cargo efetivo']
  },
  {
    id: 'q006', subject: 'Direito Constitucional', topic: 'Direitos Fundamentais', difficulty: 'Fácil',
    statement: 'Os direitos e garantias fundamentais previstos na Constituição caracterizam-se por:',
    options: [
      { id: 'A', text: 'aplicação apenas às relações entre particulares.' },
      { id: 'B', text: 'relevância na limitação do poder estatal e proteção da pessoa.' },
      { id: 'C', text: 'impossibilidade absoluta de restrição em qualquer situação.' },
      { id: 'D', text: 'exclusividade aos brasileiros natos.' },
      { id: 'E', text: 'dependência total de lei municipal para existirem.' },
    ], correctAnswer: 'B',
    explanation: 'Direitos fundamentais protegem a pessoa e limitam o exercício do poder, embora possam sofrer restrições proporcionais.',
    trap: 'A banca pode afirmar que todo direito fundamental é absoluto; isso está errado.',
    legalBasis: 'Título II da Constituição Federal.',
    tags: ['direitos fundamentais', 'constituição']
  },
  {
    id: 'q007', subject: 'Direito Constitucional', topic: 'Administração Pública', difficulty: 'Fácil',
    statement: 'São princípios expressos da Administração Pública no art. 37 da Constituição:',
    options: [
      { id: 'A', text: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' },
      { id: 'B', text: 'Legalidade, razoabilidade, proporcionalidade, continuidade e anualidade.' },
      { id: 'C', text: 'Eficiência, contraditório, ampla defesa, anterioridade e motivação.' },
      { id: 'D', text: 'Moralidade, sigilo, competitividade, autotutela e hierarquia.' },
      { id: 'E', text: 'Publicidade, discricionariedade, supremacia, indisponibilidade e eficiência.' },
    ], correctAnswer: 'A',
    explanation: 'O famoso LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência.',
    trap: 'Razoabilidade e proporcionalidade são importantes, mas não estão no caput como princípios expressos do LIMPE.',
    legalBasis: 'Art. 37, caput, da Constituição Federal.',
    tags: ['limpe', 'artigo 37', 'administração pública']
  },
  {
    id: 'q008', subject: 'Direito Constitucional', topic: 'Organização do Estado', difficulty: 'Média',
    statement: 'A autonomia municipal compreende, entre outros aspectos:',
    options: [
      { id: 'A', text: 'subordinação hierárquica direta ao governo estadual.' },
      { id: 'B', text: 'impossibilidade de elaborar lei orgânica.' },
      { id: 'C', text: 'autogoverno, auto-organização, autoadministração e autolegislação nos limites constitucionais.' },
      { id: 'D', text: 'poder constituinte originário próprio.' },
      { id: 'E', text: 'competência ilimitada sobre qualquer matéria nacional.' },
    ], correctAnswer: 'C',
    explanation: 'O Município possui autonomia política, administrativa e legislativa, mas sempre dentro dos limites da Constituição.',
    trap: 'Autonomia não é soberania.',
    legalBasis: 'Arts. 18, 29 e 30 da Constituição Federal.',
    tags: ['município', 'autonomia', 'federação']
  },
  {
    id: 'q009', subject: 'Direito Constitucional', topic: 'Controle de Constitucionalidade', difficulty: 'Difícil',
    statement: 'No controle de constitucionalidade, a ideia de supremacia da Constituição significa que:',
    options: [
      { id: 'A', text: 'leis municipais prevalecem sobre a Constituição quando tratam de interesse local.' },
      { id: 'B', text: 'a Constituição ocupa posição superior no ordenamento e condiciona a validade das demais normas.' },
      { id: 'C', text: 'atos administrativos não precisam observar normas constitucionais.' },
      { id: 'D', text: 'apenas o Poder Legislativo interpreta a Constituição.' },
      { id: 'E', text: 'normas constitucionais não têm força jurídica.' },
    ], correctAnswer: 'B',
    explanation: 'A Constituição é fundamento de validade das demais normas e ocupa o topo da ordem jurídica.',
    trap: 'Interesse local não autoriza Município a contrariar a Constituição.',
    legalBasis: 'Supremacia constitucional e rigidez constitucional.',
    tags: ['controle', 'constitucionalidade', 'supremacia']
  },
  {
    id: 'q010', subject: 'Direito Constitucional', topic: 'Poder Legislativo', difficulty: 'Média',
    statement: 'A fiscalização contábil, financeira, orçamentária, operacional e patrimonial da Administração Pública é exercida pelo Legislativo com auxílio:',
    options: [
      { id: 'A', text: 'da Defensoria Pública.' },
      { id: 'B', text: 'da Polícia Civil.' },
      { id: 'C', text: 'do Ministério das Relações Exteriores.' },
      { id: 'D', text: 'do Tribunal de Contas competente.' },
      { id: 'E', text: 'exclusivamente de auditoria privada.' },
    ], correctAnswer: 'D',
    explanation: 'O controle externo é exercido pelo Poder Legislativo com auxílio do Tribunal de Contas competente.',
    trap: 'Tribunal de Contas auxilia o Legislativo; não é subordinado como departamento administrativo simples.',
    legalBasis: 'Arts. 70 e 71 da Constituição Federal.',
    tags: ['controle externo', 'tribunal de contas']
  },
  {
    id: 'q011', subject: 'Língua Portuguesa', topic: 'Interpretação de Texto', difficulty: 'Média',
    statement: 'Em uma questão de interpretação, a alternativa correta deve estar apoiada no texto. Uma inferência válida é aquela que:',
    options: [
      { id: 'A', text: 'contradiz o sentido global do texto para ampliar a tese.' },
      { id: 'B', text: 'depende de opinião pessoal do leitor.' },
      { id: 'C', text: 'decorre logicamente das informações presentes no texto.' },
      { id: 'D', text: 'ignora conectivos e marcas linguísticas.' },
      { id: 'E', text: 'substitui o texto por conhecimento externo obrigatório.' },
    ], correctAnswer: 'C',
    explanation: 'Inferir é concluir a partir de pistas textuais. A inferência não pode contradizer o texto nem depender apenas de opinião.',
    trap: 'A banca adora alternativas plausíveis, mas sem apoio textual.',
    legalBasis: 'Competência de leitura e interpretação textual.',
    tags: ['interpretação', 'inferência']
  },
  {
    id: 'q012', subject: 'Língua Portuguesa', topic: 'Crase', difficulty: 'Média',
    statement: 'Assinale a frase em que o uso da crase está adequado:',
    options: [
      { id: 'A', text: 'Entregou o documento à ela.' },
      { id: 'B', text: 'Compareceu à reunião no horário marcado.' },
      { id: 'C', text: 'O servidor começou à estudar cedo.' },
      { id: 'D', text: 'Solicitou informações à partir de segunda-feira.' },
      { id: 'E', text: 'Encaminhou o processo à Vossa Excelência.' },
    ], correctAnswer: 'B',
    explanation: 'Há crase em “à reunião”, pois ocorre a preposição “a” exigida por comparecer e o artigo feminino “a”.',
    trap: 'Não há crase antes de pronome pessoal reto, verbo ou “a partir de”.',
    legalBasis: 'Regência e uso do acento indicativo de crase.',
    tags: ['crase', 'regência']
  },
  {
    id: 'q013', subject: 'Língua Portuguesa', topic: 'Concordância', difficulty: 'Fácil',
    statement: 'Assinale a alternativa em que a concordância verbal está correta:',
    options: [
      { id: 'A', text: 'Houveram muitos recursos administrativos.' },
      { id: 'B', text: 'Fazem três anos que o edital foi publicado.' },
      { id: 'C', text: 'Existem documentos pendentes no processo.' },
      { id: 'D', text: 'Segue anexo as certidões solicitadas.' },
      { id: 'E', text: 'Foi analisado as propostas.' },
    ], correctAnswer: 'C',
    explanation: 'O verbo existir é pessoal e concorda com o sujeito: “existem documentos”.',
    trap: '“Haver” no sentido de existir é impessoal: “houve muitos recursos”.',
    legalBasis: 'Concordância verbal.',
    tags: ['concordância', 'verbo existir', 'verbo haver']
  },
  {
    id: 'q014', subject: 'Língua Portuguesa', topic: 'Pontuação', difficulty: 'Média',
    statement: 'A vírgula é obrigatória para isolar:',
    options: [
      { id: 'A', text: 'o sujeito do predicado em ordem direta.' },
      { id: 'B', text: 'o verbo de seu complemento direto.' },
      { id: 'C', text: 'o nome de seu adjunto adnominal restritivo.' },
      { id: 'D', text: 'termo explicativo ou aposto intercalado.' },
      { id: 'E', text: 'a preposição de seu complemento nominal.' },
    ], correctAnswer: 'D',
    explanation: 'Termos explicativos, como apostos e intercalações, devem ser isolados por vírgulas.',
    trap: 'Não se separa sujeito do predicado por vírgula apenas por pausa de leitura.',
    legalBasis: 'Pontuação e sintaxe.',
    tags: ['pontuação', 'vírgula', 'aposto']
  },
  {
    id: 'q015', subject: 'Língua Portuguesa', topic: 'Regência', difficulty: 'Média',
    statement: 'No padrão formal, o verbo “assistir”, no sentido de ver/presenciar, rege:',
    options: [
      { id: 'A', text: 'preposição a.' },
      { id: 'B', text: 'preposição em.' },
      { id: 'C', text: 'preposição com.' },
      { id: 'D', text: 'preposição por.' },
      { id: 'E', text: 'nenhuma preposição obrigatória.' },
    ], correctAnswer: 'A',
    explanation: 'Assistir, no sentido de ver, é transitivo indireto: assistir a algo.',
    trap: 'Na linguagem coloquial aparece “assistir o filme”, mas a norma padrão exige “assistir ao filme”.',
    legalBasis: 'Regência verbal.',
    tags: ['regência', 'assistir']
  },
  {
    id: 'q016', subject: 'Legislação Municipal', topic: 'Competências Municipais', difficulty: 'Média',
    statement: 'Compete ao Município, de acordo com a lógica constitucional de interesse local:',
    options: [
      { id: 'A', text: 'legislar sobre direito penal municipal.' },
      { id: 'B', text: 'organizar forças armadas locais.' },
      { id: 'C', text: 'suplementar a legislação federal e estadual no que couber e legislar sobre assuntos de interesse local.' },
      { id: 'D', text: 'editar moeda municipal.' },
      { id: 'E', text: 'julgar crimes comuns praticados por servidores.' },
    ], correctAnswer: 'C',
    explanation: 'A competência municipal envolve interesse local e suplementação da legislação federal e estadual no que couber.',
    trap: 'Interesse local não dá competência para matéria privativa da União.',
    legalBasis: 'Art. 30 da Constituição Federal.',
    tags: ['município', 'interesse local', 'competência']
  },
  {
    id: 'q017', subject: 'Legislação Municipal', topic: 'Atos Municipais', difficulty: 'Fácil',
    statement: 'No âmbito municipal, decretos do prefeito normalmente servem para:',
    options: [
      { id: 'A', text: 'exercer função administrativa e regulamentar nos limites da lei.' },
      { id: 'B', text: 'alterar a Constituição Federal.' },
      { id: 'C', text: 'criar crimes e penas.' },
      { id: 'D', text: 'revogar lei federal por interesse local.' },
      { id: 'E', text: 'julgar recurso contra decisão judicial.' },
    ], correctAnswer: 'A',
    explanation: 'Decretos regulamentam e executam a lei, não inovam livremente contra a lei.',
    trap: 'Decreto não pode contrariar a lei que pretende regulamentar.',
    legalBasis: 'Princípio da legalidade e poder regulamentar.',
    tags: ['decreto', 'prefeito', 'regulamentação']
  },
  {
    id: 'q018', subject: 'Legislação Municipal', topic: 'Câmara Municipal', difficulty: 'Média',
    statement: 'A Câmara Municipal exerce, entre outras funções:',
    options: [
      { id: 'A', text: 'comando direto da polícia federal.' },
      { id: 'B', text: 'função legislativa e de fiscalização político-administrativa, nos termos legais.' },
      { id: 'C', text: 'chefia direta de secretarias municipais.' },
      { id: 'D', text: 'concessão de sentença judicial em ações civis.' },
      { id: 'E', text: 'administração exclusiva de todos os contratos do Executivo.' },
    ], correctAnswer: 'B',
    explanation: 'A Câmara legisla e fiscaliza o Executivo municipal, respeitando a separação de poderes.',
    trap: 'Fiscalizar não é administrar diretamente o Executivo.',
    legalBasis: 'Lei Orgânica Municipal e Constituição Federal.',
    tags: ['câmara municipal', 'fiscalização', 'legislativo']
  },
  {
    id: 'q019', subject: 'Legislação Municipal', topic: 'Prefeito', difficulty: 'Fácil',
    statement: 'O prefeito, como chefe do Poder Executivo municipal, é responsável principalmente por:',
    options: [
      { id: 'A', text: 'julgar definitivamente processos criminais.' },
      { id: 'B', text: 'legislar sozinho sem participação da Câmara.' },
      { id: 'C', text: 'administrar o Município e executar políticas públicas locais.' },
      { id: 'D', text: 'substituir o Tribunal de Contas.' },
      { id: 'E', text: 'exercer poder constituinte originário.' },
    ], correctAnswer: 'C',
    explanation: 'O prefeito é chefe do Executivo local e conduz a Administração municipal.',
    trap: 'Executivo não concentra função legislativa nem jurisdicional.',
    legalBasis: 'Organização dos Poderes no âmbito municipal.',
    tags: ['prefeito', 'executivo municipal']
  },
  {
    id: 'q020', subject: 'Legislação Municipal', topic: 'Serviços Públicos Locais', difficulty: 'Média',
    statement: 'A prestação de serviços públicos municipais deve observar, entre outros princípios:',
    options: [
      { id: 'A', text: 'sigilo absoluto e ausência de controle.' },
      { id: 'B', text: 'exclusividade privada e gratuidade obrigatória universal.' },
      { id: 'C', text: 'ausência de continuidade.' },
      { id: 'D', text: 'continuidade, eficiência, legalidade e atendimento ao interesse público.' },
      { id: 'E', text: 'preferência pessoal do gestor em detrimento da lei.' },
    ], correctAnswer: 'D',
    explanation: 'Serviços públicos devem observar continuidade, eficiência e legalidade, além do interesse público.',
    trap: 'Serviço público não se administra por preferência pessoal do agente.',
    legalBasis: 'Princípios do serviço público e da Administração.',
    tags: ['serviço público', 'continuidade', 'eficiência']
  },
  {
    id: 'q021', subject: 'Lei Orgânica', topic: 'Organização Municipal', difficulty: 'Fácil',
    statement: 'A Lei Orgânica Municipal é, em linhas gerais:',
    options: [
      { id: 'A', text: 'a norma básica de organização do Município, respeitada a Constituição.' },
      { id: 'B', text: 'um regulamento interno sem força normativa.' },
      { id: 'C', text: 'uma lei federal aplicável apenas à União.' },
      { id: 'D', text: 'um contrato privado da Prefeitura.' },
      { id: 'E', text: 'um ato administrativo individual.' },
    ], correctAnswer: 'A',
    explanation: 'A Lei Orgânica organiza o Município e deve obedecer aos parâmetros constitucionais.',
    trap: 'Lei Orgânica não é Constituição soberana; deve respeitar a Constituição Federal e Estadual.',
    legalBasis: 'Art. 29 da Constituição Federal.',
    tags: ['lei orgânica', 'município']
  },
  {
    id: 'q022', subject: 'Lei Orgânica', topic: 'Processo Legislativo Municipal', difficulty: 'Média',
    statement: 'No processo legislativo municipal, a iniciativa de lei pode ser reservada ao chefe do Executivo em matérias que envolvam, por exemplo:',
    options: [
      { id: 'A', text: 'assuntos penais gerais.' },
      { id: 'B', text: 'organização administrativa e servidores do Executivo, conforme regras constitucionais e orgânicas.' },
      { id: 'C', text: 'alteração da forma federativa.' },
      { id: 'D', text: 'julgamento de recursos judiciais.' },
      { id: 'E', text: 'matérias privativas do Senado Federal.' },
    ], correctAnswer: 'B',
    explanation: 'Há matérias de iniciativa reservada do Executivo, especialmente relacionadas à sua organização e regime jurídico de servidores.',
    trap: 'Vereador não pode invadir iniciativa reservada do prefeito.',
    legalBasis: 'Separação de poderes, simetria constitucional e Lei Orgânica.',
    tags: ['iniciativa', 'processo legislativo', 'lei orgânica']
  },
  {
    id: 'q023', subject: 'Lei Orgânica', topic: 'Controle Municipal', difficulty: 'Média',
    statement: 'O controle da Administração municipal envolve controles interno e externo. O controle externo é exercido, em regra, pelo:',
    options: [
      { id: 'A', text: 'chefe do setor de compras exclusivamente.' },
      { id: 'B', text: 'prefeito sem participação de outros órgãos.' },
      { id: 'C', text: 'Poder Legislativo municipal, com auxílio do Tribunal de Contas competente.' },
      { id: 'D', text: 'fornecedor contratado.' },
      { id: 'E', text: 'cartório local.' },
    ], correctAnswer: 'C',
    explanation: 'A Câmara exerce o controle externo com auxílio do Tribunal de Contas competente.',
    trap: 'Controle interno e externo não são a mesma coisa.',
    legalBasis: 'Constituição Federal e Lei Orgânica Municipal.',
    tags: ['controle externo', 'tribunal de contas', 'câmara']
  },
  {
    id: 'q024', subject: 'Lei Orgânica', topic: 'Administração Municipal', difficulty: 'Fácil',
    statement: 'A Administração Pública municipal deve observar:',
    options: [
      { id: 'A', text: 'apenas costumes políticos locais.' },
      { id: 'B', text: 'legalidade, impessoalidade, moralidade, publicidade, eficiência e demais princípios aplicáveis.' },
      { id: 'C', text: 'sigilo como regra absoluta.' },
      { id: 'D', text: 'preferência familiar nas contratações.' },
      { id: 'E', text: 'ausência de motivação nos atos administrativos.' },
    ], correctAnswer: 'B',
    explanation: 'O Município também se submete aos princípios constitucionais da Administração Pública.',
    trap: 'A Administração local não está fora do art. 37 da Constituição.',
    legalBasis: 'Art. 37 da Constituição Federal e Lei Orgânica.',
    tags: ['administração municipal', 'princípios']
  },
  {
    id: 'q025', subject: 'Lei Orgânica', topic: 'Competência da Câmara', difficulty: 'Média',
    statement: 'A fiscalização do Executivo pela Câmara Municipal deve ocorrer:',
    options: [
      { id: 'A', text: 'somente por opinião informal em rede social.' },
      { id: 'B', text: 'mediante instrumentos previstos em lei, respeitada a separação dos poderes.' },
      { id: 'C', text: 'com substituição integral do prefeito pelos vereadores.' },
      { id: 'D', text: 'apenas após autorização do governo federal.' },
      { id: 'E', text: 'sem qualquer limite jurídico.' },
    ], correctAnswer: 'B',
    explanation: 'A Câmara fiscaliza, mas deve usar instrumentos legais e respeitar as competências do Executivo.',
    trap: 'Fiscalização não é gestão direta do Executivo.',
    legalBasis: 'Lei Orgânica e separação de poderes.',
    tags: ['câmara', 'fiscalização', 'separação dos poderes']
  },
  {
    id: 'q026', subject: 'Raciocínio Lógico', topic: 'Proposições', difficulty: 'Fácil',
    statement: 'A negação da proposição “Todo servidor é estável” é:',
    options: [
      { id: 'A', text: 'Nenhum servidor é estável.' },
      { id: 'B', text: 'Todo servidor não é estável.' },
      { id: 'C', text: 'Algum servidor não é estável.' },
      { id: 'D', text: 'Algum servidor é estável.' },
      { id: 'E', text: 'Todo estável é servidor.' },
    ], correctAnswer: 'C',
    explanation: 'A negação de “todo A é B” é “algum A não é B”.',
    trap: 'Não negue universal com outro universal; use particular negativa.',
    legalBasis: 'Lógica de quantificadores.',
    tags: ['negação', 'quantificadores']
  },
  {
    id: 'q027', subject: 'Raciocínio Lógico', topic: 'Sequências', difficulty: 'Fácil',
    statement: 'Na sequência 2, 4, 8, 16, 32, o próximo termo é:',
    options: [
      { id: 'A', text: '34' },
      { id: 'B', text: '48' },
      { id: 'C', text: '60' },
      { id: 'D', text: '64' },
      { id: 'E', text: '72' },
    ], correctAnswer: 'D',
    explanation: 'A sequência dobra a cada termo: 32 × 2 = 64.',
    trap: 'Não é soma constante; é progressão geométrica.',
    legalBasis: 'Sequências numéricas.',
    tags: ['sequência', 'progressão geométrica']
  },
  {
    id: 'q028', subject: 'Raciocínio Lógico', topic: 'Porcentagem', difficulty: 'Média',
    statement: 'Um candidato acertou 36 questões de uma prova com 60 questões. A taxa de acerto foi:',
    options: [
      { id: 'A', text: '40%' },
      { id: 'B', text: '50%' },
      { id: 'C', text: '55%' },
      { id: 'D', text: '58%' },
      { id: 'E', text: '60%' },
    ], correctAnswer: 'E',
    explanation: '36/60 = 0,6 = 60%.',
    trap: 'Calcule a razão antes de escolher alternativa aproximada.',
    legalBasis: 'Porcentagem.',
    tags: ['porcentagem', 'taxa de acerto']
  },
  {
    id: 'q029', subject: 'Raciocínio Lógico', topic: 'Conectivos', difficulty: 'Média',
    statement: 'A proposição “Se estudo, então avanço” é falsa apenas quando:',
    options: [
      { id: 'A', text: 'estudo e avanço.' },
      { id: 'B', text: 'não estudo e avanço.' },
      { id: 'C', text: 'não estudo e não avanço.' },
      { id: 'D', text: 'estudo e não avanço.' },
      { id: 'E', text: 'avanço independentemente de estudar.' },
    ], correctAnswer: 'D',
    explanation: 'O condicional P → Q só é falso quando P é verdadeiro e Q é falso.',
    trap: 'Não confunda condicional com bicondicional.',
    legalBasis: 'Tabela-verdade do condicional.',
    tags: ['condicional', 'lógica proposicional']
  },
  {
    id: 'q030', subject: 'Raciocínio Lógico', topic: 'Conjuntos', difficulty: 'Média',
    statement: 'Em uma turma, 20 estudam Administrativo, 15 estudam Constitucional e 5 estudam ambos. O total que estuda ao menos uma dessas matérias é:',
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '25' },
      { id: 'C', text: '30' },
      { id: 'D', text: '35' },
      { id: 'E', text: '40' },
    ], correctAnswer: 'C',
    explanation: 'Use inclusão-exclusão: 20 + 15 - 5 = 30.',
    trap: 'Não some os dois grupos sem retirar a interseção.',
    legalBasis: 'Operações com conjuntos.',
    tags: ['conjuntos', 'inclusão-exclusão']
  },
  {
    id: 'q031', subject: 'Informática', topic: 'Segurança da Informação', difficulty: 'Fácil',
    statement: 'Phishing é uma prática relacionada a:',
    options: [
      { id: 'A', text: 'tentativa de enganar o usuário para obter dados sensíveis.' },
      { id: 'B', text: 'aumento físico de memória RAM.' },
      { id: 'C', text: 'compressão de arquivos de imagem.' },
      { id: 'D', text: 'impressão frente e verso.' },
      { id: 'E', text: 'manutenção preventiva do teclado.' },
    ], correctAnswer: 'A',
    explanation: 'Phishing tenta induzir a vítima a fornecer senhas, dados bancários ou credenciais.',
    trap: 'A aparência legítima da mensagem é parte do golpe.',
    legalBasis: 'Noções de segurança da informação.',
    tags: ['phishing', 'segurança']
  },
  {
    id: 'q032', subject: 'Informática', topic: 'Navegadores', difficulty: 'Fácil',
    statement: 'O cache do navegador armazena temporariamente dados para:',
    options: [
      { id: 'A', text: 'destruir cookies automaticamente.' },
      { id: 'B', text: 'melhorar carregamento de páginas acessadas anteriormente.' },
      { id: 'C', text: 'substituir o antivírus.' },
      { id: 'D', text: 'criptografar o disco inteiro.' },
      { id: 'E', text: 'impedir qualquer rastreamento por padrão absoluto.' },
    ], correctAnswer: 'B',
    explanation: 'Cache guarda recursos como scripts, imagens e estilos para acelerar carregamentos futuros.',
    trap: 'Cache não é a mesma coisa que cookies, embora ambos sejam dados locais do navegador.',
    legalBasis: 'Conceitos de navegação web.',
    tags: ['cache', 'navegador']
  },
  {
    id: 'q033', subject: 'Informática', topic: 'Planilhas', difficulty: 'Média',
    statement: 'Em uma planilha, a fórmula =SOMA(A1:A5) serve para:',
    options: [
      { id: 'A', text: 'contar células vazias entre A1 e A5.' },
      { id: 'B', text: 'ordenar os valores de A1 a A5.' },
      { id: 'C', text: 'somar os valores do intervalo A1 até A5.' },
      { id: 'D', text: 'multiplicar os valores de A1 e A5 apenas.' },
      { id: 'E', text: 'converter texto em número romano.' },
    ], correctAnswer: 'C',
    explanation: 'SOMA(A1:A5) soma todos os valores numéricos dentro do intervalo.',
    trap: 'Dois-pontos indicam intervalo contínuo.',
    legalBasis: 'Funções básicas de planilhas.',
    tags: ['planilhas', 'soma', 'intervalo']
  },
  {
    id: 'q034', subject: 'Informática', topic: 'Sistemas Operacionais', difficulty: 'Fácil',
    statement: 'Um sistema operacional tem como função principal:',
    options: [
      { id: 'A', text: 'substituir todos os aplicativos de escritório.' },
      { id: 'B', text: 'gerenciar recursos do computador e permitir a interação com hardware e software.' },
      { id: 'C', text: 'criar leis municipais.' },
      { id: 'D', text: 'funcionar apenas como navegador de internet.' },
      { id: 'E', text: 'eliminar necessidade de armazenamento.' },
    ], correctAnswer: 'B',
    explanation: 'O sistema operacional gerencia memória, processos, arquivos, dispositivos e interface com o usuário.',
    trap: 'Sistema operacional não é sinônimo de pacote Office.',
    legalBasis: 'Conceitos básicos de sistemas operacionais.',
    tags: ['sistema operacional', 'hardware', 'software']
  },
  {
    id: 'q035', subject: 'Informática', topic: 'Backup', difficulty: 'Média',
    statement: 'A realização de backup periódico é importante porque:',
    options: [
      { id: 'A', text: 'garante aumento automático da velocidade da internet.' },
      { id: 'B', text: 'substitui a necessidade de senhas.' },
      { id: 'C', text: 'impede qualquer ataque cibernético.' },
      { id: 'D', text: 'permite recuperar dados em caso de perda, falha ou exclusão indevida.' },
      { id: 'E', text: 'elimina todos os vírus existentes no computador.' },
    ], correctAnswer: 'D',
    explanation: 'Backup é cópia de segurança que permite restaurar dados quando há perda ou corrupção.',
    trap: 'Backup não substitui antivírus nem boas práticas de segurança.',
    legalBasis: 'Segurança da informação e continuidade.',
    tags: ['backup', 'segurança', 'recuperação']
  },
  {
    id: 'q036', subject: 'Conhecimentos Gerais', topic: 'Atualidades e Cidadania', difficulty: 'Fácil',
    statement: 'A cidadania em um Estado Democrático de Direito envolve:',
    options: [
      { id: 'A', text: 'apenas votar, sem outros direitos ou deveres.' },
      { id: 'B', text: 'participação social, direitos, deveres e respeito às instituições democráticas.' },
      { id: 'C', text: 'dispensa de cumprimento das leis.' },
      { id: 'D', text: 'privilégio exclusivo de agentes públicos.' },
      { id: 'E', text: 'ausência de controle popular.' },
    ], correctAnswer: 'B',
    explanation: 'Cidadania é participação na vida pública e exercício de direitos e deveres.',
    trap: 'Não reduza cidadania ao ato de votar.',
    legalBasis: 'Fundamentos do Estado Democrático e noções de cidadania.',
    tags: ['cidadania', 'democracia']
  },
  {
    id: 'q037', subject: 'Conhecimentos Gerais', topic: 'Meio Ambiente', difficulty: 'Média',
    statement: 'O desenvolvimento sustentável busca conciliar:',
    options: [
      { id: 'A', text: 'crescimento econômico, proteção ambiental e justiça social.' },
      { id: 'B', text: 'crescimento econômico com eliminação total de controle ambiental.' },
      { id: 'C', text: 'apenas lucro privado imediato.' },
      { id: 'D', text: 'uso ilimitado de recursos naturais.' },
      { id: 'E', text: 'exclusão da participação social.' },
    ], correctAnswer: 'A',
    explanation: 'Sustentabilidade envolve equilíbrio entre dimensões econômica, ambiental e social.',
    trap: 'Não é sinônimo de impedir todo desenvolvimento, mas de desenvolvê-lo de forma responsável.',
    legalBasis: 'Noções de sustentabilidade e políticas públicas.',
    tags: ['sustentabilidade', 'meio ambiente']
  },
  {
    id: 'q038', subject: 'Conhecimentos Gerais', topic: 'Ética no Serviço Público', difficulty: 'Fácil',
    statement: 'A ética no serviço público exige que o agente público:',
    options: [
      { id: 'A', text: 'priorize interesses pessoais em situações urgentes.' },
      { id: 'B', text: 'trate informações públicas como patrimônio privado.' },
      { id: 'C', text: 'atue com honestidade, respeito ao interesse público e responsabilidade.' },
      { id: 'D', text: 'ignore regras administrativas quando discordar delas.' },
      { id: 'E', text: 'favoreça conhecidos para agilizar processos.' },
    ], correctAnswer: 'C',
    explanation: 'Ética pública envolve integridade, impessoalidade, responsabilidade e compromisso com o interesse público.',
    trap: 'Agilidade não justifica favorecimento pessoal.',
    legalBasis: 'Princípios da Administração Pública e ética pública.',
    tags: ['ética', 'serviço público']
  },
  {
    id: 'q039', subject: 'Conhecimentos Gerais', topic: 'Políticas Públicas', difficulty: 'Média',
    statement: 'Uma política pública pode ser entendida como:',
    options: [
      { id: 'A', text: 'qualquer opinião pessoal de um agente público.' },
      { id: 'B', text: 'ação ou programa estatal voltado ao enfrentamento de problema público.' },
      { id: 'C', text: 'ato privado sem impacto coletivo.' },
      { id: 'D', text: 'atividade sem planejamento, orçamento ou avaliação.' },
      { id: 'E', text: 'decisão exclusiva de empresas privadas.' },
    ], correctAnswer: 'B',
    explanation: 'Política pública é resposta organizada do Estado a problemas coletivos, com objetivos, instrumentos e avaliação.',
    trap: 'Não confunda política pública com promessa genérica ou opinião individual.',
    legalBasis: 'Noções de políticas públicas e administração.',
    tags: ['políticas públicas', 'estado']
  },
  {
    id: 'q040', subject: 'Conhecimentos Gerais', topic: 'Transparência', difficulty: 'Média',
    statement: 'A transparência na Administração Pública contribui para:',
    options: [
      { id: 'A', text: 'controle social e prevenção de irregularidades.' },
      { id: 'B', text: 'sigilo absoluto de todos os atos.' },
      { id: 'C', text: 'impossibilidade de fiscalização.' },
      { id: 'D', text: 'fim da publicidade administrativa.' },
      { id: 'E', text: 'dispensa de prestação de contas.' },
    ], correctAnswer: 'A',
    explanation: 'Transparência permite acompanhamento pela sociedade e fortalece o controle da Administração.',
    trap: 'Publicidade é regra, mas existem hipóteses legais de sigilo; não é tudo público nem tudo secreto.',
    legalBasis: 'Princípio da publicidade e Lei de Acesso à Informação como referência.',
    tags: ['transparência', 'controle social', 'publicidade']
  }
];

export const questions = [...baseQuestions, ...editalQuestions, ...localLawQuestions];

export const questionSubjects = [...new Set(questions.map((question) => question.subject))];
export const questionDifficulties = ['Fácil', 'Média', 'Difícil'];


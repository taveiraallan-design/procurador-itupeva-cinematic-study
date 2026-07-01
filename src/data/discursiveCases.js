export const discursiveCaseBank = [
  {
    id: 'parecer-ato-administrativo-001',
    type: 'Parecer jurídico',
    subject: 'Direito Administrativo',
    difficulty: 'Alta',
    estimatedMinutes: 60,
    title: 'Anulação, convalidação ou revogação de ato municipal',
    situation:
      'A Secretaria Municipal informou que determinado ato autorizativo foi praticado por agente sem competência expressa. O ato já produziu efeitos e há dúvida se deve ser mantido, convalidado, anulado ou revogado.',
    command:
      'Na qualidade de Procurador Municipal, elabore parecer objetivo indicando a providência jurídica adequada, abordando requisitos do ato, autotutela, vício de competência, convalidação, anulação, revogação e proteção ao interesse público.',
    expectedStructure: [
      'Relatório sintético dos fatos',
      'Identificação da questão jurídica',
      'Análise dos requisitos do ato administrativo',
      'Distinção entre anulação, revogação e convalidação',
      'Conclusão com providência recomendada',
    ],
    mandatoryPoints: [
      'Competência é requisito de validade do ato administrativo.',
      'Ato ilegal deve ser anulado, não revogado.',
      'Convalidação só é possível para vício sanável e sem prejuízo ao interesse público ou a terceiros.',
      'Autotutela permite à Administração rever seus próprios atos.',
      'Revogação envolve mérito administrativo: conveniência e oportunidade de ato válido.',
    ],
    legalHooks: ['Súmula 473/STF', 'legalidade', 'autotutela', 'segurança jurídica', 'motivação'],
    traps: [
      'Confundir ilegalidade com mérito administrativo.',
      'Dizer que o Judiciário revoga ato administrativo.',
      'Convalidar vício insanável sem examinar prejuízo.',
    ],
    modelAnswer:
      'O parecer deve reconhecer que a competência integra os requisitos de validade do ato. Confirmada a incompetência, deve-se verificar se o vício é sanável e se a convalidação preserva o interesse público sem prejuízo a terceiros. Caso o vício seja insanável ou haja prejuízo, a providência adequada é a anulação motivada, com observância da segurança jurídica. A revogação não é via adequada para corrigir ilegalidade, pois se limita ao juízo de conveniência e oportunidade sobre ato válido.',
  },
  {
    id: 'parecer-licitacao-002',
    type: 'Parecer jurídico',
    subject: 'Licitações',
    difficulty: 'Alta',
    estimatedMinutes: 70,
    title: 'Contratação direta e risco de dispensa indevida',
    situation:
      'A Administração pretende contratar serviço técnico alegando urgência e ausência de tempo para licitação. O processo contém justificativa genérica, pesquisa de preços insuficiente e dúvida sobre dispensa ou inexigibilidade.',
    command:
      'Elabore parecer apontando os cuidados jurídicos para contratação direta, diferenciando dispensa e inexigibilidade, indicando riscos e diligências necessárias.',
    expectedStructure: [
      'Síntese da demanda administrativa',
      'Enquadramento jurídico da contratação direta',
      'Diferença entre dispensa e inexigibilidade',
      'Exigências de motivação, pesquisa de preços e justificativa',
      'Conclusão: aprovar com ressalvas, diligenciar ou não aprovar',
    ],
    mandatoryPoints: [
      'Contratação direta não significa contratação livre.',
      'Dispensa depende de hipótese legal autorizadora.',
      'Inexigibilidade exige inviabilidade de competição.',
      'É indispensável motivação adequada e demonstração do preço compatível.',
      'A urgência não pode decorrer de desídia administrativa sem análise crítica.',
    ],
    legalHooks: ['Lei 14.133/2021', 'planejamento', 'motivação', 'interesse público', 'economicidade'],
    traps: [
      'Tratar dispensa e inexigibilidade como sinônimos.',
      'Aceitar justificativa genérica como suficiente.',
      'Ignorar planejamento e pesquisa de preços.',
    ],
    modelAnswer:
      'O parecer deve demonstrar que a contratação direta exige motivação robusta, enquadramento legal preciso, justificativa de preço e demonstração da vantajosidade. Dispensa e inexigibilidade possuem fundamentos distintos: na dispensa, a competição é possível, mas a lei autoriza afastá-la; na inexigibilidade, há inviabilidade de competição. Diante de justificativa genérica e pesquisa insuficiente, a solução adequada é recomendar diligências antes de eventual aprovação.',
  },
  {
    id: 'contestacao-responsabilidade-003',
    type: 'Tese defensiva',
    subject: 'Responsabilidade Civil do Estado',
    difficulty: 'Média',
    estimatedMinutes: 55,
    title: 'Defesa do Município em ação indenizatória',
    situation:
      'Cidadão ajuizou ação contra o Município alegando dano por falha de serviço público. A inicial descreve prejuízo, mas não comprova nexo causal direto com conduta estatal.',
    command:
      'Monte tese defensiva para o Município, abordando responsabilidade civil, dano, nexo causal, excludentes e direito de regresso.',
    expectedStructure: [
      'Resumo da pretensão do autor',
      'Elementos da responsabilidade civil estatal',
      'Impugnação ao dano e ao nexo causal',
      'Excludentes ou atenuantes',
      'Conclusão defensiva',
    ],
    mandatoryPoints: [
      'Responsabilidade objetiva não é responsabilidade automática.',
      'São necessários conduta, dano e nexo causal.',
      'Culpa exclusiva da vítima pode romper o nexo.',
      'Caso fortuito, força maior ou fato de terceiro podem afastar responsabilidade, conforme o caso.',
      'Direito de regresso contra agente exige dolo ou culpa.',
    ],
    legalHooks: ['art. 37, §6º, CF', 'dano', 'nexo causal', 'excludentes', 'regresso'],
    traps: [
      'Afirmar que o Município sempre indeniza por qualquer dano.',
      'Esquecer de discutir nexo causal.',
      'Confundir responsabilidade objetiva com dispensa de prova do dano.',
    ],
    modelAnswer:
      'A defesa deve sustentar que a responsabilidade objetiva exige prova de conduta estatal, dano e nexo causal. Se a inicial não demonstra vínculo direto entre o serviço público e o prejuízo, há fragilidade na pretensão indenizatória. Devem ser examinadas excludentes como culpa exclusiva da vítima, fato de terceiro ou caso fortuito, sem prejuízo de eventual regresso apenas se demonstrado dolo ou culpa do agente público.',
  },
  {
    id: 'parecer-lei-organica-004',
    type: 'Parecer legislativo',
    subject: 'Legislação Municipal',
    difficulty: 'Média',
    estimatedMinutes: 60,
    title: 'Projeto de lei municipal e vício de iniciativa',
    situation:
      'Projeto de lei de iniciativa parlamentar cria obrigações administrativas para o Executivo e impacta a organização interna de secretaria municipal. Há dúvida sobre constitucionalidade e compatibilidade com a Lei Orgânica.',
    command:
      'Elabore parecer sobre autonomia municipal, interesse local, iniciativa legislativa, separação de poderes e risco de vício formal.',
    expectedStructure: [
      'Delimitação do objeto do projeto',
      'Competência municipal e interesse local',
      'Análise da iniciativa legislativa',
      'Separação de poderes e organização administrativa',
      'Conclusão sobre risco jurídico',
    ],
    mandatoryPoints: [
      'Município possui autonomia, mas não soberania.',
      'Interesse local não permite violar normas constitucionais.',
      'Matérias de organização administrativa podem ter iniciativa reservada ao Executivo.',
      'Vício de iniciativa pode gerar inconstitucionalidade formal.',
      'A Lei Orgânica deve ser lida em harmonia com a Constituição.',
    ],
    legalHooks: ['autonomia municipal', 'interesse local', 'separação de poderes', 'Lei Orgânica', 'vício de iniciativa'],
    traps: [
      'Confundir autonomia municipal com competência ilimitada.',
      'Ignorar iniciativa reservada.',
      'Analisar apenas mérito político do projeto.',
    ],
    modelAnswer:
      'O parecer deve reconhecer a autonomia municipal para legislar sobre interesse local, mas ressalvar que tal competência se submete à Constituição e à Lei Orgânica. Se o projeto de iniciativa parlamentar interfere na organização administrativa ou cria atribuições para órgãos do Executivo, há risco de vício formal de iniciativa e violação à separação de poderes, recomendando ajuste ou não prosseguimento nos termos propostos.',
  },
  {
    id: 'parecer-tributario-005',
    type: 'Parecer jurídico',
    subject: 'Direito Tributário e Municipal',
    difficulty: 'Alta',
    estimatedMinutes: 70,
    title: 'Inscrição em dívida ativa e execução fiscal municipal',
    situation:
      'Setor de arrecadação encaminha crédito municipal para inscrição em dívida ativa. Há questionamento sobre lançamento, certeza, liquidez, notificação do contribuinte e viabilidade da cobrança judicial.',
    command:
      'Elabore parecer sobre requisitos da inscrição em dívida ativa, CDA, garantias do contribuinte, cobrança e cautelas antes da execução fiscal.',
    expectedStructure: [
      'Histórico do crédito municipal',
      'Lançamento e constituição do crédito',
      'Requisitos da dívida ativa e da CDA',
      'Garantias do contribuinte e possíveis defesas',
      'Conclusão sobre cobrança',
    ],
    mandatoryPoints: [
      'A cobrança pressupõe crédito regularmente constituído.',
      'A CDA deve refletir certeza, liquidez e exigibilidade.',
      'O contribuinte pode discutir vícios e garantias processuais.',
      'A execução fiscal exige cautela quanto à prescrição e regularidade formal.',
      'A Procuradoria deve avaliar custo-benefício e legalidade da cobrança.',
    ],
    legalHooks: ['CTN', 'Lei de Execuções Fiscais', 'dívida ativa', 'CDA', 'prescrição'],
    traps: [
      'Afirmar que a inscrição em dívida ativa impede toda defesa.',
      'Ignorar prescrição.',
      'Confundir lançamento com inscrição em dívida ativa.',
    ],
    modelAnswer:
      'O parecer deve verificar se o crédito foi regularmente lançado e se houve observância das garantias do contribuinte. A inscrição em dívida ativa deve gerar título dotado de certeza, liquidez e exigibilidade, mas não elimina a possibilidade de discussão de vícios. Antes da execução fiscal, devem ser conferidos prescrição, regularidade da CDA, notificação e interesse público na cobrança.',
  },
  {
    id: 'parecer-ambiental-urbanistico-006',
    type: 'Parecer jurídico',
    subject: 'Direito Urbanístico e Ambiental',
    difficulty: 'Média',
    estimatedMinutes: 65,
    title: 'Embargo municipal por obra irregular e dano ambiental',
    situation:
      'Fiscalização municipal constatou obra sem autorização em área sensível, com indícios de supressão irregular de vegetação e risco urbanístico. O interessado pede suspensão do embargo.',
    command:
      'Elabore parecer sobre poder de polícia municipal, proteção ambiental, urbanismo, contraditório, proporcionalidade e manutenção ou revisão do embargo.',
    expectedStructure: [
      'Relato da fiscalização',
      'Poder de polícia municipal',
      'Análise urbanística e ambiental',
      'Contraditório, motivação e proporcionalidade',
      'Conclusão administrativa',
    ],
    mandatoryPoints: [
      'Município pode exercer poder de polícia urbanístico e ambiental nos limites de sua competência.',
      'Embargo exige motivação e suporte fático.',
      'Proteção ambiental e ordenação urbana são interesses públicos relevantes.',
      'Contraditório pode ser diferido em situações urgentes, conforme o caso.',
      'Medida deve ser proporcional e revisável se cessarem os fundamentos.',
    ],
    legalHooks: ['poder de polícia', 'meio ambiente', 'urbanismo', 'motivação', 'proporcionalidade'],
    traps: [
      'Dizer que Município não atua em matéria ambiental.',
      'Ignorar motivação do ato de embargo.',
      'Tratar poder de polícia como sanção automática sem processo.',
    ],
    modelAnswer:
      'O parecer deve fundamentar o poder de polícia municipal para tutela urbanística e ambiental, desde que o ato seja motivado e proporcional. Havendo risco à ordem urbana ou ao meio ambiente, o embargo pode ser mantido preventivamente, sem afastar a necessidade de garantir contraditório e análise posterior. A suspensão depende da regularização e da inexistência de risco remanescente.',
  }
];

export const discursiveRubric = [
  { id: 'structure', label: 'Estrutura: relatório, fundamentação e conclusão', weight: 15 },
  { id: 'issue', label: 'Delimitação correta do problema jurídico', weight: 15 },
  { id: 'law', label: 'Fundamentação normativa e principiológica', weight: 20 },
  { id: 'application', label: 'Aplicação dos fundamentos ao caso concreto', weight: 20 },
  { id: 'traps', label: 'Evita pegadinhas e distinções clássicas', weight: 15 },
  { id: 'conclusion', label: 'Conclusão objetiva e providência prática', weight: 15 },
];

export const pieceTemplates = [
  {
    id: 'parecer-juridico',
    title: 'Modelo de Parecer Jurídico',
    purpose: 'Manifestação técnica consultiva para orientar decisão administrativa.',
    sections: [
      'Ementa ou assunto',
      'Relatório dos fatos relevantes',
      'Questões jurídicas submetidas à análise',
      'Fundamentação jurídica',
      'Análise do caso concreto',
      'Conclusão e providência recomendada',
    ],
    attention: ['não decidir politicamente', 'fundamentar cautelas', 'apontar diligências se faltarem dados'],
  },
  {
    id: 'contestacao',
    title: 'Esqueleto de Contestação/Tese Defensiva',
    purpose: 'Organizar defesa do Município em ação judicial.',
    sections: [
      'Síntese da demanda',
      'Preliminares cabíveis',
      'Impugnação específica dos fatos',
      'Fundamentos jurídicos da defesa',
      'Provas e pedidos',
      'Conclusão',
    ],
    attention: ['impugnar nexo causal', 'não esquecer prescrição/legitimidade', 'pedidos claros ao final'],
  },
  {
    id: 'informacao-tecnica',
    title: 'Informação Jurídica Administrativa',
    purpose: 'Resposta objetiva para secretaria, comissão ou chefia administrativa.',
    sections: [
      'Demanda recebida',
      'Dados ainda pendentes',
      'Regra jurídica aplicável',
      'Riscos administrativos',
      'Encaminhamento recomendado',
    ],
    attention: ['linguagem direta', 'indicar documentos faltantes', 'evitar conclusão sem prova'],
  }
];

# Fase 43 — Apostila Teórica Completa por Tema

Esta fase reformula a experiência da aba Apostila para mostrar primeiro uma aula teórica em texto corrido, com explicação didática, exemplos e aplicação prática, antes dos blocos de revisão.

## O que foi adicionado

- Novo arquivo `src/data/theoreticalApostila.js` com aulas teóricas completas geradas por tópico/matéria.
- Novo bloco `TheoreticalLessonBlock` na aba Apostila.
- A seção de aula teórica aparece antes dos quadros mecânicos de revisão.
- CSS responsivo para leitura em MacBook e celular.
- Exemplos específicos aprofundados para:
  - Pontuação e vírgula;
  - Interpretação de texto;
  - Ato administrativo;
  - Competência municipal;
  - Crédito tributário municipal.
- Todos os demais tópicos recebem aula teórica integrada ao conteúdo existente.

## Resultado esperado

Ao abrir qualquer tópico da Apostila, o aluno primeiro verá uma aula teórica principal em texto corrido. Depois aparecem quadros de atenção, como cai na prova, mini questão comentada, complementos de revisão, checklist e visualização.

## Build

Build executado com sucesso usando `npm run build`.

# Procurador Itupeva Cinematic Study

## Versão fechada — Fase 35

App premium concluído em 35 fases, com Dashboard, Mentor, Sprint Final, Véspera, Questões, Simulados, Discursivas, Revisão, Flashcards, Lei Seca, Mapas Mentais, Linha do Tempo, Oral Jurídico, Modo Banca, Ranking, Revisão Rápida, Offline/Exportar e auditoria final.
 — Fase 5

App React + Vite premium para estudos do Concurso de Procurador de Itupeva 2026.

## Fase 5 incluída

- Base premium com navegação completa.
- Simulador Jurídico Cinemático com cenas e modo prova.
- Banco de Questões Inteligente com 40 questões locais.
- Filtros por matéria, tópico e dificuldade.
- Modo treino e modo só erros.
- Feedback imediato, explicação, fundamento e pegadinha da banca.
- Histórico, acertos, erros, questões marcadas e integração com Dashboard.

## Como rodar

```bash
npm install
npm run dev
```

Abra:

```txt
http://127.0.0.1:5176
```

## Build

```bash
npm run build
```

## Observações

O app não usa backend, não usa API externa e salva progresso no `localStorage`.

## Fase 11 — Matérias e Trilhas por Disciplina

A aba **Matérias** agora funciona como um mapa real de disciplinas, com domínio, cobertura, acerto, revisões pendentes, tópicos críticos, checklist por matéria, fixação de disciplinas e atalhos para Questões, Revisão, Flashcards, Simulados e Simulador Jurídico.

## Fases 14 e 15 — Edital Oficial + Banco Ampliado

Adicionado:

- nova aba **Edital** com conteúdo programático oficial estruturado;
- cronograma crítico do Concurso Público nº 003/2026;
- matriz de cobrança por prioridade;
- checklist de tópicos do edital com progresso salvo no navegador;
- banco de questões ampliado com novos assuntos jurídicos do edital;
- integração da aba Edital com Questões, Plano, Simulados, Revisão e Flashcards.

Comando único:

```bash
cd ~/Downloads && unzip -o procurador-itupeva-cinematic-study-fase15.zip && cd procurador-itupeva-cinematic-study && npm install --no-audit --no-fund && npm run dev -- --host 127.0.0.1 --port 5176
```

## Fases 16 e 17

### Fase 16 — Lei Local e Legislação Municipal Profunda
- Adiciona mapa de cobrança da legislação municipal.
- Amplia o banco de questões com foco em Lei Orgânica, competências municipais, servidores, tributação municipal, dívida ativa e poder de polícia municipal.
- Integra a seção de lei local na aba Edital.

### Fase 17 — Simulados no Formato do Edital
- Adiciona simulado por matriz do edital.
- Adiciona bloco específico de Lei Local.
- Adiciona treino discursivo com situação-problema, comando, texto livre e espelho de autoavaliação.


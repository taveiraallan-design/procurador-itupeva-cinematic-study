# Fase 35.3 — Execução Automática do Processo Inteiro

## Objetivo
Transformar o botão do Simulador Jurídico de execução isolada da etapa atual para execução automática de todas as etapas restantes do processo.

## Alterações
- Botão principal alterado para **Executar processo inteiro**.
- O simulador percorre automaticamente todas as etapas restantes.
- Cada etapa é marcada como visitada no mapa do processo.
- A timeline registra a evolução automática.
- O botão vira **Pausar execução** durante a animação.
- Ao final, o app mostra relatório de processo concluído.
- Ações manuais como voltar, continuar, trocar tema, reiniciar ou modo prova interrompem a execução automática.

## Arquivos alterados
- `src/pages/CinematicSimulatorPage.jsx`
- `src/components/simulator/SceneStage.jsx`

## Build
Build validado com `npm run build`.

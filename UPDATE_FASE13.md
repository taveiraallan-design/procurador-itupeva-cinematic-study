# Fase 13 — Configurações, Backup e Reset Seguro

Esta fase transforma a aba Configurações em uma central real de segurança do progresso.

## Incluído

- Exportação de backup em JSON.
- Importação validada de backup.
- Reset total seguro.
- Reset por módulo: Questões, Simulados, Revisão, Flashcards, Plano, Matérias e Navegação.
- Diagnóstico local de dados salvos.
- Mapa de áreas do localStorage.
- Indicador de saúde dos dados.
- Versão do app atualizada.

## Como testar

1. Abrir Configurações.
2. Clicar em Exportar backup.
3. Confirmar que um arquivo JSON foi baixado.
4. Importar esse JSON.
5. Confirmar a restauração.
6. Rodar diagnóstico.
7. Limpar apenas uma área, como Flashcards ou Simulados.
8. Conferir que o restante do app continua funcionando.

## Segurança

Todos os dados continuam locais no navegador. Para trocar de Mac ou navegador, exporte o backup e importe no novo ambiente.

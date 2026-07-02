# Fase 44.1 — Hotfix anti-quebra vertical dos selos da aula premium

## Problema corrigido
Na aula premium da Apostila, os selos/títulos das seções, como "Introdução didática do tema", podiam encolher dentro do cabeçalho flex e quebrar letra por letra, ficando na vertical.

## Tratativa aplicada
- O cabeçalho `.fase44-section-head` foi convertido para grid com duas colunas: número fixo + título flexível.
- O número da etapa recebeu largura fixa e não encolhe.
- O badge da seção recebeu largura útil, quebra apenas por palavra, sem `word-break` agressivo.
- Foi adicionado ajuste responsivo para telas menores.

## Regra preventiva
Em componentes de aula/cardeamento premium, badges com texto longo não devem ficar em containers flexíveis sem `min-width`, `flex-shrink` controlado ou grid. Isso evita a quebra vertical de letras.

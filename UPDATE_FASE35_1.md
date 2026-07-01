# Fase 35.1 — Hotfix Responsivo Mobile do Simulador Cinemático

Correções aplicadas:

- Simulador Jurídico deixa de usar 3 colunas espremidas em telas menores.
- Mapa do processo vira carrossel horizontal em tablet/celular.
- Painel de inteligência de prova desce para baixo em vez de esmagar a cena.
- Navegação lateral vira barra horizontal rolável em telas menores.
- Cena principal reduz tamanho e altura no celular.
- Botões ficam em largura total no mobile.
- Textos longos deixam de estourar layout.
- Mantém todas as fases anteriores e a versão 35 final.

Comandos recomendados:

```bash
npm run build
npx wrangler pages deploy dist --project-name procurador-itupeva-cinematic-study
```

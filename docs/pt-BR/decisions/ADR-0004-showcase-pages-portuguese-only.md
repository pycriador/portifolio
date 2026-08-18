---
title: "ADR-0004: Páginas showcase somente em português"
status: "ACCEPTED"
owner: "willian-rosa"
created: "2026-04-01"
updated: "2026-08-17"
version: "1.0"
---

# ADR-0004: Páginas showcase somente em português

> Language: [English (EN)](../en/decisions/ADR-0004-showcase-pages-portuguese-only.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

## Status

ACCEPTED

## Data

2026-04-01

## Contexto

Páginas showcase são HTML standalone com conteúdo hardcoded (texto, imagens, JS). Traduzi-las exigiria duplicar todo HTML/CSS/JS por idioma — um burden massivo de manutenção para um site de portfólio.

## Problema

Páginas showcase devem suportar múltiplos idiomas ou permanecer somente em português?

## Decisão

Páginas showcase permanecem **somente em português**. Sem labels i18n, sem troca de idioma dentro da página. O conteúdo da página faz parte da documentação do projeto, não da navegação geral.

## Alternativas Consideradas

| Alternativa | Prós | Contras | Rejeitada |
| --- | --- | --- | --- |
| Tradução completa por página | Multilíngue | Massiva duplicação, 9×3 arquivos HTML | Sim — não vale |
| Conteúdo dinâmico de JSON | Sem duplicação | Requer reescrita completa das páginas showcase | Sim — contradiz propósito do showcase |
| Conteúdo PT-only | Simples, autêntico | Não é multilíngue | **Não — escolhido** |
| Auto-tradução via browser | Grátis | Qualidade ruim, sem controle | Sim — poco profissional |

## Consequências

| Tipo | Consequência |
| --- | --- |
| Positivo | Manutenção simples — um HTML por showcase |
| Positivo | Conteúdo autêntico (escrito no idioma do autor) |
| Positivo | Sem overhead de tradução para páginas complexas |
| Negativo | Visitantes não-lusófonos veem conteúdo não traduzido |
| Negativo | Inconsistente com páginas genéricas (que são multilíngues) |
| Negativo | Não é possível aplicar idioma do site ao conteúdo showcase |

## Riscos

| Risco | Mitigação |
| --- | --- |
| Visitantes estrangeiros confusos | Títulos dos projetos e nav estão no idioma atual |
| Expectativa de tradução | Decisão documentada (este ADR) |

## Componentes Afetados

- Todos os 9 arquivos `projects/*/index.html` showcase
- `js/project-page.js` — não renderiza páginas showcase
- `i18n/*.json` — sem chaves para conteúdo showcase

## Decisões Relacionadas

- [ADR-0002](ADR-0002-dual-project-page-patterns.md) — padrões duais de página
- [ADR-0003](ADR-0003-i18n-json-dom-attributes.md) — abordagem i18n

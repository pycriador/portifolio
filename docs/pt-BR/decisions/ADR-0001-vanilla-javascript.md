---
title: "ADR-0001: JavaScript vanilla, zero dependências"
status: "ACCEPTED"
owner: "willian-rosa"
created: "2026-01-01"
updated: "2026-08-17"
version: "1.0"
---

# ADR-0001: JavaScript vanilla, zero dependências

> Language: [English (EN)](../en/decisions/ADR-0001-vanilla-javascript.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

## Status

ACCEPTED

## Data

2026-01-01

## Contexto

O portfólio é um site pessoal para mostrar projetos de engenharia de software. Precisa ser rápido, maintainable e exigir infraestrutura mínima. Frameworks modernos (React, Vue, Svelte) adicionam complexidade de build, sobrecarga de dependências e curva de aprendizado que podem não ser justificados para um site estático.

## Problema

Qual stack de tecnologia usar para o site do portfólio, considerando simplicidade, performance e manutenibilidade a longo prazo.

## Decisão

Usar JavaScript vanilla (ES2023), HTML5 e CSS3 com zero dependências externas. Sem bundler, sem build step, sem package manager.

## Alternativas Consideradas

| Alternativa | Prós | Contras | Rejeitada |
| --- | --- | --- | --- |
| React + Vite | Modelo de componentes, ecossistema | Build step, node_modules, complexidade | Sim — excesso para site estático |
| Vue 3 | Leve, reativo | Ainda precisa de bundler, dependências | Sim — abstração desnecessária |
| Svelte | Compiler, runtime pequeno | Build step necessário | Sim — adiciona complexidade |
| Astro | Ótimo para estático | Curva de aprendizado, pipeline de build | Sim — não vale para 14 páginas |
| Vanilla JS + ES modules | Zero deps, nativo, rápido | Mais boilerplate, sem tree-shaking | **Não — escolhido** |

## Consequências

| Tipo | Consequência |
| --- | --- |
| Positivo | Zero build step — push para deploy |
| Positivo | Sem node_modules — clone instantâneo |
| Positivo | Carga rápida — sem overhead de framework |
| Positivo | Debug nativo no navegador |
| Negativo | Mais boilerplate para manipulação DOM |
| Negativo | Sem modelo de componentes — updates manuais no DOM |
| Negativo | Sem type safety sem TypeScript |
| Negativo | Sem hot reload durante desenvolvimento |

## Riscos

| Risco | Mitigação |
| --- | --- |
| Bugs de manipulação DOM | Checks defensivos de null, guards em `querySelectorAll` |
| Sem sistema de módulos | Padrão IIFE com objetos globais |
| Manutenção futura por outros | Código bem documentado, convenções consistentes |

## Componentes Afetados

- Todos os módulos JavaScript em `js/`
- Todos os arquivos CSS em `css/`
- Todas as páginas HTML

## Decisões Relacionadas

- [ADR-0002](ADR-0002-dual-project-page-patterns.md) — padrões duais de página
- [ADR-0003](ADR-0003-i18n-json-dom-attributes.md) — abordagem i18n

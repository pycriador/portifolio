---
title: "ADR-0002: Padrões duais de páginas de projeto"
status: "ACCEPTED"
owner: "willian-rosa"
created: "2026-02-01"
updated: "2026-08-17"
version: "1.0"
---

# ADR-0002: Padrões duais de páginas de projeto

> Language: [English (EN)](../en/decisions/ADR-0002-dual-project-page-patterns.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

## Status

ACCEPTED

## Data

2026-02-01

## Contexto

O portfólio tem 13 projetos. Alguns têm UIs complexas (galeria, linha do tempo, abas, elementos interativos) enquanto outros são documentos simples. Renderizar todos via um único template complicaria demais páginas simples ou serviria mal páginas complexas.

## Problema

Como renderizar páginas de detalhe do projeto de forma eficiente, acomodando tanto conteúdo simples quanto complexo.

## Decisão

Usar dois padrões de página:
1. **Páginas genéricas** — HTML mínimo com `#project-root`, conteúdo renderizado dinamicamente pelo `ProjectPage` a partir dos dados do `PROJECTS`. Usado para projetos simples/documentados.
2. **Páginas showcase** — HTML completo standalone com CSS/JS customizados. Usado para projetos complexos que precisam de UIs interativas.

## Alternativas Consideradas

| Alternativa | Prós | Contras | Rejeitada |
| --- | --- | --- | --- |
| Template único | Um sistema para manter | Projetos complexos perdem UI custom | Sim — rígido demais |
| Todo HTML estático | Controle total por página | Massiva duplicação, difícil atualizar | Sim — burden de manutenção |
| Markdown + build | Content-first | Requer pipeline de build | Sim — contradiz ADR-0001 |
| Híbrido genérico + showcase | Flexibilidade por projeto | Dois padrões para manter | **Não — escolhido** |

## Consequências

| Tipo | Consequência |
| --- | --- |
| Positivo | Projetos simples fáceis de adicionar (só atualizar array `PROJECTS`) |
| Positivo | Projetos complexos recebem controle criativo total |
| Positivo | Nav/header compartilhados via estrutura HTML comum |
| Negativo | Dois caminhos de manutenção (config genérico vs. HTML estático) |
| Negativo | Labels i18n só funcionam em páginas genéricas |
| Negativo | Páginas showcase podem desalinharse se CSS evoluir |

## Riscos

| Risco | Mitigação |
| --- | --- |
| Páginas showcase ficam desatualizadas | Revisão visual regular |
| Muitas páginas showcase | Limitar a projetos genuinamente complexos |
| Páginas genéricas parecem limitadas | Estender `ProjectPage` conforme necessário |

## Componentes Afetados

- `js/project-page.js` — renderizador de páginas genéricas
- `config/projects.js` — fonte de dados para páginas genéricas
- Todos os arquivos `projects/*/index.html`

## Decisões Relacionadas

- [ADR-0001](ADR-0001-vanilla-javascript.md) — JS vanilla
- [ADR-0004](ADR-0004-showcase-pages-portuguese-only.md) — showcase PT-only

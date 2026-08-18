---
title: "ADR-0002: Dual project page patterns"
status: "ACCEPTED"
owner: "willian-rosa"
created: "2026-02-01"
updated: "2026-08-17"
version: "1.0"
---

# ADR-0002: Dual project page patterns

> Language: EN | [Português (pt-BR)](../pt-BR/decisions/ADR-0002-dual-project-page-patterns.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

## Status

ACCEPTED

## Date

2026-02-01

## Context

The portfolio has 13 projects. Some have complex UIs (gallery, timeline, tabs, interactive elements) while others are straightforward documents. Rendering all projects through a single template would either over-complicate simple pages or under-serve complex ones.

## Problem

How to render project detail pages efficiently, accommodating both simple and complex project content.

## Decision

Use two page patterns:
1. **Generic pages** — minimal HTML with `#project-root`, content rendered dynamically by `ProjectPage` from `PROJECTS` data. Used for simple/documented projects.
2. **Showcase pages** — full standalone HTML with custom CSS/JS. Used for complex projects requiring interactive UIs.

## Alternatives Considered

| Alternative | Pros | Cons | Rejected |
| --- | --- | --- | --- |
| Single template | One system to maintain | Complex projects lose custom UI | Yes — too rigid |
| All static HTML | Full control per page | Massive duplication, hard to update | Yes — maintenance burden |
| Markdown + build | Content-first | Requires build pipeline | Yes — contradicts ADR-0001 |
| Generic + showcase hybrid | Flexibility per project | Two patterns to maintain | **No — chosen** |

## Consequences

| Type | Consequence |
| --- | --- |
| Positive | Simple projects easy to add (just update `PROJECTS` array) |
| Positive | Complex projects get full creative control |
| Positive | Shared navigation/header via common HTML structure |
| Negative | Two maintenance paths (generic config vs. static HTML) |
| Negative | i18n labels only work in generic pages |
| Negative | Showcase pages can drift in style if CSS evolves |

## Risks

| Risk | Mitigation |
| --- | --- |
| Showcase pages get out of sync | Regular visual review |
| Too many showcase pages | Limit to genuinely complex projects |
| Generic pages feel limited | Extend `ProjectPage` as needed |

## Affected Components

- `js/project-page.js` — generic page renderer
- `config/projects.js` — data source for generic pages
- All `projects/*/index.html` files

## Related Decisions

- [ADR-0001](ADR-0001-vanilla-javascript.md) — vanilla JS
- [ADR-0004](ADR-0004-showcase-pages-portuguese-only.md) — showcase PT-only

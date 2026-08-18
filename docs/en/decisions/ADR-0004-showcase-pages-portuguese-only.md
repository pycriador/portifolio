---
title: "ADR-0004: Showcase pages Portuguese-only"
status: "ACCEPTED"
owner: "willian-rosa"
created: "2026-04-01"
updated: "2026-08-17"
version: "1.0"
---

# ADR-0004: Showcase pages Portuguese-only

> Language: EN | [Português (pt-BR)](../pt-BR/decisions/ADR-0004-showcase-pages-portuguese-only.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

## Status

ACCEPTED

## Date

2026-04-01

## Context

Showcase pages are standalone HTML with custom content (hardcoded text, images, JS). Translating them would require duplicating all HTML/CSS/JS per language — a massive maintenance burden for a portfolio site.

## Problem

Should showcase pages support multiple languages, or remain Portuguese-only?

## Decision

Showcase pages remain **Portuguese-only**. No i18n labels, no language switching within the page. The page content is part of the project's documentation, not general navigation.

## Alternatives Considered

| Alternative | Pros | Cons | Rejected |
| --- | --- | --- | --- |
| Full translation per page | Multilingual | Massive duplication, 9×3 HTML files | Yes — not worth |
| Dynamic content from JSON | No duplication | Would need full rewrite of showcase pages | Yes — contradicts showcase purpose |
| PT-only content | Simple, authentic | Not multilingual | **No — chosen** |
| Auto-translate via browser | Free | Poor quality, no control | Yes — unprofessional |

## Consequences

| Type | Consequence |
| --- | --- |
| Positive | Simple maintenance — one HTML per showcase |
| Positive | Authentic content (written in author's language) |
| Positive | No translation overhead for complex pages |
| Negative | Non-Portuguese visitors see untranslated content |
| Negative | Inconsistent with generic pages (which are multilingual) |
| Negative | Cannot apply site-wide language to showcase content |

## Risks

| Risk | Mitigation |
| --- | --- |
| Foreign visitors confused | Project titles and nav are in current language |
| Expectation of translation | Documented decision (this ADR) |

## Affected Components

- All 9 showcase `projects/*/index.html` files
- `js/project-page.js` — does not render showcase pages
- `i18n/*.json` — no keys for showcase content

## Related Decisions

- [ADR-0002](ADR-0002-dual-project-page-patterns.md) — dual page patterns
- [ADR-0003](ADR-0003-i18n-json-dom-attributes.md) — i18n approach

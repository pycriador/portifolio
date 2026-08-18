---
title: "ADR-0003: i18n via JSON files + DOM attributes"
status: "ACCEPTED"
owner: "willian-rosa"
created: "2026-03-01"
updated: "2026-08-17"
version: "1.0"
---

# ADR-0003: i18n via JSON files + DOM attributes

> Language: EN | [Português (pt-BR)](../pt-BR/decisions/ADR-0003-i18n-json-dom-attributes.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

## Status

ACCEPTED

## Date

2026-03-01

## Context

The portfolio supports 3 languages (PT-BR, EN, ES). Content must be translatable without modifying HTML structure. Previous approach had hardcoded strings and missing translations. Frameworks like i18next add significant bundle size.

## Problem

How to implement internationalization in a vanilla JS static site with zero dependencies.

## Decision

Use JSON translation files (`i18n/{lang}.json`) with 101 leaf keys each, applied to the DOM via custom attributes:
- `data-i18n="key"` — sets `textContent`
- `data-i18n-html="key"` — sets `innerHTML`
- `data-i18n-attr="attribute:key;attribute:key"` — sets attributes (aria, placeholder)

Language stored in `localStorage`. I18n module loads translations via `fetch()`, walks the DOM, applies translations, and dispatches `i18n:changed` CustomEvent.

## Alternatives Considered

| Alternative | Pros | Cons | Rejected |
| --- | --- |--- | --- |
| i18next | Battle-tested, interpolation | 14KB min, build dependency | Yes — violates zero deps |
| HTML `lang` + CSS `:lang()` | Native | Only affects CSS, not JS content | Yes — insufficient |
| Hardcoded per-page | Simple | Massive duplication, impossible to maintain | Yes — previous approach failed |
| `Intl.MessageFormat` + JSON | Standards-based | Browser support varies, verbose | Yes — overkill |
| JSON + DOM attributes | Zero deps, simple, fast | Manual DOM walk, no interpolation | **No — chosen** |

## Consequences

| Type | Consequence |
| --- | --- |
| Positive | Zero dependencies |
| Positive | One JSON file per language — easy to translate |
| Positive | Attribute-based — no JS template changes needed |
| Positive | `i18n:changed` event enables dynamic re-render |
| Negative | No interpolation (no `{name}` substitution) |
| Negative | Manual DOM walk on every language change |
| Negative | Must maintain identical structure across 3 JSON files |
| Negative | HTML content requires `data-i18n-html` (security consideration) |

## Risks

| Risk | Mitigation |
| --- | --- |
| Key drift across JSON files | Validation script (101 keys × 3 files) |
| Stale keys | Key count check on each build |
| XSS via `innerHTML` | Only trusted content in `data-i18n-html` keys |

## Affected Components

- `js/i18n.js` — I18n engine
- `js/project-page.js` — uses `I18n.get()` and `t()` helper
- `js/projects.js` — uses `t()` helper
- `i18n/pt.json`, `i18n/en.json`, `i18n/es.json`
- All HTML pages with `data-i18n` attributes

## Related Decisions

- [ADR-0001](ADR-0001-vanilla-javascript.md) — zero dependencies
- [ADR-0004](ADR-0004-showcase-pages-portuguese-only.md) — showcase PT-only

---
title: "ADR-0001: Vanilla JavaScript, zero dependencies"
status: "ACCEPTED"
owner: "willian-rosa"
created: "2026-01-01"
updated: "2026-08-17"
version: "1.0"
---

# ADR-0001: Vanilla JavaScript, zero dependencies

> Language: EN | [Português (pt-BR)](../pt-BR/decisions/ADR-0001-vanilla-javascript.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

## Status

ACCEPTED

## Date

2026-01-01

## Context

The portfolio is a personal website meant to showcase software engineering projects. It needs to be fast, maintainable, and require minimal infrastructure. Modern frameworks (React, Vue, Svelte) introduce build complexity, dependency overhead, and learning curve that may not be justified for a static site.

## Problem

Which technology stack to use for the portfolio website, considering simplicity, performance, and long-term maintainability.

## Decision

Use vanilla JavaScript (ES2023), HTML5, and CSS3 with zero external dependencies. No bundler, no build step, no package manager.

## Alternatives Considered

| Alternative | Pros | Cons | Rejected |
| --- | --- | --- | --- |
| React + Vite | Component model, ecosystem | Build step, node_modules, complexity | Yes — overkill for static site |
| Vue 3 | Lightweight, reactive | Still needs bundler, dependencies | Yes — unnecessary abstraction |
| Svelte | Compiler, small runtime | Build step required | Yes — adds complexity |
| Astro | Great for static | Learning curve, build pipeline | Yes — not worth for 14 pages |
| Vanilla JS + ES modules | Zero deps, native, fast | More boilerplate, no tree-shaking | **No — chosen** |

## Consequences

| Type | Consequence |
| --- | --- |
| Positive | Zero build step — push to deploy |
| Positive | No node_modules — instant clone |
| Positive | Fast load — no framework overhead |
| Positive | Browser-native debugging |
| Negative | More boilerplate for DOM manipulation |
| Negative | No component model — manual DOM updates |
| Negative | No type safety without TypeScript |
| Negative | No hot reload during development |

## Risks

| Risk | Mitigation |
| --- | --- |
| DOM manipulation bugs | Defensive null checks, `querySelectorAll` guards |
| No module system | IIFE pattern with global objects |
| Future maintenance by others | Well-documented code, consistent conventions |

## Affected Components

- All JavaScript modules in `js/`
- All CSS files in `css/`
- All HTML pages

## Related Decisions

- [ADR-0002](ADR-0002-dual-project-page-patterns.md) — dual page patterns
- [ADR-0003](ADR-0003-i18n-json-dom-attributes.md) — i18n approach

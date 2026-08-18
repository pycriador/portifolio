---
title: "Project overview"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Project overview

> Language: EN | [Português (pt-BR)](../pt-BR/project-overview.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Purpose

Static multilingual portfolio website for Willian Rosa (Software Engineer). Showcases 13 software engineering projects, technical skills, and architectural philosophy. Published at https://pycriador.github.io/portfolio/.

## Technology

| Layer | Choice |
| --- | --- |
| Markup | Semantic HTML5 (WCAG 2.2 AA intent) |
| Styling | CSS3 — Custom Properties, Grid, Flexbox, Animations |
| Scripting | Vanilla JavaScript ES2023, zero dependencies, zero build step |
| Hosting | GitHub Pages (main branch, root `/`) |

## Scope

| In scope | Notes |
| --- | --- |
| Home page | Hero, project grid with search/filters, skills, architecture, about, contact |
| 13 project pages | 4 generic (dynamic) + 9 showcase (static PT) |
| Resume page | Standalone CV (PT-only, `resume.html`) |
| i18n | PT-BR (default), EN, ES — dynamic switching |
| Theme | Dark/light with system preference detection |
| SEO | Open Graph, Twitter Cards, JSON-LD, sitemap.xml, robots.txt |
| PWA | manifest.json with SVG/PNG icons |
| Accessibility | Skip navigation, ARIA labels, prefers-reduced-motion |

## Non-Goals

| Non-goal | Rationale |
| --- | --- |
| Backend / API | Static site only; no server-side logic |
| User accounts / auth | Public read-only site |
| Analytics | Not implemented |
| CMS | Content managed via config/*.js files |
| CI/CD pipeline | Manual push to origin/main; GitHub Pages auto-deploys |
| Mobile app | PWA manifest present but not installable in practice |

## Deployment URL

| Environment | URL |
| --- | --- |
| Production | https://pycriador.github.io/portfolio/ |

## Repository

| Property | Value |
| --- | --- |
| Remote | https://github.com/pycriador/portifolio.git |
| Branch | main |
| Publishing trigger | Push to origin/main |

## Related Documents

- [architecture/overview.md](architecture/overview.md)
- [application/pages.md](application/pages.md)
- [contracts/data-contracts.md](contracts/data-contracts.md)
- [operations/publishing.md](operations/publishing.md)

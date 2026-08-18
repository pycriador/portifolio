---
title: "AI Context"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# AI Context

> Language: EN | [Português (pt-BR)](../pt-BR/ai-context.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

Primary AI entry point for this portfolio project. Agents and humans preparing AI prompts should start here, then follow links — do not load the entire corpus blindly.

This page is intentionally short. Details live in linked documents.

## Start

1. Read this file.
2. Load the depth required by the question ([Level Hierarchy](#level-hierarchy)).
3. Check [glossary.md](glossary.md) for project-specific terms.

## Project Identity

| Property | Value |
| --- | --- |
| Name | Willian Rosa Portfolio |
| Owner | Willian Rosa |
| Type | Static multilingual portfolio site |
| Stack | HTML5 + CSS3 + vanilla JS ES2023 (zero deps) |
| Hosting | GitHub Pages |
| URL | https://pycriador.github.io/portfolio/ |
| Languages | PT-BR (default), EN, ES |

## Level Hierarchy (0–3)

| Level | Focus | Documents | Load when |
| --- | --- | --- | --- |
| **0** | This entry + glossary | ai-context.md, glossary.md | Always |
| **1** | System context | [project-overview.md](project-overview.md) | "What is this project?" |
| **2** | Architecture & components | [architecture/overview.md](architecture/overview.md), [architecture/components.md](architecture/components.md) | Structure, modules, dependencies |
| **3** | Data models, page specifics, operations | [contracts/data-contracts.md](contracts/data-contracts.md), [application/pages.md](application/pages.md), [application/i18n.md](application/i18n.md), [operations/publishing.md](operations/publishing.md) | Page structure, data schemas, how to publish |

Levels 4–6 (operations reliability, security, evidence) are not applicable to a static portfolio site.

## Key Facts

- 13 projects: 4 generic (dynamic via `js/project-page.js`) + 9 showcase (static PT)
- i18n: 101 translation keys × 3 languages (PT/EN/ES), JSON files + DOM attributes
- Theme: dark/light with system preference, localStorage persistence
- No build step, no dependencies, no CI/CD
- PROJECTS array in `config/projects.js` is the single source of truth for all project data

## Non-Goals

- No RAG, embeddings, vector DB, MCP, or search engine
- No backend or API
- No user authentication

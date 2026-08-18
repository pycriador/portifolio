---
title: "Inventário de páginas"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Inventário de páginas

> Language: [English (EN)](../en/application/pages.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Roteamento

Aplicação multi-página tradicional (MPA). Cada página carrega independentemente. Sem roteador client-side.

## Índice de páginas

| Página | Caminho | i18n | Padrão | Sitemap |
| --- | --- | --- | --- | --- |
| Home | `index.html` | Sim (completo) | HTML estático + app.js | Sim |
| Currículo | `resume.html` | Não (PT-only) | Standalone | Não |
| ServiceForge | `projects/serviceforge/` | Não (conteúdo PT) | Showcase | Sim |
| SpecForge | `projects/specforge/` | Não (conteúdo PT) | Showcase | Sim |
| DataForge | `projects/dataforge/` | Não (conteúdo PT) | Showcase | Sim |
| Knowledge Platform | `projects/knowledge-platform/` | Não (conteúdo PT) | Showcase | Sim |
| ClauseForge | `projects/clauseforge/` | Não (conteúdo PT) | Showcase | Sim |
| Metadata Platform | `projects/metadata-platform/` | Não (conteúdo PT) | Showcase | Sim |
| Integration Hub | `projects/integration-hub/` | Não (conteúdo PT) | Showcase | Sim |
| Communication Platform | `projects/communication-platform/` | Não (conteúdo PT) | Showcase | Sim |
| People Identity Hub | `projects/people-identity-hub/` | Não (conteúdo PT) | Showcase | Sim |
| Mug Artwork Extractor | `projects/mug-artwork-extractor/` | Sim (labels) | Genérico | Sim |
| Mug Gallery | `projects/mug-gallery/` | Sim (labels) | Genérico | Sim |
| Gemini PDF Studio | `projects/gemini-pdf-studio/` | Sim (labels) | Genérico | Sim |
| Slack Conversation Bridge | `projects/slack-conversation-bridge/` | Sim (labels) | Genérico | Sim |

## Padrões de página

### Home (index.html)

Seções HTML estáticas renderizadas por `app.js`:

| Seção | Renderizador | Chaves i18n |
| --- | --- | --- |
| Hero | HTML estático | `hero.*` (6 chaves) |
| Grid de projetos | Módulo `Projects` | `projects.*` (15 chaves) |
| Skills | `App.renderSkills()` | `skills.*` (4 chaves) |
| Arquitetura | `App.renderArchitecture()` | `architecture.*` (3 chaves) |
| Sobre | HTML estático | `about.*` (7 chaves) |
| Contato | HTML estático + `App.initCopyEmail()` | `contact.*` (4 chaves) |
| Rodapé | HTML estático | `footer.*` (3 chaves) |

### Página genérica (projects/<slug>/index.html)

HTML mínimo: header com nav + `<div id="project-root"></div>`. Todo conteúdo renderizado pelo `ProjectPage`:

| Seção | Fonte | i18n |
| --- | --- | --- |
| Breadcrumb | Estático | `project.home`, `project.projects` |
| Hero | Entrada PROJECTS | `projects.status.*` para label de status |
| Visão geral | `project.overview` | `project.overviewObjective/Problem/Solution/Results` |
| Stack tecnológica | `project.technologies` | `project.techStackLabel/Title` |
| Arquitetura | `project.architecture` | `project.architectureLabel/Title` |
| Galeria | `project.gallery` | `project.galleryLabel/Title` |
| Linha do tempo | `project.timeline` | `project.timelineLabel/Title` |
| Roadmap | `project.roadmap` | `project.roadmapLabel/Title` + chaves de status |
| Desafios | `project.challenges` | `project.challengesLabel/Title` |
| Navegação | Projetos adjacentes | `project.previousProject/nextProject` |
| Rodapé | Estático | `project.allRightsReserved` |

### Página showcase (projects/<slug>/index.html)

HTML estático completo com conteúdo hardcoded em português. Diretórios próprios de `css/`, `js/`, `assets/`. Sem `project-page.js`, sem `#project-root`. Conteúdo não é traduzido.

## Sitemap

`sitemap.xml` contém 14 URLs: home + 13 páginas de projeto. `resume.html` é excluído.

## Documentos Relacionados

- [architecture/overview.md](../architecture/overview.md)
- [application/i18n.md](i18n.md)
- [contracts/data-contracts.md](../contracts/data-contracts.md)

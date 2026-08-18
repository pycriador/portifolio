---
title: "Page inventory"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Page inventory

> Language: EN | [Português (pt-BR)](../pt-BR/application/pages.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Routing

Traditional multi-page application (MPA). Each page loads independently. No client-side router.

## Page index

| Page | Path | i18n | Pattern | Sitemap |
| --- | --- | --- | --- | --- |
| Home | `index.html` | Yes (full) | Static HTML + app.js | Yes |
| Resume | `resume.html` | No (PT-only) | Standalone | No |
| ServiceForge | `projects/serviceforge/` | No (PT content) | Showcase | Yes |
| SpecForge | `projects/specforge/` | No (PT content) | Showcase | Yes |
| DataForge | `projects/dataforge/` | No (PT content) | Showcase | Yes |
| Knowledge Platform | `projects/knowledge-platform/` | No (PT content) | Showcase | Yes |
| ClauseForge | `projects/clauseforge/` | No (PT content) | Showcase | Yes |
| Metadata Platform | `projects/metadata-platform/` | No (PT content) | Showcase | Yes |
| Integration Hub | `projects/integration-hub/` | No (PT content) | Showcase | Yes |
| Communication Platform | `projects/communication-platform/` | No (PT content) | Showcase | Yes |
| People Identity Hub | `projects/people-identity-hub/` | No (PT content) | Showcase | Yes |
| Mug Artwork Extractor | `projects/mug-artwork-extractor/` | Yes (labels) | Generic | Yes |
| Mug Gallery | `projects/mug-gallery/` | Yes (labels) | Generic | Yes |
| Gemini PDF Studio | `projects/gemini-pdf-studio/` | Yes (labels) | Generic | Yes |
| Slack Conversation Bridge | `projects/slack-conversation-bridge/` | Yes (labels) | Generic | Yes |

## Page patterns

### Home (index.html)

Static HTML sections rendered by `app.js`:

| Section | Renderer | i18n keys |
| --- | --- | --- |
| Hero | Static HTML | `hero.*` (6 keys) |
| Projects grid | `Projects` module | `projects.*` (15 keys) |
| Skills | `App.renderSkills()` | `skills.*` (4 keys) |
| Architecture | `App.renderArchitecture()` | `architecture.*` (3 keys) |
| About | Static HTML | `about.*` (7 keys) |
| Contact | Static HTML + `App.initCopyEmail()` | `contact.*` (4 keys) |
| Footer | Static HTML | `footer.*` (3 keys) |

### Generic page (projects/<slug>/index.html)

Minimal HTML: header with nav + `<div id="project-root"></div>`. All content rendered by `ProjectPage`:

| Section | Source | i18n |
| --- | --- | --- |
| Breadcrumb | Static | `project.home`, `project.projects` |
| Hero | PROJECTS entry | `projects.status.*` for status label |
| Overview | `project.overview` | `project.overviewObjective/Problem/Solution/Results` |
| Tech Stack | `project.technologies` | `project.techStackLabel/Title` |
| Architecture | `project.architecture` | `project.architectureLabel/Title` |
| Gallery | `project.gallery` | `project.galleryLabel/Title` |
| Timeline | `project.timeline` | `project.timelineLabel/Title` |
| Roadmap | `project.roadmap` | `project.roadmapLabel/Title` + status keys |
| Challenges | `project.challenges` | `project.challengesLabel/Title` |
| Navigation | Adjacent projects | `project.previousProject/nextProject` |
| Footer | Static | `project.allRightsReserved` |

### Showcase page (projects/<slug>/index.html)

Full static HTML with hardcoded Portuguese content. Own `css/`, `js/`, `assets/` directories. No `project-page.js`, no `#project-root`. Content is not translated.

## Sitemap

`sitemap.xml` contains 14 URLs: home + 13 project pages. `resume.html` is excluded.

## Related Documents

- [architecture/overview.md](../architecture/overview.md)
- [application/i18n.md](i18n.md)
- [contracts/data-contracts.md](../contracts/data-contracts.md)

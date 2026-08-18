---
title: "Architecture overview"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Architecture overview

> Language: EN | [Português (pt-BR)](../pt-BR/architecture/overview.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## System context

The portfolio is a static multi-page application. No server-side rendering, no build step, no bundler. Each page loads independently with shared config and JS modules.

## Page load flow

```text
Browser requests page (index.html, or projects/<slug>/index.html)
│
├─ Inline <head> script: reads localStorage theme → prevents flash
│
├─ CSS: reset → variables → typography → layout → components → animations → responsive → projects → style
│
├─ [Home only] <body> contains static HTML sections (hero, projects, skills, architecture, about, contact)
│   └─ All sections use data-i18n / data-i18n-attr for translated content
│
├─ [Generic pages] <body> contains <div id="project-root"></div>
│   └─ project-page.js renders all content into this container
│
├─ [Showcase pages] <body> contains full static HTML content (PT-only)
│
└─ <script> tags (bottom, deferred):
    ├─ config/profile.js     → Profile (personal data, SEO meta)
    ├─ config/social.js      → Social links
    ├─ config/settings.js    → Settings (theme, language, storage keys)
    ├─ config/projects.js    → PROJECTS array (all project data)
    ├─ js/i18n.js            → I18n engine
    ├─ js/theme.js           → ThemeManager
    ├─ js/navigation.js      → Navigation (header, menu, lang selector, dropdown)
    ├─ js/scroll.js          → ScrollManager (smooth scroll)
    ├─ js/animation.js       → AnimationManager (IntersectionObserver)
    │
    ├─ [Home only]:
    │   ├─ js/projects.js    → Projects (search/filter grid)
    │   └─ js/app.js         → App (init, dynamic rendering, email copy)
    │
    ├─ [Generic pages only]:
    │   └─ js/project-page.js → ProjectPage (renders project detail)
    │
    └─ [Showcase pages only]:
        └─ project-specific JS (e.g., serviceforge.js, gallery.js)
```

## Initialization sequence (Home)

| Order | Module | Action |
| --- | --- | --- |
| 1 | Navigation.init() | Binds hamburger, lang selector, project dropdown |
| 2 | Projects.init() | Binds search input, renders grid (English fallback) |
| 3 | I18n.init() | Loads translations, applies to DOM, updates lang selector |
| 4 | App.init() | Sets footer year, binds email copy, re-renders with translations |

## Initialization sequence (Generic page)

| Order | Module | Action |
| --- | --- | --- |
| 1 | I18n.init() | Loads translations, applies to DOM |
| 2 | ProjectPage.init() | Finds project by slug, renders into #project-root |
| 3 | Navigation.init() | Binds header interactions |
| 4 | Event listener | Listens for `i18n:changed` to re-render on language switch |

## Module dependencies

| Module | Depends on | Depended by |
| --- | --- | --- |
| Settings | — | I18n, ThemeManager, App |
| Profile | — | I18n.updateSEO() |
| PROJECTS | — | Projects, ProjectPage, Navigation |
| I18n | Settings, Profile | App, Projects, ProjectPage |
| ThemeManager | Settings | — |
| Navigation | PROJECTS | App |
| AnimationManager | — | App, ProjectPage |
| Projects | I18n, PROJECTS, AnimationManager | App |
| ProjectPage | I18n, PROJECTS, Navigation, AnimationManager | — |
| App | Projects, I18n, AnimationManager | — |

## Static assets

| Path | Purpose |
| --- | --- |
| css/*.css (9 files) | Styling layers |
| assets/images/ | OG images |
| assets/icons/ | PWA icons (apple-touch-icon, icon-192, icon-512) |
| assets/logos/ | SVG logo and favicon |
| favicon.svg | Browser tab icon |
| robots.txt | Crawler directives |
| sitemap.xml | 14 URLs (home + 13 projects) |
| manifest.json | PWA manifest |
| resume.html | Standalone CV (PT-only) |

## Related Documents

- [architecture/components.md](components.md)
- [application/pages.md](../application/pages.md)
- [contracts/data-contracts.md](../contracts/data-contracts.md)

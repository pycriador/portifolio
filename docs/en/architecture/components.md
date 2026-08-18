---
title: "Component registry"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Component registry

> Language: EN | [Português (pt-BR)](../pt-BR/architecture/components.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

Registry of all JavaScript modules and configuration files.

## JavaScript modules

| Module | File | Pattern | Scope | Purpose |
| --- | --- | --- | --- | --- |
| App | `js/app.js` | IIFE, `{ init, renderDynamicContent }` | Home | Global init, dynamic section rendering (skills, architecture), email copy, toast |
| I18n | `js/i18n.js` | IIFE, `{ init, setLanguage, get, getArray, getCurrentLang }` | Global | Language detection, translation loading, DOM application, event dispatch |
| ThemeManager | `js/theme.js` | IIFE | Global | Dark/light toggle, system preference detection, localStorage persistence |
| Navigation | `js/navigation.js` | IIFE, `{ init }` | Global | Header scroll state, mobile menu, lang selector dropdown, project dropdown |
| ScrollManager | `js/scroll.js` | IIFE | Global | Smooth scroll for anchor links |
| AnimationManager | `js/animation.js` | IIFE, `{ init }` | Global | IntersectionObserver reveal animations, prefers-reduced-motion respect |
| Projects | `js/projects.js` | IIFE, `{ init, renderAll }` | Home | Project grid rendering, search, category/status/year filters, count display |
| ProjectPage | `js/project-page.js` | IIFE, `{ init }` | Generic pages | Dynamic project detail rendering, breadcrumb, sections, navigation, footer |

## Configuration files

| Module | File | Pattern | Purpose |
| --- | --- | --- | --- |
| Settings | `config/settings.js` | `Object.freeze()` | Theme default, language config, storage keys, site URL |
| Profile | `config/profile.js` | `Object.freeze()` | Name, role, email, GitHub, resume, per-language SEO meta |
| PROJECTS | `config/projects.js` | `Object.freeze()` | Array of 13 project entry objects (single source of truth) |
| Social | `config/social.js` | `Object.freeze()` | Social media links |

## CSS layers

| File | Purpose |
| --- | --- |
| `css/reset.css` | Browser normalization |
| `css/variables.css` | CSS Custom Properties (colors, spacing, typography) |
| `css/typography.css` | Font styles, headings, text utilities |
| `css/layout.css` | Grid system, containers, sections |
| `css/components.css` | Buttons, cards, tags, forms, nav, footer, toast |
| `css/animations.css` | Transitions, keyframes, reveal states, shimmer effects |
| `css/responsive.css` | Media queries (mobile, tablet, desktop, ultrawide) |
| `css/projects.css` | Project-specific: project-page, gallery, timeline, roadmap, challenges |
| `css/style.css` | Home page specific: hero, sections, skills, about, contact |

## Global objects exposed

All modules expose global objects (no ES modules, no bundler):

```text
Settings, Profile, Social, Projects (config)
I18n, ThemeManager, Navigation, ScrollManager, AnimationManager, Projects, ProjectPage, App (runtime)
```

## Related Documents

- [architecture/overview.md](overview.md)
- [contracts/data-contracts.md](../contracts/data-contracts.md)

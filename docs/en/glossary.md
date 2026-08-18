---
title: "Glossary"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Glossary

> Language: EN | [Português (pt-BR)](../pt-BR/glossary.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

Project-specific terms for this portfolio.

| Term | Definition |
| --- | --- |
| **Showcase page** | Static project page with hardcoded Portuguese content and its own `css/`, `js/`, and `assets/` directories. Not part of the i18n content model. |
| **Generic page** | Dynamic project page rendered by `js/project-page.js` from `config/projects.js` data. Includes `#project-root` container. Supports i18n section labels. |
| **PROJECTS** | Frozen JavaScript array in `config/projects.js`. Single source of truth for all project metadata (title, slug, status, technologies, descriptions, roadmap, etc.). |
| **PROJECTS entry** | One object in the PROJECTS array. Schema defined in [data-contracts.md](contracts/data-contracts.md). |
| **I18n key** | Dot-separated string (e.g., `projects.title`) mapping to a translated value in `i18n/{lang}.json`. 101 leaf keys per language file. |
| **data-i18n** | HTML attribute. `data-i18n="key"` → `textContent` is replaced with the translation for the current language. |
| **data-i18n-attr** | HTML attribute. `data-i18n-attr="attr1:key1;attr2:key2"` → sets each attribute to the corresponding translation. |
| **data-i18n-html** | HTML attribute. `data-i18n-html="key"` → `innerHTML` is replaced (supports HTML in translations). |
| **#project-root** | Container `<div>` in generic pages. `ProjectPage` renders all project detail content into this element. |
| **Status (normalized)** | Project status key: `production` or `in-development`. Display label is translated per language. |
| **i18n:changed** | Custom DOM event dispatched after language switch. `ProjectPage` listens to re-render dynamic content. |
| **Language selector** | `.lang-selector` component with `.lang-current` (display) and `.lang-option` buttons. Present in all pages. |
| **Theme toggle** | `.theme-toggle` button. Switches `data-theme` attribute between `dark` and `light`. |
| **Reveal animation** | `[data-reveal]` elements animated via `IntersectionObserver` in `AnimationManager`. Respects `prefers-reduced-motion`. |

## Related Documents

- [project-overview.md](project-overview.md)
- [contracts/data-contracts.md](contracts/data-contracts.md)
- [application/i18n.md](application/i18n.md)

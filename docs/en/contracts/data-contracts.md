---
title: "Data contracts"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Data contracts

> Language: EN | [Português (pt-BR)](../pt-BR/contracts/data-contracts.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## PROJECTS entry schema

Defined in `config/projects.js`. Each entry is an object in the frozen `PROJECTS` array.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `slug` | string | Yes | URL path segment (unique). Used in `projects/<slug>/`. |
| `title` | string | Yes | Display name in cards and hero. |
| `category` | string | Yes | Filter category (e.g., "Enterprise Platform", "AI", "Desktop"). |
| `status` | string | Yes | Normalized key: `"production"` or `"in-development"`. |
| `statusType` | string | No | Visual indicator: `"warning"` or `"danger"`. Default: none. |
| `year` | string | No | Publication or development year. |
| `shortDescription` | string | Yes | Card summary (shown in project grid). |
| `description` | string | Yes | Full description (shown in project hero). |
| `technologies` | string[] | Yes | Tech stack badges (shown in card and hero). |
| `tags` | string[] | Yes | Filter tags (shown in card footer). |
| `github` | string | Yes | GitHub repository URL. |
| `overview` | object | No | `{ objective, problem, solution, results }` — rendered as overview cards in generic pages. |
| `architecture` | object | No | `{ layerName: description }` — rendered as architecture cards. |
| `timeline` | object[] | No | `{ date, title, description }` — rendered as timeline. |
| `roadmap` | object[] | No | `{ title, status }` — rendered as roadmap list. Status: `"completed"`, `"in-progress"`, `"planned"`. |
| `challenges` | object[] | No | `{ title, description }` — rendered as challenge cards. |
| `solutions` | object[] | No | `{ title, description }` — rendered as solution cards. |
| `gallery` | object[] | No | `{ src, alt, type }` — rendered as screenshot gallery. |

### Status values

| Key | Display label (EN) | Display label (PT) | Display label (ES) |
| --- | --- | --- | --- |
| `production` | Production | Produção | Producción |
| `in-development` | In Development | Em Desenvolvimento | En Desarrollo |

## Settings schema

Defined in `config/settings.js`.

| Field | Type | Value | Description |
| --- | --- | --- | --- |
| `defaultTheme` | string | `"dark"` | Default theme on first visit |
| `defaultLanguage` | string | `"pt"` | Fallback language |
| `supportedLanguages` | string[] | `["pt","en","es"]` | Allowed language codes |
| `languageLabels` | object | `{ pt: { flag, label } }` | Flag emoji + short label per language |
| `languageNames` | object | `{ pt: "Português" }` | Full name per language |
| `storageKeys.theme` | string | `"portfolio-theme"` | localStorage key for theme |
| `storageKeys.language` | string | `"portfolio-lang"` | localStorage key for language |
| `siteUrl` | string | `"https://pycriador.github.io"` | Base URL (no trailing `/portfolio/`) |

## Profile schema

Defined in `config/profile.js`.

| Field | Type | Description |
| --- | --- | --- |
| `name` | string | `"Willian Rosa"` |
| `initials` | string | `"WR"` |
| `role` | string | `"Software Engineer"` |
| `email` | string | Contact email |
| `github` | string | GitHub profile URL |
| `resume` | string | `"resume.html"` |
| `meta.pt` | object | `{ title, description, keywords }` — PT SEO |
| `meta.en` | object | `{ title, description, keywords }` — EN SEO |
| `meta.es` | object | `{ title, description, keywords }` — ES SEO |

## i18n JSON schema

Each `i18n/{lang}.json` file contains a nested object with 101 leaf keys. Structure must be identical across all language files.

| Root key | Leaf count | Purpose |
| --- | --- | --- |
| `nav` | 12 | Navigation |
| `skipNav` | 1 | Skip link |
| `hero` | 6 | Hero section |
| `projects` | 15 | Project grid (includes nested `status.*`) |
| `skills` | 4 | Skills section |
| `architecture` | 3 | Architecture section |
| `about` | 7 | About section |
| `contact` | 4 | Contact section |
| `footer` | 3 | Footer |
| `toast` | 2 | Toast notifications |
| `project` | 22 | Generic project page |

### Validation

All three language files must pass:
1. Identical key structure (same 101 leaf keys)
2. Same array lengths (skills.categories: 7, architecture.items: 10)
3. All `data-i18n`, `data-i18n-attr`, `data-i18n-html` references resolve to a real key
4. All `I18n.get()` and `t()` static key references resolve to a real key

## DOM contract

| Selector / Attribute | Effect | Where used |
| --- | --- | --- |
| `data-i18n="key"` | textContent = translation | All pages |
| `data-i18n-html="key"` | innerHTML = translation | Home (about paragraphs) |
| `data-i18n-attr="a:k;b:k"` | setAttribute per mapping | All pages (aria, placeholder) |
| `#project-root` | Container for ProjectPage render | Generic pages |
| `.lang-option[data-lang]` | Language selector button | All pages |
| `.lang-current` | Current language display | All pages |
| `.theme-toggle` | Theme toggle button | All pages |
| `[data-reveal]` | IntersectionObserver target | All pages |
| `.filter-btn[data-filter][data-value]` | Filter button | Home |
| `#project-search` | Search input | Home |
| `.copy-email[data-email]` | Copy email button | Home |
| `#toast` | Toast notification element | Home |

## Related Documents

- [architecture/components.md](../architecture/components.md)
- [application/i18n.md](../application/i18n.md)
- [glossary.md](../glossary.md)

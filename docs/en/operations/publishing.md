---
title: "Publishing runbook"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Publishing runbook

> Language: EN | [Português (pt-BR)](../pt-BR/operations/publishing.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Publishing flow

```text
Developer pushes to origin/main
        │
        ▼
┌───────────────────────────────────┐
│  GitHub Actions (auto)            │
│  GitHub Pages build from main     │
│  Root path: /                     │
└───────────────────┬───────────────┘
                    │
                    ▼
┌───────────────────────────────────┐
│  https://pycriador.github.io/     │
│  /portfolio/                      │
└───────────────────────────────────┘
```

| Property | Value |
| --- | --- |
| Trigger | Push to `origin/main` |
| Source | `main` branch, root `/` |
| URL | https://pycriador.github.io/portfolio/ |
| CI/CD | None (GitHub Pages built-in) |

## Update procedures

### Add a new project

1. Add entry to `PROJECTS` array in `config/projects.js`:
   - Required: `slug`, `title`, `category`, `status` (`"production"` or `"in-development"`), `shortDescription`, `description`, `technologies`, `tags`, `github`
   - Optional: `overview`, `architecture`, `timeline`, `roadmap`, `challenges`, `solutions`, `gallery`
2. Create `projects/<slug>/index.html`:
   - **Generic**: minimal HTML with `#project-root` + standard `<script>` tags (copy from an existing generic page)
   - **Showcase**: full standalone HTML with own CSS/JS/assets
3. Add `<loc>` entry to `sitemap.xml`
4. Optionally add OG image at `projects/<slug>/images/og-image.png`
5. If showcase: add project-specific JS files in `projects/<slug>/js/`

### Add a new language

1. Create `i18n/{code}.json` — copy `en.json`, translate all 101 values
2. Add `{ code }` to `Settings.supportedLanguages` in `config/settings.js`
3. Add to `Settings.languageLabels` and `Settings.languageNames`
4. Add `<li class="lang-option" data-lang="{code}">` to:
   - `index.html` lang dropdown
   - Each generic page nav (4 files)
5. Add `LANG_MAP` entry in `js/i18n.js` if browser sends a variant
6. Add `Profile.meta.{code}` in `config/profile.js`
7. Add locale mapping in `js/i18n.js` `updateSEO()` function

### Update profile data

Edit `config/profile.js`:
- `name`, `role`, `email`, `github`, `resume` — personal data
- `meta.{lang}` — per-language SEO title, description, keywords

### Update SEO meta tags

Edit `config/profile.js` meta object for dynamic tags. Static tags in `index.html` `<head>` for Open Graph image and canonical URL.

### Update styles

Edit CSS files in `css/`. Key files:
- `css/variables.css` — color tokens, spacing, typography
- `css/style.css` — home page specific
- `css/projects.css` — project page specific
- `css/responsive.css` — media queries

## Validation checklist

Before pushing:

| Check | Command / Action |
| --- | --- |
| i18n structure | Run `node validate-i18n.js` — all 3 files must have 101 identical keys |
| JS syntax | Run `node --check js/*.js` |
| All `data-i18n` references resolve | Run reference check script |
| Project count matches sitemap | `grep -c '<loc>' sitemap.xml` should equal 14 (+ 1 for home) |
| No hardcoded English in generic pages | Grep for English text outside `data-i18n` |
| Status keys normalized | Grep `config/projects.js` — only `"production"` or `"in-development"` |

## Incident response

| Issue | Action |
| --- | --- |
| Site unreachable | Check GitHub Pages status; verify `main` branch exists |
| Broken page | Check browser console for JS errors; verify config files load |
| Missing translations | Check `i18n/{lang}.json` has all 101 keys; check `data-i18n` attribute value |
| Theme flash | Verify inline `<head>` script is present and localStorage key matches |

## Related Documents

- [architecture/overview.md](../architecture/overview.md)
- [project-overview.md](../project-overview.md)
- [data-contracts.md](../contracts/data-contracts.md)

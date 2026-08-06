# Willian Rosa - Software Engineer Portfolio

A modern, performant, and multilingual portfolio website built with semantic HTML5, CSS3, and vanilla JavaScript ES2023. No frameworks, no libraries.

Live at **https://pycriador.github.io/portfolio/**

## Technologies

- **HTML5** - Semantic markup with WCAG 2.2 AA accessibility
- **CSS3** - Custom Properties, Grid, Flexbox, Animations
- **JavaScript ES2023** - Modular, vanilla, zero dependencies

## Features

- Internationalization (PT-BR, EN, ES) with dynamic switching
- Dark / Light mode with system preference detection
- Responsive design (Mobile, Tablet, Desktop, Ultrawide)
- Smooth scroll-reveal animations via Intersection Observer
- SEO optimized (Open Graph, Twitter Cards, Schema.org JSON-LD, hreflang)
- Accessible (ARIA labels, skip navigation, focus states, translated a11y)
- 60 FPS animations with `prefers-reduced-motion` support
- Glassmorphism and modern visual effects
- WR branding (SVG logo, avatar, favicon)
- Microinteractions (ripple, animated underlines, fade on lang switch)
- Dynamic project showcase with search and filters (category, status, year)

## Languages & Content Model

- **Home (`index.html`)**: fully translated via `js/i18n.js` loading `i18n/{pt,en,es}.json`.
- **Generic project pages** (rendered by `js/project-page.js`): section labels, breadcrumb, navigation, statuses, and buttons translate via the `project.*` keys. Project content (title, descriptions) comes from `config/projects.js` and stays as authored (English).
- **Showcase project pages** (9): standalone static pages with content hardcoded in **Portuguese** and their own `css/`, `js/`, and `assets/`. Not part of the i18n content model.

## Structure

```
portfolio/
├── index.html                (home, fully i18n)
├── resume.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── typography.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   ├── responsive.css
│   ├── projects.css
│   └── style.css
├── js/
│   ├── app.js                (global init + dynamic sections render)
│   ├── i18n.js               (i18n engine: detect, load, apply, switch)
│   ├── navigation.js         (header, mobile menu, lang selector, project dropdown)
│   ├── project-page.js       (dynamic project detail renderer)
│   ├── projects.js           (search/filter grid renderer)
│   ├── scroll.js
│   ├── animation.js
│   └── theme.js
├── i18n/
│   ├── pt.json               (default language)
│   ├── en.json
│   └── es.json
├── config/
│   ├── profile.js            (personal data + SEO meta per language)
│   ├── projects.js           (PROJECTS array - single source of truth)
│   ├── social.js
│   └── settings.js           (defaultLanguage, supportedLanguages, siteUrl)
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
├── projects/
│   ├── serviceforge/             (showcase - PT)
│   ├── specforge/                (showcase - PT)
│   ├── dataforge/                (showcase - PT)
│   ├── knowledge-platform/       (showcase - PT)
│   ├── people-identity-hub/      (showcase - PT)
│   ├── clauseforge/              (showcase - PT)
│   ├── metadata-platform/        (showcase - PT)
│   ├── integration-hub/          (showcase - PT)
│   ├── communication-platform/   (showcase - PT)
│   ├── mug-gallery/              (generic - via project-page.js)
│   ├── mug-artwork-extractor/    (generic - via project-page.js)
│   ├── gemini-pdf-studio/        (generic - via project-page.js)
│   └── slack-conversation-bridge (generic - via project-page.js)
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── manifest.json
└── README.md
```

## Projects

13 projects defined in `config/projects.js`. Statuses are normalized to `production` or `in-development` and translated in the UI.

| Project | Category | Status | Page type |
| --- | --- | --- | --- |
| ServiceForge | Enterprise Platform | production | Showcase (PT) |
| SpecForge | Developer Tool | production | Showcase (PT) |
| DataForge | Enterprise Data Platform | in-development | Showcase (PT) |
| Knowledge Platform | Enterprise Knowledge Management | in-development | Showcase (PT) |
| People Identity Hub | Enterprise Identity Platform | in-development | Showcase (PT) |
| ClauseForge | Enterprise Document Automation Platform | in-development | Showcase (PT) |
| Metadata Platform | Enterprise Low-Code Platform | in-development | Showcase (PT) |
| Integration Hub | Enterprise Integration Platform | in-development | Showcase (PT) |
| Communication Platform | Enterprise Communication Platform | in-development | Showcase (PT) |
| Mug Artwork Extractor | AI | production | Generic (i18n labels) |
| Mug Gallery | Desktop | production | Generic (i18n labels) |
| Gemini PDF Studio | AI | production | Generic (i18n labels) |
| Slack Conversation Bridge | Integration | production | Generic (i18n labels) |

## Publishing to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings > Pages**
3. Select **Source**: `main` branch, `/ (root)`
4. Save - your site will be live at `https://pycriador.github.io/portfolio/`

## How to Customize

### Update Profile Data

Edit `config/profile.js` to change name, role, email, and SEO metadata.

Edit `config/social.js` to change social links.

Edit `config/settings.js` to change default theme, language, and supported languages.

### Add a New Project

1. Add a new entry to the `PROJECTS` array in `config/projects.js` (title, slug, category, status, year, description, technologies, tags, github link). Use a normalized status key: `production` or `in-development`.
2. Create a project page at `projects/<slug>/`. Two patterns are supported:
   - **Generic page**: an `index.html` with a `#project-root` container that renders the detail dynamically via `js/project-page.js` (see `projects/mug-gallery/`). It includes `js/i18n.js`, which initializes automatically inside `project-page.js` and re-renders on language change.
   - **Showcase page**: a standalone static page (in Portuguese) with its own `css/`, `js/`, and `assets/` (see `projects/serviceforge/`).
3. Add the page URL to `sitemap.xml`.
4. Optionally add an OG image at `projects/<slug>/images/og-image.png`.

### Add a New Language

1. Create a new JSON file in `i18n/` (e.g., `fr.json`)
2. Copy `i18n/en.json` as a template and translate all values. Keep the JSON structure identical across all language files.
3. Add the language code to `Settings.supportedLanguages` in `config/settings.js`
4. Add the language option to the selector in the `<head>` nav of `index.html` and the generic project pages

### Change Theme

Edit CSS variables in `css/variables.css`. Themes are defined with `[data-theme="light"]` and `[data-theme="dark"]`.

### Add Images

Place images in the appropriate `assets/` subdirectory. Replace the SVG placeholders with `<img>` tags.

### Update SEO

Edit `config/profile.js` to update the `meta` object with per-language titles, descriptions, and keywords. Edit the `<head>` section in `index.html` for static SEO tags. `js/i18n.js` applies per-language meta at runtime.

## License

MIT

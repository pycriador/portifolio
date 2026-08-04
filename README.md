# Willian Rosa - Software Engineer Portfolio

A modern, performant, and multilingual portfolio website built with semantic HTML5, CSS3, and vanilla JavaScript ES2023. No frameworks, no libraries.

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

## Structure

```
portfolio/
├── index.html
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
│   ├── app.js
│   ├── i18n.js
│   ├── navigation.js
│   ├── project-page.js
│   ├── projects.js
│   ├── scroll.js
│   ├── animation.js
│   └── theme.js
├── i18n/
│   ├── en.json
│   ├── pt.json
│   └── es.json
├── config/
│   ├── profile.js
│   ├── projects.js
│   ├── social.js
│   └── settings.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
├── projects/
│   ├── serviceforge/     (showcase page: own css/, js/, assets/, project.json)
│   ├── specforge/        (showcase page)
│   ├── dataforge/        (showcase page)
│   ├── clauseforge/      (generic page via js/project-page.js)
│   └── ...               (all other projects)
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── manifest.json
└── README.md
```

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

1. Add a new entry to the `PROJECTS` array in `config/projects.js` (title, slug, category, status, year, description, technologies, tags, github link).
2. Create a project page at `projects/<slug>/`. Two patterns are supported:
   - **Generic page**: an `index.html` that renders the project detail dynamically via `js/project-page.js` (see `projects/clauseforge/`).
   - **Showcase page**: a standalone page with its own `css/`, `js/`, and `assets/` (see `projects/serviceforge/`, `projects/specforge/`, `projects/dataforge/`).
3. Add the page URL to `sitemap.xml`.
4. Optionally add an OG image at `projects/<slug>/images/og-image.png`.

### Add a New Language

1. Create a new JSON file in `i18n/` (e.g., `fr.json`)
2. Copy `i18n/en.json` as a template and translate all values
3. Add the language code to `Settings.supportedLanguages` in `config/settings.js`
4. Add the language option to the selector in `index.html`

### Change Theme

Edit CSS variables in `css/variables.css`. Themes are defined with `[data-theme="light"]` and `[data-theme="dark"]`.

### Add Images

Place images in the appropriate `assets/` subdirectory. Replace the SVG placeholders with `<img>` tags.

### Update SEO

Edit `config/profile.js` to update the `meta` object with per-language titles, descriptions, and keywords. Edit the `<head>` section in `index.html` for static SEO tags.

## License

MIT

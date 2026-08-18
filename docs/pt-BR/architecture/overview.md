---
title: "Visão geral da arquitetura"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Visão geral da arquitetura

> Language: [English (EN)](../en/architecture/overview.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Contexto do sistema

O portfólio é uma aplicação multi-página estática. Sem renderização server-side, sem build step, sem bundler. Cada página carrega independentemente com config e módulos JS compartilhados.

## Fluxo de carregamento

```text
Browser solicita página (index.html ou projects/<slug>/index.html)
│
├─ Script inline no <head>: lê localStorage theme → previne flash
│
├─ CSS: reset → variables → typography → layout → components → animations → responsive → projects → style
│
├─ [Home] <body> contém seções HTML estáticas (hero, projects, skills, architecture, about, contact)
│  └─ Todas as seções usam data-i18n / data-i18n-attr para conteúdo traduzido
│
├─ [Páginas genéricas] <body> contém <div id="project-root"></div>
│  └─ project-page.js renderiza todo o conteúdo neste container
│
├─ [Páginas showcase] <body> contém HTML estático completo (somente PT)
│
└─ Tags <script> (inferior, deferred):
    ├─ config/profile.js     → Profile (dados pessoares, meta SEO)
    ├─ config/social.js      → Links sociais
    ├─ config/settings.js    → Settings (tema, idioma, chaves storage)
    ├─ config/projects.js    → Array PROJECTS (todos os dados de projetos)
    ├─ js/i18n.js            → Motor I18n
    ├─ js/theme.js           → ThemeManager
    ├─ js/navigation.js      → Navigation (header, menu, seletor idioma, dropdown)
    ├─ js/scroll.js          → ScrollManager (scroll suave)
    ├─ js/animation.js       → AnimationManager (IntersectionObserver)
    │
    ├─ [Home apenas]:
    │   ├─ js/projects.js    → Projects (busca/filtros do grid)
    │   └─ js/app.js         → App (init, renderização dinâmica, cópia email)
    │
    ├─ [Páginas genéricas apenas]:
    │   └─ js/project-page.js → ProjectPage (renderiza detalhe do projeto)
    │
    └─ [Páginas showcase apenas]:
        └─ JS específico do projeto (ex.: serviceforge.js, gallery.js)
```

## Sequência de inicialização (Home)

| Ordem | Módulo | Ação |
| --- | --- | --- |
| 1 | Navigation.init() | Vincula hamburger, seletor idioma, dropdown de projetos |
| 2 | Projects.init() | Vincula input de busca, renderiza grid (fallback inglês) |
| 3 | I18n.init() | Carrega traduções, aplica ao DOM, atualiza seletor |
| 4 | App.init() | Define ano do footer, vincula cópia email, re-renderiza com traduções |

## Sequência de inicialização (Página genérica)

| Ordem | Módulo | Ação |
| --- | --- | --- |
| 1 | I18n.init() | Carrega traduções, aplica ao DOM |
| 2 | ProjectPage.init() | Encontra projeto por slug, renderiza em #project-root |
| 3 | Navigation.init() | Vincula interações do header |
| 4 | Event listener | Escuta `i18n:changed` para re-renderizar na troca de idioma |

## Dependências dos módulos

| Módulo | Depende de | Dependido por |
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

## Ativos estáticos

| Caminho | Finalidade |
| --- | --- |
| css/*.css (9 arquivos) | Camadas de estilos |
| assets/images/ | Imagens OG |
| assets/icons/ | Ícones PWA (apple-touch-icon, icon-192, icon-512) |
| assets/logos/ | Logo SVG e favicon |
| favicon.svg | Ícone da aba do navegador |
| robots.txt | Diretivas de crawlers |
| sitemap.xml | 14 URLs (home + 13 projetos) |
| manifest.json | Manifest PWA |
| resume.html | CV standalone (somente PT) |

## Documentos Relacionados

- [architecture/components.md](components.md)
- [application/pages.md](../application/pages.md)
- [contracts/data-contracts.md](../contracts/data-contracts.md)

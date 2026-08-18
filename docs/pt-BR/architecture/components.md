---
title: "Registro de componentes"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Registro de componentes

> Language: [English (EN)](../en/architecture/components.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

Registro de todos os módulos JavaScript e arquivos de configuração.

## Módulos JavaScript

| Módulo | Arquivo | Padrão | Escopo | Finalidade |
| --- | --- | --- | --- | --- |
| App | `js/app.js` | IIFE, init + renderDynamicContent | Home | Init global, renderização dinâmica, cópia email, toast |
| I18n | `js/i18n.js` | IIFE, init + setLanguage + get | Global | Detecção de idioma, traduções, aplicação DOM, eventos |
| ThemeManager | `js/theme.js` | IIFE | Global | Toggle escuro/claro, preferência do sistema, localStorage |
| Navigation | `js/navigation.js` | IIFE, init | Global | Header scroll, menu mobile, seletor idioma, dropdown projetos |
| ScrollManager | `js/scroll.js` | IIFE | Global | Scroll suave para links âncora |
| AnimationManager | `js/animation.js` | IIFE, init | Global | Animações IntersectionObserver, prefers-reduced-motion |
| Projects | `js/projects.js` | IIFE, init + renderAll | Home | Grid de projetos, busca, filtros, contagem |
| ProjectPage | `js/project-page.js` | IIFE, init | Páginas genéricas | Detalhe do projeto, breadcrumb, seções, navegação |

## Arquivos de configuração

| Módulo | Arquivo | Padrão | Finalidade |
| --- | --- | --- | --- |
| Settings | `config/settings.js` | Object.freeze() | Tema, idioma, chaves storage, URL do site |
| Profile | `config/profile.js` | Object.freeze() | Nome, cargo, email, GitHub, meta SEO por idioma |
| PROJECTS | `config/projects.js` | Object.freeze() | Array de 13 objetos de projeto (fonte única de verdade) |
| Social | `config/social.js` | Object.freeze() | Links de redes sociais |

## Camadas CSS

| Arquivo | Finalidade |
| --- | --- |
| `css/reset.css` | Normalização do browser |
| `css/variables.css` | CSS Custom Properties (cores, espaçamento, tipografia) |
| `css/typography.css` | Estilos de fontes, headings, utilitários de texto |
| `css/layout.css` | Sistema de grid, containers, seções |
| `css/components.css` | Botões, cards, tags, formulários, nav, footer, toast |
| `css/animations.css` | Transições, keyframes, estados reveal, efeitos shimmer |
| `css/responsive.css` | Media queries (mobile, tablet, desktop, ultrawide) |
| `css/projects.css` | Específico de projeto: project-page, gallery, timeline, roadmap, challenges |
| `css/style.css` | Específico da home: hero, seções, skills, about, contact |

## Objetos globais expostos

Todos os módulos expõem objetos globais (sem ES modules, sem bundler):

```text
Settings, Profile, Social, Projects (config)
I18n, ThemeManager, Navigation, ScrollManager, AnimationManager, Projects, ProjectPage, App (runtime)
```

## Documentos Relacionados

- [architecture/overview.md](overview.md)
- [contracts/data-contracts.md](../contracts/data-contracts.md)

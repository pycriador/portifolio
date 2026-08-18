---
title: "Visão geral do projeto"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Visão geral do projeto

> Language: [English (EN)](../en/project-overview.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Propósito

Site de portfólio estático multilíngue para Willian Rosa (Software Engineer). Apresenta 13 projetos de engenharia de software, habilidades técnicas e filosofia arquitetural. Publicado em https://pycriador.github.io/portfolio/.

## Tecnologia

| Camada | Escolha |
| --- | --- |
| Marcação | HTML5 semântico (WCAG 2.2 AA) |
| Estilos | CSS3 — Custom Properties, Grid, Flexbox, Animações |
| Scripting | JavaScript ES2023 vanilla, zero dependências, zero build |
| Hospedagem | GitHub Pages (branch main, raiz `/`) |

## Escopo

| Em escopo | Notas |
| --- | --- |
| Página inicial | Hero, grid de projetos com busca/filtros, habilidades, arquitetura, sobre, contato |
| 13 páginas de projeto | 4 genéricas (dinâmicas) + 9 showcase (estáticas PT) |
| Página de currículo | CV standalone (só PT, `resume.html`) |
| i18n | PT-BR (padrão), EN, ES — troca dinâmica |
| Tema | Escuro/claro com detecção de preferência do sistema |
| SEO | Open Graph, Twitter Cards, JSON-LD, sitemap.xml, robots.txt |
| PWA | manifest.json com ícones SVG/PNG |
| Acessibilidade | Skip navigation, labels ARIA, prefers-reduced-motion |

## Não-Objetivos

| Não-objetivo | Justificativa |
| --- | --- |
| Backend / API | Site estático apenas; sem lógica server-side |
| Contas de usuário / auth | Site público somente leitura |
| Analytics | Não implementado |
| CMS | Conteúdo gerenciado via arquivos config/*.js |
| Pipeline CI/CD | Push manual para origin/main; GitHub Pages auto-deploy |
| App mobile | Manifest PWA presente mas não instalável na prática |

## URL de Deploy

| Ambiente | URL |
| --- | --- |
| Produção | https://pycriador.github.io/portfolio/ |

## Repositório

| Propriedade | Valor |
| --- | --- |
| Remote | https://github.com/pycriador/portifolio.git |
| Branch | main |
| Trigger de publicação | Push para origin/main |

## Documentos Relacionados

- [architecture/overview.md](architecture/overview.md)
- [application/pages.md](application/pages.md)
- [contracts/data-contracts.md](contracts/data-contracts.md)
- [operations/publishing.md](operations/publishing.md)

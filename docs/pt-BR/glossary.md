---
title: "Glossário"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Glossário

> Language: [English (EN)](../en/glossary.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

Termos específicos deste portfólio.

| Termo | Definição |
| --- | --- |
| **Showcase page** | Página de projeto estática com conteúdo hardcoded em português e seus próprios diretórios `css/`, `js/` e `assets/`. Faz parte do modelo de conteúdo i18n. |
| **Generic page** | Página de projeto dinâmica renderizada por `js/project-page.js` a partir dos dados de `config/projects.js`. Contém container `#project-root`. Suporta labels i18n. |
| **PROJECTS** | Array JavaScript frozen em `config/projects.js`. Única fonte de verdade para todos os metadados de projetos (título, slug, status, tecnologias, descrições, roadmap, etc.). |
| **PROJECTS entry** | Um objeto no array PROJECTS. Schema definido em [data-contracts.md](contracts/data-contracts.md). |
| **I18n key** | String com pontos (ex.: `projects.title`) mapeando para um valor traduzido em `i18n/{lang}.json`. 101 chaves leaf por arquivo de idioma. |
| **data-i18n** | Atributo HTML. `data-i18n="chave"` → `textContent` é substituído pela tradução do idioma atual. |
| **data-i18n-attr** | Atributo HTML. `data-i18n-attr="attr1:chave1;attr2:chave2"` → define cada atributo com a tradução correspondente. |
| **data-i18n-html** | Atributo HTML. `data-i18n-html="chave"` → `innerHTML` é substituído (suporta HTML nas traduções). |
| **#project-root** | Container `<div>` em páginas genéricas. `ProjectPage` renderiza todo o conteúdo de detalhe do projeto neste elemento. |
| **Status (normalizado)** | Chave de status do projeto: `production` ou `in-development`. Label exibido é traduzido por idioma. |
| **i18n:changed** | Evento DOM customizado disparado após troca de idioma. `ProjectPage` escuta para re-renderizar conteúdo dinâmico. |
| **Seletor de idioma** | Componente `.lang-selector` com `.lang-current` (exibição) e botões `.lang-option`. Presente em todas as páginas. |
| **Toggle de tema** | Botão `.theme-toggle`. Alterna o atributo `data-theme` entre `dark` e `light`. |
| **Animação de revelação** | Elementos `[data-reveal]` animados via `IntersectionObserver` no `AnimationManager`. Respeita `prefers-reduced-motion`. |

## Documentos Relacionados

- [project-overview.md](project-overview.md)
- [contracts/data-contracts.md](contracts/data-contracts.md)
- [application/i18n.md](application/i18n.md)

---
title: "Contratos de dados"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Contratos de dados

> Language: [English (EN)](../en/contracts/data-contracts.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Schema da entrada PROJECTS

Definido em `config/projects.js`. Cada entrada é um objeto no array congelado `PROJECTS`.

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `slug` | string | Sim | Segmento de caminho da URL (único). Usado em `projects/<slug>/`. |
| `title` | string | Sim | Nome de exibição em cards e hero. |
| `category` | string | Sim | Categoria de filtro (ex.: "Enterprise Platform", "AI", "Desktop"). |
| `status` | string | Sim | Chave normalizada: `"production"` ou `"in-development"`. |
| `statusType` | string | Não | Indicador visual: `"warning"` ou `"danger"`. Padrão: nenhum. |
| `year` | string | Não | Ano de publicação ou desenvolvimento. |
| `shortDescription` | string | Sim | Resumo do card (exibido no grid de projetos). |
| `description` | string | Sim | Descrição completa (exibida no hero). |
| `technologies` | string[] | Sim | Badges da stack (exibidos no card e hero). |
| `tags` | string[] | Sim | Tags de filtro (exibidas no rodapé do card). |
| `github` | string | Sim | URL do repositório GitHub. |
| `overview` | object | Não | `{ objective, problem, solution, results }` — renderiza como cards de visão geral em páginas genéricas. |
| `architecture` | object | Não | `{ layerName: description }` — renderiza como cards de arquitetura. |
| `timeline` | object[] | Não | `{ date, title, description }` — renderiza como linha do tempo. |
| `roadmap` | object[] | Não | `{ title, status }` — renderiza como lista de roadmap. Status: `"completed"`, `"in-progress"`, `"planned"`. |
| `challenges` | object[] | Não | `{ title, description }` — renderiza como cards de desafios. |
| `solutions` | object[] | Não | `{ title, description }` — renderiza como cards de soluções. |
| `gallery` | object[] | Não | `{ src, alt, type }` — renderiza como galeria de screenshots. |

### Valores de status

| Chave | Label (EN) | Label (PT) | Label (ES) |
| --- | --- | --- | --- |
| `production` | Production | Produção | Producción |
| `in-development` | In Development | Em Desenvolvimento | En Desarrollo |

## Schema do Settings

Definido em `config/settings.js`.

| Campo | Tipo | Valor | Descrição |
| --- | --- | --- | --- |
| `defaultTheme` | string | `"dark"` | Tema padrão na primeira visita |
| `defaultLanguage` | string | `"pt"` | Idioma de fallback |
| `supportedLanguages` | string[] | `["pt","en","es"]` | Códigos de idioma permitidos |
| `languageLabels` | object | `{ pt: { flag, label } }` | Emoji da bandeira + label curto por idioma |
| `languageNames` | object | `{ pt: "Português" }` | Nome completo por idioma |
| `storageKeys.theme` | string | `"portfolio-theme"` | Chave localStorage para tema |
| `storageKeys.language` | string | `"portfolio-lang"` | Chave localStorage para idioma |
| `siteUrl` | string | `"https://pycriador.github.io"` | URL base (sem `/portfolio/` final) |

## Schema do Profile

Definido em `config/profile.js`.

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `name` | string | `"Willian Rosa"` |
| `initials` | string | `"WR"` |
| `role` | string | `"Software Engineer"` |
| `email` | string | Email de contato |
| `github` | string | URL do perfil GitHub |
| `resume` | string | `"resume.html"` |
| `meta.pt` | object | `{ title, description, keywords }` — SEO PT |
| `meta.en` | object | `{ title, description, keywords }` — SEO EN |
| `meta.es` | object | `{ title, description, keywords }` — SEO ES |

## Schema do i18n JSON

Cada arquivo `i18n/{lang}.json` contém um objeto aninhado com 101 chaves folha. A estrutura deve ser idêntica em todos os arquivos de idioma.

| Chave raiz | Contagem folha | Finalidade |
| --- | --- | --- |
| `nav` | 12 | Navegação |
| `skipNav` | 1 | Link de skip |
| `hero` | 6 | Seção hero |
| `projects` | 15 | Grid de projetos (inclui `status.*` aninhado) |
| `skills` | 4 | Seção skills |
| `architecture` | 3 | Seção arquitetura |
| `about` | 7 | Seção sobre |
| `contact` | 4 | Seção contato |
| `footer` | 3 | Rodapé |
| `toast` | 2 | Notificações toast |
| `project` | 22 | Página genérica de projeto |

### Validação

Os três arquivos de idioma devem passar:
1. Estrutura de chaves idêntica (mesmas 101 chaves folha)
2. Mesmos comprimentos de array (skills.categories: 7, architecture.items: 10)
3. Todas as referências `data-i18n`, `data-i18n-attr`, `data-i18n-html` resolvem para uma chave real
4. Todas as referências estáticas `I18n.get()` e `t()` resolvem para uma chave real

## Contrato DOM

| Seletor / Atributo | Efeito | Onde usado |
| --- | --- | --- |
| `data-i18n="chave"` | textContent = tradução | Todas as páginas |
| `data-i18n-html="chave"` | innerHTML = tradução | Home (parágrafos about) |
| `data-i18n-attr="a:k;b:k"` | setAttribute por mapeamento | Todas as páginas (aria, placeholder) |
| `#project-root` | Container para renderização do ProjectPage | Páginas genéricas |
| `.lang-option[data-lang]` | Botão seletor de idioma | Todas as páginas |
| `.lang-current` | Exibição do idioma atual | Todas as páginas |
| `.theme-toggle` | Botão toggle de tema | Todas as páginas |
| `[data-reveal]` | Alvo do IntersectionObserver | Todas as páginas |
| `.filter-btn[data-filter][data-value]` | Botão de filtro | Home |
| `#project-search` | Input de busca | Home |
| `.copy-email[data-email]` | Botão copiar email | Home |
| `#toast` | Elemento de notificação toast | Home |

## Documentos Relacionados

- [architecture/components.md](../architecture/components.md)
- [application/i18n.md](../application/i18n.md)
- [glossary.md](../glossary.md)

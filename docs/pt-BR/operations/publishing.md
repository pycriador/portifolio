---
title: "Runbook de publicação"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Runbook de publicação

> Language: [English (EN)](../en/operations/publishing.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Fluxo de publicação

```text
Desenvolvedor faz push para origin/main
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

| Propriedade | Valor |
| --- | --- |
| Gatilho | Push para `origin/main` |
| Origem | Branch `main`, raiz `/` |
| URL | https://pycriador.github.io/portfolio/ |
| CI/CD | Nenhum (GitHub Pages integrado) |

## Procedimentos de atualização

### Adicionar um novo projeto

1. Adicionar entrada no array `PROJECTS` em `config/projects.js`:
   - Obrigatórios: `slug`, `title`, `category`, `status` (`"production"` ou `"in-development"`), `shortDescription`, `description`, `technologies`, `tags`, `github`
   - Opcionais: `overview`, `architecture`, `timeline`, `roadmap`, `challenges`, `solutions`, `gallery`
2. Criar `projects/<slug>/index.html`:
   - **Genérico**: HTML mínimo com `#project-root` + tags `<script>` padrão (copiar de uma página genérica existente)
   - **Showcase**: HTML completo standalone com próprio CSS/JS/assets
3. Adicionar entrada `<loc>` no `sitemap.xml`
4. Opcionalmente adicionar imagem OG em `projects/<slug>/images/og-image.png`
5. Se showcase: adicionar arquivos JS específicos em `projects/<slug>/js/`

### Adicionar um novo idioma

1. Criar `i18n/{code}.json` — copiar `en.json`, traduzir todos os 101 valores
2. Adicionar `{ code }` a `Settings.supportedLanguages` em `config/settings.js`
3. Adicionar em `Settings.languageLabels` e `Settings.languageNames`
4. Adicionar `<li class="lang-option" data-lang="{code}">` em:
   - Dropdown de idioma do `index.html`
   - Nav de cada página genérica (4 arquivos)
5. Adicionar entrada `LANG_MAP` em `js/i18n.js` se o navegador enviar uma variante
6. Adicionar `Profile.meta.{code}` em `config/profile.js`
7. Adicionar mapeamento de locale na função `updateSEO()` de `js/i18n.js`

### Atualizar dados do perfil

Editar `config/profile.js`:
- `name`, `role`, `email`, `github`, `resume` — dados pessoais
- `meta.{lang}` — SEO por idioma (title, description, keywords)

### Atualizar meta tags de SEO

Editar objeto meta em `config/profile.js` para tags dinâmicas. Tags estáticas no `<head>` do `index.html` para imagem Open Graph e URL canônica.

### Atualizar estilos

Editar arquivos CSS em `css/`. Arquivos principais:
- `css/variables.css` — tokens de cor, espaçamento, tipografia
- `css/style.css` — específico da home
- `css/projects.css` — específico da página de projeto
- `css/responsive.css` — media queries

## Lista de validação

Antes de fazer push:

| Verificação | Comando / Ação |
| --- | --- |
| Estrutura i18n | Rodar `node validate-i18n.js` — os 3 arquivos devem ter 101 chaves idênticas |
| Sintaxe JS | Rodar `node --check js/*.js` |
| Todas as referências `data-i18n` resolvem | Rodar script de verificação de referências |
| Contagem de projetos confere com sitemap | `grep -c '<loc>' sitemap.xml` deve ser 14 (+ 1 para home) |
| Sem inglês hardcoded em páginas genéricas | Buscar texto em inglês fora de `data-i18n` |
| Chaves de status normalizadas | Buscar em `config/projects.js` — apenas `"production"` ou `"in-development"` |

## Resposta a incidentes

| Problema | Ação |
| --- | --- |
| Site inacessível | Verificar status do GitHub Pages; verificar se branch `main` existe |
| Página quebrada | Verificar console do navegador por erros JS; verificar se arquivos de config carregam |
| Traduções ausentes | Verificar se `i18n/{lang}.json` tem todas as 101 chaves; verificar valor do atributo `data-i18n` |
| Flash de tema | Verificar se script inline no `<head>` está presente e chave do localStorage confere |

## Documentos Relacionados

- [architecture/overview.md](../architecture/overview.md)
- [project-overview.md](../project-overview.md)
- [data-contracts.md](../contracts/data-contracts.md)

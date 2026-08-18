---
title: "ADR-0003: i18n via JSON + atributos DOM"
status: "ACCEPTED"
owner: "willian-rosa"
created: "2026-03-01"
updated: "2026-08-17"
version: "1.0"
---

# ADR-0003: i18n via JSON + atributos DOM

> Language: [English (EN)](../en/decisions/ADR-0003-i18n-json-dom-attributes.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

## Status

ACCEPTED

## Data

2026-03-01

## Contexto

O portfólio suporta 3 idiomas (PT-BR, EN, ES). O conteúdo deve ser traduzível sem modificar a estrutura HTML. A abordagem anterior tinha strings hardcoded e traduções ausentes. Frameworks como i18next adicionam tamanho significativo ao bundle.

## Problema

Como implementar internacionalização em um site estático vanilla JS com zero dependências.

## Decisão

Usar arquivos JSON de tradução (`i18n/{lang}.json`) com 101 chaves folha cada, aplicados ao DOM via atributos customizados:
- `data-i18n="chave"` — define `textContent`
- `data-i18n-html="chave"` — define `innerHTML`
- `data-i18n-attr="atributo:chave;atributo:chave"` — define atributos (aria, placeholder)

Idioma armazenado em `localStorage`. Módulo I18n carrega traduções via `fetch()`, percorre o DOM, aplica traduções e dispara CustomEvent `i18n:changed`.

## Alternativas Consideradas

| Alternativa | Prós | Contras | Rejeitada |
| --- | --- | --- | --- |
| i18next | Testado, interpolação | 14KB min, dependência de build | Sim — viola zero deps |
| HTML `lang` + CSS `:lang()` | Nativo | Afeta só CSS, não conteúdo JS | Sim — insuficiente |
| Hardcoded por página | Simples | Massiva duplicação, impossível manter | Sim — abordagem anterior falhou |
| `Intl.MessageFormat` + JSON | Padrão | Suporte varia, verboso | Sim — excesso |
| JSON + atributos DOM | Zero deps, simples, rápido | DOM walk manual, sem interpolação | **Não — escolhido** |

## Consequências

| Tipo | Consequência |
| --- | --- |
| Positivo | Zero dependências |
| Positivo | Um arquivo JSON por idioma — fácil de traduzir |
| Positivo | Baseado em atributos — sem mudança em templates JS |
| Positivo | Evento `i18n:changed` permite re-render dinâmico |
| Negativo | Sem interpolação (sem substituição `{nome}`) |
| Negativo | DOM walk manual a cada troca de idioma |
| Negativo | Deve manter estrutura idêntica em 3 arquivos JSON |
| Negativo | Conteúdo HTML requer `data-i18n-html` (consideração de segurança) |

## Riscos

| Risco | Mitigação |
| --- | --- |
| Divergência de chaves entre arquivos JSON | Script de validação (101 chaves × 3 arquivos) |
| Chaves desatualizadas | Verificação de contagem de chaves a cada build |
| XSS via `innerHTML` | Apenas conteúdo confiável em chaves `data-i18n-html` |

## Componentes Afetados

- `js/i18n.js` — motor I18n
- `js/project-page.js` — usa `I18n.get()` e helper `t()`
- `js/projects.js` — usa helper `t()`
- `i18n/pt.json`, `i18n/en.json`, `i18n/es.json`
- Todas as páginas HTML com atributos `data-i18n`

## Decisões Relacionadas

- [ADR-0001](ADR-0001-vanilla-javascript.md) — zero dependências
- [ADR-0004](ADR-0004-showcase-pages-portuguese-only.md) — showcase PT-only

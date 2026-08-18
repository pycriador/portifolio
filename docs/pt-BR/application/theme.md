---
title: "Sistema de tema"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Sistema de tema

> Language: [English (EN)](../en/application/theme.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Arquitetura

Tema escuro/claro com três camadas de persistência: script inline (prevenir flash) → ThemeManager (runtime) → localStorage.

## Fluxo

```text
Carregamento da página
│
├─ Script inline no <head> (síncrono):
│  └─ Lê localStorage('portfolio-theme') → define atributo data-theme
│     (previne flash branco no tema escuro)
│
├─ ThemeManager.init() (deferred):
│  ├─ getStoredTheme() → localStorage
│  ├─ Se null: getSystemPreference() → prefers-color-scheme
│  ├─ Se null: usa Settings.defaultTheme ('dark')
│  └─ setTheme(theme) → data-theme + localStorage
│
└─ Clique em .theme-toggle → ThemeManager alterna tema
```

## Persistência

| Chave de storage | Escopo | Valores |
| --- | --- | --- |
| `portfolio-theme` | localStorage | `"dark"` ou `"light"` |

## Prioridade de detecção

| Prioridade | Fonte | Condição |
| --- | --- | --- |
| 1 | localStorage | Valor existe |
| 2 | Preferência do sistema | `prefers-color-scheme: dark` |
| 3 | Padrão | `Settings.defaultTheme` = `"dark"` |

## Integração CSS

```css
:root, [data-theme="dark"] { /* tokens escuros */ }
[data-theme="light"] { /* tokens claros */ }
```

A transição de tema usa a classe `.theme-transitioning` com transições CSS.

## Componentes afetados

| Componente | Impacto do tema |
| --- | --- |
| Todos os arquivos CSS | Variáveis se adaptam ao `[data-theme]` |
| Script inline no `<head>` | Lê/escreve `data-theme` antes do DOM estar pronto |
| ThemeManager | Gerencia `data-theme` e localStorage |
| Botão `.theme-toggle` | Toggle visual (ícones sol/lua) |

## Documentos Relacionados

- [architecture/components.md](../architecture/components.md)
- [contracts/data-contracts.md](../contracts/data-contracts.md)

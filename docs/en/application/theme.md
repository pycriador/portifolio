---
title: "Theme system"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Theme system

> Language: EN | [Português (pt-BR)](../pt-BR/application/theme.md)
>
> Status: ACCEPTED
>
> Documentation Standard v1.0
>
> Authority: Verified

## Architecture

Dark/light theme with three-layer persistence: inline script (prevent flash) → ThemeManager (runtime) → localStorage.

## Flow

```text
Page load
│
├─ Inline <head> script (synchronous):
│  └─ Read localStorage('portfolio-theme') → set data-theme attribute
│     (prevents white flash on dark theme)
│
├─ ThemeManager.init() (deferred):
│  ├─ getStoredTheme() → localStorage
│  ├─ If null: getSystemPreference() → prefers-color-scheme
│  ├─ If null: use Settings.defaultTheme ('dark')
│  └─ setTheme(theme) → data-theme + localStorage
│
└─ .theme-toggle click → ThemeManager toggles theme
```

## Persistence

| Storage key | Scope | Values |
| --- | --- | --- |
| `portfolio-theme` | localStorage | `"dark"` or `"light"` |

## Detection priority

| Priority | Source | Condition |
| --- | --- | --- |
| 1 | localStorage | Value exists |
| 2 | System preference | `prefers-color-scheme: dark` |
| 3 | Default | `Settings.defaultTheme` = `"dark"` |

## CSS integration

```css
:root, [data-theme="dark"] { /* dark tokens */ }
[data-theme="light"] { /* light tokens */ }
```

Theme transition uses `.theme-transitioning` class with CSS transitions.

## Affected components

| Component | Theme impact |
| --- | --- |
| All CSS files | Variables adapt to `[data-theme]` |
| inline `<head>` script | Reads/writes `data-theme` before DOM ready |
| ThemeManager | Manages `data-theme` and localStorage |
| `.theme-toggle` button | Visual toggle (sun/moon icons) |

## Related Documents

- [architecture/components.md](../architecture/components.md)
- [contracts/data-contracts.md](../contracts/data-contracts.md)

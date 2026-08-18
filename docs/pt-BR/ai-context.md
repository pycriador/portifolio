---
title: "Contexto de IA"
status: "ACCEPTED"
owner: "willian-rosa"
updated: "2026-08-17"
---

# Contexto de IA

> Language: [English (EN)](../en/ai-context.md) | pt-BR
>
> Status: ACCEPTED
>
> Documentation Standard v1.0

Ponto de entrada principal para agentes de IA neste projeto. Pessoas preparando prompts devem começar aqui, depois seguir os links — não carregue o corpus inteiro sem critério.

Esta página é intencionalmente curta. Detalhes vivem nos documentos vinculados.

## Início

1. Leia este arquivo.
2. Carregue a profundidade necessária pela pergunta ([Hierarquia de Níveis](#hierarquia-de-níveis-03)).
3. Consulte [glossary.md](glossary.md) para termos específicos do projeto.

## Identidade do Projeto

| Propriedade | Valor |
| --- | --- |
| Nome | Willian Rosa Portfolio |
| Proprietário | Willian Rosa |
| Tipo | Site de portfólio estático multilíngue |
| Stack | HTML5 + CSS3 + JS vanilla ES2023 (zero deps) |
| Hospedagem | GitHub Pages |
| URL | https://pycriador.github.io/portfolio/ |
| Idiomas | PT-BR (padrão), EN, ES |

## Hierarquia de Níveis (0–3)

| Nível | Foco | Documentos | Carregar quando |
| --- | --- | --- | --- |
| **0** | Esta entrada + glossário | ai-context.md, glossary.md | Sempre |
| **1** | Contexto do sistema | [project-overview.md](project-overview.md) | "O que é este projeto?" |
| **2** | Arquitetura e componentes | [architecture/overview.md](architecture/overview.md), [architecture/components.md](architecture/components.md) | Estrutura, módulos, dependências |
| **3** | Modelos de dados, específicos de páginas, operações | [contracts/data-contracts.md](contracts/data-contracts.md), [application/pages.md](application/pages.md), [application/i18n.md](application/i18n.md), [operations/publishing.md](operations/publishing.md) | Estrutura de páginas, schemas de dados, como publicar |

Níveis 4–6 (confiabilidade operacional, segurança, evidências) não se aplicam a um portfólio estático.

## Fatos-Chave

- 13 projetos: 4 genéricos (dinâmicos via `js/project-page.js`) + 9 showcase (estáticos PT)
- i18n: 101 chaves de tradução × 3 idiomas (PT/EN/ES), arquivos JSON + atributos DOM
- Tema: escuro/claro com preferência do sistema, persistência em localStorage
- Sem build step, sem dependências, sem CI/CD
- Array PROJECTS em `config/projects.js` é a única fonte de verdade para dados de projetos

## Não-Objetivos

- Sem RAG, embeddings, vector DB, MCP ou mecanismo de busca
- Sem backend ou API
- Sem autenticação de usuário

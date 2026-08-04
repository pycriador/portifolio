/* ============================================
   SPECFORGE.JS — Product Showcase Engine
   Spec-Driven Engineering Platform
   ============================================ */

const SpecForgeConfig = Object.freeze({
  keyNumbers: [
    { value: 100, suffix: '%', label: 'Spec First', desc: 'Toda mudança nasce de uma especificação versionada.' },
    { value: 6, suffix: '+', label: 'Artefatos por Spec', desc: 'SDK, docs, testes e mocks gerados de uma única fonte.' },
    { value: 11, suffix: '', label: 'Etapas do Pipeline', desc: 'Da ideia à documentação viva, sem fricção.' },
    { value: '∞', suffix: '', static: true, label: 'Iterações', desc: 'Evolução contínua sem quebrar contratos.' }
  ],

  studios: [
    { name: 'Spec Studio', desc: 'Edição colaborativa de specs com schema, validação e versionamento.', status: 'Ativo', cat: 'Núcleo', icon: 'file' },
    { name: 'Architecture Studio', desc: 'Desenho de arquitetura dirigido por regras e linting de contrato.', status: 'Ativo', cat: 'Núcleo', icon: 'layers' },
    { name: 'Database Studio', desc: 'Schemas e migrations derivadas da especificação de dados.', status: 'Ativo', cat: 'Núcleo', icon: 'database' },
    { name: 'API Studio', desc: 'Contratos REST/OpenAPI com validação por schema.', status: 'Ativo', cat: 'Núcleo', icon: 'api' },
    { name: 'Prompt Studio', desc: 'Templates de prompts versionados, testáveis e versionados.', status: 'Em desenvolvimento', cat: 'IA', icon: 'sparkles' },
    { name: 'Test Studio', desc: 'Testes de contrato e mocks gerados automaticamente.', status: 'Ativo', cat: 'Qualidade', icon: 'check' },
    { name: 'Docs Studio', desc: 'Documentação viva, atualizada a cada merge.', status: 'Ativo', cat: 'Publicação', icon: 'book' },
    { name: 'Release Studio', desc: 'SDKs, packages e changelogs emitidos por spec.', status: 'Planejado', cat: 'Entrega', icon: 'rocket' }
  ],

  features: [
    { tag: 'Automação', title: 'Spec First', desc: 'A especificação é a fonte de verdade; o código é apenas um artefato.', icon: 'file' },
    { tag: 'Automação', title: 'AST Parsing', desc: 'Análise de código existente para extrair contratos automaticamente.', icon: 'git' },
    { tag: 'Tipagem', title: 'SDK Type-Safe', desc: 'SDKs gerados com tipos completos, sem `any` no caminho.', icon: 'code' },
    { tag: 'Docs', title: 'Documentação Viva', desc: 'Documentação sempre sincronizada com a especificação.', icon: 'book' },
    { tag: 'Integração', title: 'CI/CD Nativo', desc: 'GitHub Actions para validar, gerar e publicar em cada push.', icon: 'gear' },
    { tag: 'Dados', title: 'Database as Code', desc: 'Migrations derivadas do schema especificado.', icon: 'database' },
    { tag: 'Qualidade', title: 'Testes de Contrato', desc: 'Mocks e asserts gerados para validar conformidade.', icon: 'check' },
    { tag: 'Infra', title: 'Dockerizados', desc: 'Execução isolada e reproduzível em qualquer ambiente.', icon: 'container' },
    { tag: 'Padrões', title: 'OpenAPI', desc: 'Contratos REST no padrão de mercado, versionados.', icon: 'api' }
  ],

  architecture: [
    { name: 'CLI / Editor', desc: 'Interfaces de interação: CLI, VSCode e API de automação.', icon: 'terminal' },
    { name: 'Spec Engine', desc: 'Parsing, validação e versionamento de especificações.', icon: 'file' },
    { name: 'Schema Validator', desc: 'Validação declarativa com erros acionáveis.', icon: 'check' },
    { name: 'AST Analyzer', desc: 'Extrai contratos de código-fonte existente.', icon: 'git' },
    { name: 'Generator Core', desc: 'Motores de geração por alvo: SDK, docs, testes e mocks.', icon: 'code' },
    { name: 'Template Engine', desc: 'Templates versionados e sobreponíveis.', icon: 'layout' },
    { name: 'CLI Runner', desc: 'Orquestra pipelines em CI/CD.', icon: 'gear' },
    { name: 'Registry', desc: 'Catálogo de specs, artefatos e versões.', icon: 'layers' },
    { name: 'Artifact Store', desc: 'Publicação de pacotes, mocks e bundles.', icon: 'container' },
    { name: 'External Systems', desc: 'Git, CI, registries e sistemas legados.', icon: 'globe' }
  ],

  tech: [
    { name: 'TypeScript', role: 'CLI e SDKs com tipagem de ponta a ponta', spec: '5.x' },
    { name: 'Go', role: 'Motor de parsing e geração de alto desempenho', spec: '1.22' },
    { name: 'OpenAPI', role: 'Contratos REST como fonte de verdade', spec: '3.1' },
    { name: 'AST Parsing', role: 'Extrai contratos de código existente', spec: 'go/ast' },
    { name: 'Docker', role: 'Execução isolada e reproduzível', spec: 'Multi-stage' },
    { name: 'GitHub Actions', role: 'Pipeline de validação e publicação', spec: 'YAML' },
    { name: 'Handlebars', role: 'Templates para geração de artefatos', spec: 'Templates' },
    { name: 'Semver', role: 'Versionamento de specs e SDKs', spec: '2.0' },
    { name: 'JSON Schema', role: 'Validação declarativa de modelos', spec: 'Draft 2020-12' },
    { name: 'Mock Server', role: 'Mocks de API para testes e frontends', spec: 'HTTP' },
    { name: 'Markdown', role: 'Documentação gerada e versionada', spec: 'MDX' },
    { name: 'npm / Go Modules', role: 'Publicação de pacotes e SDKs', spec: 'Registry' }
  ],

  timeline: [
    {
      num: 'P1',
      title: 'Foundation',
      status: 'Concluído',
      desc: 'O motor central: especificações como fonte de verdade, com parsing, validação e CLI.',
      items: [
        'Spec Engine com versionamento',
        'Schema Validator com erros acionáveis',
        'CLI com comandos de init, validate e generate',
        'AST Analyzer para extração de contratos'
      ]
    },
    {
      num: 'P2',
      title: 'Generators',
      status: 'Em andamento',
      desc: 'Geradores de artefatos de alta qualidade, sempre sincronizados com a spec.',
      items: [
        'SDK TypeScript type-safe',
        'Documentação viva em Markdown/MDX',
        'Testes de contrato e mocks',
        'Migrations de banco derivadas do schema'
      ]
    },
    {
      num: 'P3',
      title: 'Studios',
      status: 'Planejado',
      desc: 'Experiências específicas por contexto, reutilizando o mesmo motor central.',
      items: [
        'Prompt Studio com templates de IA',
        'Test Studio com execução em nuvem',
        'Release Studio com changelogs automáticos',
        'Docs Studio com publicação em um clique'
      ]
    },
    {
      num: 'P4',
      title: 'Ecosystem',
      status: 'Planejado',
      desc: 'Ecosistema aberto: plugins, templates e integrações da comunidade.',
      items: [
        'Marketplace de geradores',
        'Plugin API para alvos customizados',
        'Integrações com Git, CI e registries',
        'Webhooks e eventos de spec'
      ]
    },
    {
      num: 'P5',
      title: 'Enterprise',
      status: 'Planejado',
      desc: 'Governança e escala para times grandes e múltiplos repositórios.',
      items: [
        'SSO corporativo (SAML / OIDC)',
        'Auditoria e trilhas de mudança',
        'Multi-repo e monorepo híbridos',
        'Alta disponibilidade e auto-hosting'
      ]
    }
  ],

  future: [
    { title: 'IA Nativa', desc: 'Sugestões de contratos e prompts com IA, ainda versionadas e auditáveis.', icon: 'sparkles' },
    { title: 'Plugins', desc: 'Marketplace de geradores e templates da comunidade.', icon: 'plug' },
    { title: 'Multilinguagem', desc: 'SDKs para além de TypeScript e Go: Python, Java e Dart.', icon: 'globe' },
    { title: 'Governança', desc: 'Aprovações e auditoria de mudanças de contrato.', icon: 'gear' },
    { title: 'Multi-Repo', desc: 'Orquestração de specs em monorepos e repositórios distribuídos.', icon: 'layers' },
    { title: 'Extensões de Editor', desc: 'VSCode, JetBrains e web com preview em tempo real.', icon: 'terminal' }
  ],

  screenshots: [
    { cat: 'Editor', label: 'Spec Editor', desc: 'Edição com validação em tempo real.', alt: 'Editor de especificação do SpecForge com validação em tempo real.', variant: 'wide' },
    { cat: 'Editor', label: 'Tree View', desc: 'Navegação por arquivos e contratos.', alt: 'Árvore de arquivos do SpecForge mostrando a estrutura de specs.', variant: 'desktop' },
    { cat: 'Editor', label: 'Preview Split', desc: 'Spec e artefato lado a lado.', alt: 'Preview dividido do SpecForge com spec e artefato lado a lado.', variant: 'wide' },
    { cat: 'CLI', label: 'Pipeline CLI', desc: 'Geração em um comando.', alt: 'Pipeline do SpecForge rodando no terminal.', variant: 'wide' },
    { cat: 'CLI', label: 'Contrato Diff', desc: 'Comparação visual entre versões.', alt: 'Comparação de contrato do SpecForge entre versões.', variant: 'desktop' },
    { cat: 'Gerados', label: 'SDK TypeScript', desc: 'Tipos completos, zero `any`.', alt: 'SDK TypeScript gerado pelo SpecForge com tipos completos.', variant: 'wide' },
    { cat: 'Gerados', label: 'Documentação', desc: 'Docs vivas, sempre atuais.', alt: 'Documentação gerada pelo SpecForge a partir das specs.', variant: 'wide' },
    { cat: 'Gerados', label: 'Testes de Contrato', desc: 'Asserts e mocks automáticos.', alt: 'Testes de contrato gerados pelo SpecForge.', variant: 'desktop' },
    { cat: 'Dark', label: 'Modo Escuro', desc: 'Tema escuro para longas sessões.', alt: 'SpecForge no modo escuro.', variant: 'wide' },
    { cat: 'Light', label: 'Modo Claro', desc: 'Leitura clara e objetiva.', alt: 'SpecForge no modo claro.', variant: 'wide' },
    { cat: 'Diagramas', label: 'Arquitetura', desc: 'Camadas do motor de geração.', alt: 'Diagrama de arquitetura do SpecForge.', variant: 'wide' },
    { cat: 'Diagramas', label: 'Fluxo de Trabalho', desc: 'Da ideia à documentação viva.', alt: 'Fluxograma do pipeline do SpecForge.', variant: 'wide' }
  ]
});

const SpecForge = (() => {
  const icons = {
    file: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/></svg>',
    layers: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    database: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    api: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    book: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    rocket: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    git: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="12" r="3"/><line x1="6" y1="8" x2="6" y2="16"/><line x1="8.5" y1="6.5" x2="15.5" y2="10.5"/><line x1="15.5" y1="13.5" x2="8.5" y2="17.5"/></svg>',
    code: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    gear: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    container: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    terminal: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    layout: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    plug: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6M15 2v6"/><path d="M7 8h10v3a5 5 0 0 1-10 0V8z"/><path d="M12 16v5"/></svg>',
    globe: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    settings: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
  };

  const currentUrl = () => window.location.href;
  const basePath = () => (window.location.pathname.includes('/projects/') ? '../../' : '');

  function icon(name, size = 22) {
    const svg = icons[name] || icons.file;
    return svg.replace(/width="22"/, `width="${size}"`).replace(/height="22"/, `height="${size}"`);
  }

  function renderNumbers() {
    const grid = document.getElementById('spf-numbers-grid');
    if (!grid) return;
    grid.innerHTML = SpecForgeConfig.keyNumbers.map((n) => `
      <article class="spf-numbers__card spf-card" data-reveal>
        <span class="spf-numbers__value${n.static ? ' is-static' : ''}">
          ${n.static ? n.value : `<span class="spf-counter" data-value="${n.value}" data-suffix="${n.suffix}">0</span>`}
        </span>
        <p class="spf-numbers__label">${n.label}</p>
        <p class="spf-numbers__desc">${n.desc}</p>
      </article>`).join('');
  }

  function renderStudios() {
    const grid = document.getElementById('spf-studios-grid');
    if (!grid) return;
    grid.innerHTML = SpecForgeConfig.studios.map((m) => {
      const cls = m.status === 'Ativo' ? 'active' : m.status === 'Em desenvolvimento' ? 'dev' : 'planned';
      return `
        <article class="spf-studio spf-card" data-reveal>
          <div class="spf-studio__head">
            <span class="spf-studio__icon" aria-hidden="true">${icon(m.icon)}</span>
            <span class="spf-studio__cat">${m.cat}</span>
          </div>
          <h3 class="spf-studio__name">${m.name}</h3>
          <p class="spf-studio__desc">${m.desc}</p>
          <span class="spf-status spf-status--${cls}">${m.status}</span>
        </article>`;
    }).join('');
  }

  function renderFeatures() {
    const grid = document.getElementById('spf-features-grid');
    if (!grid) return;
    grid.innerHTML = SpecForgeConfig.features.map((f) => `
      <article class="spf-feature spf-card" data-reveal>
        <span class="spf-feature__icon" aria-hidden="true">${icon(f.icon)}</span>
        <span class="spf-feature__tag">${f.tag}</span>
        <h3 class="spf-feature__title">${f.title}</h3>
        <p class="spf-feature__desc">${f.desc}</p>
      </article>`).join('');
  }

  function renderArchitecture() {
    const wrap = document.getElementById('spf-arch-layers');
    if (!wrap) return;

    const nodes = SpecForgeConfig.architecture.map((l) => `
      <li class="spf-arch__node">
        <div class="spf-arch__node-info" data-reveal>
          <h3 class="spf-arch__node-name">${l.name}</h3>
          <p class="spf-arch__node-desc">${l.desc}</p>
        </div>
        <span class="spf-arch__node-badge" aria-hidden="true">${icon(l.icon, 24)}</span>
      </li>`).join('');

    wrap.innerHTML = `<div class="spf-arch__line" aria-hidden="true"></div>${nodes}`;
  }

  function renderTech() {
    const grid = document.getElementById('spf-tech-grid');
    if (!grid) return;
    grid.innerHTML = SpecForgeConfig.tech.map((t) => `
      <article class="spf-tech spf-card" data-reveal>
        <h3 class="spf-tech__name"><span class="spf-tech__dot" aria-hidden="true"></span>${t.name}</h3>
        <p class="spf-tech__desc">${t.role}</p>
        <span class="spf-tech__spec">${t.spec}</span>
      </article>`).join('');
  }

  function renderTimeline() {
    const wrap = document.getElementById('spf-timeline-list');
    if (!wrap) return;

    wrap.innerHTML = SpecForgeConfig.timeline.map((p) => {
      const cls = p.status === 'Concluído' ? 'active' : p.status === 'Em andamento' ? 'dev' : 'planned';
      return `
        <li class="spf-phase">
          <div class="spf-phase__card" data-reveal>
            <div class="spf-phase__meta">
              <span class="spf-phase__num">${p.num}</span>
              <span class="spf-status spf-status--${cls} spf-phase__status">${p.status}</span>
            </div>
            <h3 class="spf-phase__title">${p.title}</h3>
            <p class="spf-phase__desc">${p.desc}</p>
            <ul class="spf-phase__items">
              ${p.items.map((i) => `<li>${i}</li>`).join('')}
            </ul>
          </div>
          <span class="spf-phase__pin" aria-hidden="true">${p.num}</span>
        </li>`;
    }).join('');
  }

  function renderFuture() {
    const grid = document.getElementById('spf-future-grid');
    if (!grid) return;
    grid.innerHTML = SpecForgeConfig.future.map((f) => `
      <article class="spf-future spf-card" data-reveal>
        <span class="spf-future__icon" aria-hidden="true">${icon(f.icon)}</span>
        <div>
          <h3 class="spf-future__title">${f.title}</h3>
          <p class="spf-future__desc">${f.desc}</p>
        </div>
      </article>`).join('');
  }

  function renderScreenshots() {
    const grid = document.getElementById('spf-shots-grid');
    const filters = document.getElementById('spf-shots-filters');
    if (!grid) return;

    const cats = ['Todos', ...new Set(SpecForgeConfig.screenshots.map((s) => s.cat))];
    const realDir = `${basePath()}assets/gallery/`;

    if (filters) {
      filters.innerHTML = cats.map((c, i) =>
        `<button class="spf-tab spf-filter-chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
      ).join('');
    }

    grid.innerHTML = SpecForgeConfig.screenshots.map((s, i) => `
      <figure class="spf-shots__item spf-mock spf-mock--${s.variant}" data-reveal data-shots-cat="${s.cat}" data-shot="${i}" data-real-image="${realDir}specforge-${s.cat.toLowerCase()}-${i + 1}.webp">
        <div class="spf-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="spf-mock__screen">
          <div class="spf-mock__screen-inner">
            <span class="spf-mock__icon" aria-hidden="true">${icon(s.cat === 'CLI' ? 'terminal' : s.cat === 'Diagramas' ? 'layers' : 'code')}</span>
            <span class="spf-mock__label">${s.label}</span>
            <span class="spf-mock__meta">placeholder — pronto para captura real</span>
          </div>
        </div>
        <figcaption class="spf-mock__figcaption">
          <span class="spf-mock__figcaption-title">${s.label}</span>
          <span class="spf-mock__figcaption-desc">${s.desc}</span>
        </figcaption>
      </figure>`).join('');
  }

  function initScreenshotFilters() {
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.spf-filter-chip');
      if (!chip) return;

      document.querySelectorAll('.spf-filter-chip').forEach((c) => {
        const active = c === chip;
        c.classList.toggle('is-active', active);
        c.setAttribute('aria-pressed', String(active));
      });

      const cat = chip.dataset.filter;
      document.querySelectorAll('[data-shots-cat]').forEach((item) => {
        item.classList.toggle('is-hidden', cat !== 'Todos' && item.dataset.shotsCat !== cat);
      });
    });
  }

  function initCounters() {
    const els = document.querySelectorAll('.spf-counter');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        animateCounter(el);
        observer.unobserve(el);
      });
    }, { threshold: 0.4 });

    els.forEach((el) => observer.observe(el));
  }

  function animateCounter(el) {
    const target = Number(el.dataset.value);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  function initPrevNext() {
    if (typeof PROJECTS === 'undefined' || !PROJECTS.length) return;

    const idx = PROJECTS.findIndex((p) => p.slug === 'specforge');
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const base = basePath();

    const prevLink = document.getElementById('spf-prev');
    const nextLink = document.getElementById('spf-next');
    if (prevLink) {
      prevLink.href = `${base}projects/${prev.slug}/`;
      const titleEl = prevLink.querySelector('[data-role="title"]');
      if (titleEl) titleEl.textContent = prev.title;
    }
    if (nextLink) {
      nextLink.href = `${base}projects/${next.slug}/`;
      const titleEl = nextLink.querySelector('[data-role="title"]');
      if (titleEl) titleEl.textContent = next.title;
    }
  }

  function initShare() {
    const shareBtn = document.getElementById('spf-share');
    const copyBtn = document.getElementById('spf-copy');
    const copied = document.getElementById('spf-copied');

    const fallbackCopy = (text, done) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        done();
      } catch {
        done();
      }
      document.body.removeChild(ta);
    };

    const showCopied = () => {
      if (!copied) return;
      copied.classList.add('is-visible');
      setTimeout(() => copied.classList.remove('is-visible'), 1800);
    };

    if (shareBtn) {
      shareBtn.addEventListener('click', async () => {
        const data = {
          title: 'SpecForge — Automated Specification Generator',
          text: 'Conheça o SpecForge: gere specs, SDKs, docs e testes a partir de uma única fonte de verdade.',
          url: currentUrl()
        };
        if (navigator.share) {
          try { await navigator.share(data); } catch { /* canceled */ }
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(currentUrl()).catch(() => {});
          showCopied();
        }
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const url = currentUrl();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(showCopied).catch(() => fallbackCopy(url, showCopied));
        } else {
          fallbackCopy(url, showCopied);
        }
      });
    }
  }

  function initReveals() {
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  function init() {
    renderNumbers();
    renderStudios();
    renderFeatures();
    renderArchitecture();
    renderTech();
    renderTimeline();
    renderFuture();
    renderScreenshots();

    initCounters();
    initScreenshotFilters();
    initPrevNext();
    initShare();
    initReveals();

    if (typeof Gallery !== 'undefined') Gallery.init();
    if (typeof Workflow !== 'undefined') Workflow.init();

    const yearEl = document.getElementById('spf-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof Navigation !== 'undefined') Navigation.init();
    init();
  });

  return { init, basePath, icon };
})();

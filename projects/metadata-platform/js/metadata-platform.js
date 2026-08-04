/* ============================================
   METADATA-PLATFORM.JS — Product Showcase Engine
   Enterprise Low-Code Metadata Engine
   ============================================ */

const MetadataPlatformConfig = Object.freeze({
  keyNumbers: [
    { value: 100, suffix: '+', label: 'Tipos de Componentes', desc: 'Formulários, tabelas, campos, validações e layouts prontos.' },
    { value: 50, suffix: '+', label: 'Configurações Dinâmicas', desc: 'Opções de metadados que moldam cada tela sem código.' },
    { value: 20, suffix: '+', label: 'Plataformas Reutilizando a Engine', desc: 'Produtos do ecossistema construídos sobre o mesmo núcleo.' },
    { value: '∞', suffix: '', static: true, label: '100% Metadata Driven', desc: 'Aplicações definidas por configuração, não por código repetitivo.' }
  ],

  modules: [
    { name: 'Metadata Registry', desc: 'Registro central de todos os objetos de metadados da plataforma.', status: 'Ativo', cat: 'Núcleo', icon: 'layers' },
    { name: 'Dynamic Forms', desc: 'Formulários renderizados a partir de definições declarativas.', status: 'Ativo', cat: 'Renderização', icon: 'form' },
    { name: 'Dynamic CRUD', desc: 'Criação, leitura, atualização e exclusão geradas por metadados.', status: 'Ativo', cat: 'Renderização', icon: 'database' },
    { name: 'Dynamic Tables', desc: 'Tabelas e listagens com colunas, filtros e ordenação declarativas.', status: 'Em desenvolvimento', cat: 'Renderização', icon: 'table' },
    { name: 'Validation Engine', desc: 'Motor de validações declarativas aplicadas automaticamente aos campos.', status: 'Ativo', cat: 'Núcleo', icon: 'check' },
    { name: 'Business Rules', desc: 'Regras de negócio configuráveis executadas em eventos de dados.', status: 'Em desenvolvimento', cat: 'Núcleo', icon: 'script' },
    { name: 'Workflow Metadata', desc: 'Fluxos de aprovação e etapas definidos como metadados executáveis.', status: 'Em desenvolvimento', cat: 'Automação', icon: 'workflow' },
    { name: 'Permissions Metadata', desc: 'Permissões por papel e escopo declaradas junto aos recursos.', status: 'Ativo', cat: 'Governança', icon: 'shield' },
    { name: 'Report Builder', desc: 'Relatórios configuráveis com agrupamento, filtros e exportação.', status: 'Planejado', cat: 'Análise', icon: 'chart' },
    { name: 'Dashboard Builder', desc: 'Dashboards montados por componentes de metadados.', status: 'Em desenvolvimento', cat: 'Análise', icon: 'gauge' },
    { name: 'Theme Engine', desc: 'Temas e identidade visual controlados por metadados de estilo.', status: 'Ativo', cat: 'Plataforma', icon: 'palette' },
    { name: 'Translation Engine', desc: 'Textos e rótulos traduzidos a partir de metadados de internacionalização.', status: 'Ativo', cat: 'Plataforma', icon: 'globe' },
    { name: 'API Metadata', desc: 'Contratos de API gerados e documentados a partir de metadados.', status: 'Planejado', cat: 'Integração', icon: 'api' },
    { name: 'Version Control', desc: 'Versionamento completo de metadados com diff e rollback.', status: 'Em desenvolvimento', cat: 'Governança', icon: 'history' },
    { name: 'Administration', desc: 'Administração central de ambientes, usuários e políticas.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'settings' },
    { name: 'Audit Trail', desc: 'Trilha imutável de alterações e execuções de metadados.', status: 'Ativo', cat: 'Governança', icon: 'eye' }
  ],

  features: [
    { tag: 'Produtividade', title: 'Formulários sem código', desc: 'Telas são definidas por configuração e renderizadas na hora — elimina páginas HTML escritas à mão para cada cadastro.', icon: 'form' },
    { tag: 'Produtividade', title: 'CRUDs automáticos', desc: 'A engine gera criar, ler, editar e excluir a partir da mesma definição de metadados.', icon: 'database' },
    { tag: 'Produtividade', title: 'Tabelas dinâmicas', desc: 'Listagens com colunas, filtros e ordenação declarativas, sem consultas repetidas por tela.', icon: 'table' },
    { tag: 'Consistência', title: 'Validações declarativas', desc: 'Regras de obrigatoriedade, formato e intervalo aplicadas a todos os formulários que usam o campo.', icon: 'check' },
    { tag: 'Consistência', title: 'Fonte única da verdade', desc: 'O mesmo campo é definido uma vez e reaproveitado em qualquer tela — sem duplicação de regras.', icon: 'layers' },
    { tag: 'Automação', title: 'Workflows por configuração', desc: 'Aprovações e etapas descritas como metadados executáveis, sem fluxos programados à mão.', icon: 'workflow' },
    { tag: 'Automação', title: 'Regras de negócio', desc: 'Lógica condicional configurável executada em eventos, reduzindo código de serviço.', icon: 'script' },
    { tag: 'Segurança', title: 'Permissões por metadado', desc: 'Cada recurso declara quem pode acessá-lo e a engine aplica o controle automaticamente.', icon: 'shield' },
    { tag: 'Segurança', title: 'RBAC integrado', desc: 'Papéis e escopos definidos uma vez e aplicados a formulários, tabelas e APIs.', icon: 'key' },
    { tag: 'Produtividade', title: 'Temas centralizados', desc: 'Mudar a identidade visual de todas as telas com uma única configuração.', icon: 'palette' },
    { tag: 'Produtividade', title: 'Internacionalização', desc: 'Rótulos e mensagens centralizados em metadados de tradução.', icon: 'globe' },
    { tag: 'Entrega', title: 'Versionamento de metadados', desc: 'Cada mudança vira uma versão rastreável com rollback — sem deploys arriscados de código.', icon: 'history' },
    { tag: 'Entrega', title: 'Publicação sem deploy', desc: 'Metadados aprovados entram em produção instantaneamente.', icon: 'send' },
    { tag: 'Automação', title: 'APIs geradas', desc: 'Contratos REST derivados dos metadados, sem controllers escritos à mão.', icon: 'api' },
    { tag: 'Governança', title: 'Trilha de auditoria', desc: 'Toda alteração e execução registrada de forma imutável.', icon: 'eye' },
    { tag: 'Entrega', title: 'Reuso entre produtos', desc: 'A engine é compartilhada por todo o ecossistema, reduzindo duplicação entre plataformas.', icon: 'boxes' },
    { tag: 'Produtividade', title: 'Componentes padronizados', desc: 'Mais de 100 tipos de componentes reutilizáveis em qualquer tela.', icon: 'grid' },
    { tag: 'Governança', title: 'Ambientes sincronizados', desc: 'Metadados migrados entre dev, staging e produção com consistência.', icon: 'refresh' },
    { tag: 'Automação', title: 'Renderização adaptativa', desc: 'A mesma definição renderiza em desktop, tablet e mobile.', icon: 'monitor' },
    { tag: 'Entrega', title: 'Adoção gradual', desc: 'Plataformas existentes consomem apenas os metadados de que precisam.', icon: 'plug' }
  ],

  architecture: [
    { name: 'Frontend', desc: 'Consumidores da engine: apps, portais e consoles renderizados de forma dinâmica.', icon: 'terminal' },
    { name: 'Metadata Engine', desc: 'Núcleo que armazena, valida e versiona todas as definições de metadados.', icon: 'layers' },
    { name: 'Rendering Engine', desc: 'Converte metadados em formulários, tabelas e layouts em tempo real.', icon: 'layout' },
    { name: 'Validation Engine', desc: 'Aplica regras declarativas a cada campo e formulário.', icon: 'check' },
    { name: 'Workflow Engine', desc: 'Executa fluxos de aprovação e etapas definidos como metadados.', icon: 'workflow' },
    { name: 'Business Rules', desc: 'Regras condicionais e cálculos executados em eventos de dados.', icon: 'script' },
    { name: 'Database', desc: 'PostgreSQL com metadados estruturados e versionados.', icon: 'database' },
    { name: 'Storage', desc: 'Arquivos, mídia e artefatos gerados pelas aplicações.', icon: 'container' },
    { name: 'Applications', desc: 'Sistemas do ecossistema que reutilizam a engine como núcleo.', icon: 'boxes' },
    { name: 'External Integrations', desc: 'APIs e conectores com o mundo externo via contratos gerados.', icon: 'api' }
  ],

  ecosystem: [
    { name: 'ServiceForge', tag: 'Atendimento e operações de serviço reutilizando a engine.', accent: 'sf', icon: 'users', resources: ['Formulários dinâmicos de chamados', 'CRUDs de filas e SLAs', 'Validações de atendimento', 'Workflows de aprovação', 'Relatórios de operação'] },
    { name: 'SpecForge', tag: 'Especificação de produtos a partir de metadados de API.', accent: 'spf', icon: 'api', resources: ['Contratos de API gerados', 'Formulários de entrada de specs', 'Renderização de documentação', 'Validações de campos', 'Versionamento de contratos'] },
    { name: 'DataForge', tag: 'Engenharia de dados com regras declarativas.', accent: 'df', icon: 'database', resources: ['Formulários de importação', 'Tabelas dinâmicas de dados', 'Validações por regras', 'Workflows de aprovação', 'Relatórios de qualidade'] },
    { name: 'Knowledge Platform', tag: 'Conteúdo e conhecimento como tipos dinâmicos.', accent: 'kp', icon: 'globe', resources: ['Tipos de conteúdo dinâmicos', 'Formulários de artigos', 'Tabelas de catálogo', 'Validações de conteúdo', 'Permissões por perfil'] },
    { name: 'People Identity Hub', tag: 'Identidade e acesso com permissões por metadado.', accent: 'pih', icon: 'fingerprint', resources: ['Formulários de colaboradores', 'Tabelas de diretório', 'Regras de sincronização', 'Workflows de provisionamento', 'Permissões RBAC'] },
    { name: 'ClauseForge', tag: 'Cláusulas e contratos com fluxos documentais.', accent: 'clf', icon: 'file', resources: ['Formulários de cláusulas', 'CRUDs de contratos', 'Regras condicionais', 'Workflows de revisão', 'Versionamento de documentos'] }
  ],

  tech: [
    { name: 'React', role: 'Interface dos estúdios e consumidores da engine', spec: 'SPA' },
    { name: 'TypeScript', role: 'Tipagem dos modelos e contratos de metadados', spec: '5.x' },
    { name: 'Metadata', role: 'Definições declarativas como fonte da verdade', spec: 'JSON' },
    { name: 'JSON', role: 'Formato canônico de armazenamento de metadados', spec: 'Schema' },
    { name: 'JSON Schema', role: 'Validação estrutural das definições de metadados', spec: 'Draft' },
    { name: 'REST APIs', role: 'Superfície de integração e consulta', spec: 'HTTP' },
    { name: 'Workflow', role: 'Fluxos de aprovação e etapas executáveis', spec: 'Engine' },
    { name: 'RBAC', role: 'Permissões por papel e escopo', spec: 'Segurança' },
    { name: 'Supabase', role: 'Auth, banco e storage gerenciados', spec: 'PaaS' },
    { name: 'PostgreSQL', role: 'Metadados versionados e consultas', spec: '15+' },
    { name: 'Versionamento', role: 'Histórico, diff e rollback de definições', spec: 'Git-like' },
    { name: 'Storage', role: 'Arquivos e artefatos das aplicações', spec: 'Files' },
    { name: 'Renderização Dinâmica', role: 'Telas montadas em tempo real', spec: 'Runtime' },
    { name: 'Low-Code', role: 'Configuração no lugar de código repetitivo', spec: 'Paradigma' }
  ],

  timeline: [
    {
      num: 'P1',
      title: 'Metadata Core',
      status: 'Concluído',
      desc: 'A fundação: modelo canônico, registro e versionamento de metadados.',
      items: [
        'Metadata Registry e Version Control',
        'Dynamic Forms e Dynamic CRUD',
        'Validation Engine com regras declarativas'
      ]
    },
    {
      num: 'P2',
      title: 'Rendering Engine',
      status: 'Em andamento',
      desc: 'Renderização dinâmica de telas e componentes.',
      items: [
        'Dynamic Tables e layouts',
        'Theme Engine e Translation Engine',
        'Renderização adaptativa desktop, tablet e mobile'
      ]
    },
    {
      num: 'P3',
      title: 'Workflow Platform',
      status: 'Planejado',
      desc: 'Automação de fluxos e regras de negócio.',
      items: [
        'Workflow Metadata e etapas de aprovação',
        'Business Rules em eventos de dados',
        'Permissões por metadado'
      ]
    },
    {
      num: 'P4',
      title: 'Low-Code Studio',
      status: 'Planejado',
      desc: 'Designer visual para modelar aplicações sem código.',
      items: [
        'Designer visual de formulários e tabelas',
        'Marketplace de componentes',
        'Templates reutilizáveis'
      ]
    },
    {
      num: 'P5',
      title: 'AI Assisted Modeling',
      status: 'Planejado',
      desc: 'Inteligência artificial que converte requisitos em metadados.',
      items: [
        'Geração de formulários por IA',
        'Conversão de specs em metadados',
        'Sugestões inteligentes de validação'
      ]
    }
  ],

  future: [
    { title: 'IA para Geração de Formulários', desc: 'Descrições em linguagem natural viram definições completas de metadados.', icon: 'sparkles' },
    { title: 'Conversão de Specs em Metadados', desc: 'Documentos de requisitos transformados em modelos executáveis.', icon: 'script' },
    { title: 'Designer Visual', desc: 'Estúdio drag-and-drop para modelar telas sem digitar configuração.', icon: 'wand' },
    { title: 'Marketplace de Componentes', desc: 'Biblioteca compartilhada de componentes publicados pela comunidade.', icon: 'boxes' },
    { title: 'Templates Reutilizáveis', desc: 'Pacotes prontos de formulários, tabelas e fluxos para novos projetos.', icon: 'copy' },
    { title: 'Versionamento Avançado', desc: 'Branches, comparação visual e aprovação colaborativa de metadados.', icon: 'history' },
    { title: 'Engine de Plugins', desc: 'Extensões que adicionam validadores, componentes e conectores.', icon: 'plug' },
    { title: 'SDK Público', desc: 'Kit de desenvolvimento para consumir e estender a engine.', icon: 'code' },
    { title: 'CLI', desc: 'Linha de comando para modelar, validar e publicar metadados.', icon: 'terminal' },
    { title: 'Sincronização entre Ambientes', desc: 'Promoção de metadados entre dev, staging e produção com trilha.', icon: 'refresh' }
  ],

  useCases: [
    { title: 'Sistemas administrativos', icon: 'form', problema: 'Cada tela administrativa é construída à mão com código repetitivo de formulário e listagem.', solucao: 'Metadados definem telas, campos e validações uma única vez; a engine renderiza tudo.', beneficio: 'Entrega de novas telas em minutos, não dias.' },
    { title: 'Plataformas low-code', icon: 'layers', problema: 'Plataformas low-code duplicam lógica de formulários e regras entre si.', solucao: 'Uma engine compartilhada de metadados reduz a duplicação entre plataformas.', beneficio: 'Menos manutenção e comportamento consistente em todo o ecossistema.' },
    { title: 'Aplicações internas', icon: 'send', problema: 'Aplicações internas sofrem com backlog de pequenas mudanças de tela.', solucao: 'Alterações de metadados entram em produção sem deploy de código.', beneficio: 'Equipes de negócio evoluem telas sem depender do time de TI.' },
    { title: 'Portais corporativos', icon: 'shield', problema: 'Portais exigem layouts e permissões diferentes por perfil de usuário.', solucao: 'Permissões por metadado controlam visibilidade de menus, formulários e ações.', beneficio: 'Portal dinâmico e seguro para cada papel.' },
    { title: 'CRMs', icon: 'workflow', problema: 'CRMs crescem com fluxos de aprovação e campos personalizados por cliente.', solucao: 'Workflows e campos definidos por metadados adaptam o sistema a cada operação.', beneficio: 'Personalização sem customização de código.' },
    { title: 'ERPs', icon: 'database', problema: 'ERPs têm telas rígidas que exigem customização cara para cada empresa.', solucao: 'Definições declarativas de módulos, tabelas e regras tornam o ERP configurável.', beneficio: 'Implantações mais rápidas e manuteníveis.' },
    { title: 'Sistemas de atendimento', icon: 'users', problema: 'Sistemas de serviço precisam de formulários e validações específicos por tipo de chamado.', solucao: 'Tipos de chamado renderizados por metadados com regras próprias.', beneficio: 'Novos serviços ativos sem reescrever código.' },
    { title: 'Aplicações SaaS', icon: 'grid', problema: 'SaaS multitenant precisa de personalização por cliente mantendo um código-base único.', solucao: 'Metadados por tenant definem comportamento sem bifurcar o produto.', beneficio: 'Uma plataforma, infinitas configurações.' }
  ],

  screenshots: [
    { cat: 'Metadados', label: 'Editor de Metadados', desc: 'Definição declarativa de campos, validações e exibição.', alt: 'Editor de metadados da Metadata Platform.', variant: 'wide' },
    { cat: 'Metadados', label: 'Menus Dinâmicos', desc: 'Menus e navegação montados por metadados.', alt: 'Menus dinâmicos da Metadata Platform.', variant: 'desktop' },
    { cat: 'Metadados', label: 'Versionamento', desc: 'Histórico, diff e rollback de definições.', alt: 'Versionamento de metadados da Metadata Platform.', variant: 'desktop' },
    { cat: 'Formulários', label: 'Construtor de Formulários', desc: 'Formulários dinâmicos com validações automáticas.', alt: 'Construtor de formulários da Metadata Platform.', variant: 'wide' },
    { cat: 'Formulários', label: 'Campos Dinâmicos', desc: 'Campos reutilizáveis em qualquer tela.', alt: 'Campos dinâmicos da Metadata Platform.', variant: 'desktop' },
    { cat: 'Tabelas', label: 'Construtor de Tabelas', desc: 'Tabelas com colunas, filtros e ordenação declarativas.', alt: 'Construtor de tabelas da Metadata Platform.', variant: 'wide' },
    { cat: 'Tabelas', label: 'CRUD Dinâmico', desc: 'Operações de dados geradas por metadados.', alt: 'CRUD dinâmico da Metadata Platform.', variant: 'desktop' },
    { cat: 'Regras', label: 'Editor de Regras', desc: 'Regras de validação e negócio configuráveis.', alt: 'Editor de regras da Metadata Platform.', variant: 'wide' },
    { cat: 'Regras', label: 'Workflow', desc: 'Fluxos de aprovação definidos como metadados.', alt: 'Workflow da Metadata Platform.', variant: 'desktop' },
    { cat: 'Dashboards', label: 'Dashboards', desc: 'Painéis montados por componentes de metadados.', alt: 'Dashboards da Metadata Platform.', variant: 'wide' },
    { cat: 'Temas', label: 'Dark Mode', desc: 'Tema escuro para operações intensivas.', alt: 'Metadata Platform no modo escuro.', variant: 'wide' },
    { cat: 'Temas', label: 'Light Mode', desc: 'Tema claro e objetivo.', alt: 'Metadata Platform no modo claro.', variant: 'wide' }
  ]
});

const MetadataPlatform = (() => {
  const icons = {
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    form: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
    table: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/>',
    field: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
    check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    workflow: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M6.5 10v2a3 3 0 0 0 3 3h4.5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    chart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/><line x1="2" y1="20" x2="22" y2="20"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    palette: '<path d="M12 22a10 10 0 1 1 10-10c0 1.7-1.3 3-3 3h-2.5a2.5 2.5 0 0 0-1.8 4.2c.5.5.6 1.1.3 1.8-.6 1-1.5 1-3 1z"/><circle cx="7.5" cy="11.5" r="1"/><circle cx="10.5" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    api: '<path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M2 12h20"/>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    gauge: '<path d="M12 14l4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    container: '<path d="M22 7l-10-5L2 7v10l10 5 10-5z"/><path d="M2 7l10 5 10-5"/><path d="M12 12v10"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    boxes: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.9 2.4L22 18l-2.1.6L19 21l-.9-2.4L16 18l2.1-.6z"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    play: '<polygon points="5 3 19 12 5 21 5 3"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    columns: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/>',
    rows: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/>',
    script: '<path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M8 9l3 3-3 3"/><line x1="13" y1="15" x2="16" y2="15"/>',
    wand: '<path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8L19 13"/><path d="M15 9h0"/><path d="M17.8 6.2L19 5"/><path d="M3 21l9-9"/><path d="M12.2 6.2L11 5"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    fingerprint: '<path d="M12 10v4"/><path d="M8 10a4 4 0 0 1 8 0v2"/><path d="M5.5 11.5A6.5 6.5 0 0 1 12 6"/><path d="M18.5 12.5A6.5 6.5 0 0 0 14 7.2"/><path d="M8 17a6 6 0 0 0 8 .8"/><path d="M9 13.5a3.2 3.2 0 0 0 6 .4"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'
  };

  const svg = (name, size = 22) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.layers}</svg>`;

  const icon = (name, size = 22) => svg(name, size);

  const basePath = () => (window.location.pathname.includes('/projects/') ? '../../' : '');

  const statusCls = (status) =>
    status === 'Ativo' || status === 'Concluído' ? 'active'
    : status === 'Em desenvolvimento' || status === 'Em andamento' ? 'dev'
    : 'planned';

  function renderNumbers() {
    const grid = document.getElementById('mp-numbers-grid');
    if (!grid) return;
    grid.innerHTML = MetadataPlatformConfig.keyNumbers.map((n) => `
      <article class="mp-numbers__card mp-card" data-reveal>
        <span class="mp-numbers__value${n.static ? ' is-static' : ''}">
          ${n.static ? n.value : `<span class="mp-counter" data-value="${n.value}" data-suffix="${n.suffix}">0</span>`}
        </span>
        <span class="mp-numbers__label">${n.label}</span>
        <span class="mp-numbers__desc">${n.desc}</span>
      </article>`).join('');
  }

  function renderModules() {
    const grid = document.getElementById('mp-modules-grid');
    if (!grid) return;
    grid.innerHTML = MetadataPlatformConfig.modules.map((m) => `
      <article class="mp-module mp-card" data-reveal>
        <div class="mp-module__head">
          <span class="mp-module__icon" aria-hidden="true">${icon(m.icon)}</span>
          <span class="mp-module__cat">${m.cat}</span>
        </div>
        <h3 class="mp-module__name">${m.name}</h3>
        <p class="mp-module__desc">${m.desc}</p>
        <span class="mp-status mp-status--${statusCls(m.status)}">${m.status}</span>
      </article>`).join('');
  }

  function renderFeatures() {
    const grid = document.getElementById('mp-features-grid');
    if (!grid) return;
    grid.innerHTML = MetadataPlatformConfig.features.map((f) => `
      <article class="mp-feature mp-card" data-reveal>
        <span class="mp-feature__icon" aria-hidden="true">${icon(f.icon)}</span>
        <span class="mp-feature__tag">${f.tag}</span>
        <h3 class="mp-feature__title">${f.title}</h3>
        <p class="mp-feature__desc">${f.desc}</p>
      </article>`).join('');
  }

  function renderEcosystem() {
    const root = document.getElementById('mp-eco-root');
    if (!root) return;
    root.innerHTML = `
      <div class="mp-eco__wrap">
        <div class="mp-eco__hub" aria-hidden="true">
          <div class="mp-eco__hub-core">
            <div>
              <span class="mp-eco__hub-title">Metadata Platform</span>
              <span class="mp-eco__hub-sub">Engine Central</span>
            </div>
          </div>
        </div>
        <div class="mp-eco__nodes">
          ${MetadataPlatformConfig.ecosystem.map((node) => `
            <article class="mp-eco__node mp-card" data-reveal>
              <div class="mp-eco__node-head">
                <span class="mp-eco__node-icon mp-eco__node-icon--${node.accent}" aria-hidden="true">${icon(node.icon)}</span>
                <div>
                  <h3 class="mp-eco__node-name">${node.name}</h3>
                  <p class="mp-eco__node-tag">${node.tag}</p>
                </div>
              </div>
              <ul class="mp-eco__node-resources">
                ${node.resources.map((r) => `<li class="mp-eco__chip">${r}</li>`).join('')}
              </ul>
            </article>`).join('')}
        </div>
      </div>
      <p class="mp-eco__footnote">Todas as plataformas do ecossistema compartilham a mesma Metadata Platform como núcleo — cada recurso é definido uma vez e reutilizado em todos os produtos.</p>`;
  }

  function renderArchitecture() {
    const wrap = document.getElementById('mp-arch-layers');
    if (!wrap) return;
    const nodes = MetadataPlatformConfig.architecture.map((l) => `
      <li class="mp-arch__node">
        <div class="mp-arch__node-info" data-reveal>
          <span class="mp-arch__node-badge" aria-hidden="true">${icon(l.icon, 18)}</span>
          <div>
            <h3 class="mp-arch__node-name">${l.name}</h3>
            <p class="mp-arch__node-desc">${l.desc}</p>
          </div>
        </div>
      </li>`).join('');
    wrap.innerHTML = `<div class="mp-arch__line" aria-hidden="true"></div>${nodes}`;
  }

  function renderTech() {
    const grid = document.getElementById('mp-tech-grid');
    if (!grid) return;
    grid.innerHTML = MetadataPlatformConfig.tech.map((t) => `
      <article class="mp-tech mp-card" data-reveal>
        <h3 class="mp-tech__name"><span class="mp-tech__dot" aria-hidden="true"></span>${t.name}</h3>
        <p class="mp-tech__desc">${t.role}</p>
        <span class="mp-tech__spec">${t.spec}</span>
      </article>`).join('');
  }

  function renderTimeline() {
    const wrap = document.getElementById('mp-timeline-list');
    if (!wrap) return;
    wrap.innerHTML = MetadataPlatformConfig.timeline.map((p) => `
      <li class="mp-phase" data-reveal>
        <span class="mp-phase__pin" aria-hidden="true">${p.num}</span>
        <div class="mp-phase__card mp-card">
          <div class="mp-phase__meta">
            <span class="mp-phase__num">${p.num}</span>
            <span class="mp-status mp-status--${statusCls(p.status)} mp-phase__status">${p.status}</span>
          </div>
          <h3 class="mp-phase__title">${p.title}</h3>
          <p class="mp-phase__desc">${p.desc}</p>
          <ul class="mp-phase__items">
            ${p.items.map((i) => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      </li>`).join('');
  }

  function renderFuture() {
    const grid = document.getElementById('mp-future-grid');
    if (!grid) return;
    grid.innerHTML = MetadataPlatformConfig.future.map((f) => `
      <article class="mp-future mp-card" data-reveal>
        <span class="mp-future__icon" aria-hidden="true">${icon(f.icon)}</span>
        <div>
          <h3 class="mp-future__title">${f.title}</h3>
          <p class="mp-future__desc">${f.desc}</p>
        </div>
      </article>`).join('');
  }

  function renderCases() {
    const grid = document.getElementById('mp-cases-grid');
    if (!grid) return;
    grid.innerHTML = MetadataPlatformConfig.useCases.map((c) => `
      <article class="mp-case mp-card" data-reveal>
        <div class="mp-case__head">
          <span class="mp-case__icon" aria-hidden="true">${icon(c.icon)}</span>
          <h3 class="mp-case__title">${c.title}</h3>
        </div>
        <p class="mp-case__block"><span class="mp-case__block-label">Problema</span><br>${c.problema}</p>
        <p class="mp-case__block"><span class="mp-case__block-label">Solução</span><br>${c.solucao}</p>
        <p class="mp-case__block"><span class="mp-case__block-label">Benefício</span><br>${c.beneficio}</p>
      </article>`).join('');
  }

  function renderScreenshots() {
    const grid = document.getElementById('mp-shots-grid');
    const filters = document.getElementById('mp-shots-filters');
    if (!grid) return;

    const cats = ['Todos', ...new Set(MetadataPlatformConfig.screenshots.map((s) => s.cat))];
    const realDir = `${basePath()}assets/gallery/`;

    if (filters) {
      filters.innerHTML = cats.map((c, i) =>
        `<button class="mp-tab mp-filter-chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
      ).join('');
    }

    grid.innerHTML = MetadataPlatformConfig.screenshots.map((s, i) => `
      <figure class="mp-shots__item mp-mock mp-mock--${s.variant}" data-reveal data-shots-cat="${s.cat}" data-shot="${i}" data-real-image="${realDir}metadata-platform-${s.cat.toLowerCase().replace(/ /g, '-')}-${i + 1}.webp">
        <div class="mp-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="mp-mock__screen">
          <div class="mp-mock__screen-inner">
            <span class="mp-mock__icon" aria-hidden="true">${icon(s.cat === 'Metadados' ? 'layers' : s.cat === 'Formulários' ? 'form' : s.cat === 'Tabelas' ? 'table' : s.cat === 'Regras' ? 'workflow' : s.cat === 'Dashboards' ? 'gauge' : 'palette')}</span>
            <span class="mp-mock__label">${s.label}</span>
            <span class="mp-mock__meta">placeholder — pronto para captura real</span>
          </div>
        </div>
        <figcaption class="mp-mock__figcaption">
          <span class="mp-mock__figcaption-title">${s.label}</span>
          <span class="mp-mock__figcaption-desc">${s.desc}</span>
        </figcaption>
      </figure>`).join('');
  }

  function initScreenshotFilters() {
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.mp-filter-chip');
      if (!chip) return;

      document.querySelectorAll('.mp-filter-chip').forEach((c) => {
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
    const els = document.querySelectorAll('.mp-counter');
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

    const idx = PROJECTS.findIndex((p) => p.slug === 'metadata-platform');
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const base = basePath();

    const prevLink = document.getElementById('mp-prev');
    const nextLink = document.getElementById('mp-next');
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

  const currentUrl = () => window.location.href;

  function initShare() {
    const shareBtn = document.getElementById('mp-share');
    const copyBtn = document.getElementById('mp-copy');
    const copied = document.getElementById('mp-copied');

    const showCopied = () => {
      copied?.classList.add('is-visible');
      setTimeout(() => copied?.classList.remove('is-visible'), 2000);
    };

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

    if (shareBtn) {
      shareBtn.addEventListener('click', async () => {
        const data = {
          title: 'Metadata Platform — Enterprise Low-Code Metadata Engine',
          text: 'Conheça a Metadata Platform: a engine que transforma configuração em aplicações empresariais.',
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
    renderModules();
    renderFeatures();
    renderEcosystem();
    renderArchitecture();
    renderTech();
    renderTimeline();
    renderFuture();
    renderCases();
    renderScreenshots();

    initCounters();
    initScreenshotFilters();
    initPrevNext();
    initShare();
    initReveals();

    if (typeof Gallery !== 'undefined') Gallery.init();
    if (typeof MetadataFlow !== 'undefined') MetadataFlow.init();

    const yearEl = document.getElementById('mp-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof Navigation !== 'undefined') Navigation.init();
    init();
  });

  window.__MPInit = init;

  return { init, basePath, icon };
})();

/* ============================================
   SERVICEFORGE.JS — Product Showcase Engine
   Enterprise Service Management Platform
   ============================================ */

const ServiceForgeConfig = Object.freeze({
  keyNumbers: [
    { value: 20, suffix: '+', label: 'Plataformas Integradas', desc: 'Hub de integrações em expansão contínua.' },
    { value: 15, suffix: '+', label: 'Módulos', desc: 'Plataforma modular com domínios desacoplados.' },
    { value: 50, suffix: '+', label: 'Recursos Planejados', desc: 'Roadmap enterprise de longo prazo.' },
    { value: 100, suffix: '%', label: 'Arquitetura Modular', desc: 'Cada recurso um módulo independente e testável.' }
  ],

  modules: [
    { name: 'Core Platform', desc: 'Núcleo da plataforma: setup de tenants, bootstrap de módulos e contratos de domínio.', status: 'Ativo', icon: 'core' },
    { name: 'Customer Management', desc: 'Cadastro corporativo de clientes, hierarquias, segmentação e ciclo de vida comercial.', status: 'Ativo', icon: 'users' },
    { name: 'Asset Management', desc: 'Catálogo de ativos, equipamentos e instalações com histórico e rastreabilidade.', status: 'Ativo', icon: 'box' },
    { name: 'Work Orders', desc: 'Ordens de serviço, priorização, SLA e acompanhamento em tempo real.', status: 'Ativo', icon: 'clipboard' },
    { name: 'Metadata Platform', desc: 'Modelo de dados extensível por schema JSON dinâmico, sem migrações destrutivas.', status: 'Em desenvolvimento', icon: 'database' },
    { name: 'Document Platform', desc: 'Gestão de documentos, templates e versionamento com assinatura eletrônica.', status: 'Em desenvolvimento', icon: 'file' },
    { name: 'Communication Platform', desc: 'Notificações multicanal: e-mail, WhatsApp, SMS e central de avisos.', status: 'Planejado', icon: 'mail' },
    { name: 'Workflow Engine', desc: 'Orquestração visual de processos com nós, condições e compensações.', status: 'Ativo', icon: 'workflow' },
    { name: 'Audit Platform', desc: 'Trilhas de auditoria imutáveis com correlação entre ações e agentes.', status: 'Em desenvolvimento', icon: 'shield' },
    { name: 'Reporting', desc: 'Relatórios operacionais e gerenciais com exportação programada.', status: 'Planejado', icon: 'chart' },
    { name: 'Administration', desc: 'Administração de tenants, usuários, políticas e parâmetros globais.', status: 'Ativo', icon: 'settings' },
    { name: 'Integration Hub', desc: 'Gateway de integrações com adaptadores e filas de eventos.', status: 'Planejado', icon: 'plug' },
    { name: 'Theme Platform', desc: 'Identidade visual por tenant: tokens de tema, logos e white-label.', status: 'Planejado', icon: 'palette' },
    { name: 'Translation Platform', desc: 'Traduções por tenant e por usuário com override hierárquico.', status: 'Planejado', icon: 'globe' },
    { name: 'Storage Providers', desc: 'Camada de armazenamento plugável: local, S3 e provedores compatíveis.', status: 'Em desenvolvimento', icon: 'storage' },
    { name: 'Authentication', desc: 'Login social, e-mail/senha e OAuth em camada única de identidade.', status: 'Ativo', icon: 'lock' },
    { name: 'Authorization', desc: 'RBAC com papéis, permissões granulares e escopo por tenant.', status: 'Ativo', icon: 'key' }
  ],

  features: [
    { tag: 'Multi-Tenancy', title: 'Multiempresa', desc: 'Isolamento completo por organização com dados, identidade e temas independentes.', icon: 'building' },
    { tag: 'Multi-Tenancy', title: 'Multi-Tenant', desc: 'Infraestrutura compartilhada e segura, sem vazamento entre tenants.', icon: 'layers' },
    { tag: 'Segurança', title: 'RBAC', desc: 'Controle de acesso por papéis e permissões em qualquer módulo.', icon: 'key' },
    { tag: 'Automação', title: 'Workflow Engine', desc: 'Processos configuráveis sem código, com versão e auditoria.', icon: 'workflow' },
    { tag: 'Dados', title: 'Metadata Driven', desc: 'Formulários e modelos de dados dinâmicos criados pela operação.', icon: 'database' },
    { tag: 'Conteúdo', title: 'Document Management', desc: 'Todos os documentos operacionais em um repositório versionado.', icon: 'file' },
    { tag: 'Integração', title: 'API First', desc: 'Toda funcionalidade exposta por API desde o primeiro dia.', icon: 'plug' },
    { tag: 'Integração', title: 'REST APIs', desc: 'Contratos REST estáveis e versionados para integrações externas.', icon: 'api' },
    { tag: 'Infraestrutura', title: 'Cloud Ready', desc: 'Deploy em nuvem com armazenamento e escala sob demanda.', icon: 'cloud' },
    { tag: 'Governança', title: 'Audit Logs', desc: 'Registros de auditoria para conformidade e investigação.', icon: 'shield' },
    { tag: 'Experiência', title: 'Responsive UI', desc: 'Interface adaptada a desktop, tablet e mobile sem perder contexto.', icon: 'device' },
    { tag: 'Experiência', title: 'Theme Engine', desc: 'Marca e visual configuráveis por tenant, com white-label.', icon: 'palette' },
    { tag: 'Global', title: 'Internationalization', desc: 'Idiomas configuráveis por tenant e por usuário.', icon: 'globe' },
    { tag: 'Identidade', title: 'Google Authentication', desc: 'Acesso imediato com contas Google sem cadastro manual.', icon: 'google' },
    { tag: 'Dados', title: 'Supabase', desc: 'Backend gerenciado com banco, auth e storage unificados.', icon: 'supabase' },
    { tag: 'Dados', title: 'PostgreSQL', desc: 'Banco relacional com RLS para isolamento entre tenants.', icon: 'database' }
  ],

  architecture: [
    { name: 'Frontend', desc: 'Interface React responsiva, consumindo a API com estado otimista.', icon: 'device' },
    { name: 'API Layer', desc: 'REST APIs versionadas com validação de schema e rate limiting.', icon: 'api' },
    { name: 'Business Services', desc: 'Domínios desacoplados orquestrados por contratos estáveis.', icon: 'layers' },
    { name: 'Workflow Engine', desc: 'Execução de processos, filas e regras de negócio.', icon: 'workflow' },
    { name: 'Metadata Engine', desc: 'Schemas dinâmicos e formulários dirigidos por metadados.', icon: 'database' },
    { name: 'Document Platform', desc: 'Repositório, templates e versionamento de documentos.', icon: 'file' },
    { name: 'Database', desc: 'PostgreSQL com row-level security por tenant.', icon: 'database' },
    { name: 'Storage', desc: 'Armazenamento plugável de arquivos e objetos.', icon: 'storage' },
    { name: 'Integrations', desc: 'Hub de integrações e event bus com retry e idempotência.', icon: 'plug' },
    { name: 'External Services', desc: 'Sistemas legados, e-mail, SMS e serviços de terceiros.', icon: 'globe' }
  ],

  tech: [
    { name: 'React', role: 'Interface de usuário', spec: '18 / Vite' },
    { name: 'TypeScript', role: 'Tipagem estática de ponta a ponta', spec: '5.x' },
    { name: 'Supabase', role: 'Backend gerenciado: auth, storage e realtime', spec: 'JS SDK' },
    { name: 'PostgreSQL', role: 'Persistência relacional e isolamento de dados', spec: '15' },
    { name: 'RLS', role: 'Row-level security para multitenancy', spec: 'Políticas SQL' },
    { name: 'Edge Functions', role: 'Webhooks e validação próxima ao usuário', spec: 'Deno' },
    { name: 'REST APIs', role: 'Contratos estáveis para o ecossistema', spec: 'OpenAPI' },
    { name: 'Workflow', role: 'Orquestração visual de processos', spec: 'DAG' },
    { name: 'Metadata', role: 'Modelos de dados configuráveis', spec: 'JSON Schema' },
    { name: 'Event Bus', role: 'Comunicação assíncrona entre módulos', spec: 'Postgres Changes' },
    { name: 'Storage', role: 'Upload seguro e presignado de arquivos', spec: 'S3 / Bucket' },
    { name: 'Authentication', role: 'Identidade e sessão unificadas', spec: 'OAuth 2.0' }
  ],

  screenshots: [
    { cat: 'Desktop', label: 'Dashboard Executivo', desc: 'Visão consolidada de operações em tempo real.', alt: 'Dashboard executivo do ServiceForge com métricas operacionais e gráficos de tendência.', variant: 'wide' },
    { cat: 'Desktop', label: 'Ordens de Serviço', desc: 'Fila de atendimento com priorização por SLA.', alt: 'Tela de ordens de serviço do ServiceForge com indicadores de SLA e prioridade.', variant: 'wide' },
    { cat: 'Desktop', label: 'Clientes', desc: 'Perfil corporativo com hierarquia e contratos.', alt: 'Cadastro de clientes do ServiceForge com hierarquia organizacional.', variant: 'wide' },
    { cat: 'Desktop', label: 'Relatórios', desc: 'Exportação e agendamento de relatórios.', alt: 'Central de relatórios do ServiceForge com agendamento e exportação.', variant: 'wide' },
    { cat: 'Tablet', label: 'Field Service', desc: 'Atendimento em campo com checklist digital.', alt: 'App de field service do ServiceForge em tablet com checklist digital.', variant: 'tablet' },
    { cat: 'Tablet', label: 'Agenda', desc: 'Agenda de equipes e despacho de visitas.', alt: 'Agenda de equipes do ServiceForge em tablet com despacho de visitas.', variant: 'tablet' },
    { cat: 'Mobile', label: 'App Mobile', desc: 'Acompanhamento de ordens no bolso.', alt: 'Aplicativo móvel do ServiceForge com lista de ordens de serviço.', variant: 'mobile' },
    { cat: 'Mobile', label: 'Checklist', desc: 'Formulários dinâmicos em campo.', alt: 'Formulário dinâmico do ServiceForge no celular.', variant: 'mobile' },
    { cat: 'Dark', label: 'Modo Escuro', desc: 'Tema escuro completo com alto contraste.', alt: 'ServiceForge no modo escuro com paleta de alto contraste.', variant: 'wide' },
    { cat: 'Dark', label: 'Monitores', desc: 'Operação contínua em salas de comando.', alt: 'Monitores do ServiceForge no modo escuro em sala de operações.', variant: 'tablet' },
    { cat: 'Light', label: 'Modo Claro', desc: 'Visual claro e leve para o dia a dia.', alt: 'ServiceForge no modo claro com layout limpo.', variant: 'wide' },
    { cat: 'Light', label: 'Configurações', desc: 'Administração com navegação simplificada.', alt: 'Tela de configurações do ServiceForge no modo claro.', variant: 'desktop' },
    { cat: 'Fluxogramas', label: 'Fluxo de Atendimento', desc: 'Workflow visual de uma OS do início ao fim.', alt: 'Fluxograma de atendimento do ServiceForge mostrando o ciclo de vida de uma ordem de serviço.', variant: 'wide' },
    { cat: 'Fluxogramas', label: 'Modelo de Dados', desc: 'Schema de metadados por tenant.', alt: 'Diagrama do modelo de dados dinâmico do ServiceForge.', variant: 'wide' },
    { cat: 'Diagramas', label: 'Arquitetura', desc: 'Visão geral das camadas da plataforma.', alt: 'Diagrama de arquitetura do ServiceForge com suas camadas de serviço.', variant: 'wide' },
    { cat: 'Diagramas', label: 'Multitenancy', desc: 'Fronteiras de isolamento entre tenants.', alt: 'Diagrama de multitenancy do ServiceForge mostrando o isolamento entre organizações.', variant: 'wide' }
  ]
});

const ServiceForge = (() => {
  const icons = {
    core: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    box: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    clipboard: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
    database: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    file: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    workflow: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><polyline points="7 10 7 14 14 14"/><line x1="10" y1="7" x2="14" y2="7"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    chart: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    settings: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    plug: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6M15 2v6"/><path d="M7 8h10v3a5 5 0 0 1-10 0V8z"/><path d="M12 16v5"/></svg>',
    palette: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    globe: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    storage: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 5v6c0 1.66-4 3-9 3s-9-1.34-9-3V5"/><path d="M21 11v6c0 1.66-4 3-9 3s-9-1.34-9-3v-6"/></svg>',
    lock: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    key: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
    building: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1"/></svg>',
    layers: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    api: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    cloud: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>',
    device: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    google: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>',
    supabase: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M21.362 9.354H12.4l8.396-5.825a1.14 1.14 0 0 0-.33-1.964L7.235 1.03a.65.65 0 0 0-.744.75l2.147 7.573H2.64a.65.65 0 0 0-.434 1.13l18.505 16.4c.57.505 1.48.078 1.37-.648l-.72-16.88z"/></svg>'
  };

  const currentUrl = () => window.location.href;
  const basePath = () => (window.location.pathname.includes('/projects/') ? '../../' : '');

  function icon(name, size = 22) {
    const svg = icons[name] || icons.core;
    return svg.replace(/width="22"/, `width="${size}"`).replace(/height="22"/, `height="${size}"`);
  }

  function renderNumbers() {
    const grid = document.getElementById('sf-numbers-grid');
    if (!grid) return;
    grid.innerHTML = ServiceForgeConfig.keyNumbers.map((n) => `
      <article class="sf-numbers__card sf-card" data-reveal>
        <span class="sf-numbers__value">
          <span class="sf-counter" data-value="${n.value}" data-suffix="${n.suffix}">0</span>
        </span>
        <p class="sf-numbers__label">${n.label}</p>
        <p class="sf-numbers__desc">${n.desc}</p>
      </article>`).join('');
  }

  function renderModules() {
    const grid = document.getElementById('sf-modules-grid');
    if (!grid) return;
    grid.innerHTML = ServiceForgeConfig.modules.map((m) => {
      const cls = m.status === 'Ativo' ? 'active' : m.status === 'Em desenvolvimento' ? 'dev' : 'planned';
      return `
        <article class="sf-module sf-card" data-reveal>
          <div class="sf-module__head">
            <span class="sf-module__icon" aria-hidden="true">${icon(m.icon)}</span>
            <span class="sf-status sf-status--${cls}">${m.status}</span>
          </div>
          <h3 class="sf-module__name">${m.name}</h3>
          <p class="sf-module__desc">${m.desc}</p>
        </article>`;
    }).join('');
  }

  function renderFeatures() {
    const grid = document.getElementById('sf-features-grid');
    if (!grid) return;
    grid.innerHTML = ServiceForgeConfig.features.map((f) => `
      <article class="sf-feature sf-card" data-reveal>
        <span class="sf-feature__icon" aria-hidden="true">${icon(f.icon)}</span>
        <span class="sf-feature__tag">${f.tag}</span>
        <h3 class="sf-feature__title">${f.title}</h3>
        <p class="sf-feature__desc">${f.desc}</p>
      </article>`).join('');
  }

  function renderArchitecture() {
    const wrap = document.getElementById('sf-arch-layers');
    if (!wrap) return;

    const conn = `
      <div class="sf-arch__connector" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>`;

    const nodes = ServiceForgeConfig.architecture.map((l) => `
      <li class="sf-arch__node">
        <div class="sf-arch__node-info" data-reveal>
          <h3 class="sf-arch__node-name">${l.name}</h3>
          <p class="sf-arch__node-desc">${l.desc}</p>
        </div>
        <span class="sf-arch__node-badge" aria-hidden="true">${icon(l.icon, 24)}</span>
      </li>`).join('');

    wrap.innerHTML = `<div class="sf-arch__line" aria-hidden="true"></div>${nodes}`;
  }

  function renderTech() {
    const grid = document.getElementById('sf-tech-grid');
    if (!grid) return;
    grid.innerHTML = ServiceForgeConfig.tech.map((t) => `
      <article class="sf-tech sf-card" data-reveal>
        <h3 class="sf-tech__name"><span class="sf-tech__dot" aria-hidden="true"></span>${t.name}</h3>
        <p class="sf-tech__desc">${t.role}</p>
        <span class="sf-tech__spec">${t.spec}</span>
      </article>`).join('');
  }

  function renderScreenshots() {
    const grid = document.getElementById('sf-shots-grid');
    const filters = document.getElementById('sf-shots-filters');
    if (!grid) return;

    const cats = ['Todos', ...new Set(ServiceForgeConfig.screenshots.map((s) => s.cat))];
    const realDir = `${basePath()}assets/gallery/`;

    if (filters) {
      filters.innerHTML = cats.map((c, i) =>
        `<button class="sf-tab sf-filter-chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
      ).join('');
    }

    grid.innerHTML = ServiceForgeConfig.screenshots.map((s, i) => `
      <figure class="sf-shots__item mock mock--${s.variant}" data-reveal data-shots-cat="${s.cat}" data-shot="${i}" data-real-image="${realDir}serviceforge-${s.cat.toLowerCase()}-${i + 1}.webp">
        <div class="mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="mock__screen">
          <div class="mock__screen-inner">
            <span class="mock__icon" aria-hidden="true">${icon(s.cat === 'Mobile' ? 'device' : s.cat === 'Fluxogramas' ? 'workflow' : s.cat === 'Diagramas' ? 'layers' : 'device')}</span>
            <span class="mock__label">${s.label}</span>
            <span class="mock__meta">placeholder — pronto para captura real</span>
          </div>
        </div>
        <figcaption class="mock__figcaption">
          <span class="mock__figcaption-title">${s.label}</span>
          <span class="mock__figcaption-desc">${s.desc}</span>
        </figcaption>
      </figure>`).join('');
  }

  function initScreenshotFilters() {
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.sf-filter-chip');
      if (!chip) return;

      document.querySelectorAll('.sf-filter-chip').forEach((c) => {
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
    const els = document.querySelectorAll('.sf-counter');
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

    const idx = PROJECTS.findIndex((p) => p.slug === 'serviceforge');
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const base = basePath();

    const prevLink = document.getElementById('sf-prev');
    const nextLink = document.getElementById('sf-next');
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
    const shareBtn = document.getElementById('sf-share');
    const copyBtn = document.getElementById('sf-copy');
    const copied = document.getElementById('sf-copied');

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
          title: 'ServiceForge — Enterprise Service Management Platform',
          text: 'Conheça o ServiceForge: plataforma corporativa para gestão de serviços, manutenção e field service.',
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
    renderArchitecture();
    renderTech();
    renderScreenshots();

    initCounters();
    initScreenshotFilters();
    initPrevNext();
    initShare();
    initReveals();

    if (typeof Gallery !== 'undefined') Gallery.init();
    if (typeof Roadmap !== 'undefined') Roadmap.init();

    const yearEl = document.getElementById('sf-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof Navigation !== 'undefined') Navigation.init();
    init();
  });

  return { init, basePath, icon };
})();

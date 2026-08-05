/* ============================================
   INTEGRATION-HUB.JS — Product Showcase Engine
   Enterprise Integration Platform
   ============================================ */

const IntegrationHubConfig = Object.freeze({
  keyNumbers: [
    { value: 40, suffix: '+', label: 'Conectores Planejados', desc: 'Conectores reutilizáveis para aplicações, bancos e serviços cloud.' },
    { value: 100, suffix: '+', label: 'APIs Integráveis', desc: 'Contratos REST e webhooks padronizados para comunicação entre sistemas.' },
    { value: 20, suffix: '+', label: 'Serviços Cloud Compatíveis', desc: 'Provedores e serviços em nuvem suportados pelo barramento.' },
    { value: '∞', suffix: '', static: true, label: 'Arquitetura Modular por Design', desc: 'Cada camada do barramento evolui de forma independente e reutilizável.' }
  ],

  modules: [
    { name: 'API Gateway', desc: 'Entrada única para requisições, webhooks e contratos REST.', status: 'Ativo', cat: 'Núcleo', icon: 'gateway' },
    { name: 'REST Client', desc: 'Cliente HTTP configurável para chamadas de saída com retry e timeouts.', status: 'Ativo', cat: 'Núcleo', icon: 'api' },
    { name: 'Webhook Manager', desc: 'Recebimento, validação e entrega confiável de eventos externos.', status: 'Ativo', cat: 'Comunicação', icon: 'webhook' },
    { name: 'Integration Engine', desc: 'Execução de fluxos, regras e conectores do barramento.', status: 'Em desenvolvimento', cat: 'Núcleo', icon: 'engine' },
    { name: 'Message Queue Adapter', desc: 'Filas e mensageria para processamento assíncrono e resiliente.', status: 'Em desenvolvimento', cat: 'Mensageria', icon: 'inbox' },
    { name: 'Event Router', desc: 'Roteamento de eventos por regras para o destino correto.', status: 'Em desenvolvimento', cat: 'Eventos', icon: 'router' },
    { name: 'Transformation Engine', desc: 'Conversão e normalização de payloads entre sistemas.', status: 'Em desenvolvimento', cat: 'Dados', icon: 'transform' },
    { name: 'Retry Manager', desc: 'Tentativas configuráveis com backoff para falhas transitórias.', status: 'Em desenvolvimento', cat: 'Confiabilidade', icon: 'refresh' },
    { name: 'Monitoring', desc: 'Métricas, logs e alertas de cada fluxo de integração.', status: 'Em desenvolvimento', cat: 'Observabilidade', icon: 'monitor' },
    { name: 'Scheduler', desc: 'Execuções programadas de integrações e sincronizações.', status: 'Em desenvolvimento', cat: 'Automação', icon: 'calendar' },
    { name: 'Authentication', desc: 'OAuth2, JWT e API Keys para autenticar chamadas de entrada e saída.', status: 'Ativo', cat: 'Segurança', icon: 'lock' },
    { name: 'Authorization', desc: 'Permissões por papel e escopo em cada operação do barramento.', status: 'Em desenvolvimento', cat: 'Segurança', icon: 'shield' },
    { name: 'Connector Marketplace', desc: 'Catálogo de conectores reutilizáveis da organização e da comunidade.', status: 'Planejado', cat: 'Integração', icon: 'boxes' },
    { name: 'Administration', desc: 'Administração central de ambientes, políticas e configurações.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'settings' },
    { name: 'Audit Platform', desc: 'Trilha imutável de eventos, configurações e entregas.', status: 'Em desenvolvimento', cat: 'Governança', icon: 'eye' }
  ],

  features: [
    { tag: 'APIs', title: 'API First', desc: 'Contratos REST padronizados expostos pelo barramento para todos os sistemas.', icon: 'gateway' },
    { tag: 'APIs', title: 'REST APIs', desc: 'Superfície de integração para aplicações, conectores e parceiros.', icon: 'api' },
    { tag: 'APIs', title: 'Webhooks', desc: 'Entrega de eventos em tempo real para sistemas externos.', icon: 'webhook' },
    { tag: 'APIs', title: 'Versionamento de contratos', desc: 'Contratos versionados evoluem sem quebrar consumidores existentes.', icon: 'history' },
    { tag: 'Eventos', title: 'Arquitetura orientada a eventos', desc: 'Publicação e assinatura de eventos desacoplam produtores de consumidores.', icon: 'zap' },
    { tag: 'Eventos', title: 'Roteamento inteligente', desc: 'Eventos roteados por regras configuráveis para o destino correto.', icon: 'router' },
    { tag: 'Eventos', title: 'Filas de mensagens', desc: 'Mensagens persistidas e processadas de forma assíncrona e resiliente.', icon: 'inbox' },
    { tag: 'Eventos', title: 'Transformação de dados', desc: 'Payloads convertidos entre formatos e contratos na borda.', icon: 'transform' },
    { tag: 'Confiabilidade', title: 'Retry automático', desc: 'Tentativas com backoff exponencial para falhas transitórias.', icon: 'refresh' },
    { tag: 'Confiabilidade', title: 'Monitoramento', desc: 'Métricas, logs e alertas de cada fluxo de integração.', icon: 'monitor' },
    { tag: 'Confiabilidade', title: 'Agendamento', desc: 'Execuções programadas de integrações e sincronizações.', icon: 'calendar' },
    { tag: 'Segurança', title: 'Autenticação', desc: 'OAuth2, JWT e API Keys para autenticar chamadas de entrada e saída.', icon: 'lock' },
    { tag: 'Segurança', title: 'Autorização RBAC', desc: 'Permissões por papel e escopo em cada operação do barramento.', icon: 'shield' },
    { tag: 'Segurança', title: 'Segurança de tráfego', desc: 'Criptografia e isolamento em todas as conexões do barramento.', icon: 'key' },
    { tag: 'Governança', title: 'Logs estruturados', desc: 'Registro estruturado de requisições, respostas e erros.', icon: 'list' },
    { tag: 'Governança', title: 'Trilha de auditoria', desc: 'Registro imutável de configurações, eventos e entregas.', icon: 'eye' },
    { tag: 'Integração', title: 'Conectores reutilizáveis', desc: 'Componentes que encapsulam protocolos e contratos de cada sistema.', icon: 'boxes' },
    { tag: 'Integração', title: 'Extensibilidade', desc: 'Conectores e transformações personalizados pela plataforma.', icon: 'plug' },
    { tag: 'Experiência', title: 'Internacionalização', desc: 'Interface multi-idioma para times distribuídos.', icon: 'globe' },
    { tag: 'Experiência', title: 'Tema claro/escuro', desc: 'Experiência adaptável em operações de longa duração.', icon: 'palette' }
  ],

  integrations: [
    { name: 'Serviços Cloud', icon: 'cloud', items: [
      { name: 'Supabase' }, { name: 'AWS' }, { name: 'Google Cloud' }, { name: 'Azure', planned: true }
    ] },
    { name: 'Bancos de Dados', icon: 'database', items: [
      { name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'MariaDB' }, { name: 'SQLite' }, { name: 'SQL Server' }, { name: 'Oracle', planned: true }
    ] },
    { name: 'Comunicação', icon: 'message', items: [
      { name: 'Slack' }, { name: 'Microsoft Teams' }, { name: 'Telegram' }, { name: 'WhatsApp', planned: true }
    ] },
    { name: 'Armazenamento', icon: 'hard', items: [
      { name: 'Amazon S3' }, { name: 'Google Drive' }, { name: 'OneDrive' }, { name: 'Dropbox' }
    ] },
    { name: 'Formatos de Dados', icon: 'file', items: [
      { name: 'CSV' }, { name: 'Excel' }, { name: 'JSON' }, { name: 'XML' }
    ] },
    { name: 'Protocolos de API', icon: 'api', items: [
      { name: 'REST' }, { name: 'Webhooks' }
    ] }
  ],

  architecture: [
    { name: 'Frontend', desc: 'Consoles de fluxos, conectores, monitoramento e administração.', icon: 'terminal' },
    { name: 'API Gateway', desc: 'Entrada única para requisições, webhooks e contratos REST.', icon: 'gateway' },
    { name: 'Integration Engine', desc: 'Execução de fluxos, regras e conectores do barramento.', icon: 'engine' },
    { name: 'Transformation Engine', desc: 'Conversão e normalização de payloads entre sistemas.', icon: 'transform' },
    { name: 'Queue Adapter', desc: 'Filas e mensageria para processamento assíncrono.', icon: 'inbox' },
    { name: 'Monitoring', desc: 'Métricas, logs e alertas de operação em tempo real.', icon: 'monitor' },
    { name: 'Audit Service', desc: 'Trilha imutável de eventos, configurações e entregas.', icon: 'eye' },
    { name: 'Database', desc: 'PostgreSQL com contratos, configurações e estado das integrações.', icon: 'database' },
    { name: 'Storage', desc: 'Artefatos, logs e arquivos intermediários do barramento.', icon: 'hard' },
    { name: 'External Services', desc: 'APIs, bancos e serviços conectados pelos conectores.', icon: 'api' }
  ],

  ecosystem: [
    { name: 'ServiceForge', tag: 'Ordens de serviço e operações que disparam integrações em tempo real.', accent: 'sf', icon: 'users', resources: ['Eventos de atendimento', 'Disparo de fluxos automáticos', 'Ordens sincronizadas', 'Webhooks de operação', 'Integração de dados'] },
    { name: 'DataForge', tag: 'Pipelines de dados que consomem e publicam eventos do barramento.', accent: 'df', icon: 'database', resources: ['Importação e exportação', 'Sincronização de fontes', 'Auditoria de dados', 'Fluxos agendados', 'Catálogo de dados'] },
    { name: 'People Identity Hub', tag: 'Identidade, papéis e permissões autenticam conexões e RBAC.', accent: 'pih', icon: 'users', resources: ['OAuth2 e SSO', 'Papéis e permissões', 'RBAC de integrações', 'Sincronização de identidade', 'Escopos de acesso'] },
    { name: 'Knowledge Platform', tag: 'Documentação técnica e catálogos consumidos pelos conectores.', accent: 'kp', icon: 'globe', resources: ['Documentação de APIs', 'Catálogo de conectores', 'Procedimentos operacionais', 'Conteúdo versionado', 'Publicação de contratos'] },
    { name: 'ClauseForge', tag: 'Geração de documentos a partir de dados integrados e eventos.', accent: 'clf', icon: 'file', resources: ['Documentos de integração', 'Templates com variáveis', 'Eventos de aprovação', 'Exportação multi-formato', 'Auditoria documental'] },
    { name: 'Metadata Platform', tag: 'Definições de metadados e contratos reutilizáveis nas transformações.', accent: 'mp', icon: 'layers', resources: ['Formulários e campos', 'Variáveis e metadados', 'Validações de payload', 'Definições versionadas', 'Publicação sem deploy'] },
    { name: 'SpecForge', tag: 'Especificações e documentação técnica geradas para o catálogo de APIs.', accent: 'spf', icon: 'file', resources: ['Especificação de contratos', 'Documentação de conectores', 'Geração automática', 'Padrões de integração', 'Guia de adoção'] }
  ],

  tech: [
    { name: 'React', role: 'Consoles de fluxos, conectores e monitoramento', spec: 'SPA' },
    { name: 'TypeScript', role: 'Tipagem dos contratos e transformações', spec: '5.x' },
    { name: 'REST APIs', role: 'Superfície de integração do barramento', spec: 'HTTP' },
    { name: 'Webhooks', role: 'Entrega de eventos em tempo real', spec: 'Push' },
    { name: 'OAuth2', role: 'Autenticação e delegação de acesso', spec: 'Segurança' },
    { name: 'JWT', role: 'Tokens de acesso entre serviços', spec: 'AuthN' },
    { name: 'Supabase', role: 'Auth, banco e storage gerenciados', spec: 'PaaS' },
    { name: 'PostgreSQL', role: 'Contratos e estado das integrações', spec: '15+' },
    { name: 'Mensageria', role: 'Filas e processamento assíncrono', spec: 'Events' },
    { name: 'Storage', role: 'Artefatos e logs do barramento', spec: 'Files' },
    { name: 'Logs', role: 'Registro estruturado de operações', spec: 'Observabilidade' },
    { name: 'Monitoramento', role: 'Métricas e alertas em tempo real', spec: 'Observabilidade' },
    { name: 'Arquitetura orientada a eventos', role: 'Desacoplamento de produtores e consumidores', spec: 'EDA' }
  ],

  timeline: [
    {
      num: 'P1',
      title: 'Core Integration',
      status: 'Concluído',
      desc: 'A fundação do barramento: gateway, conectores e contratos.',
      items: [
        'API Gateway e REST Client',
        'Webhook Manager com entrega confiável',
        'Autenticação OAuth2, JWT e API Keys'
      ]
    },
    {
      num: 'P2',
      title: 'Connectors',
      status: 'Em andamento',
      desc: 'Conectores reutilizáveis para bancos, cloud e comunicação.',
      items: [
        'Integration Engine com execução de fluxos',
        'Conectores para PostgreSQL e APIs REST',
        'Transformation Engine para payloads'
      ]
    },
    {
      num: 'P3',
      title: 'Event Platform',
      status: 'Planejado',
      desc: 'Eventos, filas e roteamento desacoplados.',
      items: [
        'Message Queue Adapter assíncrono',
        'Event Router com regras configuráveis',
        'Retry Manager com backoff exponencial'
      ]
    },
    {
      num: 'P4',
      title: 'Marketplace',
      status: 'Planejado',
      desc: 'Catálogo de conectores e extensões da organização.',
      items: [
        'Connector Marketplace corporativo',
        'SDK para conectores personalizados',
        'Authorization e administração avançada'
      ]
    },
    {
      num: 'P5',
      title: 'AI Integration Assistant',
      status: 'Planejado',
      desc: 'Inteligência artificial no ciclo de integração.',
      items: [
        'Geração de integrações por IA',
        'Mapeamento inteligente de APIs',
        'Catálogo corporativo de integrações'
      ]
    }
  ],

  future: [
    { title: 'Marketplace de conectores', desc: 'Catálogo corporativo de conectores publicados por equipes e parceiros.', icon: 'boxes' },
    { title: 'Geração automática por IA', desc: 'Integrações descritas em linguagem natural viram fluxos executáveis.', icon: 'sparkles' },
    { title: 'Mapeamento inteligente de APIs', desc: 'Reconhecimento automático de contratos e geração de mapeamentos.', icon: 'search' },
    { title: 'Observabilidade distribuída', desc: 'Rastreamento ponta a ponta de cada mensagem no barramento.', icon: 'monitor' },
    { title: 'Motor de regras de roteamento', desc: 'Regras visuais definem o destino de cada evento e mensagem.', icon: 'router' },
    { title: 'Integrações em tempo real', desc: 'Sincronização contínua com baixa latência entre sistemas.', icon: 'zap' },
    { title: 'SDK para conectores', desc: 'SDK oficial para construir e publicar conectores personalizados.', icon: 'code' },
    { title: 'CLI para automação', desc: 'Interface de linha de comando para gerenciar fluxos e conectores.', icon: 'terminal' },
    { title: 'Versionamento de integrações', desc: 'Histórico, diff e rollback de fluxos e configurações.', icon: 'history' },
    { title: 'Catálogo corporativo de APIs', desc: 'Diretório central de APIs e contratos do ecossistema.', icon: 'grid' }
  ],

  useCases: [
    { title: 'Integração ERP ↔ CRM', icon: 'route', problema: 'ERP e CRM com dados divergentes geram retrabalho e perda de receita.', solucao: 'Fluxos bidirecionais sincronizam pedidos, clientes e estoque.', beneficio: 'Um único registro da verdade em tempo quase real.' },
    { title: 'Sincronização de RH', icon: 'users', problema: 'Dados de RH espalhados entre folha, ponto e benefícios.', solucao: 'Conectores sincronizam colaboradores e eventos entre sistemas.', beneficio: 'Dados consistentes com o People Identity Hub.' },
    { title: 'Sistemas legados', icon: 'container', problema: 'Sistemas antigos sem API dificultam integração e automação.', solucao: 'Camadas de transformação traduzem protocolos legados.', beneficio: 'Legados conectados sem reescrita.' },
    { title: 'Automação de processos', icon: 'zap', problema: 'Tarefas manuais repetitivas consomem tempo das equipes.', solucao: 'Eventos e filas automatizam fluxos entre aplicações.', beneficio: 'Processos executados sem intervenção manual.' },
    { title: 'Conectividade SaaS', icon: 'plug', problema: 'Aplicações SaaS isoladas impedem visão unificada do negócio.', solucao: 'Conectores prontos integram as principais aplicações cloud.', beneficio: 'Ecossistema conectado sem código.' },
    { title: 'Recebimento de Webhooks', icon: 'webhook', problema: 'Sistemas externos enviam eventos em formatos e tempos variados.', solucao: 'Webhook Manager valida, filtra e entrega eventos de forma confiável.', beneficio: 'Eventos nunca perdidos, sempre auditados.' },
    { title: 'Orquestração de APIs', icon: 'api', problema: 'Chamadas encadeadas a múltiplas APIs geram acoplamento e latência.', solucao: 'Composições e regras orquestram contratos com retry e roteamento.', beneficio: 'APIs consumidas com resiliência e observabilidade.' },
    { title: 'Centralização de integrações', icon: 'boxes', problema: 'Integrações espalhadas por ferramentas e times sem governança.', solucao: 'Um único barramento com auditoria, permissões e catálogo.', beneficio: 'Governança e visibilidade de todo o tráfego.' }
  ],

  catSlug: {
    'Visão Geral': 'visao-geral',
    'Conectores': 'conectores',
    'Fluxos': 'fluxos',
    'APIs': 'apis',
    'Observabilidade': 'observabilidade',
    'Temas': 'temas',
    'Dispositivos': 'dispositivos'
  },

  screenshots: [
    { cat: 'Visão Geral', label: 'Dashboard', desc: 'Visão consolidada de fluxos, conectores e tráfego do barramento.', alt: 'Dashboard do Integration Hub com visão geral das integrações.', variant: 'wide' },
    { cat: 'Conectores', label: 'Conectores', desc: 'Catálogo de conectores reutilizáveis prontos para uso.', alt: 'Catálogo de conectores do Integration Hub.', variant: 'wide' },
    { cat: 'Fluxos', label: 'Fluxos', desc: 'Editor visual de fluxos de integração entre sistemas.', alt: 'Editor de fluxos do Integration Hub.', variant: 'wide' },
    { cat: 'APIs', label: 'APIs', desc: 'Contratos REST, endpoints e autenticação do barramento.', alt: 'Catálogo de APIs do Integration Hub.', variant: 'wide' },
    { cat: 'Observabilidade', label: 'Logs', desc: 'Registro estruturado de requisições, respostas e erros.', alt: 'Logs de integração do Integration Hub.', variant: 'wide' },
    { cat: 'Observabilidade', label: 'Monitoramento', desc: 'Métricas e alertas de cada fluxo em tempo real.', alt: 'Monitoramento do Integration Hub.', variant: 'desktop' },
    { cat: 'APIs', label: 'Webhooks', desc: 'Recebimento e entrega confiável de eventos externos.', alt: 'Recepção de webhooks do Integration Hub.', variant: 'desktop' },
    { cat: 'Temas', label: 'Dark Mode', desc: 'Tema escuro para operações de integração intensivas.', alt: 'Integration Hub no modo escuro.', variant: 'wide' },
    { cat: 'Temas', label: 'Light Mode', desc: 'Tema claro e objetivo para configuração de fluxos.', alt: 'Integration Hub no modo claro.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Desktop', desc: 'Experiência completa em telas amplas.', alt: 'Integration Hub em desktop.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Tablet', desc: 'Acompanhamento e aprovação de fluxos em tablets.', alt: 'Integration Hub em tablet.', variant: 'tablet' },
    { cat: 'Dispositivos', label: 'Mobile', desc: 'Monitoramento de integrações pelo celular.', alt: 'Integration Hub em mobile.', variant: 'mobile' }
  ]
});

const IntegrationHub = (() => {
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
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    variable: '<path d="M7 8l-3 4 3 4"/><path d="M17 8l3 4-3 4"/><line x1="12" y1="4" x2="12" y2="20"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    signature: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
    pdf: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 17h6"/><path d="M9 13h6"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/>',
    gateway: '<path d="M3 21h18"/><path d="M5 21V8a7 7 0 0 1 14 0v13"/><line x1="12" y1="8" x2="12" y2="13"/>',
    webhook: '<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/>',
    engine: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    router: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
    transform: '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    hard: '<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',
    fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>'
  };

  const svg = (name, size = 22) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.file}</svg>`;

  const icon = (name, size = 22) => svg(name, size);

  const basePath = () => (window.location.pathname.includes('/projects/') ? '../../' : '');

  const statusCls = (status) =>
    status === 'Ativo' || status === 'Concluído' ? 'active'
    : status === 'Em desenvolvimento' || status === 'Em andamento' ? 'dev'
    : 'planned';

  function renderNumbers() {
    const grid = document.getElementById('ih-numbers-grid');
    if (!grid) return;
    grid.innerHTML = IntegrationHubConfig.keyNumbers.map((n) => `
      <article class="ih-numbers__card" data-reveal>
        <span class="ih-numbers__value${n.static ? ' is-static' : ''}">
          ${n.static ? n.value : `<span class="ih-counter" data-value="${n.value}" data-suffix="${n.suffix}">0</span>`}
        </span>
        <span class="ih-numbers__label">${n.label}</span>
        <span class="ih-numbers__desc">${n.desc}</span>
      </article>`).join('');
  }

  function renderModules() {
    const grid = document.getElementById('ih-modules-grid');
    if (!grid) return;
    grid.innerHTML = IntegrationHubConfig.modules.map((m) => `
      <article class="ih-module ih-card" data-reveal>
        <div class="ih-module__head">
          <span class="ih-module__icon" aria-hidden="true">${icon(m.icon)}</span>
          <span class="ih-module__cat">${m.cat}</span>
        </div>
        <h3 class="ih-module__name">${m.name}</h3>
        <p class="ih-module__desc">${m.desc}</p>
        <span class="ih-status ih-status--${statusCls(m.status)}">${m.status}</span>
      </article>`).join('');
  }

  function renderFeatures() {
    const grid = document.getElementById('ih-features-grid');
    if (!grid) return;
    grid.innerHTML = IntegrationHubConfig.features.map((f) => `
      <article class="ih-feature ih-card" data-reveal>
        <span class="ih-feature__icon" aria-hidden="true">${icon(f.icon)}</span>
        <span class="ih-feature__tag">${f.tag}</span>
        <h3 class="ih-feature__title">${f.title}</h3>
        <p class="ih-feature__desc">${f.desc}</p>
      </article>`).join('');
  }

  function renderIntegrations() {
    const grid = document.getElementById('ih-integrations-grid');
    if (!grid) return;
    grid.innerHTML = IntegrationHubConfig.integrations.map((g) => `
      <article class="ih-integrations__group ih-card" data-reveal>
        <div class="ih-integrations__head">
          <span class="ih-integrations__icon" aria-hidden="true">${icon(g.icon)}</span>
          <h3 class="ih-integrations__name">${g.name}</h3>
        </div>
        <ul class="ih-integrations__chips">
          ${g.items.map((i) => `
            <li class="ih-integration-chip${i.planned ? ' is-planned' : ''}">
              <span class="ih-integration-chip__dot" aria-hidden="true"></span>
              ${i.name}
              ${i.planned ? '<span class="ih-integration-chip__badge">Em breve</span>' : ''}
            </li>`).join('')}
        </ul>
      </article>`).join('');
  }

  function renderEcosystem() {
    const root = document.getElementById('ih-eco-root');
    if (!root) return;
    root.innerHTML = `
      <div class="ih-eco__wrap">
        <div class="ih-eco__hub" aria-hidden="true">
          <div class="ih-eco__hub-core">
            <div>
              <span class="ih-eco__hub-title">Integration Hub</span>
              <span class="ih-eco__hub-sub">Integration Bus</span>
            </div>
          </div>
        </div>
        <div class="ih-eco__nodes">
          ${IntegrationHubConfig.ecosystem.map((node) => `
            <article class="ih-eco__node ih-card" data-reveal>
              <div class="ih-eco__node-head">
                <span class="ih-eco__node-icon ih-eco__node-icon--${node.accent}" aria-hidden="true">${icon(node.icon)}</span>
                <div>
                  <h3 class="ih-eco__node-name">${node.name}</h3>
                  <p class="ih-eco__node-tag">${node.tag}</p>
                </div>
              </div>
              <ul class="ih-eco__node-resources">
                ${node.resources.map((r) => `<li class="ih-eco__chip">${r}</li>`).join('')}
              </ul>
            </article>`).join('')}
        </div>
      </div>
      <p class="ih-eco__footnote">O Integration Hub conecta todo o ecossistema: identidade, dados, documentos e operação fluem pelo mesmo barramento de eventos e APIs.</p>`;
  }

  function renderArchitecture() {
    const wrap = document.getElementById('ih-arch-layers');
    if (!wrap) return;
    const nodes = IntegrationHubConfig.architecture.map((l) => `
      <li class="ih-arch__node">
        <div class="ih-arch__node-info" data-reveal>
          <span class="ih-arch__node-badge" aria-hidden="true">${icon(l.icon, 18)}</span>
          <div>
            <h3 class="ih-arch__node-name">${l.name}</h3>
            <p class="ih-arch__node-desc">${l.desc}</p>
          </div>
        </div>
      </li>`).join('');
    wrap.innerHTML = `<div class="ih-arch__line" aria-hidden="true"></div>${nodes}`;
  }

  function renderTech() {
    const grid = document.getElementById('ih-tech-grid');
    if (!grid) return;
    grid.innerHTML = IntegrationHubConfig.tech.map((t) => `
      <article class="ih-tech ih-card" data-reveal>
        <h3 class="ih-tech__name"><span class="ih-tech__dot" aria-hidden="true"></span>${t.name}</h3>
        <p class="ih-tech__desc">${t.role}</p>
        <span class="ih-tech__spec">${t.spec}</span>
      </article>`).join('');
  }

  function renderTimeline() {
    const wrap = document.getElementById('ih-timeline-list');
    if (!wrap) return;
    wrap.innerHTML = IntegrationHubConfig.timeline.map((p) => `
      <li class="ih-phase" data-reveal>
        <span class="ih-phase__pin" aria-hidden="true">${p.num}</span>
        <div class="ih-phase__card ih-card">
          <div class="ih-phase__meta">
            <span class="ih-phase__num">${p.num}</span>
            <span class="ih-status ih-status--${statusCls(p.status)} ih-phase__status">${p.status}</span>
          </div>
          <h3 class="ih-phase__title">${p.title}</h3>
          <p class="ih-phase__desc">${p.desc}</p>
          <ul class="ih-phase__items">
            ${p.items.map((i) => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      </li>`).join('');
  }

  function renderFuture() {
    const grid = document.getElementById('ih-future-grid');
    if (!grid) return;
    grid.innerHTML = IntegrationHubConfig.future.map((f) => `
      <article class="ih-future ih-card" data-reveal>
        <span class="ih-future__icon" aria-hidden="true">${icon(f.icon)}</span>
        <div>
          <h3 class="ih-future__title">${f.title}</h3>
          <p class="ih-future__desc">${f.desc}</p>
        </div>
      </article>`).join('');
  }

  function renderCases() {
    const grid = document.getElementById('ih-cases-grid');
    if (!grid) return;
    grid.innerHTML = IntegrationHubConfig.useCases.map((c) => `
      <article class="ih-case ih-card" data-reveal>
        <div class="ih-case__head">
          <span class="ih-case__icon" aria-hidden="true">${icon(c.icon)}</span>
          <h3 class="ih-case__title">${c.title}</h3>
        </div>
        <p class="ih-case__block"><span class="ih-case__block-label">Problema</span><br>${c.problema}</p>
        <p class="ih-case__block"><span class="ih-case__block-label">Solução</span><br>${c.solucao}</p>
        <p class="ih-case__block"><span class="ih-case__block-label">Benefício</span><br>${c.beneficio}</p>
      </article>`).join('');
  }

  const catIcon = (cat) =>
    cat === 'Visão Geral' ? 'gauge' : cat === 'Conectores' ? 'plug' : cat === 'Fluxos' ? 'workflow' : cat === 'APIs' ? 'api' : cat === 'Observabilidade' ? 'monitor' : cat === 'Temas' ? 'palette' : 'layout';

  function renderScreenshots() {
    const grid = document.getElementById('ih-shots-grid');
    const filters = document.getElementById('ih-shots-filters');
    if (!grid) return;

    const cats = ['Todos', ...new Set(IntegrationHubConfig.screenshots.map((s) => s.cat))];
    const realDir = `${basePath()}assets/gallery/`;

    if (filters) {
      filters.innerHTML = cats.map((c, i) =>
        `<button class="ih-tab ih-filter-chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
      ).join('');
    }

    grid.innerHTML = IntegrationHubConfig.screenshots.map((s, i) => `
      <figure class="ih-shots__item ih-mock ih-mock--${s.variant}" data-reveal data-shots-cat="${s.cat}" data-shot="${i}" data-real-image="${realDir}integration-hub-${IntegrationHubConfig.catSlug[s.cat]}-${i + 1}.webp">
        <div class="ih-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="ih-mock__screen">
          <div class="ih-mock__screen-inner">
            <span class="ih-mock__icon" aria-hidden="true">${icon(catIcon(s.cat))}</span>
            <span class="ih-mock__label">${s.label}</span>
            <span class="ih-mock__meta">placeholder — pronto para captura real</span>
          </div>
        </div>
        <figcaption class="ih-mock__figcaption">
          <span class="ih-mock__figcaption-title">${s.label}</span>
          <span class="ih-mock__figcaption-desc">${s.desc}</span>
        </figcaption>
      </figure>`).join('');
  }

  function initScreenshotFilters() {
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.ih-filter-chip');
      if (!chip) return;

      document.querySelectorAll('.ih-filter-chip').forEach((c) => {
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
    const els = document.querySelectorAll('.ih-counter');
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

    const idx = PROJECTS.findIndex((p) => p.slug === 'integration-hub');
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const base = basePath();

    const prevLink = document.getElementById('ih-prev');
    const nextLink = document.getElementById('ih-next');
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
    const shareBtn = document.getElementById('ih-share');
    const copyBtn = document.getElementById('ih-copy');
    const copied = document.getElementById('ih-copied');

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
          title: 'Integration Hub — Enterprise Integration Platform',
          text: 'Conheça o Integration Hub: o barramento de integração que conecta APIs, eventos e sistemas.',
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
    renderIntegrations();
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
    if (typeof IntegrationFlow !== 'undefined') IntegrationFlow.init();

    const yearEl = document.getElementById('ih-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof Navigation !== 'undefined') Navigation.init();
    init();
  });

  window.__IHInit = init;

  return { init, basePath, icon };
})();

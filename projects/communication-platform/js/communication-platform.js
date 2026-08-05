/* ============================================
   INTEGRATION-HUB.JS — Product Showcase Engine
   Enterprise Integration Platform
   ============================================ */

const CommunicationPlatformConfig = Object.freeze({
  keyNumbers: [
    { value: 30, suffix: '+', label: 'Canais Planejados', desc: 'Canais de entrega prontos para roteamento e integração.' },
    { value: 1, suffix: 'M+', label: 'Mensagens Processadas', desc: 'Mensagens entregues com rastreabilidade e auditoria.' },
    { value: '99.9%', static: true, label: 'Disponibilidade (meta)', desc: 'Acordo de nível de serviço planejado para a plataforma.' },
    { value: '∞', suffix: '', static: true, label: 'Arquitetura Escalável por Design', desc: 'Cada camada escala de forma independente e resiliente.' }
  ],

  modules: [
    { name: 'Notification Engine', desc: 'Motor que orquestra a criação e o envio de mensagens.', status: 'Em desenvolvimento', cat: 'Núcleo', icon: 'zap' },
    { name: 'Email Service', desc: 'Entrega de e-mails transacionais com provedores dedicados.', status: 'Em desenvolvimento', cat: 'Canais', icon: 'mail' },
    { name: 'Template Manager', desc: 'Templates versionados com variáveis e regras por canal.', status: 'Ativo', cat: 'Núcleo', icon: 'fileText' },
    { name: 'Push Notification Service', desc: 'Notificações push nativas com token e segmentação.', status: 'Em desenvolvimento', cat: 'Canais', icon: 'smartphone' },
    { name: 'Webhook Dispatcher', desc: 'Entrega de eventos de comunicação a sistemas externos.', status: 'Ativo', cat: 'Canais', icon: 'webhook' },
    { name: 'Channel Router', desc: 'Roteamento de cada mensagem para o canal correto.', status: 'Em desenvolvimento', cat: 'Núcleo', icon: 'router' },
    { name: 'Queue Manager', desc: 'Filas e mensageria para processamento assíncrono.', status: 'Em desenvolvimento', cat: 'Mensageria', icon: 'inbox' },
    { name: 'Retry Engine', desc: 'Reenvio com backoff exponencial até entrega confirmada.', status: 'Em desenvolvimento', cat: 'Confiabilidade', icon: 'refresh' },
    { name: 'Delivery Tracking', desc: 'Rastreamento ponta a ponta de cada mensagem.', status: 'Em desenvolvimento', cat: 'Confiabilidade', icon: 'scan' },
    { name: 'Audit Platform', desc: 'Trilha imutável de envios, canais e decisões.', status: 'Em desenvolvimento', cat: 'Governança', icon: 'eye' },
    { name: 'Monitoring', desc: 'Métricas, alertas e painéis de saúde da entrega.', status: 'Em desenvolvimento', cat: 'Observabilidade', icon: 'monitor' },
    { name: 'Configuration Center', desc: 'Configuração central de canais, templates e políticas.', status: 'Ativo', cat: 'Plataforma', icon: 'settings' },
    { name: 'Administration', desc: 'Administração de ambientes, times e permissões.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'grid' },
    { name: 'API Gateway', desc: 'Entrada única para envio e consulta de mensagens.', status: 'Ativo', cat: 'Núcleo', icon: 'gateway' },
    { name: 'Analytics Dashboard', desc: 'Métricas de entrega, canais e engajamento.', status: 'Planejado', cat: 'Dados', icon: 'chart' }
  ],

  features: [
    { tag: 'Entrega', title: 'Notificações em Tempo Real', desc: 'Entrega instantânea por WebSocket, push e streaming.', icon: 'zap' },
    { tag: 'Entrega', title: 'Mensagens Transacionais', desc: 'E-mails e notificações com confirmação e rastreio.', icon: 'send' },
    { tag: 'Entrega', title: 'Templates de Mensagens', desc: 'Templates versionados com variáveis e regras por canal.', icon: 'fileText' },
    { tag: 'Entrega', title: 'Envio de E-mail', desc: 'E-mails transacionais com provedores e failover.', icon: 'mail' },
    { tag: 'Entrega', title: 'Webhook Outbound', desc: 'Eventos de entrega e confirmação para sistemas externos.', icon: 'webhook' },
    { tag: 'Entrega', title: 'Webhook Inbound', desc: 'Recepção de respostas e callbacks de canais e provedores.', icon: 'api' },
    { tag: 'Confiabilidade', title: 'Retry Automático', desc: 'Reenvio com backoff exponencial até a entrega confirmada.', icon: 'refresh' },
    { tag: 'Confiabilidade', title: 'Agendamento', desc: 'Mensagens programadas por data, horário e fuso.', icon: 'calendar' },
    { tag: 'Confiabilidade', title: 'Priorização', desc: 'Filas classificam mensagens críticas antes das demais.', icon: 'sliders' },
    { tag: 'Confiabilidade', title: 'Filas', desc: 'Processamento assíncrono com persistência e isolamento.', icon: 'inbox' },
    { tag: 'Observabilidade', title: 'Monitoramento', desc: 'Métricas, alertas e painéis de saúde da entrega.', icon: 'monitor' },
    { tag: 'Observabilidade', title: 'Logs', desc: 'Registro estruturado de cada mensagem e tentativa.', icon: 'list' },
    { tag: 'Observabilidade', title: 'Auditoria', desc: 'Trilha imutável de envios, canais e decisões.', icon: 'eye' },
    { tag: 'Governança', title: 'Internacionalização', desc: 'Mensagens localizadas por idioma, país e fuso.', icon: 'globe' },
    { tag: 'Governança', title: 'Tema Claro/Escuro', desc: 'Experiência adaptável para operações contínuas.', icon: 'palette' },
    { tag: 'Governança', title: 'API REST', desc: 'Superfície completa para envio e consulta de mensagens.', icon: 'api' },
    { tag: 'Governança', title: 'RBAC', desc: 'Permissões por papel e escopo em cada operação.', icon: 'shield' },
    { tag: 'Governança', title: 'Versionamento de Templates', desc: 'Histórico, diff e rollback de templates e configurações.', icon: 'history' },
    { tag: 'Entrega', title: 'Histórico de Entrega', desc: 'Linha do tempo completa de cada mensagem até o destino.', icon: 'scan' },
    { tag: 'Canais', title: 'Múltiplos Provedores', desc: 'Provedores substituíveis por canal com failover automático.', icon: 'boxes' }
  ],

  channels: [
    { name: 'Mensageria', icon: 'message', items: [
      { name: 'Slack', desc: 'Mensagens e alertas diretos para canais da organização.' },
      { name: 'Microsoft Teams', desc: 'Notificações em canais e conversas do Teams.' },
      { name: 'Telegram', desc: 'Mensagens seguras para grupos e usuários.' },
      { name: 'Discord', desc: 'Comunicação em comunidades e servidores.' }
    ] },
    { name: 'E-mail', icon: 'mail', items: [
      { name: 'SMTP', desc: 'Envio transacional direto por servidor SMTP.' },
      { name: 'Amazon SES', desc: 'Provedor de e-mail em escala com métricas de entrega.' },
      { name: 'SendGrid', desc: 'Envio e templates gerenciados — estrutura preparada.', planned: true }
    ] },
    { name: 'Mobile', icon: 'smartphone', items: [
      { name: 'Push Notifications', desc: 'Notificações nativas com token e segmentação.' },
      { name: 'Firebase Cloud Messaging', desc: 'Entrega push para Android e iOS — estrutura preparada.', planned: true }
    ] },
    { name: 'Web', icon: 'globe', items: [
      { name: 'Webhooks', desc: 'Eventos de comunicação enviados a aplicações web.' },
      { name: 'APIs REST', desc: 'Consultas e envios por contratos padronizados.' }
    ] },
    { name: 'SMS', icon: 'phone', items: [
      { name: 'Provedores SMS', desc: 'Mensagens de texto com entrega em escala — estrutura preparada.', planned: true }
    ] },
    { name: 'WhatsApp', icon: 'message', items: [
      { name: 'WhatsApp Business', desc: 'Mensagens corporativas com templates aprovados — estrutura preparada.', planned: true }
    ] }
  ],

  architecture: [
    { name: 'Frontend', desc: 'Consoles de comunicação, templates, filas e monitoramento.', icon: 'terminal' },
    { name: 'API Gateway', desc: 'Entrada única para envio e consulta de mensagens.', icon: 'gateway' },
    { name: 'Notification Engine', desc: 'Orquestração da criação, validação e envio de mensagens.', icon: 'zap' },
    { name: 'Queue Manager', desc: 'Filas assíncronas com priorização e persistência.', icon: 'inbox' },
    { name: 'Channel Router', desc: 'Roteamento de cada mensagem para o canal correto.', icon: 'router' },
    { name: 'Delivery Service', desc: 'Entrega final com retry, confirmação e tracking.', icon: 'send' },
    { name: 'Audit Service', desc: 'Trilha imutável de envios, canais e decisões.', icon: 'eye' },
    { name: 'Database', desc: 'PostgreSQL com estado, filas e histórico de mensagens.', icon: 'database' },
    { name: 'Storage', desc: 'Anexos e artefatos de mensagens e templates.', icon: 'hard' },
    { name: 'External Providers', desc: 'SMTP, SES, Slack, Teams, push e provedores externos.', icon: 'api' }
  ],

  ecosystem: [
    { name: 'ServiceForge', tag: 'Avisos de ordens de serviço e operações críticas.', accent: 'sf', icon: 'users', resources: ['Avisos de ordens de serviço', 'Status de atendimento', 'Notificações de SLA', 'Alertas de operação', 'Eventos de processos'] },
    { name: 'ClauseForge', tag: 'Aprovação de documentos e confirmações de assinatura.', accent: 'clf', icon: 'file', resources: ['Aprovação de documentos', 'Confirmação de assinatura', 'Alertas de revisão', 'Publicação de versões', 'Auditoria documental'] },
    { name: 'People Identity Hub', tag: 'Onboarding e alterações cadastrais dos colaboradores.', accent: 'pih', icon: 'users', resources: ['Onboarding de colaboradores', 'Alterações cadastrais', 'Recuperação de acesso', 'Provisionamento de conta', 'Eventos de identidade'] },
    { name: 'DataForge', tag: 'Importações concluídas, erros e alertas de qualidade.', accent: 'df', icon: 'database', resources: ['Importações concluídas', 'Erros de validação', 'Alertas de qualidade', 'Fluxos agendados', 'Consolidação de dados'] },
    { name: 'Knowledge Platform', tag: 'Publicações, revisões e alertas de aprovação.', accent: 'kp', icon: 'globe', resources: ['Publicações de conteúdo', 'Revisões pendentes', 'Alertas de aprovação', 'Solicitações de revisão', 'Atualizações de catálogo'] },
    { name: 'Workflow Engine', tag: 'Eventos de processos e transições de estado.', accent: 'we', icon: 'workflow', resources: ['Eventos de processos', 'Transições de estado', 'Tarefas pendentes', 'Alertas de SLA', 'Conclusões de etapa'] },
    { name: 'Integration Hub', tag: 'Eventos externos e entregas de integração.', accent: 'ih', icon: 'api', resources: ['Eventos externos', 'Entregas de integração', 'Falhas e retries', 'Status de conectores', 'Sincronizações'] }
  ],

  tech: [
    { name: 'React', role: 'Consoles de comunicação e monitoramento', spec: 'SPA' },
    { name: 'TypeScript', role: 'Tipagem dos contratos de mensagens', spec: '5.x' },
    { name: 'REST APIs', role: 'Superfície de envio e consulta', spec: 'HTTP' },
    { name: 'Webhooks', role: 'Eventos de entrega e confirmação', spec: 'Push' },
    { name: 'SMTP', role: 'Entrega de e-mails transacionais', spec: 'Protocolo' },
    { name: 'Queues', role: 'Processamento assíncrono de mensagens', spec: 'Events' },
    { name: 'Scheduler', role: 'Agendamento e recorrência de envios', spec: 'Cron' },
    { name: 'Supabase', role: 'Auth, banco e storage gerenciados', spec: 'PaaS' },
    { name: 'PostgreSQL', role: 'Estado, filas e histórico de mensagens', spec: '15+' },
    { name: 'Storage', role: 'Anexos e artefatos de mensagens', spec: 'Files' },
    { name: 'Logs', role: 'Registro estruturado de envios', spec: 'Observabilidade' },
    { name: 'RBAC', role: 'Permissões por papel e escopo', spec: 'Segurança' },
    { name: 'Auditoria', role: 'Trilha imutável de comunicações', spec: 'Governança' },
    { name: 'Analytics', role: 'Métricas de entrega e engajamento', spec: 'BI' }
  ],

  timeline: [
    {
      num: 'P1',
      title: 'Notification Core',
      status: 'Concluído',
      desc: 'A fundação do envio: motor, templates e filas.',
      items: [
        'Notification Engine e Template Manager',
        'API Gateway REST e RBAC',
        'Filas com retry e agendamento'
      ]
    },
    {
      num: 'P2',
      title: 'Email Platform',
      status: 'Em andamento',
      desc: 'E-mails transacionais com provedores e tracking.',
      items: [
        'Email Service com SMTP e SES',
        'Histórico de entrega e confirmação',
        'Múltiplos provedores com failover'
      ]
    },
    {
      num: 'P3',
      title: 'Omnichannel',
      status: 'Planejado',
      desc: 'Todos os canais roteados por uma única camada.',
      items: [
        'Channel Router com regras de roteamento',
        'Push, webhooks e mensageria',
        'Canais colaborativos e WhatsApp'
      ]
    },
    {
      num: 'P4',
      title: 'Advanced Analytics',
      status: 'Planejado',
      desc: 'Inteligência sobre a operação de comunicação.',
      items: [
        'Painéis de entrega e engajamento',
        'Previsão de falhas de entrega',
        'Dashboards em tempo real'
      ]
    },
    {
      num: 'P5',
      title: 'AI Communication Assistant',
      status: 'Planejado',
      desc: 'Inteligência artificial no ciclo de comunicação.',
      items: [
        'Assistente de IA para criação de mensagens',
        'Otimização automática de canais',
        'Personalização baseada em contexto'
      ]
    }
  ],

  future: [
    { title: 'Assistente de IA para mensagens', desc: 'Criação de mensagens a partir de intenção e contexto.', icon: 'sparkles' },
    { title: 'Otimização automática de canais', desc: 'Escolha do melhor canal por mensagem e público.', icon: 'zap' },
    { title: 'A/B Testing', desc: 'Testes de conteúdo e canal medidos por conversão.', icon: 'columns' },
    { title: 'Personalização por contexto', desc: 'Mensagens adaptadas a dados e comportamento.', icon: 'variable' },
    { title: 'Marketplace de templates', desc: 'Templates publicados por equipes e parceiros.', icon: 'boxes' },
    { title: 'Painel de campanhas', desc: 'Orquestração de campanhas multicanal.', icon: 'chart' },
    { title: 'Comunicação bidirecional', desc: 'Conversas e respostas em todos os canais.', icon: 'message' },
    { title: 'Motor de preferências', desc: 'O usuário define onde e quando ser contatado.', icon: 'sliders' },
    { title: 'Dashboards em tempo real', desc: 'Métricas de entrega e saúde ao vivo.', icon: 'monitor' },
    { title: 'Previsão de falhas de entrega', desc: 'Detecção proativa antes do impacto no cliente.', icon: 'gauge' }
  ],

  useCases: [
    { title: 'Notificação de Ordem de Serviço', icon: 'zap', problema: 'Técnicos perdem prazos e a operação perde produtividade sem avisos claros.', solucao: 'Mensagens multicanal disparam quando uma ordem de serviço é criada ou alterada.', beneficio: 'Resposta em tempo real e SLAs cumpridos.' },
    { title: 'Confirmação de Cadastro', icon: 'send', problema: 'Confirmações de e-mail e SMS chegam tarde ou se perdem.', solucao: 'Fluxo transacional com template por canal e retry até confirmação.', beneficio: 'Menos abandonos e base sempre validada.' },
    { title: 'Fluxo de Aprovação', icon: 'workflow', problema: 'Aprovações pendentes travam processos críticos do negócio.', solucao: 'Notificações por etapa com escalonamento automático.', beneficio: 'Ciclos de aprovação até 60% mais rápidos.' },
    { title: 'Envio de Relatórios', icon: 'fileText', problema: 'Relatórios gerados não chegam aos tomadores de decisão.', solucao: 'Agendamento e entrega por e-mail, Slack e push.', beneficio: 'Decisões baseadas em dados na hora certa.' },
    { title: 'Alertas Operacionais', icon: 'bell', problema: 'Falhas em sistemas passam despercebidas pelas equipes.', solucao: 'Alertas priorizados com fila dedicada e múltiplos canais.', beneficio: 'Tempo médio de resposta significativamente reduzido.' },
    { title: 'Integração com Slack', icon: 'message', problema: 'Times presos a ferramentas isoladas de comunicação.', solucao: 'Conector Slack com templates e canais configuráveis.', beneficio: 'Operação centralizada no dia a dia das equipes.' },
    { title: 'Monitoramento de Eventos', icon: 'monitor', problema: 'Sem visibilidade sobre o que é comunicado e para quem.', solucao: 'Dashboard de entrega, canais e falhas em tempo real.', beneficio: 'Observabilidade total da comunicação.' },
    { title: 'Comunicação entre Sistemas', icon: 'api', problema: 'Sistemas corporativos não trocam eventos de negócio.', solucao: 'API REST e webhooks conectam aplicações à plataforma.', beneficio: 'Ecossistema integrado em uma única camada.' }
  ],

  catSlug: {
    'Visão Geral': 'visao-geral',
    'Templates': 'templates',
    'Fila': 'fila',
    'Monitoramento': 'monitoramento',
    'Temas': 'temas',
    'Dispositivos': 'dispositivos'
  },

  screenshots: [
    { cat: 'Visão Geral', label: 'Dashboard', desc: 'Visão consolidada de mensagens, canais e saúde da entrega.', alt: 'Dashboard do Communication Platform com visão geral.', variant: 'wide' },
    { cat: 'Visão Geral', label: 'Central de Notificações', desc: 'Acompanhamento de todas as mensagens enviadas e agendadas.', alt: 'Central de notificações do Communication Platform.', variant: 'wide' },
    { cat: 'Templates', label: 'Editor de Templates', desc: 'Criação de templates com variáveis e regras por canal.', alt: 'Editor de templates do Communication Platform.', variant: 'wide' },
    { cat: 'Fila', label: 'Fila de Mensagens', desc: 'Filas de envio com priorização e retry visível.', alt: 'Fila de mensagens do Communication Platform.', variant: 'wide' },
    { cat: 'Fila', label: 'Logs', desc: 'Registro estruturado de cada envio, tentativa e falha.', alt: 'Logs de mensagens do Communication Platform.', variant: 'desktop' },
    { cat: 'Monitoramento', label: 'Monitoramento', desc: 'Métricas e alertas de saúde da entrega em tempo real.', alt: 'Monitoramento do Communication Platform.', variant: 'wide' },
    { cat: 'Monitoramento', label: 'Analytics', desc: 'Métricas de entrega, canais e engajamento.', alt: 'Analytics do Communication Platform.', variant: 'desktop' },
    { cat: 'Temas', label: 'Dark Mode', desc: 'Tema escuro para operações de comunicação contínuas.', alt: 'Communication Platform no modo escuro.', variant: 'wide' },
    { cat: 'Temas', label: 'Light Mode', desc: 'Tema claro e objetivo para configuração e leitura.', alt: 'Communication Platform no modo claro.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Desktop', desc: 'Experiência completa em telas amplas.', alt: 'Communication Platform em desktop.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Tablet', desc: 'Acompanhamento de entregas em tablets.', alt: 'Communication Platform em tablet.', variant: 'tablet' },
    { cat: 'Dispositivos', label: 'Mobile', desc: 'Monitoramento de mensagens pelo celular.', alt: 'Communication Platform em mobile.', variant: 'mobile' }
  ]
});

const CommunicationPlatform = (() => {
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
    mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22 6 12 13 2 6"/>',
    smartphone: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
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
    const grid = document.getElementById('cp-numbers-grid');
    if (!grid) return;
    grid.innerHTML = CommunicationPlatformConfig.keyNumbers.map((n) => `
      <article class="cp-numbers__card" data-reveal>
        <span class="cp-numbers__value${n.static ? ' is-static' : ''}">
          ${n.static ? n.value : `<span class="cp-counter" data-value="${n.value}" data-suffix="${n.suffix}">0</span>`}
        </span>
        <span class="cp-numbers__label">${n.label}</span>
        <span class="cp-numbers__desc">${n.desc}</span>
      </article>`).join('');
  }

  function renderModules() {
    const grid = document.getElementById('cp-modules-grid');
    if (!grid) return;
    grid.innerHTML = CommunicationPlatformConfig.modules.map((m) => `
      <article class="cp-module cp-card" data-reveal>
        <div class="cp-module__head">
          <span class="cp-module__icon" aria-hidden="true">${icon(m.icon)}</span>
          <span class="cp-module__cat">${m.cat}</span>
        </div>
        <h3 class="cp-module__name">${m.name}</h3>
        <p class="cp-module__desc">${m.desc}</p>
        <span class="cp-status cp-status--${statusCls(m.status)}">${m.status}</span>
      </article>`).join('');
  }

  function renderFeatures() {
    const grid = document.getElementById('cp-features-grid');
    if (!grid) return;
    grid.innerHTML = CommunicationPlatformConfig.features.map((f) => `
      <article class="cp-feature cp-card" data-reveal>
        <span class="cp-feature__icon" aria-hidden="true">${icon(f.icon)}</span>
        <span class="cp-feature__tag">${f.tag}</span>
        <h3 class="cp-feature__title">${f.title}</h3>
        <p class="cp-feature__desc">${f.desc}</p>
      </article>`).join('');
  }

  function renderIntegrations() {
    const grid = document.getElementById('cp-integrations-grid');
    if (!grid) return;
    grid.innerHTML = CommunicationPlatformConfig.channels.map((g) => `
      <article class="cp-integrations__group cp-card" data-reveal>
        <div class="cp-integrations__head">
          <span class="cp-integrations__icon" aria-hidden="true">${icon(g.icon)}</span>
          <h3 class="cp-integrations__name">${g.name}</h3>
        </div>
        <ul class="cp-integrations__chips">
          ${g.items.map((i) => `
            <li class="cp-integration-chip${i.planned ? ' is-planned' : ''}">
              <span class="cp-integration-chip__dot" aria-hidden="true"></span>
              <span class="cp-integration-chip__text">
                ${i.name}
                <span class="cp-integration-chip__desc">${i.desc}</span>
              </span>
              ${i.planned ? '<span class="cp-integration-chip__badge">Em breve</span>' : ''}
            </li>`).join('')}
        </ul>
      </article>`).join('');
  }

  function renderEcosystem() {
    const root = document.getElementById('cp-eco-root');
    if (!root) return;
    root.innerHTML = `
      <div class="cp-eco__wrap">
        <div class="cp-eco__hub" aria-hidden="true">
          <div class="cp-eco__hub-core">
            <div>
              <span class="cp-eco__hub-title">Communication Platform</span>
              <span class="cp-eco__hub-sub">Integration Bus</span>
            </div>
          </div>
        </div>
        <div class="cp-eco__nodes">
          ${CommunicationPlatformConfig.ecosystem.map((node) => `
            <article class="cp-eco__node cp-card" data-reveal>
              <div class="cp-eco__node-head">
                <span class="cp-eco__node-icon cp-eco__node-icon--${node.accent}" aria-hidden="true">${icon(node.icon)}</span>
                <div>
                  <h3 class="cp-eco__node-name">${node.name}</h3>
                  <p class="cp-eco__node-tag">${node.tag}</p>
                </div>
              </div>
              <ul class="cp-eco__node-resources">
                ${node.resources.map((r) => `<li class="cp-eco__chip">${r}</li>`).join('')}
              </ul>
            </article>`).join('')}
        </div>
      </div>
      <p class="cp-eco__footnote">O Communication Platform conecta todo o ecossistema: identidade, dados, documentos e operação fluem pelo mesmo barramento de eventos e APIs.</p>`;
  }

  function renderArchitecture() {
    const wrap = document.getElementById('cp-arch-layers');
    if (!wrap) return;
    const nodes = CommunicationPlatformConfig.architecture.map((l) => `
      <li class="cp-arch__node">
        <div class="cp-arch__node-info" data-reveal>
          <span class="cp-arch__node-badge" aria-hidden="true">${icon(l.icon, 18)}</span>
          <div>
            <h3 class="cp-arch__node-name">${l.name}</h3>
            <p class="cp-arch__node-desc">${l.desc}</p>
          </div>
        </div>
      </li>`).join('');
    wrap.innerHTML = `<div class="cp-arch__line" aria-hidden="true"></div>${nodes}`;
  }

  function renderTech() {
    const grid = document.getElementById('cp-tech-grid');
    if (!grid) return;
    grid.innerHTML = CommunicationPlatformConfig.tech.map((t) => `
      <article class="cp-tech cp-card" data-reveal>
        <h3 class="cp-tech__name"><span class="cp-tech__dot" aria-hidden="true"></span>${t.name}</h3>
        <p class="cp-tech__desc">${t.role}</p>
        <span class="cp-tech__spec">${t.spec}</span>
      </article>`).join('');
  }

  function renderTimeline() {
    const wrap = document.getElementById('cp-timeline-list');
    if (!wrap) return;
    wrap.innerHTML = CommunicationPlatformConfig.timeline.map((p) => `
      <li class="cp-phase" data-reveal>
        <span class="cp-phase__pin" aria-hidden="true">${p.num}</span>
        <div class="cp-phase__card cp-card">
          <div class="cp-phase__meta">
            <span class="cp-phase__num">${p.num}</span>
            <span class="cp-status cp-status--${statusCls(p.status)} cp-phase__status">${p.status}</span>
          </div>
          <h3 class="cp-phase__title">${p.title}</h3>
          <p class="cp-phase__desc">${p.desc}</p>
          <ul class="cp-phase__items">
            ${p.items.map((i) => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      </li>`).join('');
  }

  function renderFuture() {
    const grid = document.getElementById('cp-future-grid');
    if (!grid) return;
    grid.innerHTML = CommunicationPlatformConfig.future.map((f) => `
      <article class="cp-future cp-card" data-reveal>
        <span class="cp-future__icon" aria-hidden="true">${icon(f.icon)}</span>
        <div>
          <h3 class="cp-future__title">${f.title}</h3>
          <p class="cp-future__desc">${f.desc}</p>
        </div>
      </article>`).join('');
  }

  function renderCases() {
    const grid = document.getElementById('cp-cases-grid');
    if (!grid) return;
    grid.innerHTML = CommunicationPlatformConfig.useCases.map((c) => `
      <article class="cp-case cp-card" data-reveal>
        <div class="cp-case__head">
          <span class="cp-case__icon" aria-hidden="true">${icon(c.icon)}</span>
          <h3 class="cp-case__title">${c.title}</h3>
        </div>
        <p class="cp-case__block"><span class="cp-case__block-label">Problema</span><br>${c.problema}</p>
        <p class="cp-case__block"><span class="cp-case__block-label">Solução</span><br>${c.solucao}</p>
        <p class="cp-case__block"><span class="cp-case__block-label">Benefício</span><br>${c.beneficio}</p>
      </article>`).join('');
  }

  const catIcon = (cat) =>
    cat === 'Visão Geral' ? 'gauge' : cat === 'Templates' ? 'edit' : cat === 'Fila' ? 'inbox' : cat === 'Monitoramento' ? 'monitor' : cat === 'Temas' ? 'palette' : 'layout';

  function renderScreenshots() {
    const grid = document.getElementById('cp-shots-grid');
    const filters = document.getElementById('cp-shots-filters');
    if (!grid) return;

    const cats = ['Todos', ...new Set(CommunicationPlatformConfig.screenshots.map((s) => s.cat))];
    const realDir = `${basePath()}assets/gallery/`;

    if (filters) {
      filters.innerHTML = cats.map((c, i) =>
        `<button class="cp-tab cp-filter-chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
      ).join('');
    }

    grid.innerHTML = CommunicationPlatformConfig.screenshots.map((s, i) => `
      <figure class="cp-shots__item cp-mock cp-mock--${s.variant}" data-reveal data-shots-cat="${s.cat}" data-shot="${i}" data-real-image="${realDir}communication-platform-${CommunicationPlatformConfig.catSlug[s.cat]}-${i + 1}.webp">
        <div class="cp-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="cp-mock__screen">
          <div class="cp-mock__screen-inner">
            <span class="cp-mock__icon" aria-hidden="true">${icon(catIcon(s.cat))}</span>
            <span class="cp-mock__label">${s.label}</span>
            <span class="cp-mock__meta">placeholder — pronto para captura real</span>
          </div>
        </div>
        <figcaption class="cp-mock__figcaption">
          <span class="cp-mock__figcaption-title">${s.label}</span>
          <span class="cp-mock__figcaption-desc">${s.desc}</span>
        </figcaption>
      </figure>`).join('');
  }

  function initScreenshotFilters() {
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.cp-filter-chip');
      if (!chip) return;

      document.querySelectorAll('.cp-filter-chip').forEach((c) => {
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
    const els = document.querySelectorAll('.cp-counter');
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

    const idx = PROJECTS.findIndex((p) => p.slug === 'communication-platform');
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const base = basePath();

    const prevLink = document.getElementById('cp-prev');
    const nextLink = document.getElementById('cp-next');
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
    const shareBtn = document.getElementById('cp-share');
    const copyBtn = document.getElementById('cp-copy');
    const copied = document.getElementById('cp-copied');

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
          title: 'Communication Platform — Enterprise Integration Platform',
          text: 'Conheça o Communication Platform: o barramento de integração que conecta APIs, eventos e sistemas.',
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
    if (typeof NotificationFlow !== 'undefined') NotificationFlow.init();

    const yearEl = document.getElementById('cp-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof Navigation !== 'undefined') Navigation.init();
    init();
  });

  window.__CPInit = init;

  return { init, basePath, icon };
})();

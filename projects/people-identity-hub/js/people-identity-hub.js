/* ============================================
   PEOPLE-IDENTITY-HUB.JS — Product Showcase Engine
   Enterprise Workforce Identity & HR Integration Platform
   ============================================ */

const PeopleIdentityHubConfig = Object.freeze({
  keyNumbers: [
    { value: 20, suffix: '+', label: 'Integrações Planejadas', desc: 'Conectores para RH, diretórios, aplicações e APIs.' },
    { value: 500, suffix: 'K+', label: 'Colaboradores Suportados', desc: 'Escala projetada para médias e grandes organizações.' },
    { value: 100, suffix: '+', label: 'Campos Sincronizados', desc: 'Dados cadastrais, funcionais e organizacionais.' },
    { value: '∞', suffix: '', static: true, label: 'Escalabilidade', desc: 'Identidades multiempresa com crescimento contínuo.' }
  ],

  modules: [
    { name: 'Identity Registry', desc: 'Registro central da identidade de cada colaborador com fonte única da verdade.', status: 'Ativo', cat: 'Núcleo', icon: 'fingerprint' },
    { name: 'Employee Directory', desc: 'Diretório corporativo completo com dados funcionais e organizacionais.', status: 'Ativo', cat: 'Núcleo', icon: 'users' },
    { name: 'Organizations', desc: 'Modelo multiempresa com vínculos hierárquicos entre companhias e filiais.', status: 'Ativo', cat: 'Núcleo', icon: 'building' },
    { name: 'Departments', desc: 'Estrutura departamental com centros de custo e responsáveis.', status: 'Ativo', cat: 'Núcleo', icon: 'briefcase' },
    { name: 'Groups', desc: 'Grupos de segurança e distribuição para direcionar acesso e comunicação.', status: 'Ativo', cat: 'Núcleo', icon: 'grid' },
    { name: 'Roles', desc: 'Papéis funcionais que definem escopo de acesso por área e operação.', status: 'Em desenvolvimento', cat: 'Núcleo', icon: 'shield' },
    { name: 'RBAC', desc: 'Controle de acesso baseado em papéis com permissões granulares.', status: 'Em desenvolvimento', cat: 'Governança', icon: 'key' },
    { name: 'API Integrations', desc: 'REST API completa para consulta, escrita e eventos de identidade.', status: 'Ativo', cat: 'Integração', icon: 'api' },
    { name: 'Provisioning', desc: 'Criação automática de acessos em aplicações e diretórios.', status: 'Em desenvolvimento', cat: 'Automação', icon: 'user-plus' },
    { name: 'Synchronization Engine', desc: 'Motor de sincronização bidirecional com mapeamento de campos.', status: 'Ativo', cat: 'Automação', icon: 'sync' },
    { name: 'Payroll Integration', desc: 'Integração com sistemas de folha de pagamento para dados funcionais.', status: 'Planejado', cat: 'Integração', icon: 'cash' },
    { name: 'Google Workspace', desc: 'Sincronização de usuários e grupos com o Google Workspace.', status: 'Planejado', cat: 'Integração', icon: 'cloud' },
    { name: 'Audit Platform', desc: 'Trilha imutável de todas as operações e alterações de identidade.', status: 'Ativo', cat: 'Governança', icon: 'eye' },
    { name: 'Administration', desc: 'Administração de usuários, ambientes e políticas da plataforma.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'settings' },
    { name: 'Monitoring', desc: 'Monitoramento de sincronizações, filas e saúde dos conectores.', status: 'Planejado', cat: 'Plataforma', icon: 'monitor' },
    { name: 'Configuration Center', desc: 'Configuração central de mapeamentos, conectores e regras.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'sliders' }
  ],

  features: [
    { tag: 'Identidade', title: 'Identidade Única do Colaborador', desc: 'Um registro canônico por pessoa consolida dados de RH, diretórios e aplicações — eliminando cadastros duplicados e divergentes.', icon: 'fingerprint' },
    { tag: 'Identidade', title: 'Matrícula Corporativa', desc: 'Matrícula única e padronizada como chave de integração entre todos os sistemas corporativos.', icon: 'badge' },
    { tag: 'Automação', title: 'Sincronização Automática', desc: 'Alterações no RH são propagadas automaticamente para diretórios e aplicações, sem ação manual.', icon: 'sync' },
    { tag: 'Integração', title: 'Integrações REST', desc: 'API completa para integrar identidades a qualquer sistema corporativo com autenticação e rate limit.', icon: 'api' },
    { tag: 'Governança', title: 'RBAC', desc: 'Permissões granulares garantem que cada área acesse apenas o escopo da sua operação.', icon: 'key' },
    { tag: 'Identidade', title: 'Multiempresa', desc: 'Suporta conglomerados e holdings com dados isolados por organização e visão consolidada.', icon: 'building' },
    { tag: 'Automação', title: 'Provisionamento', desc: 'Acessos são criados automaticamente na admissão, reduzindo horas de trabalho manual.', icon: 'user-plus' },
    { tag: 'Automação', title: 'Desprovisionamento', desc: 'Acessos são revogados automaticamente no desligamento, reduzindo risco de acesso residual.', icon: 'user-minus' },
    { tag: 'Governança', title: 'Auditoria', desc: 'Registro imutável de quem alterou o quê, quando e por qual origem — pronto para compliance.', icon: 'eye' },
    { tag: 'Governança', title: 'Histórico de Alterações', desc: 'Comparação de versões com diff para rastrear toda mudança cadastral do colaborador.', icon: 'history' },
    { tag: 'Acessos', title: 'Perfis', desc: 'Perfis reutilizáveis simplificam a concessão de acesso consistente por função.', icon: 'users' },
    { tag: 'Acessos', title: 'Grupos', desc: 'Grupos dinâmicos são preenchidos por regras, mantendo membros sempre atualizados.', icon: 'grid' },
    { tag: 'Organização', title: 'Organizações', desc: 'Hierarquias de empresas e filiais refletem a estrutura real de negócio.', icon: 'building' },
    { tag: 'Organização', title: 'Departamentos', desc: 'Departamentos e centros de custo organizam pessoas e acessos por área.', icon: 'briefcase' },
    { tag: 'Integração', title: 'Google Workspace', desc: 'Usuários e grupos espelhados no Google Workspace com suporte a licenças.', icon: 'cloud' },
    { tag: 'Integração', title: 'Folha de Pagamento', desc: 'Dados funcionais sincronizados com sistemas de folha para consistência de remuneração.', icon: 'cash' },
    { tag: 'Dados', title: 'Importação em Lote', desc: 'Migração massiva de cadastros com validação e relatório de erros.', icon: 'upload' },
    { tag: 'Dados', title: 'Exportação', desc: 'Exportação de diretórios e relatórios para sistemas legados e BI.', icon: 'download' },
    { tag: 'Plataforma', title: 'Internacionalização', desc: 'Interface e dados prontos para operações multinacionais e múltiplos idiomas.', icon: 'globe' },
    { tag: 'Plataforma', title: 'Tema Claro/Escuro', desc: 'Acessível e confortável em qualquer ambiente de trabalho.', icon: 'palette' }
  ],

  systems: [
    { group: 'RH', icon: 'briefcase', sub: 'Fontes primárias de dados funcionais e cadastrais', items: [
      { name: 'BambooHR', status: 'live' },
      { name: 'APDATA', status: 'planned' },
      { name: 'Senior', status: 'planned' },
      { name: 'TOTVS RM', status: 'planned' }
    ]},
    { group: 'Diretórios', icon: 'cloud', sub: 'Diretórios de identidade e autenticação', items: [
      { name: 'Google Workspace', status: 'planned', note: 'Em desenvolvimento' },
      { name: 'Microsoft Entra ID', status: 'ready', note: 'Preparado' },
      { name: 'LDAP', status: 'ready', note: 'Preparado' }
    ]},
    { group: 'Aplicações', icon: 'layout', sub: 'Sistemas internos do ecossistema', items: [
      { name: 'ServiceForge', status: 'planned' },
      { name: 'Knowledge Platform', status: 'planned' },
      { name: 'DataForge', status: 'planned' }
    ]},
    { group: 'APIs', icon: 'api', sub: 'Superfície de integração programática', items: [
      { name: 'REST', status: 'live' },
      { name: 'Webhooks', status: 'live' }
    ]}
  ],

  architecture: [
    { name: 'Frontend', desc: 'Interface React com diretório, gestão de identidades e consoles administrativos.', icon: 'terminal' },
    { name: 'Identity Engine', desc: 'Modelo canônico de colaboradores, organizações, grupos e papéis.', icon: 'fingerprint' },
    { name: 'Synchronization Engine', desc: 'Mapeamento de campos e sincronização bidirecional entre fontes.', icon: 'sync' },
    { name: 'Provisioning Engine', desc: 'Criação e revogação automática de acessos em aplicações e diretórios.', icon: 'user-plus' },
    { name: 'Integration Hub', desc: 'Conectores modulares, REST API e webhooks para sistemas externos.', icon: 'api' },
    { name: 'Audit Service', desc: 'Registro imutável de operações, alterações e eventos de sincronização.', icon: 'eye' },
    { name: 'Database', desc: 'PostgreSQL multi-tenant com RLS e isolamento por organização.', icon: 'database' },
    { name: 'Storage', desc: 'Armazenamento de arquivos, exportações e artefatos de sincronização.', icon: 'container' },
    { name: 'External Systems', desc: 'RH, folha, diretórios e aplicações conectados de forma modular.', icon: 'globe' }
  ],

  tech: [
    { name: 'React', role: 'Interface SPA com diretório e consoles de gestão', spec: 'SPA' },
    { name: 'TypeScript', role: 'Tipagem ponta a ponta das integrações', spec: '5.x' },
    { name: 'Supabase', role: 'Auth, banco e storage gerenciados', spec: 'PaaS' },
    { name: 'PostgreSQL', role: 'Identidades multi-tenant com RLS e audit', spec: '15+' },
    { name: 'REST APIs', role: 'Consulta e escrita de identidades', spec: 'HTTP' },
    { name: 'RBAC', role: 'Permissões por papel e escopo', spec: 'Segurança' },
    { name: 'JWT', role: 'Tokens de acesso e sessões', spec: 'Auth' },
    { name: 'OAuth', role: 'Fluxos de autorização de integrações', spec: '2.0' },
    { name: 'Storage', role: 'Arquivos e exportações de diretório', spec: 'Files' },
    { name: 'RLS', role: 'Isolamento de dados por organização', spec: 'Segurança' },
    { name: 'Workflow', role: 'Fluxos de sincronização e aprovação', spec: 'Engine' },
    { name: 'Auditoria', role: 'Trilha imutável de operações', spec: 'Audit' },
    { name: 'Google Workspace', role: 'Sincronização de usuários e grupos', spec: 'Conector' },
    { name: 'APIs Corporativas', role: 'Integração com RH e sistemas legados', spec: 'Conectores' }
  ],

  timeline: [
    {
      num: 'P1',
      title: 'Identity Core',
      status: 'Concluído',
      desc: 'A fundação: registro central de identidade, diretório e modelo organizacional.',
      items: [
        'Identity Registry e Employee Directory',
        'Organizations, Departments e Groups',
        'Synchronization Engine com mapeamento de campos'
      ]
    },
    {
      num: 'P2',
      title: 'HR Integrations',
      status: 'Concluído',
      desc: 'Conectores de RH e folha para alimentar a base de identidade.',
      items: [
        'Conector BambooHR',
        'Conector APDATA',
        'Integrações Senior e TOTVS RM'
      ]
    },
    {
      num: 'P3',
      title: 'Provisioning Platform',
      status: 'Em andamento',
      desc: 'Automação de provisionamento e desprovisionamento de acessos.',
      items: [
        'Provisioning Engine com filas',
        'Desprovisionamento automático',
        'Integração com Google Workspace'
      ]
    },
    {
      num: 'P4',
      title: 'Identity Governance',
      status: 'Planejado',
      desc: 'Governança avançada: revisões, políticas e controles de acesso.',
      items: [
        'RBAC granular e policy engine',
        'Audit Platform expandida',
        'Certificações de acesso periódicas'
      ]
    },
    {
      num: 'P5',
      title: 'AI Workforce Insights',
      status: 'Planejado',
      desc: 'Inteligência artificial aplicada à gestão de identidade.',
      items: [
        'Análise de inconsistências cadastrais',
        'Assistente de IA para gestão',
        'Dashboards analíticos preditivos'
      ]
    }
  ],

  future: [
    { title: 'Provisionamento Inteligente', desc: 'Regras dinâmicas que provisionam acesso com base em cargo, área e políticas.', icon: 'workflow' },
    { title: 'Assistente de IA', desc: 'Assistente para gestão de colaboradores e consultas de identidade em linguagem natural.', icon: 'sparkles' },
    { title: 'Análise de Inconsistências', desc: 'Detecção automática de divergências entre sistemas com sugestão de correção.', icon: 'chart' },
    { title: 'Governança Avançada', desc: 'Certificações de acesso, revisões periódicas e políticas de risco.', icon: 'shield' },
    { title: 'Marketplace de Conectores', desc: 'Novos conectores publicados pela comunidade e pelo ecossistema.', icon: 'grid' },
    { title: 'Provedores de Autenticação', desc: 'Integração com provedores de identidade e autenticação corporativa.', icon: 'key' },
    { title: 'Dashboards Analíticos', desc: 'Métricas de ciclo de vida, provisionamento e saúde da base de identidade.', icon: 'monitor' },
    { title: 'Motor de Políticas de Acesso', desc: 'Políticas declarativas aplicadas automaticamente a cada evento.', icon: 'lock' },
    { title: 'Sincronização em Tempo Real', desc: 'Eventos em tempo real entre RH, diretórios e aplicações.', icon: 'sync' },
    { title: 'Self-Service Portal', desc: 'Portal para colaboradores atualizarem dados e solicitarem acessos.', icon: 'users' }
  ],

  useCases: [
    { title: 'Integração entre RH e sistemas internos', icon: 'briefcase', problema: 'Dados do RH chegam atrasados e divergentes nos sistemas internos, exigindo reconciliação manual.', solucao: 'Sincronização automática de cadastros do RH para diretórios e aplicações com mapeamento de campos.', beneficio: 'Cadastros consistentes em toda a empresa, sem digitação duplicada.' },
    { title: 'Provisionamento automático de acessos', icon: 'user-plus', problema: 'Novos colaboradores esperam dias até receberem todos os acessos necessários.', solucao: 'Provisionamento automático de contas, grupos e permissões na admissão.', beneficio: 'Produtividade desde o primeiro dia e carga zero para a equipe de TI.' },
    { title: 'Sincronização entre múltiplas empresas', icon: 'building', problema: 'Grupos econômicos mantêm bases separadas sem visão consolidada do quadro.', solucao: 'Modelo multiempresa com identidades isoladas por organização e relatórios consolidados.', beneficio: 'Governança uniforme de identidade em todas as empresas do grupo.' },
    { title: 'Centralização de identidade corporativa', icon: 'fingerprint', problema: 'O mesmo colaborador existe com dados diferentes em cada sistema.', solucao: 'Identidade única canônica alimentada por todas as fontes, com conflitos resolvidos por regras.', beneficio: 'Fonte única da verdade para todo dado de colaborador.' },
    { title: 'Auditoria de alterações cadastrais', icon: 'eye', problema: 'Sem registro confiável de quem alterou dados funcionais e quando.', solucao: 'Audit platform com trilha imutável e histórico comparável por colaborador.', beneficio: 'Conformidade comprovável e respostas rápidas a auditorias.' },
    { title: 'Integração com Google Workspace', icon: 'cloud', problema: 'Usuários e grupos do Workspace desatualizados em relação ao RH.', solucao: 'Sincronização de usuários, grupos e licenças com o Google Workspace.', beneficio: 'Diretório do Workspace sempre alinhado ao quadro real.' },
    { title: 'Padronização de matrículas', icon: 'badge', problema: 'Cada sistema usa uma matrícula ou identificador diferente para a mesma pessoa.', solucao: 'Matrícula corporativa única como chave canônica de integração.', beneficio: 'Correlação confiável de dados entre todos os sistemas.' },
    { title: 'Consolidação de dados de colaboradores', icon: 'users', problema: 'Diretórios espalhados impedem uma visão única do quadro de pessoal.', solucao: 'Employee Directory consolidado com dados funcionais, organizacionais e de contato.', beneficio: 'Visão confiável e atualizada de todo o quadro corporativo.' }
  ],

  screenshots: [
    { cat: 'Visão Geral', label: 'Dashboard', desc: 'Visão consolidada do quadro de colaboradores e sincronizações.', alt: 'Dashboard do People Identity Hub com visão geral de identidades.', variant: 'wide' },
    { cat: 'Visão Geral', label: 'Logs', desc: 'Registro de eventos e atividades recentes da plataforma.', alt: 'Logs de eventos do People Identity Hub.', variant: 'wide' },
    { cat: 'Cadastro', label: 'Cadastro de Colaboradores', desc: 'Formulário canônico de identidade com dados funcionais.', alt: 'Cadastro de colaboradores do People Identity Hub.', variant: 'wide' },
    { cat: 'Cadastro', label: 'Organizações', desc: 'Hierarquia de empresas, filiais e unidades do grupo.', alt: 'Organizações do People Identity Hub.', variant: 'desktop' },
    { cat: 'Cadastro', label: 'Grupos', desc: 'Grupos dinâmicos com membros calculados por regras.', alt: 'Grupos do People Identity Hub.', variant: 'desktop' },
    { cat: 'Acesso', label: 'Permissões', desc: 'Concessão de perfis e papéis por escopo de atuação.', alt: 'Permissões do People Identity Hub.', variant: 'wide' },
    { cat: 'Acesso', label: 'Sincronização', desc: 'Mapeamento de campos entre RH e sistemas internos.', alt: 'Sincronização de campos do People Identity Hub.', variant: 'wide' },
    { cat: 'Integrações', label: 'Integrações', desc: 'Gerenciamento de conectores e APIs da plataforma.', alt: 'Integrações do People Identity Hub.', variant: 'desktop' },
    { cat: 'Temas', label: 'Dark Mode', desc: 'Tema escuro para operações intensivas.', alt: 'People Identity Hub no modo escuro.', variant: 'wide' },
    { cat: 'Temas', label: 'Light Mode', desc: 'Tema claro e objetivo.', alt: 'People Identity Hub no modo claro.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Desktop', desc: 'Experiência completa em telas amplas.', alt: 'People Identity Hub em desktop.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Tablet', desc: 'Operação em telas intermediárias.', alt: 'People Identity Hub em tablet.', variant: 'tablet' },
    { cat: 'Dispositivos', label: 'Mobile', desc: 'Consulta de identidades pelo celular.', alt: 'People Identity Hub em mobile.', variant: 'mobile' }
  ]
});

const PeopleIdentityHub = (() => {
  const icons = {
    fingerprint: '<path d="M12 10v4"/><path d="M8 10a4 4 0 0 1 8 0v2"/><path d="M5.5 11.5A6.5 6.5 0 0 1 12 6"/><path d="M18.5 12.5A6.5 6.5 0 0 0 14 7.2"/><path d="M8 17a6 6 0 0 0 8 .8"/><path d="M9 13.5a3.2 3.2 0 0 0 6 .4"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
    api: '<path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M2 12h20"/>',
    'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>',
    'user-minus': '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/>',
    sync: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>',
    cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
    badge: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><path d="M12 7v5l3 2"/>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    palette: '<path d="M12 22a10 10 0 1 1 10-10c0 1.7-1.3 3-3 3h-2.5a2.5 2.5 0 0 0-1.8 4.2c.5.5.6 1.1.3 1.8-.6 1-1.5 1-3 1z"/><circle cx="7.5" cy="11.5" r="1"/><circle cx="10.5" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    container: '<path d="M22 7l-10-5L2 7v10l10 5 10-5z"/><path d="M2 7l10 5 10-5"/><path d="M12 12v10"/>',
    workflow: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M6.5 10v2a3 3 0 0 0 3 3h4.5"/>',
    sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.9 2.4L22 18l-2.1.6L19 21l-.9-2.4L16 18l2.1-.6z"/>',
    chart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/><line x1="2" y1="20" x2="22" y2="20"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'
  };

  const svg = (name, size = 22) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.check}</svg>`;

  const icon = (name, size = 22) => svg(name, size);

  const basePath = () => (window.location.pathname.includes('/projects/') ? '../../' : '');

  const statusCls = (status) =>
    status === 'Ativo' || status === 'Concluído' ? 'active'
    : status === 'Em desenvolvimento' || status === 'Em andamento' ? 'dev'
    : 'planned';

  function renderNumbers() {
    const grid = document.getElementById('pih-numbers-grid');
    if (!grid) return;
    grid.innerHTML = PeopleIdentityHubConfig.keyNumbers.map((n) => `
      <article class="pih-numbers__card pih-card" data-reveal>
        <span class="pih-numbers__value${n.static ? ' is-static' : ''}">
          ${n.static ? n.value : `<span class="pih-counter" data-value="${n.value}" data-suffix="${n.suffix}">0</span>`}
        </span>
        <span class="pih-numbers__label">${n.label}</span>
        <span class="pih-numbers__desc">${n.desc}</span>
      </article>`).join('');
  }

  function renderModules() {
    const grid = document.getElementById('pih-modules-grid');
    if (!grid) return;
    grid.innerHTML = PeopleIdentityHubConfig.modules.map((m) => `
      <article class="pih-module pih-card" data-reveal>
        <div class="pih-module__head">
          <span class="pih-module__icon" aria-hidden="true">${icon(m.icon)}</span>
          <span class="pih-module__cat">${m.cat}</span>
        </div>
        <h3 class="pih-module__name">${m.name}</h3>
        <p class="pih-module__desc">${m.desc}</p>
        <span class="pih-status pih-status--${statusCls(m.status)}">${m.status}</span>
      </article>`).join('');
  }

  function renderFeatures() {
    const grid = document.getElementById('pih-features-grid');
    if (!grid) return;
    grid.innerHTML = PeopleIdentityHubConfig.features.map((f) => `
      <article class="pih-feature pih-card" data-reveal>
        <span class="pih-feature__icon" aria-hidden="true">${icon(f.icon)}</span>
        <span class="pih-feature__tag">${f.tag}</span>
        <h3 class="pih-feature__title">${f.title}</h3>
        <p class="pih-feature__desc">${f.desc}</p>
      </article>`).join('');
  }

  function renderSystems() {
    const grid = document.getElementById('pih-systems-grid');
    if (!grid) return;
    grid.innerHTML = PeopleIdentityHubConfig.systems.map((s) => `
      <article class="pih-systems__group pih-card" data-reveal>
        <div class="pih-systems__group-head">
          <span class="pih-systems__group-icon" aria-hidden="true">${icon(s.icon)}</span>
          <div>
            <h3 class="pih-systems__group-title">${s.group}</h3>
            <p class="pih-systems__group-sub">${s.sub}</p>
          </div>
        </div>
        <ul class="pih-systems__list">
          ${s.items.map((it) => `
            <li class="pih-system">
              <span class="pih-system__dot is-${it.status}" aria-hidden="true"></span>
              ${it.name}
              ${it.note ? `<span class="pih-system__note">${it.note}</span>` : ''}
            </li>`).join('')}
        </ul>
      </article>`).join('');
  }

  function renderArchitecture() {
    const wrap = document.getElementById('pih-arch-layers');
    if (!wrap) return;
    const nodes = PeopleIdentityHubConfig.architecture.map((l) => `
      <li class="pih-arch__node">
        <div class="pih-arch__node-info" data-reveal>
          <span class="pih-arch__node-badge" aria-hidden="true">${icon(l.icon, 18)}</span>
          <div>
            <h3 class="pih-arch__node-name">${l.name}</h3>
            <p class="pih-arch__node-desc">${l.desc}</p>
          </div>
        </div>
      </li>`).join('');
    wrap.innerHTML = `<div class="pih-arch__line" aria-hidden="true"></div>${nodes}`;
  }

  function renderTech() {
    const grid = document.getElementById('pih-tech-grid');
    if (!grid) return;
    grid.innerHTML = PeopleIdentityHubConfig.tech.map((t) => `
      <article class="pih-tech pih-card" data-reveal>
        <h3 class="pih-tech__name"><span class="pih-tech__dot" aria-hidden="true"></span>${t.name}</h3>
        <p class="pih-tech__desc">${t.role}</p>
        <span class="pih-tech__spec">${t.spec}</span>
      </article>`).join('');
  }

  function renderTimeline() {
    const wrap = document.getElementById('pih-timeline-list');
    if (!wrap) return;
    wrap.innerHTML = PeopleIdentityHubConfig.timeline.map((p) => `
      <li class="pih-phase" data-reveal>
        <span class="pih-phase__pin" aria-hidden="true">${p.num}</span>
        <div class="pih-phase__card pih-card">
          <div class="pih-phase__meta">
            <span class="pih-phase__num">${p.num}</span>
            <span class="pih-status pih-status--${statusCls(p.status)} pih-phase__status">${p.status}</span>
          </div>
          <h3 class="pih-phase__title">${p.title}</h3>
          <p class="pih-phase__desc">${p.desc}</p>
          <ul class="pih-phase__items">
            ${p.items.map((i) => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      </li>`).join('');
  }

  function renderFuture() {
    const grid = document.getElementById('pih-future-grid');
    if (!grid) return;
    grid.innerHTML = PeopleIdentityHubConfig.future.map((f) => `
      <article class="pih-future pih-card" data-reveal>
        <span class="pih-future__icon" aria-hidden="true">${icon(f.icon)}</span>
        <div>
          <h3 class="pih-future__title">${f.title}</h3>
          <p class="pih-future__desc">${f.desc}</p>
        </div>
      </article>`).join('');
  }

  function renderCases() {
    const grid = document.getElementById('pih-cases-grid');
    if (!grid) return;
    grid.innerHTML = PeopleIdentityHubConfig.useCases.map((c) => `
      <article class="pih-case pih-card" data-reveal>
        <div class="pih-case__head">
          <span class="pih-case__icon" aria-hidden="true">${icon(c.icon)}</span>
          <h3 class="pih-case__title">${c.title}</h3>
        </div>
        <p class="pih-case__block"><span class="pih-case__block-label">Problema</span><br>${c.problema}</p>
        <p class="pih-case__block"><span class="pih-case__block-label">Solução</span><br>${c.solucao}</p>
        <p class="pih-case__block"><span class="pih-case__block-label">Benefício</span><br>${c.beneficio}</p>
      </article>`).join('');
  }

  function renderScreenshots() {
    const grid = document.getElementById('pih-shots-grid');
    const filters = document.getElementById('pih-shots-filters');
    if (!grid) return;

    const cats = ['Todos', ...new Set(PeopleIdentityHubConfig.screenshots.map((s) => s.cat))];
    const realDir = `${basePath()}assets/gallery/`;

    if (filters) {
      filters.innerHTML = cats.map((c, i) =>
        `<button class="pih-tab pih-filter-chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
      ).join('');
    }

    grid.innerHTML = PeopleIdentityHubConfig.screenshots.map((s, i) => `
      <figure class="pih-shots__item pih-mock pih-mock--${s.variant}" data-reveal data-shots-cat="${s.cat}" data-shot="${i}" data-real-image="${realDir}people-identity-hub-${s.cat.toLowerCase().replace(/ /g, '-')}-${i + 1}.webp">
        <div class="pih-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="pih-mock__screen">
          <div class="pih-mock__screen-inner">
            <span class="pih-mock__icon" aria-hidden="true">${icon(s.cat === 'Visão Geral' ? 'monitor' : s.cat === 'Cadastro' ? 'users' : s.cat === 'Acesso' ? 'key' : s.cat === 'Integrações' ? 'api' : s.cat === 'Temas' ? 'palette' : 'terminal')}</span>
            <span class="pih-mock__label">${s.label}</span>
            <span class="pih-mock__meta">placeholder — pronto para captura real</span>
          </div>
        </div>
        <figcaption class="pih-mock__figcaption">
          <span class="pih-mock__figcaption-title">${s.label}</span>
          <span class="pih-mock__figcaption-desc">${s.desc}</span>
        </figcaption>
      </figure>`).join('');
  }

  function initScreenshotFilters() {
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.pih-filter-chip');
      if (!chip) return;

      document.querySelectorAll('.pih-filter-chip').forEach((c) => {
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
    const els = document.querySelectorAll('.pih-counter');
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

    const idx = PROJECTS.findIndex((p) => p.slug === 'people-identity-hub');
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const base = basePath();

    const prevLink = document.getElementById('pih-prev');
    const nextLink = document.getElementById('pih-next');
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
    const shareBtn = document.getElementById('pih-share');
    const copyBtn = document.getElementById('pih-copy');
    const copied = document.getElementById('pih-copied');

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
          title: 'People Identity Hub — Enterprise Workforce Identity Platform',
          text: 'Conheça o People Identity Hub: identidade corporativa, integração de RH e governança de dados em uma plataforma.',
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
    renderSystems();
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
    if (typeof Lifecycle !== 'undefined') Lifecycle.init();

    const yearEl = document.getElementById('pih-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof Navigation !== 'undefined') Navigation.init();
    init();
  });

  return { init, basePath, icon };
})();

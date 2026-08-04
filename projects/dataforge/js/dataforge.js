/* ============================================
   DATAFORGE.JS — Product Showcase Engine
   Governed Spreadsheet & Data Integration Platform
   ============================================ */

const DataForgeConfig = Object.freeze({
  keyNumbers: [
    { value: 25, suffix: '+', label: 'Conectores', desc: 'Bancos, arquivos e APIs com integração nativa.' },
    { value: 100, suffix: '+', label: 'Regras de Validação', desc: 'Qualidade imposta antes da persistência.' },
    { value: 10, suffix: '+', label: 'Tipos de Origem', desc: 'CSV, Excel, JSON, XML, REST, webhooks e mais.' },
    { value: '∞', suffix: '', static: true, label: 'Escalabilidade', desc: 'Cargas segmentadas, sem limite prático.' }
  ],

  modules: [
    { name: 'Data Import', desc: 'Wizard de importação com detecção de formato, encoding e delimitador.', status: 'Ativo', cat: 'Núcleo', icon: 'upload' },
    { name: 'Spreadsheet Processing', desc: 'Leitura de planilhas com múltiplas abas, fórmulas e formatação.', status: 'Ativo', cat: 'Núcleo', icon: 'file' },
    { name: 'Data Mapping', desc: 'Mapeamento DE-PARA visual entre colunas de origem e destino.', status: 'Ativo', cat: 'Núcleo', icon: 'map' },
    { name: 'Transformation Engine', desc: 'Transformações declarativas aplicadas ao longo do fluxo.', status: 'Ativo', cat: 'Motor', icon: 'filter' },
    { name: 'Validation Engine', desc: 'Regras de validação com erros isolados por linha e coluna.', status: 'Ativo', cat: 'Motor', icon: 'check' },
    { name: 'Business Rules', desc: 'Regras de negócio configuráveis aplicadas antes da persistência.', status: 'Ativo', cat: 'Motor', icon: 'settings' },
    { name: 'Workflow Engine', desc: 'Orquestra aprovação, revisão e versionamento de dados.', status: 'Em desenvolvimento', cat: 'Automação', icon: 'workflow' },
    { name: 'Approval Flow', desc: 'Fluxos de aprovação antes de qualquer carga ser persistida.', status: 'Em desenvolvimento', cat: 'Governança', icon: 'shield' },
    { name: 'Audit Platform', desc: 'Trilha imutável de cada operação, aprovador e versão.', status: 'Em desenvolvimento', cat: 'Governança', icon: 'book' },
    { name: 'Reporting', desc: 'Relatórios de qualidade e conformidade a partir de dados governados.', status: 'Planejado', cat: 'Insights', icon: 'chart' },
    { name: 'API Integration', desc: 'Conexões REST padronizadas com paginação e autenticação.', status: 'Ativo', cat: 'Integração', icon: 'api' },
    { name: 'Export Center', desc: 'Exportação em CSV, Excel e JSON com preservação da governança.', status: 'Planejado', cat: 'Integração', icon: 'download' },
    { name: 'Administration', desc: 'Configuração de perfis, módulos e permissões por ambiente.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'users' },
    { name: 'Scheduling', desc: 'Agendamento de cargas recorrentes com execução em fila.', status: 'Planejado', cat: 'Plataforma', icon: 'clock' },
    { name: 'Monitoring', desc: 'Dashboards em tempo real de execuções, erros e volume.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'eye' }
  ],

  features: [
    { tag: 'Importação', title: 'Import CSV, XLSX, JSON e XML', desc: 'Um único fluxo para os formatos mais comuns de dados corporativos.', icon: 'upload' },
    { tag: 'Integração', title: 'Conexões REST e Webhooks', desc: 'Consumo e sincronização com APIs e serviços externos.', icon: 'api' },
    { tag: 'Mapeamento', title: 'Mapeamento DE-PARA visual', desc: 'Conecte colunas de origem ao modelo de destino sem código.', icon: 'map' },
    { tag: 'Transformação', title: 'Transformações declarativas', desc: 'Normalize, derive e limpe dados com passos configuraveis.', icon: 'filter' },
    { tag: 'Qualidade', title: 'Validação com regras', desc: 'Regras configuraveis que bloqueiam dados fora do padrão.', icon: 'check' },
    { tag: 'Qualidade', title: 'Detecção de erros isolada', desc: 'Erros apontados por linha e coluna, com contexto acionável.', icon: 'alert' },
    { tag: 'Governança', title: 'Aprovação antes da carga', desc: 'Nenhum dado entra sem passar pelo fluxo de aprovação.', icon: 'shield' },
    { tag: 'Governança', title: 'Versionamento de dados', desc: 'Revisões e versões preservadas a cada carga.', icon: 'layers' },
    { tag: 'Governança', title: 'Auditoria completa', desc: 'Trilha imutável de quem fez o quê, quando e com qual dado.', icon: 'book' },
    { tag: 'Histórico', title: 'Histórico de importações', desc: 'Todas as cargas registradas e recuperáveis.', icon: 'clock' },
    { tag: 'Segurança', title: 'Permissões granulares', desc: 'Controle por módulo, campo e operação.', icon: 'settings' },
    { tag: 'Segurança', title: 'RBAC multi-perfil', desc: 'Administrador, operador, aprovador e auditor com escopos distintos.', icon: 'users' },
    { tag: 'Segurança', title: 'Multi-tenant', desc: 'Isolamento total entre áreas, empresas ou clientes.', icon: 'grid' },
    { tag: 'Insights', title: 'Dashboards em tempo real', desc: 'Qualidade, volume e erros visíveis em um só lugar.', icon: 'chart' },
    { tag: 'Insights', title: 'Alertas e notificações', desc: 'Avisos proativos sobre falhas e cargas concluídas.', icon: 'bell' },
    { tag: 'Automação', title: 'Agendamento de cargas', desc: 'Rotinas recorrentes executadas sem intervenção manual.', icon: 'calendar' },
    { tag: 'Plataforma', title: 'Internacionalização (i18n)', desc: 'Interfaces prontas para múltiplos idiomas e localizações.', icon: 'globe' },
    { tag: 'Plataforma', title: 'Temas claro e escuro', desc: 'Acessível e confortável em qualquer ambiente.', icon: 'layout' },
    { tag: 'Integração', title: 'Conectores de bancos', desc: 'PostgreSQL, MySQL, MariaDB, SQLite, SQL Server e Oracle.', icon: 'database' },
    { tag: 'Automação', title: 'Pipeline de 10 etapas', desc: 'Da fonte à integração, com auditoria em cada estágio.', icon: 'workflow' },
    { tag: 'Integração', title: 'Export Center', desc: 'Compartilhamento governado dos dados processados.', icon: 'download' }
  ],

  sources: [
    { title: 'Bancos de Dados', icon: 'database', items: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQLite', 'SQL Server', 'Oracle'] },
    { title: 'Arquivos & Planilhas', icon: 'file', items: ['CSV', 'XLSX', 'XLS', 'JSON', 'XML'] },
    { title: 'APIs & Serviços', icon: 'api', items: ['REST API', 'Webhooks', 'Supabase'] },
    { title: 'Próximos Conectores', icon: 'globe', future: true, items: ['SAP', 'Salesforce', 'Google Sheets'] }
  ],

  architecture: [
    { name: 'Frontend', desc: 'Importadores, mapeamento DE-PARA, regras, aprovação e dashboards.', icon: 'terminal' },
    { name: 'Import Engine', desc: 'Parsing de CSV, Excel, JSON e XML com detecção automática de formato.', icon: 'upload' },
    { name: 'Validation Engine', desc: 'Validação declarativa com erros isolados por linha e coluna.', icon: 'check' },
    { name: 'Transformation Engine', desc: 'Transformações declarativas entre origem e destino.', icon: 'filter' },
    { name: 'Business Rules Engine', desc: 'Regras de negócio aplicadas antes da persistência.', icon: 'settings' },
    { name: 'Workflow Engine', desc: 'Orquestra aprovação, revisão e versionamento das cargas.', icon: 'workflow' },
    { name: 'Audit Service', desc: 'Trilha imutável de cada operação, aprovador e versão.', icon: 'book' },
    { name: 'Database', desc: 'PostgreSQL multi-tenant com isolamento e lineage dos dados.', icon: 'database' },
    { name: 'Storage', desc: 'Armazenamento versionado de arquivos e lotes processados.', icon: 'container' },
    { name: 'External Integrations', desc: 'REST, webhooks e conectores para sistemas corporativos.', icon: 'globe' }
  ],

  tech: [
    { name: 'React', role: 'Interface com wizards, mapeamento e dashboards', spec: 'SPA' },
    { name: 'TypeScript', role: 'Tipagem de ponta a ponta no frontend e backend', spec: '5.x' },
    { name: 'Supabase', role: 'Auth, banco e storage gerenciados', spec: 'PaaS' },
    { name: 'PostgreSQL', role: 'Multi-tenant com RLS e lineage de dados', spec: '15+' },
    { name: 'REST APIs', role: 'Integração com paginação e autenticação', spec: 'HTTP' },
    { name: 'Workflow', role: 'Aprovação e revisão de cargas', spec: 'Engine' },
    { name: 'Business Rules', role: 'Regras configuráveis por módulo', spec: 'DSL' },
    { name: 'Metadata', role: 'Catálogo e linhagem dos dados governados', spec: 'Governança' },
    { name: 'Storage', role: 'Versões e lotes processados', spec: 'Files' },
    { name: 'CSV', role: 'Imports com detecção de encoding', spec: 'RFC 4180' },
    { name: 'Excel', role: 'XLSX e XLS com múltiplas abas', spec: 'OpenXML' },
    { name: 'JSON', role: 'Cargas estruturadas e integrações', spec: 'RFC 8259' },
    { name: 'XML', role: 'Documentos e intercâmbio', spec: '1.0' },
    { name: 'Auditoria', role: 'Trilha imutável de operações', spec: 'Event Log' }
  ],

  timeline: [
    {
      num: 'P1',
      title: 'Core Platform',
      status: 'Concluído',
      desc: 'A fundação multi-tenant: importação, processamento de planilhas e mapeamento DE-PARA.',
      items: [
        'Data Import com detecção de formato',
        'Spreadsheet Processing multi-aba',
        'Mapeamento DE-PARA assistido',
        'Base multi-tenant com RLS'
      ]
    },
    {
      num: 'P2',
      title: 'Processing Engine',
      status: 'Concluído',
      desc: 'O motor de dados: validação, transformação e regras de negócio com erros isolados.',
      items: [
        'Validation Engine com erros por linha',
        'Transformation Engine declarativa',
        'Business Rules configuráveis',
        'Processamento segmentado de arquivos'
      ]
    },
    {
      num: 'P3',
      title: 'Workflow & Governance',
      status: 'Em andamento',
      desc: 'Governança ponta a ponta: aprovação, auditoria e administração granular.',
      items: [
        'Approval Flow antes da persistência',
        'Audit Platform imutável',
        'RBAC e permissões por módulo',
        'Monitoring em tempo real'
      ]
    },
    {
      num: 'P4',
      title: 'Advanced Integrations',
      status: 'Planejado',
      desc: 'Ecosistema de integrações: exportação, agendamento e conectores adicionais.',
      items: [
        'Export Center com formatos variados',
        'Scheduling de cargas recorrentes',
        'Conectores SAP, Salesforce e Sheets',
        'Webhooks com retry e delivery'
      ]
    },
    {
      num: 'P5',
      title: 'AI-Assisted Data Processing',
      status: 'Planejado',
      desc: 'Inteligência aplicada: mapeamentos sugeridos e inconsistências detectadas.',
      items: [
        'Sugestões de DE-PARA por IA',
        'Detecção de inconsistências',
        'Assistente de regras de validação',
        'Catálogo corporativo de dados'
      ]
    }
  ],

  future: [
    { title: 'IA em Mapeamentos', desc: 'Sugestões automáticas de DE-PARA a partir de metadados e histórico.', icon: 'sparkles' },
    { title: 'Detecção de Inconsistências', desc: 'Padrões de erro identificados por machine learning.', icon: 'search' },
    { title: 'Catálogo Corporativo', desc: 'Glossário de dados e governança centralizada.', icon: 'book' },
    { title: 'Conectores Adicionais', desc: 'SAP, Salesforce, Google Sheets e ERPs.', icon: 'plug' },
    { title: 'Pipelines Reutilizáveis', desc: 'Modelos de carga compartilháveis entre times.', icon: 'layers' },
    { title: 'Marketplace', desc: 'Templates, regras e conectores da comunidade.', icon: 'globe' },
    { title: 'Assistente de Regras', desc: 'Regras de validação sugeridas por IA.', icon: 'gear' },
    { title: 'Observabilidade', desc: 'Métricas e alertas avançados por etapa do pipeline.', icon: 'chart' }
  ],

  useCases: [
    { title: 'Importações Financeiras', icon: 'chart', problema: 'Planilhas espalhadas por centros de custo, com formatos e moedas divergentes.', solucao: 'Importador padronizado com mapeamento DE-PARA e validação de valores.', beneficio: 'Fechamentos rápidos e dados financeiros auditáveis.' },
    { title: 'Consolidação de RH', icon: 'users', problema: 'Cada filial envia um layout diferente de dados de pessoal.', solucao: 'Pipeline com transformação e regras de negócio por origem.', beneficio: 'Base única de RH, consistente e sempre atualizada.' },
    { title: 'Integração de Sistemas Legados', icon: 'database', problema: 'Sistemas legados exportam dados em formatos proprietários e sem documentação.', solucao: 'Conectores e mapeamento assistido para normalizar cada origem.', beneficio: 'Migração gradual sem reescrita dos sistemas antigos.' },
    { title: 'Migração de Dados', icon: 'download', problema: 'Migram dados sem conferência, gerando retrabalho pós-implantação.', solucao: 'Cargas de migração com validação e aprovação por lote.', beneficio: 'Corte seguro e histórico completo do que foi migrado.' },
    { title: 'Carga Inicial', icon: 'upload', problema: 'Carga inicial desorganizada, com erros de referência e duplicidades.', solucao: 'Pipelines de carga inicial com detecção de duplicatas e lineage.', beneficio: 'Dados de partida limpos e rastreáveis.' },
    { title: 'Validação de Cadastros', icon: 'check', problema: 'Cadastros entram com dados inválidos e sem padrão.', solucao: 'Engine de validação com regras e erros isolados por registro.', beneficio: 'Base cadastral confiável e conformidade regulatória.' },
    { title: 'Integração de APIs', icon: 'api', problema: 'Integrações pontuais e frágeis, sem tratamento de erro.', solucao: 'Conexões REST padronizadas com retry e auditoria.', beneficio: 'Integração confiável e sem manutenção manual.' },
    { title: 'Automação Operacional', icon: 'clock', problema: 'Analistas gastam dias com conciliações e montagem de relatórios.', solucao: 'Agendamento de cargas com dashboards e alertas automáticos.', beneficio: 'Times focados em análise, não em operação.' }
  ],

  screenshots: [
    { cat: 'Visão Geral', label: 'Dashboard', desc: 'Métricas de qualidade e importações em tempo real.', alt: 'Dashboard do DataForge com métricas de qualidade e importações.', variant: 'wide' },
    { cat: 'Visão Geral', label: 'Monitoramento', desc: 'Acompanhamento de cargas em execução.', alt: 'Monitoramento de cargas do DataForge em execução.', variant: 'wide' },
    { cat: 'Importação', label: 'Importador', desc: 'Wizard com detecção automática de formato.', alt: 'Importador do DataForge com detecção automática de formato.', variant: 'desktop' },
    { cat: 'Importação', label: 'Assistente de Mapeamento', desc: 'DE-PARA origem e destino lado a lado.', alt: 'Assistente de mapeamento DE-PARA do DataForge.', variant: 'wide' },
    { cat: 'Governança', label: 'Editor de Regras', desc: 'Regras de negócio e validação configuráveis.', alt: 'Editor de regras do DataForge.', variant: 'desktop' },
    { cat: 'Governança', label: 'Validação', desc: 'Erros isolados por linha e coluna.', alt: 'Tela de validação do DataForge com erros isolados.', variant: 'wide' },
    { cat: 'Governança', label: 'Histórico', desc: 'Histórico completo de importações e versões.', alt: 'Histórico de importações do DataForge.', variant: 'desktop' },
    { cat: 'Temas', label: 'Dark Mode', desc: 'Tema escuro para longas sessões.', alt: 'DataForge no modo escuro.', variant: 'wide' },
    { cat: 'Temas', label: 'Light Mode', desc: 'Tema claro e objetivo.', alt: 'DataForge no modo claro.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Desktop', desc: 'Experiência completa em telas amplas.', alt: 'DataForge em desktop.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Tablet', desc: 'Operação em telas intermediárias.', alt: 'DataForge em tablet.', variant: 'tablet' },
    { cat: 'Dispositivos', label: 'Mobile', desc: 'Acompanhamento pelo celular.', alt: 'DataForge em mobile.', variant: 'mobile' }
  ]
});

const DataForge = (() => {
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
    settings: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    upload: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    download: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    map: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
    filter: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    alert: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    chart: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
    bell: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    grid: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    workflow: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
  };

  const currentUrl = () => window.location.href;
  const basePath = () => (window.location.pathname.includes('/projects/') ? '../../' : '');

  function icon(name, size = 22) {
    const svg = icons[name] || icons.file;
    return svg.replace(/width="22"/, `width="${size}"`).replace(/height="22"/, `height="${size}"`);
  }

  function renderNumbers() {
    const grid = document.getElementById('df-numbers-grid');
    if (!grid) return;
    grid.innerHTML = DataForgeConfig.keyNumbers.map((n) => `
      <article class="df-numbers__card df-card" data-reveal>
        <span class="df-numbers__value${n.static ? ' is-static' : ''}">
          ${n.static ? n.value : `<span class="df-counter" data-value="${n.value}" data-suffix="${n.suffix}">0</span>`}
        </span>
        <p class="df-numbers__label">${n.label}</p>
        <p class="df-numbers__desc">${n.desc}</p>
      </article>`).join('');
  }

  function renderModules() {
    const grid = document.getElementById('df-modules-grid');
    if (!grid) return;
    grid.innerHTML = DataForgeConfig.modules.map((m) => {
      const cls = m.status === 'Ativo' ? 'active' : m.status === 'Em desenvolvimento' ? 'dev' : 'planned';
      return `
        <article class="df-module df-card" data-reveal>
          <div class="df-module__head">
            <span class="df-module__icon" aria-hidden="true">${icon(m.icon)}</span>
            <span class="df-module__cat">${m.cat}</span>
          </div>
          <h3 class="df-module__name">${m.name}</h3>
          <p class="df-module__desc">${m.desc}</p>
          <span class="df-status df-status--${cls}">${m.status}</span>
        </article>`;
    }).join('');
  }

  function renderFeatures() {
    const grid = document.getElementById('df-features-grid');
    if (!grid) return;
    grid.innerHTML = DataForgeConfig.features.map((f) => `
      <article class="df-feature df-card" data-reveal>
        <span class="df-feature__icon" aria-hidden="true">${icon(f.icon)}</span>
        <span class="df-feature__tag">${f.tag}</span>
        <h3 class="df-feature__title">${f.title}</h3>
        <p class="df-feature__desc">${f.desc}</p>
      </article>`).join('');
  }

  function renderSources() {
    const grid = document.getElementById('df-sources-grid');
    if (!grid) return;
    grid.innerHTML = DataForgeConfig.sources.map((g) => `
      <article class="df-sources__group df-card" data-reveal>
        <div class="df-sources__head">
          <span class="df-sources__icon" aria-hidden="true">${icon(g.icon)}</span>
          <h3 class="df-sources__title">${g.title}</h3>
        </div>
        <ul class="df-sources__list">
          ${g.items.map((i) => `<li${g.future ? ' class="is-future"' : ''}>${i}</li>`).join('')}
        </ul>
      </article>`).join('');
  }

  function renderArchitecture() {
    const wrap = document.getElementById('df-arch-layers');
    if (!wrap) return;

    const nodes = DataForgeConfig.architecture.map((l) => `
      <li class="df-arch__node">
        <div class="df-arch__node-info" data-reveal>
          <h3 class="df-arch__node-name">${l.name}</h3>
          <p class="df-arch__node-desc">${l.desc}</p>
        </div>
        <span class="df-arch__node-badge" aria-hidden="true">${icon(l.icon, 24)}</span>
      </li>`).join('');

    wrap.innerHTML = `<div class="df-arch__line" aria-hidden="true"></div>${nodes}`;
  }

  function renderTech() {
    const grid = document.getElementById('df-tech-grid');
    if (!grid) return;
    grid.innerHTML = DataForgeConfig.tech.map((t) => `
      <article class="df-tech df-card" data-reveal>
        <h3 class="df-tech__name"><span class="df-tech__dot" aria-hidden="true"></span>${t.name}</h3>
        <p class="df-tech__desc">${t.role}</p>
        <span class="df-tech__spec">${t.spec}</span>
      </article>`).join('');
  }

  function renderTimeline() {
    const wrap = document.getElementById('df-timeline-list');
    if (!wrap) return;

    wrap.innerHTML = DataForgeConfig.timeline.map((p) => {
      const cls = p.status === 'Concluído' ? 'active' : p.status === 'Em andamento' ? 'dev' : 'planned';
      return `
        <li class="df-phase">
          <div class="df-phase__card" data-reveal>
            <div class="df-phase__meta">
              <span class="df-phase__num">${p.num}</span>
              <span class="df-status df-status--${cls} df-phase__status">${p.status}</span>
            </div>
            <h3 class="df-phase__title">${p.title}</h3>
            <p class="df-phase__desc">${p.desc}</p>
            <ul class="df-phase__items">
              ${p.items.map((i) => `<li>${i}</li>`).join('')}
            </ul>
          </div>
          <span class="df-phase__pin" aria-hidden="true">${p.num}</span>
        </li>`;
    }).join('');
  }

  function renderFuture() {
    const grid = document.getElementById('df-future-grid');
    if (!grid) return;
    grid.innerHTML = DataForgeConfig.future.map((f) => `
      <article class="df-future df-card" data-reveal>
        <span class="df-future__icon" aria-hidden="true">${icon(f.icon)}</span>
        <div>
          <h3 class="df-future__title">${f.title}</h3>
          <p class="df-future__desc">${f.desc}</p>
        </div>
      </article>`).join('');
  }

  function renderCases() {
    const grid = document.getElementById('df-cases-grid');
    if (!grid) return;
    grid.innerHTML = DataForgeConfig.useCases.map((c) => `
      <article class="df-case df-card" data-reveal>
        <div class="df-case__head">
          <span class="df-case__icon" aria-hidden="true">${icon(c.icon)}</span>
          <h3 class="df-case__title">${c.title}</h3>
        </div>
        <p class="df-case__block"><span class="df-case__block-label">Problema</span><br>${c.problema}</p>
        <p class="df-case__block"><span class="df-case__block-label">Solução</span><br>${c.solucao}</p>
        <p class="df-case__block"><span class="df-case__block-label">Benefício</span><br>${c.beneficio}</p>
      </article>`).join('');
  }

  function renderScreenshots() {
    const grid = document.getElementById('df-shots-grid');
    const filters = document.getElementById('df-shots-filters');
    if (!grid) return;

    const cats = ['Todos', ...new Set(DataForgeConfig.screenshots.map((s) => s.cat))];
    const realDir = `${basePath()}assets/gallery/`;

    if (filters) {
      filters.innerHTML = cats.map((c, i) =>
        `<button class="df-tab df-filter-chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
      ).join('');
    }

    grid.innerHTML = DataForgeConfig.screenshots.map((s, i) => `
      <figure class="df-shots__item df-mock df-mock--${s.variant}" data-reveal data-shots-cat="${s.cat}" data-shot="${i}" data-real-image="${realDir}dataforge-${s.cat.toLowerCase().replace(/ /g, '-')}-${i + 1}.webp">
        <div class="df-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="df-mock__screen">
          <div class="df-mock__screen-inner">
            <span class="df-mock__icon" aria-hidden="true">${icon(s.cat === 'Visão Geral' ? 'chart' : s.cat === 'Importação' ? 'upload' : s.cat === 'Governança' ? 'shield' : s.cat === 'Temas' ? 'layout' : 'terminal')}</span>
            <span class="df-mock__label">${s.label}</span>
            <span class="df-mock__meta">placeholder — pronto para captura real</span>
          </div>
        </div>
        <figcaption class="df-mock__figcaption">
          <span class="df-mock__figcaption-title">${s.label}</span>
          <span class="df-mock__figcaption-desc">${s.desc}</span>
        </figcaption>
      </figure>`).join('');
  }

  function initScreenshotFilters() {
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.df-filter-chip');
      if (!chip) return;

      document.querySelectorAll('.df-filter-chip').forEach((c) => {
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
    const els = document.querySelectorAll('.df-counter');
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

    const idx = PROJECTS.findIndex((p) => p.slug === 'dataforge');
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const base = basePath();

    const prevLink = document.getElementById('df-prev');
    const nextLink = document.getElementById('df-next');
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
    const shareBtn = document.getElementById('df-share');
    const copyBtn = document.getElementById('df-copy');
    const copied = document.getElementById('df-copied');

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
          title: 'DataForge — Governed Spreadsheet & Data Integration Platform',
          text: 'Conheça o DataForge: importação, validação, transformação e auditoria de dados corporativos em um só lugar.',
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
    renderSources();
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
    if (typeof Pipeline !== 'undefined') Pipeline.init();

    const yearEl = document.getElementById('df-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof Navigation !== 'undefined') Navigation.init();
    init();
  });

  return { init, basePath, icon };
})();

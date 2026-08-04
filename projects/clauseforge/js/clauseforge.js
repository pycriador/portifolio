/* ============================================
   CLAUSEFORGE.JS — Product Showcase Engine
   Enterprise Document Automation Platform
   ============================================ */

const ClauseForgeConfig = Object.freeze({
  keyNumbers: [
    { value: 500, suffix: '+', label: 'Templates Corporativos', desc: 'Modelos de documentos prontos para contratos, laudos, políticas e mais.' },
    { value: 100, suffix: '+', label: 'Variáveis Dinâmicas', desc: 'Campos reutilizáveis preenchidos automaticamente em cada documento.' },
    { value: 50, suffix: '+', label: 'Fluxos Configuráveis', desc: 'Workflows de aprovação, revisão e publicação prontos para uso.' },
    { value: '∞', suffix: '', static: true, label: '100% Versionamento', desc: 'Todo documento e template rastreado com histórico, diff e rollback.' }
  ],

  modules: [
    { name: 'Template Manager', desc: 'Modelos de documentos com variáveis, regras e identidade corporativa.', status: 'Ativo', cat: 'Modelos', icon: 'file' },
    { name: 'Document Builder', desc: 'Composição de documentos a partir de templates e variáveis dinâmicas.', status: 'Ativo', cat: 'Criação', icon: 'edit' },
    { name: 'Variable Engine', desc: 'Resolução automática de campos, variáveis e valores contextuais.', status: 'Ativo', cat: 'Automação', icon: 'variable' },
    { name: 'Business Rules', desc: 'Condições e lógica configurável aplicadas à geração de documentos.', status: 'Em desenvolvimento', cat: 'Automação', icon: 'script' },
    { name: 'Workflow Engine', desc: 'Fluxos de revisão, aprovação e publicação de documentos.', status: 'Em desenvolvimento', cat: 'Automação', icon: 'workflow' },
    { name: 'Approval Center', desc: 'Central de aprovações com escopos, deadlines e trilha de decisões.', status: 'Em desenvolvimento', cat: 'Fluxos', icon: 'check' },
    { name: 'Version Control', desc: 'Versionamento completo com diff, comparação e rollback de documentos.', status: 'Em desenvolvimento', cat: 'Governança', icon: 'history' },
    { name: 'Document Repository', desc: 'Repositório central de documentos vigentes e arquivados.', status: 'Ativo', cat: 'Gestão', icon: 'container' },
    { name: 'PDF Generator', desc: 'Geração de PDF com alta fidelidade ao template original.', status: 'Ativo', cat: 'Geração', icon: 'pdf' },
    { name: 'Export Center', desc: 'Exportação em múltiplos formatos, incluindo DOCX editável.', status: 'Em desenvolvimento', cat: 'Geração', icon: 'download' },
    { name: 'Metadata Integration', desc: 'Formulários, campos e validações compartilhados com o ecossistema.', status: 'Ativo', cat: 'Integração', icon: 'layers' },
    { name: 'Audit Platform', desc: 'Trilha imutável de criações, alterações e aprovações documentais.', status: 'Em desenvolvimento', cat: 'Governança', icon: 'eye' },
    { name: 'Permissions', desc: 'Permissões por papel e escopo para edição, aprovação e acesso.', status: 'Ativo', cat: 'Segurança', icon: 'shield' },
    { name: 'Administration', desc: 'Administração central de ambientes, políticas e configurações.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'settings' },
    { name: 'Notifications', desc: 'Notificações de aprovação, publicação e vencimento de documentos.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'bell' },
    { name: 'Digital Signature', desc: 'Assinatura digital com integridade e autenticidade dos documentos.', status: 'Planejado', cat: 'Assinatura', icon: 'signature' }
  ],

  features: [
    { tag: 'Produtividade', title: 'Modelos centralizados', desc: 'Templates versionados com variáveis prontas para qualquer tipo de documento.', icon: 'file' },
    { tag: 'Produtividade', title: 'Editor visual', desc: 'Templates montados com arrastar e soltar, sem conhecimento de marcação.', icon: 'layout' },
    { tag: 'Produtividade', title: 'Geração em massa', desc: 'Centenas de documentos gerados a partir de um template e uma planilha de dados.', icon: 'columns' },
    { tag: 'Consistência', title: 'Fonte única da verdade', desc: 'Cláusulas, variáveis e regras definidas uma única vez em todo o negócio.', icon: 'layers' },
    { tag: 'Consistência', title: 'Padronização corporativa', desc: 'Identidade visual, cláusulas padrão e políticas aplicadas em todos os documentos.', icon: 'grid' },
    { tag: 'Automação', title: 'Variáveis dinâmicas', desc: 'Campos preenchidos automaticamente a partir de dados de formulários e integrações.', icon: 'variable' },
    { tag: 'Automação', title: 'Fluxos de aprovação', desc: 'Revisão em cadeia com escopos, prazos e notificações automáticas.', icon: 'workflow' },
    { tag: 'Automação', title: 'Regras de negócio', desc: 'Condições configuráveis controlam cláusulas, seções e variáveis por cenário.', icon: 'script' },
    { tag: 'Segurança', title: 'RBAC integrado', desc: 'Permissões por papel e escopo controlam edição, aprovação e acesso.', icon: 'shield' },
    { tag: 'Segurança', title: 'Assinatura digital', desc: 'Estrutura preparada para assinatura com integridade e autenticidade.', icon: 'signature' },
    { tag: 'Governança', title: 'Versionamento completo', desc: 'Histórico, diff e rollback de cada documento e template.', icon: 'history' },
    { tag: 'Governança', title: 'Trilha de auditoria', desc: 'Registro imutável de criações, alterações e aprovações documentais.', icon: 'eye' },
    { tag: 'Entrega', title: 'PDF de alta fidelidade', desc: 'Geração de PDF com layout idêntico ao template original.', icon: 'pdf' },
    { tag: 'Entrega', title: 'Exportação multi-formato', desc: 'DOCX, PDF e outros formatos para cada necessidade de negócio.', icon: 'download' },
    { tag: 'Integração', title: 'Metadata Integration', desc: 'Formulários e variáveis do ecossistema alimentam documentos automaticamente.', icon: 'api' },
    { tag: 'Integração', title: 'Workflow integrado', desc: 'Aprovações do ecossistema conectadas ao ciclo de vida documental.', icon: 'workflow' },
    { tag: 'Escalabilidade', title: 'Stack gerenciada', desc: 'Supabase, PostgreSQL e storage gerenciados escalam sem operação manual.', icon: 'database' },
    { tag: 'Escalabilidade', title: 'Biblioteca corporativa', desc: 'Catálogo de templates reutilizáveis cresce com o negócio.', icon: 'boxes' },
    { tag: 'Operação', title: 'Notificações de ciclo de vida', desc: 'Acompanhamento de pendências, publicações e vencimentos em tempo real.', icon: 'bell' },
    { tag: 'Operação', title: 'Administração central', desc: 'Políticas, ambientes e configurações gerenciados de um único lugar.', icon: 'settings' }
  ],

  architecture: [
    { name: 'Frontend', desc: 'Estúdios de templates, central de aprovação e consulta de documentos.', icon: 'terminal' },
    { name: 'Template Engine', desc: 'Modelagem, validação e versionamento de templates de documentos.', icon: 'file' },
    { name: 'Variable Engine', desc: 'Resolução de variáveis, campos dinâmicos e valores contextuais.', icon: 'variable' },
    { name: 'Workflow Engine', desc: 'Execução de fluxos de revisão, aprovação e publicação.', icon: 'workflow' },
    { name: 'Document Generator', desc: 'Composição final de documentos com regras e formatação.', icon: 'edit' },
    { name: 'Version Service', desc: 'Histórico, diff e rollback de documentos e templates.', icon: 'history' },
    { name: 'Audit Service', desc: 'Trilha imutável de ações e decisões documentais.', icon: 'eye' },
    { name: 'Database', desc: 'PostgreSQL com documentos, templates e metadados versionados.', icon: 'database' },
    { name: 'Storage', desc: 'Arquivos finais, templates e artefatos gerados.', icon: 'container' },
    { name: 'External Integrations', desc: 'APIs e conectores com o ecossistema e sistemas externos.', icon: 'api' }
  ],

  ecosystem: [
    { name: 'Metadata Platform', tag: 'Formulários, campos e variáveis que alimentam os documentos.', accent: 'mp', icon: 'layers', resources: ['Formulários dinâmicos de dados', 'Variáveis e campos reutilizáveis', 'Validações de metadados', 'Publicação sem deploy', 'Versionamento de definições'] },
    { name: 'Workflow Engine', tag: 'Aprovações e fluxos conectados ao ciclo de vida documental.', accent: 'wf', icon: 'workflow', resources: ['Aprovações em cadeia', 'Etapas de revisão configuráveis', 'Deadlines e SLA de aprovação', 'Notificações de fluxo', 'Rastreamento de etapas'] },
    { name: 'People Identity Hub', tag: 'Usuários, cargos e permissões dos fluxos de assinatura.', accent: 'pih', icon: 'users', resources: ['Usuários e papéis', 'Cargos e permissões', 'Escopos de aprovação', 'Sincronização de identidade', 'RBAC integrado'] },
    { name: 'Knowledge Platform', tag: 'Procedimentos, políticas e documentação técnica versionados.', accent: 'kp', icon: 'globe', resources: ['Procedimentos e políticas', 'Documentação técnica', 'Catálogo de documentos', 'Conteúdo versionado', 'Permissões por perfil'] },
    { name: 'ServiceForge', tag: 'Ordens de serviço, contratos e relatórios gerados automaticamente.', accent: 'sf', icon: 'users', resources: ['Ordens de serviço', 'Contratos de atendimento', 'Relatórios de operação', 'Formulários de entrada', 'Integração de dados'] }
  ],

  tech: [
    { name: 'React', role: 'Interface dos estúdios e consoles documentais', spec: 'SPA' },
    { name: 'TypeScript', role: 'Tipagem dos modelos e contratos de documentos', spec: '5.x' },
    { name: 'Supabase', role: 'Auth, banco e storage gerenciados', spec: 'PaaS' },
    { name: 'PostgreSQL', role: 'Documentos, templates e metadados versionados', spec: '15+' },
    { name: 'Storage', role: 'Arquivos finais e templates de documentos', spec: 'Files' },
    { name: 'REST APIs', role: 'Superfície de integração e consulta', spec: 'HTTP' },
    { name: 'Workflow', role: 'Fluxos de revisão, aprovação e publicação', spec: 'Engine' },
    { name: 'Metadata', role: 'Campos, cláusulas e validações definidos como metadados', spec: 'JSON' },
    { name: 'RBAC', role: 'Permissões por papel e escopo', spec: 'Segurança' },
    { name: 'Versionamento', role: 'Histórico, diff e rollback de documentos', spec: 'Git-like' },
    { name: 'PDF', role: 'Geração de documentos com alta fidelidade', spec: 'Engine' },
    { name: 'DOCX', role: 'Exportação em formato editável', spec: 'Office' },
    { name: 'Auditoria', role: 'Trilha imutável de ações documentais', spec: 'Governança' }
  ],

  timeline: [
    {
      num: 'P1',
      title: 'Template Engine',
      status: 'Concluído',
      desc: 'A fundação: modelagem, variáveis e geração de documentos.',
      items: [
        'Template Manager e Document Builder',
        'Variable Engine com campos dinâmicos',
        'PDF Generator com alta fidelidade'
      ]
    },
    {
      num: 'P2',
      title: 'Workflow Platform',
      status: 'Em andamento',
      desc: 'Aprovações, regras e notificações do ciclo de vida.',
      items: [
        'Workflow Engine com etapas de aprovação',
        'Approval Center e Business Rules',
        'Notificações de ciclo de vida'
      ]
    },
    {
      num: 'P3',
      title: 'Version Control',
      status: 'Planejado',
      desc: 'Governança completa do acervo documental.',
      items: [
        'Version Control com diff e rollback',
        'Document Repository centralizado',
        'Audit Platform imutável'
      ]
    },
    {
      num: 'P4',
      title: 'Digital Signature & Integrations',
      status: 'Planejado',
      desc: 'Assinatura digital e conexão total com o ecossistema.',
      items: [
        'Assinatura digital integrada',
        'Export Center multi-formato',
        'Metadata Integration com o ecossistema'
      ]
    },
    {
      num: 'P5',
      title: 'AI Document Intelligence',
      status: 'Planejado',
      desc: 'Inteligência artificial aplicada ao ciclo documental.',
      items: [
        'Geração de documentos por IA',
        'Extração inteligente de dados',
        'Sugestão automática de cláusulas'
      ]
    }
  ],

  future: [
    { title: 'Geração automática por IA', desc: 'Descrições em linguagem natural viram documentos completos com regras e variáveis.', icon: 'sparkles' },
    { title: 'Extração inteligente de dados', desc: 'Conteúdo de contratos e laudos convertido em dados estruturados automaticamente.', icon: 'search' },
    { title: 'Sugestão de cláusulas', desc: 'Recomendações de cláusulas e redação baseadas no histórico da organização.', icon: 'wand' },
    { title: 'Validação jurídica assistida', desc: 'Revisão assistida de conformidade legal antes da publicação.', icon: 'shield' },
    { title: 'Assinatura digital integrada', desc: 'Assinatura com autenticidade e integridade dentro do próprio fluxo.', icon: 'signature' },
    { title: 'Marketplace de templates', desc: 'Biblioteca compartilhada de modelos publicados por unidades e parceiros.', icon: 'boxes' },
    { title: 'OCR', desc: 'Reconhecimento óptico para digitalizar e indexar documentos físicos.', icon: 'scan' },
    { title: 'Análise de conformidade', desc: 'Verificação contínua de aderência a políticas e regulamentos.', icon: 'chart' },
    { title: 'Colaboração em tempo real', desc: 'Edição e revisão simultânea de documentos e templates.', icon: 'users' },
    { title: 'Automação de revisões', desc: 'Ciclos de revisão agendados com notificação e trilha automáticas.', icon: 'refresh' }
  ],

  useCases: [
    { title: 'Contratos corporativos', icon: 'file', problema: 'Contratos montados manualmente, com risco de erro, versões divergentes e retrabalho jurídico.', solucao: 'Templates e variáveis geram contratos padronizados com cláusulas versionadas.', beneficio: 'Contratos consistentes em minutos, não em dias.' },
    { title: 'Propostas comerciais', icon: 'edit', problema: 'Propostas sem padrão demoram e variam de qualidade entre vendedores.', solucao: 'Modelos de proposta preenchidos por variáveis de cliente e produto.', beneficio: 'Propostas rápidas e com marca padronizada.' },
    { title: 'Relatórios técnicos', icon: 'chart', problema: 'Relatórios repetem estrutura e acumulam inconsistências de formatação.', solucao: 'Modelos com regras e variáveis geram relatórios uniformes.', beneficio: 'Relatórios consistentes, auditáveis e prontos para o cliente.' },
    { title: 'Ordens de Serviço', icon: 'workflow', problema: 'OS geradas em ferramentas diferentes, com dados duplicados e sem trilha.', solucao: 'Integração com ServiceForge gera OS a partir do atendimento.', beneficio: 'Fluxo de ponta a ponta com um único registro da verdade.' },
    { title: 'Laudos', icon: 'pdf', problema: 'Laudos com variações por caso exigem redação manual e revisão cara.', solucao: 'Templates com variáveis condicionais adaptam o laudo a cada cenário.', beneficio: 'Laudos precisos e padronizados em escala.' },
    { title: 'Documentação de RH', icon: 'users', problema: 'Documentos de RH são repetitivos e suscetíveis a erros de dados.', solucao: 'Biblioteca de modelos de RH integrada ao People Identity Hub.', beneficio: 'RH gera documentos sem retrabalho e com dados corretos.' },
    { title: 'Políticas internas', icon: 'globe', problema: 'Políticas dispersas em e-mails e versões desatualizadas circulando.', solucao: 'Publicação centralizada com versionamento e aprovação.', beneficio: 'Equipe sempre na versão vigente, com trilha de leitura.' },
    { title: 'Documentação operacional', icon: 'container', problema: 'Procedimentos operacionais inconsistentes entre equipes e turnos.', solucao: 'Templates com aprovação e auditoria padronizam o conteúdo.', beneficio: 'Operação documentada, consistente e auditável.' },
    { title: 'Certificados', icon: 'check', problema: 'Certificados emitidos um a um com digitação manual de dados.', solucao: 'Geração em massa por variáveis com integridade e padrão visual.', beneficio: 'Lotes emitidos em segundos com qualidade uniforme.' },
    { title: 'Declarações', icon: 'copy', problema: 'Declarações preenchidas à mão, com risco de dados incorretos.', solucao: 'Variáveis integradas ao People Identity Hub preenchem automaticamente.', beneficio: 'Declarações confiáveis e instantâneas.' }
  ],

  catSlug: {
    'Visão Geral': 'visao-geral',
    'Templates': 'templates',
    'Variáveis': 'variaveis',
    'Fluxos': 'fluxos',
    'Documentos': 'documentos',
    'Temas': 'temas',
    'Dispositivos': 'dispositivos'
  },

  screenshots: [
    { cat: 'Visão Geral', label: 'Dashboard da Plataforma', desc: 'Visão consolidada de documentos, fluxos e aprovações pendentes.', alt: 'Dashboard da ClauseForge com visão geral documental.', variant: 'wide' },
    { cat: 'Templates', label: 'Editor de Templates', desc: 'Modelagem visual de templates com variáveis e regras.', alt: 'Editor de templates da ClauseForge.', variant: 'wide' },
    { cat: 'Templates', label: 'Biblioteca de Templates', desc: 'Catálogo corporativo de modelos prontos para uso.', alt: 'Biblioteca de templates da ClauseForge.', variant: 'desktop' },
    { cat: 'Variáveis', label: 'Construtor de Variáveis', desc: 'Definição de campos dinâmicos e valores contextuais.', alt: 'Construtor de variáveis da ClauseForge.', variant: 'wide' },
    { cat: 'Fluxos', label: 'Fluxo de Aprovação', desc: 'Aprovações em cadeia com escopos, prazos e notificações.', alt: 'Fluxo de aprovação da ClauseForge.', variant: 'desktop' },
    { cat: 'Documentos', label: 'Visualização de Documento', desc: 'Preview fiel do documento final com variáveis resolvidas.', alt: 'Visualização de documento da ClauseForge.', variant: 'wide' },
    { cat: 'Documentos', label: 'Histórico de Versões', desc: 'Diff, comparação e rollback de versões documentais.', alt: 'Histórico de versões da ClauseForge.', variant: 'desktop' },
    { cat: 'Temas', label: 'Dark Mode', desc: 'Tema escuro para operações documentais intensivas.', alt: 'ClauseForge no modo escuro.', variant: 'wide' },
    { cat: 'Temas', label: 'Light Mode', desc: 'Tema claro e objetivo para redação e revisão.', alt: 'ClauseForge no modo claro.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Desktop', desc: 'Experiência completa em telas amplas.', alt: 'ClauseForge em desktop.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Tablet', desc: 'Revisão e aprovação em tablets.', alt: 'ClauseForge em tablet.', variant: 'tablet' },
    { cat: 'Dispositivos', label: 'Mobile', desc: 'Acompanhamento de aprovações pelo celular.', alt: 'ClauseForge em mobile.', variant: 'mobile' }
  ]
});

const ClauseForge = (() => {
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
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/>'
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
    const grid = document.getElementById('cf-numbers-grid');
    if (!grid) return;
    grid.innerHTML = ClauseForgeConfig.keyNumbers.map((n) => `
      <article class="cf-numbers__card" data-reveal>
        <span class="cf-numbers__value${n.static ? ' is-static' : ''}">
          ${n.static ? n.value : `<span class="cf-counter" data-value="${n.value}" data-suffix="${n.suffix}">0</span>`}
        </span>
        <span class="cf-numbers__label">${n.label}</span>
        <span class="cf-numbers__desc">${n.desc}</span>
      </article>`).join('');
  }

  function renderModules() {
    const grid = document.getElementById('cf-modules-grid');
    if (!grid) return;
    grid.innerHTML = ClauseForgeConfig.modules.map((m) => `
      <article class="cf-module cf-card" data-reveal>
        <div class="cf-module__head">
          <span class="cf-module__icon" aria-hidden="true">${icon(m.icon)}</span>
          <span class="cf-module__cat">${m.cat}</span>
        </div>
        <h3 class="cf-module__name">${m.name}</h3>
        <p class="cf-module__desc">${m.desc}</p>
        <span class="cf-status cf-status--${statusCls(m.status)}">${m.status}</span>
      </article>`).join('');
  }

  function renderFeatures() {
    const grid = document.getElementById('cf-features-grid');
    if (!grid) return;
    grid.innerHTML = ClauseForgeConfig.features.map((f) => `
      <article class="cf-feature cf-card" data-reveal>
        <span class="cf-feature__icon" aria-hidden="true">${icon(f.icon)}</span>
        <span class="cf-feature__tag">${f.tag}</span>
        <h3 class="cf-feature__title">${f.title}</h3>
        <p class="cf-feature__desc">${f.desc}</p>
      </article>`).join('');
  }

  function renderEcosystem() {
    const root = document.getElementById('cf-eco-root');
    if (!root) return;
    root.innerHTML = `
      <div class="cf-eco__wrap">
        <div class="cf-eco__hub" aria-hidden="true">
          <div class="cf-eco__hub-core">
            <div>
              <span class="cf-eco__hub-title">ClauseForge</span>
              <span class="cf-eco__hub-sub">Document Engine</span>
            </div>
          </div>
        </div>
        <div class="cf-eco__nodes">
          ${ClauseForgeConfig.ecosystem.map((node) => `
            <article class="cf-eco__node cf-card" data-reveal>
              <div class="cf-eco__node-head">
                <span class="cf-eco__node-icon cf-eco__node-icon--${node.accent}" aria-hidden="true">${icon(node.icon)}</span>
                <div>
                  <h3 class="cf-eco__node-name">${node.name}</h3>
                  <p class="cf-eco__node-tag">${node.tag}</p>
                </div>
              </div>
              <ul class="cf-eco__node-resources">
                ${node.resources.map((r) => `<li class="cf-eco__chip">${r}</li>`).join('')}
              </ul>
            </article>`).join('')}
        </div>
      </div>
      <p class="cf-eco__footnote">A ClauseForge usa o ecossistema como fonte de dados, identidade e fluxos — formulários, variáveis, usuários, permissões e aprovações compartilham a mesma base em todo o portfólio.</p>`;
  }

  function renderArchitecture() {
    const wrap = document.getElementById('cf-arch-layers');
    if (!wrap) return;
    const nodes = ClauseForgeConfig.architecture.map((l) => `
      <li class="cf-arch__node">
        <div class="cf-arch__node-info" data-reveal>
          <span class="cf-arch__node-badge" aria-hidden="true">${icon(l.icon, 18)}</span>
          <div>
            <h3 class="cf-arch__node-name">${l.name}</h3>
            <p class="cf-arch__node-desc">${l.desc}</p>
          </div>
        </div>
      </li>`).join('');
    wrap.innerHTML = `<div class="cf-arch__line" aria-hidden="true"></div>${nodes}`;
  }

  function renderTech() {
    const grid = document.getElementById('cf-tech-grid');
    if (!grid) return;
    grid.innerHTML = ClauseForgeConfig.tech.map((t) => `
      <article class="cf-tech cf-card" data-reveal>
        <h3 class="cf-tech__name"><span class="cf-tech__dot" aria-hidden="true"></span>${t.name}</h3>
        <p class="cf-tech__desc">${t.role}</p>
        <span class="cf-tech__spec">${t.spec}</span>
      </article>`).join('');
  }

  function renderTimeline() {
    const wrap = document.getElementById('cf-timeline-list');
    if (!wrap) return;
    wrap.innerHTML = ClauseForgeConfig.timeline.map((p) => `
      <li class="cf-phase" data-reveal>
        <span class="cf-phase__pin" aria-hidden="true">${p.num}</span>
        <div class="cf-phase__card cf-card">
          <div class="cf-phase__meta">
            <span class="cf-phase__num">${p.num}</span>
            <span class="cf-status cf-status--${statusCls(p.status)} cf-phase__status">${p.status}</span>
          </div>
          <h3 class="cf-phase__title">${p.title}</h3>
          <p class="cf-phase__desc">${p.desc}</p>
          <ul class="cf-phase__items">
            ${p.items.map((i) => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      </li>`).join('');
  }

  function renderFuture() {
    const grid = document.getElementById('cf-future-grid');
    if (!grid) return;
    grid.innerHTML = ClauseForgeConfig.future.map((f) => `
      <article class="cf-future cf-card" data-reveal>
        <span class="cf-future__icon" aria-hidden="true">${icon(f.icon)}</span>
        <div>
          <h3 class="cf-future__title">${f.title}</h3>
          <p class="cf-future__desc">${f.desc}</p>
        </div>
      </article>`).join('');
  }

  function renderCases() {
    const grid = document.getElementById('cf-cases-grid');
    if (!grid) return;
    grid.innerHTML = ClauseForgeConfig.useCases.map((c) => `
      <article class="cf-case cf-card" data-reveal>
        <div class="cf-case__head">
          <span class="cf-case__icon" aria-hidden="true">${icon(c.icon)}</span>
          <h3 class="cf-case__title">${c.title}</h3>
        </div>
        <p class="cf-case__block"><span class="cf-case__block-label">Problema</span><br>${c.problema}</p>
        <p class="cf-case__block"><span class="cf-case__block-label">Solução</span><br>${c.solucao}</p>
        <p class="cf-case__block"><span class="cf-case__block-label">Benefício</span><br>${c.beneficio}</p>
      </article>`).join('');
  }

  const catIcon = (cat) =>
    cat === 'Visão Geral' ? 'gauge' : cat === 'Templates' ? 'file' : cat === 'Variáveis' ? 'variable' : cat === 'Fluxos' ? 'workflow' : cat === 'Documentos' ? 'edit' : 'palette';

  function renderScreenshots() {
    const grid = document.getElementById('cf-shots-grid');
    const filters = document.getElementById('cf-shots-filters');
    if (!grid) return;

    const cats = ['Todos', ...new Set(ClauseForgeConfig.screenshots.map((s) => s.cat))];
    const realDir = `${basePath()}assets/gallery/`;

    if (filters) {
      filters.innerHTML = cats.map((c, i) =>
        `<button class="cf-tab cf-filter-chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
      ).join('');
    }

    grid.innerHTML = ClauseForgeConfig.screenshots.map((s, i) => `
      <figure class="cf-shots__item cf-mock cf-mock--${s.variant}" data-reveal data-shots-cat="${s.cat}" data-shot="${i}" data-real-image="${realDir}clauseforge-${ClauseForgeConfig.catSlug[s.cat]}-${i + 1}.webp">
        <div class="cf-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="cf-mock__screen">
          <div class="cf-mock__screen-inner">
            <span class="cf-mock__icon" aria-hidden="true">${icon(catIcon(s.cat))}</span>
            <span class="cf-mock__label">${s.label}</span>
            <span class="cf-mock__meta">placeholder — pronto para captura real</span>
          </div>
        </div>
        <figcaption class="cf-mock__figcaption">
          <span class="cf-mock__figcaption-title">${s.label}</span>
          <span class="cf-mock__figcaption-desc">${s.desc}</span>
        </figcaption>
      </figure>`).join('');
  }

  function initScreenshotFilters() {
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.cf-filter-chip');
      if (!chip) return;

      document.querySelectorAll('.cf-filter-chip').forEach((c) => {
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
    const els = document.querySelectorAll('.cf-counter');
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

    const idx = PROJECTS.findIndex((p) => p.slug === 'clauseforge');
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const base = basePath();

    const prevLink = document.getElementById('cf-prev');
    const nextLink = document.getElementById('cf-next');
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
    const shareBtn = document.getElementById('cf-share');
    const copyBtn = document.getElementById('cf-copy');
    const copied = document.getElementById('cf-copied');

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
          title: 'ClauseForge — Enterprise Document Automation Platform',
          text: 'Conheça a ClauseForge: geração, fluxo e gestão de documentos empresariais com templates e versionamento.',
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
    if (typeof DocumentLifecycle !== 'undefined') DocumentLifecycle.init();

    const yearEl = document.getElementById('cf-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof Navigation !== 'undefined') Navigation.init();
    init();
  });

  window.__CLFInit = init;

  return { init, basePath, icon };
})();

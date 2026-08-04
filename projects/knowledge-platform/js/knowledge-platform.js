/* ============================================
   KNOWLEDGE-PLATFORM.JS — Product Showcase Engine
   Enterprise Knowledge Management Platform
   ============================================ */

const KnowledgePlatformConfig = Object.freeze({
  keyNumbers: [
    { value: 500, suffix: '+', label: 'Documentos', desc: 'Manuais, procedimentos e artigos versionados.' },
    { value: 100, suffix: '+', label: 'Procedimentos', desc: 'Passo a passo técnicos revisados e aprovados.' },
    { value: 1000, suffix: '+', label: 'Itens Relacionados', desc: 'Vínculos entre equipamentos, modelos e documentos.' },
    { value: '∞', suffix: '', static: true, label: 'Conhecimento Evolutivo', desc: 'Uma base que cresce, se conecta e se mantém atual.' }
  ],

  modules: [
    { name: 'Knowledge Base', desc: 'Núcleo de artigos, conceitos e conteúdo técnico estruturado.', status: 'Ativo', cat: 'Núcleo', icon: 'book' },
    { name: 'Document Library', desc: 'Biblioteca central de documentos com metadados e organização.', status: 'Ativo', cat: 'Núcleo', icon: 'file' },
    { name: 'Technical Procedures', desc: 'Procedimentos técnicos passo a passo com checklist e revisão.', status: 'Ativo', cat: 'Núcleo', icon: 'workflow' },
    { name: 'Equipment Catalog', desc: 'Catálogo de equipamentos com modelos, specs e vínculos.', status: 'Ativo', cat: 'Núcleo', icon: 'layers' },
    { name: 'Firmware Repository', desc: 'Firmwares com versões, compatibilidade e notas de liberação.', status: 'Em desenvolvimento', cat: 'Núcleo', icon: 'download' },
    { name: 'Driver Repository', desc: 'Drivers homologados por modelo, SO e versão.', status: 'Em desenvolvimento', cat: 'Núcleo', icon: 'plug' },
    { name: 'Diagram Library', desc: 'Diagramas elétricos e técnicos em alta resolução.', status: 'Ativo', cat: 'Núcleo', icon: 'map' },
    { name: 'Tutorial Center', desc: 'Tutoriais guiados e trilhas de aprendizado progressivas.', status: 'Planejado', cat: 'Conteúdo', icon: 'rocket' },
    { name: 'Known Issues', desc: 'Problemas conhecidos com workarounds documentados.', status: 'Ativo', cat: 'Conteúdo', icon: 'alert' },
    { name: 'Solution Articles', desc: 'Artigos de solução com causa raiz e correção aplicável.', status: 'Ativo', cat: 'Conteúdo', icon: 'check' },
    { name: 'AI Search', desc: 'Busca semântica com respostas baseadas na base de conhecimento.', status: 'Em desenvolvimento', cat: 'IA', icon: 'search' },
    { name: 'Tag Management', desc: 'Tags, categorias e auto-classificação de conteúdo.', status: 'Em desenvolvimento', cat: 'Conteúdo', icon: 'filter' },
    { name: 'Version Control', desc: 'Versionamento completo com histórico comparável.', status: 'Ativo', cat: 'Governança', icon: 'git' },
    { name: 'Review Workflow', desc: 'Fluxo de revisão e aprovação antes da publicação.', status: 'Em desenvolvimento', cat: 'Governança', icon: 'shield' },
    { name: 'Administration', desc: 'Administração de usuários, ambientes e configurações.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'settings' },
    { name: 'Permissions', desc: 'RBAC com permissões granulares por área e ação.', status: 'Em desenvolvimento', cat: 'Plataforma', icon: 'users' },
    { name: 'Realtime Collaboration', desc: 'Edição e atualização colaborativa em tempo real.', status: 'Planejado', cat: 'Plataforma', icon: 'globe' }
  ],

  features: [
    { tag: 'IA', title: 'Busca Semântica', desc: 'Encontre conhecimento pela intenção, não apenas por palavras-chave.', icon: 'search' },
    { tag: 'IA', title: 'Respostas com RAG', desc: 'Respostas geradas com base no conteúdo da própria plataforma.', icon: 'sparkles' },
    { tag: 'IA', title: 'Resumos Automáticos', desc: 'Resumos gerados para documentos e procedimentos extensos.', icon: 'file' },
    { tag: 'IA', title: 'Artigos Relacionados', desc: 'Sugestões de leitura conectadas ao contexto atual.', icon: 'workflow' },
    { tag: 'IA', title: 'Auto-classificação', desc: 'Categorias e tags sugeridas automaticamente.', icon: 'filter' },
    { tag: 'IA', title: 'Extração de Palavras-chave', desc: 'Termos-chave extraídos para indexação e busca.', icon: 'code' },
    { tag: 'IA', title: 'Agrupamento Inteligente', desc: 'Documentos agrupados por tema e similaridade.', icon: 'layers' },
    { tag: 'Conteúdo', title: 'Editor Markdown', desc: 'Edição rica com Markdown e preview em tempo real.', icon: 'terminal' },
    { tag: 'Conteúdo', title: 'Anexos e Mídia', desc: 'Imagens, diagramas e arquivos anexados aos itens.', icon: 'upload' },
    { tag: 'Conteúdo', title: 'Metadados Customizados', desc: 'Campos e metadados configuráveis por tipo de item.', icon: 'book' },
    { tag: 'Conteúdo', title: 'Versionamento Completo', desc: 'Todas as versões preservadas e comparáveis.', icon: 'git' },
    { tag: 'Conteúdo', title: 'Fluxo de Revisão', desc: 'Revisão e aprovação antes de publicar.', icon: 'shield' },
    { tag: 'Conteúdo', title: 'Procedimentos Estruturados', desc: 'Passo a passo com checklist e responsáveis.', icon: 'check' },
    { tag: 'Governança', title: 'RBAC Multi-perfil', desc: 'Perfis com escopos distintos por área e função.', icon: 'users' },
    { tag: 'Governança', title: 'RLS Multi-tenant', desc: 'Isolamento total dos dados por organização.', icon: 'database' },
    { tag: 'Governança', title: 'Trilha de Auditoria', desc: 'Registro imutável de todas as operações.', icon: 'eye' },
    { tag: 'Governança', title: 'Histórico de Alterações', desc: 'Quem alterou o quê e quando, com diff.', icon: 'clock' },
    { tag: 'Integração', title: 'REST APIs', desc: 'API completa para consulta e integração.', icon: 'api' },
    { tag: 'Integração', title: 'Webhooks', desc: 'Eventos de conteúdo para sistemas externos.', icon: 'globe' },
    { tag: 'Integração', title: 'Internacionalização', desc: 'Interface pronta para múltiplos idiomas.', icon: 'layout' },
    { tag: 'Plataforma', title: 'Temas Claro e Escuro', desc: 'Acessível e confortável em qualquer ambiente.', icon: 'grid' },
    { tag: 'Plataforma', title: 'Realtime', desc: 'Atualizações e colaboração em tempo real.', icon: 'bell' },
    { tag: 'Plataforma', title: 'Links Permanentes', desc: 'URLs estáveis para compartilhar qualquer item.', icon: 'chart' }
  ],

  aiCapabilities: [
    { title: 'Busca Semântica', desc: 'Consulta por intenção com embeddings e relevância contextual.', icon: 'search' },
    { title: 'Respostas com RAG', desc: 'Respostas citadas, geradas apenas a partir do conteúdo aprovado.', icon: 'sparkles' },
    { title: 'Resumos Automáticos', desc: 'Sínteses de documentos e procedimentos extensos.', icon: 'file' },
    { title: 'Artigos Relacionados', desc: 'Sugestões de leitura por similaridade semântica.', icon: 'workflow' },
    { title: 'Auto-classificação', desc: 'Categorias e tags sugeridas para novos itens.', icon: 'filter' },
    { title: 'Extração de Palavras-chave', desc: 'Indexação automática a partir do conteúdo.', icon: 'code' },
    { title: 'Agrupamento Inteligente', desc: 'Organização de documentos por tema.', icon: 'layers' }
  ],

  aiProviders: [
    'OpenAI', 'Anthropic', 'Gemini', 'Modelos Locais (Ollama)', 'Providers Plugáveis'
  ],

  architecture: [
    { name: 'Frontend', desc: 'Interface React com editor, busca, diagramas e visualização.', icon: 'terminal' },
    { name: 'Knowledge Engine', desc: 'Modelo central de itens, taxonomia e relacionamentos.', icon: 'book' },
    { name: 'Document Engine', desc: 'Processamento de arquivos, extração e renderização.', icon: 'file' },
    { name: 'Search Engine', desc: 'Indexação full-text e busca semântica combinadas.', icon: 'search' },
    { name: 'Relationship Engine', desc: 'Vínculos entre equipamentos, modelos e documentos.', icon: 'workflow' },
    { name: 'Version Control', desc: 'Versionamento e histórico comparável de cada item.', icon: 'git' },
    { name: 'Storage', desc: 'Armazenamento de arquivos e anexos versionados.', icon: 'container' },
    { name: 'Database', desc: 'PostgreSQL multi-tenant com RLS e audit trail.', icon: 'database' },
    { name: 'AI Services', desc: 'Camada de IA com providers plugáveis e RAG.', icon: 'sparkles' },
    { name: 'External Integrations', desc: 'REST, webhooks, i18n e identidade externa.', icon: 'globe' }
  ],

  tech: [
    { name: 'React', role: 'Interface SPA com editor, busca e visualização', spec: 'SPA' },
    { name: 'TypeScript', role: 'Tipagem de ponta a ponta', spec: '5.x' },
    { name: 'Supabase', role: 'Auth, banco e storage gerenciados', spec: 'PaaS' },
    { name: 'PostgreSQL', role: 'Multi-tenant com RLS e audit', spec: '15+' },
    { name: 'Storage', role: 'Arquivos e anexos versionados', spec: 'Files' },
    { name: 'Metadata', role: 'Metadados e taxonomia por item', spec: 'Catálogo' },
    { name: 'Search', role: 'Full-text e busca semântica', spec: 'Engine' },
    { name: 'Workflow', role: 'Revisão e aprovação de conteúdo', spec: 'Engine' },
    { name: 'REST APIs', role: 'Integração e consulta', spec: 'HTTP' },
    { name: 'RLS', role: 'Isolamento por organização', spec: 'Segurança' },
    { name: 'Versionamento', role: 'Histórico de mudanças', spec: 'Git-like' },
    { name: 'IA', role: 'Providers plugáveis com RAG', spec: 'RAG' },
    { name: 'Documentos', role: 'Editor e processamento', spec: 'Markdown' },
    { name: 'Relacionamentos', role: 'Vínculos entre itens', spec: 'Graph' }
  ],

  timeline: [
    {
      num: 'P1',
      title: 'Knowledge Core',
      status: 'Concluído',
      desc: 'A fundação: base de conhecimento, biblioteca de documentos e editor com versionamento.',
      items: [
        'Knowledge Base e Document Library',
        'Editor Markdown com preview',
        'Version Control com histórico',
        'Base multi-tenant com RLS'
      ]
    },
    {
      num: 'P2',
      title: 'Documentation Platform',
      status: 'Em andamento',
      desc: 'Conteúdo operacional: procedimentos, problemas conhecidos e fluxo de revisão.',
      items: [
        'Technical Procedures estruturados',
        'Known Issues e Solution Articles',
        'Review Workflow com aprovação',
        'Tag Management e metadados'
      ]
    },
    {
      num: 'P3',
      title: 'Relationship Engine',
      status: 'Em andamento',
      desc: 'O grafo de conhecimento: catálogo técnico e vínculos entre todos os itens.',
      items: [
        'Equipment Catalog com modelos',
        'Firmware e Driver Repository',
        'Diagram Library',
        'Relationship Engine visual'
      ]
    },
    {
      num: 'P4',
      title: 'AI Knowledge',
      status: 'Planejado',
      desc: 'Inteligência aplicada: busca semântica, RAG, resumos e auto-classificação.',
      items: [
        'Busca semântica com embeddings',
        'Respostas com RAG citadas',
        'Resumos e auto-classificação',
        'Providers de IA plugáveis'
      ]
    },
    {
      num: 'P5',
      title: 'Enterprise Collaboration',
      status: 'Planejado',
      desc: 'Escala corporativa: tempo real, i18n e integrações com o ecossistema.',
      items: [
        'Realtime Collaboration',
        'Internacionalização',
        'Integração com ServiceForge',
        'Integração com People Identity Hub'
      ]
    }
  ],

  future: [
    { title: 'IA Multi-provedor', desc: 'OpenAI, Anthropic, Gemini e modelos locais.', icon: 'sparkles' },
    { title: 'Integração com ServiceForge', desc: 'Vincular conhecimento aos serviços e workflows.', icon: 'workflow' },
    { title: 'Integração com People Identity Hub', desc: 'SSO e identidade corporativa unificada.', icon: 'users' },
    { title: 'Assistente Conversacional', desc: 'Chat contextual sobre a base de conhecimento.', icon: 'rocket' },
    { title: 'Geração de Documentação', desc: 'Rascunhos automáticos a partir de dados e entrevistas.', icon: 'terminal' },
    { title: 'Tradução Automática', desc: 'Conteúdo traduzido para múltiplos idiomas.', icon: 'globe' },
    { title: 'Análise de Lacunas', desc: 'Identificação de tópicos pouco documentados.', icon: 'chart' },
    { title: 'Insights de Uso', desc: 'Métricas de leitura e buscas sem resposta.', icon: 'eye' },
    { title: 'Exportação e Backup', desc: 'Exportação completa e agendada da base.', icon: 'download' },
    { title: 'Marketplace de Templates', desc: 'Modelos e procedimentos da comunidade.', icon: 'grid' }
  ],

  useCases: [
    { title: 'Manutenção de Equipamentos', icon: 'gear', problema: 'Técnicos perdem tempo procurando manuais, diagramas e firmware do modelo certo.', solucao: 'Catálogo vinculado de equipamento → modelo → documentos e arquivos.', beneficio: 'Tempo de busca reduzido e manutenção mais rápida e segura.' },
    { title: 'Onboarding de Novos Técnicos', icon: 'users', problema: 'Conhecimento espalhado e treinamento lento, dependente de mentoria.', solucao: 'Trilhas guiadas, tutoriais e artigos relacionados.', beneficio: 'Produtividade plena em semanas, não em meses.' },
    { title: 'Suporte de Nível 2', icon: 'search', problema: 'Problemas já conhecidos são re-diagnosticados a cada chamado.', solucao: 'Base de Known Issues e Solution Articles com busca por sintoma.', beneficio: 'Resolução consistente e em uma fração do tempo.' },
    { title: 'Conformidade e Auditoria', icon: 'shield', problema: 'Procedimentos desatualizados e sem registro de aprovação.', solucao: 'Fluxo de revisão obrigatório e trilha de auditoria imutável.', beneficio: 'Conformidade comprovável para auditorias internas e externas.' },
    { title: 'Documentação Técnica', icon: 'book', problema: 'Manuais dispersos em pastas, e-mails e sistemas legados.', solucao: 'Biblioteca central com metadados, versionamento e busca.', beneficio: 'Fonte única da verdade para todo o conhecimento técnico.' },
    { title: 'Pesquisa Semântica', icon: 'sparkles', problema: 'Busca por palavra-chave não encontra a resposta certa.', solucao: 'IA com RAG responde citando documentos aprovados.', beneficio: 'Respostas precisas e confiáveis em segundos.' },
    { title: 'Troca de Fornecedor', icon: 'plug', problema: 'Dependência de documentação proprietária e sem padrão.', solucao: 'Repositórios homologados de drivers e firmwares.', beneficio: 'Padronização, independência e histórico de compatibilidade.' },
    { title: 'Treinamento Contínuo', icon: 'rocket', problema: 'Cursos não refletem a operação real e ficam obsoletos.', solucao: 'Tutorial Center alimentado por procedimentos aprovados.', beneficio: 'Equipe sempre atualizada com o conteúdo em uso.' }
  ],

  screenshots: [
    { cat: 'Visão Geral', label: 'Dashboard', desc: 'Visão consolidada de documentos e atividades recentes.', alt: 'Dashboard da Knowledge Platform com visão geral de documentos.', variant: 'wide' },
    { cat: 'Documentos', label: 'Editor de Artigos', desc: 'Editor Markdown com preview em tempo real.', alt: 'Editor de artigos da Knowledge Platform em Markdown.', variant: 'desktop' },
    { cat: 'Documentos', label: 'Procedimentos', desc: 'Procedimentos passo a passo com checklist.', alt: 'Procedimento técnico da Knowledge Platform com checklist.', variant: 'wide' },
    { cat: 'Documentos', label: 'Biblioteca de Documentos', desc: 'Biblioteca com metadados e filtros.', alt: 'Biblioteca de documentos da Knowledge Platform.', variant: 'desktop' },
    { cat: 'Catálogo', label: 'Equipamentos e Modelos', desc: 'Catálogo de equipamentos com vínculos.', alt: 'Catálogo de equipamentos e modelos da Knowledge Platform.', variant: 'wide' },
    { cat: 'Catálogo', label: 'Firmwares e Drivers', desc: 'Repositórios de compatibilidade e versões.', alt: 'Repositórios de firmware e drivers da Knowledge Platform.', variant: 'desktop' },
    { cat: 'IA', label: 'Busca Semântica', desc: 'Consulta por intenção com resultados relevantes.', alt: 'Busca semântica da Knowledge Platform.', variant: 'wide' },
    { cat: 'IA', label: 'Assistente IA', desc: 'Respostas com RAG citando documentos aprovados.', alt: 'Assistente IA da Knowledge Platform com respostas citadas.', variant: 'wide' },
    { cat: 'Temas', label: 'Dark Mode', desc: 'Tema escuro para longas sessões.', alt: 'Knowledge Platform no modo escuro.', variant: 'wide' },
    { cat: 'Temas', label: 'Light Mode', desc: 'Tema claro e objetivo.', alt: 'Knowledge Platform no modo claro.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Desktop', desc: 'Experiência completa em telas amplas.', alt: 'Knowledge Platform em desktop.', variant: 'wide' },
    { cat: 'Dispositivos', label: 'Tablet', desc: 'Operação em telas intermediárias.', alt: 'Knowledge Platform em tablet.', variant: 'tablet' },
    { cat: 'Dispositivos', label: 'Mobile', desc: 'Consulta do conhecimento pelo celular.', alt: 'Knowledge Platform em mobile.', variant: 'mobile' }
  ]
});

const KnowledgePlatform = (() => {
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
    const grid = document.getElementById('kp-numbers-grid');
    if (!grid) return;
    grid.innerHTML = KnowledgePlatformConfig.keyNumbers.map((n) => `
      <article class="kp-numbers__card kp-card" data-reveal>
        <span class="kp-numbers__value${n.static ? ' is-static' : ''}">
          ${n.static ? n.value : `<span class="kp-counter" data-value="${n.value}" data-suffix="${n.suffix}">0</span>`}
        </span>
        <p class="kp-numbers__label">${n.label}</p>
        <p class="kp-numbers__desc">${n.desc}</p>
      </article>`).join('');
  }

  function renderModules() {
    const grid = document.getElementById('kp-modules-grid');
    if (!grid) return;
    grid.innerHTML = KnowledgePlatformConfig.modules.map((m) => {
      const cls = m.status === 'Ativo' ? 'active' : m.status === 'Em desenvolvimento' ? 'dev' : 'planned';
      return `
        <article class="kp-module kp-card" data-reveal>
          <div class="kp-module__head">
            <span class="kp-module__icon" aria-hidden="true">${icon(m.icon)}</span>
            <span class="kp-module__cat">${m.cat}</span>
          </div>
          <h3 class="kp-module__name">${m.name}</h3>
          <p class="kp-module__desc">${m.desc}</p>
          <span class="kp-status kp-status--${cls}">${m.status}</span>
        </article>`;
    }).join('');
  }

  function renderFeatures() {
    const grid = document.getElementById('kp-features-grid');
    if (!grid) return;
    grid.innerHTML = KnowledgePlatformConfig.features.map((f) => `
      <article class="kp-feature kp-card" data-reveal>
        <span class="kp-feature__icon" aria-hidden="true">${icon(f.icon)}</span>
        <span class="kp-feature__tag">${f.tag}</span>
        <h3 class="kp-feature__title">${f.title}</h3>
        <p class="kp-feature__desc">${f.desc}</p>
      </article>`).join('');
  }

  function renderAI() {
    const grid = document.getElementById('kp-ai-grid');
    if (!grid) return;
    grid.innerHTML = KnowledgePlatformConfig.aiCapabilities.map((a) => `
      <article class="kp-ai__card kp-card" data-reveal>
        <span class="kp-ai__icon" aria-hidden="true">${icon(a.icon)}</span>
        <h3 class="kp-ai__title">${a.title}</h3>
        <p class="kp-ai__desc">${a.desc}</p>
      </article>`).join('');

    const providers = document.getElementById('kp-ai-providers');
    if (providers) {
      providers.innerHTML = KnowledgePlatformConfig.aiProviders.map((p) => `
        <span class="kp-ai__provider">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z"/></svg>
          ${p}
        </span>`).join('');
    }
  }

  function renderArchitecture() {
    const wrap = document.getElementById('kp-arch-layers');
    if (!wrap) return;

    const nodes = KnowledgePlatformConfig.architecture.map((l) => `
      <li class="kp-arch__node">
        <div class="kp-arch__node-info" data-reveal>
          <h3 class="kp-arch__node-name">${l.name}</h3>
          <p class="kp-arch__node-desc">${l.desc}</p>
        </div>
        <span class="kp-arch__node-badge" aria-hidden="true">${icon(l.icon, 24)}</span>
      </li>`).join('');

    wrap.innerHTML = `<div class="kp-arch__line" aria-hidden="true"></div>${nodes}`;
  }

  function renderTech() {
    const grid = document.getElementById('kp-tech-grid');
    if (!grid) return;
    grid.innerHTML = KnowledgePlatformConfig.tech.map((t) => `
      <article class="kp-tech kp-card" data-reveal>
        <h3 class="kp-tech__name"><span class="kp-tech__dot" aria-hidden="true"></span>${t.name}</h3>
        <p class="kp-tech__desc">${t.role}</p>
        <span class="kp-tech__spec">${t.spec}</span>
      </article>`).join('');
  }

  function renderTimeline() {
    const wrap = document.getElementById('kp-timeline-list');
    if (!wrap) return;

    wrap.innerHTML = KnowledgePlatformConfig.timeline.map((p) => {
      const cls = p.status === 'Concluído' ? 'active' : p.status === 'Em andamento' ? 'dev' : 'planned';
      return `
        <li class="kp-phase">
          <div class="kp-phase__card" data-reveal>
            <div class="kp-phase__meta">
              <span class="kp-phase__num">${p.num}</span>
              <span class="kp-status kp-status--${cls} kp-phase__status">${p.status}</span>
            </div>
            <h3 class="kp-phase__title">${p.title}</h3>
            <p class="kp-phase__desc">${p.desc}</p>
            <ul class="kp-phase__items">
              ${p.items.map((i) => `<li>${i}</li>`).join('')}
            </ul>
          </div>
          <span class="kp-phase__pin" aria-hidden="true">${p.num}</span>
        </li>`;
    }).join('');
  }

  function renderFuture() {
    const grid = document.getElementById('kp-future-grid');
    if (!grid) return;
    grid.innerHTML = KnowledgePlatformConfig.future.map((f) => `
      <article class="kp-future kp-card" data-reveal>
        <span class="kp-future__icon" aria-hidden="true">${icon(f.icon)}</span>
        <div>
          <h3 class="kp-future__title">${f.title}</h3>
          <p class="kp-future__desc">${f.desc}</p>
        </div>
      </article>`).join('');
  }

  function renderCases() {
    const grid = document.getElementById('kp-cases-grid');
    if (!grid) return;
    grid.innerHTML = KnowledgePlatformConfig.useCases.map((c) => `
      <article class="kp-case kp-card" data-reveal>
        <div class="kp-case__head">
          <span class="kp-case__icon" aria-hidden="true">${icon(c.icon)}</span>
          <h3 class="kp-case__title">${c.title}</h3>
        </div>
        <p class="kp-case__block"><span class="kp-case__block-label">Problema</span><br>${c.problema}</p>
        <p class="kp-case__block"><span class="kp-case__block-label">Solução</span><br>${c.solucao}</p>
        <p class="kp-case__block"><span class="kp-case__block-label">Benefício</span><br>${c.beneficio}</p>
      </article>`).join('');
  }

  function renderScreenshots() {
    const grid = document.getElementById('kp-shots-grid');
    const filters = document.getElementById('kp-shots-filters');
    if (!grid) return;

    const cats = ['Todos', ...new Set(KnowledgePlatformConfig.screenshots.map((s) => s.cat))];
    const realDir = `${basePath()}assets/gallery/`;

    if (filters) {
      filters.innerHTML = cats.map((c, i) =>
        `<button class="kp-tab kp-filter-chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
      ).join('');
    }

    grid.innerHTML = KnowledgePlatformConfig.screenshots.map((s, i) => `
      <figure class="kp-shots__item kp-mock kp-mock--${s.variant}" data-reveal data-shots-cat="${s.cat}" data-shot="${i}" data-real-image="${realDir}knowledge-platform-${s.cat.toLowerCase().replace(/ /g, '-')}-${i + 1}.webp">
        <div class="kp-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="kp-mock__screen">
          <div class="kp-mock__screen-inner">
            <span class="kp-mock__icon" aria-hidden="true">${icon(s.cat === 'IA' ? 'sparkles' : s.cat === 'Visão Geral' ? 'chart' : s.cat === 'Documentos' ? 'file' : s.cat === 'Catálogo' ? 'layers' : s.cat === 'Temas' ? 'layout' : 'terminal')}</span>
            <span class="kp-mock__label">${s.label}</span>
            <span class="kp-mock__meta">placeholder — pronto para captura real</span>
          </div>
        </div>
        <figcaption class="kp-mock__figcaption">
          <span class="kp-mock__figcaption-title">${s.label}</span>
          <span class="kp-mock__figcaption-desc">${s.desc}</span>
        </figcaption>
      </figure>`).join('');
  }

  function initScreenshotFilters() {
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.kp-filter-chip');
      if (!chip) return;

      document.querySelectorAll('.kp-filter-chip').forEach((c) => {
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
    const els = document.querySelectorAll('.kp-counter');
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

    const idx = PROJECTS.findIndex((p) => p.slug === 'knowledge-platform');
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const base = basePath();

    const prevLink = document.getElementById('kp-prev');
    const nextLink = document.getElementById('kp-next');
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
    const shareBtn = document.getElementById('kp-share');
    const copyBtn = document.getElementById('kp-copy');
    const copied = document.getElementById('kp-copied');

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
          title: 'Knowledge Platform — Enterprise Knowledge Management Platform',
          text: 'Conheça a Knowledge Platform: documentação técnica, base de conhecimento e IA aplicada em um só lugar.',
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
    renderAI();
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
    if (typeof Relationships !== 'undefined') Relationships.init();

    const yearEl = document.getElementById('kp-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof Navigation !== 'undefined') Navigation.init();
    init();
  });

  return { init, basePath, icon };
})();

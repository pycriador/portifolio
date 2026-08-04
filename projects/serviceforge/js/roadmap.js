/* ============================================
   ROADMAP.JS — Product Roadmap Timeline
   ============================================ */

const Roadmap = (() => {
  const phases = [
    {
      num: 'P1',
      title: 'Foundation',
      status: 'Concluído',
      desc: 'Alicerce da plataforma: identidade, multitenancy e contratos de domínio que sustentam todos os módulos.',
      items: [
        'Setup de projeto e padrões de código',
        'Autenticação e sessão unificadas',
        'Autorização RBAC com escopo por tenant',
        'Núcleo multi-tenant e isolamento RLS'
      ]
    },
    {
      num: 'P2',
      title: 'Platform',
      status: 'Em andamento',
      desc: 'Serviços de plataforma compartilhados, prontos para serem consumidos por qualquer módulo de negócio.',
      items: [
        'Metadata engine com schemas dinâmicos',
        'Document platform e templates',
        'Theme engine com white-label',
        'Storage providers plugáveis',
        'Event bus para comunicação assíncrona'
      ]
    },
    {
      num: 'P3',
      title: 'Business Modules',
      status: 'Planejado',
      desc: 'Módulos de negócio construídos sobre a plataforma, com a mesma base, padrões e APIs.',
      items: [
        'Customer management e hierarquias',
        'Asset e equipment management',
        'Work orders com SLA e priorização',
        'Agenda, despacho e campo',
        'Reporting e exportações'
      ]
    },
    {
      num: 'P4',
      title: 'Integrations',
      status: 'Planejado',
      desc: 'Ecosistema aberto: integrações nativas, webhooks e um hub para parceiros.',
      items: [
        'Integration hub com adaptadores',
        'Webhooks com retry e idempotência',
        'Notificações multicanal',
        'Marketplace de extensões'
      ]
    },
    {
      num: 'P5',
      title: 'Enterprise',
      status: 'Planejado',
      desc: 'Capacidades enterprise para grandes operações, conformidade e escala global.',
      items: [
        'Auditoria avançada e trilhas imutáveis',
        'Governança de SLA e contratos',
        'SSO corporativo (SAML / OIDC)',
        'Escala horizontal e alta disponibilidade'
      ]
    }
  ];

  function render() {
    const wrap = document.getElementById('sf-roadmap-timeline');
    if (!wrap) return;

    wrap.innerHTML = phases.map((p) => {
      const cls = p.status === 'Concluído' ? 'active' : p.status === 'Em andamento' ? 'dev' : 'planned';
      return `
        <article class="sf-phase" data-reveal>
          <div class="sf-phase__card">
            <div class="sf-phase__meta">
              <span class="sf-phase__num">${p.num}</span>
              <span class="sf-status sf-phase__status sf-status--${cls}">${p.status}</span>
            </div>
            <h3 class="sf-phase__title">${p.title}</h3>
            <p class="sf-phase__desc">${p.desc}</p>
            <ul class="sf-phase__items">
              ${p.items.map((i) => `<li>${i}</li>`).join('')}
            </ul>
          </div>
          <span class="sf-phase__pin" aria-hidden="true">${p.num}</span>
        </article>`;
    }).join('');
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

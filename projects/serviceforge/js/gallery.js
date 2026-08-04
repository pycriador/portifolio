/* ============================================
   GALLERY.JS — Tabs, Lightbox & Real Images
   ============================================ */

const Gallery = (() => {
  const collections = [
    { id: 'dashboard', label: 'Dashboard', items: [
      { label: 'Visão Geral', desc: 'Métricas em tempo real e indicadores de SLA.', alt: 'Dashboard do ServiceForge com métricas operacionais em tempo real.', variant: 'wide' },
      { label: 'Operações', desc: 'Acompanhamento diário da fila de serviços.', alt: 'Painel de operações do ServiceForge com fila de serviços.', variant: 'wide' },
      { label: 'Financeiro', desc: 'Faturamento e receita por cliente.', alt: 'Dashboard financeiro do ServiceForge com receita por cliente.', variant: 'desktop' }
    ]},
    { id: 'clientes', label: 'Clientes', items: [
      { label: 'Perfil Corporativo', desc: 'Hierarquia, contratos e histórico completo.', alt: 'Perfil corporativo de cliente no ServiceForge com hierarquia e contratos.', variant: 'desktop' },
      { label: 'Ativos do Cliente', desc: 'Equipamentos e instalações vinculadas.', alt: 'Lista de ativos do cliente no ServiceForge.', variant: 'desktop' }
    ]},
    { id: 'ordens', label: 'Ordens de Serviço', items: [
      { label: 'Fila de Atendimento', desc: 'Priorização automática por SLA e urgência.', alt: 'Fila de ordens de serviço do ServiceForge com priorização por SLA.', variant: 'wide' },
      { label: 'Detalhe da OS', desc: 'Execução com checklist e tempo real.', alt: 'Detalhe de ordem de serviço do ServiceForge.', variant: 'wide' },
      { label: 'Recorrências', desc: 'Manutenções programadas e rotinas.', alt: 'Agendamento de ordens de serviço recorrentes no ServiceForge.', variant: 'desktop' }
    ]},
    { id: 'equipamentos', label: 'Equipamentos', items: [
      { label: 'Catálogo de Ativos', desc: 'Inventário completo com status e garantia.', alt: 'Catálogo de equipamentos do ServiceForge.', variant: 'desktop' },
      { label: 'Histórico', desc: 'Intervenções e manutenções por equipamento.', alt: 'Histórico de manutenções de equipamentos no ServiceForge.', variant: 'desktop' }
    ]},
    { id: 'agenda', label: 'Agenda', items: [
      { label: 'Agenda da Equipe', desc: 'Disponibilidade e despacho de visitas.', alt: 'Agenda de equipes do ServiceForge com despacho de visitas.', variant: 'wide' },
      { label: 'Timeline de Campo', desc: 'Rota e execução em tempo real.', alt: 'Timeline de campo do ServiceForge com rota em tempo real.', variant: 'tablet' }
    ]},
    { id: 'relatorios', label: 'Relatórios', items: [
      { label: 'Relatórios Gerenciais', desc: 'Exportação e agendamento automático.', alt: 'Central de relatórios gerenciais do ServiceForge.', variant: 'wide' },
      { label: 'Análises', desc: 'Tendências e comparativos por período.', alt: 'Análises e comparativos do ServiceForge.', variant: 'desktop' }
    ]},
    { id: 'mobile', label: 'Mobile', items: [
      { label: 'App Técnico', desc: 'Ordens, checklist e assinatura em campo.', alt: 'Aplicativo móvel do técnico no ServiceForge.', variant: 'mobile' },
      { label: 'Fotos em Campo', desc: 'Registro fotográfico georreferenciado.', alt: 'Registro fotográfico do ServiceForge no celular.', variant: 'mobile' },
      { label: 'Notificações', desc: 'Alertas e aprovações na hora.', alt: 'Notificações do ServiceForge no celular.', variant: 'mobile' }
    ]},
    { id: 'dark', label: 'Dark Mode', items: [
      { label: 'Interface Escura', desc: 'Tema escuro com alto contraste.', alt: 'ServiceForge no modo escuro.', variant: 'wide' },
      { label: 'Monitores de Operação', desc: 'Salas de comando sem fadiga visual.', alt: 'ServiceForge no modo escuro em monitores de operação.', variant: 'tablet' }
    ]},
    { id: 'light', label: 'Light Mode', items: [
      { label: 'Interface Clara', desc: 'Tema claro leve e legível.', alt: 'ServiceForge no modo claro.', variant: 'wide' },
      { label: 'Administração', desc: 'Configurações com navegação limpa.', alt: 'Administração do ServiceForge no modo claro.', variant: 'desktop' }
    ]}
  ];

  const basePath = () => (window.location.pathname.includes('/projects/') ? '../../' : '');
  const realDir = () => `${basePath()}assets/gallery/`;

  let lightbox = null;
  let lbItems = [];
  let lbIndex = 0;
  let lastFocused = null;

  const galleryIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';

  function renderTabs() {
    const root = document.getElementById('sf-gallery-root');
    if (!root) return;

    const tabList = document.createElement('div');
    tabList.className = 'sf-tabs';
    tabList.setAttribute('role', 'tablist');
    tabList.setAttribute('aria-label', 'Galeria do produto');

    const panels = document.createElement('div');
    panels.className = 'sf-tabs__panels';

    collections.forEach((col, ci) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'sf-tab';
      tab.id = `sf-tab-${col.id}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', `sf-panel-${col.id}`);
      tab.setAttribute('aria-selected', ci === 0 ? 'true' : 'false');
      tab.setAttribute('tabindex', ci === 0 ? '0' : '-1');
      tab.textContent = col.label;
      tabList.appendChild(tab);

      const panel = document.createElement('div');
      panel.className = `sf-tabs__panel${ci === 0 ? ' is-active' : ''}`;
      panel.id = `sf-panel-${col.id}`;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `sf-tab-${col.id}`);

      const grid = document.createElement('div');
      grid.className = 'sf-gallery__grid';

      grid.innerHTML = col.items.map((item, ii) => `
        <figure class="sf-gallery__item mock mock--${item.variant}" data-reveal data-gallery="${col.id}" data-index="${ii}" data-real-image="${realDir()}serviceforge-${col.id}-${ii + 1}.webp" tabindex="0" role="button" aria-label="Ampliar: ${item.alt}">
          <div class="mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="mock__screen">
            <div class="mock__screen-inner">
              <span class="mock__icon" aria-hidden="true">${galleryIcon}</span>
              <span class="mock__label">${item.label}</span>
              <span class="mock__meta">placeholder — pronto para captura real</span>
            </div>
          </div>
          <figcaption class="mock__figcaption">
            <span class="mock__figcaption-title">${item.label}</span>
            <span class="mock__figcaption-desc">${item.desc}</span>
          </figcaption>
        </figure>`).join('');

      panel.appendChild(grid);
      panels.appendChild(panel);
    });

    root.appendChild(tabList);
    root.appendChild(panels);
  }

  function initTabs() {
    const root = document.getElementById('sf-gallery-root');
    if (!root) return;

    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const panels = [...root.querySelectorAll('[role="tabpanel"]')];

    function activate(tab) {
      tabs.forEach((t) => {
        const active = t === tab;
        t.setAttribute('aria-selected', String(active));
        t.setAttribute('tabindex', active ? '0' : '-1');
      });
      panels.forEach((p) => {
        p.classList.toggle('is-active', p.id === tab.getAttribute('aria-controls'));
      });
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activate(tab));

      tab.addEventListener('keydown', (e) => {
        const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        activate(next);
        next.focus();
      });
    });
  }

  function tryLoadRealImage(fig) {
    const src = fig.dataset.realImage;
    if (!src) return;

    const probe = new Image();
    probe.onload = () => {
      const screen = fig.querySelector('.mock__screen');
      if (!screen) return;
      const caption = fig.querySelector('.mock__label');
      const alt = caption ? caption.textContent : '';
      const img = document.createElement('img');
      img.src = src;
      img.loading = 'lazy';
      img.alt = alt;
      img.width = 640;
      img.height = 400;
      screen.replaceChildren(img);
    };
    probe.src = src;
  }

  function initLightbox() {
    lightbox = document.getElementById('sf-lightbox');
    if (!lightbox) return;

    const closeBtn = lightbox.querySelector('[data-lb-close]');
    const prevBtn = lightbox.querySelector('[data-lb-prev]');
    const nextBtn = lightbox.querySelector('[data-lb-next]');
    const screen = lightbox.querySelector('[data-lb-screen]');
    const labelEl = lightbox.querySelector('[data-lb-label]');
    const captionEl = lightbox.querySelector('[data-lb-caption]');
    const countEl = lightbox.querySelector('[data-lb-count]');

    document.addEventListener('click', (e) => {
      const galleryItem = e.target.closest('.sf-gallery__item');
      const shotItem = e.target.closest('.sf-shots__item');

      if (galleryItem || shotItem) {
        const collection = galleryItem
          ? [...document.querySelectorAll('.sf-gallery__item')].filter((el) => el.dataset.gallery === galleryItem.dataset.gallery)
          : [...document.querySelectorAll('.sf-shots__item')];
        lbItems = collection;
        lbIndex = collection.indexOf(galleryItem || shotItem);
        lastFocused = galleryItem || shotItem;
        openLightbox();
      }
    });

    closeBtn?.addEventListener('click', closeLightbox);
    prevBtn?.addEventListener('click', () => stepLightbox(-1));
    nextBtn?.addEventListener('click', () => stepLightbox(1));

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') stepLightbox(-1);
      if (e.key === 'ArrowRight') stepLightbox(1);
      if (e.key === 'Tab') trapFocus(e);
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    function openLightbox() {
      updateLightbox();
      lightbox.classList.add('is-open');
      document.body.classList.add('sf-lightbox-locked');
      closeBtn?.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('sf-lightbox-locked');
      lastFocused?.focus();
    }

    function stepLightbox(dir) {
      if (!lbItems.length) return;
      lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
      updateLightbox();
    }

    function updateLightbox() {
      if (!lbItems.length) return;
      const item = lbItems[lbIndex];
      const label = item.querySelector('.mock__label')?.textContent || '';
      const desc = item.querySelector('.mock__figcaption-desc')?.textContent || '';

      screen.innerHTML = item.querySelector('.mock__screen').outerHTML;
      labelEl.textContent = label;
      captionEl.textContent = desc;
      countEl.textContent = `${lbIndex + 1} / ${lbItems.length}`;

      const closeButton = lightbox.querySelector('[data-lb-close]');
      closeButton.setAttribute('aria-label', `Fechar visualização de ${label}`);
    }

    function trapFocus(e) {
      const focusables = lightbox.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function init() {
    renderTabs();
    initTabs();
    initLightbox();

    document.querySelectorAll('[data-real-image]').forEach(tryLoadRealImage);
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

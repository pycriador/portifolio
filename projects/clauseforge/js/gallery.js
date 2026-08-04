/* ============================================
   GALLERY.JS — Tabs, Lightbox & Real Images
   ============================================ */

const Gallery = (() => {
  const collections = [
    { id: 'visao-geral', label: 'Visão Geral', icon: 'gauge', items: [
      { label: 'Dashboard da Plataforma', desc: 'Visão consolidada de documentos, fluxos e aprovações pendentes.', alt: 'Dashboard da ClauseForge com visão geral documental.', variant: 'wide' },
      { label: 'Monitor de Documentos', desc: 'Atividade recente de geração, revisão e publicação.', alt: 'Monitor de documentos da ClauseForge.', variant: 'wide' }
    ]},
    { id: 'templates', label: 'Templates', icon: 'file', items: [
      { label: 'Editor de Templates', desc: 'Modelagem visual com variáveis e regras.', alt: 'Editor de templates da ClauseForge.', variant: 'wide' },
      { label: 'Biblioteca de Templates', desc: 'Catálogo corporativo de modelos prontos.', alt: 'Biblioteca de templates da ClauseForge.', variant: 'desktop' }
    ]},
    { id: 'variaveis', label: 'Variáveis', icon: 'variable', items: [
      { label: 'Construtor de Variáveis', desc: 'Campos dinâmicos e valores contextuais.', alt: 'Construtor de variáveis da ClauseForge.', variant: 'wide' },
      { label: 'Engine de Variáveis', desc: 'Resolução automática em qualquer template.', alt: 'Engine de variáveis da ClauseForge.', variant: 'desktop' }
    ]},
    { id: 'fluxos', label: 'Fluxos', icon: 'workflow', items: [
      { label: 'Fluxo de Aprovação', desc: 'Aprovações em cadeia com escopos e prazos.', alt: 'Fluxo de aprovação da ClauseForge.', variant: 'wide' },
      { label: 'Editor de Workflow', desc: 'Etapas de revisão e publicação configuráveis.', alt: 'Editor de workflow da ClauseForge.', variant: 'desktop' }
    ]},
    { id: 'documentos', label: 'Documentos', icon: 'edit', items: [
      { label: 'Visualização de Documento', desc: 'Preview fiel com variáveis resolvidas.', alt: 'Visualização de documento da ClauseForge.', variant: 'wide' },
      { label: 'Histórico de Versões', desc: 'Diff, comparação e rollback de versões.', alt: 'Histórico de versões da ClauseForge.', variant: 'desktop' }
    ]},
    { id: 'dispositivos', label: 'Dispositivos', icon: 'monitor', items: [
      { label: 'Desktop', desc: 'Experiência completa em telas amplas.', alt: 'ClauseForge em desktop.', variant: 'wide' },
      { label: 'Mobile', desc: 'Acompanhamento de aprovações pelo celular.', alt: 'ClauseForge em mobile.', variant: 'mobile' }
    ]}
  ];

  const basePath = () => (window.location.pathname.includes('/projects/') ? '../../' : '');
  const realDir = () => `${basePath()}assets/gallery/`;

  let lightbox = null;
  let lbItems = [];
  let lbIndex = 0;
  let lastFocused = null;

  const galleryIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';

  const colIcon = (name) => {
    if (typeof ClauseForge !== 'undefined' && ClauseForge.icon) return ClauseForge.icon(name);
    return galleryIcon;
  };

  function renderTabs() {
    const root = document.getElementById('cf-gallery-root');
    if (!root) return;

    const tabList = document.createElement('div');
    tabList.className = 'cf-tabs';
    tabList.setAttribute('role', 'tablist');
    tabList.setAttribute('aria-label', 'Galeria do produto');

    const panels = document.createElement('div');
    panels.className = 'cf-tabs__panels';

    collections.forEach((col, ci) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'cf-tab';
      tab.id = `cf-tab-${col.id}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', `cf-panel-${col.id}`);
      tab.setAttribute('aria-selected', ci === 0 ? 'true' : 'false');
      tab.setAttribute('tabindex', ci === 0 ? '0' : '-1');
      tab.textContent = col.label;
      tabList.appendChild(tab);

      const panel = document.createElement('div');
      panel.className = `cf-tabs__panel${ci === 0 ? ' is-active' : ''}`;
      panel.id = `cf-panel-${col.id}`;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `cf-tab-${col.id}`);

      const grid = document.createElement('div');
      grid.className = 'cf-gallery__grid';

      grid.innerHTML = col.items.map((item, ii) => `
        <figure class="cf-gallery__item cf-mock cf-mock--${item.variant}" data-reveal data-gallery="${col.id}" data-index="${ii}" data-real-image="${realDir()}clauseforge-${col.id}-${ii + 1}.webp" tabindex="0" role="button" aria-label="Ampliar: ${item.alt}">
          <div class="cf-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="cf-mock__screen">
            <div class="cf-mock__screen-inner">
              <span class="cf-mock__icon" aria-hidden="true">${colIcon(col.icon)}</span>
              <span class="cf-mock__label">${item.label}</span>
              <span class="cf-mock__meta">placeholder — pronto para captura real</span>
            </div>
          </div>
          <figcaption class="cf-mock__figcaption">
            <span class="cf-mock__figcaption-title">${item.label}</span>
            <span class="cf-mock__figcaption-desc">${item.desc}</span>
          </figcaption>
        </figure>`).join('');

      panel.appendChild(grid);
      panels.appendChild(panel);
    });

    root.appendChild(tabList);
    root.appendChild(panels);
  }

  function initTabs() {
    const root = document.getElementById('cf-gallery-root');
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
      const screen = fig.querySelector('.cf-mock__screen');
      if (!screen) return;
      const caption = fig.querySelector('.cf-mock__label');
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
    lightbox = document.getElementById('cf-lightbox');
    if (!lightbox) return;

    const closeBtn = lightbox.querySelector('[data-lb-close]');
    const prevBtn = lightbox.querySelector('[data-lb-prev]');
    const nextBtn = lightbox.querySelector('[data-lb-next]');
    const screen = lightbox.querySelector('[data-lb-screen]');
    const labelEl = lightbox.querySelector('[data-lb-label]');
    const captionEl = lightbox.querySelector('[data-lb-caption]');
    const countEl = lightbox.querySelector('[data-lb-count]');

    document.addEventListener('click', (e) => {
      const galleryItem = e.target.closest('.cf-gallery__item');
      const shotItem = e.target.closest('.cf-shots__item');

      if (galleryItem || shotItem) {
        const collection = galleryItem
          ? [...document.querySelectorAll('.cf-gallery__item')].filter((el) => el.dataset.gallery === galleryItem.dataset.gallery)
          : [...document.querySelectorAll('.cf-shots__item')];
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
      document.body.classList.add('cf-lightbox-locked');
      closeBtn?.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('cf-lightbox-locked');
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
      const label = item.querySelector('.cf-mock__label')?.textContent || '';
      const desc = item.querySelector('.cf-mock__figcaption-desc')?.textContent || '';

      screen.innerHTML = item.querySelector('.cf-mock__screen').outerHTML;
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

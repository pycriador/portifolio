/* ============================================
   GALLERY.JS — Tabs, Lightbox & Real Images
   ============================================ */

const Gallery = (() => {
  const collections = [
    { id: 'visao-geral', label: 'Visão Geral', items: [
      { label: 'Dashboard', desc: 'Visão consolidada de documentos e atividades recentes.', alt: 'Dashboard da Knowledge Platform com visão geral de documentos.', variant: 'wide' },
      { label: 'Atividades', desc: 'Fluxo de revisões e publicações recentes.', alt: 'Atividades recentes da Knowledge Platform.', variant: 'wide' }
    ]},
    { id: 'documentos', label: 'Documentos', items: [
      { label: 'Editor de Artigos', desc: 'Editor Markdown com preview em tempo real.', alt: 'Editor de artigos da Knowledge Platform.', variant: 'desktop' },
      { label: 'Procedimentos', desc: 'Passo a passo com checklist e responsáveis.', alt: 'Procedimentos técnicos da Knowledge Platform.', variant: 'wide' }
    ]},
    { id: 'catalogo', label: 'Catálogo', items: [
      { label: 'Equipamentos', desc: 'Catálogo de equipamentos com modelos e vínculos.', alt: 'Catálogo de equipamentos da Knowledge Platform.', variant: 'wide' },
      { label: 'Firmwares e Drivers', desc: 'Repositórios de compatibilidade e versões.', alt: 'Repositórios de firmware e drivers da Knowledge Platform.', variant: 'desktop' }
    ]},
    { id: 'ia', label: 'Inteligência Artificial', items: [
      { label: 'Busca Semântica', desc: 'Consulta por intenção com resultados relevantes.', alt: 'Busca semântica da Knowledge Platform.', variant: 'wide' },
      { label: 'Assistente IA', desc: 'Respostas com RAG citando documentos aprovados.', alt: 'Assistente IA da Knowledge Platform.', variant: 'wide' }
    ]},
    { id: 'temas', label: 'Temas', items: [
      { label: 'Dark Mode', desc: 'Tema escuro para longas sessões.', alt: 'Knowledge Platform no modo escuro.', variant: 'wide' },
      { label: 'Light Mode', desc: 'Tema claro e objetivo.', alt: 'Knowledge Platform no modo claro.', variant: 'wide' }
    ]},
    { id: 'dispositivos', label: 'Dispositivos', items: [
      { label: 'Desktop', desc: 'Experiência completa em telas amplas.', alt: 'Knowledge Platform em desktop.', variant: 'wide' },
      { label: 'Tablet', desc: 'Operação em telas intermediárias.', alt: 'Knowledge Platform em tablet.', variant: 'tablet' },
      { label: 'Mobile', desc: 'Consulta do conhecimento pelo celular.', alt: 'Knowledge Platform em mobile.', variant: 'mobile' }
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
    const root = document.getElementById('kp-gallery-root');
    if (!root) return;

    const tabList = document.createElement('div');
    tabList.className = 'kp-tabs';
    tabList.setAttribute('role', 'tablist');
    tabList.setAttribute('aria-label', 'Galeria do produto');

    const panels = document.createElement('div');
    panels.className = 'kp-tabs__panels';

    collections.forEach((col, ci) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'kp-tab';
      tab.id = `kp-tab-${col.id}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', `kp-panel-${col.id}`);
      tab.setAttribute('aria-selected', ci === 0 ? 'true' : 'false');
      tab.setAttribute('tabindex', ci === 0 ? '0' : '-1');
      tab.textContent = col.label;
      tabList.appendChild(tab);

      const panel = document.createElement('div');
      panel.className = `kp-tabs__panel${ci === 0 ? ' is-active' : ''}`;
      panel.id = `kp-panel-${col.id}`;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `kp-tab-${col.id}`);

      const grid = document.createElement('div');
      grid.className = 'kp-gallery__grid';

      grid.innerHTML = col.items.map((item, ii) => `
        <figure class="kp-gallery__item kp-mock kp-mock--${item.variant}" data-reveal data-gallery="${col.id}" data-index="${ii}" data-real-image="${realDir()}knowledge-platform-${col.id}-${ii + 1}.webp" tabindex="0" role="button" aria-label="Ampliar: ${item.alt}">
          <div class="kp-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="kp-mock__screen">
            <div class="kp-mock__screen-inner">
              <span class="kp-mock__icon" aria-hidden="true">${galleryIcon}</span>
              <span class="kp-mock__label">${item.label}</span>
              <span class="kp-mock__meta">placeholder — pronto para captura real</span>
            </div>
          </div>
          <figcaption class="kp-mock__figcaption">
            <span class="kp-mock__figcaption-title">${item.label}</span>
            <span class="kp-mock__figcaption-desc">${item.desc}</span>
          </figcaption>
        </figure>`).join('');

      panel.appendChild(grid);
      panels.appendChild(panel);
    });

    root.appendChild(tabList);
    root.appendChild(panels);
  }

  function initTabs() {
    const root = document.getElementById('kp-gallery-root');
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
      const screen = fig.querySelector('.kp-mock__screen');
      if (!screen) return;
      const caption = fig.querySelector('.kp-mock__label');
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
    lightbox = document.getElementById('kp-lightbox');
    if (!lightbox) return;

    const closeBtn = lightbox.querySelector('[data-lb-close]');
    const prevBtn = lightbox.querySelector('[data-lb-prev]');
    const nextBtn = lightbox.querySelector('[data-lb-next]');
    const screen = lightbox.querySelector('[data-lb-screen]');
    const labelEl = lightbox.querySelector('[data-lb-label]');
    const captionEl = lightbox.querySelector('[data-lb-caption]');
    const countEl = lightbox.querySelector('[data-lb-count]');

    document.addEventListener('click', (e) => {
      const galleryItem = e.target.closest('.kp-gallery__item');
      const shotItem = e.target.closest('.kp-shots__item');

      if (galleryItem || shotItem) {
        const collection = galleryItem
          ? [...document.querySelectorAll('.kp-gallery__item')].filter((el) => el.dataset.gallery === galleryItem.dataset.gallery)
          : [...document.querySelectorAll('.kp-shots__item')];
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
      document.body.classList.add('kp-lightbox-locked');
      closeBtn?.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('kp-lightbox-locked');
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
      const label = item.querySelector('.kp-mock__label')?.textContent || '';
      const desc = item.querySelector('.kp-mock__figcaption-desc')?.textContent || '';

      screen.innerHTML = item.querySelector('.kp-mock__screen').outerHTML;
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

/* ============================================
   GALLERY.JS — Tabs, Lightbox & Real Images
   ============================================ */

const Gallery = (() => {
  const collections = [
    { id: 'visao-geral', label: 'Visão Geral', items: [
      { label: 'Dashboard', desc: 'Métricas de qualidade e importações em tempo real.', alt: 'Dashboard do DataForge com métricas de qualidade e importações.', variant: 'wide' },
      { label: 'Monitoramento', desc: 'Acompanhamento de cargas em execução.', alt: 'Monitoramento de cargas do DataForge em execução.', variant: 'wide' }
    ]},
    { id: 'importacao', label: 'Importação', items: [
      { label: 'Importador', desc: 'Wizard com detecção automática de formato.', alt: 'Importador do DataForge com detecção automática de formato.', variant: 'desktop' },
      { label: 'Assistente de Mapeamento', desc: 'DE-PARA origem e destino lado a lado.', alt: 'Assistente de mapeamento DE-PARA do DataForge.', variant: 'wide' }
    ]},
    { id: 'governanca', label: 'Governança', items: [
      { label: 'Editor de Regras', desc: 'Regras de negócio e validação configuráveis.', alt: 'Editor de regras do DataForge.', variant: 'desktop' },
      { label: 'Validação', desc: 'Erros isolados por linha e coluna.', alt: 'Tela de validação do DataForge com erros isolados.', variant: 'wide' },
      { label: 'Histórico', desc: 'Histórico completo de importações e versões.', alt: 'Histórico de importações do DataForge.', variant: 'desktop' }
    ]},
    { id: 'temas', label: 'Temas', items: [
      { label: 'Dark Mode', desc: 'Tema escuro para longas sessões.', alt: 'DataForge no modo escuro.', variant: 'wide' },
      { label: 'Light Mode', desc: 'Tema claro e objetivo.', alt: 'DataForge no modo claro.', variant: 'wide' }
    ]},
    { id: 'dispositivos', label: 'Dispositivos', items: [
      { label: 'Desktop', desc: 'Experiência completa em telas amplas.', alt: 'DataForge em desktop.', variant: 'wide' },
      { label: 'Tablet', desc: 'Operação em telas intermediárias.', alt: 'DataForge em tablet.', variant: 'tablet' },
      { label: 'Mobile', desc: 'Acompanhamento pelo celular.', alt: 'DataForge em mobile.', variant: 'mobile' }
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
    const root = document.getElementById('df-gallery-root');
    if (!root) return;

    const tabList = document.createElement('div');
    tabList.className = 'df-tabs';
    tabList.setAttribute('role', 'tablist');
    tabList.setAttribute('aria-label', 'Galeria do produto');

    const panels = document.createElement('div');
    panels.className = 'df-tabs__panels';

    collections.forEach((col, ci) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'df-tab';
      tab.id = `df-tab-${col.id}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', `df-panel-${col.id}`);
      tab.setAttribute('aria-selected', ci === 0 ? 'true' : 'false');
      tab.setAttribute('tabindex', ci === 0 ? '0' : '-1');
      tab.textContent = col.label;
      tabList.appendChild(tab);

      const panel = document.createElement('div');
      panel.className = `df-tabs__panel${ci === 0 ? ' is-active' : ''}`;
      panel.id = `df-panel-${col.id}`;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `df-tab-${col.id}`);

      const grid = document.createElement('div');
      grid.className = 'df-gallery__grid';

      grid.innerHTML = col.items.map((item, ii) => `
        <figure class="df-gallery__item df-mock df-mock--${item.variant}" data-reveal data-gallery="${col.id}" data-index="${ii}" data-real-image="${realDir()}dataforge-${col.id}-${ii + 1}.webp" tabindex="0" role="button" aria-label="Ampliar: ${item.alt}">
          <div class="df-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="df-mock__screen">
            <div class="df-mock__screen-inner">
              <span class="df-mock__icon" aria-hidden="true">${galleryIcon}</span>
              <span class="df-mock__label">${item.label}</span>
              <span class="df-mock__meta">placeholder — pronto para captura real</span>
            </div>
          </div>
          <figcaption class="df-mock__figcaption">
            <span class="df-mock__figcaption-title">${item.label}</span>
            <span class="df-mock__figcaption-desc">${item.desc}</span>
          </figcaption>
        </figure>`).join('');

      panel.appendChild(grid);
      panels.appendChild(panel);
    });

    root.appendChild(tabList);
    root.appendChild(panels);
  }

  function initTabs() {
    const root = document.getElementById('df-gallery-root');
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
      const screen = fig.querySelector('.df-mock__screen');
      if (!screen) return;
      const caption = fig.querySelector('.df-mock__label');
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
    lightbox = document.getElementById('df-lightbox');
    if (!lightbox) return;

    const closeBtn = lightbox.querySelector('[data-lb-close]');
    const prevBtn = lightbox.querySelector('[data-lb-prev]');
    const nextBtn = lightbox.querySelector('[data-lb-next]');
    const screen = lightbox.querySelector('[data-lb-screen]');
    const labelEl = lightbox.querySelector('[data-lb-label]');
    const captionEl = lightbox.querySelector('[data-lb-caption]');
    const countEl = lightbox.querySelector('[data-lb-count]');

    document.addEventListener('click', (e) => {
      const galleryItem = e.target.closest('.df-gallery__item');
      const shotItem = e.target.closest('.df-shots__item');

      if (galleryItem || shotItem) {
        const collection = galleryItem
          ? [...document.querySelectorAll('.df-gallery__item')].filter((el) => el.dataset.gallery === galleryItem.dataset.gallery)
          : [...document.querySelectorAll('.df-shots__item')];
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
      document.body.classList.add('df-lightbox-locked');
      closeBtn?.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('df-lightbox-locked');
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
      const label = item.querySelector('.df-mock__label')?.textContent || '';
      const desc = item.querySelector('.df-mock__figcaption-desc')?.textContent || '';

      screen.innerHTML = item.querySelector('.df-mock__screen').outerHTML;
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

/* ============================================
   GALLERY.JS — Tabs, Lightbox & Real Images
   ============================================ */

const Gallery = (() => {
  const collections = [
    { id: 'editor', label: 'Editor', items: [
      { label: 'Spec Editor', desc: 'Edição com validação em tempo real.', alt: 'Editor de especificação do SpecForge com validação em tempo real.', variant: 'wide' },
      { label: 'Tree View', desc: 'Navegação por arquivos e contratos.', alt: 'Árvore de arquivos do SpecForge com estrutura de specs.', variant: 'desktop' },
      { label: 'AI Rail', desc: 'Assistente contextual ao lado do contrato.', alt: 'Painel de IA do SpecForge com sugestões ao lado do contrato.', variant: 'desktop' }
    ]},
    { id: 'cli', label: 'CLI', items: [
      { label: 'Pipeline Terminal', desc: 'Geração em um único comando.', alt: 'Pipeline do SpecForge rodando no terminal.', variant: 'wide' },
      { label: 'Diff de Contrato', desc: 'Comparação visual entre versões.', alt: 'Comparação de contrato do SpecForge entre versões.', variant: 'desktop' },
      { label: 'Watch Mode', desc: 'Regeneração automática a cada save.', alt: 'Modo watch do SpecForge regenerando artefatos a cada save.', variant: 'tablet' }
    ]},
    { id: 'artefatos', label: 'Artefatos', items: [
      { label: 'SDK TypeScript', desc: 'Tipos completos, zero `any`.', alt: 'SDK TypeScript gerado pelo SpecForge com tipos completos.', variant: 'wide' },
      { label: 'Documentação', desc: 'Docs vivas, sempre atuais.', alt: 'Documentação gerada pelo SpecForge a partir das specs.', variant: 'wide' },
      { label: 'Testes de Contrato', desc: 'Asserts e mocks automáticos.', alt: 'Testes de contrato gerados pelo SpecForge.', variant: 'desktop' }
    ]},
    { id: 'integracoes', label: 'Integrações', items: [
      { label: 'GitHub Actions', desc: 'Validação e publicação em CI.', alt: 'Pipeline de GitHub Actions do SpecForge.', variant: 'wide' },
      { label: 'Registry', desc: 'Catálogo de specs e versões.', alt: 'Registry do SpecForge com specs e versões.', variant: 'desktop' },
      { label: 'Mock Server', desc: 'Mocks prontos para testes e frontends.', alt: 'Mock server do SpecForge respondendo às APIs.', variant: 'desktop' }
    ]},
    { id: 'dark', label: 'Dark Mode', items: [
      { label: 'Interface Escura', desc: 'Tema escuro para longas sessões.', alt: 'SpecForge no modo escuro.', variant: 'wide' },
      { label: 'Preview Noturno', desc: 'Artefato e spec em contraste.', alt: 'Preview do SpecForge no modo escuro.', variant: 'tablet' }
    ]},
    { id: 'light', label: 'Light Mode', items: [
      { label: 'Interface Clara', desc: 'Leitura clara e objetiva.', alt: 'SpecForge no modo claro.', variant: 'wide' },
      { label: 'Console Claro', desc: 'CLI legível em qualquer ambiente.', alt: 'Console do SpecForge no modo claro.', variant: 'desktop' }
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
    const root = document.getElementById('spf-gallery-root');
    if (!root) return;

    const tabList = document.createElement('div');
    tabList.className = 'spf-tabs';
    tabList.setAttribute('role', 'tablist');
    tabList.setAttribute('aria-label', 'Galeria do produto');

    const panels = document.createElement('div');
    panels.className = 'spf-tabs__panels';

    collections.forEach((col, ci) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'spf-tab';
      tab.id = `spf-tab-${col.id}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', `spf-panel-${col.id}`);
      tab.setAttribute('aria-selected', ci === 0 ? 'true' : 'false');
      tab.setAttribute('tabindex', ci === 0 ? '0' : '-1');
      tab.textContent = col.label;
      tabList.appendChild(tab);

      const panel = document.createElement('div');
      panel.className = `spf-tabs__panel${ci === 0 ? ' is-active' : ''}`;
      panel.id = `spf-panel-${col.id}`;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `spf-tab-${col.id}`);

      const grid = document.createElement('div');
      grid.className = 'spf-gallery__grid';

      grid.innerHTML = col.items.map((item, ii) => `
        <figure class="spf-gallery__item spf-mock spf-mock--${item.variant}" data-reveal data-gallery="${col.id}" data-index="${ii}" data-real-image="${realDir()}specforge-${col.id}-${ii + 1}.webp" tabindex="0" role="button" aria-label="Ampliar: ${item.alt}">
          <div class="spf-mock__chrome" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="spf-mock__screen">
            <div class="spf-mock__screen-inner">
              <span class="spf-mock__icon" aria-hidden="true">${galleryIcon}</span>
              <span class="spf-mock__label">${item.label}</span>
              <span class="spf-mock__meta">placeholder — pronto para captura real</span>
            </div>
          </div>
          <figcaption class="spf-mock__figcaption">
            <span class="spf-mock__figcaption-title">${item.label}</span>
            <span class="spf-mock__figcaption-desc">${item.desc}</span>
          </figcaption>
        </figure>`).join('');

      panel.appendChild(grid);
      panels.appendChild(panel);
    });

    root.appendChild(tabList);
    root.appendChild(panels);
  }

  function initTabs() {
    const root = document.getElementById('spf-gallery-root');
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
      const screen = fig.querySelector('.spf-mock__screen');
      if (!screen) return;
      const caption = fig.querySelector('.spf-mock__label');
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
    lightbox = document.getElementById('spf-lightbox');
    if (!lightbox) return;

    const closeBtn = lightbox.querySelector('[data-lb-close]');
    const prevBtn = lightbox.querySelector('[data-lb-prev]');
    const nextBtn = lightbox.querySelector('[data-lb-next]');
    const screen = lightbox.querySelector('[data-lb-screen]');
    const labelEl = lightbox.querySelector('[data-lb-label]');
    const captionEl = lightbox.querySelector('[data-lb-caption]');
    const countEl = lightbox.querySelector('[data-lb-count]');

    document.addEventListener('click', (e) => {
      const galleryItem = e.target.closest('.spf-gallery__item');
      const shotItem = e.target.closest('.spf-shots__item');

      if (galleryItem || shotItem) {
        const collection = galleryItem
          ? [...document.querySelectorAll('.spf-gallery__item')].filter((el) => el.dataset.gallery === galleryItem.dataset.gallery)
          : [...document.querySelectorAll('.spf-shots__item')];
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
      document.body.classList.add('spf-lightbox-locked');
      closeBtn?.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('spf-lightbox-locked');
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
      const label = item.querySelector('.spf-mock__label')?.textContent || '';
      const desc = item.querySelector('.spf-mock__figcaption-desc')?.textContent || '';

      screen.innerHTML = item.querySelector('.spf-mock__screen').outerHTML;
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

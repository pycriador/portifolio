/* ============================================
   RELATIONSHIPS.JS — Knowledge Relationships Flow
   ============================================ */

const Relationships = (() => {
  const nodes = [
    { step: '01', name: 'Equipamento', desc: 'O ativo físico que dá início ao vínculo de conhecimento.', icon: 'gear' },
    { step: '02', name: 'Modelo', desc: 'Variante específica com specs e compatibilidades próprias.', icon: 'layers' },
    { step: '03', name: 'Firmware', desc: 'Versões de firmware homologadas para o modelo.', icon: 'download' },
    { step: '04', name: 'Driver', desc: 'Drivers compatíveis por sistema operacional.', icon: 'plug' },
    { step: '05', name: 'Manual', desc: 'Manual do usuário e manual técnico vinculados.', icon: 'book' },
    { step: '06', name: 'Diagrama Elétrico', desc: 'Diagramas de ligação e esquemáticos do modelo.', icon: 'map' },
    { step: '07', name: 'Procedimento Técnico', desc: 'Passo a passo de instalação, operação e manutenção.', icon: 'workflow' },
    { step: '08', name: 'Problemas Conhecidos', desc: 'Falhas documentadas com sintomas e workarounds.', icon: 'alert' },
    { step: '09', name: 'Soluções', desc: 'Artigos de solução com causa raiz e correção.', icon: 'check' },
    { step: '10', name: 'Artigos Relacionados', desc: 'Conteúdo adicional conectado por tema e similaridade.', icon: 'file' }
  ];

  const arrowSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

  function render() {
    const wrap = document.getElementById('kp-rel-list');
    if (!wrap) return;

    wrap.innerHTML = nodes.map((n, i) => `
      <li class="kp-rel__item">
        <div class="kp-rel__card" data-reveal>
          <span class="kp-rel__icon" aria-hidden="true">${KnowledgePlatform.icon(n.icon)}</span>
          <span class="kp-rel__num">${n.step}</span>
          <span class="kp-rel__name">${n.name}</span>
          <span class="kp-rel__desc">${n.desc}</span>
        </div>
        ${i < nodes.length - 1 ? `<span class="kp-rel__arrow" aria-hidden="true">${arrowSvg}</span>` : ''}
      </li>`).join('');
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

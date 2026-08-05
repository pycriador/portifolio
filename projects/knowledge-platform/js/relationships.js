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

  function render() {
    const wrap = document.getElementById('kp-rel-list');
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="kp-rel__line" aria-hidden="true"></div>
      ${nodes.map((n) => `
        <li class="kp-rel__item">
          <div class="kp-rel__card" data-reveal>
            <span class="kp-rel__step">Etapa ${n.step}</span>
            <span class="kp-rel__name">${n.name}</span>
            <span class="kp-rel__desc">${n.desc}</span>
          </div>
          <span class="kp-rel__pin" aria-hidden="true">${n.step}</span>
        </li>`).join('')}`;
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

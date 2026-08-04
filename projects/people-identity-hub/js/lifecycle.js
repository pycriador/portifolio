/* ============================================
   LIFECYCLE.JS — Identity Lifecycle Flow
   ============================================ */

const Lifecycle = (() => {
  const steps = [
    { step: '01', name: 'Recrutamento', desc: 'A vaga e o candidato abrem o primeiro contexto da identidade futura.', icon: 'search' },
    { step: '02', name: 'Admissão', desc: 'O RH registra o colaborador na fonte oficial de dados.', icon: 'user-plus' },
    { step: '03', name: 'Cadastro', desc: 'A identidade canônica é criada no Identity Registry.', icon: 'fingerprint' },
    { step: '04', name: 'Provisionamento', desc: 'Contas e acessos são criados automaticamente nos sistemas.', icon: 'api' },
    { step: '05', name: 'Sincronização', desc: 'Dados funcionais fluem para diretórios e aplicações.', icon: 'sync' },
    { step: '06', name: 'Atualizações', desc: 'Alterações cadastrais e funcionais são propagadas em tempo real.', icon: 'history' },
    { step: '07', name: 'Mudança de Área', desc: 'Transferências ajustam departamentos, grupos e acessos.', icon: 'briefcase' },
    { step: '08', name: 'Desligamento', desc: 'O RH registra a saída e inicia a revogação de acessos.', icon: 'user-minus' },
    { step: '09', name: 'Desprovisionamento', desc: 'Acessos são revogados automaticamente em todos os sistemas.', icon: 'lock' },
    { step: '10', name: 'Auditoria', desc: 'Toda a jornada fica registrada na trilha imutável.', icon: 'eye' }
  ];

  const arrowSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';

  function render() {
    const wrap = document.getElementById('pih-lifecycle-list');
    if (!wrap) return;

    wrap.innerHTML = steps.map((n, i) => `
      <li class="pih-lifecycle__item">
        <div class="pih-lifecycle__card" data-reveal>
          <span class="pih-lifecycle__icon-wrap" aria-hidden="true">${PeopleIdentityHub.icon(n.icon)}</span>
          <span class="pih-lifecycle__num">${n.step}</span>
          <span class="pih-lifecycle__name">${n.name}</span>
          <span class="pih-lifecycle__desc">${n.desc}</span>
        </div>
        ${i < steps.length - 1 ? `<span class="pih-lifecycle__arrow" aria-hidden="true">${arrowSvg}</span>` : ''}
      </li>`).join('');
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

/* ============================================
   INTEGRATION-FLOW.JS — Integration Flow Steps
   ============================================ */

const IntegrationFlow = (() => {
  const steps = [
    { step: '01', name: 'Aplicação Origem', desc: 'Sistema de origem publica dados, eventos ou requisições.', icon: 'send' },
    { step: '02', name: 'API Gateway', desc: 'Barramento recebe a chamada e autentica a origem.', icon: 'gateway' },
    { step: '03', name: 'Transformação', desc: 'Payloads convertidos e normalizados para o contrato de destino.', icon: 'transform' },
    { step: '04', name: 'Validação', desc: 'Regras conferem obrigatoriedade, formato e consistência.', icon: 'check' },
    { step: '05', name: 'Fila', desc: 'Mensagem persistida para processamento assíncrono e resiliente.', icon: 'inbox' },
    { step: '06', name: 'Roteamento', desc: 'Evento roteado por regras para o destino correto.', icon: 'router' },
    { step: '07', name: 'Entrega', desc: 'Sistema de destino recebe os dados com retry automático.', icon: 'plug' },
    { step: '08', name: 'Auditoria', desc: 'Trilha imutável registra cada etapa do fluxo.', icon: 'eye' },
    { step: '09', name: 'Monitoramento', desc: 'Métricas e alertas acompanham a saúde da integração.', icon: 'monitor' }
  ];

  const arrowSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';

  function render() {
    const wrap = document.getElementById('ih-flow-list');
    if (!wrap) return;

    wrap.innerHTML = steps.map((n, i) => `
      <li class="ih-flow__item">
        <div class="ih-flow__card" data-reveal>
          <span class="ih-flow__icon" aria-hidden="true">${IntegrationHub.icon(n.icon)}</span>
          <span class="ih-flow__num">${n.step}</span>
          <span class="ih-flow__name">${n.name}</span>
          <span class="ih-flow__desc">${n.desc}</span>
        </div>
        ${i < steps.length - 1 ? `<span class="ih-flow__arrow" aria-hidden="true">${arrowSvg}</span>` : ''}
      </li>`).join('');
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

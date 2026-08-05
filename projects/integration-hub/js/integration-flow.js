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

  function render() {
    const wrap = document.getElementById('ih-flow-list');
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="ih-flow__line" aria-hidden="true"></div>
      ${steps.map((n) => `
        <li class="ih-flow__item">
          <div class="ih-flow__card" data-reveal>
            <span class="ih-flow__step">Etapa ${n.step}</span>
            <span class="ih-flow__name">${n.name}</span>
            <span class="ih-flow__desc">${n.desc}</span>
          </div>
          <span class="ih-flow__pin" aria-hidden="true">${n.step}</span>
        </li>`).join('')}`;
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

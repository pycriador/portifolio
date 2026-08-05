/* ============================================
   NOTIFICATION-FLOW.JS — Notification Flow Steps
   ============================================ */

const NotificationFlow = (() => {
  const steps = [
    { step: '01', name: 'Aplicação', desc: 'Sistema de origem dispara a notificação via API, webhook ou SDK.', icon: 'send' },
    { step: '02', name: 'Communication Platform', desc: 'Plataforma recebe, autentica e enfileira a requisição.', icon: 'gateway' },
    { step: '03', name: 'Validação', desc: 'Campos obrigatórios, formato e regras de negócio são conferidos.', icon: 'check' },
    { step: '04', name: 'Template', desc: 'Mensagem renderizada a partir do template de cada canal.', icon: 'edit' },
    { step: '05', name: 'Fila', desc: 'Notificação persistida para processamento assíncrono e resiliente.', icon: 'inbox' },
    { step: '06', name: 'Canal', desc: 'Roteador seleciona o canal e aplica regras de precedência.', icon: 'router' },
    { step: '07', name: 'Entrega', desc: 'Provedor externo recebe a mensagem com retry automático.', icon: 'plug' },
    { step: '08', name: 'Confirmação', desc: 'Webhook de status confirma entrega, falha ou bounce.', icon: 'check' },
    { step: '09', name: 'Auditoria', desc: 'Trilha imutável registra cada etapa da notificação.', icon: 'eye' },
    { step: '10', name: 'Analytics', desc: 'Métricas de entrega e engajamento alimentam dashboards.', icon: 'monitor' }
  ];

  function render() {
    const wrap = document.getElementById('cp-flow-list');
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="cp-flow__line" aria-hidden="true"></div>
      ${steps.map((n) => `
        <li class="cp-flow__item">
          <div class="cp-flow__card" data-reveal>
            <span class="cp-flow__step">Etapa ${n.step}</span>
            <span class="cp-flow__name">${n.name}</span>
            <span class="cp-flow__desc">${n.desc}</span>
          </div>
          <span class="cp-flow__pin" aria-hidden="true">${n.step}</span>
        </li>`).join('')}`;
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

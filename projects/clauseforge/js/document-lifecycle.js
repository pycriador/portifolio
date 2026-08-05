/* ============================================
   DOCUMENT-LIFECYCLE.JS — Document Lifecycle Flow
   ============================================ */

const DocumentLifecycle = (() => {
  const steps = [
    { step: '01', name: 'Modelo', desc: 'Templates de documentos modelados com variáveis e regras.', icon: 'file' },
    { step: '02', name: 'Preenchimento', desc: 'Variáveis e campos preenchidos por formulários e integrações.', icon: 'variable' },
    { step: '03', name: 'Validação', desc: 'Regras e condicionais conferem cláusulas, seções e obrigatoriedade.', icon: 'check' },
    { step: '04', name: 'Pré-visualização', desc: 'Preview fiel do documento final antes da submissão.', icon: 'eye' },
    { step: '05', name: 'Aprovação', desc: 'Fluxos em cadeia com escopos, prazos e notificações.', icon: 'workflow' },
    { step: '06', name: 'Versionamento', desc: 'Cada alteração vira uma versão rastreável com diff e rollback.', icon: 'history' },
    { step: '07', name: 'Publicação', desc: 'Documento aprovado publicado como versão vigente.', icon: 'send' },
    { step: '08', name: 'Distribuição', desc: 'Envio e compartilhamento com assinatura e exportação.', icon: 'download' },
    { step: '09', name: 'Arquivamento', desc: 'Armazenamento seguro com políticas de retenção.', icon: 'container' },
    { step: '10', name: 'Auditoria', desc: 'Trilha imutável de todo o ciclo de vida documental.', icon: 'shield' }
  ];

  function render() {
    const wrap = document.getElementById('cf-flow-list');
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="cf-flow__line" aria-hidden="true"></div>
      ${steps.map((n) => `
        <li class="cf-flow__item">
          <div class="cf-flow__card" data-reveal>
            <span class="cf-flow__step">Etapa ${n.step}</span>
            <span class="cf-flow__name">${n.name}</span>
            <span class="cf-flow__desc">${n.desc}</span>
          </div>
          <span class="cf-flow__pin" aria-hidden="true">${n.step}</span>
        </li>`).join('')}`;
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

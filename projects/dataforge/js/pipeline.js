/* ============================================
   PIPELINE.JS — DataForge Processing Pipeline
   ============================================ */

const Pipeline = (() => {
  const steps = [
    { step: '01', name: 'Fonte de Dados', desc: 'Dados chegam de planilhas, bancos, APIs, webhooks ou arquivos.' },
    { step: '02', name: 'Importação', desc: 'Parsing com detecção de formato, encoding, delimitador e abas.' },
    { step: '03', name: 'Validação', desc: 'Regras de estrutura e qualidade com erros isolados por linha.' },
    { step: '04', name: 'Transformação', desc: 'Normalização, derivação e limpeza entre origem e destino.' },
    { step: '05', name: 'Aplicação de Regras', desc: 'Regras de negócio configuráveis aplicadas antes da persistência.' },
    { step: '06', name: 'Aprovação', desc: 'Fluxo de aprovação obrigatório para qualquer carga.' },
    { step: '07', name: 'Persistência', desc: 'Gravação versionada no banco multi-tenant.' },
    { step: '08', name: 'Auditoria', desc: 'Trilha imutável de operação, aprovador e versão.' },
    { step: '09', name: 'Relatórios', desc: 'Dashboards e relatórios construídos sobre dados governados.' },
    { step: '10', name: 'Integrações', desc: 'Consumo e compartilhamento via REST, webhooks e exportações.' }
  ];

  function render() {
    const wrap = document.getElementById('df-pipeline-list');
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="df-pipeline__line" aria-hidden="true"></div>
      ${steps.map((s) => `
        <li class="df-pipeline__item">
          <div class="df-pipeline__card" data-reveal>
            <span class="df-pipeline__step">Etapa ${s.step}</span>
            <span class="df-pipeline__name">${s.name}</span>
            <span class="df-pipeline__desc">${s.desc}</span>
          </div>
          <span class="df-pipeline__pin" aria-hidden="true">${s.step}</span>
        </li>`).join('')}`;
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

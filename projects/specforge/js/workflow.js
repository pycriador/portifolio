/* ============================================
   WORKFLOW.JS — SpecForge Pipeline Steps
   ============================================ */

const Workflow = (() => {
  const steps = [
    { step: '01', name: 'Idea', desc: 'O ponto de partida: uma necessidade de negócio ou mudança planejada.' },
    { step: '02', name: 'Specification', desc: 'Contrato declarativo escrito uma vez, com schema, regras e exemplos.' },
    { step: '03', name: 'Architecture', desc: 'Desenho dirigido por regras, com linting de contrato e conformidade.' },
    { step: '04', name: 'Database', desc: 'Schemas e migrations derivados diretamente da especificação.' },
    { step: '05', name: 'APIs', desc: 'Contratos REST/OpenAPI gerados e versionados automaticamente.' },
    { step: '06', name: 'Prompts', desc: 'Templates de IA versionados e testáveis para o contexto do contrato.' },
    { step: '07', name: 'Implementation', desc: 'Código consumindo SDKs type-safe gerados pela spec.' },
    { step: '08', name: 'Tests', desc: 'Testes de contrato e mocks gerados para validar conformidade.' },
    { step: '09', name: 'Delivery', desc: 'CI/CD valida, gera e publica artefatos em cada merge.' },
    { step: '10', name: 'Documentation', desc: 'Documentação viva, atualizada sem esforço manual.' },
    { step: '11', name: 'Evolution', desc: 'Mudanças entram como novas versões de spec, sem quebrar contratos.' }
  ];

  function render() {
    const wrap = document.getElementById('spf-flow-list');
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="spf-flow__line" aria-hidden="true"></div>
      ${steps.map((s) => `
        <li class="spf-flow__item">
          <div class="spf-flow__card" data-reveal>
            <span class="spf-flow__step">Passo ${s.step}</span>
            <span class="spf-flow__name">${s.name}</span>
            <span class="spf-flow__desc">${s.desc}</span>
          </div>
          <span class="spf-flow__pin" aria-hidden="true">${s.step}</span>
        </li>`).join('')}`;
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

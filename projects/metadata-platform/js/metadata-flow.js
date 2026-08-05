/* ============================================
   METADATA-FLOW.JS — Metadata Lifecycle Flow
   ============================================ */

const MetadataFlow = (() => {
  const steps = [
    { step: '01', name: 'Definição', desc: 'Metadados descrevem telas, tabelas e regras de forma declarativa.', icon: 'edit' },
    { step: '02', name: 'Versionamento', desc: 'Cada alteração vira uma nova versão rastreável dos metadados.', icon: 'history' },
    { step: '03', name: 'Publicação', desc: 'Versões aprovadas são publicadas em ambientes sem recompilar código.', icon: 'send' },
    { step: '04', name: 'Renderização', desc: 'A engine converte metadados em formulários e tabelas em tempo real.', icon: 'layout' },
    { step: '05', name: 'Validação', desc: 'Regras e validações são aplicadas automaticamente sobre os campos.', icon: 'check' },
    { step: '06', name: 'Execução', desc: 'Workflows e regras de negócio executam sobre os dados de forma dinâmica.', icon: 'play' },
    { step: '07', name: 'Auditoria', desc: 'Toda execução e alteração fica registrada na trilha imutável.', icon: 'eye' },
    { step: '08', name: 'Evolução', desc: 'Novos metadados entram em produção sem downtime e sem deploy.', icon: 'refresh' }
  ];

  function render() {
    const wrap = document.getElementById('mp-flow-list');
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="mp-flow__line" aria-hidden="true"></div>
      ${steps.map((n) => `
        <li class="mp-flow__item">
          <div class="mp-flow__card" data-reveal>
            <span class="mp-flow__step">Etapa ${n.step}</span>
            <span class="mp-flow__name">${n.name}</span>
            <span class="mp-flow__desc">${n.desc}</span>
          </div>
          <span class="mp-flow__pin" aria-hidden="true">${n.step}</span>
        </li>`).join('')}`;
  }

  function init() {
    render();
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  return { init };
})();

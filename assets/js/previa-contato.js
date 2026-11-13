/* PREVIA · botao flutuante de contato (todas as paginas). Abre um painel com os canais; some quando o rodape esta na tela. */
(function () {
  'use strict';
  if (document.querySelector('.hm-fab-wrap')) return;
  var LINKS = [
    ['WhatsApp', 'https://wa.me/5514991394590'], ['E-mail', 'mailto:henriquemarinhos@icloud.com'],
    ['LinkedIn', 'https://www.linkedin.com/in/henrique-marinhos/'],
    ['Behance', 'https://www.behance.net/henriquemarinhos'],
    ['Lattes', 'http://lattes.cnpq.br/8181966688647381']
  ];
  var T = { btn: { pt: 'Contato', en: 'Contact', es: 'Contacto' }, h: { pt: 'Vamos trabalhar juntos?', en: "Let's work together?", es: '¿Trabajamos juntos?' }, close: { pt: 'Fechar', en: 'Close', es: 'Cerrar' } };
  var lang = function () { var l = (document.documentElement.lang || 'pt').slice(0, 2).toLowerCase(); return T.btn[l] ? l : 'pt'; };
  var css = '.hm-fab-wrap{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:1400;display:flex;flex-direction:column;align-items:flex-end;gap:10px;font-family:Inter,system-ui,sans-serif;transition:opacity .3s,transform .4s cubic-bezier(.22,1,.36,1)}' +
    '.hm-fab-wrap.is-off{opacity:0;transform:translateY(12px);pointer-events:none}' +
    'body[style*="overflow: hidden"] .hm-fab-wrap,header.menu-open~.hm-fab-wrap{opacity:0;pointer-events:none}' +
    '.hm-fab{display:grid;place-items:center;width:52px;height:52px;padding:0;border:0;border-radius:50%;background:var(--ink,#111);color:var(--white,#fff);cursor:pointer;box-shadow:0 10px 28px -10px rgba(0,0,0,.45);transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s}' +
    '.hm-fab:hover{transform:translateY(-2px) scale(1.05);box-shadow:0 16px 34px -12px rgba(0,0,0,.5)}.hm-fab:focus-visible{outline:2px solid var(--ink,#111);outline-offset:3px}' +
    '.hm-fab svg{width:24px;height:24px;display:block;transition:transform .35s cubic-bezier(.22,1,.36,1)}.hm-fab:hover svg{transform:rotate(-8deg)}' +
    '.hm-fab-panel{width:min(280px,calc(100vw - 32px));padding:6px 18px;border-radius:14px;background:var(--white,#fff);color:var(--ink,#111);border:1px solid var(--gray-200,#e5e5e5);box-shadow:0 24px 60px -20px rgba(0,0,0,.35);transform-origin:100% 100%;animation:hm-pop .35s cubic-bezier(.22,1,.36,1) both}' +
    '.hm-fab-panel[hidden]{display:none}@keyframes hm-pop{from{opacity:0;transform:translateY(10px) scale(.96)}}' +
    '.hm-fab-h{font-size:17px;font-weight:300;letter-spacing:-.02em;margin:0 0 8px}' +
    '.hm-fab-panel a:first-child{border-top:0}.hm-fab-panel a{display:flex;justify-content:space-between;align-items:center;min-height:44px;border-top:1px solid var(--gray-200,#e5e5e5);font-size:15px;color:inherit;text-decoration:none;animation:hm-item .45s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(var(--i)*35ms + 80ms)}' +
    '.hm-fab-panel a:focus:not(:focus-visible){outline:none}' +
    '.hm-fab-panel a::after{content:"\\2197";color:var(--gray-600,#767676);transition:transform .25s}.hm-fab-panel a:hover::after{transform:translate(2px,-2px);color:inherit}' +
    '@keyframes hm-item{from{opacity:0;transform:translateY(6px)}}' +
    '@media (prefers-reduced-motion:reduce){.hm-fab-panel,.hm-fab-panel a{animation:none}.hm-fab-wrap,.hm-fab,.hm-fab svg{transition:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var wrap = document.createElement('div'); wrap.className = 'hm-fab-wrap';
  wrap.innerHTML = '<div class="hm-fab-panel" id="hm-fab-panel" role="dialog" hidden><nav>' +
    LINKS.map(function (l, i) { return '<a style="--i:' + i + '" href="' + l[1] + '"' + (l[1].indexOf('mailto:') ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + l[0] + '</a>'; }).join('') +
    '</nav></div><button type="button" class="hm-fab" aria-expanded="false" aria-controls="hm-fab-panel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.5c0 4.1-3.8 7.5-8.5 7.5-1.2 0-2.3-.2-3.300-.6L4 20l1.300-3.600C4.200 15.100 3.500 13.400 3.500 11.500 3.500 7.400 7.300 4 12 4s8.500 3.400 8.500 7.500z"/></svg></button>';
  document.body.appendChild(wrap);
  var btn = wrap.querySelector('.hm-fab'), panel = wrap.querySelector('.hm-fab-panel');
  var paint = function () { var l = lang(); btn.setAttribute('aria-label', T.btn[l]); btn.title = T.btn[l]; panel.setAttribute('aria-label', T.btn[l]); };
  var set = function (open, kb) { paint(); panel.hidden = !open; btn.setAttribute('aria-expanded', String(open)); if (open && kb !== false) { var a = panel.querySelector('a'); if (a) a.focus({ preventScroll: true }); } };
  paint();
  new MutationObserver(paint).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  btn.addEventListener('click', function (e) { set(panel.hidden, e.detail === 0); }); /* mouse/toque: não foca o 1º link (sem contorno); teclado: foca */
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { set(false); btn.focus(); } });
  document.addEventListener('click', function (e) {
    var nav = e.target.closest && e.target.closest('[data-nav-id="contato"],[data-nav="contact"]');
    if (nav && !nav.closest('.menu-open')) { e.preventDefault(); e.stopPropagation(); wrap.classList.remove('is-off'); set(true); return; } // "Contato" do menu abre o painel, sem sair da pagina
    if (!panel.hidden && !wrap.contains(e.target)) set(false);
  }, true);
  var foot = document.getElementById('contato');
  if (foot && 'IntersectionObserver' in window) new IntersectionObserver(function (es) { var on = es[0].isIntersecting; wrap.classList.toggle('is-off', on); if (on) set(false); }, { threshold: 0.25 }).observe(foot);
})();

/* PREVIA · botao flutuante de voltar ao topo (celular) some quando o do rodape esta na tela e quando o menu esta aberto */
(function () {
  var st = document.createElement('style');
  st.textContent = 'body.pv-at-foot .mobile-top-button, body:has(.menu-open) .mobile-top-button{display:none!important}';
  document.head.appendChild(st);
  var t = document.querySelector('.top-before-contact'), f = document.getElementById('contato');
  if (!('IntersectionObserver' in window) || (!t && !f)) return;
  var on = {}, set = function (k, v) { on[k] = v; document.body.classList.toggle('pv-at-foot', !!(on.t || on.f)); };
  if (t) new IntersectionObserver(function (es) { set('t', es[0].isIntersecting); }).observe(t);
  if (f) new IntersectionObserver(function (es) { set('f', es[0].isIntersecting); }, { threshold: 0.05 }).observe(f);
})();

/* Estatísticas privadas (GoatCounter): sem cookies, sem dados pessoais, painel só com login.
   Painel: https://henriquemarinhos.goatcounter.com  (conta criada pelo dono com o código "henriquemarinhos")
   Conta: visitas por página (inclusive navegação interna Início/Projetos/Artigos/Sobre e artigos abertos)
   e eventos "compartilhar" (botões de compartilhar), com o endereço compartilhado no título.
   Não conta: localhost, e quem ativou "Do Not Track"/"Global Privacy Control" no navegador. */
(function () {
  if (/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)) return;
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl) return;
  var last = location.pathname;
  window.goatcounter = { no_onload: false, allow_local: false };
  var s = document.createElement('script');
  s.async = true; s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://henriquemarinhos.goatcounter.com/count');
  document.head.appendChild(s);
  var count = function (o) { try { window.goatcounter && window.goatcounter.count && window.goatcounter.count(o); } catch (e) {} };
  // navegação interna (pushState): conta a nova rota uma vez
  var onRoute = function () { if (location.pathname === last) return; last = location.pathname; count({ path: location.pathname }); };
  ['pushState', 'replaceState'].forEach(function (k) { var o = history[k]; history[k] = function () { var r = o.apply(this, arguments); setTimeout(onRoute, 0); return r; }; });
  addEventListener('popstate', onRoute);
  // compartilhamentos
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.am-share, .pv-share, #project-share')) return;
    count({ path: 'compartilhar' + location.pathname, title: 'Compartilhou ' + location.pathname, event: true });
  }, true);
})();

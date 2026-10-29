/* Modo noturno automático: 18h–6h escuro, 6h–18h claro (hora local do visitante).
   O switch força o outro tema só até a próxima virada (6h ou 18h); depois volta ao automático.
   Carregar no <head> sem defer, para não piscar o tema errado. */
(function () {
  var KEY = 'hm-tema', root = document.documentElement;

  var autoTheme = function (d) { var h = d.getHours(); return (h >= 18 || h < 6) ? 'dark' : 'light'; };
  var nextBoundary = function (d) {
    var n = new Date(d), h = d.getHours();
    if (h >= 6 && h < 18) n.setHours(18, 0, 0, 0);
    else { if (h >= 18) n.setDate(n.getDate() + 1); n.setHours(6, 0, 0, 0); }
    return n.getTime();
  };
  var readOverride = function () {
    try {
      var o = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (o && o.until > Date.now()) return o.theme;
      localStorage.removeItem(KEY);
    } catch (e) {}
    return null;
  };
  var current = function () { return readOverride() || autoTheme(new Date()); };

  var apply = function (t) {
    root.setAttribute('data-theme', t);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', t === 'dark' ? '#121212' : '#ffffff');
    document.querySelectorAll('.theme-switch').forEach(function (b) {
      b.setAttribute('aria-checked', String(t === 'dark'));
      b.setAttribute('aria-label', label());
    });
  };
  // rótulo acessível em PT/EN/ES, conforme o idioma ativo do site
  var label = function () {
    var l = (root.lang || 'pt').slice(0, 2);
    return l === 'en' ? 'Night mode' : l === 'es' ? 'Modo nocturno' : 'Modo noturno';
  };

  apply(current()); // antes da primeira pintura

  var ICON =
    '<svg class="ts-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
    '<svg class="ts-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' +
    '<span class="ts-knob" aria-hidden="true"></span>';

  var makeSwitch = function () {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'theme-switch'; b.setAttribute('role', 'switch');
    b.innerHTML = ICON;
    b.addEventListener('click', function () {
      var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try {
        if (t === autoTheme(new Date())) localStorage.removeItem(KEY); // voltou ao automático
        else localStorage.setItem(KEY, JSON.stringify({ theme: t, until: nextBoundary(new Date()) }));
      } catch (e) {}
      apply(t);
    });
    return b;
  };

  var mount = function () {
    // à esquerda do nome em cada cabeçalho (home, projeto, cliente)
    document.querySelectorAll('.brand-name, a.brand').forEach(function (el) {
      var block = el.closest('.brand-collapse-inner, .project-brand') || el;
      var host = block.parentNode;
      if (!host || host.querySelector(':scope > .theme-switch')) return;
      if (block.matches('a.brand')) { // cliente.html: agrupa switch + nome num só item do flex
        var w = document.createElement('div');
        w.className = 'header-left'; w.style.display = 'flex';
        host.insertBefore(w, block); w.appendChild(block); host = w;
      }
      host.insertBefore(makeSwitch(), host.firstChild === block ? block : host.firstChild);
    });
    apply(root.getAttribute('data-theme'));
    // atualiza o rótulo quando o idioma muda
    new MutationObserver(function () { apply(root.getAttribute('data-theme')); })
      .observe(root, { attributes: true, attributeFilter: ['lang'] });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();

  // vira sozinho às 6h/18h com a página aberta
  setInterval(function () { var t = current(); if (t !== root.getAttribute('data-theme')) apply(t); }, 60000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) apply(current()); });
})();

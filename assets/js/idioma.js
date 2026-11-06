/* Idioma no endereço: PT sem prefixo (/projetos/rino/), EN e ES com prefixo (/en/projetos/rino/, /es/...).
   Carregado no <head> de index.html e projeto.html, antes de tudo.
   - HMI.path(): caminho sem o prefixo, para as rotas internas continuarem iguais
   - HMI.with(path, lang): caminho com o prefixo do idioma
   - HMI.initial(): idioma do endereço > escolha feita na bandeira > idioma do aparelho > PT (robôs: PT)
   - HMI.sync(lang, save): ajusta endereço, canonical, hreflang e links internos ao idioma
   pushState/replaceState recebem o prefixo sozinhos, então o resto do código usa caminhos sem idioma. */
(function () {
  var SITE = 'https://henrictrl.github.io', LANGS = ['pt', 'en', 'es'], KEY = 'hm-idioma'; // chave nova: 'hm-lang' antiga guardava /es/ visitado como escolha e travava o site em espanhol
  var PREFIX = /^\/(en|es)(?=\/|$)/;
  var cur = 'pt';
  var strip = function (p) { return (p || '/').replace(PREFIX, '') || '/'; };
  var withLang = function (p, l) { p = strip(p); l = l || cur; return l === 'pt' ? p : '/' + l + p; };
  var fromPath = function () { var m = location.pathname.match(PREFIX); return m ? m[1] : null; };
  var BOT = /bot|crawl|spider|slurp|facebookexternalhit|embedly|whatsapp|preview/i;

  var initial = function () {
    var p = fromPath(); if (p) return p;
    try { localStorage.removeItem('hm-lang'); var s = localStorage.getItem(KEY); if (LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    if (BOT.test(navigator.userAgent)) return 'pt';
    // idioma do aparelho: primeiro da lista que o site tenha; sem informação ou sem suporte, PT
    var nav = navigator.languages && navigator.languages.length ? navigator.languages : (navigator.language ? [navigator.language] : []);
    for (var i = 0; i < nav.length; i++) { var v = String(nav[i]).toLowerCase().slice(0, 2); if (LANGS.indexOf(v) >= 0) return v; }
    return 'pt';
  };

  // caminhos internos ganham o prefixo do idioma atual (o código do site continua passando caminhos sem idioma)
  var fix = function (url) {
    if (typeof url !== 'string' || url.charAt(0) !== '/' || url.charAt(1) === '/' || /^\/assets\//.test(url)) return url;
    var m = url.match(/^([^?#]*)(.*)$/);
    return withLang(m[1]) + m[2];
  };
  ['pushState', 'replaceState'].forEach(function (k) {
    var orig = history[k];
    history[k] = function (state, title, url) { return orig.call(this, state, title, url == null ? url : fix(url)); };
  });

  // um único link por tipo: atualiza o primeiro e remove repetidos (as páginas leves já trazem os seus)
  var link = function (rel, hreflang, href) {
    var all = document.querySelectorAll('link[rel="' + rel + '"]' + (hreflang ? '[hreflang="' + hreflang + '"]' : ''));
    var el = all[0];
    for (var i = 1; i < all.length; i++) all[i].remove();
    if (!el) { el = document.createElement('link'); el.rel = rel; if (hreflang) el.hreflang = hreflang; document.head.appendChild(el); }
    el.href = href;
  };
  var meta = function () {
    var p = strip(location.pathname);
    link('canonical', null, SITE + withLang(p));
    link('alternate', 'pt-BR', SITE + p);
    link('alternate', 'en', SITE + withLang(p, 'en'));
    link('alternate', 'es', SITE + withLang(p, 'es'));
    link('alternate', 'x-default', SITE + p);
  };
  // links internos (menu, rodapé, cards): href com o idioma, para abrir em nova aba e para buscadores
  var anchors = function () {
    document.querySelectorAll('a[href^="/"]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (/^\/(assets|scripts)\//.test(h) || h.charAt(1) === '/') return;
      var n = fix(h);
      if (n !== h) a.setAttribute('href', n);
    });
  };

  var sync = function (l, save) {
    if (LANGS.indexOf(l) < 0) l = 'pt';
    cur = l;
    if (save) { try { localStorage.setItem(KEY, l); } catch (e) {} } // só clique na bandeira salva
    var target = withLang(location.pathname) + location.search + location.hash;
    if (target !== location.pathname + location.search + location.hash) {
      try { history.replaceState(history.state, '', target); } catch (e) {}
    }
    meta();
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', anchors, { once: true }); else anchors();
  };
  addEventListener('popstate', meta);
  ['pushState', 'replaceState'].forEach(function (k) { var o = history[k]; history[k] = function () { var r = o.apply(this, arguments); meta(); return r; }; });

  cur = fromPath() || 'pt';
  document.addEventListener('DOMContentLoaded', meta);
  window.HMI = { KEY: KEY, path: function () { return strip(location.pathname); }, with: withLang, strip: strip, initial: initial, sync: sync, fromPath: fromPath, lang: function () { return cur; }, SITE: SITE };
  meta();
})();

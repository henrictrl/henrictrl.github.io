/* Idioma no endereço para a área /design: PT (/design/...), EN (/design/en/...), ES (/design/es/...). */
(function () {
  var SITE = 'https://henrictrl.github.io', AREA = '/design', LANGS = ['pt', 'en', 'es'];
  var AREA_RE = new RegExp('^' + AREA + '(?=/|$)');
  var PREFIX = /^\/(en|es)(?=\/|$)/;
  var cur = 'pt';
  var stripArea = function (p) { return (p || '/').replace(AREA_RE, '') || '/'; };
  var strip = function (p) { return stripArea(p).replace(PREFIX, '') || '/'; };
  var withLang = function (p, l) { p = strip(p); l = l || cur; return AREA + (l === 'pt' ? p : '/' + l + p); };
  var fromPath = function () { var m = stripArea(location.pathname).match(PREFIX); return m ? m[1] : null; };

  var initial = function () { return fromPath() || 'pt'; };

  var fix = function (url) {
    if (typeof url !== 'string' || url.charAt(0) !== '/' || url.charAt(1) === '/' || /^\/(assets|scripts)\//.test(url)) return url;
    var m = url.match(/^([^?#]*)(.*)$/);
    return withLang(m[1]) + m[2];
  };
  ['pushState', 'replaceState'].forEach(function (k) {
    var orig = history[k];
    history[k] = function (state, title, url) { return orig.call(this, state, title, url == null ? url : fix(url)); };
  });

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
    link('alternate', 'pt-BR', SITE + AREA + p);
    link('alternate', 'en', SITE + withLang(p, 'en'));
    link('alternate', 'es', SITE + withLang(p, 'es'));
    link('alternate', 'x-default', SITE + AREA + p);
  };
  var anchors = function () {
    document.querySelectorAll('a[href^="/"]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (/^\/(assets|scripts)\//.test(h) || h.charAt(1) === '/') return;
      var n = fix(h);
      if (n !== h) a.setAttribute('href', n);
    });
  };

  var sync = function (l) {
    if (LANGS.indexOf(l) < 0) l = 'pt';
    cur = l;
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
  window.HMI = { path: function () { return strip(location.pathname); }, with: withLang, strip: strip, initial: initial, sync: sync, fromPath: fromPath, lang: function () { return cur; }, SITE: SITE, AREA: AREA };
  meta();
})();

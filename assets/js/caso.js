/* Página de projeto: ficha técnica, mesa de luz (miniaturas) e lightbox com setas.
   Roda depois do script de projeto.html e só acrescenta elementos. */
(function () {
  'use strict';
  var P = window.PROJETOS || [], ETQ = window.ETIQUETAS || {};
  var ALIAS = { 'rino-cores': 'rino-site', 'hobbit': 'o-hobbit', 'portfolio': 'metaprojeto', 'visao-geral': 'dash-geral' };
  var m = location.pathname.match(/\/projetos\/([^\/]+)/), slug = m ? decodeURIComponent(m[1]) : (new URLSearchParams(location.search).get('slug') || '');
  slug = ALIAS[slug] || slug;
  var proj = P.filter(function (p) { return p.slug === slug; })[0];
  var LANG = (document.documentElement.lang || 'pt').slice(0, 2).toLowerCase(); if (['pt', 'en', 'es'].indexOf(LANG) < 0) LANG = 'pt';
  var lx = function (o) { return o == null ? '' : typeof o === 'string' ? o : (o[LANG] || o.pt || ''); };
  var L = function (pt, en, es) { return { pt: pt, en: en, es: es }[LANG]; };
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var etq = function (id) { return lx(ETQ[id]) || id.replace(/-/g, ' '); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  var css = ':root{--gray-600:#767676;--gray-700:#595959}html[data-theme="dark"]{--gray-600:#9a9a9a;--gray-700:#b8b8b8}' +
    '.dk-kicker,.dk-intro,body.project-page .project-brand .brand-location,body.project-page .project-share,.main-nav a,.top-header .main-nav a{color:var(--gray-600)}' +
    '.main-nav a.current,.main-nav a:hover,.top-header .main-nav a.current{color:var(--ink)}' +
    /* ficha */
    '.pv-ficha{display:grid;grid-template-columns:auto 1fr;gap:0;max-width:620px;margin:28px auto 0;border-top:1px solid var(--gray-200)}body.project-page .dk-head .pv-ficha dt,body.project-page .dk-head .pv-ficha dd,body.project-page .dk-imgs .pv-g h2{text-align:left!important}body.project-page .dk-head .pv-ficha dt{padding-right:32px!important}' +
    '.pv-ficha>div{display:contents}.pv-ficha dt,.pv-ficha dd{padding:11px 0;border-bottom:1px solid var(--gray-200);font-size:13px;line-height:1.5;margin:0}' +
    '.pv-ficha dt{color:var(--gray-600);white-space:nowrap}.pv-ficha dd{color:var(--ink);text-wrap:pretty}' +
    '.pv-ficha>div{animation:pv-row .6s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(var(--i)*60ms + 150ms)}' +
    '@keyframes pv-row{from{opacity:0;transform:translateY(8px)}}' +
    /* alternador e mesa de luz */
    '.pv-view{display:flex;align-items:center;gap:6px;padding:0 0 16px}.pv-view button{min-height:36px;padding:0 14px;border:1px solid var(--gray-200);border-radius:999px;background:none;color:var(--gray-600);font:inherit;font-size:13px;cursor:pointer;transition:border-color .25s,background .25s,color .25s}' +
    '.pv-view button:hover{border-color:var(--ink);color:var(--ink)}.pv-view button[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:var(--white)}.pv-view span{margin-left:auto;font-size:12px;color:var(--gray-600)}' +
    '.pv-is-grid>img.pv-page,.pv-is-grid>.dk-cap{display:none!important}' +
    '.pv-g{padding:0 0 28px;scroll-margin-top:110px}.pv-g h2{font-size:13px;font-weight:500;color:var(--gray-700);margin:0 0 10px}' +
    '.pv-thumbs{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:8px}' +
    '.pv-th{position:relative;display:block;padding:0;border:0;background:var(--gray-100);border-radius:5px;overflow:hidden;cursor:zoom-in;aspect-ratio:16/9;animation:pv-row .5s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(var(--i)*18ms)}' +
    '.pv-th img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.22,1,.36,1)}.pv-th:hover img{transform:scale(1.05)}.pv-th:focus-visible{outline:2px solid var(--ink);outline-offset:2px}' +
    '.pv-th span{position:absolute;left:6px;bottom:6px;padding:2px 6px;border-radius:999px;background:rgba(17,17,17,.72);color:#fff;font-size:10px;font-variant-numeric:tabular-nums}' +
    '@media (max-width:767px){.pv-view{padding:0 6px 14px}.pv-thumbs{grid-template-columns:1fr 1fr;gap:6px}.pv-g{padding:0 6px 22px}.pv-ficha{margin-top:22px}}' +
    /* paginas: clique amplia; entrada ao rolar */
    'img.pv-page{pointer-events:auto!important;cursor:zoom-in}' +
    'body.pv-anim img.pv-page{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)}body.pv-anim img.pv-page.pv-in{opacity:1;transform:none}' +
    '.pv-lb-nav{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border:0;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;font-size:20px;cursor:pointer;z-index:3}.pv-lb-nav:hover{background:rgba(255,255,255,.28)}.pv-lb-prev{left:12px}.pv-lb-next{right:12px}.pv-lb-n{position:absolute;left:50%;top:14px;transform:translateX(-50%);color:#fff;font-size:12px;font-variant-numeric:tabular-nums;z-index:3;opacity:.8}' +
    '@media (prefers-reduced-motion:reduce){.pv-ficha>div,.pv-th{animation:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  if (!proj) return;

  /* ficha: ano, contexto, setor, entregas e número de páginas */
  var ficha = function () {
    var intro = document.getElementById('project-intro'); if (!intro || document.querySelector('.pv-ficha')) return;
    var e = proj.etiquetas || {}, rows = [], n = (proj.telas || []).length;
    if (proj.ano) rows.push([L('Ano', 'Year', 'Año'), esc(proj.ano)]);
    [['contexto', L('Contexto', 'Context', 'Contexto')], ['setor', L('Setor', 'Sector', 'Sector')], ['entrega', L('Entregas', 'Deliverables', 'Entregas')]].forEach(function (k) {
      if (e[k[0]] && e[k[0]].length) rows.push([k[1], e[k[0]].map(etq).map(esc).join(' · ')]);
    });
    if (n > 1) rows.push([L('Páginas', 'Pages', 'Páginas'), String(n)]);
    var html = rows.length ? '<dl class="pv-ficha">' + rows.map(function (r, i) { return '<div style="--i:' + i + '"><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join('') + '</dl>' : '';
    intro.insertAdjacentHTML('afterend', html);
  };

  /* páginas: ampliar, setas e mesa de luz */
  var LB = [], lbI = -1;
  var overlay = document.getElementById('project-lightbox'), lbImg = document.getElementById('project-lightbox-img');
  var lbShow = function (i) {
    if (!overlay || !LB.length) return; lbI = (i + LB.length) % LB.length;
    lbImg.onerror = null; lbImg.src = LB[lbI].src; lbImg.alt = LB[lbI].alt; overlay.classList.add('open'); document.body.style.overflow = 'hidden';
    var c = overlay.querySelector('.pv-lb-n'); if (c) c.textContent = (lbI + 1) + ' / ' + LB.length;
  };
  if (overlay && !overlay.querySelector('.pv-lb-nav')) {
    overlay.insertAdjacentHTML('beforeend', '<span class="pv-lb-n" aria-live="polite"></span><button type="button" class="pv-lb-nav pv-lb-prev" aria-label="' + L('Página anterior', 'Previous page', 'Página anterior') + '">←</button><button type="button" class="pv-lb-nav pv-lb-next" aria-label="' + L('Próxima página', 'Next page', 'Página siguiente') + '">→</button>');
    overlay.addEventListener('click', function (e) { var b = e.target.closest('.pv-lb-nav'); if (b) { e.stopPropagation(); lbShow(lbI + (b.classList.contains('pv-lb-next') ? 1 : -1)); } });
    document.addEventListener('keydown', function (e) { if (!overlay.classList.contains('open') || lbI < 0) return; if (e.key === 'ArrowRight') lbShow(lbI + 1); if (e.key === 'ArrowLeft') lbShow(lbI - 1); });
    new MutationObserver(function () { var open = overlay.classList.contains('open'); overlay.querySelectorAll('.pv-lb-nav,.pv-lb-n').forEach(function (x) { x.style.display = open && lbI >= 0 ? '' : 'none'; }); if (!open) lbI = -1; }).observe(overlay, { attributes: true, attributeFilter: ['class'] });
  }
  var mesa = function () {
    var v = document.getElementById('project-visuals'); if (!v || v.dataset.pv) return; v.dataset.pv = '1';
    var pages = [].slice.call(v.children).filter(function (el) { return el.tagName === 'IMG' && /^dk-p\d+$/.test(el.id); });
    if (!pages.length) return;
    LB = pages.map(function (img) { return { src: img.getAttribute('src'), alt: img.alt || '' }; });
    pages.forEach(function (img, i) { img.classList.add('pv-page'); img.dataset.pvI = i; });
    v.addEventListener('click', function (e) { var t = e.target.closest('[data-pv-i]'); if (t) lbShow(+t.dataset.pvI); });
    if (pages.length < 6) return;
    var secs = (proj.secoes || []).slice().sort(function (a, b) { return a.p - b.p; });
    if (!secs.length || secs[0].p !== 1) secs.unshift({ p: 1, t: '' });
    var pad = function (n) { return (n < 10 ? '0' : '') + n; }, k = 0;
    var grid = '<div class="pv-grid" id="pv-grid" hidden>' + secs.map(function (s, i) {
      var end = secs[i + 1] ? secs[i + 1].p : pages.length + 1, out = '';
      for (var n = s.p; n < end && n <= pages.length; n++) {
        var src = LB[n - 1].src, th = src.replace(/(\d+)((?:\.(?:en|es))?)\.webp$/, '$1-t$2.webp');
        out += '<button type="button" class="pv-th" style="--i:' + (k++ % 24) + '" data-pv-i="' + (n - 1) + '" aria-label="' + esc(LB[n - 1].alt || (L('Página', 'Page', 'Página') + ' ' + n)) + '"><img src="' + esc(th) + '" alt="" loading="lazy" decoding="async" width="320" height="180"><span>' + pad(n) + '</span></button>';
      }
      return out ? '<section class="pv-g" id="pv-g-' + s.p + '">' + (lx(s.t) ? '<h2>' + esc(lx(s.t)) + '</h2>' : '') + '<div class="pv-thumbs">' + out + '</div></section>' : '';
    }).join('') + '</div>';
    pages[0].insertAdjacentHTML('beforebegin', '<div class="pv-view" role="group" aria-label="' + L('Modo de visualização', 'View mode', 'Modo de vista') + '"><button type="button" data-pv="pages" aria-pressed="true">' + L('Páginas', 'Pages', 'Páginas') + '</button><button type="button" data-pv="grid" aria-pressed="false">' + L('Mesa de luz', 'Light table', 'Mesa de luz') + '</button><span>' + pages.length + ' ' + L('páginas', 'pages', 'páginas') + '</span></div>' + grid);
    var g = document.getElementById('pv-grid'), bar = v.querySelector('.pv-view');
    var mode = function (isGrid, save) {
      v.classList.toggle('pv-is-grid', isGrid); g.hidden = !isGrid;
      bar.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String((b.dataset.pv === 'grid') === isGrid)); });
      if (save) try { sessionStorage.setItem('hm-pv', isGrid ? 'grid' : 'pages'); } catch (e) {}
    };
    bar.addEventListener('click', function (e) { var b = e.target.closest('[data-pv]'); if (b) mode(b.dataset.pv === 'grid', true); });
    try { if (sessionStorage.getItem('hm-pv') === 'grid') mode(true); } catch (e) {}
    var toc = document.getElementById('project-toc');
    if (toc) toc.addEventListener('click', function (e) { // na mesa de luz, o sumário leva ao grupo de miniaturas
      var a = e.target.closest('a[data-t]'); if (!a || !v.classList.contains('pv-is-grid')) return;
      var mm = /^dk-p(\d+)$/.exec(a.dataset.t), t = a.dataset.t === 'dk-top0' ? document.getElementById('pv-g-1') : mm && document.getElementById('pv-g-' + mm[1]);
      if (t) { e.preventDefault(); e.stopPropagation(); t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
    }, true);
  };
  ficha(); mesa();
})();

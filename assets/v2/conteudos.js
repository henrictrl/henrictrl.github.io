/* Conteúdos + Projetos no app oficial:
   - aba "Projetos" em primeiro, antes de Texto e Instagram, e padrão em /artigos/ (sem âncora) ou com #projetos;
   - com ela ativa, a linha de categorias dá lugar a uma linha do mesmo tamanho com "Veja os números" e a escolha de colunas
     (os mesmos elementos do site.js, #work-dashboard-cta e #pj-filters, sem os filtros de categoria), e a grade oficial #work-case-grid;
   - a página Projetos some do menu e da barra do celular. */
(function () {
  var LAB = { pt: 'Projetos', en: 'Projects', es: 'Proyectos' };
  var ICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6"/></svg>';
  var ROOT = /^\/(en\/|es\/)?(artigos|conteudos)\/?$/; // lista de Conteúdos (coleções e textos não abrem em Projetos)
  var active = false;
  var lang = function () { var l = (document.documentElement.lang || 'pt').toLowerCase(); return l.indexOf('en') === 0 ? 'en' : l.indexOf('es') === 0 ? 'es' : 'pt'; };
  var st = document.createElement('style');
  st.textContent = '#hm-proj{display:none}#view-articles.hm-proj #hm-proj{display:block}'
    + '#view-articles.hm-proj .art-filters>:not(.art-row-top),#view-articles.hm-proj .art-row-top>:not(.art-seg){display:none!important}'
    + '#view-articles.hm-proj .section-block .max-w>:not(.art-filters):not(#hm-proj){display:none!important}'
    + '.hm-proj-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:8px 12px;margin:10px 0 32px}'
    + '.hm-proj-row .work-dashboard-cta{margin:0;padding:0;display:flex}'
    + '.hm-proj-row .pj-filters{margin:0;padding:0;display:flex;align-items:center}.hm-proj-row .pj-filter-main{display:none!important}'
    + '.hm-proj-row .pj-cols{margin:0}'
    + '.main-nav a[href$="/projetos/"],.hm-dock a[href$="/projetos/"]{display:none!important}'
    // troca suave: o que entra sobe 10px e aparece; cards em cascata curta
    + '@keyframes hmIn{from{opacity:0;transform:translate3d(0,10px,0)}to{opacity:1;transform:none}}'
    + '.hm-anim #hm-proj .hm-proj-row,.hm-anim .art-filters>.art-row:not(.art-row-top),.hm-anim [data-hm-i]{animation:hmIn .55s cubic-bezier(.2,.7,.2,1) both;animation-delay:calc(var(--hm-i,0) * 45ms)}'
    + '.art-seg .art-filter{transition:background-color .3s,color .3s,border-color .3s,box-shadow .3s}'
    + '@media(prefers-reduced-motion:reduce){.hm-anim *{animation:none!important}}'
    + '@media(max-width:767px){#view-articles .art-title{font-size:min(24px,calc((100vw - 2 * var(--gutter)) / 18.4))}html[lang="es"] #view-articles .art-title{font-size:min(24px,calc((100vw - 2 * var(--gutter)) / 19.2))}}'; // título novo é mais longo: cabe em 390px
  document.head.appendChild(st);
  var host = function () {
    var f = document.getElementById('art-filters'); if (!f) return null;
    var h = document.getElementById('hm-proj');
    if (!h) { h = document.createElement('div'); h.id = 'hm-proj'; h.innerHTML = '<div class="hm-proj-row"></div>'; f.parentNode.insertBefore(h, f.nextSibling); }
    return h;
  };
  var ensure = function () {
    var seg = document.querySelector('#view-articles .art-seg'); if (!seg) return;
    var b = seg.querySelector('[data-hm-proj]');
    if (!b) { b = document.createElement('button'); b.type = 'button'; b.className = 'art-filter'; b.setAttribute('data-hm-proj', ''); b.addEventListener('click', function () { if (!active) set(true); }); }
    if (seg.firstElementChild !== b) seg.insertBefore(b, seg.firstElementChild); // Projetos em primeiro
    var lg = lang(); if (b.dataset.l !== lg) { b.dataset.l = lg; b.innerHTML = ICO + LAB[lg]; }
    if (b.getAttribute('aria-pressed') !== String(active)) b.setAttribute('aria-pressed', String(active));
    if (active) seg.querySelectorAll('[data-k]').forEach(function (x) { if (x.getAttribute('aria-pressed') !== 'false') x.setAttribute('aria-pressed', 'false'); });
  };
  var align = function () {
    var view = document.getElementById('view-articles'), row = document.querySelector('.hm-proj-row'), grid = document.getElementById('work-case-grid');
    if (!view || !row || !grid || !active) return;
    view.classList.remove('hm-proj');
    var art = document.getElementById('art-grid'), r2 = document.querySelector('.art-filters .art-row:not(.art-row-top)');
    var tGrid = art && art.offsetParent ? art.getBoundingClientRect().top : null, tRow = r2 && r2.offsetHeight ? r2.getBoundingClientRect().top : null;
    view.classList.add('hm-proj');
    row.style.marginTop = row.style.marginBottom = '';
    var cs = getComputedStyle(row);
    if (tRow != null) row.style.marginTop = (parseFloat(cs.marginTop) + tRow - row.getBoundingClientRect().top) + 'px';
    if (tGrid != null) row.style.marginBottom = (parseFloat(cs.marginBottom) + tGrid - grid.getBoundingClientRect().top) + 'px';
  };
  // marca a troca para animar o que entra (até 12 cards em cascata)
  var anim = function () {
    var view = document.getElementById('view-articles'); if (!view) return;
    view.classList.remove('hm-anim'); void view.offsetWidth; view.classList.add('hm-anim');
    setTimeout(function () { // depois do site.js redesenhar a grade
      var box = active ? document.getElementById('work-case-grid') : document.getElementById('art-grid');
      document.querySelectorAll('[data-hm-i]').forEach(function (e) { e.removeAttribute('data-hm-i'); e.style.removeProperty('--hm-i'); });
      if (box) Array.prototype.slice.call(box.children, 0, 12).forEach(function (e, i) { e.setAttribute('data-hm-i', ''); e.style.setProperty('--hm-i', i + 1); });
    }, 0);
    clearTimeout(anim.t); anim.t = setTimeout(function () { view.classList.remove('hm-anim'); }, 1300);
  };
  var set = function (v, quiet) {
    active = v;
    var view = document.getElementById('view-articles'); if (!view) return;
    view.classList.toggle('hm-proj', v);
    if (v) {
      var h = host(), row = h && h.querySelector('.hm-proj-row');
      var cta = document.getElementById('work-dashboard-cta'), bar = document.getElementById('pj-filters'), grid = document.getElementById('work-case-grid');
      if (row && cta && cta.parentNode !== row) row.appendChild(cta);
      if (row && bar && bar.parentNode !== row) { bar.hidden = false; row.appendChild(bar); }
      if (h && grid && grid.parentNode !== h) h.appendChild(grid);
      if (grid) grid.querySelectorAll('.reveal, .mx-wait, .mx-fade').forEach(function (e) { e.classList.add('in', 'visible'); e.classList.remove('mx-wait'); e.style.opacity = ''; });
      if (location.hash !== '#projetos' && !ROOT.test(location.pathname)) history.replaceState(history.state, '', location.pathname + location.search + '#projetos');
    } else if (location.hash === '#projetos') history.replaceState(history.state, '', location.pathname + location.search);
    ensure();
    if (v) align();
    if (!quiet) anim();
  };
  // Texto / Instagram: volta para os artigos (antes do site.js tratar o clique)
  document.addEventListener('click', function (e) { var k = e.target.closest && e.target.closest('#view-articles .art-seg [data-k]'); if (!k) return; if (active) set(false); else if (k.getAttribute('aria-pressed') !== 'true') anim(); }, true);
  var boot = function () {
    ensure();
    new MutationObserver(function () { ensure(); }).observe(document.body, { childList: true, subtree: true });
    if (location.hash === '#projetos' || (ROOT.test(location.pathname) && !location.search && !location.hash)) { set(true, true); setTimeout(align, 1000); } // remede depois da entrada (reveal) da página
    var rt; addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(align, 150); });
    addEventListener('hashchange', function () { if (location.hash === '#projetos') set(true); });
  };
  if (document.readyState === 'complete') setTimeout(boot, 50); else addEventListener('load', function () { setTimeout(boot, 50); });
})();

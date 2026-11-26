/* Conteúdos + Todos (mosaico em colunas reais sem reflow/travamento, intercalado por projeto e proporção):
   - inicia imediatamente no DOMContentLoaded (sem flash de Texto -> Todos no window.load);
   - usa N colunas reais (.hm-all-col) em vez de grid-auto-rows/fitMosaic: zero travamento e zero salto de rolagem;
   - alterna projetos/identidades visuais (round-robin por origem) e proporções (3:2 vs 4:5);
   - transição suave na barra de categorias sem MutationObserver no document.body. */
(function () {
  var LAB_ALL = { pt: 'Todos', en: 'All', es: 'Todos' };
  var LAB_PROJ = { pt: 'Projetos', en: 'Projects', es: 'Proyectos' };
  var KIND_PROJ = { pt: 'Projeto', en: 'Project', es: 'Proyecto' };
  var COLS_L = { pt: 'Colunas', en: 'Columns', es: 'Columnas' };
  var EMPTY_L = { pt: 'Nenhum item nesta categoria.', en: 'No items in this category.', es: 'No hay elementos en esta categoría.' };
  var ICO_ALL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="5.5" rx="1.6"/><rect x="3.5" y="15" width="7" height="5.5" rx="1.6"/><rect x="13.5" y="11.5" width="7" height="9" rx="1.6"/></svg>';
  var ICO_PROJ = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6"/></svg>';
  var SLIDES_ICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="7" y="3" width="13" height="15" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h10"/></svg>';
  var AREA = '/design';
  var ROOT = new RegExp('^' + AREA + '/(en/|es/)?(artigos|conteudos)/?$');
  var ALIAS = { 'rino-site': 'rino-cores', 'o-hobbit': 'hobbit', 'metaprojeto': 'portfolio', 'dash-geral': 'visao-geral' };
  var SKIP_PJ = { 'o-hobbit': 1, 'rino-pecas': 1, 'sollaris-instagram': 1, 'dash-geral': 1 };

  var FAV_POSTS = { Deuz10vkegd: 1, DUlOWXWjoWX: 1, DPCkHYgkbDE: 1, DeKDr7dFgRW: 1, Dd6mzTmFpUe: 1, DQfY9lqkZfc: 1 };
  var FAV_URLS = {
    'https://personaunesp.com.br/brat-and-its-completely-different-but-also-still-brat-critica/': 1,
    'https://personaunesp.com.br/corisco-e-dada-critica/': 1,
    'https://personaunesp.com.br/croma-kid-critica/': 1,
    'https://personaunesp.com.br/as-primas-critica/': 1,
    'https://personaunesp.com.br/treta-critica/': 1,
    'https://personaunesp.com.br/pearl-critica/': 1,
    'https://personaunesp.com.br/critica-e-se-fosse-verdade/': 1,
    'https://personaunesp.com.br/ainda-temos-o-amanha-critica/': 1
  };
  var FAV_PROJS = { rino: 1, 'classic-tattoo': 1, 'optica-leopoldina': 1, sollaris: 1, equity360: 1, pixelar: 1, 'nova-rio-branco': 1, basement: 1, 'festa-da-polenta': 1 };

  var POST_GROUP_CATS = {
    Cultura: { rdcultural: 1, 'congresso-extensao': 1, 'educacao-politica': 1, 'mostra-cancao': 1, interserv: 1, 'ocupacao-unesp-negra': 1, persona: 1, tesoura: 1, desvendando: 1 },
    'Música': { desvendando: 1, 'mostra-cancao': 1 },
    Tecnologia: { basement: 1 }
  };
  var PJ_TECH = { basement: 1, pixelar: 1, 'fellipe-gualberto': 1, inspirit: 1, rino: 1, 'nova-rio-branco': 1 };

  var PJ_DATE = {
    'rino': '2026-11-23', 'classic-tattoo': '2026-11-20', 'optica-leopoldina': '2026-11-15',
    'sollaris': '2026-11-10', 'equity360': '2026-11-05', 'pixelar': '2026-10-25',
    'nova-rio-branco': '2026-10-15', 'fellipe-gualberto': '2026-10-05', 'basement': '2026-09-25',
    'festa-da-polenta': '2026-09-10', 'inspirit': '2026-08-20', 'congresso-extensao': '2026-08-01',
    'interserv': '2026-07-15', 'nupe': '2026-07-01', 'prisma-brandbook': '2026-06-15',
    'csunesp': '2026-06-01', 'mostra-saude-mental': '2026-05-15', 'ocupacao-unesp-negra': '2026-05-01',
    'ntaps': '2026-04-15', 'cminds': '2026-04-01', 'setembro-amarelo': '2026-03-15',
    'rp-40-anos': '2026-03-01'
  };
  var MESES = {
    pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  };
  var TAG_TR = {
    'Cinema': { en: 'Film', es: 'Cine' }, 'Música': { en: 'Music', es: 'Música' },
    'Televisão': { en: 'TV', es: 'Televisión' }, 'Literatura': { en: 'Literature', es: 'Literatura' },
    'Cabine': { en: 'Screening', es: 'Pase de prensa' }, 'Cultura': { en: 'Culture', es: 'Cultura' },
    'Tecnologia': { en: 'Technology', es: 'Tecnología' }, 'Livro': { en: 'Book', es: 'Libro' },
    'Artes visuais': { en: 'Visual arts', es: 'Artes visuales' }
  };

  var wantAllInitially = false;
  var wantProjInitially = (ROOT.test(location.pathname) && !location.search && !location.hash) || location.hash === '#projetos';
  var mode = wantProjInitially ? 'proj' : null;
  var allFilter = 'all';
  var lastLangRendered = '';
  var inEnsure = false;
  var mqMob = window.matchMedia('(max-width:767px)');

  var lang = function () {
    var l = (document.documentElement.lang || 'pt').toLowerCase();
    return l.indexOf('en') === 0 ? 'en' : l.indexOf('es') === 0 ? 'es' : 'pt';
  };
  var pre = function (lg) { return AREA + (lg === 'pt' ? '' : '/' + lg); };
  var tx = function (v, lg) { return v == null ? '' : typeof v === 'string' ? v : (v[lg] || v.pt || ''); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var fmtDate = function (iso, lg) {
    if (!iso) return '';
    if (/^\d{4}$/.test(iso)) return iso;
    var p = String(iso).split('-');
    if (p.length < 3) return iso;
    var mm = MESES[lg][+p[1] - 1] || p[1];
    return lg === 'en' ? (mm + ' ' + (+p[2]) + ', ' + p[0]) : ((+p[2]) + ' ' + mm + ' ' + p[0]);
  };
  var tagName = function (tg, lg) { return lg === 'pt' ? tg : ((TAG_TR[tg] && TAG_TR[tg][lg]) || tg); };
  var postSrc = function (x, lg) {
    var b = 'assets/posts/' + x.c + '/01';
    return lg !== 'pt' && x.tr && x.tr.indexOf(1) >= 0 ? (b + '.' + lg + '.webp') : (b + '.webp');
  };
  var artImgSrc = function (a, lg) {
    if (a.coverFromText) return a.textCover || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    var m = /^assets\/posts\/([^/]+)\/01\.webp$/.exec(a.imgPath || '');
    if (m) {
      var p = (window.POSTS || []).find(function (x) { return x.c === m[1]; });
      if (p) return postSrc(p, lg);
    }
    return a.imgPath || ('assets/artigos/' + a.img);
  };
  var artSlug = function (a) {
    try { return decodeURIComponent(new URL(a.u, location.origin).pathname.split('/').filter(Boolean).pop() || ''); }
    catch (e) { return ''; }
  };
  var postTitle = function (x, lg) {
    var pt = window.POST_TITULOS && window.POST_TITULOS[x.c];
    if (pt) return esc(pt[lg] || pt.pt);
    var raw = ((lg !== 'pt' && x['cap_' + lg]) || x.cap || '').trim();
    var line = raw.split(/\n/).map(function (l) { return l.trim(); }).filter(function (l) { return l && !/^[\p{P}\p{S}\s]+$/u.test(l); })[0] || x.v;
    if (line.length > 90) line = line.slice(0, 88).replace(/\s+\S*$/, '') + '…';
    return esc(line);
  };

  var readAllCols = function () {
    try { return JSON.parse(localStorage.getItem('hm-allcols') || '{}') || {}; }
    catch (e) { return {}; }
  };
  var getAllCols = function () {
    var mob = mqMob.matches;
    var k = mob ? 'm' : 'd';
    var n = +readAllCols()[k];
    var min = mob ? 1 : 2;
    var max = mob ? 3 : 5;
    return n >= min && n <= max ? n : (mob ? 2 : 3);
  };
  var setAllCols = function (n) {
    var o = readAllCols();
    o[mqMob.matches ? 'm' : 'd'] = n;
    try { localStorage.setItem('hm-allcols', JSON.stringify(o)); } catch (e) {}
  };

  // Aplica a classe inicial ANTES da primeira pintura para nunca mostrar Texto antes de Todos
  var preView = document.getElementById('view-articles');
  if (preView) {
    if (wantAllInitially) preView.classList.add('hm-all');
    else if (wantProjInitially) preView.classList.add('hm-proj');
  }

  var st = document.createElement('style');
  st.textContent = '#hm-proj,#hm-all{display:none}'
    + '#view-articles.hm-proj #hm-proj,#view-articles.hm-all #hm-all{display:block}'
    + '#view-articles .art-filters>.art-row:not(.art-row-top){max-height:110px;opacity:1;transform:translateY(0);overflow:hidden;transition:max-height .32s cubic-bezier(.22,1,.36,1),opacity .22s ease,transform .28s cubic-bezier(.22,1,.36,1),margin .32s cubic-bezier(.22,1,.36,1)}'
    + '#view-articles.hm-proj .art-filters>.art-row:not(.art-row-top){max-height:0;opacity:0;transform:translateY(-6px);margin-top:-8px;pointer-events:none}'
    + '@media(min-width:640px){#view-articles .art-row-top>:not(.art-seg){max-width:180px;opacity:1;overflow:hidden;transition:max-width .32s cubic-bezier(.22,1,.36,1),opacity .2s ease,margin .32s cubic-bezier(.22,1,.36,1),padding .32s cubic-bezier(.22,1,.36,1),border-color .2s ease}'
    + '#view-articles.hm-proj .art-row-top>:not(.art-seg){max-width:0;opacity:0;padding-left:0;padding-right:0;margin-left:-6px;margin-right:0;border-color:transparent;pointer-events:none}}'
    + '@media(max-width:639px){#view-articles .art-filters>.art-row>.art-filter,#view-articles .art-row-top>.art-filter,#view-articles .art-row-top>.art-view{transition:max-height .28s cubic-bezier(.22,1,.36,1),max-width .28s cubic-bezier(.22,1,.36,1),opacity .2s ease,padding .28s,margin .28s}'
    + '#view-articles.hm-proj .art-filters>.art-row>.art-filter,#view-articles.hm-proj .art-row-top>.art-filter,#view-articles.hm-proj .art-row-top>.art-view{max-height:0;max-width:0;opacity:0;padding:0;border-width:0;margin:-4px -3px;overflow:hidden;pointer-events:none}}'
    + '#view-articles.hm-all .art-row-top .art-view{max-width:0;opacity:0;padding:0;margin:0;overflow:hidden;pointer-events:none}'
    + '#view-articles.hm-proj .section-block .max-w>:not(.art-filters):not(#hm-proj),'
    + '#view-articles.hm-all .section-block .max-w>:not(.art-filters):not(#hm-all){display:none!important}'
    + '@keyframes hmViewIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}'
    + '.hm-view-in{animation:hmViewIn .26s cubic-bezier(.22,1,.36,1) both}'
    + '@media(prefers-reduced-motion:reduce){#view-articles .art-filters *,.hm-view-in{transition:none!important;animation:none!important}}'
    + '.hm-proj-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:8px 12px;margin:-18px 0 28px}'
    + '@media(max-width:767px){.hm-proj-row{margin:-8px 0 22px}}'
    + '.hm-proj-row .work-dashboard-cta,#work-dashboard-cta{display:none!important}'
    + '.hm-proj-row .pj-filters{margin:0;padding:0;display:flex;align-items:center}.hm-proj-row .pj-filter-main{display:none!important}'
    + '.hm-proj-row .pj-cols{margin:0}'
    + '.main-nav a[href$="/projetos/"],.hm-dock a[href$="/projetos/"]{display:none!important}'
    + '.hm-all-sub{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 18px;margin:-18px 0 28px}'
    + '@media(max-width:767px){.hm-all-sub{margin:-8px 0 22px}}'
    + '.hm-all-cols{display:inline-flex;align-items:center;gap:6px}'
    + '.hm-all-cols span{font-size:12px;color:var(--gray-500);margin-right:2px}'
    + '.hm-all-cols .art-filter{min-width:34px;justify-content:center;padding:5px 10px}'
    + '@media(max-width:767px){.hm-all-cols [data-all-cols="4"],.hm-all-cols [data-all-cols="5"]{display:none}}'
    + '@media(min-width:768px){.hm-all-cols [data-all-cols="1"]{display:none}}'
    + '.hm-all-meta{text-align:center;font-size:12px;color:var(--gray-500);margin:0}'
    /* Colunas reais em flex com lote progressivo: zero reflow, zero travamento, zero salto de rolagem */
    + '#hm-all,#hm-all-grid,.hm-all-col{overflow-anchor:none}'
    + '.hm-all-grid{display:grid;grid-template-columns:repeat(var(--all-cols,3),minmax(0,1fr));column-gap:14px;align-items:start}'
    + '.hm-all-col{display:flex;flex-direction:column;gap:24px;min-width:0}'
    + '.hm-all-sentinel{height:1px;width:100%;pointer-events:none}'
    + '@media(min-width:768px){.hm-all-grid{column-gap:22px}.hm-all-col{gap:30px}.hm-all-grid[data-cols="4"],.hm-all-grid[data-cols="5"]{column-gap:16px}.hm-all-grid[data-cols="4"] .hm-all-col,.hm-all-grid[data-cols="5"] .hm-all-col{gap:22px}}'
    + '.hm-all-card{display:block;color:inherit;text-decoration:none;min-width:0;contain:layout style}'
    + '.hm-all-card .art-card-media,.hm-all-card .work-card-media{margin-bottom:10px;border-radius:var(--r);overflow:hidden;position:relative;background:var(--gray-100)}'
    + '.hm-all-card .art-card-media img,.hm-all-card .work-card-media>img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .55s cubic-bezier(.2,.7,.2,1)}'
    + '.hm-all-card:hover .art-card-media img,.hm-all-card:hover .work-card-media>img{transform:scale(1.03)}'
    + '.hm-all-card .art-card-title{font-size:15px;font-weight:500;line-height:1.35;margin:0}'
    + '.hm-all-card .art-card-meta{font-size:11.5px;color:var(--gray-400);margin:0 0 4px}'
    + '.hm-all-card .art-card-by{font-size:12px;color:var(--gray-500);margin:4px 0 0;line-height:1.4}'
    + '.hm-all-grid[data-cols="4"] .art-card-title,.hm-all-grid[data-cols="5"] .art-card-title{font-size:13.5px}'
    + '.hm-all-grid[data-cols="4"] .art-card-meta,.hm-all-grid[data-cols="5"] .art-card-meta,.hm-all-grid[data-cols="4"] .art-card-by,.hm-all-grid[data-cols="5"] .art-card-by{font-size:11px}'
    + '.hm-all-empty{grid-column:1/-1;text-align:center;padding:40px 0;font-size:14px;color:var(--gray-500)}'
    + '@media(max-width:639px){.hm-all-col{gap:20px}.hm-all-card .art-card-title{font-size:13px}.hm-all-card .art-card-meta,.hm-all-card .art-card-by{font-size:11px}.hm-all-grid[data-cols="3"] .art-card-title{font-size:12px}.hm-all-grid[data-cols="3"] .art-card-meta,.hm-all-grid[data-cols="3"] .art-card-by{font-size:10px}}'
    + '.art-seg .art-filter{transition:background-color .22s cubic-bezier(.22,1,.36,1),color .22s cubic-bezier(.22,1,.36,1),border-color .22s cubic-bezier(.22,1,.36,1)}'
    + '@media(max-width:767px){#view-articles .art-title{font-size:min(24px,calc((100vw - 2 * var(--gutter)) / 18.4))}html[lang="es"] #view-articles .art-title{font-size:min(24px,calc((100vw - 2 * var(--gutter)) / 19.2))}}';
  document.head.appendChild(st);

  var pulseView = function (el) {
    if (!el) return;
    el.classList.remove('hm-view-in');
    void el.offsetWidth;
    el.classList.add('hm-view-in');
  };

  var hostProj = function () {
    var f = document.getElementById('art-filters'); if (!f) return null;
    var h = document.getElementById('hm-proj');
    if (!h) { h = document.createElement('div'); h.id = 'hm-proj'; h.innerHTML = '<div class="hm-proj-row"></div>'; f.parentNode.insertBefore(h, f.nextSibling); }
    return h;
  };
  var hostAll = function () {
    var f = document.getElementById('art-filters'); if (!f) return null;
    var h = document.getElementById('hm-all');
    if (!h) {
      h = document.createElement('div');
      h.id = 'hm-all';
      h.innerHTML = '<div class="hm-all-sub" id="hm-all-sub"></div><div class="hm-all-grid" id="hm-all-grid"></div><div class="hm-all-sentinel" id="hm-all-sentinel" aria-hidden="true"></div>';
      f.parentNode.insertBefore(h, f.nextSibling);
    }
    return h;
  };

  var syncNativeFilterButtons = function () {
    if (mode !== 'all') return;
    document.querySelectorAll('#art-filters [data-k], .art-float [data-k]').forEach(function (btn) {
      var k = btn.dataset.k || '';
      var nextVal = k.indexOf('m:') === 0 ? 'false' : String(k === allFilter);
      if (btn.getAttribute('aria-pressed') !== nextVal) btn.setAttribute('aria-pressed', nextVal);
    });
  };

  var matchesFilter = function (entry, fk, artByUrl) {
    if (fk === 'all') return true;
    if (fk === 'fav') {
      if (entry.kind === 'proj') return !!FAV_PROJS[entry.item.slug];
      if (entry.kind === 'text') return !!FAV_URLS[entry.item.u];
      return !!FAV_POSTS[entry.item.c];
    }
    var cats = window.CATEGORIAS || {};
    if (cats[fk]) {
      var s = cats[fk];
      if (entry.kind === 'text') return (s.u || []).indexOf(entry.item.u) >= 0;
      if (entry.kind === 'post') return (s.p || []).indexOf(entry.item.c) >= 0;
      return false;
    }
    if (entry.kind === 'proj') {
      var p = entry.item;
      var fl = [].concat(p.filtro || []);
      if (fk === 'Cultura') return fl.indexOf('cultura') >= 0;
      if (fk === 'Tecnologia') return !!PJ_TECH[p.slug] || fl.indexOf('programacao') >= 0;
      if (fk === 'Música') return p.slug === 'desvendando';
      if (fk === 'Cinema') return p.slug === 'tesoura' || p.slug === 'persona';
      return false;
    }
    if (entry.kind === 'text') {
      var a = entry.item;
      var tags = a.tags || [];
      if (fk === 'Cultura') return tags.indexOf('Cultura') >= 0 || tags.indexOf('Artes visuais') >= 0;
      if (fk === 'Literatura') return tags.indexOf('Literatura') >= 0 || tags.indexOf('Livro') >= 0;
      return tags.indexOf(fk) >= 0;
    }
    var x = entry.item;
    if (POST_GROUP_CATS[fk] && POST_GROUP_CATS[fk][x.g]) return true;
    if (x.art && artByUrl[x.art]) {
      var la = artByUrl[x.art];
      var lt = la.tags || [];
      if (fk === 'Literatura') return lt.indexOf('Literatura') >= 0 || lt.indexOf('Livro') >= 0;
      if (lt.indexOf(fk) >= 0) return true;
    }
    return false;
  };

  var sourceKey = function (entry) {
    if (entry.kind === 'post') return String(entry.item.g || entry.item.v || '').toLowerCase();
    if (entry.kind === 'proj') {
      var sl = String(entry.item.slug || '').toLowerCase();
      if (sl === 'rd-cultural') return 'rdcultural';
      if (sl === 'encantos-do-brasil') return 'encantos';
      return sl;
    }
    var site = String(entry.item.site || '').toLowerCase();
    if (site.indexOf('tesoura') >= 0) return 'tesoura';
    if (site.indexOf('persona') >= 0) return 'persona';
    return site || 'text';
  };

  var aspectRatioOf = function (entry) {
    if (entry.kind === 'post') return 1 / (Number(entry.item.r) || 1.25);
    return 1.5;
  };

  var shapeOf = function (entry) {
    return aspectRatioOf(entry) > 1.1 ? 'wide' : 'tall';
  };

  /* Intercala por projeto/origem (round-robin entre buckets) para evitar monotonia visual
     de vários posts recentes com a mesma identidade, mantendo mais recentes primeiro dentro de cada projeto
     e alternando proporções (horizontal 3:2 vs vertical 4:5). */
  var buildBalancedOrder = function (filtered) {
    var map = {};
    var order = [];
    filtered.forEach(function (entry) {
      var k = sourceKey(entry);
      if (!map[k]) {
        map[k] = [];
        order.push(k);
      }
      map[k].push(entry);
    });
    // Dentro de cada projeto: mais recente primeiro; empates: projeto -> texto -> post
    var prio = { proj: 0, text: 1, post: 2 };
    order.forEach(function (k) {
      map[k].sort(function (a, b) {
        var cmp = b.d.localeCompare(a.d);
        return cmp !== 0 ? cmp : (prio[a.kind] - prio[b.kind]);
      });
    });
    // Ordena os projetos pela data do item mais recente de cada projeto
    order.sort(function (ka, kb) {
      return map[kb][0].d.localeCompare(map[ka][0].d);
    });
    // Round-robin entre todos os projetos ativos
    var seq = [];
    var remaining = true;
    while (remaining) {
      remaining = false;
      for (var i = 0; i < order.length; i++) {
        var bucket = map[order[i]];
        if (bucket.length) {
          seq.push(bucket.shift());
          if (bucket.length) remaining = true;
        }
      }
    }
    return seq;
  };

  var buildAllItems = function () {
    var items = [];
    var artByUrl = {};
    var projs = (window.PROJETOS || []).filter(function (p) { return !p.oculto && !SKIP_PJ[p.slug]; });
    projs.forEach(function (p, idx) {
      var yr = String(p.ano || '2022').match(/\d{4}(?!.*\d{4})/);
      var fallback = (yr ? yr[0] : '2022') + '-' + String(Math.max(1, 12 - (idx % 12))).padStart(2, '0') + '-01';
      items.push({ kind: 'proj', d: PJ_DATE[p.slug] || fallback, item: p });
    });
    var arts = (window.ARTIGOS || []).filter(function (a) { return !a.project; });
    arts.forEach(function (a) {
      artByUrl[a.u] = a;
      items.push({ kind: 'text', d: String(a.d || '2021-01-01'), item: a, idx: (window.ARTIGOS || []).indexOf(a) });
    });
    var posts = window.POSTS || [];
    posts.forEach(function (x) {
      items.push({ kind: 'post', d: String(x.d || '2021-01-01'), item: x });
    });
    var filtered = items.filter(function (e) { return matchesFilter(e, allFilter, artByUrl); });
    var nP = 0, nA = 0, nI = 0;
    filtered.forEach(function (e) {
      if (e.kind === 'proj') nP++;
      else if (e.kind === 'text') nA++;
      else nI++;
    });
    return { items: buildBalancedOrder(filtered), nP: nP, nA: nA, nI: nI };
  };

  var metaText = function (data, lg) {
    var parts = [];
    var total = data.items.length;
    if (lg === 'en') {
      parts.push(total + (total === 1 ? ' item' : ' items'));
      if (data.nP) parts.push(data.nP + (data.nP === 1 ? ' project' : ' projects'));
      if (data.nA) parts.push(data.nA + (data.nA === 1 ? ' article' : ' articles'));
      if (data.nI) parts.push(data.nI + (data.nI === 1 ? ' post' : ' posts'));
    } else if (lg === 'es') {
      parts.push(total + (total === 1 ? ' elemento' : ' elementos'));
      if (data.nP) parts.push(data.nP + (data.nP === 1 ? ' proyecto' : ' proyectos'));
      if (data.nA) parts.push(data.nA + (data.nA === 1 ? ' artículo' : ' artículos'));
      if (data.nI) parts.push(data.nI + (data.nI === 1 ? ' post' : ' posts'));
    } else {
      parts.push(total + (total === 1 ? ' item' : ' itens'));
      if (data.nP) parts.push(data.nP + (data.nP === 1 ? ' projeto' : ' projetos'));
      if (data.nA) parts.push(data.nA + (data.nA === 1 ? ' texto' : ' textos'));
      if (data.nI) parts.push(data.nI + (data.nI === 1 ? ' post' : ' posts'));
    }
    return parts.join(' · ');
  };

  var ensureSubBar = function (data, lg) {
    var sub = document.getElementById('hm-all-sub'); if (!sub) return;
    var curCols = getAllCols();
    if (!sub.dataset.built) {
      sub.dataset.built = '1';
      var colsHtml = [1, 2, 3, 4, 5].map(function (n) {
        return '<button type="button" class="art-filter" data-all-cols="' + n + '" aria-pressed="' + String(curCols === n) + '">' + n + '</button>';
      }).join('');
      sub.innerHTML = '<div class="hm-all-cols" role="group"><span id="hm-all-cols-lbl"></span>' + colsHtml + '</div><p class="hm-all-meta" id="hm-all-meta"></p>';
      sub.addEventListener('click', function (e) {
        var cb = e.target.closest('[data-all-cols]');
        if (cb) {
          var n = +cb.dataset.allCols;
          if (n !== getAllCols()) {
            setAllCols(n);
            renderAll();
            pulseView(document.getElementById('hm-all-grid'));
          }
        }
      });
    }
    var lbl = document.getElementById('hm-all-cols-lbl');
    if (lbl && lbl.textContent !== COLS_L[lg]) lbl.textContent = COLS_L[lg];
    var meta = document.getElementById('hm-all-meta');
    if (meta) meta.textContent = metaText(data, lg);
    sub.querySelectorAll('[data-all-cols]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(+b.dataset.allCols === curCols));
    });
  };

  var cardHtml = function (entry, lg) {
    if (entry.kind === 'proj') {
      var p = entry.item;
      var slug = ALIAS[p.slug] || p.slug;
      var href = pre(lg) + '/projetos/' + slug + '/';
      var media = (p.capaAnim && window.capaAnimHTML)
        ? window.capaAnimHTML(p)
        : '<img src="' + esc(p.capa) + '" alt="" loading="lazy" decoding="async" width="1200" height="800"' + (p.capaPosicao ? ' style="object-position:' + esc(p.capaPosicao) + '"' : '') + '>';
      var desc = tx(p.entrega || p.resumo, lg);
      return '<a class="hm-all-card" href="' + href + '" data-all-pj="' + esc(p.slug) + '">'
        + '<div class="work-card-media" style="aspect-ratio:3/2">' + media + '</div>'
        + '<p class="art-card-meta">' + KIND_PROJ[lg] + ' — ' + esc(p.ano) + '</p>'
        + '<h2 class="art-card-title">' + esc(tx(p.titulo, lg)) + '</h2>'
        + (desc ? '<p class="art-card-by">' + esc(desc) + '</p>' : '')
        + '</a>';
    }
    if (entry.kind === 'text') {
      var a = entry.item;
      var title = (lg !== 'pt' && a['t_' + lg]) || a.t;
      var slugA = artSlug(a);
      var hrefA = pre(lg) + '/conteudos/' + encodeURIComponent(slugA) + '/';
      var img = artImgSrc(a, lg);
      var imgStyle = (a.fit ? 'object-fit:' + a.fit + ';' : '') + (a.pos ? 'object-position:' + a.pos + ';' : (a.cropTop ? 'object-position:50% 0%;' : ''));
      var badge = (lg !== 'pt' && a['badge_' + lg]) || a.badge;
      var tags = (a.tags || []).map(function (t) { return tagName(t, lg); }).join(' · ');
      return '<a class="hm-all-card" href="' + hrefA + '" data-all-art="' + entry.idx + '">'
        + '<div class="art-card-media" style="aspect-ratio:3/2' + (a.bg ? ';background:' + esc(a.bg) : '') + '">'
        + (badge ? '<span class="art-badge">' + esc(badge) + '</span>' : '')
        + '<img src="' + esc(img) + '" alt="" width="1200" height="800" loading="lazy" decoding="async"' + (imgStyle ? ' style="' + imgStyle + '"' : '') + '>'
        + '</div>'
        + '<p class="art-card-meta">' + esc(tags) + ' — ' + esc(fmtDate(a.d, lg)) + '</p>'
        + '<h2 class="art-card-title">' + esc(title) + '</h2>'
        + '<p class="art-card-by">' + esc(a.site || '') + '</p>'
        + '</a>';
    }
    var x = entry.item;
    var rVal = Number(x.r) || 1.25;
    var ar = (1 / rVal).toFixed(4);
    var hPx = Math.round(1080 * rVal);
    var count = x.n > 1 ? '<span class="art-ig-count">' + SLIDES_ICO + x.n + '</span>' : '';
    return '<a class="hm-all-card" href="https://www.instagram.com/' + (x.reel ? 'reel' : 'p') + '/' + esc(x.c) + '/" target="_blank" rel="noopener" data-all-ig="' + esc(x.c) + '">'
      + '<div class="art-card-media" style="aspect-ratio:' + ar + '">' + count + '<img src="' + esc(postSrc(x, lg)) + '" alt="" width="1080" height="' + hPx + '" loading="lazy" decoding="async"></div>'
      + '<p class="art-card-meta">Instagram · ' + esc(x.v) + ' — ' + esc(fmtDate(x.d, lg)) + '</p>'
      + '<h2 class="art-card-title">' + postTitle(x, lg) + '</h2>'
      + '</a>';
  };

  var batchIO = null;
  var renderAll = function () {
    var h = hostAll(); if (!h) return;
    if (batchIO) { batchIO.disconnect(); batchIO = null; }
    var lg = lang();
    var grid = document.getElementById('hm-all-grid');
    var sentinel = document.getElementById('hm-all-sentinel');
    var data = buildAllItems();
    var cols = getAllCols();
    lastLangRendered = lg;
    ensureSubBar(data, lg);

    grid.style.setProperty('--all-cols', cols);
    grid.dataset.cols = cols;

    if (!data.items.length) {
      grid.innerHTML = '<p class="hm-all-empty">' + esc(EMPTY_L[lg]) + '</p>';
      if (sentinel) sentinel.hidden = true;
      syncNativeFilterButtons();
      return;
    }

    // Distribui em N colunas reais balanceando altura estimada + alternância de origem e proporção
    var colItems = Array.from({ length: cols }, function () { return []; });
    var colHeights = new Array(cols).fill(0);
    var colLastSrc = new Array(cols).fill('');
    var colLastShape = new Array(cols).fill('');
    var pool = data.items.slice();

    while (pool.length) {
      var cIdx = 0;
      for (var c = 1; c < cols; c++) {
        if (colHeights[c] < colHeights[cIdx]) cIdx = c;
      }
      var aboveSrc = colLastSrc[cIdx];
      var aboveShape = colLastShape[cIdx];
      var leftSrc = cIdx > 0 ? colLastSrc[cIdx - 1] : '';
      var rightSrc = cIdx + 1 < cols ? colLastSrc[cIdx + 1] : '';

      var pick = -1;
      var win = Math.min(pool.length, 18);
      for (var i = 0; i < win; i++) {
        var k = sourceKey(pool[i]), sh = shapeOf(pool[i]);
        if (k !== aboveSrc && k !== leftSrc && k !== rightSrc && (!aboveShape || sh !== aboveShape)) { pick = i; break; }
      }
      if (pick < 0) {
        for (var i2 = 0; i2 < win; i2++) {
          var k2 = sourceKey(pool[i2]);
          if (k2 !== aboveSrc && k2 !== leftSrc && k2 !== rightSrc) { pick = i2; break; }
        }
      }
      if (pick < 0) {
        for (var i3 = 0; i3 < win; i3++) {
          if (sourceKey(pool[i3]) !== aboveSrc) { pick = i3; break; }
        }
      }
      if (pick < 0) pick = 0;

      var chosen = pool.splice(pick, 1)[0];
      colItems[cIdx].push(chosen);
      colLastSrc[cIdx] = sourceKey(chosen);
      colLastShape[cIdx] = shapeOf(chosen);
      colHeights[cIdx] += (1 / aspectRatioOf(chosen)) + (chosen.kind === 'post' ? 0.28 : 0.38);
    }

    // Renderização progressiva: 36 cards por lote para abrir instantâneo e rolar liso
    grid.innerHTML = Array.from({ length: cols }, function () { return '<div class="hm-all-col"></div>'; }).join('');
    var colEls = grid.querySelectorAll('.hm-all-col');
    var cursors = new Array(cols).fill(0);
    var perColBatch = Math.max(4, Math.ceil(36 / cols));
    var hasMore = function () {
      for (var ci = 0; ci < cols; ci++) if (cursors[ci] < colItems[ci].length) return true;
      return false;
    };
    var appendBatch = function () {
      for (var ci = 0; ci < cols; ci++) {
        var start = cursors[ci];
        if (start >= colItems[ci].length) continue;
        var end = Math.min(colItems[ci].length, start + perColBatch);
        var chunk = '';
        for (var j = start; j < end; j++) chunk += cardHtml(colItems[ci][j], lg);
        colEls[ci].insertAdjacentHTML('beforeend', chunk);
        cursors[ci] = end;
      }
      if (!hasMore()) {
        if (batchIO) { batchIO.disconnect(); batchIO = null; }
        if (sentinel) sentinel.hidden = true;
      }
    };
    appendBatch();
    if (sentinel) {
      sentinel.hidden = !hasMore();
      if (!sentinel.hidden && 'IntersectionObserver' in window) {
        batchIO = new IntersectionObserver(function (es) {
          if (es.some(function (e) { return e.isIntersecting; })) appendBatch();
        }, { rootMargin: '900px 0px' });
        batchIO.observe(sentinel);
      } else if (!sentinel.hidden) {
        while (hasMore()) appendBatch();
      }
    }

    syncNativeFilterButtons();
    if (!grid.dataset.bound) {
      grid.dataset.bound = '1';
      grid.addEventListener('click', function (e) {
        var card = e.target.closest('.hm-all-card');
        if (!card || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
        if (card.dataset.allIg) {
          e.preventDefault();
          var x = (window.POSTS || []).find(function (z) { return z.c === card.dataset.allIg; });
          if (x && window.HM_POSTS && window.HM_POSTS.openPosts) window.HM_POSTS.openPosts([x]);
          return;
        }
        if (card.dataset.allArt != null) {
          var nat = document.querySelector('#art-grid .art-card[data-i="' + card.dataset.allArt + '"]');
          if (nat) { e.preventDefault(); nat.click(); }
          return;
        }
      });
    }
  };

  var ensure = function () {
    if (inEnsure) return;
    var seg = document.querySelector('#view-articles .art-seg'); if (!seg) return;
    inEnsure = true;
    try {
      var lg = lang();
      var bAll = seg.querySelector('[data-hm-all]');
      if (!bAll) {
        bAll = document.createElement('button');
        bAll.type = 'button'; bAll.className = 'art-filter';
        bAll.setAttribute('data-hm-all', '');
        bAll.addEventListener('click', function () { if (mode !== 'all') setMode('all'); });
      }
      var bProj = seg.querySelector('[data-hm-proj]');
      if (!bProj) {
        bProj = document.createElement('button');
        bProj.type = 'button'; bProj.className = 'art-filter';
        bProj.setAttribute('data-hm-proj', '');
        bProj.addEventListener('click', function () { if (mode !== 'proj') setMode('proj'); });
      }
      if (seg.firstElementChild !== bProj) seg.insertBefore(bProj, seg.firstElementChild);
      if (bProj.nextElementSibling !== bAll) seg.insertBefore(bAll, bProj.nextElementSibling);
      if (bAll.dataset.l !== lg) { bAll.dataset.l = lg; bAll.innerHTML = ICO_ALL + LAB_ALL[lg]; }
      if (bProj.dataset.l !== lg) { bProj.dataset.l = lg; bProj.innerHTML = ICO_PROJ + LAB_PROJ[lg]; }
      bAll.setAttribute('aria-pressed', String(mode === 'all'));
      bProj.setAttribute('aria-pressed', String(mode === 'proj'));
      if (mode) {
        seg.querySelectorAll('[data-k]').forEach(function (x) {
          if (x.getAttribute('aria-pressed') !== 'false') x.setAttribute('aria-pressed', 'false');
        });
      }
      if (mode === 'all') {
        syncNativeFilterButtons();
        if (lastLangRendered !== lg) renderAll();
      }
    } finally {
      inEnsure = false;
    }
  };

  var setMode = function (next, silent) {
    var prev = mode;
    mode = next;
    var view = document.getElementById('view-articles'); if (!view) return;
    view.classList.toggle('hm-all', next === 'all');
    view.classList.toggle('hm-proj', next === 'proj');
    if (next === 'all') {
      renderAll();
      if (!silent && prev !== 'all') pulseView(document.getElementById('hm-all'));
      if (location.hash === '#projetos') history.replaceState(history.state, '', location.pathname + location.search);
    } else if (next === 'proj') {
      var h = hostProj(), row = h && h.querySelector('.hm-proj-row');
      var cta = document.getElementById('work-dashboard-cta'), bar = document.getElementById('pj-filters'), grid = document.getElementById('work-case-grid');
      if (row && cta && cta.parentNode !== row) row.appendChild(cta);
      if (row && bar && bar.parentNode !== row) { bar.hidden = false; row.appendChild(bar); }
      if (h && grid && grid.parentNode !== h) h.appendChild(grid);
      if (grid) grid.querySelectorAll('.reveal, .mx-wait, .mx-fade').forEach(function (e) { e.classList.add('in', 'visible'); e.classList.remove('mx-wait'); e.style.opacity = ''; });
      if (!silent && prev !== 'proj') pulseView(h);
      if (location.hash !== '#projetos' && !ROOT.test(location.pathname)) history.replaceState(history.state, '', location.pathname + location.search + '#projetos');
    } else {
      if (!silent && prev !== null) pulseView(document.getElementById('art-grid'));
      if (location.hash === '#projetos') history.replaceState(history.state, '', location.pathname + location.search);
    }
    ensure();
  };

  document.addEventListener('click', function (e) {
    var kBtn = e.target.closest && e.target.closest('#art-filters [data-k], .art-float [data-k]');
    if (!kBtn) return;
    var k = kBtn.dataset.k || '';
    if (k.indexOf('m:') === 0) {
      if (mode) setMode(null);
      else pulseView(document.getElementById('art-grid'));
      return;
    }
    if (mode === 'all') {
      e.preventDefault();
      e.stopImmediatePropagation();
      var nextF = (kBtn.classList.contains('art-ico') && allFilter === k) ? 'all' : k;
      if (nextF !== allFilter) {
        allFilter = nextF;
        syncNativeFilterButtons();
        renderAll();
        pulseView(document.getElementById('hm-all-grid'));
      }
      if (kBtn.closest('.art-float')) {
        var g = document.getElementById('hm-all-grid');
        if (g && g.getBoundingClientRect().top < 0) scrollTo({ top: g.getBoundingClientRect().top + scrollY - 90, behavior: 'smooth' });
      }
    } else if (!mode) {
      pulseView(document.getElementById('art-grid'));
    }
  }, true);

  var boot = function () {
    ensure();
    var bar = document.getElementById('art-filters');
    if (bar) {
      new MutationObserver(function () { ensure(); }).observe(bar, { childList: true });
    }
    new MutationObserver(function () { ensure(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    if (wantProjInitially || location.hash === '#projetos') {
      setMode('proj', true);
    } else if (wantAllInitially) {
      setMode('all', true);
    }
    var finishBoot = function () {
      document.documentElement.classList.remove('hm-boot-loading');
      var ld = document.getElementById('mx-loader');
      if (ld && !ld.classList.contains('out')) {
        ld.classList.add('out');
        setTimeout(function () { if (ld.parentNode) ld.remove(); }, 520);
      }
    };
    if (document.fonts && document.fonts.ready) {
      Promise.race([document.fonts.ready, new Promise(function (r) { setTimeout(r, 700); })]).then(function () {
        requestAnimationFrame(finishBoot);
      });
    } else { requestAnimationFrame(finishBoot); }
    mqMob.addEventListener('change', function () { if (mode === 'all') renderAll(); });
    addEventListener('hashchange', function () {
      if (location.hash === '#projetos') setMode('proj');
    });
  };
  // Executa logo após site.js no DOMContentLoaded (sem esperar window.load!)
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

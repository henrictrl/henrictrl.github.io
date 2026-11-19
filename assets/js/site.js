/* ===================== IDIOMAS (PT · EN · ES) =====================
   PT é o texto do próprio HTML. EN/ES vêm deste dicionário.
   data-i18n="chave" → troca o innerHTML · data-i18n-aria="chave" → troca o aria-label
   data-i18n-about="larguraEm" → texto alinhado à esquerda; as quebras são calculadas para a largura indicada */
const I18N = {
  en: {
    'about.h1': 'About Henrique Marinhos', 'nav.home': 'Home', 'nav.about': 'About', 'nav.work': 'Projects', 'nav.articles': 'Articles', 'nav.contact': 'Contact',
    'menu.open': 'Open menu', 'menu.close': 'Close menu',
    'hero': '<span class="dim">Designer and<br>PR specialist.</span><br>Critical, functional<br>communication<br>strategies for brands.',
    'hint.mouse': 'hover - click to see the photo', 'hint.touch': 'drag your finger - tap to see the photo',
    'portrait.aria': 'Portrait of Henrique Marinhos. Activate to see the still photo.',
    'about.label': 'About me', 'about.more': 'Learn more',
    // dois textos: cada um escolhido para justificar sem buracos na sua largura (desktop 31.6em / mobile 19.7em)
    'about.text.d': 'With a bachelor\'s degree in Public Relations from Unesp, I develop brands and <em>branding</em> and <em>design</em> strategies. I develop visual identities, <em>landing pages</em> and graphic assets for brands. I am also a cultural writer for independent news outlets.',
    'about.text.m': 'With a bachelor\'s degree in Public Relations from Unesp, I develop brands and <em>branding</em> and <em>design</em> strategies. I develop visual identities, <em>landing pages</em> and graphic assets for brands. I am also a cultural writer for independent news outlets.',
    'work.label': 'Projects', 'work.seeall': 'See all',
    'work.title': '<span class="dim">Graphic design,</span><br>brands and interfaces',
    'art.title': '<span class="dim">Cultural criticism</span><br>on film, music,<br>TV and literature.',
    'f.all': 'All', 'am.fav': 'Highlights', 'f.cabine': 'Screenings', 'f.carrosseis': 'Carousels', 'f.premiacoes': 'Awards',
    'tag.Cinema': 'Film', 'tag.Cabine': 'Screening', 'tag.Música': 'Music', 'tag.Televisão': 'Television', 'tag.Literatura': 'Literature', 'tag.Livro': 'Book', 'tag.Artes visuais': 'Visual arts',
    'art.various': 'Various authors', 'art.with': 'With', 'art.and': ' and ',
    'am.open': 'Open on site', 'am.book': 'Open book', 'am.share': 'Share', 'am.copied': 'Link copied', 'am.copy': 'Copy article link:', 'am.link.Repositório Unesp': 'Unesp repository',
    'am.loading': 'Loading…', 'am.translating': 'Translating…',
    'am.note': 'Machine translation from Portuguese.', 'am.original': 'Read the original',
    'cv.download': 'Download résumé', 'cert.title': 'Certificates', 'aboutp.exp': 'Experience', 'aboutp.edu': 'Education', 'aboutp.extra': 'Other activities', 'aboutp.skills': 'Technical skills', 'art.grid': 'Grid view',
    'footer.headline': "Let's work together?",
    'lightbox.hint': 'Scroll to zoom · drag to move',
    'aboutp.lang': 'Languages',
    'credit.text': 'Site designed and developed by Henrique Marinhos.', 'credit.link': 'How this site was made →',
    'top': 'Back to top ↑', 'am.text': 'Text', 'am.seepost': 'See post', 'am.seetext': 'See text',
    'doc.desc': 'Portfolio of Henrique Marinhos, designer focused on brand creation, editorial design, web design and B2B communication strategies.'
  },
  es: {
    'about.h1': 'Sobre Henrique Marinhos', 'nav.home': 'Inicio', 'nav.about': 'Sobre mí', 'nav.work': 'Proyectos', 'nav.articles': 'Artículos', 'nav.contact': 'Contacto',
    'menu.open': 'Abrir menú', 'menu.close': 'Cerrar menú',
    'hero': '<span class="dim">Diseñador y<br>relacionista público.</span><br>Estrategias de<br>comunicación críticas y<br>funcionales para marcas.',
    'hint.mouse': 'pasa el mouse - haz clic para ver la foto', 'hint.touch': 'arrastra el dedo - toca para ver la foto',
    'portrait.aria': 'Retrato de Henrique Marinhos. Actívalo para ver la foto.',
    'about.label': 'Sobre mí', 'about.more': 'Saber más',
    'about.text.d': 'Soy bachiller en Relaciones Públicas por la Unesp y desarrollo marcas y estrategias de <em>branding</em> y diseño. Desarrollo identidades visuales, <em>landing pages</em> y piezas gráficas para marcas. También soy redactor cultural en portales periodísticos independientes.',
    'about.text.m': 'Soy bachiller en Relaciones Públicas por la Unesp y desarrollo marcas y estrategias de <em>branding</em> y diseño. Desarrollo identidades visuales, <em>landing pages</em> y piezas gráficas para marcas. También soy redactor cultural en portales periodísticos independientes.',
    'work.label': 'Proyectos', 'work.seeall': 'Ver todos',
    'work.title': '<span class="dim">Diseño gráfico,</span><br>marcas e interfaces',
    'art.title': '<span class="dim">Artículos culturales</span><br>sobre cine, música,<br>televisión y literatura.',
    'f.all': 'Todos', 'am.fav': 'Destacados', 'f.cabine': 'Pases de prensa', 'f.carrosseis': 'Carruseles', 'f.premiacoes': 'Premios',
    'tag.Cinema': 'Cine', 'tag.Cabine': 'Pase de prensa', 'tag.Música': 'Música', 'tag.Televisão': 'Televisión', 'tag.Literatura': 'Literatura', 'tag.Livro': 'Libro', 'tag.Artes visuais': 'Artes visuales',
    'art.various': 'Varios autores', 'art.with': 'Con', 'art.and': ' y ',
    'am.open': 'Abrir en el sitio', 'am.book': 'Abrir libro', 'am.link.Repositório Unesp': 'Repositorio Unesp',
    'am.loading': 'Cargando…', 'am.translating': 'Traduciendo…',
    'am.note': 'Traducción automática del portugués.', 'am.original': 'Leer el original',
    'cv.download': 'Descargar currículum', 'cert.title': 'Certificados', 'aboutp.exp': 'Experiencia', 'aboutp.edu': 'Formación', 'aboutp.extra': 'Actividades complementarias', 'aboutp.skills': 'Habilidades técnicas', 'art.grid': 'Ver en cuadrícula',
    'footer.headline': '¿Trabajamos juntos?',
    'lightbox.hint': 'Desplaza para hacer zoom · arrastra para mover',
    'aboutp.lang': 'Idiomas',
    'credit.text': 'Sitio diseñado y desarrollado por Henrique Marinhos.', 'credit.link': 'Cómo se hizo este sitio →',
    'top': 'Volver arriba ↑', 'am.text': 'Texto', 'am.seepost': 'Ver post', 'am.seetext': 'Ver texto', 'am.share': 'Compartir', 'am.copied': 'Enlace copiado', 'am.copy': 'Copie el enlace del artículo:',
    'doc.desc': 'Portafolio de Henrique Marinhos, diseñador enfocado en creación de marcas, diseño editorial, diseño web y estrategias de comunicación B2B.'
  }
};
let LANG = 'pt';
// imagens de posts traduzidas: x.tr lista os slides (1..n) com NN.en.webp / NN.es.webp
// capa de artigo vinda de um post: usa o slide traduzido quando houver
const artImg = (a) => { if (a.coverFromText) return a.textCover || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; const m = /^assets\/posts\/([^/]+)\/01\.webp$/.exec(a.imgPath || ''); const p = m && ((window.POSTS || []).find(x => x.c === m[1])); return p ? postSrc(p, 0) : (a.imgPath || ('assets/artigos/' + a.img)); };
const capOf = (x) => ((LANG !== 'pt' && x['cap_' + LANG]) || x.cap || '').trim();
const postSrc = (x, i) => { const slide = i + (x.skipFirst ? 1 : 0), num = slide + 1, b = `assets/posts/${x.c}/${String(num).padStart(2, '0')}`; return LANG !== 'pt' && x.tr && x.tr.includes(num) ? `${b}.${LANG}.webp` : `${b}.webp`; };
const i18n = (k, fb) => (LANG !== 'pt' && I18N[LANG] && I18N[LANG][k]) || fb;
const langHooks = [];
const onLang = (fn) => langHooks.push(fn);
// carrosséis: vai para o slide vizinho por índice absoluto; o snap fica desligado durante a animação
// (no Safari, scrollBy suave num trilho com scroll-snap mandatory volta para o slide de origem)
const slideTrack = (tr, dir) => {
  if (!tr) return false;
  const w = tr.clientWidth || 1, n = tr.children.length, cur = Math.round(tr.scrollLeft / w), k = Math.max(0, Math.min(n - 1, cur + dir));
  if (k === cur) return false;
  const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  clearTimeout(tr._snapT); tr.style.scrollSnapType = 'none';
  tr.scrollTo({ left: k * w, behavior: smooth ? 'smooth' : 'auto' });
  const restore = () => { clearTimeout(tr._snapT); tr.style.scrollSnapType = ''; tr.removeEventListener('scrollend', restore); };
  tr.addEventListener('scrollend', restore); tr._snapT = setTimeout(restore, smooth ? 800 : 50);
  return true;
};
const PT_HTML = new WeakMap(), PT_ARIA = new WeakMap();
// aplica o idioma atual a um elemento com data-i18n (guarda o PT original na 1ª vez)
const applyLangTo = (el) => {
  if (!PT_HTML.has(el)) PT_HTML.set(el, el.innerHTML);
  const v = LANG === 'pt' ? PT_HTML.get(el) : I18N[LANG][el.dataset.i18n];
  if (v != null && el.innerHTML !== v) { el.innerHTML = v; return true; }
  return false;
};
/* Troca de idioma animada: todo o texto visível vira símbolos (cinza) de uma vez e cada letra assenta
   num momento aleatório, sem ordem, ao longo de 1,2 s. Só anima o que está na tela; respeita reduced-motion. */
const Scramble = (() => {
  const SYM = '#%&*+=/\\<>~^×÷§¶@·:;!?{}[]()|°±≈≠∆∑Ωµ∂∞√◊¤©®†‡•'; // todos presentes na Inter (sem fallback)
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const live = new Set();
  const esc = (x) => x.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inView = (el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.bottom > 0 && r.top < innerHeight; };
  const run = (el, delay = 0) => {
    if (reduce.matches || !inView(el)) return;
    const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), items = [];
    let total = 0, n;
    while ((n = tw.nextNode())) {
      if (!n.nodeValue.trim()) continue;
      items.push({ node: n, text: n.nodeValue, wrap: document.createElement('span'), cache: [], t: [] });
      total += n.nodeValue.length;
    }
    if (!total) return;
    const end = 1200; // mesma duração para todos os blocos
    items.forEach(it => {
      it.node.replaceWith(it.wrap);
      for (let i = 0; i < it.text.length; i++) it.t[i] = 180 + Math.random() * (end - 180); // momento aleatório por letra
    });
    el.setAttribute('aria-busy', 'true');
    const job = { raf: 0, t0: performance.now() + delay }; // delay Infinity = segura nos símbolos até release()
    const finish = () => { cancelAnimationFrame(job.raf); items.forEach(it => it.wrap.replaceWith(it.node)); el.removeAttribute('aria-busy'); live.delete(job); };
    job.cancel = finish; live.add(job);
    let lastSwap = 0;
    const tick = (now) => {
      const t = now - job.t0, swap = now - lastSwap > 140; // ~7 trocas/s; a cada troca só ~1/3 dos símbolos muda
      if (swap) lastSwap = now;
      for (const it of items) {
        // trechos alternados: letra assentada (cor normal) | símbolo (span .scr)
        let html = '', run = '', inScr = false;
        const out = () => { if (run) html += inScr ? `<span class="scr">${esc(run)}</span>` : esc(run); run = ''; };
        for (let i = 0; i < it.text.length; i++) {
          const c = it.text[i], sp = /\s/.test(c), scr = !sp && it.t[i] > t;
          if (!sp && scr !== inScr) { out(); inScr = scr; }
          if (scr && (!it.cache[i] || (swap && Math.random() < 0.35))) it.cache[i] = SYM[(Math.random() * SYM.length) | 0];
          run += scr ? it.cache[i] : c;
        }
        out();
        if (it.wrap.innerHTML !== html) it.wrap.innerHTML = html;
      }
      t < end ? (job.raf = requestAnimationFrame(tick)) : finish();
    };
    job.raf = requestAnimationFrame(tick);
  };
  return {
    run,
    flush: () => [...live].forEach(j => j.cancel()),
    runAll: (els, delay) => els.forEach(el => run(el, delay)), // todos ao mesmo tempo
    release: () => { const now = performance.now(); live.forEach(j => { if (j.t0 === Infinity) j.t0 = now; }); }
  };
})();
// Calcula as quebras de linha do texto traduzido de Sobre para manter uma largura visual previsível.
const measureCtx = document.createElement('canvas').getContext('2d');
const layoutAboutLines = (el, html, widthEm) => {
  const fam = getComputedStyle(el).fontFamily, W = widthEm * 100;
  const words = html.split(' ');
  const wOf = (w) => { measureCtx.font = `${/<em>/.test(w) ? 'italic ' : ''}400 100px ${fam}`; return measureCtx.measureText(w.replace(/<[^>]+>/g, '')).width; };
  measureCtx.font = `400 100px ${fam}`; const sp = measureCtx.measureText(' ').width;
  const ww = words.map(wOf), n = words.length, best = new Array(n + 1).fill(Infinity), nxt = new Array(n + 1);
  best[n] = 0;
  for (let i = n - 1; i >= 0; i--) {
    let len = -sp;
    for (let j = i + 1; j <= n; j++) {
      len += ww[j - 1] + sp; if (len > W) break;
      const gaps = Math.max(j - i - 1, 1);
      const c = (j === n ? 0 : ((W - len) / gaps) ** 3) + best[j]; // pune espaços largos entre palavras (estilo TeX)
      if (c < best[i]) { best[i] = c; nxt[i] = j; }
    }
    if (!nxt[i]) { best[i] = best[i + 1] + 1e9; nxt[i] = i + 1; } // palavra maior que a linha: segue sozinha
  }
  const lines = []; for (let i = 0; i < n; i = nxt[i]) lines.push(words.slice(i, nxt[i]).join(' '));
  el.innerHTML = lines.map(l => `<span class="l">${l}</span>`).join(' ');
};
const setLang = (lang, animate = false) => {
  if (!['pt', 'en', 'es'].includes(lang)) lang = 'pt';
  if (animate && lang === LANG) return; // clique na bandeira ativa: nada a fazer
  Scramble.flush(); // encerra animação em curso antes de trocar o HTML
  LANG = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-br' : lang;
  const changed = [...document.querySelectorAll('[data-i18n]')].filter(applyLangTo);
  if (animate) Scramble.runAll(changed);
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    if (!PT_ARIA.has(el)) PT_ARIA.set(el, el.getAttribute('aria-label'));
    el.setAttribute('aria-label', LANG === 'pt' ? PT_ARIA.get(el) : I18N[LANG][el.dataset.i18nAria] || PT_ARIA.get(el));
  });
  document.querySelectorAll('[data-i18n-about]').forEach(el => {
    if (!PT_HTML.has(el)) PT_HTML.set(el, el.innerHTML);
    if (LANG === 'pt') { el.innerHTML = PT_HTML.get(el); if (animate) Scramble.run(el); }
    else document.fonts.ready.then(() => { if (LANG !== 'pt') { layoutAboutLines(el, I18N[LANG][+el.dataset.i18nAbout > 25 ? 'about.text.d' : 'about.text.m'], +el.dataset.i18nAbout); if (animate && LANG === lang) Scramble.run(el); } });
  });
  const md = document.querySelector('meta[name="description"]');
  if (md) { if (!md.dataset.pt) md.dataset.pt = md.content; md.content = i18n('doc.desc', md.dataset.pt); }
  document.querySelectorAll('.lang-btn').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === LANG));
  HMI.sync(LANG); // endereço (/en/, /es/), canonical e hreflang
  langHooks.forEach(fn => fn());
};
// bandeiras (SVG inline; ids únicos por instância por causa do clipPath da Union Jack)
let flagSeq = 0;
const FLAGS = {
  pt: () => '<svg viewBox="0 0 21 15" aria-hidden="true"><rect width="21" height="15" fill="#009C3B"/><path d="M10.5 1.6 19.3 7.5 10.5 13.4 1.7 7.5z" fill="#FFDF00"/><circle cx="10.5" cy="7.5" r="3.4" fill="#002776"/><path d="M7.3 6.8c2.1-.6 4.4-.3 6.3.9" stroke="#fff" stroke-width=".55" fill="none"/></svg>',
  en: () => { const id = 'ukc' + (++flagSeq); return `<svg viewBox="0 0 60 30" preserveAspectRatio="none" aria-hidden="true"><clipPath id="${id}"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#${id})" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>`; },
  es: () => '<svg viewBox="0 0 21 15" aria-hidden="true"><rect width="21" height="15" fill="#AA151B"/><rect y="3.75" width="21" height="7.5" fill="#F1BF00"/></svg>'
};
const LANG_NAMES = { pt: 'Português', en: 'English', es: 'Español' };
const initLang = () => {
  document.querySelectorAll('.lang-switch').forEach(box => {
    box.innerHTML = ['pt', 'en', 'es'].map(l => `<button class="lang-btn" type="button" data-lang="${l}" lang="${l}" aria-pressed="false" aria-label="${LANG_NAMES[l]}" title="${LANG_NAMES[l]}">${FLAGS[l]()}</button>`).join('');
    box.addEventListener('click', (e) => {
      const b = e.target.closest('.lang-btn'); if (!b) return;
      b.classList.remove('is-pop'); void b.offsetWidth; b.classList.add('is-pop'); // toque na bandeira
      setLang(b.dataset.lang, true);
    });
  });
  setLang(HMI.initial());
};
document.addEventListener('DOMContentLoaded', () => {

  const ROUTES = ['home', 'work', 'about', 'articles'];
  let workPageRendered = false;
  let aboutPageRendered = false;
  /* --- Entrada ao rolar --- */

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), parseFloat(entry.target.dataset.delay || '0') * 1000);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px 18% 0px' }); // começa um pouco antes de entrar na tela
  const refreshReveal = (node = document) => node.querySelectorAll('.reveal:not(.in-view), .reveal-stagger:not(.in-view)').forEach(el => revealObserver.observe(el));
  refreshReveal();

  /* --- Rotas --- */
  const showRoute = (route, navId) => {
    document.body.classList.toggle('home-route', route === 'home');
    document.title = route === 'home' ? 'Henrique Marinhos' : ({ work: i18n('nav.work', 'Projetos'), articles: i18n('nav.articles', 'Artigos'), about: i18n('nav.about', 'Sobre') })[route] + ' — Henrique Marinhos';
    ROUTES.forEach(r => document.getElementById('view-' + r).style.display = (r === route) ? 'block' : 'none');
    if (navId) {
      document.querySelectorAll('[data-nav-id]').forEach(a => a.classList.toggle('current', a.dataset.navId === navId));
    }
    window.scrollTo(0, 0);
    if (route === 'work') renderWorkPage();
    if (route === 'about') renderAboutPage();
    if (route === 'articles') renderArticlesPage();
    refreshReveal(document.getElementById('view-' + route));
    window.dispatchEvent(new CustomEvent('portfolio:route-enter', { detail: { route } }));
  };

  const ROUTE_PATHS = { home: '/', about: '/sobre/', work: '/projetos/', articles: '/artigos/' };
  const routeTo = (route, navId, replace = false) => {
    if (amOverlay.classList.contains('open')) closeArticle(true);
    const path = ROUTE_PATHS[route] || '/';
    if (window.HM_COL) { window.HM_COL = null; if (route === 'articles' && window.HM_applyCol) setTimeout(window.HM_applyCol); } // sai da coleção
    if (HMI.path() !== path || location.hash) {
      (replace ? history.replaceState : history.pushState).call(history, { portfolioRoute: route }, '', path);
    }
    showRoute(route, navId);
  };

  document.querySelectorAll('[data-route]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      routeTo(link.dataset.route, link.dataset.navId);
    });
  });

  document.querySelectorAll('[data-nav-id="contato"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (amOverlay.classList.contains('open')) closeArticle(true);
      history.pushState({ portfolioRoute: 'home', contact: true }, '', '/#contato');
      showRoute('home', 'contato');
      requestAnimationFrame(() => document.getElementById('contato')?.scrollIntoView());
    });
  });

  /* --- Menu hambúrguer (mobile) --- */
  const navToggle = document.getElementById('nav-toggle');
  const topHdr = document.querySelector('header.top-header');
  const setMenu = (open) => {
    topHdr.classList.toggle('menu-open', open);
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? i18n('menu.close', 'Fechar menu') : i18n('menu.open', 'Abrir menu'));
  };
  navToggle.addEventListener('click', () => setMenu(!topHdr.classList.contains('menu-open')));
  document.querySelectorAll('#nav-panel a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && topHdr.classList.contains('menu-open')) setMenu(false); });
  matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* --- Cabeçalho ao rolar --- */
  const floatingHeader = document.getElementById('floating-header');
  const topHeader = document.querySelector('header.top-header');
  let lastY = window.scrollY, ticking = false;

  let hdrY = lastY, hdrScrolled = null, hdrVisible = null;
  const markScrolled = () => { if (window.scrollY > 4) { document.documentElement.classList.add('hm-rolou'); removeEventListener('scroll', markScrolled); } };
  addEventListener('scroll', markScrolled, { passive: true }); markScrolled();
  window.addEventListener('scroll', () => {
    hdrY = window.scrollY; // lido no evento: no rAF a leitura forçava layout depois das outras animações
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = hdrY, deltaY = y - lastY, sc = y > 20;
        if (sc !== hdrScrolled) { hdrScrolled = sc; topHeader.classList.toggle('scrolled', sc); }
        if (y <= 300) { if (hdrVisible) { hdrVisible = false; floatingHeader.classList.remove('visible'); } lastY = y; }
        else if (Math.abs(deltaY) > 6) {
          const vis = deltaY < 0;
          if (vis !== hdrVisible) { hdrVisible = vis; floatingHeader.classList.toggle('visible', vis); }
          lastY = y;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  const renderWorkPage = () => {
    if (workPageRendered) return;
    workPageRendered = true;
    applyLangTo(document.getElementById('work-title')); // título fixo no HTML (espaço reservado)
  };

  /* --- Leitor de artigos --- */
  const amOverlay = document.getElementById('art-modal-overlay');
  const amFrame = document.getElementById('am-frame'), amStage = amOverlay.querySelector('.am-stage');
  // troca a página do iframe sem criar entrada no histórico (senão o "voltar" do fechamento navegava o iframe e o modal não fechava)
  let amFrameUrl = 'about:blank';
  const frameGo = (url) => { amFrameUrl = url; try { amFrame.contentWindow.location.replace(url); } catch (_) { amFrame.src = url; } };
  const amReader = document.getElementById('am-reader'), amLoadL = document.getElementById('am-loading-l');
  /* Leitor próprio (PT, EN e ES): o texto vem da API do WordPress (Persona e Tesoura com Ponta liberam CORS),
     é limpo (sem estilos/scripts) e mantém imagens, legendas, citações, listas, links, vídeos do YouTube, Spotify,
     posts do Instagram e tweets. Em EN/ES cada bloco é traduzido pelo Google preservando itálicos e links.
     Velocidade: busca começa no hover/toque do card, traduções saem em lotes paralelos e ficam em cache local. */
  const WP_HOSTS = /(^|\.)(personaunesp\.com\.br|tesouracomponta\.com)$/;
  const isWP = (u) => { try { return WP_HOSTS.test(new URL(u).hostname); } catch (e) { return false; } };
  const memCache = new Map();
  const cacheGet = (k) => { if (memCache.has(k)) return memCache.get(k); try { const v = localStorage.getItem('hm-rd:' + k); if (v) { memCache.set(k, v); return v; } } catch (e) {} return null; };
  const cachePut = (k, v) => { memCache.set(k, v); try { localStorage.setItem('hm-rd:' + k, v); } catch (e) { try { Object.keys(localStorage).filter(x => x.startsWith('hm-rd:')).forEach(x => localStorage.removeItem(x)); } catch (e2) {} } };
  const inflight = new Map();
  const once = (k, fn) => { if (!inflight.has(k)) inflight.set(k, fn().finally(() => inflight.delete(k))); return inflight.get(k); };
  const RD_VER = 'v6';

  // 1) HTML bruto do WordPress
  const fetchWP = (u) => {
    const article = (window.ARTIGOS || []).find(x => x.u === u);
    const textCover = !!(article && article.coverFromText);
    const cacheKey = RD_VER + (textCover ? ':raw-text:' : ':raw:') + u;
    return once((textCover ? 'wp-text:' : 'wp:') + u, async () => {
    const hit = cacheGet(cacheKey); if (hit) {
      if (textCover) { const cachedImage = (hit.match(/<img[^>]+src="([^"]+)"/) || [])[1]; if (cachedImage) article.textCover = cachedImage; }
      return hit;
    }
    const url = new URL(u), slug = url.pathname.split('/').filter(Boolean).pop();
    const j = await fetch(`${url.origin}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_fields=content,_links,_embedded&_embed=wp:featuredmedia`).then(r => { if (!r.ok) throw new Error('wp ' + r.status); return r.json(); });
    if (!j[0]) throw new Error('wp vazio');
    let html = cleanWP(j[0].content.rendered);
    // capa (imagem destacada do post — no Tesoura com Ponta ela não está no corpo do texto); evita repetir se já for a 1ª imagem
    const fm = j[0]._embedded && j[0]._embedded['wp:featuredmedia'] && j[0]._embedded['wp:featuredmedia'][0];
    const sz = fm && fm.media_details && fm.media_details.sizes;
    const cover = fm && fm.source_url ? (((sz && (sz.large || sz.medium_large || {}).source_url) || fm.source_url)).replace(/^http:\/\//, 'https://') : '';
    const base = (x) => (x || '').split('/').pop().replace(/-\d+x\d+(?=\.)/, '').replace(/\.[a-z]+$/i, '').replace(/-scaled$/, '');
    const firstImg = (html.match(/<img[^>]+src="([^"]+)"/) || [])[1];
    if (textCover && firstImg) article.textCover = firstImg;
    if (cover && base(cover) !== base(firstImg) && !(article && article.coverFromText)) html = `<figure class="am-cover"><img src="${cover}" alt="" decoding="async"></figure>` + html;
    cachePut(cacheKey, html); return html;
    });
  };

  // 2) limpeza: mantém só o que o leitor sabe mostrar, sem perder mídia
  const INLINE = /^(A|EM|I|STRONG|B|U|S|SUB|SUP|BR|CODE|MARK|SMALL|SPAN|IMG)$/;
  const cleanWP = (raw) => {
    const box = document.createElement('div'); box.innerHTML = raw;
    // o WordPress do Persona entrega http:// (conteúdo misto, bloqueado em https): sobe tudo para https
    box.querySelectorAll('img, iframe, source').forEach(el => ['src', 'srcset'].forEach(at => {
      const v = el.getAttribute(at); if (v) el.setAttribute(at, v.replace(/(^|[\s,])http:\/\//g, '$1https://'));
    }));
    // posts do Instagram / tweets: guardados intactos (o script oficial deles monta o card)
    const embeds = [];
    box.querySelectorAll('blockquote.instagram-media, blockquote.twitter-tweet').forEach(b => { const ph = document.createElement('x-embed'); ph.setAttribute('data-k', embeds.length); embeds.push(b.outerHTML); b.replaceWith(ph); });
    box.querySelectorAll('script, style, noscript, link, meta, form, input, button, svg, .sharedaddy, .jp-relatedposts, .wp-block-buttons').forEach(e => e.remove());
    // vídeo do jetpack: fica só o iframe
    box.querySelectorAll('.jetpack-video-wrapper, .wp-block-embed__wrapper').forEach(w => w.replaceWith(...w.childNodes));
    // spans de estilo do editor antigo: desembrulha
    box.querySelectorAll('span').forEach(s => s.replaceWith(...s.childNodes));
    // b/i → strong/em
    box.querySelectorAll('b, i').forEach(e => { const n = document.createElement(e.tagName === 'B' ? 'strong' : 'em'); n.append(...e.childNodes); e.replaceWith(n); });
    // atributos: só os necessários
    const KEEP = { A: ['href'], IMG: ['src', 'srcset', 'sizes', 'alt', 'width', 'height'], IFRAME: ['src', 'width', 'height', 'title', 'allow', 'allowfullscreen'], BLOCKQUOTE: ['class', 'data-instgrm-permalink', 'data-instgrm-version', 'cite'], OL: ['start'], TD: ['colspan', 'rowspan'], TH: ['colspan', 'rowspan'] };
    box.querySelectorAll('*').forEach(el => {
      const keep = KEEP[el.tagName] || [];
      [...el.attributes].forEach(at => { if (!keep.includes(at.name)) el.removeAttribute(at.name); });
      if (el.tagName === 'BLOCKQUOTE' && el.className && !/instagram-media|twitter-tweet/.test(el.className)) el.removeAttribute('class');
    });
    box.querySelectorAll('img').forEach(img => { img.setAttribute('loading', 'lazy'); img.setAttribute('decoding', 'async'); if (!img.getAttribute('src')) img.remove(); });
    box.querySelectorAll('a').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
    // iframes: só players conhecidos; YouTube/Vimeo ganham caixa 16:9 (ou proporção original)
    box.querySelectorAll('iframe').forEach(f => {
      const src = f.getAttribute('src') || '';
      if (!/^https:\/\/(www\.)?(youtube\.com|youtube-nocookie\.com|player\.vimeo\.com|open\.spotify\.com|w\.soundcloud\.com|embed\.music\.apple\.com|www\.instagram\.com)\//.test(src)) { f.remove(); return; }
      f.setAttribute('loading', 'lazy'); f.setAttribute('allowfullscreen', '');
      const wrap = document.createElement('div');
      if (/spotify/.test(src)) { wrap.className = 'am-audio'; f.removeAttribute('width'); f.removeAttribute('height'); f.style.height = '152px'; f.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'); }
      else if (/soundcloud|music\.apple/.test(src)) { wrap.className = 'am-audio'; f.style.height = Math.min(+f.getAttribute('height') || 166, 450) + 'px'; }
      else { wrap.className = 'am-video'; const w = +f.getAttribute('width') || 16, h = +f.getAttribute('height') || 9; wrap.style.aspectRatio = `${w} / ${h}`; }
      f.replaceWith(wrap); wrap.appendChild(f);
    });
    // texto/inline solto no topo (editor antigo) vira parágrafo
    const out = document.createElement('div'); let p = null;
    [...box.childNodes].forEach(n => {
      const inline = n.nodeType === 3 || (n.nodeType === 1 && INLINE.test(n.tagName));
      if (inline) {
        if (n.nodeType === 1 && n.tagName === 'BR' && p && p.lastChild && p.lastChild.nodeName === 'BR') { p.lastChild.remove(); p = null; return; } // <br><br> = novo parágrafo
        if (n.nodeType === 3 && /\n\s*\n/.test(n.textContent) && !n.textContent.trim()) { p = null; return; } // linha em branco = novo parágrafo
        if (n.nodeType === 3 && !n.textContent.trim() && !p) return;
        if (!p) { p = document.createElement('p'); out.appendChild(p); }
        p.appendChild(n);
      } else { p = null; out.appendChild(n); }
    });
    out.querySelectorAll('.am-audio').forEach(a => out.appendChild(a)); // playlists/players: só no final do texto
    out.querySelectorAll('p').forEach(x => { if (!x.textContent.trim() && !x.querySelector('img, iframe, x-embed')) x.remove(); });
    return out.innerHTML.replace(/<x-embed data-k="(\d+)"><\/x-embed>/g, (_, k) => embeds[+k]);
  };

  // 3) tradução por blocos (HTML preservado), lotes em paralelo
  const TBLOCK = 'p, h1, h2, h3, h4, h5, h6, li, figcaption, td, th, dt, dd';
  const gtxHtml = async (arr, tl) => {
    const r = await fetch('https://translate.googleapis.com/translate_a/t?client=gtx&sl=pt&tl=' + tl + '&format=html', {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, body: arr.map(q => 'q=' + encodeURIComponent(q)).join('&') });
    if (!r.ok) throw new Error('gtx ' + r.status);
    let j = await r.json(); if (!Array.isArray(j)) j = [j];
    j = j.map(x => Array.isArray(x) ? x[0] : x);
    if (j.length !== arr.length) throw new Error('gtx desalinhado');
    return j;
  };
  const tidy = (h) => h.replace(/(<\/(?:em|strong|a|u|code|mark|sub|sup)>)\s+([,.;:!?)\]»”])/g, '$1$2').replace(/([(\[«“])\s+(<(?:em|strong|a)[\s>])/g, '$1$2').trim();
  /* Nomes que a tradução automática não pode tocar:
     · "Henrique Marinhos" (e os nomes dos sites) ficam sempre como estão;
     · títulos de obras (em itálico) usam o nome oficial do idioma, do glossário (Wikidata, assets/data/glossario.js);
       sem nome oficial conhecido, o título fica no original. Itálico que é frase (ênfase) segue traduzível. */
  const KEEP_NAMES = /(Henrique Marinhos|Tesoura com Ponta|Persona)/g;
  const normT = (x) => x.replace(/\s+/g, ' ').trim().replace(/^[\s"“”‘’'(«]+|[\s"“”‘’')»,.;:!?–-]+$/g, '');
  // itálico com cara de título (curto, maiúsculas, sem ser frase/legenda) → não traduz
  const looksTitle = (t) => {
    if (!t || /\bfoto\b/i.test(t) || /[.!?…]$/.test(t) || /[.!?] /.test(t)) return false;
    const w = t.split(' '); if (w.length > 8 || (t.includes(',') && w.length > 4)) return false;
    if (!/^[\p{Lu}\d¡¿"“]/u.test(t)) return false;
    const caps = w.filter(x => /^[\p{Lu}\d]/u.test(x)).length;
    return w.length <= 3 || caps / w.length >= 0.5 || /[:–]/.test(t);
  };
  const protectNames = (box, tl) => {
    const walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT), hits = [];
    while (walker.nextNode()) { const n = walker.currentNode; KEEP_NAMES.lastIndex = 0; if (KEEP_NAMES.test(n.nodeValue) && !n.parentElement.closest('[translate="no"], .instagram-media, .twitter-tweet')) hits.push(n); }
    hits.forEach(n => {
      const frag = document.createDocumentFragment();
      n.nodeValue.split(KEEP_NAMES).forEach((part, i) => {
        if (!part) return;
        if (i % 2) { const sp = document.createElement('span'); sp.setAttribute('translate', 'no'); sp.textContent = part; frag.appendChild(sp); }
        else frag.appendChild(document.createTextNode(part));
      });
      n.replaceWith(frag);
    });
    const G = window.GLOSSARIO || {};
    box.querySelectorAll('em').forEach(em => {
      if (em.closest('.instagram-media, .twitter-tweet, [translate="no"]')) return;
      const raw = em.textContent, t = normT(raw), g = G[t];
      if (g && g[tl]) { em.textContent = raw.replace(t, g[tl]); em.setAttribute('translate', 'no'); }
      else if (looksTitle(t)) em.setAttribute('translate', 'no');
    });
  };
  const translateHtml = (u, tl) => once('tr:' + tl + ':' + u, async () => {
    const key = RD_VER + ':' + tl + ':' + u, hit = cacheGet(key); if (hit) return hit;
    const box = document.createElement('div'); box.innerHTML = await fetchWP(u);
    protectNames(box, tl);
    // blocos-folha: não traduz embeds (Instagram/Twitter) nem blocos que contêm outros blocos traduzíveis
    const els = [...box.querySelectorAll(TBLOCK)].filter(el => !el.closest('.instagram-media, .twitter-tweet') && !el.querySelector(TBLOCK) && el.textContent.trim());
    // citações soltas sem <p> dentro
    box.querySelectorAll('blockquote:not(.instagram-media):not(.twitter-tweet)').forEach(b => { if (!b.querySelector(TBLOCK) && b.textContent.trim()) els.push(b); });
    // blocos com mídia dentro: traduz só o texto ao redor (mídia fica intacta)
    const jobs = [];
    els.forEach(el => {
      if (el.querySelector('img, iframe, .am-video, .am-audio')) {
        [...el.childNodes].forEach(n => { if (n.nodeType === 3 && n.textContent.trim()) jobs.push({ node: n, html: n.textContent.replace(/&/g, '&amp;').replace(/</g, '&lt;'), text: true }); });
      } else jobs.push({ node: el, html: el.innerHTML });
    });
    // lotes de ~3500 caracteres, todos ao mesmo tempo
    const batches = []; let cur = [], len = 0;
    jobs.forEach(j => { if (len + j.html.length > 3500 && cur.length) { batches.push(cur); cur = []; len = 0; } cur.push(j); len += j.html.length; });
    if (cur.length) batches.push(cur);
    await Promise.all(batches.map(async b => {
      const res = await gtxHtml(b.map(j => j.html), tl);
      b.forEach((j, i) => {
        if (j.text) { const t = document.createElement('textarea'); t.innerHTML = res[i]; j.node.textContent = ' ' + t.value.trim() + ' '; }
        else j.node.innerHTML = tidy(res[i]);
      });
    }));
    const html = box.innerHTML; cachePut(key, html); return html;
  });
  const readerHtml = (a, lang) => lang === 'pt' ? fetchWP(a.u) : translateHtml(a.u, lang);
  // pré-carrega ao passar o mouse/tocar no card (o texto costuma estar pronto ao abrir)
  const prefetchArticle = (a) => isWP(a.u) ? readerHtml(a, LANG).catch(() => '') : Promise.resolve('');

  // embeds de terceiros (Instagram / Twitter)
  const loadScript = (src) => new Promise((ok, err) => { if (document.querySelector(`script[src="${src}"]`)) return ok(); const s = document.createElement('script'); s.src = src; s.async = true; s.onload = ok; s.onerror = err; document.head.appendChild(s); });
  const hydrateEmbeds = (root) => {
    if (root.querySelector('.instagram-media')) loadScript('https://www.instagram.com/embed.js').then(() => window.instgrm && window.instgrm.Embeds.process()).catch(() => {});
    if (root.querySelector('.twitter-tweet')) loadScript('https://platform.twitter.com/widgets.js').then(() => window.twttr && window.twttr.widgets && window.twttr.widgets.load(root)).catch(() => {});
  };

  const transUrl = (url, tl) => { const u = new URL(url); return `https://${u.hostname.replace(/-/g, '--').replace(/\./g, '-')}.translate.goog${u.pathname}?_x_tr_sl=pt&_x_tr_tl=${tl}&_x_tr_hl=${tl}`; };
  let amToken = 0;
  const showFrame = (url) => { amReader.hidden = true; amReader.innerHTML = ''; amFrame.hidden = false; frameGo(url); };
  const articleSlug = (a) => {
    try { return decodeURIComponent(new URL(a.u, location.origin).pathname.split('/').filter(Boolean).pop() || ''); }
    catch (e) { return String(a.t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  };
  const articleRoute = (a) => '/artigos/' + encodeURIComponent(articleSlug(a)) + '/';
  let amPrevTitle = ''; // título da aba com o nome do artigo
  let amFrom = null;
  const openArticle = (a) => {
    if (!amOverlay.classList.contains('open')) { amPrevTitle = document.title; amFrom = { url: location.pathname + location.search + location.hash, y: window.scrollY }; } // de onde o modal abriu: ao fechar, volta para a mesma rolagem
    document.title = artTitle(a) + ' — Henrique Marinhos';
    const articlePath = articleRoute(a);
    if (HMI.path() !== articlePath) history.pushState({ portfolioArticle: articleSlug(a) }, '', articlePath);
    const tok = ++amToken;
    document.getElementById('am-site').textContent = a.site + ' · ' + a.tags.map(tagName).join(' · ');
    document.getElementById('am-title').textContent = artTitle(a);
    const wp = isWP(a.u), translated = wp && LANG !== 'pt';
    document.getElementById('am-ext').href = translated ? transUrl(a.u, LANG) : a.u;
    const extLabel = a.ext ? i18n('am.book', a.ext) : i18n('am.open', 'Abrir no site');
    document.getElementById('am-ext-l').textContent = extLabel;
    document.getElementById('am-ext').setAttribute('aria-label', extLabel);
    document.getElementById('am-ext').title = extLabel;
    const shareBtn = document.getElementById('am-share'), shareLabel = document.getElementById('am-share-label');
    const shareDefaultLabel = () => i18n('am.share', 'Compartilhar');
    const setShareLabel = (label) => { shareLabel.textContent = label; shareBtn.setAttribute('aria-label', label); shareBtn.title = label; };
    let shareResetTimer;
    setShareLabel(shareDefaultLabel());
    const copyArticleLink = async (url) => {
      await navigator.clipboard.writeText(url);
      setShareLabel(i18n('am.copied', 'Link copiado'));
      clearTimeout(shareResetTimer);
      shareResetTimer = setTimeout(() => { setShareLabel(shareDefaultLabel()); }, 1800);
    };
    shareBtn.onclick = async () => {
      const url = location.origin + HMI.with(articlePath);
      const shareData = { url }; // só o link, sem texto
      try {
        if (navigator.share) { await navigator.share(shareData); return; }
        await copyArticleLink(url);
      } catch (error) {
        if (error && error.name === 'AbortError') return;
        try { await copyArticleLink(url); }
        catch (copyError) { window.prompt(i18n('am.copy', 'Copie o link do artigo:'), url); }
      }
    };
    // botões extras (ex.: repositório da Unesp no TCC)
    document.getElementById('am-links').innerHTML = (a.links || []).map(l => `<a class="am-ext am-ext-alt" href="${l.u}" target="_blank" rel="noopener">${i18n('am.link.' + l.l, l.l)}</a>`).join('');
    document.getElementById('am-cover').src = artImg(a);
    amStage.classList.remove('loaded');
    amLoadL.textContent = translated ? i18n('am.translating', 'Traduzindo…') : i18n('am.loading', 'Carregando texto…');
    amOverlay.classList.add('open'); document.body.style.overflow = 'hidden';
    // texto ↔ post do Instagram (quando o texto tem post ligado)
    const pp = (window.HM_POSTS && window.HM_POSTS.POSTS_BY_ART[a.u]) || null, sw = document.getElementById('am-swap'), amIg = document.getElementById('am-ig');
    amIg.hidden = true; amIg.innerHTML = ''; sw.hidden = !pp;
    const swLabel = () => {
      const showPost = amIg.hidden;
      const label = showPost ? i18n('am.seepost', 'Ver post') : i18n('am.seetext', 'Ver texto');
      sw.innerHTML = showPost
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.7" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3.5h8l4 4v13H6z"/><path d="M14 3.5v4h4M9 12h6M9 15.5h6"/></svg>';
      sw.setAttribute('aria-label', label);
      sw.title = label;
    };
    swLabel();
    sw.onclick = () => { if (amIg.hidden) { amIg.innerHTML = pp.map(x => window.HM_POSTS.igPost(x, { noArt: true })).join(''); amIg.hidden = false; amIg.scrollTop = 0; } else { amIg.hidden = true; amIg.innerHTML = ''; } swLabel(); };
    // artigo que é um post do Instagram: carrossel completo (com vídeos) pelo embed oficial
    const igm = a.u.match(/instagram\.com\/(?:p|reel)\/([\w-]+)/);
    if (igm) {
      const post = (window.POSTS || []).find(x => x.c === igm[1]), link = `https://www.instagram.com/p/${igm[1]}/`;
      amFrame.hidden = true; frameGo('about:blank');
      amReader.innerHTML = `<div class="am-igone">${window.HM_POSTS.igEmbed(post || { c: igm[1], r: 1.25, cap: artTitle(a) })}<a class="am-igone-link" href="${link}" target="_blank" rel="noopener">${lx(IG_L.ver)}</a></div>`;
      amReader.hidden = false; amReader.scrollTop = 0; amStage.classList.add('loaded');
      return;
    }
    if (!wp) { showFrame(a.u); return; }
    amFrame.hidden = true; frameGo('about:blank'); amReader.hidden = true;
    const by = a.a === 'Vários Autores' ? i18n('art.various', 'Vários autores') : a.a.replace(' e ', i18n('art.and', ' e '));
    readerHtml(a, LANG).then(html => {
      if (tok !== amToken) return;
      const note = translated ? `<p class="am-note">${i18n('am.note', 'Tradução automática do português.')} <a href="${a.u}" target="_blank" rel="noopener">${i18n('am.original', 'Ler o original')}</a></p>` : '';
      if (a.textCover) document.getElementById('am-cover').src = a.textCover;
      if (a.site === 'Persona' && a.tags.includes('Música')) {
        const body = document.createElement('div'); body.innerHTML = html;
        body.querySelectorAll('iframe[src*="spotify"]').forEach(frame => (frame.closest('.am-audio, figure, .wp-block-embed') || frame).remove());
        html = body.innerHTML;
      }
      amReader.innerHTML = `<article class="am-article">${note}<p class="am-kicker">${a.tags.map(tagName).join(' · ')} — ${fmtData(a.d)}</p><h1>${artTitle(a)}</h1><p class="am-byline">${by} · ${a.site}</p><div class="am-body">${html}</div></article>`;
      amReader.hidden = false; amReader.scrollTop = 0; amStage.classList.add('loaded');
      hydrateEmbeds(amReader);
    }).catch(() => { if (tok === amToken) showFrame(a.u); });
  };
  const closeArticle = (fromHistory = false) => {
    if (!fromHistory && /^\/artigos\/[^/]+\/?$/.test(HMI.path())) {
      if (history.state && history.state.portfolioArticle) { history.back(); return; }
      history.replaceState({ portfolioRoute: 'articles' }, '', '/artigos/');
      showRoute('articles', 'artigos');
    }
    amOverlay.classList.remove('open'); document.body.style.overflow = '';
    if (amPrevTitle) { document.title = amPrevTitle; amPrevTitle = ''; }
    amToken++; document.getElementById('am-ig').hidden = true; document.getElementById('am-ig').innerHTML = '';
    setTimeout(() => { if (!amOverlay.classList.contains('open')) { frameGo('about:blank'); amReader.innerHTML = ''; } }, 400); // para áudio/vídeo do texto
  };
  amFrame.addEventListener('load', () => { if (!amFrame.hidden && amFrameUrl !== 'about:blank') amStage.classList.add('loaded'); });
  document.getElementById('am-close').onclick = () => closeArticle();
  amOverlay.addEventListener('click', (e) => { if (e.target === amOverlay) closeArticle(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && amOverlay.classList.contains('open')) closeArticle(); });

  /* --- Página de artigos: dados em assets/data/artigos.js --- */
  let articlesRendered = false;
  const MESES = { pt: ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'],
                  en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                  es: ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'] };
  const fmtData = (iso) => { if (/^\d{4}$/.test(iso)) return iso; const [y, m, d] = iso.split('-'); const mm = MESES[LANG][m - 1]; return LANG === 'en' ? `${mm} ${+d}, ${y}` : `${+d} ${mm} ${y}`; };
  const tagName = (tg) => i18n('tag.' + tg, tg);
  const artTitle = (a) => (LANG !== 'pt' && a['t_' + LANG]) || a.t;
  let artFilter = 'all';
  const renderArticlesPage = () => {
    if (articlesRendered) return;
    articlesRendered = true;
    const data = window.ARTIGOS || [];
    artFilter = 'all';
    const grid = document.getElementById('art-grid'), bar = document.getElementById('art-filters');
    // filtros em 2 linhas fixas (3 + 3; a estrela não conta no equilíbrio)
    // modo grade (celular): 2 colunas desencontradas; lembrado entre visitas
    let artGrid = window.matchMedia('(max-width:767px)').matches; try { const _v = localStorage.getItem('hm-artgrid2'); if (_v !== null) artGrid = _v === '1'; } catch (e) {} // celular: 2 colunas por padrão
    const GRID_ICO = '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><rect x="2" y="1.5" width="5" height="6" rx="1"/><rect x="9" y="3.5" width="5" height="6" rx="1"/><rect x="2" y="9.5" width="5" height="5" rx="1"/><rect x="9" y="11.5" width="5" height="3" rx="1"/></svg>';
    const setGrid = (on) => { artGrid = on; grid.classList.toggle('is-compact', on); const b = bar.querySelector('.art-view'); if (b) b.setAttribute('aria-pressed', on); try { localStorage.setItem('hm-artgrid2', on ? '1' : '0'); } catch (e) {} };
    const MINI_STAR = '<svg class="art-star" viewBox="0 0 16 16" width="10" height="10" aria-hidden="true"><path d="M8 1.9l1.85 3.85 4.2.55-3.08 2.9.78 4.17L8 11.33l-3.75 2.04.78-4.17-3.08-2.9 4.2-.55z"/></svg>';
    const PVFAV = '<svg class="pv-fav" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="M8 1.9l1.85 3.85 4.2.55-3.08 2.9.78 4.17L8 11.33l-3.75 2.04.78-4.17-3.08-2.9 4.2-.55z"/></svg>';
    // modo de leitura (Texto ou Instagram) são botões da linha de cima; lembrado entre visitas
    let artMode = 'texto'; try { const _m = localStorage.getItem('hm-artmode-v3'); if (_m === 'ig' || _m === 'texto') artMode = _m; } catch (e) {} // abre em Texto
    const IG_ICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
    const TXT_ICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 6h14M5 11h14M5 16h9"/></svg>';
    const SLIDES_ICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="7" y="3" width="13" height="15" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h10"/></svg>';
    // ícones dos filtros (traço 1.8, mesma família da estrela e do Instagram)
    const FI = {
      'all': '<svg class="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="7.4" cy="7.4" r="3.3"/><rect x="13.3" y="4.1" width="6.6" height="6.6" rx="2.4"/><rect x="4.1" y="13.3" width="6.6" height="6.6" rx="2.4"/><circle cx="16.6" cy="16.6" r="3.3"/></svg>',
      'cabines': '<svg class="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 10.5h12l-1.2 8.3a1.5 1.5 0 0 1-1.5 1.2H8.7a1.5 1.5 0 0 1-1.5-1.2zM10.3 13l.2 4.5M13.7 13l-.2 4.5M6.3 10.5a2.3 2.3 0 0 1 1.6-3.9 2.6 2.6 0 0 1 4.1-2.1 2.6 2.6 0 0 1 4.1 2.1 2.3 2.3 0 0 1 1.6 3.9"/></svg>',
      'mostra': '<svg class="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6.5h12A2.5 2.5 0 0 1 20.5 9v1.2a1.8 1.8 0 0 0 0 3.6V15a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 15v-1.2a1.8 1.8 0 0 0 0-3.6V9A2.5 2.5 0 0 1 6 6.5z"/><path d="M15 9.6v4.8" stroke-dasharray=".01 2.4"/></svg>',
      'carrosseis': '<svg class="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="4" width="8" height="16" rx="2.4"/><path d="M5.7 6.9 4.4 7.3a1.6 1.6 0 0 0-1.1 2l2 7.4M18.3 6.9l1.3.4a1.6 1.6 0 0 1 1.1 2l-2 7.4"/></svg>',
      'premiacoes': '<svg class="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.5 4.5h9v4a4.5 4.5 0 0 1-9 0zM7.5 6H6a2 2 0 0 0 0 4h1.9M16.5 6H18a2 2 0 0 1 0 4h-1.9M12 13v3.2M8.6 19.5c0-1.4 1.1-2.5 2.5-2.5h1.8c1.4 0 2.5 1.1 2.5 2.5z"/></svg>',
      'Cinema': '<svg class="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="10.5" width="17" height="9.5" rx="2.5"/><g transform="rotate(-11 3.5 9)"><rect x="3.5" y="5" width="17" height="3.8" rx="1.5"/><path d="M9.3 5.4 8.1 8.4M14.8 5.4l-1.2 3"/></g></svg>',
      'Música': '<svg class="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 17.5V7.2a1 1 0 0 1 .8-1l8-1.6a1 1 0 0 1 1.2 1v9.9"/><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="15.5" r="2.5"/></svg>',
      'Televisão': '<svg class="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="7.5" width="17" height="12" rx="3.5"/><path d="M9 3.8 12 7l3-3.2"/></svg>',
      'Literatura': '<svg class="fi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7C10.1 5.5 7.4 4.9 4.5 5.2a1 1 0 0 0-.9 1V18c0 .6.5 1 1.1 1 2.6-.2 5.1.4 7.3 1.8 2.2-1.4 4.7-2 7.3-1.8.6 0 1.1-.4 1.1-1V6.2a1 1 0 0 0-.9-1C16.6 4.9 13.9 5.5 12 7zM12 7v13.5"/></svg>',
    };
    // linha 1: seletor Texto | Instagram (modo de leitura) · Todos · Destaques (+ grade no celular)
    // linha 2: linguagens | coberturas. No celular as categorias quebram em linhas, sem rolagem lateral.
    const MODOS = () => [['m:texto', TXT_ICO + i18n('am.text', 'Texto')], ['m:ig', IG_ICO + 'Instagram']];
    const TOPO = () => [['all', FI.all + i18n('f.all', 'Todos')], ['fav', PVFAV + i18n('am.fav', 'Destaques')]];
    const LING = () => ['Cinema', 'Música', 'Televisão', 'Literatura'].map(k => [k, FI[k] + tagName(k)]);
    const COB = () => [['cabines', FI.cabines + i18n('f.cabine', 'Cabines')], ['mostra', FI.mostra + 'Mostra SP'], ['premiacoes', FI.premiacoes + i18n('f.premiacoes', 'Premiações')], ['carrosseis', FI.carrosseis + i18n('f.carrosseis', 'Carrosséis')]];
    const btnOf = (keep) => ([k, html]) => {
      const on = k.startsWith('m:') ? (artFilter !== 'fav' && k === 'm:' + artMode) : k === keep;
      return `<button class="art-filter" data-k="${k}" aria-pressed="${on}">${html}</button>`;
    };
    // linguagens: só ícone, num grupo separado (no celular o mesmo grupo vira menu flutuante)
    const icoGroup = (keep) => '<div class="art-ico-grp" role="group" aria-label="' + ({ pt: 'Linguagens', en: 'Media', es: 'Lenguajes' })[LANG] + '">'
      + ['Cinema', 'Música', 'Televisão', 'Literatura'].map(k => `<button class="art-filter art-ico" data-k="${k}" aria-pressed="${k === keep}" aria-label="${tagName(k)}" title="${tagName(k)}">${FI[k]}</button>`).join('') + '</div>';
    const rowsHtml = (keep) => {
      const btn = btnOf(keep), sep = '<span class="art-sep" aria-hidden="true"></span>';
      const view = '<button class="art-view" type="button" aria-pressed="' + artGrid + '" aria-label="' + i18n('art.grid', 'Ver em grade') + '" title="' + i18n('art.grid', 'Ver em grade') + '">' + GRID_ICO + '</button>';
      return '<div class="art-row art-row-top"><div class="art-seg" role="group" aria-label="' + ({ pt: 'Modo de leitura', en: 'Reading mode', es: 'Modo de lectura' })[LANG] + '">' + MODOS().map(btn).join('') + '</div>' + view + sep + TOPO().map(btn).join('') + '</div>'
        + '<div class="art-row">' + COB().map(btn).join('') + sep + icoGroup(keep) + '</div>';
    };
    // menu flutuante (celular): fica no body para não herdar transform dos blocos com reveal
    const flt = document.createElement('nav'); flt.className = 'art-float'; flt.setAttribute('aria-label', ({ pt: 'Filtrar por linguagem', en: 'Filter by medium', es: 'Filtrar por lenguaje' })[LANG]);
    document.body.appendChild(flt);
    const paint = (k) => { bar.innerHTML = rowsHtml(k); flt.innerHTML = icoGroup(k); };
    const mqMob = window.matchMedia('(max-width:639px)');
    const fltSync = () => {
      const r = grid.getBoundingClientRect();
      const show = mqMob.matches && !bar.hidden && bar.offsetParent !== null && grid.offsetParent !== null && r.top < innerHeight - 80 && r.bottom > 120
        && !document.body.classList.contains('pv-open') && !amOverlay.classList.contains('open');
      flt.classList.toggle('show', show); document.body.classList.toggle('has-art-float', show);
    };
    let fltRaf = 0; const fltQ = () => { if (!fltRaf) fltRaf = requestAnimationFrame(() => { fltRaf = 0; fltSync(); }); };
    addEventListener('scroll', fltQ, { passive: true }); addEventListener('resize', fltQ); addEventListener('popstate', fltQ);
    new MutationObserver(fltQ).observe(document.body, { attributes: true, attributeFilter: ['class'], subtree: false });
    setInterval(fltQ, 800); // rotas trocam sem scroll: confere de tempos em tempos (barato)
    // categorias com lista própria (assets/data/colecoes.js → CATEGORIAS); membros = textos (u) e posts (p)
    const CATS = window.CATEGORIAS || {};
    const catEntries = (k) => {
      const s = CATS[k] || {};
      const arts = (s.u || []).map(u => data.find(x => x.u === u)).filter(Boolean).map(x => ({ kind: 'text', item: x, d: x.d }));
      const posts = (s.p || []).map(c => { const x = (window.POSTS || []).find(z => z.c === c); return x ? { kind: 'post', item: x, d: x.d } : null; }).filter(Boolean);
      return [...arts, ...posts].sort((p, q) => String(q.d).localeCompare(String(p.d)));
    };
    const postTitle = (x) => { const t = (window.POST_TITULOS || {})[x.c]; return t ? (t[LANG] || t.pt) : esc(capTitle(x)); };
    const postCard = (x, title) => `<a class="art-card" href="https://www.instagram.com/p/${x.c}/" target="_blank" rel="noopener" data-ig="${x.c}">
      <div class="art-card-media" style="aspect-ratio:${(1 / x.r).toFixed(4)}">${x.n > 1 ? `<span class="art-ig-count">${SLIDES_ICO}${x.n}</span>` : ''}<img src="${postSrc(x, 0)}" alt="" loading="lazy" decoding="async"></div>
      <p class="art-card-meta">${x.v} — ${fmtData(x.d)}</p><h2 class="art-card-title">${title}</h2></a>`;
    const artCard = (a, { showTag, ig }) => {
      const i = data.indexOf(a), pp = PBA[a.u], useIg = ig && pp;
      const co = a.a.replace(/^Henrique Marinhos( e )?/, '');
      const por = a.a === 'Vários Autores' ? i18n('art.various', 'Vários autores') : co ? i18n('art.with', 'Com') + ' ' + co.replace(' e ', i18n('art.and', ' e ')) : '';
      const badge = (LANG !== 'pt' && a['badge_' + LANG]) || a.badge;
      const media = useIg ? `${pp[0].n > 1 ? `<span class="art-ig-count">${SLIDES_ICO}${pp[0].n}</span>` : ''}<img src="${postSrc(pp[0], 0)}" alt="" loading="lazy" decoding="async">`
        : `${a.badge ? `<span class="art-badge">${badge}</span>` : ''}<img src="${artImg(a)}" alt="" loading="lazy" decoding="async"${a.fit || a.pos ? ` style="${a.fit ? 'object-fit:' + a.fit + ';' : ''}${a.pos ? 'object-position:' + a.pos : ''}"` : ''}>`;
      return `<a class="art-card" href="${a.project ? cleanProjectUrl(a.project) : articleRoute(a)}" target="_self" rel="noopener" data-i="${i}"${a.cropTop ? ' data-crop-top="true"' : ''}${useIg ? ' data-igart="1"' : ''}>
        <div class="art-card-media"${useIg ? ` style="--ar:${(1 / pp[0].r).toFixed(4)}"` : a.bg ? ` style="background:${a.bg}"` : ''}>${media}</div>
        <p class="art-card-meta">${showTag ? (a.pin ? MINI_STAR : '') + a.tags.map(tagName).join(' · ') + ' — ' : ''}${fmtData(a.d)}${pp && !useIg ? `<span class="art-ig-flag" title="Instagram">${IG_ICO}</span>` : ''}</p>
        <h2 class="art-card-title">${artTitle(a)}</h2>
        <p class="art-card-by">${a.site}${por ? ' · ' + por : ''}</p>
      </a>`;
    };
    const PBA = (window.HM_POSTS || {}).POSTS_BY_ART || {};
    // carrosséis/posts do 1º lote (Persona e Tesoura primeiro) + carrosséis dos projetos (L2/EC; sem reels nem post único)
    const CARR = ((window.HM_POSTS || {}).POSTS || []).filter(x => x.lot === 'L1' || (!x.reel && (x.n > 1 || x.embed)));
    const ORD = { 'Tesoura com Ponta': 0, 'Persona': 1 };
    CARR.sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || (ORD[a.v] ?? 9) - (ORD[b.v] ?? 9) || b.d.localeCompare(a.d));
    const capTitle = (x) => { const t = capOf(x).split(/\n/).map(l => l.trim()).filter(l => l && !/^[\p{P}\p{S}\s]+$/u.test(l))[0] || x.v; return t.length > 90 ? t.slice(0, 88).replace(/\s+\S*$/, '') + '…' : t; };
    const FAV_SELECTION = [
      ['post', 'Deuz10vkegd'],
      ['post', 'DUlOWXWjoWX'],
      ['post', 'DPCkHYgkbDE'],
      ['text', 'https://personaunesp.com.br/brat-and-its-completely-different-but-also-still-brat-critica/'],
      ['text', 'https://personaunesp.com.br/corisco-e-dada-critica/'],
      ['text', 'https://personaunesp.com.br/croma-kid-critica/'],
      ['text', 'https://personaunesp.com.br/as-primas-critica/'],
      ['text', 'https://personaunesp.com.br/treta-critica/'],
      ['text', 'https://personaunesp.com.br/pearl-critica/'],
      ['text', 'https://personaunesp.com.br/critica-e-se-fosse-verdade/'],
      ['post', 'DeKDr7dFgRW'],
      ['post', 'Dd6mzTmFpUe'],
      ['text', 'https://personaunesp.com.br/ainda-temos-o-amanha-critica/'],
      ['post', 'DQfY9lqkZfc']
    ].map(([kind, id]) => ({ kind, item: kind === 'post' ? CARR.find(x => x.c === id) : data.find(a => a.u === id) }))
      .filter(entry => entry.item)
      .sort((a, b) => b.item.d.localeCompare(a.item.d));
    paint(artFilter);
    // entrada em cascata dos cartões visíveis
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.1 });
    const draw = (k) => {
      const COL = window.HM_COL, isCat = !COL && !!CATS[k];
      grid.classList.toggle('is-ig', !COL && ((artMode === 'ig' && k !== 'fav') || k === 'carrosseis'));
      grid.classList.toggle('is-mixed', !COL && k === 'fav');
      if (k === 'fav' && !COL) {
        let items = FAV_SELECTION;
        if (k !== 'all' && k !== 'fav') items = items.filter(entry => {
          if (entry.kind === 'text') return entry.item.tags.includes(k);
          const linked = entry.item.art && data.find(a => a.u === entry.item.art);
          return !!linked && linked.tags.includes(k);
        });
        grid.innerHTML = items.map(entry => {
          if (entry.kind === 'post') {
            const x = entry.item, linked = x.art && data.find(a => a.u === x.art);
            const title = linked ? artTitle(linked) : postTitle(x);
            return `<a class="art-card" href="https://www.instagram.com/p/${x.c}/" target="_blank" rel="noopener" data-ig="${x.c}">
              <div class="art-card-media" style="aspect-ratio:${(1 / x.r).toFixed(4)}">${x.n > 1 ? `<span class="art-ig-count">${SLIDES_ICO}${x.n}</span>` : ''}<img src="${postSrc(x, 0)}" alt="" loading="lazy" decoding="async"></div>
              <p class="art-card-meta">${x.v} — ${fmtData(x.d)}</p><h2 class="art-card-title">${title}</h2></a>`;
          }
          const a = entry.item, index = data.indexOf(a), badge = (LANG !== 'pt' && a['badge_' + LANG]) || a.badge;
          const co = a.a.replace(/^Henrique Marinhos( e )?/, '');
          const por = a.a === 'Vários Autores' ? i18n('art.various', 'Vários autores') : co ? i18n('art.with', 'Com') + ' ' + co.replace(' e ', i18n('art.and', ' e ')) : '';
          return `<a class="art-card" href="${articleRoute(a)}" target="_self" rel="noopener" data-i="${index}"${a.cropTop ? ' data-crop-top="true"' : ''}>
            <div class="art-card-media"${a.bg ? ` style="background:${a.bg}"` : ''}>${a.badge ? `<span class="art-badge">${badge}</span>` : ''}<img src="${artImg(a)}" alt="" loading="lazy" decoding="async"${a.fit || a.pos ? ` style="${a.fit ? 'object-fit:' + a.fit + ';' : ''}${a.pos ? 'object-position:' + a.pos : ''}"` : ''}></div>
            <p class="art-card-meta">${a.tags.map(tagName).join(' · ')} — ${fmtData(a.d)}</p><h2 class="art-card-title">${artTitle(a)}</h2><p class="art-card-by">${a.site}${por ? ' · ' + por : ''}</p></a>`;
        }).join('');
        [...grid.children].forEach((c, i) => { c.style.transitionDelay = (i % 3) * 0.06 + 's'; io.observe(c); });
        return;
      }
      if (isCat) { // Cabines, Mostra SP, Carrosséis, Premiações: só os itens da categoria, sem acumular
        const ents = catEntries(k).filter(e => artMode !== 'ig' || e.kind === 'post' || PBA[e.item.u]);
        grid.classList.toggle('is-mixed', k !== 'carrosseis' && ents.some(e => e.kind === 'post'));
        grid.innerHTML = ents.map(e => e.kind === 'post' ? postCard(e.item, postTitle(e.item)) : artCard(e.item, { showTag: false, ig: artMode === 'ig' || k === 'carrosseis' })).join('');
        [...grid.children].forEach((c, i) => { c.style.transitionDelay = (i % 3) * 0.06 + 's'; io.observe(c); });
        return;
      }
      // Todos e Cinema · Música · Televisão · Literatura: todos os textos da etiqueta (o modo Instagram só troca a miniatura)
      let lista = COL ? data.filter(a => window.colMatch(COL.c, a, COL.ano)) : k === 'all' ? data : data.filter(a => a.tags.includes(k));
      if (artMode === 'ig' && !COL) lista = lista.filter(a => PBA[a.u]); // modo Instagram: só os textos que têm post
      const showTag = COL ? !COL.c.tag : k === 'all'; // dentro de uma categoria a etiqueta é redundante
      grid.innerHTML = lista.map(a => artCard(a, { showTag, ig: !COL && artMode === 'ig' })).join('');
      [...grid.children].forEach((c, i) => { c.style.transitionDelay = (i % 3) * 0.06 + 's'; io.observe(c); });
    };
    const pre = (e) => { const c = e.target.closest && e.target.closest('.art-card'); if (c && !data[+c.dataset.i]?.project) prefetchArticle(data[+c.dataset.i]); };
    grid.addEventListener('pointerover', pre); grid.addEventListener('touchstart', pre, { passive: true }); grid.addEventListener('focusin', pre);
    grid.addEventListener('click', (e) => {
      const c = e.target.closest('.art-card'); if (!c || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
      e.preventDefault();
      // posts: abre no visualizador com todos os posts visíveis na grade (setas laterais passam de um para outro)
      if (c.dataset.ig || c.dataset.igart) {
        const lista = [], cards = [...grid.querySelectorAll('.art-card[data-ig], .art-card[data-igart]')]; let start = 0;
        cards.forEach(k => { if (k === c) start = lista.length; if (k.dataset.ig) lista.push(CARR.find(z => z.c === k.dataset.ig)); else lista.push(...(PBA[data[+k.dataset.i].u] || [])); });
        window.HM_POSTS.openPosts(lista, start); return;
      }
      const item = data[+c.dataset.i];
      if (item.project) { window.location.assign(cleanProjectUrl(item.project)); return; }
      openArticle(item);
    });
    const onFilterClick = (e) => {
      if (e.target.closest('.art-view')) { setGrid(!artGrid); return; }
      const b = e.target.closest('.art-filter'); if (!b) return;
      const k = b.dataset.k, fromFloat = flt.contains(b);
      if (k.startsWith('m:')) { artMode = k.slice(2); try { localStorage.setItem('hm-artmode-v3', artMode); } catch (er) {} if (artFilter === 'fav') artFilter = 'all'; }
      else artFilter = (b.classList.contains('art-ico') && artFilter === k) ? 'all' : k;
      paint(artFilter); draw(artFilter); if (fromFloat && grid.getBoundingClientRect().top < 0) scrollTo({ top: grid.getBoundingClientRect().top + scrollY - 90, behavior: 'smooth' });
    };
    bar.addEventListener('click', onFilterClick); flt.addEventListener('click', onFilterClick);
    // coleção (/artigos/<slug>/): cabeçalho próprio no lugar do título e dos filtros
    const colHead = document.createElement('div'); colHead.className = 'col-head'; colHead.hidden = true;
    bar.parentNode.insertBefore(colHead, bar);
    const hero = document.querySelector('#view-articles .art-hero'), baseTitle = document.title;
    const LINK_ICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>';
    const applyCol = () => {
      const C = window.HM_COL, on = !!C;
      colHead.hidden = !on; bar.hidden = on; if (hero) hero.hidden = on;
      if (on) {
        const c = C.c, base = '/artigos/' + c.s + '/', n = data.filter(a => window.colMatch(c, a, C.ano)).length;
        const anos = c.mostra ? [...new Set(data.filter(a => a.mostra).map(a => String(a.mostra)))].sort().reverse() : [];
        const outras = (window.COLECOES || []).filter(x => x.s !== c.s);
        colHead.innerHTML = `<p class="col-kicker"><a href="/artigos/">Artigos</a> · ${n} ${n === 1 ? 'texto' : 'textos'}</p>
          <h1 class="col-title">${c.t}${C.ano ? ` <span class="dim">${C.ano}</span>` : ''}</h1>
          <p class="col-desc">${c.d}</p>
          ${anos.length ? `<div class="col-bar" role="navigation" aria-label="Edições"><a class="art-filter" href="${base}"${!C.ano ? ' aria-current="page"' : ''}>Todas</a>${anos.map(y => `<a class="art-filter" href="${base}${y}/"${C.ano === y ? ' aria-current="page"' : ''}>${y}</a>`).join('')}</div>` : ''}
          <div class="col-bar"><button type="button" class="art-filter col-copy">${LINK_ICO}<span>Copiar link</span></button></div>
          <div class="col-bar col-others" role="navigation" aria-label="Outras coleções">${outras.map(x => `<a class="art-filter" href="/artigos/${x.s}/">${x.t}</a>`).join('')}</div>`;
        document.title = `${c.t}${C.ano ? ' ' + C.ano : ''} — Artigos de Henrique Marinhos`;
        const btn = colHead.querySelector('.col-copy'), lbl = btn.querySelector('span');
        btn.onclick = async () => {
          const url = location.origin + base + (C.ano ? C.ano + '/' : '');
          try { if (navigator.share && matchMedia('(pointer:coarse)').matches) { await navigator.share({ url }); return; } await navigator.clipboard.writeText(url); lbl.textContent = 'Link copiado'; setTimeout(() => { lbl.textContent = 'Copiar link'; }, 1800); } catch (e) {}
        };
      } else document.title = baseTitle;
      draw(artFilter);
    };
    window.HM_applyCol = applyCol;
    applyCol(); setGrid(artGrid);
    data.forEach((a, i) => { if (!a.coverFromText) return; prefetchArticle(a).then(() => { if (!a.textCover) return; const card = grid.querySelector(`.art-card[data-i="${i}"]`); const img = card && card.querySelector('.art-card-media img'); if (img) img.src = a.textCover; }); });
    // troca de idioma: refaz filtros e cartões mantendo o filtro atual
    onLang(() => {
      const keep = artFilter; paint(keep); draw(keep);
    });
  };

  /* --- Página Sobre: currículo ---
     Texto igual ao currículo (PT); EN/ES são traduções fiéis. Logo: arquivo em assets/exp/ (pad = marca não quadrada; txt = sem logo). */
  // logos das contas atendidas na Rank My App (no lugar dos nomes, dentro do texto)
  // ícones dos apps das contas atendidas (App Store), depois do texto, no formato de ícone de app
  const RMA = '<span class="cv-apps">' + [['c6-bank', 'C6 Bank'], ['sem-parar', 'Sem Parar'], ['pao-de-acucar', 'Pão de Açúcar Mais · Grupo GPA'], ['extra', 'Extra Mercado · Grupo GPA']]
    .map(([f, n]) => `<img src="assets/exp/apps/${f}.webp" alt="${n}" title="${n}" width="30" height="30" loading="lazy" decoding="async">`).join('') + '</span>';
  const CV = {
    exp: [
      { logo: 'basement.webp', pad: 1, url: 'https://basement.io', name: 'Basement',
        roles: [{ r: { pt: 'Designer · Freelancer', en: 'Designer · Freelancer', es: 'Diseñador · Freelancer' }, d: { pt: 'Março 2026 - Atual', en: 'March 2026 - Present', es: 'Marzo 2026 - Actualidad' } }],
        desc: { pt: 'Criação de peças para Instagram, LinkedIn e estilização de documentos, flyers e outros materiais de venda B2B.',
                en: 'Design of pieces for Instagram and LinkedIn, and styling of documents, flyers and other B2B sales materials.',
                es: 'Creación de piezas para Instagram y LinkedIn, y estilización de documentos, flyers y otros materiales de venta B2B.' } },
      { logo: 'novariobranco.webp', pad: 1, url: 'https://papelariariobranco.com.br', name: 'Papelaria Nova Rio Branco',
        roles: [{ r: { pt: 'Web Designer · Freelancer', en: 'Web Designer · Freelancer', es: 'Diseñador web · Freelancer' }, d: { pt: 'Set 2025 - Fevereiro 2026', en: 'Sep 2025 - February 2026', es: 'Sep 2025 - Febrero 2026' } }],
        desc: { pt: 'Desenvolvimento de site, catálogo B2B e automatização de orçamentos para apoiar o reposicionamento da marca.',
                en: 'Development of the website, B2B catalog and quote automation to support the brand repositioning.',
                es: 'Desarrollo del sitio web, catálogo B2B y automatización de presupuestos para apoyar el reposicionamiento de la marca.' } },
      { logo: 'rankmyapp.webp', url: 'https://rankmyapp.com', name: 'Rank My App',
        roles: [{ r: { pt: 'Customer Care · Freelancer', en: 'Customer Care · Freelancer', es: 'Customer Care · Freelancer' }, d: { pt: 'Maio 2025 – Set 2025', en: 'May 2025 – Sep 2025', es: 'Mayo 2025 – Sep 2025' } }],
        desc: { pt: 'Atendimento de contas focado na resolução de problemas e retenção de usuários em plataformas de aplicativos (App Store e Play Store).' + RMA,
                en: 'Account support focused on problem solving and user retention on app platforms (App Store and Play Store).' + RMA,
                es: 'Atención de cuentas enfocada en la resolución de problemas y la retención de usuarios en plataformas de aplicaciones (App Store y Play Store).' + RMA } },
      { txt: 't.pr', name: 't.pr consulting',
        roles: [{ r: { pt: 'Brand Designer · Freelancer', en: 'Brand Designer · Freelancer', es: 'Brand Designer · Freelancer' }, d: { pt: 'Dez 2024 - Maio 2025', en: 'Dec 2024 - May 2025', es: 'Dic 2024 - Mayo 2025' } }],
        desc: { pt: 'Design de marca e produtos para o estúdio Classic Tattoo PCH (Califórnia, EUA).',
                en: 'Brand and product design for the Classic Tattoo PCH studio (California, USA).',
                es: 'Diseño de marca y productos para el estudio Classic Tattoo PCH (California, EE. UU.).' } },
      { logo: 'unesp.svg', pad: 1, url: 'https://www2.unesp.br', name: 'Unesp',
        roles: [{ r: { pt: 'Estagiário de Comunicação', en: 'Communications Intern', es: 'Pasante de Comunicación' }, d: { pt: '2022-2024', en: '2022-2024', es: '2022-2024' } }],
        desc: { pt: 'Desenvolvimento de projetos de comunicação para a Pró-Reitoria de Extensão e Cultura e criação de marca, diretrizes e eventos para a Coordenadoria de Saúde da Unesp em nova extensão estudantil.',
                en: 'Development of communication projects for the Office of Extension and Culture, and creation of the brand, guidelines and events for the Unesp Health Coordination in a new student extension program.',
                es: 'Desarrollo de proyectos de comunicación para la Prorrectoría de Extensión y Cultura, y creación de marca, directrices y eventos para la Coordinación de Salud de la Unesp en una nueva extensión estudiantil.' } },
      { logo: 'rdcultural.webp', round: 1, url: 'https://rdcultural.com.br', name: 'Rd Cultural',
        roles: [{ r: { pt: 'Estagiário de Comunicação', en: 'Communications Intern', es: 'Pasante de Comunicación' }, d: { pt: 'Fev 2023 – Jul 2023', en: 'Feb 2023 – Jul 2023', es: 'Feb 2023 – Jul 2023' } }],
        desc: { pt: 'Criação de conteúdo e design (Instagram e e-mail marketing), assessoria de imprensa, suporte em eventos e atualização de produtos no site com otimização de SEO.',
                en: 'Content creation and design (Instagram and email marketing), press relations, event support and product updates on the website with SEO optimization.',
                es: 'Creación de contenido y diseño (Instagram y e-mail marketing), relaciones con la prensa, apoyo en eventos y actualización de productos en el sitio web con optimización SEO.' } },
      { logo: 'servimed.webp', pad: 1, url: 'https://servimed.com.br', name: 'Servimed Comercial Ltda',
        roles: [{ r: { pt: 'Assistente de Compras', en: 'Purchasing Assistant', es: 'Asistente de Compras' }, d: { pt: 'Dez 2021 – Mai 2022', en: 'Dec 2021 – May 2022', es: 'Dic 2021 – May 2022' } },
                { r: { pt: 'Jovem Aprendiz', en: 'Young Apprentice', es: 'Joven Aprendiz' }, d: { pt: 'Set 2020 – Nov 2021', en: 'Sep 2020 – Nov 2021', es: 'Sep 2020 – Nov 2021' } }] }
    ],
    edu: [
      { logo: 'unesp.svg', pad: 1, url: 'https://www2.unesp.br', name: 'UNESP | Universidade Estadual Paulista “Julio de Mesquita Filho”',
        roles: [{ r: { pt: 'Bacharel em Relações Públicas', en: "Bachelor's degree in Public Relations", es: 'Licenciatura en Relaciones Públicas' }, d: { pt: 'Jul 2021 - Dez 2024', en: 'Jul 2021 - Dec 2024', es: 'Jul 2021 - Dic 2024' } }] },
      { logo: 'senai.svg', pad: 1, url: 'https://www.sp.senai.br', name: 'SENAI',
        roles: [{ r: { pt: 'Desenvolvimento em JavaScript', en: 'JavaScript Development', es: 'Desarrollo en JavaScript' }, d: '2025' },
                { r: 'Microsoft Power BI', d: '2025' }] },
      { logo: 'cna.webp', url: 'https://cna.com.br', name: 'CNA Idiomas',
        roles: [{ r: { pt: 'Inglês Avançado', en: 'Advanced English', es: 'Inglés Avanzado' }, d: '2016 - 2021' }],
        desc: { pt: 'Certificado CEFR Nível B2 – Cambridge Assessment', en: 'CEFR Level B2 Certificate – Cambridge Assessment', es: 'Certificado MCER Nivel B2 – Cambridge Assessment' } }
    ],
    extra: [
      { logo: 'persona.svg', pad: 1, url: 'https://personaunesp.com.br', name: { pt: 'Grupo de Pesquisa em Estética e Crítica Cultural Persona', en: 'Persona Research Group on Aesthetics and Cultural Criticism', es: 'Grupo de Investigación en Estética y Crítica Cultural Persona' },
        roles: [{ r: '', d: '2021 - 2024' }],
        desc: { pt: 'Coordenação. Publicação em livro do Trabalho de Conclusão de Curso, intitulado “Persona: Estética, Crítica e Jornalismo Cultural” em co-autoria com os professores Eli Vagner e Roseane Andrelo.',
                en: 'Coordination. Publication of my undergraduate thesis as a book, titled “Persona: Estética, Crítica e Jornalismo Cultural”, co-authored with professors Eli Vagner and Roseane Andrelo.',
                es: 'Coordinación. Publicación en libro del Trabajo de Fin de Grado, titulado “Persona: Estética, Crítica e Jornalismo Cultural”, en coautoría con los profesores Eli Vagner y Roseane Andrelo.' } },
      { logo: 'tesoura.webp', url: 'https://tesouracomponta.com', name: { pt: 'Portal de Jornalismo Tesoura com Ponta', en: 'Tesoura com Ponta Journalism Portal', es: 'Portal de Periodismo Tesoura com Ponta' },
        roles: [{ r: '', d: { pt: '2025 – Atual', en: '2025 – Present', es: '2025 – Actualidad' } }],
        desc: { pt: 'Produção de conteúdo, redação e participação em cabines e coberturas de festivais. 48ª e 49ª Mostra SP, 15º Olhar de Cinema, coletiva de imprensa de “O Agente Secreto” com elenco e direção.',
                en: 'Content production, writing, and attendance at press screenings and festival coverage. 48th and 49th São Paulo International Film Festival, 15th Olhar de Cinema, press conference for “O Agente Secreto” with cast and director.',
                es: 'Producción de contenido, redacción y participación en preestrenos para prensa y coberturas de festivales. 48ª y 49ª Mostra SP, 15º Olhar de Cinema, rueda de prensa de “O Agente Secreto” con elenco y dirección.' } }
    ],
    skills: [
      { name: { pt: 'Design Gráfico e Editorial', en: 'Graphic and Editorial Design', es: 'Diseño Gráfico y Editorial' }, lvl: 1, roles: [{ r: '', d: { pt: 'Avançado', en: 'Advanced', es: 'Avanzado' } }],
        desc: { pt: 'Pacote Adobe (Photoshop, InDesign e Illustrator), Figma, Affinity e Canva.', en: 'Adobe Suite (Photoshop, InDesign and Illustrator), Figma, Affinity and Canva.', es: 'Paquete Adobe (Photoshop, InDesign e Illustrator), Figma, Affinity y Canva.' } },
      { name: { pt: 'Desenvolvimento Web', en: 'Web Development', es: 'Desarrollo Web' }, lvl: 1, roles: [{ r: '', d: { pt: 'Intermediário', en: 'Intermediate', es: 'Intermedio' } }],
        desc: { pt: 'HTML, CSS e JavaScript.', en: 'HTML, CSS and JavaScript.', es: 'HTML, CSS y JavaScript.' } },
      { name: { pt: 'Edição de Vídeo', en: 'Video Editing', es: 'Edición de Video' }, lvl: 1, roles: [{ r: '', d: { pt: 'Básico', en: 'Basic', es: 'Básico' } }],
        desc: { pt: 'Adobe Premiere, DaVinci Resolve, Final Cut Pro/iMovie e CapCut.', en: 'Adobe Premiere, DaVinci Resolve, Final Cut Pro/iMovie and CapCut.', es: 'Adobe Premiere, DaVinci Resolve, Final Cut Pro/iMovie y CapCut.' } },
      { name: { pt: 'Gestão e Colaboração', en: 'Management and Collaboration', es: 'Gestión y Colaboración' },
        desc: { pt: 'Google Workspace e Microsoft Office (Word, Excel e PowerPoint).<br>Trello, Notion, Monday, Miro, Obsidian, SAP ERP, RR Jurídico, WordPress e Meta Business Suit.',
                en: 'Google Workspace and Microsoft Office (Word, Excel and PowerPoint).<br>Trello, Notion, Monday, Miro, Obsidian, SAP ERP, RR Jurídico, WordPress and Meta Business Suit.',
                es: 'Google Workspace y Microsoft Office (Word, Excel y PowerPoint).<br>Trello, Notion, Monday, Miro, Obsidian, SAP ERP, RR Jurídico, WordPress y Meta Business Suit.' } }
    ]
  };
  const tx = (v) => v == null ? '' : typeof v === 'string' ? v : (v[LANG] || v.pt);
  const cvItem = (e) => {
    const logo = e.txt ? `<div class="cv-logo txt" aria-hidden="true">${e.txt}</div>`
      : e.logo ? `<div class="cv-logo${e.round ? ' round' : ''}" aria-hidden="true"><img src="assets/exp/${e.logo}" alt="" loading="lazy" decoding="async"></div>` : '';
    const nome = tx(e.name);
    // período sem cargo (atividades, habilidades) vai na mesma linha do nome
    const inline = e.roles && e.roles.length === 1 && !tx(e.roles[0].r) ? `<span class="d">${tx(e.roles[0].d)}</span>` : '';
    const lvl = e.lvl ? ' cv-lvl' : ''; // habilidades: nível colado ao nome
    const roles = inline ? '' : (e.roles || []).map(r => `<p class="cv-role"><span>${tx(r.r)}</span><span class="d">${tx(r.d)}</span></p>`).join('');
    const caso = (window.PROJETOS || []).find(p => p.exp && p.exp === tx(e.name)); // experiência com case → clicável
    return `<div class="cv-item reveal${caso ? ' has-case' : ''}"${caso ? ` data-pj="${caso.slug}" role="button" tabindex="0"` : ''}><div class="cv-head">${logo}<div class="cv-main"><p class="cv-name${lvl}" translate="no"><span>${nome}</span>${inline}</p>${roles}${e.desc ? `<p class="cv-desc">${tx(e.desc)}</p>` : ''}</div></div></div>`;
  };
  // Idiomas: bandeiras em SVG (BR, EUA, Espanha)
  const FLAG_US = '<svg viewBox="0 0 19 10" preserveAspectRatio="none" aria-hidden="true"><rect width="19" height="10" fill="#B22234"/><path d="M0 1.15h19M0 2.69h19M0 4.23h19M0 5.77h19M0 7.31h19M0 8.85h19" stroke="#fff" stroke-width=".77"/><rect width="7.6" height="5.38" fill="#3C3B6E"/></svg>';
  const IDIOMAS = [
    { f: () => FLAGS.pt(), t: { pt: 'Português — Nativo', en: 'Portuguese — Native', es: 'Portugués — Nativo' } },
    { f: () => FLAG_US, t: { pt: 'Inglês B2 First | Level C1', en: 'English B2 First | Level C1', es: 'Inglés B2 First | Level C1' }, desc: { pt: 'Cambridge University Press & Assessment', en: 'Cambridge University Press & Assessment', es: 'Cambridge University Press & Assessment' } },
    { f: () => FLAGS.es(), t: { pt: 'Espanhol Intermediário', en: 'Spanish — Intermediate', es: 'Español intermedio' }, desc: { pt: 'CNA Bauru · 2024–2026', en: 'CNA Bauru · 2024–2026', es: 'CNA Bauru · 2024–2026' } }
  ];
  // Ao receber os documentos, acrescente objetos {titulo, tipo:'image'|'pdf', src} aqui.
  const CERTIFICADOS = [
    ['01-senai-javascript', 'Desenvolvimento em JavaScript', 'SENAI · 2025 · 60 h'],
    ['03-branding-essencial', 'Branding Essencial', 'Ana Couto · 2023'],
    ['04-direcao-de-arte-ebac', 'Direção de Arte: da concepção à realização', 'EBAC · 2024'],
    ['07-persona-unesp', 'Grupo de Pesquisa Persona', 'Unesp · 2021–2024'],
    ['02-senai-power-bi', 'Microsoft Power BI', 'SENAI · 2025 · 32 h'],
    ['05-domestika', 'Marketing digital humanizado para redes sociais', 'Domestika · 2023'],
    ['08-congresso-extensao', 'Comitê de Comunicação · Congresso de Extensão', 'Unesp · 2024 · 40 h'],
    ['09-mostra-saude-mental', 'Comissão Organizadora · Mostra de Saúde Mental', 'Unesp · 2023'],
    ['06-design-grafico-bradesco', 'Fundamentos do Design Gráfico', 'Fundação Bradesco · 2021'],
    ['10-setembro-amarelo', 'Organização · Setembro Amarelo', 'NTAPS Unesp · 2022 · 40 h'],
    ['11-voluntariado-ntaps', 'Voluntariado em Comunicação', 'NTAPS Unesp · 2021 · 40 h']
  ].map(([f, titulo, org]) => ({ titulo, org, src: 'assets/certificados/' + f + '.webp', t: 'assets/certificados/' + f + '-t.webp' }));
  const escT = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const resourceOverlay = document.getElementById('resource-modal-overlay');
  const resourceGallery = document.getElementById('resource-gallery');
  const resourceEmpty = document.getElementById('resource-empty');
  const lockScroll = (on) => { document.body.style.overflow = on ? 'hidden' : ''; };
  const openCertificates = () => {
    resourceEmpty.hidden = CERTIFICADOS.length > 0;
    resourceEmpty.textContent = 'Os certificados serão adicionados quando os documentos forem enviados.';
    resourceGallery.classList.add('is-mosaic');
    resourceGallery.innerHTML = CERTIFICADOS.map((c, i) => `<button type="button" class="cert-item" data-cert="${i}" style="--i:${i}"><img src="${escT(c.t)}" alt="" loading="lazy" decoding="async"><span><b>${escT(c.titulo)}</b>${escT(c.org)}</span></button>`).join('');
    if (!resourceGallery.dataset.b) { resourceGallery.dataset.b = '1';
      const zoom = document.createElement('div'); zoom.className = 'cert-zoom'; zoom.hidden = true; zoom.innerHTML = '<img alt=""><p></p>'; resourceOverlay.appendChild(zoom);
      let zi = -1; const zShow = (i) => { zi = (i + CERTIFICADOS.length) % CERTIFICADOS.length; const c = CERTIFICADOS[zi]; zoom.querySelector('img').src = c.src; zoom.querySelector('img').alt = c.titulo; zoom.querySelector('p').textContent = c.titulo + ' — ' + c.org; zoom.hidden = false; };
      resourceGallery.addEventListener('click', (e) => { const b = e.target.closest('[data-cert]'); if (b) zShow(+b.dataset.cert); });
      zoom.addEventListener('click', () => { zoom.hidden = true; });
      document.addEventListener('keydown', (e) => { if (zoom.hidden) return; if (e.key === 'Escape') { e.stopImmediatePropagation(); zoom.hidden = true; } if (e.key === 'ArrowRight') zShow(zi + 1); if (e.key === 'ArrowLeft') zShow(zi - 1); }, true);
    }
    resourceOverlay.hidden = false; lockScroll(true);
    resourceOverlay.querySelector('button')?.focus();
  };
  const closeResourceModal = () => { resourceOverlay.hidden = true; lockScroll(false); };
  document.getElementById('certificates-btn')?.addEventListener('click', openCertificates);
  resourceOverlay.querySelectorAll('[data-close-resource]').forEach(b => b.addEventListener('click', closeResourceModal));
  resourceOverlay.addEventListener('click', e => { if (e.target === resourceOverlay) closeResourceModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !resourceOverlay.hidden) closeResourceModal(); });

  const renderAboutPage = () => {
    { const ap = document.getElementById('about-photo'); if (ap && !ap.dataset.b) { ap.dataset.b = '1'; const tg = () => ap.setAttribute('aria-pressed', String(ap.classList.toggle('on'))); ap.addEventListener('click', tg); ap.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tg(); } }); } } // foto: cor ao tocar ou com o teclado
    const lg = document.getElementById('cv-lang');
    if (lg) lg.innerHTML = IDIOMAS.map(i => `<div class="cv-item lang-item reveal"><div class="cv-head"><div class="cv-logo" aria-hidden="true">${i.f()}</div><div class="cv-main"><p class="cv-name" style="font-weight:400">${tx(i.t)}</p>${i.desc ? `<p class="cv-desc">${tx(i.desc)}</p>` : ''}</div></div></div>`).join('');
    ['exp', 'edu', 'extra', 'skills'].forEach(k => {
      const el = document.getElementById('cv-' + k); if (!el) return;
      // experiência: 4 freelas mais recentes numa coluna, o resto na outra
      el.innerHTML = CV[k].map(cvItem).join(''); // uma coluna, em ordem
      refreshReveal(el);
    });
    if (lg) refreshReveal(lg);
    if (!aboutPageRendered) { aboutPageRendered = true; onLang(() => renderAboutPage()); }
  };

  /* --- Lightbox --- */
  const lbOverlay = document.getElementById('lightbox-overlay');

  window.openLightbox = (src) => {
    document.getElementById('lightbox-img').src = src;
    lbOverlay.classList.add('open'); document.body.style.overflow = 'hidden';
  };
  document.getElementById('lightbox-close-btn').onclick = () => { lbOverlay.classList.remove('open'); document.body.style.overflow = ''; };

  lbOverlay.addEventListener('click', e => { if (e.target === lbOverlay || e.target.id === 'lightbox-stage') lbOverlay.querySelector('.lightbox-close').click(); }); // clique fora da imagem fecha
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lbOverlay.classList.contains('open')) lbOverlay.querySelector('.lightbox-close').click(); });

  /* --- Retrato interativo ---
     Padrão (desktop e mobile): vídeo dither em loop. Hover/arraste: a foto natural aparece dentro de um
     holofote com borda pontilhada (máscara Bayer 8x8 em baixa resolução). Clique/toque: foto inteira / volta ao vídeo.
     Até o vídeo tocar (ou com economia de dados), a foto fica visível como fallback. */
  const initPortrait = () => {
    const box = document.getElementById('hero-portrait');
    if (!box) return;
    const video = box.querySelector('.portrait-video');
    const photo = box.querySelector('.portrait-base');
    const canvas = box.querySelector('.portrait-reveal');
    const ctx = canvas.getContext('2d');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = matchMedia('(max-width: 767px)').matches;
    const saveData = !!(navigator.connection && navigator.connection.saveData);
    let CELL = 2; // "pixel" da máscara em px CSS; recalculado no resize (~50 células na largura)
    const BAYER = [0,32,8,40,2,34,10,42,48,16,56,24,50,18,58,26,12,44,4,36,14,46,6,38,60,28,52,20,62,30,54,22,
      3,35,11,43,1,33,9,41,51,19,59,27,49,17,57,25,15,47,7,39,13,45,5,37,63,31,55,23,61,29,53,21].map(v => (v + 0.5) / 64);

    let W = 0, H = 0, dpr = 1, gw = 0, gh = 0, raf = 0, inView = false;
    const mask = document.createElement('canvas');
    const mctx = mask.getContext('2d');
    let maskData = null, mask32 = null;
    const s = { x: 0, y: 0, tx: 0, ty: 0, r: 0, tr: 0, locked: false, hovering: false, anim: null };
    const easeOut = (t) => 1 - Math.pow(1 - t, 2); // começa na hora e desacelera no fim

    const hoverR = () => W * 0.28;
    const fullR = () => Math.hypot(W, H) * 1.9; // usado no resize com a foto já toda em vídeo
    const EXPAND_MS = 1500;   // clique: vídeo se expande pela foto
    const COLLAPSE_MS = 550; // clique de novo: volta para a foto
    const farCorner = () => Math.max(Math.hypot(s.x, s.y), Math.hypot(W - s.x, s.y), Math.hypot(s.x, H - s.y), Math.hypot(W - s.x, H - s.y));
    const photoReady = () => photo.complete && photo.naturalWidth > 0;

    // object-fit: contain no canvas: preserva a imagem inteira e deixa o fundo branco aparecer quando necessário.
    const drawContain = (c, src, sw0, sh0, cw, ch) => {
      if (!sw0 || !sh0 || !cw || !ch) return;
      const scale = Math.min(cw / sw0, ch / sh0);
      const dw = sw0 * scale, dh = sh0 * scale;
      c.drawImage(src, 0, 0, sw0, sh0, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    // Vídeo tocando de fato → a <img> sai e o <video> aparece direto; o canvas desenha só a foto do holofote
    let playing = false;
    const photoFull = () => s.locked && !s.anim; // foto inteira fixada: vídeo pode pausar
    const direct = () => playing;
    let fadeTimer = null;
    const updateDirect = (fade) => {
      const on = direct();
      if (on === box.classList.contains('is-direct')) return;
      if (on && fade) { box.classList.add('is-fade'); clearTimeout(fadeTimer); fadeTimer = setTimeout(() => box.classList.remove('is-fade'), 400); }
      else box.classList.remove('is-fade'); // demais trocas instantâneas: o canvas já mostra o mesmo frame
      box.classList.toggle('is-direct', on);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (s.r < 1 || !photoReady()) return;
      drawContain(ctx, photo, photo.naturalWidth, photo.naturalHeight, canvas.width, canvas.height);
      // borda pontilhada: larga no hover (45% do raio), mais estreita na expansão do clique (frente de onda visível)
      const inner = s.r * (s.locked || s.anim ? 0.8 : 0.55), band = s.r - inner;
      if (inner >= farCorner()) return; // vídeo cobre a foto inteira: sem máscara
      for (let j = 0; j < gh; j++) {
        const dy = (j + 0.5) * CELL - s.y, dy2 = dy * dy, row = j * gw, brow = (j & 7) * 8;
        for (let i = 0; i < gw; i++) {
          const dx = (i + 0.5) * CELL - s.x, d = Math.sqrt(dx * dx + dy2);
          const v = d <= inner ? 1 : d >= s.r ? 0 : 1 - (d - inner) / band;
          mask32[row + i] = v > BAYER[brow + (i & 7)] ? 0xffffffff : 0;
        }
      }
      mctx.putImageData(maskData, 0, 0);
      ctx.globalCompositeOperation = 'destination-in';
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(mask, 0, 0, gw * CELL * dpr, gh * CELL * dpr);
      ctx.globalCompositeOperation = 'source-over';
      ctx.imageSmoothingEnabled = true;
    };

    // Vídeo: carrega sob demanda; toca só enquanto o holofote existe e a foto está visível
    const ensureVideo = () => {
      if (saveData || video.src) return;
      video.muted = true; video.defaultMuted = true; // Safari só libera autoplay com mudo definido via propriedade
      video.playsInline = true;
      if (mobile) { video.autoplay = true; video.preload = 'auto'; }
      video.src = video.dataset.src;
      video.load();
    };
    const wantVideo = () => !photoFull() && inView && !document.hidden;
    let playRetries = 0;
    const syncVideo = () => {
      const want = wantVideo();
      if (want) {
        ensureVideo();
        if (video.paused) {
          // play() falha antes de haver dados (Safari) ou é abortado por load(): tenta de novo
          const p = video.play();
          if (p && p.catch) p.then(() => { playRetries = 0; }).catch(() => {
            if (playRetries++ < 20) setTimeout(syncVideo, 250);
          });
        }
      }
      else if (!video.paused) video.pause();
    };
    // Retoma sempre que o vídeo ficar pronto ou for pausado pelo navegador enquanto deveria tocar
    video.addEventListener('canplay', syncVideo);
    video.addEventListener('loadeddata', syncVideo);
    video.addEventListener('pause', () => { playing = false; updateDirect(); if (wantVideo() && !document.hidden) setTimeout(syncVideo, 100); });
    video.addEventListener('playing', () => { playing = true; playRetries = 0; updateDirect(true); }); // fade só quando sai da foto
    ['emptied', 'error', 'ended'].forEach(ev => video.addEventListener(ev, () => { playing = false; updateDirect(); }));

    if (mobile) {
      // Autoplay bloqueado (ex.: modo Pouca Energia do iOS): o 1º toque em qualquer lugar da página dá play
      const unlock = () => { if (wantVideo() && video.paused) { ensureVideo(); video.play().catch(() => {}); } };
      ['touchend', 'click'].forEach(ev => document.addEventListener(ev, unlock, { capture: true, passive: true }));
      video.addEventListener('playing', () => ['touchend', 'click'].forEach(ev => document.removeEventListener(ev, unlock, { capture: true })), { once: true });
      // Watchdog: se o tempo do vídeo parar de andar enquanto deveria tocar, volta à foto e tenta de novo
      let lastT = -1;
      setInterval(() => {
        if (!wantVideo()) { lastT = -1; return; }
        const t = video.currentTime;
        if (playing && t === lastT) { playing = false; updateDirect(); }
        else if (!playing && !video.paused && lastT >= 0 && t !== lastT) { playing = true; updateDirect(true); }
        if (!playing || video.paused) { playRetries = 0; syncVideo(); }
        lastT = t;
      }, 1000);
    }

    const tick = () => {
      const k = reduce ? 1 : 0.16, kr = reduce ? 1 : 0.12;
      s.x += (s.tx - s.x) * k; s.y += (s.ty - s.y) * k;
      if (s.anim) { // clique: raio animado por tempo (lento e suave)
        const t = Math.min(1, (performance.now() - s.anim.t0) / s.anim.dur);
        s.r = s.anim.from + (s.anim.to - s.anim.from) * easeOut(t);
        if (t >= 1) s.anim = null;
      } else s.r += (s.tr - s.r) * kr;
      const settled = !s.anim && Math.abs(s.tx - s.x) < 0.3 && Math.abs(s.ty - s.y) < 0.3 && Math.abs(s.tr - s.r) < 0.5;
      if (settled) { s.x = s.tx; s.y = s.ty; s.r = s.tr; }
      draw();
      updateDirect();
      // canvas só tem a foto (estática): parou de mexer, para o rAF
      if (settled) { raf = 0; syncVideo(); return; }
      raf = requestAnimationFrame(tick);
    };
    const kick = () => { syncVideo(); if (!raf) raf = requestAnimationFrame(tick); };

    const resize = () => {
      const rect = box.getBoundingClientRect();
      W = rect.width; H = rect.height;
      if (!W || !H) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      CELL = Math.max(2, Math.round(W / 50));
      gw = Math.ceil(W / CELL); gh = Math.ceil(H / CELL);
      mask.width = gw; mask.height = gh;
      maskData = mctx.createImageData(gw, gh);
      mask32 = new Uint32Array(maskData.data.buffer);
      if (s.locked) s.r = s.tr = fullR();
      draw();
      if (inView) kick();
    };

    const pos = (e) => { const r = box.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };

    let creditTimer = null;
    const toggle = (x, y) => {
      // Mobile com autoplay bloqueado: o toque dá play em vez de alternar (a foto já está visível)
      if (mobile && !s.locked && !playing && !s.anim && !saveData) { ensureVideo(); video.play().catch(() => {}); return; }
      const hint = box.parentElement && box.parentElement.querySelector('.portrait-hint');
      if (hint) {
        clearTimeout(creditTimer);
        if (!hint.dataset.originalContent) hint.dataset.originalContent = hint.innerHTML;
        hint.classList.add('is-credit');
        hint.innerHTML = '<span class="portrait-credit-label">Feito no Pixelar</span>';
        creditTimer = setTimeout(() => {
          hint.classList.remove('is-credit');
          hint.innerHTML = hint.dataset.originalContent || '';
        }, 2600);
      }
      box.classList.add('touched');
      s.locked = !s.locked;
      box.setAttribute('aria-pressed', String(s.locked));
      if (s.r < 1) { s.x = x; s.y = y; }
      s.tx = x; s.ty = y;
      // alvo = raio exato para cobrir a foto a partir do ponto clicado (usa a duração inteira)
      s.tr = s.locked ? Math.max(...[[0, 0], [W, 0], [0, H], [W, H]].map(([cx, cy]) => Math.hypot(cx - x, cy - y))) / 0.8 + 2
                      : (s.hovering ? hoverR() : 0);
      s.anim = reduce ? null : { from: s.r, to: s.tr, t0: performance.now(), dur: s.locked ? EXPAND_MS : COLLAPSE_MS };
      kick();
    };

    // Holofote segue o ponteiro: mouse (hover) e dedo (arrastar sobre a foto)
    const spotOn = (x, y) => {
      s.hovering = true; box.classList.add('touched');
      if (s.locked) return;
      if (s.r < 1) { s.x = x; s.y = y; }
      s.tx = x; s.ty = y; s.tr = hoverR(); s.anim = null; kick();
    };
    const spotMove = (x, y) => { if (s.locked) return; s.tx = x; s.ty = y; kick(); };
    const spotOff = () => { s.hovering = false; if (!s.locked) { s.tr = 0; s.anim = null; kick(); } };

    let touch = null, lastType = 'mouse';
    // Mouse
    box.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') spotOn(...pos(e)); });
    box.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') spotOff(); });
    box.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse') spotMove(...pos(e));
      else if (touch) { const [x, y] = pos(e); spotMove(x, y); if (Math.hypot(x - touch.x, y - touch.y) > 10) touch.moved = true; }
    });
    // Clique do mouse: foto inteira / volta ao vídeo (toque é tratado no pointerup)
    box.addEventListener('click', (e) => { if (lastType === 'mouse') toggle(...pos(e)); });

    // Toque: dedo pousado/arrastando = holofote da foto; toque rápido sem arrastar = foto inteira / volta
    // (touch-action: none na foto → o arraste não rola a página enquanto o dedo está sobre ela)
    box.addEventListener('pointerdown', (e) => {
      lastType = e.pointerType;
      if (e.pointerType === 'mouse') return;
      const [x, y] = pos(e);
      touch = { x, y, t: performance.now(), moved: false };
      box.setPointerCapture?.(e.pointerId);
      spotOn(x, y);
    });
    const endTouch = (e) => {
      if (!touch || e.pointerType === 'mouse') return;
      const tap = !touch.moved && performance.now() - touch.t < 350 && e.type === 'pointerup';
      touch = null;
      s.hovering = false;
      if (tap) toggle(...pos(e)); else spotOff();
    };
    box.addEventListener('pointerup', endTouch);
    box.addEventListener('pointercancel', endTouch);

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(W / 2, H / 2); }
    });

    new IntersectionObserver(([en]) => { inView = en.isIntersecting; inView ? kick() : syncVideo(); }, { threshold: 0.15 }).observe(box);
    document.addEventListener('visibilitychange', () => { !document.hidden ? kick() : syncVideo(); });
    new ResizeObserver(resize).observe(box);

    // Retrato abre no vídeo em todas as telas: carrega já (acima da dobra)
    ensureVideo();
    syncVideo();
  };

  /* --- Faixa de logos ---
     Movimento por JS (não CSS) para permitir: desacelerar no hover, arrastar com mouse/dedo,
     colorir o logo que passa pelo centro e retomar sempre (sem estado preso). */
  const initMarquee = () => {
    const track = document.getElementById('marquee-track');
    if (!track) return;
    const mask = track.parentElement;
    // Faixa infinita: a lista é copiada até cobrir a largura visível + 1 volta; x "dá a volta" (módulo da largura da lista),
    // então nunca sobra espaço vazio nas pontas. Cópias ficam fora do leitor de tela e do Tab.
    const list = track.querySelector('.marquee-list');
    const addCopies = () => {
      const need = Math.ceil((mask.getBoundingClientRect().width || innerWidth) / Math.max(1, list.offsetWidth || 1)) + 1;
      for (let n = track.children.length - 1; n < need; n++) {
        const c = list.cloneNode(true); c.setAttribute('aria-hidden', 'true'); c.removeAttribute('aria-label');
        c.querySelectorAll('a').forEach(a => a.tabIndex = -1);
        track.appendChild(c);
      }
    };
    addCopies();
    let items = [...track.querySelectorAll('.marquee-logo')];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const SPEED = reduce ? 0 : 38;        // px/s em velocidade normal
    // Vaivém: anda da direita p/ a esquerda até o último logo chegar ao centro, inverte, volta até o primeiro, e assim sempre.
    // x fica SEMPRE preso entre lo e hi: a faixa nunca sai da tela, nem com aba escondida, redimensionamento ou arraste.
    let x = 0, dir = 1, v = SPEED, target = SPEED, last = 0, raf = 0, inView = false;
    let offsets = [], center = 0, lo = 0, period = 0, lastMid = -1, hoverEl = null, drag = null, resumeT = 0;
    const mobile = matchMedia('(hover: none)').matches;
    let mobileFling = 0;

    const measure = () => {
      const w = mask.getBoundingClientRect().width;
      if (!w || !track.offsetWidth) return false;    // escondida: mantém a última medida
      addCopies(); items.forEach(li => li.classList.remove('is-middle')); lastMid = -1; items = [...track.querySelectorAll('.marquee-logo')];
      const t0 = track.getBoundingClientRect().left;  // posição relativa à faixa (o transform afeta os dois igualmente)
      offsets = items.map(li => { const r = li.getBoundingClientRect(); return r.left - t0 + r.width / 2; });
      center = w / 2;
      period = list.offsetWidth;                       // largura de uma volta
      lo = offsets[0] - center;                        // 1º logo no centro (ponto de partida)
      return true;
    };
    // prende x nos limites; ao bater numa ponta, inverte o sentido
    const clamp = () => { if (period > 0) x = ((x % period) + period) % period; };

    const paint = () => {
      track.style.transform = `translate3d(${-x}px,0,0)`;
      let best = 1e9, mid = -1;
      for (let i = 0; i < offsets.length; i++) { const d = Math.abs(offsets[i] - x - center); if (d < best) { best = d; mid = i; } }
      if (mid !== lastMid) { items[lastMid]?.classList.remove('is-middle'); items[mid]?.classList.add('is-middle'); lastMid = mid; } // o mais central (nome no celular); só mexe no DOM quando muda
    };
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0); last = now;
      if (!drag) {
        if (resumeT && now > resumeT) { target = hoverEl ? 0 : SPEED; resumeT = 0; }
        v += (target - v) * Math.min(1, dt * 3);   // aceleração/frenagem suave (~1s)
        if (mobile && Math.abs(mobileFling) > 8) {
          x += mobileFling * dt;
          mobileFling *= Math.exp(-2.4 * dt);       // inércia suave após soltar o dedo
        } else {
          mobileFling = 0;
          x += v * dir * dt;
        }
        clamp();
      }
      paint();
      raf = inView ? requestAnimationFrame(tick) : 0;
    };
    const start = () => { if (!raf && inView) { last = performance.now(); raf = requestAnimationFrame(tick); } };

    // Hover (mouse): desacelera até parar, colore e mostra o nome; ao sair, volta a andar
    track.addEventListener('pointerover', (e) => {
      if (e.pointerType !== 'mouse') return;
      const li = e.target.closest('.marquee-logo');
      if (hoverEl && hoverEl !== li) hoverEl.classList.remove('is-hover');
      hoverEl = li; if (li) li.classList.add('is-hover');
      track.classList.toggle('has-hover', !!li);
      target = 0;
    });
    track.addEventListener('pointerleave', (e) => {
      if (e.pointerType !== 'mouse') return;
      if (hoverEl) hoverEl.classList.remove('is-hover'); hoverEl = null;
      track.classList.remove('has-hover');
      if (!drag) target = SPEED;
    });

    // Rolagem lateral: dois dedos no touchpad (deltaX) ou Shift + roda. Vertical comum continua descendo a página.
    mask.addEventListener('wheel', (e) => {
      const k = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? mask.clientWidth : 1;
      const horizontalTrackpad = Math.abs(e.deltaX) > 0.5 && Math.abs(e.deltaX) >= Math.abs(e.deltaY) * 0.35;
      const dx = horizontalTrackpad ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
      if (Math.abs(dx) <= 0.5) return;
      if (e.cancelable) e.preventDefault();
      x += dx * k; dir = dx > 0 ? 1 : -1; clamp(); v = 0; target = 0; resumeT = performance.now() + 1400; paint();
      if (!raf && inView) start();
    }, { passive: false });

    // Arrastar (mouse ou dedo): move a faixa dentro dos limites; ao soltar, retoma no sentido do gesto
    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.pointerType === 'mouse' && e.cancelable) e.preventDefault(); // sem seleção/arraste nativo de imagem
      drag = { sx: e.clientX, sy: e.clientY, x0: x, moved: false, axis: null, id: e.pointerId, lastX: e.clientX, lastY: e.clientY, lastT: performance.now(), fingerV: 0 };
      mobileFling = 0;
      track.classList.add('is-dragging');
    });
    window.addEventListener('pointermove', (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
      if (!drag.axis && Math.max(Math.abs(dx), Math.abs(dy)) > 7) drag.axis = Math.abs(dx) >= Math.abs(dy) ? 'x' : 'y';
      if (mobile && drag.axis === 'y') {
        const dyStep = e.clientY - drag.lastY; // gesto vertical: rola a página, não a faixa
        if (dyStep) window.scrollBy(0, -dyStep);
        drag.lastX = e.clientX; drag.lastY = e.clientY; drag.lastT = performance.now();
        return;
      }
      if (drag.axis === 'y') return;
      const now = performance.now(), elapsed = Math.max(1, now - drag.lastT);
      drag.fingerV = (e.clientX - drag.lastX) / elapsed * 1000;
      drag.lastX = e.clientX; drag.lastY = e.clientY; drag.lastT = now;
      if (Math.abs(dx) > 4) {
        drag.moved = true;
        if (e.cancelable) e.preventDefault();
        if (window.getSelection) { const sel = window.getSelection(); if (sel && sel.rangeCount) sel.removeAllRanges(); }
      }
      x = drag.x0 - dx; clamp();
      track.style.transform = `translate3d(${-x}px,0,0)`;
    });
    const endDrag = (e) => {
      if (!drag || (e.pointerId !== undefined && e.pointerId !== drag.id)) return;
      const moved = drag.moved, dragVelocity = drag.fingerV;
      if (moved && Math.abs(dragVelocity) > 20) dir = dragVelocity < 0 ? 1 : -1; // segue o sentido em que foi jogada
      drag = null; track.classList.remove('is-dragging');
      justDragged = moved;
      clamp();
      if (e.pointerType === 'mouse' && hoverEl) target = 0;   // continua parado se o mouse está em cima
      else if (mobile && e.pointerType !== 'mouse' && moved) {
        target = 0; v = 0;
        mobileFling = Math.max(-1500, Math.min(1500, -dragVelocity));
        resumeT = performance.now() + 1500;
      } else { target = 0; v = 0; resumeT = performance.now() + (moved ? 1200 : 2000); }
    };
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    // Clique abre o projeto; se o gesto foi um arraste, cancela o clique
    let justDragged = false;
    track.addEventListener('click', (e) => {
      const a = e.target.closest('.marquee-link'); if (!a) return;
      if (justDragged) { e.preventDefault(); justDragged = false; return; }
      if (e.metaKey || e.ctrlKey || e.shiftKey) return; // Ctrl/Cmd/Shift-clique: nova aba
      e.preventDefault();
      window.location.assign(a.href);
    });

    // remede ao voltar a aparecer e ao redimensionar
    new IntersectionObserver(([en]) => { inView = en.isIntersecting; if (inView) { measure(); clamp(); start(); } }).observe(mask);
    window.addEventListener('resize', () => { if (measure()) { clamp(); paint(); } });
    // começa com o 1º logo (Óptica Leopoldina) no centro, andando para a esquerda
    const startCentered = () => { if (measure()) { x = lo; dir = 1; clamp(); paint(); } };
    startCentered();
    let started = false;
    window.addEventListener('load', () => { if (!started) startCentered(); else if (measure()) { clamp(); paint(); } started = true; });
  };

  // altura real do cabeçalho → --hdr-h (usada pela 1ª tela)
  const setHdr = () => { const h = document.querySelector('.top-header'); if (h) document.documentElement.style.setProperty('--hdr-h', h.offsetHeight + 'px'); };
  setHdr(); window.addEventListener('resize', setHdr);

  /* --- Projetos --- */
  const PROJECT_ROUTE_ALIASES = {"rino-site":"rino-cores","o-hobbit":"hobbit","metaprojeto":"portfolio","dash-geral":"visao-geral"};
  const cleanProjectUrl = (slug) => HMI.with('/projetos/' + (PROJECT_ROUTE_ALIASES[slug] || slug) + '/');
  const PJ = window.PROJETOS || [];
  const PJ_BY = Object.fromEntries(PJ.map(p => [p.slug, p]));
  const lx = (o) => o == null ? '' : typeof o === 'string' ? o : (o[LANG] || o.pt);

  // grupos da página Projetos (a ordem é a da lista em projetos.js). Dashboards: só a visão geral, num botão à parte.
  const FILTROS = [['marcas', { pt: 'Marcas e Clientes', en: 'Brands and Clients', es: 'Marcas y Clientes' }], ['inst', { pt: 'Institucional', en: 'Institutional', es: 'Institucional' }], ['cultura', { pt: 'Cultura e crítica', en: 'Culture and criticism', es: 'Cultura y crítica' }]];

   const DASH_BTN = { pt: 'Veja os números', en: 'See the numbers', es: 'Ver las cifras' };
  let pjSelectedCategory = 'all';
  const pjCard = (p) => `<a class="work-card${p.capaCropTop ? ' work-card-crop-top' : ''}" href="${cleanProjectUrl(p.slug)}" data-pj="${p.slug}">
      <div class="work-card-media">${p.capaAnim ? capaAnimHTML(p) : `<img src="${p.capa}" alt="" loading="lazy" decoding="async" width="1200" height="800"${p.capaPosicao ? ` style="object-position:${p.capaPosicao}"` : ''}>${p.slug === 'rino-site' ? '<img class="rino-cover-logo" src="assets/projetos/rino/rino-mascote.svg" alt="Ilustração detalhada do rinoceronte Rino" loading="lazy" decoding="async">' : ''}`}</div>
      <p class="work-card-title">${p.titulo}</p>${(p.entrega || p.resumo) ? `<p class="work-card-desc">${lx(p.entrega || p.resumo)}</p>` : p.badge ? `<p class="work-card-tag">${lx(p.badge)}</p>` : ''}</a>`;
  // quantidade de colunas, lembrada por modo: projetos (celular 1–3, desktop 2–5) e mídias sociais (celular 1–3, desktop 2–6)
  const mqMob = window.matchMedia('(max-width:767px)');
  const colsKey = () => mqMob.matches ? 'm' : 'd';
  const COLS_CFG = { pj: { key: 'hm-wcols2', def: [2, 3], max: 5 }, sg: { key: 'hm-scols2', def: [2, 3], max: 6 } }
  const colsMode = () => pjSelectedCategory === 'midias' ? 'sg' : 'pj';
  const colsMax = () => mqMob.matches ? 3 : COLS_CFG[colsMode()].max;
  const readCols = () => { try { return JSON.parse(localStorage.getItem(COLS_CFG[colsMode()].key) || '{}') || {}; } catch (e) { return {}; } };
  const getCols = () => { const n = +readCols()[colsKey()], c = COLS_CFG[colsMode()]; return n >= (mqMob.matches ? 1 : 2) && n <= colsMax() ? n : c.def[mqMob.matches ? 0 : 1]; };
  const setCols = (n) => { const o = readCols(); o[colsKey()] = n; try { localStorage.setItem(COLS_CFG[colsMode()].key, JSON.stringify(o)); } catch (e) {} };
  const applyCols = (grid) => { const n = getCols(); grid.style.setProperty('--wcols', n); grid.dataset.cols = n; document.querySelectorAll('.pj-cols button').forEach(b => b.setAttribute('aria-pressed', +b.dataset.cols === n)); };
  const COLS_L = { pt: 'Colunas', en: 'Columns', es: 'Columnas' };
  const colsHTML = () => `<div class="pj-cols" role="group" aria-label="${lx(COLS_L)}"><span>${lx(COLS_L)}</span>${Array.from({ length: COLS_CFG[colsMode()].max }, (_, i) => i + 1).map(n => `<button type="button" class="art-filter" data-cols="${n}" aria-pressed="false" aria-label="${n} ${lx(COLS_L).toLowerCase()}">${n}</button>`).join('')}</div>`;
  mqMob.addEventListener('change', () => { if (document.getElementById('work-case-grid')) renderPJ(); });

  /* --- Mídias sociais: os projetos da categoria viram filtros e a grade mostra direto os posts e carrosséis ---
     Relevância (padrão): destaques primeiro; depois a posição do post entre os da própria conta (curtidas + comentários,
     ou só comentários quando a conta oculta curtidas), para contas grandes e pequenas dividirem o topo; empate → mais recente. */
  const SG_L = {
    proj: { pt: 'Filtrar por projeto', en: 'Filter by project', es: 'Filtrar por proyecto' }, todos: { pt: 'Todos', en: 'All', es: 'Todos' },
    ord: { pt: 'Ordenar', en: 'Sort', es: 'Ordenar' }, oR: { pt: 'Relevância', en: 'Relevance', es: 'Relevancia' },
    oN: { pt: 'Mais recentes', en: 'Newest', es: 'Más recientes' }, oV: { pt: 'Mais antigos', en: 'Oldest', es: 'Más antiguos' }, oP: { pt: 'Projeto (A–Z)', en: 'Project (A–Z)', es: 'Proyecto (A–Z)' },
    pub: { pt: ['publicação', 'publicações'], en: ['post', 'posts'], es: ['publicación', 'publicaciones'] },
    car: { pt: ['carrossel', 'carrosséis'], en: ['carousel', 'carousels'], es: ['carrusel', 'carruseles'] },
    ver: { pt: 'Ver o projeto', en: 'View the project', es: 'Ver el proyecto' }, abrir: { pt: 'Abrir publicação', en: 'Open post', es: 'Abrir publicación' },
    ant: { pt: 'Imagem anterior', en: 'Previous image', es: 'Imagen anterior' }, prox: { pt: 'Próxima imagem', en: 'Next image', es: 'Imagen siguiente' }
  };
  const plural = (o, n) => lx(o)[n === 1 ? 0 : 1];
  let sgProj = 'all', sgOrd = 'r', SG_SCORE = null;
  const SG_ICO_CAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="7" y="3" width="13" height="15" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h10"/></svg>';
  const SG_ICO_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  const SG_ICO_OPEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
  // projetos da categoria e seus posts (mais específico primeiro: um post do Congresso fica com o Congresso, não com a PROEC)
  const sgProjects = (list) => list.filter(p => [].concat(p.filtro || []).includes('midias'))
    .map(p => { const gs = p.postGroups ? p.postGroups.map(g => g.g) : (p.posts ? [p.posts] : []); return { p, gs, items: POSTS.filter(x => gs.includes(x.g)) }; })
    .filter(o => o.items.length);
  const sgScore = (x) => {
    if (!SG_SCORE) {
      SG_SCORE = {}; const E = (window.ENGAJAMENTO || {}).posts || {}, acc = {};
      POSTS.forEach(p => { if (E[p.c]) (acc[p.user] = acc[p.user] || []).push(p); });
      Object.values(acc).forEach(a => {
        const soC = a.some(p => E[p.c][0] == null), v = (p) => soC ? E[p.c][1] : (E[p.c][0] || 0) + E[p.c][1];
        a.sort((m, n) => v(m) - v(n)).forEach((p, i) => { SG_SCORE[p.c] = a.length > 1 ? i / (a.length - 1) : .5; });
      });
    }
    return (x.featured ? 2 : 0) + (SG_SCORE[x.c] != null ? SG_SCORE[x.c] : .4);
  };
  const sgTile = (x, label) => {
    const n = Math.max(1, +x.n || 1), many = n > 1;
    // só a 1ª imagem carrega de início; as demais entram quando o card recebe o ponteiro, foco ou toque
    const slides = Array.from({ length: n }, (_, i) => `<img ${i ? 'data-src' : 'src'}="${igImg(x, i)}" alt="" ${i ? '' : 'loading="lazy" '}decoding="async" draggable="false">`).join('');
    const badge = x.reel ? `<span class="sg-badge">${SG_ICO_PLAY}</span>` : many ? `<span class="sg-badge">${SG_ICO_CAR}<span><b>1</b>/${n}</span></span>` : '';
    const nav = many ? `<button type="button" class="sg-nav sg-prev" aria-label="${lx(SG_L.ant)}" disabled>${ARR('M15 18l-6-6 6-6')}</button><button type="button" class="sg-nav sg-next" aria-label="${lx(SG_L.prox)}">${ARR('M9 18l6-6-6-6')}</button>` : '';
    return `<article class="sg-t" data-sgc="${x.c}">
      <div class="sg-media"><div class="sg-track">${slides}</div>${badge}${nav}
        <button type="button" class="sg-open" data-sg-open aria-label="${esc(lx(SG_L.abrir) + ': ' + label + ', ' + fmtData(x.d))}">${SG_ICO_OPEN}</button></div>
      <p class="sg-meta"><span>${esc(label)}</span><time datetime="${x.d}">${fmtData(x.d)}</time></p>
    </article>`;
  };
  const sgView = (list) => {
    const projs = sgProjects(list);
    sgProj = 'all'; // sem visualização separada por projeto: sempre todos
    const owner = {}; projs.slice().sort((a, b) => a.gs.length - b.gs.length).forEach(o => o.gs.forEach(g => { if (!owner[g]) owner[g] = o.p.titulo; }));
    const pool = sgProj === 'all' ? [...new Map(projs.flatMap(o => o.items).map(x => [x.c, x])).values()] : projs.find(o => o.p.slug === sgProj).items.slice();
    const by = { r: (a, b) => sgScore(b) - sgScore(a) || (a.d < b.d ? 1 : -1), n: (a, b) => a.d < b.d ? 1 : -1, v: (a, b) => a.d < b.d ? -1 : 1,
      p: (a, b) => String(owner[a.g] || '').localeCompare(String(owner[b.g] || ''), LANG) || (a.d < b.d ? 1 : -1) };
    const items = pool.sort(by[sgOrd]);
    const nCar = items.filter(x => x.n > 1).length;
    const sorts = [['r', SG_L.oR], ['n', SG_L.oN], ['v', SG_L.oV], ['p', SG_L.oP]].map(([k, l]) => `<button type="button" class="art-filter" data-sg-ord="${k}" aria-pressed="${sgOrd === k}">${lx(l)}</button>`).join('');
    const controls = `<div class="sg-tools"><div class="sg-sort" role="group" aria-label="${lx(SG_L.ord)}"><span>${lx(SG_L.ord)}</span>${sorts}</div>${colsHTML()}</div>`;
    const cur = sgProj !== 'all' ? PJ_BY[sgProj] : null;
    const summary = `<p class="pj-results-line sg-line"><span>${items.length} ${plural(SG_L.pub, items.length)}${nCar ? ` · ${nCar} ${plural(SG_L.car, nCar)}` : ''}</span>${cur ? `<a class="sg-proj-link" href="${cleanProjectUrl(cur.slug)}" data-pj="${cur.slug}">${lx(SG_L.ver)} ${esc(cur.titulo)} →</a>` : ''}</p>`;
    const label = (x) => sgProj === 'all' ? (owner[x.g] || x.v) : '@' + x.user;
    return { controls, grid: summary + `<div class="sg-grid">${items.map(x => sgTile(x, label(x))).join('')}</div>` };
  };

  const renderPJ = () => {
    renderHomeRows();
    const grid = document.getElementById('work-case-grid'), bar = document.getElementById('pj-filters');
    const dashboardCTA = document.getElementById('work-dashboard-cta');
    if (!grid || !bar) return;
    const displayedPJ = PJ.filter(p => !['o-hobbit','rino-pecas','sollaris-instagram','dash-geral'].includes(p.slug));
    const counts = new Map();
    displayedPJ.filter(p => !p.oculto).forEach(p => [].concat(p.filtro || []).filter(Boolean).forEach(category => counts.set(category, (counts.get(category) || 0) + 1)));
    const categories = FILTROS.filter(([key]) => counts.has(key));
    if (pjSelectedCategory !== 'all' && !counts.has(pjSelectedCategory)) pjSelectedCategory = 'all';
    const social = pjSelectedCategory === 'midias';
    const allButton = `<button type="button" class="art-filter pj-tag-filter" data-category-filter="all" aria-pressed="${pjSelectedCategory === 'all'}">${lx({pt:'Todos',en:'All',es:'Todos'})}</button>`;
    const categoryButtons = categories.map(([key,label]) => `<button type="button" class="art-filter pj-tag-filter" data-category-filter="${key}" aria-pressed="${pjSelectedCategory === key}">${lx(label)}</button>`).join('');
    const main = `<div class="pj-filter-main" role="group" aria-label="${lx({pt:'Filtrar projetos por categoria',en:'Filter projects by category',es:'Filtrar proyectos por categoría'})}">${allButton}${categoryButtons}</div>`;
    bar.hidden = false;
    if (dashboardCTA) dashboardCTA.innerHTML = PJ_BY['dash-geral'] ? '<a class="art-filter pj-dash-btn" href="' + cleanProjectUrl('dash-geral') + '" data-pj="dash-geral">' + lx(DASH_BTN) + '</a>' : '';
    grid.classList.toggle('work-grid', !social);
    grid.classList.toggle('sg-mode', social);
    if (social) {
      const v = sgView(displayedPJ);
      bar.innerHTML = main + v.controls;
      applyCols(grid);
      grid.innerHTML = v.grid;
      return;
    }
    bar.innerHTML = main + colsHTML();
    const matches = displayedPJ.filter(p => !p.oculto).filter(p => pjSelectedCategory === 'all' || [].concat(p.filtro || []).includes(pjSelectedCategory));
    const summary = `<div class="pj-results-line"><span>${matches.length} ${lx({pt:matches.length===1?'projeto':'projetos',en:matches.length===1?'project':'projects',es:matches.length===1?'proyecto':'proyectos'})}</span></div>`;
    applyCols(grid);
    grid.innerHTML = summary + (matches.length ? (window.capaSpread ? capaSpread(matches, getCols()) : matches).map(pjCard).join('') : `<p class="pj-empty">${lx({pt:'Nenhum projeto nesta categoria.',en:'No projects in this category.',es:'No hay proyectos en esta categoría.'})}</p>`);
  };
  document.getElementById('pj-filters').addEventListener('click', (e) => {
    const cb = e.target.closest('[data-cols]'); if (cb) { setCols(+cb.dataset.cols); renderPJ(); return; } // recria os cards: reordena as capas e reinicia as animações
    const sp = e.target.closest('[data-sg-proj]'); if (sp) { sgProj = sp.dataset.sgProj; renderPJ(); return; }
    const so = e.target.closest('[data-sg-ord]'); if (so) { sgOrd = so.dataset.sgOrd; renderPJ(); return; }
    const b = e.target.closest('[data-category-filter]'); if (!b) return;
    if (b.dataset.categoryFilter !== pjSelectedCategory) sgProj = 'all';
    pjSelectedCategory = b.dataset.categoryFilter;
    renderPJ();
  });
  // grade de mídias sociais: setas, contador, carregamento das demais imagens e abertura do post completo (legenda + links)
  const wcg = document.getElementById('work-case-grid');
  const sgHydrate = (t) => { if (!t || t.dataset.h) return; t.dataset.h = '1'; t.querySelectorAll('img[data-src]').forEach(i => { i.src = i.dataset.src; i.removeAttribute('data-src'); }); };
  ['pointerover', 'focusin', 'touchstart'].forEach(ev => wcg.addEventListener(ev, (e) => { if (e.target.closest) sgHydrate(e.target.closest('.sg-t')); }, { passive: true }));
  wcg.addEventListener('click', (e) => {
    const nav = e.target.closest('.sg-nav');
    if (nav) { e.preventDefault(); e.stopPropagation(); sgHydrate(nav.closest('.sg-t')); slideTrack(nav.parentNode.querySelector('.sg-track'), nav.classList.contains('sg-next') ? 1 : -1); return; }
    const op = e.target.closest('[data-sg-open], .sg-track'); if (!op) return;
    const x = POST_BY[op.closest('.sg-t').dataset.sgc]; if (x) openPosts([x]);
  });
  wcg.addEventListener('scroll', (e) => {
    const tr = e.target; if (!tr.classList || !tr.classList.contains('sg-track')) return;
    const m = tr.parentNode, n = tr.children.length, i = Math.round(tr.scrollLeft / Math.max(1, tr.clientWidth));
    const c = m.querySelector('.sg-badge b'); if (c) c.textContent = i + 1;
    const pv = m.querySelector('.sg-prev'), nx = m.querySelector('.sg-next'); if (pv) pv.disabled = i === 0; if (nx) nx.disabled = i >= n - 1;
  }, true);

  /* --- Página inicial: catálogo em páginas numeradas, seis projetos por página --- */
  const HOME_FEATURED = ['rino', 'sollaris', 'classic-tattoo', 'tesoura', 'optica-leopoldina', 'equity360'];
  const HOME_PROJECTS = [
    ...HOME_FEATURED.map(slug => PJ.find(p => p.slug === slug)).filter(Boolean)
  ];
  /* Home: projeto recente em destaque (Desvendados). REC_SUB é PLACEHOLDER: o subtítulo é escrito pelo Henrique */
  const HOME_REC = (window.POSTS || []).find(p => p.c === 'Df2Mgq8Fqi0');
  const REC_TITLE = 'Desvendados';
  const REC_SUB = { pt: '[Subtítulo do projeto]', en: '[Project subtitle]', es: '[Subtítulo del proyecto]' };
  /* Home: artigos em destaque, faixa de títulos e números */
  const HOME_ARTS_ALL = (window.ARTIGOS || []).filter(x => !x.project);
  const HOME_ARTS = ['https://tesouracomponta.com/o-sentido-da-vida/', 'https://online.visual-paradigm.com/pt/share/book/livro-persona-e-book-2faf3yvpm', 'https://personaunesp.com.br/pearl-critica/'].map(u => HOME_ARTS_ALL.find(x => x.u === u)).filter(Boolean);
  const HOME_DEST = [
    ['DQfY9lqkZfc', { pt: 'O Agente Secreto: coletiva de imprensa em São Paulo', en: 'The Secret Agent: press conference in São Paulo', es: 'El agente secreto: rueda de prensa en São Paulo' }],
    ['DPCkHYgkbDE', { pt: 'E o prêmio de Melhor Roteiro Original (não) vai para 2025', en: 'And the Best Original Screenplay award (doesn’t) go to 2025', es: 'Y el premio al Mejor Guion Original (no) es para 2025' }],
    ['Dd6mzTmFpUe', { pt: 'Tinashe reivindica o título que sempre foi dela em “Popstar”', en: 'Tinashe claims the title that was always hers in “Popstar”', es: 'Tinashe reivindica el título que siempre fue suyo en “Popstar”' }]
  ].map(([c, t]) => ({ x: (window.POSTS || []).find(p => p.c === c), t })).filter(d => d.x);
  // fora da faixa: listas/coleções e títulos que não são só o nome de uma obra
  const TICK_FORA = ['Os Curtas do Oscar 2026', 'Os Melhores Filmes de 2025', 'Os Melhores Discos de 2025', 'As Melhores Séries de 2025', 'Todo Mundo (Ainda) Tem Problemas Sexuais (e amorosos)', 'Representatividade LGBTQIA+', 'Os Melhores Filmes de 2023', 'As Melhores Séries de 2023', 'Os Melhores Discos de 2023', 'Os Curtas do Oscar 2023', 'Os Melhores Discos de 2022', 'As Melhores Séries de 2022', 'Os Melhores Filmes de 2022', 'As Melhores Séries de 2021'];
  const HOME_TICK = HOME_ARTS_ALL.filter(x => !HOME_ARTS.includes(x) && !x.pin && !TICK_FORA.includes(x.t)).slice(0, 24);
  const homeCounts = () => ({ pj: PJ.filter(p => !p.oculto).length, art: HOME_ARTS_ALL.length, post: (window.POSTS || []).length });
  let homeCounted = false;

  /* --- Faixa de títulos dos artigos ---
     Mesmo motor da faixa de logos: posição calculada a cada quadro (translate3d), sem animação CSS.
     Duas linhas em sentidos opostos; arrastar com mouse ou dedo (com inércia), rolagem lateral no touchpad;
     só anda enquanto está na tela. Nunca para com o mouse em cima (decisão do Henrique). */
  const initTicker = (tk) => {
    if (tk._stop) tk._stop();
    const rows = [...tk.querySelectorAll('.tk-row')].map((row, k) => ({ row, track: row.querySelector('.tk-track'), set: row.querySelector('.tk-set'), dir: k % 2 ? -1 : 1, x: 0, half: 0, speed: 0, fling: 0, drag: null }));
    if (!rows.length) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const SPEED = 38; // px/s, igual à faixa de logos
    let raf = 0, last = 0, inView = false, alive = true, lastW = 0;
    const measure = () => rows.forEach(r => {
      r.half = r.set.getBoundingClientRect().width; // largura de um conjunto = ponto de emenda do loop
      r.speed = reduce ? 0 : SPEED;
    });
    const wrap = (r) => { if (r.half) r.x = ((r.x % r.half) + r.half) % r.half; };
    const paint = (r) => { r.track.style.transform = `translate3d(${(-r.x).toFixed(2)}px,0,0)`; };
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0); last = now;
      if (!rows[0].half) measure();
      rows.forEach(r => {
        if (!r.drag) {
          if (Math.abs(r.fling) > 8) { r.x += r.fling * dt; r.fling *= Math.exp(-2.4 * dt); } // inércia após soltar
          else { r.fling = 0; r.x += r.dir * r.speed * dt; }
          wrap(r);
        }
        paint(r);
      });
      raf = inView && alive ? requestAnimationFrame(tick) : 0;
    };
    const start = () => { if (!raf && inView && alive) { last = performance.now(); raf = requestAnimationFrame(tick); } };

    // arrastar: o eixo é decidido nos primeiros px; gesto vertical fica com a página (touch-action: pan-y)
    const onDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      const r = rows.find(q => q.row.contains(e.target)); if (!r) return;
      if (e.pointerType === 'mouse' && e.cancelable) e.preventDefault(); // sem seleção de texto
      r.drag = { sx: e.clientX, sy: e.clientY, x0: r.x, id: e.pointerId, axis: null, moved: false, lx: e.clientX, lt: performance.now(), v: 0 };
      r.fling = 0; r.row.classList.add('is-dragging');
    };
    const onMove = (e) => {
      const r = rows.find(q => q.drag && q.drag.id === e.pointerId); if (!r) return;
      const d = r.drag, dx = e.clientX - d.sx, dy = e.clientY - d.sy;
      if (!d.axis && Math.max(Math.abs(dx), Math.abs(dy)) > 7) d.axis = Math.abs(dx) >= Math.abs(dy) ? 'x' : 'y';
      if (d.axis === 'y') return;
      const now = performance.now(); d.v = (e.clientX - d.lx) / Math.max(1, now - d.lt) * 1000; d.lx = e.clientX; d.lt = now;
      if (Math.abs(dx) > 4) { d.moved = true; if (e.cancelable) e.preventDefault(); }
      r.x = d.x0 - dx; wrap(r); paint(r);
    };
    const onUp = (e) => {
      const r = rows.find(q => q.drag && q.drag.id === e.pointerId); if (!r) return;
      const d = r.drag; r.drag = null; r.row.classList.remove('is-dragging');
      if (d.moved) { tk._dragged = true; if (e.type === 'pointerup') r.fling = Math.max(-1500, Math.min(1500, -d.v)); }
    };
    // rolagem lateral sem clicar: dois dedos no touchpad ou Shift + roda; a vertical continua descendo a página
    const onWheel = (e) => {
      const r = rows.find(q => q.row.contains(e.target)); if (!r) return;
      const k = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? r.row.clientWidth : 1;
      const dx = Math.abs(e.deltaX) > 0.5 && Math.abs(e.deltaX) >= Math.abs(e.deltaY) * 0.35 ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
      if (Math.abs(dx) <= 0.5) return;
      if (e.cancelable) e.preventDefault();
      r.x += dx * k; r.fling = 0; wrap(r); paint(r);
    };
    // clique depois de arrastar não abre o artigo
    if (!tk._clickGuard) { tk._clickGuard = true; tk.addEventListener('click', (e) => { if (tk._dragged) { tk._dragged = false; e.preventDefault(); e.stopImmediatePropagation(); } }, true); }
    const onResize = () => { if (innerWidth === lastW) return; lastW = innerWidth; measure(); rows.forEach(r => { wrap(r); paint(r); }); };
    const ro = 'ResizeObserver' in window ? new ResizeObserver(() => { measure(); rows.forEach(r => { wrap(r); paint(r); }); start(); }) : null;
    if (ro) rows.forEach(r => ro.observe(r.set));
    tk.addEventListener('pointerdown', onDown);
    addEventListener('pointermove', onMove, { passive: false });
    addEventListener('pointerup', onUp); addEventListener('pointercancel', onUp);
    tk.addEventListener('wheel', onWheel, { passive: false });
    addEventListener('resize', onResize);
    const io = 'IntersectionObserver' in window ? new IntersectionObserver(([en]) => { inView = en.isIntersecting; start(); }, { rootMargin: '100px 0px' }) : null;
    io ? io.observe(tk) : (inView = true);
    tk._stop = () => { alive = false; cancelAnimationFrame(raf); raf = 0; io && io.disconnect(); ro && ro.disconnect();
      tk.removeEventListener('pointerdown', onDown); removeEventListener('pointermove', onMove); removeEventListener('pointerup', onUp);
      removeEventListener('pointercancel', onUp); tk.removeEventListener('wheel', onWheel); removeEventListener('resize', onResize); };
    lastW = innerWidth; measure(); rows.forEach(paint); start();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (alive) { measure(); rows.forEach(r => { wrap(r); paint(r); }); } }); // remede com a Inter carregada
  };
  let homeExtrasKey = '';
  const TK_MQ = matchMedia('(max-width: 767px)');
  TK_MQ.addEventListener('change', () => renderHomeExtras()); // gira/redimensiona: refaz com o nº certo de linhas
  const renderHomeExtras = () => {
    const tkRows = TK_MQ.matches ? 4 : 2; // faixa de títulos: 4 linhas no celular, 2 no desktop
    const key = LANG + ':' + HOME_TICK.length + ':' + HOME_ARTS.length + ':' + tkRows; // só refaz quando muda idioma, dados ou nº de linhas
    if (key === homeExtrasKey) return; homeExtrasKey = key;
    const g = document.getElementById('home-art-grid');
    if (g) {
      g.innerHTML = HOME_ARTS.map((a, i) => `<a class="art-card in" href="${articleRoute(a)}" data-home-art="${i}"><div class="art-card-media"${a.bg ? ` style="background:${a.bg}"` : ''}><img src="${artImg(a)}" alt="" loading="lazy" decoding="async"${a.fit ? ` style="object-fit:${a.fit}"` : ''}></div><p class="art-card-meta">${a.tags.map(tagName).join(' · ')} — ${fmtData(a.d)}</p><h3 class="art-card-title">${artTitle(a)}</h3><p class="art-card-by">${a.site}</p></a>`).join('');
      g.onclick = (e) => { const c = e.target.closest('[data-home-art]'); if (!c || e.metaKey || e.ctrlKey) return; e.preventDefault(); openArticle(HOME_ARTS[+c.dataset.homeArt]); };
    }
    const tk = document.getElementById('home-ticker');
    if (tk) {
      const row = (list, off) => { const items = (hid) => list.map((a, i) => `<a href="${articleRoute(a)}" draggable="false" data-tk="${off + i}"${hid ? ' tabindex="-1"' : ''}>${window.HM_OBRAS_HTML ? window.HM_OBRAS_HTML(artTitle(a)) : artTitle(a)}</a><i aria-hidden="true"></i>`).join(''); return `<div class="tk-row"><div class="tk-track"><div class="tk-set">${items(false)}</div><div class="tk-set" aria-hidden="true">${items(true)}</div></div></div>`; };
      const per = Math.ceil(HOME_TICK.length / tkRows);
      tk.innerHTML = HOME_TICK.length > 5 ? Array.from({ length: tkRows }, (_, k) => row(HOME_TICK.slice(k * per, (k + 1) * per), k * per)).join('') : '';
      initTicker(tk);
      tk.onclick = (e) => { const c = e.target.closest('[data-tk]'); if (!c || e.metaKey || e.ctrlKey) return; e.preventDefault(); openArticle(HOME_TICK[+c.dataset.tk]); };
    }
    const dg = document.getElementById('home-dest-grid'), dt = document.getElementById('home-dest-title');
    if (dt) dt.textContent = lx({ pt: 'Destaques', en: 'Highlights', es: 'Destacados' });
    if (dg) {
      dg.innerHTML = HOME_DEST.map((d, i) => `<a class="art-card in dest-card" href="https://www.instagram.com/${d.x.reel ? 'reel' : 'p'}/${d.x.c}/" target="_blank" rel="noopener" data-dest="${i}"><div class="art-card-media" style="aspect-ratio:${(1 / (d.x.r || 1.25)).toFixed(4)}">${d.x.n > 1 ? `<span class="dest-n">1/${d.x.n}</span>` : ''}<img src="${postSrc(d.x, 0)}" alt="" loading="lazy" decoding="async"></div><p class="art-card-meta">${d.x.v} — ${fmtData(d.x.d)}</p><h3 class="art-card-title">${lx(d.t)}</h3></a>`).join('');
      dg.onclick = (e) => { const c = e.target.closest('[data-dest]'); if (!c || e.metaKey || e.ctrlKey) return; e.preventDefault(); openPosts([HOME_DEST[+c.dataset.dest].x]); };
      // com o mouse em cima, a capa passa pelos primeiros slides do carrossel
      dg.querySelectorAll('[data-dest]').forEach(card => { const d = HOME_DEST[+card.dataset.dest], img = card.querySelector('img'), tag = card.querySelector('.dest-n'), n = Math.min(d.x.n || 1, 6); if (n < 2) return; let k = 0, tm = null;
        const show = (j) => { k = j; img.src = postSrc(d.x, k); if (tag) tag.textContent = (k + 1) + '/' + d.x.n; };
        card.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'mouse' || tm) return; tm = setInterval(() => show((k + 1) % n), 850); });
        card.addEventListener('pointerleave', () => { clearInterval(tm); tm = null; show(0); }); });
    }
    // projeto recente: páginas do carrossel lado a lado; clique abre o visualizador de posts
    const rs = document.getElementById('home-rec-strip'), rx = HOME_REC;
    if (rs && rx) {
      const $ = (id) => document.getElementById(id);
      $('home-rec-label').textContent = lx({ pt: 'Recente', en: 'Latest', es: 'Reciente' });
      $('home-rec-meta').textContent = `${rx.v} — ${fmtData(rx.d)}`;
      $('home-rec-title').textContent = REC_TITLE;
      $('home-rec-sub').textContent = lx(REC_SUB);
      rs.setAttribute('aria-label', lx({ pt: 'Páginas do carrossel', en: 'Carousel pages', es: 'Páginas del carrusel' }));
      rs.innerHTML = Array.from({ length: rx.n || 1 }, (_, i) => `<button type="button" class="rec-pg" role="listitem" data-pg="${i}" aria-label="${lx({ pt: 'Abrir carrossel', en: 'Open carousel', es: 'Abrir carrusel' })} — ${i + 1}/${rx.n}"><img src="${postSrc(rx, i)}" alt="" width="1080" height="1350" loading="lazy" decoding="async" draggable="false"></button>`).join('');
      if (!rs._drag) { rs._drag = 1; let down = null, moved = false;
        rs.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = { x: e.clientX, l: rs.scrollLeft }; moved = false; });
        window.addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - down.x; if (Math.abs(dx) > 4) { moved = true; rs.classList.add('dragging'); } rs.scrollLeft = down.l - dx; });
        window.addEventListener('pointerup', () => { down = null; rs.classList.remove('dragging'); });
        rs.addEventListener('click', (e) => { if (moved) { moved = false; return; } if (e.target.closest('[data-pg]')) openPosts([HOME_REC]); }, true); }
    }
    const N = homeCounts();
    const ac = document.getElementById('home-art-count'); if (ac) ac.textContent = N.art;
    const wc = document.getElementById('home-work-count'); if (wc) wc.textContent = N.pj;
    const st = document.getElementById('home-stats');
    if (st && !homeCounted) {
      const els = [...st.querySelectorAll('[data-count]')], fin = () => els.forEach(b => { b.textContent = N[b.dataset.count]; });
      if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) { homeCounted = true; fin(); }
      else new IntersectionObserver((es, io) => { if (!es[0].isIntersecting || homeCounted) return; homeCounted = true; io.disconnect();
        const t0 = performance.now(), T = 1400; const step = (t) => { const k = Math.min(1, (t - t0) / T), e = 1 - Math.pow(1 - k, 4); els.forEach(b => { b.textContent = Math.round(N[b.dataset.count] * e); }); if (k < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }, { threshold: 0.6 }).observe(st);
    }
  };
  let homePage = 0;
  let homeSlide = null; // animação da troca em andamento
  // avanço automático da vitrine: a cada 4 s; pausa com mouse em cima, foco, fora da tela ou aba escondida (ver homePause)
  const HOME_AUTO_MS = 4000;
  let homeTimer = null;
  // pausa (acessibilidade e economia): mouse em cima, foco do teclado, vitrine fora da tela ou aba escondida.
  // O tempo restante é guardado e o traço que enche congela junto (animation-play-state).
  let homeLeft = HOME_AUTO_MS, homeStart = 0, homePages = 0;
  const homePause = { hover: false, focus: false, off: false, scroll: false };
  const homePaused = () => homePause.hover || homePause.focus || homePause.off || homePause.scroll || document.hidden;
  const homeRun = () => {
    clearTimeout(homeTimer); homeTimer = null;
    document.getElementById('home-pagination')?.classList.toggle('is-paused', homePaused());
    if (homePages < 2 || homePaused()) return;
    homeStart = performance.now();
    homeTimer = setTimeout(() => { homePage = (homePage + 1) % homePages; renderHomeRows(1); }, homeLeft);
  };
  const homeHold = () => { if (homeTimer) homeLeft = Math.max(0, homeLeft - (performance.now() - homeStart)); homeRun(); };
  const scheduleHomeAuto = (pageCount) => { homePages = pageCount; homeLeft = HOME_AUTO_MS; homeRun(); };
  const initHomePause = () => {
    const vp = document.querySelector('.home-projects-viewport'), row = document.querySelector('.home-pagination-row');
    if (!vp) return;
    [vp, row].filter(Boolean).forEach(el => {
      el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { homePause.hover = true; homeHold(); } });
      el.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { homePause.hover = false; homeRun(); } });
      el.addEventListener('focusin', () => { homePause.focus = true; homeHold(); });
      el.addEventListener('focusout', (e) => { if (!el.contains(e.relatedTarget)) { homePause.focus = false; homeRun(); } });
    });
    // a troca nunca acontece durante a rolagem (decodificar capas novas no meio do gesto travava a página) nem fora da tela
    let scT = 0;
    addEventListener('scroll', () => {
      if (!homePause.scroll) { homePause.scroll = true; homeHold(); }
      clearTimeout(scT); scT = setTimeout(() => { homePause.scroll = false; homeRun(); }, 700);
    }, { passive: true });
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => {
      const off = !en.isIntersecting; if (off === homePause.off) return;
      homePause.off = off; off ? homeHold() : homeRun();
    }).observe(vp);
    document.addEventListener('visibilitychange', () => document.hidden ? homeHold() : homeRun());
  };
  initHomePause();
  let homeW = innerWidth; // só remede quando a LARGURA muda (no celular a barra do navegador dispara resize ao rolar)
  window.addEventListener('resize', () => { if (innerWidth === homeW) return; homeW = innerWidth; const g = document.getElementById('work-grid'); if (g) g.style.minHeight = ''; });
  const renderHomeRows = (direction = 1) => {
    const home = document.getElementById('work-grid');
    const pager = document.getElementById('home-pagination');
    if (!home || !pager) return;
    const pageCount = Math.ceil(HOME_PROJECTS.length / 6);
    // troca só os cards: segura a altura da grade (nunca encolhe), assim o resto da página não sobe nem desce
    if (home.children.length && home.offsetHeight) home.style.minHeight = Math.max(parseFloat(home.style.minHeight) || 0, home.offsetHeight) + 'px';
    // troca da vitrine: a página nova aparece em fade POR CIMA da atual (a atual fica visível embaixo
    // até ser coberta), então nunca fica vazia. A 1ª página aparece direto, sem animação.
    const html6 = HOME_PROJECTS.slice(homePage * 6, homePage * 6 + 6).map(pjCard).join('');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    homeSlide?.finish(); // clique durante a troca: conclui a anterior na hora
    const cur = document.getElementById('work-grid');
    if (!cur.children.length || reduce || !cur.animate) {
      cur.className = 'work-grid home-featured-grid'; cur.innerHTML = html6;
    } else {
      const next = document.createElement('div');
      next.className = 'work-grid home-featured-grid home-fade-in'; next.innerHTML = html6;
      cur.removeAttribute('id'); next.id = 'work-grid'; next.style.minHeight = cur.style.minHeight;
      cur.after(next);
      homeSlide = next.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 700, easing: 'ease' });
      homeSlide.finished.then(() => { cur.remove(); next.classList.remove('home-fade-in'); homeSlide = null; });
    }
    // traços no lugar dos números; o traço atual enche durante o tempo da página
    pager.innerHTML = Array.from({length: pageCount}, (_, i) => `<button type="button" class="home-page-dash" data-home-page="${i}" aria-label="${lx({pt:'Página',en:'Page',es:'Página'})} ${i + 1}" ${i === homePage ? 'aria-current="page"' : ''}><span></span></button>`).join('');
    pager.style.setProperty('--home-auto', HOME_AUTO_MS + 'ms');
    pager.onclick = (e) => {
      const button = e.target.closest('[data-home-page]');
      if (!button) return;
      const next = Number(button.dataset.homePage);
      if (!Number.isFinite(next) || next < 0 || next >= pageCount || next === homePage) return;
      const direction = next > homePage ? 1 : -1;
      homePage = next;
      renderHomeRows(direction);
    };
    scheduleHomeAuto(pageCount);
    // aquece o cache das imagens da próxima página enquanto a atual está parada
    const warm = () => { const n = (homePage + 1) % pageCount; if (n === homePage) return;
      (HOME_PROJECTS.slice(n * 6, n * 6 + 6).map(pjCard).join('').match(/(?:src="|url\()[^")]+/g) || []).forEach(m => { const u = m.replace(/^(?:src="|url\()/, ''); if (!/^(?:assets\/|\/)/.test(u)) return; const im = new Image(); im.decoding = 'async'; im.src = u; im.decode && im.decode().catch(() => {}); }); };
    ('requestIdleCallback' in window) ? requestIdleCallback(warm, { timeout: 1500 }) : setTimeout(warm, 600);
    renderHomeExtras();
    // a página NUNCA é rolada por aqui: a altura da grade fica presa (min-height), então nada se mexe.
  };
  document.addEventListener('click', (e) => {
    const c = e.target.closest('[data-pj]'); if (!c || e.metaKey || e.ctrlKey) return;
    e.preventDefault(); window.location.assign(cleanProjectUrl(c.dataset.pj));
  });

  /* --- Posts do Instagram: componente usado nos cases, no modal de post e nos artigos ---
     Dados em assets/data/posts.js; imagens em assets/posts/<código>/NN.webp. */
  const POSTS = window.POSTS || [];
  const POST_BY = Object.fromEntries(POSTS.map(x => [x.c, x]));
  const POSTS_BY_ART = {}; POSTS.forEach(x => { if (x.art) (POSTS_BY_ART[x.art] = POSTS_BY_ART[x.art] || []).push(x); });
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const PC_TRACK = { pt: 'Imagens do post (use as setas)', en: 'Post images (use arrow keys)', es: 'Imágenes del post (usa las flechas)' };
  const IG_L = { ver: { pt: 'Ver post', en: 'View post', es: 'Ver publicación' }, ler: { pt: 'Texto', en: 'Text', es: 'Texto' }, site: { pt: 'Site', en: 'Site', es: 'Sitio' }, share: { pt: 'Compartilhar', en: 'Share', es: 'Compartir' },
    mais: { pt: 'ver mais', en: 'more', es: 'ver más' }, prev: { pt: 'Anterior', en: 'Previous', es: 'Anterior' }, next: { pt: 'Próxima', en: 'Next', es: 'Siguiente' }, menos: { pt: 'ver menos', en: 'less', es: 'ver menos' } };
  const igUrl = (x) => `https://www.instagram.com/${x.reel ? 'reel' : 'p'}/${x.c}/`;
  const igImg = (x, i) => x.cover && i === 0 ? x.cover : postSrc(x, i);
  // carrossel com vídeo: embed oficial do Instagram (altura = proporção do post + cabeçalho/rodapé do embed)
  const igEmbed = (x) => `<iframe class="ig-embed" src="https://www.instagram.com/p/${x.c}/embed/" title="${esc((x.cap || 'Instagram').slice(0, 80))}" loading="lazy" allowtransparency="true" allowfullscreen scrolling="no" style="aspect-ratio:1 / ${((Number(x.er || x.r) || 1.25) + 0.26).toFixed(3)}"></iframe>`;
  // o embed informa a própria altura (MEASURE); ajusta o iframe correspondente
  window.addEventListener('message', (ev) => {
    if (!/instagram\.com$/.test(new URL(ev.origin).hostname)) return;
    let d = ev.data; try { if (typeof d === 'string') d = JSON.parse(d); } catch (_) { return; }
    const h = d && d.type === 'MEASURE' && d.details && d.details.height; if (!h) return;
    document.querySelectorAll('iframe.ig-embed').forEach(f => { if (f.contentWindow === ev.source && !f.closest('.pc-track')) { f.style.aspectRatio = 'auto'; f.style.height = Math.ceil(h) + 'px'; } });
  });
  const igPost = (x, opts = {}) => {
    const n = x.n, ar = (1 / x.r).toFixed(4), cap = capOf(x), longo = cap.length > 240;
    const imgs = x.embed ? igEmbed(x) : Array.from({ length: n }, (_, i) => {
      const im = `<img src="${igImg(x, i)}" alt="" loading="lazy" decoding="async" style="--ar:${ar}" data-full="${igImg(x, i)}">`;
      return x.reel ? `<a class="ig-reel" href="${igUrl(x)}" target="_blank" rel="noopener">${im}</a>` : im; }).join('');
    const art = x.art && !opts.noArt ? (window.ARTIGOS || []).find(a => a.u === x.art) : null;
    return `<article class="ig-post" data-code="${x.c}">
      <header class="ig-head"><span class="ig-av" aria-hidden="true">${esc(x.v[0])}</span><span class="ig-user">@${esc(x.user)}${x.co && x.co.length ? ` <span style="color:var(--gray-400);font-weight:400">· @${x.co.map(esc).join(' · @')}</span>` : ''}</span><span class="ig-date">${fmtData(x.d)}</span></header>
      <div class="ig-strip${n === 1 || x.embed ? ' one' : ''}">${imgs}</div>
      ${n > 1 && !x.embed ? `<div class="ig-dots" aria-hidden="true">${Array.from({ length: n }, (_, i) => `<span${i ? '' : ' class="on"'}></span>`).join('')}</div>` : ''}
      ${cap ? `<p class="ig-cap${longo ? ' clamp' : ''}">${esc(cap)}</p>${longo ? `<button class="ig-more" type="button">${lx(IG_L.mais)}</button>` : ''}` : ''}
      <div class="ig-links"><a class="ig-link" href="${igUrl(x)}" target="_blank" rel="noopener">${lx(IG_L.ver)}</a>${art ? `<a class="ig-link" href="${art.u}" data-art-u="${art.u}">${lx(IG_L.ler)}</a>` : ''}</div>
    </article>`;
  };
  const ARR = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  // celular: bolinhas acompanham o deslize
  document.addEventListener('scroll', (e) => {
    const st = e.target; if (!st.classList || !st.classList.contains('ig-strip')) return;
    const dots = st.nextElementSibling; if (!dots || !dots.classList.contains('ig-dots')) return;
    const i = Math.round(st.scrollLeft / Math.max(1, st.clientWidth));
    [...dots.children].forEach((d, k) => d.classList.toggle('on', k === i));
  }, true);
  document.addEventListener('click', (e) => {
    const more = e.target.closest('.ig-more');
    if (more) { const cap = more.previousElementSibling; const on = cap.classList.toggle('clamp'); more.textContent = lx(on ? IG_L.mais : IG_L.menos); return; }
    const im = e.target.closest('.ig-strip img, .pc-track img'); if (im && !im.closest('a') && matchMedia('(min-width: 768px)').matches) { openLightbox(im.dataset.full); return; }
    const al = e.target.closest('[data-art-u]'); if (al && !e.metaKey && !e.ctrlKey) { e.preventDefault(); const a = (window.ARTIGOS || []).find(z => z.u === al.dataset.artU); if (a) { closePosts(); openArticle(a); } }
  });
  // modal com um ou mais posts
  const pvOv = document.getElementById('pv-ov');
  /* visualizador de posts: mídia + legenda em altura fixa (sem rolar a página); setas laterais trocam de post,
     setas dentro da mídia passam os slides do carrossel */
  const pvBox = document.getElementById('pv-box'), pvPos = document.getElementById('pv-pos');
  let pvList = [], pvI = 0;
  const pvView = (x) => {
    const n = x.n, cap = capOf(x), ar = x.embed ? (1 / ((Number(x.er || x.r) || 1.25) + 0.26)).toFixed(4) : (1 / x.r).toFixed(4);
    const imgs = x.embed ? igEmbed(x) : Array.from({ length: n }, (_, i) => { const im = `<img src="${igImg(x, i)}" alt="" decoding="async"${i ? ' loading="lazy"' : ''} data-full="${igImg(x, i)}">`;
      return x.reel ? `<a class="ig-reel" href="${igUrl(x)}" target="_blank" rel="noopener">${im}</a>` : im; }).join('');
    const art = x.art ? (window.ARTIGOS || []).find(a => a.u === x.art) : null;
    const nav = n > 1 && !x.embed ? `<button class="pc-nav pc-prev" type="button" aria-label="${lx(IG_L.prev)}" disabled>${ARR('M15 18l-6-6 6-6')}</button><button class="pc-nav pc-next" type="button" aria-label="${lx(IG_L.next)}">${ARR('M9 18l6-6-6-6')}</button><div class="pc-dots">${Array.from({ length: n }, (_, i) => `<span${i ? '' : ' class="on"'}></span>`).join('')}</div><span class="pc-count">1/${n}</span>` : '';
    return `<div class="pc-media pv-media" style="--ar:${ar}"><div class="pc-track" role="group" tabindex="0" aria-label="${lx(PC_TRACK)}">${imgs}</div>${nav}</div>
      <div class="pv-side">
        <header class="ig-head pv-head"><span class="ig-av" aria-hidden="true">${esc(x.v[0])}</span><span class="ig-user">@${esc(x.user)}${x.co && x.co.length ? ` <span style="color:var(--gray-400);font-weight:400">· @${x.co.map(esc).join(' · @')}</span>` : ''}</span><span class="ig-date">${fmtData(x.d)}</span></header>
        <p class="pv-cap">${esc(cap)}</p>
        <div class="ig-links pv-links"><button class="am-share pv-share" type="button" aria-label="${lx(IG_L.share)}" title="${lx(IG_L.share)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.5-4.3M8.2 13.2l7.5 4.3"/></svg><span class="pv-share-label">${lx(IG_L.share)}</span></button><a class="am-swap pv-action" href="${igUrl(x)}" target="_blank" rel="noopener" aria-label="${lx(IG_L.ver)}" title="${lx(IG_L.ver)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.7" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg></a>${art ? `<a class="am-swap pv-action" href="${art.u}" data-art-u="${art.u}" aria-label="${lx(IG_L.ler)}" title="${lx(IG_L.ler)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3.5h8l4 4v13H6z"/><path d="M14 3.5v4h4M9 12h6M9 15.5h6"/></svg></a><a class="am-ext pv-action" href="${art.u}" target="_blank" rel="noopener" aria-label="${lx(IG_L.site)}" title="${lx(IG_L.site)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3.5 12h17M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3z"/></svg></a>` : ''}</div>
      </div>`;
  };
  const pvShow = (i) => {
    pvI = (i + pvList.length) % pvList.length;
    pvBox.innerHTML = pvView(pvList[pvI]);
    const many = pvList.length > 1;
    pvOv.classList.toggle('pv-many', many);
    pvPos.textContent = many ? (pvI + 1) + ' / ' + pvList.length : '';
  };
  const openPosts = (lista, i = 0) => { pvList = (lista || []).filter(Boolean); if (!pvList.length) return; pvShow(i); pvOv.classList.add('open'); document.body.classList.add('pv-open'); document.body.style.overflow = 'hidden'; };
  // setas dentro da mídia passam os slides do carrossel
  pvBox.addEventListener('click', (e) => {
    const nav = e.target.closest('.pc-nav'); if (!nav) return;
    e.preventDefault(); e.stopPropagation();
    slideTrack(nav.parentNode.querySelector('.pc-track'), nav.classList.contains('pc-next') ? 1 : -1);
  });
  // bolinhas, contador e setas acompanham o slide atual (clique, teclado ou deslize)
  pvBox.addEventListener('scroll', (e) => {
    const tr = e.target; if (!tr.classList || !tr.classList.contains('pc-track')) return;
    const m = tr.parentNode, n = tr.children.length, i = Math.round(tr.scrollLeft / Math.max(1, tr.clientWidth));
    const dots = m.querySelector('.pc-dots'); if (dots) [...dots.children].forEach((d, k) => d.classList.toggle('on', k === i));
    const c = m.querySelector('.pc-count'); if (c) c.textContent = (i + 1) + '/' + n;
    const pv = m.querySelector('.pc-prev'), nx = m.querySelector('.pc-next'); if (pv) pv.disabled = i <= 0; if (nx) nx.disabled = i >= n - 1;
  }, true);
  // clique fora da caixa do post (no fundo) fecha o visualizador
  pvOv.addEventListener('click', (e) => { if (e.target === pvOv) closePosts(); });
  pvBox.addEventListener('click', async (e) => {
    const button = e.target.closest('.pv-share');
    if (!button) return;
    const post = pvList[pvI], article = post && post.art ? (window.ARTIGOS || []).find(a => a.u === post.art) : null;
    const url = article ? location.origin + HMI.with(articleRoute(article)) : igUrl(post); // sem artigo: o próprio post no Instagram
    const shareData = { url }; // só o link, sem texto
    try {
      if (navigator.share) { await navigator.share(shareData); return; }
      await navigator.clipboard.writeText(url);
      button.title = i18n('am.copied', 'Link copiado');
      button.setAttribute('aria-label', button.title);
      setTimeout(() => { if (button.isConnected) { button.title = lx(IG_L.share); button.setAttribute('aria-label', lx(IG_L.share)); } }, 1800);
    } catch (error) {
      if (error && error.name === 'AbortError') return;
      window.prompt(i18n('am.copy', 'Copie o link do artigo:'), url);
    }
  });
  document.getElementById('pv-prev').onclick = () => pvShow(pvI - 1);
  document.getElementById('pv-next').onclick = () => pvShow(pvI + 1);
  // teclado: ← → passam os slides; no fim do carrossel, vão para o post vizinho
  document.addEventListener('keydown', (e) => {
    if (!pvOv.classList.contains('open') || lbOverlay.classList.contains('open') || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
    const tr = pvBox.querySelector('.pc-track'), dir = e.key === 'ArrowRight' ? 1 : -1;
    if (tr && tr.children.length > 1) {
      const k = Math.round(tr.scrollLeft / Math.max(1, tr.clientWidth)), last = tr.children.length - 1;
      if ((dir > 0 && k < last) || (dir < 0 && k > 0)) { slideTrack(tr, dir); e.preventDefault(); return; }
    }
    if (pvList.length > 1) { pvShow(pvI + dir); e.preventDefault(); }
  });
  // celular: deslizar na legenda/cabeçalho troca de post
  let pvTx = null;
  pvBox.addEventListener('touchstart', (e) => { pvTx = e.target.closest('.pc-track') ? null : e.touches[0].clientX; }, { passive: true });
  pvBox.addEventListener('touchend', (e) => { if (pvTx == null || pvList.length < 2) return; const dx = e.changedTouches[0].clientX - pvTx; if (Math.abs(dx) > 60) pvShow(pvI + (dx < 0 ? 1 : -1)); pvTx = null; }, { passive: true });
  const closePosts = () => { if (!pvOv.classList.contains('open')) return; pvOv.classList.remove('open'); document.body.classList.remove('pv-open'); if (!amOverlay.classList.contains('open')) document.body.style.overflow = ''; setTimeout(() => { if (!pvOv.classList.contains('open')) pvBox.innerHTML = ''; }, 350); };
  document.getElementById('pv-x').onclick = closePosts;
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && pvOv.classList.contains('open') && !lbOverlay.classList.contains('open')) closePosts(); });
  window.HM_POSTS = { openPosts, POSTS, POSTS_BY_ART, igPost, igEmbed, closePosts };

  document.addEventListener('click', (e) => { if (e.target.closest('[data-top]')) window.scrollTo({ top: 0, behavior: 'smooth' }); });

  const openProject = (slug) => { if (PJ_BY[slug]) location.assign(cleanProjectUrl(slug)); };
  onLang(() => renderPJ());
  // links antigos: #projeto/<slug>
  const fromHash = () => { const m = location.hash.match(/^#projeto\/([\w-]+)/); if (m) openProject(m[1]); };
  window.addEventListener('hashchange', fromHash);

  /* --- Contato: ícones das ferramentas flutuando em torno de um centro gravitacional ---
     Em telas estreitas, a atração suave leva a nuvem para uma faixa reservada no canto inferior esquerdo.
     Colidem entre si e com os textos, fogem do cursor/dedo e podem ser arrastados (um por vez) e arremessados.
     O laço dorme quando tudo está parado e acorda com cursor, rolagem ou arraste (economia de CPU). */
  const initTools = () => {
    const box = document.getElementById('tools-float'), foot = document.getElementById('contato');
    const LIST = window.FERRAMENTAS || []; if (!box || !LIST.length) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    box.innerHTML = LIST.map(t => t.url ? `<a class="tool-ic tool-ic-link" data-url="${t.url}" href="${t.url}" target="_blank" rel="noopener noreferrer" title="${t.n}" aria-label="${t.n}">${t.svg}</a>` : `<div class="tool-ic" title="${t.n}" aria-hidden="true">${t.svg}</div>`).join('');
    const els = [...box.children];
    let W = 0, H = 0, S = 46, R = 23, obst = [], G = { x: 0, y: 0 };
    const GAP = matchMedia('(max-width: 767px)').matches ? 5 : 3;
    const nearRect = (cx, cy, o) => [Math.max(o.x, Math.min(cx, o.x + o.w)), Math.max(o.y, Math.min(cy, o.y + o.h))];
    const solto = (cx, cy) => cx > R && cy > R && cx < W - R && cy < H - R && !obst.some(o => { const [px, py] = nearRect(cx, cy, o); return Math.hypot(cx - px, cy - py) < R + GAP; });
    const measure = () => {
      const r = box.getBoundingClientRect(); W = r.width; H = r.height; S = els[0].offsetWidth || 46; R = S / 2;
      obst = [...foot.querySelectorAll('.footer-headline, .footer-social')].map(el => { const q = el.getBoundingClientRect(); return { x: q.left - r.left - GAP, y: q.top - r.top - GAP, w: q.width + GAP * 2, h: q.height + GAP * 2 }; });
      const cb = foot.querySelector('.credit-bar'); H = cb ? cb.getBoundingClientRect().top - r.top : H;
      // centro gravitacional = centroide da maior faixa livre (amostragem em grade)
      let sx = 0, sy = 0, n = 0; const st = Math.max(12, S / 2);
      for (let y = R; y < H - R; y += st) for (let x = R; x < W - R; x += st) if (solto(x, y)) { sx += x; sy += y; n++; }
      G = n ? { x: sx / n, y: sy / n } : { x: W / 2, y: H / 2 };
      if (matchMedia('(max-width: 767px)').matches) {
        // Reserva uma faixa abaixo dos links e ancora a nuvem no canto inferior esquerdo.
        G = { x: Math.max(R + 12, Math.min(66, W * 0.2)), y: H - R - 52 };
      } else if (!solto(G.x, G.y)) { let best = null, bd = 1e9; for (let y = R; y < H - R; y += st) for (let x = R; x < W - R; x += st) if (solto(x, y)) { const d = Math.hypot(x - G.x, y - G.y); if (d < bd) { bd = d; best = { x, y }; } } if (best) G = best; }
      // Não remover o display:none dos ícones que excedem a capacidade da área.
      // Se forem reexibidos sem posições físicas, ficam empilhados no canto superior do rodapé.
    };
    measure();
    const B = [];
    const areaLivre = W * H - obst.reduce((a, o) => a + o.w * o.h, 0), cabem = matchMedia('(max-width: 767px)').matches ? els.length : Math.max(6, Math.floor(areaLivre / ((S + GAP) * (S + GAP) * 2.2)));
    els.forEach((el, i) => { if (i >= cabem) el.style.display = 'none'; });
    const ativos = els.slice(0, cabem);
    ativos.forEach((el, i) => { const a = i * 2.39996, rr = (S + GAP) * (matchMedia('(max-width: 767px)').matches ? 0.5 : 0.62) * Math.sqrt(i + 1); // espiral de Fermat em volta do centro
      B.push({ el, x: G.x + Math.cos(a) * rr, y: G.y + Math.sin(a) * rr, vx: 0, vy: 0, ph: Math.random() * 6.28, sp: 0.5 + Math.random() * 0.5, rot: (Math.random() - 0.5) * 16 }); });
    const put = (b) => { b.el.style.transform = `translate3d(${(b.x - R).toFixed(1)}px,${(b.y - R).toFixed(1)}px,0) rotate(${b.rot.toFixed(1)}deg)`; };
    B.forEach(put);
    if (reduce) return;
    const ptr = { x: -9999, y: -9999, on: false };
    let raf = 0, last = 0, t = 0, inView = false, calm = 0, drag = null;
    const wake = () => { calm = 0; if (inView && !raf) { last = performance.now(); raf = requestAnimationFrame(tick); } };
    const local = (cx, cy) => { const r = box.getBoundingClientRect(); return [cx - r.left, cy - r.top]; };
    window.addEventListener('pointermove', (e) => { const [x, y] = local(e.clientX, e.clientY); ptr.x = x; ptr.y = y; ptr.on = e.pointerType !== 'touch' || !!drag;
      if (drag) { const now = performance.now(), dtm = Math.max(8, now - drag.t) / 1000; drag.b.vx = (x - drag.ox - drag.b.x) / dtm; drag.b.vy = (y - drag.oy - drag.b.y) / dtm; drag.b.x = x - drag.ox; drag.b.y = y - drag.oy; drag.t = now; }
      if (inView) wake(); }, { passive: true });
    // arrastar: o ícone recebe o ponteiro (os demais seguem ignorando cliques)
    els.forEach((el, i) => { el.style.pointerEvents = 'auto'; el.style.cursor = el.dataset.url ? 'pointer' : 'grab'; el.style.touchAction = el.dataset.url ? 'auto' : 'none';
      if (el.tagName === 'A') return; // Letterboxd abre o perfil ao clicar; os outros ícones continuam apenas decorativos/arrastáveis.
      el.addEventListener('pointerdown', (e) => { if (drag) return; e.preventDefault(); const [x, y] = local(e.clientX, e.clientY); const b = B[i];
        drag = { b, ox: x - b.x, oy: y - b.y, t: performance.now(), id: e.pointerId }; b.vx = b.vy = 0; el.style.cursor = 'grabbing'; el.style.zIndex = 2; try { el.setPointerCapture(e.pointerId); } catch (_) {} wake(); });
      const up = () => { if (!drag || drag.b.el !== el) return; const v = Math.hypot(drag.b.vx, drag.b.vy), mx = 900; if (v > mx) { drag.b.vx *= mx / v; drag.b.vy *= mx / v; } el.style.cursor = 'grab'; el.style.zIndex = ''; drag = null; wake(); };
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('lostpointercapture', up); });
    const off = () => { if (drag) return; ptr.on = false; ptr.x = ptr.y = -9999; };
    document.addEventListener('pointerleave', off); window.addEventListener('blur', off);
    let lastY = window.scrollY, kick = 0;
    window.addEventListener('scroll', () => { const y = window.scrollY; kick += (y - lastY); lastY = y; if (inView) wake(); }, { passive: true });
    const FUGA = () => Math.max(80, Math.min(130, W * 0.09));
    let frame = 0; const mqTools = matchMedia('(max-width: 767px)');
    const tick = (now) => {
      const dt = Math.min(0.033, (now - last) / 1000 || 0.016); last = now; t += dt;
      if (++frame % 240 === 0) measure(); // obstáculos só mudam com resize/fonte; resize já remede
      const push = Math.max(-24, Math.min(24, kick)); kick = 0;
      const rf = FUGA(), damp = Math.pow(0.18, dt); let energy = 0;
      const mobile = mqTools.matches;
      const active = B;
      for (const b of active) {
        if (drag && drag.b === b) continue;
        const dx = G.x - b.x, dy = G.y - b.y;
        b.vx += dx * (mobile ? 1.8 : 2.2) * dt; b.vy += dy * (mobile ? 1.8 : 2.2) * dt; // atração suave para o canto no celular
        if (!mobile) b.vx += Math.cos(t * b.sp + b.ph) * 14 * dt;
        b.vy += Math.sin(t * b.sp * 1.3 + b.ph) * (mobile ? 4 : 14) * dt; // deriva mais discreta no celular
        b.vy -= push * b.sp * 0.6;
        if (ptr.on && !drag) { const ex = b.x - ptr.x, ey = b.y - ptr.y, d = Math.hypot(ex, ey) || 0.01;
          if (d < rf) { const f = (1 - d / rf) ** 2 * 4200; b.vx += ex / d * f * dt; b.vy += ey / d * f * dt; } }
        b.vx *= damp; b.vy *= damp;
        const v = Math.hypot(b.vx, b.vy), mx = 900; if (v > mx) { b.vx *= mx / v; b.vy *= mx / v; }
        b.x += b.vx * dt; b.y += b.vy * dt; energy += v;
      }
      for (let it = 0; it < 3; it++) {
        for (let i = 0; i < active.length; i++) for (let j = i + 1; j < active.length; j++) {
          const a = active[i], c = active[j], dx = c.x - a.x, dy = c.y - a.y, d = Math.hypot(dx, dy) || 0.01, min = S + GAP;
          if (d < min) { const nx = dx / d, ny = dy / d, ov = (min - d) / 2, fa = drag && drag.b === a ? 0 : 1, fc = drag && drag.b === c ? 0 : 1, k = 2 / ((fa + fc) || 1);
            a.x -= nx * ov * fa * k; a.y -= ny * ov * fa * k; c.x += nx * ov * fc * k; c.y += ny * ov * fc * k;
            const rv = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny; if (rv < 0) { const imp = -rv * 0.7; if (fa) { a.vx -= nx * imp; a.vy -= ny * imp; } if (fc) { c.vx += nx * imp; c.vy += ny * imp; } } }
        }
        for (const b of active) {
          if (drag && drag.b === b) { b.x = Math.max(R, Math.min(W - R, b.x)); b.y = Math.max(R, Math.min(H - R, b.y)); continue; }
          for (const o of obst) { let [px, py] = nearRect(b.x, b.y, o); let dx = b.x - px, dy = b.y - py, d = Math.hypot(dx, dy);
            if (d < R) {
              if (d < 0.01) { const l = b.x - o.x, r2 = o.x + o.w - b.x, tp = b.y - o.y, bt = o.y + o.h - b.y, m = Math.min(l, r2, tp, bt);
                if (m === l) { dx = -1; dy = 0; d = -l; } else if (m === r2) { dx = 1; dy = 0; d = -r2; } else if (m === tp) { dx = 0; dy = -1; d = -tp; } else { dx = 0; dy = 1; d = -bt; }
                b.x += dx * (R - d); b.y += dy * (R - d);
              } else { const nx = dx / d, ny = dy / d; b.x += nx * (R - d); b.y += ny * (R - d); const vn = b.vx * nx + b.vy * ny; if (vn < 0) { b.vx -= 1.5 * vn * nx; b.vy -= 1.5 * vn * ny; } }
            } }
          if (b.x < R) { b.x = R; b.vx = Math.abs(b.vx) * 0.6; } else if (b.x > W - R) { b.x = W - R; b.vx = -Math.abs(b.vx) * 0.6; }
          if (b.y < R) { b.y = R; b.vy = Math.abs(b.vy) * 0.6; } else if (b.y > H - R) { b.y = H - R; b.vy = -Math.abs(b.vy) * 0.6; }
        }
      }
      for (const b of active) { b.rot += b.vx * dt / R * 20; put(b); }
      // dorme quando o movimento fica mínimo por ~2 s (a deriva é lenta; acorda com cursor/rolagem/arraste)
      calm = (energy / active.length < 6 && !drag && !ptr.on) ? calm + dt : 0;
      raf = inView && calm < 2 ? requestAnimationFrame(tick) : 0;
    };
    new IntersectionObserver(([en]) => { inView = en.isIntersecting; if (inView) { measure(); wake(); } }).observe(foot);
    window.addEventListener('resize', () => { measure(); wake(); });
  };

  initLang(); // setLang inicial já monta a grade (renderPJ via onLang)
  // 1ª entrada da visita: o texto visível em português assenta com a animação de troca de idioma (uma vez por sessão)
  (() => {
    try { if (sessionStorage.getItem('hm-intro')) return; sessionStorage.setItem('hm-intro', '1'); } catch (e) { return; }
    if (LANG !== 'pt') return;
    // já entra embaralhado (sem mostrar as palavras prontas antes); só começa a assentar depois do carregamento
    Scramble.runAll([...document.querySelectorAll('[data-i18n], [data-i18n-about]')].filter(el => el.offsetParent !== null), Infinity);
    const later = () => setTimeout(Scramble.release, 450); // depois que a tela de carregamento some
    document.readyState === 'complete' ? later() : addEventListener('load', later, { once: true });
    setTimeout(Scramble.release, 1800); // carregamento lento: não espera as imagens
  })();
  initMarquee();
  initPortrait();
  renderPJ();
  // rodapé: a física dos ícones só começa quando o contato se aproxima da tela (tira ~50 ms do carregamento)
  { const ft = document.getElementById('contato'); if (ft && 'IntersectionObserver' in window) { const io = new IntersectionObserver((es) => { if (es.some(e => e.isIntersecting)) { io.disconnect(); initTools(); } }, { rootMargin: '600px 0px' }); io.observe(ft); } else initTools(); }
  const mobileTopButton = document.getElementById('mobile-top-button');
  // O leitor de artigos rola dentro de .am-reader, não no documento da página.
  const getArticleScroller = () => {
    if (!amOverlay.classList.contains('open')) return null;
    if (!amReader.hidden) return amReader;
    const amIg = document.getElementById('am-ig');
    return amIg && !amIg.hidden ? amIg : null;
  };
  const mqTopBtn = window.matchMedia('(max-width: 767px)');
  const updateMobileTopButton = () => {
    if (!mobileTopButton) return;
    const sc = getArticleScroller();
    const currentY = sc ? sc.scrollTop : window.scrollY;
    const on = !document.body.classList.contains('home-route') && mqTopBtn.matches && currentY > 480;
    if (on !== mobileTopButton.classList.contains('is-visible')) mobileTopButton.classList.toggle('is-visible', on); // só mexe quando muda
  };
  if (mobileTopButton) {
    mobileTopButton.addEventListener('click', () => {
      const sc = getArticleScroller();
      if (sc) {
        sc.scrollTo({ top: 0, behavior: 'auto' });
        sc.scrollTop = 0;
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      updateMobileTopButton();
    });
    window.addEventListener('scroll', updateMobileTopButton, { passive: true });
    window.addEventListener('resize', updateMobileTopButton);
    amReader.addEventListener('scroll', updateMobileTopButton, { passive: true });
    document.getElementById('am-ig').addEventListener('scroll', updateMobileTopButton, { passive: true });
    updateMobileTopButton();
  }
  const routeByPath = { '/': ['home', 'inicio'], '/sobre': ['about', 'sobre'], '/projetos': ['work', 'trabalhos'], '/artigos': ['articles', 'artigos'] };
  const routeFromLocation = () => {
    const path = HMI.path().replace(/\/$/, '') || '/';
    const baseRoute = routeByPath[path];
    const colM = path.match(/^\/artigos\/([^/]+)(?:\/(\d{4}))?$/);
    const col = colM && (window.COLECOES || []).find(c => c.s === colM[1]);
    window.HM_COL = col ? { c: col, ano: colM[2] || '' } : null; // coleção de artigos com endereço próprio
    if (col) { showRoute('articles', 'artigos'); window.HM_applyCol && window.HM_applyCol(); return; }
    if (baseRoute) {
      showRoute(baseRoute[0], baseRoute[1]);
      if (baseRoute[0] === 'articles' && window.HM_applyCol) window.HM_applyCol();
      if (location.hash === '#contato') requestAnimationFrame(() => document.getElementById('contato')?.scrollIntoView());
      return;
    }
    const match = path.match(/^\/artigos\/([^/]+)$/);
    if (match) {
      showRoute('articles', 'artigos');
      const slug = decodeURIComponent(match[1]);
      const article = (window.ARTIGOS || []).find(a => !a.project && articleSlug(a) === slug);
      if (article) openArticle(article);
      else history.replaceState({ portfolioRoute: 'articles' }, '', '/artigos/');
      return;
    }
    const legacy = { '#home': ['home', 'inicio', '/'], '#sobre': ['about', 'sobre', '/sobre/'], '#trabalhos': ['work', 'trabalhos', '/projetos/'], '#artigos': ['articles', 'artigos', '/artigos/'] }[location.hash];
    if (legacy) {
      history.replaceState({ portfolioRoute: legacy[0] }, '', legacy[2]);
      showRoute(legacy[0], legacy[1]);
    }
  };
  window.addEventListener('popstate', () => {
    if (amOverlay.classList.contains('open')) {
      const from = amFrom; amFrom = null; closeArticle(true);
      // voltou para a página de onde o artigo abriu: só fecha o modal, sem recarregar a rota (que rolava ao topo)
      if (from && location.pathname + location.search + location.hash === from.url) { window.scrollTo({ top: from.y, behavior: 'instant' }); return; }
    }
    routeFromLocation();
  });
  routeFromLocation();
  fromHash(); // compatibilidade com links antigos; encaminha o case para projeto.html
});

/* Brilho ("glance"): uma passagem larga e lenta de luz sobre o texto cinza.
   Dispara ao entrar na tela, ao passar o mouse e ao focar; o CSS está em "Brilho" (bloco de estilos acima). */
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const GLINT_MS = 4800;      // duração da passagem
  const COOLDOWN = 30000;     // intervalo mínimo entre passagens no mesmo elemento
  const selector = [
    '#view-home .hero-headline .dim', '#view-work .work-page-title .dim', '#view-articles .art-title .dim'
  ].join(', ');
  const lastPlayed = new WeakMap();
  const isGray = (rgb) => {
    const [r, g, b] = rgb, avg = (r + g + b) / 3;
    return Math.max(r, g, b) - Math.min(r, g, b) <= 12 && avg >= 90 && avg <= 220;
  };
  const play = (el) => {
    if (!el || !el.isConnected) return;
    if (el.matches('.brand-location') && !document.body.classList.contains('home-route')) return;
    const now = Date.now();
    if (now - (lastPlayed.get(el) || 0) < COOLDOWN) return;
    const isStar = el.matches('.art-star');
    if (!isStar) {
      const color = getComputedStyle(el).color, rgb = (color.match(/\d+/g) || []).slice(0, 3).map(Number);
      if (rgb.length < 3 || !isGray(rgb)) return;
      el.style.setProperty('--glint-base', color);
    }
    lastPlayed.set(el, now);
    el.style.setProperty('--glint-ms', GLINT_MS + 'ms');
    el.classList.remove('glint-active');
    void el.offsetWidth;
    el.classList.add('glint-target', 'glint-active');
    const clear = () => el.classList.remove('glint-active');
    el.addEventListener('animationend', clear, { once: true });
    setTimeout(clear, GLINT_MS + 400);
  };
  const observed = new WeakSet();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) play(entry.target); });
  }, { threshold: 0.55 });
  const watch = (el) => { if (observed.has(el)) return; observed.add(el); el.classList.add('glint-target'); observer.observe(el); };
  const scan = (root) => {
    if (root.nodeType !== 1) return;
    if (root.matches(selector)) watch(root);
    root.querySelectorAll(selector).forEach(watch);
  };
  scan(document.body);
  new MutationObserver(records => records.forEach(rec => rec.addedNodes.forEach(scan))).observe(document.body, { childList: true, subtree: true });
  document.addEventListener('pointerover', e => { const el = e.target.closest && e.target.closest(selector); if (el && !el.contains(e.relatedTarget)) play(el); });
  document.addEventListener('focusin', e => { const el = e.target.closest && e.target.closest(selector); if (el) play(el); });
})();

/* Comportamentos do portfólio: as funções do site original (troca de idioma embaralhada, faixa de logos,
   ícones flutuantes no contato, carregamento, ponto do cursor) + o movimento novo (revelar, paralaxe,
   camadas, cortina na cor do projeto). JavaScript puro, sem bibliotecas. */
(function () {
  'use strict';
  var html = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches || html.classList.contains('mx-off');
  var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var LANG = (html.lang || 'pt').slice(0, 2);
  var TX = { copied: { pt: 'E-mail copiado', en: 'Email copied', es: 'Correo copiado' }, of: { pt: 'de', en: 'of', es: 'de' }, open: { pt: 'clique para abrir', en: 'click to open', es: 'clic para abrir' } };
  var tx = function (k) { return (TX[k] && (TX[k][LANG] || TX[k].pt)) || k; };
  var ORIG = new WeakSet();
  Array.prototype.forEach.call(document.body.querySelectorAll('*'), function (el) { if (!el.closest('.theme-switch,.ts-menu')) ORIG.add(el); });
  var ss = { get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }, del: function (k) { try { sessionStorage.removeItem(k); } catch (e) {} } };
  var lock = function (on) { document.body.style.overflow = on ? 'hidden' : ''; };

  /* ---------- Um laço de rolagem para todos os efeitos ---------- */
  var scrollFns = [], lastY = scrollY, ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { var y = scrollY, dy = y - lastY; for (var i = 0; i < scrollFns.length; i++) scrollFns[i](y, dy); lastY = y; ticking = false; });
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);

  /* ---------- Carregamento (3x3 pontos): aguarda fontes + imagens da dobra antes de abrir ---------- */
  var loader = $('#mx-loader');
  if (loader) {
    var doneLoader = false, loaderT0 = performance.now();
    var out = function () {
      if (doneLoader) return; doneLoader = true;
      var wait = Math.max(0, 160 - (performance.now() - loaderT0));
      setTimeout(function () {
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            html.classList.remove('is-loading');
            loader.classList.add('out');
            ss.set('mx-seen', '1');
            setTimeout(function () { loader.remove(); }, 550);
          });
        });
      }, wait);
    };
    if (reduce) { html.classList.remove('is-loading'); loader.remove(); }
    else {
      var heroImgs = $$('.hport img, .chero__cover > img').filter(function (im) { return im.offsetParent !== null; });
      var waitImg = function (im) {
        if (im.complete && im.naturalWidth) return im.decode ? im.decode().catch(function () {}) : Promise.resolve();
        return new Promise(function (res) {
          var ok = function () { (im.decode ? im.decode().catch(function () {}) : Promise.resolve()).then(res); };
          im.addEventListener('load', ok, { once: true });
          im.addEventListener('error', res, { once: true });
        });
      };
      var fontsP = (document.fonts && document.fonts.ready) ? document.fonts.ready.catch(function () {}) : Promise.resolve();
      Promise.all([fontsP].concat(heroImgs.map(waitImg))).then(out);
      setTimeout(out, 1800);
    }
  } else { html.classList.remove('is-loading'); }

  /* ---------- Cabeçalho: fixo, some ao descer, volta ao subir ---------- */
  var hd = $('header.top-header'), toggle = $('#nav-toggle');
  var setH = function () { if (hd) html.style.setProperty('--hdr-h', Math.round(hd.getBoundingClientRect().height) + 'px'); };
  setH(); addEventListener('resize', setH); if (document.fonts) document.fonts.ready.then(setH);
  if (hd) scrollFns.push(function (y, dy) {
    hd.classList.toggle('is-scrolled', y > 12);
    if (hd.classList.contains('menu-open')) return;
    if (y > 200 && dy > 4) hd.classList.add('is-hidden');
    else if (dy < -4 || y < 200) hd.classList.remove('is-hidden');
    document.body.classList.toggle('hd-on', !hd.classList.contains('is-hidden'));
  });
  if (toggle && hd) toggle.addEventListener('click', function () {
    var open = !hd.classList.contains('menu-open');
    hd.classList.toggle('menu-open', open); toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? toggle.dataset.close : toggle.dataset.open);
  });

  /* ---------- Troca de idioma: texto embaralha e assenta (efeito do site original) ---------- */
  var Scramble = (function () {
    var SYM = '#%&*+=/\\<>~^×÷§¶@·:;!?{}[]()|°±≈≠∆∑Ωµ∂∞√◊¤©®†‡•';
    var esc = function (x) { return x.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
    return function (el) {
      var r = el.getBoundingClientRect(); if (reduce || !r.width || r.bottom < 0 || r.top > innerHeight) return;
      var tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), items = [], n;
      while ((n = tw.nextNode())) { if (n.nodeValue.trim()) items.push({ node: n, text: n.nodeValue, wrap: document.createElement('span'), cache: [], t: [] }); }
      if (!items.length) return;
      var end = 1100;
      items.forEach(function (it) { it.node.replaceWith(it.wrap); for (var i = 0; i < it.text.length; i++) it.t[i] = 150 + Math.random() * (end - 150); });
      var t0 = performance.now(), lastSwap = 0;
      (function tick(now) {
        var t = now - t0, swap = now - lastSwap > 140; if (swap) lastSwap = now;
        items.forEach(function (it) {
          var h = '', run = '', inScr = false;
          var flush = function () { if (run) h += inScr ? '<span class="scr">' + esc(run) + '</span>' : esc(run); run = ''; };
          for (var i = 0; i < it.text.length; i++) {
            var c = it.text[i], sp = /\s/.test(c), scr = !sp && it.t[i] > t;
            if (!sp && scr !== inScr) { flush(); inScr = scr; }
            if (scr && (!it.cache[i] || (swap && Math.random() < .35))) it.cache[i] = SYM[(Math.random() * SYM.length) | 0];
            run += scr ? it.cache[i] : c;
          }
          flush(); if (it.wrap.innerHTML !== h) it.wrap.innerHTML = h;
        });
        if (t < end) requestAnimationFrame(tick); else items.forEach(function (it) { it.wrap.replaceWith(it.node); });
      })(t0);
    };
  })();
  /* ---------- Troca de idioma sem recarregar a página: a mesma página no outro idioma é buscada e só textos,
     links, rótulos e imagens que têm texto mudam (fotos não piscam). Se a estrutura não bater, navega normalmente. ---------- */
  var ATTRS = ['href', 'alt', 'title', 'aria-label', 'placeholder', 'content', 'data-cap', 'data-tr', 'data-open', 'data-close', 'hreflang', 'datetime', 'src', 'poster', 'aria-current', 'aria-pressed'];
  var HEAVY = 'img,video,canvas,iframe,button,input,select,textarea,[data-swap],[data-zoom]';
  var texts = function (el) { return Array.prototype.filter.call(el.childNodes, function (n) { return n.nodeType === 3; }); };
  var syncAttrs = function (L, N) {
    ATTRS.forEach(function (k) {
      if (k === 'aria-pressed' && !L.classList.contains('lang-btn')) return; // estado de JS (mosaico etc.) fica
      var a = L.getAttribute(k), b = N.getAttribute(k);
      if (b === null) { if (a !== null && (k === 'aria-current' || L.classList.contains('lang-btn'))) L.removeAttribute(k); return; }
      if (a !== b) L.setAttribute(k, b);
    });
    if (L.matches('.lang-btn, .main-nav > a') && L.getAttribute('class') !== N.getAttribute('class')) L.setAttribute('class', N.getAttribute('class') || '');
  };
  var walk = function (L, N) {
    syncAttrs(L, N);
    if (L.hasAttribute('data-split')) { if (L.getAttribute('aria-label') !== N.textContent.trim()) { L.textContent = N.textContent; splitEl(L); } return; }
    if (L.hasAttribute('data-rise') || L.hasAttribute('data-scr') && !L.querySelector(HEAVY)) { if (L.innerHTML !== N.innerHTML) { L.innerHTML = N.innerHTML; Array.prototype.forEach.call(L.querySelectorAll('*'), function (x) { ORIG.add(x); }); } return; }
    var EXCL = '#mx-loader,script,noscript,template,style'; // o carregamento some depois de entrar; scripts não contam
    var lk = Array.prototype.filter.call(L.children, function (c) { return ORIG.has(c) && !c.matches(EXCL); }), nk = Array.prototype.filter.call(N.children, function (c) { return !c.matches(EXCL); });
    var same = lk.length === nk.length && lk.every(function (c, i) { return c.tagName === nk[i].tagName; });
    var lt = texts(L), nt = texts(N);
    if (same && lt.length === nt.length) {
      lt.forEach(function (t, i) { if (t.nodeValue !== nt[i].nodeValue) t.nodeValue = nt[i].nodeValue; });
      lk.forEach(function (c, i) { walk(c, nk[i]); });
    } else if (!L.querySelector(HEAVY) && !N.querySelector(HEAVY)) {
      L.innerHTML = N.innerHTML; Array.prototype.forEach.call(L.querySelectorAll('*'), function (x) { ORIG.add(x); });
    } else { var p = [], e = L; while (e && e !== document.body) { p.unshift(e.tagName.toLowerCase() + (e.className && typeof e.className === 'string' ? '.' + e.className.split(' ')[0] : '')); e = e.parentElement; } throw new Error('estrutura diferente: ' + p.slice(-4).join('>') + ' ' + lk.length + '/' + nk.length + ' ' + lt.length + '/' + nt.length); }
  };
  var swapping = false;
  var swapLang = function (url, push) {
    if (swapping) return; swapping = true;
    fetch(url, { credentials: 'same-origin' }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (txt) {
      var doc = new DOMParser().parseFromString(txt, 'text/html');
      walk(document.body, doc.body);
      document.title = doc.title;
      html.lang = doc.documentElement.lang;
      ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]', 'meta[property="og:url"]', 'meta[property="og:locale"]', 'link[rel="canonical"]'].forEach(function (q) {
        var a = document.head.querySelector(q), b = doc.head.querySelector(q); if (a && b) { if (b.hasAttribute('content')) a.setAttribute('content', b.getAttribute('content')); if (b.hasAttribute('href')) a.setAttribute('href', b.getAttribute('href')); }
      });
      if (push) history.pushState({ hmLang: 1 }, '', url);
      LANG = (html.lang || 'pt').slice(0, 2);
      $$('[data-scr]').forEach(Scramble);
      swapping = false;
    }).catch(function (err) { ss.set('hm-swap-err', String(err && err.message)); location.href = url; }); // registra o motivo e navega normalmente
  };
  history.replaceState(Object.assign({}, history.state || {}, { hmLang: 1 }), '');
  addEventListener('popstate', function (e) { if (e.state && e.state.hmLang) swapLang(location.href, false); });
  $$('a.lang-btn').forEach(function (a) { a.addEventListener('click', function (e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    if (a.getAttribute('aria-pressed') === 'true' || a.getAttribute('aria-current')) return;
    a.classList.add('is-pop');
    swapLang(a.href, true);
  }); });
  if (ss.get('hm-scr') || (!ss.get('hm-intro') && LANG === 'pt')) {
    ss.del('hm-scr'); ss.set('hm-intro', '1');
    var runScr = function () { $$('[data-scr]').forEach(Scramble); };
    if (loader && !ss.get('mx-seen')) setTimeout(runScr, 500); else requestAnimationFrame(runScr);
  }

  /* ---------- Títulos quebrados em palavras ---------- */
  var splitEl = function (el) {
    var t = el.textContent.trim(); el.setAttribute('aria-label', t);
    el.innerHTML = t.split(/\s+/).map(function (w, i) { return '<span class="w" aria-hidden="true"><span style="--i:' + i + '">' + w.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</span></span>'; }).join(' ');
    el.classList.add('split'); if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
  };
  $$('[data-split]').forEach(splitEl);

  /* ---------- Revelar ao rolar ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    var reveal = function (el) {
      var im = el.querySelector('img');
      if (!im || im.complete || el.classList.contains('split')) { el.classList.add('rv-in'); return; }
      var done = function () { el.classList.add('rv-in'); };
      im.addEventListener('load', done, { once: true }); im.addEventListener('error', done, { once: true }); setTimeout(done, 3500);
    };
    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: .04 });
    var pre = new IntersectionObserver(function (en) { en.forEach(function (e) { if (!e.isIntersecting) return; $$('img[loading="lazy"]', e.target).forEach(function (im) { im.loading = 'eager'; }); pre.unobserve(e.target); }); }, { rootMargin: '0px 0px 120% 0px' });
    var vh = innerHeight, groups = new Map();
    $$('[data-reveal]').forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * .9 && !el.classList.contains('photo')) return;
      var p = el.parentElement, n = groups.get(p) || 0; groups.set(p, n + 1);
      el.style.setProperty('--d', Math.min(n, 5) * .07 + 's'); el.classList.add('rv'); io.observe(el); pre.observe(el);
    });
  }

  /* ---------- Contadores (números do Sobre mim) ---------- */
  $$('[data-count]').forEach(function (el) {
    var to = parseInt(el.dataset.count, 10); if (reduce || !to) { el.textContent = to; return; }
    el.textContent = '0';
    new IntersectionObserver(function (en, o) {
      if (!en[0].isIntersecting) return; o.disconnect();
      var t0 = performance.now() + 400;
      (function step(t) { var p = clamp((t - t0) / 1300, 0, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(step); })(t0);
    }).observe(el);
  });

  /* ---------- Imagens: pré-carregamento moderado só para imagens visíveis (sem tempestade de decode) ---------- */
  if ('IntersectionObserver' in window) {
    var imgPre = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var im = e.target;
        if (im.offsetParent === null) return;
        imgPre.unobserve(im);
        im.loading = 'eager';
      });
    }, { rootMargin: '450px 0px' });
    $$('img[loading="lazy"]').forEach(function (im) {
      if (im.classList.contains('piece__i') && !im.classList.contains('is-on')) return;
      imgPre.observe(im);
    });
  }

  /* ---------- Retrato em vídeo: garante o loop (iOS) e pausa fora da tela ---------- */
  $$('.hport__v').forEach(function (v) {
    var play = function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); };
    new IntersectionObserver(function (e) { if (e[0].isIntersecting) play(); else v.pause(); }).observe(v);
  });

  /* ---------- Mosaico: cada peça alterna imagens só enquanto visível na tela ---------- */
  $$('.piece__i').forEach(function (im) {
    if (im.tagName !== 'IMG' || (im.complete && im.naturalWidth)) { im.classList.add('is-ready'); return; }
    var ok = function () { im.classList.add('is-ready'); }; im.addEventListener('load', ok, { once: true }); im.addEventListener('error', ok, { once: true });
  });
  var swapIO = (!reduce && 'IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var fn = e.target._hmSwapVis;
      if (fn) fn(e.isIntersecting);
    });
  }, { rootMargin: '120px 0px' }) : null;
  $$('[data-swap]').forEach(function (pc, i) {
    var layers = $$('.piece__i', pc), seq = pc.dataset.seq ? pc.dataset.seq.split(',').map(Number) : layers.map(function (_, k) { return k; });
    var pos = 0, hold = false, vis = false, t = null, delayT = null, pt = null;
    var warmNext = function () {
      var nxt = layers[seq[(pos + 1) % seq.length]];
      if (nxt && nxt.tagName === 'IMG' && !(nxt.complete && nxt.naturalWidth)) nxt.loading = 'eager';
    };
    var show = function (p) {
      var prev = layers[seq[pos]]; pos = (p + seq.length) % seq.length; var next = layers[seq[pos]];
      if (prev === next) return;
      if (next.tagName === 'IMG' && !(next.complete && next.naturalWidth)) {
        next.loading = 'eager'; pos = (pos - 1 + seq.length) % seq.length;
        (next.decode ? next.decode() : Promise.reject()).then(function () { next.classList.add('is-ready'); show(pos + 1); }, function () {});
        return;
      }
      layers.forEach(function (el) { el.classList.remove('is-prev'); });
      prev.classList.remove('is-on'); prev.classList.add('is-prev'); next.classList.add('is-on');
      clearTimeout(pt); pt = setTimeout(function () { prev.classList.remove('is-prev'); }, 850);
      warmNext();
    };
    var stopAuto = function () { clearTimeout(delayT); delayT = null; clearInterval(t); t = null; };
    var auto = function () {
      stopAuto();
      if (reduce || !vis || pc.offsetParent === null) return;
      warmNext();
      delayT = setTimeout(function () {
        if (!vis || pc.offsetParent === null) return;
        t = setInterval(function () { if (!hold && !document.hidden && vis && pc.offsetParent !== null) show(pos + 1); }, 4200);
      }, (i % 5) * 650);
    };
    pc._hmSwapVis = function (on) { vis = on && pc.offsetParent !== null; if (vis) auto(); else stopAuto(); };
    if (swapIO) swapIO.observe(pc);
    pc.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'mouse') return; hold = true; show(pos + 1); });
    pc.addEventListener('pointerleave', function (e) { if (e.pointerType !== 'mouse') return; hold = false; auto(); });
    pc.addEventListener('click', function () { show(pos + 1); auto(); });
    pc.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(pos + 1); auto(); } });
  });

  /* ---------- Paralaxe: colunas do mosaico, capa do case ---------- */
  var cols = $$('[data-speed]');
  if (cols.length && !reduce) {
    var mq = matchMedia('(min-width: 768px)'), sec = cols[0].closest('section');
    scrollFns.push(function () {
      if (!mq.matches) { cols.forEach(function (c) { c.style.transform = ''; }); return; }
      var r = sec.getBoundingClientRect(), vh = innerHeight; if (r.bottom < 0 || r.top > vh) return;
      var travel = clamp(vh - r.top, 0, r.height + vh);
      cols.forEach(function (c) { c.style.transform = 'translate3d(0,' + Math.min(110, travel * (1 - (parseFloat(c.dataset.speed) || 1)) * .45).toFixed(1) + 'px,0)'; });
    });
  }
  $$('[data-parallax]').forEach(function (el) {
    if (reduce) return; var k = parseFloat(el.dataset.parallax) || .1;
    scrollFns.push(function () { var r = el.parentElement.getBoundingClientRect(), vh = innerHeight; if (r.bottom < 0 || r.top > vh) return; el.style.transform = 'translate3d(0,' + (-((r.top + r.height / 2 - vh / 2) / vh) * k * r.height - r.height * .06).toFixed(1) + 'px,0)'; });
  });
  var zooms = $$('.zoomin');
  if (zooms.length && !reduce) scrollFns.push(function () { var vh = innerHeight; zooms.forEach(function (z) { var r = z.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; z.style.setProperty('--z', clamp((vh - r.top) / (vh * .7), 0, 1).toFixed(3)); }); });

  /* ---------- Experiência: a linha se preenche e as camadas acendem ---------- */
  $$('[data-timeline]').forEach(function (tl) {
    var fill = $('[data-timeline-fill]', tl), layers = $$('[data-layer]', tl);
    if (reduce) { layers.forEach(function (l) { l.classList.add('is-on'); }); return; }
    tl.classList.add('is-live');
    var lastP = '';
    scrollFns.push(function () {
      var r = tl.getBoundingClientRect(), vh = innerHeight;
      if (r.bottom < -120 || r.top > vh + 120) return;
      var p = clamp((vh * .62 - r.top) / r.height, 0, 1).toFixed(4);
      if (p !== lastP) { lastP = p; fill.style.setProperty('--p', p); }
      layers.forEach(function (l) { l.classList.toggle('is-on', l.getBoundingClientRect().top + 30 < vh * .62); });
    });
  });

  /* ---------- Faixa de logos: a do site oficial (initMarquee, assets/js/site.js) ---------- */
  (function initMarquee() {
    var track = document.getElementById('marquee-track');
    if (!track) return;
    var mask = track.parentElement, list = track.querySelector('.marquee-list');
    var addCopies = function () {
      var need = Math.ceil((mask.getBoundingClientRect().width || innerWidth) / Math.max(1, list.offsetWidth || 1)) + 1;
      for (var n = track.children.length - 1; n < need; n++) {
        var c = list.cloneNode(true); c.setAttribute('aria-hidden', 'true'); c.removeAttribute('aria-label');
        $$('a', c).forEach(function (a) { a.tabIndex = -1; });
        track.appendChild(c);
      }
    };
    addCopies();
    var items = $$('.marquee-logo', track);
    var SPEED = reduce ? 0 : 38;
    var x = 0, dir = 1, v = SPEED, target = SPEED, last = 0, raf = 0, inView = false;
    var offsets = [], center = 0, lo = 0, period = 0, lastMid = -1, hoverEl = null, drag = null, resumeT = 0;
    var mobile = matchMedia('(hover: none)').matches, mobileFling = 0, justDragged = false;
    var measure = function () {
      var w = mask.getBoundingClientRect().width;
      if (!w || !track.offsetWidth) return false;
      addCopies(); items.forEach(function (li) { li.classList.remove('is-middle'); }); lastMid = -1; items = $$('.marquee-logo', track);
      var t0 = track.getBoundingClientRect().left;
      offsets = items.map(function (li) { var r = li.getBoundingClientRect(); return r.left - t0 + r.width / 2; });
      center = w / 2; period = list.offsetWidth; lo = offsets[0] - center;
      return true;
    };
    var wrapX = function () { if (period > 0) x = ((x % period) + period) % period; };
    var paint = function () {
      track.style.transform = 'translate3d(' + (-x) + 'px,0,0)';
      var best = 1e9, mid = -1;
      for (var i = 0; i < offsets.length; i++) { var d = Math.abs(offsets[i] - x - center); if (d < best) { best = d; mid = i; } }
      if (mid !== lastMid) { if (items[lastMid]) items[lastMid].classList.remove('is-middle'); if (items[mid]) items[mid].classList.add('is-middle'); lastMid = mid; }
    };
    var tick = function (now) {
      var dt = Math.min(0.05, (now - last) / 1000 || 0); last = now;
      if (!drag) {
        if (resumeT && now > resumeT) { target = hoverEl ? 0 : SPEED; resumeT = 0; }
        v += (target - v) * Math.min(1, dt * 3);
        if (mobile && Math.abs(mobileFling) > 8) { x += mobileFling * dt; mobileFling *= Math.exp(-2.4 * dt); }
        else { mobileFling = 0; x += v * dir * dt; }
        wrapX();
      }
      paint();
      raf = inView ? requestAnimationFrame(tick) : 0;
    };
    var start = function () { if (!raf && inView) { last = performance.now(); raf = requestAnimationFrame(tick); } };
    track.addEventListener('pointerover', function (e) {
      if (e.pointerType !== 'mouse') return;
      var li = e.target.closest('.marquee-logo');
      if (hoverEl && hoverEl !== li) hoverEl.classList.remove('is-hover');
      hoverEl = li; if (li) li.classList.add('is-hover');
      track.classList.toggle('has-hover', !!li);
      target = 0;
    });
    track.addEventListener('pointerleave', function (e) {
      if (e.pointerType !== 'mouse') return;
      if (hoverEl) hoverEl.classList.remove('is-hover'); hoverEl = null;
      track.classList.remove('has-hover');
      if (!drag) target = SPEED;
    });
    mask.addEventListener('wheel', function (e) {
      var k = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? mask.clientWidth : 1;
      var horiz = Math.abs(e.deltaX) > 0.5 && Math.abs(e.deltaX) >= Math.abs(e.deltaY) * 0.35;
      var dx = horiz ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
      if (Math.abs(dx) <= 0.5) return;
      if (e.cancelable) e.preventDefault();
      x += dx * k; dir = dx > 0 ? 1 : -1; wrapX(); v = 0; target = 0; resumeT = performance.now() + 1400; paint();
      if (!raf && inView) start();
    }, { passive: false });
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.pointerType === 'mouse' && e.cancelable) e.preventDefault();
      drag = { sx: e.clientX, sy: e.clientY, x0: x, moved: false, axis: null, id: e.pointerId, lastX: e.clientX, lastY: e.clientY, lastT: performance.now(), fingerV: 0 };
      mobileFling = 0; track.classList.add('is-dragging');
    });
    addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
      if (!drag.axis && Math.max(Math.abs(dx), Math.abs(dy)) > 7) drag.axis = Math.abs(dx) >= Math.abs(dy) ? 'x' : 'y';
      if (mobile && drag.axis === 'y') { var dyStep = e.clientY - drag.lastY; if (dyStep) scrollBy({ top: -dyStep, behavior: 'instant' }); drag.lastX = e.clientX; drag.lastY = e.clientY; drag.lastT = performance.now(); return; }
      if (drag.axis === 'y') return;
      var now = performance.now(), el = Math.max(1, now - drag.lastT);
      drag.fingerV = (e.clientX - drag.lastX) / el * 1000; drag.lastX = e.clientX; drag.lastY = e.clientY; drag.lastT = now;
      if (Math.abs(dx) > 4) { drag.moved = true; if (e.cancelable) e.preventDefault(); var sel = getSelection && getSelection(); if (sel && sel.rangeCount) sel.removeAllRanges(); }
      x = drag.x0 - dx; wrapX(); track.style.transform = 'translate3d(' + (-x) + 'px,0,0)';
    });
    var endDrag = function (e) {
      if (!drag || (e.pointerId !== undefined && e.pointerId !== drag.id)) return;
      var moved = drag.moved, fv = drag.fingerV;
      if (moved && Math.abs(fv) > 20) dir = fv < 0 ? 1 : -1;
      drag = null; track.classList.remove('is-dragging'); justDragged = moved; wrapX();
      if (e.pointerType === 'mouse' && hoverEl) target = 0;
      else if (mobile && e.pointerType !== 'mouse' && moved) { target = 0; v = 0; mobileFling = Math.max(-1500, Math.min(1500, -fv)); resumeT = performance.now() + 1500; }
      else { target = 0; v = 0; resumeT = performance.now() + (moved ? 1200 : 2000); }
    };
    addEventListener('pointerup', endDrag); addEventListener('pointercancel', endDrag);
    track.addEventListener('click', function (e) {
      var a = e.target.closest('.marquee-link'); if (!a) return;
      if (justDragged) { e.preventDefault(); justDragged = false; return; }
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault(); location.assign(a.href);
    });
    new IntersectionObserver(function (en) { inView = en[0].isIntersecting; if (inView) { measure(); wrapX(); start(); } }).observe(mask);
    addEventListener('resize', function () { if (measure()) { wrapX(); paint(); } });
    var startCentered = function () { if (measure()) { x = lo; dir = 1; wrapX(); paint(); } };
    startCentered();
    var started = false;
    addEventListener('load', function () { if (!started) startCentered(); else if (measure()) { wrapX(); paint(); } started = true; });
  })();

  /* ---------- Faixa de títulos: linhas em sentidos opostos, aceleram com a rolagem ---------- */
  $$('[data-ticker]').forEach(function (tk) {
    if (reduce) return;
    var rows = $$('.tk-track', tk).map(function (t, i) { return { el: t, x: 0, dir: i % 2 ? 1 : -1, w: 0 }; }), boost = 0, vis = false, paused = false;
    var measure = function () { rows.forEach(function (r) { r.w = r.el.firstElementChild.offsetWidth; }); };
    measure(); addEventListener('resize', measure); if (document.fonts) document.fonts.ready.then(measure);
    scrollFns.push(function (y, dy) { boost = clamp(boost + Math.abs(dy) * .06, 0, 10); });
    tk.addEventListener('pointerenter', function () { paused = true; }); tk.addEventListener('pointerleave', function () { paused = false; });
    new IntersectionObserver(function (e) { var was = vis; vis = e[0].isIntersecting; if (vis && !was) requestAnimationFrame(loop); }).observe(tk);
    function loop() {
      rows.forEach(function (r) { if (!r.w) return; r.x += r.dir * (paused ? 0 : (.45 + boost)); if (r.x <= -r.w) r.x += r.w; if (r.x > 0) r.x -= r.w; r.el.style.transform = 'translate3d(' + r.x.toFixed(2) + 'px,0,0)'; });
      boost *= .93; if (vis) requestAnimationFrame(loop);
    }
  });

  /* ---------- Destaques: com o mouse em cima, a capa passa pelos slides ---------- */
  $$('[data-cycle]').forEach(function (card) {
    var set = JSON.parse(card.dataset.cycle), img = $('img', card), tag = $('.dest-n', card), k = 0, tm = null, total = +card.dataset.total || set.length;
    var show = function (j) { k = j; img.src = set[k]; if (tag) tag.textContent = (k + 1) + '/' + total; };
    card.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'mouse' || tm || set.length < 2) return; tm = setInterval(function () { show((k + 1) % set.length); }, 850); });
    card.addEventListener('pointerleave', function () { clearInterval(tm); tm = null; show(0); });
  });

  /* ---------- Foto do Sobre: toque/clique alterna P&B e cor ---------- */
  $$('[data-photo]').forEach(function (ph) {
    var t = function () { var on = ph.classList.toggle('is-color'); ph.setAttribute('aria-pressed', String(on)); };
    ph.addEventListener('click', t); ph.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t(); } });
  });

  /* ---------- Filtros por grupo e busca ---------- */
  $$('[data-filters]').forEach(function (bar) {
    var scope = document.querySelector(bar.dataset.filters), out = $('[data-count-out]', bar);
    $$('[data-f]', bar).forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.dataset.f, n = 0;
        $$('[data-f]', bar).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        $$('[data-g]', scope).forEach(function (it) { var on = f === '*' || (' ' + it.dataset.g + ' ').indexOf(' ' + f + ' ') > -1; it.hidden = !on; if (on) n++; });
        if (out) out.textContent = n;
      });
    });
  });
  $$('[data-search]').forEach(function (inp) {
    var scope = document.querySelector(inp.dataset.search), bar = $('[data-tags]'), empty = $('[data-empty]'), out = $('[data-tags] [data-count-out]'), tag = '*';
    var norm = function (s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
    var run = function () {
      var q = norm(inp.value.trim()), n = 0;
      $$('[data-q]', scope).forEach(function (it) { var on = (!q || norm(it.dataset.q).indexOf(q) > -1) && (tag === '*' || (' ' + it.dataset.g + ' ').indexOf(' ' + tag + ' ') > -1); it.hidden = !on; if (on) n++; });
      if (out) out.textContent = n; if (empty) empty.hidden = n > 0;
    };
    inp.addEventListener('input', run);
    if (bar) $$('[data-t]', bar).forEach(function (b) { b.addEventListener('click', function () { tag = b.dataset.t; $$('[data-t]', bar).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); run(); }); });
  });

  /* ---------- Colunas da grade de Projetos (mesma regra e chave do site oficial: hm-wcols2) ---------- */
  $$('[data-cols-for]').forEach(function (g) {
    var grid = document.querySelector(g.dataset.colsFor), mq = matchMedia('(max-width:767px)');
    var read = function () { try { return JSON.parse(localStorage.getItem('hm-wcols2') || '{}') || {}; } catch (e) { return {}; } };
    var key = function () { return mq.matches ? 'm' : 'd'; };
    var get = function () { var n = +read()[key()], max = mq.matches ? 3 : 5; return n >= (mq.matches ? 1 : 2) && n <= max ? n : (mq.matches ? 2 : 3); };
    var apply = function () { var n = get(); grid.style.setProperty('--wcols', n); grid.dataset.cols = n; $$('[data-cols]', g).forEach(function (b) { b.setAttribute('aria-pressed', String(+b.dataset.cols === n)); }); };
    $$('[data-cols]', g).forEach(function (b) { b.addEventListener('click', function () { var o = read(); o[key()] = +b.dataset.cols; try { localStorage.setItem('hm-wcols2', JSON.stringify(o)); } catch (e) {} apply(); }); });
    mq.addEventListener('change', apply); apply();
  });

  /* ---------- Ponto do cursor (o do site), que cresce com rótulo ---------- */
  if (fine && !reduce) {
    var cur = document.createElement('div'); cur.id = 'mx-cursor'; cur.setAttribute('aria-hidden', 'true'); cur.innerHTML = '<b></b>'; document.body.appendChild(cur);
    var lab = cur.firstChild, sel = 'a, button, [role="button"], label, summary, input';
    addEventListener('pointermove', function (e) {
      cur.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)'; cur.classList.add('on');
      // o ponto nunca cresce nem mostra rótulo
    }, { passive: true });
    html.addEventListener('pointerleave', function () { cur.classList.remove('on'); });
  }

  /* ---------- Aviso ---------- */
  var toastEl = $('[data-toast]'), toastT;
  var toast = function (m) { if (!toastEl) return; toastEl.textContent = m; toastEl.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('is-on'); }, 2200); };

  /* ---------- Preserva idioma ativo ao navegar entre páginas ---------- */
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.classList.contains('lang-btn') || a.hasAttribute('hreflang')) return;
    if (LANG !== 'en' && LANG !== 'es') return;
    var raw = a.getAttribute('href') || '';
    if (!raw || raw.charAt(0) !== '/' || raw.indexOf('//') === 0) return;
    if (/^\/(en|es|assets|favicon|apple-touch)(\/|$|\.)/.test(raw)) return;
    a.setAttribute('href', '/' + LANG + (raw === '/' ? '/' : raw));
  }, true);

  /* ---------- Cortina entre páginas: cor dominante do projeto de destino ---------- */
  var curtain = $('[data-curtain]'), cLabel = $('[data-curtain-label]');
  var paint = function (c, ct) { if (!curtain) return; curtain.style.setProperty('--cc', c || ''); curtain.style.setProperty('--cct', ct || ''); };
  (function arrive() {
    if (!curtain) return;
    var covering = html.classList.contains('curtain-cover'); ss.del('cortina'); if (!covering) return;
    cLabel.textContent = ss.get('cortina-label') || ''; paint(ss.get('cortina-c'), ss.get('cortina-ct'));
    requestAnimationFrame(function () { requestAnimationFrame(function () { curtain.classList.add('is-out'); html.classList.remove('curtain-cover'); setTimeout(function () { curtain.classList.remove('is-out'); }, 850); }); });
  })();
  if (curtain && !reduce) document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-tr]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    var href = a.getAttribute('href'); if (!href || href.charAt(0) === '#') return;
    e.preventDefault();
    var l = a.dataset.tr || '', c = a.dataset.c || '', ct = a.dataset.ct || '';
    cLabel.textContent = l; paint(c, ct);
    ss.set('cortina', '1'); ss.set('cortina-label', l); ss.set('cortina-c', c); ss.set('cortina-ct', ct);
    curtain.classList.remove('is-out'); curtain.classList.add('is-in');
    setTimeout(function () { location.href = href; }, 560);
  });
  addEventListener('pageshow', function (e) { if (e.persisted && curtain) { curtain.classList.remove('is-in', 'is-out'); html.classList.remove('curtain-cover'); } });

  /* ---------- Imagem ampliada (grupos por data-lb-g; conjunto próprio por data-lb-set) ---------- */
  var dlg = $('[data-lb]');
  if (dlg) {
    var img = $('[data-lb-img]', dlg), cap = $('[data-lb-cap]', dlg), list = [], k = 0, opener = null;
    var show = function (i) {
      if (!list.length) return; k = (i + list.length) % list.length; var b = list[k];
      img.src = b.dataset.src; cap.textContent = (b.dataset.cap ? b.dataset.cap + ' · ' : '') + (k + 1) + ' ' + tx('of') + ' ' + list.length;
      var nx = list[(k + 1) % list.length]; if (nx) (new Image()).src = nx.dataset.src;
    };
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-zoom]'); if (!b) return; e.preventDefault(); opener = b;
      if (b.dataset.lbSet) { list = JSON.parse(b.dataset.lbSet).map(function (s) { var d = document.createElement('i'); d.dataset.src = s; d.dataset.cap = b.dataset.cap || ''; return d; }); show(+b.dataset.lbStart || 0); }
      else { list = $$('[data-zoom][data-lb-g="' + b.dataset.lbG + '"]'); show(list.indexOf(b)); }
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); lock(true);
    });
    var close = function () { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); };
    dlg.addEventListener('close', function () { lock(false); if (opener && opener.focus) opener.focus(); });
    $('[data-lb-x]', dlg).addEventListener('click', close);
    $('[data-lb-p]', dlg).addEventListener('click', function () { show(k - 1); });
    $('[data-lb-n]', dlg).addEventListener('click', function () { show(k + 1); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
    dlg.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') show(k - 1); if (e.key === 'ArrowRight') show(k + 1); });
    var t0 = 0; dlg.addEventListener('touchstart', function (e) { t0 = e.touches[0].clientX; }, { passive: true });
    dlg.addEventListener('touchend', function (e) { var d = e.changedTouches[0].clientX - t0; if (Math.abs(d) > 50) show(k + (d < 0 ? 1 : -1)); });
  }

  /* ---------- Capítulos do case: ativo + progresso ---------- */
  var cnav = $('[data-cnav]');
  if (cnav) {
    var links = $$('a', cnav), chs = links.map(function (a) { return document.getElementById(a.hash.slice(1)); }), bar = $('.cnav__bar', cnav.parentElement), body = $('[data-cbody]');
    scrollFns.push(function () {
      var vh = innerHeight, on = -1;
      chs.forEach(function (c, i) { if (c && c.getBoundingClientRect().top < vh * .4) on = i; });
      links.forEach(function (a, i) { var was = a.classList.contains('is-on'); a.classList.toggle('is-on', i === on); if (i === on && !was) cnav.scrollTo({ left: a.offsetLeft - cnav.clientWidth / 2 + a.clientWidth / 2, behavior: reduce ? 'auto' : 'smooth' }); });
      if (bar && body) { var r = body.getBoundingClientRect(); bar.style.setProperty('--p', clamp(-r.top / (r.height - vh), 0, 1).toFixed(4)); }
    });
  }

  /* ---------- Faixas arrastáveis com o mouse (posts) ---------- */
  if (fine) $$('[data-drag]').forEach(function (s) {
    var down = false, x0 = 0, l0 = 0, moved = false;
    s.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = false; x0 = e.clientX; l0 = s.scrollLeft; });
    addEventListener('pointermove', function (e) { if (!down) return; var d = e.clientX - x0; if (Math.abs(d) > 4) { moved = true; s.classList.add('is-drag'); } s.scrollLeft = l0 - d; });
    addEventListener('pointerup', function () { down = false; s.classList.remove('is-drag'); });
    s.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  });

  /* ---------- Ícones das ferramentas no contato: flutuam, fogem do cursor e podem ser arrastados ---------- */
  var tools = $('#tools-float'), foot = $('#contato');
  if (tools && foot && window.FERRAMENTAS && window.FERRAMENTAS.length) {
    var startTools = function () {
      var LIST = window.FERRAMENTAS;
      // caminhos dos ícones em imagem vêm relativos (o site oficial tinha <base href="/">): aqui viram absolutos
      tools.innerHTML = LIST.map(function (t) { var ic = String(t.svg || '').replace(/(src=")(assets\/)/g, '$1/$2'); return t.url ? '<a class="tool-ic tool-ic-link" href="' + t.url + '" target="_blank" rel="noopener noreferrer" title="' + t.n + '" aria-label="' + t.n + '">' + ic + '</a>' : '<div class="tool-ic" title="' + t.n + '" aria-hidden="true">' + ic + '</div>'; }).join('');
      var els = $$('.tool-ic', tools), W = 0, H = 0, S = 46, R = 23, obst = [], G = { x: 0, y: 0 }, mob = matchMedia('(max-width: 767px)');
      var GAP = mob.matches ? 5 : 3;
      var near = function (cx, cy, o) { return [Math.max(o.x, Math.min(cx, o.x + o.w)), Math.max(o.y, Math.min(cy, o.y + o.h))]; };
      var free = function (cx, cy) { return cx > R && cy > R && cx < W - R && cy < H - R && !obst.some(function (o) { var p = near(cx, cy, o); return Math.hypot(cx - p[0], cy - p[1]) < R + GAP; }); };
      var measure = function () {
        var r = tools.getBoundingClientRect(); W = r.width; H = r.height; S = els[0].offsetWidth || 46; R = S / 2;
        obst = $$('.footer-headline, .footer-social', foot).map(function (el) { var q = el.getBoundingClientRect(); return { x: q.left - r.left - GAP, y: q.top - r.top - GAP, w: q.width + GAP * 2, h: q.height + GAP * 2 }; });
        var cb = $('.credit-bar', foot); if (cb) H = cb.getBoundingClientRect().top - r.top;
        var sx = 0, sy = 0, n = 0, st = Math.max(12, S / 2);
        for (var y = R; y < H - R; y += st) for (var x = R; x < W - R; x += st) if (free(x, y)) { sx += x; sy += y; n++; }
        G = n ? { x: sx / n, y: sy / n } : { x: W / 2, y: H / 2 };
        if (mob.matches) G = { x: Math.max(R + 12, Math.min(66, W * .2)), y: H - R - 52 };
      };
      measure();
      var cabem = mob.matches ? els.length : Math.max(6, Math.floor((W * H - obst.reduce(function (a, o) { return a + o.w * o.h; }, 0)) / ((S + GAP) * (S + GAP) * 2.2)));
      var B = [];
      els.forEach(function (el, i) { if (i >= cabem) { el.style.display = 'none'; return; } var a = i * 2.39996, rr = (S + GAP) * (mob.matches ? .5 : .62) * Math.sqrt(i + 1); B.push({ el: el, x: G.x + Math.cos(a) * rr, y: G.y + Math.sin(a) * rr, vx: 0, vy: 0, ph: Math.random() * 6.28, sp: .5 + Math.random() * .5, rot: (Math.random() - .5) * 16 }); });
      var put = function (b) { b.el.style.transform = 'translate3d(' + (b.x - R).toFixed(1) + 'px,' + (b.y - R).toFixed(1) + 'px,0) rotate(' + b.rot.toFixed(1) + 'deg)'; };
      B.forEach(put); if (reduce) return;
      var ptr = { x: -9999, y: -9999, on: false }, raf = 0, last = 0, t = 0, inView = false, calm = 0, drag = null, kick = 0, ly = scrollY, frame = 0;
      var wake = function () { calm = 0; if (inView && !raf) { last = performance.now(); raf = requestAnimationFrame(tickT); } };
      var local = function (cx, cy) { var r = tools.getBoundingClientRect(); return [cx - r.left, cy - r.top]; };
      addEventListener('pointermove', function (e) { var p = local(e.clientX, e.clientY); ptr.x = p[0]; ptr.y = p[1]; ptr.on = e.pointerType !== 'touch' || !!drag; if (drag) { var now = performance.now(), d = Math.max(8, now - drag.t) / 1000; drag.b.vx = (p[0] - drag.ox - drag.b.x) / d; drag.b.vy = (p[1] - drag.oy - drag.b.y) / d; drag.b.x = p[0] - drag.ox; drag.b.y = p[1] - drag.oy; drag.t = now; } if (inView) wake(); }, { passive: true });
      B.forEach(function (b) {
        var el = b.el; el.style.pointerEvents = 'auto'; el.style.cursor = 'grab'; el.style.touchAction = 'none';
        el.addEventListener('pointerdown', function (e) { if (drag) return; e.preventDefault(); var p = local(e.clientX, e.clientY); drag = { b: b, ox: p[0] - b.x, oy: p[1] - b.y, t: performance.now() }; b.vx = b.vy = 0; el.style.cursor = 'grabbing'; el.style.zIndex = 2; try { el.setPointerCapture(e.pointerId); } catch (_) {} wake(); });
        var up = function () { if (!drag || drag.b !== b) return; var v = Math.hypot(b.vx, b.vy); if (v > 900) { b.vx *= 900 / v; b.vy *= 900 / v; } el.style.cursor = 'grab'; el.style.zIndex = ''; drag = null; wake(); };
        el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('lostpointercapture', up);
      });
      document.addEventListener('pointerleave', function () { if (!drag) { ptr.on = false; ptr.x = ptr.y = -9999; } });
      addEventListener('scroll', function () { kick += scrollY - ly; ly = scrollY; if (inView) wake(); }, { passive: true });
      function tickT(now) {
        var dt = Math.min(.033, (now - last) / 1000 || .016); last = now; t += dt; if (++frame % 240 === 0) measure();
        var push = clamp(kick, -24, 24); kick = 0; var rf = Math.max(80, Math.min(130, W * .09)), damp = Math.pow(.18, dt), energy = 0, m = mob.matches;
        B.forEach(function (b) {
          if (drag && drag.b === b) return;
          b.vx += (G.x - b.x) * (m ? 1.8 : 2.2) * dt; b.vy += (G.y - b.y) * (m ? 1.8 : 2.2) * dt;
          if (!m) b.vx += Math.cos(t * b.sp + b.ph) * 14 * dt;
          b.vy += Math.sin(t * b.sp * 1.3 + b.ph) * (m ? 4 : 14) * dt; b.vy -= push * b.sp * .6;
          if (ptr.on && !drag) { var ex = b.x - ptr.x, ey = b.y - ptr.y, d = Math.hypot(ex, ey) || .01; if (d < rf) { var f = Math.pow(1 - d / rf, 2) * 4200; b.vx += ex / d * f * dt; b.vy += ey / d * f * dt; } }
          b.vx *= damp; b.vy *= damp; var v = Math.hypot(b.vx, b.vy); if (v > 900) { b.vx *= 900 / v; b.vy *= 900 / v; }
          b.x += b.vx * dt; b.y += b.vy * dt; energy += v;
        });
        for (var it = 0; it < 3; it++) {
          for (var i = 0; i < B.length; i++) for (var j = i + 1; j < B.length; j++) {
            var a = B[i], c = B[j], dx = c.x - a.x, dy = c.y - a.y, d = Math.hypot(dx, dy) || .01, min = S + GAP;
            if (d < min) { var nx = dx / d, ny = dy / d, ov = (min - d) / 2, fa = drag && drag.b === a ? 0 : 1, fc = drag && drag.b === c ? 0 : 1, kk = 2 / ((fa + fc) || 1); a.x -= nx * ov * fa * kk; a.y -= ny * ov * fa * kk; c.x += nx * ov * fc * kk; c.y += ny * ov * fc * kk; var rv = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny; if (rv < 0) { var imp = -rv * .7; if (fa) { a.vx -= nx * imp; a.vy -= ny * imp; } if (fc) { c.vx += nx * imp; c.vy += ny * imp; } } }
          }
          B.forEach(function (b) {
            if (drag && drag.b === b) { b.x = clamp(b.x, R, W - R); b.y = clamp(b.y, R, H - R); return; }
            obst.forEach(function (o) { var p = near(b.x, b.y, o), dx = b.x - p[0], dy = b.y - p[1], d = Math.hypot(dx, dy); if (d < R && d > .01) { var nx = dx / d, ny = dy / d; b.x += nx * (R - d); b.y += ny * (R - d); var vn = b.vx * nx + b.vy * ny; if (vn < 0) { b.vx -= 1.5 * vn * nx; b.vy -= 1.5 * vn * ny; } } else if (d <= .01) { b.y = o.y + o.h + R; } });
            if (b.x < R) { b.x = R; b.vx = Math.abs(b.vx) * .6; } else if (b.x > W - R) { b.x = W - R; b.vx = -Math.abs(b.vx) * .6; }
            if (b.y < R) { b.y = R; b.vy = Math.abs(b.vy) * .6; } else if (b.y > H - R) { b.y = H - R; b.vy = -Math.abs(b.vy) * .6; }
          });
        }
        B.forEach(function (b) { b.rot += b.vx * dt / R * 20; put(b); });
        calm = (energy / B.length < 6 && !drag && !ptr.on) ? calm + dt : 0;
        raf = inView && calm < 2 ? requestAnimationFrame(tickT) : 0;
      }
      new IntersectionObserver(function (en) { inView = en[0].isIntersecting; if (inView) { measure(); wake(); } }).observe(foot);
      addEventListener('resize', function () { measure(); wake(); });
    };
    new IntersectionObserver(function (en, o) { if (en[0].isIntersecting) { o.disconnect(); startTools(); } }, { rootMargin: '600px 0px' }).observe(foot);
  }

  /* ---------- Blocos dos cases (espécime, padrões, abas, grade) ---------- */
  $$('[data-wght]').forEach(function (r) { var t = document.querySelector(r.dataset.wght), o = $('[data-wght-out="' + r.id + '"]'); var set = function () { t.style.fontWeight = r.value; if (o) o.textContent = r.value; }; r.addEventListener('input', set); set(); });
  $$('[data-specimen-input]').forEach(function (i) { var t = document.querySelector(i.dataset.specimenInput), b = t.textContent; i.addEventListener('input', function () { t.textContent = i.value || b; }); });
  $$('[data-grow]').forEach(function (el) { if (reduce) { el.classList.add('is-in'); return; } new IntersectionObserver(function (en, o) { if (en[0].isIntersecting) { el.classList.add('is-in'); o.disconnect(); } }, { threshold: .3 }).observe(el); });
  $$('[data-toggle-class]').forEach(function (b) { var t = document.querySelector(b.dataset.target), c = b.dataset.toggleClass; b.addEventListener('click', function () { b.setAttribute('aria-pressed', String(t.classList.toggle(c))); }); });
  $$('[data-pattern-move]').forEach(function (el) { if (reduce || !fine) return; el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3)); el.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3)); }); el.addEventListener('pointerleave', function () { el.style.setProperty('--mx', 0); el.style.setProperty('--my', 0); }); });
  $$('[data-tabs]').forEach(function (g) { var bs = $$('[role="tab"]', g), ps = bs.map(function (b) { return document.getElementById(b.getAttribute('aria-controls')); }); bs.forEach(function (b, i) { b.addEventListener('click', function () { bs.forEach(function (x, j) { x.setAttribute('aria-selected', String(i === j)); ps[j].hidden = i !== j; }); }); }); });

  /* ---------- Endereço com âncora (ex.: /projetos/rino/#pecas): reposiciona depois que as imagens assentam ---------- */
  if (location.hash.length > 1) addEventListener('load', function () { var t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) setTimeout(function () { t.scrollIntoView(); }, 120); });

  /* ---------- Voltar ao topo ---------- */
  $$('[data-top]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); }); });

  onScroll();
})();

/* =========================================================================
   motion.js — animações do portfólio com GSAP + ScrollTrigger
   1) carregamento  2) transição entre páginas  3) hover (cursor, magnético, tilt)
   4) efeitos de rolagem (progresso, parallax, revelação de cartões, rodapé)
   Aditivo e isolado: não altera a lógica de rotas; só intercepta o clique para
   tocar a cortina e depois repassa o mesmo clique ao handler original.
   ========================================================================= */
(() => {
  const html = document.documentElement;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (html.classList.contains('mx-off') || RM) { document.getElementById('mx-loader')?.remove(); html.classList.remove('mx-loading'); return; }

  const boot = () => {
    const { gsap, ScrollTrigger } = window;
    if (!gsap) { document.getElementById('mx-loader')?.remove(); html.classList.remove('mx-loading'); return; }
    gsap.registerPlugin(ScrollTrigger);
    const EASE = 'expo.out';
    const COLS = innerWidth < 640 ? 6 : 12;
    html.style.setProperty('--mx-cols', COLS);

    /* ---------- 1. CARREGAMENTO ---------- */
    const loader = document.getElementById('mx-loader');
    const afterLoad = () => { html.classList.remove('mx-loading'); ScrollTrigger.refresh(); };
    if (loader && getComputedStyle(loader).display !== 'none') {
      try { sessionStorage.setItem('mx-seen', '1'); } catch (e) {}
      const cells = loader.querySelector('.mx-cells');
      cells.innerHTML = '<i></i>'.repeat(COLS * Math.ceil(innerHeight / (innerWidth / COLS)));
      cells.style.gridAutoRows = (innerWidth / COLS) + 'px';
      const count = loader.querySelector('.mx-count');
      const prog = { v: 0 };
      // progresso real: imagens do 1º viewport + fontes; limitado a 1,6 s para não segurar o LCP
      const ready = Promise.race([
        Promise.all([document.fonts?.ready, new Promise(r => document.readyState === 'complete' ? r() : addEventListener('load', r, { once: true }))]),
        new Promise(r => setTimeout(r, 1600))
      ]);
      const tl = gsap.timeline();
      tl.to('.mx-mark b', { opacity: 1, scale: 1, duration: .35, ease: 'back.out(2)', stagger: { each: .05, from: 'center', grid: [3, 3] } })
        .to('.mx-name span', { y: 0, duration: .6, ease: EASE }, '<.1')
        .to(prog, { v: 70, duration: .7, ease: 'power1.out', onUpdate: () => { count.textContent = String(Math.round(prog.v)).padStart(3, '0'); gsap.set('.mx-bar > i', { scaleX: prog.v / 100 }); } }, 0);
      ready.then(() => {
        tl.to(prog, { v: 100, duration: .35, ease: 'power2.inOut', onUpdate: () => { count.textContent = String(Math.round(prog.v)).padStart(3, '0'); gsap.set('.mx-bar > i', { scaleX: prog.v / 100 }); } })
          .to('.mx-center, .mx-count', { opacity: 0, y: -12, duration: .35, ease: 'power2.in' })
          // dissolução pixelada: blocos somem em ordem aleatória (mesma linguagem do retrato em dither)
          .to('.mx-cells i', { opacity: 0, duration: .25, ease: 'none', stagger: { each: .006, from: 'random' } }, '-=.1')
          .add(afterLoad, '-=.45')
          .add(() => loader.remove());
      });
    } else { loader?.remove(); afterLoad(); }

    /* ---------- 2. TRANSIÇÃO ENTRE PÁGINAS ---------- */
    let busy = false;
    const currentRoute = () => ['home', 'work', 'about', 'articles'].find(r => document.getElementById('view-' + r)?.style.display !== 'none');
    const main = document.querySelector('main');

    // conteúdo da nova página entra em cascata, com deslocamento pequeno
    const enterView = (view) => {
      const kids = [...view.querySelectorAll(':scope > section, :scope > .first-screen > section, :scope > div > section')].slice(0, 5);
      gsap.fromTo(kids, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: .7, ease: 'power3.out', stagger: .06, clearProps: 'transform,opacity' });
    };

    // troca de página: a atual esmaece (0,2 s), troca, a nova sobe de leve
    addEventListener('click', (e) => {
      const a = e.target.closest('a[data-route]');
      if (!a || a.dataset.mxPass || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      if (a.dataset.route === currentRoute() && !location.hash) return;
      e.preventDefault(); e.stopImmediatePropagation();
      if (busy) return; busy = true;
      gsap.to(main, { opacity: 0, y: -6, duration: .2, ease: 'power2.in', onComplete: () => {
        a.dataset.mxPass = '1'; a.click(); delete a.dataset.mxPass;
        scrollTo({ top: 0, behavior: 'instant' });
        gsap.set(main, { clearProps: 'opacity,transform' });
        enterView(document.getElementById('view-' + currentRoute()));
        ScrollTrigger.refresh(); busy = false;
      } });
    }, true);

    // voltar/avançar do navegador: só a entrada do conteúdo
    addEventListener('popstate', () => requestAnimationFrame(() => { const v = document.getElementById('view-' + currentRoute()); v && enterView(v); ScrollTrigger.refresh(); }));

    /* ---------- 3. HOVER ---------- */
    if (FINE) {
      // cursor: ponto pequeno que segue o mouse com leve atraso; só "afunda" no clique
      const cur = document.createElement('div');
      cur.id = 'mx-cursor'; cur.setAttribute('aria-hidden', 'true');
      document.body.appendChild(cur);
      const xTo = gsap.quickTo(cur, 'x', { duration: .35, ease: 'power3' });
      const yTo = gsap.quickTo(cur, 'y', { duration: .35, ease: 'power3' });
      addEventListener('pointermove', (e) => { xTo(e.clientX); yTo(e.clientY); cur.classList.add('on'); }, { passive: true });
      document.addEventListener('pointerleave', () => cur.classList.remove('on'));
      addEventListener('pointerdown', () => gsap.to(cur, { scale: .6, duration: .15 }));
      addEventListener('pointerup', () => gsap.to(cur, { scale: 1, duration: .4, ease: 'back.out(3)' }));

      // botões magnéticos: puxam levemente em direção ao cursor
      const MAG = '.main-nav a, .footer-social, .section-link, .lang-switch button, .home-pagination button';
      document.addEventListener('pointermove', (e) => {
        const el = e.target.closest(MAG); if (!el) return;
        const r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * .3, y: (e.clientY - r.top - r.height / 2) * .4, duration: .4, ease: 'power3.out' });
      }, { passive: true });
      document.addEventListener('pointerout', (e) => {
        const el = e.target.closest(MAG); if (!el || el.contains(e.relatedTarget)) return;
        gsap.to(el, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1, .4)' });
      });

      // cartões: inclinação 3D sutil + posição do brilho
      document.addEventListener('pointermove', (e) => {
        const card = e.target.closest('.work-card'); if (!card) return;
        const r = card.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        const media = card.querySelector('.work-card-media');
        media?.style.setProperty('--mx-x', px * 100 + '%'); media?.style.setProperty('--mx-y', py * 100 + '%');
        gsap.to(card, { rotateY: (px - .5) * 6, rotateX: (.5 - py) * 6, transformPerspective: 900, duration: .5, ease: 'power2.out' });
      }, { passive: true });
      document.addEventListener('pointerout', (e) => {
        const card = e.target.closest('.work-card'); if (!card || card.contains(e.relatedTarget)) return;
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: .8, ease: 'elastic.out(1, .5)' });
      });
    }

    /* ---------- 4. ROLAGEM ---------- */
    // barra de progresso
    const bar = document.createElement('div'); bar.id = 'mx-progress'; document.body.appendChild(bar);
    gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .3 } });

    // retrato: parallax suave ao rolar
    const portrait = document.getElementById('hero-portrait');
    if (portrait && innerWidth >= 768) gsap.to(portrait, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

    // rótulos de seção: sobem com máscara
    gsap.utils.toArray('.section-label, .services-title').forEach(el => {
      gsap.from(el, { clipPath: 'inset(0 0 100% 0)', y: 16, duration: 1, ease: EASE, scrollTrigger: { trigger: el, start: 'top 88%' } });
    });

    // cartões de projeto (renderizados dinamicamente): revelação com máscara + zoom da capa
    const seen = new WeakSet();
    const revealCards = () => {
      const fresh = [...document.querySelectorAll('.work-card')].filter(c => !seen.has(c) && c.offsetParent && !c.closest('.home-featured-grid'));
      fresh.forEach(c => seen.add(c));
      if (!fresh.length) return;
      ScrollTrigger.batch(fresh, {
        start: 'top 92%', once: true,
        onEnter: (els) => gsap.fromTo(els.map(c => c.querySelector('.work-card-media')).filter(Boolean),
          { clipPath: 'inset(18% 0% 0% 0%)', y: 40, opacity: 0 },
          { clipPath: 'inset(0% 0% 0% 0%)', y: 0, opacity: 1, duration: 1.1, ease: EASE, stagger: .1, clearProps: 'clipPath,transform,opacity' })
      });
    };
    revealCards();
    let mqT; new MutationObserver((ms) => { if (ms.every(m => m.target.closest?.('.home-featured-grid'))) return; clearTimeout(mqT); mqT = setTimeout(() => { revealCards(); ScrollTrigger.refresh(); }, 120); })
      .observe(document.querySelector('main'), { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });

    // faixa de logos: inclina conforme a velocidade da rolagem
    const marquee = document.querySelector('.marquee-section');
    if (marquee) {
      const skew = gsap.quickTo(marquee, 'skewX', { duration: .5, ease: 'power3' });
      ScrollTrigger.create({ onUpdate: (s) => skew(gsap.utils.clamp(-8, 8, s.getVelocity() / -250)) });
    }

    // rodapé: título cresce e redes entram em cascata
    const fh = document.querySelector('.footer-headline');
    if (fh) {
      gsap.from(fh, { yPercent: 60, opacity: 0, scale: .94, transformOrigin: 'left bottom', ease: 'none', scrollTrigger: { trigger: '.contact-footer', start: 'top 95%', end: 'top 55%', scrub: .6 } });
      gsap.from('.footer-social', { y: 20, opacity: 0, duration: .8, ease: EASE, stagger: .06, scrollTrigger: { trigger: '.footer-socials', start: 'top 95%' } });
    }
  };

  // GSAP carrega com defer; espera até estar disponível
  let done = false; const go = () => { if (done) return; if (window.gsap || document.readyState === 'complete') { done = true; boot(); } };
  go(); if (!done) { addEventListener('DOMContentLoaded', go, { once: true }); addEventListener('load', go, { once: true }); }
})();

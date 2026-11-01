/* motion.js — complemento leve do motion.css (sem bibliotecas, ~1 KB)
   1) carregamento  2) troca de página  3) cartões da página Projetos  4) ponto do cursor */
(() => {
  const html = document.documentElement;
  const loader = document.getElementById('mx-loader');
  const off = html.classList.contains('mx-off') || matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1) carregamento: some quando a página carrega (no máximo 1,2 s)
  if (loader) {
    try { sessionStorage.setItem('mx-seen', '1'); } catch (e) {}
    let done = false;
    const hide = () => { if (done) return; done = true; loader.classList.add('out'); html.classList.remove('mx-loading'); setTimeout(() => loader.remove(), 600); };
    if (document.readyState === 'complete') hide(); else { addEventListener('load', hide, { once: true }); setTimeout(hide, 1200); }
  }
  if (off) return;

  // 2) troca de página: a atual esmaece (0,2 s), troca pelo handler original do link,
  //    e os blocos da nova entram em cascata subindo só 14 px
  const main = document.querySelector('main');
  let busy = false;
  const current = () => ['home', 'work', 'about', 'articles'].find(r => document.getElementById('view-' + r)?.style.display !== 'none');
  const enterView = () => {
    const v = document.getElementById('view-' + current()); if (!v) return;
    const kids = [...v.querySelectorAll(':scope > section, :scope > .first-screen > section, :scope > div > section')].slice(0, 5);
    kids.forEach((el, i) => {
      el.style.setProperty('--mx-d', i * 60 + 'ms');
      el.classList.remove('mx-rise'); void el.offsetWidth; el.classList.add('mx-rise');
      el.addEventListener('animationend', () => el.classList.remove('mx-rise'), { once: true });
    });
  };
  addEventListener('click', (e) => {
    const a = e.target.closest('a[data-route]');
    if (!a || a.dataset.mxPass || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (a.dataset.route === current() && !location.hash) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (busy) return; busy = true;
    main.classList.add('mx-leave');
    setTimeout(() => {
      a.dataset.mxPass = '1'; a.click(); delete a.dataset.mxPass;
      scrollTo({ top: 0, behavior: 'instant' });
      main.classList.remove('mx-leave'); enterView(); busy = false;
    }, 200);
  }, true);
  addEventListener('popstate', () => requestAnimationFrame(enterView)); // voltar/avançar do navegador

  // 3) página Projetos: cartões aparecem só em fade lento ao entrar na tela (sem direção);
  //    na mesma linha, um leve atraso da esquerda para a direita
  const grid = document.getElementById('work-case-grid');
  if (grid && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((ents) => {
      const vis = ents.filter(en => en.isIntersecting).map(en => en.target);
      vis.sort((p, q) => p.getBoundingClientRect().left - q.getBoundingClientRect().left);
      vis.forEach((el, i) => { el.style.setProperty('--mx-d', Math.min(i, 4) * 90 + 'ms'); el.classList.add('mx-in'); io.unobserve(el); });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.12 });
    const watch = () => grid.querySelectorAll('.work-card:not(.mx-fade)').forEach(c => { c.classList.add('mx-fade'); io.observe(c); });
    watch(); new MutationObserver(watch).observe(grid, { childList: true });
  }

  // 4) ponto do cursor: segue o mouse direto (1 transform por quadro, sem atraso)
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const dot = document.createElement('div');
    dot.id = 'mx-cursor'; dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
    let x = 0, y = 0, raf = 0;
    addEventListener('pointermove', (e) => {
      x = e.clientX; y = e.clientY;
      if (!raf) raf = requestAnimationFrame(() => { dot.style.transform = `translate3d(${x}px,${y}px,0)`; raf = 0; });
      dot.classList.add('on');
    }, { passive: true });
    document.addEventListener('pointerleave', () => dot.classList.remove('on'));
  }
})();

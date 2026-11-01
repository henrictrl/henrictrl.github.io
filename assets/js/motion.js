/* motion.js — complemento leve do motion.css (sem bibliotecas, ~1 KB)
   1) tira a tela de carregamento  2) fade na troca de página  3) ponto do cursor */
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

  // 2) troca de página: esmaece, troca (handler original do link), aparece
  const main = document.querySelector('main');
  let busy = false;
  const current = () => ['home', 'work', 'about', 'articles'].find(r => document.getElementById('view-' + r)?.style.display !== 'none');
  addEventListener('click', (e) => {
    const a = e.target.closest('a[data-route]');
    if (!a || a.dataset.mxPass || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (a.dataset.route === current() && !location.hash) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (busy) return; busy = true;
    main.classList.remove('mx-enter'); main.classList.add('mx-leave');
    setTimeout(() => {
      a.dataset.mxPass = '1'; a.click(); delete a.dataset.mxPass;
      scrollTo({ top: 0, behavior: 'instant' });
      main.classList.remove('mx-leave'); void main.offsetWidth; main.classList.add('mx-enter');
      busy = false;
    }, 220);
  }, true);
  main.addEventListener('animationend', (e) => { if (e.target === main) main.classList.remove('mx-enter'); });

  // 3) ponto do cursor: segue o mouse direto (1 transform por quadro, sem atraso)
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

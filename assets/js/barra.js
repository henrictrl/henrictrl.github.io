/* Celular: barra flutuante inferior (só ícones, nome aparece ao tocar),
   menu do topo só com tema e idioma, e botão de contato que some ao descer a página. */
(function () {
  'use strict';
  var mq = matchMedia('(max-width: 767px)');
  var hdr = document.querySelector('header.top-header');
  var toggle = document.getElementById('nav-toggle');
  if (!hdr || document.querySelector('.hm-dock')) return;

  /* --- barra inferior: espelha os links do menu (menos Contato) --- */
  var origs = [].slice.call(hdr.querySelectorAll('.main-nav a')).filter(function (a) {
    return a.dataset.navId !== 'contato' && a.dataset.nav !== 'contact';
  });
  var dock = document.createElement('nav');
  dock.className = 'hm-dock';
  dock.setAttribute('aria-label', hdr.querySelector('.main-nav').getAttribute('aria-label') || 'Navegação');
  var timer;
  origs.forEach(function (o) {
    var a = document.createElement('a');
    a.href = o.getAttribute('href');
    a.innerHTML = o.querySelector('svg').outerHTML + '<span class="hm-tip" aria-hidden="true"></span>';
    var sync = function () {
      var name = o.textContent.trim();
      a.setAttribute('aria-label', name);
      a.querySelector('.hm-tip').textContent = name;
      var on = o.classList.contains('current');
      a.classList.toggle('current', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    };
    sync();
    new MutationObserver(sync).observe(o, { attributes: true, attributeFilter: ['class'], childList: true, subtree: true, characterData: true });
    a.addEventListener('click', function (e) {
      // nome aparece por 1,2 s acima do ícone
      dock.querySelectorAll('.tip-on').forEach(function (t) { t.classList.remove('tip-on'); });
      a.classList.add('tip-on'); clearTimeout(timer);
      timer = setTimeout(function () { a.classList.remove('tip-on'); }, 1400);
      // o link original faz a navegação (rota da home ou página normal)
      e.preventDefault(); o.click();
    });
    dock.appendChild(a);
  });
  document.body.appendChild(dock);
  if (scrollY < 40) dock.classList.add('is-big');

  /* --- menu do topo vira painel pequeno: fecha ao tocar fora, rolar ou trocar idioma --- */
  var isOpen = function () { return hdr.classList.contains('menu-open'); };
  var close = function () { if (isOpen() && toggle) toggle.click(); };
  document.addEventListener('click', function (e) {
    if (!isOpen()) return;
    if (e.target.closest('.lang-btn')) { setTimeout(close, 180); return; }
    if (!hdr.contains(e.target)) close();
  }, true);
  var y0 = 0;
  addEventListener('scroll', function () {
    if (!isOpen()) { y0 = scrollY; return; }
    if (Math.abs(scrollY - y0) > 12) close();
  }, { passive: true });

  /* --- contato: some enquanto desce, volta ao subir ou ao parar de rolar --- */
  var last = scrollY, idle, ticking = false;
  var fab = function () { return document.querySelector('.hm-fab-wrap'); };
  addEventListener('scroll', function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      if (!mq.matches) return;
      var w = fab(), y = scrollY, d = y - last;
      if (Math.abs(d) > 4) {
        dock.classList.toggle('is-big', d < 0 || y < 40); // sobe = barra maior; desce = compacta
        if (!w) { last = y; return; }
        var panelOpen = w.querySelector('.hm-fab-panel') && !w.querySelector('.hm-fab-panel').hidden;
        w.classList.toggle('is-hide', d > 0 && y > 120 && !panelOpen);
        last = y;
      }
      clearTimeout(idle);
      if (w) idle = setTimeout(function () { w.classList.remove('is-hide'); }, 700);
    });
  }, { passive: true });
})();

/* Capas animadas dos cards de projeto.
   Lê p.capaAnim (assets/data/projetos.js) e devolve o miolo de .work-card-media.
   Modelos: C (fita de peças), D (mockup com logo ao lado), DT (logo acima), DC (imagem centralizada),
   E (páginas na mesa), M (mosaico de fotos). Loops sem emenda: C em volta exata; D/E em ida e volta. */
(function () {
  var css = [
    '.ca{position:absolute;inset:0;overflow:hidden;container-type:inline-size;isolation:isolate;background:var(--ca-bg,#111)}',
    '.work-card-media .ca img{position:absolute;inset:auto;width:auto;height:auto;max-width:none;object-fit:fill;transition:none;display:block;pointer-events:none}',
    '.work-card:hover .work-card-media .ca img{transform:none}',
    '.ca-side{position:absolute;inset:0 auto 0 0;width:42%;display:grid;place-items:center;background:var(--ca-p);z-index:3}',
    '.work-card-media .ca .ca-lg{position:static;max-width:28cqw;max-height:20cqw;width:auto;height:auto;object-fit:contain}',
    '.ca-ttl{font-weight:600;font-size:5cqw;line-height:1.1;text-align:center;padding:0 3cqw}',
    /* C · fita */
    '.ca-C .ca-side{box-shadow:1cqw 0 3cqw rgba(0,0,0,.3)}',
    '.ca-C .ca-cols{position:absolute;left:42%;right:0;top:0;bottom:0;display:grid;grid-template-columns:1fr 1fr;gap:2cqw;padding:0 2cqw;transform:rotate(-6deg) scale(1.2);align-items:start}',
    '.ca-C .ca-col{animation:ca-up var(--d) linear infinite;will-change:transform}',
    '.ca-C .ca-col.dn{animation-name:ca-dn}',
    '.work-card-media .ca-C .ca-col img{position:static;width:100%;height:auto}',
    '@keyframes ca-up{from{transform:translate3d(0,0,0)}to{transform:translate3d(0,-50%,0)}}',
    '@keyframes ca-dn{from{transform:translate3d(0,-50%,0)}to{transform:translate3d(0,0,0)}}',
    /* D · mockup com painel à esquerda / DT · logo acima / DC · centralizada */
    '.work-card-media .ca-D .ca-bg{left:30%;top:0;width:70%;height:100%;object-fit:cover;object-position:0 50%;transform-origin:30% 50%;animation:ca-kb 12s ease-in-out infinite alternate}',
    '.ca-D .ca-side{width:44%;background:linear-gradient(90deg,var(--ca-p) 0,var(--ca-p) 66%,transparent 100%);place-items:center start;padding-left:6cqw}',
    '.work-card-media .ca-D .ca-lg{max-width:26cqw}',
    '.work-card-media .ca-DT .ca-bg{left:0;top:22%;width:100%;height:78%;object-fit:cover;object-position:50% 40%;transform-origin:50% 60%;animation:ca-kb 12s ease-in-out infinite alternate}',
    '.ca-DT .ca-side{inset:0 0 auto 0;width:auto;height:46%;background:linear-gradient(180deg,var(--ca-p) 0,var(--ca-p) 48%,transparent 100%);place-items:start center;padding-top:5.5cqw}',
    '.work-card-media .ca-DT .ca-lg{max-width:44cqw;max-height:13cqw}',
    '.work-card-media .ca-DC .ca-bg{left:50%;top:50%;width:84%;height:84%;object-fit:contain;transform:translate(-50%,-50%);animation:ca-kbc 12s ease-in-out infinite alternate}',
    '.work-card-media .ca-DC.full .ca-bg{width:100%;height:100%;object-fit:cover}',
    '@keyframes ca-kb{from{transform:scale(1)}to{transform:scale(1.08)}}',
    '@keyframes ca-kbc{from{transform:translate(-50%,-50%) scale(1)}to{transform:translate(-50%,-50%) scale(1.07)}}',
    /* E · mesa */
    '.ca-E{perspective:var(--persp,1540px)}',
    '.work-card-media .ca-E .ca-pl{height:auto;animation:ca-pan 14s ease-in-out infinite alternate;transform:rotateX(52deg) rotateZ(-32deg) translateX(calc(var(--tx) * -1))}',
    '@keyframes ca-pan{from{transform:rotateX(52deg) rotateZ(-32deg) translateX(calc(var(--tx) * -1))}to{transform:rotateX(52deg) rotateZ(-32deg) translateX(var(--tx))}}',
    /* M · mosaico */
    '.work-card-media .ca-M .ca-bg{left:0;top:0;width:100%;height:100%;object-fit:cover;transform-origin:50% 50%;animation:ca-kb 16s ease-in-out infinite alternate}',
    /* H · capa fixa; no hover mostra uma segunda imagem */
    '.work-card-media .ca-H img{inset:0;width:100%;height:100%;object-fit:cover}',
    '.work-card-media .ca-H .ca-hv{opacity:0;transform:scale(1.04);transition:opacity .5s var(--ease,ease),transform .9s var(--ease,ease)}',
    '.work-card:hover .work-card-media .ca-H .ca-hv,.work-card:focus-visible .work-card-media .ca-H .ca-hv{opacity:1;transform:scale(1)}',
    '@media (prefers-reduced-motion:reduce){.ca *{animation:none!important}}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var rgb = function (c) { return 'rgb(' + c.join(',') + ')'; };
  var logo = function (c, f, lg, tinta, titulo) {
    return lg ? '<img class="ca-lg" src="' + c.src + f + '" width="' + lg[0] + '" height="' + lg[1] + '" alt="" decoding="async">'
              : '<span class="ca-ttl" style="color:' + rgb(tinta || [255, 255, 255]) + '">' + titulo + '</span>';
  };

  window.capaAnimHTML = function (p) {
    var c = p.capaAnim; if (!c) return '';
    var k = 3.4, h = '';
    if (c.m === 'C') {
      var col = function (f, s, dn) {
        var im = '<img src="' + c.src + f + '" width="' + s[0] + '" height="' + s[1] + '" alt="" decoding="async">';
        return '<div class="ca-col' + (dn ? ' dn' : '') + '" style="--d:' + (s[1] / s[0] * k).toFixed(1) + 's">' + im + im + '</div>';
      };
      h = '<div class="ca-side">' + logo(c, 'logo.webp', c.logo, c.tinta, p.titulo) + '</div><div class="ca-cols" aria-hidden="true">' + col('a.webp', c.a) + col('b.webp', c.b, 1) + '</div>';
    } else if (c.m === 'D' || c.m === 'DT') {
      h = '<img class="ca-bg" src="' + c.src + 'd.webp" alt="" decoding="async"><div class="ca-side">' + logo(c, 'logo-d.webp', c.logo, c.tinta, p.titulo) + '</div>';
    } else if (c.m === 'DC' || c.m === 'M') {
      h = '<img class="ca-bg" src="' + c.src + (c.m === 'M' ? 'm.webp' : 'd.webp') + '" alt="" decoding="async">';
    } else if (c.m === 'H') {
      h = '<img src="' + c.base + '" alt="" loading="lazy" decoding="async"><img class="ca-hv" src="' + c.src + 'd.webp" alt="" loading="lazy" decoding="async">';
    } else if (c.m === 'E') {
      // tudo em % do card (3:2): não depende de unidades de container, que o Safari congela na animação
      var P = c.ar > 1 ? 36 : 30, W = c.scale * P, H = W * c.h / c.w, L = 50 - c.cx * W, T = (33.333 - c.cy * H) / 0.66667;
      h = '<img class="ca-pl" src="' + c.src + 'e.webp" width="' + c.w + '" height="' + c.h + '" alt="" decoding="async" style="width:' + W.toFixed(3) + '%;left:' + L.toFixed(3) + '%;top:' + T.toFixed(3) + '%;--tx:' + (250 / W).toFixed(3) + '%;transform-origin:' + (c.cx * 100).toFixed(2) + '% ' + (c.cy * 100).toFixed(2) + '%">';
    }
    var bg = c.p || c.fundo || [17, 17, 17];
    return '<div class="ca ca-' + c.m + (c.full ? ' full' : '') + '" style="--ca-bg:' + rgb(bg) + ';--ca-p:' + rgb(c.p || bg) + '">' + h + '</div>';
  };

  /* Perspectiva proporcional ao card e reinício das animações quando o card muda de tamanho (troca de colunas) */
  var ro = window.ResizeObserver ? new ResizeObserver(function (es) {
    es.forEach(function (e) {
      var el = e.target, w = Math.round(e.contentRect.width); if (!w || +el.dataset.w === w) return;
      var first = !el.dataset.w; el.dataset.w = w; el.style.setProperty('--persp', Math.round(w * 4.7) + 'px');
      if (first) return;
      el.querySelectorAll('.ca-pl,.ca-bg,.ca-col').forEach(function (a) { a.style.animation = 'none'; void a.offsetWidth; a.style.animation = ''; });
    });
  }) : null;
  var watch = function () { if (ro) document.querySelectorAll('.ca:not([data-ro])').forEach(function (el) { el.dataset.ro = 1; ro.observe(el); }); };
  if (window.MutationObserver) new MutationObserver(watch).observe(document.documentElement, { childList: true, subtree: true });

  /* Ordem dos cards: evita capas do mesmo modelo lado a lado ou uma embaixo da outra */
  var key = function (p) { var c = p.capaAnim; return c ? c.m + (c.full ? 'F' : '') : 'fixa'; };
  window.capaSpread = function (list, cols) {
    var rest = list.slice(), out = [];
    while (rest.length) {
      var i = out.length, left = i % cols ? key(out[i - 1]) : null, up = i >= cols ? key(out[i - cols]) : null;
      var j = rest.findIndex(function (p) { var k = key(p); return k !== left && k !== up; });
      if (j < 0) j = rest.findIndex(function (p) { return key(p) !== left; });
      out.push(rest.splice(j < 0 ? 0 : j, 1)[0]);
    }
    return out;
  };

  /* Safari resolve o -50% da fita no início da animação: reinicia quando a imagem carrega */
  document.addEventListener('load', function (e) {
    var t = e.target; if (!t || t.tagName !== 'IMG') return;
    var col = t.parentNode; if (!col || !col.classList || !col.classList.contains('ca-col')) return;
    col.style.animation = 'none'; void col.offsetHeight; col.style.animation = '';
  }, true);
})();

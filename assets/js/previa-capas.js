/* PREVIA · capas com movimento proprio de cada projeto (carregado depois de assets/js/capas.js).
   Sequencia (SEQ): quadros em fusao, gerados por previa/capas.py.
   - Classic Tattoo: V1, V2, V3 do simbolo e a camiseta   - Optica Leopoldina: construcao, logo, versao verde, simbolo
   - Equity 360: construcao, positivo, negativo, horizontal
   Tesoura com Ponta usa o modelo L (fita) do proprio capas.js, com as capas dos carrosseis. Rino (E) e Sollaris (S) seguem como estao. */
(function () {
  var P = window.PROJETOS || [], by = function (s) { return P.filter(function (p) { return p.slug === s; })[0]; };
  var SEQ = { 'optica-leopoldina': { f: [3, 4], n: 2, bg: '#2d3d31', s: 2.6 } }; // logo completo verde -> simbolo verde (Classic Tattoo e Equity 360 voltam ao original)
  var px = by('pixelar'); if (px) px.capaAnim = null; // capa do Pixelar = logo (capa.webp)
  // Tesoura com Ponta volta ao logo estatico (sem capaAnim)
  var st = document.createElement('style');
  st.textContent = '.work-card-media .ca.ca-seq img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;backface-visibility:hidden}' +
    /* 1ª imagem fica embaixo e só respira; a 2ª entra e sai em fusão por cima */
    '.work-card-media .ca.ca-seq img:first-child{animation:ca-s1 calc(var(--n)*var(--s)) ease-out infinite}' +
    '.work-card-media .ca.ca-seq img:nth-child(2){opacity:0;animation:ca-s2 calc(var(--n)*var(--s)) linear infinite}' +
    '@keyframes ca-s1{0%,50%{transform:scale(1.04)}48%,100%{transform:scale(1)}}' +
    '@keyframes ca-s2{0%{opacity:0;transform:scale(1.04)}6%{opacity:1}50%{opacity:1;transform:scale(1)}56%,100%{opacity:0;transform:scale(1)}}' +
    '@media (prefers-reduced-motion:reduce){.work-card-media .ca.ca-seq img{animation:none}}';
  document.head.appendChild(st);
  var orig = window.capaAnimHTML;
  window.capaAnimHTML = function (p) {
    var q = SEQ[p.slug]; if (!q) return orig ? orig(p) : '';
    var h = '';
    for (var i = 0; i < q.n; i++) h += '<img src="assets/projetos/' + p.slug + '/capa/s' + q.f[i] + '.webp" alt="" width="900" height="600" decoding="async"' + (i ? ' loading="lazy"' : '') + '>';
    return '<div class="ca ca-seq' + (q.n === 2 ? ' ca-seq2' : '') + '" style="--ca-bg:' + q.bg + ';--n:' + q.n + ';--s:' + q.s + 's">' + h + '</div>';
  };
})();

/* Case Rino em HTML: símbolo, assinatura, tipografia, cor e padrões refeitos com texto vivo e SVG.
   Os capítulos "Dicas e regras" e "Checklists" seguem o modelo automático (telas do manual). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const SIL = (() => { try { const s = fs.readFileSync(path.join(ROOT, 'assets/v2/img/rino-silhueta.svg'), 'utf8'); return { d: /d="([^"]+)"/.exec(s)[1], vb: /viewBox="([^"]+)"/.exec(s)[1] }; } catch (e) { return { d: '', vb: '0 0 868 400' }; } })();
const sil = (cls = '', fill = 'currentColor') => `<svg class="${cls}" viewBox="${SIL.vb}" aria-hidden="true"><path fill="${fill}" d="${SIL.d}"/></svg>`;
const silURI = (fill, pad = 0) => { const [x, y, w, h] = SIL.vb.split(' ').map(Number); const vb = `${x - pad} ${y - pad} ${w + pad * 2} ${h + pad * 2}`; return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='${vb}'><path fill='${fill}' d='${SIL.d}'/></svg>`)}")`; };

const COR = [
  { n: { pt: 'Azul Rino', en: 'Rino Blue', es: 'Azul Rino' }, hex: '#123458', cmyk: '92 · 65 · 20 · 52', rgb: '18 · 52 · 88', pms: '534', on: '#F1EFEC', pct: 30 },
  { n: { pt: 'Azul Profundo', en: 'Deep Blue', es: 'Azul Profundo' }, hex: '#3A5674', cmyk: '76 · 51 · 25 · 34', rgb: '58 · 86 · 116', pms: '2377', on: '#F1EFEC', pct: 10 },
  { n: { pt: 'Azul Médio', en: 'Mid Blue', es: 'Azul Medio' }, hex: '#617890', cmyk: '62 · 40 · 25 · 20', rgb: '97 · 120 · 144', pms: '2138', on: '#F1EFEC', pct: 7 },
  { n: { pt: 'Azul Névoa', en: 'Mist Blue', es: 'Azul Niebla' }, hex: '#899AAC', cmyk: '48 · 30 · 20 · 10', rgb: '137 · 154 · 172', pms: '2163', on: '#123458', pct: 4 },
  { n: { pt: 'Grafite', en: 'Graphite', es: 'Grafito' }, hex: '#2B2B2B', cmyk: '0 · 0 · 0 · 100', rgb: '43 · 43 · 43', pms: 'Black', on: '#F1EFEC', pct: 3 },
  { n: { pt: 'Off-white', en: 'Off-white', es: 'Blanco roto' }, hex: '#F1EFEC', cmyk: '6 · 5 · 7 · 0', rgb: '241 · 239 · 236', pms: 'Cool Gray 1', on: '#123458', pct: 46 }
];
const tx = (o, l) => typeof o === 'string' ? o : (o[l] || o.pt);

const L = {
  defs: [
    [{ pt: 'Segmento', en: 'Segment', es: 'Segmento' }, { pt: 'Financeiro. Empresa de crédito', en: 'Financial. Credit company', es: 'Financiero. Empresa de crédito' }],
    [{ pt: 'Público', en: 'Audience', es: 'Público' }, { pt: 'Empresarial. B2B', en: 'Corporate. B2B', es: 'Empresarial. B2B' }],
    [{ pt: 'Produtos', en: 'Products', es: 'Productos' }, { pt: 'Antecipações, financiamentos e empréstimos', en: 'Advances, financing and loans', es: 'Anticipos, financiamientos y préstamos' }],
    [{ pt: 'Ramo', en: 'Field', es: 'Rubro' }, { pt: 'Tradicional. Construído com confiança', en: 'Traditional. Built on trust', es: 'Tradicional. Construido con confianza' }],
    [{ pt: 'Atuação', en: 'Active', es: 'Actuación' }, { pt: 'Desde 2019', en: 'Since 2019', es: 'Desde 2019' }]
  ],
  defsLead: { pt: 'Cinco definições fecham o perfil da Rino e são o ponto de partida das decisões do manual.', en: 'Five definitions shape Rino\'s profile and are the starting point for the manual\'s decisions.', es: 'Cinco definiciones cierran el perfil de Rino y son el punto de partida de las decisiones del manual.' },
  valoresT: { pt: 'Valores aplicados à identidade', en: 'Values applied to the identity', es: 'Valores aplicados a la identidad' },
  valores: [
    [{ pt: 'Honestidade', en: 'Honesty', es: 'Honestidad' }, { pt: 'Base das relações com os clientes, garantindo que todas as interações sejam claras e diretas.', en: 'The basis of client relationships, ensuring every interaction is clear and direct.', es: 'Base de las relaciones con los clientes, garantizando que todas las interacciones sean claras y directas.' }],
    [{ pt: 'Confiança', en: 'Trust', es: 'Confianza' }, { pt: 'Pilar de uma empresa de crédito, essencial para que o mercado perceba a Rino como uma parceira sólida e segura.', en: 'A pillar of any credit company, essential for the market to see Rino as a solid, safe partner.', es: 'Pilar de una empresa de crédito, esencial para que el mercado perciba a Rino como un socio sólido y seguro.' }],
    [{ pt: 'Ética', en: 'Ethics', es: 'Ética' }, { pt: 'O guia para a conduta nos negócios, assegurando que as decisões sejam sempre justas e responsáveis.', en: 'The guide for business conduct, making sure decisions are always fair and responsible.', es: 'La guía de conducta en los negocios, asegurando que las decisiones sean siempre justas y responsables.' }]
  ],
  simbT: { pt: 'Simbolismo', en: 'Symbolism', es: 'Simbolismo' },
  simbLead: { pt: 'A figura do rinoceronte como metáfora para a postura e a presença da Rino no mercado.', en: 'The rhinoceros as a metaphor for Rino\'s stance and presence in the market.', es: 'La figura del rinoceronte como metáfora de la postura y la presencia de Rino en el mercado.' },
  simb: [
    [{ pt: 'Forte', en: 'Strong', es: 'Fuerte' }, { pt: 'Assim como o rinoceronte é um dos maiores animais terrestres, a Rino se posiciona demonstrando segurança e determinação em suas ações.', en: 'Just as the rhino is one of the largest land animals, Rino positions itself with confidence and determination.', es: 'Así como el rinoceronte es uno de los mayores animales terrestres, Rino se posiciona con seguridad y determinación.' }],
    [{ pt: 'Robusto', en: 'Robust', es: 'Robusto' }, { pt: 'A estrutura física imponente do animal reflete a solidez da empresa: uma base firme, estável e construída para durar no mercado financeiro.', en: 'The animal\'s imposing build reflects the company\'s solidity: a firm, stable base built to last in the financial market.', es: 'La estructura imponente del animal refleja la solidez de la empresa: una base firme, estable y construida para durar.' }],
    [{ pt: 'Impactante', en: 'Impactful', es: 'Impactante' }, { pt: 'O animal molda a savana e abre caminhos para outras espécies. Da mesma forma, a Rino transforma seu ecossistema e gera oportunidades para parceiros.', en: 'The animal shapes the savanna and opens paths for other species. Likewise, Rino transforms its ecosystem and creates opportunities for partners.', es: 'El animal moldea la sabana y abre caminos para otras especies. Del mismo modo, Rino transforma su ecosistema y genera oportunidades.' }],
    [{ pt: 'Não predatório', en: 'Non-predatory', es: 'No depredador' }, { pt: 'Sendo um herbívoro, o rinoceronte não caça. Isso traduz a filosofia da Rino de crescer e prosperar sem práticas agressivas.', en: 'As a herbivore, the rhino does not hunt. This translates Rino\'s philosophy of growing without aggressive practices.', es: 'Como herbívoro, el rinoceronte no caza. Eso traduce la filosofía de Rino de crecer sin prácticas agresivas.' }]
  ],
  simbolo: { pt: 'Símbolo', en: 'Symbol', es: 'Símbolo' },
  simboloD: { pt: 'Silhueta inscrita em um retângulo de 9X de altura por 20X de largura (razão 20:9). Quatro vértices controlam a proporção: a ponta do chifre, o ponto mais alto do dorso, a curva da cauda e a base da pata dianteira.', en: 'Silhouette inscribed in a 9X by 20X rectangle (20:9 ratio). Four vertices control the proportion: the horn tip, the highest point of the back, the tail curve and the base of the front leg.', es: 'Silueta inscrita en un rectángulo de 9X de alto por 20X de ancho (razón 20:9). Cuatro vértices controlan la proporción: la punta del cuerno, el punto más alto del lomo, la curva de la cola y la base de la pata delantera.' },
  grid: { pt: 'Mostrar grade de construção', en: 'Show construction grid', es: 'Mostrar retícula de construcción' },
  assin: { pt: 'Assinatura tipográfica', en: 'Wordmark', es: 'Firma tipográfica' },
  assinD: { pt: 'A haste do “I” define o módulo de traço (M). R, N e O mantêm a mesma espessura; o espaçamento é ajustado opticamente entre 1,0 e 1,5 M. Área livre mínima: 1 módulo em todo o perímetro.', en: 'The stem of the “I” sets the stroke module (M). R, N and O keep the same weight; spacing is optically adjusted between 1.0 and 1.5 M. Minimum clear space: 1 module on every side.', es: 'El asta de la “I” define el módulo de trazo (M). R, N y O mantienen el mismo grosor; el espaciado se ajusta ópticamente entre 1,0 y 1,5 M. Área libre mínima: 1 módulo en todo el perímetro.' },
  versoes: { pt: 'Versões: vertical, horizontal, em faixa e reduzida', en: 'Versions: vertical, horizontal, band and reduced', es: 'Versiones: vertical, horizontal, en franja y reducida' },
  tipoLead: { pt: 'Duas famílias: Zalando Sans SemiExpanded para display, títulos e legendas; Outfit para subtítulos e textos. Arraste o controle para testar os pesos e escreva no campo para trocar o texto.', en: 'Two families: Zalando Sans SemiExpanded for display, headings and captions; Outfit for subheadings and text. Drag the slider to try the weights and type in the field to change the text.', es: 'Dos familias: Zalando Sans SemiExpanded para display, títulos y leyendas; Outfit para subtítulos y textos. Arrastra el control para probar los pesos y escribe en el campo para cambiar el texto.' },
  uso1: { pt: 'Display, títulos e legendas', en: 'Display, headings and captions', es: 'Display, títulos y leyendas' },
  uso2: { pt: 'Subtítulos e textos', en: 'Subheadings and text', es: 'Subtítulos y textos' },
  peso: { pt: 'Peso', en: 'Weight', es: 'Peso' }, escreva: { pt: 'Escreva aqui', en: 'Type here', es: 'Escribe aquí' },
  amostra: { pt: 'Antecipações, empréstimos e financiamentos', en: 'Advances, loans and financing', es: 'Anticipos, préstamos y financiamientos' },
  corLead: { pt: 'HEX para telas, CMYK para impressão comum e PANTONE para tinta especial. Clique numa cor para copiar o HEX.', en: 'HEX for screens, CMYK for standard print and PANTONE for spot ink. Click a color to copy its HEX.', es: 'HEX para pantallas, CMYK para impresión común y PANTONE para tinta especial. Haz clic en un color para copiar el HEX.' },
  prop: { pt: 'Proporção de uso', en: 'Usage proportion', es: 'Proporción de uso' },
  propD: { pt: 'Off-white e Azul Rino sustentam a identidade. As demais entram como apoio, nunca como protagonistas.', en: 'Off-white and Rino Blue carry the identity. The others are support, never the lead.', es: 'Blanco roto y Azul Rino sostienen la identidad. Las demás son apoyo, nunca protagonistas.' },
  comb: { pt: 'Combinações', en: 'Combinations', es: 'Combinaciones' }, ok: { pt: 'Aprovadas', en: 'Approved', es: 'Aprobadas' }, no: { pt: 'Evitar', en: 'Avoid', es: 'Evitar' },
  pad: { pt: 'Padrões', en: 'Patterns', es: 'Patrones' },
  padD: { pt: 'A silhueta e a assinatura se repetem em grade para fundos, embalagens e peças. Passe o mouse sobre o padrão.', en: 'The silhouette and the wordmark repeat on a grid for backgrounds, packaging and pieces. Hover over the pattern.', es: 'La silueta y la firma se repiten en retícula para fondos, empaques y piezas. Pasa el mouse sobre el patrón.' },
  padN: [{ pt: 'Silhueta', en: 'Silhouette', es: 'Silueta' }, { pt: 'Tipográfico', en: 'Typographic', es: 'Tipográfico' }, { pt: 'Misto', en: 'Mixed', es: 'Mixto' }],
  tex: { pt: 'Texturas e iconografia', en: 'Textures and iconography', es: 'Texturas e iconografía' },
  copied: { pt: 'copiado', en: 'copied', es: 'copiado' }
};

export default {
  cor: '#123458', ct: '#F1EFEC', c2: '#617890',
  skip: ['Início'],
  head: () => `<link rel="preload" href="/assets/fonts/zalando-sans-semiexpanded-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<style>
@font-face{font-family:'Zalando Sans SemiExpanded';font-display:swap;font-weight:200 900;src:url(/assets/fonts/zalando-sans-semiexpanded-latin-wght-normal.woff2) format('woff2')}
@font-face{font-family:'Zalando Sans SemiExpanded';font-display:swap;font-weight:200 900;src:url(/assets/fonts/zalando-sans-semiexpanded-latin-ext-wght-normal.woff2) format('woff2');unicode-range:U+0100-02BA,U+1E00-1EFF}
@font-face{font-family:'Outfit';font-display:swap;font-weight:100 900;src:url(/assets/fonts/outfit-latin-wght-normal.woff2) format('woff2')}
@font-face{font-family:'Outfit';font-display:swap;font-weight:100 900;src:url(/assets/fonts/outfit-latin-ext-wght-normal.woff2) format('woff2');unicode-range:U+0100-02BA,U+1E00-1EFF}
.rz{font-family:'Zalando Sans SemiExpanded',sans-serif}.ro{font-family:'Outfit',sans-serif}
.r-cover{position:absolute;inset:0;display:grid;place-items:center;background:#123458;color:#F1EFEC;overflow:hidden}
.r-cover__pat{position:absolute;inset:-10%;background:${silURI('#3A5674')} 0 0/120px 56px;opacity:.35;transform:translate3d(calc(var(--mx,0)*-30px),calc(var(--my,0)*-30px),0) rotate(-6deg);transition:transform .8s var(--ease)}
.r-cover__lock{position:relative;display:flex;align-items:center;gap:clamp(14px,2.4vw,36px)}
.r-cover__word{font:800 clamp(2.6rem,9vw,8rem)/1 'Zalando Sans SemiExpanded',sans-serif;letter-spacing:-.01em}
.r-cover__sil{width:clamp(110px,22vw,320px);height:auto;color:#F1EFEC}
@media (prefers-reduced-motion:no-preference){html.js .r-cover__sil{animation:r-walk 1.4s var(--ease) .7s both}html.js .r-cover__word{animation:pop 1s var(--ease) .5s both}}
@keyframes r-walk{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:none}}
.r-defs{border-top:1px solid var(--line)}
.r-defs div{display:grid;grid-template-columns:minmax(90px,1fr) 3fr;gap:16px;align-items:baseline;padding:18px 0;border-bottom:1px solid var(--line)}
.r-defs dt{color:var(--muted);font:500 14px/1.2 'Outfit',sans-serif}
.r-defs dd{font:500 clamp(1.3rem,3vw,2.4rem)/1.15 'Zalando Sans SemiExpanded',sans-serif;color:#123458;letter-spacing:-.01em}
.r-cols{display:grid;gap:28px;margin-top:clamp(56px,7vw,96px)}
@media(min-width:800px){.r-cols--3{grid-template-columns:repeat(3,1fr)}.r-cols--4{grid-template-columns:repeat(4,1fr)}}
.r-cols h4{font:700 clamp(1.3rem,2vw,1.6rem)/1.1 'Outfit',sans-serif;color:#123458;margin-bottom:10px}
.r-cols p{color:var(--muted);font-family:'Outfit',sans-serif;font-size:1.02rem}
.r-cols .r-cols__t{grid-column:1/-1;font:600 12px/1 var(--f-body);letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}.r-cols .r-cols__lead{grid-column:1/-1;margin-top:-14px;max-width:60ch}
.r-card{padding:22px;border-radius:14px;background:var(--paper);border:1px solid var(--line);transition:transform .5s var(--ease),border-color .3s,background .3s}
.r-card:hover{transform:translateY(-6px);border-color:#123458}
.r-sym{display:grid;gap:32px;align-items:center}
@media(min-width:1000px){.r-sym{grid-template-columns:1.35fr 1fr;gap:64px}}
.r-stage{container-type:inline-size;position:relative;padding:clamp(28px,5vw,64px);border-radius:16px;background:#F1EFEC;border:1px solid var(--line);overflow:hidden}
.r-stage svg{width:100%;height:auto;overflow:visible}
.r-sil{fill:#123458;transition:opacity .5s}
.r-g line,.r-g rect{stroke:#617890;stroke-width:1;vector-effect:non-scaling-stroke;fill:none;opacity:0;transition:opacity .5s}
.r-g .r-diag{stroke-dasharray:5 6;stroke:#899AAC}
.r-g circle{fill:none;stroke:#F2541B;stroke-width:2;vector-effect:non-scaling-stroke;opacity:0;transform-box:fill-box;transform-origin:center;transition:opacity .4s,transform .6s cubic-bezier(.34,1.56,.64,1);transform:scale(.2)}
.r-g text{font:600 12px/1 ui-monospace,monospace;fill:#123458;opacity:0;transition:opacity .4s}
.is-grid .r-g line,.is-grid .r-g rect,.is-grid .r-g text{opacity:1}
.is-grid .r-g circle{opacity:1;transform:none}
.is-grid .r-sil{opacity:.86}
.r-g line{transition-delay:calc(var(--k,0)*12ms)}
.r-word{position:relative;display:inline-block;font:800 clamp(3rem,24cqi,13rem)/.8 'Zalando Sans SemiExpanded',sans-serif;color:#3A5674;letter-spacing:.02em;padding:.08em 0}
.r-word__g{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .5s;background:repeating-linear-gradient(90deg,transparent 0 calc(var(--m) - 1px),#F2541B calc(var(--m) - 1px) var(--m));-webkit-mask:linear-gradient(#000,#000);border-block:1.5px solid #F2541B}
.is-grid .r-word__g{opacity:.55}
.r-toggle{display:inline-flex;align-items:center;gap:10px;margin-top:20px;padding:10px 16px;border-radius:999px;border:1.5px solid #123458;background:transparent;color:#123458;font:600 14px/1 var(--f-body);cursor:pointer}
.r-toggle[aria-pressed="true"]{background:#123458;color:#F1EFEC}
.r-toggle i{width:12px;height:12px;border:1.5px solid currentColor;border-radius:2px;background:linear-gradient(currentColor,currentColor) center/1.5px 100% no-repeat,linear-gradient(currentColor,currentColor) center/100% 1.5px no-repeat}
.r-type{display:grid;gap:20px}
@media(min-width:1000px){.r-type{grid-template-columns:1fr 1fr}}
.r-spec{display:grid;gap:18px;padding:clamp(22px,3vw,36px);border-radius:16px;background:#123458;color:#F1EFEC;overflow:hidden}
.r-spec--l{background:#F1EFEC;color:#123458;border:1px solid var(--line)}
.r-spec__h{display:flex;justify-content:space-between;gap:12px;align-items:baseline;font:600 12px/1.3 var(--f-body);letter-spacing:.1em;text-transform:uppercase;opacity:.8}
.r-spec__aa{font-size:clamp(6rem,14vw,11rem);line-height:.85;letter-spacing:-.02em;transition:font-weight .2s}
.r-spec__s{font-size:clamp(1.5rem,2.8vw,2.3rem);line-height:1.1;min-height:2.2em;overflow-wrap:anywhere;transition:font-weight .2s}
.r-spec__gl{font-size:14px;line-height:1.7;opacity:.75;letter-spacing:.06em;overflow-wrap:anywhere}
.r-ctl{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;font:600 12px/1 var(--f-body)}
.r-ctl input[type=range]{width:100%;accent-color:currentColor}
.r-in{width:100%;padding:12px 14px;border-radius:10px;border:1.5px solid currentColor;background:transparent;color:inherit;font:500 15px/1 var(--f-body)}
.r-in::placeholder{color:inherit;opacity:.6}
.r-pal{display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))}
.r-sw{position:relative;display:grid;align-content:space-between;gap:48px;min-height:230px;padding:20px;border-radius:14px;border:1px solid rgba(0,0,0,.06);background:var(--h);color:var(--o);text-align:left;cursor:pointer;font:inherit;transition:transform .5s var(--ease),box-shadow .4s}
.r-sw:hover{transform:translateY(-6px) rotate(-.6deg);box-shadow:0 30px 40px -30px rgba(17,17,17,.7)}
.r-sw__n{font:700 1.35rem/1 'Zalando Sans SemiExpanded',sans-serif}
.r-sw dl{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font:500 13px/1.3 var(--f-body)}
.r-sw dt{opacity:.7}.r-sw dd{text-align:right;font-variant-numeric:tabular-nums}
.r-bar{display:flex;height:clamp(120px,22vw,260px);margin-top:20px;border-radius:12px;overflow:hidden;border:1px solid var(--line)}
.r-bar span{flex:0 0 0;background:var(--h);transition:flex-basis 1.4s var(--ease);transition-delay:calc(var(--k)*.1s)}
.r-bar.is-in span{flex-basis:calc(var(--p)*1%)}
.r-bar__l{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:12px;font:500 13px/1.3 var(--f-body);color:var(--muted)}
.r-bar__l b{color:var(--ink);font-variant-numeric:tabular-nums}
.r-combo{display:grid;gap:12px;grid-template-columns:repeat(2,1fr)}@media(min-width:700px){.r-combo{grid-template-columns:repeat(4,1fr)}}
.r-combo div{aspect-ratio:1;display:grid;place-items:center;border-radius:12px;background:var(--b);color:var(--f);font:600 clamp(2rem,4vw,3rem)/1 'Zalando Sans SemiExpanded',sans-serif;border:1px solid rgba(0,0,0,.06);transition:transform .5s var(--ease)}
.r-combo div:hover{transform:scale(1.05)}
.r-combo--no div{position:relative}
.r-combo--no div::after{content:"";position:absolute;inset:12%;background:linear-gradient(45deg,transparent calc(50% - 1px),#F2541B calc(50% - 1px) calc(50% + 1px),transparent calc(50% + 1px))}
.r-tabs{display:flex;gap:6px;margin-bottom:16px}
.r-tabs [role=tab]{padding:8px 14px;border-radius:999px;border:1.5px solid #123458;background:transparent;color:#123458;font:600 13px/1 var(--f-body);cursor:pointer}
.r-tabs [aria-selected=true]{background:#123458;color:#F1EFEC}
.r-pats{display:grid;gap:14px}
@media(min-width:900px){.r-pats{grid-template-columns:1.4fr 1fr;grid-template-rows:1fr 1fr}.r-pats>:first-child{grid-row:1/3}}
.r-pat{position:relative;min-height:240px;border-radius:14px;overflow:hidden;background:var(--b)}
.r-pat__l{position:absolute;left:14px;bottom:14px;padding:7px 12px;border-radius:999px;background:#F1EFEC;color:#123458;font:600 12px/1 var(--f-body);z-index:1}
.r-pat__bg{position:absolute;inset:-12%;transform:translate3d(calc(var(--mx,0)*-40px),calc(var(--my,0)*-40px),0);transition:transform .9s var(--ease)}
.r-pat--s .r-pat__bg{background:${silURI('#3A5674', 170)} 0 0/150px 92px repeat,${silURI('#3A5674', 170)} 75px 46px/150px 92px repeat,#123458}
.r-pat--m .r-pat__bg{display:grid;align-content:start;gap:14px;padding-top:10px;background:#F1EFEC;color:#C3CAD4}.r-pat--m .r-pat__bg div{display:flex;gap:26px;align-items:center;white-space:nowrap;font:800 30px/1 'Zalando Sans SemiExpanded',sans-serif;letter-spacing:.04em}.r-pat--m .r-pat__bg div:nth-child(even){transform:translateX(-50px)}.r-pat--m svg{width:72px;height:34px;flex:none}
.r-pat--t .r-pat__bg{display:grid;align-content:start;gap:2px;color:#3A5674;font:800 34px/1 'Zalando Sans SemiExpanded',sans-serif;white-space:nowrap;letter-spacing:.06em;background:#2B2B2B}
.r-pat--t .r-pat__bg span:nth-child(odd){transform:translateX(-46px)}
.r-small{margin-top:clamp(40px,5vw,72px)}
.r-navy{color:#123458}
html[data-theme=dark] .r-navy,html[data-theme=dark] .r-defs dd,html[data-theme=dark] .r-cols h4{color:#B9C7D8}
html[data-theme=dark] .r-toggle{color:#B9C7D8;border-color:#B9C7D8}html[data-theme=dark] .r-toggle[aria-pressed=true]{background:#B9C7D8;color:#123458}
html[data-theme=dark] .r-card{background:#1a1a1a}html[data-theme=dark] .r-tabs [role=tab]{color:#B9C7D8;border-color:#B9C7D8}html[data-theme=dark] .r-tabs [aria-selected=true]{background:#B9C7D8;color:#123458}
</style>`,
  cover: (c) => `<div class="r-cover" data-pattern-move><div class="r-cover__pat" aria-hidden="true"></div><div class="r-cover__lock" role="img" aria-label="Rino"><span class="r-cover__word">RINO</span>${sil('r-cover__sil')}</div></div>`,
  leads: {
    'Quem somos': L.defsLead, 'Logo': { pt: 'O sistema tem símbolo (silhueta), assinatura tipográfica e quatro arranjos para formatos diferentes.', en: 'The system has a symbol (silhouette), a wordmark and four lockups for different formats.', es: 'El sistema tiene símbolo (silueta), firma tipográfica y cuatro composiciones para distintos formatos.' },
    'Tipografia': L.tipoLead, 'Cor': L.corLead, 'Elementos': L.padD
  },
  chapters: {
    'Quem somos': ({ l }) => `
<dl class="r-defs">${L.defs.map(([k, v]) => `<div data-reveal><dt>${tx(k, l)}</dt><dd>${tx(v, l)}</dd></div>`).join('')}</dl>
<div class="r-cols r-cols--3"><p class="r-cols__t">${tx(L.valoresT, l)}</p>${L.valores.map(([k, v]) => `<div class="r-card" data-reveal><h4>${tx(k, l)}</h4><p>${tx(v, l)}</p></div>`).join('')}</div>
<div class="r-cols r-cols--4"><p class="r-cols__t">${tx(L.simbT, l)}</p><p class="r-cols__lead">${tx(L.simbLead, l)}</p>${L.simb.map(([k, v]) => `<div class="r-card" data-reveal><h4>${tx(k, l)}</h4><p>${tx(v, l)}</p></div>`).join('')}</div>`,

    'Logo': ({ l, gallery }) => {
      const [, , W, H] = SIL.vb.split(' ').map(Number);
      const X = H / 9; // módulo
      let k = 0, g = '';
      for (let i = 0; i <= 20; i++) g += `<line x1="${(i * W / 20).toFixed(1)}" y1="0" x2="${(i * W / 20).toFixed(1)}" y2="${H}" style="--k:${k++}"/>`;
      for (let j = 0; j <= 9; j++) g += `<line x1="0" y1="${(j * X).toFixed(1)}" x2="${W}" y2="${(j * X).toFixed(1)}" style="--k:${k++}"/>`;
      g += `<line class="r-diag" x1="0" y1="0" x2="${W}" y2="${H}"/><line class="r-diag" x1="0" y1="${H}" x2="${W}" y2="0"/>`;
      g += `<circle cx="${W * 0.297}" cy="2" r="12"/><circle cx="${W - 4}" cy="${H * 0.6}" r="12"/><circle cx="4" cy="${H * 0.55}" r="12"/><circle cx="${W * 0.23}" cy="${H - 2}" r="12"/>`;
      g += `<text x="0" y="-14">X 0</text><text x="${W - 30}" y="${H + 24}">20X</text><text x="${W + 10}" y="${X}">9X</text>`;
      return `
<div class="r-sym" id="r-sym">
  <div class="r-stage" data-reveal><svg viewBox="-20 -30 ${W + 60} ${H + 64}" role="img" aria-label="${tx(L.simbolo, l)} Rino"><path class="r-sil" d="${SIL.d}"/><g class="r-g">${g}<rect x="0" y="0" width="${W}" height="${H}"/></g></svg></div>
  <div data-reveal><h3 class="h3 r-navy">${tx(L.simbolo, l)}</h3><p class="chapter__d" style="margin-top:14px">${tx(L.simboloD, l)}</p>
  <button class="r-toggle" type="button" data-toggle-class="is-grid" data-target="#r-sym" aria-pressed="false"><i></i>${tx(L.grid, l)}</button></div>
</div>
<div class="r-sym r-small" id="r-word">
  <div class="r-stage" data-reveal style="text-align:center;padding-block:clamp(40px,7vw,90px)"><span class="r-word" style="--m:.155em">RINO<span class="r-word__g" aria-hidden="true"></span></span></div>
  <div data-reveal><h3 class="h3 r-navy">${tx(L.assin, l)}</h3><p class="chapter__d" style="margin-top:14px">${tx(L.assinD, l)}</p>
  <button class="r-toggle" type="button" data-toggle-class="is-grid" data-target="#r-word" aria-pressed="false"><i></i>${tx(L.grid, l)}</button></div>
</div>
<div class="r-small"><p class="r-cols__t" style="margin-bottom:20px;font:600 12px/1 var(--f-body);letter-spacing:.14em;text-transform:uppercase;color:var(--muted)">${tx(L.versoes, l)}</p>${gallery(13, 16, 'logo', { pairFirst: true })}</div>`;
    },

    'Tipografia': ({ l }) => `
<div class="r-type">
  <div class="r-spec">
    <p class="r-spec__h"><span>Zalando Sans SemiExpanded</span><span>${tx(L.uso1, l)}</span></p>
    <p class="r-spec__aa rz" id="r-aa1" aria-hidden="true">Aa</p>
    <p class="r-spec__s rz" id="r-s1">Rino</p>
    <label class="r-ctl"><span>${tx(L.peso, l)}</span><input type="range" id="r-w1" min="200" max="900" step="10" value="700" data-wght="#r-s1"><output data-wght-out="r-w1">700</output></label>
    <input class="r-in" type="text" placeholder="${tx(L.escreva, l)}" data-specimen-input="#r-s1" aria-label="${tx(L.escreva, l)}">
    <p class="r-spec__gl rz" aria-hidden="true">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789 ÁÉÍÓÚÃÕÇ &amp;%$@</p>
  </div>
  <div class="r-spec r-spec--l">
    <p class="r-spec__h"><span>Outfit</span><span>${tx(L.uso2, l)}</span></p>
    <p class="r-spec__aa ro" aria-hidden="true">Aa</p>
    <p class="r-spec__s ro" id="r-s2">${tx(L.amostra, l)}</p>
    <label class="r-ctl"><span>${tx(L.peso, l)}</span><input type="range" id="r-w2" min="100" max="900" step="10" value="400" data-wght="#r-s2"><output data-wght-out="r-w2">400</output></label>
    <input class="r-in" type="text" placeholder="${tx(L.escreva, l)}" data-specimen-input="#r-s2" aria-label="${tx(L.escreva, l)}">
    <p class="r-spec__gl ro" aria-hidden="true">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789 ÁÉÍÓÚÃÕÇ &amp;%$@</p>
  </div>
</div>`,

    'Cor': ({ l }) => {
      const ok = [['#123458', '#F1EFEC'], ['#3A5674', '#F1EFEC'], ['#F1EFEC', '#123458'], ['#FFFFFF', '#3A5674'], ['#617890', '#F1EFEC'], ['#2B2B2B', '#F1EFEC'], ['#2B2B2B', '#899AAC'], ['#F1EFEC', '#2B2B2B']];
      const no = [['#2B2B2B', '#123458'], ['#FFFFFF', '#F1EFEC'], ['#899AAC', '#617890'], ['#617890', '#899AAC'], ['#3A5674', '#2B2B2B'], ['#123458', '#3A5674'], ['#617890', '#123458'], ['#F1EFEC', '#899AAC']];
      return `
<div class="r-pal">${COR.map((c) => `<button class="r-sw" type="button" style="--h:${c.hex};--o:${c.on}" data-copy="${c.hex}" data-copy-msg="${c.hex} ${tx(L.copied, l)}" data-reveal><span class="r-sw__n">${tx(c.n, l)}</span><dl><dt>HEX</dt><dd>${c.hex}</dd><dt>CMYK</dt><dd>${c.cmyk}</dd><dt>RGB</dt><dd>${c.rgb}</dd><dt>PANTONE</dt><dd>${c.pms}</dd></dl></button>`).join('')}</div>
<div class="r-small" data-reveal><h3 class="h3 r-navy">${tx(L.prop, l)}</h3><p class="chapter__d" style="margin-top:12px">${tx(L.propD, l)}</p>
<div class="r-bar" data-grow>${[...COR].sort((a, b) => b.pct - a.pct).map((c, k) => `<span style="--h:${c.hex};--p:${c.pct};--k:${k}" title="${tx(c.n, l)} ${c.pct}%"></span>`).join('')}</div>
<p class="r-bar__l">${[...COR].sort((a, b) => b.pct - a.pct).map((c) => `<span><b>${c.pct}%</b> ${tx(c.n, l)}</span>`).join('')}</p></div>
<div class="r-small" data-tabs><div class="r-tabs" role="tablist"><button role="tab" aria-selected="true" aria-controls="r-ok">${tx(L.ok, l)}</button><button role="tab" aria-selected="false" aria-controls="r-no">${tx(L.no, l)}</button></div>
<div id="r-ok" role="tabpanel" class="r-combo">${ok.map(([b, f]) => `<div style="--b:${b};--f:${f}">Aa</div>`).join('')}</div>
<div id="r-no" role="tabpanel" class="r-combo r-combo--no" hidden>${no.map(([b, f]) => `<div style="--b:${b};--f:${f}">Aa</div>`).join('')}</div></div>`;
    },

    'Elementos': ({ l, gallery }) => `
<div class="r-pats">
  <div class="r-pat r-pat--s" data-pattern-move data-reveal><div class="r-pat__bg" aria-hidden="true"></div><span class="r-pat__l">${tx(L.padN[0], l)}</span></div>
  <div class="r-pat r-pat--t" data-pattern-move data-reveal><div class="r-pat__bg" aria-hidden="true">${Array.from({ length: 9 }, () => `<span>${'RINO '.repeat(14)}</span>`).join('')}</div><span class="r-pat__l">${tx(L.padN[1], l)}</span></div>
  <div class="r-pat r-pat--m" data-pattern-move data-reveal><div class="r-pat__bg" aria-hidden="true"><svg width="0" height="0" style="position:absolute"><symbol id="r-s" viewBox="${SIL.vb}"><path fill="currentColor" d="${SIL.d}"/></symbol></svg>${Array.from({ length: 8 }, (_, r) => `<div>${Array.from({ length: 9 }, (_, k) => (k + r) % 2 ? '<span>RINO</span>' : '<svg><use href="#r-s"/></svg>').join('')}</div>`).join('')}</div><span class="r-pat__l">${tx(L.padN[2], l)}</span></div>
</div>
<div class="r-small"><p style="margin-bottom:20px;font:600 12px/1 var(--f-body);letter-spacing:.14em;text-transform:uppercase;color:var(--muted)">${tx(L.tex, l)}</p>${gallery(31, 35, 'el', { pairFirst: true })}</div>`
  }
};

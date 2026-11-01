/* =========================================================================
   Miniaturas de compartilhamento (og:image) + páginas estáticas com metatags
   Rode sempre que entrar projeto ou artigo novo:
     1) python3 -m http.server 8080        (na raiz do site, em outro terminal)
     2) node scripts/miniaturas.mjs
   Gera:
     assets/og/projetos/<pasta>.jpg  — a capa do card do projeto (1200×800, igual ao card)
     assets/og/artigos/<slug>.jpg    — a capa do artigo (1200×630)
     artigos/<slug>/index.html       — página leve com metatags (WhatsApp, LinkedIn etc. não rodam JS)
   e atualiza og:image dos projetos (projetos/<pasta>/index.html) e das páginas fixas.
   ========================================================================= */
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // no Mac: npm i -g playwright && npx playwright install chromium
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = 'https://henrictrl.github.io';
const LOCAL = process.env.LOCAL || 'http://localhost:8080';
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true }); fs.writeFileSync(path.join(ROOT, f), s); };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const data = (file) => { const ctx = { window: {} }; vm.runInNewContext(read(file), ctx); return ctx.window; };

const { PROJETOS } = data('assets/data/projetos.js');
const { ARTIGOS } = data('assets/data/artigos.js');
// mesmos apelidos de rota do index.html (cleanProjectUrl)
const ALIAS = { 'rino-site': 'rino-cores', 'o-hobbit': 'hobbit', 'metaprojeto': 'portfolio', 'dash-geral': 'visao-geral' };
const articleSlug = (a) => decodeURIComponent(new URL(a.u, SITE).pathname.split('/').filter(Boolean).pop() || '');

// bloco de metatags; tags antigas de og/twitter são removidas antes de inserir
const ogBlock = ({ title, desc, url, img, w, h }) => `<!-- compartilhamento (gerado por scripts/miniaturas.mjs) -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Henrique Marinhos">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:image:secure_url" content="${img}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="${w}">
<meta property="og:image:height" content="${h}">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${img}">
`;
const setOg = (html, block) => html
  .replace(/<!-- compartilhamento \(gerado[^>]*-->\n/g, '')
  .replace(/^[ \t]*<meta (property="og:|name="twitter:)[^>]*>[ \t]*(\n|$)/gm, '')
  .replace(/<meta property="og:image:width"[^>]*><meta property="og:image:height"[^>]*>\n?/g, '')
  .replace(/<\/head>/, block + '</head>');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });

/* ---------- 1. Projetos: captura a capa do próprio card, em 1200×800 ---------- */
await page.goto(LOCAL + '/projetos/?nomotion', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: `
  #work-case-grid { grid-template-columns: 1200px !important; gap: 40px !important; }
  #work-case-grid .work-card-media { width: 1200px !important; height: 800px !important; aspect-ratio: auto !important; border-radius: 0 !important; margin: 0 !important; }
  #mx-cursor, header { display: none !important; }` });
await page.waitForTimeout(800);
const onGrid = await page.$$eval('#work-case-grid .work-card[data-pj]', (els) => els.map((e) => e.dataset.pj));
const projImg = {};
for (const slug of onGrid) {
  const media = page.locator(`#work-case-grid .work-card[data-pj="${slug}"] .work-card-media`);
  await media.scrollIntoViewIfNeeded();
  await page.waitForFunction((s) => [...document.querySelectorAll(`.work-card[data-pj="${s}"] img`)].every((i) => i.complete), slug, { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(3000); // capas animadas: espera a animação assentar
  const file = `assets/og/projetos/${ALIAS[slug] || slug}.jpg`;
  const box = await media.boundingBox(); // recorte exato 1200×800 (evita 1 px a mais por arredondamento)
  await page.screenshot({ path: path.join(ROOT, file), type: 'jpeg', quality: 82, clip: { x: Math.round(box.x), y: Math.round(box.y), width: 1200, height: 800 } });
  projImg[slug] = file;
}
// fora da grade (projetos ocultos da lista): a capa do cadastro, recortada como no card
const solo = await browser.newPage({ viewport: { width: 1200, height: 800 } });
for (const p of PROJETOS) {
  if (projImg[p.slug] || !p.capa) continue;
  const src = /^https?:/.test(p.capa) ? p.capa : `${LOCAL}/${p.capa}`;
  await solo.setContent(`<body style="margin:0;background:#f5f5f5"><img src="${src}" style="width:1200px;height:800px;object-fit:cover;display:block"></body>`);
  await solo.waitForFunction(() => document.images[0].complete, null, { timeout: 15000 }).catch(() => {});
  const file = `assets/og/projetos/${ALIAS[p.slug] || p.slug}.jpg`;
  await solo.screenshot({ path: path.join(ROOT, file), type: 'jpeg', quality: 82 });
  projImg[p.slug] = file;
}
// metatags nas páginas de projeto (pasta do apelido e pasta do slug original, se existir)
for (const p of PROJETOS) {
  for (const dir of new Set([p.slug, ALIAS[p.slug]].filter(Boolean))) {
    const f = `projetos/${dir}/index.html`;
    if (!fs.existsSync(path.join(ROOT, f)) || !projImg[p.slug]) continue;
    const html = read(f);
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || `${p.titulo} — Henrique Marinhos`;
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
    write(f, setOg(html, ogBlock({ title, desc, url: `${SITE}/projetos/${ALIAS[p.slug] || p.slug}/`, img: `${SITE}/${projImg[p.slug]}`, w: 1200, h: 800 })));
  }
}

/* ---------- 2. Artigos: capa do artigo em 1200×630 + página com metatags ---------- */
const stub = read('404.html'); // mesma página leve que carrega o site e abre o artigo pela URL
let nArt = 0;
for (const a of ARTIGOS) {
  const slug = a.project ? '' : articleSlug(a);
  if (!slug || !a.img) continue;
  const local = a.img.startsWith('../') ? 'assets/' + a.img.slice(3) : 'assets/artigos/' + a.img;
  const fit = a.fit === 'contain' ? 'contain' : 'cover';
  const pos = a.cropTop ? '50% 0%' : (a.pos || '50% 50%');
  await solo.setViewportSize({ width: 1200, height: 630 });
  await solo.setContent(`<body style="margin:0;background:${a.bg || '#f5f5f5'}"><img src="${LOCAL}/${local}" style="width:1200px;height:630px;object-fit:${fit};object-position:${pos};display:block"></body>`);
  await solo.waitForFunction(() => document.images[0].complete, null, { timeout: 15000 }).catch(() => {});
  const img = `assets/og/artigos/${slug}.jpg`;
  await solo.screenshot({ path: path.join(ROOT, img), type: 'jpeg', quality: 82 });
  const title = `${a.t} — Henrique Marinhos`;
  const html = setOg(stub.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`),
    ogBlock({ title, desc: a.site || 'Henrique Marinhos', url: `${SITE}/artigos/${encodeURIComponent(slug)}/`, img: `${SITE}/${img}`, w: 1200, h: 630 }));
  write(`artigos/${slug}/index.html`, html);
  nArt++;
}

/* ---------- 3. Páginas fixas: miniatura geral do site ---------- */
const DESC = 'Estratégias de comunicação críticas e funcionais para marcas. Design gráfico, social media, redação e landing pages.';
const fixed = [['index.html', '/', 'Henrique Marinhos — Designer e relações-públicas'], ['404.html', '/', 'Henrique Marinhos — Designer e relações-públicas'],
  ['sobre/index.html', '/sobre/', 'Sobre — Henrique Marinhos'], ['projetos/index.html', '/projetos/', 'Projetos — Henrique Marinhos'], ['artigos/index.html', '/artigos/', 'Artigos — Henrique Marinhos']];
for (const [f, url, title] of fixed) {
  write(f, setOg(read(f), ogBlock({ title, desc: DESC, url: SITE + url, img: `${SITE}/assets/img/og.jpg`, w: 1200, h: 630 })));
}

await browser.close();
console.log(`projetos: ${Object.keys(projImg).length} miniaturas · artigos: ${nArt} páginas · páginas fixas: ${fixed.length}`);

/* =========================================================================
   Miniaturas de compartilhamento (og:image) + páginas estáticas com metatags
   Rode sempre que entrar projeto ou artigo novo:
     1) python3 -m http.server 8080        (na raiz do site, em outro terminal)
     2) node scripts/miniaturas.mjs          (FORCE=1 node scripts/miniaturas.mjs refaz todas as imagens)
   No GitHub isso roda sozinho: .github/workflows/miniaturas.yml
   Gera:
     assets/og/projetos/<pasta>.jpg   capa do card do projeto (1200×800, igual ao card)
     assets/og/artigos/<slug>.jpg     capa do artigo (1200×630)
     páginas leves em PT, EN e ES     /, /sobre/, /projetos/, /artigos/, cada projeto e cada artigo
                                      (PT sem prefixo; EN em /en/..., ES em /es/...). Cada uma tem metatags
                                      de compartilhamento no idioma, canonical, hreflang, JSON-LD e texto legível
                                      sem JS; ao abrir, carregam o site (index.html ou projeto.html).
     sitemap.xml e robots.txt
   ========================================================================= */
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // no Mac: npm i -g playwright && npx playwright install chromium
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = 'https://henrictrl.github.io';
const LOCAL = process.env.LOCAL || 'http://localhost:8080';
const FORCE = process.env.FORCE === '1'; // FORCE=1 refaz todas as imagens; sem isso, só cria as que faltam
const has = (f) => !FORCE && fs.existsSync(path.join(ROOT, f));
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true }); fs.writeFileSync(path.join(ROOT, f), s); };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const data = (file) => { const ctx = { window: {}, document: { documentElement: { lang: 'pt' } } }; /* títulos traduzidos leem o <html lang> */ vm.runInNewContext(read(file), ctx); return ctx.window; };

const { PROJETOS } = data('assets/data/projetos.js');
const { ARTIGOS } = data('assets/data/artigos.js');
// mesmos apelidos de rota do index.html (cleanProjectUrl)
const ALIAS = { 'rino-site': 'rino-cores', 'o-hobbit': 'hobbit', 'metaprojeto': 'portfolio', 'dash-geral': 'visao-geral' };
const articleSlug = (a) => decodeURIComponent(new URL(a.u, SITE).pathname.split('/').filter(Boolean).pop() || '');

const LANGS = ['pt', 'en', 'es'];
const PRE = { pt: '', en: '/en', es: '/es' };
const LOCALE = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };
const HTML_LANG = { pt: 'pt-br', en: 'en', es: 'es' };
const T = (o, l) => (o && (o[l] || o.pt)) || '';
const W = { // textos das páginas leves
  site: { pt: 'Henrique Marinhos — Designer e relações-públicas', en: 'Henrique Marinhos — Designer and PR specialist', es: 'Henrique Marinhos — Diseñador y relacionista público' },
  desc: { pt: 'Estratégias de comunicação críticas e funcionais para marcas. Design gráfico, social media, redação e landing pages.',
          en: 'Critical, functional communication strategies for brands. Graphic design, social media, copywriting and landing pages.',
          es: 'Estrategias de comunicación críticas y funcionales para marcas. Diseño gráfico, redes sociales, redacción y landing pages.' },
  home: { pt: 'Início', en: 'Home', es: 'Inicio' }, sobre: { pt: 'Sobre', en: 'About', es: 'Sobre mí' },
  projetos: { pt: 'Projetos', en: 'Projects', es: 'Proyectos' }, artigos: { pt: 'Artigos', en: 'Articles', es: 'Artículos' },
  todosP: { pt: 'Todos os projetos', en: 'All projects', es: 'Todos los proyectos' }, todosA: { pt: 'Todos os artigos', en: 'All articles', es: 'Todos los artículos' },
  ler: { pt: 'Ler no', en: 'Read on', es: 'Leer en' }, job: { pt: 'Designer e relações-públicas', en: 'Designer and PR specialist', es: 'Diseñador y relacionista público' },
};
const hreflang = (p) => LANGS.map((l) => `<link rel="alternate" hreflang="${l === 'pt' ? 'pt-BR' : l}" href="${SITE}${PRE[l]}${p}">`).join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${SITE}${p}">\n`;

// bloco de metatags (canonical, hreflang, JSON-LD, Open Graph); a versão anterior é removida antes de inserir
const ogBlock = ({ title, desc, path: p, lang = 'pt', img, w, h, ld = null }) => `<!-- compartilhamento (gerado por scripts/miniaturas.mjs) -->
<link rel="canonical" href="${SITE}${PRE[lang]}${p}">
${hreflang(p)}${ld ? `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>\n` : ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="Henrique Marinhos">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}${PRE[lang]}${p}">
<meta property="og:image" content="${img}">
<meta property="og:image:secure_url" content="${img}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="${w}">
<meta property="og:image:height" content="${h}">
<meta property="og:locale" content="${LOCALE[lang]}">\n${LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${LOCALE[l]}">`).join('\n')}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${img}">
<!-- /compartilhamento -->
`;
const setOg = (html, block) => html
  .replace(/<!-- compartilhamento \(gerado[^>]*-->\n[\s\S]*?<!-- \/compartilhamento -->\n/g, '')
  .replace(/<\/head>/, block + '</head>');
const setLang = (html, l) => html.replace(/<html lang="[^"]*">/, `<html lang="${HTML_LANG[l]}">`);
const setTitle = (html, t) => html.replace(/<title>[^<]*<\/title>/, `<title>${esc(t)}</title>`);

const PRE_CSS = 'font:15px/1.5 system-ui,sans-serif;color:#555;max-width:640px;margin:12vh auto;padding:0 24px';
const H1 = (t) => `<h1 style="font-size:24px;color:#111;margin:0 0 8px">${esc(t)}</h1>`;
const setBody = (html, inner) => html
  .replace(/\n*<main class="pre"[\s\S]*?<\/main>\n*/, '\n') // idempotente: rodar de novo não acumula linhas
  .replace(/<p>Carregando[^<]*<\/p>/, '')
  .replace(/<body>\n*/, `<body>\n<main class="pre" style="${PRE_CSS}">${inner}</main>\n`);
const PERSON = { '@type': 'Person', name: 'Henrique Marinhos', url: SITE + '/' };
const sitemap = []; // [caminho sem idioma, lastmod] → uma entrada por idioma, com as alternativas
const today = new Date().toISOString().slice(0, 10);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });

/* ---------- 1. Miniaturas dos projetos: a capa do próprio card, em 1200×800 ---------- */
await page.goto(LOCAL + '/projetos/?nomotion', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: `
  #work-case-grid { grid-template-columns: 1200px !important; gap: 40px !important; }
  #work-case-grid .work-card-media { width: 1200px !important; height: 800px !important; aspect-ratio: auto !important; border-radius: 0 !important; margin: 0 !important; }
  #mx-cursor, header { display: none !important; }` });
await page.waitForTimeout(800);
const onGrid = await page.$$eval('#work-case-grid .work-card[data-pj]', (els) => els.map((e) => e.dataset.pj));
const projImg = {};
for (const slug of onGrid) {
  const file = `assets/og/projetos/${ALIAS[slug] || slug}.jpg`;
  if (has(file)) { projImg[slug] = file; continue; }
  const media = page.locator(`#work-case-grid .work-card[data-pj="${slug}"] .work-card-media`);
  await media.scrollIntoViewIfNeeded();
  await page.waitForFunction((s) => [...document.querySelectorAll(`.work-card[data-pj="${s}"] img`)].every((i) => i.complete), slug, { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(3000); // capas animadas: espera a animação assentar
  const box = await media.boundingBox(); // recorte exato 1200×800 (evita 1 px a mais por arredondamento)
  await page.screenshot({ path: path.join(ROOT, file), type: 'jpeg', quality: 82, clip: { x: Math.round(box.x), y: Math.round(box.y), width: 1200, height: 800 } });
  projImg[slug] = file;
}
// fora da grade (projetos ocultos da lista): a capa do cadastro, recortada como no card
const solo = await browser.newPage({ viewport: { width: 1200, height: 800 } });
for (const p of PROJETOS) {
  if (projImg[p.slug] || !p.capa) continue;
  if (has(`assets/og/projetos/${ALIAS[p.slug] || p.slug}.jpg`)) { projImg[p.slug] = `assets/og/projetos/${ALIAS[p.slug] || p.slug}.jpg`; continue; }
  const src = /^https?:/.test(p.capa) ? p.capa : `${LOCAL}/${p.capa}`;
  await solo.setContent(`<body style="margin:0;background:#f5f5f5"><img src="${src}" style="width:1200px;height:800px;object-fit:cover;display:block"></body>`);
  await solo.waitForFunction(() => document.images[0].complete, null, { timeout: 15000 }).catch(() => {});
  const file = `assets/og/projetos/${ALIAS[p.slug] || p.slug}.jpg`;
  await solo.screenshot({ path: path.join(ROOT, file), type: 'jpeg', quality: 82 });
  projImg[p.slug] = file;
}
/* ---------- 2. Páginas de projeto ----------
   PT: projetos/<pasta>/index.html (escrita à mão; aqui só entram metatags e texto). EN/ES: cópias em en/ e es/. */
for (const p of PROJETOS) {
  const dir = ALIAS[p.slug] || p.slug, f = `projetos/${dir}/index.html`;
  if (!fs.existsSync(path.join(ROOT, f)) || !projImg[p.slug]) continue;
  const base = read(f), pth = `/projetos/${dir}/`, img = `${SITE}/${projImg[p.slug]}`;
  const ptTitle = (base.match(/<title>([^<]*)<\/title>/) || [])[1] || `${T(p.tituloI18n || { pt: p.titulo }, 'pt')} — Henrique Marinhos`;
  const ptDesc = (base.match(/<meta name="description" content="([^"]*)"/) || [])[1] || T(p.resumo, 'pt');
  for (const l of LANGS) {
    const name = T(p.tituloI18n || { pt: p.titulo }, l), cat = T(p.cat, l);
    const title = l === 'pt' ? ptTitle.replace(/&amp;/g, '&') : `${name} — Henrique Marinhos`;
    const desc = l === 'pt' ? ptDesc.replace(/&quot;/g, '"').replace(/&amp;/g, '&') : (T(p.intro, l) || T(p.resumo, l));
    const ld = { '@context': 'https://schema.org', '@type': 'CreativeWork', name, description: desc, url: SITE + PRE[l] + pth, image: img, creator: PERSON, inLanguage: HTML_LANG[l], ...(p.ano ? { dateCreated: String(p.ano) } : {}), ...(cat ? { genre: cat } : {}) };
    let html = setOg(base, ogBlock({ title, desc, path: pth, lang: l, img, w: 1200, h: 800, ld }));
    html = setBody(html, `${H1(name)}<p>${esc([cat, p.ano].filter(Boolean).join(' · '))}</p><p>${esc(desc)}</p><p><a href="${PRE[l]}/projetos/">${T(W.todosP, l)}</a> · <a href="${PRE[l]}/">Henrique Marinhos</a></p>`);
    if (l !== 'pt') {
      html = setTitle(setLang(html, l), title)
        .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(desc)}">`)
        .split(`'href="${pth}#$1"'`).join(`'href="${PRE[l]}${pth}#$1"'`); // âncoras internas da página
    }
    write(l === 'pt' ? f : `${l}/projetos/${dir}/index.html`, html);
  }
  // pasta antiga com o slug original (antes do apelido): mesmas metatags, canonical no apelido
  if (dir !== p.slug && fs.existsSync(path.join(ROOT, `projetos/${p.slug}/index.html`))) {
    const old = read(`projetos/${p.slug}/index.html`);
    write(`projetos/${p.slug}/index.html`, setOg(old, ogBlock({ title: ptTitle.replace(/&amp;/g, '&'), desc: ptDesc.replace(/&quot;/g, '"').replace(/&amp;/g, '&'), path: pth, img, w: 1200, h: 800 })));
  }
  sitemap.push([pth, today]);
}

/* ---------- 3. Artigos: capa em 1200×630 + página leve em cada idioma ---------- */
const stub = read('404.html'); // página leve que carrega o site; o site abre o artigo pelo endereço
let nArt = 0;
for (const a of ARTIGOS) {
  const slug = a.project ? '' : articleSlug(a);
  if (!slug || !a.img) continue;
  const local = a.img.startsWith('../') ? 'assets/' + a.img.slice(3) : 'assets/artigos/' + a.img;
  const fit = a.fit === 'contain' ? 'contain' : 'cover';
  const pos = a.cropTop ? '50% 0%' : (a.pos || '50% 50%');
  const img = `assets/og/artigos/${slug}.jpg`;
  if (!has(img)) {
    await solo.setViewportSize({ width: 1200, height: 630 });
    await solo.setContent(`<body style="margin:0;background:${a.bg || '#f5f5f5'}"><img src="${LOCAL}/${local}" style="width:1200px;height:630px;object-fit:${fit};object-position:${pos};display:block"></body>`);
    await solo.waitForFunction(() => document.images[0].complete, null, { timeout: 15000 }).catch(() => {});
    await solo.screenshot({ path: path.join(ROOT, img), type: 'jpeg', quality: 82 });
  }
  const pth = `/artigos/${encodeURIComponent(slug)}/`;
  for (const l of LANGS) {
    const t = (l !== 'pt' && a['t_' + l]) || a.t, title = `${t} — Henrique Marinhos`;
    const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: t, url: SITE + PRE[l] + pth, image: `${SITE}/${img}`, author: { ...PERSON, name: a.a || 'Henrique Marinhos' }, ...(a.d ? { datePublished: a.d } : {}), ...(a.site ? { publisher: { '@type': 'Organization', name: a.site } } : {}), sameAs: a.u, inLanguage: HTML_LANG[l] };
    const inner = `${H1(t)}<p>${esc([a.site, a.d && a.d.split('-').reverse().join('/'), a.a].filter(Boolean).join(' · '))}</p><p><a href="${esc(a.u)}" rel="noopener">${T(W.ler, l)} ${esc(a.site || 'site')}</a> · <a href="${PRE[l]}/artigos/">${T(W.todosA, l)}</a></p>`;
    const html = setBody(setOg(setTitle(setLang(stub, l), title), ogBlock({ title, desc: a.site || 'Henrique Marinhos', path: pth, lang: l, img: `${SITE}/${img}`, w: 1200, h: 630, ld })), inner);
    write(`${PRE[l].slice(1) ? PRE[l].slice(1) + '/' : ''}artigos/${slug}/index.html`, html);
  }
  sitemap.push([pth, a.d || today]);
  nArt++;
}

/* ---------- 4. Páginas fixas: miniatura geral do site ---------- */
const PERSON_LD = (l) => ({ '@context': 'https://schema.org', ...PERSON, jobTitle: T(W.job, l), image: `${SITE}/assets/img/retrato-cor.webp`, address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressCountry: 'BR' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Unesp' }, sameAs: ['https://www.linkedin.com/in/henrique-marinhos/', 'https://www.behance.net/henriquemarinhos', 'http://lattes.cnpq.br/8181966688647381'] });
const pageStub = read('sobre/index.html'); // página leve que carrega index.html
const og = { img: `${SITE}/assets/img/og.jpg`, w: 1200, h: 630 };
// index.html é o próprio site em "/": recebe só as metatags em PT (o idioma.js corrige canonical/hreflang em cada rota)
write('index.html', setOg(read('index.html'), ogBlock({ title: W.site.pt, desc: W.desc.pt, path: '/', ...og, ld: PERSON_LD('pt') })));
write('404.html', setOg(read('404.html'), ogBlock({ title: W.site.pt, desc: W.desc.pt, path: '/', ...og })));
const FIXED = [['/', null], ['/sobre/', 'sobre'], ['/projetos/', 'projetos'], ['/artigos/', 'artigos']];
for (const [pth, key] of FIXED) {
  for (const l of LANGS) {
    if (l === 'pt' && pth === '/') continue; // "/" é o index.html
    const name = key ? T(W[key], l) : 'Henrique Marinhos', title = key ? `${name} — Henrique Marinhos` : T(W.site, l);
    const nav = ['home', 'projetos', 'artigos', 'sobre'].map((k) => `<a href="${PRE[l]}${k === 'home' ? '/' : `/${k}/`}">${T(W[k], l)}</a>`).join(' · ');
    let html = setOg(setTitle(setLang(pageStub, l), title), ogBlock({ title, desc: T(W.desc, l), path: pth, lang: l, ...og, ld: key ? null : PERSON_LD(l) }));
    html = setBody(html, `${H1(name)}<p>Henrique Marinhos — ${esc(T(W.desc, l))}</p><p>${nav}</p>`);
    write(`${PRE[l].slice(1) ? PRE[l].slice(1) + '/' : ''}${pth.slice(1)}index.html`, html);
  }
  sitemap.unshift([pth, today]);
}

/* ---------- 5. Mapa do site (com as versões de idioma) e robots.txt ---------- */
const alt = (p) => LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l === 'pt' ? 'pt-BR' : l}" href="${SITE}${PRE[l]}${p}"/>`).join('');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap.flatMap(([p, d]) => LANGS.map((l) => `  <url><loc>${SITE}${PRE[l]}${p}</loc><lastmod>${d}</lastmod>${alt(p)}</url>`)).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /scripts/\n\nSitemap: ${SITE}/sitemap.xml\n`);

await browser.close();
console.log(`projetos: ${Object.keys(projImg).length} miniaturas · artigos: ${nArt} · sitemap: ${sitemap.length * LANGS.length} endereços (PT, EN, ES)`);

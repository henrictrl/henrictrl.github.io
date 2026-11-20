/* Gerador do portfólio v2: lê assets/data/*.js e escreve páginas estáticas em PT, EN e ES.
   Uso: node scripts/v2/gerar.mjs            (na raiz do site)
   Páginas: / · /projetos/ · /projetos/<slug>/ · /conteudos/ (+ coleções) · /conteudos/<slug>/ · /sobre/ · /404.html
   Cases com conteúdo próprio em HTML: scripts/v2/cases/<slug>.mjs (os demais usam o modelo automático). */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const SITE = 'https://henrictrl.github.io';
const LANGS = ['pt', 'en', 'es'];
const PRE = { pt: '', en: '/en', es: '/es' };
const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };
const LOCALE = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };
const V = Date.now().toString(36); // versão dos arquivos (cache)

/* ---------- Dados ---------- */
const ctxVM = { window: {}, document: { documentElement: { lang: 'pt' } } };
vm.createContext(ctxVM);
for (const f of ['projetos', 'artigos', 'posts', 'colecoes', 'ferramentas', 'engajamento', 'etiquetas']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/data', f + '.js'), 'utf8'), ctxVM, { filename: f + '.js' });
}
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/js/obras.js'), 'utf8'), ctxVM, { filename: 'obras.js' }); // nome da obra na faixa de títulos
const W = ctxVM.window;
const setLang = (l) => { ctxVM.document.documentElement.lang = l; };
const PROJ = W.PROJETOS, ART = W.ARTIGOS, POSTS = W.POSTS, COL = W.COLECOES, FERR = W.FERRAMENTAS, ENG = W.ENGAJAMENTO, ETQ = W.ETIQUETAS;
const CV = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/data/cv.json'), 'utf8'));
// "Freelancer" vira autônomo em todas as experiências, menos na Basement
const AUTO = { pt: 'Autônomo', en: 'Self-employed', es: 'Autónomo' };
const autoWalk = (o, lk) => { if (!o || typeof o !== 'object') return; for (const k of Object.keys(o)) { const v = o[k]; if (typeof v === 'string' && /Freelancer/.test(v)) o[k] = v.replace(/Freelancer/g, AUTO[k] || AUTO[lk] || AUTO.pt); else autoWalk(v, AUTO[k] ? k : lk); } };
['exp', 'edu', 'extra'].forEach((sec) => (CV[sec] || []).forEach((e) => { if (String((e.name && e.name.pt) || e.name).trim() !== 'Basement') autoWalk(e); }));

/* ---------- Utilidades ---------- */
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const T = (v, l) => v == null ? '' : typeof v === 'string' || typeof v === 'number' ? String(v) : (v[l] || v.pt || '');
const has = (p) => fs.existsSync(path.join(ROOT, p.replace(/^\//, '')));
const write = (p, s) => { const f = path.join(ROOT, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, s); };
const abs = (p) => p ? (/^https?:/.test(p) ? p : '/' + p.replace(/^\/+/, '').replace(/^\.\.\//, 'assets/')) : '';
const words = (s, start = 0) => esc(s).split(/\s+/).map((w, i) => `<span class="w"><span style="--i:${i + start}">${w}</span></span>`).join(' ');
const hexRgb = (h) => { const m = /^#?([0-9a-f]{6})$/i.exec(h); const n = parseInt(m[1], 16); return [n >> 16, (n >> 8) & 255, n & 255]; };
const rgbHex = (r) => '#' + r.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase();
const lum = (rgb) => { const c = rgb.map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const onColor = (hex) => { const L = lum(hexRgb(hex)); return (L + 0.05) / 0.0617 >= 1.05 / (L + 0.05) ? '#111111' : '#FFFFFF'; };
const fmtDate = (d, l) => { if (!d || !/^\d{4}-\d{2}/.test(d)) return d || ''; const [y, m, day] = d.split('-').map(Number); return new Date(Date.UTC(y, m - 1, day || 1)).toLocaleDateString({ pt: 'pt-BR', en: 'en-US', es: 'es-ES' }[l], { day: day ? 'numeric' : undefined, month: 'short', year: 'numeric', timeZone: 'UTC' }).replace(/\./g, ''); };

/* Tamanho de imagens WebP/PNG/JPG (atributos width/height evitam saltos de layout) */
const sizeCache = {};
function imgSize(p) {
  if (!p || /^https?:/.test(p)) return null;
  const f = path.join(ROOT, p.replace(/^\//, ''));
  if (sizeCache[f] !== undefined) return sizeCache[f];
  let r = null;
  try {
    const b = fs.readFileSync(f);
    if (b.toString('ascii', 0, 4) === 'RIFF') {
      const k = b.toString('ascii', 12, 16);
      if (k === 'VP8X') r = [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
      else if (k === 'VP8 ') r = [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
      else if (k === 'VP8L') { const n = b.readUInt32LE(21); r = [1 + (n & 0x3fff), 1 + ((n >> 14) & 0x3fff)]; }
    } else if (b[0] === 0x89) r = [b.readUInt32BE(16), b.readUInt32BE(20)];
    else if (b[0] === 0xff) { let i = 2; while (i < b.length) { const m = b[i + 1], len = b.readUInt16BE(i + 2); if (m >= 0xc0 && m <= 0xc3) { r = [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]; break; } i += 2 + len; } }
  } catch (e) {}
  return (sizeCache[f] = r);
}
const wh = (p) => { const s = imgSize(p); return s ? ` width="${s[0]}" height="${s[1]}"` : ''; };

/* Cor dominante de cada projeto (a mais frequente na capa; cache em assets/v2/cores-dominantes.json).
   Ordem: cor definida no case > cor dominante da capa > capaAnim.fundo > dash.cor */
const coresFile = path.join(ROOT, 'assets/v2/cores-dominantes.json');
const cores = fs.existsSync(coresFile) ? JSON.parse(fs.readFileSync(coresFile, 'utf8')) : {};
function dominantColor(files) {
  // amostra a capa e as primeiras telas do projeto; cor mais frequente, trocando fundo claro pela cor da marca
  const bins = new Map(), hues = Array.from({ length: 12 }, () => ({ n: 0, r: 0, g: 0, b: 0 }));
  let total = 0;
  for (const f of files) {
    let out; try { out = execFileSync('ffmpeg', ['-v', 'error', '-i', path.join(ROOT, f), '-vf', 'scale=48:32:flags=area', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'], { maxBuffer: 1e6 }); } catch (e) { continue; }
    for (let i = 0; i + 2 < out.length; i += 3) {
      const r = out[i], g = out[i + 1], b = out[i + 2], k = (r >> 4) << 8 | (g >> 4) << 4 | (b >> 4); total++;
      const e = bins.get(k) || { n: 0, r: 0, g: 0, b: 0 }; e.n++; e.r += r; e.g += g; e.b += b; bins.set(k, e);
      const mx = Math.max(r, g, b) / 255, mn = Math.min(r, g, b) / 255, lt = (mx + mn) / 2, d = mx - mn, sat = d === 0 ? 0 : d / (1 - Math.abs(2 * lt - 1));
      if (sat > 0.3 && lt > 0.12 && lt < 0.85) {
        let h; const R = r / 255, G = g / 255, B = b / 255;
        if (mx === R) h = ((G - B) / d) % 6; else if (mx === G) h = (B - R) / d + 2; else h = (R - G) / d + 4;
        const hb = hues[Math.floor(((h * 60 + 360) % 360) / 30)]; hb.n++; hb.r += r; hb.g += g; hb.b += b;
      }
    }
  }
  if (!total) return null;
  let best = null, bestW = -1;
  for (const [k, e] of bins) {
    const r = k >> 8, g = (k >> 4) & 15, b = k & 15; let w = e.n * 2;
    for (const [k2, e2] of bins) { if (k2 === k) continue; if (Math.abs(r - (k2 >> 8)) <= 1 && Math.abs(g - ((k2 >> 4) & 15)) <= 1 && Math.abs(b - (k2 & 15)) <= 1) w += e2.n; }
    if (w > bestW) { bestW = w; best = e; }
  }
  const rgb = [best.r / best.n, best.g / best.n, best.b / best.n], lt = (Math.max(...rgb) + Math.min(...rgb)) / 510;
  if (lt > 0.8) { const hb = hues.slice().sort((a, c) => c.n - a.n)[0]; if (hb.n >= total * 0.02) return rgbHex([hb.r / hb.n, hb.g / hb.n, hb.b / hb.n]); }
  return rgbHex(rgb);
}

/* ---------- Textos da interface ---------- */
const UI = {
  role: { pt: 'Designer e relações-públicas', en: 'Designer and PR specialist', es: 'Diseñador y relacionista público' },
  desc: { pt: 'Estratégias de comunicação críticas e funcionais para marcas. Design gráfico, social media, redação e landing pages.', en: 'Critical, functional communication strategies for brands. Graphic design, social media, copywriting and landing pages.', es: 'Estrategias de comunicación críticas y funcionales para marcas. Diseño gráfico, redes sociales, redacción y landing pages.' },
  hero: { pt: '<span class="dim">Designer e<br>relações-públicas.</span><br>Estratégias de<br>comunicação críticas e<br>funcionais para marcas.', en: '<span class="dim">Designer and<br>PR specialist.</span><br>Critical, functional<br>communication<br>strategies for brands.', es: '<span class="dim">Diseñador y<br>relacionista público.</span><br>Estrategias de<br>comunicación críticas y<br>funcionales para marcas.' },
  bio: { pt: 'Bacharel em Relações Públicas pela Unesp, desenvolvo marcas e estratégias de <em>branding</em> e <em>design</em>. Desenvolvo identidades visuais, <em>landing pages</em> e peças gráficas para marcas. Também sou redator cultural em portais jornalísticos independentes.', en: 'With a bachelor\'s degree in Public Relations from Unesp, I develop brands and <em>branding</em> and <em>design</em> strategies. I develop visual identities, <em>landing pages</em> and graphic assets for brands. I am also a cultural writer for independent news outlets.', es: 'Soy bachiller en Relaciones Públicas por la Unesp y desarrollo marcas y estrategias de <em>branding</em> y diseño. Desarrollo identidades visuales, <em>landing pages</em> y piezas gráficas para marcas. También soy redactor cultural en portales periodísticos independientes.' },
  loc: { pt: '— São Paulo, Brasil', en: '— São Paulo, Brazil', es: '— São Paulo, Brasil' },
  nav_home: { pt: 'Início', en: 'Home', es: 'Inicio' }, nav_proj: { pt: 'Projetos', en: 'Projects', es: 'Proyectos' }, nav_art: { pt: 'Conteúdos', en: 'Content', es: 'Contenidos' },
  nav_about: { pt: 'Sobre', en: 'About', es: 'Sobre mí' }, nav_contact: { pt: 'Contato', en: 'Contact', es: 'Contacto' },
  menu_open: { pt: 'Abrir menu', en: 'Open menu', es: 'Abrir menú' }, menu_close: { pt: 'Fechar menu', en: 'Close menu', es: 'Cerrar menú' }, close: { pt: 'Fechar', en: 'Close', es: 'Cerrar' },
  skip: { pt: 'Pular para o conteúdo', en: 'Skip to content', es: 'Saltar al contenido' },
  about_label: { pt: 'Sobre mim', en: 'About me', es: 'Sobre mí' }, more: { pt: 'Saiba mais', en: 'Learn more', es: 'Saber más' },
  st_proj: { pt: 'Projetos', en: 'Projects', es: 'Proyectos' }, st_art: { pt: 'Artigos', en: 'Articles', es: 'Artículos' }, st_posts: { pt: 'Posts', en: 'Posts', es: 'Posts' },
  hm_hint: { pt: 'passe o mouse - clique para abrir', en: 'hover - click to open', es: 'pasa el mouse - clic para abrir' },
  pieces: { pt: 'Peças', en: 'Pieces', es: 'Piezas' }, pieces_n: { pt: 'Clique numa imagem para alternar.', en: 'Click an image to switch it.', es: 'Haz clic en una imagen para alternarla.' },
  recent: { pt: 'Recente', en: 'Latest', es: 'Reciente' },
  rec_txt: { pt: '<p>Estreia do Desvendados no {ig}</p><p>Projeto dedicado a apresentar artistas independentes ou que ainda não chegaram ao mainstream. Apoiem novos artistas.</p>', en: '<p>Debut of Desvendados on {ig}</p><p>A project dedicated to introducing independent artists or those who haven’t reached the mainstream yet. Support new artists.</p>', es: '<p>Estreno de Desvendados en {ig}</p><p>Proyecto dedicado a presentar artistas independientes o que aún no llegaron al mainstream. Apoyen a nuevos artistas.</p>' },
  work: { pt: 'Projetos', en: 'Projects', es: 'Proyectos' }, see_all: { pt: 'Ver todos', en: 'See all', es: 'Ver todos' }, see: { pt: 'Ver projeto', en: 'View project', es: 'Ver proyecto' }, view: { pt: 'Ver', en: 'View', es: 'Ver' }, open: { pt: 'Abrir', en: 'Open', es: 'Abrir' }, read: { pt: 'Ler', en: 'Read', es: 'Leer' },
  code: { pt: 'Também em código', en: 'Also in code', es: 'También en código' },
  exp: { pt: 'Experiência', en: 'Experience', es: 'Experiencia' }, exp_n: { pt: 'Da mais recente para a mais antiga.', en: 'From the most recent to the oldest.', es: 'De la más reciente a la más antigua.' },
  edu: { pt: 'Formação', en: 'Education', es: 'Formación' }, extra: { pt: 'Atividades complementares', en: 'Other activities', es: 'Actividades complementarias' }, skills: { pt: 'Habilidades técnicas', en: 'Technical skills', es: 'Habilidades técnicas' }, langs: { pt: 'Idiomas', en: 'Languages', es: 'Idiomas' }, certs: { pt: 'Certificados', en: 'Certificates', es: 'Certificados' },
  see_case: { pt: 'Ver o case', en: 'See the case', es: 'Ver el caso' },
  dest: { pt: 'Destaques', en: 'Highlights', es: 'Destacados' },
  arts: { pt: 'Artigos', en: 'Articles', es: 'Artículos' },
  footer_h: { pt: 'Vamos trabalhar juntos?', en: "Let's work together?", es: '¿Trabajamos juntos?' },
  copy: { pt: 'Copiar e-mail', en: 'Copy email', es: 'Copiar correo' },
  credit: { pt: 'Site desenhado e desenvolvido por Henrique Marinhos.', en: 'Site designed and developed by Henrique Marinhos.', es: 'Sitio diseñado y desarrollado por Henrique Marinhos.' },
  credit_l: { pt: 'Como este site foi feito →', en: 'How this site was made →', es: 'Cómo se hizo este sitio →' },
  top: { pt: 'Voltar ao topo ↑', en: 'Back to top ↑', es: 'Volver arriba ↑' },
  cv: { pt: 'Baixar currículo', en: 'Download résumé', es: 'Descargar currículum' }, talk: { pt: 'Entrar em contato', en: 'Get in touch', es: 'Contactar' },
  work_title: { pt: '<span class="dim">Projetos gráficos,</span><br>marcas e interfaces', en: '<span class="dim">Graphic design,</span><br>brands and interfaces', es: '<span class="dim">Diseño gráfico,</span><br>marcas e interfaces' },
  art_title: { pt: '<span class="dim">Textos culturais</span><br>sobre cinema, música,<br>televisão e literatura.', en: '<span class="dim">Cultural criticism</span><br>on film, music,<br>TV and literature.', es: '<span class="dim">Artículos culturales</span><br>sobre cine, música,<br>televisión y literatura.' },
  about_title: { pt: '<span class="dim">Oi, eu sou</span><br>o Henrique.', en: '<span class="dim">Hi, I\'m</span><br>Henrique.', es: '<span class="dim">Hola, soy</span><br>Henrique.' },
  photo_hint: { pt: 'passe o mouse - clique para ver em cores', en: 'hover - click to see in color', es: 'pasa el mouse - clic para ver en color' },
  allF: { pt: 'Todos', en: 'All', es: 'Todos' }, results: { pt: 'resultados', en: 'results', es: 'resultados' }, none: { pt: 'Nada encontrado.', en: 'Nothing found.', es: 'Nada encontrado.' },
  search: { pt: 'Buscar por título, veículo ou etiqueta', en: 'Search by title, outlet or tag', es: 'Buscar por título, medio o etiqueta' },
  collections: { pt: 'Coleções', en: 'Collections', es: 'Colecciones' },
  read_on: { pt: 'Ler no', en: 'Read on', es: 'Leer en' }, related: { pt: 'Relacionados', en: 'Related', es: 'Relacionados' },
  year: { pt: 'Ano', en: 'Year', es: 'Año' }, ctx: { pt: 'Contexto', en: 'Context', es: 'Contexto' }, sector: { pt: 'Setor', en: 'Sector', es: 'Sector' }, deliv: { pt: 'Entregas', en: 'Deliverables', es: 'Entregas' }, comp: { pt: 'Competências', en: 'Skills', es: 'Competencias' }, link: { pt: 'Link', en: 'Link', es: 'Enlace' }, pages: { pt: 'Páginas', en: 'Pages', es: 'Páginas' },
  overview: { pt: 'Visão geral', en: 'Overview', es: 'Visión general' }, present: { pt: 'Apresentação', en: 'Presentation', es: 'Presentación' }, chapters: { pt: 'Capítulos', en: 'Chapters', es: 'Capítulos' },
  posts_t: { pt: 'Posts e carrosséis', en: 'Posts and carousels', es: 'Posts y carruseles' }, posts_d: { pt: 'Clique num post para ver todos os slides.', en: 'Click a post to see every slide.', es: 'Haz clic en un post para ver todas las diapositivas.' },
  site_t: { pt: 'O site, ao vivo', en: 'The live site', es: 'El sitio, en vivo' }, open_site: { pt: 'Abrir em nova aba', en: 'Open in a new tab', es: 'Abrir en otra pestaña' },
  st_pub: { pt: 'posts publicados', en: 'posts published', es: 'posts publicados' }, st_likes: { pt: 'curtidas somadas', en: 'total likes', es: 'me gusta en total' }, st_com: { pt: 'comentários', en: 'comments', es: 'comentarios' }, st_fol: { pt: 'seguidores da conta', en: 'account followers', es: 'seguidores de la cuenta' }, st_slides: { pt: 'slides', en: 'slides', es: 'diapositivas' },
  next: { pt: 'Próximo projeto', en: 'Next project', es: 'Siguiente proyecto' }, zoom: { pt: 'Ampliar', en: 'Zoom', es: 'Ampliar' },
  prev_i: { pt: 'Anterior', en: 'Previous', es: 'Anterior' }, next_i: { pt: 'Próxima', en: 'Next', es: 'Siguiente' },
  nf: { pt: '<span class="dim">Página</span><br>não encontrada.', en: '<span class="dim">Page</span><br>not found.', es: '<span class="dim">Página</span><br>no encontrada.' }, back_home: { pt: 'Voltar ao início', en: 'Back home', es: 'Volver al inicio' },
  cols: { pt: 'Colunas', en: 'Columns', es: 'Columnas' }, dash: { pt: 'Veja os números', en: 'See the numbers', es: 'Ver las cifras' }, n_proj: { pt: 'projetos', en: 'projects', es: 'proyectos' }, portrait: { pt: 'Retrato de Henrique Marinhos', en: 'Portrait of Henrique Marinhos', es: 'Retrato de Henrique Marinhos' }, a_nav: { pt: 'Navegação principal', en: 'Main navigation', es: 'Navegación principal' }, a_social: { pt: 'Redes e contatos', en: 'Social and contact', es: 'Redes y contacto' }, a_logos: { pt: 'Clientes e projetos', en: 'Clients and projects', es: 'Clientes y proyectos' }, a_filter: { pt: 'Filtrar projetos', en: 'Filter projects', es: 'Filtrar proyectos' }, a_crumb: { pt: 'Caminho da página', en: 'Breadcrumb', es: 'Ruta de navegación' }, a_lang: { pt: 'Idioma', en: 'Language', es: 'Idioma' },
  swap: { pt: 'Alternar imagem', en: 'Switch image', es: 'Alternar imagen' },
  by: { pt: 'Por', en: 'By', es: 'Por' }, published: { pt: 'Publicado em', en: 'Published on', es: 'Publicado en' }, outlet: { pt: 'Veículo', en: 'Outlet', es: 'Medio' }, flip: { pt: 'Virar', en: 'Flip', es: 'Girar' }
};
const u = (k, l) => T(UI[k], l);
const FILTROS = { marcas: { pt: 'Marcas e Clientes', en: 'Brands and Clients', es: 'Marcas y Clientes' }, inst: { pt: 'Institucional', en: 'Institutional', es: 'Institucional' }, cultura: { pt: 'Cultura e crítica', en: 'Culture and criticism', es: 'Cultura y crítica' } }; // os mesmos do site oficial
const SOCIAL = [['WhatsApp', 'https://wa.me/5514991394590'], ['E-mail', 'mailto:henriquemarinhos@icloud.com'], ['LinkedIn', 'https://www.linkedin.com/in/henrique-marinhos/'], ['Behance', 'https://www.behance.net/henriquemarinhos']];
const EMAIL = 'henriquemarinhos@icloud.com';
const CV_PDF = '/assets/docs/Curriculo-Henrique-Marinhos.pdf';
const FEATURED = ['rino', 'sollaris', 'classic-tattoo', 'tesoura', 'optica-leopoldina', 'equity360'];
// faixa de logos (mesma lista, tamanhos e zoom do site original): slug, arquivo, nome, altura, zoom, largura, altura do arquivo
const LOGOS = [["optica-leopoldina","optica-leopoldina.webp","Óptica Leopoldina",44,1.25,435,160],["mostra-saude-mental","mostra-saude-mental.svg","Mostra de Saúde Mental da Unesp",50,1.35,401,160],["sollaris","sollaris.svg","Sollaris",60,1.8,168,160],["ntaps","ntaps.webp","NTAPS — Núcleo Técnico de Atenção Psicossocial",50,1.35,356,160],["rino","rino-logo.webp","Rino",24,1.15,536,160],["classic-tattoo","classic-tattoo.webp","Classic Tattoo",46,1.3,444,160],["encantos-do-brasil","encantos-do-brasil.svg","Encantos do Brasil",46,1.7,160,160],["congresso-extensao","congresso-extensao.webp","Congresso de Extensão Universitária",56,1.5,347,160],["equity360","equity360.webp","Equity 360",30,1.2,640,151],["prisma-brandbook","prisma.webp","Prisma Consultoria",48,1.3,160,160],["csunesp","csunesp.webp","CSUNESP — Coordenadoria de Saúde da Unesp",48,1.3,488,160],["nupe","nupe.webp","Nupe — Núcleo Negro da Unesp",32,1.4,550,160],["interserv","interserv.webp","Interserv",34,1.25,598,160],["cminds","cminds.webp","C Minds",50,1.25,250,160],["ocupacao-unesp-negra","ocupacao-unesp-negra.webp","Ocupação Unesp Negra",42,1.25,571,160],["persona","persona.svg","Persona — Crítica Cultural",40,1.3,254,160],["rp-40-anos","rp-unesp-40.webp","Relações Públicas Unesp Bauru — 40 anos",38,1.3,640,148]];
const HOME_REC = 'Df2Mgq8Fqi0', REC_PAGES = [0, 1, 4, 3, 6];
const HOME_ARTS = ['https://tesouracomponta.com/o-sentido-da-vida/', 'https://online.visual-paradigm.com/pt/share/book/livro-persona-e-book-2faf3yvpm', 'https://personaunesp.com.br/pearl-critica/'];
const HOME_DEST = [['DQfY9lqkZfc', { pt: 'O Agente Secreto: coletiva de imprensa em São Paulo', en: 'The Secret Agent: press conference in São Paulo', es: 'El agente secreto: rueda de prensa en São Paulo' }], ['DPCkHYgkbDE', { pt: 'E o prêmio de Melhor Roteiro Original (não) vai para 2025', en: 'And the Best Original Screenplay award (doesn’t) go to 2025', es: 'Y el premio al Mejor Guion Original (no) es para 2025' }], ['Dd6mzTmFpUe', { pt: 'Tinashe reivindica o título que sempre foi dela em “Popstar”', en: 'Tinashe claims the title that was always hers in “Popstar”', es: 'Tinashe reivindica el título que siempre fue suyo en “Popstar”' }]];
const TICK_FORA = /melhores|curtas do oscar|representatividade|problemas sexuais/i;

/* ---------- Ícones (os do site) ---------- */
const NAVI = {
  home: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 11.3a2 2 0 0 1 .7-1.5l5-4.3a2 2 0 0 1 2.6 0l5 4.3a2 2 0 0 1 .7 1.5v6.2a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 17.5z"/></svg>',
  projetos: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5c-4.8 0-8.5 3.7-8.5 8.5s3.7 8.5 8.5 8.5c1.2 0 1.9-.8 1.9-1.8 0-.5-.2-.9-.5-1.3-.3-.3-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8h2.1c2.1 0 3.7-1.7 3.7-3.8 0-3.9-3.8-7-8.5-7z"/><circle cx="7.6" cy="11.6" r="1.15" fill="currentColor" stroke="none"/><circle cx="9.4" cy="7.8" r="1.15" fill="currentColor" stroke="none"/><circle cx="13.9" cy="7.1" r="1.15" fill="currentColor" stroke="none"/><circle cx="16.9" cy="10" r="1.15" fill="currentColor" stroke="none"/></svg>',
  artigos: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.8" y="5" width="4.2" height="15" rx="1.6"/><rect x="9.2" y="7.5" width="4.2" height="12.5" rx="1.6"/><rect x="14.4" y="6.8" width="4.2" height="13.2" rx="1.6" transform="rotate(15 14.4 20)"/><circle cx="5.9" cy="9" r="0.95" fill="currentColor" stroke="none"/><circle cx="11.3" cy="11.3" r="0.95" fill="currentColor" stroke="none"/></svg>',
  sobre: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8.3" r="3.6"/><path d="M5.5 19.5c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5"/></svg>',
  contato: '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4.5h8A4.5 4.5 0 0 1 20.5 9v3.5A4.5 4.5 0 0 1 16 17h-3.4l-3.6 2.8c-.5.4-1.2 0-1.2-.6V17H8a4.5 4.5 0 0 1-4.5-4.5V9A4.5 4.5 0 0 1 8 4.5z"/></svg>'
};
let flagSeq = 0;
const FLAGS = {
  pt: () => '<svg viewBox="0 0 21 15" aria-hidden="true"><rect width="21" height="15" fill="#009C3B"/><path d="M10.5 1.6 19.3 7.5 10.5 13.4 1.7 7.5z" fill="#FFDF00"/><circle cx="10.5" cy="7.5" r="3.4" fill="#002776"/><path d="M7.3 6.8c2.1-.6 4.4-.3 6.3.9" stroke="#fff" stroke-width=".55" fill="none"/></svg>',
  en: () => { const id = 'ukc' + (++flagSeq); return `<svg viewBox="0 0 60 30" preserveAspectRatio="none" aria-hidden="true"><clipPath id="${id}"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#${id})" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>`; },
  es: () => '<svg viewBox="0 0 21 15" aria-hidden="true"><rect width="21" height="15" fill="#AA151B"/><rect y="3.75" width="21" height="7.5" fill="#F1BF00"/></svg>'
};
const LANG_NAMES = { pt: 'Português', en: 'English', es: 'Español' };
const I = {
  arrow: '<svg class="i-arrow" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>',
  chevL: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M15 6l-6 6 6 6"/></svg>',
  chevR: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M9 6l6 6-6 6"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M20 20l-4-4"/></svg>',
  ext: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M3.5 6.5h17v11h-17z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M3.5 7l8.5 6.5L20.5 7"/></svg>',
  stack: '<svg viewBox="0 0 24 24" aria-hidden="true" width="12" height="12"><path fill="none" stroke="currentColor" stroke-width="2" d="M7 7h13v13H7z"/><path fill="none" stroke="currentColor" stroke-width="2" d="M4 17V4h13"/></svg>'
};

/* ---------- Projetos: normalização ---------- */
const ALIAS = { 'rino-site': 'rino-cores', 'o-hobbit': 'hobbit', 'metaprojeto': 'portfolio', 'dash-geral': 'visao-geral' }; // endereços já publicados
const pslug = (p) => ALIAS[p.slug] || p.slug;
const projHref = (p, l) => `${PRE[l]}/projetos/${pslug(p)}/`;
// lista e ordem da página Projetos do site oficial (Rino: peças fica dentro do case Rino)
const OFICIAL = ['classic-tattoo', 'rino', 'optica-leopoldina', 'sollaris', 'equity360', 'congresso-extensao', 'interserv', 'ntaps', 'csunesp', 'mostra-saude-mental', 'nupe', 'ocupacao-unesp-negra', 'prisma-brandbook', 'cminds', 'rp-40-anos', 'setembro-amarelo', 'prisma-proposta', 'persona', 'inspirit', 'festa-da-polenta', 'proec', 'fellipe-gualberto', 'encantos-do-brasil', 'nova-rio-branco', 'pixelar', 'metaprojeto', 'basement', 'tesoura', 'desvendando', 'rd-cultural', 'encontro-direitos-humanos', 'copa-girlpower', 'oficina-gestao-projetos'];
const visible = OFICIAL.map((s) => PROJ.find((p) => p.slug === s)).filter(Boolean);
const LINKED = { 'rino-pecas': 'rino' }; // projeto vinculado → case que o recebe (capítulo Peças)
const SPA = ['dash-geral']; // páginas que continuam no app oficial
const caseMods = {};
for (const f of fs.existsSync(path.join(HERE, 'cases')) ? fs.readdirSync(path.join(HERE, 'cases')) : []) {
  if (f.endsWith('.mjs')) caseMods[f.replace('.mjs', '')] = (await import(pathToFileURL(path.join(HERE, 'cases', f)).href)).default;
}
for (const p of PROJ) {
  const mod = caseMods[p.slug];
  let c = mod && mod.cor;
  if (!c && p.capa && has(p.capa)) { if (!cores[p.slug]) cores[p.slug] = dominantColor([p.capa].concat((p.telas || []).slice(0, 8).map((t) => p.dir + t.img + '-t.webp')).filter(has)); c = cores[p.slug]; }
  if (!c && p.capaAnim && Array.isArray(p.capaAnim.fundo)) c = rgbHex(p.capaAnim.fundo);
  if (!c && p.dash && p.dash.cor) c = p.dash.cor;
  c = (c || '#2B2B2B').toUpperCase();
  p._c = c; p._ct = (mod && mod.ct) || onColor(c); p._c2 = (mod && mod.c2) || c;
}
fs.mkdirSync(path.dirname(coresFile), { recursive: true });
fs.writeFileSync(coresFile, JSON.stringify(cores, null, 1));
const cardStyle = (p) => `--c:${p._c};--ct:${p._ct}`;
const trAttr = (p) => `data-tr="${esc(p.titulo)}" data-c="${p._c}" data-ct="${p._ct}"`; // cortina na cor do projeto
const etq = (k, l) => T(ETQ[k], l) || k;
const groupsOf = (p) => [].concat(p.filtro || []).join(' ');
const telaSrc = (p, t, l) => { const lang = (t.idiomasImg || p.idiomasImg || []).includes(l) ? '.' + l : ''; return abs(p.dir + t.img + lang + '.webp'); };
const postsOf = (p) => { const gs = [].concat(p.posts || [], (p.postGroups || []).map((g) => typeof g === 'string' ? g : g.g)); return POSTS.filter((x) => gs.includes(x.g)).sort((a, b) => (b.d || '').localeCompare(a.d || '')); };
const postSet = (x) => Array.from({ length: x.reel ? 1 : (x.n || 1) }, (_, i) => `/assets/posts/${x.c}/${String(i + 1).padStart(2, '0')}.webp`).filter((s) => has(s));

/* Capas animadas do site (assets/js/capas.js), montadas já no HTML */
const capasCtx = { window: {}, document: { createElement: () => ({}), head: { appendChild() {} }, addEventListener() {}, documentElement: {} } };
capasCtx.window.document = capasCtx.document; vm.createContext(capasCtx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/js/capas.js'), 'utf8'), capasCtx, { filename: 'capas.js' });
const capaHTML = (p) => { try { return (capasCtx.window.capaAnimHTML(p) || '').replace(/(src="|url\()assets\//g, '$1/assets/'); } catch (e) { return ''; } };

/* ---------- Artigos ---------- */
const artSlug = (a) => decodeURIComponent(new URL(a.u, SITE).pathname.split('/').filter(Boolean).pop() || '');
const artImg = (a) => a.img ? (a.img.startsWith('../') ? '/assets/' + a.img.slice(3) : '/assets/artigos/' + a.img) : (a.imgPath || '');
const artTitle = (a, l) => (l !== 'pt' && a['t_' + l]) || a.t;
const artHref = (a, l) => a.project ? `${PRE[l]}/projetos/${ALIAS[a.project] || a.project}/` : `${PRE[l]}/conteudos/${encodeURIComponent(artSlug(a))}/`;
const TAGS = { 'Cinema': { en: 'Film', es: 'Cine' }, 'Música': { en: 'Music', es: 'Música' }, 'Televisão': { en: 'TV', es: 'Televisión' }, 'Literatura': { en: 'Literature', es: 'Literatura' }, 'Cabine': { en: 'Press screening', es: 'Preestreno' }, 'Livro': { en: 'Book', es: 'Libro' }, 'Artes visuais': { en: 'Visual arts', es: 'Artes visuales' } };
const tagL = (t, l) => l === 'pt' ? t : ((TAGS[t] || {})[l] || t);

/* Texto com tags (<span class="dim">, <br>) em palavras que sobem uma a uma */
const riseHTML = (h) => { let i = 0; return h.split(/(<[^>]+>)/).map((tok) => tok.startsWith('<') ? tok : tok.split(/(\s+)/).map((w) => !w.trim() ? w : `<span class="w"><span style="--i:${i++}">${w}</span></span>`).join('')).join(''); };

/* ---------- Peças comuns ---------- */
function head(l, o) {
  const url = SITE + PRE[l] + o.path;
  const alt = LANGS.map((x) => `<link rel="alternate" hreflang="${HTML_LANG[x]}" href="${SITE + PRE[x] + o.path}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${SITE + o.path}">`;
  const og = o.og ? (o.og.startsWith('http') ? o.og : SITE + o.og) : SITE + '/assets/img/og.jpg';
  return `<!doctype html>
<html lang="${HTML_LANG[l]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.desc)}">
<link rel="canonical" href="${url}">${alt}
<meta name="theme-color" content="#ffffff">
<meta property="og:type" content="${o.ogType || 'website'}"><meta property="og:site_name" content="Henrique Marinhos"><meta property="og:locale" content="${LOCALE[l]}">
<meta property="og:title" content="${esc(o.title)}"><meta property="og:description" content="${esc(o.desc)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(o.title)}"><meta name="twitter:description" content="${esc(o.desc)}"><meta name="twitter:image" content="${og}">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32.png"><link rel="icon" href="/favicon.ico" sizes="any"><link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<script src="/assets/js/tema.js?v=${V}"></script>
<script>(function(h){h.classList.add('js');try{if(/[?&]nomotion/.test(location.search)||matchMedia('(prefers-reduced-motion: reduce)').matches)h.classList.add('mx-off');else if(sessionStorage.getItem('mx-seen'))h.classList.add('mx-seen');sessionStorage.removeItem('cortina')}catch(e){}})(document.documentElement)</script>
<link rel="stylesheet" href="/assets/v2/casa.css?v=${V}">
<link rel="stylesheet" href="/assets/v2/v2.css?v=${V}">${o.extraHead || ''}
${o.jsonld ? `<script type="application/ld+json">${JSON.stringify(o.jsonld)}</script>` : ''}
</head>`;
}

function langSwitch(l, p) {
  if (p === '/404.html') p = '/';
  return `<div class="lang-switch" role="group" aria-label="${u('a_lang', l)}">${LANGS.map((x) => `<a class="lang-btn" href="${PRE[x]}${p}" hreflang="${HTML_LANG[x]}" lang="${HTML_LANG[x]}" aria-pressed="${x === l}" aria-label="${LANG_NAMES[x]}" title="${LANG_NAMES[x]}">${FLAGS[x]()}</a>`).join('')}</div>`;
}

function header(l, cur, pth) {
  const nav = [['home', 'nav_home', `${PRE[l]}/`, 'inicio'], ['artigos', 'nav_art', `${PRE[l]}/conteudos/`, 'artigos'], ['sobre', 'nav_about', `${PRE[l]}/sobre/`, 'sobre']];
  return `<a class="skip" href="#conteudo">${u('skip', l)}</a>
<header class="top-header"><div class="header-inner">
  <div class="header-left"><a class="brand-collapse-inner" href="${PRE[l]}/" data-tr="Henrique Marinhos"><p class="brand-name">Henrique Marinhos</p><p class="brand-location">${u('loc', l)}</p></a></div>
  <button class="nav-toggle" id="nav-toggle" type="button" aria-label="${u('menu_open', l)}" data-open="${u('menu_open', l)}" data-close="${u('menu_close', l)}" aria-expanded="false" aria-controls="nav-panel"><span></span><span></span></button>
  <div class="nav-row" id="nav-panel">
    <nav class="main-nav" aria-label="${u('a_nav', l)}">${nav.map(([k, t, h, id]) => `<a href="${h}" data-nav-id="${id}" data-tr="${esc(u(t, l))}"${cur === k || (k === 'artigos' && cur === 'projetos') ? ' class="current" aria-current="page"' : ''}>${NAVI[k]}<span>${u(t, l)}</span></a>`).join('')}<a href="#contato" data-nav-id="contato">${NAVI.contato}<span>${u('nav_contact', l)}</span></a></nav>
    ${langSwitch(l, pth)}
  </div>
</div></header>`;
}

function footer(l) {
  return `<div class="top-before-contact"><button class="to-top" type="button" data-top>${u('top', l)}</button></div>
<footer class="contact-footer" id="contato">
  <div class="tools-float" id="tools-float"></div>
  <div class="footer-inner">
    <div class="footer-heading-group"><h2 class="footer-headline" data-scr>${u('footer_h', l)}</h2></div>
    <nav class="footer-socials" aria-label="${u('a_social', l)}">${SOCIAL.map(([n, h]) => `<a href="${h}" class="footer-social"${h.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${n}</a>`).join('')}</nav>
  </div>
  <div class="credit-bar"><span><span>${u('credit', l)}</span> <a href="${PRE[l]}/projetos/portfolio/" data-tr="${esc(T(PROJ.find((p) => p.slug === 'metaprojeto').tituloI18n || 'Este portfólio', l))}">${u('credit_l', l)}</a></span></div>
</footer>`;
}

function shell(l, o, body) {
  setLang(l);
  return `${head(l, o)}
<body class="${o.bodyClass || ''}"${o.style ? ` style="${o.style}"` : ''} id="top">
<div id="mx-loader" aria-hidden="true"><div class="mx-mark"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div></div>
${header(l, o.cur, o.path)}
<main id="conteudo">
${body}
</main>
${footer(l)}
<dialog class="lb" data-lb aria-label="${u('zoom', l)}"><figure class="lb__fig"><img data-lb-img alt=""><figcaption data-lb-cap></figcaption></figure>
<button class="lb__btn lb__x" type="button" data-lb-x>${I.x}<span class="sr-only">${u('close', l)}</span></button><button class="lb__btn lb__p" type="button" data-lb-p>${I.chevL}<span class="sr-only">${u('prev_i', l)}</span></button><button class="lb__btn lb__n" type="button" data-lb-n>${I.chevR}<span class="sr-only">${u('next_i', l)}</span></button></dialog>
<div class="toast" data-toast role="status" aria-live="polite"></div>
${o.capas ? `<script src="/assets/js/capas.js?v=${V}" defer></script>` : ''}
<script src="/assets/data/ferramentas.js?v=${V}" defer></script>
<script src="/assets/v2/v2.js?v=${V}" defer></script>
<script src="/assets/js/contato.js?v=${V}" defer></script>
<script src="/assets/js/barra.js?v=${V}" defer></script>
</body>
</html>`;
}

/* ---------- Componentes ---------- */
function pcard(p, l) {
  setLang(l);
  const cover = (p.capaAnim && capaHTML(p)) || `<img src="${abs(p.capa)}" alt="" loading="lazy" decoding="async"${wh(p.capa)}${p.capaCropTop ? ' style="object-position:50% 0"' : ''}>`;
  const sub = T(p.entrega, l) || T(p.resumo, l);
  return `<a class="work-card" href="${projHref(p, l)}" ${trAttr(p)} data-reveal data-g="${groupsOf(p)}" style="${cardStyle(p)}">
  <div class="work-card-media"><div class="wc-cover">${cover}</div></div>
  <h3 class="work-card-title">${esc(p.titulo)}</h3>${sub ? `<p class="work-card-tag">${esc(sub)}</p>` : ''}
</a>`;
}

function acard(a, l) {
  const img = artImg(a), t = artTitle(a, l);
  const st = [a.bg ? `--bgc:${a.bg}` : '', a.fit === 'contain' ? '--fit:contain' : '', a.cropTop ? '--pos:50% 0%' : (a.pos ? `--pos:${a.pos}` : '')].filter(Boolean).join(';');
  const badge = (l !== 'pt' && a['badge_' + l]) || a.badge;
  return `<a class="art-card" href="${artHref(a, l)}" data-reveal data-g="${(a.tags || []).map((x) => x.replace(/\s/g, '_')).join(' ')}" data-q="${esc([t, a.site, (a.tags || []).join(' '), a.a].join(' '))}">
  <div class="art-card-media"${st ? ` style="${st}"` : ''}>${img ? `<img src="${esc(img)}" alt="" loading="lazy" decoding="async"${wh(img)}>` : ''}${badge ? `<span class="art-badge">${esc(badge)}</span>` : ''}</div>
  <p class="art-card-meta">${(a.tags || []).map((x) => esc(tagL(x, l))).join(' · ')} — ${esc(fmtDate(a.d, l))}</p><h3 class="art-card-title">${esc(t)}</h3><p class="art-card-by">${esc(a.site)}</p>
</a>`;
}

/* Retrato 3x4 da abertura: a foto oficial do Sobre (P&B; recorte em cor no hover/toque), só reenquadrada */
function heroPortrait(l) {
  return `<div class="hport"><figure class="hport__fig about-photo" data-photo tabindex="0" role="button" aria-pressed="false" aria-label="${u('portrait', l)}"><img class="ap-bw" src="/assets/img/sobre.webp" width="1800" height="1012" alt="${u('portrait', l)}" decoding="async" fetchpriority="high"><img class="ap-cor" src="/assets/img/sobre-recorte.webp" width="1800" height="1012" alt="" aria-hidden="true" decoding="async"></figure></div>`;
}

/* Mosaico de peças: linhas justificadas (as peças de cada linha têm a mesma altura e a linha fecha na largura),
   então nenhuma sobra sozinha. Cada peça alterna entre duas imagens: sozinha, no hover e no clique. */
const MV = '/assets/v2/img/mosaico/';
const MOSAICO = {
  'sollaris': ['/assets/projetos/sollaris/capa.webp', '/assets/v2/img/sollaris-pecas.webp'],
  'prisma-brandbook': ['/assets/projetos/prisma-brandbook/capa/d.webp', MV + 'prisma-b.webp'],
  'rino': ['/assets/projetos/rino/capa.webp', 'ca'], // 'ca' = capa animada do card oficial (Rino: telas em ângulo)
  'classic-tattoo': ['/assets/projetos/classic-tattoo/capa/d.webp', '/assets/projetos/classic-tattoo/11.webp'],
  'optica-leopoldina': ['/assets/projetos/optica-leopoldina/capa.webp', MV + 'optica-b.webp'],
  'equity360': ['/assets/projetos/equity360/capa.webp', MV + 'equity-b.webp'],
  'csunesp': ['ca', '/assets/projetos/csunesp/capa.webp'] // capa do card oficial, sem o zoom
};
function mosaic(l) {
  setLang(l);
  const P = (s) => PROJ.find((x) => x.slug === s);
  const sub = (p) => T(p.resumo, l) || T(p.entrega, l);
  const card = (s) => { const p = P(s); return p && MOSAICO[s] && { p, ar: 1.5, imgs: MOSAICO[s] }; };
  const posts = (c) => [].concat(c).map((k) => `/assets/posts/${k}/01.webp`).filter(has);
  // Tesoura com Ponta (3:4, formato dos posts): o card principal volta entre cada post
  const tes = P('tesoura'), tesPosts = posts(['Dfa64_Hkeku', 'DfBFA6qEYvV', 'DfIfEzNo48c', 'DXpcfQWEcEz']);
  const tesura = tes && { p: tes, ar: 0.75, main: true, bg: '#111', imgs: [abs(tes.capa)].concat(tesPosts), seq: tesPosts.map((_, k) => `0,${k + 1}`).join(',') };
  // Basement: carrossel mais recente da conta, passando pelos slides
  const ba = P('basement'), baPost = POSTS.filter((x) => x.g === 'basement' && x.n > 1 && !x.reel).sort((a, b) => (a.d < b.d ? 1 : -1))[0];
  const baImgs = baPost ? Array.from({ length: Math.min(baPost.n, 5) }, (_, k) => `/assets/posts/${baPost.c}/0${k + 1}.webp`).filter(has) : [];
  const desv = ba && baImgs.length && { p: ba, ar: 1 / (baPost.r || 1.25), imgs: baImgs };
  const tile = (it) => {
    const n = it.imgs.length;
    const media = it.imgs.map((src, k) => src === 'ca' ? `<span class="piece__i piece__ca work-card-media${k ? ' piece__i--b' : ' is-on'}">${capaHTML(it.p)}</span>` : `<img class="piece__i${k ? '' : ' is-on'}${it.main && !k ? ' piece__i--main' : ''}" src="${src}" alt="" loading="lazy" decoding="async">`).join('');
    return `<figure class="piece-wrap" style="--ar:${it.ar}" data-reveal><div class="piece" style="--c:${it.bg || it.p._c}"${n > 1 ? ` data-swap${it.seq ? ` data-seq="${it.seq}"` : ''} tabindex="0" role="button" aria-label="${u('swap', l)}: ${esc(it.p.titulo)}"` : ''}>${media}</div>
<figcaption class="piece__cap"><a href="${projHref(it.p, l)}" ${trAttr(it.p)}>${esc(it.name || it.p.titulo)}</a>${(it.sub || sub(it.p)) ? `<span>${esc(it.sub || sub(it.p))}</span>` : ''}</figcaption></figure>`;
  };
  const I_ = { ct: card('classic-tattoo'), te: tesura, ri: card('rino'), op: card('optica-leopoldina'), so: card('sollaris'), eq: card('equity360'), cs: card('csunesp'), dv: desv, pr: card('prisma-brandbook') };
  const rows = (list) => list.map((r) => r.map((k) => I_[k]).filter(Boolean)).filter((r) => r.length).map((r) => `<div class="mos__row">${r.map(tile).join('')}</div>`).join('');
  // desktop: 3 linhas (alta · baixa · alta); celular: pares e uma linha cheia
  return `<div class="mos mos--d">${rows([['ct', 'te', 'ri'], ['op', 'so', 'eq'], ['cs', 'dv', 'pr']])}</div><div class="mos mos--m">${rows([['ct', 'te'], ['ri', 'op'], ['so'], ['eq', 'pr'], ['cs', 'dv']])}</div>`;
}

function logosMarquee(l) {
  setLang(l);
  return `<section class="marquee-section"><div class="marquee-mask"><div class="marquee-track" id="marquee-track"><ul class="marquee-list" aria-label="${u('a_logos', l)}">${LOGOS.map(([s, f, n, h, z, w, hh]) => { const p = PROJ.find((x) => x.slug === s); return `<li class="marquee-logo" style="--h:${h}px;--z:${z}"><a class="marquee-link" href="${PRE[l]}/projetos/${p ? pslug(p) : s}/" draggable="false"><img src="/assets/logos/${f}" alt="${esc(n)}" width="${w}" height="${hh}" decoding="async"></a></li>`; }).join('')}</ul></div></div></section>`;
}

function cvItem(e, l, opts = {}) {
  setLang(l);
  const logo = e.txt ? `<div class="cv-logo txt" aria-hidden="true">${esc(e.txt)}</div>` : e.logo ? `<div class="cv-logo${e.round ? ' round' : ''}" aria-hidden="true"><img src="/assets/exp/${e.logo}" alt="" loading="lazy" decoding="async"></div>` : (opts.flag ? `<div class="cv-logo lang-flag" aria-hidden="true">${opts.flag}</div>` : '');
  const roles = e.roles || [];
  const inline = roles.length === 1 && !T(roles[0].r, l) ? `<span class="d">${esc(T(roles[0].d, l))}</span>` : '';
  const caso = visible.find((p) => p.exp && p.exp === T(e.name, 'pt'));
  return `<div class="cv-head">${logo}<div class="cv-main"><p class="cv-name"><span>${esc(T(e.name, l))}</span>${inline}</p>${inline ? '' : roles.map((r) => `<p class="cv-role"><span>${esc(T(r.r, l))}</span><span class="d">${esc(T(r.d, l))}</span></p>`).join('')}${e.desc ? `<p class="cv-desc">${T(e.desc, l).replace(/assets\/exp/g, '/assets/exp')}</p>` : ''}${caso ? `<a class="cv-case" href="${projHref(caso, l)}" ${trAttr(caso)}>${u('see_case', l)}: ${esc(caso.titulo)} ${I.arrow}</a>` : ''}</div></div>`;
}

function timeline(l) {
  return `<div class="timeline" data-timeline><div class="timeline__track" aria-hidden="true"><div class="timeline__fill" data-timeline-fill></div></div>
<ol class="timeline__list">${CV.exp.map((e, i) => `<li class="layer${i % 2 ? ' layer--r' : ''}" data-layer><span class="layer__node" aria-hidden="true"></span><div class="layer__card">${cvItem(e, l)}</div></li>`).join('')}</ol></div>`;
}

const secHead = (label, note, link) => `<div class="sec-head"><div><h2 class="section-label" data-scr>${label}</h2>${note ? `<p class="sec-note">${note}</p>` : ''}</div>${link || ''}</div>`;

/* ---------- Home ---------- */
function home(l) {
  setLang(l);
  const arts = HOME_ARTS.map((x) => ART.find((a) => a.u === x)).filter(Boolean);
  const tick = ART.filter((a) => !a.project && !arts.includes(a) && !a.pin && !TICK_FORA.test(a.t)).slice(0, 24);
  const half = Math.ceil(tick.length / 2), rows = [tick.slice(0, half), tick.slice(half)];
  const rec = POSTS.find((x) => x.c === HOME_REC);
  const recSet = rec ? postSet(rec) : [];
  const dest = HOME_DEST.map(([c, t]) => ({ x: POSTS.find((p) => p.c === c), t })).filter((d) => d.x);
  const nArt = ART.filter((a) => !a.project).length;
  const body = `
<div class="first-screen">
  <section class="wrap"><div class="hero-grid">
    <h1 class="headline" data-rise data-scr>${riseHTML(u('hero', l))}</h1>
    ${heroPortrait(l)}
  </div></section>
  <section class="wrap sec" style="padding-top:0"><div class="about-row">
    <div><h2 class="section-label" data-scr>${u('about_label', l)}</h2><ul class="home-stats"><li><a href="${PRE[l]}/conteudos/#projetos" data-tr="${u('nav_proj', l)}"><b data-count="${visible.length}">${visible.length}</b><span>${u('st_proj', l)}</span></a></li><li><a href="${PRE[l]}/conteudos/" data-tr="${u('nav_art', l)}"><b data-count="${nArt}">${nArt}</b><span>${u('st_art', l)}</span></a></li><li><a href="#destaques"><b data-count="${POSTS.length}">${POSTS.length}</b><span>${u('st_posts', l)}</span></a></li></ul></div>
    <div><p class="about-text" data-scr>${u('bio', l)}</p><a class="section-link" href="${PRE[l]}/sobre/" data-tr="${u('nav_about', l)}" style="margin-top:16px">${u('more', l)} ${I.arrow}</a></div>
  </div></section>
</div>



${rec && recSet.length ? `<section class="sec" id="recente"><div class="wrap">
  <h2 class="section-label" data-scr>${u('recent', l)}</h2>
  <div class="rec-text">${u('rec_txt', l).replace('{ig}', '<a href="https://www.instagram.com/desvendandopop/" target="_blank" rel="noopener">@desvendandopop</a>')}</div>
  <div class="rec-strip">${REC_PAGES.filter((i) => recSet[i]).map((i, k) => `<button class="rec-pg" type="button" data-reveal data-zoom data-lb-set='${JSON.stringify(recSet)}' data-lb-start="${i}" data-cap="Desvendando o Pop" style="--rot:${[-1.2, .8, -.6, 1, -.8][k]}deg"><img src="${recSet[i]}" alt="" loading="lazy" decoding="async"${wh(recSet[i])}></button>`).join('')}</div>
</div></section>` : ''}

${logosMarquee(l)}

<section class="sec" id="trabalhos"><div class="wrap">${secHead(u('work', l), u('pieces_n', l))}${mosaic(l)}
  <div class="sec-foot"><a class="section-link" href="${PRE[l]}/conteudos/#projetos" data-tr="${u('nav_proj', l)}">${u('see_all', l)} (${visible.length}) ${I.arrow}</a></div>
</div></section>

<section class="sec" id="experiencia"><div class="wrap">${secHead(u('exp', l), u('exp_n', l), `<a class="section-link" href="${PRE[l]}/sobre/" data-tr="${u('nav_about', l)}">${u('more', l)} ${I.arrow}</a>`)}${timeline(l)}</div></section>

<section class="sec" id="destaques"><div class="wrap">
  ${secHead(u('dest', l))}
  <div class="dest-grid">${dest.map((d) => { const set = postSet(d.x); return `<a class="art-card dest-card" href="https://www.instagram.com/${d.x.reel ? 'reel' : 'p'}/${d.x.c}/" target="_blank" rel="noopener" data-reveal data-zoom data-lb-set='${JSON.stringify(set)}' data-cap="${esc(d.x.v)}" data-cycle='${JSON.stringify(set.slice(0, 6))}' data-total="${d.x.n || 1}"><div class="art-card-media">${(d.x.n || 1) > 1 ? `<span class="dest-n">1/${d.x.n}</span>` : ''}<img src="${set[0]}" alt="" loading="lazy" decoding="async"${wh(set[0])}></div><p class="art-card-meta">${esc(d.x.v)} — ${esc(fmtDate(d.x.d, l))}</p><h3 class="art-card-title">${esc(T(d.t, l))}</h3></a>`; }).join('')}</div>
</div></section>

<div class="ticker" data-ticker aria-label="${u('arts', l)}">${rows.map((r) => { const items = (hid) => r.map((a) => `<a href="${artHref(a, l)}" draggable="false"${hid ? ' tabindex="-1"' : ''}>${W.HM_OBRAS_HTML ? W.HM_OBRAS_HTML(artTitle(a, l)) : esc(artTitle(a, l))}</a><i aria-hidden="true"></i>`).join(''); return `<div class="tk-row"><div class="tk-track"><div class="tk-set">${items(false)}</div><div class="tk-set" aria-hidden="true">${items(true)}</div></div></div>`; }).join('')}</div>

<section class="sec" id="artigos"><div class="wrap">
  ${secHead(u('arts', l))}
  <div class="art-grid">${arts.map((a) => acard(a, l)).join('')}</div>
  <div class="sec-foot"><a class="section-link" href="${PRE[l]}/conteudos/" data-tr="${u('nav_art', l)}">${u('see_all', l)} (${nArt}) ${I.arrow}</a></div>
</div></section>`;
  return shell(l, {
    path: '/', cur: 'home', title: `Henrique Marinhos — ${u('role', l)}`, desc: u('desc', l), capas: true,
    jsonld: { '@context': 'https://schema.org', '@type': 'Person', name: 'Henrique Marinhos', url: SITE + '/', jobTitle: u('role', l), image: SITE + '/assets/img/retrato-cor.webp', address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressCountry: 'BR' }, alumniOf: { '@type': 'CollegeOrUniversity', name: 'Unesp' }, sameAs: SOCIAL.filter((x) => x[1].startsWith('http') && !x[1].includes('wa.me')).map((x) => x[1]) }
  }, body);
}

/* ---------- Página Projetos ---------- */
function projectsPage(l) {
  setLang(l);
  const fs_ = Object.keys(FILTROS).filter((f) => visible.some((p) => [].concat(p.filtro || []).includes(f)));
  const dash = PROJ.find((p) => p.slug === 'dash-geral');
  const body = `<section class="phead"><div class="wrap"><h1 class="headline" data-rise data-scr>${riseHTML(u('work_title', l))}</h1>${dash ? `<div class="pj-dash"><a class="art-filter" href="${projHref(dash, l)}">${u('dash', l)}</a></div>` : ''}</div></section>
<section class="sec" style="padding-top:0"><div class="wrap">
  <div class="pj-bar" data-filters="#grid-p">
    <div class="pj-main" role="group" aria-label="${u('a_filter', l)}"><button class="art-filter" type="button" data-f="*" aria-pressed="true">${u('allF', l)}</button>${fs_.map((f) => `<button class="art-filter" type="button" data-f="${f}" aria-pressed="false">${T(FILTROS[f], l)}</button>`).join('')}</div>
    <div class="pj-cols" role="group" aria-label="${u('cols', l)}" data-cols-for="#grid-p"><span>${u('cols', l)}</span>${[1, 2, 3, 4, 5].map((n) => `<button type="button" class="art-filter" data-cols="${n}" aria-pressed="false" aria-label="${n} ${u('cols', l).toLowerCase()}">${n}</button>`).join('')}</div>
    <p class="pj-line"><span data-count-out>${visible.length}</span> ${u('n_proj', l)}</p>
  </div>
  <div class="work-grid work-grid--cols" id="grid-p">${visible.map((p) => pcard(p, l)).join('')}</div>
</div></section>`;
  return shell(l, { path: '/projetos/', cur: 'projetos', title: `${u('nav_proj', l)} — Henrique Marinhos`, desc: u('desc', l), capas: true }, body);
}

/* ---------- Página de projeto ---------- */
function edGallery(p, l, list, g, opts = {}) {
  setLang(l);
  // list: telas {img,t,d,n}. Ritmo editorial: com texto → lado a lado; sem texto → pares; excedente → miniaturas
  const fig = (t, cls = '') => `<figure class="ed__fig${cls}" data-reveal><button class="ed__btn" type="button" data-zoom data-lb-g="${g}" data-src="${telaSrc(p, t, l)}" data-cap="${esc(T(t.t, l))}"><img src="${telaSrc(p, t, l)}" alt="${esc(T(t.t, l))}" loading="lazy" decoding="async" width="2048" height="1152"></button><figcaption class="ed__cap"><span>${String(t.n).padStart(2, '0')}</span><b>${esc(T(t.t, l))}</b></figcaption></figure>`;
  const max = opts.max || 7;
  const main = list.slice(0, max), rest = list.slice(max);
  let out = '', buf = [], k = 0;
  const flush = () => { if (!buf.length) return; out += buf.length === 2 ? `<div class="ed__row ed__row--2">${buf.map((t) => fig(t)).join('')}</div>` : `<div class="ed__row zoomin">${fig(buf[0])}</div>`; buf = []; };
  main.forEach((t, i) => {
    const d = T(t.d, l);
    if (d) { flush(); out += `<div class="ed__row ed__row--side${k++ % 2 ? ' is-rev' : ''}"><div class="ed__txt" data-reveal><h3>${esc(T(t.t, l))}</h3><p>${esc(d)}</p></div>${fig(t)}</div>`; }
    else if (i === 0 && !opts.pairFirst) { out += `<div class="ed__row zoomin">${fig(t)}</div>`; }
    else { buf.push(t); if (buf.length === 2) flush(); }
  });
  flush();
  if (rest.length) out += `<div class="ed__thumbs">${rest.map((t) => `<figure class="ed__fig" data-reveal><button class="ed__btn" type="button" data-zoom data-lb-g="${g}" data-src="${telaSrc(p, t, l)}" data-cap="${esc(T(t.t, l))}"><img src="${abs(p.dir + t.img + ((t.idiomasImg || []).includes(l) ? '-t.' + l : '-t') + '.webp')}" alt="${esc(T(t.t, l))}" loading="lazy" decoding="async" width="320" height="180"></button><figcaption class="ed__cap"><span>${String(t.n).padStart(2, '0')}</span>${esc(T(t.t, l))}</figcaption></figure>`).join('')}</div>`;
  return `<div class="ed">${out}</div>`;
}

function postsBlock(p, l) {
  const ps = postsOf(p); if (!ps.length) return '';
  const users = [...new Set(ps.map((x) => x.user))];
  let likes = 0, likesN = 0, com = 0, slides = 0;
  ps.forEach((x) => { const e = (ENG.posts || {})[x.c]; if (e) { if (e[0] != null) { likes += e[0]; likesN++; } com += e[1] || 0; } slides += x.n || 1; });
  const fol = users.reduce((s, us) => s + (((ENG.contas || {})[us] || {}).seg || 0), 0);
  const nf = (n) => n.toLocaleString({ pt: 'pt-BR', en: 'en-US', es: 'es-ES' }[l]);
  const stats = [[ps.length, u('st_pub', l)], [slides, u('st_slides', l)], likesN ? [likes, u('st_likes', l)] : null, com ? [com, u('st_com', l)] : null, fol ? [fol, u('st_fol', l)] : null].filter(Boolean);
  return `<div class="stats3">${stats.map(([n, t]) => `<p class="stat3" data-reveal><b data-count="${n}">${nf(n)}</b><span>${t}</span></p>`).join('')}</div>
<div class="posts" data-drag>${ps.map((x) => {
    const set = Array.from({ length: x.reel ? 1 : (x.n || 1) }, (_, i) => `/assets/posts/${x.c}/${String(i + 1).padStart(2, '0')}.webp`).filter((s) => has(s));
    if (!set.length) return '';
    const cap = T({ pt: x.cap, en: x.cap_en, es: x.cap_es }, l).split('\n')[0].slice(0, 140);
    return `<figure class="post" data-reveal><button class="post__btn" type="button" data-zoom data-lb-g="post-${x.c}" data-lb-set='${JSON.stringify(set)}' data-cap="${esc(x.v)} · ${esc(fmtDate(x.d, l))}"><img src="${set[0]}" alt="${esc(cap)}" loading="lazy" decoding="async"${wh(set[0])}>${set.length > 1 ? `<span class="post__n">${I.stack}${set.length}</span>` : ''}</button><figcaption class="post__d">${esc(x.v)} · ${esc(fmtDate(x.d, l))}</figcaption></figure>`;
  }).join('')}</div>`;
}

function webBlock(p, l) {
  if (!p.web) return '';
  const url = /^https?:/.test(p.web.url) ? p.web.url : abs(p.web.url); // relativo no dado → absoluto
  const shots = (p.shots || []).filter((s) => has(p.dir + s.img));
  return `<div class="browser" data-reveal><div class="browser__bar"><span class="browser__dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="browser__url">${esc(url.replace(/^https?:\/\//, ''))}</span><a class="browser__open" href="${esc(url)}" target="_blank" rel="noopener">${u('open_site', l)} ${I.ext}</a></div>
<iframe class="browser__frame" src="${esc(url)}" title="${esc(p.titulo)}" loading="lazy" referrerpolicy="no-referrer"></iframe></div>
${shots.length ? `<div class="shots">${shots.map((s) => `<button class="ed__btn" type="button" data-zoom data-lb-g="shots" data-src="${abs(p.dir + s.img)}" style="aspect-ratio:auto" data-reveal><img src="${abs(p.dir + s.img)}" alt="" loading="lazy" decoding="async"${wh(p.dir + s.img)}></button>`).join('')}</div>` : ''}`;
}

function caseFacts(p, l) {
  const e = p.etiquetas || {};
  const row = (k, v) => v ? `<dt class="facts__k">${u(k, l)}</dt><dd class="facts__v">${v}</dd>` : '';
  return `<dl class="facts" data-reveal>${row('year', esc(p.ano))}${row('ctx', esc((e.contexto || []).map((x) => etq(x, l)).join(' · ')))}${row('sector', esc((e.setor || []).map((x) => etq(x, l)).join(' · ')))}${row('deliv', esc((e.entrega || []).map((x) => etq(x, l)).join(' · ')))}${row('comp', esc((e.competencias || []).map((x) => etq(x, l)).join(' · ')))}${p.link ? row('link', `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))}</a>`) : ''}</dl>`;
}

function casePage(p, l, i, list) {
  setLang(l);
  const mod = caseMods[p.slug] || {};
  const telas = (p.telas || []).map((t, k) => ({ ...t, n: k + 1 }));
  const secs = (p.secoes && telas.length / p.secoes.length >= 1.6 ? p.secoes : []).map((s, k, a) => ({ t: s.t, from: s.p, to: (a[k + 1] ? a[k + 1].p : telas.length + 1) - 1 }));
  const chapters = [];
  const ctx = { l, T: (v) => T(v, l), u: (k) => u(k, l), esc, p, telas, gallery: (from, to, g, o) => edGallery(p, l, telas.slice(from - 1, to), g || 'g' + from, o), src: (n) => telaSrc(p, telas[n - 1], l), I };
  if (secs.length) secs.forEach((s, k) => {
    const title = T(s.t, l), key = T(s.t, 'pt');
    if (mod.skip && mod.skip.includes(key)) return;
    const custom = mod.chapters && mod.chapters[key];
    // sem a tela de abertura do capítulo (mesmo título), sumário e "Fim": o HTML já faz esse papel
    const raw = telas.slice(s.from - 1, s.to);
    const slice = raw.filter((t, j) => !(j === 0 && raw.length > 1 && T(t.t, 'pt').trim().toLowerCase() === key.trim().toLowerCase()) && !/^(sumário|fim|fim\.)$/i.test(T(t.t, 'pt').trim()));
    const lead = slice.map((t) => T(t.d, l)).find(Boolean);
    if (!custom && !slice.length) return; // capítulo só com a tela de abertura
    chapters.push({ id: 'c-' + (k + 1), title, html: custom ? custom(ctx) : edGallery(p, l, slice, 'c' + k), lead: custom ? (mod.leads && mod.leads[key] ? T(mod.leads[key], l) : '') : '' });
  });
  else if (telas.length) chapters.push({ id: 'c-1', title: u('present', l), html: edGallery(p, l, telas.filter((t) => !/^(sumário|fim)$/i.test(T(t.t, 'pt').trim())), 'c0', { max: 9 }) });
  Object.keys(LINKED).filter((k) => LINKED[k] === p.slug).forEach((k) => {
    const lk = PROJ.find((x) => x.slug === k); if (!lk) return;
    const lt = (lk.telas || []).map((t, j) => ({ ...t, n: j + 1 }));
    const ls = (lk.secoes || []).map((s2, j, a) => ({ t: s2.t, from: s2.p, to: (a[j + 1] ? a[j + 1].p : lt.length + 1) - 1 }));
    const html = ls.length ? ls.map((s2, j) => `<div class="pecas-grp"><h3 class="pecas-grp__t" data-reveal>${esc(T(s2.t, l))}</h3>${edGallery(lk, l, lt.slice(s2.from - 1, s2.to), 'pc' + j, { max: 3, pairFirst: true })}</div>`).join('') : edGallery(lk, l, lt, 'pc', { max: 9 });
    chapters.push({ id: 'pecas', title: u('pieces', l), html, lead: T(lk.resumo, l) });
  });
  if (p.web) chapters.push({ id: 'c-site', title: u('site_t', l), html: webBlock(p, l) });
  if (postsOf(p).length) chapters.push({ id: 'c-posts', title: u('posts_t', l), html: postsBlock(p, l), lead: u('posts_d', l) });
  const intro = T(mod.intro, l) || T(p.intro, l) || (telas[0] && T(telas[0].d, l)) || T(p.resumo, l);
  const next = list[(i + 1) % list.length];
  const ent = T(p.entrega, l).split('·').map((s) => s.trim()).filter(Boolean);
  const e = p.etiquetas || {};
  const body = `
<section class="chero"><div class="wrap chero__in">
  <nav class="crumbs" aria-label="${u('a_crumb', l)}"><a href="${PRE[l]}/conteudos/#projetos" data-tr="${u('nav_art', l)}" data-c="${p._c}" data-ct="${p._ct}">${u('nav_art', l)}</a><span aria-hidden="true">/</span><span aria-current="page">${esc(p.titulo)}</span></nav>
  <h1 class="chero__title" aria-label="${esc(p.titulo)}"><span aria-hidden="true">${words(p.titulo)}</span></h1>
  <p class="chero__lead">${esc(T(p.resumo, l))}</p>
  ${ent.length ? `<ul class="chips">${ent.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
  <dl class="chero__meta"><div><dt>${u('year', l)}</dt><dd>${esc(p.ano)}</dd></div>${(e.contexto || []).length ? `<div><dt>${u('ctx', l)}</dt><dd>${esc(e.contexto.map((x) => etq(x, l)).join(', '))}</dd></div>` : ''}${(e.setor || []).length ? `<div><dt>${u('sector', l)}</dt><dd>${esc(e.setor.map((x) => etq(x, l)).join(', '))}</dd></div>` : ''}${telas.length ? `<div><dt>${u('pages', l)}</dt><dd>${telas.length}</dd></div>` : ''}</dl>
</div>
<div class="wrap"><div class="chero__cover">${mod.cover ? mod.cover(ctx) : `<img src="${abs(p.capa)}" alt="" data-parallax="0.1" decoding="async" fetchpriority="high"${wh(p.capa)}${p.capaCropTop ? ' style="object-position:50% 0"' : ''}>`}</div></div>
</section>
${chapters.length > 1 ? `<div class="cnav"><nav class="wrap cnav__in" data-cnav aria-label="${u('chapters', l)}"><a href="#visao">${u('overview', l)}</a>${chapters.map((c, k) => `<a href="#${c.id}"><b>${String(k + 1).padStart(2, '0')}</b>${esc(c.title)}</a>`).join('')}</nav><span class="cnav__bar" aria-hidden="true"></span></div>` : ''}
<div class="cbody" data-cbody><div class="wrap">
  <section class="intro2" id="visao"><p class="intro2__t" data-reveal>${esc(intro)}</p>${caseFacts(p, l)}</section>
  ${chapters.map((c, k) => `<section class="chapter" id="${c.id}" aria-labelledby="${c.id}-t">
    <div class="chapter__head"><div><p class="chapter__n">${String(k + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</p><h2 class="chapter__t" id="${c.id}-t" data-split>${esc(c.title)}</h2></div>${c.lead ? `<p class="chapter__d" data-reveal>${esc(c.lead)}</p>` : ''}</div>
    ${c.html}
  </section>`).join('')}
</div></div>
<a class="nextp" href="${projHref(next, l)}" ${trAttr(next)} style="${cardStyle(next)}"><div class="wrap nextp__in"><p class="nextp__k">${u('next', l)}</p><p class="nextp__title">${esc(next.titulo)} ${I.arrow}</p></div></a>`;
  return shell(l, {
    path: `/projetos/${pslug(p)}/`, cur: 'projetos', bodyClass: 'is-case', style: `--c:${p._c};--ct:${p._ct};--c2:${p._c2}`, theme: p._c,
    title: `${p.titulo} — Henrique Marinhos`, desc: T(p.resumo, l) || intro, og: has(`assets/og/projetos/${pslug(p)}.jpg`) ? `/assets/og/projetos/${pslug(p)}.jpg` : abs(p.capa), bigContact: false,
    extraHead: mod.head ? mod.head(ctx) : '',
    jsonld: { '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.titulo, url: SITE + projHref(p, l), image: SITE + abs(p.capa), dateCreated: String(p.ano).slice(0, 4), creator: { '@type': 'Person', name: 'Henrique Marinhos', url: SITE + '/' }, description: T(p.resumo, l), inLanguage: HTML_LANG[l] }
  }, body);
}



/* ---------- Sobre ---------- */
function aboutPage(l) {
  setLang(l);
  const certs = CV.certs || [];
  const flagOf = ['pt', 'en', 'es'];
  const body = `<h1 class="sr-only">Sobre Henrique Marinhos</h1>
<section class="wrap"><div class="about-hero">
  <div class="about-hero__txt">
    <p class="about-text" data-scr>${u('bio', l)}</p>
    <div class="about-hero__ctas"><a class="art-filter" href="${CV_PDF}" download="Curriculo - Henrique Marinhos.pdf">${u('cv', l)}</a><a class="art-filter" href="#contato">${u('talk', l)}</a></div>
  </div>
</div></section>
<section class="sec"><div class="wrap">${secHead(u('exp', l), u('exp_n', l))}${timeline(l)}</div></section>
<section class="sec"><div class="wrap duo">
  <div class="duo__c"><h2 class="section-label" data-scr>${u('edu', l)}</h2><div class="cv-list">${CV.edu.map((e) => `<div data-reveal>${cvItem(e, l)}</div>`).join('')}</div></div>
  <div class="duo__c"><h2 class="section-label" data-scr>${u('extra', l)}</h2><div class="cv-list">${CV.extra.map((e) => `<div data-reveal>${cvItem(e, l)}</div>`).join('')}</div></div>
</div></section>
<section class="sec"><div class="wrap duo">
  <div class="duo__c"><h2 class="section-label" data-scr>${u('skills', l)}</h2><div class="cv-list">${CV.skills.map((e) => `<div data-reveal>${cvItem(e, l)}</div>`).join('')}</div>${certs.length ? `<details class="certs-box"><summary class="certs-sum"><span>${u('certs', l)}</span><small>${certs.length}</small><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg></summary><div class="certs">${certs.map((c) => `<button class="cert" type="button" data-zoom data-lb-g="certs" data-src="/${c.src}" data-cap="${esc(c.titulo)} · ${esc(c.org)}"><img src="/${c.t}" alt="" loading="lazy" decoding="async"${wh(c.t)}><span><b>${esc(c.titulo)}</b>${esc(c.org)}</span></button>`).join('')}</div></details>` : ''}</div>
  <div class="duo__c"><h2 class="section-label" data-scr>${u('langs', l)}</h2><div class="cv-list">${CV.idiomas.map((x, i) => `<div data-reveal>${cvItem({ name: x.n, roles: [{ r: '', d: x.lv }] }, l, { flag: FLAGS[flagOf[i]]() })}</div>`).join('')}</div></div>
</div></section>
`;
  return shell(l, { path: '/sobre/', cur: 'sobre', title: `${u('nav_about', l)} — Henrique Marinhos`, desc: u('desc', l) }, body);
}

function notFound(l) {
  const body = `<section class="phead" style="min-height:60vh;display:grid;place-items:center"><div class="wrap"><h1 class="headline" data-rise>${riseHTML(u('nf', l))}</h1><p style="margin-top:24px"><a class="section-link" href="${PRE[l]}/">${u('back_home', l)} ${I.arrow}</a></p></div></section>`;
  return shell(l, { path: '/404.html', cur: '', title: `404 — Henrique Marinhos`, desc: u('desc', l) }, body);
}

/* ---------- Escrita ---------- */
const only = process.env.ONLY; // ex.: ONLY=home,rino para gerar só parte
const want = (k) => !only || only.split(',').includes(k);
let n = 0;
const out = (p, s) => { write(p, s); n++; };
for (const l of LANGS) {
  const pre = PRE[l].replace(/^\//, '');
  const P = (x) => path.posix.join(pre, x);
  if (want('home')) out(P('index.html'), home(l));
  if (want('projetos')) { const to = `${PRE[l]}/conteudos/#projetos`; out(P('projetos/index.html'), `<!doctype html><html lang="${HTML_LANG[l]}"><meta charset="utf-8"><title>${u('nav_proj', l)} — Henrique Marinhos</title><meta name="robots" content="noindex"><link rel="canonical" href="${SITE}${PRE[l]}/conteudos/"><meta http-equiv="refresh" content="0; url=${to}"><script>location.replace('${to}')</script><a href="${to}">${u('nav_art', l)}</a></html>`); } // Projetos agora é uma aba de Conteúdos
  if (want('sobre')) out(P('sobre/index.html'), aboutPage(l));
  PROJ.forEach((p) => {
    if (!(want('cases') || want(p.slug))) return;
    if (SPA.includes(p.slug)) return; // continua no app oficial (/projetos/visao-geral/)
    if (LINKED[p.slug]) { const to = `${PRE[l]}/projetos/${LINKED[p.slug]}/#pecas`; out(P(`projetos/${pslug(p)}/index.html`), `<!doctype html><html lang="${HTML_LANG[l]}"><meta charset="utf-8"><title>${esc(p.titulo)} — Henrique Marinhos</title><link rel="canonical" href="${SITE}${to}"><meta http-equiv="refresh" content="0; url=${to}"><script>location.replace('${to}')</script><a href="${to}">${esc(p.titulo)}</a></html>`); return; }
    const html = casePage(p, l, visible.indexOf(p) < 0 ? 0 : visible.indexOf(p), visible);
    out(P(`projetos/${pslug(p)}/index.html`), html);
    if (ALIAS[p.slug]) out(P(`projetos/${p.slug}/index.html`), html); // endereço antigo continua abrindo (canonical aponta para o novo)
  });
  // artigos e coleções: páginas leves do site oficial (scripts/v2/artigos-oficiais.sh)
  if (l === 'pt' && want('404')) {
    out('404.html', notFound(l));
    out('projeto.html', '<!doctype html><meta charset="utf-8"><title>Projetos — Henrique Marinhos</title><meta http-equiv="refresh" content="0; url=/projetos/"><link rel="canonical" href="' + SITE + '/projetos/"><a href="/projetos/">Projetos</a>');
  }
}
/* sitemap */
if (!only) {
  const urls = [];
  for (const l of LANGS) { ['/', '/conteudos/', '/sobre/'].forEach((x) => urls.push(PRE[l] + x)); visible.forEach((p) => urls.push(projHref(p, l))); ART.filter((a) => !a.project).forEach((a) => urls.push(artHref(a, l))); }
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((x) => `<url><loc>${SITE}${x}</loc></url>`).join('\n')}\n</urlset>\n`);
}
console.log(`ok: ${n} páginas`);

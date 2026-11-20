# henrictrl.github.io

Portfólio de Henrique Marinhos. Site estático (HTML, CSS e JS sem build), publicado pelo GitHub Pages a cada push em `main`.

## Estrutura

```
index.html            início, Projetos, Artigos e Sobre (rotas por pushState)
projeto.html          página de projeto (modelo carregado por projetos/<slug>/)
404.html              carrega o site em qualquer endereço que não seja arquivo
assets/css/           site.css (index), projeto.css, tema.css (modo noturno), motion.css
assets/js/            site.js (index) e módulos compartilhados: idioma, tema, capas, contato, caso, obras
assets/data/          conteúdo: projetos, artigos, posts, coleções, etiquetas, engajamento, glossário
assets/projetos/      telas dos projetos (NN.webp + miniatura NN-t.webp, versões .en/.es)
assets/posts/         slides dos posts do Instagram
en/, es/, projetos/,  páginas leves com metatags por idioma (geradas)
artigos/, sobre/
scripts/miniaturas.mjs  gera miniaturas de compartilhamento, páginas leves, sitemap.xml e robots.txt
```

Conteúdo novo entra pelos arquivos de `assets/data/`. Ao subir mudanças em projetos, artigos ou posts, o workflow `.github/workflows/miniaturas.yml` roda o gerador e publica as páginas leves.

## Rodar localmente

```sh
python3 -m http.server 8080
```

Abra `http://localhost:8080`. Para gerar as páginas leves à mão (com o servidor acima ligado):

```sh
npm i -g playwright && npx playwright install chromium
node scripts/miniaturas.mjs          # FORCE=1 refaz todas as imagens
```

## Site novo (v2)

Páginas estáticas geradas a partir de `assets/data/` (mesmos arquivos de antes) + `assets/data/cv.json`:

```sh
node scripts/v2/gerar.mjs            # tudo (PT, EN, ES)
ONLY=home,rino node scripts/v2/gerar.mjs   # só parte
```

- Base do site original (tokens, Inter, cabeçalho, modo noturno, barra do celular, carregamento): `assets/v2/casa.css` + `assets/js/tema.js`, `barra.js`, `contato.js`, `capas.js`, `obras.js`
- Estrutura nova e efeitos: `assets/v2/v2.css`, `assets/v2/v2.js` (sem bibliotecas)
- Case em HTML próprio: `scripts/v2/cases/<slug>.mjs` (modelo: `rino.mjs`). Sem esse arquivo, o projeto usa o modelo automático (capítulos a partir de `secoes`, telas em galeria editorial, posts, site embutido)
- Cor de cada projeto (capa do case, card virado e cortina da transição): cor dominante da capa + primeiras telas (cache em `assets/v2/cores-dominantes.json`; apague a linha do projeto para recalcular)
- Teste local: `python3 -m http.server 8642` e abrir `http://127.0.0.1:8642`

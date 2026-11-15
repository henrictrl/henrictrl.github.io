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

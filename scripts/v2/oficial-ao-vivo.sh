#!/bin/bash
# Atualiza Conteúdos (e o painel) a partir do site NO AR (henrictrl.github.io):
# index/projeto.html do app, JS/CSS/dados que eles usam, páginas leves do sitemap e imagens novas de artigos e posts.
# Depois reaplica o desvio de cliques e o nome "Conteúdos" (artigos-oficiais.sh) e regera as páginas novas.
# Uso (no Mac, com internet): bash scripts/v2/oficial-ao-vivo.sh
set -e
cd "$(dirname "$0")/../.."
LIVE=https://henrictrl.github.io
TMP=$(mktemp -d)
get() { mkdir -p "$(dirname "$2")"; curl -sfL "$LIVE/$1" -o "$2.part" && mv "$2.part" "$2" || { rm -f "$2.part"; echo "falhou: $1"; }; }
get index.html "$TMP/index.html"; get projeto.html "$TMP/projeto.html"
# JS, CSS e dados referenciados pelo app oficial: vão direto para o site
for f in $(cat "$TMP/index.html" "$TMP/projeto.html" | grep -oE 'assets/(js|css|data)/[A-Za-z0-9._-]+\.(js|css)' | sort -u); do get "$f" "$f"; done
# páginas leves do sitemap (artigos, coleções e painel) nos três idiomas
curl -sf "$LIVE/sitemap.xml" | grep -o "<loc>[^<]*</loc>" | sed "s#<loc>$LIVE/##;s#</loc>##" \
  | grep -E '^((en|es)/)?(artigos/|projetos/(visao-geral|dash-geral)/)' | while read -r p; do get "${p%/}/index.html" "$TMP/${p%/}/index.html"; done
# imagens que ainda não existem aqui (capas de artigos e slides de posts)
node -e "
const fs=require('fs'),vm=require('vm');const c={window:{},document:{documentElement:{lang:'pt'}}};vm.createContext(c);
for(const f of ['artigos','posts'])vm.runInContext(fs.readFileSync('assets/data/'+f+'.js','utf8'),c);
const out=new Set();
(c.window.ARTIGOS||[]).forEach(a=>{if(a.img&&!/^https?:/.test(a.img))out.add(a.img.startsWith('../')?'assets/'+a.img.slice(3):'assets/artigos/'+a.img)});
(c.window.POSTS||[]).forEach(x=>{for(let i=1;i<=(x.reel?1:(x.n||1));i++)out.add('assets/posts/'+x.c+'/'+String(i).padStart(2,'0')+'.webp')});
console.log([...out].filter(p=>!fs.existsSync(p)).join('\n'))" | while read -r f; do if [ -n "$f" ]; then get "$f" "$f"; fi; done
bash scripts/v2/artigos-oficiais.sh "$TMP"
node scripts/v2/gerar.mjs
echo "ao vivo: ok ($TMP)"

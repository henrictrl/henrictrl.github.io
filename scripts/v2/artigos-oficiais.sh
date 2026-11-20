#!/bin/bash
# Conteúdos (artigos) e painel "Veja os números" exatamente como no site oficial:
# 1) assets/v2/oficial.html = index.html do site oficial + desvio de cliques (fora de /artigos e do painel → página nova)
# 2) páginas leves do oficial (artigos, coleções, painel) copiadas e apontadas para oficial.html
# Uso: bash scripts/v2/artigos-oficiais.sh ../../henrictrl.github.io-main-2
set -e
OLD="${1:?caminho do site oficial}"; cd "$(dirname "$0")/../.."
APP=assets/v2/oficial.html
INTER='<meta name="robots" content="noindex"><script>(function(){var ok=/^\/(en\/|es\/)?(artigos(\/|$)|projetos\/(visao-geral|dash-geral)(\/|$))/;addEventListener("click",function(e){if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;var a=e.target.closest&&e.target.closest("a[href]");if(!a||a.target==="_blank")return;var u=new URL(a.href,location.href);if(u.origin!==location.origin||ok.test(u.pathname))return;e.preventDefault();e.stopImmediatePropagation();location.href=u.href;},true);})();</script>'
python3 - "$OLD/index.html" "$APP" "$INTER" <<'PY'
import sys
s=open(sys.argv[1],encoding='utf8').read()
s=s.replace('<head>','<head>'+sys.argv[3],1)
s=s.replace('data-i18n="nav.articles">Artigos<','data-i18n="nav.articles">Conteúdos<')
import re
# título de Conteúdos (agora com Projetos) e a aba Projetos
s=re.sub(r'(<h1 class="art-title[^"]*" data-i18n="art.title">).*?(</h1>)', lambda m: m.group(1)+'<span class="dim">Projetos gráficos, marcas e conteúdos</span><br>sobre cultura, cinema, música, televisão,<br>literatura e tecnologia.'+m.group(2), s, count=1, flags=re.S)
s=s.replace('</body>','<script src="/assets/v2/conteudos.js?v=11" defer></script>\n</body>',1)
s=re.sub(r'(assets/js/site\.js\?v=[^"]*)', r'\1-hm', s) # site.js alterado aqui: versão própria, sem cache do oficial
open(sys.argv[2],'w',encoding='utf8').write(s)
PY
# painel "Veja os números": visualizador de projeto do oficial (projeto.html), com o mesmo desvio de cliques
python3 - "$OLD/projeto.html" assets/v2/projeto-oficial.html "$INTER" <<'PY'
import sys
s=open(sys.argv[1],encoding='utf8').read()
s=s.replace('<head>','<head>'+sys.argv[3],1).replace('data-i18n="nav.articles">Artigos<','data-i18n="nav.articles">Conteúdos<')
open(sys.argv[2],'w',encoding='utf8').write(s)
PY
python3 - assets/v2/projeto-oficial.html assets/v2/projeto-oficial.html <<'PY'
import sys,re
f=sys.argv[1]; s=open(f,encoding='utf8').read()
s=re.sub(r'(data-nav="articles">.*?)Artigos<',r'\1Conteúdos<',s,count=1,flags=re.S)
s=s.replace('</head>','<style>.main-nav a[href$="/projetos/"],.hm-dock a[href$="/projetos/"]{display:none!important}</style></head>',1) # sem página Projetos no menu
open(f,'w',encoding='utf8').write(s)
f=sys.argv[2]; s=open(f,encoding='utf8').read()
s=s.replace('articles:{pt:"Artigos",en:"Articles",es:"Artículos"}','articles:{pt:"Conteúdos",en:"Content",es:"Contenidos"}')
open(f,'w',encoding='utf8').write(s)
PY
# rótulo do menu nos três idiomas (cópia do site.js oficial usada só pelo app)
python3 - assets/js/site.js <<'PY'
import sys
f=sys.argv[1]; s=open(f,encoding='utf8').read()
import re
T=['<span class="dim">Graphic projects, brands and content</span><br>on culture, film, music, TV,<br>literature and technology.','<span class="dim">Proyectos gráficos, marcas y contenidos</span><br>sobre cultura, cine, música, televisión,<br>literatura y tecnología.']
k=iter(T); s=re.sub(r"('art\.title': ')[^']*(')", lambda m: m.group(1)+next(k,m.group(0)[len(m.group(1)):-1])+m.group(2), s)
s=s.replace("'nav.articles': 'Articles'","'nav.articles': 'Content'").replace("'nav.articles': 'Artículos'","'nav.articles': 'Contenidos'").replace("i18n('nav.articles', 'Artigos')","i18n('nav.articles', 'Conteúdos')")
open(f,'w',encoding='utf8').write(s)
PY
for d in artigos en/artigos es/artigos projetos/visao-geral projetos/dash-geral en/projetos/visao-geral en/projetos/dash-geral es/projetos/visao-geral es/projetos/dash-geral; do
  [ -d "$OLD/$d" ] || continue
  mkdir -p "$d"; cp -R "$OLD/$d/." "$d/"
done
grep -rl "fetch('/index.html'" artigos en/artigos es/artigos projetos/visao-geral projetos/dash-geral en/projetos es/projetos 2>/dev/null | while read f; do
  sed -i '' "s#fetch('/index.html'#fetch('/assets/v2/oficial.html'#" "$f" 2>/dev/null || sed -i "s#fetch('/index.html'#fetch('/assets/v2/oficial.html'#" "$f"
done
for f in projetos/visao-geral/index.html projetos/dash-geral/index.html en/projetos/visao-geral/index.html en/projetos/dash-geral/index.html es/projetos/visao-geral/index.html es/projetos/dash-geral/index.html; do
  [ -f "$f" ] && python3 -c "import sys;f=sys.argv[1];s=open(f,encoding='utf8').read().replace(\"fetch('/projeto.html'\",\"fetch('/assets/v2/projeto-oficial.html'\");open(f,'w',encoding='utf8').write(s)" "$f"
done
echo "oficial: $(grep -rl "oficial.html" artigos en/artigos es/artigos projetos en/projetos es/projetos | wc -l) páginas leves"

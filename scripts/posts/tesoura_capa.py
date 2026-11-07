# Tradução das capas do Tesoura com Ponta (card branco com título; trecho [entre colchetes] sublinhado)
import numpy as np,re,itertools
from PIL import Image,ImageDraw,ImageFont
from card import analyze
F=ImageFont.truetype('/home/claude/fonts/Poppins-ExtraBold.ttf',46);SP=10.3
PITCH,TOP,BOT,PADX,R,MAXW=56,83,52,50,28,760
INK=(17,17,17)
def toks(s):  # palavras com flag de sublinhado
    out=[];u=False
    for part in re.split(r'(\[|\])',s):
        if part=='[':u=True;continue
        if part==']':u=False;continue
        out+=[(w,u) for w in part.split()]
    return out
def lw(line): return sum(F.getlength(w) for w,_ in line)+SP*(len(line)-1)
def wrap(tk):
    best=None
    for n in range(1,5):
        for cuts in itertools.combinations(range(1,len(tk)),n-1):
            ls=[tk[a:b] for a,b in zip((0,)+cuts,cuts+(len(tk),))]
            m=max(lw(l) for l in ls)
            if m>MAXW: continue
            sc=m+40*n  # menos linhas, e mais equilibradas
            if best is None or sc<best[0]: best=(sc,ls)
        if best: return best[1]
def render(src,dst,text):
    im=Image.open(src).convert('RGB');(x,y,w,h),_,bg=analyze(src)
    lines=wrap(toks(text));n=len(lines)
    tw=max(lw(l) for l in lines)
    W=max(w,int(tw+2*PADX));Hh=max(h,TOP+PITCH*(n-1)+BOT)
    cx=x+w/2;bot=y+h;x0=int(round(cx-W/2));y0=bot-Hh
    S=4;card=Image.new('L',(W*S,Hh*S),0);ImageDraw.Draw(card).rounded_rectangle((0,0,W*S-1,Hh*S-1),R*S,fill=255)
    card=card.resize((W,Hh),Image.LANCZOS)
    im.paste(Image.new('RGB',(W,Hh),bg),(x0,y0),card)
    d=ImageDraw.Draw(im)
    # centraliza o bloco verticalmente no card (mantém o padrão do original quando a altura é a mesma)
    base0=y0+TOP+((Hh-(TOP+PITCH*(n-1)+BOT))//2)
    for i,l in enumerate(lines):
        bl=base0+i*PITCH;xx=cx-lw(l)/2
        for j,(wd,u) in enumerate(l):
            d.text((xx,bl),wd,font=F,fill=INK,anchor='ls')
            wl=F.getlength(wd)
            if u:
                nxt_u=j<len(l)-1 and l[j+1][1]
                ul=wl+SP if nxt_u else wl
                d.rectangle((xx,bl+3,xx+ul,bl+7),fill=INK)
            xx+=wl+SP
    im.save(dst,'WEBP',quality=82,method=6)
    return n
if __name__=='__main__':
    R0='/home/claude/henrictrl.github.io/assets/posts/'
    T={'DfFjTACEdvj':("[Zoom In, Zoom Out] teaches you to save before you quit","[Zoom In, Zoom Out] enseña a guardar antes de salir"),
       'DfIfEzNo48c':("[Primetime] is unable to look at itself","[Primetime] es incapaz de mirarse a sí mismo"),
       'DfLQ8a8ETcs':("[You’ll Never Believe Who’s Dead] with crochet balaclavas and lots of affection","[You’ll Never Believe Who’s Dead] con pasamontañas de crochet y mucho cariño"),
       'DfN0TxUkWWv':("[The Incomer] is the perfect title for all of us","[The Incomer] es el título perfecto para todos nosotros"),
       'Dfa64_Hkeku':("[All of a Sudden] is not as mysterious as it seems","[All of a Sudden] no es tan misteriosa como parece")}
    # teste de fidelidade: refaz o PT por cima do original
    render(R0+'DfIfEzNo48c/01.webp','/tmp/pt_test.webp','[Primetime] é incapaz de olhar para si mesmo')
    for c,(en,es) in T.items():
        print(c,render(R0+c+'/01.webp',R0+c+'/01.en.webp',en),render(R0+c+'/01.webp',R0+c+'/01.es.webp',es))

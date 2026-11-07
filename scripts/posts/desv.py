# Tradução dos slides do ranking mensal do Desvendando o Pop (DfXT4e8oXpD)
import numpy as np,cv2,json,sys
from PIL import Image,ImageDraw,ImageFont
from ocr import lines as ocr_lines
FONT='/home/claude/fonts/Inter.ttf'
def font(s,wg,op=18):
    f=ImageFont.truetype(FONT,s);f.set_variation_by_axes([op,wg]);return f
BODY=font(41,600);LAB=font(41,800);SONG=font(41,600)
CRL=font(19,700);CRN=font(19,500);BADGE=font(25,800);BIG=font(25,700)
PITCH=43;BASE0=637;MAXW=1000;X0=38
def tcolor(a,bg,box):
    x0,y0,x1,y1=box;p=a[y0:y1,x0:x1].reshape(-1,3).astype(int);d=np.abs(p-np.array(bg)).sum(1)
    sel=p[d>0.7*d.max()];return tuple(int(v) for v in np.median(sel,0))
def wrap(words,f,maxw):
    ls=[];cur=''
    for w in words:
        t=(cur+' '+w).strip()
        if f.getlength(t)<=maxw: cur=t
        else: ls.append(cur);cur=w
    ls.append(cur);return ls
def slide(src,dst,body,hl,credit,lang,badge_txt,extra=None):
    im=Image.open(src).convert('RGB');a=np.array(im);bg,L=ocr_lines(src)
    bgc=tuple(int(v) for v in np.median(a[560:600,40:1040].reshape(-1,3),0))
    blue=bgc[2]>200 and bgc[0]<60
    bl=[l for l in L if l[2]>590 and l[2]<1200]
    dest=[l for l in bl if l[0].startswith('Destaque')][0]
    bodyl=[l for l in bl if l[2]<dest[2]]
    extra_l=[l for l in bl if l[2]>dest[4]+5]
    delta=dest[2]-bodyl[-1][2]
    ink=(255,255,255) if blue else tcolor(a,bgc,(38,600,1000,700))
    d=ImageDraw.Draw(im)
    ybot=(extra_l[-1][4] if extra_l else dest[4])+12
    d.rectangle((20,592,1060,ybot),fill=bgc)
    ls=wrap(body.split(),BODY,MAXW)
    for i,t in enumerate(ls): d.text((X0,BASE0+i*PITCH),t,font=BODY,fill=ink,anchor='ls')
    yb=BASE0+(len(ls)-1)*PITCH+delta
    lab={'en':'Highlight:','es':'Destacada:'}[lang]
    d.text((X0,yb),lab,font=LAB,fill=ink,anchor='ls');d.text((X0+LAB.getlength(lab)+10,yb),hl,font=SONG,fill=ink,anchor='ls')
    if extra_l and extra:  # selo "leia a resenha completa"
        e=extra_l[0];off=e[2]-dest[4]
        # caixa original: varre a cor da caixa ao redor do texto
        bx=(36,yb+ (e[2]-dest[2]) -10)
        tw=BIG.getlength(extra);h=40;y0=yb+(e[2]-dest[2])-10
        boxc=(255,255,255) if blue else (0,0,255);txc=bgc if blue else (255,255,255)
        d.rectangle((36,y0,36+tw+22,y0+h),fill=boxc);d.text((36+11,y0+h/2+1),extra,font=BIG,fill=txc,anchor='lm')
    # crédito
    cr=[l for l in L if l[2]>1270][0];crc=tcolor(a,bgc,(cr[1],cr[2],cr[3],cr[4]))
    d.rectangle((300,1280,780,1314),fill=bgc)
    lab2,name=credit;w=CRL.getlength(lab2+' ')+CRN.getlength(name);x=540-w/2;y=1303
    d.text((x,y),lab2,font=CRL,fill=crc,anchor='ls');d.text((x+CRL.getlength(lab2+' '),y),name,font=CRN,fill=crc,anchor='ls')
    # selo LISTA no topo
    top=a[25:90]
    m=(np.abs(top.astype(int)-np.array((255,255,255) if blue else (0,0,255))).sum(2)<90).astype(np.uint8)
    n,lab_,st,_=cv2.connectedComponentsWithStats(m);k=1+np.argmax(st[1:,4]);x,y,w,h,_=st[k];y+=25
    if badge_txt:
        boxc=tuple(int(v) for v in np.median(a[y+2:y+4,x+2:x+w-2].reshape(-1,3),0))
        d.rectangle((x-4,y-4,x+w+3,y+h+3),fill=bgc)
        tw=BADGE.getlength(badge_txt);nw=int(tw+26);nx=x if x<540 else x+w-nw
        d.rectangle((nx,y,nx+nw-1,y+h-1),fill=boxc);d.text((nx+nw/2,y+h/2+1),badge_txt,font=BADGE,fill=bgc,anchor='mm')
    im.save(dst,'WEBP',quality=82,method=6);return len(ls),len(bodyl)

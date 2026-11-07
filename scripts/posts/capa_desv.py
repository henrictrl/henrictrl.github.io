import numpy as np,cv2
from PIL import Image,ImageDraw,ImageFont
from desv import font
R='/home/claude/henrictrl.github.io/assets/posts/DfXT4e8oXpD/'
src=Image.open(R+'01.webp').convert('RGB');a=np.array(src)
m=np.zeros(a.shape[:2],np.uint8);reg=a[535:810,290:800]
m[535:810,290:800]=((reg.min(2)>150)).astype(np.uint8)*255
m=cv2.dilate(m,np.ones((7,7),np.uint8))
clean=cv2.inpaint(a,m,9,cv2.INPAINT_TELEA)
# medidas do original
def fit(t,w,wg,op=32,cap=None):
    for s in range(30,90):
        f=font(s,wg,op)
        if f.getlength(t)>=w: return f
H=fit("LANÇADOS EM",451,850);SUB=fit("(do pior ao melhor)",354,400,24)
print(H.size,SUB.size,H.getbbox('O',anchor='ls'))
T={'en':(["THE ALBUMS","RELEASED IN","OCTOBER"],"(from worst to best)"),'es':(["LOS ÁLBUMES","LANZADOS EN","OCTUBRE"],"(del peor al mejor)")}
for l,(ls,sub) in T.items():
    im=Image.fromarray(clean);d=ImageDraw.Draw(im)
    for i,t in enumerate(ls): d.text((541,609+i*63),t,font=H,fill=(255,255,255),anchor='ms')
    d.text((541,787),sub,font=SUB,fill=(255,255,255),anchor='ms')
    im.save(R+f'01.{l}.webp','WEBP',quality=82,method=6)
o=Image.new('RGB',(1080*3,500));o.paste(src.crop((0,450,1080,950)),(0,0))
for k,l in enumerate(['en','es']):o.paste(Image.open(R+f'01.{l}.webp').crop((0,450,1080,950)),(1080*(k+1),0))
o.thumbnail((2400,500));o.save('/tmp/c01.jpg')

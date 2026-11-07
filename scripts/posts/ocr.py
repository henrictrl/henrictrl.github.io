import pytesseract,numpy as np,sys,json
from PIL import Image,ImageOps
def lines(path):
    im=Image.open(path).convert('RGB');a=np.array(im)
    bg=np.median(a[300:1250,1040:1075].reshape(-1,3),0)
    # texto claro em fundo azul -> inverte para OCR
    g=ImageOps.grayscale(im)
    if bg.mean()<150: g=ImageOps.invert(g)
    d=pytesseract.image_to_data(g,lang='por',output_type=pytesseract.Output.DICT,config='--psm 3')
    L={}
    for i,t in enumerate(d['text']):
        if not t.strip(): continue
        k=(d['block_num'][i],d['par_num'][i],d['line_num'][i])
        x,y,w,h=d['left'][i],d['top'][i],d['width'][i],d['height'][i]
        if k not in L: L[k]=[t,x,y,x+w,y+h]
        else:
            l=L[k];l[0]+=' '+t;l[1]=min(l[1],x);l[2]=min(l[2],y);l[3]=max(l[3],x+w);l[4]=max(l[4],y+h)
    return tuple(int(v) for v in bg),sorted(L.values(),key=lambda l:(l[2],l[1]))
if __name__=='__main__':
    for f in sys.argv[1:]:
        bg,ls=lines(f);print('==',f.split('/')[-1],bg)
        for l in ls: print(l[1:],l[0])

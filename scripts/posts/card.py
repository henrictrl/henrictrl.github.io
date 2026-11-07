import cv2,numpy as np,sys
from PIL import Image
def analyze(path):
    im=np.array(Image.open(path).convert('RGB'));H,W,_=im.shape
    g=im.min(axis=2)
    m=(g>232).astype(np.uint8)
    m[:H//2]=0
    m=cv2.morphologyEx(m,cv2.MORPH_CLOSE,np.ones((25,25),np.uint8))
    n,lab,st,_=cv2.connectedComponentsWithStats(m)
    k=1+np.argmax(st[1:,4]);x,y,w,h,a=st[k]
    gi=im.max(axis=2)
    ins=gi[y+8:y+h-8,x+20:x+w-20]
    dark=ins<120
    rows=np.where(dark.sum(1)>0)[0]
    # agrupa linhas
    groups=[];s=rows[0];p=rows[0]
    for r in rows[1:]:
        if r-p>3: groups.append((s,p));s=r
        p=r
    groups.append((s,p))
    out=[]
    for a0,a1 in groups:
        cols=np.where(dark[a0:a1+1].any(0))[0]
        out.append((y+8+a0,y+8+a1,x+20+cols[0],x+20+cols[-1],int(dark[a0:a1+1].sum(1).max())))
    bg=tuple(int(v) for v in np.median(im[y+5:y+12,x+40:x+w-40].reshape(-1,3),0))
    return (x,y,w,h),out,bg
if __name__=='__main__':
    for f in sys.argv[1:]:
        print(f,analyze(f))

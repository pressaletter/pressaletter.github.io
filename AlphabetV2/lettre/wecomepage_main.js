 


function setup () {
    smooth()
 
     wc= windowWidth
     hc= windowHeight
    canvas= createCanvas(windowWidth,2550)
  canvas.parent("canvas1")
  
   //canvas.position (10,0)
    xpos=wc/2
    //ligne 
    ligne=0
    //entre les lettre
    defaultspace =5
    //interligne (hauteurligne= 100)+ interligne
    interligne = 100
    blink=0
    // couleur du poster
  

m1= new M (0,10,100,100)
e1=new E (105,10,100,100)
e2=new E(210,10,100,100)
t1=new T(315,10,100,100)

t2=new T (0,120,100,100)
h1=new H (105,120,100,100)
e3= new E (210,120,100,100)

a1=new A (0,230, 100,100)
l1=new L(105,230,100,100)
p1=new P(210,230,100,100)
h2=new H(315,230,100,100)
a2=new A(420,230,100,100)
b1=new B(525,230,100,100)
e4=new E(630,230,100,100)
t3=new T (735,230,100,100)


e= new E (0, 400, 100,420)
t= new T ( 0,900,100,310)
i =new I (0,1290,100,525)



//alphabet specimen
alphabet= []
g= 100
k= 100
spacing =5
r1 = 2000
c1 = 20
c2 = c1+45
r2 = r1+k+spacing
r3 = r2+k+spacing
r4 = r3+k+spacing
r5 = r4+k+spacing
r6 = r5+k+spacing
r7 = r6+k+spacing
r8 = r7+k+spacing
r9 = r8+k+spacing
r10 = r9+k+spacing
r11= r10+k+spacing
r12 = r11+k+spacing
r13 = r12+k+spacing
r14 = r13+k+spacing
r15 = r14+k+spacing
r16 = r15+k+spacing
r17 = r16+k+spacing
r18 = r17+k+spacing
r19 = r18+k+spacing
r20 = r19+k+spacing
r21 = r20+k+spacing
r22 = r21+k+spacing
r23 = r22+k+spacing
r24 = r23+k+spacing
r25 = r24+k+spacing
r26 = r25+k+spacing



lA = new A(c2,r1,g,g)
lB = new B(c2+g+5,r1,g,g)
lC = new C(c2+(g+5)*2,r1,g,g)
lD = new D(c2+(g+5)*3,r1,g,g)
lE = new E(c2+(g+5)*4,r1,g,g)

//r2
lF = new F(c1,r2,g,g)
lG = new G(c1+(g+5)*1,r2,g,g)
lH = new H(c1+(g+5)*2,r2,g,g)
lI = new I(c1+(g+5)*3,r2,g,g)
lJ = new J(c1+(g+5)*4,r2, g,g)
lK = new K(c1+(g+5)*5, r2,g,g)

//r3
lL = new L(c2,r3,g,g)
lM = new M(c2+(g+5)*1,r3,g,g)
lN = new N(c2+(g+5)*2,r3,g,g)
lO = new O(c2+(g+5)*3,r3,g,g)
lP = new P(c2+(g+5)*4,r3,g,g)

//r4
lQ = new Q(c1,r4,g,g)
lR = new R(c1+(g+5)*1,r4,g,g)
lS = new S(c1+(g+5)*2,r4,g,g)
lT = new T(c1+(g+5)*3,r4,g,g)
lU = new U(c1+(g+5)*4,r4,g,g)
lV = new V(c1+(g+5)*5,r4,g,g)

//r5
lW = new W(c2,r5,g,g)
lX = new X(c2+(g+5)*1,r5,g,g)
lY = new Y(c2+(g+5)*2,r5,g,g)
lZ = new Z(c2+(g+5)*3,r5,g,g)

alphabet.push (lA, lB,lC,lD,lE,lF,lG,lH,lI,lJ,lK,lL,lM,lN,lO,lP,lQ,lR,lS,lT,lU,lV,lW,lX,lY,lZ)
print (r26)
}

function draw () {
    background(255)

    m1.drawlettre()
    e1.drawlettre()
    e2.drawlettre()
    t1.drawlettre()

    t2.drawlettre()
    h1.drawlettre()
    e3.drawlettre()

    a1.drawlettre()
    l1.drawlettre()
    p1.drawlettre()
    h2.drawlettre()
    a2.drawlettre()
    b1.drawlettre()
    e4.drawlettre()
    t3.drawlettre()


e.drawlettre()
t.drawlettre()
i.drawlettre() 

parapos = map (mouseX, 0,100, 0,100,true)



select('#para1').position (parapos+80,440)
select('#para2').position (parapos+80,940)
select('#para3').position (parapos+80,1330)

    

for (let i = 0; i < alphabet.length; i++) {

    alphabet[i].drawlettre()
   
}



}



       
        
               



   



function setup() {
    smooth()

    wc = windowWidth -40
    hc = windowHeight-40

    typeprocessor = createCanvas(wc, hc)
    typeprocessor.parent('sketch-holder');
 background(240)
//poster dimension
    fill(255)
    posw=  wc/2-30
    posterx =wc/2+10
    poster = rect (posterx, 10, posw,hc-20 )

 
//alphabet specimen
alphabet= []
g= (wc/2-60)/6
k=g

r1 =12 
r6 = hc-20-k
spacing = 5

c1 = 20
c2 = 20+45
r2 = r1+k+spacing
r3 = r2+k+spacing
r4 = r3+k+spacing
r5 = r4+k+spacing
r6 = r5+k+spacing



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

    gomme = new space(c2+(g+5)*4,r5,g,g)

    espace = new space(c1,r6,(g+5)*4-5,g)
    sautligne = new space(c1+(g+5)*4,r6,g,g)
    savebutton = new space(c1+(g+5)*5,r6,g,g/2-2)
    clearbutton = new space(c1+(g+5)*5,r6+(g/2)+2,g,g/2-2)
   

    alphabet.push (lA, lB,lC,lD,lE,lF,lG,lH,lI,lJ,lK,lL,lM,lN,lO,lP,lQ,lR,lS,lT,lU,lV,lW,lX,lY,lZ)
    print(alphabet)
    //taille gomme
    taille = 0
    jeclicke = false
    //postion x canvas (curseur)
    xpos =   posterx+7
    //ligne 
    ligne = 0
    //entre les lettre
    defaultspace = 5
    //interligne (hauteurligne= 100)+ interligne
    interligne = g+(g/20)
   
    // couleur des boutons
    col = color(255,255,0)
    poscol =color(255)
    encre= color (0)
   
    buttons()

    // xombre=c2-5
    // yombre=r1-5
    // ombre = createGraphics(c2+910,r3+95 )
    // ombre.background(255,255,0), ombre.noFill(), ombre.noStroke()
    
   
}



function draw() {

//image(ombre,xombre,yombre)
   
fill (240), noStroke()
rect(0,0,wc/2,hc)

displayletter()
buttons()
    


}


function mouseIsPressed() {
    clickonletter()
clickonoptions()
}

function mouseClicked() {


clickonletter()
clickonoptions()    
    
}

function keyTyped(){
    for (let i = 0; i < alphabet.length; i++) {
       alphabet[i].hiding()
      // xombre=wc+600
      // yombre=hc+600
       
       espace.hiding()
       sautligne.hiding()
       gomme.hiding()
        
    }
}





function mousePressed() {

 

    jeclicke = true
}
function mouseReleased() {
    jeclicke = false
}

function windowResized() {
    resizeCanvas(wc,hc);
    setup()
    draw()

}

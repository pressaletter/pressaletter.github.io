


function setup() {
    smooth()

    wc = windowWidth -50
    hc = windowHeight-50
    //rangées
    r1 = hc - 310
    r2 = hc - 210
    r3 = hc- 110
    c1 = wc/2 - 475
    c2 = wc/2 - 520
    g= 90

    // 
    alphabet= []

    
    typeprocessor = createCanvas(wc, hc)
    background(255)
fill(255), noStroke()
    rect (40,0,800, 600 )

    
    



//
 


    lA = new Q(860, hc-90,90,90)
  
   
   

    alphabet.push (lA)
    print(alphabet)
    //taille gomme
    taille = 0
    jeclicke = false
    //postion x canvas (curseur)
    xpos = 40
    //ligne 
    ligne = 0
    //entre les lettre
    defaultspace = 5
    //interligne (hauteurligne= 100)+ interligne
    interligne = 90
   
    // couleur des boutons
    col = color(255,255,0)
    poscol =color(255)
    encre= color (0)
   
   // buttons()

    
   
}

function draw() {


   
displayletter()

  
    


}

function mouseClicked() {


clickonletter()
//clickonoptions()    
    
}





function mousePressed() {
    jeclicke = true
}
function mouseReleased() {
    jeclicke = false
}

function windowResized() {
    resizeCanvas(wc,hc);
    draw()

}

class lettre {
     
    constructor (x,y,w,h){
//position    
  this.x = x
  this.y = y 
//largeur max de ma lettre 
  this.w = w
//hauteur 
  this.h = h 

//couleur de la lettre 
this.encre = color(30,30,30)

//couleur du fond
  this.col = color(230,230,230)   
//fonction copie

this.xpos =wc/2
this.ligne=0
this.hligne=100
this.espace= 10


    }
    
  
    setuplettre() {
      this.fond()
      this.encrelettre(mouseX,mouseY)
    }

    
//le fond
    fond() {  

    fill (230), noStroke()
    rect(this.x,this.y,this.w,this.h)
    
    fill (this.col), noStroke()
    rect(this.x,this.y,this.largeur(),this.h)

    }
    
//detecte le click 
    mouseclick (x,y) {
        if(x>this.x-3&&x<this.x+this.w+3&&y>this.y-3&&y<this.y+this.h+3){
            return true 
        }
    }


//detecte la largeur de la lettre 
    largeurcopie(){ 
      return map ( mouseX, this.x, this.x+this.w,5, this.w ,true)
    }
//change la couleur de la lettre 
    encrelettre(x,y){
      if(x>this.x-3&&x<this.x+this.w+3&&y>this.y-3&&y<this.y+this.h+3){
        this.col = color(250,250,250)
        }
        else {this.col= color(230,230,230)}
    }
    copier (x,y){ 
    copy(this.x,this.y,this.largeur(),this.h,x,y,this.largeur(),this.h)
    }

}

  //I---------------------------
  class I extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    
    largeur(){ 
        return map(sin(frameCount / 25), 1,-1,5, this.w,true) 
    }
    epaisseur() {
        return map (cos(frameCount / 25),-1,1, 1, this.largeur()/2-2,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(cos(frameCount / 25),  -1,1, 2,this.h/2,true)
    }
    opacity() {
        return map(sin(frameCount/10), -1,1,0,33,true)
    }
    couleur() { 
        return map (sin (frameCount/10)- 1,1,1, 255,true)
    }

    drawlettre () { 
       fill(this.couleur(),this.opacity()),noStroke()
        rectMode(CORNER)  
     

    rect(this.x+this.largeur()/2-this.epaisseur()/2,this.y,this.epaisseur(),this.h )

    rect(this.x,this.y, this.largeur(), this.barre())
     rect(this.x,this.y+this.h-this.barre(), this.largeur(), this.barre())
     
    
   
    
    }

}
//O----------------------------------

class O extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
        this.xwave= sin(frameCount / 25)
        this.ywave= cos(frameCount / 25)

        
    }
    


    

    largeur(){ 
        return map(sin(frameCount / 25), -1,1,5, this.w,true) 
    }
    epaisseur() {
        return map (cos(frameCount / 25),-1,1, 1, this.largeur()/2-2,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(cos(frameCount / 25),  -1,1, 2,this.h/2,true)
    }
    opacity() {
        return map(sin(frameCount/10), -1,1,0,33,true)
    }
    couleur() { 
        return map (sin (frameCount/10)- 1,1,1, 255,true)
    }

    drawlettre () { 
       fill(this.couleur(),this.opacity()),noStroke()
    
        rectMode(CORNER)  

   
        rect(this.x,this.y+this.h/2,this.epaisseur(),this.h/2 )
    
        rect(this.x+this.largeur()-this.epaisseur(),this.y,this.epaisseur(),this.h/2)
        
        quad(this.x, this.y+this.h/2, this.x+this.epaisseur(), this.y+this.h/2, this.x+this.largeur()-this.epaisseur(), this.y, this.x+this.largeur()-this.epaisseur()*2,this.y )
        quad(this.x+this.largeur(), this.y+this.h/2, this.x+this.largeur()-this.epaisseur(),this.y+this.h/2, this.x+this.epaisseur(), this.y+this.h, this.x+this.epaisseur()*2,this.y+this.h )
         }

        }

//u------------------------

class U extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(sin(frameCount / 25), -1,1,5, this.w,true) 
    }
    epaisseur() {
        return map (cos(frameCount / 25),-1,1, 1, this.largeur()/2-1,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(cos(frameCount / 25),  -1,1, 2,this.h/2,true)
    }
    
    opacity() {
        return map(sin(frameCount/10),-1,1,0,33,true)
    }
    couleur() { 
        return map (sin (frameCount/10)- 1,1,255,1,true)
    }
    drawlettre () { 
       fill(this.couleur(),this.opacity()),noStroke()
    
    rect(this.x,this.y,this.epaisseur(),this.h )
    
    rect(this.x+this.largeur()-this.epaisseur(),this.y,this.epaisseur(),this.h)
    
    rect(this.x,this.y+this.h-this.barre(),this.largeur(), this.barre())
    
    }

}



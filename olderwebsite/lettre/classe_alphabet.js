
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
this.encre = color(0)

//couleur du fond
  this.col = color(255)  
//fonction copie

this.f= color(255)

    }
    
  
    setuplettre() {
      this.fond()

      this.encrelettre(mouseX,mouseY)
    }

    
//le fond
    fond() {  

   fill(this.f),noStroke()
    rect(this.x,this.y,this.w,this.h)
    
    fill (this.col), noStroke(235, 193, 255)
    rect(this.x,this.y,this.largeur()+1,this.h)

    }


//hide 
hiding() {
  this.x=-100
  this.y=-100
  this.w=0
  this.h=0

}



 
//detecte le click 
    mouseclick (x,y) {
        if(x>this.x-3&&x<this.x+this.w+3&&y>this.y-3&&y<this.y+this.h+3){
            return true 
        }
    }


//detecte la largeur de la lettre 
    largeurcopie(){ 
      return map ( mouseX, this.x, this.x+this.w,5, this.w )
    }
//change la couleur du fond
    encrelettre(x,y){
      if(x>this.x-3&&x<this.x+this.w+3&&y>this.y-3&&y<this.y+this.h+3){
        this.col = color(255)
        }
        else {this.col= color(255)}
    }
    copier (x,y){ 
      print("copié")
      copy(this.x,this.y,this.largeur(),this.h,x,y,this.largeur(),this.h)
      }
    

  }







//classe alphabet A-Z -------> espace.js

class A extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
       
    barre () {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/2,true)
    }
   
    nsolve () {
        return map (this.barre(),this.y, this.y+this.h, this.epaisseur(), this.largeur()/2-3, true)
    }

    ecart(){
        return this.largeur()-this.nsolve()*2
    }
    distance(){
        return dist(this.ecart()/2,this.y, this.x+this.nsolve(), this.y+this.h)
    }
    
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  

    quad(this.x,this.y+this.h, this.x+this.nsolve(),this.y+this.h,this.x+this.largeur()/2+this.nsolve()/2,this.y, this.x+this.largeur()/2-this.nsolve()/2,this.y)
    quad(this.x+this.largeur()-this.nsolve(),this.y+this.h, this.x+this.largeur(),this.y+this.h,this.x+this.largeur()/2+this.nsolve()/2,this.y, this.x+this.largeur()/2-this.nsolve()/2,this.y)
   
rectMode(CENTER)
rect( this.x+this.largeur()/2, this.y+this.h*2/3, this.ecart()*2/3, this.epaisseur() )
rectMode(CORNER)  
    }

}

class B extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-3,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/2-3,true)
    }
   
    nsolve () { //which axis?
        return map (this.barre(),this.y, this.y+this.h, this.epaisseur(), this.largeur()/2, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  
    
     rect(this.x,this.y, this.epaisseur(),this.h)
     rect(this.x,this.y, this.largeur(), this.barre())
     rect(this.x,this.y+this.h-this.barre(), this.largeur(), this.barre())
     quad(this.x+this.epaisseur(),this.y+this.h/2, this.x+this.epaisseur()+this.nsolve(),this.y+this.h/2,this.x+this.largeur(),this.y+this.barre(), this.x+this.largeur()-this.nsolve(),this.y+this.barre())
     quad(this.x+this.epaisseur(),this.y+this.h/2, this.x+this.epaisseur()+this.nsolve(),this.y+this.h/2,this.x+this.largeur(),this.y+this.h-this.barre(), this.x+this.largeur()-this.nsolve(),this.y+this.h-this.barre())
    }

}

class C extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/2-1,true)
    }
   
    nsolve () { //which axis?
        return map (this.barre(),this.y, this.y+this.h, this.epaisseur(), this.largeur()/2, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  
    
     rect(this.x,this.y, this.epaisseur(),this.h)
     rect(this.x,this.y, this.largeur(), this.barre())
     rect(this.x,this.y+this.h-this.barre(), this.largeur(), this.barre())
        }

}
class D extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(this.largeur(),  this.y,this.y+this.h, 1,this.h/2,true)
    }
   
    nsolve () { //which axis?
        return map (this.barre(),this.x, this.x+this.w, this.epaisseur(), this.largeur()/2, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  
    
     rect(this.x,this.y, this.epaisseur(),this.h)
     quad(this.x+this.epaisseur()/2,this.y, this.x+this.epaisseur()/2+this.nsolve(),this.y,this.x+this.largeur(),this.y+this.h/2, this.x+this.largeur()-this.nsolve(),this.y+this.h/2)
     quad(this.x+this.epaisseur()/2,this.y+this.h, this.x+this.epaisseur()/2+this.nsolve(),this.y+this.h,this.x+this.largeur(),this.y+this.h/2, this.x+this.largeur()-this.nsolve(),this.y+this.h/2)
    }

}

class E extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
        //épaisseur des barres du E ===/3 // changer les 2 premiers arguments? 
    barre() {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/3-1,true)
    }
   
    
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  

    rect(this.x,this.y,this.epaisseur(),this.h )
    
    
    rect(this.x,this.y,this.largeur(), this.barre())
    rect(this.x,this.y+this.h/2-this.barre()/2,this.largeur(), this.barre())
    
    rect(this.x,this.y+this.h-this.barre(),this.largeur(), this.barre())
    
    }

}

class F extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
        //épaisseur des barres du F ===/3 // changer les 2 premiers arguments? 
    barre() {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/3-1,true)
    }
   
    
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  

    rect(this.x,this.y,this.epaisseur(),this.h )
    
    
    rect(this.x,this.y,this.largeur(), this.barre())
    rect(this.x,this.y+this.h/2-this.barre()/2,this.largeur(), this.barre())
   
    }

}

class G extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
      
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/2-2,true)
    }
   
    nsolve () { //which axis?
        return map (this.barre(),this.y, this.y+this.h,1,this.h/2, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  
    
     rect(this.x,this.y, this.epaisseur(),this.h)
     rect(this.x,this.y+this.h-this.barre(),this.largeur(), this.barre())
     rect(this.x,this.y, this.largeur(), this.barre())
     rect (this.x+this.largeur()-this.epaisseur(), this.y+this.h/2, this.epaisseur(),this.h/2)
    }

}

class H extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
        //épaisseur des barres du E ===/3 // changer les 2 premiers arguments? 
    barre() {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/2,true)
    }
   
    
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  

    rect(this.x,this.y,this.epaisseur(),this.h )
    rect(this.x+this.largeur()-this.epaisseur(),this.y,this.epaisseur(),this.h)
    rect(this.x,this.y+this.h/2-this.barre()/2,this.largeur(), this.barre())
  
    
    }

}

class I extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
    barre () {
            return map(mouseY,  this.y,this.y+this.h, 1,this.h/2-1,true)
    }
    
    drawlettre () { 
        fill(this.encre),noStroke()
        rectMode(CORNER)  

    rect(this.x+this.largeur()/2-this.epaisseur()/2,this.y,this.epaisseur(),this.h )

    rect(this.x,this.y, this.largeur(), this.barre())
     rect(this.x,this.y+this.h-this.barre(), this.largeur(), this.barre())
     
    
   
    
    }

}

class J extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(this.largeur(),  this.y,this.y+this.h, 1,this.h/2,true)
    }
   
    nsolve () { //which axis?
        return map (this.barre(),this.x, this.x+this.w, this.epaisseur(), this.largeur()/2, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  
    
     rect(this.x+this.largeur()-this.epaisseur(),this.y, this.epaisseur(),this.h)
     
     quad(this.x,this.y+this.h/2, this.x+this.nsolve(),this.y+this.h/2,this.x+this.largeur(),this.y+this.h, this.x+this.largeur()-this.nsolve(),this.y+this.h)
    }

}

class K extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(this.largeur(),  this.y,this.y+this.h, 2,this.h/2,true)
    }
   
    nsolve () { //which axis?
        return map (this.barre(),this.x, this.x+this.w, this.epaisseur(), this.largeur()/2, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  
    
     rect(this.x,this.y, this.epaisseur(),this.h)
     quad(this.x+this.epaisseur()/2,this.y+this.h/2, this.x+this.epaisseur()/2+this.nsolve(),this.y+this.h/2,this.x+this.largeur(),this.y, this.x+this.largeur()-this.nsolve(),this.y)
     quad(this.x+this.epaisseur()/2,this.y+this.h/2, this.x+this.epaisseur()/2+this.nsolve(),this.y+this.h/2,this.x+this.largeur(),this.y+this.h, this.x+this.largeur()-this.nsolve(),this.y+this.h)
    }

}


class L extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/2,true)
    }
   
    
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  

    rect(this.x,this.y,this.epaisseur(),this.h )
    
    
    
    rect(this.x,this.y+this.h-this.barre(),this.largeur(), this.barre())
    
    }

}


class M extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }
    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/3-1,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(mouseY,  this.y,this.y+this.h, 1,this.largeur()/3-1,true)
    }
   
    nsolve () {
        return map (this.barre(),this.y, this.y+this.h, this.epaisseur(), this.largeur()/3, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  

    rect(this.x,this.y,this.barre(),this.h )
    
    rect(this.x+this.largeur()-this.barre(),this.y,this.barre(),this.h)

    quad(this.x+this.nsolve()/2,this.y, this.x+this.nsolve()/2+this.nsolve(),this.y,this.x+this.largeur()/2+this.nsolve()/2,this.y+this.h, this.x+this.largeur()/2-this.nsolve()/2,this.y+this.h)
    quad(this.x+this.largeur()-this.nsolve()/2-this.nsolve(),this.y, this.x+this.largeur()-this.nsolve()/2,this.y,this.x+this.largeur()/2+this.nsolve()/2,this.y+this.h, this.x+this.largeur()/2-this.nsolve()/2,this.y+this.h)
    
    }

}


class N extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-2,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(this.largeur(),  this.y,this.y+this.h, 1,this.h/2,true)
    }
   
    nsolve () { //which axis?
        return map (this.barre(),this.x, this.x+this.w, this.epaisseur(), this.largeur()/2, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  

    rect(this.x,this.y,this.epaisseur(),this.h )
    
    rect(this.x+this.largeur()-this.epaisseur(),this.y,this.epaisseur(),this.h)
    
    quad(this.x,this.y, this.x+this.nsolve(),this.y,this.x+this.largeur(),this.y+this.h, this.x+this.largeur()-this.nsolve(),this.y+this.h)
    
    }

}


class O extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-2,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(mouseY,  this.y,this.y+this.h, 2,this.h/2,true)
    }
   
    
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  

    rect(this.x,this.y+this.h/2,this.epaisseur(),this.h/2 )
    
    rect(this.x+this.largeur()-this.epaisseur(),this.y,this.epaisseur(),this.h/2)
    
    quad(this.x, this.y+this.h/2, this.x+this.epaisseur(), this.y+this.h/2, this.x+this.largeur()-this.epaisseur(), this.y, this.x+this.largeur()-this.epaisseur()*2,this.y )
    quad(this.x+this.largeur(), this.y+this.h/2, this.x+this.largeur()-this.epaisseur(),this.y+this.h/2, this.x+this.epaisseur(), this.y+this.h, this.x+this.epaisseur()*2,this.y+this.h )
    
    }

}

class P extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-3,true) 
    }
    barre () {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/2-3,true)
    }
   
    nsolve () { //which axis?
        return map (this.barre(),this.x, this.x+this.w, this.epaisseur(), this.largeur()/2, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  
    
    rect(this.x,this.y, this.epaisseur(),this.h)
     rect(this.x,this.y, this.largeur(), this.barre())
     quad(this.x+this.epaisseur(),this.y+this.h/2, this.x+this.epaisseur()+this.nsolve(),this.y+this.h/2,this.x+this.largeur(),this.y+this.barre(), this.x+this.largeur()-this.nsolve(),this.y+this.barre())
   
    }

}


class Q extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-2,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/2,true)
    }
    
    
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  

    rect(this.x,this.y+this.h/2,this.epaisseur(),this.h/2 )
    
    rect(this.x+this.largeur()-this.epaisseur(),this.y,this.epaisseur(),this.h/2)
    
    quad(this.x, this.y+this.h/2, this.x+this.epaisseur(), this.y+this.h/2, this.x+this.largeur()-this.epaisseur(), this.y, this.x+this.largeur()-this.epaisseur()*2,this.y )
    quad(this.x+this.largeur(), this.y+this.h/2, this.x+this.largeur()-this.epaisseur(),this.y+this.h/2, this.x+this.epaisseur(), this.y+this.h, this.x+this.epaisseur()*2,this.y+this.h )
    
    quad (this.x+this.largeur()-this.epaisseur(),this.y+this.h, this.x+this.largeur(),this.y+this.h,this.x+this.largeur()/2+this.epaisseur(), this.y+this.h/2, this.x+this.largeur()/2, this.y+this.h/2)
    
    }

}

class R extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
  
    
    }


    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-3,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(mouseY,  this.y,this.y+this.h, 1,this.h/2-3,true)
    }
   
    nsolve () { //which axis?
        return map (this.barre(),this.x, this.x+this.w, this.epaisseur(), this.largeur()/2, true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  
    
     rect(this.x,this.y, this.epaisseur(),this.h)
     rect(this.x,this.y, this.largeur(), this.barre())
     quad(this.x+this.epaisseur(),this.y+this.h/2, this.x+this.epaisseur()+this.nsolve(),this.y+this.h/2,this.x+this.largeur(),this.y+this.barre(), this.x+this.largeur()-this.nsolve(),this.y+this.barre())
     quad(this.x+this.epaisseur(),this.y+this.h/2, this.x+this.epaisseur()+this.nsolve(),this.y+this.h/2,this.x+this.largeur(),this.y+this.h, this.x+this.largeur()-this.nsolve(),this.y+this.h)
    }

}


class S extends lettre{

    constructor(x,y,w,h){
        super(x,y,w,h)
        
    }
    
    
    largeur(){ 
        return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
    }
    epaisseur() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()*3/5,true) 
    }
    poS() {
        return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/6,true) 
    }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre () {
        return map(this.largeur(),  this.y,this.y+this.h, 1,this.h,true)
    }
    
    nsolve () { //which axis?
        return map (this.barre(),this.x, this.x+this.w, this.epaisseur(), this.largeur(), true)
    }
    drawlettre () { 
        fill(this.encre), noStroke()
        rectMode(CORNER)  
    quad(this.x+this.largeur(),this.y, this.x+this.largeur()-this.nsolve(),this.y, this.x, this.y+this.h/3-this.poS(), this.x+this.nsolve(),this.y+this.h/3-this.poS())
    
    quad (this.x, this.y+this.h/3-this.poS(), this.x+this.nsolve(),this.y+this.h/3-this.poS(),this.x+this.largeur(), this.y+this.h*2/3+this.poS(),this.x+this.largeur()-this.nsolve(),this.y+this.h*2/3+this.poS())
    
    quad (this.x, this.y+this.h, this.x+this.nsolve(),this.y+this.h,this.x+this.largeur(), this.y+this.h*2/3+this.poS(),this.x+this.largeur()-this.nsolve(),this.y+this.h*2/3+this.poS())
    }
    
    }

    
    class T extends lettre{

        constructor(x,y,w,h){
            super(x,y,w,h)
            
      
        
        }
    
    
        largeur(){ 
            return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
        }
        epaisseur() {
            return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
        }
        barre () {
                return map(mouseY,  this.y,this.y+this.h, 1,this.h/2-1,true)
        }
        
        drawlettre () { 
            fill(this.encre),noStroke()
            rectMode(CORNER)  
    
        rect(this.x+this.largeur()/2-this.epaisseur()/2,this.y,this.epaisseur(),this.h )
    
        rect(this.x,this.y, this.largeur(), this.barre())
         
        
        }
    
    }

    
    class U extends lettre{

        constructor(x,y,w,h){
            super(x,y,w,h)
            
      
        
        }
    
    
        largeur(){ 
            return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
        }
        epaisseur() {
            return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
        }
            //épaisseur de la barre du U // changer les 2 premiers arguments? 
        barre () {
            return map(mouseY,  this.y,this.y+this.h, 1,this.h/2,true)
        }
       
        
        drawlettre () { 
            fill(this.encre), noStroke()
            rectMode(CORNER)  
    
        rect(this.x,this.y,this.epaisseur(),this.h )
        
        rect(this.x+this.largeur()-this.epaisseur(),this.y,this.epaisseur(),this.h)
        
        rect(this.x,this.y+this.h-this.barre(),this.largeur(), this.barre())
        
        }
    
    }

    
    class V extends lettre{

        constructor(x,y,w,h){
            super(x,y,w,h)
            
      
        
        }
    
    
        largeur(){ 
            return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
        }
        epaisseur() {
            return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-2,true) 
        }
            
        barre () {
            return map(mouseY,  this.y,this.y+this.h, 1,this.h/2,true)
        }
       
        nsolve () {
            return map (this.barre(),this.y, this.y+this.h, this.epaisseur(), this.largeur()/2-3, true)
        }
        drawlettre () { 
            fill(this.encre), noStroke()
            
           
            quad(this.x,this.y, this.x+this.nsolve(),this.y,this.x+this.largeur()/2+this.nsolve()/2,this.y+this.h, this.x+this.largeur()/2-this.nsolve()/2,this.y+this.h)
            quad(this.x+this.largeur()-this.nsolve(),this.y, this.x+this.largeur(),this.y,this.x+this.largeur()/2+this.nsolve()/2,this.y+this.h, this.x+this.largeur()/2-this.nsolve()/2,this.y+this.h)
            
        }
    
    }

    class W extends lettre{

        constructor(x,y,w,h){
            super(x,y,w,h)
            
      
        
        }
    
    
        largeur(){ 
            return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
        }
        epaisseur() {
            return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/3-1,true) 
        }
            //épaisseur de la barre du U // changer les 2 premiers arguments? 
        barre () {
            return map(mouseY,  this.y,this.y+this.h, 1,this.largeur()/3-1,true)
        }
       
        nsolve () {
            return map (this.barre(),this.y, this.y+this.h, this.epaisseur(), this.largeur(), true)
        }
        drawlettre () { 
            fill(this.encre), noStroke()
            rectMode(CORNER)  
    
        rect(this.x,this.y,this.barre(),this.h )
        
        rect(this.x+this.largeur()-this.barre(),this.y,this.barre(),this.h)
    
        quad(this.x+this.nsolve()/2,this.y+this.h, this.x+this.nsolve()/2+this.nsolve(),this.y+this.h,this.x+this.largeur()/2+this.nsolve()/2,this.y, this.x+this.largeur()/2-this.nsolve()/2,this.y)
        quad(this.x+this.largeur()-this.nsolve()/2-this.nsolve(),this.y+this.h, this.x+this.largeur()-this.nsolve()/2,this.y+this.h,this.x+this.largeur()/2+this.nsolve()/2,this.y, this.x+this.largeur()/2-this.nsolve()/2,this.y)
        
        }
    
    }
 
    
    class X extends lettre{

        constructor(x,y,w,h){
            super(x,y,w,h)
            
      
        
        }
    
    
        largeur(){ 
            return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
        }
        epaisseur() {
            return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-3,true) 
        }
            //épaisseur de la barre du U // changer les 2 premiers arguments? 
        barre () {
            return map(this.largeur(),  this.y,this.y+this.h, 1,this.h/2,true)
        }
       
        nsolve () { //which axis?
            return map (this.barre(),this.x, this.x+this.w, this.epaisseur(), this.largeur()/2, true)
        }
        drawlettre () { 
            fill(this.encre), noStroke()
            rectMode(CORNER)  
    
        
        
        quad(this.x,this.y, this.x+this.nsolve(),this.y,this.x+this.largeur(),this.y+this.h, this.x+this.largeur()-this.nsolve(),this.y+this.h)
        quad(this.x,this.y+this.h, this.x+this.nsolve(),this.y+this.h,this.x+this.largeur(),this.y, this.x+this.largeur()-this.nsolve(),this.y)
        
        }
    
    }

    
    class Y extends lettre{

        constructor(x,y,w,h){
            super(x,y,w,h)
            
      
        
        }
    
    
        largeur(){ 
            return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
        }
        epaisseur() {
            return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-3,true) 
        }
            //épaisseur de la barre du U // changer les 2 premiers arguments? 
        barre () {
            return map(mouseY,  this.y,this.y+this.h, 1,this.h-2,true)
        }
       
        nsolve () {
            return map (this.barre(),this.y, this.y+this.h, this.epaisseur(), this.largeur()/2-1, true)
        }
        drawlettre () { 
            fill(this.encre), noStroke()
            rectMode(CORNER)  
    
        quad(this.x,this.y, this.x+this.nsolve(),this.y,this.x+this.largeur()/2+this.nsolve()/2,this.y+this.h/2, this.x+this.largeur()/2-this.nsolve()/2,this.y+this.h/2)
        quad(this.x+this.largeur()-this.nsolve(),this.y, this.x+this.largeur(),this.y,this.x+this.largeur()/2+this.nsolve()/2,this.y+this.h/2, this.x+this.largeur()/2-this.nsolve()/2,this.y+this.h/2)
        rect(this.x+this.largeur()/2-this.nsolve()/2,this.y+this.h/2,this.nsolve(),this.h/2 )
        }
    
    }

    
    class Z extends lettre{

        constructor(x,y,w,h){
            super(x,y,w,h)
            
      
        
        }
    
    
        largeur(){ 
            return map(mouseX, this.x,this.x+this.w, 5,this.w,true) 
        }
        epaisseur() {
            return map (mouseY,this.y, this.y+this.h, 1, this.largeur()/2-1,true) 
        }
            //épaisseur de la barre du U // changer les 2 premiers arguments? 
        barre () {
            return map(mouseY,  this.y,this.y+this.h, 1,this.h/2-1,true)
        }
       
        nsolve () {
            return map (this.barre(),this.x, this.x+this.w, this.epaisseur(), this.largeur(), true)
        }
        drawlettre () { 
            fill(this.encre), noStroke()
            rectMode(CORNER)  
            rect(this.x,this.y,this.largeur(), this.barre())
            rect(this.x,this.y+this.h-this.barre(),this.largeur(), this.barre())
            quad(this.x,this.y+this.h-this.barre(), this.x+this.nsolve(),this.y+this.h-this.barre(),this.x+this.largeur(),this.y+this.barre(), this.x+this.largeur()-this.nsolve(),this.y+this.barre())
    
        
        }
    
    }
    

    class space extends lettre{

        constructor(x,y,w,h){
            super(x,y,w,h)
            
      
        
        }
    
        largeur(){ 
            return map(mouseX, this.x,this.x+this.w, 0,this.w,true) 
        }
        hauteur(){ 
            return map(mouseY, this.y+this.h,this.y, 0,this.h/2,true) 
        }
        drawlettre () {
        noFill(), stroke (255,255,0)
        rect (this.x,this.y, this.w, this.h)
        
    } 
     gomme () {
        fill (240), noStroke()
        rect(this.x,this.y,this.w,this.h)
        noFill(), stroke (255,255,0)
        rect (this.x,this.y, this.w, this.h)
        ellipseMode(CENTER), fill(this.col), noStroke()
        ellipse(this.x+this.w/2,this.y+this.h/2, this.largeur(),this.largeur() )
        this.texte()
        this.texte_gomme()
     }  
    
     espace() {
       fill(this.encre), noStroke()
       rect (this.x,this.y+this.h-this.hauteur(), this.largeur(), this.hauteur())
    this.texte()
    this.texte_espace() 
     }
    
    texte() {
        if (this.mouseclick(mouseX,mouseY)){
        fill(255,255,0,100), noStroke()
        rect (this.x, this.y, this.w, this.h)
    }
    }
    texte_gomme(){ 
        if (this.mouseclick(mouseX,mouseY)){
            
    fill (0)
    let a= 'select the size of the eraser and click to erase'
    text (a, this.x+10, this.y+10, this.w-10, this.h-10)
    }}
    texte_sautligne(){
        fill (0)
        if (this.mouseclick(mouseX,mouseY)){
         
    let b = 'click to return to the line'
    text (b, this.x+10, this.y+10, this.w-10, this.h-10)
    }}
    texte_espace(){fill (0)
        if (this.mouseclick(mouseX,mouseY)){
       
    let c = 'adjust and click to create a space'
    text (c, this.x+10, this.y+10, this.w-10, this.h-10)
    }}
    

    texte_save(){fill (0)
        if (this.mouseclick(mouseX,mouseY)){
       
    let c = 'save the poster'
    text (c, this.x+10, this.y+10, this.w-10, this.h-10)
    }}


    texte_clear(){fill (0)
        if (this.mouseclick(mouseX,mouseY)){
       
    let c = 'clear the poster'
    text (c, this.x+10, this.y+10, this.w-10, this.h-10)
    }}

    }
    
    
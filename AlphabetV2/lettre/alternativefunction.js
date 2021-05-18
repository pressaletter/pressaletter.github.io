


function displayletter() {

// //letters    
     for (let i = 0; i < alphabet.length; i++) {
         alphabet[i].setuplettre()
         alphabet[i].drawlettre()
        
     }

// //options
        gomme.encrelettre(mouseX, mouseY)
        gomme.gomme()
        gommer()
    
        sautligne.setuplettre()
        sautligne.drawlettre()
        sautligne.texte()
        sautligne.texte_sautligne()
    
        espace.setuplettre()
        espace.drawlettre()
        espace.texte()
        espace.texte_espace()
    
    
}

function clickonletter() {

//letters
   
    lettremax =posterx+posw-5
    reset= posterx+7

    
        for (let i = 0; i < alphabet.length; i++) {
            if (alphabet[i].mouseclick(mouseX,mouseY)){
                if(xpos+alphabet[i].largeurcopie()>=lettremax){
                     xpos=reset
                    ligne++
                    if (ligne*interligne+30>hc-30){
                        ligne=0
                    }
                 }
                 alphabet[i].copier(xpos, ligne*interligne+30)
                xpos=xpos+alphabet[i].largeurcopie()+defaultspace
    }  
}

         
}

function clickonoptions(){

 //options
    if (espace.mouseclick(mouseX, mouseY)) {
        if (xpos + espace.largeurcopie() >= lettremax) {
            xpos = reset
            ligne++
        }
       
        xpos = xpos + espace.largeurcopie()
    }

    if (sautligne.mouseclick(mouseX, mouseY)) {
        xpos = reset
        ligne++
    }

    if (gomme.mouseclick(mouseX, mouseY)) {
        taille = gomme.largeur()
    }

    if (savebutton.mouseclick(mouseX, mouseY)) {
        saveposter()
    }

    if (clearbutton.mouseclick(mouseX, mouseY)) {
        clearposter()
    }


}

function gommer() {
    if (overposter(mouseX,mouseY)&&(jeclicke===true)) {
    ellipseMode(CENTER)
    fill(255)
    ellipse(mouseX,mouseY,taille, taille)
    ellipseMode(CORNER)
  
}
    }


    function buttons() {    
            
        savebutton.setuplettre()
        savebutton.drawlettre()
        savebutton.texte()
        savebutton.texte_save()
    
       clearbutton.setuplettre()
       clearbutton.drawlettre()
       clearbutton.texte()
       clearbutton.texte_clear()
    
       

      
    }



    function overposter(x,y) {
            if(x>posterx&&x<posterx+posw&&y>10&&y<10+hc-20){
                return true 
            }
        }
         




    function saveposter() {
        let today = second()
         myposter = get(10,20,wc-40,hc/2);
        
       
      save("poster_"+today+".png");
       
      
    }
      
          
   function clearposter(){
       
              setup()
               xpos=reset
               ligne =0 
   }  
   
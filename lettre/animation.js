 function setup() {
     smooth()
     wc = windowWidth / 5 * 2
     hc = windowHeight / 5 * 2
     cnv = createCanvas(wc, wc)
     cnv.parent('animcanvas')

     g = wc / 3
     xx = wc / 7
     ft = g / 10
     lO = new O(0, 0, wc, wc)
     lI = new I(0, 0, wc, wc)
     lU = new U(0, 0, wc, hc)



 }

 function draw() {

     lO.drawlettre()
     lI.drawlettre()
     lU.drawlettre()
     if (lO.mouseclick(mouseX, mouseY)) {
         showpara()
     } else { hidepara() }

 }

 function windowResized() {
     setup()
     draw()
 }



 function showpara() {

     document.getElementById("halfw").style.display = "block"

 }

 function hidepara() {
     document.getElementById("halfw").style.display = "none"
 }
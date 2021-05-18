class lettre {

    constructor(x, y, w, h, encre, weight) {
        //position    
        this.x = x
        this.y = y
            //largeur max de ma lettre 
        this.w = w
            //hauteur 
        this.h = h
        this.encre = encre
        this.maplargeur = this.x + this.w
            //couleur de la lettre == in draw lettre 
            //  this.0
        var range = 5
        this.weight = weight
    }


    //detecte le click // le hover 

    mouseclick(x, y) {
            var range = 5
            if (x > this.x - range && x < this.x + this.w + range && y > this.y - range && y < this.y + this.h + range) {
                return true
            }
        }
        //detecte la largeur de la lettre 
    largeurcopie() {
        return map(mouseX, this.x, this.x + this.w, 5, this.w)
    }


    borderbox() {
        // console.log("borderbox" + this.x - range, this.y - range, this.w + range * 2, this.h + range * 2)
        noFill(), stroke(160), strokeWeight(1);
        var range = 5
        rect(this.x - range, this.y - range, this.w + range * 2, this.h + range * 2, 2)
    }

}







//classe alphabet A-Z -------> espace.js

class A extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {

        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
        return map(this.weight, this.y, this.y + this.h, 1, this.largeur() * 2 / 5, true)
    }

    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2, true)
    }

    nsolve() {
        return map(this.barre(), this.y, this.y + this.h, this.epaisseur(), this.largeur() / 2 - 3, true)
    }

    barre_max() {
        return map(this.weight, this.y, this.y + this.h, 1, (this.h / 3) - 2, true)
    }
    ecart() {
        return this.largeur() - (this.nsolve() * 2)
    }
    intersect_point(x1, y1, x2, y2, x3, y3, x4, y4) {
        const ua = ((x4 - x3) * (y1 - y3) -
                (y4 - y3) * (x1 - x3)) /
            ((y4 - y3) * (x2 - x1) -
                (x4 - x3) * (y2 - y1));



        const x = x1 + ua * (x2 - x1);
        const y = y1 + ua * (y2 - y1);

        return [x, y]
    }


    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        console.log(this.weight, weight)
        var int_left = this.intersect_point(this.x, this.y + this.h, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y, this.x, this.y + (this.h * 2 / 3), this.x + this.w, this.y + (this.h * 2 / 3));
        var int_right = this.intersect_point(this.x + this.largeur(), this.y + this.h, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y, this.x, this.y + (this.h * 2 / 3), this.x + this.w, this.y + (this.h * 2 / 3));
        fill(this.encre), noStroke()

        quad(this.x, this.y + this.h, this.x + this.nsolve(), this.y + this.h, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y)
        quad(this.x + this.largeur() - this.nsolve(), this.y + this.h, this.x + this.largeur(), this.y + this.h, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y)
            //middle bar
        quad(int_left[0], int_left[1], int_right[0], int_right[1], int_right[0], int_right[1] + this.barre_max(), int_left[0], int_left[1] + this.barre_max())
            // //console.log("largeur" + this.largeur(), "epaisseurr" + this.epaisseur(), "barre" + this.barre(), "nsolve" + this.nsolve(), "ecart" + this.ecart(), "distance" + this.distance())
    }

}

class B extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 3, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2 - 3, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.y, this.y + this.h, this.epaisseur(), this.largeur() / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)
        rect(this.x, this.y, this.largeur(), this.barre())
        rect(this.x, this.y + this.h - this.barre(), this.largeur(), this.barre())
        quad(this.x + this.epaisseur(), this.y + this.h / 2, this.x + this.epaisseur() + this.nsolve(), this.y + this.h / 2, this.x + this.largeur(), this.y + this.barre(), this.x + this.largeur() - this.nsolve(), this.y + this.barre())
        quad(this.x + this.epaisseur(), this.y + this.h / 2, this.x + this.epaisseur() + this.nsolve(), this.y + this.h / 2, this.x + this.largeur(), this.y + this.h - this.barre(), this.x + this.largeur() - this.nsolve(), this.y + this.h - this.barre())
    }

}

class C extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2 - 1, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.y, this.y + this.h, this.epaisseur(), this.largeur() / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)
        rect(this.x, this.y, this.largeur(), this.barre())
        rect(this.x, this.y + this.h - this.barre(), this.largeur(), this.barre())
    }

}
class D extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.largeur(), this.y, this.y + this.h, 1, this.h / 2, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur() / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)
        quad(this.x + this.epaisseur() / 2, this.y, this.x + this.epaisseur() / 2 + this.nsolve(), this.y, this.x + this.largeur(), this.y + this.h / 2, this.x + this.largeur() - this.nsolve(), this.y + this.h / 2)
        quad(this.x + this.epaisseur() / 2, this.y + this.h, this.x + this.epaisseur() / 2 + this.nsolve(), this.y + this.h, this.x + this.largeur(), this.y + this.h / 2, this.x + this.largeur() - this.nsolve(), this.y + this.h / 2)
    }

}

class E extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur des barres du E ===/3 // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 3 - 1, true)
    }



    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)


        rect(this.x, this.y, this.largeur(), this.barre())
        rect(this.x, this.y + this.h / 2 - this.barre() / 2, this.largeur(), this.barre())

        rect(this.x, this.y + this.h - this.barre(), this.largeur(), this.barre())

    }

}

class F extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur des barres du F ===/3 // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 3 - 1, true)
    }



    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)


        rect(this.x, this.y, this.largeur(), this.barre())
        rect(this.x, this.y + this.h / 2 - this.barre() / 2, this.largeur(), this.barre())

    }

}

class G extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2 - 2, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.y, this.y + this.h, 1, this.h / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)
        rect(this.x, this.y + this.h - this.barre(), this.largeur(), this.barre())
        rect(this.x, this.y, this.largeur(), this.barre())
        rect(this.x + this.largeur() - this.epaisseur(), this.y + this.h / 2, this.epaisseur(), this.h / 2)
    }

}

class H extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur des barres du E ===/3 // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2, true)
    }



    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)
        rect(this.x + this.largeur() - this.epaisseur(), this.y, this.epaisseur(), this.h)
        rect(this.x, this.y + this.h / 2 - this.barre() / 2, this.largeur(), this.barre())


    }

}

class I extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
        return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
    }
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2 - 1, true)
    }


    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x + this.largeur() / 2 - this.epaisseur() / 2, this.y, this.epaisseur(), this.h)

        rect(this.x, this.y, this.largeur(), this.barre())
        rect(this.x, this.y + this.h - this.barre(), this.largeur(), this.barre())




    }

}

class J extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.largeur(), this.y, this.y + this.h, 1, this.h / 2, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur() / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x + this.largeur() - this.epaisseur(), this.y, this.epaisseur(), this.h)

        quad(this.x, this.y + this.h / 2, this.x + this.nsolve(), this.y + this.h / 2, this.x + this.largeur(), this.y + this.h, this.x + this.largeur() - this.nsolve(), this.y + this.h)
    }

}

class K extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.largeur(), this.y, this.y + this.h, 2, this.h / 2, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur() / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)
        quad(this.x + this.epaisseur() / 2, this.y + this.h / 2, this.x + this.epaisseur() / 2 + this.nsolve(), this.y + this.h / 2, this.x + this.largeur(), this.y, this.x + this.largeur() - this.nsolve(), this.y)
        quad(this.x + this.epaisseur() / 2, this.y + this.h / 2, this.x + this.epaisseur() / 2 + this.nsolve(), this.y + this.h / 2, this.x + this.largeur(), this.y + this.h, this.x + this.largeur() - this.nsolve(), this.y + this.h)
    }

}


class L extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2, true)
    }



    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)



        rect(this.x, this.y + this.h - this.barre(), this.largeur(), this.barre())

    }

}


class M extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }
    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 3 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 3 - 1, true)
    }

    nsolve() {
        return map(this.barre(), this.y, this.y + this.h, this.epaisseur(), this.largeur() / 3, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.barre(), this.h)

        rect(this.x + this.largeur() - this.barre(), this.y, this.barre(), this.h)

        quad(this.x + this.nsolve() / 2, this.y, this.x + this.nsolve() / 2 + this.nsolve(), this.y, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y + this.h, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y + this.h)
        quad(this.x + this.largeur() - this.nsolve() / 2 - this.nsolve(), this.y, this.x + this.largeur() - this.nsolve() / 2, this.y, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y + this.h, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y + this.h)

    }

}


class N extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 2, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.largeur(), this.y, this.y + this.h, 1, this.h / 2, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur() / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)

        rect(this.x + this.largeur() - this.epaisseur(), this.y, this.epaisseur(), this.h)

        quad(this.x, this.y, this.x + this.nsolve(), this.y, this.x + this.largeur(), this.y + this.h, this.x + this.largeur() - this.nsolve(), this.y + this.h)

    }

}


class O extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 2, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 2, this.h / 2, true)
    }



    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y + this.h / 2, this.epaisseur(), this.h / 2)

        rect(this.x + this.largeur() - this.epaisseur(), this.y, this.epaisseur(), this.h / 2)

        quad(this.x, this.y + this.h / 2, this.x + this.epaisseur(), this.y + this.h / 2, this.x + this.largeur() - this.epaisseur(), this.y, this.x + this.largeur() - this.epaisseur() * 2, this.y)
        quad(this.x + this.largeur(), this.y + this.h / 2, this.x + this.largeur() - this.epaisseur(), this.y + this.h / 2, this.x + this.epaisseur(), this.y + this.h, this.x + this.epaisseur() * 2, this.y + this.h)

    }

}

class P extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
        return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 3, true)
    }
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2 - 3, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur() / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)
        rect(this.x, this.y, this.largeur(), this.barre())
        quad(this.x + this.epaisseur(), this.y + this.h / 2, this.x + this.epaisseur() + this.nsolve(), this.y + this.h / 2, this.x + this.largeur(), this.y + this.barre(), this.x + this.largeur() - this.nsolve(), this.y + this.barre())

    }

}


class Q extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 2, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2, true)
    }



    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y + this.h / 2, this.epaisseur(), this.h / 2)

        rect(this.x + this.largeur() - this.epaisseur(), this.y, this.epaisseur(), this.h / 2)

        quad(this.x, this.y + this.h / 2, this.x + this.epaisseur(), this.y + this.h / 2, this.x + this.largeur() - this.epaisseur(), this.y, this.x + this.largeur() - this.epaisseur() * 2, this.y)
        quad(this.x + this.largeur(), this.y + this.h / 2, this.x + this.largeur() - this.epaisseur(), this.y + this.h / 2, this.x + this.epaisseur(), this.y + this.h, this.x + this.epaisseur() * 2, this.y + this.h)

        quad(this.x + this.largeur() - this.epaisseur(), this.y + this.h, this.x + this.largeur(), this.y + this.h, this.x + this.largeur() / 2 + this.epaisseur(), this.y + this.h / 2, this.x + this.largeur() / 2, this.y + this.h / 2)

    }

}

class R extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 3, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2 - 3, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur() / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)
        rect(this.x, this.y, this.largeur(), this.barre())
        quad(this.x + this.epaisseur(), this.y + this.h / 2, this.x + this.epaisseur() + this.nsolve(), this.y + this.h / 2, this.x + this.largeur(), this.y + this.barre(), this.x + this.largeur() - this.nsolve(), this.y + this.barre())
        quad(this.x + this.epaisseur(), this.y + this.h / 2, this.x + this.epaisseur() + this.nsolve(), this.y + this.h / 2, this.x + this.largeur(), this.y + this.h, this.x + this.largeur() - this.nsolve(), this.y + this.h)
    }

}


class S extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)

    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
        return map(this.weight, this.y, this.y + this.h, 1, this.largeur() * 4 / 5, true)
    }
    poS() {
            return map(this.weight, this.y, this.y + this.h, 1, (this.h * 2 / 5) - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.largeur(), this.y, this.y + this.h, 1, this.h, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur(), true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)
        console.log(this.poS())
        quad(this.x + this.largeur(), this.y, this.x + this.largeur() - this.nsolve(), this.y, this.x, this.y + this.h / 4 + this.poS(), this.x + this.nsolve(), this.y + this.h / 4 + this.poS())

        quad(this.x, this.y + this.h / 4 + this.poS(), this.x + this.nsolve(), this.y + this.h / 4 + this.poS(), this.x + this.largeur(), this.y + this.h * 3 / 4 - this.poS(), this.x + this.largeur() - this.nsolve(), this.y + this.h * 3 / 4 - this.poS())

        quad(this.x, this.y + this.h, this.x + this.nsolve(), this.y + this.h, this.x + this.largeur(), this.y + this.h * 3 / 4 - this.poS(), this.x + this.largeur() - this.nsolve(), this.y + this.h * 3 / 4 - this.poS())
    }

}


class T extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
        return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
    }
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2 - 1, true)
    }


    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x + this.largeur() / 2 - this.epaisseur() / 2, this.y, this.epaisseur(), this.h)

        rect(this.x, this.y, this.largeur(), this.barre())


    }

}


class U extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2, true)
    }



    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.epaisseur(), this.h)

        rect(this.x + this.largeur() - this.epaisseur(), this.y, this.epaisseur(), this.h)

        rect(this.x, this.y + this.h - this.barre(), this.largeur(), this.barre())

    }

}


class V extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
        return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 2, true)
    }

    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2, true)
    }

    nsolve() {
        return map(this.barre(), this.y, this.y + this.h, this.epaisseur(), this.largeur() / 2 - 3, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()


        quad(this.x, this.y, this.x + this.nsolve(), this.y, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y + this.h, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y + this.h)
        quad(this.x + this.largeur() - this.nsolve(), this.y, this.x + this.largeur(), this.y, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y + this.h, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y + this.h)

    }

}

class W extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 3 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 3 - 1, true)
    }

    nsolve() {
        return map(this.barre(), this.y, this.y + this.h, this.epaisseur(), this.largeur() - 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        rect(this.x, this.y, this.barre(), this.h)

        rect(this.x + this.largeur() - this.barre(), this.y, this.barre(), this.h)

        quad(this.x + this.nsolve() / 2, this.y + this.h, this.x + this.nsolve() / 2 + this.nsolve(), this.y + this.h, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y)
        quad(this.x + this.largeur() - this.nsolve() / 2 - this.nsolve(), this.y + this.h, this.x + this.largeur() - this.nsolve() / 2, this.y + this.h, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y)

    }

}


class X extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 3, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.largeur(), this.y, this.y + this.h, 1, this.h / 2, true)
    }

    nsolve() { //which axis?
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur() / 2, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)



        quad(this.x, this.y, this.x + this.nsolve(), this.y, this.x + this.largeur(), this.y + this.h, this.x + this.largeur() - this.nsolve(), this.y + this.h)
        quad(this.x, this.y + this.h, this.x + this.nsolve(), this.y + this.h, this.x + this.largeur(), this.y, this.x + this.largeur() - this.nsolve(), this.y)

    }

}


class Y extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 3, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h - 2, true)
    }

    nsolve() {
        return map(this.barre(), this.y, this.y + this.h, this.epaisseur(), this.largeur() / 2 - 1, true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)

        quad(this.x, this.y, this.x + this.nsolve(), this.y, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y + this.h / 2, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y + this.h / 2)
        quad(this.x + this.largeur() - this.nsolve(), this.y, this.x + this.largeur(), this.y, this.x + this.largeur() / 2 + this.nsolve() / 2, this.y + this.h / 2, this.x + this.largeur() / 2 - this.nsolve() / 2, this.y + this.h / 2)
        rect(this.x + this.largeur() / 2 - this.nsolve() / 2, this.y + this.h / 2, this.nsolve(), this.h / 2)
    }

}


class Z extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2 - 1, true)
    }

    nsolve() {
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur(), true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(this.encre), noStroke()
        rectMode(CORNER)
        rect(this.x, this.y, this.largeur(), this.barre())
        rect(this.x, this.y + this.h - this.barre(), this.largeur(), this.barre())
        quad(this.x, this.y + this.h - this.barre(), this.x + this.nsolve(), this.y + this.h - this.barre(), this.x + this.largeur(), this.y + this.barre(), this.x + this.largeur() - this.nsolve(), this.y + this.barre())


    }



}


class _ extends lettre {

    constructor(x, y, w, h, encre, weight) {
        super(x, y, w, h, encre, weight)



    }


    largeur() {
        return map(this.x + this.w, this.x, this.x + this.w, 5, this.w, true)
    }
    epaisseur() {
            return map(this.weight, this.y, this.y + this.h, 1, this.largeur() / 2 - 1, true)
        }
        //épaisseur de la barre du U // changer les 2 premiers arguments? 
    barre() {
        return map(this.weight, this.y, this.y + this.h, 1, this.h / 2 - 1, true)
    }

    nsolve() {
        return map(this.barre(), this.x, this.x + this.w, this.epaisseur(), this.largeur(), true)
    }

    drawlettre(newx = this.x, newy = this.y, neww = this.w, newh = this.h, encre = this.encre, weight = this.weight) {
        this.x = newx
        this.y = newy
        this.w = neww
        this.h = newh
        this.encre = encre
        this.weight = weight
        fill(255, 0), noStroke()
        rectMode(CORNER)
        rect(this.x, this.y, this.w, this.h);



    }



}
var canvas;
var word = [];
var word_w, word_h, word_space_x, word_space_y;
word_space_x = 5
word_space_y = 5
var this_letter = -1;
var bg_col = 255
var entrance = true;
var encre_entrance = 0;
var encre_poster = bg_col;
const classes = { A: A, B: B, C: C, D: D, E: E, F: F, G: G, H: H, I: I, J: J, K: K, L: L, M: M, N: N, O: O, P: P, Q: Q, R: R, S: S, T: T, U: U, V: V, W: W, X: X, Y: Y, Z: Z, _: _ };
var posterletter;
var poster = [];
var temporary = [];

var neg_col = 230;

//var currx, curry, currw, currh;
var clickx1, clicky1, clickx2, clicky2, clickx3, clicky3;
var xpause, ypause;
var click = 0;
var posternum = 1;;
var selected = false;
let letterpause = false;
var overletter = false;




function setup() {
    smooth()
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvas")
    sentence()
        //  currx = mouseX
        //  curry = mouseY
        //  currw = 50
        //  currh = 50

}

function draw() {
    background(bg_col)

    //currx = mouseX
    // curry = mouseY

    ////DRAW TITLE 
    if (encre_entrance < bg_col) {
        for (let i = 0; i < word.length; i++) {
            // console.log("word" + word)
            word[i].drawlettre(undefined, undefined, undefined, undefined, encre_entrance, mouseY)
        }

    }
    ////FADE OUT OF  TITLE LETTERS
    if (entrance === false) {
        encre_entrance = encre_entrance * 1.3 + 1
        encre_poster = 0
    }

    ////POSTER 
    if (click === 0) {


        if (temporary.length > 0) {


            temporary[temporary.length - 1].drawlettre(mouseX, mouseY, 50, 50, encre_poster, 600)

        }

    }
    if (click === 1) {


        if (mouseX < poster[poster.length - 1].x || mouseY < poster[poster.length - 1].y) {
            poster[poster.length - 1].drawlettre(clickx1, clicky1, mouseX - clickx1, mouseY - clicky1, neg_col, mouseY)

        } else {
            poster[poster.length - 1].drawlettre(clickx1, clicky1, mouseX - clickx1, mouseY - clicky1, encre_poster, mouseY)

        }

    }

    if (click === 2) {

        poster[poster.length - 1].drawlettre(clickx1, clicky1, clickx2 - clickx1, clicky2 - clicky1, undefined, mouseY)

    }

    if (click > 2) { selected = false }

    if (poster.length > 0) {
        for (let i = 0; i < poster.length; i++) {

            // poster[i].drawlettre()
            if (poster[i].mouseclick(mouseX, mouseY)) {
                if (click > 2) { poster[i].borderbox() }

            }

            //else {
            poster[i].drawlettre(undefined, undefined, undefined, undefined, undefined, undefined)
                //poster[this_letter].drawlettre(undefined, undefined, undefined, undefined, undefined, mouseY)
                //}
                // add parameter bold: if click change parameter from mouse y to pause y click again, change again =) 
                // } else if (letterpause === false) {
                //     poster[i].drawlettre(undefined, undefined, undefined, undefined, encre_poster, mouseY)
                // }

        }
        if (letterpause === true) {
            //  letterpause = true

            ypause = mouseY
        }

        if (letterpause === true) {

            //poster[i].drawlettre(undefined, undefined, undefined, undefined, undefined, undefined)
            poster[this_letter].drawlettre(undefined, undefined, undefined, undefined, undefined, ypause)

        }
    }


}

function keyPressed() {

    entrance = false;
    setTimeout(function() { document.getElementById('info').style.display = "inline-block"; }, 1000);



    if (key >= 'a' && key <= 'z') {
        lastkey = key.toUpperCase();
        console.log(lastkey);
        posterletter = new classes[lastkey](0, 0, 0, 0, 0, mouseY)
        selected = true;
        click = 0
        temporary.push(posterletter)
        console.log("temporary" + temporary.length)

    }
    if (keyCode === BACKSPACE) {
        console.log("delete")
        poster.pop();
        click = 0;

    }



}


function mouseClicked() {


    //letterpause = !letterpause;
    if (entrance === false && selected === true) {
        click++
        word.length = 0
    }

    if (click === 1) {
        poster.push(posterletter)
        document.getElementById("helper").innerHTML = "press the delete key to remove the last letter :)";
        clickx1 = mouseX
        clicky1 = mouseY
    } else { document.getElementById("helper").innerHTML = "type a letter on your keyboard and click to place it!"; }
    if (click === 2) {
        clickx2 = mouseX
        clicky2 = mouseY
        click++
    }

    if (entrance === false && selected === false) {

        if (poster.length > 0) {
            for (let i = 0; i < poster.length; i++) {
                if (poster[i].mouseclick(mouseX, mouseY)) {
                    this_letter = i;
                    console.log("thisletter" + this_letter)
                    console.log("ypause" + ypause)
                    letterpause = letterpause ? false : true
                    if (letterpause === true) {
                        //  letterpause = true

                        ypause = mouseY
                    }
                    // else if (letterpause === true) {
                    // letterpause = false
                    //}

                }



            }
        }


    }
    //console.log(click)
    console.log("selected" + selected, "letterpause", letterpause)

}















var list = ["WELCOME PRESS A LETTER",
    "HI PLEASE TYPE A LETTER",
    "ABCDEF GHIJKM NOPQRS TUVWXYZ",
    "ABCDEFGHIJKLM NOPQRSTUVWXYZ",
    "PLEASE PRESS A",
    "I HOPE YOU HAVE A KEYBOARD"

]


function sentence() { createsentence("WELCOME PRESS A_LETTER") }

function createsentence(str) {
    const sentence = str.split(' ').filter(w => w !== '');
    // for (var i = 0; i < sentence.length - 1; i++) {
    //     sentence[i] += " ";
    // }
    console.log("sentence" + sentence)
    word_h = (windowHeight - ((sentence.length + 1) * 5)) / sentence.length
    console.log(windowHeight, windowWidth)
    for (let i = 0; i < sentence.length; i++) {

        createword(sentence[i], word_h, word_space_y)
        word_space_y += word_h + 5
        word_space_x = 5
    }



}

function createword(str, word_h) {

    str.toUpperCase();

    var characters = str.split('');
    console.log(characters)


    word_w = (windowWidth - ((characters.length + 1) * 5)) / characters.length
        //var word = [];
    for (let i = 0; i < characters.length; i++) {
        const letter = new classes[characters[i]](word_space_x, word_space_y, word_w, word_h, 0, mouseY);
        word.push(letter);
        word_space_x += word_w + 5
            //   console.log("x:" + word_space_x, "y:" + word_space_y, "w:" + word_w, "h:" + word_h)
    }

}

function windowResized() {
    console.log("resized")
    if (entrance === true) {
        resizeCanvas(windowWidth, windowHeight);
        //  console.log(windowHeight, windowWidth)
        word_space_x = 5
        word_space_y = 5
        word.length = 0
        sentence()
    }


}



function restart() {
    console.log("clear the canvas, remove all clean all arrays, etc. ")
    resizeCanvas(windowWidth, windowHeight);
    temporary.length = 0
    poster.length = 0
    word.length = 0
    background(bg_col);
}

function saveposter() {
    //save the canvas only if possible
    console.log("the poster is saving,...")
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var postername = "poster" + date + '-' + posternum
    save(canvas, postername + ".jpg")
    posternum++;
}


$(document).ready(function() {
    var What = document.getElementById("what")
    $("canvas").click(function() {
        // console.log("wh")

        if (entrance === true) {
            //  console.log("what")
            if (What.classList.contains("visible")) {
                $("#what").removeClass("visible")
            } else {
                $("#what").addClass("visible")
            }
        }

    });

    $("#i").click(function() {
        console.log("what")
        if (What.classList.contains("visible")) {
            $("#what").removeClass("visible")
        } else {
            $("#what").addClass("visible")
        }
    });

    $("#what").click(function() {
        if (entrance === false) {
            $("#what").removeClass("visible")
        }
    });
});
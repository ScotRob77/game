const heroes = [{
        name: "Hulk",
        image: "../assets/images/hulk.png/",
    },
    {
        name: "Thor",
        image: "https://pixabay.com/images/id-6192858/",
    },
    {
        name: "Captain America",
        image: "https://pixabay.com/images/id-6217287/",
    },
    {
        name: "Vision",
        image: "https://pixabay.com/images/id-6216730/",
    },
    {
        name: "Wanda",
        image: "https://pixabay.com/images/id-6192856/",
    },
    {
        name: "Thanos",
        image: "https://pixabay.com/images/id-4203843/"
    }
]
// Implements game when start button is pressed
/*
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") == "easy") {
                easyGame()
            } else {
                this.getAttribute("hard");
                hardGame();
            }
        })
    }
}) */

/*function startGame() {
 gameTime();
}*/

// Variables
var loop = 0
var tileVisible = true;
var score = 0;


function easyGame() {
    tileVisible = !tileVisible;
    createHeroesVillans();
    loop++;
    if (loop < 20) {
        setTimeout(easyGame, tileVisible ? 2000 : 3000);
    } else  {
        alert("You scored " + score)
        window.location.reload()
    }
}

function hardGame() {
    tileVisible = !tileVisible;
    createHeroesVillans();
    loop++;
    if (loop < 20) {
        setTimeout(hardGame, tileVisible ? 1000 : 2500);
    } else  {
        alert("You scored " + score)
        window.location.reload()
    }
}

function createHeroesVillans() {
    var board = document.getElementById("game-board");
    var classToSet = tileVisible ? "tile visible" : "tile hidden";
    for (var i = 0; i < 6; i++) {
        board.children[i].className = classToSet;
        board.children[i].innerHTML = "";
        board.children[i].onclick = function () {
            score += -2;
        }
    }
    var randomHero = Math.floor(Math.random() * 6) + 1;
    board.children[randomHero - 1].innerHTML = "";
    board.children[randomHero - 1].onclick = function () {
        score += 10;
    }
    board.children[randomHero - 1].className = classToSet + " villain";
}




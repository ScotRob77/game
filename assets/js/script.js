// Implements game when start button is pressed
function startGame() {
    gameTime();
}

// Variables
var loop = 0
var tileVisible = true;
var score = 0;


function gameTime() {
    tileVisible = !tileVisible;
    createHeroesVillans();
    flashTile();
    loop++;
    if (loop < 12) {
        setTimeout(gameTime, 1500);
    } else {
        alert("You scored " + score)
    }
}

function flashTile() {
    var  board = document.getElementById("game-board");
    var classToSet = tileVisible ? "tile visible" : "tile hidden";
    for(var i = 0; i < 6; i++) {
        board.children[i].className = classToSet;
    }
}

function createHeroesVillans() {
    var  board = document.getElementById("game-board");
    for(var i = 0; i < 6; i++) {
    board.children[i].innerHTML = "Hero";
    board.children[i].onclick = function() {
        score += -2;
    }
    }
    var randomHero = Math.floor(Math.random() * 6) + 1;
    board.children[randomHero-1].innerHTML = "Villain";
    board.children[randomHero-1].onclick = function() {
        score++;
    }
}
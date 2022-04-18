function startGame() {
    gameTime();
}

var loop = 0
var tileVisible = true;

function gameTime() {
    tileVisible = !tileVisible;
    createHeroesVillans();
    flashTile();
    loop++;
    if (loop < 12) {
        setTimeout(gameTime, 2000);
    } else {
        alert("Game Over..!")
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
    }
    var randomHero = Math.floor(Math.random() * 6) + 1;
    board.children[randomHero-1].innerHTML = "Villain";
}
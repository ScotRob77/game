function startGame() {
    gameTime();
}

var loop = 0
var tileVisible = false;

function gameTime() {
    tileVisible = !tileVisible;
    loop++;
    if (loop < 12) {
        setTimeout(gameTime, 3000);
    } else {
        alert("Game Over..!")
    }
}

function flashTile() {
    var  board = document.getElementById("game-board");
    var classToSet = "";
    if(tileVisible) {
        classToSet = "tile visible";
    } else {
        classToSet = "tile hidden";
    }
    for(var i = 0; i < 6; i++) {
        board.children[i].className = classToSet;
    }
}
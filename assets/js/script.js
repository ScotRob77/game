function startGame() {
    gameTime();
}

var loop = 0

function gameTime() {
    loop++;
    if (loop < 12) {
        setTimeout(gameTime, 3000);
    } else {
        alert("Game Over..!")
        }
    }
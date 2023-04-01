const player = document.getElementById("player");
let playerX = 0;
let playerY = 0;
let velocityX = 0;
let velocityY = 0;
let onGround = true;
const gravity = 0.5;
const friction = 0.9;
const jumpForce = 10;

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        velocityX = -5;
    } else if (event.code === "ArrowRight") {
        velocityX = 5;
    } else if (event.code === "Space" && onGround) {
        velocityY = -jumpForce;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
        velocityX = 0;
    }
});

function gameLoop() {
    playerX += velocityX;
    playerY += velocityY;

    if (playerY < 0) {
        playerY = 0;
        velocityY = 0;
        onGround = true;
    } else {
        velocityY += gravity;
        onGround = false;
    }

    velocityX *= friction;

    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
    requestAnimationFrame(gameLoop);
}

gameLoop();

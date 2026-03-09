var perso = document.querySelector(".perso");
var obstaclesEl = document.querySelector(".obstacles");
let score = 0;
const scoreDiv = document.getElementById("score");
let obstacleCounted = false;
let gameOver = false;

function sauter() {
    if (gameOver) return;
    if (!perso.classList.contains("animation")) {
        perso.classList.add("animation");
        setTimeout(() => {
            perso.classList.remove("animation");
        }, 500);
    }
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();
        sauter();
    }
});

document.getElementById("btn-jump").addEventListener("touchstart", (e) => {
    e.preventDefault();
    sauter();
}, { passive: false });

var verification = setInterval(function () {
    if (gameOver) return;

    var jeu = document.querySelector(".jeu");
    var jeuWidth = jeu.offsetWidth;

    var persoRect = perso.getBoundingClientRect();
    var obsRect = obstaclesEl.getBoundingClientRect();
    var jeuRect = jeu.getBoundingClientRect();

    var persoBottom = jeuRect.bottom - persoRect.bottom;
    var obsLeft = obsRect.left - jeuRect.left;

    var overlapX = obsRect.left < persoRect.right - 2 && obsRect.right > persoRect.left + 2;
    var overlapY = obsRect.top < persoRect.bottom - 2;

    if (overlapX && overlapY) {
        obstaclesEl.style.animation = "none";
        gameOver = true;
        setTimeout(() => {
            alert("Vous avez perdu \n\nSCORE : " + score);
        }, 50);
        clearInterval(verification);
        return;
    }

    if (obsLeft + obsRect.width < 0 && !obstacleCounted) {
        updateScore();
        obstacleCounted = true;
    }
    if (obsLeft > 0) {
        obstacleCounted = false;
    }
}, 20);

function updateScore() {
    score++;
    scoreDiv.textContent = score;
}

/*By IrouKaizen & Godwin-creator*/
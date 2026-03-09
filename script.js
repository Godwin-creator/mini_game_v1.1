var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");
let score = 0;
const scoreDiv = document.getElementById("score");

let obstacleCounted = false; 

function sauter() {
    if (!perso.classList.contains("animation")) {
        perso.classList.add("animation"); 
        setTimeout(() => {
            perso.classList.remove("animation"); 
        }, 500);
    }
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();
        sauter();
    }
});

var verification = setInterval(function() {
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    // collision
    if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130) {
        obstacles.style.animation = "none";
        alert("Vous avez perdu \n\n SCORE : " + score);
    }

    if (obstaclesLeft <= 0 && !obstacleCounted) {
        updateScore();
        obstacleCounted = true; 
    }

    if (obstaclesLeft > 0) {
        obstacleCounted = false;
    }
}, 20);

function updateScore() {
    score++;
    scoreDiv.textContent = score;
}
/*By IrouKaizen & Godwin-creator*/
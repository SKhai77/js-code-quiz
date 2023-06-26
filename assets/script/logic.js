
var startButton = document.querySelector('.start-button');
startButton.addEventListener('click', startGame)

var timer;
var timerCount = 75;
var timerElement = document.querySelector(".timer");
var isWin = false;

function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                endGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}


function startGame() {
    startTimer();
}

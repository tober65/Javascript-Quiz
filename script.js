timeEl = document.getElementById("timer");

var timeLeft = 5;

function startTimer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            timeLeft = 0;
            timeEl.textContent = "Time: " + timeLeft;

            clearInterval(timerInterval);
        }
    }, 1000);
}

function goToHomepage() {
    console.log("Go to homepage");
    window.location.href = "./index.html"
}
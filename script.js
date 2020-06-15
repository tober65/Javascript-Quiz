question1 = {
    question: "Commonly used data types do not include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    answerIndex: 2
}

timeEl = document.getElementById("timer");
codingStartEl = document.getElementById("codingStartDiv");
quizEl = document.getElementById("quizDiv");

var questionEl = document.getElementById("quizQuestion");
var answer0El = document.getElementById("button0");
var answer1El = document.getElementById("button1");
var answer2El = document.getElementById("button2");
var answer3El = document.getElementById("button3");

var timeLeft = 5;
var correctAnswer = -1;

function displayQuestion(question) {
    questionEl.textContent = question.question;
    answer0El.textContent = question.answers[0];
    answer1El.textContent = question.answers[1];
    answer2El.textContent = question.answers[2];
    answer3El.textContent = question.answers[3];

    correctAnswer = question.answerIndex;
}

function startTimer() {
    codingStartEl.classList.add("hide");
    quizEl.classList.remove("hide");
    timeEl.textContent = "Time: " + timeLeft;

    displayQuestion(question1);

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
    window.location.href = "./index.html"
}

function checkForRightAnswer(answer) {
    if(answer === correctAnswer) {
        console.log("Right answer");
    }
    else {
        console.log("Wrong answer");
        timeLeft -= 10;
    }
}

answer0El.addEventListener("click", function() {
    checkForRightAnswer(0);
});

answer1El.addEventListener("click", function() {
    checkForRightAnswer(1);
});

answer2El.addEventListener("click", function() {
    checkForRightAnswer(2);
});

answer3El.addEventListener("click", function() {
    checkForRightAnswer(3);
});
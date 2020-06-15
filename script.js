questions = [
    {
        question: "Commonly used data types do not include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        answerIndex: 2
    },
    {
        question: "The condition in an if/else statement is enclosed within:",
        answers: ["Quote", "Curly Braces", "Parentheses", "Square Brackets"],
        answerIndex: 1
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answerIndex: 3
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: ["Commas", "Curly Braces", "Quotes", "Parentheses"],
        answerIndex: 2
    },
    {
        question: "A very useful tool used when developing and debugging for printing content to the debugger is:",
        answers: ["Javascript", "terminal / bash", "for loops", "console log"],
        answerIndex: 3
    }
]

timeEl = document.getElementById("timer");
codingStartEl = document.getElementById("codingStartDiv");
quizEl = document.getElementById("quizDiv");
finishedEl = document.getElementById("finishedDiv");
initialsInputEl = document.getElementById("initialsInput");

var questionEl = document.getElementById("quizQuestion");
var answer0El = document.getElementById("button0");
var answer1El = document.getElementById("button1");
var answer2El = document.getElementById("button2");
var answer3El = document.getElementById("button3");

var timerInterval;

var timeLeft = 75;
var correctAnswer = -1;
var questionIndex = 0;

var initialsAndScores = [];

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

    displayQuestion(questions[questionIndex]);

    timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            timeLeft = 0;
            timeEl.textContent = "Time: " + timeLeft;

            stopQuiz();
        }
    }, 1000);
}

function checkForRightAnswer(answer) {
    if (answer === correctAnswer) {
        console.log("Right answer");
    }
    else {
        console.log("Wrong answer");
        timeLeft -= 10;
    }

    questionIndex++;
    if (questionIndex === questions.length) {
        stopQuiz();
    }
    else {
        displayQuestion(questions[questionIndex]);
    }
}

function stopQuiz() {
    clearInterval(timerInterval);

    timeEl.textContent = "Time: " + timeLeft;

    var finalScore = document.getElementById("finalScore");
    finalScore.textContent = "Your final score is " + timeLeft;

    quizEl.classList.add("hide");
    finishedEl.classList.remove("hide");
}

function processInitials() {
    console.log("processInitials");
    initials = initialsInputEl.value;
    score = timeLeft;

    initialsAndScores.push({initials: initials, score: score});
    localStorage.setItem("scores", JSON.stringify(initialsAndScores));

    window.location.href = "./high_scores.html"
};

function init() {
    var scores = localStorage.getItem("scores");

    initialsAndScores = JSON.parse(scores);

    if (initialsAndScores === null) {
        initialsAndScores = [];
    }
}

answer0El.addEventListener("click", function () {
    checkForRightAnswer(0);
});

answer1El.addEventListener("click", function () {
    checkForRightAnswer(1);
});

answer2El.addEventListener("click", function () {
    checkForRightAnswer(2);
});

answer3El.addEventListener("click", function () {
    checkForRightAnswer(3);
});

init();
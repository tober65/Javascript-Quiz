function clearHighScores() {
    localStorage.setItem("scores", "");

    displayHighScores();
}

function goToHomepage() {
    window.location.href = "./index.html";
}

function displayHighScores() {
    var scores = localStorage.getItem("scores");

    var list = document.getElementById("highScoresList");
    list.innerHTML = "";

    if(scores === null || scores === "") {
        return;
    }

    scores = JSON.parse(scores);

    var sortedScores = scores.sort(function(a, b) {return b.score - a.score});

    var shaded = true;

    for (var i = 0; i < sortedScores.length; i++) {
        var item = document.createElement("li");
        item.textContent = "" + sortedScores[i].initials + ": " + sortedScores[i].score;
        if (shaded) {
            item.setAttribute("style", "background-color: #DDDDDD");
        }
        shaded = !shaded;
        list.appendChild(item);
    }
}

displayHighScores();
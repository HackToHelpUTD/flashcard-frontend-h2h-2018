function loadResultsPage(correct, incorrect, title)
{
    clearScreen();
    displayResults(correct, incorrect, title);
}

function clearScreen()
{
    var box = document.getElementsByClassName("main-box")[0];

    while(box.firstChild) 
    {
        box.removeChild(box.firstChild); 
    }
}

function displayResults(correct, incorrect, titleName)
{
    var main = document.getElementsByClassName("main-box")[0];
    var title = document.createElement("div");

    var display_container = document.createElement("div");
    var score_container = document.createElement("div");
    var score = document.createElement("span");
    var correct_container = document.createElement("div");
    var questionsCorrect = document.createElement("span");
    var incorrect_container = document.createElement("div");
    var questionsIncorrect = document.createElement("span");

    var continue_container = document.createElement("div");
    var play_container = document.createElement("div");
    var choose_container = document.createElement("div");
    var playAgain = document.createElement("span");
    var chooseDeck = document.createElement("span");

    main.appendChild(title);
    main.appendChild(display_container);

    display_container.appendChild(score_container);
    display_container.appendChild(correct_container);
    display_container.appendChild(incorrect_container);
    display_container.appendChild(continue_container);

    score_container.appendChild(score);
    correct_container.appendChild(questionsCorrect);
    incorrect_container.appendChild(questionsIncorrect);
    
    continue_container.appendChild(play_container);
    continue_container.appendChild(choose_container);
    play_container.appendChild(playAgain);
    choose_container.appendChild(chooseDeck);

    title.innerHTML = titleName;
    score.innerHTML = "Score: " + ((correct/(correct+incorrect))*100) + "%";
    questionsCorrect.innerHTML = "Correct: " + correct;
    questionsIncorrect.innerHTML = "Incorrect: " + incorrect;
    playAgain.innerHTML = "Play again";
    chooseDeck.innerHTML = "Choose deck";

    continue_container.classList.add("continue");
    play_container.classList.add("play");
    choose_container.classList.add("choose");
}
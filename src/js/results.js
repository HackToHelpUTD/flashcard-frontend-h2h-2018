function loadResultsPage(correct, incorrect, title) {
	clearScreen();
	displayResults(correct, incorrect, title);
}

function clearScreen() {
	var box = document.getElementsByClassName("main-box")[0];

	while (box.firstChild) {
		box.removeChild(box.firstChild);
	}
}

function displayResults(correct, incorrect, titleName) {
	var main = document.getElementsByClassName("main-box")[0];
	var title_container = document.createElement("div");
	var title = document.createElement("h1");
	title_container.appendChild(title);


	var display_container = document.createElement("div");
	var summary_container = document.createElement("div");
	var summary = document.createElement("span");
	var score_container = document.createElement("div");
	var score = document.createElement("span");
	var correct_container = document.createElement("div");
	var questionsCorrect = document.createElement("span");
	var incorrect_container = document.createElement("div");
	var questionsIncorrect = document.createElement("span");

	var continue_container = document.createElement("div");
	var playAgainButton = document.createElement("button");
	var chooseDeckButton = document.createElement("button");

	main.appendChild(title_container);
	main.appendChild(display_container);

	display_container.appendChild(summary_container);
	display_container.appendChild(score_container);
	display_container.appendChild(correct_container);
	display_container.appendChild(incorrect_container);
	display_container.appendChild(continue_container);

	summary_container.appendChild(summary);
	score_container.appendChild(score);
	correct_container.appendChild(questionsCorrect);
	incorrect_container.appendChild(questionsIncorrect);

	continue_container.appendChild(playAgainButton);
	continue_container.appendChild(chooseDeckButton);

	title.innerHTML = titleName;
	summary.innerHTML = "Score Summary";
	score.innerHTML = "Score: " + Math.round(((correct / (correct + incorrect)) * 100)) + "%";
	questionsCorrect.innerHTML = "Correct: " + correct;
	questionsIncorrect.innerHTML = "Incorrect: " + incorrect;
	playAgainButton.innerHTML = "Play again";
	chooseDeckButton.innerHTML = "Choose deck";

	continue_container.classList.add("continue");
	//play_container.classList.add("play");
	//choose_container.classList.add("choose");
	display_container.classList.add("lightgreenbox", "results-spacing");
	main.classList.add("fontchanges")
	summary_container.classList.add("underline")
	playAgainButton.classList.add("btn", "yellowbtn", "play");
	chooseDeckButton.classList.add("btn", "yellowbtn", "choose");
	title.classList.add("slim");

	playAgainButton.addEventListener("click", play_again);
	chooseDeckButton.addEventListener("click", choose_deck);
}

function play_again() {
	console.log("play again");
	clearScreen();
	initFlashcardPage(session_info.topic, session_info.subtopic, session_info.type, session_info.difficulty);
}

function choose_deck() {
	console.log("choose deck");

	var box = document.getElementsByClassName("container")[0];
	while (box.firstChild) {
		box.removeChild(box.firstChild);
	}

	init();
}
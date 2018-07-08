var counter = 0;
var questions = [];
var questionsCorrect = 0;
var questionsIncorrect = 0;

function initFlashcardPage(topic, subtopic, type, difficulty) {
  setupForFlashcards();

  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var div1 = document.createElement("div");
  div1.classList.add("col-0", "col-sm-3");

  var div2 = document.createElement("div");
  div2.classList.add("col-12", "col-sm-6");

  var div3 = document.createElement("div");
  div3.classList.add("col-0", "col-sm-3");

  var leftspace = document.createElement("div");
  var main = document.createElement("div");
  var rightspace = document.createElement("div");
  var title = document.createElement("div");

  var flashcard_container = document.createElement("div");
  var flip_flashcard = document.createElement("div");
  var front_flashcard = document.createElement("div");
  var spanFront = document.createElement("span");
  var spanBack = document.createElement("span");
  var back_flashcard = document.createElement("div");

  var scoreLabel = document.createElement("span");
  var score_container = document.createElement("div");

  var button_container = document.createElement("div");
  var correctButton = document.createElement("img");
  var incorrectButton = document.createElement("img");
  correctButton.src = "src/imgs/correctButton.png";
  incorrectButton.src = "src/imgs/incorrectButton.png";

  leftspace.classList.add("col-sm-2", "col-md-3");
  main.classList.add("col-12", "col-sm-8", "col-md-6", "main-box");
  rightspace.classList.add("col-sm-2", "col-md-3");
  title.id = "title";
  flashcard_container.classList.add("flip-container");
  flip_flashcard.classList.add("flippable", "appcon", "ac-bicycle");
  front_flashcard.classList.add("front");
  back_flashcard.classList.add("back");
  score_container.classList.add("score");
  button_container.classList.add("flashcard-buttons");
  correctButton.classList.add("correct");
  incorrectButton.classList.add("incorrect");

  row.appendChild(leftspace);
  row.appendChild(main);
  row.appendChild(rightspace);
  main.appendChild(title);
  main.appendChild(flashcard_container);
  main.appendChild(score_container);
  main.appendChild(button_container);
  score_container.appendChild(scoreLabel);
  button_container.appendChild(correctButton);
  button_container.appendChild(incorrectButton);
  flashcard_container.appendChild(flip_flashcard);
  flip_flashcard.appendChild(front_flashcard);
  front_flashcard.appendChild(spanFront);
  back_flashcard.appendChild(spanBack);
  flip_flashcard.appendChild(back_flashcard);

  var container = document.getElementsByClassName("container")[0];
  container.appendChild(row);

  scoreLabel.innerHTML = "Score: " + getScore() + "%";

  flashcard_container.addEventListener("click", toggleCardFlip);
  correctButton.addEventListener("click", answerCorrect);
  incorrectButton.addEventListener("click", answerIncorrect);

  displayTitle(topic, subtopic);
  getQuestions(topic, subtopic, type, difficulty);
}

function getScore() {
  if(questionsCorrect == 0 && questionsIncorrect == 0) {
    return 0;
  } else {
    return Math.round((questionsCorrect/(questionsCorrect + questionsIncorrect)) * 100);
  }
}

function answerCorrect() {
  questionsCorrect++;
  var score = document.getElementsByTagName("span")[2];
  score.innerHTML = "Score: " + getScore() + "%";
  populateFlashcard(questions);
}

function answerIncorrect() {
  questionsIncorrect++;
  var score = document.getElementsByTagName("span")[2];
  score.innerHTML = "Score: " + getScore() + "%";
  populateFlashcard(questions);
}

function setupForFlashcards() {
  var container = document.getElementsByClassName("container")[0];

  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function getQuestions(topic, subtopic, type, difficulty) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      var obj = JSON.parse(request.response);
      questions = obj.questions;
      populateFlashcard(questions);
    }
  }

  request.open("GET", "/api/questions?subtopic=" + subtopic + "&type=" + type + "&difficulty=" + difficulty);
  request.send();
}

function populateFlashcard(questions) {
  if (counter >= questions.length) {
    var title = document.getElementById("title");
    counter = 0;
    loadResultsPage(questionsCorrect, questionsIncorrect, title.innerText);
    questionsCorrect = 0;
    questionsIncorrect = 0;
  } else {
    var front = document.getElementsByClassName("front")[0];
    var question = front.getElementsByTagName("span")[0]; 
    var answer = document.getElementsByTagName("span")[1];
    question.innerHTML = questions[counter]["question-obj"]["question-text"]; 
    answer.innerHTML = questions[counter]["question-obj"]["answer-text"]; 
    counter++;
  }
}

function displayTitle(topic, subtopic) {
  var title = document.getElementById("title");
  title.innerHTML = subtopic + " " + topic;

  title.classList.add("title"); 
}

function toggleCardFlip() {
  var flashcard = document.getElementsByClassName("flippable")[0];
  var classes = flashcard.classList;
  
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] === "flipme") {
      flashcard.classList.remove("flipme");
      return;
    }
  }

  // The function will only make it down here if "flipme" was not present
  flashcard.classList.add("flipme");
}

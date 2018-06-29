var counter = 0;
var questions = [];

function initFlashcardPage(topic, subtopic, type, difficulty){
  setupForFlashcards();

  var row = document.getElementsByClassName("row")[0];

  var leftspace = document.createElement("div");
  var main = document.createElement("div");
  var rightspace = document.createElement("div");
  var title = document.createElement("div");
  var flashcard_container = document.createElement("div");
  var flip_flashcard = document.createElement("div");
  var front_flashcard = document.createElement("div");
  var span = document.createElement("span");
  var back_flashcard = document.createElement("div");

  leftspace.classList.add("col-sm-2", "col-md-3");
  main.classList.add("col-12", "col-sm-8", "col-md-6");
  rightspace.classList.add("col-sm-2", "col-md-3");
  title.id = "title";
  flashcard_container.classList.add("flip-container");
  flip_flashcard.classList.add("flippable", "appcon", "ac-bicycle");
  front_flashcard.classList.add("front");
  back_flashcard.classList.add("back");

  row.appendChild(leftspace);
  row.appendChild(main);
  row.appendChild(rightspace);
  main.appendChild(title);
  main.appendChild(flashcard_container);
  flashcard_container.appendChild(flip_flashcard);
  flip_flashcard.appendChild(front_flashcard);
  front_flashcard.appendChild(span);
  flip_flashcard.appendChild(back_flashcard);

  var container = document.getElementsByClassName("container")[0];
  container.appendChild(row);

  flashcard_container.addEventListener("click", toggleCardFlip);

  displayTitle(topic, subtopic);
  getQuestions(subtopic, type, difficulty);
}

function setupForFlashcards() {
  var row = document.getElementsByClassName("row")[0];

  while(row.firstChild) {
    row.removeChild(row.firstChild);
  }
}

function getQuestions(subtopic, type, difficulty) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if(request.readyState == 4 && request.status == 200) {
      var obj = JSON.parse(request.response);
      questions = obj.questions;
      populateFlashcard(questions);
    }
  }

  request.open("GET", "/api/questions?subtopic=" + subtopic + "&type=" + type + "&difficulty=" + difficulty);
  request.send();
}

function populateFlashcard(questions) {
  var front = document.getElementsByClassName("front")[0];
  var question = front.getElementsByTagName("span")[0]; 
  question.innerHTML = questions[counter]["question-obj"]["question-text"]; 
  counter++;
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

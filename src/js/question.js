function initFlashcardPage(){
  var row = document.createElement("div");
  var leftspace = document.createElement("div");
  var main = document.createElement("div");
  var rightspace = document.createElement("div");
  var title = document.createElement("div");
  var flashcard_container = document.createElement("div");
  var flip_flashcard = document.createElement("div");
  var front_flashcard = document.createElement("div");
  var span = document.createElement("span");
  var back_flashcard = document.createElement("div");

  row.classList.add("row");
  leftspace.classList.add("col-md-3");
  main.classList.add("col-12" , "col-md-6");
  rightspace.classList.add("col-md-3");
  title.id = "title";
  flashcard_container.classList.add("flip-container");
  flip_flashcard.classList.add("flippable", "appcon", "ac-bicycle");
  front_flashcard.classList.add("front");
  back_flashcard.classList.add("back")

  row.appendChild(leftspace);
  row.appendChild(main);
  row.appendChild(rightspace);
  main.appendChild(title);
  main.appendChild(flashcard_container);
  flashcard_container.appendChild(flip_flashcard);
  flip_flashcard.appendChild(front_flashcard);
  front_flashcard.appendChild(span);
  flip_flashcard.appendChild(back_flashcard)

  var container = document.getElementsByClassName("container")[0];
  container.appendChild(row);

  displayTitle("Hi", "Hello")
}



function displayTitle(topic, subtopic) {
  var title = document.getElementById("title");
  title.innerHTML = subtopic + " " + topic;

  title.classList.add("title")
}
addEventListener('DOMContentLoaded', function() {
  initFlashcardPage()
});
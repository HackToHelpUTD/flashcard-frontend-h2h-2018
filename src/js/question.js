/* var request = new XMLHttpRequest();

request.open("GET", "https://fcg-api.herokuapp.com/api/topics/topic?=ethics");

request.onreadystatechange = function () {
  console.log(request.response);
}

request.send(); */

var alltopics = {
  topics: ["History", "Ethics", "Philosophy"],
};
  
var allsubtopics = {
  subtopics: ["Pre-Modern", "Contemporary", "Ancient"],
};

function getQuestionTitle() {
  var questiontitle = document.createElement("h1");
  questiontitle.classList.add("title");
  questiontitle.innerHTML = allsubtopics.subtopics[1] + " " + alltopics.topics[2];
  var container = document.getElementsByClassName("container")[0];
  container.appendChild(questiontitle);
}

document.addEventListener("DOMContentLoaded", getQuestionTitle);

getQuestionTitle();
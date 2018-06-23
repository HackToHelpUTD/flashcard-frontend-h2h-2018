var title;

function loadSubTopics(topic) {
  createSubTopicsPage(topic);
  subTopicsAPI(topic);
}

function createSubTopicsPage(topic) {
  //Title
  title = document.createElement("div"); 
  title.innerHTML = "Choose a " + topic + " Deck";
 
  title.classList.add("title");
  var titles = document.getElementsByClassName("title")[0];
  titles.appendChild(title);
  //Calls the back button function
  backToTopics();
}

//Obtains subtopics APIs
function subTopicsAPI(topic) {
  var subtopics;
  var request = new XMLHttpRequest(); //create a new instance of XMLHttpRequest object
  request.onreadystatechange =  function() {
  if(request.readyState == 4 && request.status == 200) {
      console.log(request.response);
      var obj = JSON.parse(request.response);
      subtopics = obj.subtopics;
      console.log(subtopics);
      subTopicButtons(subtopics);
    }
  }
  request.open("GET", "/api/topics?topic=" + topic);
  request.send();
}

function subTopicButtons(subtopics) {

   for(var i = 0; i < subtopics.length; i++) {
    var button = document.createElement("button");
    var box = document.getElementsByClassName("box")[0];
    var subtopic = subtopics[i];
    button.innerHTML = subtopic;
    button.classList.add("button-style", "btn", "btn-light", "btn-block");
    box.appendChild(button);
  }

}

//Back Button
function backToTopics()
{
  var backButton = document.createElement("img");
  backButton.src="src/imgs/back-button.png";
  backButton.classList.add("back-Button");

  backButton.addEventListener("click", function() {
    var container = document.getElementsByClassName("container")[0];
    while(container.firstChild) {
        container.removeChild(container.firstChild);
      }
    init();
  });
  var placeImg = document.getElementById("backButton");
  placeImg.appendChild(backButton);
}


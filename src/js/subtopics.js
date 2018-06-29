function loadSubTopics(topic) {
  createSubTopicsPage(topic);
  subTopicsAPI(topic);
  createModal();
}

function createSubTopicsPage(topic) {
  // Title
  var title = document.createElement("div"); 
  title.innerHTML = "Choose a " + topic + " Deck";
 
  title.classList.add("title");
  var titles = document.getElementsByClassName("title")[0];
  titles.appendChild(title);
  // Calls the back button function
  backToTopics();
}

// Obtains subtopics APIs
function subTopicsAPI(topic) {
  var subtopics;
  var request = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest object

  request.onreadystatechange =  function() {
    if (request.readyState == 4 && request.status == 200) {
      var obj = JSON.parse(request.response);
      subtopics = obj.subtopics;
      subTopicButtons(subtopics);
    }
  }

  request.open("GET", "/api/topics?topic=" + topic);
  request.send();
}

function subTopicButtons(subtopics) {
   for (var i = 0; i < subtopics.length; i++) {
    var button = document.createElement("button");
    var box = document.getElementsByClassName("box")[0];
    var subtopic = subtopics[i];

    button.addEventListener("click", function(e) {
      session_info.subtopic = e.target.innerHTML.replace(/\s+/g, '-').toLowerCase();
    });

    button.innerHTML = subtopic;
    button.classList.add("button-style", "btn", "btn-light", "btn-block");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#exampleModalCenter");
    box.appendChild(button);
  }
}

// Pop Up 
function createModal() {
  var mainModal = document.createElement("div");
  mainModal.id = "exampleModalCenter";
  mainModal.classList.add("modal", "fade");

  var modalCenter = document.createElement("div");
  modalCenter.classList.add("modal-dialog", "modal-dialog-centered");

  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  var header = document.createElement("div");
  header.classList.add("model-header");

  // Close Button
  var closeButton = document.createElement("button");
  closeButton.classList.add("close");
  closeButton.setAttribute("data-dismiss", "modal");
  closeButton.innerHTML = "&times;";

  // Modal Body Contents
  var modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  // Difficulty Heading
  var difficulty = document.createElement("div"); 
  difficulty.innerHTML = "Difficulty";
  difficulty.classList.add("headers");

  // Length Heading
  var length = document.createElement("div"); 
  length.innerHTML = "Length";
  length.classList.add("headers");

  var buttonLevels  = document.createElement("div");
  buttonLevels.classList.add("buttonLevels");

  var buttonLengths = document.createElement("div");
  buttonLengths.classList.add("buttonLength");

  var difficulty_levels = ["easy", "medium", "hard"];
  var lengths = ["Quick Study", "Quiz", "Test"];

  // Loop to make the difficulty level buttons
  for (var i = 0; i < difficulty_levels.length; i++) {
    var button = document.createElement("button");
    button.classList.add("modalButtons", "btn", "btn-light");
    button.innerHTML = difficulty_levels[i];

    button.addEventListener("click", function(e) {
      var check = document.getElementsByClassName("buttonLevels")[0];
      var children = check.children;
  
      for(var i= 0; i < children.length; i++) {
        var classList = children[i].classList;
        for(var j = 0; j < classList.length; j++) {
          if(classList[j] === "active") {
            children[i].classList.remove("active");
          }
        }
      }
      e.target.classList.add("active");
      session_info.difficulty = e.target.innerHTML.replace(/\s+/g, '-').toLowerCase();
    });

    buttonLevels.appendChild(button);
  }

  // Loop to make the lengths level buttons
  for (var i = 0; i < lengths.length; i++) {
    var button = document.createElement("button");
    button.classList.add("modalButtons", "btn", "btn-light");
    button.innerHTML = lengths[i];

    // Adding the active state to button
    button.addEventListener("click", function(e) {
      var check = document.getElementsByClassName("buttonLength")[0];
      var children = check.children;

      for(var i= 0; i < children.length; i++) {
        var classList = children[i].classList;
        for(var j = 0; j < classList.length; j++) {
          if(classList[j] === "active") {
            children[i].classList.remove("active");
          }
        }
      }
      e.target.classList.add("active");
      session_info.type = e.target.innerHTML.replace(/\s+/g, '-').toLowerCase();
    });

    buttonLengths.appendChild(button);
  }

  // Start Button
  var start = document.createElement("button");
  start.classList.add("startButton");
  start.setAttribute("data-dismiss", "modal");
  start.innerHTML = "Start!";

  start.addEventListener("click", function() {
    initFlashcardPage(session_info.topic, session_info.subtopic, session_info.type, session_info.difficulty);
  });

  // Appending to the Modal Body 
  modalBody.appendChild(difficulty);
  modalBody.appendChild(buttonLevels);
  modalBody.appendChild(length);
  modalBody.appendChild(buttonLengths);
  modalBody.appendChild(start);
  
  header.appendChild(closeButton);
  modalContent.appendChild(header);
  modalContent.appendChild(modalBody);
  modalCenter.appendChild(modalContent);
  mainModal.appendChild(modalCenter);
  var div2 = document.createElement("div");
  div2.appendChild(mainModal);
  var row = document.createElement("div");
  row.appendChild(div2);
  var container = document.getElementsByClassName("container")[0];
  container.appendChild(mainModal);
}


// Back Button
function backToTopics() {
  var backButton = document.createElement("img");
  backButton.src="src/imgs/back-button.svg";
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

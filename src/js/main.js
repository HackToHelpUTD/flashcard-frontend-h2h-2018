var session_info = {
  topic: '',
  subtopic: '',
  type: '',
  difficulty: ''
};

document.addEventListener("DOMContentLoaded", function() {
  init();
});

audio-controls.addEventListener("click", function() {
  if(audio-controls.classList.contains("fa-volume-up")) {
    audio-controls.classList.remove("fa-volume-up");
    audio-controls.classList.add("fa-volume-off");
  } else {
    audio-controls.classList.remove("fa-volume-off");
    audio-controls.classList.add("fa-volume-up");
  }
});

function init() {
  createTopicsPage();
  getTopics();
}



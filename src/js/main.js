var session_info = {
  topic: '',
  subtopic: '',
  type: '',
  difficulty: ''
};

document.addEventListener("DOMContentLoaded", function() {
  init();
});

function init() {
  createTopicsPage();
  applyCookie();
}



function setCookie(session_info) {
  var cookie_expire = new Date();
  cookie_expire = new Date(cookie_expire.getTime() + 1000*60*60*24*365);
  document.cookie = "session_info=" + JSON.stringify(session_info) + "; expires=" + cookie_expire;
}

function getCookie() {
  var cookies = document.cookie;
  var session_info = /session_info=.*/.exec(cookies);
  if (session_info) {
    session_info = session_info[0];
    return JSON.parse(session_info.split("=")[1]);
  }
  return null;
}

function applyCookie() {
  if (getCookie()) {
    session_info = getCookie(); // Update global variable
    if(session_info.topic) {
      getSubTopics(session_info.topic);
      if (session_info.subtopic && session_info.type && session_info.difficulty) {
        initFlashcardPage(session_info.topic, session_info.subtopic, session_info.type, session_info.difficulty);
      }
    }
  } else {
    getTopics();
  }
}

function clearCookie() {
  var cookie_expire = new Date();
  cookie_expire = new Date(cookie_expire.getTime() - 1000*60*60*24*365);
  document.cookie = "session_info=" + JSON.stringify(session_info) + "; expires=" + cookie_expire;
}
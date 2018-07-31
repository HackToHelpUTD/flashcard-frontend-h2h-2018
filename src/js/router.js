function setURL(session_info) {
  let hash = '';

  if(session_info.topic) {
    hash = session_info.topic;
    if(session_info.subtopic) {
      hash += '?' + session_info.subtopic;
      if(session_info.type) {
        hash += '?' + session_info.type;
        if(session_info.difficulty) {
          hash += '?' + session_info.difficulty;
        }
      }
    }
  }

  window.location.hash = hash;
}
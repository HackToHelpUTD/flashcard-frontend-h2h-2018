var title;
var box;
var div2;

function createTopicsPage() {

  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var div1 = document.createElement("div");
  div1.classList.add("col-0", "col-sm-3");

  div2 = document.createElement("div");
  div2.classList.add("col-12", "col-sm-6");
  //Title
  title = document.createElement("div"); 
  title.innerHTML = "Choose a Topic!";
  title.classList.add("title");
  //Box
  box = document.createElement("div");
  box.classList.add("box");

  var div3 = document.createElement("div");
  div3.classList.add("col-0", "col-sm-3");

  //adding the title and the box to the center col (col2)
  div2.appendChild(title);
  div2.appendChild(box);

  //adding all the columns to the row
  row.appendChild(div1);
  row.appendChild(div2);
  row.appendChild(div3);

  //adding the row to the container
  var container = document.getElementsByClassName("container")[0];
  container.appendChild(row); 
}

function getTopics() {
  //APIs
  var topics;

  var request = new XMLHttpRequest(); //create a new instance of XMLHttpRequest object

  request.onreadystatechange =  function() {
    if(request.readyState == 4 && request.status == 200) {
      console.log(request.response);
      var obj = JSON.parse(request.response);
      topics = obj.topics;
      console.log(topics);
      createButtons(topics);
    }
  }

  request.open("GET", "/api/alltopics");
  request.send();
}

function createButtons(topics) {

  for(var i = 0; i < topics.length; i++) {
    var button = document.createElement("button");
    var topic = topics[i].topic;
    button.innerHTML = topic;
    button.classList.add("button-style", "btn", "btn-light", "btn-block");

    button.addEventListener("click", function(e) {
      getSubTopics(e.target.innerHTML);
    });

    box.appendChild(button);
  }
}

function getSubTopics(topic)
{
      var box = document.getElementsByClassName("box")[0];
      while(box.firstChild)
      {
          box.removeChild(box.firstChild);

      }
      
      var title = document.getElementsByClassName("title")[0];
      while(title.firstChild)
      {
          title.removeChild(title.firstChild);

      }
      loadSubTopics(topic);

}



 










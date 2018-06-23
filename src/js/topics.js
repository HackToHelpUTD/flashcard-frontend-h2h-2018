
//page 1: heading, buttons, button words (API)

var title;
var box;
var div2;

function init() {
  createTopicsPage();
  buttons();
}

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

function buttons() {
  //APIs
  /*var request = new XMLHttpRequest(); //create a new instance of XMLHttpRequest object

    request.onreadystatechange =  function() {
    console.log(request.response);
  }
  request.open("GET", "/api/topics?topic=ethics");
  request.send();*/

  var topics = ["Ethics", "History", "Philosophy", "Arabic", "Physics", "Theology", "Comparative-Religion", "Biology"];
  var buttonsArray = new Array(topics.length);


   for(var i = 0; i < topics.length; i++)
  {

    var button = document.createElement("button");
    var topic = topics[i];
    button.innerHTML = topic;
    button.classList.add("button-style", "btn", "btn-light", "btn-block");
    box.appendChild(button);
    buttonsArray[i] = button;

    button.addEventListener("click", function() {
      getSubTopics(topic);
    });
  }
}

//function getSubTopics(topic) {
 // var subtopics = ["Pre-Modern", "Contemporary", "Ancient", "Classical", "More", "More", "More", "More"];
 // div2.classList.remove("title", "box");
 // loadSubTopics();
 // }
   
  


function getSubTopics(topic)
{
 
      document.body.innerHTML = ''; //removes the topics from the page
      loadSubTopics(topic);

}



 










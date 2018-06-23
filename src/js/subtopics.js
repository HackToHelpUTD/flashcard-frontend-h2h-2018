
//page 1: heading, buttons, button words (API)

var box;
var title;
var div2;
var subtopics = ["Pre-Modern", "Contemporary", "Ancient", "Classical", "More", "More", "More", "More"];

function loadSubTopics(topic) {
  createSubTopicsPage(topic);
  buttons1();
}



function createSubTopicsPage(topic) {

  var row = document.createElement("div");
  row.classList.add("row", "text-center");


  



  var div1 = document.createElement("div");
  div1.classList.add("col-0", "col-sm-3");

  //var backButton = document.createElement("img");
  //document.getElementsByClassName('backButton')[0].src="src/imgs/back-button.png";
  //backButton.classList.add("back-Button");


  div2 = document.createElement("div");
  div2.classList.add("col-12", "col-sm-6");
  //Title
  title = document.createElement("div"); 
  title.innerHTML = "Choose a " + topic + " Deck";
 
  title.classList.add("title");
  //Box
  box = document.createElement("div");
  box.classList.add("box");

  var div3 = document.createElement("div");
  div3.classList.add("col-0", "col-sm-3");

  //div1.appendChild(backButton);

  //adding the title and the box to the center col (col2)
  div2.appendChild(title);
  div2.appendChild(box);

  //adding all the columns to the row
  row.appendChild(div1);
  row.appendChild(div2);
  row.appendChild(div3);


  //adding the row to the container
 //var container = document.getElementsByClassName("container")[0];
 //container.appendChild(row);




  var body = document.getElementsByTagName("body")[0];
  body.appendChild(row);
 // body.appendChild(backButton);
  
}

function buttons1() {

  //APIs
  /*var request = new XMLHttpRequest(); //create a new instance of XMLHttpRequest object

    request.onreadystatechange =  function() {
    console.log(request.response);
  }
  request.open("GET", "https://fcg-api.herokuapp.com/api/alltopics"); 
  request.send();*/


  

   for(var i = 0; i < subtopics.length; i++)
  {
    var button = document.createElement("button");
    button.innerHTML = subtopics[i];
    button.classList.add("button-style", "btn", "btn-light", "btn-block");
    box.appendChild(button);

  }


}
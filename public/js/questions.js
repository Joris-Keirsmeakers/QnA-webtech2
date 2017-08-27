
primus = Primus.connect("", {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});


var form = document.getElementById("question-ask");

form.addEventListener("submit", function(e){
    var qfield = form.querySelector(".questionfield").value;
    var id =  form.querySelector(".discussionId").value;
    primus.write({ qfield:qfield, id:id });
});

primus.on("data", function(data) {
  console.log(data)
  console.log("Data received!" + data)
  if(data){
    console.log(data[0]._id, form.querySelector(".discussionId").value)
    if(data[0]._id = form.querySelector(".discussionId").value){
      var i =  data[0].questions.length - 1;
      var listItem = "<h4>"+
      data[0].questions[i].questionText+"</h4>"+
      "<div class=comments></div>"+
      "<form method='post' id=comment>"+
      "<label for='commentfield'></label>"+
      "<input type='hidden' name='Questionid' value="+ data[0].questions[i]._id+">"+
      "<input type='text' name='commentfield' placeholder='enter your comment here' class='commentfield'> "+
      "<button type='submit'> Comment go!</button>"+
      "</form>";

      //console.log(listItem);
      var div = document.createElement("div");
      div.innerHTML = listItem;
      div.classList.add('question');
      document.getElementById("questions").appendChild(div);
    }
  }

});

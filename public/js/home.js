//console.log('hey')

primus = Primus.connect("", {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});


var form = document.getElementById("discussion-create");

form.addEventListener("submit", function(e){
    var subject = form.querySelector(".subjectfield").value;
    primus.write({ subject: subject });
});

primus.on("data", function(data) {
  if (data.type == "discussion") {
    console.log(data)
    console.log("Data received!" + data.type)
    var listItem=" <a href=/discussion/"+data.discussion._id+">"+data.discussion.subject
    var div = document.createElement("li");
    div.innerHTML = listItem;
    document.getElementById("discussion-block").appendChild(div);
  }
    window.location.replace("/home")
})

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
  console.log(data)
  console.log("Data received!" + data)
  if (data && data.subject) {
    var listItem="<li> <a href=/discussion/"+data._id+">"+data.subject+"<button class=delete>x</li>"
    var div = document.createElement("div");
    div.innerHTML = listItem;
    document.getElementById("discussion-block").appendChild(div);
  }
})

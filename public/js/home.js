//console.log('hey')

primus = Primus.connect("", {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});

primus.on("data", function(data) {
    console.log("PRIMUS CLIENT DATA RECEIVED!" + data);
    document.querySelector("h3").innerHTML = data
})

document.getElementById("discussion-create").addEventListener("submit", function(e){
    target = e.target;
    var subject = target.querySelector(".subjectfield").value;

    primus.write({ subject }); // send our emotion to the server
      console.log(subject);
    e.preventDefault();

});

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
    //e.preventDefault();
    var subject = form.querySelector(".subjectfield").value;
    console.log(subject);
    primus.write({  data: subject }); // send our emotion to the server

    //primus.emit('foo', { data: subject });

});

primus.on("data", function(data) {
    console.log("PRIMUS CLIENT DATA RECEIVED!" + data.data);
  //  spark.write({ data: subject }); // send our emotion to the server
})


primus = Primus.connect("", {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});



var forms = document.getElementsByClassName("commentform");

Array.from(forms).forEach(function(form){
    form.addEventListener("submit",function(e){
      //e.preventDefault();
      //console.log("hey");
      //console.log(form)
      var id = form.children[0].value;
      var comment = form.children[1].value;
      console.log(comment, id)

    primus.write({ comment:comment, id:id });
  });
});

primus.on("data", function(data) {

  if(data.type=="comment"){
    var currentQ
    console.log(data)
    //console.log("Data received!" + data.type)
    //Finding the question that the comment was made on:
      for(i=0; i<data.comment.questions.length; i++){
        currentQ = data.comment.questions[i]

        //console.log(currentQ)
       if (currentQ._id == data.id) {
          var Neededquestion = currentQ
          var nthchild = i
        }
      }
      //console.log(Neededquestion)
      var i =  Neededquestion.comments.length - 1;
      var c=  Neededquestion.comments[i]
      //console.log(i);
      var ul = document.createElement("ul");
      ul.innerHTML = "<li><p class='comment'>"+c.text+"</p>"+
      "<div class='details'><img src="+c.user.avatar+"/>"+
      "<p class='commentUsername'>"+c.user.username+"</p></div></li>"

    var question = document.getElementsByClassName('comments');
    console.log(question);
    console.log(question[nthchild])
    question[nthchild].appendChild(ul)
    }
      window.location.replace("/discussion/"+data.question[0]._id)
  });

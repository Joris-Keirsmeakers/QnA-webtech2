primus = Primus.connect("", {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});
console.log("test")


var lock = document.getElementById("discussion_lock")

if(lock){
lock.addEventListener("submit",function(e){
  e.preventDefault();
  var id=lock.querySelector(".discussionId").value;
  primus.write({ lock: id });

})

primus.on("data", function(data){
  if(data.n==1){
    console.log("Closing forms")
    var forms= document.getElementsByTagName('form')
    console.log(forms)
    for (i = 0; i < forms.length; i++) {
      var form = forms[i]
      form.style.display="none";
    }
  }
})
}

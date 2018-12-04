$(document).ready(function(){
  $("#image").hide();
  $("#myDIV").hide();
  $("#flip").hide();

  document.getElementById("answer").onclick = function() {myFunction()};

  function myFunction() {
      document.getElementById("answer").innerHTML = "True!";
  };

    document.getElementById("button").onclick = function() {newFunction()};

  function newFunction() {
    $("#myDIV").slideToggle();
  };



    $("#flip").click(function(){
        $("#image").slideToggle("slow");
    });






});

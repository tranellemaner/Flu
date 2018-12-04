$(document).ready(function(){
  $("#myDIV").hide();
  $("#flip").hide();
  $("#info").hide();

  document.getElementById("answer").onclick = function() {myFunction()};

  function myFunction() {
      document.getElementById("answer").innerHTML = "True!";
  };

    document.getElementById("button").onclick = function() {newFunction()};

  function newFunction() {
    $("#myDIV").slideToggle();
  };

document.getElementById("more").onclick = function() {thirdFunction()};

  function thirdFunction() {
    $("#flip").show();
  };

    $("#flip").click(function(){
        $("#info").slideToggle("slow");
    });






});

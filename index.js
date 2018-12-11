$(document).ready(function(){
  $("#myDIV").hide();
  $("#first").hide();
  $("#answerone").hide();
  $("#chart").hide();
  $("#Questiontwo").hide();
  $("#answertwo").hide();
  $("#Questionthree").hide();
  $("#answerthree").hide();
  $("#three").hide();
  $("#third").hide();
  $("#final").hide();



$(".questionstyle").click(function(){
       $("#answerone").slideToggle();
   });

$("#down").click(function(){
    $("#first").slideToggle("slow");
});


$("#right").click(function(){
    $("#firstquestion").fadeOut("slow");
    $("#chart").fadeIn();
});


$("#up").click(function(){
  $("#chart").slideUp("slow");
  $("#Questiontwo").show();
});

$("#next").click(function(){
  $("#answertwo").slideToggle();
});



$("#dione").mouseenter(function(){
  $("#dione").text("No");
});

$("#dione").mouseleave(function(){
  $("#dione").text("Influenza");
});

$("#ditwo").mouseenter(function(){
  $("#ditwo").text("No");
});

$("#ditwo").mouseleave(function(){
  $("#ditwo").text("Asthma");
});

$("#dithree").mouseenter(function(){
  $("#dithree").text("Yes");
});

$("#dithree").mouseleave(function(){
  $("#dithree").text("STDs");
});

$("#difour").mouseenter(function(){
  $("#difour").text("Yes");
});

$("#difour").mouseleave(function(){
  $("#difour").text("Shingles");
});
$("#difive").mouseenter(function(){
  $("#difive").text("No");
});

$("#difive").mouseleave(function(){
  $("#difive").text("Chickenpox");
});
$("#disix").mouseenter(function(){
  $("#disix").text("Yes");
});

$("#disix").mouseleave(function(){
  $("#disix").text("Diabetes");
});


$("#righttwo").click(function(){
    $("#secondquestion").fadeOut("slow");
    $("#Questionthree").fadeIn();
});







$("#stylethree").click(function(){
    $("#answerthree").slideToggle("slow");
});

$("#downtwo").click(function(){
  $("#third").slideToggle();
});

$("#rightthree").click(function(){
  $("#thirdquestion").fadeOut("slow");
  $("#final").fadeIn();
});



});

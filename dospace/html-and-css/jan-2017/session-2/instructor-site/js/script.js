$(document).ready(function() {
  $("h1").fadeIn(5000);
  $("button").click(function(){
    $("img").fadeOut(5000);
  });
  $("header").click(function(){
    $('header').css("background-color", "orange");
   }); 
});

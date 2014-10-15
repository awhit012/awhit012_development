$( document ).ready(function() {
  setInterval(changeColors, 8000);
});

var colors = ['#2EB1FF', '#22FF8F', '#FF9C22', '#FF5722'];


var changeColors = function(){
  var randomIndex = Math.floor(Math.random()*colors.length)
  $('body').css("background-color", colors[randomIndex] );
  $('#table').css("box-shadow", colors[randomIndex] )
}


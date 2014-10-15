$( document ).ready(function() {
  setInterval(changeColors, 16000);
});

var colors = ['#2EB1FF', '#22FF8F', '#FF9C22', '#FF5722'];


var changeColors = function(){
  $('body').css("background-color", colors[Math.floor(Math.random()*colors.length)] )
}


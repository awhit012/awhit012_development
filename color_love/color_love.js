$(document).ready(function () {

  colorClasses = ["one", "two", "three", "four", "five", "six"];
  shapeClasses = ["uno", "dos", "tres", "quatro", "cinco"]

  hoverCount = 1

  $('table').hover(function() {

    hoverCount += 1;

    $(this).find('td').each(function() {
      $(this).removeClass();
      $(this).addClass(colorClasses[Math.floor(Math.random()*colorClasses.length)]);
      $(this).addClass(shapeClasses[Math.floor(Math.random()*shapeClasses.length)]);
    });

    checkCount();
  })

  $('td').hover(function(){
    $(this).removeClass();
    $(this).addClass(colorClasses[Math.floor(Math.random()*colorClasses.length)]);
    $(this).toggleClass("quatro")
  })

  $('td').mouseout(function(){
    $(this).removeClass();
    $(this).addClass(colorClasses[Math.floor(Math.random()*colorClasses.length)]);
    $(this).toggleClass(shapeClasses[Math.floor(Math.random()*shapeClasses.length)])
  })


  var checkCount = function(){
    if (hoverCount == 10 ) {
      $('table').remove();
      $('body').css( "background-color", "#FF1E00" );
      $('body').append( "<h1 class='big-title'>booya color love</h1>" );

    }
  }

});
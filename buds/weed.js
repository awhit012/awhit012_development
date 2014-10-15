var WeedPlant = WeedPlant || {
}

// MODEL

HIGH_CHART = ["You are sober as hell.", "You are barely feelin' it.", "You are a little toasty.", "You are half-baked.", "You are kinda blazed.", "You are stupid geeked.", "You have no idea what's goin' on.", "You need to be reminded that no one has ever died from a overdose of weed."]

IMAGES = [ "http://www.weedist.com/wp-content/uploads/2012/07/CannabisSeedling-Time-Lapse-280x155.png", "http://geek420.files.wordpress.com/2010/01/growingweed.jpg",
"http://howtogrowmarijuana.com/wp-content/uploads/2012/12/Marijuana-vegging-light-cycle.jpg",
"http://www.marijuana-picture.com/gallery/marijuana_plant_picture/images/ready_to_harvest.jpg",
"http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2012/10/8/1349734493183/Cannabis-plant--008.jpg"  ]

timeSinceLastSmoke = 0;

WeedPlant.Model = function( ageInWeeks
                            , heightInInches
                            , buds
                            , budsInStash
                            , highnessDigit
                            , cash
                            , imageIndex  ){

  var that = this
  currentImage = "http://www.weedist.com/wp-content/uploads/2012/07/CannabisSeedling-Time-Lapse-280x155.png"

  this.ageInWeeks = ageInWeeks;
  this.heightInInches = heightInInches;
  this.buds = buds;

  this.budsInStash = budsInStash;
  this.highnessDigit = highnessDigit;
  this.cash = cash;
  this.imageIndex = imageIndex

  this.grow = function() {
    that.ageInWeeks += 1;
    that.heightInInches += .5;
    that.addBuds();
    that.trackTimeSinceLastSmoke();
    that.getImage();
    WeedPlant.View();
  }

  this.getImage = function(){

    if (that.ageInWeeks % 15 == 0) {
      imageIndex += 1
      currentImage = IMAGES[imageIndex]
    }
  }

  this.addBuds = function(){
    if (that.ageInWeeks >= 2) {
      that.buds +=1;
    }
  }

  this.trackTimeSinceLastSmoke = function(){
    timeSinceLastSmoke += 1;
    if (timeSinceLastSmoke == 20 && that.highnessDigit >= 1 ){

      that.highnessDigit -= 1;
      timeSinceLastSmoke = 0;
      that.updateHighnessLevel();

      if ($audio.volume >= .1){
        $audio.volume -= .1;
      }
    }
  }

  this.harvest = function(){
    that.budsInStash += that.buds;
    that.buds = 0;
    that.UpdateDisplay();
  }

  this.smoke = function(){
    timeSinceLastSmoke = 0;
    that.speedUpTime();
    that.increaseHighnessLevel();
    that.budsInStash = 0;
    that.UpdateDisplay();
  }

  this.speedUpTime = function(){
    if (growInterval >= budsInStash * 10) {
      growInterval -= budsInStash * 10
    }
  }

  this.increaseHighnessLevel = function(){

    if(that.budsInStash == 0){
      return
    }

    if(that.highnessDigit + Math.round(that.budsInStash / 10) < HIGH_CHART.length){
      that.highnessDigit += Math.round(that.budsInStash / 10)
      that.updateHighnessLevel();
      that.updateSound();
    }
    else {
      that.highnessDigit = (HIGH_CHART.length - 1);
      that.updateHighnessLevel();
      that.updateSound();

    }
  }

  this.updateHighnessLevel = function(){
    that.highnessLevel = HIGH_CHART[that.highnessDigit];
  }

  this.updateSound = function(){
    if ($audio.volume > .7) {
      $audio.volume = 1
    }
    else {
      $audio.volume += .2
    }
  }

  this.sell = function(){
    that.cash += that.budsInStash * 10
    that.budsInStash = 0;
    that.UpdateDisplay();
  }
}

//VIEW

WeedPlant.View = function(){
  $('#age-display').html(WeedPlant.ageInWeeks);
  $('#image-display').attr('src', currentImage );
  $('#height-display').html(WeedPlant.heightInInches);
  $('#buds-on-plant-display').html(WeedPlant.buds);
  $('#harvested-buds-display').html(WeedPlant.budsInStash);
  $('#higness-display').html(WeedPlant.highnessLevel);
  $('#cash-display').html('$' + WeedPlant.cash);
}


// CONTROLLER

$( document ).ready(function() {
  var ThisPlant = new WeedPlant.Model(0, 0, 0, 0, 0.0, 0, 0);

  $audio = $('#audio')[0];
  $audio.volume = 0

  growInterval = 200;
  setInterval(WeedPlant.Model.grow, growInterval);

  $( "#harvest-button" ).click(function(){
    WeedPlant.Model.harvest();
  })
  $( "#smoke-button" ).click(function(){
    WeedPlant.Model.smoke();
  })
  $( "#sell-button" ).click(function(){
    WeedPlant.Model.sell();
  })
});

describe("Weed Plant", function() {

  it("calls the grow() function", function() {
    var fakePlant = new WeedPlant.Model();
    spyOn(fakePlant, "grow");
    fakePlant.grow();
    expect(fakePlant.grow).toHaveBeenCalled();
  });

  it("calls the addBuds() function", function() {
    var fakePlant = new WeedPlant.Model();
    spyOn(fakePlant, "addBuds");
    fakePlant.addBuds();
    expect(fakePlant.addBuds).toHaveBeenCalled();
  });

  it("calls the trackTimeSinceLastSmoke() function", function() {
    var fakePlant = new WeedPlant.Model();
    spyOn(fakePlant, "trackTimeSinceLastSmoke");
    fakePlant.trackTimeSinceLastSmoke();
    expect(fakePlant.trackTimeSinceLastSmoke).toHaveBeenCalled();
  });

  it("calls the getImage() function", function() {
    var fakePlant = new WeedPlant.Model();
    spyOn(fakePlant, "getImage");
    fakePlant.getImage();
    expect(fakePlant.getImage).toHaveBeenCalled();
  });

  it("calls the Weedplant.View() function", function() {
    var fakeView = new WeedPlant.View();
    spyOn(fakeView, "Weedplant.View");
    fakeView.Weedplant.View();
    expect(fakeView.Weedplant.View).toHaveBeenCalled();
  });


});


describe("Harvest", function() {
  it("calls the Weedplant.View() function", function() {
    var fakeView = new WeedPlant.View();
    spyOn(fakeView, "Weedplant.View");
    fakeView.harvest();
    expect(fakeView.Weedplant.View).toHaveBeenCalled();
  });

});

describe("sell", function() {

  it("calls the Weedplant.View() function", function() {
    var fakeView = new WeedPlant.View();
    spyOn(fakeView, "Weedplant.View");
    fakeView.sell();
    expect(fakeView.Weedplant.View).toHaveBeenCalled();
  });

});



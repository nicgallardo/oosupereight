var Camera = require('../superEight.js')

describe("superEight", function(){
  it("returns camera with no film ", function(){
    var myCamera = new Camera();
    expect(myCamera.readFilm()).toEqual(0);
  });
  it("returns camera with film added", function(){
    var myCamera = new Camera();
    expect(myCamera.addFilm(3600)).toEqual();
    expect(myCamera.readFilm()).toEqual(3600);
  });
  it("returns camera is shooting at a normal speed of 18fps", function(){
    var myCamera = new Camera();
    myCamera.addFilm(3600);
    expect(myCamera.filmForTimeAtSpeed(10, 18)).toEqual("Frames Used: 180")
  });
  it("return camera is shooting in slow motion using 36fps", function(){
    var myCamera = new Camera();
    myCamera.addFilm(3600);
    expect(myCamera.filmForTimeAtSpeed(10, 36)).toEqual("Frames Used: 360");
    myCamera.filmForTimeAtSpeed(90, 36);
    expect(myCamera.isEmpty()).toEqual(true);
  });
  it("returns camera is shooting in fast motion using 9fps", function(){
    var myCamera = new Camera();
    myCamera.addFilm(3600);
    expect(myCamera.filmForTimeAtSpeed(10, 9)).toEqual("Frames Used: 90");
  });
  it("returns camera is empty and needs to add film", function(){
    var myCamera = new Camera();
    expect(myCamera.isEmpty()).toEqual(true)
  });
  // it("returns camera battery level 100 when full", function(){
  //   var myCamera = new Camera();
  //   expect(myCamera.remaningBattery()).toEqual(100);
  // });
});

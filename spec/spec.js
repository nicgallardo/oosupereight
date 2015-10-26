var code = require('../camera.js')

describe("superEight", function(){
  it("returns camera with no film ", function(){
    var myCamera = new Camera();
    expect(myCamera.readFilm()).toEqual("null");
  });
  it("returns camera with film added", function(){
    var myCamera = new Camera();
    expect(code.addFilm(3600)).toEqual();
  });
  it("returns camera is shooting at a normal speed of 18fps", function(){
    var myCamera = new Camera();
    expect(code.normalSpeed(10)).toEqual("180 fps")
  });
  it("return camera is shooting in slow motion using 36fps", function(){
    var myCamera = new Camera();
    expect(code.slowMotion(10)).toEqual("360  fps");
    code.slowMotion(90));
    expect(code.isEmpty()).toEqual(true);
  });
  it("returns camera is shooting in fast motion using 9fps", function(){
    var myCamera = new Camera();
    expect(code.fastMotion(10)).toEqual("90 fps");
  });
  it("returns camera is empty and needs to add film", function(){
    var myCamera = new Camera();
    expect(code.isEmpty()).toEqual("add film")
  });
  it("returns camera battery level 100 when full", function(){
    var myCamera = new Camera();
    expect(code.remaningBattery()).toEqual(100);
  });
});

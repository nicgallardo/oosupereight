function Camera() {
  this.filmFrames = 0;
  
  var that = this;
  return {
    readFilm: function () {
      return that.filmFrames;
    },
    addFilm: function (frames) {
      that.filmFrames = frames;
    },
    filmForTimeAtSpeed: function (seconds, speedInFps) {
    // TODO Timer based printing of frame usage
      var tmpTimerID = setInterval(function () {
        console.log('Frame ' + that.filmFrames);
        that.filmFrames--;
        if(that.filmFrames % speedInFps == 0 ) {
          seconds--;
        }
        if(that.filmframes == 0) {
          clearInterval(tmpTimerID);
        }
        if(seconds == 0) {
          clearInterval(tmpTimerID);
        }
      }, (speedInFps/1000.0));
      
      that.filmFrames -= (seconds * speedInFps);
      return "Frames Used: " + (seconds * speedInFps); 
    },
    isEmpty: function () {
      return (that.filmFrames <= 0);
    }
  }
}


module.exports = Camera;

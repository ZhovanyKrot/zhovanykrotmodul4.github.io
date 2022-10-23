(function (window) {
  var SpeakSriptHI = {};
  SpeakSriptHI.speakWord = "Hello";
  SpeakSriptHI.sayHi = function (name) {
    console.log(SpeakSriptHI.speakWord + " " + name);
  }
  window.SpeakSriptHI = SpeakSriptHI;
})(window);
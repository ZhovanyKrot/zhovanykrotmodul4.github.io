(function (window) {
  var SpeakSriptGB = {};
  SpeakSriptGB.speakWord = "Good Bye";
  SpeakSriptGB.sayGB = function (name) {
    console.log(SpeakSriptGB.speakWord + " " + name);
  }
  window.SpeakSriptGB = SpeakSriptGB;
})(window);
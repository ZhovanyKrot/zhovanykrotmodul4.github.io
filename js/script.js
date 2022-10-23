(function main_scrip() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim", "jojo"];
  for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0).toUpperCase() == 'J') {
      SpeakSriptGB.sayGB(names[i]);
    } else {
      SpeakSriptHI.sayHi(names[i]);
    }
  }
})();
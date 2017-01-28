(function (window) {
    var helloSpeaker = {/* an object */};

    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }

    var speakWord = "Hello";
    //exposing helloSpeaker object to global context
    window.helloSpeaker = helloSpeaker;
})(window);
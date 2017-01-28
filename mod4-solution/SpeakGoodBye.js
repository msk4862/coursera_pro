(function(window) {
    var byeSpeaker = {};

    byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }

    var speakWord = "Good Bye";
    //exposing byeSpeaker object to global context
    window.byeSpeaker = byeSpeaker;

})(window);


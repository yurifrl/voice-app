import Ember from 'ember'
if (SPEECH.isCapable()) { // the browser supports speech recognition
  SPEECH.onStart(function() {
    // fires once browser recognition has started
  });
  SPEECH.onStop(function() {
    // fires when speech is manually stopped, or on error
  });
  SPEECH.min_confidence = .2; // the default minimum confidence you're willing to accept as a command
  SPEECH.addVoiceCommands([{
    command: "hi",
    callback: function() {
      alert("Hello");
      // do something when the user says "show help". Maybe open a help dialog!
    },
    min_confidence: .5 // you can set a confidence level for each command individually
  }, {
    command: /next (slide)?/,
    callback: function() {
      console.log("Hello");
      // this would fire when the user says "next" OR "next slide"
      // using a regex like that makes the voice command recognition
      // a bit more forgiving
    }
  }, {
    command: /go.+(top|home)/, // regex to match commands more dynamically
    callback: function() {
      console.log("Hello");
      // the regex above would match:
      //  * go home
      //  * go to the top
    }
  }]);
  SPEECH.onResult(function(result) {
    // fires after commands set via addVoiceCommands are parsed.
    // result.transcript is the object built by the speech recognition engine.
    // result.confidence is confidence in decimals (0.02392)
  });

  // gets things going. when speech recognition is ready,
  // onStart will be called.
  SPEECH.start({
    min_confidence: .3 // you can also pass config here
  });
};

export default Ember.Route.extend({});

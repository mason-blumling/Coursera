//-------------------------------------------------------------------------
// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
//-------------------------------------------------------------------------

// Step 6
(function (window) {

  // Step 7 & 8
  var byeSpeaker = function speak(name) {
        console.log(speakWord + " " + name);
  }

  var speakWord = "Good Bye";

  // Step 9
  window.byeSpeaker = byeSpeaker;
})(window);
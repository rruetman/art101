// index.js - Lab 10 - JavaScript for the Web
// Author: Ruby Ruetmann
// Date: November 6, 2024
// lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// Requirements: jQuery must be loaded for this script to work.


// create a function that will generate fake dialogue 
function generateRandomText() {
    const text = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.";
    const min = 5;
    const max = 30;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Bee Movie text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random the Bee Movie text
    return text.slice(randStart, randStart + randLen);
  }

// event listener for button
$("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();

    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
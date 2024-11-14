// index.js - Lab 11 - JavaScript Events & Forms
// Author: Ruby Ruetmann
// Date: November 12, 2024
// This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Requirements: jQuery must be loaded for this script to work.

// sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // converts our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }

// event listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();

    // now let's sort it
    userNameSorted = sortString(userName);

    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

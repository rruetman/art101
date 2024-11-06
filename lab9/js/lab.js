// index.js - Lab 9 - Libraries & jQuery
// Author: Ruby Ruetmann
// Date: November 5, 2024
// This simple JavaScript/jQuery script uses buttons to modify some elements on the page.
// Requirements: jQuery must be loaded for this script to work.

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
$("#button-challenge").click(function(){
// now add the "special" class to the challenge section
    $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");
// add a click listener to the problems button
$("#button-problems").click(function(){
    // now add the "special" class to the problems section
    $("#problems").toggleClass("special");
});

// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");
// add a click listener to the results button
$("#button-results").click(function(){
    // now add the "special" class to the results section
    $("#results").toggleClass("special");
});
// Title: Lab 13 - Loops
// Author: Ruby Ruetmann
// Date: November 19, 2024

// Create a "FizzBuzzBoom" loop function

// Loop through numbers 1 to 200 using jQuery 
for (var i = 0; i < 200; i++) {
    var str = "";

// Multiple of 3
    if ((i+1)%3 == 0) {
        str += "Fizz";
    }

// Multiple of 5
    if ((i+1)%5 == 0) {
        str += "Buzz";
    }

// Multiple of 7
    if ((i+1)%7 == 0) {
        str += "Boom";
    }

// Define variable to add space between a number and the string
    var spacing = " - "

// Print to output 
    if (str == "" ) {
    $("#output").append("<p class='num'>" + (i+1) + "</p>");
    } else {
    $("#output").append("<p class='text'>" + (i+1) + spacing + str + "!" + "</p>");
  }
  
}


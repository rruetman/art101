// index.js - Lab 12 - Conditionals
// Author: Ruby Ruetmann
// Date: November 13, 2024

// Create a conditional in a function that will sort a user input into one of four cat options 
// return Tabby, Calico, Tuxedo, and Black
// depending on length mod 4
function catHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Tabby"  
    }

    else if (mod == 1) {
        return "Calico"
    }

    else if (mod == 2) {
        return "Tuxedo"
    }

    else if (mod == 3) {
        return "Black"
    }
}
// create a click listener for button
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var cat = catHat(name);
    newText = "<p> The cat hat sorted has assigned you to " + cat + " cat </p>";
    document.getElementById("output"). innerHTML = newText;
})
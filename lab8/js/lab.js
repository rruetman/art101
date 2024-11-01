// index.js - Lab 8 - Anon Functions & Callbacks
// Author: Ruby Ruetmann
// Date: October 31, 2024

// Create an array of numbers 
var myArray = [2, 4, 6, 8, 10];

// Create a function that multiplies by 2
function multiply(x){
    var results = 2 * x;
    return results;
}

// Create a function that divides by 2
function divide(x) {
    var results = x / 2;
    return results;
}

// showing multiplication function
console.log("Multiplying 1 by 2: ", multiply(1));
console.log("Multiplying 2 by 2: ", multiply(2));

// showing division function 
console.log("Dividing 1 by 2: ", divide(1));
console.log("Dividing 2 by 2: ", divide(2));

// showing array
myArray = [2, 4, 6, 8, 10];
console.log("array: ", myArray);

// applying multiplication function and division function to array
console.log("Array multiplied by 2: ", myArray.map(multiply));
console.log("Array divided by 2: ", myArray.map(divide));








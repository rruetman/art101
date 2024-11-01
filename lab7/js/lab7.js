// index.js - Lab 7 - Functions
// Author: Ruby Ruetmann
// Date: October 29 2024

// Create a new function
// sortUserName - a function that will take user input and sort the letters of their name

function sortUserName() {
    var userName = window.prompt("Hii! Please tell me your name so I can fix it!");
    console.log("userName =", userName);
    // Convert string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // Sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // Convert array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // Note that this could be done in one line 
    // but I wanted to show the full process
    return nameSorted;
}

// output
document.writeln("Hii! I just wanted to let you know I've fixed your name: ",
    sortUserName(), "</br>");
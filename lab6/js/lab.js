// index.js - Lab 6 - Arrays and Objects
// Author: Ruby Ruetmann
// Date: 24 October 2024

// Define Variables
myTransport = ["bus"," girlfriends car"," friends car"];

// an object for my main ride
myMainRide = {
  make: "Subaru",
  model: "Outback",
  color: "Silver",
  year: 2010,
  age: function() {
    return 2024 - this.year;
  }
}

// output
document.writeln("My modes of transportation: " + myTransport + "<br>");

  // how to write an object to a document
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

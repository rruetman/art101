// Title - Lab 16 - JSON & APIs
// Author - Ruby Ruetmann
// Date - December 4th, 2024

// Declaring comicObj
let comicObj;

// Using the core $.ajax() method
let ajaxConfig = {
    // The URL for the request 
    url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/340/info.0.json",

    type: "GET",
    dataType : "json",

    // What do we do when the api call is successful
    success: function(data) {
        comicObj = data;
        console.log(data);
        console.log(comicObj.title)
        document.getElementById("title").textContent = comicObj.title;
        document.getElementById("image").textContent = comicObj.img;
        document.getElementById("alt").textContent = comicObj.alt;
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
}

$.ajax(ajaxConfig);




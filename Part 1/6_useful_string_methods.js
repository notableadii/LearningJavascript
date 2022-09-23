"use strict";

//trim()
//trim() removes whitespace from both sides of a string
// toUpperCase()
// toLowerCase()
// toUpperCase() and toLowerCase() convert a string to all uppercase or all lowercase
// toUpperCase() and toLowerCase() do not change the original string
// toUpperCase() and toLowerCase() return a new string
// toUpperCase() and toLowerCase() return a new string that is all uppercase or all lowercase
//slice()
//slice() extracts a part of a string and returns the extracted part in a new string
//slice() takes 2 parameters: the start index and the end index (end index is not included)
//slice() extracts the text from one string and returns a new string

// ----------------------------------
// fist trim()
// for example we have a string with a lot of spaces
let firstName = "    John     ";
// now we can use the trim() method to remove the spaces
console.log(firstName.length);
// trim() does not change the original string it returns a new string with the spaces removed called a trimmed string example: "John"
// for simplify we can put this new string in old one and aswell as new one 
let newString = firstName.trim(); // "John" // this is for new string
firstName = firstName.trim(); // "John" // this is for old string
console.log(newString.length); // new
console.log(firstName.length); // old
// console.log(firstName.trim.length);
// ----------------------------------

// ----------------------------------
// second toUpperCase() and toLowerCase()
firstName = firstName.toUpperCase(); // "JOHN"
console.log(firstName); // "JOHN"

firstName = firstName.toLowerCase(); // "john"
console.log(firstName); // "john"

// ----------------------------------
// third slice()

// for example we have a string with a lot of spaces
let lastName = "Doeokop";

// start index is 0 and end index is 3
// so we will get "Doe"
newString = lastName.slice(0, 3); // "Doe"
console.log(newString);
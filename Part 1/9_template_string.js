// template string

let age = 15;
let firstName = "John";

// "Hello, my name is John, I am 15 years old"

// let aboutMe = "My Name is " + firstName + ", I am " + age + " years old";

let aboutMe = `My Name Is ${firstName}, I am ${age} years old`; // ` ` - backtick

// here ${} is called template literal or template string or template expression or template placeholder or template substitution  or template interpolation
// template string is a string that can contain placeholders for variables or expressions that will be replaced with their values when the string is created or evaluated.

console.log(aboutMe);
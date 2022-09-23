// typeof operator 
// data types (premitiv): number, string, boolean, object, undefined, function, symbol, bigint, null
//typeof operator tells us what type of data is stored in a variable

let age = 15;
let firstName = "John";

console.log(typeof age); // number
console.log(typeof firstName); // string
// we can even write direct value
console.log(typeof 15); // number
console.log(typeof "John"); // string

// convert number to string

age = 50;
// 50 => "50"
console.log(typeof (age + "")); // string

// convert string to number

let mySrting = +"50";
// "50" => 50
console.log(typeof mySrting); // string


// other way

let AGE = 18;
age = String(AGE); // "18"
console.log(typeof age); // string
age = Number(AGE); // 18
console.log(typeof age); // number
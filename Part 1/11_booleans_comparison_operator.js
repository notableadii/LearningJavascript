// booleans and other comparison operators
//booleans are true or false

let num = 30;
let num2 = 20;

// console.log(num >= num2) // false
// console.log(num <= num2) // true


// == vs ===

num = 7;
num2 = "7";

console.log(num == num2) // true
// == is a loose comparison operator and it only checks the value and not the type of the value being compared to each other

console.log(num === num2) // false
// === is a strict comparison operator and it checks the value and the type of the value being compared to each other and returns false if the value and the type are not the same 

// != vs !==

num = 8;
num2 = "8";

console.log(num != num2) // true
// != is a loose comparison operator and it only checks the value and not the type of the value being compared to each other and returns true if the value is not the same 

console.log(num !== num2) // true
// !== is a strict comparison operator and it checks the value and the type of the value being compared to each other and returns true if the value and the type are not the same
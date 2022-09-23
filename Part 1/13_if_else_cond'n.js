// if else condition in javascript

let age = 19;
if (age >= 18) {
    console.log("You are eligible to vote"); // if condition is true
} else {
    console.log("You are not eligible to vote"); // if condition is false
}

let num = 10;

if (num % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

// falsy values: false, undefined, null, 0, '', NaN (not a number) 
// if condition is false, then else block will be executed

let firstName = ""

if (firstName) {
    console.log(firstName);
} else {
    console.log("first name is kinda empty");
};

// truthy values: all values except falsy values
// true, 1, -1, '0', 'false', [], {}, 'hello'

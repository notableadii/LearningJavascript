// and   or operator

let firstName = "John";
let age = 19;

if (firstName[0] === "J") {
    console.log("your name starts with J");
}

if (age >= 18) {
    console.log("you are an adult");
}

// now we can use the and operator to combine the two conditions above
// && means and

if (firstName[0] === "J" && age >= 18) {
    console.log("your name starts with J and you are an adult");
} else {
    console.log("flase")
}

// in and when both conditions are true, the result is true
// if one of the conditions is false, the result is false

// or operator (||) means or

age = 15;

if (firstName[0] === "J" || age >= 18) {
    console.log("inside if");
} else {
    console.log("inside else");
}

// in or when one of the conditions is true, the result is true
// if both conditions are false, the result is false
// in and operator, both conditions are checked
// in or operator, only one condition is checked
// in or operator, if the first condition is false, the second condition is checked
// in and operator, if the first condition is false, the second condition is not checked
// in or operator, if the first condition is true, the second condition is not checked
// in and operator, if the first condition is true, the second condition is checked
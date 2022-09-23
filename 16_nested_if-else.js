// nested if else
// in this example we will see how to use nested if else
// nested if else means if else inside another if else

let winningNumber = 19;
let guess = +prompt("enter a number between 1 and 100"); // prompt returns a string so we need to convert it to number using Number() function or adding + before prompt

if (guess === winningNumber) {
    console.log("you won");
} else {
    if (guess > winningNumber) {
        console.log("too high");
    } else {
        console.log("too low");
    }
}

// this is a nested if else
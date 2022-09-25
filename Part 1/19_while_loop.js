// while loop
// 1. while loop
// while loop is used to execute a block of code repeatedly until a specified condition is true
// after the condition is false the loop will stop executing the code block and move to the next line of code 


let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

console.log("the value of i is " + i);

while (i < 1000) {
    if (i % 2 === 1) { // if i is odd
        console.log(i); // print i
    }
    i++; // increment i by 1 after each iteration of the loop
}
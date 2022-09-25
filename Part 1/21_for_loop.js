// intro to for loops
// for loops are used to iterate over a block of code a certain number of times
// a for loop is made up of 3 parts (initialization, condition, and final expression) and a block of code
// after declaring a for loop, the initialization is executed, then the condition is checked, if the condition is true, the block of code is executed, then the final expression is executed, then the condition is checked again, and so on until the condition is false
// for (initialization; condition; final expression) { block of code }
// for (let i = 0; i < 10; i++) { console.log(i) } // 0 1 2 3 4 5 6 7 8 9 
// in for loop after declaring the variable i, we set it equal to 0, then we check if i is less than 10, if it is, we log i to the console, then we increment i by 1, then we check if i is less than 10 again, and so on until i is no longer less than 10
// if you declare a variable in a for loop, it is only accessible within the for loop and not outside of it (i is not accessible outside of the for loop)

for (let i = 0; i <= 9; i++) {
    console.log(i)
}

// console.log(i) // ReferenceError: i is not defined
// but var is accessible outside of the for loop if it is declared inside of the for loop (i is accessible outside of the for loop)
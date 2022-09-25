// intro to arrays

// how to create an array

let fruit = "apple"; // i want to store more than one fruit in a variable
// i can create an array to store more than one fruit
// array is a data structure that can store more than one value
// array is a collection of values, data, elements, items, variables, values

let fruits = ["apple", "banana", "orange", "grapes", "mango", "pineapple"];
// fruits is the name of the array

console.log(fruits);
// output: [ 'apple', 'banana', 'orange', 'grapes', 'mango', 'pineapple' ]
console.log(fruits[0]);
// output: apple
console.log(fruits[1]);
// output: banana

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
// output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(numbers[0]);
// output: 1
console.log(numbers[1]);
// output: 2

let mixed = ["apple", 1, "banana", 2, "orange", 3, "grapes", 4, "mango", 5, "pineapple", 6, null, undefined, true, false];
console.log(mixed);
// output: [ 'apple', 1, 'banana', 2, 'orange', 3, 'grapes', 4, 'mango', 5, 'pineapple', 6 ]

// array indexing

fruits = ["apple", "banana", "orange", "grapes", "mango", "pineapple"];
console.log(fruits);
fruits[0] = "strawberry";
console.log(fruits);
// this will replace the first element of the array with strawberry
// output: [ 'strawberry', 'banana', 'orange', 'grapes', 'mango', 'pineapple' ]


// why is array is object
// in javascript there are many objects
// array is a special type of object
let obj = {}// object literal
console.log(typeof obj);
console.log(typeof fruits);
console.log(Array.isArray(fruits))
console.log(Array.isArray(obj))
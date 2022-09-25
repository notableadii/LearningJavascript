// primitive vs reference data types

let num1 = 10;
let num2 = num1;

console.log(num1, num2); // 10 10
num1++
console.log(num1, num2); // 11 10
// these are primitive data types
// num1 and num2 are primitive data types and they are stored in the stack and they are copied by value
// stack is a memory location where primitive data types are stored
// primitive data types are copied by value they work as expected

// reference data types

// array is a reference data types
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
console.log(arr1, arr2); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
arr1.push(6);
console.log(arr1, arr2); // [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]
// arr1 and arr2 are reference data types and they are stored in the heap and they are copied by reference
// heap is a memory location where reference data types are stored
// reference data types are copied by reference they do not work as expected
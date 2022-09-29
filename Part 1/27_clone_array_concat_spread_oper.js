// how to clone array

// how to concatentate two array

let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];
// let array2 = array1.slice(0) // clone array using slice method slice is faster than concat method
// let array2 = [].concat(array1) // clone array using concat method
// let array2 = [...array1] // clone array using spread operator

// let array2 = array1.slice(0).concat([6, 7, 8, 9, 10]) // concat two array using concat method
// concat is slower than spread operator and slice method
let array2 = [...array1, 6, 7, 8, 9, 10] // concat two array using spread operator
array1.push(11); // add element to array1 

console.log(array1===array2);
console.log(array1);
console.log(array2);
// clone

// String indexing 
// every character in a string has an index
// the first character has an index of 0
// the second character has an index of 1
// the third character has an index of 2
// and so on

let firstName = "John";

// J h o n
// 0 1 2 3

console.log(firstName[0]); // J
console.log(firstName[1]); // h
console.log(firstName[2]); // o
console.log(firstName[3]); // n


// length of string
// firstNaeme.length
// now to find the length of the string we can use the length property of the string (spaces also count as a character)
// length property is a property of the string
// length property is a number
// length property is a number that tells us the length of the string
firstName.length // 4 
console.log(firstName.length); // 4

//last index : length - 1
// now to find the last character of a string we can do this
console.log(firstName[firstName.length - 1]); // n

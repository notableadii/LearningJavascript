"use strict"; // Use strict mode to avoid silent errors
// undefined
// null

let firstName
console.log(typeof firstName); // undefined

// but with const you cannot do this you have to assign value to it otherwise it will give error

// const secondName;
// console.log(typeof secondName); // error


// null = empty value

let lastName = null;
console.log(typeof lastName, lastName); // object null (bug in js)



//Bigint

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber, bigNumber); // bigint (new data type in js)
// to convert number to bigint we have to add n at the end of number
// there is a limit to number in js
// 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// we cannot mix bigint with number
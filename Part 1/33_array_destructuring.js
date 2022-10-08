// array destructuring

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let myvar1 = arr[0];
// let myvar2 = arr[1];

// console.log(myvar1, myvar2); // in javascript there is a shortcut for this and we can do this in one line

let [myvar1, myvar2, myvar3] = arr;

console.log(myvar1, myvar2, myvar3); // this is a schortcut for the above code and it is called array destructuring
// what happenin here is that we are creating two variables myvar1 and myvar2 and we are assigning the first two elements of the array to these two variables and we are doing this in one line of code and this is called array destructuring and this is a very useful feature of javascript and we can use this feature to assign multiple variables at once 

// we can also use this feature to skip some elements of the array

[myvar1, , , , myvar2] = arr;

console.log(myvar1, myvar2); // 1 5


// we can also use slice method to do the same thing

 myvar1 = arr.slice(0, 1);
    myvar2 = arr.slice(4, 5);

    console.log(myvar1, myvar2); // [ 1 ] [ 5 ]
console.log(typeof myvar1, typeof myvar2); // object // this is not an array it is an object
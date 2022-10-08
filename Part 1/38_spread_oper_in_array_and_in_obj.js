// spread operator in array and in object


// spread operator in array

const array = [1, 2, 3, 4, 5];
const array2 = [...array, 6, 7, 8, 9, 10];
const array3 = [..."adii"] // we can also spread array like this and it will give us an array of characters
// a,d,i,i
const array4 = [..."123456789"] // output will be 1,2,3,4,5,6,7,8,9 //direct numbers cannot be spread

// ...array is called spread operator and it is used to copy the array 

console.log(array + " " + array2 + "\n" + array3);
console.log(array4);

// spread operator in object

console.log("------------------------")

const obj1 = {
    name: "aditya",
    age: 15,
}

const obj2 = {
    hobbies: "hockey" + ", coding",
    age: 16,
}


// const newObject = {...obj1, ...obj2} // this will print the object with all the key value pairs
// const newObject = {...obj1, ...obj2, NewKey: 50} // you can aslo add new key value pairs like this
const newObject = {..."ABC"}

console.log(newObject);
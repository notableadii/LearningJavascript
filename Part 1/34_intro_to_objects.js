// objects
// arays are good but not significant enough to be used in real world
// objects are used to represent real world things
// objects store key vale pairs
// objects dont have indexes

// -------------------------------------------------------

// how to create objects

const person = {name:"aditya shah", age:"15", hobbies:["hockey", "coding"]} // this is an object literal syntax // this is a key value pair // key is name and value is aditya shah // key is age and value is 15 
console.log(typeof person, person) // this will print the object
// we can even write keys in string there wont be any problem it will work same as above :)
//ex :-
// const person2 = {"name":"aditya shah", "age":"15", "hobbies":["hockey", "coding"]}

// -------------------------------------------------------

// how to access data from objects
console.log(person.name) // this will print aditya shah // this is dot notation // we can also use bracket notation // console.log(person["name"]) // this will also print aditya shah
console.log(person.age) // this will print 15 // this is dot notation // we can also use bracket notation // console.log(person["age"]) // this will also print 15
console.log(person.hobbies) // we can treat it like arrays also 
console.log(person.hobbies[0]) // this will print hockey
console.log(person.hobbies[1]) // this will print coding
console.log(person["name"]) // we can also use it like this we are writing the key in quotes but this is not recommended because if we have a key with a space in it then we will have to write the key in quotes and this will be a problem

// -------------------------------------------------------

// how to add key vales pairs to objects

person.gender = "Male" // this will add new key value pair to the object 
console.log(person) // this will print the object with new key value pair
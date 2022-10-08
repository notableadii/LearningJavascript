// difference between dot and bracket notation
// dot notation is used when we know the key
// bracket notation is used when we dont know the key

// -------------------------------------------------------
const key = "email";
const person = {
    name:"aditya shah",
     age:"15",
      "person hobbies":["hockey", "coding"]
    }

// when the key has a space in it we have to use bracket notation we cannot use dot notation

// console.log(person.person hobbies) // this will give an error
console.log(person["person hobbies"]) // this will print [ 'hockey', 'coding' ]
console.log(person["name"])
console.log(person["age"])

// now to add a key vale pair in the object from the variable we have to use bracket notation because we dont know the key

person[key] = "email@gmail.com" // this will add new key value pair to the object with the key name of the variable key and the value of the variable key
console.log(person) // this will print the object with new key value pair
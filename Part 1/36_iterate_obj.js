// how to iterate object

const person = {
    name:"aditya shah",
    age:"15",
    hobbies:["hockey", "coding"]
};


// for in loop
// object.keys

for(let key in person){
    console.log(key + ":" + person[key])
} // i prefer this because it is more readable and it is easy to understand


console.log(Object.keys(person))

for(let key of Object.keys(person)){
    console.log(key + ":" + person[key])
} 
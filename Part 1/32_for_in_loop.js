// for in loop in array

const fruit = ['apple', 'banana', 'orange', 'grape']  // 1. create an array

for(
    let item in fruit // 2. create a variable to keep track of the index
){
    console.log(fruit[item]); // 3. do something with the element
}

// this loop works the same as the while loop in 30_while_loop_in_array.js
// but it is shorter and easier to read

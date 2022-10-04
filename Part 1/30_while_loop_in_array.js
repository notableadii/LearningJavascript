// while loop in array

const fruit = ['apple', 'banana', 'orange', 'grape']  // 1. create an array

let i = 0; // 2. create a variable to keep track of the index

while(
    i <= fruit.length-1 // 3. create a condition to check if the loop should continue
){
    console.log(fruit[i]); // 4. do something with the element
    i++; // 5. update the index
}
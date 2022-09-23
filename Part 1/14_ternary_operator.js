// ternary operator
// ternary operator is a shortcut for if/else statement


let age = 6;
let drink;

if (age >= 5) {
    drink = "juice";
} else {
    drink = "water";
}
console.log(drink)

// but we can write the above code in a single line using ternary operator
// it is also called conditional operator

age = 8;
drink = age >= 5 ? "juice" : "water";
console.log(drink);
// here ? is if and : is else its is a ternary operator
// if age is greater than or equal to 5, then juice will be assigned to drink
// else water will be assigned to drink

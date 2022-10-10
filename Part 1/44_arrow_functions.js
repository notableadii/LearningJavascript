// arrow functions 
 
// const singHappyBirthday = function(){ // function expression
//     console.log("happy bitthday song.......");
// }

const singHappyBirthday = () => {
    console.log("happy bitthday song.......");
}

singHappyBirthday(); // here we are calling the function


const newfunction = (number1, number2) => {
    return number1 + number2;
}

const returnedValue = newfunction(4, 5)// <- this are called arguments;
console.log(returnedValue);

const loopfunction = (i = 0) => {
    for (i; i<10; i++){
        console.log(i);
    }
}

loopfunction();

// you can rerun value using arraiw functions in single line

const loopfunction2 = number => number % 2 === 0 ? "even" : "odd";

console.log(loopfunction2(4));
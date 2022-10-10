// function expression

// function singHappyBirthday(){ // function declaration
//     console.log("happy bitthday song.......");
// }

const singHappyBirthday = function(){ // function expression
    console.log("happy bitthday song.......");
}

singHappyBirthday(); // here we are calling the function

const sumTwoNumbers = function(number1 , number2){// there are two parameters
    return number1 + number2;
 }
 
 // programming has dry principle - don't repeat yourself 
 // so we can use function to avoid repeating ourselves
 
 const returnedValue = sumTwoNumbers(4, 5)// <- this are called arguments;
 console.log(returnedValue);
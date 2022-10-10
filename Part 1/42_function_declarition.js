// functions
// function declaration


// console.log("happy bitthday song.......");

// console.log("happy bitthday song.......");
singHappyBirthday(); // function call
function singHappyBirthday(){ // function declaration
    console.log("happy bitthday song.......");
}  

singHappyBirthday(); // here we are calling the function
// this is a function declaration
// this function can work multiple times
// this function can be called before it is declared
singHappyBirthday(); // function call
singHappyBirthday(); // function call

function sumTwoNumbers(number1 , number2){// there are two parameters
   return number1 + number2;
}

// here return is a keyword that will return the value of the function defination - it will return the value of the function 
// programming has dry principle - don't repeat yourself 
// so we can use function to avoid repeating ourselves

const returnedValue = sumTwoNumbers(4, 5)// <- this are called arguments;
console.log(returnedValue);

function sumThreeNumbers(number1, number2, number3){// there are two parameters
    return number1 + number2 + number3;
 }

const returnedValue2 = sumThreeNumbers(4, 5, 8)// <- this are called arguments;
console.log(returnedValue2);

// odd orr even

// function isEven(number){
//     if(number%2 ===0){
//         return true;
//     }
//     return false;

// }

// we can make it more simple
function isEven(number){
    return number%2 ===0; // this will return true or false 
}

const isEvenValue = isEven(4);
console.log(isEvenValue);

// FUNCTION
// input -> string
// output -> first letter of the string

function getFirstLetter(string){
    return string[0];
}

const firstLetter = getFirstLetter("aditya");
console.log(firstLetter);

// FUNCTION
// input -> array, target(number)
// output -> index of the target in the array

function getIndex(arrya, target){
    for(let i = 0; i < arrya.length; i++){
        if(arrya[i] === target){
            return i;
        }
    }
    return -1;
}

const index = getIndex([1, 2, 3, 4, 5], 3);
console.log(index);
// switch statement
// switch statement is used to execute one statement from multiple conditions


let day = 5;

// if (day === 0) {
//     console.log("Sunday");
// } else if (day === 1) {
//     console.log("Monday");
// } else if (day === 2) {
//     console.log("Tuesday");
// } else if (day === 3) {
//     console.log("Wednesday");
// } else if (day === 4) {
//     console.log("Thursday");
// } else if (day === 5) {
//     console.log("Friday");
// } else if (day === 6) {
//     console.log("Saturday");
// } else {
//     console.log("Invalid day");
// }
// this is a nested if else statement and it is not a good practice to use nested if else statement because it is hard to read and understand the code so we will use switch statement to solve this problem and make the code more readable

day = 5;

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}
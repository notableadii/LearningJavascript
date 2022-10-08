// nested destructuring

const users = [
    {userId: 1, name: "Aditya", age: 21 },
    {userId: 2, name: "Rahul", age: 22 },
    {userId: 3, name: "Rohan", age: 23 },
];

const [{userId}, {name:bandName}] = users;
console.log(bandName, userId);
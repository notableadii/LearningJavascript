// object inside array
// / very useful in real world applications

const users = [
    {userId: 1, name: "Aditya", age: 21 },
    {userId: 2, name: "Rahul", age: 22 },
    {userId: 3, name: "Rohan", age: 23 },
];

for(user of users){
    console.log(user);

}

for(user of users){
    console.log(user.userId, user.name, user.age);

}


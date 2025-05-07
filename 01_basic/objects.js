// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
// const obj4 = {...obj1,...obj2};
// console.log(obj3);
// console.log(obj4);

const user = [
    {
        id : "user1",
        email : "huzefa@gmail.com"
    },
    {
        id : "user2",
        email : "user@gmail.com"
    },
    {
        id : "user3",
        email : "vscode@gmail.com"
    }
]

console.log(user[1].email);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


console.log(Object.hasOwnProperty('email'));

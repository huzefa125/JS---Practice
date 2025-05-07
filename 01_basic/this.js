const username = {
    name : "HUzefa",
    price : 999,

    welcomeMessage : function mess(){
        console.log(`Welcome to Our Website ${this.name} `);
    }
}

username.welcomeMessage()
username.name = "Ayan"
username.welcomeMessage()

console.log(username);
console.log(this);

// function name() {
//     console.log(this);
// }
// name()
// const chai = function (){
//     let username = "huzefa"
//     console.log(this.username);    
// }

// const chai =  () => {
//     let username = "huzefa"
//     console.log(this);    
// }
// chai()

const arrow = (num1,num2) => {
    return num1+ num2
}
console.log(arrow(3,42));

// const addtwo = (num1,num2) => num1 + num2
// console.log(addtwo(3,42));
// const addtwo = (num1,num2) => (num1 + num2)

const adding = () => ({username:"huzefa"})
console.log(adding());

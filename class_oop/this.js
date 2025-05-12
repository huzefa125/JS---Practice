function setUsername(username){
    this.username = username;
    console.log("called")
}

function createUser(email,password){
    setUsername.call(username)

    this.email = email
    this.password = password
}
const chai = new createUser("chai","huzefa@gmail.com","123")
console.log(chai)
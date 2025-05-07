const user = {
    user : "huzefa",
    price : 800
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.user} and price is ${anyObject.price}`)
}
handleObject(user)

// infinite paramenter

function huzefa(...num1){
    return num1
}

console.log(huzefa(1,3,5,3,45))

const myNewArray = [200,400,100,600]

function returnSecondArray(getArrays) {
    return getArrays[1]
}

console.log(returnSecondArray([200,400,344,32]));

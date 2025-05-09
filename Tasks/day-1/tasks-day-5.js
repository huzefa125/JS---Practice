// DAY 5 

// Activity 1: Function Declaration
// Task 1: Ek function banao jo check kare ki koi number even hai ya odd aur result console par log kare.
function check(){
    let num = 13
    if(num % 2 == 0){
        console.log("Even");
    }
    else {
        console.log("odd");
    }
}
check()
// Task 2: Ek function banao jo kisi number ka square calculate kare aur result return kare.
    function square() {
        let num = 12;
        let ans = num * num
        console.log(ans);
    }

    square()

//  Activity 2: Function Expression
// Task 3: Ek function expression banao jo do numbers me se maximum find kare aur result console par log kare.
const maximum = function(num1,num2,num3) {
    let math = Math.max(num1,num2,num3)
    console.log(`${math} is maximum`);
}
maximum(93,42,12)
// Task 4: Ek function expression banao jo do strings ko concatenate kare aur result return kare.
const string = function(string1,strings2) {
    // let string = string1.
    return string1+strings2
}
console.log(string("huzefa","sha"));
//  Activity 3: Arrow Functions
// Task 5: Ek arrow function banao jo do numbers ka sum calculate kare aur result return kare.
const sums = (num1,num2) => {
    return num1+num2
}
console.log(sums(23,43));

// Task 6: Ek arrow function banao jo check kare ki koi string me specific character hai ya nahi aur boolean value return kare.
const arr = (strings) =>{
    return strings.includes('A')
}
console.log(arr('absddx'));

// Activity 4: Function Parameters and Default Values
// Task 7: Ek function banao jo do parameters le aur unka product return kare. Dusre parameter ke liye ek default value do.
const arrow = (num1,num2) =>{
    return num1*num2
}
console.log(arrow(77,87));

// Task 8: Ek function banao jo kisi person ka naam aur age le aur greeting message return kare. Age ke liye ek default value do.
const greeting = (name,age) => {
    return `Hello ${name} and your age is ${age}`
}
console.log(greeting("huzefa",71));

// Activity 5: Higher-Order Functions
// Task 9: Ek higher-order function banao jo ek function aur ek number le aur us function ko utni baar call kare jitna number diya ho.
function Highlight(func,n){
    for (let i = 0; i < n; i++) {
        func();
    }
}

function greet(){
    console.log("hello guys");
}
Highlight(greet,6)
// Task 10: Ek higher-order function banao jo do functions aur ek value le, pehle function ko value par apply kare, phir dusre function ko result par apply kare.
function processTwoFunctions(func1, func2, value){
    const result1 = func1(value)
    const result2 = func2(result1)
    return result2
}
function double(x){
    return x * 2
}
function square(y){
    return y * y

}
const resultAns = processTwoFunctions(double,square,6)
console.log(resultAns);

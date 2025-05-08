// <!-- Day 4 

//  Activity 1: For Loop
// Task 1: Ek program banao jo for loop ka use karke 1 se 10 tak ke numbers print kare.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Task 2: Ek program banao jo for loop ka use karke 5 ka table print kare.
for (let i = 0; i <= 10; i++) {
    console.log(`5 * ${i}  = ${5 * i}`);
}
// Activity 2: While Loop
// Task 3: Ek program banao jo while loop ka use karke 1 se 10 tak ke numbers ka sum calculate kare.
let i = 0
let sum = 0;
while (i<=10) {
    console.log(i);
    sum += i
    console.log(sum);
    i++
}
// Task 4: Ek program banao jo while loop ka use karke 10 se 1 tak ke numbers print kare.
n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}
// Activity 3: Do While Loop
// Task 5: Ek program banao jo do...while loop ka use karke 1 se 5 tak ke numbers print kare.
let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);

// Task 6: Ek program banao jo do...while loop ka use karke kisi number ka factorial calculate kare.
let num = 5;
let fact = 1;
let l = 1;

do {
    fact *= l;
    l++;
} while (l <= num);

console.log("Factorial of " + num + " is " + fact);

//  Activity 4: Nested Loops
// Task 7 & 8: Doo program banao jo nested for loops ka use karke yeh pattern print kare:


let ch = 65; // ASCII value of 'A'

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(ch) + " ";
        ch++;
    }
    console.log(row);
}

for (let i = 0; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

//     *  
//     *  *  
//     *  *  *  
//     *  *  *  *  
//     *  *  *  *  *  

// A 
// B C 
// D E F 
// G H I J 
// K L M N O 

// Activity 9: Loop Control Statements
// Task 8: Ek program banao jo 1 se 10 tak ke numbers print kare, lekin continue statement ka use karke number 5 ko skip kare.
for (let i = 0; i < 10; i++) {
    // const element = array[i];
    if (i == 5) {
        console.log("5 mila hame");
        // break
        continue
    }
    console.log(i);
}
// Task 10 : Ek program banao jo 1 se 10 tak ke numbers print kare, lekin break statement ka use karke jab number 7 aayega tab loop stop ho jaye. -->


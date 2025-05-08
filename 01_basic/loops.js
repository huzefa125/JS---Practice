for (let i = 0; i < 10; i++) {
    // console.log(i);
}

//break and continue 
for (let i = 0; i < 10; i++) {
    
    
    if (i == 5){
        // console.log("5 detected");
        // break
        continue
    }
    // console.log(i);
    // console.log(i);
}
// i=0
// while (i <=20) {
//    console.log(i);
//    i= i+2
// }

let heros = ['superman','batman','wonder women','flash']
let i = 0;
while (i < heros.length) {
    console.log(heros[i]);
    i = i +1
}

let score = 12
do{
    console.log(`${score} is `);
    score++
}while (score <=20);
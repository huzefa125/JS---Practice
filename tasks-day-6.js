//#task - 1 
const arr = [1,2,3,4,5]
console.log(arr);

// task - 2
console.log(arr[0]);
console.log([arr[4]]);

// task - 3
arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(1)
console.log(arr);


let arrs = arr.map(num => num * 2)
console.log(arrs);

let evens = arr.filter(num => num % 2 === 0)
console.log(evens);

let sum = arr.reduce((acc,curr) =>
    acc + curr, 0);

console.log(sum);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(num => console.log(arr))

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix);
console.log(matrix[1][2]);

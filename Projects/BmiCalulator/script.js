
// const button = document.getElementById('Button')
// const result = document.getElementById('result'); 

// button.addEventListener('click',function(){
//     const weight = document.getElementById('weight').value;
//     const height = document.getElementById('height').value;


//     const bmi =(weight / ((height / 100) ** 2)).toFixed(2);
//     result.textContent= `Your bmi is ${bmi}`
// })
// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");

const button = document.querySelector('button')
const result = document.querySelector('#result')

// const bmi =(weight / ((height / 100) ** 2)).toFixed(2);

button.addEventListener('click',function (){
    const weight =parseFloat( document.getElementById('weight').value)
    const height =parseFloat( document.getElementById('height').value)
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    result.textContent = (`your bmi is ${bmi}`)
})
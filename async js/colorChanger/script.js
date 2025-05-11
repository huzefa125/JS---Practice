const random = function () {
    const hex = '012345678ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)] 
    }
    return color;
}

let IntervaleId;
const startChangingColor = function () {
    if (!IntervaleId) {
        IntervaleId = setInterval(changeByColor,1000)
    }
    function changeByColor(){
        document.body.style.backgroundColor = random();
    }
};
const stopChangingColor = function(){
    clearInterval(IntervaleId)
    IntervaleId = null
}

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)
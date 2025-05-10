const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")

btn.forEach(  (button) => {
    button.addEventListener("click",function (e) {
        body.style.backgroundColor = this.id
    })
} )

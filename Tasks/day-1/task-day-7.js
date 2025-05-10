let book = {
    title:"javascript basic",
    author : "john deo",
    year : 2020
}
console.log(book);

console.log(book.title);
console.log(book.author);

book.getSummary = function () {
    return `${this.title} by ${this.author}`
}
console.log(book.getSummary());

book.updatebook = function (newyear) {
    this.year = newyear
}
book.updatebook(2022)

console.log(book);






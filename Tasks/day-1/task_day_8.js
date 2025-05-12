// Activity 1: Object Creation and Access

let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988
};
console.log(book);

console.log(book.title);
console.log(book.author);

book.getDetails = function(){
    return `${book.title} by ${book.author}`
}
console.log(book.getDetails());

book.updateYear = function(newYear){
    this.year = this.year;
};
book.updateYear(2024);

console.log(book);

let library = {
  name: "City Library",
  books: [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
  ]
};

console.log(library);

console.log(library.name);

library.books.forEach(element => {
    console.log(element.title);
});

book.getTitleAndYear = function () {
    return `Title ${this.title},year : ${this.year
    }`
}

console.log(book.getTitleAndYear());

for (const key in book) {
    if (typeof book[key] !== 'function') {
        console.log(`${key} : ${book[key]}`);
    }
}

console.log(Object.keys(book));
console.log(Object.values(book));



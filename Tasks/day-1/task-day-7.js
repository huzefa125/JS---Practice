// Activity 1: Object Creation and Access

// Task 1
let book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018
};
console.log("Book Object:", book);

// Task 2
console.log("Title:", book.title);
console.log("Author:", book.author);

// Activity 2: Object Methods

// Task 3
book.getSummary = function() {
  return `${this.title} by ${this.author}`;
};
console.log("Summary:", book.getSummary());

// Task 4
book.updateYear = function(newYear) {
  this.year = newYear;
};
book.updateYear(2021);
console.log("Updated Book Object:", book);

// Activity 3: Nested Objects

// Task 5
let library = {
  name: "City Library",
  books: [
    { title: "Atomic Habits", author: "James Clear", year: 2018 },
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "Deep Work", author: "Cal Newport", year: 2016 }
  ]
};
console.log("Library Object:", library);

// Task 6
console.log("Library Name:", library.name);
console.log("Book Titles:");
library.books.forEach(book => {
  console.log(book.title);
});

// Activity 4: The this Keyword

// Task 7
book.getDetails = function() {
  return `Title: ${this.title}, Year: ${this.year}`;
};
console.log("Book Details:", book.getDetails());

// Activity 5: Object Iteration

// Task 8
console.log("Iterating over book properties using for...in:");
for (let key in book) {
  if (typeof book[key] !== "function") {
    console.log(`${key}: ${book[key]}`);
  }
}

// Task 9
console.log("Book Object Keys:", Object.keys(book));
console.log("Book Object Values:", Object.values(book));

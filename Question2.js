/*2.Task: Object Manipulation

Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. */

const books = [
  { title: "Book1", author: "Mr.A", year: 2000 },
  { title: "Book2", author: "Mr.B", year: 2001 },
  { title: "Book3", author: "Mr.C", year: 2002 },
  { title: "Book4", author: "Mr.D", year: 2003 },
  { title: "Book5", author: "Mr.E", year: 2004 },
];

const GetTitles = (books) => {
  return books.map((book) => book.title);
};

console.log(GetTitles(books));

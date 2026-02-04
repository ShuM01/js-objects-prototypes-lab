// Exercise 9
const library = {
  name: 'City Library',
  books: [],

  addBook(title, author, isbn) {
    const book = { title, author, isbn };
    this.books.push(book);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title) || null;
  },

  listAllBooks() {
    this.books.forEach(book => console.log(book.title));
  }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];

universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
  this.courses.push(courseName);
  this.addBook(title, author, isbn);
};

// Test
universityLibrary.addBook('Soul Mate', 'Laila', '978-0132350884');
universityLibrary.addCourseBook('CS101', 'Bay Habour Butcher', 'Dexter Morgan', '978-0201633610');
universityLibrary.addCourseBook('CS102', 'gas and fire', 'Sergent Doakes', '978-1491904244');

universityLibrary.listAllBooks();
// Bonus: search by author
const booksByAuthor = universityLibrary.books.filter(book => book.author === 'Dexter Morgan');
console.log("Books by Dexter Morgan:", booksByAuthor);
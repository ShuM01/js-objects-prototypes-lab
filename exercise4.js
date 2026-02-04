// Exercise 5

const book = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
  year: 2008,
  isbn: '978-0596517748'
};

function displayProperty(obj, propertyName) {
  console.log(obj[propertyName]);
}

function updateProperty(obj, propertyName, newValue) {
  obj[propertyName] = newValue;
}

// Test functions
displayProperty(book, 'title');          // Expected: JavaScript: The Good Parts
updateProperty(book, 'year', 2024);
displayProperty(book, 'year');           // Expected: 2024
// Exercise 1: Function Declaration
function calculateArea(length, width) {
  return length * width;
}

// Test the function
console.log(calculateArea(5, 10)); 
console.log(calculateArea(7, 3));  
console.log(calculateArea(4, 4));  



// Exercise 2: Function Expression
const calculatePerimeter = function(length, width) {
  return 2 * length + 2 * width;
};

// Test the function
console.log(calculatePerimeter(5, 10)); 
console.log(calculatePerimeter(7, 3));  
console.log(calculatePerimeter(4, 4)); 
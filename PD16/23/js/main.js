let a = 6;
let b = 2;
// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed";
  }
  return a / b;
}
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b)); 
console.log(divide(a, b)); 
 
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};
console.log(calculator);
calculator.sin = function(a) {
  return Math.sin(a);
};

calculator.cos = function(a) {
  return Math.cos(a);
};

calculator.log = function(a) {
  return Math.log(a);
};

console.log(calculator);
console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(2, 6)); // 12
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.sin(Math.PI / 2)); // 1
console.log(calculator.cos(Math.PI / 4)); // 0.7071067811865476
console.log(calculator.log(10)); // 2.302585092994046
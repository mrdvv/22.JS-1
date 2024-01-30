let number = -12345;  // -54321
function reverseNumber(number) {
  return parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number);
}

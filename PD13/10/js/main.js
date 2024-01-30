
let a = 5;
let b = 10;
let c = 7;
let sum = 0;

if (a >= b && a >= c) {
  sum = b + c;
} else if (b >= a && b >= c) {
  sum = a + c;
} else {
  sum = a + b;
}
console.log("Sumos dvieju didziausiu skaiciu:", sum);

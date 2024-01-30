let funnyNumber = 12345; // Convert to String
let funnyString = '12345'; // Convert to Number
let funnyTrue = '1'; // Convert to Boolean
let funnyFalse = '0'; // Convert to Boolean
let isTrue = false; // Convert to String
let isFalse = true; // Convert to Number
let funnyText = 'JavaScript is dynamic programming language.'; // Convert to Number
let funnyNull = null; // Convert to String
let funnyUndefined = undefined; // Convert to String
let isTrueString = true; // Convert to String
let isFalseString = false; // Convert to String
let booleanString = 'true'; // Convert to Number
let otherBooleanString = 'false'; // Convert to Boolean

funnyNumber = String(isTrue);;
console.log(typeof(funnyNumber));

funnyString = Number(funnyString);
console.log(typeof(funnyString));

funnyTrue = Boolean(funnyTrue);
console.log(typeof(funnyTrue));

funnyFalse = Boolean(funnyFalse);
console.log(typeof(funnyFalse));

isTrue = String(isTrue);
console.log(typeof(IsTrue));

isFalse = Number(isFalse);
console.log(typeof(IsFalse));

funnyText = Number(funnyText);
console.log(typeof(funnyText));

funnyNull = String(funnyNull);
console.log(typeof(funnyNull));

funnyUndefined = String(funnyUndefined);
console.log(typeof(funnyUndefined));

isTrueString = String(isTrueString);
console.log(typeof(isTrueString));

isFalseString = String(isFalseString);
console.log(typeof(isFalseString));

booleanString = Number(booleanString);
console.log(typeof(booleanString));

otherBooleanString = Boolean(otherBooleanString);
console.log(typeof(otherBooleanString));

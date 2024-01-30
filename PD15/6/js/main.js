let arr = [1, 2, 3, 4, 1, 2, 1, 3, 4, 1];
let element = 1;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === element) {
    count++;
  }
}

console.log("Pasirinktas elementas pasikartoja " + count + " kartus.");

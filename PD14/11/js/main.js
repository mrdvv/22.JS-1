let a = 12;
let dalikliai = [];
for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
     dalikliai.push(i);
    }
}
let dalikliuSum = 0;
for (let i = 0; i < dalikliai.length; i++) {
    dalikliuSum += dalikliai[i];
}
let lygiudalikliuSum = 0;
for (let i = 0; i < dalikliai.length; i++) {
    if  (dalikliai[i] % 2 === 0) {
        lygiudalikliuSum += dalikliai[i];
    }
}
console.log("dalikliai:", dalikliai);
console.log("Suma dalikliu:", dalikliuSum);
console.log("Suma lygiu dalikliu:", lygiudalikliuSum);

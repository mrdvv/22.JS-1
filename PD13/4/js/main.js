let a = -6, b = 0, c = 159;
let D = b*b - 4*a*c;

if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2*a);
    let x2 = (-b - Math.sqrt(D)) / (2*a);
    console.log(`salyga turi du sprendinius: ${x1} ir ${x2}`);
} else if (D === 0) {
    let x = -b / (2*a);
    console.log(`abu sprendiniai: ${x}`);
} else {
    console.log('salyga neturi sprendiniu');
}
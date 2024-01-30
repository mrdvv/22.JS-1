let x = 2;
let y = -2;
let z = 4;
if (x <= y && x <= z) {
    if (y <= z) {
        console.log(`Rezultatas: ${x} ${y} ${z}`);
    } else {
        console.log(`Rezultatas: ${x} ${z} ${y}`);
    }
} else if (y <= x && y <= z) {
    if (x <= z) {
        console.log(`Rezultatas: ${y} ${x} ${z}`);
    } else {
        console.log(`Rezultatas: ${y} ${z} ${x}`);
    }
} else {
    if (x <= y) {
        console.log(`Rezultatas: ${z} ${x} ${y}`);
    } else {
        console.log(`Rezultatas: ${z} ${y} ${x}`);
    }
}
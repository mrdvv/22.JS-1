let n = 3;
let m = [18, 10, 10];
let m1 = 0;
let k = 0;
for (let i = 0; i < m.length; i++) {
    if (m[i] >= 20) {
        k++;
    }
    m1 += m[i];
}
let vid = m1 / n;
console.log(`m = ${vid.toFixed(1)}`);
console.log(`k = ${k}`);
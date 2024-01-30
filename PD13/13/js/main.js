const p1 = 2.99;
const p2 = 4.99;
const p = 20;
const s = 10;
const p3 = (p2 - (p2 * p) / 100) + (p1 - (p1 * p) / 100);

if (s >= p3) {
    console.log(`Iperka ${p3.toFixed(2)}eur`);
} else {
    console.log(`neiperka ${p3.toFixed(2)}eur, turi tik ${s} euru`)
}
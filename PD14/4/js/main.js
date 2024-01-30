const Sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5];
const Vasaris = [-16, -14.5, -11, -10.3, -3.5, 0];
const Kovas = [-3, -2.5, 0, 5, 9.5, 11.2];
let S = 0;
let V = 0;
let K = 0;

for (let i = 0; i < Sausis.length; i++) {
    S += Sausis[i];
}

for (let i = 0; i < Vasaris.length; i++) {
    V += Vasaris[i];
}

for (let i = 0; i < Kovas.length; i++) {
    K += Kovas[i];
}

let avgS = S / Sausis.length;
let avgV = V / Vasaris.length;
let avgK = K / Kovas.length;
let bendras = (S + V + K) / (Sausis.length + Vasaris.length + Kovas.length);
console.log(`vidutinio Sausio temp: ${avgS.toFixed(2)}`);
console.log(`vidutinio Vasario temp: ${avgV.toFixed(2)}`);
console.log(`vidutinio Kovo temp: ${avgK.toFixed(2)}`);
console.log(`bendras temp: ${bendras.toFixed(2)}`);
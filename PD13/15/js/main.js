const p = 10; 
const a = 50;
const t = 200;

const tn = t - (t * p) / 100;
const Uztenka = a >= tn;

console.log(`Telefonas kainuos ${tn} euru su nuolaida.`);
console.log(`Austėja susitaupius ${a} euru.`);
console.log(`Ar uztenka Austejai Santaupu? ${Uztenka}`);

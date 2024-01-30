let kuroBakoTalpa = 112;
let kuroSanaudos = 11;
let dienos = 0;
let kuras = kuroBakoTalpa;
while (kuras >= 0) {
  if (dienos % 2 === 0) {
    kuras -= kuroSanaudos;
  } else {
    kuras -= 2 * kuroSanaudos;
  }
  dienos++;
}
let trukme = dienos - 1; 
console.log(`Keliauti bus galima ${trukme} dienas.`);

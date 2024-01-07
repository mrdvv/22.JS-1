let ilgis = 4;
let aukstis = 3;
let plytosIlgis = 0.2; 
let plytosAukstis = 0.1; 
let plytosKaina = 0.5;

let sienosPlotas = ilgis * aukstis;
let plytosPlotas = plytosIlgis * plytosAukstis;
let plytuKiekis = Math.ceil(sienosPlotas / plytosPlotas);
let plytuKaina = plytuKiekis * plytosKaina;

console.log("Plytų kiekis " + plytuKiekis + ". Plytos kainuos " + plytuKaina.toFixed(2) + " Eur.");

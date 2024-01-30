let egliuSkaicius = 6;
let auksciai = [167, 134, 145, 156, 155, 176];
let auksciuSuma = 0;

for (let i = 0; i < egliuSkaicius; i++) {
  auksciuSuma += auksciai[i];
}

let vidutinisAukstis = auksciuSuma / egliuSkaicius;

console.log("Eglutės aukščio vidurkis: " + vidutinisAukstis.toFixed(1) + " cm");

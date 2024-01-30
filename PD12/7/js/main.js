let dalyvavoBegiku = 4;
let begikuLaikai = [22, 20, 25, 25];
let greiciausioLaikas = begikuLaikai[0];
let greiciausioIndeksas = 0;
let sumaLaiko = begikuLaikai[0];
for (let i = 1; i < dalyvavoBegiku; i++) {
    sumaLaiko += begikuLaikai[i];
    if (begikuLaikai[i] < greiciausioLaikas) {
        greiciausioLaikas = begikuLaikai[i];
        greiciausioIndeksas = i;
    }
}
let vidutinisLaikas = sumaLaiko / dalyvavoBegiku;
let skirtumas = Math.abs( greiciausioLaikas - vidutinisLaikas);
console.log("Greičiausio bėgiko laikas: " + greiciausioLaikas + " sek. Jis buvo: " + skirtumas + " sek geresnis už vidurkį.");

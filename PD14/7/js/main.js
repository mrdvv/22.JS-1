let pirmas = 1997;
let paskutinis = 2018;

for(let i = pirmas; i <= paskutinis; i++){
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
        console.log(i);
    }
}
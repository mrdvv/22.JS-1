let arr = ["pirmas", "antras"];
let antras = ' ';

for (let i = 1; i < arr.length; i++){
    antras += arr.join(' ');
}

console.log(antras);
console.log(arr.toString());
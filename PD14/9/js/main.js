let ameba = 1;
let h = 0; 
for (let i = 0; i < 24; i++){
    if (h % 3 == 0){
    ameba *= 2;
    console.log(ameba);
    }
    h++;
}
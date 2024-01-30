let s1 = 222;
let s2 = 245;
for (let i = s1; i <= s2; i++){
    if (i % 3 === 0 ){
        let c = i.toString();
        if (c.includes('3') || c.includes('6') || c.includes('9')){
            console.log(c);
        }
    }
}

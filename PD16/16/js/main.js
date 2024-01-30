const number = 28;
function isPerfectNumber(number) {
    let sum = 0;
    
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    
    return sum === number;
}
console.log(`Ar ${number} yra tobulasis skaičius? ${isPerfectNumber(number)}`);

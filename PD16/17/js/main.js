let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = 5;
function getElementsGreaterThan(array, number) {
    const result = array.filter(element => element > number);
    return result;
}
console.log(result);
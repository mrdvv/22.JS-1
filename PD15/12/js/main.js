let arr = [1, 3, 5];
let arr2 = [4, 3, 1];
let arr3 = [];

for(let i = 0; i < arr.length; i++){
    arr3.push(arr[i] * arr2[i]);
}
console.log(arr3);
let arr = [1,1,2,2,3,4,5,5,7,7,8,8,8,9];
let arr1 = [];
    for(let i=0; i< arr.length; i++) {
        if(!arr1.includes(arr[i])) arr1.push(arr[i]);
    }
console.log(arr1);
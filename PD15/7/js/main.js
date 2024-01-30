let arr = 'pirmas'; 
let arr2 = '';

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i].toUpperCase()){
        arr2 += arr[i].toLowerCase();
    } else if (arr[i] === arr[i].toLowerCase()){
        arr2 += arr[i].toUpperCase();
    }
}
console.log(arr2);
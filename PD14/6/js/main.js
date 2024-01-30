let js = "JavaScript for all";
let lifo = [];

for(let i = 0; i < js.length; i++) {
 lifo.push(js[i]);
}
let sj = '';
while  (lifo.length > 0) {
    sj += lifo.pop();
}
console.log(js);
console.log(sj);

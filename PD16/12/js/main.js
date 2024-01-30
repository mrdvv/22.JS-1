let skaicius = 2;
function arPirminis(skaicius) {
  if (skaicius <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(skaicius); i++) {
    if (skaicius % i === 0) {
      return false;
    }
  }
  
  return true;
}
console.log(arPirminis(skaicius));
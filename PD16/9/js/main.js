let str = 'abcdefghijklmnopqrstuvwxyz';
function sortStringAlphabetically(str) {
  return str.split('').sort().join('');
}
console.log(sortStringAlphabetically(str));
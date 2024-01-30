let str = "juodas katinas bega is kiemo";
function convertToUpperCase(str) {
  return str.replace(/\b\w/g, function(l) {
    return l.toUpperCase();
  });
}
console.log(convertToUpperCase(str));
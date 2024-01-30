let countryNames = ["Australia", "Germany", "Egypt"];
function findLongestCountryName(countryNames) {
  let longestName = "";
  for (let i = 0; i < countryNames.length; i++) {
    if (countryNames[i].length > longestName.length) {
      longestName = countryNames[i];
    }
  }
  return longestName;
}
console.log(findLongestCountryName(countryNames));
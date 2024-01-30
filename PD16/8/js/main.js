const word = 'cat';
const combinations = generateCombo(word);
function generateCombo(word) {
  let combinations = [];

  function backtrack(combination, remaining) {
    if (remaining.length === 0) {
      combinations.push(combination);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        backtrack(combination + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }
  }

  backtrack('', word);
  return combinations;
}
console.log(combinations);

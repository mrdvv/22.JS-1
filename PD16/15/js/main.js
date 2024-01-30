let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findSecondSmallestAndLargest(numbers) {
  if (numbers.length < 2) {
    return "Masyve turi būti bent du skaičiai";
  }

  let sortedNumbers = numbers.sort(function(a, b) {
    return a - b;
  });

  let secondSmallest = sortedNumbers[1];
  let secondLargest = sortedNumbers[sortedNumbers.length - 2];

  return [secondSmallest, secondLargest];
}
console.log(findSecondSmallestAndLargest(numbers));
console.log(secondLargest);
console.log(secondSmallest);

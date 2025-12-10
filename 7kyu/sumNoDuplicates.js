//❓DESCRIPTION
// Please write a function that sums a list, but ignores any duplicated items in the list.
//
// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

//🌀TESTS
//  [[1, 1, 2, 3], 5],
//   [[], 0],
//   [[1, 1, 2, 2, 3], 3],
//   [[5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1], 21],

//✅SOLUTION
function sumNoDuplicates(numList) {
return numList
  .filter((num) => numList.indexOf(num) === numList.lastIndexOf(num))
  .reduce((sum, num) => sum + num, 0);
}

console.log(sumNoDuplicates([1, 1, 2, 3]));
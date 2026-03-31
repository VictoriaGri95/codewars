//❓DESCRIPTION
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//🌀TESTS
//    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
//     assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
//     assert.deepEqual(sortArray([]),[]);

//✅SOLUTION

function sortArray(array) {
  let arrayOfIndex = []
  let arrayOfOdd = array.filter((item, index) => {
    if (item % 2 !== 0) {
      arrayOfIndex.push(index)
      return true
    }
    return false
  }).sort((a, b) => a - b)
  arrayOfIndex.forEach((index, i) => {
    array[index] = arrayOfOdd[i]
  })
  return array
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 3, 1, 8, 0]))
console.log(sortArray([]))
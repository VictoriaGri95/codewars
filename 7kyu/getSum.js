//❓DESCRIPTION
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
// Note: a and b are not ordered!
//Your function should only return a number, not the explanation about how you get that number.

//🌀TESTS
//   assert.strictEqual(getSum(0,-1), -1);
//     assert.strictEqual(getSum(0, 1),  1);
//     assert.strictEqual(getSum(2, 2),  2);

//✅SOLUTION
function getSum(a, b) {

  const result = []
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result.reduce((acc, curr) => acc + curr, 0);
}

console.log(getSum(2, 2))
console.log(getSum(0, 1))
console.log(getSum(0, -1))
console.log(getSum(5, -1))
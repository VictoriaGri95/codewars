//❓DESCRIPTION
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


//🌀TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe("Example tests", () => {
//   it("Test 1", () => {
//     assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//   });
//   it("Test 2", () => {
//     assert.strictEqual(highAndLow("1 2 3"), "3 1");
//   });
// });

//✅SOLUTION
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number)
  const maxNumber = Math.max(...numbers)
  const minNumber = Math.min(...numbers)
  return `${maxNumber} ${minNumber}`
}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
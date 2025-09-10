//❓DESCRIPTION
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]


//🌀TESTS
//assert.deepEqual(digitize(35231),[1,3,2,5,3]);
//     assert.deepEqual(digitize(0),[0]);

//✅SOLUTION
const digitize = (n) => n.toString().split('').reverse().map(Number);

console.log(digitize(35231))
console.log(digitize(0))
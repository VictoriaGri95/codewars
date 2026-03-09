//❓DESCRIPTION
// Digital root is the recursive sum of all the digits in a number.
//
// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.


//🌀TESTS
//  assert.strictEqual( digitalRoot(16), 7 )
//     assert.strictEqual( digitalRoot(456), 6 )

//✅SOLUTION
function digitalRoot(n) {
  return n < 10
    ? n
    : digitalRoot(
      String(n)
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0)
    );
}

console.log(digitalRoot(16))
console.log(digitalRoot(456))
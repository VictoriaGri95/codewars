//❓DESCRIPTION
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
//
// Examples:
//
// 1: -1
// 14: -14
// -34: 34


//🌀TESTS
// assert.strictEqual(opposite(1), -1);
//   });
//   it('should return 0', () => {
//     assert.strictEqual(opposite(0), 0);
//   });
//   it('should return -4.25', () => {
//     assert.strictEqual(opposite(4.25), -4.25);
//   });
//   it('should return -3.3333333', () => {
//     assert.strictEqual(opposite(3.3333333), -3.3333333);
//   });
//   it('should return 12525220.3325', () => {
//     assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
//   });
//   it('should return 5', () => {
//     assert.strictEqual(opposite(-5), 5);

//✅SOLUTION
function opposite(number) {
return -number;
}

console.log(opposite(-5));
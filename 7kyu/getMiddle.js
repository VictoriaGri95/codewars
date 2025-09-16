//❓DESCRIPTION
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

//🌀TESTS
//  doTest("test", "es");
//         doTest("testing", "t");
//         doTest("middle", "dd");
//         doTest("A", "A");

//✅SOLUTION
function getMiddle(s) {
  const startIndex = Math.ceil(s.length / 2 - 1);
  return s.slice(startIndex, startIndex + (s.length % 2 === 0 ? 2 : 1));
}

console.log(getMiddle("testing"))
console.log(getMiddle("test"))
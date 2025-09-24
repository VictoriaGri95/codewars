//❓DESCRIPTION
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//
// Example:
//
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


//🌀TESTS
// it('should extend the string prototype', function() {
//     property(String.prototype, 'toJadenCase', 'String.prototype should have a toJadenCase property');
//     typeOf(String.prototype.toJadenCase, 'function', 'toJadenCase should be a function');
//   });
//
//   it("sample tests", () => {
//     doTest("most trees are blue", "Most Trees Are Blue");
//     doTest("How can mirrors be real if our eyes aren't real", "How Can Mirrors Be Real If Our Eyes Aren't Real");
//   });
// });

//✅SOLUTION
/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  {
    value:
      function toJadenCase() {
        return this.split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
  }
);

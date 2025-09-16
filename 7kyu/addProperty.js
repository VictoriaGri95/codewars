//❓DESCRIPTION
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

//🌀TESTS
// const Test = require('@codewars/test-compat');
//
// describe("addProperty", function() {
//   var obj = {};
//   before(function() {
//     obj = {};
//     addProperty(obj, "name", "Palle");
//   });
//   it("Should set the value of the property", function() {
//     Test.expect(obj.name === "Palle");
//   });
//   it("Should allow setting the new property to another value", function() {
//     obj.name = "Dylan";
//     Test.expect(obj.name === "Dylan");
//   });
//   it("Should throw an error if the property already exists", function() {
//     Test.expectError("Did not throw expected error", function() {
//       addProperty(obj, "name", "Palle");
//     });
//   });
// });

//✅SOLUTION
let obj = {}
function addProperty(obj, prop, value) {
  if (prop in obj) {
    throw new Error(`Property '${prop}' already exists on the object`);
  }
  obj[prop] = value;
}

console.log(addProperty(obj, "name", "Palle"))
console.log(obj)

console.log(addProperty(obj, "name", "Vika"))
console.log(obj)


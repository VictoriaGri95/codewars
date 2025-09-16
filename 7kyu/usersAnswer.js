//❓DESCRIPTION
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
// The questions array is already defined for you and is not the same as the one in the example.

//🌀TESTS
// const Test = require('@codewars/test-compat');
//
// describe("Tests", () => {
//   it("test", () => {
// Test.expect(questions[0].usersAnswer === null);
//   });
// });

//✅SOLUTION
let questions = [{
  question: "What's the currency of the USA?",
  choices: ["US dollar", "Ruble", "Horses", "Gold"],
  corAnswer: 0,

}, {
  question: "Where was the American Declaration of Independence signed?",
  choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
  corAnswer: 0,

}];


questions.forEach((question) => {
  question.usersAnswer = null;
})
console.log(questions);

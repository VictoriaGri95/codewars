//❓DESCRIPTION
// Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed
// (just like the name of this kata). Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
//
// Examples:
//
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

//🌀TESTS
//  assert.strictEqual(spinWords("Welcome"), "emocleW");
//     assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
//     assert.strictEqual(spinWords("This is a test"), "This is a test");
//     assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
//     assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
//     assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
//     assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");

//✅SOLUTION
function spinWords(string){
return string.split(' ').map(w => w.length >= 5 ? w.split('').reverse().join('') : w).join(' ')
}

console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
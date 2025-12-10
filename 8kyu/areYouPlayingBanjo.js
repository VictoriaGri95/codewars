//❓DESCRIPTION
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
// The function takes a name as its only argument, and returns one of the following strings:
//
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// //🌀TESTS
// assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
//     assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");

//✅SOLUTION
function areYouPlayingBanjo(name) {
  return name[0].toUpperCase() === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo("Adam"))
console.log(areYouPlayingBanjo("Ringo"))
console.log(areYouPlayingBanjo("ringo"))
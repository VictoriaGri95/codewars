//❓DESCRIPTION
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


//🌀TESTS
// tester("Dermatoglyphics", true );
//     tester("isogram", true );
//     tester("aba", false);
//     tester("moOse", false);
//     tester("isIsogram", false );
//     tester("", true);

//✅SOLUTION
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))

//❓DESCRIPTION
// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string (alphabetical ascending), the longest possible,
// containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// //🌀TESTS
// Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
//     Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//     Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")

//✅SOLUTION
function longest(s1, s2) {
return [...new Set(s1 + s2)].sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))
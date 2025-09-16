//❓DESCRIPTION
// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.


//🌀TESTS
// it("should return 5 for 'abracadabra'",function(){
//     assert.strictEqual(getCount("abracadabra"), 5) ;

//✅SOLUTION
function getCount(str) {
 const vowels = ['a', 'e', 'i', 'o', 'u']
 return str.split('').filter((vowel) => vowels.includes(vowel)).length

}

console.log(getCount('abracadabra'))
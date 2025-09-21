//❓DESCRIPTION
// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//Input strings will only contain letters.
// Note: keep the original order of the names in the output.

//🌀TESTS
//   assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
//     assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
//     assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
//     assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

//✅SOLUTION
function friend(friends){
  return friends.filter(friend => friend.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
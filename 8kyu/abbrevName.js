//❓DESCRIPTION
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F


//🌀TESTS
// assert.strictEqual(abbrevName("Sam Harris"), "S.H");
//     assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
//     assert.strictEqual(abbrevName("Evan Cole"), "E.C");
//     assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
//     assert.strictEqual(abbrevName("David Mendieta"), "D.M");
//   });

//✅SOLUTION
const abbrevName = (name) => {
  const [firstName, lastName] = name.split(' ');
  const firstNameLetter = firstName[0].toUpperCase()
  const lastNameLetter = lastName[0].toUpperCase()
  return `${firstNameLetter}.${lastNameLetter}`;
}


console.log(abbrevName('Sam Harris'));

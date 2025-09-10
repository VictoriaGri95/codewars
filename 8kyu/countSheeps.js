//❓DESCRIPTION
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// Hint: Don't forget to check for bad values like null/undefined


//🌀TESTS
// [
//     [[], 0],
//     [[undefined], 0],
//     [[null], 0],
//     [[false], 0],
//     [[true], 1],
//     [[undefined,null,false,true], 1],
//     [[undefined,null,false,true,true,false,null,undefined], 2],
//     [[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17],
//   ];

//✅SOLUTION
const countSheeps = (sheep) => {
  return sheep.filter(Boolean).length;
}

console.log(countSheeps([undefined,null,false,true]))
console.log(countSheeps([]))
console.log(countSheeps([undefined]))
console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]))



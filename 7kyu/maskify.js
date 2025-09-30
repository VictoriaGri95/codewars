//❓DESCRIPTION
// Your task is to write a function maskify, which changes all but the last four characters into '#'.


//🌀TESTS
//  Test.assertEquals(maskify('4556364607935616'), '############5616');
//     Test.assertEquals(maskify('1'), '1');
//     Test.assertEquals(maskify('11111'), '#1111');

//✅SOLUTION
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify('4556364607935616'));
console.log(maskify('4'));
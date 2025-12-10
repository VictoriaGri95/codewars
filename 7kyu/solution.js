//❓DESCRIPTION
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// //🌀TESTS
// tester('abcde', 'cde', true);
//     tester('abcde', 'abc', false);
//     tester('empty ending', '', true);
//     tester('', 'empty string', false);
//     tester('', '', true);

//✅SOLUTION
function solution(str, ending){
return str.endsWith(ending);
}

console.log(solution ('abcde', 'cde'))
console.log(solution ('abcde', 'abc'))
//❓DESCRIPTION
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If a number is a multiple of both 3 and 5, only count it once.
//
// Courtesy of projecteuler.net (Problem 1)

//🌀TESTS
//  describe("basic tests", function(){
//   test(10,23)
// })

//✅SOLUTION

function solution(number){
const number1 = 3
  const number2 = 5
  let sum = 0;
  for (let i = 0; i < number; i++) {

    if (i % number1 === 0 || i % number2 === 0) {
      sum += i
    }

  }
  return sum;
}

console.log(solution(10))
//❓DESCRIPTION
// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
// More generally given parameters:
//
// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
//
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
// Don't forget to convert the percent parameter as a percentage in the body of your function:
// if the parameter percent is 2 you have to convert it to 0.02.
//
// There are no fractions of people. At the end of each year, the population count is an integer:
// 252.8 people round down to 252 persons.


// //🌀TESTS
//  Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
//     Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
//     Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
//     Test.assertEquals(nbYear(1000, 2.0, 50, 1214), 4, "Did you maybe forgot to round down population at the end of each year?");
// })})

//✅SOLUTION
function nbYear(p0, percent, aug, p) {
  let years;
  for (years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug)
  }
return years
}

console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1000, 2.0, 50, 1214))
console.log(nbYear(1000, 2.0, 50, 1200))
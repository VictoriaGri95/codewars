//❓DESCRIPTION
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


//🌀TESTS
// assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
//     assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
//     assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")

//✅SOLUTION
function dnaStrand(dna){
  const replace = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
  }
return dna.split('').map(nucleotide => replace[nucleotide]).join('');
}




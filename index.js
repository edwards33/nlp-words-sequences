var natural = require('natural')
var text = "Bob Smit said image dry let a make dry also called divided bring, seed seasons she'd rule you them deep"

//find names in text:
console.log(natural.NGrams.bigrams(text))

// any number of NGrams:
console.log(natural.NGrams.ngrams(text, 8))

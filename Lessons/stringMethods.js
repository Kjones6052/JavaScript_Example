/* String Methods
1. length - returns length of string
2. toUpperCase()
3. subString(start, end)
4. split()
*/

let greeting = "Helo, World!";

console.log(greeting.length) // Output: 13
console.log(greeting.toUpperCase()) // Output: "HELLO, WORLD!"
console.log(greeting.substring(0, 5)) // Output: "Hello"
console.log(greeting.split(',')) // Output: ['Hello', 'World!']

/* Search Techniques
1. .includes()
2. .indexOf()
3. .lastIndexOf
*/

let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.includes("fox")) // Output: true
console.log(sentence.indexOf("fox")) // Output: 16
console.log(sentence.lastIndexOf("the")) // Output: 31

// REGEX and .match()
let post = "Hey @JohnDoe, did you see the new #JavaScript tutorial? #coding";

let mentions = post.match(/@[A-Za-z0-9]+/g)
console.log(mentions)

let hashtags = post.match(/#[A-Za-z0-9]+/g)
console.log(hashtags)
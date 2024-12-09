// External JavaScript File, link to HTML document in <head> section

// This is for single line comments, closes at end of line automatically

/*
    This is a 
    multi-line comment,
    must be closed manually
*/

// Output methods: alert, console, document

alert('Hello, External Alert!'); // Using alert => creates window in window
console.log('Hello, Console!'); // Logging to the console => print()
document.write('Hello, Document!') // Writing directly to the document
/*
    use document.write sparingly or if ever, there is no real reason to 
    use this instead of something else so use something else whenever
    possible.
*/

// Variable declaration and assignment: var, let, const

// Var: no longer used conventionally, outdated, don't use it
var name1 = "Coding Temple"; // creating variable(declaring)
name1 = "Temple of Coding"; // re-assigning variable(changing)
var name1 = "Coding Temple"; // re-declaring variable(declaring as if its new)

// Let: Can be re-assigned but not re-declared
let name1 // creating empty variable(declaring)
name1 = "Temple of Coding"; // re-assigning variable(changing)
/*
With 'let' you can declare(create) a variable without a value,
and assign it a value later.(shown in example above)
*/

// Const: Cannot be re-assigned or re-declared, remains constantly the same
const name1 = "Coding Temple"; //  creating variabe(declaring)
// With 'const' you cannot declare(create) a variable without a value.

// Data types: Declaring variables
let name2 = "John"; // data type: String
let age = 30; // data type: Number
let isStudent = true; // data type: Boolean
let fruits = ["apple", "banana", "orange"]; // data type: Array(list)
let person = { name: "Alice", age: 25 } // data type: Object(dictionary)

// Data types: Output variables to the console
console.log("Name:", name2); // ("String for statement", variable)
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Fruits:", fruits);
console.log("Person:", person);

// Operators: Math
let x = 5; // Declare variabe 1
let y = 3; // Declare variabe 2
let sum = x + y;  // Declare variabe == mathematic operation
console.log("Sum:", sum) // Print answer to console

// Operators: Comparison
let isGreaterThan = x > y; // Decare variable with comparison operation
console.log("Is x greater than y?", isGreaterThan); // Print answer to console

// Operators: Logical
let isValid = true && false; // && = 'and, || = 'or'
console.log("Is it valid?", isValid) // Print answer to console

// Type of: determines the data type
console.log(typeof 42); // Output: "number"
console.log(typeof "Hello, world!"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof { name: "John", age: 30 }); // Output: "object"
console.log(typeof [1, 2, 3]); // Output: "object" (array is a type of object, typeof will give base type)
console.log(Array.isArray([1, 2, 3])); // Output: True, meaning yes this is an array; returns false if not array
console.log(typeof undefined); // Output: "undefined"

// Type coercion: when JavaScript automatically change data type
console.log(5 + "5"); // => "55" (addition converts to string)
console.log("10" - 5); // => 5 (subtraction & multiplication converts to number)
console.log("true" == true); // => false
console.log(+"100"); // => 100 (number)

console.log(0 == false); // => true "==" are the values equal
console.log("" == false); // => true "==" are the values equal
console.log(0 === false); // => false "===" are the value and data type equal
console.log("" === false); // => false "===" are the value and data type equal


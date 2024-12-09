/* Function Format

function name(parameters) {
    code goes here
    return statement
}

name('abshfj')

*/

function greet(name) {
    return "Hello, " + name + "!"
}

console.log(greet("John Doe"))

/* Scope: Global and Local
let global = "global"

function name(params) {
    let local = "local"
    return code
}
*/

// Closure ==> 
function outer() {
    let message = "Hello";
    function inner() {
        message += "!"
        console.log(message); // Accesses 'message' from outer scope
    }
    function adder() {
        message += "Goodbye"
    }
    if (expression) {
        return inner
    } else if (expression) {
        return adder
    }
}
const myFunc = outer();
myFunc();
myFunc();
/* Main Positives for Closure:
1. Encapsulation - Data in outer function is only accessible by inner function
2. Reusability and Configuration - Adding more functions can be used to change depending on what is asked
3. Maintaining State - This allows us to maintain the state of the function over multiple calls (used in REACT)
*/

/* Arrow Function

const functionName = (params) => {
    code here
    return code
}
    or
const functionName = (params) => code here
    or
const functionName = param => code here
*/

const addImplicit = (a, b) => a + b;
console.log(add(5, 3))
// 1. Implicit return only applies to single lines, arrow function can return result of expression without return statement for single expression
// 2. There is no binding of arguments
// 3. They have no inherit 'this' binding

// example of non implicit return statement
const add = (a, b) => {
    return a + b;
}
console.log(add(5, 3))

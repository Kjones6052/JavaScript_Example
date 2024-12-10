/* Common Array Methods
1. push - add to array
2. pop - remove last item from array
3. map - apply to all items in array, loops through array
4. filter - remove according to condition
5. reduce - 
*/

// Push
let numbers = [10, 20, 30, 40, 50]

numbers.push(60) // push value to array
console.log(numbers) // Output: [10, 20, 30, 40, 50, 60]

// using function to push to array
function addNumber(arr, num) {
    arr.push(num);
    return arr;
}

console.log(addNumber(numbers, 70)) // Output: [10, 20, 30, 40, 50, 60, 70]

// Pop
numbers.pop() // pop from array
console.log(numbers) // Output: [10, 20, 30, 40, 50, 60]

// using pop in a function
function removeLastNumber(arr) {
    arr.pop();
    return arr;
}

console.log(removeLastNumber(numbers)) // Output: [10, 20, 30, 40, 50]

// Map
function doubleNumbers(arr) {
    return arr.map(num => num * 2) // multiplies each number in array by 2
}
console.log(doubleNumbers(numbers)) // Output: [20, 40, 60, 80, 100]

// Filter
function filterNumbers(arr) {
    return arr.filter(num => num > 25)
}
console.log(filterNumbers(numbers)) // Output: [30, 40, 50]

// Reduce
function calculateSum(arr) {
    // ((acc = accrued amount, curr = current iteral) => add together, start at 0)
    return arr.reduce((acc, curr) => acc + curr, 0)
}
console.log(calculateSum(numbers))

// Sorting: organize array
let numbers1 = [3, 1, 5, 2, 4];
numbers1.sort();
console.log(numbers1)

// Sorting large numbers
let numbers2 = [5, 12, 32, 25]
numbers2.sort((a, b) => a - b)
console.log(numbers2)

// Iterating: loop through with forEach
let colors = ['red', 'green', 'blue'];
colors.forEach(color => {
    console.log(color);
});
// Output: red, green, blue as individual lines 

// Iterating: loop with for...of loop
console.log("Iterating over colors")
for (let color of colors) {
    console.log(color)
}
// Output: red, green, blue as individual lines

// Destructuring
// let [first, second, third] = ['one', 'two', 'three'];
// console.log(first); // Output; 'one'
// console.log(second); // Output; 'two'
// console.log(third); // Output; 'three'

// Spread Operator: combining arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log("Combined Array:", combinedArray); // Output: Combined Array: [1, 2, 3, 4, 5, 6]

let originalArray = [7, 8, 9];
let copiedArray = [...originalArray];
console.log("Copied Array:", copiedArray) // Output: Copied Array: [7, 8, 9]

// Rest Operator: extracting elements
let [first, second, ...remaining] = combinedArray;
console.log("First Element:", first);
console.log("Second Element:", second);
console.log("Remaining Elements:", remaining);
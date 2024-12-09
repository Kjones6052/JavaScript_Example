// Fibonacci Sequence Generator

// Prompt user for the number of terms
const numTerms = 10;

// Initialize first two terms
let firstTerm = 0;
let secondTerm = 1;

// Display initial terms
console.log("Fibonacci sequence:");
console.log(firstTerm);
console.log(secondTerm);

// Generate remaining terms
for (let i = 2; i < numTerms; i++) {
    // Calculate next term
    let nextTerm = firstTerm + secondTerm

    // Display next term
    console.log(nextTerm)

    // Update first and second ferms for the next iteration
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}
/* For Loop ==> number of iterations or iterating through an array
for (initialization; condition/expression; increment) {
    code here
}
*/
// for 5 iterations 
for (let i = 0; i < 5; i++) {
    console.log("Iteration", i)
}
// through array
let my_arr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < my_arr.length; i++) {
    console.log("Iteration", i, my_arr[i])
}

/* While Loop ==> runs until condition is not true or break
while (condition/expression) {
    code here
}
*/
let count = 0
while (count < 5) {
    console.log("Count:", count)
    if (count == 2) {
        console.log("Breaking...")
        break
    }
    count++
}

/* Do While Loop ==> will always run at least once even if condition is false
do {
    code here
} while(condition/expression)
*/
let num = 7;
do {
    console.log("Number:", num);
    num++
} while (num <= 5);

/* For...In Loop ==> use const to avoid unwanted changes to variable, use let on rare occassion an overwrite is needed
for (const variable in arrayName) {
    code here
}
*/
const fruits = ['apple', 'banana', 'cherry']
for (const index in fruits) {
    console.log("Fruit", fruits[index]);
}

/* Nested Loops ==> for loop inside for loop
for (initialization; condition/expression; increment) {
    for (initialization; condition/expression; increment) {
    code here
}
}
*/
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`${i}, ${j}`)
    }
}
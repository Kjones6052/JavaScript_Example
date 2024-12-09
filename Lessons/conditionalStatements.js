/* If, Else If, Else
    if (expression) {
        code to execute here
    } else if (expression) {
        code to execute here
    } else {
        code to execute here
    }
*/
let time = 11;

if (time < 12) {
    console.log("Good morning");
} else if (time < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

// Nested If
let isRaining = true;
let umbrellaAvailable = false;

if (isRaining) {
    if (umbrellaAvailable) {
        console.log("Don't forget your umbrella!")
    } else {
        console.log("It's raining, but you don't have an umbrella.")
    }
} else {
    console.log("No need for an umbrella today!")
}
// Weather Decision Maker

// Define weather conditions
const isRaining = true;
const tempurature = 8; // in Celsius
const windSpeed = 25; // in kp/h

// Make weather decisions based on multiple factors
if (isRaining) {
    console.log("It's raining. Don't forget to bring an umbrella!");
} else if (tempurature < 10) {
    console.log("It's cold outside. Remember to wear a warm coat.");
} else if (windSpeed > 20) {
    console.log("Strong winds today. Be caustious!");
} else {
    console.log("The weather looks fine. Enjoy youur day!");
}
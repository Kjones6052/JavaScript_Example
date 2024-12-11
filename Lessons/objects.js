// Object 'superhero'
let superhero = {
    name: "Iron Man",
    powers: ["Flight", "Super Strength", "Genius-level Intellect"],
    suitColor: "Red and Gold",
};

// get object details
console.log(superhero.name); // Output: "Iron Man"
console.log(superhero["powers"][0]); // Output: "Flight"


// Object Methods: function inside object

// reassign value to add method
superhero = {
    name: "Iron Man",
    powers: ["Flight", "Super Strength", "Genius-level Intellect"],
    suitColor: "Red and Gold",
    // add method
    introduce: function() {
        console.log("I am " + this.name + ", and I'm ready to save the world!");
    } // 'this' in this context is referring to the object containing it
};

superhero.introduce(); // Output: "I am Iron Man, and I'm ready to save the world!"


/* Constructor Function
FunctionName is always title case
acts like a blueprint for object to be instantiated
attributes should be unique to each individual object, universal attributes should be left out
*/

function Superhero(name, powers, suitColor) {
    this.name = name;
    this.powers = powers;
    this.suitColor = suitColor;
}

// Instantiating 'Superhero' Objects
// creating an 'ironMan' object with the 'Superhero' blueprint
let ironMan = new Superhero("Iron Man", ["Flight", "Super Strength", "Genius-level Intellect"], "Red and Gold");
// creating an 'spiderMan' object with the 'Superhero' blueprint
let spiderMan = new Superhero("Spider-Man", ["Wall-crawling", "Superhuman Agility", "Spider-sense"], "Red and Blue");

// Prototype: adding a method to a blueprint, shared by all objects of the blueprint
Superhero.prototype.introduce = function() {
    console.log("I am " + this.name + ", and I'm ready to save the world!");
}

ironMan.introduce();
spiderMan.introduce();


// Math Object: tool for using math operations in JS

let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log("The area of the circle with radius", radius, "is:", area.toFixed(2));

// Date Object: must be instantiated to be used

let currentDate = new Date(); // using Date to create an object for today's date
console.log("Current Date:", currentDate);
let specificDate = new Date("2024-02-10T08:00:00"); // format for Date("yyyy-mm-ddThh:mm:ss")
console.log("Specific Date:", specificDate);

// Manipulating Dates

currentDate.setDate(currentDate.getDate() + 7); 
console.log("Date after adding 7 days:", currentDate);
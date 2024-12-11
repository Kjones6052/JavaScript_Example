function Pet(name, age, breed, adopted) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.adopted = adopted;
}

let pet1 = new Pet("Buddy", 3, "Golden Retriever", false);
let pet2 = new Pet("Max", 5, "German Shephard", true);
let pet3 = new Pet("Luna", 2, "Siamese Cat", false);

Pet.prototype.updateAge = function(newAge) {
    this.age = newAge;
}
Pet.prototype.changeAdoptionStatus = function(newStatus) {
    this.adopted = newStatus;
}
Pet.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}, Adoption Status: ${this.adopted ? 'Adopted' : 'Available for adoption'}`);
}

console.log("Original Pet Info:");
pet1.displayInfo();
pet1.updateAge(4);
pet1.changeAdoptionStatus(true);
console.log("\nUpdated Pet Info:");
pet1.displayInfo();
//creating an array:
var petAnimals = ["cat", "Dog", "Rabbit"];
//Using For Loop:
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var onePet = petAnimals_1[_i];
    console.log("A ".concat(onePet, " would make a great pet."));
}
//Printing a message outside of for-loop:
console.log("Any of these animals would make a great pet.");

// Chapter 13: Using Prototypes

// What are prototypes?
/*
- When an object inherits from another, it gains access to all its methods and properties

*/

function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function(){
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function(){
    console.log("Run!");
};

Dog.prototype.wag = function(){
    console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

fido.bark();
fido.run();
fido.wag();
fluffy.bark();
fluffy.run();
fluffy.wag();
spot.bark();
spot.run();
spot.wag();


spot.bark = function(){
    console.log(this.name + " says WOOF!");
};

spot.bark();
spot.run();
spot.wag();


var barnaby = new Dog("Barnaby", "Basset Hound", 55);

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
};

barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();

console.log(spot.hasOwnProperty("species")); // false
console.log(fido.hasOwnProperty("species")); // false

console.log(spot.hasOwnProperty("sitting")); // true
console.log(fido.hasOwnProperty("sitting")); // false
 
 
// Prototype chaining 

function ShowDog(name, breed, weight, handler){
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function(){
    console.log("Stack");
};

ShowDog.prototype.bait = function(){
    console.log("Bait");
};

ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
    console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);
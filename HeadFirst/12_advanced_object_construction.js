// Chapter 12 : Advanced Object Constructor

// Object Literals

// Object Constructor
// constructor is like a little factory that can create an endless number of similar objects.
// In terms of code, a constructor is quite similar to a function that returns an object: you define it once and invoke it every time you want to create a new object.

// How to create a Constructor ?

function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function(){
        if(this.weight > 25){
            console.log(this.name + " says Woof!");
        }else{
            console.log(this.name + " says Yip!");
        }
    }
}

// How to use Constructor ?

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
    var size = "small";
        if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}

/* How constructors work ?

var fido = new Dog("Fido", "Mixed", 38);

1. The first thing 'new' does is create a new, empty object.
2. Next, 'new' sets 'this' to point to the new object
3. With 'this' set up, we now call the function Dog, passing "Fido", "Mixed" and 38 as arguments.
4. Next the body of the function is invoked. Like most constructors, Dog assigns values to properties in the newly created 'this' object.
5. Finally, once the Dog function has completed its execution the new operator returns this, which is a reference to the newly created object. Notice this is returned for you; you don’t have to explicitly return it in your code. And after the new object has been returned, we assign that reference to the variable fido.

*/

// You can pu t methods into constructors as well
for(var i=0; i<dogs.length; i++){
    dogs[i].bark();
}

// Danger Zone

var otherDog = Dog("Fido", "Mixed", 38);
// otherDog.bark();  TypeError: Cannot read property 'bark' of undefined

/* Safety checklist
1. Remember that 'new' first creates a new object before assigning it to this (and then calling your constructor function). If you don’t use new, a new object will never be created.
2. That means any references to 'this' in your constructor won’t refer to a new dog object, but rather, will refer to the global object of your application.
3. If you don’t use 'new' there’s no object to return from the constructor, which means there is no object assigned to the dog variable, so dog is undefined. That’s why when we try to call the bark method, we get an error saying the object we’re trying to call it on is undefined.

*/

// new - I’m the operator that operates on constructor functions to create new objects.

// creating a car constructor

/*
console.log("======= Creating a car constructor ========")
function Car(make, model, year, color, passengers, convertible, milege){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = milege;
    this.started = false;
    
    this.start = function(){
        this.started = true;
    };
    this.stop = function(){
        this.started = false;
    };
    this.drive = function(){
        if (this.started) {
            console.log(this.make + " " +
            this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.");
        }
    };
}

var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

var cars = [chevy, cadi, taxi, fiat, testCar];

for(var i=0; i<cars.length; i++){
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}
*/
// using an object literal for arguments (Rewiring the arguments as an object literal)

var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

console.log("======= Creating a car constructor using an object literal for arguments ========")
function Car(params){
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.milege;
    this.started = false;
    
    this.start = function(){
        this.started = true;
    };
    this.stop = function(){
        this.started = false;
    };
    this.drive = function(){
        if (this.started) {
            console.log(this.make + " " +
            this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.");
        }
    };
}

var cadi = new Car(cadiParams);
cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();

console.log(typeof cadi);
console.log(typeof fido);

if(cadi instanceof Car){
    console.log("Congrats, Cadi is a Car");
}


// changing an object created with a constructor
// Even constructed objects can have their own independent properties
// Function.prototype.call()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

// The call() method calls a function with a given this value and arguments provided individually.
// call() accepts an argument list, while apply() accepts a single array of arguments.

// Using call to chain constructors for an object
function Product(name, value){
    this.name = name;
    this.value = value;
}
function Food(name, value){
    Product.call(this, name, value);
    this.category = "Food";
}
function Toy(name, value){
    Product.call(this, name, value);
    this.category = "Toy";
}
var burger = new Food("Cheeze Burger", 35);
console.log(burger.name + " is a type of " + burger.category + " which cost " + burger.value + " rupees");

var robot = new Toy("Robot", 350);
console.log(robot.name + " is a type of " + robot.category + " which cost " + robot.value + " rupees");

// Using call to invoke an anonymous function
var animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Fail" },
    { species: "Fox", name: "Foxy" },
    { species: "Cat", name: "Kitty" }
];

for(var i=0; i<animals.length; i++){
    (function(i){
        this.print = function(){
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}

// Using call to invoke a function and specifying the context for 'this'
function greet(){
    var reply = [this.animal, "typically sleep between", this.sleepDuration].join(' ');
    console.log(reply);
}

var obj = {
    animal: 'Cat',
    sleepDuration: '12 to 16 hours'
}

greet.call(obj);

// Using call to invoke a function and without specifying the first argument
// In the example below, we invoke the display function without passing the first argument. If the first argument is not passed, the value of this is bound to the global object.

sData = "Wilsen";

function display(){
    console.log("sData value is %s", this.sData);
}

display.call();

// Chapter 5: Understanding Objects - A Trip to Objectville

/*

JavaSript Objects : Collection of properties 

Rules of creating objects:
1. enclose the object in curly braces
2. seprate the properties name and value with a colon. Name : Value
3. Property name can be any string. (Need to use quotes if using name with space "Like This")
4. No two properties can have same name.
5. Separate each property name and value pair with a comma
6. Don’t use a comma after the last property value
*/

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

// How to access a property.
let miles = fiat.mileage;
if (miles > 2000) {
    console.log("Object's property used");
}

// How to change a property.
fiat.mileage = 10000;

// How to add a new property.
fiat.needsWashing = true;

// How to delete a property
console.log(fiat.needsWashing);
delete fiat.needsWashing;
console.log(fiat.needsWashing); // undefined
/* When you delete a property, you’re not just deleting the value of the property, you’re deleting the property itself. And, if you try to use the property after deleting it, it will evaluate to undefined.
*/

console.log(delete fiat.needsWashing); // true, will be false if can't delete(in case of protected objects)

// How can I create an object with no properties?
let objectWithNoProperty = { };

// If I try to add a new property to my object, and the object already has a property with that name, what happens?
// Ans : Value will be updated with new one.

// What happens if I try to access a property that doesn’t exist?
// Ans : Result will be 'undefined'

// What happens if I put a comma after the last property?
// Ans : New browsers- no effect, Old browsers - may halt execution. 

/*
How does a variable hold an object?

    - Variables don’t actually hold objects.
    - Instead they hold a reference to an object.
    - The reference is like a pointer or an address to the actual object.
    - In other words, a variable doesn’t hold the object itself, but it holds something like a pointer. And, in JavaScript we don’t really know what is inside a reference variable. We do know that whatever it is, it points to our object.
    - When we use dot notation, the JavaScript interpreter takes care of using the reference to get the object and then accesses its properties for us.
    
Primitive variable :  represents the actual value of the variable.
Object variable : represents a way to get to the object.

car.color - means “use the object referenced by the variable car to access the color property.”
*/

/*
- when you call a function and pass it a primitive variable , you’re passing the copy of that variable.
- when you call a function and pass it an object, you’re passing the object reference, not the object itself. So, if you change the value of one of the object’s properties, it changes the value in the original object.
*/

// Add behavior to your objects
fiat.drive = function(){
    console.log("Zoom !! Zoom !! Zoom");
};

fiat.drive();

// Improving the drive method
fiat.started = false;

fiat.start = function(){
    this.started = true;
};

fiat.stop = function(){
    this.started = false;
};

fiat.drive = function(){
    if(this.started)
        console.log("Zoom !! Zoom !! Zoom");
    else
        console.log("You need to start the engine first.");
};

fiat.drive();
fiat.start();
fiat.drive();   
fiat.stop();

/* 
When is the value of this set to the object? When we define the object, or when we call the method?
Ans : The value of this is set to the object when we call the method.
*/

console.log("-------------------------------");
for(let prop in fiat){
    console.log(prop + " : " + fiat[prop]);
}
console.log("-------------------------------");
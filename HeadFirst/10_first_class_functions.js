// 27 July 2018

// Chapter 10: First Class Function (Liberated Functions)

/* */

// Function declarations versus function expressions
/* 
- with a declaration, a function is created and setup before the rest of the code gets evaluated. 
- With a function expression, a function is created as the code executes, at runtime.

- Function declarations are evaluated before the rest of the code is evaluated.
- Function expressions get evaluated later, with the rest of the code.
- A function declaration doesn’t return a reference to a function; rather it creates a variable with the name of the function and assigns the new function to it.
- A function expression returns a reference to the new function created by the expression.
- The process of invoking a function created by a declaration is exactly the same for one created with an expression.
- You can hold function references in variables.
- Function declarations are statements; function expressions are used in statements.

function quack(num) { // function declartion
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}

var fly = function(num) { // function expression 
    for (var i = 0; i < num; i++) {
    console.log("Flying!");
}
}

Here’s what you can do with a first class value:
    1. assign the value to a variable (or store it in a data structure like an array or object).
    2. Pass the value to a function.
    3. return the value from a function.
    
First class: a value that can be treated like any other value in a programming language, including the ability to be assigned to a variable, passed as an argument, and returned from a function.
*/

/* What you can do with first class function ?

    - You can assign functions to variables.
    - You can pass functions to functions.
    - You can return functions from functions.
    
*/
/*
var passengers = [ 
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true } 
];
*/
var passengers = [ 
    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "coach" } 
];

function processPassenger(passengers, testFunction){
    for(var i=0; i<passengers.length; i++){
        if(testFunction(passengers[i]))
            return false;
    }
    return true;
}

function checkNoFlyList(passenger){
    return passenger.name == "Dr. Evel";
}
function checkNotPaid(passenger){
    return (!passenger.paid);
}

var allCanFly = processPassenger(passengers, checkNoFlyList);
if(!allCanFly){
    console.log("Flight can't take off: We have a passenger on no-fly-list.");
}

var allPaid = processPassenger(passengers, checkNotPaid);
if(!allPaid){
    console.log("Flight can't take off: Not all has paid.");
}

function printPassanger(passenger){
    console.log("Name : " + passenger.name + ", Paid : " + passenger.paid);
}

processPassenger(passengers, printPassanger);

/*
What exactly are we passing when we pass a function to a function?

We’re passing a reference to the function. Think of that reference like a pointer that points to an internal representation of the function itself. The reference itself can be held in a variable and reassigned to other variables or passed as an argument to a function. And placing parentheses after a function reference causes the function to be invoked.
*/

function fun(echo){
    console.log(echo);
}

fun("hello"); 

function boo(aFunction){
    aFunction("boo");
}

boo(fun);

console.log(fun);

fun(boo);

var moreFun = fun;
moreFun("hello again");

function echoMaker() {
    return fun;
}
var bigFun = echoMaker();
bigFun("Is there an echo?");

// Returning functions from functions

function createDrinkOrder(passanger){
    var orderFunction;
    if(passanger.ticket === "firstclass"){
        orderFunction = function(){
            console.log("Would you line a wine or cocktail ?");
        };
    }else{
        orderFunction = function(){
            console.log("You have cola or water as choice.");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger){
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    
    getDrinkOrderFunction();
    // get dinner order
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash
}

function servePassengers(passengers){
    for(var i=0; i<passengers.length; i++){
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);


// sorting an array of numbers

function compareNumbers(num1, num2){
    if(num1 > num2)
        return 1;
    else if(num1 === num2)
        return 0;
    else
        return -1;
}

var numbersArray = [60, 50, 62, 58, 54, 54];
numbersArray.sort(compareNumbers);
console.log(numbersArray);
// Chapter 6 : Serious Types

// undefined

var x;
if(x == undefined){
    console.log(true);
}
x = 2;
if(x == undefined){
    console.log(true);
}else{
    console.log(false);
}

let customer = {
    name: "Jen"
};

if(customer.phoneNumber == undefined)
    console.log(true);
    
    
let subject = "Just a string";
let probe = typeof subject;
console.log(probe);

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};

console.log("Type of test1 : " + typeof test1);
console.log("Type of test2 : " + typeof test2);
console.log("Type of test3 : " + typeof test3);
console.log("Type of test4 : " + typeof test4);
console.log("Type of test5 : " + typeof test5);
console.log("Type of test6 : " + typeof test6);
console.log("Type of test7 : " + typeof test7);
console.log("Type of test8 : " + typeof test8);
console.log("Type of test9 : " + typeof test9);

// use null in places where an object should be but one can’t be created or found, 
// undefined when you have a variable that hasn’t been initialized, or an object with a missing property, or an array with a missing value.

var test10 = null;
console.log("Type of test10: " + typeof test10);

/* How to use null
var header = document.getElementById("header");
if (header == null) {
// okay, something is seriously wrong if we have no header
}
*/

// NaN - Not a number
// there are numeric values that are impossible to represent in JavaScript! JavaScript can’t express these values, so it has a stand-in value that it uses: NaN

var a = 0/0;
console.log(a); // NaN

var b = "food" * 1000;
console.log(b); // NaN

var c = Math.sqrt(-9);
console.log(c); // NaN

console.log(NaN == NaN); // false

/* Dealing with NaN
if (myNum == NaN) { // Wrong usage
    myNum = 0;
}
if (isNaN(myNum)) { // Correct usage
    myNum = 0;
}
*/

var test11 = 0 / 0;
console.log("Type of test11 : " + typeof test11);

var d = 10/0;
console.log(d); // Infinity

// The Infinity (or -Infinity) value in JavaScript represents all numbers that exceed the upper limit on computer floating point numbers, which is 1.7976931348623157E+10308 (or -1.7976931348623157E+10308 for -Infinity). The type of Infinity is number.


if (99 == "99") {
    console.log("A number equals a string!");
} else {
    console.log("No way a number equals a string");
}

if (99 === "99") {
    console.log("A number equals a string!");
} else {
    console.log("No way a number equals a string");
}

// How equality converts its operands
// Case 1: Comparing a number and a string.
// String will we converted to number
console.log(99 == "99"); // true
console.log(99 == "Vanilla"); // false

// Case 2: Comparing a boolean with any other type.
// boolean will converted to number
console.log(1 == true); // true
console.log("1" == true); // true, here boolean true will converted to number and then string "1 will also converted to number then compare"

// Case 3 : Comparing null and undefined.
console.log(undefined == null); // true, these values both essentially represent “no value” (that is, a variable with no value, or an object with no value), so they are considered to be equal.

console.log(1 == ""); // false

// the strict equality operator
// Two values are strictly equal only if they have the same type and the same value.

console.log("42" == 42); // true
console.log("42" === 42); // false

console.log("0" == 0); // true
console.log("0" === 0); // false

console.log("0" == false); // true
console.log("0" === false); // false

console.log("true" == true); // true
console.log("true" === true); // false

console.log(true == (1 == "1"));  // true
console.log(true === (1 ===  "1")); // false

console.log(2 + "3");
console.log("3" + 1);

console.log(2 * "3");
console.log(80 / "10");
console.log("10" - 5);

console.log(1 + 2 + "pizzas");
console.log(1 + (2 + "pizzas"));

console.log(2 + Number("3"));

console.log(Infinity - 1);
console.log("42" + 42);
console.log(2 + "1 1");
console.log("1" - "1");
console.log("Result: " + 10/2);
console.log(3 + " bananas " + 2 + " apples");

// Obejcts

// How to determine if t wo objects are equal
// When we test equality of two object variables, we compare the references to those objects
// Two references are equal only if they reference the same object


/*
There are five falsey values in JavaScript:
    1. undefined is falsey.
    2. null is falsey.
    3. 0 is falsey.
    4. The empty string is falsey.
    5. NaN is falsey.

To remember which values are truthy and which are falsey, just memorize the five falsey values— undefined, null, 0, "” and NaN—and remember that everything else is truthy

*/
/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place
*/

// ES5
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

console.log(maximus);

// ES5
var maximus2 = Math.max(...arr);
console.log(maximus2);


// const spreaded = ...arr; // will throw a syntax error


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

// Add the element of existing array into another array
let num1 = [4, 5, 6];
let num2 = [1, 2, 3, ...num1, 7, 8, 9];

console.log(num1);
console.log(num2);

// concate arrays
let name1 = ["Ira", "Ishaan"];
let name2= ["Pranjal", "Shivansh"];

console.log(name1);
let name = name1.concat(name2);
console.log(name);

name1 = [...name1, ...name2];
console.log(name1);

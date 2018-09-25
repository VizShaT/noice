/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions
*/

var magic1 = function() {
  "use strict";
  return new Date();
};
console.log(magic1());


const magic = () => new Date();
console.log(magic());
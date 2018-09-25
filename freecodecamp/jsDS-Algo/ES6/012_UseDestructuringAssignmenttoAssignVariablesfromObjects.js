/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-objects
*/

var voxels = { x : 3.14, y : 4.52, z : 5.96 };

const { x, y, z } = voxels;

console.log(x);
console.log(y);
console.log(z);

const { x: a, y: b, z: c } = voxels;

console.log(a);
console.log(b);
console.log(c);

//
function getLength(str) {
  "use strict";

  // change code below this line
  const { length: len } = str;
  // change code above this line

  return len; // you must assign length to len in line

}

console.log(getLength('FreeCodeCamp'));
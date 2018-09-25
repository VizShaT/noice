/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-arrays
*/

/*
const [x, y] = [1, 2, 3, 4, 5, 6];
console.log(x, y);

const [a, b , , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
*/
// Problem solution 
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  const arr = [8, 6];
  const [b, a] = arr;
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
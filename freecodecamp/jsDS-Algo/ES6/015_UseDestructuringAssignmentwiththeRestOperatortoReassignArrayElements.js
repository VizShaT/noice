/*
Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-operator-to-reassign-array-elements
*/
/*
const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b);
console.log(arr);
*/

// Problem Solution 
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list;
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
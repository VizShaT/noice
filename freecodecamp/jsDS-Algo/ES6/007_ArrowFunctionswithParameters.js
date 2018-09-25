/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters
*/


var myConcat1 = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat1([1, 2], [3, 4, 5]));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

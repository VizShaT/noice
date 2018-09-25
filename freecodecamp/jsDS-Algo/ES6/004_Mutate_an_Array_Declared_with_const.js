/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const
*/

/*
'use strict';

const s = [4, 5, 6];
console.log(s);
// s = [1, 2, 3]; throws error, trying to assign a const
s[2] = 56;
console.log(s);
*/


const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // change code above this line
  console.log(s);
}
editInPlace();
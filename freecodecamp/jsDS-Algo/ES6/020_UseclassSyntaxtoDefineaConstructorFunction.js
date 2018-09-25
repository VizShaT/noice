/*
Use class Syntax to Define a Constructor Function
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-class-syntax-to-define-a-constructor-function
*/
/*
function makeClass() {
  "use strict";
  /* Alter code below this line 

  /* Alter code above this line 
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
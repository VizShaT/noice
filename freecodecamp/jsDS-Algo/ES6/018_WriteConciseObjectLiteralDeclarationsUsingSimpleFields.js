/*
Write Concise Object Literal Declarations Using Simple Fields
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/write-concise-object-literal-declarations-using-simple-fields
*/

/*
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
*/
const createPerson = (name, age, gender) =>( {name, age, gender} );
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
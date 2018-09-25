/*
Create Strings using Template Literals
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/create-strings-using-template-literals
*/

const person = {
    name: "Vijay",
    age: 25
}

const greeting = `Hello! my name is ${person.name}.
I'm ${person.age} years old.`

console.log(greeting);


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = [`<li class="text-warning">${result.failure[0]}</li>`,
  `<li class="text-warning">${result.failure[1]}</li>`,
  `<li class="text-warning">${result.failure[2]}</li>`];
  

  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);
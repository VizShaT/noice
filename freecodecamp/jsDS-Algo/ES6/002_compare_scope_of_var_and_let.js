/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/compare-scopes-of-the-var-and-let-keywords

*/

/*
var numArray = [];
for(var i=0; i<3; i++){
    numArray.push(i);
}
console.log(numArray); // [ 0, 1, 2]
console.log(i); // 3
*/

/*
var printNumTwo;
for(var i=0; i<3; i++){
    if(i == 2){
        printNumTwo = function(){
            return i;
        };
    }
}
console.log(printNumTwo()); // return 3, but 2 was expected. why ?
*/

/*
'use strict';

let printNumTwo;
for(let i=0; i<3; i++){
    if(i == 2){
        printNumTwo = function(){
            return i;
        };
    }
}
console.log(printNumTwo()); // return 2
*/

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();
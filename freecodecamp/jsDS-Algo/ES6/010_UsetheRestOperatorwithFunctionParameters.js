/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-the-rest-operator-with-function-parameters/
*/

function howMany(...args){
    return ("You have passed " + args.length + " arguments.");
}

console.log(howMany(1, 2, 3));
console.log(howMany("string", null, [1, 2, 3], { }));

/*
const sum = (function(){
    return function sum(x, y, z){
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)) // 6

*/

const sum = (function(){
    "use strict";
    return function sum(...args){
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)) // 15



/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/prevent-object-mutation
*/

var obj = {
    name: "Vijay",
    say: "Hello"
};
console.log(obj);

obj.say = "Hello world";
console.log(obj);

Object.freeze(obj);

obj.say = "My World"; // will be ignored. Mutation not allowed
console.log(obj);

function freezeObj(){
    'use strict';
    
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);
    
    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

//console.log(freezeObj());
freezeObj();


// Array.prototype.some()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// This method returns false for any condition put on an empty array.

function even(element){
    return element % 2 == 0;
}

let array1 = [1, 2, 3, 4, 5];

console.log(array1.some(even));

/*
Syntax : arr.some(callback[, thisArg])

*/

let fruits = ["apple", "banana", "cherry", "mango", "orange"];

function checkAvailabilty(arr, val){
    return arr.some(arrVal => val === arrVal);
}

console.log(checkAvailabilty(fruits, "kela"));
console.log(checkAvailabilty(fruits, "banana"));

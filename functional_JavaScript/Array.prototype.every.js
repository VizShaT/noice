// Array.prototype.every()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// This method returns true for any condition put on an empty array.

function isBelowThreshold(currentValue){
    return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

var array2 = [1, 30, 41, 29, 10, 13];
console.log(array2.every(isBelowThreshold));

/*
Syntax : arr.every(callback[, thisArg])

callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

callback is invoked with three arguments:
    1. the value of the element,
    2. the index of the element,
    3. and the Array object being traversed.

*/

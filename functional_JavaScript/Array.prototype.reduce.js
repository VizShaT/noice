// Array.prototype.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

console.log(array1.reduce(reducer)); // 10
console.log(array1.reduce(reducer, 5)); // 15

// Syntax: arr.reduce(callback[, initialValue])

var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
var maxCallback2 = (max, cur) => Math.max(max, cur);

console.log([{x:42}, {x:84}].reduce(maxCallback));
console.log([{x:42}].reduce(maxCallback));
console.log([].reduce(maxCallback, -Infinity)); //-Infinity, TypeError if not initialValue provided

console.log([ {x:22}, {x:45}, {x:10} ].map(y => y.x).reduce(maxCallback2, -Infinity));

// Sum of array
var sum = [1, 2, 3, 4, 5].reduce(function(acc, cur){
    return acc + cur;
});
console.log(sum);

var sum2 = [1, 2, 3, 4, 5].reduce((acc, cur) => acc + cur);
console.log(sum2);

// Sum of values in an object array
var sum3 = [{x: 1}, {x:2}, {x:3}].reduce(function(acc, cur){
    return acc + cur.x;
}, 0);
console.log(sum3); // 6, if initialValue given, [object, object]23 if initialValue not given

// Flatten an array of arrays

var flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened);

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function(allNames, name){
    if(name in allNames)
        allNames[name]++;
    else
        allNames[name] = 1;

    return allNames;
}, {});
console.log(countedNames);

// Remove duplicate items in array

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

let result = arr.sort().reduce(function(acc, cur){
    let length = acc.length;
    if(length === 0 || acc[length-1] !== cur)
        acc.push(cur);

    return acc;
}, []);

console.log(result);

/*
 FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Basic: Map
 Exercise 3 of 18


# Task

Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll

## Arguments

  * numbers: An Array of 0 to 20 Integers between 0 and 9

## Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Boilerplate

    function doubleAll(numbers) {
      // SOLUTION GOES HERE
    }

    module.exports = doubleAll


 » To print these instructions again, run: functional-javascript print
 » To execute your program in a test environment, run: functional-javascript run program.js
 » To verify your program, run: functional-javascript verify program.js
 » For help run: functional-javascript help

*/

/* Why use map() ?

"We often have to take a set of data and modify it before we
output it. For example, say we get this back from our database:
[{first: 'Brian', last: 'Brennan'}, {first: 'Alex', last:
'Sexton'}]

And we want a list of full names. We can do this with a for loop,
but we have to manually keep track of indices and push to a new
array on our own. A better way to handle this is by using a
map. A map is a higher order function that operates each
element of an array and returns a new array with each element
transformed

So to get our list of full names, our mapping function would be:
function fullName(item) { return item.first + ' ' + item.last }

And we'd call it like so: var fullNames = entries.map(fullName)

Notice that the map function returns a new array – it doesn't
modify the array in place. This is a very important principle in
functional programming: it's always better to take input and
return new output rather than modify things in place.
*/

function doubleAll(numbers) {
    return numbers.map(i => i*2);
}

module.exports = doubleAll

/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects
*/

const a = {
    start : { x : 4, y: 5 },
    end : { x : 7, y: -9 }
};

const { start : { x : startX, y : startY }} = a;

console.log(startX);
console.log(startY);

const { end : { x: endX, y: endY }} = a;
console.log(endX);
console.log(endY);


// Problem Solution 
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow : { max : maxOfTomorrow }} = forecast;
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
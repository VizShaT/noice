/*
Use getters and setters to Control Access to an Object
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object
*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temp){
      this._temp = temp;
    }
    get temperature(){
      return this.temp;
    }
    set temperature(newTemp){
      this._temp = newTemp;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

console.log(temp);
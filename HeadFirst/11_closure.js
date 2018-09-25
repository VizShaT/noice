// Closure
// all local variables are stored in an environment.
// when we return the function, we don’t just return the function; we return the function with the environment attached to it.

// Closure, noun: A closure is a function together with a referencing environment.

function makeCounter(){
    var count = 0;
    function counter(){
        count += 1;
        return count;
    }
    return counter;
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());



function makePassword(password){
    return function passFunction(passwordGuess){
        return (passwordGuess === password);
    };
}

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));

function multN(n) {
    return function multiply(x){
        return n * x;
    };
}

var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3));

function makeCounter2(){
    var count = 0;
    return {
        increment : function(){
            count += 1;
            return count;
        }
    };
}

var counter = makeCounter2();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

function makeTimer(doneMessage, n){
    setTimeout(function(){
        console.log(doneMessage);
    }, n);
}

makeTimer("Cookies are done!", 5000);

// The closure contains the actual environment, not a copy
// One thing that often misleads people learning closures is that they think the environment in the closure must have a copy of all the variables and their values. It doesn’t. In fact, the environment references the live variables being used by your code, so if a value is changed by code outside your closure function, that new value is seen by your closure function when it is evaluated.

function setTimer1(doneMessage, n) {
    setTimeout(function() {
        console.log(doneMessage);
    }, n);
    doneMessage = "OUCH!";
}
setTimer1("Sandwitch are done!", 1000);
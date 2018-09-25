/*
- functions that operates on other function, either by taking them as arguments or by returning them, are called higher order functions.

*/

function greaterThan(n){
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function noisy(f){
    return (...args) => {
        console.log("Calling with args ", args);
        let result = f(...args);
        console.log("Called with args ", args, ", returning ", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);
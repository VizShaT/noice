
(function(){
    console.log(Number.parseInt === parseInt); // true
    console.log(Number.parseFloat === parseFloat); // true
})();

(function(){
    let s = NaN;
    // console.log(isNaN(s));
    // console.log(Number.isNaN(s));
    let checkNaN = isNaN(s);
    let checkNaN2 = Number.isNaN(s);
    console.log({s, checkNaN, checkNaN2});
})();

(function(){
    let s = '8000';
    let finiteCheck= isFinite(s);
    let finiteCheck2 = Number.isFinite(s);
    console.log({s, finiteCheck, finiteCheck2});
})();

(function(){
    let sum = 408.2;
    let intCheck = Number.isInteger(sum);
    console.log({sum, intCheck});
})();

(function(){
    let intNaN = Number.isInteger(NaN);
    let intInfinity = Number.isInteger(Infinity);
    let intUndefined = Number.isInteger(undefined);
    let intDigit = Number.isInteger(3);
    
    console.log({intNaN, intInfinity, intUndefined, intDigit});
})();

(function(){
    let a = Math.pow(2, 53) - 1;
    let b = Math.pow((2, 53));
    
    let isSafeIntegerA = Number.isSafeInteger(a);
    let isSafeIntegerB = Number.isSafeInteger(b);
    console.log({a, b, isSafeIntegerA, isSafeIntegerB});
})();

(function(){
    let epsilon = Number.EPSILON;
    let maxSafeInteger = Number.MAX_SAFE_INTEGER;
    let minSafeInteger = Number.MIN_SAFE_INTEGER;
    
    console.log({epsilon, maxSafeInteger, minSafeInteger});
})();
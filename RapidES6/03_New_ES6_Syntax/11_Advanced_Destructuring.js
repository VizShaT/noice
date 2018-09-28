console.log("==================================");
(function(){
    let [low, high] = [,];
    console.log(`low: ${low} high: ${high}`);
})();

console.log("==================================");
(function(){
    // let [low, high] = undefined;
    // // TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined
    // console.log(`low: ${low} high: ${high}`);
})();

console.log("==================================");
(function(){
    // let [low, high] = null;
    // TypeError: Cannot read property 'Symbol(Symbol.iterator)' of null
    // console.log(`low: ${low} high: ${high}`);
})();

console.log("==================================");
(function(){
    try{
        let [low, high] = undefined;
    }catch(e){
        console.log(e.name);
    }
})();

console.log("==================================");
(function(){
    let [low, high, ] = [20, 50];
    console.log(`low: ${low} high: ${high}`);
})();

console.log("==================================");
(function(){
    for(let [a, b] of [[4, 5]]){
        console.log(`${a} ${b}`);
    }
})();

console.log("==================================");
(function(){
    let count = 0;
    for(let [a, b] of [[4, 5]]){
        console.log(`${a} ${b}`);
        count++;
    }
    console.log(count);
})();
(function(){
    let eventSymbol = Symbol('resize event');
    console.log(typeof eventSymbol);
})();

(function(){
    let eventSymbol = Symbol('resize event');
    console.log(eventSymbol.toString());
})();

(function(){
    const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');
    console.log(CALCULATE_EVENT_SYMBOL.toString());
})();

(function(){
    let s = Symbol('event');
    let s2 = Symbol('event');
    console.log(s === s2);
})();

(function(){
    let s = Symbol.for('event');
    console.log(s.toString());
})();

(function(){
    let s = Symbol.for('event');
    let s2 = Symbol.for('event');
    console.log(s === s2); // true
})();

(function(){
    let s = Symbol.for('event');
    let s2 = Symbol.for('event2');
    console.log(s === s2); // false
})();

(function(){
    let s = Symbol.for('event');
    let description = Symbol.keyFor(s);
    console.log(description); // event
})();


(function(){
    let article = {
        title: "White Mountain",
        [Symbol.for('article')] : "My Article"
    };
    let value = article[Symbol.for('article')];
    console.log(value);
})();

(function(){
    let article = {
        title: "White Mountain",
        [Symbol.for('article')] : "My Article"
    };
    console.log(Object.getOwnPropertyNames(article));
    console.log(Object.getOwnPropertySymbols(article));
})();
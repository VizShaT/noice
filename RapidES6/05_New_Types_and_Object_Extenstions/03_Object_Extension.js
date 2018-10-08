(function(){
    let a = {
        x: 1
    };
    let b = {
        y: 2
    };
    
    Object.setPrototypeOf(a, b);
    console.log(a.y);
})();

(function(){
    let a = {
        x: 1
    };
    let b = {
        y: 2
    };
    let target = {};
    Object.assign(target, a, b);
    console.log(target);
})();

(function(){
    let a = {
        x: 1
    };
    let b = {
        x: 5,
        y: 2
    };
    let target = {};
    Object.assign(target, a, b);
    console.log(target);
})();

(function(){
    let a = {
        x: 1
    };
    let b = {
        x: 5,
        y: 2
    };
    let target = {};
    Object.assign(target, b, a);
    console.log(target);
})();

(function(){
    let a = {
        x: 1
    };
    let b = {
        x: 5,
        y: 2
    };
    Object.defineProperty(b, 'z', {
        value: 10,
        enumerable: false 
    });
    let target = {};
    Object.assign(target, a, b);
    console.log(target); // No addion of z since enumerable is set to false
})();

(function(){
    let a = {
        x: 1
    };
    let b = {
        x: 5,
        y: 2
    };
    Object.defineProperty(b, 'z', {
        value: 10,
        enumerable: true
    });
    let target = {};
    Object.assign(target, a, b);
    console.log(target); // { x: 5, y: 2, z: 10 }
})();

(function(){
    let a = {
        x: 1
    };
    let b = {
        x: 5,
        y: 2
    };
    let c = {
        z: 4
    }
    
    Object.setPrototypeOf(b, c);
    let target = {};
    Object.assign(target, a, b);
    console.log(target); // { x: 5, y: 2 }
})();

(function(){
    let amount = NaN;
    console.log(amount === amount); // false
})();

(function(){
    let amount = NaN;
    console.log(Object.is(amount, amount)); // true
})();

(function(){
    let amount = 0, total = -0;
    console.log(amount === total); // true
})();

(function(){
    let amount = 0, total = -0;
    console.log(Object.is(amount, total)); // false
})();

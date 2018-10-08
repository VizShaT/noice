(function(){
    let fn = function calc(){
        return 0;
    };
    console.log(fn);
    console.log(fn.name);
})();

(function(){
    let fn = function(){
        return 0;
    };
    console.log(fn);
    console.log(fn.name);
})();

(function(){
    let fn = function(){
        return 0;
    };
    let newFn = fn;
    console.log(newFn);
    console.log(newFn.name);
})();

(function(){
    class Calculator {
        constructor(){
            // 
        }
        add(){
            // 
        }
    }
    
    let c = new Calculator();
    console.log(Calculator.name);
    console.log(c.add.name);
})();
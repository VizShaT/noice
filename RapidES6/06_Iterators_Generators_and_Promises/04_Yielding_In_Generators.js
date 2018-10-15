(function(){
    function *process(){
        yield;
    }
    let id = process();
    console.log(id.next());
})();

(function(){
    console.log("---------------------------------");
    function *process(){
        let result = yield;
        console.log(`result is : ${result}`);
    }
    let id = process();
    id.next();
    id.next(200);
    // result is : 200
})();

(function(){
    console.log("---------------------------------");
    function *process(){
        let result = yield;
        console.log(`result is : ${result}`);
    }
    let id = process();
    id.next();
    console.log(id.next(200));
    // result is : 200
})();

(function(){
    console.log("---------------------------------");
    function *process(){
        let newArray = [yield, yield, yield];
        console.log(newArray[2]);
    }
    let id = process();
    id.next();
    id.next(2);
    id.next(4);
    id.next(42);
})();

(function(){
    console.log("---------------------------------");
    // function *process(){
    //     let value = 4 * yield 42;
    //     console.log(value);
    // }
    // let id = process();
    // id.next();
    // id.next(10);
})();

(function(){
    console.log("---------------------------------");
    function *process(){
        let value = 4 * (yield 42);
        console.log(value);
    }
    let id = process();
    id.next();
    id.next(10); // 40
})();

(function(){
    console.log("---------------------------------");
    function *process(){
        yield 42;
        yield [1, 2, 3];
    }
    let id = process();
    console.log(id.next().value);
    console.log(id.next().value);
    console.log(id.next().value);
    
    /*
    42
    [ 1, 2, 3 ]
    undefined
    */
})();

(function(){
    console.log("---------------------------------");
    function *process(){
        yield 42;
        yield* [1, 2, 3];
    }
    let id = process();
    console.log(id.next().value);
    console.log(id.next().value);
    console.log(id.next().value);
    console.log(id.next().value);
    console.log(id.next().value);
    
    /*
    42
    1
    2
    3
    undefined
    */
})();


(function(){
    console.log("---------------------------------");
    function *process(){
        try {
            yield 6000;
            yield 6001;
            yield 6002;
        }catch(e){
            
        }
    }
    let it = process();
    console.log(it.next().value);
    console.log(it.throw("foo"));
    console.log(it.next());
    
    /*
    6000
    { value: undefined, done: true }
    { value: undefined, done: true }
    */
    
})();

(function(){
    /*console.log("---------------------------------");
    function *process(){
        yield 6000;
        yield 6001;
        yield 6002;
    }
    let it = process();
    console.log(it.next().value);
    console.log(it.throw("foo"));
    console.log(it.next());*/
    
    /*
    6000

    /home/ubuntu/workspace/RapidES6/06_Iterators_Generators_and_Promises/05_throw_and_return.js:22
            yield 6000;
            ^
    foo
    */
})();

(function(){
    console.log("---------------------------------");
    function *process(){
        yield 6000;
        yield 6001;
        yield 6002;
    }
    let it = process();
    console.log(it.next().value);
    console.log(it.return("foo"));
    console.log(it.next());
    
    /*
    6000
    { value: 'foo', done: true }
    { value: undefined, done: true }
    */
})();



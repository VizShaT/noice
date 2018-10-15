(function(){
    function *process(){
        yield 8000;
        yield 8001;
    }
    let it = process();
    console.log(it);
    console.log(it.next());
})();

(function(){
    function *process(){
        yield 8000;
        yield 8001;
    }
    let it = process();
    console.log(it);
    it.next();
    console.log(it.next());
})();

(function(){
    function *process(){
        yield 8000;
        yield 8001;
    }
    let it = process();
    console.log(it);
    it.next();
    it.next();
    console.log(it.next());
    /*
    {}
    { value: undefined, done: true }
    */
})();

(function(){
    function *process(){
        let nextId = 7000;
        while(true){
            yield nextId++;
        }
    }
    let id = process();
    id.next();
    console.log(id.next()); // { value: 7001, done: false }
})();

(function(){
    function *process(){
        let nextId = 7000;
        while(true){
            yield nextId++;
        }
    }
    for(let id of process()){
        if(id > 7002) break;
        console.log(id);
    }
    /*
    7000
    7001
    7002
    */
})();

(function(){
    
})();
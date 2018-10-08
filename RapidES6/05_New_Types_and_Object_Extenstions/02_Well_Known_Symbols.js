(function(){
    let Blog = function(){
        // 
    };
    let blog = new Blog();
    console.log(blog.toString());
})();

(function(){
    let Blog = function(){
        // 
    };
    Blog.prototype[Symbol.toStringTag] = "Blog Class";
    let blog = new Blog();
    console.log(blog.toString());
})();

(function(){
    let values = [8, 11, 15];
    console.log([].concat(values));
})();

(function(){
    let values = [8, 11, 15];
    values[Symbol.isConcatSpreadable] = false;
    console.log([].concat(values));
})();

(function(){
    let values = [8, 11, 15];
    let sum = values + 100;
    console.log(sum);
})();

(function(){
    let values = [8, 11, 15];
    values[Symbol.toPrimitive] = function(hint){
        console.log(hint);
        return 42;
    };
    let sum = values + 100;
    console.log(sum);
})();

(function(){
    
})();

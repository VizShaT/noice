// Chapter 11: Anonymous function, scope and closure

// Hoisting

var migrating = true;

if(migrating){
    quack(4);
    // fly(4); TypeError: fly is not a function
}

var fly = function(num){
    for(var i=0; i<num; i++){
        console.log("Flying");
    }
};

function quack(num){
    for(var i=0; i<num; i++){
        console.log("Quack");
    }
}

// you can place function declarations anywhere in your code—at the top, at the bottom, in the middle—and invoke them wherever you like. Function declarations create functions that are defined everywhere in your code (this is known as hoisting).

// Lexical Scoping
// Lexical just means you can determine the scope of a variable by reading the structure of the code, as opposed to waiting until the code runs to figure it out.
(function(){
    console.log(id); // undefined 
    var id = 15;
    
    // Result will be undfined due to hoisting 
    // JavaScript interpreter will treat above like below
    /*
        var id;
        console.log(id);
        id = 15;
    */
})();

(function(){
    // console.log(id); // ReferenceError: id is not defined
    let id = 15; 
})();

(function(){
    var id = 15;
    {
        var id = 50;
    }
    console.log(id); // 50
})();

(function(){
    let id = 15;
    {
        let id = 50; // here it is block scope
    }
    console.log(id); // 15
})();

(function(){
    {
        let id = 50; // here it is block scope
    }
    // console.log(id); // ReferenceError: id is not defined
})();

(function(){
    console.log("In function defination block : ");
    function updateId(){
        id = 15;
    }
    let id = null;
    updateId();
    console.log(id);
})();

(function(){
    console.log("In function expression block : ");
    var updateId = function(){
        id = 15;
    };
    let id = null;
    updateId();
    console.log(id);
})();


(function(){
    console.log("Checking scope in for loop with var :");
    var id = 15;
    for(var id = 0; id<10; id++){
        
    }
    console.log(id);
})();

(function(){
    console.log("Checking scope in for loop with let :");
    let id = 15;
    for(let id = 0; id<10; id++){
        
    }
    console.log(id);
})();


(function(){

})();

(function(){
    let updateFunctions = [];
    for(var i=0; i<5; i++){
        updateFunctions.push(function() { return i });
    }
    console.log(updateFunctions[0]());
})();

(function(){
    let updateFunctions = [];
    for(let i=0; i<5; i++){
        updateFunctions.push(function() { return i });
    }
    console.log(updateFunctions[0]());
})();

console.log("=========CONST Examples==========");
(function(){
    const ONE = 1;
    console.log(ONE);
})();

(function(){
    // const ONE; // SyntaxError: Missing initializer in const declaration
    // const variable must be initailize
    // console.log(ONE);
})();

(function(){
    const ONE = 1;
    // ONE = 2; // TypeError: Assignment to constant variable.
    console.log(ONE);
})();

(function(){
    const ONE = 100;
    if(ONE > 1){
        const ONE = 50;
    }
    console.log(ONE); // 100, beacuse const is also in block scope
})();
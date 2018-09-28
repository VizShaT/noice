(function(){
    var showName = function(id, ...name){
        console.log(name instanceof Array);
    };
    showName(101, "Amela", "Paul", "Anderson");
})();

(function(){
    var showName = function(id, ...name){
        console.log(name);
    };
    showName(101, "Amela", "Paul", "Anderson");
})();

(function(){
    var showName = function(id, ...name){
        console.log(name);
    };
    showName(101);
})();


(function(){
    var showName = function(id, ...name){
    };
    console.log(showName.length);
})();

(function(){
    var showName = function(id, ...name){
        console.log(arguments.length);
    };
    showName(101, "Amela", "Paul", "Anderson");
})();

(function(){
    var showName = new Function("...name", "return name");
    console.log(showName("Amela", "Paul", "Anderson"));
})();


console.log("=============Rest Parameter===========");
(function(){
    var prices = [12, 25, 2];
    var maxValue = Math.max(...prices);
    console.log(maxValue);
})();

(function(){
    var prices = [12, 25, 2];
    var newPriceArray = [...prices];
    console.log(newPriceArray);
})();

(function(){
    var newPriceArray = Array(...[,,]);
    console.log(newPriceArray);
})();

(function(){
    var newPriceArray = [...[,,,]];
    console.log(newPriceArray);
})();

(function(){
    var maxCode = Math.max(..."2587123");
    console.log(maxCode);
})();

(function(){
    var codeArray = ["A", ..."BCD", "E"];
    console.log(codeArray);
})();
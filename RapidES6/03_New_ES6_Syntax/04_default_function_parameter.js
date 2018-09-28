(function(){
    'use strict';
    var getValue = function(value = 10){
        console.log(value);
    };
    getValue();
})();

(function(){
    'use strict';
    var getValue = function(value = 10, name="oye"){
        console.log(value + " " + name);
    };
    getValue(undefined, "bye");
})();

(function(){
    'use strict';
    var getTotal = function(value, tax = value * 0.05){
        console.log(value + tax);
    };
    getTotal(100);
})();

(function(){
    'use strict';
    var baseTax = 0.05;
    var getTotal = function(value, tax = value * baseTax){
        console.log(value + tax);
    };
    getTotal(100);
})();

(function(){
    'use strict';
    var generateBaseTax = () => 0.05;
    var getTotal = function(value, tax = value * generateBaseTax()){
        console.log(value + tax);
    };
    getTotal(100);
})();


(function(){
    'use strict';
    var getTotal = function(value, tax = value * 0.05){
        console.log(arguments.length);
    };
    getTotal(100);
})();

(function(){
    'use strict';
    var getValue = function(value = name, name="oye"){
        console.log(value + " " + name); // ReferenceError: name is not defined
    };
    // getValue();
})();

(function(){
    'use strict';
    var getValue = function(value = name, name="oye"){
        console.log(value + " " + name); 
    };
    getValue(100);
})();

(function(){
    'use strict';
    var getTotal = new Function("value = 100", "return value");
    console.log(getTotal());
})();
(function(){
    var price = 200, quantity = 10;
    var productView = {
        price,
        quantity
    };
    console.log(productView);
})();

(function(){
    var price = 200, quantity = 10;
    var productView = {
        price,
        quantity,
        calcuateValue(){
            return this.price * this.quantity;
        }
    };
    console.log(productView.calcuateValue());
})();

(function(){
    'use strict'
    var price = 200, quantity = 10;
    var productView = {
        price: 7.99,
        quantity: 1,
        calcuateValue(){
            return this.price * this.quantity;
        }
    };
    console.log(productView.calcuateValue());
})();

(function(){
    var price = 200, quantity = 10;
    var productView = {
        price,
        quantity,
        "calcuateValue"(){
            return this.price * this.quantity;
        }
    };
    console.log(productView["calcuateValue"]());
})();


(function(){
    var field = 'dynamicField';
    var price = 5.99;
    var productView = {
        [field] : price
    };
    console.log(productView);
})();

(function(){
    var field = 'dynamicField';
    var price = 5.99;
    var productView = {
        [field + "-001"] : price
    };
    console.log(productView);
})();

(function(){
    var method = 'doIt';
    var productView = {
        [method + '-001'](){
            console.log("in a method");
        }
    };
    productView['doIt-001']();
})();

(function(){
    var ident = "productId";
    var productView = {
        get [ident] () { return true },
        set [ident] (value) {}
    };
    console.log(productView.productId);
})();
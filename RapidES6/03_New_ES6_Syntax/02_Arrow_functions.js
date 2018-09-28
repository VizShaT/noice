(function(){
    var getValue = () => 45;
    console.log(typeof getValue);
    console.log(getValue());
})();

(function(){
    var getValue = num => num * 45;
    console.log(getValue(2));
})();

(function(){
    // With two parameter
    var getValue = (x, y) => x * 45 + y;
    console.log(getValue(2, 10));
})();

(function(){
    // document.addEventListener('click', function(){
    //     console.log(this); // #document
    // });
    
    // document.addEventListener('click', () => console.log(this)); // window
})();


(function(){
    var ticket = {
        number: 123,
        run: function(){
            console.log(this);
        }
    };
    ticket.run();
})();


(function(){
    var ticket = {
        number: 123,
        // run: () => console.log(this) // Will return global object
    };
    // ticket.run();
})();


(function(){
    var ticket = {
        number: 123,
        run: function(){
            return () => console.log(this.number);
        }
    };
    ticket.run()();
})();

console.log("=====Binding example========");
(function(){
    var ticket = {
        number: 123,
        run: function(){
            console.log(this.number);
        }
    };
    // ticket.run();
    var newTicket = {
        number: 456,
    };
    ticket.run.bind(newTicket)();
})();

(function(){
    var ticket = {
        number: 123,
        run: function(){
            return () => console.log(this.number);
        }
    };
    // ticket.run();
    var newTicket = {
        number: 456,
    };
    ticket.run().bind(newTicket)();
})();

(function(){
    var ticket = {
        number: 123,
        run: function(){
            return () => console.log(this.number);
        }
    };
    // ticket.run();
    var newTicket = {
        number: 456,
    };
    ticket.run().call(newTicket);
})();

(function(){
    var getId = function(){
        return 123;
    };
    console.log(getId.hasOwnProperty("prototype"));
})();

(function(){
    var getId = () => 123;
    console.log(getId.hasOwnProperty("prototype"));
})();
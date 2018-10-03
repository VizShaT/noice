(function(){
    class Task {
        
    }
    console.log(typeof Task); // function
})();

(function(){
    class Task {
        
    }
    let task = new Task();
    console.log(typeof task); // object
})();

(function(){
    class Task {
        
    }
    let task = new Task();
    console.log(task instanceof Task); // true
})();

(function(){
    class Task {
        showId(){
            console.log('99');
        }
    }
    let task = new Task();
    task.showId(); // 99
})();


(function(){
    class Task {
        showId(){
            console.log('99');
        }
    }
    let task = new Task();
    console.log(task.showId === Task.prototype.showId); // true
    // Adding a method to class is similar to adding a method to Object prototype
})();

(function(){
    class Task {
        // let productId = 99; // Syntax  error, cannot add proprties to class like this
        constructor(){
            console.log("Constructing task");
        } // if you put comma here, it will be syntax error
        showId(){
            console.log('99');
        }
    }
    let task = new Task();
})();


(function(){
    // Here Task is used before declaration 
    // let task = new Task();  // ReferenceError: Task is not defined
    
    class Task {
        constructor(){
            console.log("Constructing task");
        }
    }
    // Classed are not hoisted 
})();


(function(){
    let newClass = class Task {
        constructor(){
            console.log("Constructing new task");
        }
    };
    new newClass();
})();


(function(){
    /*
    class Task {
        constructor(){
            console.log("Constructing task");
        }
    }
    let task = {};
    Task.call(task); 
    
    // TypeError: Class constructor Task cannot be invoked without 'new'
    */
})();

(function(){
    let Task = function(){
        console.log("Constructing Task");
    };
    let task = {};
    Task.call(task);
})();

function Project() { }
console.log(global.Project === Project); // false

class Task { }
console.log(global.Task === Task); // false
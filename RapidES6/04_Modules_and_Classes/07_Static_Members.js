(function(){
    class Project {
        static getDefaultId(){
            return 0;
        }
    }
    console.log(Project.getDefaultId());
    
    // By declaring static method, the method get attached directly to class
    // as a constructor function
})();

(function(){
    /*
    class Project {
        static getDefaultId(){
            return 0;
        }
    }
    let p = new Project();
    console.log(p.getDefaultId());
    
    // TypeError: p.getDefaultId is not a function
    
    */
})();


(function(){
    class Project {
        // static let id = 10; // SyntaxError: Unexpected identifier
    }
    console.log(Project.id);
})();


(function(){
    class Project {
    }
    Project.id = 10;
    console.log(Project.id);
})();
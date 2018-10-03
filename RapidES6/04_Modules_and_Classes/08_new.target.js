(function(){
    class Project {
        constructor(){
            console.log(typeof new.target);
        }
    }
    let p = new Project();
})();

(function(){
    class Project {
        constructor(){
            console.log(new.target);
        }
    }
    var p = new Project();
})();

(function(){
    class Project {
        constructor(){
            console.log(new.target);
        }
    }
    class SoftwareProject extends Project {
        constructor(){
            super();
        }
    }
    let p = new SoftwareProject();
})();

(function(){
    class Project {
        constructor(){
            console.log(new.target);
        }
    }
    class SoftwareProject extends Project {

    }
    let p = new SoftwareProject();
})();

(function(){
    class Project {
        constructor(){
            console.log(new.target.getDefaultId());
        }
    }
    class SoftwareProject extends Project {
        static getDefaultId(){
            return 99;
        }
    }
    let p = new SoftwareProject();
})();

(function(){
    
})();
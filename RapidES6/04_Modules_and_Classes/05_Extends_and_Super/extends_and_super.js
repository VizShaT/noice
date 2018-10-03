(function(){
    class Project {
        constructor(){
            console.log("Constructing Project");
        }
    }
    class SoftwareProject extends Project {
        
    }
    let p = new SoftwareProject();
})();

(function(){
    class Project {
        constructor(name){
            console.log("Constructing Project : " + name);
        }
    }
    class SoftwareProject extends Project {
        
    }
    let p = new SoftwareProject("Miltyan");
})();

(function(){
    class Project {
        constructor(){
            console.log("Constructing Project");
        }
    }
    class SoftwareProject extends Project {
        constructor(){
            super();
            console.log("Constructing SoftwareProject");
        }
    }
    let p = new SoftwareProject();
})();

(function(){
    class Project {
        // constructor(){
        //     console.log("Constructing Project");
        // }
    }
    class SoftwareProject extends Project {
        constructor(){
            super(); // will get this error if super() not called ReferenceError: this is not defined
            console.log("Constructing SoftwareProject");
        }
    }
    let p = new SoftwareProject();
})();

(function(){
    class Project {
        getTaskCount(){
            return 50;
        }
    }
    class SoftwareProject extends Project {
        // empty
    }
    
    let p = new SoftwareProject();
    console.log(p.getTaskCount()); // 50
})();

(function(){
    class Project {
        getTaskCount(){
            return 50;
        }
    }
    class SoftwareProject extends Project {
        getTaskCount(){
            return 66;
        }
    }
    
    let p = new SoftwareProject();
    console.log(p.getTaskCount()); // 50
})();

(function(){
    class Project {
        getTaskCount(){
            return 50;
        }
    }
    class SoftwareProject extends Project {
        getTaskCount(){
            return super.getTaskCount() + 6; 
        }
    }
    
    let p = new SoftwareProject();
    console.log(p.getTaskCount()); // 56
})();

(function(){
    console.log("=== Using super in object literals ===");
    let project = {
        getTaskCount(){
            return 50;
        }
    };
    let softwareProject = {
        getTaskCount(){
            return super.getTaskCount() + 8;
        }
    };
    Object.setPrototypeOf(softwareProject, project);
    console.log(softwareProject.getTaskCount());
})();

(function(){
    
})();
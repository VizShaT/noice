(function(){
    class Project {
        constructor(){
            this.location = "sky";
        }
    }
    class SoftwareProject extends Project {
        constructor(){
            super();
        }
    }
    
    let p = new SoftwareProject();
    console.log(p.location);
})();

(function(){
    class Project {
        constructor(){
            let location = "sky";
        }
    }
    class SoftwareProject extends Project {
        constructor(){
            super();
        }
    }
    
    let p = new SoftwareProject();
    console.log(p.location);
})();

(function(){
    class Project {
        constructor(){
            this.location = "Sky";
        }
    }
    class SoftwareProject extends Project {
        constructor(){
            super();
            this.location = this.location + "Blue";
        }
    }
    
    let p = new SoftwareProject();
    console.log(p.location);
})();

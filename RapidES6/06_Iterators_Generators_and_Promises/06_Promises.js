(function(){
    console.log("---------------------------------");
    function doAsync(){
        let p = new Promise(function(resolve, reject){
            console.log("in promise code");
            setTimeout(function(){
                console.log('resolving....');
                resolve();
            }, 2000);
        });
        return p;
    }
    
    let promise = doAsync();
})();

/*(function(){
    console.log("---------------------------------");
    function doAsync(){
        let p = new Promise(function(resolve, reject){
            console.log("in promise code");
            setTimeout(function(){
                console.log('rejecting....');
                reject();
            }, 2000);
        });
        return p;
    }
    
    let promise = doAsync();
})();*/

(function(){
    console.log("---------------------------------");
    function doAsync(){
        let p = new Promise(function(resolve, reject){
            console.log("in promise code");
            setTimeout(function(){
                console.log('rejecting....');
                reject();
            }, 2000);
        });
        return p;
    }
    
    doAsync().then(function(){
        console.log("fullfilled");
    },
    function(){
        console.log("Rejected.");
    });
})();


(function(){
    console.log("---------------------------------");
    function doAsync(){
        let p = new Promise(function(resolve, reject){
            console.log("in promise code");
            setTimeout(function(){
                console.log('resolving....');
                resolve();
            }, 2000);
        });
        return p;
    }
    
    doAsync().then(function(){
        console.log("fullfilled");
    },
    function(){
        console.log("Rejected.");
    });
})();

var migrating = true;

var fly = function(num){
    var sound = "Flying";
    function windFlapper(){
        console.log(sound);
    }
    for(var i=0; i<num; i++){
        windFlapper();
    }
};

function quack(num){
    var sound = "Quack";
    function quacker(){
        console.log(sound);
    }
    for(var i=0; i<num; i++){
        quacker();
    }
}

if(migrating){
    quack(4);
    fly(4);
}
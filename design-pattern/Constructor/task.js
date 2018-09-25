var Task = function(name){
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function(){
    console.log("completing task: " + this.name);
    this.completed = true;
};

Task.prototype.saved = function(){
    console.log("saving task: " + this.name);
};

module.exports = Task;
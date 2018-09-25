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

var task1 = new Task("create a demo for constructors");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singleton");
var task4 = new Task("create a demo for prototypes");

task1.complete();
task2.saved();
task3.saved();
task4.saved();
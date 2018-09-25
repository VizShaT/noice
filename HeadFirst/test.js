var winner = function() { console.log("WINNER!") };
var loser = function() { console.log("LOSER!") };
// let's test as a warm up
winner();
// let's assign to other variables for practice
var a = winner;
var b = loser;
var c = loser;
a();
b();
// now let's try your luck with a shell game
c = a;
console.log("Here C : "); // c = a()
c();
a = b;
console.log("Here a : "); // a = b()
a();
b = c;
console.log("Here b : "); // b = a() 
b();
c = a;
console.log("Here C: "); // c = b()
c();
a = c;
console.log("Here a: "); // a = b()
a();

a = b; 
b = c;
a();

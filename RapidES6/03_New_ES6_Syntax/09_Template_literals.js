console.log("==================================");
(function(){
    var name = "Okaya";
    console.log(`Her name is ${name}`);
})();

console.log("==================================");
(function(){
    var name = "Okaya";
    console.log(`Her name is \${name}`);
})();

console.log("==================================");
(function(){
    let message = `A
    B
    C`;
    console.log(message);
})();

console.log("==================================");
(function(){
    var name = "Okaya";
    console.log(`Her name is ${"Oka-" + name}`);
})();

console.log("==================================");
(function(){
    function showName(message){
        let name = "Okaya";
        console.log(message);
    }
    let name = "Vikrya";
    showName(`Her name is ${name}`);
})();

console.log("==================================");
(function(){
    function showName(name){
        console.log(name);
    }
    showName `Natsya`;
})();

console.log("==================================");
(function(){
    function proccessInvoice(segments, ...values){
        console.log(segments);
        console.log(values);
    }
    let processNum = '1200';
    let amount = '2000';
    proccessInvoice `Invoice: ${processNum} for ${amount}`;
})();
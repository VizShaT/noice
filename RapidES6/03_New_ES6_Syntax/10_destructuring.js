console.log("==================================");
(function(){
    let salary = ['25000', '35000', '50000'];
    let [low, average, high] = salary;
    console.log(average);
})();

console.log("==================================");
(function(){
    let salary = ['25000', '35000'];
    let [low, average, high] = salary;
    console.log(high);
})();

console.log("==================================");
(function(){
    let salary = ['25000', '35000', '50000'];
    let [low, , high] = salary;
    console.log(high);
})();

console.log("==================================");
(function(){
    let salary = ['25000', '35000', '50000'];
    let [low, ...remaining] = salary;
    console.log(remaining);
})();

console.log("==================================");
(function(){
    let salary = ['25000', '35000'];
    let [low, average, high="88000"] = salary;
    console.log(high);
})();

console.log("==================================");
(function(){
    let salary = ['25000', '35000', ['45000', 55000]];
    let [low, average, [actualLow, actualHigh]] = salary;
    console.log(actualLow);
})();

console.log("==================================");
(function(){
    let salary = ['25000', '35000'];
    let low, average, high;
    [low, average, high="88000"] = salary;
    console.log(high);
})();


console.log("==================================");
(function(){
    function reviewSalary([low, average], high="88000"){
        console.log(average);
    }
    reviewSalary(["20000", "35000"]);
})();

console.log("==================================");
(function(){
    let salary = {
        low: "25000",
        average: "39000",
        high: "51000"
    };
    let {low, average, high} = salary;
    console.log(high);
})();

console.log("==================================");
(function(){
    let salary = {
        low: "25000",
        average: "39000",
        high: "51000"
    };
    let {low:newLow, average:newAverage, high:newHigh} = salary;
    console.log(newHigh);
})();

console.log("==================================");
(function(){
    let salary = {
        low: "25000",
        average: "39000",
        high: "51000"
    };
    let newLow, newAverage, newHigh;
    // {low: newLow, average: newAverage, high: newHigh} = salary;
    ({low: newLow, average: newAverage, high: newHigh} = salary);
    console.log(newHigh);
})();

console.log("==================================");
(function(){
    let [minCode, maxCode] = "AZ";
    console.log(`minCode : ${minCode} , maxCode: ${maxCode}`)
})();

console.log("==================================");
(function(){

})();
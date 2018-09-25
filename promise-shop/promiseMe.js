let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve("done!"), 1000);
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);

/*
let promise2 = new Promise(function(resolve, reject){
    setTimeout(() => reject(new Error("Oops that's close")), 1000);
});

promise2.catch(error => {
    console.log(error);
})
*/
// Callbacks

/*
function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    console.log(`Cool, the ${script.src} loaded`);
    console.log( _ );
});
*/

/*
function loadScript(src){
    return new Promise(function(resolve, reject){
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Script load error : " + src));
        document.head.append(script);
    });
}

let promise3 = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');

promise3.then(
    script => console.log(`${script.src} is loaded`),
    error => console.log(`Error: ${error.message}`)
);

*/
function delay(ms) {
  return new Promise(function(resolve, error){
      setTimeout(() => resolve(), ms);
  });
}

delay(3000).then(() => console.log('runs after 3 seconds'));
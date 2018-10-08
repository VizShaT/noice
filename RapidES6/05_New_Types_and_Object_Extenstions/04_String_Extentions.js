(function(){
    let title = "Santa Banta Ole Ole";
    console.log(title.startsWith("Santa")); // true
    console.log(title.startsWith("santa")); // false
})();

(function(){
    let title = "Santa Banta Ole Ole";
    console.log(title.endsWith("Ole")); // true
    console.log(title.endsWith("ole")); // false
})();

(function(){
    let title = "Santa Banta Ole Ole";
    console.log(title.includes("Ol")); // true
    console.log(title.includes("ol")); // false
})();

(function(){
    let surfer = "Surfer's \u{1f3c4} Blog";
    console.log(surfer);
})();

(function(){
    let surfer = "\u{1f3c4}";
    console.log(surfer.length);
})();

(function(){
    let surfer = "\u{1f30a}\u{1f3c4}\u{1f40b}";
    console.log(surfer);
    console.log(Array.from(surfer).length);
    console.log(surfer);
})();


(function(){
    let title = "Mazatla\u0301n";
    console.log(title + ' ' + title.length); // 
})();


(function(){
    let title = "Mazatla\u0301n";
    console.log(title + ' ' + title.normalize().length); // Mazatlán 8
})();

(function(){
    let title = "Mazatla\u0301n";
    console.log(title.normalize().codePointAt(7).toString(16)); //6e
})();

(function(){
    console.log(String.fromCodePoint(0x1f3c4)); // 🏄
})();

(function(){
    let title = "Surfer";
    let output = String.raw`${title} \u{1f3c4}\n`;
    console.log(output); // Surfer \u{1f3c4}\n
})();

(function(){
    let wave = '\u{1f30a}';
    console.log(wave.repeat(10)); // 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
})();

(function(){

})();

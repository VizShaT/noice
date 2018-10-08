(function(){
    let pattern = /\u{1f3c4}/;
    let patternTest = pattern.test('🏄');
    
    console.log({pattern, patternTest});
})();

(function(){
    let pattern = /\u{1f3c4}/u;
    let patternTest = pattern.test('🏄');
    
    console.log({pattern, patternTest});
})();

(function(){
    let pattern = /^.Surfer/;
    let str = '🏄Surfer';
    let patternTest = pattern.test(str);
    
    console.log({pattern, str, patternTest});
})();

(function(){
    let pattern = /^.Surfer/u;
    let str = '🏄Surfer';
    let patternTest = pattern.test(str);
    
    console.log({pattern, str, patternTest});
})();

(function(){
    let pattern = /900/;
    let lastIndex = pattern.lastIndex;
    let str = '800900';
    let patternTest = pattern.test(str);
    
    console.log({pattern, str, lastIndex, patternTest});
})();

(function(){
    let pattern = /900/y;
    let lastIndex = pattern.lastIndex;
    let str = '800900';
    let patternTest = pattern.test(str);
    
    console.log({pattern, str, lastIndex, patternTest});
})();

(function(){
    let pattern = /900/y;
    pattern.lastIndex = 3;
    let lastIndex = pattern.lastIndex;
    let str = '800900';
    let patternTest = pattern.test(str);
    
    console.log({pattern, str, lastIndex, patternTest});
})();

(function(){
    let pattern = /900/;
    pattern.lastIndex = 3;
    let lastIndex = pattern.lastIndex;
    let str = '800900';
    let patternTest = pattern.test(str);
    
    console.log({pattern, str, lastIndex, patternTest});
})();

(function(){
    let pattern = /900/yg;
    let flags = pattern.flags;
    
    console.log({pattern, flags}); // flags will be in order 'gimuy'
})();
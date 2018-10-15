(function(){
    let ids = [9001, 9002, 9003];
    console.log(typeof ids[Symbol.iterator]);
    console.log(ids[Symbol.iterator]);
})();

(function(){
    let ids = [9001, 9002, 9003];
    let it = ids[Symbol.iterator]();
    let itNext = it.next();
    console.log({ids, it, itNext});
})();
(function(){
    let ids = [9001, 9002, 9003];
    let it = ids[Symbol.iterator]();
    it.next();
    it.next();
    let itNext = it.next();
    console.log({ids, it, itNext});
})();

(function(){
    let ids = [9001, 9002, 9003];
    let it = ids[Symbol.iterator]();
    it.next();
    it.next();
    it.next();
    let itNext = it.next();
    console.log({ids, it, itNext});
    
    /*
    {ids: [ 9001, 9002, 9003 ],
     it: {},
     itNext: { value: undefined, done: true } }
     */
})();

(function(){
   let idMaker = {
       [Symbol.iterator](){
           let nextId = 8000;
           return {
               next(){
                   return {
                       value: nextId++,
                       done: false
                   };
               }
           };
       }
   };
   
   let it = idMaker[Symbol.iterator]();
   console.log(it.next());
   console.log(it.next());
   console.log(it.next());
   
   /*
    { value: 8000, done: false }
    { value: 8001, done: false }
    { value: 8002, done: false }
    */
})();

(function(){
   let idMaker = {
       [Symbol.iterator](){
           let nextId = 8000;
           return {
               next(){
                   return {
                       value: nextId++,
                       done: false
                   };
               }
           };
       }
   };
   
   for(let v of idMaker){
       if(v > 8002) break;
       console.log(v);
   }
   /*
    8000
    8001
    8002
    */
})();

(function(){
   let idMaker = {
       [Symbol.iterator](){
           let nextId = 8000;
           return {
               next(){
                   let value = nextId > 8002 ? undefined : nextId++;
                   let done = !value;
                   return { value, done };
               }
           };
       }
   };
   
   for(let v of idMaker){
       console.log(v);
   }
   /*
    8000
    8001
    8002
    */
})();

(function(){
    let ids = [8000, 8001, 8002];
    function process(id1, id2, id3){
        console.log(id3);
    }
    console.log("id3 : ");
    process(...ids);
})();
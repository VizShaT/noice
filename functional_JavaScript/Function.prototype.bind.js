let user = {
    name: "Vijay",
    sayHi(){
        console.log(`Hello, ${this.name}!`);
    }
};

setTimeout(user.sayHi, 2000);

let user1 = {
    firstname: "Reya"
};

function getName(){
    console.log(this.firstname);
};

let firstUser = getName.bind(user1);
firstUser();
const log = console.log ;

log("Construtor Function")

const dev1 = {

    name : "john",
    age : 32,
    role : "dev",
    salary : 40000,
    dev: function (){
        log("I am develop som features")

    },
};

//Object Creators

function Deverloper (name) {
    
    this.name = name;
    this.age = age;
    this.role = "dev";
    this.salary = 40_000;
    this.dev= function(){
        log("I am develop som features")
    };
}

const dev2 = new Deverloper("to");
log(dev2)
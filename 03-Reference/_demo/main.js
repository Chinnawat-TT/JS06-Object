const log = console.log ;
log( "lean Ref ")

// copied by Value
// copied by Reference


let message = "Hello" ;
let word = message ;
log(message);
log(word);


message = "Hi"
log(message);
log(word);

// obj
let user = {
    name : "John" 
} ;

// copied by reference
// assign address ของ  user ให้กับ employee
let employee = user;
user.name = "joe" ;
log(employee);
log(user);


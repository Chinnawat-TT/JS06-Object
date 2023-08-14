console.log("Learn object")

// Datatype

// Primitive : Boolean, Number,string etc
// Non Primmitive : object

// #####################
// ## Object Daclaration
// #####################
//{} == stand for objet / scope
//{ record_1, record_2, record_3, .....}
// each record => <key_name>:<value>
// <value> any Datatype
//<key_name> Datatype : string

//record === property (คุณสมบัติ,สิ่งที่มี) == key value pair

let user = {

    fristName : "Chinnawat",
    lastName :"Sangrung",
    Age : 30,
    isAdmin : true,
    "like human" : true,
};



// #####################
// ## ACCESS, MODIFY, DELETE
// #####################

// Every action need <KEY_NAME> !!
// Dot Notation 
// <Object>.<key_name> === <value>
// ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้

//GET, POLL, READ
// console.log(user.Age);
// console.log(user.Age === 30);
// console.log(user.isAdmin);
// console.log(user.fristName);
// console.log(user.lastName);
// console.log(user.salary);

// MODIFY, UPDATE
// Syntax : <object>.<old_key> = newValue
user.fristName = "Nadech" ;
user.Age = 25 ;
user.Age += 2 ;
console.log(user.Age);

//ADD
// Syntax : <object>.<new_key> = newValue
user.address = "bangkok"
// console.log(user);

//DELETE
// Syntax : delete <obj>.<key_name>

delete user.isAdmin
console.log(user);

//######################
//###### NESTED Object
//#####################

const employee = {
    fullname : "John Doe",
    saryly : 500000,
    address : {
        district : "Phaya Thai",
        province : "Bangkok",
        county : "Thailand",
    }

}
// ACCESS, MODIFY, DELETE
console.log(employee.saryly);
console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village);

employee.address.province = "Nonthaburi" ;
delete employee.address.county;

// Prevent Crash 
//Dot ใช้กับ object เท่านั้น !! <obj>.<key>
//ห้ามมมมม ใช้กับ undefind <undefined>.<key>
//วิธีแก้ optional chaining => <undefind>?.<key>


console.log(employee.addr);
// console.log(employee.addr.province);
console.log(employee.addr?.province);
console.log(employee.address?.province);
console.log(employee.address?.village);

//####################################
//######### Check key ?
//####################################


const product = {

    id : 227 ,
    name : "Iphone",
    price : 50000,
    // discount : 0.05,
    "is mobile" : true,

};
console.log(product.discount);

// "name" in product // => true,false
// Syntax : <key_name_string> in <obj> => BOOLEAN
console.log("name" in product);
console.log("discount" in product);

//Mettod hasOwnProperty
//Syntax : <obj>.hasOwnProperty(<key_name>) => BOOLEAN
console.log(product.hasOwnProperty("name"));
console.log(product.hasOwnProperty("discount"));

// ##################################
// ########## 5. Bracket Notation []
// ##################################

// Syntax : <obj>[ "<key_name_string>" ]
// *** 1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็็น string
// *** 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // Computed key
// Access key-value ผ่านชื่อตัวแปรได้

console.log(product.id);
console.log(product['id']);

// console.log(product.is mobile) crash
console.log(product['is mobile']);

product['name'] = 'Iphone-15';
// console.log(product);

let aaaaa = 'name';

console.log(product['name']);
console.log(product[aaaaa]);
console.log(product.aaaaa); //product.aaaaa  === product['aaaaa'] === undefined


// #############################
// ###### 6.Property ShortHand
// ############################
/*
{
	username : <value in username variable>,
	age : <value in age variable>
}
*/
let username = 'Codecamp';
let age = 15;

// let USER = {
//     username: username,
//     age: age,
// };
let USER = { username, age };

console.log(USER);
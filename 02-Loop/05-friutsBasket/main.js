// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง  
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)   
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

// //init
// const fruits ={}

// // access input

// let key = prompt("enter fruits");
// let value = +prompt("enter quatity");

// //update fruits
// if(value == 1){

//     fruits [key] = value;

// } else if (value > 1 ){
//     fruits[`${key}s`] = value ;
// }

// console.log(fruits);


//init
const fruits ={}
const TERMINATE= "stop"


let key ;
let value ;

do {
    key = prompt("enter fruits");
    value = +prompt("enter quatity");

    if(value == 1){
        fruits [key] = value;
    } else if (value > 1 ){
        fruits[`${key}s`] = value ;
    }    

}
 while (key != TERMINATE && value != TERMINATE);

 console.log(fruits);
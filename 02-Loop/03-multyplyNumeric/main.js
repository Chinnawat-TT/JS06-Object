// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
// คูณเฉพาะ value ที่เป็น number เท่านั้น


// ```js
// // before 
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu'
// };


// // after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,     *3
//   height: 900,    *3
//   title: 'My menu'
// };
// ```


let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
}
console.log(menu);

const multiplyNumeric= (object,num) => {
        
    for(let key in object){

        console.log(typeof object[key] )

        if(typeof object[key] === 'number'){


            object[key] = object[key]*num


        }
        
    }

          
}
let total= multiplyNumeric(menu,3);
console.log(menu);






const log = console.log ;

// log("object clone")

const todo = {

    task : "Do Hw",
    complete : false,
    due_date: "13-08-2023",
}

// // Clone

// const newTodo = {}

// // เอาต้นเเบบมา  loop แล้ว  assign ที่ละ  key:value ให้ object ใหม่

// for(let key in todo){

//     // assign ที่ละ key:value ให้ newTOdo

//     newTodo[key] = todo[key] ;
//     //newTodo["task"] = todo["task"] => "Do Hw" 
//     //newTodo["complete"] = todo["complete"] => "false" 
//     //newTodo["due_date"] = todo["due_date"] => "13-08-2023" 
// }
// log(newTodo);
// newTodo.complete = true ;
// log(newTodo.complete);
// log(todo.complete);

//2.object assign(dst, [src1,src2.....srcN])
// Merge/overRide Direction : right ->left
// return address ของ destination (param1)


// 2.A
// const newTodo = {}
// Object.assign(newTodo,todo)


// 2.B
const newTodo = Object.assign({},todo);

log(newTodo)

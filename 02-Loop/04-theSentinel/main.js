// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด   
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา





const stock = {}

while(true){

    let key = prompt("Enter name")
    if (key === "stop"){
        break
    }
    let value = prompt("Enter value")
    stock[key]=value
    
}

console.log(stock);

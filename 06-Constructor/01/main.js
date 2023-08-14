// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator (a,b) {
    this.read = a,b
    this.sum = a+b
    this.mul = a*b

}

let newCal = new Calculator(2,3)

console.log(newCal.read)
console.log(newCal.sum)
console.log(newCal.mul)

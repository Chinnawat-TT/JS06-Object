// - ให้สร้าง Object calculator ซึ่งมี 3 method 
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// ```js
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// ```

let calculator = {
    read() {
        this.x = +prompt('Enter num1'); // line276 : calculator.x = +prompt()
        this.y = +prompt('Enter num2'); // line276 : calculator.y = +prompt()
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    },
};

// log(calculator);

calculator.read();
log(calculator);
log(calculator.sum());
log(calculator.mul());





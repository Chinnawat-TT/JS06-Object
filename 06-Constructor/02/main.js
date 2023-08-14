// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumulator (a){
    let sum =0;
    
    this.read = sum + a
    this.currentValue = this.read

    this.show = function (){
        alert ('currentValue :' + this.currentValue )
    }

}

let newValue1 = new Accumulator("asdf");
newValue1.show();
newValue1 = new Accumulator("150");
newValue1.show();
// let newValue3 = new Accumulator("lol");




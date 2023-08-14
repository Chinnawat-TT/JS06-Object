// ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign


// ```js
const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD'
};

// ```

//---------------------------------------------------------
// for...in...loop
// 
// const newNotbook ={}

// for(let key in notebook){

//     newNotbook[key]=notebook[key];
// }
// console.log(notebook);
// console.log(newNotbook);

//-----------------------------------------------------------
// object assign

// const secNotebook = {}
// Object.assign(secNotebook,notebook);

// console.log(notebook);
// console.log(secNotebook);

const ndNotebook = Object.assign({},notebook)

console.log(notebook)
console.log(ndNotebook)
  


// const name = ['shiv','kain','khali'];
// const [a,b,c] = name;
// console.log(a);
// console.log(b);
// console.log(c);

// const [car,,suv] = name;
// console.log(car)
// console.log(suv)



// function calculate(a,b){
//     const add = a+b;
//     const sub = a-b;
//     const mul = a*b;
//     const div = a/b;
//     return[add,sub,mul,div];
// }
// const [add,sub,mul,div] = calculate(5,2);
// console.log(add);
// console.log(mul);
// console.log(sub);
// console.log(div);


// *********************OBJECT****************************
// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red'
//   }
  
//   myVehicle(vehicleOne);
  
//   function myVehicle({type, color, brand, model}) {
//     const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
//     console.log(message);
//   }


//   const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red',
//     registration: {
//       city: 'Houston',
//       state: 'Texas',
//       country: 'USA'
//     }
//   }
  
//   myVehicle(vehicleOne)
  
//   function myVehicle({ model, registration: { state } }) {
//     const message = 'My ' + model + ' is registered in ' + state + '.';
//     console.log(message);
//   }
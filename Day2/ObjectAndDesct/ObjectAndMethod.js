 let obj = {name: "Rahul" , age:"45" , value:"Top" ,gender:"M"};
 console.log(obj);
 obj["fullname"] = function () {return this.name + " " + this.value};
 console.log(obj.fullname());

//  const person = new Object();
//  person.firstname = "Rahul";
//  person.lastname = "Kumar";
//  person.age = 45;
//  person.gender = "M";
//  console.log(person);
//  const zzzz = person;
//  console.log(zzzz.age);

// person.firstname + " is " + person.age + " years old.";
// person["firstname"] + " is " + person["age"] + " years old.";

// var obj ={ name:"Yogesh",
//            lastname:"Sharma",
//            age:50,
//            cars:{
//             car1: "Mustang",
//             car2: "BMW",
//             car3: "Ferari"
//            }};

// console.log(obj.cars.car1)
// console.log(obj.cars["car2"])
// console.log(obj["cars"]["car3"])

// const obj = {
//     name: "Mohan",
//     lastname: "Lal",
//     fullname: function(){
//         return this.name + " " + this.lastname;
//     },
//     cars:[
//         {name:"Ford",model:["focus","mustang"]},
//         {name:"hero",model:["herohonda","shine"]},
//         {name:"tvs",model:["puch","victor"]},
//     ]
    
// }

// for(var i in obj.cars){
//     console.log(obj.cars[i].name);
//     for( var j in obj.cars[i].model){
//         console.log(obj.cars[i].model[j]);
//     }
// }
// console.log(obj.fullname());

// let name = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let x = name.toUpperCase();
// let y = name.toLowerCase();
// console.log(x);
// console.log(y);


// myFather.name = function () {
//     return this.firstName + " " + this.lastName;
//   };

//   function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.name = function() {
//       return this.firstName + " " + this.lastName;
//     };
//   }



//   new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object

// *********************Function Call********************

// const person = {
//     fullname: function(){
//         return this.firstname + " " + this.lastname
//     }
// }
// const person1 = {
//     firstname:"Ram",
//     lastname:"Palla"
// }

// const person2 = {
//     firstname:"Raju",
//     lastname:"Kumar"
// }
// var a = person.fullname.call(person1);
// var b = person.fullname.call(person2);

// console.log(a);
// console.log(b);



// const perso = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const perso1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.call(perso1, "Oslo", "Norway");


//   *********************Function Apply*******************


// const person = {
//     fullname: function(){
//         return this.firstname + " " + this.lastname;
//     }
// }

// const person1 = {
//     firstname:"Oggy",lastname:"Adityanath"
// }
// console.log(person.fullname.apply(person1))

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   console.log(person.fullName.apply(person1, ["Oslo", "Norway"]))

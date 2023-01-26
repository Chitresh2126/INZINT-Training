// 

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//   }
//   document.getElementById("demo").innerHTML = toCelsius(77);

// Objects

// const car = {type:"Fiat", model:"500", color:"white"};

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };



// Do Not Declare Strings, Numbers, and Booleans as Objects!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

// x = new String();        // Declares x as a String object
// y = new Number();        // Declares y as a Number object
// z = new Boolean();       // Declares z as a Boolean object



// Event	Description
// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.slice(3,23);
// let length = text.substring(20,23);
let length = text.substr(2,5);
console.log(length);

let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
ll
let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "W3Schools");
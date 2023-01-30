// var z,a = 50;
// console.time("Test")  //start time
// console.log(['a','d','c'])   //array
// console.table(['a','d','c'])   // show array in table form
// console.error("Somthing went wrong")   // produce error
// console.warn("Somthing ")   // show warning
// console.warn("went ")      // show warning
// console.warn("wrong ")     // show warning
// console.clear("wrong ")       // clear console
// console.timeEnd("Test")      //  end time in milisec
// Itteration condition
// console.log(z = (a != 50)? "hello you are write":"Oops you are wrong");
// var a = confirm("What are you looking for!")
// alert(a);
// var a = prompt("What is your name");
// alert(a);

// < button onclick="hello()"></button>
// ondblclick  //doubleclick
// oncontextmenu  //right click
// onmouseenter  //mouse hover
// onmouseout  //mouse out
// onmousedown  //mouse down
// onmouseup  //mouse up
// onkeypress  //key press
// onkeyup  //key up
// onload  //load
// onunload  //unload
// onresize  //resize
// onscroll  //scroll


// for (let i = 0; i < 5; i++) {
//     let n = 1;
//     for (let j = 0; j < i; j++) {
//         console.log(n);
//         n++;
//     }
//     console.log("\t")
// } 

// let arr = new Array(1,10,"Hi",5);
// console.log(arr[2]);
// console.log(arr);
// console.table(arr);

// let arr = [['a','d','c'],
// ['a','d','c'],['a','d','c']];
// console.table(arr);

// delete arr[1];

// *******************************************************************
// let arr = [1,8,44,5,32,7,32,15];
// let str = ["Ram","Shyam","Kalu"];
// const str = ["Ram","Shyam", "Kalu"];

// For number

// let arr1 = arr.sort(function(a,b){return a - b;}); 
// console.log(arr1 + " ");
// console.log(str.sort() + " ");
// let arr1 = arr.reverse();
// let str1 = str.reverse();
// console.log(arr1 + " ");
// console.log(str1 + " "); 

// arr.push(100);
// arr.pop();
// str.push("Naman");
// let str1 = arr.pop();
// str.shift();
// str.unshift("Dhoom");
// arr.shift();
// arr.unshift(1000);

// console.log(arr);
// console.log(str);

// let arr1 = [121,151];
// let str1  = ["lal" , "AAnhivb"];
// let newone = str.concat(str1);
// let newone = arr.concat(arr1);
// let newone = arr.join(" / ");
// let newone = str.slice(0,1);   // 1 is not include
// splice(index,howmany,"new value");
// str.splice(1,0,"mena");    // not store the value
// var oo = Array.isArray(str);
// var b = arr.indexOf(44);
// var b = arr.lastIndexOf(32);
// var b = str.includes("Ram");


// var b = arr.some(checkAdult);   // for loop purpose
// var b = arr.every(checkAdult);   // for loop purpose all correct
// var b = arr.find(checkAdult);   // for loop purpose first element
// var b = arr.findIndex(checkAdult);   // for loop purpose
// var b = arr.filter(checkAdult);   // for loop purpose print all value
// console.log(b);
// function checkAdult(age){
//     return age >= 50;
// }

// str.toString();
// str.valueOf();
// str.fill("Ram");  // print the Ram to all indexes

// str.forEach(function (value,index){
//     console.log(value + " " + index)
// })

// ************************OBJECT*********************
// var person = new Object();
// person.name = "Ram";
// person.surname = "Kumar";
// person.age = 15;
// console.log(person);
// console.log(person.age);
// console.log(person['age']);

// ***********************MAP**************************
// let a = [1,2,3,4,5,6];
// var b = a.map(function(x){
//     return x*10;
// })
// console.log(b)

// var na = "java Script is a language";
// var a = na.startsWith("java");
// var ar = na.endsWith("language");
// var ar1 = na.search("language");  // position
// var ar1 = na.match(/is/g);  // each element
// var ar1 = na.replace("java","Java");  
// var ar1 = na.trim();    //remove spaces
// console.log(a);
// console.log(ar);
// console.log(ar1);

// var a = na.charCodeAt("a");    //ASCII code
// var a = String.fromCharCode(65);    //ASCII code
// var a = na.split(" ");    
// var a = na.repeat(2);
// var a = na.slice(3,5);    //last is not include
// var a = na.substr(3,5);    //last is use how many character
// var a = na.substring(3,5);    //last is not include
// var a = na.toString(3,5);  


// ************************NUMBER**********************
// var a = 99.464546;
// var num = Number(a);
// var num = parseInt(a);
// var num = parseFloat(a);
// var num = isFinite(a);
// var num = Number.isInteger(a);
// var num = a.toFixed(3);
// var num = a.toPrecision(3);
// console.log(num);

// ****************************DATE*************************
// var now  = new Date();
// console.log(now);
// console.log(now.toDateString());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());


// querySelector

// setInterval(function_name, 1000);
// clearInterval(id);

// *********************setTimeout********************
// var id = setTimeout(Anime,5000);
// function Anime(){
//     var target = document.getElementById("test");
//     target.style.width = "500px";
// }
// function stopAnimation(){
//     clearTimeout(id);
// }
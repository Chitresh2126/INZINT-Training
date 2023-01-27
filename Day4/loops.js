// let n = 7;
// let string = "";

// star pattern

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//             string += "*";
//     }
//     string += "\n";
// }

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//             string += "*";
//     }
//     string += "\n";
// }


// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n-i; j++) {
//             string += "*";
//     }
//     string += "\n";
// }

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//            if(i===0 || i===n-1){
//             string += "*";
//            }
//            else if(j===0 || j===n-1){
//                 string += "*";
//             }
//             else{
//                  string += " ";
//             }           
//     }
//     string += "\n";
// }
// let num = 4;

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//             if(i===0 || i===n-1){
//                             string += num;
//                            }
//                            else if(j===0 || j===n-1){
//                                 string += num;
//                             }
//                             else{
//                                 string += " ";
//                             }
//     }
//     string += "\n";
// }
// console.log(string);


// let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   // printing star
//   for (let j = 0; j < i; j++) {
//     if(i === n) {
//       string += "*";
//     }
//     else {
//       if (j == 0 || j == i - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);



// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);



// let n = 5;
// let string = "";
// // External loop
// for (let i = 0; i < n; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);



// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]%3===0){
//         console.log(arr[i])
//     }
// }



// let arr = [1,2,3,3,8,6,4,5,6,7,8,9,10];
// let arr1 = arr.sort();
// console.log(arr1)



// let arr = [1,1,2,3,5,6,6,7,8,8];
// let arr2 = arr.filter((value, index)=>{
//     return  arr.indexOf(value) === index;
// });
// console.log(arr2);



// let arr = [1,1,2,3,5,6,6,7,8,8];
// const genuinenumber = (v,i) => {
//     return arr.indexOf(v)===i;
// }
// let arr1 = arr.filter(genuinenumber);
// console.log(arr1)
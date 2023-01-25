// let myPromise = new Promise(function(myResolve, myReject){
//     myResolve();
//     myReject();
// });

// myPromise.then(
//     function(value){console.log("Success")},
//     function(error){console.log("NOTSuccess")}
// );


// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 10;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//          function(value){console.log("Success")},
//          function(error){console.log("NOTSuccess")}
//   );


// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love You !!"); }, 3000);
//   });


// async function myFunction() {
//     return "Hello";
//   }
//   myFunction().then(
//          function(value){console.log("Success")},
//          function(error){console.log("NOTSuccess")}
//   );


// async function myfunction(){
//     const myPromise = new Promise(function(accepted,rejected){
//         accepted("This will accept now !");
//     });

//     console.log(await myPromise);
// }

// myfunction();


// async function getUserDetail() {
//      const user = await fetch("https://type.fit/api/quotes");
//      const userData = await user.json();
//      console.log(userData);}
//      getUserDetail();
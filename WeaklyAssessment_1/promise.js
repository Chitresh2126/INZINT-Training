function reqq(complete){
    return new Promise(function(resolve,reject){
        console.log("Data is processing");
        setTimeout(() =>{
            if(complete){
            resolve("Its working");
        }
        else{
            reject("The request is rejected");
        }
        },1000)    
    });
    }
reqq(true).then((result) =>  {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


function callback(value) {
      if (value) {
        console.log("It is working!");
      }
      else{
        console.log("Oops it is not working")
      }
    };
function check() {
  setTimeout(() => {
    callback(false);
  }, 1000);
}

let name = {
    firstname: "Chitresh",
    lastname: "Kumar",
    // printfullname : function(){
    //     console.log(this.firstname+ " " + this.lastname);
    // }
}
let printfullname = function(hometown){
    console.log(this.firstname+ " " + this.lastname);
}
printfullname(name,'Uttarpradesh');

let name2 ={
    firstname:"Sachin",
    lastname:"Tendulkar"
}

name.printfullname.call(name2);
printfullname(name,'Uttarpradesh');
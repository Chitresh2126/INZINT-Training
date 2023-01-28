const person1 = {
    firstname:"Raju",
    lastname:"Saini",
    fullname:function(){
        return this.firstname + " " + this.lastname;
    }
};
console.log(person1.fullname());
const person2 = {
    firstname:"Akshaya",
    lastname:"Bardwaj"
};
const funct = {
    fullname: function(){
        return this.firstname + " " + this.lastname
    }
}
// Bind
let namee = person1.fullname.bind(person2);
console.log(namee());

// Apply
console.log(person1.fullname.apply(person2));

//Call
var newname = funct.fullname.call(person2);

console.log(newname);

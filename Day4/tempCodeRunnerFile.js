

let arr = [1,1,2,3,5,6,6,7,8,8];
let arr2 = arr.filter((value, index)=>{
    return  arr.indexOf(value) === index;
});
console.log(arr2);
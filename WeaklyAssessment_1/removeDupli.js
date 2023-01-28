let arr = [21,21,45,89,64,56,56,89,56,67];
let arr1 = arr.filter((value, index)=>{
    return  arr.indexOf(value) === index;
});
console.log(arr1);

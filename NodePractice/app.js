const app = require('./index');

// var x = '20';
const arr = [2,4,7,1,3,8,3];
// console.log(app.z());

// arr.filter((item) => {
//     console.log(item);
// });

let result = arr.filter((item) => {
    return item === 3;
});
console.log(result);
function fibo(n) {
    if(n < 2) {
        return n;
    }
    else {
        return fibo(n-1) + fibo(n - 2);
    }
}
const n = 10;
// const n = 0;
if(n <=0) {
    console.log("Given number is not correct..");
}
else {
    for(let i = 0; i < n; i++) {
        console.log(fibo(i));
    }
}
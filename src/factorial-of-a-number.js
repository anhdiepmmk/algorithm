// Không có đệ quy
// function Factorial(n) {
//     if(n == 0) {return 1;} else {
//     let a = 1;
//     for(let i = 1; i <= n; i++) {
//         a *= i;
//     }
//     return a;
//     }
// }
// console.log(Factorial(5));

// Hàm đệ quy
function Factorial(n) {
    if(n == 0) { 
        return 1;
    } else {
    n *= Factorial(n - 1);
    }
    return n;
}

console.log(Factorial(5));


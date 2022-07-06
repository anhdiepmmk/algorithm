// Không có đệ quy
function factorialOfNumber(n) {
	if (n == 0) {
		return 1;
	} else {
		let element = 1;
		for (let i = 1; i <= n; i++) {
			element *= i;
		}
		return element;
	}
}
console.log(factorialOfNumber(5));

// Hàm đệ quy
/* function factorialOfNumber(n) {
    if(n == 0) { 
        return 1;
    } else {
    n *= factorialOfNumber(n - 1);
    }
    return n;
}

console.log(factorialOfNumber(5)); */

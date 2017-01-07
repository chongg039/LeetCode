function reverse(x) {
	let result = 0;
	let tmp = Math.abs(x);
	while (tmp != 0) {
		//result *= 10;
		//console.log(tmp);
		let newResult = (result * 10) + Math.floor(tmp % 10);
		//console.log(newResult);
		let tail = Math.floor((newResult - (x % 10))) / 10;
		if (tail != result) {
			break;
		}
		result = newResult;
		tmp = Math.floor(tmp / 10);
	}
	return x>=0 ? result : -result;
}

let y = reverse(12345);
console.log(y);
function main() {
	const num1 = [1, 2, 3, 4, 5];
	const num2 = [9, 8, 6, 7, 8];
	console.log("The two linked lists are : \n", num1, "\n", num2);

	let sum = addTwoNum(num1, num2);
	console.log("And the result is : \n", sum);
}

function addTwoNum(num1, num2) {
	let longNum = null, shortNum = null;

	if (num1.length >= num2.length) {
		longNum = num1;
		shortNum = num2;
	} else {
		longNum = num2;
		shortNum = num1;
	}

	// add each digit
	for (let i = 0; i < shortNum.length; i++) {
		longNum[longNum.length - 1 - i] += shortNum[shortNum.length - 1 - i];
	}

	carryDigit(longNum);

	return longNum;
}

function carryDigit(longNum) {
	for (let i = longNum.length - 1; i >= 1; i--) {
		if (longNum[i] >= 10) {
			longNum[i - 1] += Math.floor(longNum[i] / 10); //carry
			longNum[i] = longNum[i] % 10; // ramainder
		}

		if (longNum[0] > 10) {
			longNum.unshift(Math.floor(longNum[0] / 10));
			longNum[1] = longNum[1] % 10;
		}
	}
}

main();
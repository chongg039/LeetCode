function lengthOfSubstring(givenStr) {
	let array = givenStr.split("");
	let finalResult = [];
	for (let i = 0; i < array.length; i++) {
		let eachResult = [];
		eachResult.push(array[i]);
		for (let j = i+1; j < array.length; j++) {
			if (array[j] == array[j-1]) {
				break;
			}
			eachResult.push(array[j]);
		}
		finalResult[i] = eachResult;
	}
	return finalResult;
}

function findTheLongest(finalResult) {
	let arr = [];
	
	for (let i = 0; i <finalResult.length; i++) {
		arr[i] = finalResult[i].length;
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr[arr.length - 1];
}

const givenStr = "11123abbbcdr";
let eo = lengthOfSubstring(givenStr);
console.log("The given string is : ", givenStr);
console.log("And the longest substring's digit is : ", findTheLongest(eo));
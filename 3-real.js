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
	
	for (let i = 0; i <finalResult.length - 1; i++) {
		for (let j = finalResult.length - 1; j >= i; j--) {
			if (finalResult[j] < finalResult[j - 1]) {
				let temp = finalResult[j];
				finalResult[j] = finalResult[j - 1];
				finalResult[j - 1] = temp;
			}
		}
	}
	return finalResult;
}

const givenStr = "123abbbcdr";
let eo = lengthOfSubstring(givenStr);
console.log(findTheLongest(eo)[0]);
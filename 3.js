function splitStrToArr(givenStr) {
	let array = givenStr.split("");
	let result = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = i+1; j < array.length; j++) {
			if (array[j] == array[i]) {
				j = ++i;
			} 
		}
		result.push(array[i])
	}
	return result;
}

function main() {
	const givenStr = "111222333abcabcrdcab12bac";
	let result = splitStrToArr(givenStr);
	console.log(result);
}

main();
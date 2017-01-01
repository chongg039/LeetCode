function arrAdd() {
	// If need sort
	// var begin = 0;
	// var end = array.length - 1;
	const array = [9, 4, 1, 3, 5];
	console.log("The array is : " + array);

	let randNum1 = Math.floor(Math.random() * array.length);
	let randNum2 = Math.floor(Math.random() * array.length);

	result = array[randNum1] + array[randNum2];
	console.log("The random number is : " + result);

	console.log("And the array's indices are:");
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {

			sum = array[i] + array[j];

			if (sum == result) {
				a = array.indexOf(array[i]) + 1;
				b = array.indexOf(array[j]) + 1;
				console.log(a, b);
			}
		}
	}
}
arrAdd();
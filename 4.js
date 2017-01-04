function sortTwoArrs(arrA, arrB) {
	let m = arrA.length, n = arrB.length;
	let temp1, temp2 = null;
	if (m > n) {
		temp1 = arrA;
		arrA = arrB;
		arrB = temp1;

		temp2 = m;
		m = n;
		n = temp2;
	}

	let imin = 0, imax = m, half_len = (m + n + 1) / 2;
	while (imin <= imax) {
		i = (imin + imax) / 2;
		j = half_len - i;
		if (i < m && arrB[j-1] > arrA[i]) {
			imin = i + 1;
		} else if (i > 0 && arrA[i-1] > arrB[j]) {
			imax = i - 1;
		} else {
			if (i == 0) {
				max_of_left = arrB[j-1];
			} else if (j == 0) {
				max_of_left = arrA[i-1];
			} else {
				max_of_left = Math.max(arrA[i-1], arrB[j-1]);
			}

			if ((m + n) % 2 == 1) {
				return max_of_left;
			}

			if (i == m) {
				min_of_right = arrB[j];
			} else if (j == n) {
				min_of_right = arrA[i];
			} else {
				min_of_right = Math.min(arrA[i], arrB[j]);
			}

			return (max_of_left + min_of_right) / 2;
		}
	}
}

const arrA = [1, 3, 5, 7, 9];
const arrB = [5, 8, 11];
let result = sortTwoArrs(arrA, arrB);
console.log(result);
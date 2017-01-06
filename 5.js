// Manacher最大回文子串算法
function manacher(s) {
	// 初始化插入无关符号'#'
	// 解决长度奇偶性带来的对称轴位置问题
	let arr = s.split('');
	s = '#' + arr.join('#') + '#';

	let p = [], mx = 0, id = 0;
	for (let i = 0; i <s.length; i++) {
		p[i] = 0;
	}
	// 得到所有子回文字符串的长度组成的数组
	for (let i = 0; i < s.length; i++) {
		// mx为当前边界值的最大回文子串的边界值
		p[i] = mx > i ? Math.min(p[2*id-i], mx-i) : 1;
		
		// 超出半径的判断
		while ((s[i + p[i]] == s[i - p[i]]) && s[i + p[i]]) {
			p[i]++;
		}

		// 获取到边界最大的回文子串的中心位置以及边界值，保证后续迭代可以做以上快捷处理 
		if (i + p[i]) {
			id = i;
			mx = id + p[i];
		}
	}
	// 数组中的最大值减去'1'便是最大回文子串的长度（因为'#'）
	return Math.max.apply(Math, p) - 1;
}

const string = 'cabbbaabbbabbdac';
let result = manacher(string);
console.log(result);
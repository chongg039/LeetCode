// JS中不含int类型，所有数字用32位浮点数表示
// 内建的 Number(string) 方法能实现atoi功能
// parseInt(string) 方法可以识别string中的数字并输出，包括符号位
let a = "123"
undefined
> let b = new Number(a)
undefined
> console.log(b)
[Number: 123]
undefined
> let c = "-123";
undefined
> console.log(Number(c))
-123
undefined
> console.log(0.2 + 0.1)
0.30000000000000004
undefined
> parseInt("123abc")
123
> parseInt("-123abc")
-123
> 

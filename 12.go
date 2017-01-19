package main

import (
	"fmt"
)

func intToRoman(num int) string {
	var res string = ""
	roman := [7]byte{'M', 'D', 'C', 'L', 'X', 'V', 'I'}
	value := [7]int{1000, 500, 100, 50, 10, 5, 1}

	for i := 0; i < 7; i += 2 {
		x := num / value[i]

		switch {
		case x < 4:
			for j := 1; j <= x; j++ {
				res += string(roman[i])
			}
		case x == 4:
			res += string(roman[i] + roman[i-1])
		case x > 4 && x < 9:
			res += string(roman[i-1])
			for j := 6; j <= i; j++ {
				res += string(roman[i])
			}
		case x == 9:
			res += string(roman[i] + roman[i-2])
		}
		num %= value[i]
	}
	return res
}

func main() {
	const num int = 3210
	result := intToRoman(num)
	fmt.Println(result)
}

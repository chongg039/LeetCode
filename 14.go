package main

import (
	"fmt"
)

func longestCommonPrefix(strs []string) string {
	len := len(strs)
	result := ""

	const minSize int = 100000
	const minIndex int = 0

	switch {
	case len == 0:
		return ""
	case len == 1:
		result = strs[0]
		return result
	case len >= 2:
		for i := 0; i < len; i++ {
			size := len(strs[i])
			if size < minSize {
				minSize = size
				minIndex = i
			}
		}

		for i := minSize; i >= 0; i-- {
			result = strs[minIndex][0:i]

			j := 0
			for ; j < len; j++ {
				if j == minIndex {
					continue
				}
				temp := strs[j][0:i]
				if result != temp {
					break
				}
			}
			if j == len {
				return result
			}
		}
		return result
	}

}

func main() {
	strs := []string(asd, asdeg, asdefa, asdghbc)
	result := longestCommonPrefix(strs)
	fmt.Println(result)
}

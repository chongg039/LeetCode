package main

import (
	"fmt"
)

func longestCommonPrefix(strs []string) string {
	length := len(strs)
	var result string

	var minSize int = 100000
	var minIndex int = 0

	switch {
	case length == 0:
		return ""
	case length == 1:
		result = strs[0]
		return result
	case length >= 2:
		for i := 0; i < length; i++ {
			size := len(strs[i])
			fmt.Println(size)
			if size < minSize {
				minSize = size
				minIndex = i
			}
		}

		for i := minSize; i >= 0; i-- {
			result = strs[minIndex][0:i]

			j := 0
			for ; j < length; j++ {
				if j == minIndex {
					continue
				}
				temp := strs[j][0:i]
				if result != temp {
					break
				}
			}
			if j == length {
				return result
			}
		}
		return result
	default:
		return "error!"
	}

}

func main() {
	strs := []string{"asd", "asdeg", "asdefa", "asdghbc"}
	result := longestCommonPrefix(strs)
	fmt.Println(result)
}

package main

import (
	"fmt"
)

func Min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func Max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func mostWater(height []int) int {
	maxArea, l, r := 0, 0, len(height)-1
	for l < r {
		maxArea = Max(maxArea, Min(height[l], height[r])*(r-l))
		if height[l] < height[r] {
			l++
		} else {
			r--
		}
	}
	return maxArea
}

func main() {
	height := []int{1, 2, 5, 7, 1, 5}

	result := mostWater(height)

	fmt.Println(result)
}

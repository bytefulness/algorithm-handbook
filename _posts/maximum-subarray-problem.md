---
title: "Maximum Subarray Problem"
category: "Divide and Conquer"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/bfMaximumSubarray.js"
timeComplexity:
  normal: n
  sub: 2
---

# Maximum subarray problem

The maximum subarray problem is the task of finding the contiguous
subarray within a one-dimensional array, `a[1...n]`, of numbers
which has the largest sum, where,

![Maximum subarray](https://wikimedia.org/api/rest_v1/media/math/render/svg/e8960f093107b71b21827e726e2bad8b023779b2)

![Maximum subarray](https://www.geeksforgeeks.org/wp-content/uploads/kadane-Algorithm.png)

## Example

The list usually contains both positive and negative numbers along
with `0`. For example, for the array of
values `−2, 1, −3, 4, −1, 2, 1, −5, 4` the contiguous subarray
with the largest sum is `4, −1, 2, 1`, with sum `6`.

## Solutions

- Brute Force solution O(n^2^) [![Edit maximum-subarray-brute-force](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/heuristic-elgamal-vt9w44?fontsize=14&hidenavigation=1&theme=dark)
- Divide and Conquer solution O(n^2^) [![Edit maximum-subarray-divide-and-counquer](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/brave-rgb-6invjv?fontsize=14&hidenavigation=1&theme=dark)
- Dynamic Programming solution O(n) [![Edit compassionate-flower-vrypke](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/compassionate-flower-vrypke?fontsize=14&hidenavigation=1&theme=dark)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Maximum_subarray_problem)
- [YouTube](https://www.youtube.com/watch?v=ohHWQf1HDfU&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [GeeksForGeeks](https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/)
- [LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/discuss/1595195/C++Python-7-Simple-Solutions-w-Explanation-or-Brute-Force-+-DP-+-Kadane-+-Divide-and-Conquer)

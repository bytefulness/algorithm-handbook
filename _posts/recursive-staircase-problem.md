---
title: "Recursive Staircase Problem"
category: "Dynamic Programming"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/recursiveStaircaseDP.js"
timeComplexity:
  normal: O(n)
---

## The Problem

There are `n` stairs, a person standing at the bottom wants to reach the top. The person can climb either `1` or `2` stairs at a time. _Count the number of ways, the person can reach the top._

![](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/nth-stair.png)

## The Solution

This is an interesting problem because there are several ways of how it may be solved that illustrate different programming paradigms.

## Complexity

| Name                                    | Time complexity | Space complexity | Algorithm Link                                                                                                            |
| --------------------------------------- | :-------------: | :--------------: | ------------------------------------------------------------------------------------------------------------------------- |
| **Brute Force Recursive Solution**      |     O(2^n^)     |      `O(1)`      | [Brute Force Recursive Solution](https://github.com/eakyel/javascript-algorithms/blob/main/recursiveStaircaseBF.js)       |
| **Recursive Solution With Memoization** |     `O(n)`      |      `O(n)`      | [Recursive Solution With Memoization](https://github.com/eakyel/javascript-algorithms/blob/main/recursiveStaircaseMEM.js) |
| **Dynamic Programming Solution**        |     `O(n)`      |      `O(n)`      | [Dynamic Programming Solution](https://github.com/eakyel/javascript-algorithms/blob/main/recursiveStaircaseDP.js)         |
| **Iterative Solution**                  |     `O(n)`      |      `O(1)`      | [Iterative Solution](https://github.com/eakyel/javascript-algorithms/blob/main/recursiveStaircaseIT.js)                   |

## References

- [On YouTube by Gayle Laakmann McDowell](https://www.youtube.com/watch?v=eREiwuvzaUM&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=81&t=0s)
- [GeeksForGeeks](https://www.geeksforgeeks.org/count-ways-reach-nth-stair/)

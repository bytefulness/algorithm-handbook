---
title: "Fibonacci Number"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/fibonacci.js"
category: "Dynamic Programming"
timeComplexity:
  normal: O(n)
---

In mathematics, the Fibonacci numbers are the numbers in the following
integer sequence, called the Fibonacci sequence, and characterized by
the fact that every number after the first two is the sum of the two
preceding ones:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...`

A tiling with squares whose side lengths are successive Fibonacci numbers

![Fibonacci](https://upload.wikimedia.org/wikipedia/commons/d/db/34%2A21-FibonacciBlocks.png)

The Fibonacci spiral: an approximation of the golden spiral created by drawing circular arcs connecting the opposite corners of squares in the Fibonacci tiling;[4] this one uses squares of sizes 1, 1, 2, 3, 5, 8, 13 and 21.

![Fibonacci Spiral](https://upload.wikimedia.org/wikipedia/commons/2/2e/FibonacciSpiral.svg)

## Algorithm for Iterative Fibonacci Series

```
Procedure Iterative_Fibonacci(n):
    int f0, f1, fib
    f0 = 0
    f1 = 1
    display f0, f1
    for int i := 1 to n:
        fib := f0 + f1
        f0 := f1
        f1 := fib
        display fib
    END for loop
END Iterative_Fibonacci
```

## Algorithm for Recursive Fibonacci Series

```
Procedure Recursive_Fibonacci(n)
    int f0, f1
    f0 := 0
    f1 := 1
    if(n <= 1):
        return n
    return Recursive_Fibonacci(n-1) + Recursive_Fibonacci(n-2)
END Recursive_Fibonacci
```

## Complexity

| Name                                  |     Time complexity      | Space complexity |
| ------------------------------------- | :----------------------: | :--------------: |
| **Using recursion**                   | `T(n) = T(n-1) + T(n-2)` |      `O(n)`      |
| **Using DP**                          |          `O(n)`          |      `O(1)`      |
| **Space optimization of DP**          |          `O(n)`          |      `O(1)`      |
| **Using the power of matrix method**  |          `O(n)`          |      `O(1)`      |
| **Optimized matrix method**           |        `O(log n)`        |    `O(log n)`    |
| **Recursive method in O(log n) time** |       `O(log n) `        |      `O(n)`      |
| **Using direct formula**              |       `O(log n) `        |      `O(1)`      |
| **DP using memoization**              |         `O(n) `          |      `O(1)`      |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_number)

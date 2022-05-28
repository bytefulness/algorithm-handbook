---
title: "Bubble Sort"
category: "Brute Force"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/BubbleSort.js"
timeComplexity:
  normal: n
  sup: 2
---

Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order (ascending or descending arrangement). The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

![](/images/brute-force/bubble-sort/buble-sort.gif/)

## Working of Bubble Sort

Suppose we are trying to sort the elements in **ascending order**.

1. First Iteration (Compare and Swap)

- Starting from the first index, compare the first and the second elements.
- If the first element is greater than the second element, they are swapped.
- Now, compare the second and the third elements. Swap them if they are not in order.
- The above process goes on until the last element.

![Compare the Adjacent Elements](https://cdn.programiz.com/cdn/farfuture/kn1zM7ZGIj60jcTe3mv8gAtbrvFHqxgqfQ7F9MdjPuA/mtime:1582112622/sites/tutorial2program/files/Bubble-sort-0.png)

2. Remaining Iteration

The same process goes on for the remaining iterations.

After each iteration, the largest element among the unsorted elements is placed at the end.

![Put the largest element at the end](https://cdn.programiz.com/cdn/farfuture/LzbPYkOXS-DjqwLqtIrixMZCD1XLdU-JWWedrL1YIpw/mtime:1582112622/sites/tutorial2program/files/Bubble-sort-1.png)

In each iteration, the comparison takes place up to the last unsorted element.

![Compare the adjacent elements](https://cdn.programiz.com/cdn/farfuture/-C5A9EpPrCAwR2TFQlZhG0uy5aSKmq-ewMaWyXp8_a8/mtime:1582112622/sites/tutorial2program/files/Bubble-sort-2.png)

The array is sorted when all the unsorted elements are placed at their correct positions.

![The array is sorted if all elements are kept in the right order](https://cdn.programiz.com/cdn/farfuture/NnXQeMGuMJnIH0qzC1C5n7r4FOynP9vu3cWEdCK5Qjk/mtime:1582112622/sites/tutorial2program/files/Bubble-sort-3.png)

## Pseudocode

```
bubbleSort(array)
  for i <- 1 to indexOfLastUnsortedElement-1
    if leftElement > rightElement
      swap leftElement and rightElement
end bubbleSort
```

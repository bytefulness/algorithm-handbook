---
title: "Quick Sort"
category: "Divide and Conquer"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/QuickSort.js"
timeComplexity:
  normal: n
  sup: 2
---

Quicksort is a divide and conquer algorithm.
Quicksort first divides a large array into two smaller
sub-arrays: the low elements and the high elements.
Quicksort can then recursively sort the sub-arrays

The steps are:

1. Pick an element, called a pivot, from the array.
2. Partitioning: reorder the array so that all elements with
   values less than the pivot come before the pivot, while all
   elements with values greater than the pivot come after it
   (equal values can go either way). After this partitioning,
   the pivot is in its final position. This is called the
   partition operation.
3. Recursively apply the above steps to the sub-array of
   elements with smaller values and separately to the
   sub-array of elements with greater values.

Animated visualization of the quicksort algorithm.
The horizontal lines are pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Working of Quicksort Algorithm

### 1. Select the Pivot Element

There are different variations of quicksort where the pivot element is selected from different positions. Here, we will be selecting the rightmost element of the array as the pivot element.
![Select a pivot element](https://cdn.programiz.com/cdn/farfuture/7qpYqe1UtqYbKzIBY_W8ljqkUz9iS6jZGobim6LDhtM/mtime:1582112622/sites/tutorial2program/files/quick-sort-0.1_0.png)

### 2. Rearrange the Array

Now the elements of the array are rearranged so that elements that are smaller than the pivot are put on the left and the elements greater than the pivot are put on the right.
![Put all the smaller elements on the left and greater on the right of pivot element](https://cdn.programiz.com/cdn/farfuture/1Xn_e4xeHQjOsXExVhTgVbggPgpMk9WV4Z8gxmZgdyg/mtime:1582112622/sites/tutorial2program/files/quick-sort-0.2_0.png)

Here's how we rearrange the array:

- -A pointer is fixed at the pivot element. The pivot element is compared with the elements beginning from the first index.
  ![Comparison of pivot element with element beginning from the first index](https://cdn.programiz.com/cdn/farfuture/zaN86RZ0WfV0PhWpWDhis-f9lWlfgKJt_liYoGjZAIk/mtime:1617189498/sites/tutorial2program/files/quick-sort-partition-first-step.png)

- -If the element is greater than the pivot element, a second pointer is set for that element.
  ![If the element is greater than the pivot element, a second pointer is set for that element.](https://cdn.programiz.com/cdn/farfuture/RzFeResnC88JRu9IFh2YqUKZMXltQ51EeiioINCMcEA/mtime:1617189487/sites/tutorial2program/files/quick-sort-partition-second-step.png)

- -Now, pivot is compared with other elements. If an element smaller than the pivot element is reached, the smaller element is swapped with the greater element found earlier.
  ![Pivot is compared with other elements.](https://cdn.programiz.com/cdn/farfuture/QA-TsXFkcz3cNyJikcbIWxepFVDu8ntl220KzlG8zdw/mtime:1617189492/sites/tutorial2program/files/quick-sort-partition-third-step.png)

- -Again, the process is repeated to set the next greater element as the second pointer. And, swap it with another smaller element.
  ![The process is repeated to set the next greater element as the second pointer.](https://cdn.programiz.com/cdn/farfuture/tMmdAbX5gev9K20XI1kzQ3n932vSjnN1MszZouHV7Yc/mtime:1617189469/sites/tutorial2program/files/quick-sort-partition-fourth-step.png)

- -The process goes on until the second last element is reached.
  ![The process goes on until the second last element is reached.](https://cdn.programiz.com/cdn/farfuture/MNYV977xf4N3cgCpAtkB1KDyPqyG9OvlKSkHSdd0kys/mtime:1617189475/sites/tutorial2program/files/quick-sort-partition-fifth-step.png)

- -Finally, the pivot element is swapped with the second pointer.
  ![The process goes on until the second last element is reached.](https://cdn.programiz.com/cdn/farfuture/lAMcHRRzL8TJEh7bjY3rAufTTy3y5-o4Nt0z5L1AB8A/mtime:1617189481/sites/tutorial2program/files/quick-sort-partition-sixth-step.png)
  `

### 3. Divide Subarrays

Pivot elements are again chosen for the left and the right sub-parts separately. And, `step 2` is repeated.
![Select pivot element of in each half and put at correct place using recursion](https://cdn.programiz.com/cdn/farfuture/dK3pGyiHqFZOYklwABPBZ4zq_VZU1dMWBIbWhHJ-Rgw/mtime:1617189464/sites/tutorial2program/files/quick-sort_1.png)

The subarrays are divided until each subarray is formed of a single element. At this point, the array is already sorted.

## Pseduocode

```
quickSort(array, leftmostIndex, rightmostIndex)
  if (leftmostIndex < rightmostIndex)
    pivotIndex <- partition(array,leftmostIndex, rightmostIndex)
    quickSort(array, leftmostIndex, pivotIndex - 1)
    quickSort(array, pivotIndex, rightmostIndex)

partition(array, leftmostIndex, rightmostIndex)
  set rightmostIndex as pivotIndex
  storeIndex <- leftmostIndex - 1
  for i <- leftmostIndex + 1 to rightmostIndex
  if element[i] < pivotElement
    swap element[i] and element[storeIndex]
    storeIndex++
  swap pivotElement and element[storeIndex+1]
return storeIndex + 1
```

## Complexity

| Name           |     Best      |    Average    |     Worst     | Memory |
| -------------- | :-----------: | :-----------: | :-----------: | :----: |
| **Quick sort** | n&nbsp;log(n) | n&nbsp;log(n) | n<sup>2</sup> | log(n) |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

---
title: "Binary Search"
category: "Divide and Conquer"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/binarySearch.js"
timeComplexity:
  normal: log(n)
---

In computer science, binary search, also known as half-interval
search, logarithmic search, or binary chop, is a search algorithm
that finds the position of a target value within a sorted
array. Binary search compares the target value to the middle
element of the array; if they are unequal, the half in which
the target cannot lie is eliminated and the search continues
on the remaining half until it is successful. If the search
ends with the remaining half being empty, the target is not
in the array.

> Binary search can be implemented only on a sorted list of items. If the elements are not sorted already, we need to sort them first.

## Binary Search Working

Binary Search Algorithm can be implemented in two ways which are discussed below.

- Iterative Method
- Recursive Method

The recursive method follows the divide and conquer approach.

The general steps for both methods are discussed below.

1. The array in which searching is to be performed is:

![Initial array](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-initial-array.png)

Let `x = 4` be the element to be searched.

2. Set two pointers low and high at the lowest and the highest positions respectively.

![Binary Search](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-set-pointers.png)

3. Find the middle element `mid` of the array ie. `arr[(low + high)/2] = 6`.

![Mid element](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid.png)

4. If `x == mid`, then return mid.Else, compare the element to be searched with m.
5. If `x > mid`, compare `x` with the middle element of the elements on the right side of `mid`. This is done by setting `low` to `low = mid + 1`.
6. Else, compare `x` with the middle element of the elements on the left side of `mid`. This is done by setting `high` to `high = mid - 1`.

![Finding mid element](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-find-mid.png)

7. Repeat steps 3 to 6 until low meets high.
   ![Binary Search](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid-again.png)

8. `x = 4` is found.

![Found](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-found.png)

## Binary Search Algorithm

### Iteration Method

```
do until the pointers low and high meet each other.
    mid = (low + high)/2
    if (x == arr[mid])
        return mid
    else if (x > arr[mid]) // x is on the right side
        low = mid + 1
    else                       // x is on the left side
        high = mid - 1

```

### Recursive Method

```
binarySearch(arr, x, low, high)
    if low > high
        return False
    else
        mid = (low + high) / 2
        if x == arr[mid]
            return mid
        else if x > arr[mid]        // x is on the right side
            return binarySearch(arr, x, mid + 1, high)
        else                               // x is on the right side
            return binarySearch(arr, x, low, mid - 1)
```

## Complexity

| Name              |  Best  |  Average   |   Worst    | Space Complexity |
| ----------------- | :----: | :--------: | :--------: | :--------------: |
| **Binary Search** | `O(1)` | `O(log n)` | `O(log n)` |      `O(1)`      |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [YouTube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

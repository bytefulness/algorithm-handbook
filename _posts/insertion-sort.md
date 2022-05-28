---
title: "Insertion Sort"
category: "Sorting"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/InsertionSort.js"
timeComplexity:
  normal: n
  sup: 2
---

Insertion sort is a simple sorting algorithm that builds
the final sorted array (or list) one item at a time.
It is much less efficient on large lists than more
advanced algorithms such as quicksort, heapsort, or merge
sort.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## Working of Insertion Sort

Suppose we need to sort the following array.

![Initial array](https://cdn.programiz.com/cdn/farfuture/K-kSm72ww4_afH0mQJDuR3Y-fPZYgBYo_Pclx7WlYUo/mtime:1582112622/sites/tutorial2program/files/Frame%204_0.png)

_Initial array_

1. The first element in the array is assumed to be sorted. Take the second element and store it separately in `key`.

Compare `key` with the first element. If the first element is greater than `key`, then `key` is placed in front of the first element.

![If the first element is greater than key, then key is placed in front of the first element.](https://cdn.programiz.com/cdn/farfuture/l-X2VCkF2rp4i0X8mZX6BGJL_FQW9EL8PkKhBswQfpc/mtime:1582112622/sites/tutorial2program/files/Insertion-sort-0_1.png)

_If the first element is greater than key, then key is placed in front of the first element._

2. Now, the first two elements are sorted.

Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array.

![Place 1 at the beginning](https://cdn.programiz.com/cdn/farfuture/MqcrLAaQHEhcuJTmF_m712GG_wMemTY9AID0J9w4T6E/mtime:1582112622/sites/tutorial2program/files/Insertion-sort-1_1.png)

_Place 1 at the beginning_

3. Similarly, place every unsorted element at its correct position.

![Place 4 behind 1](https://cdn.programiz.com/cdn/farfuture/hWFdFWWU0lZD2xWGz0CoMDESnjYa9Wg1HwpH99jTTH0/mtime:1582112622/sites/tutorial2program/files/Insertion-sort-2_2.png)

_Place 4 behind 1_

![Place 4 behind 1](https://cdn.programiz.com/cdn/farfuture/TxAcrgHKfahw_BPEIKwCWB9BY2GNiI91yzWeetMfG9Q/mtime:1582112622/sites/tutorial2program/files/Insertion-sort-3_2.png)

_Place 3 behind 1 and the array is sorted_

## Pseudocode

```
insertionSort(array)
  mark first element as sorted
  for each unsorted element X
    'extract' the element X
    for j <- lastSortedIndex down to 0
      if current element j > X
        move sorted element to the right by 1
    break loop and insert X here
end insertionSort
```

## Complexity

| Name               | Best | Average | Worst | Memory |
| ------------------ | :--: | :-----: | :---: | :----: |
| **Insertion sort** |  n   |  n^2^   | n^2^  |   1    |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)

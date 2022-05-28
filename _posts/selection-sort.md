---
title: "Selection Sort"
category: "Brute Force"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/SelectionSort.js"
timeComplexity:
  normal: n
  sup: 2
---

Selection sort is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

![](/images/brute-force/selection-sort/selection-sort-1.gif)

![](/images/brute-force/selection-sort/selection-sort-2.gif)

## Working of Selection Sort

1. Set the first element as `minimum`.

![Select first element as minimum](https://cdn.programiz.com/cdn/farfuture/w1ZKsO2Obaw1WV03_lamX22SVyapwhbiKoLkT5Raiiw/mtime:1582112622/sites/tutorial2program/files/Selection-sort-0-initial-array.png)

2. Compare `minimum` with the second element. If the second element is smaller than `minimum`, assign the second element as `minimum`.

Compare `minimum` with the third element. Again, if the third element is smaller, then assign `minimum` to the third element otherwise do nothing. The process goes on until the last element.

![Compare minimum with the remaining elements](https://cdn.programiz.com/cdn/farfuture/9jjqXX0fGtJE2ul2Mga20fvf_GkNlFAFsDMwrrwFzbQ/mtime:1582112622/sites/tutorial2program/files/Selection-sort-0-comparision.png)

3. After each iteration, minimum is placed in the front of the unsorted list.

![Swap the first with minimum](https://cdn.programiz.com/cdn/farfuture/6o-qergdHNq6D7eBxBi87yIuCLc7MJy2BHR4QHeNxxQ/mtime:1582112622/sites/tutorial2program/files/Selection-sort-0-swapping.png)

4. For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the elements are placed at their correct positions.

![The first iteration](https://cdn.programiz.com/cdn/farfuture/VPGtdVYag2vfHBotOaFEiYLqvWAD_Jwfnwur_AtKQHo/mtime:1582112622/sites/tutorial2program/files/Selection-sort-0.png)

![The second iteration](https://cdn.programiz.com/cdn/farfuture/hgxXpCSrHui7tbyJUQNnh8N5l8MPbdbL6dlstS4-G3M/mtime:1582112622/sites/tutorial2program/files/Selection-sort-1.png)

![The third iteration](https://cdn.programiz.com/cdn/farfuture/hgxXpCSrHui7tbyJUQNnh8N5l8MPbdbL6dlstS4-G3M/mtime:1582112622/sites/tutorial2program/files/Selection-sort-2.png)

![The fourth iteration](https://cdn.programiz.com/cdn/farfuture/hgxXpCSrHui7tbyJUQNnh8N5l8MPbdbL6dlstS4-G3M/mtime:1582112622/sites/tutorial2program/files/Selection-sort-3.png)

## Pseduocode

```
selectionSort(array, size)
  repeat (size - 1) times
  set the first unsorted element as the minimum
  for each of the unsorted elements
    if element < currentMinimum
      set element as new minimum
  swap minimum with first unsorted position
end selectionSort
```

## Complexity

| Name               | Best | Average | Worst | Memory |
| ------------------ | :--: | :-----: | :---: | :----: |
| **Selection sort** | n^2^ |  n^2^   | n^2^  |   1    |

---
title: "Linear Search"
category: "Brute Force"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/linearSearch.js"
timeComplexity:
  normal: O(n)
---

In computer science, linear search or sequential search is a
method for finding a target value within a list. It sequentially
checks each element of the list for the target value until a
match is found or until all the elements have been searched.
Linear search runs in at worst linear time and makes at most `n`
comparisons, where `n` is the length of the list.

![Linear Search](https://www.tutorialspoint.com/data_structures_algorithms/images/linear_search.gif)

## Pseudocode

```
Begin
for i = 0 to (n - 1) by 1 do
if (a[i] = item) then
set loc = i
Exit
endif
endfor
set loc = -1
End
```

## Complexity

**Time Complexity**: `O(n)` - since in worst case we're checking each element
exactly once.

| Name              | Best | Average | Worst |
| ----------------- | :--: | :-----: | :---: |
| **Linear Search** | O(1) |  O(n)   | O(n)  |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Linear_search)
- [TutorialsPoint](https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.htm)
- [Youtube](https://www.youtube.com/watch?v=SGU9duLE30w)

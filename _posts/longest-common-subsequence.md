---
title: "Longest Common Subsequence (LCS)"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/longestCommonSubsequence.js"
category: "Dynamic Programming"
timeComplexity:
  normal: O(n * m)
---

The longest common subsequence (LCS) problem is the problem of finding
the longest subsequence common to all sequences in a set of sequences
(often just two sequences). It differs from the longest common substring
problem: unlike substrings, subsequences are not required to occupy
consecutive positions within the original sequences.

## Application

The longest common subsequence problem is a classic computer science
problem, the basis of data comparison programs such as the diff utility,
and has applications in bioinformatics. It is also widely used by
revision control systems such as Git for reconciling multiple changes
made to a revision-controlled collection of files.

## Example

LCS for input Sequences `ABCDGH` and `AEDFHR` is `ADH` of length 3.

LCS for input Sequences `AGGTAB` and `GXTXAYB` is `GTAB` of length 4.

## Pseudocode

```
X and Y be two given sequences
Initialize a table LCS of dimension X.length * Y.length
X.label = X
Y.label = Y
LCS[0][] = 0
LCS[][0] = 0
Start from LCS[1][1]
Compare X[i] and Y[j]
    If X[i] = Y[j]
        LCS[i][j] = 1 + LCS[i-1, j-1]
        Point an arrow to LCS[i][j]
    Else
        LCS[i][j] = max(LCS[i-1][j], LCS[i][j-1])
        Point an arrow to max(LCS[i-1][j], LCS[i][j-1])
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)
- [YouTube](https://www.youtube.com/watch?v=NnD96abizww&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

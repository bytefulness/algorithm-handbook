---
title: "Bellman–Ford Algorithm"
category: "Dynamic Programming"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/bellmanFord.js"
timeComplexity:
  normal: O(|V||E|)
---

The Bellman–Ford algorithm is an algorithm that computes shortest
paths from a single source vertex to all of the other vertices
in a weighted digraph. It is slower than Dijkstra's algorithm
for the same problem, but more versatile, as it is capable of
handling graphs in which some of the edge weights are negative
numbers.

## Why would one ever have edges with negative weights in real life?

Negative weight edges might seem useless at first but they can explain a lot of phenomena like cashflow, the heat released/absorbed in a chemical reaction, etc.

For instance, if there are different ways to reach from one chemical A to another chemical B, each method will have sub-reactions involving both heat dissipation and absorption.

If we want to find the set of reactions where minimum energy is required, then we will need to be able to factor in the heat absorption as negative weights and heat dissipation as positive weights.

![Bellman-Ford](https://upload.wikimedia.org/wikipedia/commons/2/2e/Shortest_path_Dijkstra_vs_BellmanFord.gif)

## Pseudocode

```
unction bellmanFord(G, S)
  for each vertex V in G
    distance[V] <- infinite
      previous[V] <- NULL
  distance[S] <- 0

  for each vertex V in G
    for each edge (U,V) in G
      tempDistance <- distance[U] + edge_weight(U, V)
      if tempDistance < distance[V]
        distance[V] <- tempDistance
        previous[V] <- U

  for each edge (U,V) in G
    If distance[U] + edge_weight(U, V) < distance[V}
      Error: Negative Cycle Exists

  return distance[], previous[]
```

## Complexity

| Name                       |  Best  | Average |  Worst   | Space Complexity |
| -------------------------- | :----: | :-----: | :------: | :--------------: |
| **Bellman–Ford Algorithm** | `O(E)` | `O(V)`  | `O(V E)` |      `O(V)`      |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)
- [On YouTube by Michael Sambol](https://www.youtube.com/watch?v=obWXjtg0L64&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

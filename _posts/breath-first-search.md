---
title: "Breath First Search"
category: "Graphs"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/breadthFirstSearch.js"
timeComplexity:
  normal: O(V + E)
---

Breadth-first search (BFS) is an algorithm for traversing
or searching tree or graph data structures. It starts at
the tree root (or some arbitrary node of a graph, sometimes
referred to as a 'search key') and explores the neighbor
nodes first, before moving to the next level neighbors.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

## BFS Pseudocode

```
create a queue Q
mark v as visited and put v into Q
while Q is non-empty
    remove the head u of Q
    mark and enqueue all (unvisited) neighbours of u
```

## Rules of BFS Algorithm

Here, are important rules for using BFS algorithm:

- A queue (FIFO-First in First Out) data structure is used by BFS.
- You mark any node in the graph as root and start traversing the data from it.
- BFS traverses all the nodes in the graph and keeps dropping them as completed.
- BFS visits an adjacent unvisited node, marks it as done, and inserts it into a queue.
- Removes the previous vertex from the queue in case no adjacent vertex is found.
- BFS algorithm iterates until all the vertices in the graph are successfully traversed and marked as completed.
- There are no loops caused by BFS during the traversing of data from any node.

## Applications of BFS Algorithm

Let’s take a look at some of the real-life applications where a BFS algorithm implementation can be highly effective.

- Un-weighted Graphs: BFS algorithm can easily create the shortest path and a minimum spanning tree to visit all the vertices of the graph in the shortest time possible with high accuracy.
- P2P Networks: BFS can be implemented to locate all the nearest or neighboring nodes in a peer to peer network. This will find the required data faster.
- Web Crawlers: Search engines or web crawlers can easily build multiple levels of indexes by employing BFS. BFS implementation starts from the source, which is the web page, and then it visits all the links from that source.
- Navigation Systems: BFS can help find all the neighboring locations from the main or source location.
  Network Broadcasting: A broadcasted packet is guided by the BFS algorithm to find and reach all the nodes it has the address for.

  ## Summary

- A graph traversal is a unique process that requires the algorithm to visit, check, and/or update every single un-visited node in a tree-like structure. BFS algorithm works on a similar principle.
- The algorithm is useful for analyzing the nodes in a graph and constructing the shortest path of traversing through these.
- The algorithm traverses the graph in the smallest number of iterations and the shortest possible time.
- BFS selects a single node (initial or source point) in a graph and then visits all the nodes adjacent to the selected node. BFS accesses these nodes one by one.
- The visited and marked data is placed in a queue by BFS. A queue works on a first in first out basis. Hence, the element placed in the graph first is deleted first and printed as a result.
- The BFS algorithm can never get caught in an infinite loop.
- Due to high precision and robust implementation, BFS is used in multiple real-life solutions like P2P networks, Web Crawlers, and Network Broadcasting.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Tree Traversals (Inorder, Preorder and Postorder)](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [BFS vs DFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
- [BFS Visualization](https://www.cs.usfca.edu/~galles/visualization/BFS.html)

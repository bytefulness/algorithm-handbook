---
title: "Depth First Search"
category: "Graphs"
algorithmUrl: "https://github.com/eakyel/javascript-algorithms/blob/main/depthFirstSearch.js"
timeComplexity:
  normal: O(V + E)
---

Depth-first search (DFS) is an algorithm for traversing or
searching tree or graph data structures. One starts at
the root (selecting some arbitrary node as the root in
the case of a graph) and explores as far as possible
along each branch before backtracking.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

A standard DFS implementation puts each vertex of the graph into one of two categories:

1. Visited
2. Not Visited

The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

The DFS algorithm works as follows:

1. Start by putting any one of the graph's vertices on top of a stack.
2. Take the top item of the stack and add it to the visited list.
3. Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.
4. Keep repeating steps 2 and 3 until the stack is empty.

## DFS Example

Let's see how the Depth First Search algorithm works with an example. We use an undirected graph with 5 vertices.

![Undirected graph with 5 vertices](https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-0.png)

We start from vertex 0, the DFS algorithm starts by putting it in the Visited list and putting all its adjacent vertices in the stack.

![Visit the element and put it in the visited list](https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-1.png)

Next, we visit the element at the top of stack i.e. 1 and go to its adjacent nodes. Since 0 has already been visited, we visit 2 instead.

![Visit the element at the top of stack](https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-2.png)

Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the top of the stack and visit it.

![Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the top of the stack and visit it.](https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-3.png)

![Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the top of the stack and visit it.](https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-4.png)

After we visit the last element 3, it doesn't have any unvisited adjacent nodes, so we have completed the Depth First Traversal of the graph.

![After we visit the last element 3, it doesn't have any unvisited adjacent nodes, so we have completed the Depth First Traversal of the graph.](https://cdn.programiz.com/sites/tutorial2program/files/graph-dfs-step-5.png)

## DFS Pseudocode

The pseudocode for DFS is shown below. In the init() function, notice that we run the DFS function on every node. This is because the graph might have two different disconnected parts so to make sure that we cover every vertex, we can also run the DFS algorithm on every node.

```
DFS(G, u)
    u.visited = true
    for each v ∈ G.Adj[u]
        if v.visited == false
            DFS(G,v)

init() {
    For each u ∈ G
        u.visited = false
     For each u ∈ G
       DFS(G, u)
}
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)
- [Tree Traversals (Inorder, Preorder and Postorder)](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [BFS vs DFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
- [DFS Visualization](https://www.cs.usfca.edu/~galles/visualization/DFS.html)

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
    const graph = Array.from({ length: n }, () => []);
    
    // Build adjacency list
    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    // Store the minimum AND-cost per connected component
    const componentAnd = new Map();
    const visited = new Array(n).fill(false);

    function bfs(start) {
        const queue = [[start, (1 << 17) - 1]];
        const component = new Map();
        component.set(start, (1 << 17) - 1);
        visited[start] = true;

        while (queue.length) {
            const [node, cost] = queue.shift();
            for (const [neighbor, weight] of graph[node]) {
                const newCost = cost & weight;
                if (!component.has(neighbor) || newCost < component.get(neighbor)) {
                    component.set(neighbor, newCost);
                    queue.push([neighbor, newCost]);
                    visited[neighbor] = true;
                }
            }
        }
        return component;
    }

    // Find all connected components and preprocess min AND-costs
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const component = bfs(i);
            for (const [node, cost] of component) {
                componentAnd.set(node, component);
            }
        }
    }

    // Answer the queries in O(1) using precomputed values
    return query.map(([s, t]) => {
        if (!componentAnd.has(s) || !componentAnd.has(t)) return -1;
        const component = componentAnd.get(s);
        return component.has(t) ? component.get(t) : -1;
    });
};

// Example usage:
console.log(minimumCost(5, [[0, 1, 7], [1, 3, 7], [1, 2, 1]], [[0, 3], [3, 4]])); // Output: [1, -1]
console.log(minimumCost(3, [[0, 2, 7], [0, 1, 15], [1, 2, 6], [1, 2, 1]], [[1, 2]])); // Output: [0]

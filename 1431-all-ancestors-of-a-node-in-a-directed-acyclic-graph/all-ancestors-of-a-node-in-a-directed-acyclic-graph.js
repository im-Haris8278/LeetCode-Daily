/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) 
{
    const graph = Array.from({ length: n }, () => []);
    const inDegree = Array(n).fill(0);
    const ancestors = Array.from({ length: n }, () => new Set());

    for (const [from, to] of edges) 
    {
        graph[from].push(to);
        inDegree[to]++;
    }

    const queue = [];
    
    for (let i = 0; i < n; i++) 
    {
        if (inDegree[i] === 0) 
        {
            queue.push(i);
        }
    }

    while (queue.length > 0) 
    {
        const node = queue.shift();
        
        for (const neighbor of graph[node]) 
        {
            ancestors[neighbor].add(node);
            for (const ancestor of ancestors[node]) 
            {
                ancestors[neighbor].add(ancestor);
            }

            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) 
            {
                queue.push(neighbor);
            }
        }
    }

    return ancestors.map(set => Array.from(set).sort((a, b) => a - b));
};

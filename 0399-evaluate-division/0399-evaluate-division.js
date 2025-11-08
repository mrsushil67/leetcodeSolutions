/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};

    for (let i = 0; i < equations.length; i++) {
        const [A, B] = equations[i];
        const val = values[i];

        if (!graph[A]) graph[A] = {};
        if (!graph[B]) graph[B] = {};

        graph[A][B] = val;
        graph[B][A] = 1 / val;
    }

    function dfs(start, end, visited) {
        if (!(start in graph) || !(end in graph)) return -1.0;
        if (start === end) return 1.0;

        visited.add(start);

        for (let neighbor in graph[start]) {
            if (!visited.has(neighbor)) {
                const val = dfs(neighbor, end, visited);
                if (val !== -1.0) {
                    return graph[start][neighbor] * val;
                }
            }
        }
        return -1.0;
    }

    const result = [];
    for (let [C, D] of queries) {
        result.push(dfs(C, D, new Set()));
    }

    return result;
}
/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    const n = bombs.length;

    const graph = Array.from({length: n}, () => []);
    
    for (let i = 0; i < n; i++) {
        const [x1, y1, r1] = bombs[i];
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            const [x2, y2] = bombs[j];
            const dx = x1 - x2, dy = y1 - y2;
            if (dx*dx + dy*dy <= r1*r1) {
                graph[i].push(j);
            }
        }
    }
    
    function dfs(start) {
        const stack = [start];
        const visited = new Set([start]);
        
        while (stack.length) {
            const cur = stack.pop();
            for (const nxt of graph[cur]) {
                if (!visited.has(nxt)) {
                    visited.add(nxt);
                    stack.push(nxt);
                }
            }
        }
        
        return visited.size;
    }
    
    let maxDetonations = 0;
    
    for (let i = 0; i < n; i++) {
        maxDetonations = Math.max(maxDetonations, dfs(i));
    }
    
    return maxDetonations;
};
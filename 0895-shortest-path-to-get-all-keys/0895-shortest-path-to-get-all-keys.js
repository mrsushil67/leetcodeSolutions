/**
 * @param {string[]} grid
 * @return {number}
 */
function shortestPathAllKeys(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var totalKeys = 0;
    var startR = 0, startC = 0;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var cell = grid[i][j];
            if (cell === '@') {
                startR = i;
                startC = j;
            } else if (cell >= 'a' && cell <= 'f') {
                var keyIndex = cell.charCodeAt(0) - 97;
                if (keyIndex + 1 > totalKeys) totalKeys = keyIndex + 1;
            }
        }
    }

    var targetMask = (1 << totalKeys) - 1;

    var dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    var queue = [[startR, startC, 0, 0]];
    var visited = new Set();
    visited.add(startR + "," + startC + ",0");

    while (queue.length > 0) {
        var front = queue.shift();
        var r = front[0], c = front[1], keys = front[2], steps = front[3];

        for (var d = 0; d < 4; d++) {
            var nr = r + dirs[d][0];
            var nc = c + dirs[d][1];
            var nkeys = keys;

            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            var cell = grid[nr][nc];
            if (cell === '#') continue;

            if (cell >= 'A' && cell <= 'F') {
                var lockBit = 1 << (cell.charCodeAt(0) - 65);
                if ((keys & lockBit) === 0) continue;
                
            }

            if (cell >= 'a' && cell <= 'f') {
                nkeys = keys | (1 << (cell.charCodeAt(0) - 97));
            }

            if (nkeys === targetMask) {
                return steps + 1;
            }

            var state = nr + "," + nc + "," + nkeys;
            if (!visited.has(state)) {
                visited.add(state);
                queue.push([nr, nc, nkeys, steps + 1]);
            }
        }
    }

    return -1;
}
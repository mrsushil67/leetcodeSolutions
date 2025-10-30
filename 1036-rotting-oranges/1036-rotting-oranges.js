/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var queue = [];
    var fresh = 0;
    var minutes = 0;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }

    if (fresh === 0) return 0;

    var dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length > 0 && fresh > 0) {
        var size = queue.length;
        for (var s = 0; s < size; s++) {
            var cell = queue.shift();
            var r = cell[0], c = cell[1];

            for (var d = 0; d < 4; d++) {
                var nr = r + dirs[d][0];
                var nc = c + dirs[d][1];

                if (nr < 0 || nc < 0 || nr >= m || nc >= n) continue;
                if (grid[nr][nc] !== 1) continue;

                grid[nr][nc] = 2;
                fresh--;
                queue.push([nr, nc]);
            }
        }
        minutes++;
    }

    return fresh === 0 ? minutes : -1;
}
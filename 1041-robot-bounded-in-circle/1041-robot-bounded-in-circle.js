/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(s) {
    let x = 0, y = 0, d = 0;
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];

    for (let c of s) {
        if (c === 'G') {
            x += dx[d];
            y += dy[d];
        } else if (c === 'L') {
            d = (d + 3) % 4;
        } else {
            d = (d + 1) % 4;
        }
    }

    return (x === 0 && y === 0) || d !== 0;
};

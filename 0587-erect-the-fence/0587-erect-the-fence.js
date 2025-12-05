/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    if (trees.length <= 1) return trees;

    trees.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

    const cross = (p, q, r) => {
        return (q[0] - p[0]) * (r[1] - q[1]) -
               (q[1] - p[1]) * (r[0] - q[0]);
    };

    const lower = [];
    for (let p of trees) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) < 0) {
            lower.pop();
        }
        lower.push(p);
    }

    const upper = [];
    for (let i = trees.length - 1; i >= 0; i--) {
        let p = trees[i];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) < 0) {
            upper.pop();
        }
        upper.push(p);
    }

    const hull = lower.concat(upper);

    const seen = new Set();
    const res = [];

    for (let p of hull) {
        const key = p[0] + "," + p[1];
        if (!seen.has(key)) {
            seen.add(key);
            res.push(p);
        }
    }

    return res;
};
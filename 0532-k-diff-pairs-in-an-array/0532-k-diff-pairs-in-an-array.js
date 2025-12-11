/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) return 0;

    let map = new Map();
    for (let x of nums) map.set(x, (map.get(x) || 0) + 1);

    let count = 0;

    if (k === 0) {
        for (let [x, f] of map)
            if (f > 1) count++;
        return count;
    }

    for (let x of map.keys())
        if (map.has(x + k)) count++;

    return count;
}
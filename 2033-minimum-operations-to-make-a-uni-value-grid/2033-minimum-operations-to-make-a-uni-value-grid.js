/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    const nums = [];
    
    for (let row of grid) {
        for (let val of row) nums.push(val);
    }
    
    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    const median = nums[Math.floor(n / 2)];
    
    let ops = 0;
    for (let val of nums) {
        if (Math.abs(val - median) % x !== 0) return -1;
        ops += Math.abs(val - median) / x;
    }
    
    return ops;
};

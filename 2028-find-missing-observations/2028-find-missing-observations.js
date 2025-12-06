/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const m = rolls.length;
    const knownSum = rolls.reduce((a,b) => a+b, 0);
    
    const totalSum = mean * (n + m);
    const missingSum = totalSum - knownSum;
    
    if (missingSum < n || missingSum > 6 * n) return [];
    
    const res = new Array(n).fill(1);
    let remaining = missingSum - n;
    
    for (let i = 0; i < n; i++) {
        const add = Math.min(5, remaining);
        res[i] += add;
        remaining -= add;
    }
    
    return res;
};
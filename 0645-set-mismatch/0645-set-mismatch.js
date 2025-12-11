/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let seen = new Array(n + 1);
    for (let i = 0; i <= n; i++) seen[i] = 0;

    let dup = 0, miss = 0;

    for (let x of nums) seen[x]++;

    for (let i = 1; i <= n; i++) {
        if (seen[i] === 2) dup = i;
        else if (seen[i] === 0) miss = i;
    }

    return [dup, miss];
}
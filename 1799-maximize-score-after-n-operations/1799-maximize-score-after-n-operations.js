/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    const m = nums.length;
    const n = m / 2;

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    const memo = new Array(1 << m).fill(-1);

    function dp(mask) {
        if (memo[mask] !== -1) return memo[mask];

        let used = 0;
        for (let k = 0; k < m; k++) {
            if ((mask >> k) & 1) used++;
        }
        if (used === m) return 0;

        let op = used / 2 + 1;

        let best = 0;

        for (let i = 0; i < m; i++) {
            if ((mask >> i) & 1) continue;

            for (let j = i + 1; j < m; j++) {
                if ((mask >> j) & 1) continue;

                let newMask = mask | (1 << i) | (1 << j);
                let score = op * gcd(nums[i], nums[j]) + dp(newMask);

                if (score > best) best = score;
            }
        }

        memo[mask] = best;
        return best;
    }

    return dp(0);
}


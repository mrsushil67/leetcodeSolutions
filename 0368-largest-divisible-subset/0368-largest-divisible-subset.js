/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let m = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[m]) m = j;
        }
        let t = nums[i];
        nums[i] = nums[m];
        nums[m] = t;
    }

    let dp = [];
    let prev = [];
    for (let i = 0; i < n; i++) {
        dp[i] = 1;
        prev[i] = -1;
    }

    let maxIdx = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > dp[maxIdx]) maxIdx = i;
    }

    let res = [];
    let idx = maxIdx;
    while (idx !== -1) {
        let len = res.length;
        res[len] = nums[idx];
        idx = prev[idx];
    }

    let left = 0, right = res.length - 1;
    while (left < right) {
        let v = res[left];
        res[left] = res[right];
        res[right] = v;
        left++;
        right--;
    }

    return res;
}

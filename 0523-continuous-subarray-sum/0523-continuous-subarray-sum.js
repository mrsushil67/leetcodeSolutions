/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = {};
    map[0] = -1; 

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        let r = k === 0 ? sum : sum % k;
        if (r < 0) r += k;

        if (map[r] !== undefined) {
            if (i - map[r] > 1) return true;
        } else {
            map[r] = i;
        }
    }
    return false;
}

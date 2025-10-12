/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numObj = {};
    for(let i = 0;i<nums.length; i++){
        if (numObj[nums[i]] !== undefined && i - numObj[nums[i]] <= k) {
            return true
        }
        numObj[nums[i]] = i
    }
    return false;
};
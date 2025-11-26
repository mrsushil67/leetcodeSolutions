/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = {};
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];

        if (count[val] === undefined) {
            count[val] = 0;
        }
        result += count[val];
        count[val]++;
    }

    return result;
}

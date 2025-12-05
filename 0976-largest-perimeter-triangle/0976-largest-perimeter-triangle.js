/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = nums.length - 1; i >= 2; i--) {
        let a = nums[i - 2];
        let b = nums[i - 1];
        let c = nums[i];

        if (a + b > c) {
            return a + b + c;
        }
    }

    return 0;
};
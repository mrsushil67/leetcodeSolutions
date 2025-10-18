/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    if (nums.length === 0) {
        return -1;
    }

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if ((mid === 0 || nums[mid - 1] <= nums[mid]) && 
            (mid === nums.length - 1 || nums[mid + 1] <= nums[mid])) {
            return mid;
        }

        if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
};

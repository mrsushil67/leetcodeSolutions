/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;

    while(mid <= end){
        if(nums[mid] === 0){
            let temp = nums[start];
            nums[start] = nums[mid];
            nums[mid] = temp;
            start++;
            mid++;
        }else if(nums[mid] === 1){
            mid++;
        }else if(nums[mid] === 2){
            let temp = nums[end];
            nums[end] = nums[mid];
            nums[mid] = temp;
            end--;
        }
    }
};
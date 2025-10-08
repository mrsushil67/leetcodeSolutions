/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    if(nums.length === 0) return 0;
    let first = 0;
    let last = nums.length - 1;

    while(first <= last){
        let mid = Math.floor(first + (last-first)/2);
        if(nums[mid] == target){
           return mid;
        }
        else if(nums[mid] > target){
           last = mid - 1;
        }
        else{
           first = mid + 1
        }
    }
    return first;
}; 
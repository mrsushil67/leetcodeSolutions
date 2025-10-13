/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let num = nums.length;
    let sumofNumber = num*(num+1)/2;
    let suggestedNum = 0;

    for(let i = 0;i < nums.length; i++){
        suggestedNum += nums[i];
    }
    return sumofNumber - suggestedNum;
};
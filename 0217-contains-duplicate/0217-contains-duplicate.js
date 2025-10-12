/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = {};
    for(let i = 0;i < nums.length; i++){
        let num = nums[i];

        if(seen[num] === true){
            return true;
        }
        seen[num] = true;
    }
    return false;
};
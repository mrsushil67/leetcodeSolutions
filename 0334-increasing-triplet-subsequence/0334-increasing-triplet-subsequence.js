/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let n = nums.length;
    if(n < 3) return false;

    let first = 2147483647;
    let second = 2147483647;

    for(let i = 0; i<n; i++){
        let x = nums[i];

        if(x <= first){
            first = x;
        }else if(x <= second){
            second = x
        }else{
            return true;
        }
    }
    return false;
};
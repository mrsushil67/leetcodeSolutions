/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length

    if(n === 0 )  return 0;
    if(n === 1 )  return nums[0];

    let dp = []
    dp[0] = nums[0];
    dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];

    for(let i = 2; i < n; i++ ){
        let robthis = nums[i] + dp[i - 2]
        let skipthis = dp[i - 1]

        dp[i] = robthis > skipthis ? robthis : skipthis;
    }
    return dp[n - 1];
};
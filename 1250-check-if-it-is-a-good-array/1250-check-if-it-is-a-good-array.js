/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    let g = nums[0];
    for (let i = 1; i < nums.length; i++) {
        g = gcd(g, nums[i]);
        if (g === 1) return true;
    }

    return g === 1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
    function isPrime(x) {
        if (x < 2) return false;
        if (x % 2 === 0) return x === 2;
        for (let i = 3; i * i <= x; i += 2) {
            if (x % i === 0) return false;
        }
        return true;
    }

    let first = -1, last = -1;

    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i])) {
            if (first === -1) first = i;
            last = i;
        }
    }

    if (first === -1) return 0;
    return last - first;
}

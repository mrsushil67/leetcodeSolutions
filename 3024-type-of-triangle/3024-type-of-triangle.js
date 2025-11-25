/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const [a, b, c] = nums;

    // triangle inequality check
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }

    // all equal
    if (a === b && b === c) return "equilateral";

    // exactly two equal
    if (a === b || a === c || b === c) return "isosceles";

    // all different
    return "scalene";
}



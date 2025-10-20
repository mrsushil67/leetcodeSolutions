/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;

    if (m > n) {
        var temp = nums1;
        nums1 = nums2;
        nums2 = temp;

        var tmpLen = m;
        m = n;
        n = tmpLen;
    }

    var left = 0;
    var right = m;
    var totalLeft = (m + n + 1) >> 1;

    while (left <= right) {
        var i = (left + right) >> 1;
        var j = totalLeft - i;

        var A_left = (i === 0) ? -2147483648 : nums1[i - 1];
        var A_right = (i === m) ? 2147483647 : nums1[i];
        var B_left = (j === 0) ? -2147483648 : nums2[j - 1];
        var B_right = (j === n) ? 2147483647 : nums2[j];

        if (A_left <= B_right && B_left <= A_right) {
            var leftMax = A_left > B_left ? A_left : B_left;
            var rightMin = A_right < B_right ? A_right : B_right;

            if (((m + n) & 1) === 1) {
                return leftMax;
            } else {
                return (leftMax + rightMin) / 2;
            }
        } else if (A_left > B_right) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }

    return 0;
};

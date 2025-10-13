/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     var max = 0;
    var left = 0;
    var right = height.length - 1;

    while (left < right) {
        var h = Math.min(height[left], height[right]);
        var w = right - left;
        var area = h * w;
        if (area > max) {
            max = area;
        }

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};
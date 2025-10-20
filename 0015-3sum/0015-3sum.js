/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var n = nums.length;
    var result = [];

    function quickSort(arr, left, right) {
        if (left >= right) return;
        var pivot = arr[(left + right) >> 1];
        var i = left;
        var j = right;
        while (i <= j) {
            while (arr[i] < pivot) i++;
            while (arr[j] > pivot) j--;
            if (i <= j) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
        }
        if (left < j) quickSort(arr, left, j);
        if (i < right) quickSort(arr, i, right);
    }

    quickSort(nums, 0, n - 1);

    for (var i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        var left = i + 1;
        var right = n - 1;

        while (left < right) {
            var s = nums[i] + nums[left] + nums[right];

            if (s === 0) {
                var triplet = [nums[i], nums[left], nums[right]];
                result.push(triplet);

                var currentLeft = nums[left];
                while (left < right && nums[left] === currentLeft) {
                    left++;
                }

                var currentRight = nums[right];
                while (left < right && nums[right] === currentRight) {
                    right--;
                }

            } else if (s < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

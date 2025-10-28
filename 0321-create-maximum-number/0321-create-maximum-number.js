/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
function maxNumber(nums1, nums2, k) {
    function maxSubarray(nums, size) {
        const stack = [];
        let drop = nums.length - size;
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            while (drop > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
                stack.pop();
                drop--;
            }
            stack.push(num);
        }
        return stack.slice(0, size);
    }

    function greater(nums1, i, nums2, j) {
        while (i < nums1.length && j < nums2.length && nums1[i] === nums2[j]) {
            i++;
            j++;
        }
        return j === nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
    }
    function merge(nums1, nums2) {
        const result = [];
        let i = 0, j = 0;
        while (i < nums1.length || j < nums2.length) {
            if (greater(nums1, i, nums2, j)) {
                result.push(nums1[i++]);
            } else {
                result.push(nums2[j++]);
            }
        }
        return result;
    }

    let best = [];
    const start = Math.max(0, k - nums2.length);
    const end = Math.min(k, nums1.length);

    for (let i = start; i <= end; i++) {
        const part1 = maxSubarray(nums1, i);
        const part2 = maxSubarray(nums2, k - i);
        const candidate = merge(part1, part2);
        if (greater(candidate, 0, best, 0)) {
            best = candidate;
        }
    }

    return best;
}


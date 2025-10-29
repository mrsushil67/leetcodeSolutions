/**
 * @param {number[]} nums
 * @return {number}
 */
function reversePairs(nums) {
    function mergeSort(start, end) {
        if (start >= end) return 0;
        const mid = Math.floor((start + end) / 2);
        let count = mergeSort(start, mid) + mergeSort(mid + 1, end);
        
        let j = mid + 1;
        for (let i = start; i <= mid; i++) {
            while (j <= end && nums[i] > 2 * nums[j]) j++;
            count += j - (mid + 1);
        }
        
        const temp = [];
        let left = start, right = mid + 1;
        while (left <= mid && right <= end) {
            if (nums[left] <= nums[right]) temp.push(nums[left++]);
            else temp.push(nums[right++]);
        }
        while (left <= mid) temp.push(nums[left++]);
        while (right <= end) temp.push(nums[right++]);
        
        for (let i = start; i <= end; i++) {
            nums[i] = temp[i - start];
        }
        
        return count;
    }
    
    return mergeSort(0, nums.length - 1);
}
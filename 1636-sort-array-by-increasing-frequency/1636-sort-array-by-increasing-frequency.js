/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freq = {};
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = arr.length >> 1;
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        let i = 0, j = 0, out = [];
        while (i < left.length && j < right.length) {
            let a = left[i], b = right[j];
            if (freq[a] < freq[b] || (freq[a] === freq[b] && a > b)) out.push(a), i++;
            else out.push(b), j++;
        }
        while (i < left.length) out.push(left[i++]);
        while (j < right.length) out.push(right[j++]);
        return out;
    }

    return mergeSort(nums);
}

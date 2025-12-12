/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const MOD = 1e9 + 7;
    let sums = [];

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            sums.push(sum);
        }
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = arr.length >> 1;
        const leftArr = mergeSort(arr.slice(0, mid));
        const rightArr = mergeSort(arr.slice(mid));

        let i = 0, j = 0, out = [];
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] < rightArr[j]) out.push(leftArr[i++]);
            else out.push(rightArr[j++]);
        }
        while (i < leftArr.length) out.push(leftArr[i++]);
        while (j < rightArr.length) out.push(rightArr[j++]);
        return out;
    }

    sums = mergeSort(sums);

    let res = 0;
    for (let i = left - 1; i < right; i++) {
        res = (res + sums[i]) % MOD;
    }

    return res;
}

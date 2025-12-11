/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let n = nums.length;
    let arr = new Array(n);
    let copy = nums.slice().sort((a,b)=>a-b);

    let mid = Math.floor((n - 1) / 2);
    let end = n - 1;
    let i = mid, j = end, k = 0;

    while (k < n) {
        if (k % 2 === 0) {
            arr[k] = copy[i];
            i--;
        } else {
            arr[k] = copy[j];
            j--;
        }
        k++;
    }

    for (let x = 0; x < n; x++) nums[x] = arr[x];
}
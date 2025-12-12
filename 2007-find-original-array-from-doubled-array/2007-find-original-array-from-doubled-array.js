/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if (changed.length % 2 !== 0) return [];

    let freq = {};
    for (let i = 0; i < changed.length; i++) {
        freq[changed[i]] = (freq[changed[i]] || 0) + 1;
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = arr.length >> 1;
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        let i = 0, j = 0, out = [];
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) out.push(left[i++]);
            else out.push(right[j++]);
        }
        while (i < left.length) out.push(left[i++]);
        while (j < right.length) out.push(right[j++]);
        return out;
    }

    let keys = Object.keys(freq).map(Number);
    keys = mergeSort(keys);

    let original = [];
    for (let k of keys) {
        while (freq[k] > 0) {
            let double = k * 2;
            if (!freq[double] || freq[double] <= 0) return [];
            original.push(k);
            freq[k]--;
            freq[double]--;
        }
    }

    return original;
}

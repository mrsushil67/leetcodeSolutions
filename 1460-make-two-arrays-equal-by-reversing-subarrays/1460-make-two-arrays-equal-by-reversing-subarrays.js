/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let freq = {};
    for (let i = 0; i < target.length; i++) {
        let t = target[i], a = arr[i];
        freq[t] = (freq[t] || 0) + 1;
        freq[a] = (freq[a] || 0) - 1;
    }
    for (let k in freq) {
        if (freq[k] !== 0) return false;
    }
    return true;
}

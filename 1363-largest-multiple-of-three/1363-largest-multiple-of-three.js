/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let mid = arr.length >> 1;
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        let i = 0, j = 0, out = [];
        while (i < left.length && j < right.length) {
            if (left[i] > right[j]) out.push(left[i++]);
            else out.push(right[j++]);
        }
        while (i < left.length) out.push(left[i++]);
        while (j < right.length) out.push(right[j++]);
        return out;
    }

    let sum = 0;
    for (let i = 0; i < digits.length; i++) sum += digits[i];

    let mod = sum % 3;
    let rem1 = [], rem2 = [];
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 3 === 1) rem1.push(i);
        else if (digits[i] % 3 === 2) rem2.push(i);
    }

    function removeOne(modGroup) {
        let minIdx = -1;
        for (let i = 0; i < modGroup.length; i++) {
            if (minIdx === -1 || digits[modGroup[i]] < digits[minIdx]) {
                minIdx = modGroup[i];
            }
        }
        if (minIdx !== -1) digits[minIdx] = -1;
    }

    function removeTwo(modGroup) {
        let first = -1, second = -1;
        for (let i = 0; i < modGroup.length; i++) {
            let idx = modGroup[i];
            if (first === -1 || digits[idx] < digits[first]) {
                second = first;
                first = idx;
            } else if (second === -1 || digits[idx] < digits[second]) {
                second = idx;
            }
        }
        if (first !== -1 && second !== -1) {
            digits[first] = -1;
            digits[second] = -1;
        }
    }

    if (mod === 1) {
        if (rem1.length > 0) removeOne(rem1);
        else removeTwo(rem2);
    } else if (mod === 2) {
        if (rem2.length > 0) removeOne(rem2);
        else removeTwo(rem1);
    }

    let arr = [];
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== -1) arr.push(digits[i]);
    }

    if (arr.length === 0) return "";
    arr = mergeSort(arr);

    if (arr[0] === 0) return "0";

    let s = "";
    for (let i = 0; i < arr.length; i++) s += arr[i];
    return s;
}

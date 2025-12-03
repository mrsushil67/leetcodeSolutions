/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let digits = [];
    let temp = n;
    while (temp > 0) {
        digits.unshift(temp % 10);
        temp = Math.floor(temp / 10);
    }

    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    if (i < 0) return -1;

    let j = digits.length - 1;
    while (j > i && digits[j] <= digits[i]) {
        j--;
    }

    let tmp = digits[i];
    digits[i] = digits[j];
    digits[j] = tmp;

    let start = i + 1, end = digits.length - 1;
    while (start < end) {
        let t = digits[start];
        digits[start] = digits[end];
        digits[end] = t;
        start++;
        end--;
    }

    let result = 0;
    for (let k = 0; k < digits.length; k++) {
        result = result * 10 + digits[k];
    }

    if (result > 2147483647) return -1;

    return result;
}
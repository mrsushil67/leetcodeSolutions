/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const digits = String(n).split('').map(Number);
    let sum = 0;
    let sign = 1;

    for (const d of digits) {
        sum += sign * d;
        sign *= -1;
    }

    return sum;
};

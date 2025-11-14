/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    let divisor = 5;

    while (divisor <= n) {
        count += Math.floor(n / divisor);
        divisor *= 5;
    }

    return count;
}
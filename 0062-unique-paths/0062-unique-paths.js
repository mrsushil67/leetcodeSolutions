/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let a = m + n - 2;
    let b = Math.min(m - 1, n - 1);
    let result = 1;

    for (let i = 1; i <= b; i++) {
        result = result * (a - b + i) / i;
    }

    return Math.round(result);

}
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        return 1 / power(x, -n);
    }
    return power(x, n);
}

function power(x, n) {
    if (n === 0) return 1;

    let half = power(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return half * half;
    }
    return half * half * x;
}